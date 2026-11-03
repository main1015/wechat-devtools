"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unloadRemoteExtension = exports.loadRemoteExtension = void 0;
const vscode = __importStar(require("vscode"));
const url_1 = require("./url");
// ============================================================
// 远程代码加载器
//
// 流程：fetch → 写临时文件 → 清缓存 require → activate
// ============================================================
let remoteModule = null;
let cachedFsPath = null;
const LOG_PREFIX = '[mp-agent-audit]';
function errorMessage(err) {
    return err instanceof Error ? err.message : String(err);
}
function requireWechatIdeModule() {
    try {
        return require('wechatide');
    }
    catch (err) {
        console.warn(`${LOG_PREFIX} require("wechatide") failed in loader: ${errorMessage(err)}`);
        return undefined;
    }
}
/** 从远程服务器获取代码文本 */
async function fetchRemoteCode(serverUrl) {
    const url = (0, url_1.joinRemoteUrl)(serverUrl, '/server-core/extension.js');
    console.log(`${LOG_PREFIX} remote fetch start: ${url}`);
    const resp = await fetch(url);
    console.log(`${LOG_PREFIX} remote fetch response: HTTP ${resp.status} ${resp.statusText}`);
    if (!resp.ok) {
        throw new Error(`无法获取远程扩展代码: HTTP ${resp.status}`);
    }
    const code = await resp.text();
    console.log(`${LOG_PREFIX} remote fetch completed: ${Buffer.byteLength(code, 'utf-8')} bytes`);
    return code;
}
/** 将代码写入临时文件，返回本地路径 */
async function writeTempScript(context, code) {
    console.log(`${LOG_PREFIX} remote script write start: ${context.globalStorageUri.fsPath}`);
    await vscode.workspace.fs.createDirectory(context.globalStorageUri);
    const uri = vscode.Uri.joinPath(context.globalStorageUri, 'remote.js');
    await vscode.workspace.fs.writeFile(uri, Buffer.from(code, 'utf-8'));
    console.log(`${LOG_PREFIX} remote script written: ${uri.fsPath}`);
    return uri.fsPath;
}
/** 清除旧缓存后 require 加载新模块 */
function loadModule(fsPath) {
    if (cachedFsPath) {
        console.log(`${LOG_PREFIX} clearing previous remote module cache: ${cachedFsPath}`);
        delete require.cache[require.resolve(cachedFsPath)];
    }
    else {
        console.log(`${LOG_PREFIX} no previous remote module cache to clear`);
    }
    console.log(`${LOG_PREFIX} requiring remote module: ${fsPath}`);
    return require(fsPath);
}
/** 读取宿主环境注入的 wechatide 全局变量 */
function resolveHostWechatIde(explicitWechatIde) {
    if (explicitWechatIde && typeof explicitWechatIde.value !== 'undefined') {
        return explicitWechatIde;
    }
    const requiredWechatIde = requireWechatIdeModule();
    if (typeof requiredWechatIde !== 'undefined') {
        return { source: 'loader.require("wechatide")', value: requiredWechatIde };
    }
    const globalWechatIde = globalThis.wechatide;
    if (typeof globalWechatIde !== 'undefined') {
        return { source: 'globalThis.wechatide', value: globalWechatIde };
    }
    if (typeof wechatide !== 'undefined') {
        return { source: 'wechatide', value: wechatide };
    }
    return undefined;
}
/** 将宿主 wechatide 挂到远端模块执行时可见的 Node global 上 */
function bridgeWechatIdeGlobal(explicitWechatIde) {
    const hostWechatIde = resolveHostWechatIde(explicitWechatIde);
    if (typeof hostWechatIde === 'undefined') {
        console.warn(`${LOG_PREFIX} wechatide global not found; remote extension will load without it`);
        return;
    }
    globalThis.wechatide = hostWechatIde.value;
    if (typeof global !== 'undefined') {
        global.wechatide = hostWechatIde.value;
    }
    console.log(`${LOG_PREFIX} wechatide global bridged from ${hostWechatIde.source}`);
}
// ---- 对外接口 ----
/** 从远程服务器加载扩展代码并激活 */
async function loadRemoteExtension(context, serverUrl, hostWechatIde) {
    console.log(`${LOG_PREFIX} remote load start (server: ${serverUrl})`);
    const code = await fetchRemoteCode(serverUrl);
    const fsPath = await writeTempScript(context, code);
    bridgeWechatIdeGlobal(hostWechatIde);
    const mod = loadModule(fsPath);
    console.log(`${LOG_PREFIX} activating remote module`);
    mod.activate(context);
    remoteModule = mod;
    cachedFsPath = fsPath;
    console.log(`${LOG_PREFIX} remote extension loaded (server: ${serverUrl})`);
}
exports.loadRemoteExtension = loadRemoteExtension;
/** 卸载远程模块（调用 deactivate 并清理状态） */
function unloadRemoteExtension() {
    if (!remoteModule) {
        console.log(`${LOG_PREFIX} no remote extension to unload`);
        return;
    }
    console.log(`${LOG_PREFIX} remote unload start`);
    remoteModule.deactivate?.();
    remoteModule = null;
    console.log(`${LOG_PREFIX} remote unload completed`);
}
exports.unloadRemoteExtension = unloadRemoteExtension;
//# sourceMappingURL=loader.js.map
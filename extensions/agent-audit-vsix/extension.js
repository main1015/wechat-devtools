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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const loader_1 = require("./loader");
const config_1 = require("./config");
const LOG_PREFIX = '[mp-agent-audit]';
function errorMessage(err) {
    return err instanceof Error ? err.message : String(err);
}
function requireWechatIdeModule() {
    try {
        return require('wechatide');
    }
    catch (err) {
        console.warn(`${LOG_PREFIX} require("wechatide") failed: ${errorMessage(err)}`);
        return undefined;
    }
}
function resolveShellWechatIde() {
    const requiredWechatIde = requireWechatIdeModule();
    if (typeof requiredWechatIde !== 'undefined') {
        return { source: 'extension.require("wechatide")', value: requiredWechatIde };
    }
    if (typeof wechatide !== 'undefined') {
        return { source: 'extension.wechatide', value: wechatide };
    }
    const globalWechatIde = globalThis.wechatide;
    if (typeof globalWechatIde !== 'undefined') {
        return { source: 'extension.globalThis.wechatide', value: globalWechatIde };
    }
    return undefined;
}
function logShellWechatIde(hostWechatIde) {
    if (hostWechatIde) {
        console.log(`${LOG_PREFIX} shell wechatide available from ${hostWechatIde.source}`);
    }
    else {
        console.warn(`${LOG_PREFIX} shell wechatide not found in extension entry scope`);
    }
}
/**
 * 壳插件入口
 *
 * 壳只做两件事：
 * 1. 从远程服务器加载业务代码并激活
 * 2. 注册重载命令（始终可用，即使远程加载失败也能重载）
 *
 * 业务逻辑由远程模块自行实现，壳不提供任何能力注入。
 */
async function activate(context) {
    const { serverUrl } = (0, config_1.readConfig)();
    const hostWechatIde = resolveShellWechatIde();
    console.log(`${LOG_PREFIX} shell activate start (server: ${serverUrl})`);
    logShellWechatIde(hostWechatIde);
    context.subscriptions.push(vscode.commands.registerCommand('mpAgentAudit.reload', async () => {
        console.log(`${LOG_PREFIX} reload command invoked`);
        try {
            console.log(`${LOG_PREFIX} reload: unloading current remote extension`);
            (0, loader_1.unloadRemoteExtension)();
            const reloadServerUrl = (0, config_1.readConfig)().serverUrl;
            const reloadWechatIde = resolveShellWechatIde();
            logShellWechatIde(reloadWechatIde);
            console.log(`${LOG_PREFIX} reload: loading remote extension (server: ${reloadServerUrl})`);
            await (0, loader_1.loadRemoteExtension)(context, reloadServerUrl, reloadWechatIde);
            console.log(`${LOG_PREFIX} reload completed`);
            vscode.window.showInformationMessage('远程插件重载成功');
        }
        catch (err) {
            const msg = errorMessage(err);
            console.error(`${LOG_PREFIX} reload failed: ${msg}`, err);
            vscode.window.showErrorMessage(`重载失败: ${msg}`);
        }
    }));
    console.log(`${LOG_PREFIX} reload command registered`);
    try {
        console.log(`${LOG_PREFIX} initial remote load start`);
        await (0, loader_1.loadRemoteExtension)(context, serverUrl, hostWechatIde);
        console.log(`${LOG_PREFIX} shell activate completed`);
    }
    catch (err) {
        const msg = errorMessage(err);
        console.error(`${LOG_PREFIX} shell activate failed: ${msg}`, err);
        vscode.window.showErrorMessage(`插件加载失败: ${msg}`);
    }
}
exports.activate = activate;
function deactivate() {
    console.log(`${LOG_PREFIX} shell deactivate start`);
    (0, loader_1.unloadRemoteExtension)();
    console.log(`${LOG_PREFIX} shell deactivate completed`);
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
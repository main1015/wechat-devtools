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
exports.readConfig = void 0;
const vscode = __importStar(require("vscode"));
const SECTION = 'mpAgentAudit';
const DEFAULT_SERVER_URL = 'https://p6ngateway.weixin.qq.com/mmbizwxaskillsvr';
/** 从 VS Code 设置中读取插件配置 */
function readConfig() {
    const config = vscode.workspace.getConfiguration(SECTION);
    const configuredServerUrl = config.get('serverUrl')?.trim();
    return {
        serverUrl: configuredServerUrl || DEFAULT_SERVER_URL,
    };
}
exports.readConfig = readConfig;
//# sourceMappingURL=config.js.map
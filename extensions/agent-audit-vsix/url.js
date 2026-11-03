"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinRemoteUrl = exports.normalizeRemoteBaseUrl = void 0;
function normalizeRemoteBaseUrl(baseUrl) {
    const trimmed = baseUrl.trim();
    if (!trimmed) {
        throw new Error('mpAgentAudit.serverUrl 不能为空');
    }
    let parsed;
    try {
        parsed = new URL(trimmed);
    }
    catch {
        throw new Error(`mpAgentAudit.serverUrl 不是合法 URL: ${baseUrl}`);
    }
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        throw new Error('mpAgentAudit.serverUrl 仅支持 http:// 或 https://');
    }
    if (parsed.search || parsed.hash) {
        throw new Error('mpAgentAudit.serverUrl 只能填写远端 base URL，不能包含 query 或 hash');
    }
    return parsed.href.replace(/\/+$/, '');
}
exports.normalizeRemoteBaseUrl = normalizeRemoteBaseUrl;
function joinRemoteUrl(baseUrl, absolutePath) {
    const normalizedBaseUrl = normalizeRemoteBaseUrl(baseUrl);
    const normalizedPath = absolutePath.trim().replace(/^\/+/, '');
    if (!normalizedPath) {
        return normalizedBaseUrl;
    }
    return `${normalizedBaseUrl}/${normalizedPath}`;
}
exports.joinRemoteUrl = joinRemoteUrl;
//# sourceMappingURL=url.js.map
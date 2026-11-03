"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToTsConfigChanges = exports.getWorkfolderTsConfigConfiguration = void 0;
const vscode = require("vscode");
const JSON5 = require("json5");
const fs_1 = require("fs");
exports.getWorkfolderTsConfigConfiguration = memoize(async function (workfolder) {
    const include = new vscode.RelativePattern(workfolder, "[tj]sconfig.json");
    const exclude = new vscode.RelativePattern(workfolder, "**/node_modules/**");
    const files = await vscode.workspace.findFiles(include, exclude);
    return files.reduce((mappings, file) => {
        try {
            const parsedFile = JSON5.parse(fs_1.readFileSync(file.fsPath).toString());
            const newMappings = createMappingsFromWorkspaceConfig(parsedFile);
            return [...mappings, ...newMappings];
        }
        catch (error) {
            return mappings;
        }
    }, []);
});
function subscribeToTsConfigChanges() {
    const disposables = [];
    for (const workfolder of vscode.workspace.workspaceFolders || []) {
        const pattern = new vscode.RelativePattern(workfolder, "[tj]sconfig.json");
        const fileWatcher = vscode.workspace.createFileSystemWatcher(pattern);
        fileWatcher.onDidChange(() => invalidateCache(workfolder));
        disposables.push(fileWatcher);
    }
    return disposables;
}
exports.subscribeToTsConfigChanges = subscribeToTsConfigChanges;
function createMappingsFromWorkspaceConfig(tsconfig) {
    var _b;
    var _a;
    const mappings = [];
    const baseUrl = (_b = tsconfig.compilerOptions) === null || _b === void 0 ? void 0 : _b.baseUrl;
    if (baseUrl) {
        mappings.push({
            key: baseUrl,
            // value: `${workfolder.uri.path}/${baseUrl}`
            value: "${workspaceFolder}/" + baseUrl,
        });
    }
    // Todo: paths property
    return mappings;
}
/** Caching */
let cachedMappings = new Map();
function memoize(fn) {
    async function cachedFunction(workfolder) {
        if (!workfolder) {
            return Promise.resolve([]);
        }
        const key = workfolder.name;
        const cachedMapping = cachedMappings.get(key);
        if (cachedMapping) {
            return cachedMapping;
        }
        else {
            let result = await fn(workfolder);
            cachedMappings.set(key, result);
            return result;
        }
    }
    return cachedFunction;
}
function invalidateCache(workfolder) {
    cachedMappings.delete(workfolder.name);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToProjectConfigChanges = exports.getWorkfolderProjectConfigConfiguration = void 0;
const vscode = require("vscode");
const JSON5 = require("json5");
const fs = require("fs");
exports.getWorkfolderProjectConfigConfiguration = memoize(async function (workfolder) {
    const include = new vscode.RelativePattern(workfolder, "project.config.json");
    const exclude = new vscode.RelativePattern(workfolder, "**/node_modules/**");
    const files = await vscode.workspace.findFiles(include, exclude);
    return files.reduce((mappings, file) => {
        try {
            const parsedFile = JSON5.parse(fs.readFileSync(file.fsPath).toString());
            const newMappings = createMappingsFromWorkspaceConfig(parsedFile);
            return [...mappings, ...newMappings];
        }
        catch (error) {
            return mappings;
        }
    }, []);
});
function subscribeToProjectConfigChanges() {
    const disposables = [];
    for (const workfolder of vscode.workspace.workspaceFolders || []) {
        const pattern = new vscode.RelativePattern(workfolder, "project.config.json");
        const fileWatcher = vscode.workspace.createFileSystemWatcher(pattern);
        fileWatcher.onDidChange(() => invalidateCache(workfolder));
        disposables.push(fileWatcher);
    }
    return disposables;
}
exports.subscribeToProjectConfigChanges = subscribeToProjectConfigChanges;
function createMappingsFromWorkspaceConfig(projectConfig) {
    var _a;
    const mappings = [];
    const { miniprogramRoot = '', pluginRoot = '', } = projectConfig;
    if (miniprogramRoot) {
        mappings.push({
            key: 'miniprogramRoot',
            // value: `${workfolder.uri.path}/${baseUrl}`
            value: "${workspaceFolder}/" + miniprogramRoot,
        });
    }
    if (pluginRoot) {
        mappings.push({
            key: 'pluginRoot',
            // value: `${workfolder.uri.path}/${baseUrl}`
            value: "${workspaceFolder}/" + pluginRoot,
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

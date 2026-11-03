"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerFactory = exports.provide = void 0;
const vscode = require("vscode");
const configuration_service_1 = require("../../configuration/configuration.service");
const createCompletionItem_1 = require("./createCompletionItem");
const file_utils_1 = require("../../utils/file-utils");
const createContext_1 = require("./createContext");
/**
 * Provide Completion Items
 */
async function provide(context, config) {
    console.error('!!!!', 'context', JSON.stringify(context, null, 2));
    const workspace = vscode.workspace.getWorkspaceFolder(context.document.uri);
    const rootPath = config.absolutePathToWorkspace
        ? workspace === null || workspace === void 0 ? void 0 : workspace.uri.fsPath : undefined;
    const path = (0, file_utils_1.getPathOfFolderToLookupFiles)(context.document.uri.fsPath, context.fromString || '', rootPath, config.mappings);
    const childrenOfPath = await (0, file_utils_1.getChildrenOfPath)(path, config);
    return [
        ...childrenOfPath.map((child) => (0, createCompletionItem_1.createPathCompletionItem)(child, config, context)),
    ];
}
exports.provide = provide;
function providerFactory(shouldProvide) {
    return async (document, position) => {
        const context = (0, createContext_1.createContext)(document, position);
        const config = await (0, configuration_service_1.getConfiguration)(document.uri);
        return shouldProvide(context, config)
            ? provide(context, config)
            : Promise.resolve([]);
    };
}
exports.providerFactory = providerFactory;

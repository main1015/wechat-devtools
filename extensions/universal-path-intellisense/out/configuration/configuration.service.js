"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfiguration = void 0;
const vscode = require("vscode");
const tsconfig_service = require("./tsconfig.service");
const mapping_service = require("./mapping.service");
const projectconfig_service = require('./projectconfig.service');
async function getConfiguration(resource) {
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(resource);
    const getConfig = (key) => vscode.workspace.getConfiguration(key, resource);
    const cfgExtension = getConfig("universal-path-intellisense");
    const cfgGeneral = getConfig("files");
    const mappings = await getMappings(cfgExtension, workspaceFolder);
    return {
        autoSlash: cfgExtension["autoSlashAfterDirectory"],
        showHiddenFiles: cfgExtension["showHiddenFiles"],
        withExtension: cfgExtension["extensionOnImport"],
        absolutePathToWorkspace: cfgExtension["absolutePathToWorkspace"],
        filesExclude: cfgGeneral["exclude"],
        mappings,
        noExtensionFileWhiteList: cfgExtension["noExtensionFileWhiteList"]
    };
}
exports.getConfiguration = getConfiguration;
async function getMappings(configuration, workfolder) {
    const mappings = mapping_service.parseMappings(configuration["mappings"]);
    const tsConfigMappings = await tsconfig_service.getWorkfolderTsConfigConfiguration(workfolder);
    const projectConfigMappings = await projectconfig_service.getWorkfolderProjectConfigConfiguration(workfolder);
    const allMappings = [...mappings, ...tsConfigMappings, ...projectConfigMappings];
    return mapping_service.replaceWorkspaceFolder(allMappings, workfolder);
}
//# sourceMappingURL=configuration.service.js.map

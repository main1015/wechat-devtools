"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildrenOfPath = exports.getPathOfFolderToLookupFiles = void 0;
const path = require("path");
const minimatch = require("minimatch");
const path_1 = require("path");
const fs_1 = require("fs");
const { promisify } = require("util");
const readdirAsync = promisify(fs_1.readdir);
class FileInfo {
    constructor(filePath, file) {
        this.file = file;
        this.isFile = fs_1.statSync(path_1.join(filePath, file)).isFile();
    }
}
exports.FileInfo = FileInfo;
/**
 * @param fileName  {string} current filename the look up is done. Absolute path
 * @param text      {string} text in import string. e.g. './src/'
 */
function getPathOfFolderToLookupFiles(fileName, text, rootPath, mappings) {
    const normalizedText = path.posix.normalize(text || "");
    const isPathAbsolute = normalizedText.startsWith('/');
    let rootFolder = path.posix.dirname(fileName);
    let pathEntered = normalizedText;
    // Search a mapping for the current text. First mapping is used where text starts with mapping
    let changeRootFolder = false;
    if (isPathAbsolute
        && mappings) {
        const customRoots = ['miniprogramRoot', 'pluginRoot'];
        for (const root of customRoots) {
            // test is in miniprogramRoot
            const mapping = mappings.filter(item => item.key === root)[0];
            if (mapping
                && fileName.startsWith(mapping.value)) {
                changeRootFolder = true;
                rootFolder = mapping.value;
                break;
            }
        }
    }
    if (isPathAbsolute && !changeRootFolder) {
        rootFolder = rootPath || "";
    }
    return path.posix.join(rootFolder, pathEntered);
}
exports.getPathOfFolderToLookupFiles = getPathOfFolderToLookupFiles;
async function getChildrenOfPath(path, config) {
    try {
        const files = await readdirAsync(path);
        return files
            .filter((filename) => filterFile(filename, config))
            .map((f) => new FileInfo(path, f));
    }
    catch (error) {
        return [];
    }
}
exports.getChildrenOfPath = getChildrenOfPath;
function filterFile(filename, config) {
    if (config.showHiddenFiles) {
        return true;
    }
    return isFileHidden(filename, config) ? false : true;
}
function isFileHidden(filename, config) {
    return filename.startsWith(".") || isFileHiddenByVsCode(filename, config);
}
// files.exclude has the following form. key is the glob
// {
//    "**//*.js": true
//    "**//*.js": true "*.git": true
// }
function isFileHiddenByVsCode(filename, config) {
    return (config.filesExclude &&
        Object.keys(config.filesExclude).some(key => config.filesExclude[key] && minimatch(filename, key)));
}
//# sourceMappingURL=file-utills.js.map

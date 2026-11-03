"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultDefProvider = void 0;
const vscode = require("vscode");
const fs_1 = require("fs");
const { promisify } = require("util");
const lstatAsync = promisify(fs_1.lstat);
const existsAsync = promisify(fs_1.exists);
const configuration_service_1 = require("../../configuration/configuration.service");
const createContext_1 = require("../common/createContext");
const file_utils_1 = require("../../utils/file-utils");
exports.DefaultDefProvider = {
    selector: {
        language: "json",
        scheme: "file",
    },
    provider: {
        provideDefinition,
    },
};
const quoteMarks = [`'`, `"`, `\``];
function findFullString(document, position) {
    const textFullLine = document.getText(document.lineAt(position).range);
    if (!textFullLine.includes('/')) {
        return '';
    }
    if (!quoteMarks.some(q => textFullLine.includes(q))) {
        return '';
    }
    const pos = position.character;
    if (quoteMarks.includes(textFullLine[pos])) {
        return '';
    }
    const left = [];
    let meetLeftQuote = false;
    const right = [];
    let meetRightQuote = false;
    for (let i = pos - 1; i >= 0; i--) {
        const ch = textFullLine[i];
        if (quoteMarks.includes(ch)) {
            meetLeftQuote = true;
            break;
        }
        else {
            left.unshift(ch);
        }
    }
    if (!meetLeftQuote) {
        return '';
    }
    for (let i = pos + 1; i < textFullLine.length; i++) {
        const ch = textFullLine[i];
        if (quoteMarks.includes(ch)) {
            meetRightQuote = true;
            break;
        }
        else {
            right.push(ch);
        }
    }
    if (!meetRightQuote) {
        return '';
    }
    ;
    return left.concat([textFullLine[pos]], right).join('');
}
async function provideDefinition(document, position, token) {
    // const context = createContext(document, position);
    const fullString = findFullString(document, position);
    const config = await (0, configuration_service_1.getConfiguration)(document.uri);
    const result = provideDef(document, fullString, config);
    //   ? provide(context, config)
    //   : Promise.resolve([]);
    return result;
}
async function provideDef(document, fullString, config) {
    console.error('!!!', 'document', JSON.stringify(document, null, 2));
    console.error('!!!', 'config', JSON.stringify(config, null, 2));
    const workspace = vscode.workspace.getWorkspaceFolder(document.uri);
    const rootPath = config.absolutePathToWorkspace
        ? workspace === null || workspace === void 0 ? void 0 : workspace.uri.fsPath : undefined;
    let path = (0, file_utils_1.getPathOfFolderToLookupFiles)(document.uri.fsPath, fullString, rootPath, config.mappings);
    try {
        let exists = await existsAsync(path);
        if (!exists) {
            const originalPath = path;
            const ext = (0, createContext_1.extractExtension)(document);
            const preferredExts = getPreferredExtensions(ext);
            for (const ext of preferredExts) {
                path = originalPath + ext;
                exists = await existsAsync(path);
                if (exists) {
                    break;
                }
            }
        }
        if (!exists || (exists && !(await lstatAsync(path)).isFile())) {
            return [];
        }
        return new vscode.Location(vscode.Uri.file(path), new vscode.Position(1, 1));
    }
    catch (e) {
        return [];
    }
}
/**
 * Checks if we should provide any CompletionItems
 * @param context
 * @param config
 */
function shouldProvide(context, config) {
    const { fromString, isImport } = context;
    if (!fromString || fromString.length === 0) {
        return false;
    }
    if (!isImport) {
        return true;
    }
    const startsWithDot = fromString[0] === ".";
    const startsWithMapping = config.mappings.some(({ key }) => fromString.startsWith(key));
    return isImport && (startsWithDot || startsWithMapping);
}
/**
 * Provide Completion Items
 */
async function provide(context, config) {
    const workspace = vscode.workspace.getWorkspaceFolder(context.document.uri);
    const rootPath = config.absolutePathToWorkspace
        ? workspace === null || workspace === void 0 ? void 0 : workspace.uri.fsPath : undefined;
    const path = (0, file_utils_1.getPathOfFolderToLookupFiles)(context.document.uri.fsPath, context.fromString || '', rootPath, config.mappings);
    const childrenOfPath = await (0, file_utils_1.getChildrenOfPath)(path, config);
    const preferred = getPriorityOfFileWithExtensions(context, childrenOfPath);
    return preferred ? new vscode.Location(vscode.Uri.file(preferred.file), new vscode.Position(1, 1)) : [];
}
function getPreferredExtensions(ourExt) {
    let preferredExt = '';
    switch (ourExt === null || ourExt === void 0 ? void 0 : ourExt.toLowerCase()) {
        case 'wxss': return ['.wxss', '.js', '.ts', '.wxml', '.json'];
        case 'ts': return ['.ts', '.wxss', '.js', '.wxml', '.json'];
        case 'js': return ['.js', '.ts', '.wxss', '.wxml', '.json'];
        case 'wxml': return ['.wxml', '.js', '.ts', '.wxss', '.json'];
        case 'json': return ['.wxml', '.json', '.js', '.ts', '.wxss'];
        default: return ['.js', '.ts', '.wxss', '.wxml', '.json'];
    }
}
function getPriorityOfFileWithExtensions(context, files) {
    var _a;
    const ourExt = context.documentExtension;
    let preferredExt = getPreferredExtensions(ourExt)[0];
    const frags = (_a = context.fromString) === null || _a === void 0 ? void 0 : _a.split(/\/|\\/);
    if (!frags) {
        return null;
    }
    // @ts-ignore
    const lastOne = frags[(frags === null || frags === void 0 ? void 0 : frags.length) - 1];
    if (!frags) {
        return null;
    }
    for (const f of files) {
        const fsPath = vscode.Uri.file(f.file).fsPath;
        if (fsPath.endsWith(lastOne) || fsPath.endsWith(lastOne + preferredExt)) {
            return f;
        }
    }
    return null;
}

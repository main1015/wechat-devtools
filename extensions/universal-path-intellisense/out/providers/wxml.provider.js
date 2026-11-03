"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WXMLProvider = void 0;
const providerfactory_1 = require("./common/providerfactory");
exports.WXMLProvider = {
    selector: {
        language: "wxml",
        scheme: "file",
    },
    provider: {
        provideCompletionItems: (0, providerfactory_1.providerFactory)(shouldProvide),
    },
    triggerCharacters: ["/", '"', "'"]
};
/**
 * Checks if we should provide any CompletionItems
 * @param context
 * @param config
 */
function shouldProvide(context, config) {
    const { fromString } = context;
    if (!fromString || fromString.length === 0) {
        return false;
    }
    return true;
}

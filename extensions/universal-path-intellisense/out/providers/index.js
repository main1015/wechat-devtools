"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defProviders = exports.providers = void 0;
const wxml_provider_1 = require("./wxml.provider");
const default_defProvider_1 = require("./defProvider/default.defProvider");
const json_provider_1 = require("./json.provider");
exports.providers = [
    // javascript_provider_1.JavaScriptProvider,
    wxml_provider_1.WXMLProvider,
    json_provider_1.JSONProvider,
];
exports.defProviders = [
    default_defProvider_1.DefaultDefProvider,
];
//# sourceMappingURL=index.js.map

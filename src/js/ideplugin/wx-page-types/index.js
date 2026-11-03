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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = exports.document = exports.core = void 0;
const core = require("./core/index");
exports.core = core;
const document = require("./document/index");
exports.document = document;
const common = require("./common/index");
exports.common = common;
__exportStar(require("./types/common"), exports);
__exportStar(require("./types/document"), exports);
__exportStar(require("./types/js"), exports);
__exportStar(require("./types/style"), exports);
__exportStar(require("./types/wxml"), exports);
__exportStar(require("./datas/datas"), exports);
__exportStar(require("./connection/connection"), exports);
__exportStar(require("./connection/contracts"), exports);
//# sourceMappingURL=index.js.map
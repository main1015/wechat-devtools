!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getCompiledPageJSON;const tslib_1=require("tslib"),lodash_1=tslib_1.__importDefault(require("lodash"));async function getCompiledPageJSON(e,t,l){const o=await t.getPageJSON(l);return lodash_1.default.cloneDeep(o)}
}(require("licia/lazyImport")(require), require)
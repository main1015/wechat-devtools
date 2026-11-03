!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WebAppDialog=void 0;exports.WebAppDialog=class{async confirm(e){if("undefined"!=typeof confirm)return confirm(e);throw new Error("not web env. cant find confirm")}};
}(require("licia/lazyImport")(require), require)
!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateMD5=function(t){const r=e.createHash("md5");return r.update(t),r.digest("hex")};const e=require("crypto");
}(require("licia/lazyImport")(require), require)
!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateMD5=generateMD5;const crypto=require("crypto");function generateMD5(e){const t=crypto.createHash("md5");return t.update(e),t.digest("hex")}
}(require("licia/lazyImport")(require), require)
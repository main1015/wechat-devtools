!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleUrlEncode=exports.isUrlEncode=void 0;exports.isUrlEncode=e=>{e=e||"";try{return e!==decodeURI(e)}catch(e){return!0}};exports.handleUrlEncode=e=>((0,exports.isUrlEncode)(e)||(e=encodeURI(e)),e);
}(require("licia/lazyImport")(require), require)
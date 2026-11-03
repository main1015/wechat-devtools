!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getWAServiceGlobal=function(){return o};const e=require("licia/noop");let o={};const t=window.__passWAServiceGlobal__||e.default;window.__passWAServiceGlobal__=function(e){o=e,t(e)};
}(require("licia/lazyImport")(require), require)
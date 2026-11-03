!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WebHTMLPathService=void 0;exports.WebHTMLPathService=class{getLoadHtmlPath(e){return e.startsWith("html/")&&(e=e.slice("html/".length)),e}};
}(require("licia/lazyImport")(require), require)
!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NodeAsar=void 0;const e=require("asar");exports.NodeAsar=class{extractAll(r,t){e.extractAll(r,t)}extractFile(r,t){return e.extractFile(r,t)}createPackage(r,t,a){e.createPackage(r,t,a)}};
}(require("licia/lazyImport")(require), require)
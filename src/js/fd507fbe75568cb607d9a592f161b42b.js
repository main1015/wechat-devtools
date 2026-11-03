!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.transformSourceMapSources=function(e=[]){return e?e.map(t):[]};const e=require("url"),r=require("path");function t(t){if(!t)return t;try{return new e.URL(t),t}catch(e){}return r.basename(t)}
}(require("licia/lazyImport")(require), require)
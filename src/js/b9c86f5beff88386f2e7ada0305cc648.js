!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseManual=function(e){let r,s;try{r=JSON.parse(e.resStr),s=""}catch(e){r={},s="JSON解析错误: "+e.message}return{resStr:e.resStr,resObj:r,resError:s}};
}(require("licia/lazyImport")(require), require)
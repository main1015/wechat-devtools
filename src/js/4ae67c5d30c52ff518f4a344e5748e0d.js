!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(t,c,r){(0,e.useEffect)(()=>{t().catch(c)},r)},exports.useAsyncEffect=function(t,c){return new Promise((r,s)=>{(0,e.useEffect)(()=>{t().then(r).catch(s)},c)})};const e=require("react");
}(require("licia/lazyImport")(require), require)
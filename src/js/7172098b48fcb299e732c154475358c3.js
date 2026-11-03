!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isolatedServiceDescriptorsFactory=function(){const r=[];return{registerSingleton:function(t,o,n=!0){r.push([t,new e.SyncDescriptor(o,[],n)])},_get:function(){return r}}};const e=require('./7dd9527d5d359ebe4569e4ade6f3966b.js');
}(require("licia/lazyImport")(require), require)
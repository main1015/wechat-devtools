!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tracing=void 0;exports.Tracing=class{constructor({pid:t,tid:i}){this.pid=t,this.tid=i}genEvent({ts:t,dur:i,args:s,cat:e,name:r,ph:d}){return{cat:e,name:r,ph:d,pid:this.pid,tid:this.tid,id:"0x"+this.pid,ts:t,dur:i,args:s}}};
}(require("licia/lazyImport")(require), require)
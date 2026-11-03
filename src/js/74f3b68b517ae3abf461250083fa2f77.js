!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LinkedNode=void 0;exports.LinkedNode=class{constructor(e,t,s){this.entry=e,this.next=t,this.prev=s}setNext(e){this.next&&(this.next.prev=void 0),this.next=e,e&&(e.prev=this)}};
}(require("licia/lazyImport")(require), require)
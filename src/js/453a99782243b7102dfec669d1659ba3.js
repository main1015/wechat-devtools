!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ElectronProtocol=void 0;exports.ElectronProtocol=class{constructor(e,s){this.sender=e,this.onMessage=s}send(e){try{this.sender.send("wechatide:message",e.buffer)}catch(e){}}disconnect(){this.sender.send("wechatide:disconnect",null)}};
}(require("licia/lazyImport")(require), require)
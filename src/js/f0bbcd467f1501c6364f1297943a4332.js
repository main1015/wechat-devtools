!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UniqIdService=void 0;exports.UniqIdService=class{constructor(){this._id=0}async get(){return console.error("this is test2 service in main"),`${this._id++}.${Math.random()}`}};
}(require("licia/lazyImport")(require), require)
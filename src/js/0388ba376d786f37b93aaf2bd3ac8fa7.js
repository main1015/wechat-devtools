!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.router=void 0;const e=require("express").Router();exports.router=e,e.get("/",async(e,r,s)=>{r.send({success:!0}),s()});
}(require("licia/lazyImport")(require), require)
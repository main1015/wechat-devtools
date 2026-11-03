!function(require, directRequire){
"use strict";const e=function(){const e={download:0,upload:0};return{reset(){e.download=0},get:o=>e[o],increase:o=>(e[o]+=1,e[o]),decrease:o=>(e[o]-=1,e[o])}}();module.exports=e;
}(require("licia/lazyImport")(require), require)
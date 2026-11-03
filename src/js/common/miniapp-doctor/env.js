require('./hackrequire')
!function(require, directRequire){
(()=>{"use strict";var r={4470:r=>{r.exports=require("fs-extra")}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return r[o](n,n.exports,t),n.exports}(()=>{const r=t(4470),e=process.argv[2];if(!e)throw new Error("env filePath no exist");const o=process.env;r.writeJSONSync(e,o)})(),module.exports={}})();
}(require("licia/lazyImport")(require), require)
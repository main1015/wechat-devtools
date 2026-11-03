!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getCompiledAppJSON;const _=require("lodash");async function getCompiledAppJSON(e,t){try{const e=await t.getAppJSON();return _.cloneDeep(e)}catch(e){throw console.log("getCompiledAppJSON error:",e),e}}
}(require("licia/lazyImport")(require), require)
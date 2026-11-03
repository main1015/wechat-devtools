!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.limitConcurrent=function(e){let t=null;return function(...n){return t||(t=e(...n),t.finally(()=>{t=null}),t)}};
}(require("licia/lazyImport")(require), require)
!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConsoleTransport=void 0;const e=require('./e09eefcdbfbdd5f4ef3c911115ea7c64.js');exports.ConsoleTransport=class{write(o,r){const s=o.level===e.LogLevel.ERROR?"error":o.level===e.LogLevel.WARN?"warn":"log";console[s](r)}};
}(require("licia/lazyImport")(require), require)
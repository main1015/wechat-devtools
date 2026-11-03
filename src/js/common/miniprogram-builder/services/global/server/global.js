!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ServerGlobalService=void 0;class ServerGlobalService{isDev(){return!0}async getAppVersion(){return"dev"}async showBuildLog2(){}}exports.ServerGlobalService=ServerGlobalService;
}(require("licia/lazyImport")(require), require)
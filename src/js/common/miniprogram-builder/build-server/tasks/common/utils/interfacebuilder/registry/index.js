!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.interfaceBuilderRegistry=void 0;class InterfaceBuilderRegistry{constructor(){this.map=new Map}set(e,t){this.map.set(e,t)}get(e){const t=this.map.get(e);if(t)return t}}exports.interfaceBuilderRegistry=new InterfaceBuilderRegistry;
}(require("licia/lazyImport")(require), require)
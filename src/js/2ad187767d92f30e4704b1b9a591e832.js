!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.trasnlateReqToUrlParse=function(t){const r=t.headers.host,n=`${t.connection.encrypted&&!t.url.startsWith("http:")?"https":"http"}://${r}${t.url}`,s=new e.URL(n);return s.originUrl=t.url,s.pureHref=s.pathname||"",s};const e=require("url");
}(require("licia/lazyImport")(require), require)
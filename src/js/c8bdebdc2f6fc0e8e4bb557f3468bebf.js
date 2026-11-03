"use strict";
let curLogger = console;
function initLogger(newLogger) {
    curLogger = newLogger || console;
}
module.exports = {
    setLogger: initLogger,
    // 暴露的是方法是为了可以更新换区 logger 对象
    info(...args) {
        curLogger.info(...args);
    },
    warn(...args) {
        curLogger.warn(...args);
    },
    error(...args) {
        curLogger.error(...args);
    },
    debug(...args) {
        curLogger.debug(...args);
    },
};

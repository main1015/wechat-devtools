"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.getRawData = exports.off = exports.on = exports.get = exports.CONFIG_KEY = exports.startCheckUpdate = exports.stopCheckUpdate = void 0;
const lodash_1 = require("lodash");
const config_1 = require('./9ee2d300f0f2e8dc45a2dac175f991cf.js');
const Data = require('./5b1e8f425e309b68b69f1e070f5f1f2e.js');
const logger = require('./c8bdebdc2f6fc0e8e4bb557f3468bebf.js');
const reporter = require('./7a069b6c63ecaa26ee879b8b249a4401.js');
const observer = require('./905ae0e821139a810a8ad2c9a773e22d.js');
var updater_1 = require('./4cc50ad6afc1c73642906a581743208b.js');
Object.defineProperty(exports, "stopCheckUpdate", { enumerable: true, get: function () { return updater_1.stopCheckUpdate; } });
Object.defineProperty(exports, "startCheckUpdate", { enumerable: true, get: function () { return updater_1.startCheckUpdate; } });
var config_2 = require('./9ee2d300f0f2e8dc45a2dac175f991cf.js');
Object.defineProperty(exports, "CONFIG_KEY", { enumerable: true, get: function () { return config_2.CONFIG_KEY; } });
observer.on(config_1.UPDATE_EVENT, (key, meta, data) => {
    // @ts-ignore
    Data.proxy.Manifest[key] = meta;
    // @ts-ignore
    Data.proxy.StaticConfig[key] = data;
    if (key !== config_1.UPDATE_EVENT) {
        observer.emit(key, data);
    }
});
const get = (key) => (0, lodash_1.cloneDeep)(Data.proxy.StaticConfig[key]);
exports.get = get;
const on = (key, fn) => {
    observer.on(key, fn);
};
exports.on = on;
const off = (key, fn) => {
    observer.off(key, fn);
};
exports.off = off;
const getRawData = () => {
    return Data.data;
};
exports.getRawData = getRawData;
const init = (opt) => {
    const { log, report } = opt;
    if (log && typeof log === 'function') {
        logger.setLogger(log);
    }
    if (report && typeof report === 'function') {
        reporter.setReporter(report);
    }
};
exports.init = init;
exports.default = {
    init: exports.init,
    on: exports.on,
    off: exports.off,
    get: exports.get,
    getRawData: exports.getRawData,
    CONFIG_KEY: config_1.CONFIG_KEY,
};

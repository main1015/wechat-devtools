"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopCheckUpdate = exports.startCheckUpdate = exports.checkUpdate = exports.doUpdate = exports.fetchManifest = void 0;
const signature_1 = require('./e9e6a17485b9188c4c1ecada87e6b99c.js');
const logger = require('./c8bdebdc2f6fc0e8e4bb557f3468bebf.js');
const config_1 = require('./9ee2d300f0f2e8dc45a2dac175f991cf.js');
const reporter = require('./7a069b6c63ecaa26ee879b8b249a4401.js');
const observer = require('./905ae0e821139a810a8ad2c9a773e22d.js');
const Data = require('./5b1e8f425e309b68b69f1e070f5f1f2e.js');
const lazyImport = require("licia/lazyImport");
// static-config 会在启动时就被使用，request 包会引入大量子文件拖慢启动速度，需要 lazyImport
const request = lazyImport(require)('request');
function fetchManifest(localManifest) {
    return new Promise((resolve) => {
        // @ts-ignore
        request({
            url: `${config_1.URL_PREFIX}/manifest.json?t=${Date.now()}${Math.random()}`,
        }, (err, resp, body) => {
            if (err) {
                logger.error(`check static config update fail ${err}`);
                return resolve({});
            }
            try {
                const onlineManifest = JSON.parse(body);
                const needUpdateInfo = {};
                for (const key in localManifest) {
                    const onlineItem = onlineManifest[key];
                    if (onlineItem
                        // @ts-ignore
                        && onlineItem.version > localManifest[key].version) {
                        needUpdateInfo[key] = onlineItem;
                    }
                }
                return resolve(needUpdateInfo);
            }
            catch (e) {
                logger.error(`check static config update fail ${e}`);
                return resolve({});
            }
        });
    });
}
exports.fetchManifest = fetchManifest;
function doUpdate(key, meta) {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        request({
            url: `${config_1.URL_PREFIX}/${key}.${meta.version}?t=${Date.now()}${Math.random()}`,
        }, (err, resp, body) => {
            if (err) {
                const errMsg = `doUpdate ${key} version: ${meta.version} fail ${err}`;
                return reject(errMsg);
            }
            try {
                if (!(0, signature_1.checkSignature)((0, signature_1.generateMd5)(body), meta.signature)) {
                    const errMsg = `doUpdate ${key} version: ${meta.version} check signature fail`;
                    return reject(errMsg);
                }
                return resolve({
                    key,
                    meta,
                    data: JSON.parse(body),
                });
            }
            catch (e) {
                const errMsg = `doUpdate ${key} version: ${meta.version} catch error ${e}`;
                return reject(errMsg);
            }
        });
    });
}
exports.doUpdate = doUpdate;
let updateTimer;
const checkUpdate = async () => {
    const needUpdateInfo = await fetchManifest(Data.proxy.Manifest);
    for (const key in needUpdateInfo) {
        logger.info(`update ${key}`);
        doUpdate(key, needUpdateInfo[key])
            .then((info) => {
            reporter.report('static_config_update');
            logger.info(`update success ${info.key}`);
            observer.emit(config_1.UPDATE_EVENT, info.key, info.meta, info.data);
        })
            .catch((e) => {
            logger.error(`update error ${e}`);
        });
    }
};
exports.checkUpdate = checkUpdate;
const startCheckUpdate = () => {
    (0, exports.checkUpdate)();
    clearInterval(updateTimer);
    updateTimer = setInterval(exports.checkUpdate, config_1.UPDATE_INSTANCE);
};
exports.startCheckUpdate = startCheckUpdate;
const stopCheckUpdate = () => {
    clearInterval(updateTimer);
};
exports.stopCheckUpdate = stopCheckUpdate;

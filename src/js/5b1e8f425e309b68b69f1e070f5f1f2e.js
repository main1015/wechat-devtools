"use strict";
const tslib_1 = require("tslib");
const jsonschema_1 = require("jsonschema");
const config_1 = require('./9ee2d300f0f2e8dc45a2dac175f991cf.js');
const logger = require('./c8bdebdc2f6fc0e8e4bb557f3468bebf.js');
const origin_1 = require('./5a871b71c894bab25894861146f3fc6d.js');
const manifest_json_1 = tslib_1.__importDefault(require('./03052d90f251d047663189631ff21ae2.json'));
// @ts-ignore
const manifestSchema = require('./fb9edf43779e3e0c14f92ddb8e67f4fa.js');
const validator = new jsonschema_1.Validator();
let saveTimer;
const saveData = () => {
    try {
        saveTimer && clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
            logger.info('start to save');
            localStorage.setItem(config_1.STORAGE_KEY, JSON.stringify({
                Manifest: manifest_json_1.default,
                StaticConfig: origin_1.STATIC_DATA,
            }));
        }, 1000);
    }
    catch (e) { }
};
// eslint-disable-next-line
const doValidate = (instance, schema) => validator.validate(instance, schema, { allowUnknownAttributes: true });
const clearLocalStorage = () => {
    try {
        localStorage.removeItem(config_1.STORAGE_KEY);
    }
    catch (e) { }
};
const mergeLocalStorage = (cache) => {
    try {
        const localData = JSON.parse(localStorage.getItem(config_1.STORAGE_KEY) || '{}');
        if (localData.Manifest && localData.StaticConfig) {
            // 验证下 manifest
            const validatorResult = doValidate(localData.Manifest, manifestSchema);
            if (validatorResult.errors.length > 0) {
                throw new Error(`localstorage manifest validate error ${localData.Manifest}`);
            }
            for (const item in config_1.CONFIG_KEY) {
                // @ts-ignore
                const key = config_1.CONFIG_KEY[item];
                /**
                 * localstorage 大于代码中的版本号，用 localstorage 的
                 */
                if (localData.Manifest[key]
                    && localData.StaticConfig[key]
                    && localData.Manifest[key].version === localData.StaticConfig[key].version
                    // @ts-ignore
                    && localData.Manifest[key].version > manifest_json_1.default[key].version) {
                    const instance = localData.StaticConfig[key];
                    // @ts-ignore
                    const validatorResult = doValidate(instance, origin_1.SCHEME_INFO[key]);
                    if (validatorResult.errors.length > 0) {
                        logger.error(`validate ${key} error ${instance}`);
                        break;
                    }
                    // 覆盖掉本地代码的
                    cache.Manifest[key] = localData.Manifest[key];
                    cache.StaticConfig[key] = instance;
                }
            }
        }
    }
    catch (e) {
        clearLocalStorage();
        logger.error(`${e}`);
    }
};
function init() {
    /** 合并 */
    mergeLocalStorage({
        Manifest: manifest_json_1.default,
        StaticConfig: origin_1.STATIC_DATA,
    });
    const ManifestProxy = new Proxy(manifest_json_1.default, {
        set(target, p, value) {
            const validateResult = doValidate({ [p]: value }, manifestSchema);
            if (validateResult.errors.length > 0) {
                logger.error(`set manifest ${p} to un valid format`);
                return false;
            }
            // @ts-ignore
            target[p] = value;
            saveData();
            return true;
        },
        deleteProperty(_target, _p) {
            return false;
        },
    });
    const StaticConfigProxy = new Proxy(origin_1.STATIC_DATA, {
        set(target, p, value) {
            // @ts-ignore
            const schema = origin_1.SCHEME_INFO[p];
            if (!schema) {
                logger.error(`set unknown ${p} to StaticConfig`);
                return false;
            }
            const validateResult = doValidate(value, schema);
            if (validateResult.errors.length > 0) {
                logger.error(`set StaticConfig[${p}] to un valid format`);
                return false;
            }
            // @ts-ignore
            target[p] = value;
            saveData();
            return true;
        },
        deleteProperty(_target, _p) {
            return false;
        },
    });
    return {
        proxy: new Proxy({
            Manifest: ManifestProxy,
            StaticConfig: StaticConfigProxy,
        }, {
            set(_target, _p, _value) {
                return false;
            },
            deleteProperty(_target, _p) {
                return false;
            },
        }),
        data: {
            Manifest: manifest_json_1.default,
            StaticConfig: origin_1.STATIC_DATA,
        }
    };
}
module.exports = init();

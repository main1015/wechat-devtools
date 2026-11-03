"use strict";
// 这里的 locale 均是指 language Tag，详细可以参考 https://en.wikipedia.org/wiki/IETF_language_tag
const react_1 = require("react");
const events = require("events");
const moment = require("moment");
const emitter = new events.EventEmitter();
emitter.setMaxListeners(40);
const changeLocaleEventName = 'changeLocale';
const onChangeLocale = (cb) => {
    emitter.on(changeLocaleEventName, cb);
    return () => {
        emitter.removeListener(changeLocaleEventName, cb);
    };
};
// navigator might not be undefined under some node environment
const safeNavigator = typeof navigator !== 'undefined' ? navigator : { language: 'zh_CN' };
const systemLocale = '$SYSTEM';
const supportedLocales = ['zh', 'en'];
let sourceLocale;
let locale;
const formatedConfigMap = {};
const toSupportedLocale = (tag) => {
    if (tag === systemLocale) {
        tag = safeNavigator.language;
        if (tag === 'zh_CN') {
            tag = 'zh';
        }
    }
    return supportedLocales.find(item => tag.toLowerCase().includes(item)) || 'zh';
};
const setMoment = (val = locale) => {
    moment.locale(val === 'zh' ? 'zh-cn' : 'en'); // moment 不支持 zh
};
const getLocale = () => locale;
const getSourceLocale = () => sourceLocale;
const setLocale = (tag) => {
    sourceLocale = tag;
    const prevLocale = locale;
    const newLocale = toSupportedLocale(tag);
    if (newLocale !== locale) {
        locale = newLocale;
    }
    setMoment();
    emitter.emit(changeLocaleEventName, locale, sourceLocale, prevLocale);
};
/**
 * @locales.mixin
 * class Test extents React.Component {
 * }
 * @param {*} target
 */
const mixin = (target) => {
    const componentDidMount = target.prototype.componentDidMount;
    const componentWillUnmount = target.prototype.componentWillUnmount;
    target.prototype.componentDidMount = function (...args) {
        if (typeof componentDidMount === 'function') {
            componentDidMount.apply(this, args);
        }
        this._cancalLocaleListener = onChangeLocale(() => this.forceUpdate());
    };
    target.prototype.componentWillUnmount = function (...args) {
        if (typeof componentWillUnmount === 'function') {
            componentWillUnmount.apply(this, args);
        }
        if (this._cancalLocaleListener) {
            this._cancalLocaleListener();
        }
    };
};
const initLocale = () => {
    var _a, _b;
    let settings = {};
    try {
        // @ts-ignore
        settings = JSON.parse(localStorage.getItem('reduxPersist:settings')) || {};
    }
    catch (e) {
        settings = {};
    }
    sourceLocale = ((_a = settings === null || settings === void 0 ? void 0 : settings.general) === null || _a === void 0 ? void 0 : _a.locale)
        // 兼容 devtools/main#594 之前的情况
        || ((_b = settings === null || settings === void 0 ? void 0 : settings.appearance) === null || _b === void 0 ? void 0 : _b.locale)
        || systemLocale;
    locale = toSupportedLocale(sourceLocale);
    setMoment();
};
const getFormatedLocaleConfig = (l) => {
    if (formatedConfigMap[l]) {
        return formatedConfigMap[l];
    }
    let config;
    if (l === 'en') {
        config = require('./9b821696f25803935555d968c9947f15.js').config;
    }
    else {
        config = require('./98f15e8132a9f48937f4c8189466c73c.js').config;
    }
    formatedConfigMap[l] = config;
    return config;
};
// @ts-ignore
String.prototype.format = function (...args) {
    // eslint-disable-next-line
    let result = this;
    const insert = args[0];
    if (Object.prototype.toString.call(insert) === '[object Array]') {
        for (const value of insert) {
            result = result.replace('%s', value);
        }
        return result;
    }
    for (const value of args) {
        result = result.replace('%s', value);
    }
    return result;
};
const useLocale = () => {
    const [locale, setLocale] = (0, react_1.useState)(getLocale());
    (0, react_1.useEffect)(() => {
        const _cancalLocaleListener = onChangeLocale((next) => {
            setLocale(next);
        });
        return () => {
            _cancalLocaleListener();
        };
    }, []);
    return locale;
};
initLocale();
const localeExport = {
    get systemLocale() {
        return systemLocale;
    },
    getLocale,
    getSourceLocale,
    setLocale,
    onChangeLocale,
    useLocale,
    mixin,
    use(l = locale) {
        return getFormatedLocaleConfig(l);
    },
    get config() {
        return getFormatedLocaleConfig(locale);
    },
    get supportedLanguages() {
        return [
            {
                dec: '中文（简体）',
                locale: 'zh',
            },
            {
                dec: 'English',
                locale: 'en',
            },
        ];
    },
};
// @ts-ignore
// 兼容 import locales from 'xxx' 写法
localeExport.default = localeExport;
module.exports = localeExport;

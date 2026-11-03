/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../base/dist/browser.js":
/*!*******************************!*\
  !*** ../base/dist/browser.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./common */ "../base/dist/common/index.js"), exports);
__exportStar(__webpack_require__(/*! ./browser/index */ "../base/dist/browser/index.js"), exports);


/***/ }),

/***/ "../base/dist/browser/IframeMessenger.js":
/*!***********************************************!*\
  !*** ../base/dist/browser/IframeMessenger.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IframeMessenger = void 0;
var Emitter_1 = __importDefault(__webpack_require__(/*! licia/Emitter */ "../base/node_modules/licia/Emitter.js"));
var stringify_1 = __importDefault(__webpack_require__(/*! licia/stringify */ "../base/node_modules/licia/stringify.js"));
var IframeMessenger = /** @class */ (function (_super) {
    __extends(IframeMessenger, _super);
    function IframeMessenger(target, syncHandler) {
        var _this = _super.call(this) || this;
        _this.target = window;
        _this.syncHandler = null;
        _this.handleMsg = function (e) {
            if (e.source === _this.target) {
                _this.emit('message', e.data || {});
            }
        };
        _this.target = target;
        window.addEventListener('message', _this.handleMsg);
        if (!syncHandler) {
            return _this;
        }
        var self = window;
        self.syncHandlers = self.syncHandlers || [];
        syncHandler.target = target;
        _this.syncHandler = syncHandler;
        self.syncHandlers.push(syncHandler);
        return _this;
    }
    IframeMessenger.prototype.destroy = function () {
        window.removeEventListener('message', this.handleMsg);
        if (!this.syncHandler) {
            return;
        }
        var syncHandlers = window.onCalls;
        for (var i = 0, len = syncHandlers.length; i < len; i++) {
            if (syncHandlers[i] === this.syncHandler) {
                syncHandlers.splice(i, 1);
                break;
            }
        }
    };
    IframeMessenger.prototype.send = function (msg) {
        try {
            this.target.postMessage(msg, '*');
        }
        catch (e) {
            msg = JSON.parse((0, stringify_1.default)(msg));
            this.target.postMessage(msg, '*');
        }
    };
    IframeMessenger.prototype.sendSync = function (msg) {
        var target = this.target;
        var syncHandlers = target.syncHandlers;
        if (syncHandlers) {
            for (var i = 0, len = syncHandlers.length; i < len; i++) {
                var syncHandler = syncHandlers[i];
                if (window === syncHandler.target) {
                    return syncHandler(msg);
                }
            }
        }
    };
    return IframeMessenger;
}(Emitter_1.default));
exports.IframeMessenger = IframeMessenger;


/***/ }),

/***/ "../base/dist/browser/index.js":
/*!*************************************!*\
  !*** ../base/dist/browser/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./IframeMessenger */ "../base/dist/browser/IframeMessenger.js"), exports);


/***/ }),

/***/ "../base/dist/common/index.js":
/*!************************************!*\
  !*** ../base/dist/common/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./log */ "../base/dist/common/log.js"), exports);
__exportStar(__webpack_require__(/*! ./messenger */ "../base/dist/common/messenger.js"), exports);
__exportStar(__webpack_require__(/*! ./sdk */ "../base/dist/common/sdk.js"), exports);
__exportStar(__webpack_require__(/*! ./util */ "../base/dist/common/util.js"), exports);
__exportStar(__webpack_require__(/*! ./webview */ "../base/dist/common/webview.js"), exports);


/***/ }),

/***/ "../base/dist/common/log.js":
/*!**********************************!*\
  !*** ../base/dist/common/log.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.log = void 0;
var Logger_1 = __importDefault(__webpack_require__(/*! licia/Logger */ "../base/node_modules/licia/Logger.js"));
var toArr_1 = __importDefault(__webpack_require__(/*! licia/toArr */ "../base/node_modules/licia/toArr.js"));
var clone_1 = __importDefault(__webpack_require__(/*! licia/clone */ "../base/node_modules/licia/clone.js"));
var each_1 = __importDefault(__webpack_require__(/*! licia/each */ "../base/node_modules/licia/each.js"));
var consoleMethods = {};
(0, each_1.default)(['trace', 'log', 'info', 'warn', 'error'], function (name) {
    consoleMethods[name] = console[name].bind(console);
});
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logger.prototype._log = function (type, argList) {
        argList = (0, toArr_1.default)(argList);
        if (argList.length === 0)
            return this;
        this.emit('all', type, (0, clone_1.default)(argList));
        if (Logger_1.default.level[type.toUpperCase()] < this._level)
            return this;
        this.emit(type, (0, clone_1.default)(argList));
        /* eslint-disable no-console */
        var consoleMethod = type === 'debug' ? consoleMethods.log : consoleMethods[type];
        consoleMethod.apply(void 0, this.formatter(type, argList));
        return this;
    };
    return Logger;
}(Logger_1.default));
var log = (function (name) {
    var logger = new Logger(name);
    logger.formatter = function (type, argList) {
        argList.unshift(this.name);
        return argList;
    };
    return logger;
});
exports.log = log;


/***/ }),

/***/ "../base/dist/common/messenger.js":
/*!****************************************!*\
  !*** ../base/dist/common/messenger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../base/dist/common/sdk.js":
/*!**********************************!*\
  !*** ../base/dist/common/sdk.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.apiCancel = exports.apiOk = exports.apiFail = exports.SDK = void 0;
var extend_1 = __importDefault(__webpack_require__(/*! licia/extend */ "../base/node_modules/licia/extend.js"));
var each_1 = __importDefault(__webpack_require__(/*! licia/each */ "../base/node_modules/licia/each.js"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.apis = new Map();
    }
    SDK.prototype.has = function (name) {
        return !!this.apis.get(name);
    };
    SDK.prototype.register = function (name, fn) {
        var _this = this;
        var apis = {};
        if (typeof name === 'string') {
            apis[name] = fn;
        }
        else {
            apis = name;
        }
        (0, each_1.default)(apis, function (fn, name) {
            _this.apis.set(name, fn);
        });
    };
    SDK.prototype.invoke = function (name, args) {
        return __awaiter(this, void 0, void 0, function () {
            var result, api, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = this.apis.get(name);
                        if (!api) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, api(args)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        result = apiFail(name, e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        result = apiFail(name, 'unimplemented');
                        _a.label = 6;
                    case 6: return [2 /*return*/, result];
                }
            });
        });
    };
    SDK.prototype.invokeSync = function (name, args) {
        var result;
        var api = this.apis.get(name);
        if (api) {
            try {
                result = api(args);
            }
            catch (e) {
                result = apiFail(name, e.message);
            }
        }
        else {
            result = apiFail(name, 'unimplemented');
        }
        return result;
    };
    return SDK;
}());
exports.SDK = SDK;
function apiFail(name, message, data) {
    return (0, extend_1.default)({
        errMsg: "".concat(name, ":fail ").concat(message),
    }, data);
}
exports.apiFail = apiFail;
function apiOk(name, data) {
    return (0, extend_1.default)({
        errMsg: "".concat(name, ":ok"),
    }, data);
}
exports.apiOk = apiOk;
function apiCancel(name, data) {
    return (0, extend_1.default)({
        errMsg: "".concat(name, ":cancel"),
    }, data);
}
exports.apiCancel = apiCancel;


/***/ }),

/***/ "../base/dist/common/util.js":
/*!***********************************!*\
  !*** ../base/dist/common/util.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSyncApi = void 0;
var contain_1 = __importDefault(__webpack_require__(/*! licia/contain */ "../base/node_modules/licia/contain.js"));
var endWith_1 = __importDefault(__webpack_require__(/*! licia/endWith */ "../base/node_modules/licia/endWith.js"));
var syncApis = [
    'createRequestTask',
    'createSocketTask',
    'createUploadTask',
    'createLoadSubPackageTask',
    'createAudioInstance',
    'getSystemInfo',
    'getMenuButtonBoundingClientRect',
    'createDownloadTask',
    'enableAccelerometer',
    'enableCompass',
];
function isSyncApi(api) {
    return (0, contain_1.default)(syncApis, api) || (0, endWith_1.default)(api, 'Sync');
}
exports.isSyncApi = isSyncApi;


/***/ }),

/***/ "../base/dist/common/webview.js":
/*!**************************************!*\
  !*** ../base/dist/common/webview.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../base/node_modules/licia/Class.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/Class.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var extend = __webpack_require__(/*! ./extend */ "../base/node_modules/licia/extend.js");
var toArr = __webpack_require__(/*! ./toArr */ "../base/node_modules/licia/toArr.js");
var inherits = __webpack_require__(/*! ./inherits */ "../base/node_modules/licia/inherits.js");
var safeGet = __webpack_require__(/*! ./safeGet */ "../base/node_modules/licia/safeGet.js");
var isMiniProgram = __webpack_require__(/*! ./isMiniProgram */ "../base/node_modules/licia/isMiniProgram.js");

exports = function(methods, statics) {
    return Base.extend(methods, statics);
};

function makeClass(parent, methods, statics) {
    statics = statics || {};
    var className =
        methods.className || safeGet(methods, 'initialize.name') || '';
    delete methods.className;

    var ctor = function() {
        var args = toArr(arguments);
        return this.initialize
            ? this.initialize.apply(this, args) || this
            : this;
    };

    if (!isMiniProgram) {
        try {
            ctor = new Function(
                'toArr',
                'return function ' +
                    className +
                    '()' +
                    '{' +
                    'var args = toArr(arguments);' +
                    'return this.initialize ? this.initialize.apply(this, args) || this : this;' +
                    '};'
            )(toArr);
        } catch (e) {}
    }

    inherits(ctor, parent);
    ctor.prototype.constructor = ctor;

    ctor.extend = function(methods, statics) {
        return makeClass(ctor, methods, statics);
    };

    ctor.inherits = function(Class) {
        inherits(ctor, Class);
    };

    ctor.methods = function(methods) {
        extend(ctor.prototype, methods);
        return ctor;
    };

    ctor.statics = function(statics) {
        extend(ctor, statics);
        return ctor;
    };

    ctor.methods(methods).statics(statics);
    return ctor;
}

var Base = (exports.Base = makeClass(Object, {
    className: 'Base',
    callSuper: function(parent, name, args) {
        var superMethod = parent.prototype[name];
        return superMethod.apply(this, args);
    },
    toString: function() {
        return this.constructor.name;
    }
}));

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/Emitter.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/Emitter.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var Class = __webpack_require__(/*! ./Class */ "../base/node_modules/licia/Class.js");
var has = __webpack_require__(/*! ./has */ "../base/node_modules/licia/has.js");
var each = __webpack_require__(/*! ./each */ "../base/node_modules/licia/each.js");
var slice = __webpack_require__(/*! ./slice */ "../base/node_modules/licia/slice.js");
var once = __webpack_require__(/*! ./once */ "../base/node_modules/licia/once.js");
var clone = __webpack_require__(/*! ./clone */ "../base/node_modules/licia/clone.js");

exports = Class(
    {
        initialize: function Emitter() {
            this._events = this._events || {};
        },
        on: function(event, listener) {
            this._events[event] = this._events[event] || [];

            this._events[event].push(listener);

            return this;
        },
        off: function(event, listener) {
            var events = this._events;
            if (!has(events, event)) return;
            var idx = events[event].indexOf(listener);

            if (idx > -1) {
                events[event].splice(idx, 1);
            }

            return this;
        },
        once: function(event, listener) {
            this.on(event, once(listener));
            return this;
        },
        emit: function(event) {
            var _this = this;

            if (!has(this._events, event)) return;
            var args = slice(arguments, 1);
            var events = clone(this._events[event]);
            each(
                events,
                function(val) {
                    return val.apply(_this, args);
                },
                this
            );
            return this;
        },
        removeAllListeners: function(event) {
            if (!event) {
                this._events = {};
            } else {
                delete this._events[event];
            }

            return this;
        }
    },
    {
        mixin: function(obj) {
            each(['on', 'off', 'once', 'emit', 'removeAllListeners'], function(
                val
            ) {
                obj[val] = exports.prototype[val];
            });
            obj._events = obj._events || {};
        }
    }
);

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/Enum.js":
/*!******************************************!*\
  !*** ../base/node_modules/licia/Enum.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var Class = __webpack_require__(/*! ./Class */ "../base/node_modules/licia/Class.js");
var freeze = __webpack_require__(/*! ./freeze */ "../base/node_modules/licia/freeze.js");
var isArr = __webpack_require__(/*! ./isArr */ "../base/node_modules/licia/isArr.js");
var each = __webpack_require__(/*! ./each */ "../base/node_modules/licia/each.js");
var keys = __webpack_require__(/*! ./keys */ "../base/node_modules/licia/keys.js");

exports = Class({
    initialize: function Enum(map) {
        if (isArr(map)) {
            this.size = map.length;
            each(
                map,
                function(member, val) {
                    this[member] = val;
                },
                this
            );
        } else {
            this.size = keys(map).length;
            each(
                map,
                function(val, member) {
                    this[member] = val;
                },
                this
            );
        }

        freeze(this);
    }
});

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/Logger.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/Logger.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var Emitter = __webpack_require__(/*! ./Emitter */ "../base/node_modules/licia/Emitter.js");
var Enum = __webpack_require__(/*! ./Enum */ "../base/node_modules/licia/Enum.js");
var toArr = __webpack_require__(/*! ./toArr */ "../base/node_modules/licia/toArr.js");
var isUndef = __webpack_require__(/*! ./isUndef */ "../base/node_modules/licia/isUndef.js");
var clone = __webpack_require__(/*! ./clone */ "../base/node_modules/licia/clone.js");
var isStr = __webpack_require__(/*! ./isStr */ "../base/node_modules/licia/isStr.js");
var isNum = __webpack_require__(/*! ./isNum */ "../base/node_modules/licia/isNum.js");

exports = Emitter.extend(
    {
        initialize: function Logger(name, level) {
            this.name = name;
            this.setLevel(isUndef(level) ? exports.level.DEBUG : level);
            this.callSuper(Emitter, 'initialize', arguments);
        },
        setLevel: function(level) {
            if (isStr(level)) {
                level = exports.level[level.toUpperCase()];
                if (level) this._level = level;
                return this;
            }

            if (isNum(level)) this._level = level;
            return this;
        },
        getLevel: function() {
            return this._level;
        },
        formatter: function(type, argList) {
            return argList;
        },
        trace: function() {
            return this._log('trace', arguments);
        },
        debug: function() {
            return this._log('debug', arguments);
        },
        info: function() {
            return this._log('info', arguments);
        },
        warn: function() {
            return this._log('warn', arguments);
        },
        error: function() {
            return this._log('error', arguments);
        },
        _log: function(type, argList) {
            argList = toArr(argList);
            if (argList.length === 0) return this;
            this.emit('all', type, clone(argList));
            if (exports.level[type.toUpperCase()] < this._level) return this;
            this.emit(type, clone(argList));

            var consoleMethod = type === 'debug' ? console.log : console[type];
            consoleMethod.apply(console, this.formatter(type, argList));
            return this;
        }
    },
    {
        level: new Enum({
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            SILENT: 5
        })
    }
);

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/allKeys.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/allKeys.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var keys = __webpack_require__(/*! ./keys */ "../base/node_modules/licia/keys.js");
var getProto = __webpack_require__(/*! ./getProto */ "../base/node_modules/licia/getProto.js");
var unique = __webpack_require__(/*! ./unique */ "../base/node_modules/licia/unique.js");

var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;

exports = function(obj) {
    var _ref =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
        _ref$prototype = _ref.prototype,
        prototype = _ref$prototype === void 0 ? true : _ref$prototype,
        _ref$unenumerable = _ref.unenumerable,
        unenumerable = _ref$unenumerable === void 0 ? false : _ref$unenumerable,
        _ref$symbol = _ref.symbol,
        symbol = _ref$symbol === void 0 ? false : _ref$symbol;

    var ret = [];

    if ((unenumerable || symbol) && getOwnPropertyNames) {
        var getKeys = keys;
        if (unenumerable && getOwnPropertyNames) getKeys = getOwnPropertyNames;

        do {
            ret = ret.concat(getKeys(obj));

            if (symbol && getOwnPropertySymbols) {
                ret = ret.concat(getOwnPropertySymbols(obj));
            }
        } while (
            prototype &&
            (obj = getProto(obj)) &&
            obj !== Object.prototype
        );

        ret = unique(ret);
    } else {
        if (prototype) {
            for (var key in obj) {
                ret.push(key);
            }
        } else {
            ret = keys(obj);
        }
    }

    return ret;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/before.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/before.js ***!
  \********************************************/
/***/ ((module, exports) => {

exports = function(n, fn) {
    var memo;
    return function() {
        if (--n > 0) memo = fn.apply(this, arguments);
        if (n <= 1) fn = null;
        return memo;
    };
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/castPath.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/castPath.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./has */ "../base/node_modules/licia/has.js");
var isArr = __webpack_require__(/*! ./isArr */ "../base/node_modules/licia/isArr.js");

exports = function(str, obj) {
    if (isArr(str)) return str;
    if (obj && has(obj, str)) return [str];
    var ret = [];
    str.replace(regPropName, function(match, number, quote, str) {
        ret.push(quote ? str.replace(regEscapeChar, '$1') : number || match);
    });
    return ret;
};

var regPropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var regEscapeChar = /\\(\\)?/g;

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/clone.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/clone.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var isObj = __webpack_require__(/*! ./isObj */ "../base/node_modules/licia/isObj.js");
var isArr = __webpack_require__(/*! ./isArr */ "../base/node_modules/licia/isArr.js");
var extend = __webpack_require__(/*! ./extend */ "../base/node_modules/licia/extend.js");

exports = function(obj) {
    if (!isObj(obj)) return obj;
    return isArr(obj) ? obj.slice() : extend({}, obj);
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/contain.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/contain.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var idxOf = __webpack_require__(/*! ./idxOf */ "../base/node_modules/licia/idxOf.js");
var isStr = __webpack_require__(/*! ./isStr */ "../base/node_modules/licia/isStr.js");
var isArrLike = __webpack_require__(/*! ./isArrLike */ "../base/node_modules/licia/isArrLike.js");
var values = __webpack_require__(/*! ./values */ "../base/node_modules/licia/values.js");

exports = function(arr, val) {
    if (isStr(arr)) return arr.indexOf(val) > -1;
    if (!isArrLike(arr)) arr = values(arr);
    return idxOf(arr, val) >= 0;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/create.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/create.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isObj = __webpack_require__(/*! ./isObj */ "../base/node_modules/licia/isObj.js");

exports = function(proto) {
    if (!isObj(proto)) return {};
    if (objCreate && !false) return objCreate(proto);

    function noop() {}

    noop.prototype = proto;
    return new noop();
};

var objCreate = Object.create;

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/createAssigner.js":
/*!****************************************************!*\
  !*** ../base/node_modules/licia/createAssigner.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var isUndef = __webpack_require__(/*! ./isUndef */ "../base/node_modules/licia/isUndef.js");
var each = __webpack_require__(/*! ./each */ "../base/node_modules/licia/each.js");

exports = function(keysFn, defaults) {
    return function(obj) {
        each(arguments, function(src, idx) {
            if (idx === 0) return;
            var keys = keysFn(src);
            each(keys, function(key) {
                if (!defaults || isUndef(obj[key])) obj[key] = src[key];
            });
        });
        return obj;
    };
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/each.js":
/*!******************************************!*\
  !*** ../base/node_modules/licia/each.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var isArrLike = __webpack_require__(/*! ./isArrLike */ "../base/node_modules/licia/isArrLike.js");
var keys = __webpack_require__(/*! ./keys */ "../base/node_modules/licia/keys.js");
var optimizeCb = __webpack_require__(/*! ./optimizeCb */ "../base/node_modules/licia/optimizeCb.js");

exports = function(obj, iterator, ctx) {
    iterator = optimizeCb(iterator, ctx);
    var i, len;

    if (isArrLike(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
            iterator(obj[i], i, obj);
        }
    } else {
        var _keys = keys(obj);

        for (i = 0, len = _keys.length; i < len; i++) {
            iterator(obj[_keys[i]], _keys[i], obj);
        }
    }

    return obj;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/endWith.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/endWith.js ***!
  \*********************************************/
/***/ ((module, exports) => {

exports = function(str, suffix) {
    var idx = str.length - suffix.length;
    return idx >= 0 && str.indexOf(suffix, idx) === idx;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/extend.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/extend.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var createAssigner = __webpack_require__(/*! ./createAssigner */ "../base/node_modules/licia/createAssigner.js");
var allKeys = __webpack_require__(/*! ./allKeys */ "../base/node_modules/licia/allKeys.js");

exports = createAssigner(allKeys);

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/extendOwn.js":
/*!***********************************************!*\
  !*** ../base/node_modules/licia/extendOwn.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var keys = __webpack_require__(/*! ./keys */ "../base/node_modules/licia/keys.js");
var createAssigner = __webpack_require__(/*! ./createAssigner */ "../base/node_modules/licia/createAssigner.js");

exports = createAssigner(keys);

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/filter.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/filter.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var safeCb = __webpack_require__(/*! ./safeCb */ "../base/node_modules/licia/safeCb.js");
var each = __webpack_require__(/*! ./each */ "../base/node_modules/licia/each.js");

exports = function(obj, predicate, ctx) {
    var ret = [];
    predicate = safeCb(predicate, ctx);
    each(obj, function(val, idx, list) {
        if (predicate(val, idx, list)) ret.push(val);
    });
    return ret;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/freeze.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/freeze.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var keys = __webpack_require__(/*! ./keys */ "../base/node_modules/licia/keys.js");

exports = function(obj) {
    if (Object.freeze) return Object.freeze(obj);
    keys(obj).forEach(function(prop) {
        if (!Object.getOwnPropertyDescriptor(obj, prop).configurable) return;
        Object.defineProperty(obj, prop, {
            writable: false,
            configurable: false
        });
    });
    return obj;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/getProto.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/getProto.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isObj = __webpack_require__(/*! ./isObj */ "../base/node_modules/licia/isObj.js");
var isFn = __webpack_require__(/*! ./isFn */ "../base/node_modules/licia/isFn.js");

var getPrototypeOf = Object.getPrototypeOf;
var ObjectCtr = {}.constructor;

exports = function(obj) {
    if (!isObj(obj)) return;
    if (getPrototypeOf && !false) return getPrototypeOf(obj);
    var proto = obj.__proto__;
    if (proto || proto === null) return proto;
    if (isFn(obj.constructor)) return obj.constructor.prototype;
    if (obj instanceof ObjectCtr) return ObjectCtr.prototype;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/has.js":
/*!*****************************************!*\
  !*** ../base/node_modules/licia/has.js ***!
  \*****************************************/
/***/ ((module, exports) => {

var hasOwnProp = Object.prototype.hasOwnProperty;

exports = function(obj, key) {
    return hasOwnProp.call(obj, key);
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/identity.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/identity.js ***!
  \**********************************************/
/***/ ((module, exports) => {

exports = function(val) {
    return val;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/idxOf.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/idxOf.js ***!
  \*******************************************/
/***/ ((module, exports) => {

exports = function(arr, val, fromIdx) {
    return Array.prototype.indexOf.call(arr, val, fromIdx);
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/inherits.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/inherits.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var create = __webpack_require__(/*! ./create */ "../base/node_modules/licia/create.js");

exports = function(Class, SuperClass) {
    Class.prototype = create(SuperClass.prototype);
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isArr.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/isArr.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "../base/node_modules/licia/objToStr.js");

if (Array.isArray && !false) {
    exports = Array.isArray;
} else {
    exports = function(val) {
        return objToStr(val) === '[object Array]';
    };
}

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isArrLike.js":
/*!***********************************************!*\
  !*** ../base/node_modules/licia/isArrLike.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isNum = __webpack_require__(/*! ./isNum */ "../base/node_modules/licia/isNum.js");
var isFn = __webpack_require__(/*! ./isFn */ "../base/node_modules/licia/isFn.js");

var MAX_ARR_IDX = Math.pow(2, 53) - 1;

exports = function(val) {
    if (!val) return false;
    var len = val.length;
    return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isBuffer.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/isBuffer.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isFn = __webpack_require__(/*! ./isFn */ "../base/node_modules/licia/isFn.js");

exports = function(val) {
    if (val == null) return false;
    if (val._isBuffer) return true;
    return (
        val.constructor &&
        isFn(val.constructor.isBuffer) &&
        val.constructor.isBuffer(val)
    );
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isFn.js":
/*!******************************************!*\
  !*** ../base/node_modules/licia/isFn.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "../base/node_modules/licia/objToStr.js");

exports = function(val) {
    var objStr = objToStr(val);
    return (
        objStr === '[object Function]' ||
        objStr === '[object GeneratorFunction]' ||
        objStr === '[object AsyncFunction]'
    );
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isMatch.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/isMatch.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var keys = __webpack_require__(/*! ./keys */ "../base/node_modules/licia/keys.js");

exports = function(obj, src) {
    var _keys = keys(src);

    var len = _keys.length;
    if (obj == null) return !len;
    obj = Object(obj);

    for (var i = 0; i < len; i++) {
        var key = _keys[i];
        if (src[key] !== obj[key] || !(key in obj)) return false;
    }

    return true;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isMiniProgram.js":
/*!***************************************************!*\
  !*** ../base/node_modules/licia/isMiniProgram.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

var isFn = __webpack_require__(/*! ./isFn */ "../base/node_modules/licia/isFn.js");

exports = typeof wx !== 'undefined' && isFn(wx.openLocation);

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isNaN.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/isNaN.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var isNum = __webpack_require__(/*! ./isNum */ "../base/node_modules/licia/isNum.js");

exports = function(val) {
    return isNum(val) && val !== +val;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isNum.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/isNum.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "../base/node_modules/licia/objToStr.js");

exports = function(val) {
    return objToStr(val) === '[object Number]';
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isObj.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/isObj.js ***!
  \*******************************************/
/***/ ((module, exports) => {

exports = function(val) {
    var type = typeof val;
    return !!val && (type === 'function' || type === 'object');
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isRegExp.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/isRegExp.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "../base/node_modules/licia/objToStr.js");

exports = function(val) {
    return objToStr(val) === '[object RegExp]';
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isStr.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/isStr.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "../base/node_modules/licia/objToStr.js");

exports = function(val) {
    return objToStr(val) === '[object String]';
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/isUndef.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/isUndef.js ***!
  \*********************************************/
/***/ ((module, exports) => {

exports = function(val) {
    return val === void 0;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/keys.js":
/*!******************************************!*\
  !*** ../base/node_modules/licia/keys.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./has */ "../base/node_modules/licia/has.js");

if (Object.keys && !false) {
    exports = Object.keys;
} else {
    exports = function(obj) {
        var ret = [];

        for (var key in obj) {
            if (has(obj, key)) ret.push(key);
        }

        return ret;
    };
}

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/lowerCase.js":
/*!***********************************************!*\
  !*** ../base/node_modules/licia/lowerCase.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var toStr = __webpack_require__(/*! ./toStr */ "../base/node_modules/licia/toStr.js");

exports = function(str) {
    return toStr(str).toLocaleLowerCase();
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/map.js":
/*!*****************************************!*\
  !*** ../base/node_modules/licia/map.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var safeCb = __webpack_require__(/*! ./safeCb */ "../base/node_modules/licia/safeCb.js");
var keys = __webpack_require__(/*! ./keys */ "../base/node_modules/licia/keys.js");
var isArrLike = __webpack_require__(/*! ./isArrLike */ "../base/node_modules/licia/isArrLike.js");

exports = function(obj, iterator, ctx) {
    iterator = safeCb(iterator, ctx);

    var _keys = !isArrLike(obj) && keys(obj);

    var len = (_keys || obj).length;
    var results = Array(len);

    for (var i = 0; i < len; i++) {
        var curKey = _keys ? _keys[i] : i;
        results[i] = iterator(obj[curKey], curKey, obj);
    }

    return results;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/matcher.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/matcher.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var extendOwn = __webpack_require__(/*! ./extendOwn */ "../base/node_modules/licia/extendOwn.js");
var isMatch = __webpack_require__(/*! ./isMatch */ "../base/node_modules/licia/isMatch.js");

exports = function(attrs) {
    attrs = extendOwn({}, attrs);
    return function(obj) {
        return isMatch(obj, attrs);
    };
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/objToStr.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/objToStr.js ***!
  \**********************************************/
/***/ ((module, exports) => {

var ObjToStr = Object.prototype.toString;

exports = function(val) {
    return ObjToStr.call(val);
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/once.js":
/*!******************************************!*\
  !*** ../base/node_modules/licia/once.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var partial = __webpack_require__(/*! ./partial */ "../base/node_modules/licia/partial.js");
var before = __webpack_require__(/*! ./before */ "../base/node_modules/licia/before.js");

exports = partial(before, 2);

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/optimizeCb.js":
/*!************************************************!*\
  !*** ../base/node_modules/licia/optimizeCb.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var isUndef = __webpack_require__(/*! ./isUndef */ "../base/node_modules/licia/isUndef.js");

exports = function(fn, ctx, argCount) {
    if (isUndef(ctx)) return fn;

    switch (argCount == null ? 3 : argCount) {
        case 1:
            return function(val) {
                return fn.call(ctx, val);
            };

        case 3:
            return function(val, idx, collection) {
                return fn.call(ctx, val, idx, collection);
            };

        case 4:
            return function(accumulator, val, idx, collection) {
                return fn.call(ctx, accumulator, val, idx, collection);
            };
    }

    return function() {
        return fn.apply(ctx, arguments);
    };
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/partial.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/partial.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var restArgs = __webpack_require__(/*! ./restArgs */ "../base/node_modules/licia/restArgs.js");
var toArr = __webpack_require__(/*! ./toArr */ "../base/node_modules/licia/toArr.js");

exports = restArgs(function(fn, partials) {
    return function() {
        var args = [];
        args = args.concat(partials);
        args = args.concat(toArr(arguments));
        return fn.apply(this, args);
    };
});

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/property.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/property.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isArr = __webpack_require__(/*! ./isArr */ "../base/node_modules/licia/isArr.js");
var safeGet = __webpack_require__(/*! ./safeGet */ "../base/node_modules/licia/safeGet.js");

exports = function(path) {
    if (!isArr(path)) return shallowProperty(path);
    return function(obj) {
        return safeGet(obj, path);
    };
};

function shallowProperty(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key];
    };
}

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/restArgs.js":
/*!**********************************************!*\
  !*** ../base/node_modules/licia/restArgs.js ***!
  \**********************************************/
/***/ ((module, exports) => {

exports = function(fn, startIdx) {
    startIdx = startIdx == null ? fn.length - 1 : +startIdx;
    return function() {
        var len = Math.max(arguments.length - startIdx, 0);
        var rest = new Array(len);
        var i;

        for (i = 0; i < len; i++) {
            rest[i] = arguments[i + startIdx];
        }

        switch (startIdx) {
            case 0:
                return fn.call(this, rest);

            case 1:
                return fn.call(this, arguments[0], rest);

            case 2:
                return fn.call(this, arguments[0], arguments[1], rest);
        }

        var args = new Array(startIdx + 1);

        for (i = 0; i < startIdx; i++) {
            args[i] = arguments[i];
        }

        args[startIdx] = rest;
        return fn.apply(this, args);
    };
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/safeCb.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/safeCb.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isFn = __webpack_require__(/*! ./isFn */ "../base/node_modules/licia/isFn.js");
var isObj = __webpack_require__(/*! ./isObj */ "../base/node_modules/licia/isObj.js");
var isArr = __webpack_require__(/*! ./isArr */ "../base/node_modules/licia/isArr.js");
var optimizeCb = __webpack_require__(/*! ./optimizeCb */ "../base/node_modules/licia/optimizeCb.js");
var matcher = __webpack_require__(/*! ./matcher */ "../base/node_modules/licia/matcher.js");
var identity = __webpack_require__(/*! ./identity */ "../base/node_modules/licia/identity.js");
var property = __webpack_require__(/*! ./property */ "../base/node_modules/licia/property.js");

exports = function(val, ctx, argCount) {
    if (val == null) return identity;
    if (isFn(val)) return optimizeCb(val, ctx, argCount);
    if (isObj(val) && !isArr(val)) return matcher(val);
    return property(val);
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/safeGet.js":
/*!*********************************************!*\
  !*** ../base/node_modules/licia/safeGet.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isUndef = __webpack_require__(/*! ./isUndef */ "../base/node_modules/licia/isUndef.js");
var castPath = __webpack_require__(/*! ./castPath */ "../base/node_modules/licia/castPath.js");

exports = function(obj, path) {
    path = castPath(path, obj);
    var prop;
    prop = path.shift();

    while (!isUndef(prop)) {
        obj = obj[prop];
        if (obj == null) return;
        prop = path.shift();
    }

    return obj;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/slice.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/slice.js ***!
  \*******************************************/
/***/ ((module, exports) => {

exports = function(arr, start, end) {
    var len = arr.length;

    if (start == null) {
        start = 0;
    } else if (start < 0) {
        start = Math.max(len + start, 0);
    } else {
        start = Math.min(start, len);
    }

    if (end == null) {
        end = len;
    } else if (end < 0) {
        end = Math.max(len + end, 0);
    } else {
        end = Math.min(end, len);
    }

    var ret = [];

    while (start < end) {
        ret.push(arr[start++]);
    }

    return ret;
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/stringify.js":
/*!***********************************************!*\
  !*** ../base/node_modules/licia/stringify.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var type = __webpack_require__(/*! ./type */ "../base/node_modules/licia/type.js");
var upperFirst = __webpack_require__(/*! ./upperFirst */ "../base/node_modules/licia/upperFirst.js");
var toStr = __webpack_require__(/*! ./toStr */ "../base/node_modules/licia/toStr.js");
var isUndef = __webpack_require__(/*! ./isUndef */ "../base/node_modules/licia/isUndef.js");
var isFn = __webpack_require__(/*! ./isFn */ "../base/node_modules/licia/isFn.js");
var isRegExp = __webpack_require__(/*! ./isRegExp */ "../base/node_modules/licia/isRegExp.js");

exports = function(obj, spaces) {
    return JSON.stringify(obj, serializer(), spaces);
};

function serializer() {
    var stack = [];
    var keys = [];
    return function(key, val) {
        if (stack.length > 0) {
            var pos = stack.indexOf(this);

            if (pos > -1) {
                stack.splice(pos + 1);
                keys.splice(pos, Infinity, key);
            } else {
                stack.push(this);
                keys.push(key);
            }

            var valPos = stack.indexOf(val);

            if (valPos > -1) {
                if (stack[0] === val) {
                    val = '[Circular ~]';
                } else {
                    val =
                        '[Circular ~.' + keys.slice(0, valPos).join('.') + ']';
                }
            }
        } else {
            stack.push(val);
        }

        if (isRegExp(val) || isFn(val)) {
            val = '[' + upperFirst(type(val)) + ' ' + toStr(val) + ']';
        } else if (isUndef(val)) {
            val = null;
        }

        return val;
    };
}

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/toArr.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/toArr.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var isArrLike = __webpack_require__(/*! ./isArrLike */ "../base/node_modules/licia/isArrLike.js");
var map = __webpack_require__(/*! ./map */ "../base/node_modules/licia/map.js");
var isArr = __webpack_require__(/*! ./isArr */ "../base/node_modules/licia/isArr.js");
var isStr = __webpack_require__(/*! ./isStr */ "../base/node_modules/licia/isStr.js");

exports = function(val) {
    if (!val) return [];
    if (isArr(val)) return val;
    if (isArrLike(val) && !isStr(val)) return map(val);
    return [val];
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/toStr.js":
/*!*******************************************!*\
  !*** ../base/node_modules/licia/toStr.js ***!
  \*******************************************/
/***/ ((module, exports) => {

exports = function(val) {
    return val == null ? '' : val.toString();
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/type.js":
/*!******************************************!*\
  !*** ../base/node_modules/licia/type.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "../base/node_modules/licia/objToStr.js");
var isNaN = __webpack_require__(/*! ./isNaN */ "../base/node_modules/licia/isNaN.js");
var lowerCase = __webpack_require__(/*! ./lowerCase */ "../base/node_modules/licia/lowerCase.js");
var isBuffer = __webpack_require__(/*! ./isBuffer */ "../base/node_modules/licia/isBuffer.js");

exports = function(val) {
    var lower =
        arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : true;
    var ret;
    if (val === null) ret = 'Null';
    if (val === undefined) ret = 'Undefined';
    if (isNaN(val)) ret = 'NaN';
    if (isBuffer(val)) ret = 'Buffer';

    if (!ret) {
        ret = objToStr(val).match(regObj);
        if (ret) ret = ret[1];
    }

    if (!ret) return '';
    return lower ? lowerCase(ret) : ret;
};

var regObj = /^\[object\s+(.*?)]$/;

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/unique.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/unique.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var filter = __webpack_require__(/*! ./filter */ "../base/node_modules/licia/filter.js");

exports = function(arr, cmp) {
    cmp = cmp || isEqual;
    return filter(arr, function(item, idx, arr) {
        var len = arr.length;

        while (++idx < len) {
            if (cmp(item, arr[idx])) return false;
        }

        return true;
    });
};

function isEqual(a, b) {
    return a === b;
}

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/upperFirst.js":
/*!************************************************!*\
  !*** ../base/node_modules/licia/upperFirst.js ***!
  \************************************************/
/***/ ((module, exports) => {

exports = function(str) {
    if (str.length < 1) return str;
    return str[0].toUpperCase() + str.slice(1);
};

module.exports = exports;


/***/ }),

/***/ "../base/node_modules/licia/values.js":
/*!********************************************!*\
  !*** ../base/node_modules/licia/values.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var each = __webpack_require__(/*! ./each */ "../base/node_modules/licia/each.js");

exports = function(obj) {
    var ret = [];
    each(obj, function(val) {
        ret.push(val);
    });
    return ret;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/Class.js":
/*!*************************************!*\
  !*** ./node_modules/licia/Class.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var extend = __webpack_require__(/*! ./extend */ "./node_modules/licia/extend.js");
var toArr = __webpack_require__(/*! ./toArr */ "./node_modules/licia/toArr.js");
var inherits = __webpack_require__(/*! ./inherits */ "./node_modules/licia/inherits.js");
var safeGet = __webpack_require__(/*! ./safeGet */ "./node_modules/licia/safeGet.js");
var isMiniProgram = __webpack_require__(/*! ./isMiniProgram */ "./node_modules/licia/isMiniProgram.js");

exports = function(methods, statics) {
    return Base.extend(methods, statics);
};

function makeClass(parent, methods, statics) {
    statics = statics || {};
    var className =
        methods.className || safeGet(methods, 'initialize.name') || '';
    delete methods.className;

    var ctor = function() {
        var args = toArr(arguments);
        return this.initialize
            ? this.initialize.apply(this, args) || this
            : this;
    };

    if (!isMiniProgram) {
        try {
            ctor = new Function(
                'toArr',
                'return function ' +
                    className +
                    '()' +
                    '{' +
                    'var args = toArr(arguments);' +
                    'return this.initialize ? this.initialize.apply(this, args) || this : this;' +
                    '};'
            )(toArr);
        } catch (e) {}
    }

    inherits(ctor, parent);
    ctor.prototype.constructor = ctor;

    ctor.extend = function(methods, statics) {
        return makeClass(ctor, methods, statics);
    };

    ctor.inherits = function(Class) {
        inherits(ctor, Class);
    };

    ctor.methods = function(methods) {
        extend(ctor.prototype, methods);
        return ctor;
    };

    ctor.statics = function(statics) {
        extend(ctor, statics);
        return ctor;
    };

    ctor.methods(methods).statics(statics);
    return ctor;
}

var Base = (exports.Base = makeClass(Object, {
    className: 'Base',
    callSuper: function(parent, name, args) {
        var superMethod = parent.prototype[name];
        return superMethod.apply(this, args);
    },
    toString: function() {
        return this.constructor.name;
    }
}));

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/Emitter.js":
/*!***************************************!*\
  !*** ./node_modules/licia/Emitter.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var Class = __webpack_require__(/*! ./Class */ "./node_modules/licia/Class.js");
var has = __webpack_require__(/*! ./has */ "./node_modules/licia/has.js");
var each = __webpack_require__(/*! ./each */ "./node_modules/licia/each.js");
var slice = __webpack_require__(/*! ./slice */ "./node_modules/licia/slice.js");
var once = __webpack_require__(/*! ./once */ "./node_modules/licia/once.js");
var clone = __webpack_require__(/*! ./clone */ "./node_modules/licia/clone.js");

exports = Class(
    {
        initialize: function Emitter() {
            this._events = this._events || {};
        },
        on: function(event, listener) {
            this._events[event] = this._events[event] || [];

            this._events[event].push(listener);

            return this;
        },
        off: function(event, listener) {
            var events = this._events;
            if (!has(events, event)) return;
            var idx = events[event].indexOf(listener);

            if (idx > -1) {
                events[event].splice(idx, 1);
            }

            return this;
        },
        once: function(event, listener) {
            this.on(event, once(listener));
            return this;
        },
        emit: function(event) {
            var _this = this;

            if (!has(this._events, event)) return;
            var args = slice(arguments, 1);
            var events = clone(this._events[event]);
            each(
                events,
                function(val) {
                    return val.apply(_this, args);
                },
                this
            );
            return this;
        },
        removeAllListeners: function(event) {
            if (!event) {
                this._events = {};
            } else {
                delete this._events[event];
            }

            return this;
        }
    },
    {
        mixin: function(obj) {
            each(['on', 'off', 'once', 'emit', 'removeAllListeners'], function(
                val
            ) {
                obj[val] = exports.prototype[val];
            });
            obj._events = obj._events || {};
        }
    }
);

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/allKeys.js":
/*!***************************************!*\
  !*** ./node_modules/licia/allKeys.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var keys = __webpack_require__(/*! ./keys */ "./node_modules/licia/keys.js");
var getProto = __webpack_require__(/*! ./getProto */ "./node_modules/licia/getProto.js");
var unique = __webpack_require__(/*! ./unique */ "./node_modules/licia/unique.js");

var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;

exports = function(obj) {
    var _ref =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
        _ref$prototype = _ref.prototype,
        prototype = _ref$prototype === void 0 ? true : _ref$prototype,
        _ref$unenumerable = _ref.unenumerable,
        unenumerable = _ref$unenumerable === void 0 ? false : _ref$unenumerable,
        _ref$symbol = _ref.symbol,
        symbol = _ref$symbol === void 0 ? false : _ref$symbol;

    var ret = [];

    if ((unenumerable || symbol) && getOwnPropertyNames) {
        var getKeys = keys;
        if (unenumerable && getOwnPropertyNames) getKeys = getOwnPropertyNames;

        do {
            ret = ret.concat(getKeys(obj));

            if (symbol && getOwnPropertySymbols) {
                ret = ret.concat(getOwnPropertySymbols(obj));
            }
        } while (
            prototype &&
            (obj = getProto(obj)) &&
            obj !== Object.prototype
        );

        ret = unique(ret);
    } else {
        if (prototype) {
            for (var key in obj) {
                ret.push(key);
            }
        } else {
            ret = keys(obj);
        }
    }

    return ret;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/before.js":
/*!**************************************!*\
  !*** ./node_modules/licia/before.js ***!
  \**************************************/
/***/ ((module, exports) => {

exports = function(n, fn) {
    var memo;
    return function() {
        if (--n > 0) memo = fn.apply(this, arguments);
        if (n <= 1) fn = null;
        return memo;
    };
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/castPath.js":
/*!****************************************!*\
  !*** ./node_modules/licia/castPath.js ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./has */ "./node_modules/licia/has.js");
var isArr = __webpack_require__(/*! ./isArr */ "./node_modules/licia/isArr.js");

exports = function(str, obj) {
    if (isArr(str)) return str;
    if (obj && has(obj, str)) return [str];
    var ret = [];
    str.replace(regPropName, function(match, number, quote, str) {
        ret.push(quote ? str.replace(regEscapeChar, '$1') : number || match);
    });
    return ret;
};

var regPropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var regEscapeChar = /\\(\\)?/g;

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/clone.js":
/*!*************************************!*\
  !*** ./node_modules/licia/clone.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var isObj = __webpack_require__(/*! ./isObj */ "./node_modules/licia/isObj.js");
var isArr = __webpack_require__(/*! ./isArr */ "./node_modules/licia/isArr.js");
var extend = __webpack_require__(/*! ./extend */ "./node_modules/licia/extend.js");

exports = function(obj) {
    if (!isObj(obj)) return obj;
    return isArr(obj) ? obj.slice() : extend({}, obj);
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/create.js":
/*!**************************************!*\
  !*** ./node_modules/licia/create.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

var isObj = __webpack_require__(/*! ./isObj */ "./node_modules/licia/isObj.js");

exports = function(proto) {
    if (!isObj(proto)) return {};
    if (objCreate && !false) return objCreate(proto);

    function noop() {}

    noop.prototype = proto;
    return new noop();
};

var objCreate = Object.create;

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/createAssigner.js":
/*!**********************************************!*\
  !*** ./node_modules/licia/createAssigner.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isUndef = __webpack_require__(/*! ./isUndef */ "./node_modules/licia/isUndef.js");
var each = __webpack_require__(/*! ./each */ "./node_modules/licia/each.js");

exports = function(keysFn, defaults) {
    return function(obj) {
        each(arguments, function(src, idx) {
            if (idx === 0) return;
            var keys = keysFn(src);
            each(keys, function(key) {
                if (!defaults || isUndef(obj[key])) obj[key] = src[key];
            });
        });
        return obj;
    };
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/each.js":
/*!************************************!*\
  !*** ./node_modules/licia/each.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

var isArrLike = __webpack_require__(/*! ./isArrLike */ "./node_modules/licia/isArrLike.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/licia/keys.js");
var optimizeCb = __webpack_require__(/*! ./optimizeCb */ "./node_modules/licia/optimizeCb.js");

exports = function(obj, iterator, ctx) {
    iterator = optimizeCb(iterator, ctx);
    var i, len;

    if (isArrLike(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
            iterator(obj[i], i, obj);
        }
    } else {
        var _keys = keys(obj);

        for (i = 0, len = _keys.length; i < len; i++) {
            iterator(obj[_keys[i]], _keys[i], obj);
        }
    }

    return obj;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/extend.js":
/*!**************************************!*\
  !*** ./node_modules/licia/extend.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

var createAssigner = __webpack_require__(/*! ./createAssigner */ "./node_modules/licia/createAssigner.js");
var allKeys = __webpack_require__(/*! ./allKeys */ "./node_modules/licia/allKeys.js");

exports = createAssigner(allKeys);

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/extendOwn.js":
/*!*****************************************!*\
  !*** ./node_modules/licia/extendOwn.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var keys = __webpack_require__(/*! ./keys */ "./node_modules/licia/keys.js");
var createAssigner = __webpack_require__(/*! ./createAssigner */ "./node_modules/licia/createAssigner.js");

exports = createAssigner(keys);

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/filter.js":
/*!**************************************!*\
  !*** ./node_modules/licia/filter.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

var safeCb = __webpack_require__(/*! ./safeCb */ "./node_modules/licia/safeCb.js");
var each = __webpack_require__(/*! ./each */ "./node_modules/licia/each.js");

exports = function(obj, predicate, ctx) {
    var ret = [];
    predicate = safeCb(predicate, ctx);
    each(obj, function(val, idx, list) {
        if (predicate(val, idx, list)) ret.push(val);
    });
    return ret;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/getProto.js":
/*!****************************************!*\
  !*** ./node_modules/licia/getProto.js ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

var isObj = __webpack_require__(/*! ./isObj */ "./node_modules/licia/isObj.js");
var isFn = __webpack_require__(/*! ./isFn */ "./node_modules/licia/isFn.js");

var getPrototypeOf = Object.getPrototypeOf;
var ObjectCtr = {}.constructor;

exports = function(obj) {
    if (!isObj(obj)) return;
    if (getPrototypeOf && !false) return getPrototypeOf(obj);
    var proto = obj.__proto__;
    if (proto || proto === null) return proto;
    if (isFn(obj.constructor)) return obj.constructor.prototype;
    if (obj instanceof ObjectCtr) return ObjectCtr.prototype;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/has.js":
/*!***********************************!*\
  !*** ./node_modules/licia/has.js ***!
  \***********************************/
/***/ ((module, exports) => {

var hasOwnProp = Object.prototype.hasOwnProperty;

exports = function(obj, key) {
    return hasOwnProp.call(obj, key);
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/identity.js":
/*!****************************************!*\
  !*** ./node_modules/licia/identity.js ***!
  \****************************************/
/***/ ((module, exports) => {

exports = function(val) {
    return val;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/inherits.js":
/*!****************************************!*\
  !*** ./node_modules/licia/inherits.js ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

var create = __webpack_require__(/*! ./create */ "./node_modules/licia/create.js");

exports = function(Class, SuperClass) {
    Class.prototype = create(SuperClass.prototype);
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isArr.js":
/*!*************************************!*\
  !*** ./node_modules/licia/isArr.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "./node_modules/licia/objToStr.js");

if (Array.isArray && !false) {
    exports = Array.isArray;
} else {
    exports = function(val) {
        return objToStr(val) === '[object Array]';
    };
}

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isArrLike.js":
/*!*****************************************!*\
  !*** ./node_modules/licia/isArrLike.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var isNum = __webpack_require__(/*! ./isNum */ "./node_modules/licia/isNum.js");
var isFn = __webpack_require__(/*! ./isFn */ "./node_modules/licia/isFn.js");

var MAX_ARR_IDX = Math.pow(2, 53) - 1;

exports = function(val) {
    if (!val) return false;
    var len = val.length;
    return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isFn.js":
/*!************************************!*\
  !*** ./node_modules/licia/isFn.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "./node_modules/licia/objToStr.js");

exports = function(val) {
    var objStr = objToStr(val);
    return (
        objStr === '[object Function]' ||
        objStr === '[object GeneratorFunction]' ||
        objStr === '[object AsyncFunction]'
    );
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isMatch.js":
/*!***************************************!*\
  !*** ./node_modules/licia/isMatch.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var keys = __webpack_require__(/*! ./keys */ "./node_modules/licia/keys.js");

exports = function(obj, src) {
    var _keys = keys(src);

    var len = _keys.length;
    if (obj == null) return !len;
    obj = Object(obj);

    for (var i = 0; i < len; i++) {
        var key = _keys[i];
        if (src[key] !== obj[key] || !(key in obj)) return false;
    }

    return true;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isMiniProgram.js":
/*!*********************************************!*\
  !*** ./node_modules/licia/isMiniProgram.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var isFn = __webpack_require__(/*! ./isFn */ "./node_modules/licia/isFn.js");

exports = typeof wx !== 'undefined' && isFn(wx.openLocation);

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isNum.js":
/*!*************************************!*\
  !*** ./node_modules/licia/isNum.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "./node_modules/licia/objToStr.js");

exports = function(val) {
    return objToStr(val) === '[object Number]';
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isObj.js":
/*!*************************************!*\
  !*** ./node_modules/licia/isObj.js ***!
  \*************************************/
/***/ ((module, exports) => {

exports = function(val) {
    var type = typeof val;
    return !!val && (type === 'function' || type === 'object');
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isStr.js":
/*!*************************************!*\
  !*** ./node_modules/licia/isStr.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "./node_modules/licia/objToStr.js");

exports = function(val) {
    return objToStr(val) === '[object String]';
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/isUndef.js":
/*!***************************************!*\
  !*** ./node_modules/licia/isUndef.js ***!
  \***************************************/
/***/ ((module, exports) => {

exports = function(val) {
    return val === void 0;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/keys.js":
/*!************************************!*\
  !*** ./node_modules/licia/keys.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./has */ "./node_modules/licia/has.js");

if (Object.keys && !false) {
    exports = Object.keys;
} else {
    exports = function(obj) {
        var ret = [];

        for (var key in obj) {
            if (has(obj, key)) ret.push(key);
        }

        return ret;
    };
}

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/loadJs.js":
/*!**************************************!*\
  !*** ./node_modules/licia/loadJs.js ***!
  \**************************************/
/***/ ((module, exports) => {

exports = function(src, cb) {
    var script = document.createElement('script');
    script.src = src;

    script.onload = function() {
        var isNotLoaded =
            script.readyState &&
            script.readyState != 'complete' &&
            script.readyState != 'loaded';
        cb && cb(!isNotLoaded);
    };

    script.onerror = function() {
        cb(false);
    };

    document.body.appendChild(script);
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/map.js":
/*!***********************************!*\
  !*** ./node_modules/licia/map.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

var safeCb = __webpack_require__(/*! ./safeCb */ "./node_modules/licia/safeCb.js");
var keys = __webpack_require__(/*! ./keys */ "./node_modules/licia/keys.js");
var isArrLike = __webpack_require__(/*! ./isArrLike */ "./node_modules/licia/isArrLike.js");

exports = function(obj, iterator, ctx) {
    iterator = safeCb(iterator, ctx);

    var _keys = !isArrLike(obj) && keys(obj);

    var len = (_keys || obj).length;
    var results = Array(len);

    for (var i = 0; i < len; i++) {
        var curKey = _keys ? _keys[i] : i;
        results[i] = iterator(obj[curKey], curKey, obj);
    }

    return results;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/matcher.js":
/*!***************************************!*\
  !*** ./node_modules/licia/matcher.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var extendOwn = __webpack_require__(/*! ./extendOwn */ "./node_modules/licia/extendOwn.js");
var isMatch = __webpack_require__(/*! ./isMatch */ "./node_modules/licia/isMatch.js");

exports = function(attrs) {
    attrs = extendOwn({}, attrs);
    return function(obj) {
        return isMatch(obj, attrs);
    };
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/objToStr.js":
/*!****************************************!*\
  !*** ./node_modules/licia/objToStr.js ***!
  \****************************************/
/***/ ((module, exports) => {

var ObjToStr = Object.prototype.toString;

exports = function(val) {
    return ObjToStr.call(val);
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/once.js":
/*!************************************!*\
  !*** ./node_modules/licia/once.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

var partial = __webpack_require__(/*! ./partial */ "./node_modules/licia/partial.js");
var before = __webpack_require__(/*! ./before */ "./node_modules/licia/before.js");

exports = partial(before, 2);

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/optimizeCb.js":
/*!******************************************!*\
  !*** ./node_modules/licia/optimizeCb.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var isUndef = __webpack_require__(/*! ./isUndef */ "./node_modules/licia/isUndef.js");

exports = function(fn, ctx, argCount) {
    if (isUndef(ctx)) return fn;

    switch (argCount == null ? 3 : argCount) {
        case 1:
            return function(val) {
                return fn.call(ctx, val);
            };

        case 3:
            return function(val, idx, collection) {
                return fn.call(ctx, val, idx, collection);
            };

        case 4:
            return function(accumulator, val, idx, collection) {
                return fn.call(ctx, accumulator, val, idx, collection);
            };
    }

    return function() {
        return fn.apply(ctx, arguments);
    };
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/partial.js":
/*!***************************************!*\
  !*** ./node_modules/licia/partial.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var restArgs = __webpack_require__(/*! ./restArgs */ "./node_modules/licia/restArgs.js");
var toArr = __webpack_require__(/*! ./toArr */ "./node_modules/licia/toArr.js");

exports = restArgs(function(fn, partials) {
    return function() {
        var args = [];
        args = args.concat(partials);
        args = args.concat(toArr(arguments));
        return fn.apply(this, args);
    };
});

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/property.js":
/*!****************************************!*\
  !*** ./node_modules/licia/property.js ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

var isArr = __webpack_require__(/*! ./isArr */ "./node_modules/licia/isArr.js");
var safeGet = __webpack_require__(/*! ./safeGet */ "./node_modules/licia/safeGet.js");

exports = function(path) {
    if (!isArr(path)) return shallowProperty(path);
    return function(obj) {
        return safeGet(obj, path);
    };
};

function shallowProperty(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key];
    };
}

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/restArgs.js":
/*!****************************************!*\
  !*** ./node_modules/licia/restArgs.js ***!
  \****************************************/
/***/ ((module, exports) => {

exports = function(fn, startIdx) {
    startIdx = startIdx == null ? fn.length - 1 : +startIdx;
    return function() {
        var len = Math.max(arguments.length - startIdx, 0);
        var rest = new Array(len);
        var i;

        for (i = 0; i < len; i++) {
            rest[i] = arguments[i + startIdx];
        }

        switch (startIdx) {
            case 0:
                return fn.call(this, rest);

            case 1:
                return fn.call(this, arguments[0], rest);

            case 2:
                return fn.call(this, arguments[0], arguments[1], rest);
        }

        var args = new Array(startIdx + 1);

        for (i = 0; i < startIdx; i++) {
            args[i] = arguments[i];
        }

        args[startIdx] = rest;
        return fn.apply(this, args);
    };
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/safeCb.js":
/*!**************************************!*\
  !*** ./node_modules/licia/safeCb.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

var isFn = __webpack_require__(/*! ./isFn */ "./node_modules/licia/isFn.js");
var isObj = __webpack_require__(/*! ./isObj */ "./node_modules/licia/isObj.js");
var isArr = __webpack_require__(/*! ./isArr */ "./node_modules/licia/isArr.js");
var optimizeCb = __webpack_require__(/*! ./optimizeCb */ "./node_modules/licia/optimizeCb.js");
var matcher = __webpack_require__(/*! ./matcher */ "./node_modules/licia/matcher.js");
var identity = __webpack_require__(/*! ./identity */ "./node_modules/licia/identity.js");
var property = __webpack_require__(/*! ./property */ "./node_modules/licia/property.js");

exports = function(val, ctx, argCount) {
    if (val == null) return identity;
    if (isFn(val)) return optimizeCb(val, ctx, argCount);
    if (isObj(val) && !isArr(val)) return matcher(val);
    return property(val);
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/safeGet.js":
/*!***************************************!*\
  !*** ./node_modules/licia/safeGet.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var isUndef = __webpack_require__(/*! ./isUndef */ "./node_modules/licia/isUndef.js");
var castPath = __webpack_require__(/*! ./castPath */ "./node_modules/licia/castPath.js");

exports = function(obj, path) {
    path = castPath(path, obj);
    var prop;
    prop = path.shift();

    while (!isUndef(prop)) {
        obj = obj[prop];
        if (obj == null) return;
        prop = path.shift();
    }

    return obj;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/slice.js":
/*!*************************************!*\
  !*** ./node_modules/licia/slice.js ***!
  \*************************************/
/***/ ((module, exports) => {

exports = function(arr, start, end) {
    var len = arr.length;

    if (start == null) {
        start = 0;
    } else if (start < 0) {
        start = Math.max(len + start, 0);
    } else {
        start = Math.min(start, len);
    }

    if (end == null) {
        end = len;
    } else if (end < 0) {
        end = Math.max(len + end, 0);
    } else {
        end = Math.min(end, len);
    }

    var ret = [];

    while (start < end) {
        ret.push(arr[start++]);
    }

    return ret;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/toArr.js":
/*!*************************************!*\
  !*** ./node_modules/licia/toArr.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var isArrLike = __webpack_require__(/*! ./isArrLike */ "./node_modules/licia/isArrLike.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/licia/map.js");
var isArr = __webpack_require__(/*! ./isArr */ "./node_modules/licia/isArr.js");
var isStr = __webpack_require__(/*! ./isStr */ "./node_modules/licia/isStr.js");

exports = function(val) {
    if (!val) return [];
    if (isArr(val)) return val;
    if (isArrLike(val) && !isStr(val)) return map(val);
    return [val];
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/uniqId.js":
/*!**************************************!*\
  !*** ./node_modules/licia/uniqId.js ***!
  \**************************************/
/***/ ((module, exports) => {

var idCounter = 0;

exports = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/unique.js":
/*!**************************************!*\
  !*** ./node_modules/licia/unique.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

var filter = __webpack_require__(/*! ./filter */ "./node_modules/licia/filter.js");

exports = function(arr, cmp) {
    cmp = cmp || isEqual;
    return filter(arr, function(item, idx, arr) {
        var len = arr.length;

        while (++idx < len) {
            if (cmp(item, arr[idx])) return false;
        }

        return true;
    });
};

function isEqual(a, b) {
    return a === b;
}

module.exports = exports;


/***/ }),

/***/ "./src/appservice/index.ts":
/*!*********************************!*\
  !*** ./src/appservice/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Appservice = void 0;
var wxa_runtime_base_1 = __webpack_require__(/*! @tencent/wxa-runtime-base */ "../base/dist/browser.js");
var loadJs_1 = __importDefault(__webpack_require__(/*! licia/loadJs */ "./node_modules/licia/loadJs.js"));
var createBridge_1 = __importDefault(__webpack_require__(/*! ./lib/createBridge */ "./src/appservice/lib/createBridge.ts"));
var Appservice = /** @class */ (function () {
    function Appservice() {
        var _this = this;
        this.handleMsgSync = function (msg) {
            switch (msg.command) {
                case 'CALL_METHOD':
                    return _this.handleCallMethodSync(msg.data);
            }
        };
        this.rewriteUa();
        this.initMessenger();
        this.initBridge();
        this.messenger.send({
            command: 'APPSERVICE_CREATED'
        });
    }
    Appservice.prototype.injectScript = function (src) {
        return new Promise(function (resolve) {
            (0, loadJs_1["default"])(src, function () {
                resolve(null);
            });
        });
    };
    Appservice.prototype.injectWxConfig = function (wxConfig) {
        window.__wxConfig = wxConfig;
    };
    Appservice.prototype.initBridge = function () {
        window.WeixinJSBridge = (0, createBridge_1["default"])(this.messenger);
    };
    Appservice.prototype.initMessenger = function () {
        this.messenger = new wxa_runtime_base_1.IframeMessenger(window.parent, this.handleMsgSync);
    };
    Appservice.prototype.rewriteUa = function () {
        Object.defineProperty(window.navigator, 'userAgent', {
            get: function () {
                return 'wechatdevtools appservice';
            }
        });
    };
    Appservice.prototype.handleCallMethodSync = function (data) {
        var name = data.name, args = data.args;
        var method = this[name];
        return method.call.apply(method, __spreadArray([this], args, false));
    };
    return Appservice;
}());
exports.Appservice = Appservice;
window.appservice = new Appservice();


/***/ }),

/***/ "./src/appservice/lib/createBridge.ts":
/*!********************************************!*\
  !*** ./src/appservice/lib/createBridge.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Emitter_1 = __importDefault(__webpack_require__(/*! licia/Emitter */ "./node_modules/licia/Emitter.js"));
var uniqId_1 = __importDefault(__webpack_require__(/*! licia/uniqId */ "./node_modules/licia/uniqId.js"));
var wxa_runtime_base_1 = __webpack_require__(/*! @tencent/wxa-runtime-base */ "../base/dist/browser.js");
var logger = (0, wxa_runtime_base_1.log)('asBridge');
function default_1(messenger) {
    var _this = this;
    var onEmitter = new Emitter_1["default"]();
    var subscribeEmitter = new Emitter_1["default"]();
    var callbacks = {};
    messenger.on('message', function (msg) { return __awaiter(_this, void 0, void 0, function () {
        var command, data, webviewId, callbackId, res;
        return __generator(this, function (_a) {
            command = msg.command, data = msg.data, webviewId = msg.webviewId;
            switch (command) {
                case 'APPSERVICE_ON_EVENT': {
                    onEmitter.emit(data.eventName, data.data, webviewId);
                    break;
                }
                case 'APPSERVICE_INVOKE_CALLBACK': {
                    callbackId = data.callbackId, res = data.res;
                    if (callbacks[callbackId]) {
                        callbacks[callbackId](res);
                        delete callbacks[callbackId];
                    }
                    break;
                }
                case 'WEBVIEW_PUBLISH': {
                    subscribeEmitter.emit(data.eventName, data.data, webviewId);
                    break;
                }
            }
            return [2 /*return*/];
        });
    }); });
    return {
        invoke: function (api, args, callback) {
            var msg = {
                command: 'APPSERVICE_INVOKE',
                data: {
                    api: api,
                    args: args
                }
            };
            if ((0, wxa_runtime_base_1.isSyncApi)(api)) {
                var result = messenger.sendSync(msg);
                logger.debug('invoke sync', api, args, result.errMsg, result);
                callback(result);
            }
            else {
                var callbackId = (0, uniqId_1["default"])();
                logger.debug('invoke', api, callbackId, args);
                callbacks[callbackId] = callback;
                msg.data.callbackId = callbackId;
                messenger.send(msg);
            }
        },
        publish: function (eventName, data, webviewIds) {
            logger.debug('publish', eventName, data, webviewIds);
            data = JSON.parse(JSON.stringify(data));
            messenger.send({
                command: 'APPSERVICE_PUBLISH',
                data: {
                    eventName: eventName,
                    data: data,
                    webviewIds: webviewIds
                }
            });
        },
        subscribe: function (eventName, callback) {
            logger.debug('subscribe', eventName);
            subscribeEmitter.on(eventName, callback);
        },
        on: function (api, callback) {
            logger.debug('on', api);
            onEmitter.on(api, callback);
        }
    };
}
exports["default"] = default_1;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/appservice/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=appservice.js.map
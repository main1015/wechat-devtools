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

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "./node_modules/axios/lib/defaults/transitional.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
var parseProtocol = __webpack_require__(/*! ../helpers/parseProtocol */ "./node_modules/axios/lib/helpers/parseProtocol.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    var protocol = parseProtocol(fullPath);

    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = __webpack_require__(/*! ./cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);
axios.toFormData = __webpack_require__(/*! ./helpers/toFormData */ "./node_modules/axios/lib/helpers/toFormData.js");

// Expose AxiosError class
axios.AxiosError = __webpack_require__(/*! ../lib/core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var CanceledError = __webpack_require__(/*! ./CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function CanceledError(message) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

module.exports = CanceledError;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var buildFullPath = __webpack_require__(/*! ./buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError.prototype;
var descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

module.exports = AxiosError;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ./AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var transitionalDefaults = __webpack_require__(/*! ./transitional */ "./node_modules/axios/lib/defaults/transitional.js");
var toFormData = __webpack_require__(/*! ../helpers/toFormData */ "./node_modules/axios/lib/helpers/toFormData.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: __webpack_require__(/*! ./env/FormData */ "./node_modules/axios/lib/helpers/null.js")
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.27.2"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((module) => {

// eslint-disable-next-line strict
module.exports = null;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils.isPlainObject(data) || utils.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);

      utils.forEach(data, function each(value, key) {
        if (utils.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && typeof value === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function(el) {
              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });

      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);

  return formData;
}

module.exports = toFormData;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/licia/base64.js":
/*!**************************************!*\
  !*** ./node_modules/licia/base64.js ***!
  \**************************************/
/***/ ((module, exports) => {

exports = {
    encode: function(bytes) {
        var ret = [];
        var len = bytes.length;
        var remain = len % 3;
        len = len - remain;

        for (var i = 0; i < len; i += 3) {
            ret.push(
                numToBase64(
                    (bytes[i] << 16) + (bytes[i + 1] << 8) + bytes[i + 2]
                )
            );
        }

        len = bytes.length;
        var tmp;

        if (remain === 1) {
            tmp = bytes[len - 1];
            ret.push(code[tmp >> 2]);
            ret.push(code[(tmp << 4) & 0x3f]);
            ret.push('==');
        } else if (remain === 2) {
            tmp = (bytes[len - 2] << 8) + bytes[len - 1];
            ret.push(code[tmp >> 10]);
            ret.push(code[(tmp >> 4) & 0x3f]);
            ret.push(code[(tmp << 2) & 0x3f]);
            ret.push('=');
        }

        return ret.join('');
    },
    decode: function(str) {
        var len = str.length,
            remain = 0;
        if (str[len - 2] === '=') remain = 2;
        else if (str[len - 1] === '=') remain = 1;
        var ret = new Array((len * 3) / 4 - remain);
        len = remain > 0 ? len - 4 : len;
        var i, j;

        for (i = 0, j = 0; i < len; i += 4) {
            var num = base64ToNum(str[i], str[i + 1], str[i + 2], str[i + 3]);
            ret[j++] = (num >> 16) & 0xff;
            ret[j++] = (num >> 8) & 0xff;
            ret[j++] = num & 0xff;
        }

        var tmp;

        if (remain === 2) {
            tmp =
                (codeMap[str.charCodeAt(i)] << 2) |
                (codeMap[str.charCodeAt(i + 1)] >> 4);
            ret[j++] = tmp & 0xff;
        } else if (remain === 1) {
            tmp =
                (codeMap[str.charCodeAt(i)] << 10) |
                (codeMap[str.charCodeAt(i + 1)] << 4) |
                (codeMap[str.charCodeAt(i + 2)] >> 2);
            ret[j++] = (tmp >> 8) & 0xff;
            ret[j++] = tmp & 0xff;
        }

        return ret;
    }
};
var codeMap = [];
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; i++) {
    codeMap[code.charCodeAt(i)] = i;
}

function numToBase64(num) {
    return (
        code[(num >> 18) & 0x3f] +
        code[(num >> 12) & 0x3f] +
        code[(num >> 6) & 0x3f] +
        code[num & 0x3f]
    );
}

function base64ToNum(str1, str2, str3, str4) {
    return (
        (codeMap[str1.charCodeAt(0)] << 18) |
        (codeMap[str2.charCodeAt(0)] << 12) |
        (codeMap[str3.charCodeAt(0)] << 6) |
        codeMap[str4.charCodeAt(0)]
    );
}

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/bytesToStr.js":
/*!******************************************!*\
  !*** ./node_modules/licia/bytesToStr.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var utf8 = __webpack_require__(/*! ./utf8 */ "./node_modules/licia/utf8.js");
var hex = __webpack_require__(/*! ./hex */ "./node_modules/licia/hex.js");
var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/licia/base64.js");

exports = function(bytes) {
    var encoding =
        arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 'utf8';
    if (encoding === 'hex') return hex.encode(bytes);
    if (encoding === 'base64') return base64.encode(bytes);
    var str = [];

    for (var i = 0, len = bytes.length; i < len; i++) {
        str.push(String.fromCharCode(bytes[i]));
    }

    str = str.join('');

    if (encoding === 'utf8') {
        str = utf8.decode(str);
    }

    return str;
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

/***/ "./node_modules/licia/chunk.js":
/*!*************************************!*\
  !*** ./node_modules/licia/chunk.js ***!
  \*************************************/
/***/ ((module, exports) => {

exports = function(arr, size) {
    var ret = [];
    size = size || 1;

    for (var i = 0, len = Math.ceil(arr.length / size); i < len; i++) {
        var start = i * size;
        var end = start + size;
        ret.push(arr.slice(start, end));
    }

    return ret;
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/convertBin.js":
/*!******************************************!*\
  !*** ./node_modules/licia/convertBin.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var isStr = __webpack_require__(/*! ./isStr */ "./node_modules/licia/isStr.js");
var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/licia/base64.js");
var isArrBuffer = __webpack_require__(/*! ./isArrBuffer */ "./node_modules/licia/isArrBuffer.js");
var isArr = __webpack_require__(/*! ./isArr */ "./node_modules/licia/isArr.js");
var isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/licia/isBuffer.js");
var type = __webpack_require__(/*! ./type */ "./node_modules/licia/type.js");
var lowerCase = __webpack_require__(/*! ./lowerCase */ "./node_modules/licia/lowerCase.js");

exports = function(bin, t) {
    var result;
    t = lowerCase(t);

    if (isStr(bin)) {
        result = new Uint8Array(base64.decode(bin));
    } else if (isArrBuffer(bin)) {
        bin = bin.slice(0);
        result = new Uint8Array(bin);
    } else if (isArr(bin)) {
        result = new Uint8Array(bin);
    } else if (type(bin) === 'uint8array') {
        result = bin.slice(0);
    } else if (isBuffer(bin)) {
        result = new Uint8Array(bin.length);

        for (var i = 0; i < bin.length; i++) {
            result[i] = bin[i];
        }
    }

    if (result) {
        switch (t) {
            case 'base64':
                result = base64.encode(result);
                break;

            case 'arraybuffer':
                result = result.buffer;
                break;

            case 'array':
                result = [].slice.call(result);
                break;

            case 'buffer':
                result = Buffer.from(result);
                break;

            case 'blob':
                result = new Blob([result.buffer]);
                break;
        }
    }

    return result;
};

exports.blobToArrBuffer = function(blob) {
    return new Promise(function(resolve, reject) {
        var fileReader = new FileReader();

        fileReader.onload = function(e) {
            resolve(e.target.result);
        };

        fileReader.onerror = function(err) {
            reject(err);
        };

        fileReader.readAsArrayBuffer(blob);
    });
};

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

/***/ "./node_modules/licia/hex.js":
/*!***********************************!*\
  !*** ./node_modules/licia/hex.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

var isOdd = __webpack_require__(/*! ./isOdd */ "./node_modules/licia/isOdd.js");

exports = {
    encode: function(bytes) {
        var hex = [];

        for (var i = 0, len = bytes.length; i < len; i++) {
            var byte = bytes[i];
            hex.push((byte >>> 4).toString(16));
            hex.push((byte & 0xf).toString(16));
        }

        return hex.join('');
    },
    decode: function(str) {
        var bytes = [];
        var len = str.length;
        if (isOdd(len)) len--;

        for (var i = 0; i < len; i += 2) {
            bytes.push(parseInt(str.substr(i, 2), 16));
        }

        return bytes;
    }
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

/***/ "./node_modules/licia/isArrBuffer.js":
/*!*******************************************!*\
  !*** ./node_modules/licia/isArrBuffer.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "./node_modules/licia/objToStr.js");

exports = function(val) {
    return objToStr(val) === '[object ArrayBuffer]';
};

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

/***/ "./node_modules/licia/isBuffer.js":
/*!****************************************!*\
  !*** ./node_modules/licia/isBuffer.js ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

var isFn = __webpack_require__(/*! ./isFn */ "./node_modules/licia/isFn.js");

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

/***/ "./node_modules/licia/isInt.js":
/*!*************************************!*\
  !*** ./node_modules/licia/isInt.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var isNum = __webpack_require__(/*! ./isNum */ "./node_modules/licia/isNum.js");

exports = function(val) {
    return isNum(val) && val % 1 === 0;
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

/***/ "./node_modules/licia/isNaN.js":
/*!*************************************!*\
  !*** ./node_modules/licia/isNaN.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var isNum = __webpack_require__(/*! ./isNum */ "./node_modules/licia/isNum.js");

exports = function(val) {
    return isNum(val) && val !== +val;
};

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

/***/ "./node_modules/licia/isOdd.js":
/*!*************************************!*\
  !*** ./node_modules/licia/isOdd.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var isInt = __webpack_require__(/*! ./isInt */ "./node_modules/licia/isInt.js");

exports = function(num) {
    if (!isInt(num)) return false;
    return num % 2 !== 0;
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

/***/ "./node_modules/licia/lowerCase.js":
/*!*****************************************!*\
  !*** ./node_modules/licia/lowerCase.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var toStr = __webpack_require__(/*! ./toStr */ "./node_modules/licia/toStr.js");

exports = function(str) {
    return toStr(str).toLocaleLowerCase();
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

/***/ "./node_modules/licia/toStr.js":
/*!*************************************!*\
  !*** ./node_modules/licia/toStr.js ***!
  \*************************************/
/***/ ((module, exports) => {

exports = function(val) {
    return val == null ? '' : val.toString();
};

module.exports = exports;


/***/ }),

/***/ "./node_modules/licia/type.js":
/*!************************************!*\
  !*** ./node_modules/licia/type.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

var objToStr = __webpack_require__(/*! ./objToStr */ "./node_modules/licia/objToStr.js");
var isNaN = __webpack_require__(/*! ./isNaN */ "./node_modules/licia/isNaN.js");
var lowerCase = __webpack_require__(/*! ./lowerCase */ "./node_modules/licia/lowerCase.js");
var isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/licia/isBuffer.js");

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

/***/ "./node_modules/licia/ucs2.js":
/*!************************************!*\
  !*** ./node_modules/licia/ucs2.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

var chunk = __webpack_require__(/*! ./chunk */ "./node_modules/licia/chunk.js");
var map = __webpack_require__(/*! ./map */ "./node_modules/licia/map.js");

exports = {
    encode: function(arr) {
        if (arr.length < 32768) {
            return String.fromCodePoint.apply(String, arr);
        }

        return map(chunk(arr, 32767), function(nums) {
            return String.fromCodePoint.apply(String, nums);
        }).join('');
    },
    decode: function(str) {
        var ret = [];
        var i = 0;
        var len = str.length;

        while (i < len) {
            var c = str.charCodeAt(i++);

            if (c >= 0xd800 && c <= 0xdbff && i < len) {
                var tail = str.charCodeAt(i++);

                if ((tail & 0xfc00) === 0xdc00) {
                    ret.push(((c & 0x3ff) << 10) + (tail & 0x3ff) + 0x10000);
                } else {
                    ret.push(c);
                    i--;
                }
            } else {
                ret.push(c);
            }
        }

        return ret;
    }
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

/***/ "./node_modules/licia/utf8.js":
/*!************************************!*\
  !*** ./node_modules/licia/utf8.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

var ucs2 = __webpack_require__(/*! ./ucs2 */ "./node_modules/licia/ucs2.js");

exports = {
    encode: function(str) {
        var codePoints = ucs2.decode(str);
        var byteArr = '';

        for (var i = 0, len = codePoints.length; i < len; i++) {
            byteArr += encodeCodePoint(codePoints[i]);
        }

        return byteArr;
    },
    decode: function(str, safe) {
        byteArr = ucs2.decode(str);
        byteIdx = 0;
        byteCount = byteArr.length;
        codePoint = 0;
        bytesSeen = 0;
        bytesNeeded = 0;
        lowerBoundary = 0x80;
        upperBoundary = 0xbf;
        var codePoints = [];
        var tmp;

        while ((tmp = decodeCodePoint(safe)) !== false) {
            codePoints.push(tmp);
        }

        return ucs2.encode(codePoints);
    }
};
var fromCharCode = String.fromCharCode;

function encodeCodePoint(codePoint) {
    if ((codePoint & 0xffffff80) === 0) {
        return fromCharCode(codePoint);
    }

    var ret = '',
        count,
        offset;

    if ((codePoint & 0xfffff800) === 0) {
        count = 1;
        offset = 0xc0;
    } else if ((codePoint & 0xffff0000) === 0) {
        count = 2;
        offset = 0xe0;
    } else if ((codePoint & 0xffe00000) == 0) {
        count = 3;
        offset = 0xf0;
    }

    ret += fromCharCode((codePoint >> (6 * count)) + offset);

    while (count > 0) {
        var tmp = codePoint >> (6 * (count - 1));
        ret += fromCharCode(0x80 | (tmp & 0x3f));
        count--;
    }

    return ret;
}

var byteArr,
    byteIdx,
    byteCount,
    codePoint,
    bytesSeen,
    bytesNeeded,
    lowerBoundary,
    upperBoundary;

function decodeCodePoint(safe) {
    while (true) {
        if (byteIdx >= byteCount && bytesNeeded) {
            if (safe) return goBack();
            throw new Error('Invalid byte index');
        }

        if (byteIdx === byteCount) return false;
        var byte = byteArr[byteIdx];
        byteIdx++;

        if (!bytesNeeded) {
            if ((byte & 0x80) === 0) {
                return byte;
            }

            if ((byte & 0xe0) === 0xc0) {
                bytesNeeded = 1;
                codePoint = byte & 0x1f;
            } else if ((byte & 0xf0) === 0xe0) {
                if (byte === 0xe0) lowerBoundary = 0xa0;
                if (byte === 0xed) upperBoundary = 0x9f;
                bytesNeeded = 2;
                codePoint = byte & 0xf;
            } else if ((byte & 0xf8) === 0xf0) {
                if (byte === 0xf0) lowerBoundary = 0x90;
                if (byte === 0xf4) upperBoundary = 0x8f;
                bytesNeeded = 3;
                codePoint = byte & 0x7;
            } else {
                if (safe) return goBack();
                throw new Error('Invalid UTF-8 detected');
            }

            continue;
        }

        if (byte < lowerBoundary || byte > upperBoundary) {
            if (safe) {
                byteIdx--;
                return goBack();
            }

            throw new Error('Invalid continuation byte');
        }

        lowerBoundary = 0x80;
        upperBoundary = 0xbf;
        codePoint = (codePoint << 6) | (byte & 0x3f);
        bytesSeen++;
        if (bytesSeen !== bytesNeeded) continue;
        var tmp = codePoint;
        codePoint = 0;
        bytesNeeded = 0;
        bytesSeen = 0;
        return tmp;
    }
}

function goBack() {
    var start = byteIdx - bytesSeen - 1;
    byteIdx = start + 1;
    codePoint = 0;
    bytesNeeded = 0;
    bytesSeen = 0;
    lowerBoundary = 0x80;
    upperBoundary = 0xbf;
    return byteArr[start];
}

module.exports = exports;


/***/ }),

/***/ "./src/common/util.ts":
/*!****************************!*\
  !*** ./src/common/util.ts ***!
  \****************************/
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
exports.getUa = exports.getFile = exports.getFileStr = void 0;
var convertBin_1 = __importDefault(__webpack_require__(/*! licia/convertBin */ "./node_modules/licia/convertBin.js"));
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var bytesToStr_1 = __importDefault(__webpack_require__(/*! licia/bytesToStr */ "./node_modules/licia/bytesToStr.js"));
function getFileStr(path) {
    return __awaiter(this, void 0, void 0, function () {
        var data, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = convertBin_1["default"];
                    return [4 /*yield*/, getFile(path)];
                case 1:
                    data = _a.apply(void 0, [_b.sent(), 'Uint8Array']);
                    return [2 /*return*/, (0, bytesToStr_1["default"])(data)];
            }
        });
    });
}
exports.getFileStr = getFileStr;
function getFile(path) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("/app".concat(path), {
                        responseType: 'arraybuffer'
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.getFile = getFile;
function getUa(ua) {
    if (ua === void 0) { ua = ''; }
    return "".concat(ua, " wechatdevtools/1.0 MicroMessenger/7.0.3");
}
exports.getUa = getUa;


/***/ }),

/***/ "./src/webview/index.ts":
/*!******************************!*\
  !*** ./src/webview/index.ts ***!
  \******************************/
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
exports.Webview = void 0;
var loadJs_1 = __importDefault(__webpack_require__(/*! licia/loadJs */ "./node_modules/licia/loadJs.js"));
var createBridge_1 = __importDefault(__webpack_require__(/*! ./lib/createBridge */ "./src/webview/lib/createBridge.ts"));
var wxa_runtime_base_1 = __webpack_require__(/*! @tencent/wxa-runtime-base */ "../base/dist/browser.js");
var util_1 = __webpack_require__(/*! ../common/util */ "./src/common/util.ts");
var Webview = /** @class */ (function () {
    function Webview() {
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
            command: 'WEBVIEW_CREATED'
        });
    }
    Webview.prototype.injectScript = function (src) {
        return new Promise(function (resolve) {
            (0, loadJs_1["default"])(src, function () {
                resolve(null);
            });
        });
    };
    Webview.prototype.executeScript = function (code) {
        var script = document.createElement('script');
        script.text = code;
        document.body.appendChild(script);
    };
    Webview.prototype.injectWxConfig = function (wxConfig) {
        window.__wxConfig = wxConfig;
    };
    Webview.prototype.initBridge = function () {
        window.WeixinJSBridge = (0, createBridge_1["default"])(this.messenger);
    };
    Webview.prototype.rewriteUa = function () {
        var originalUa = window.navigator.userAgent;
        Object.defineProperty(window.navigator, 'userAgent', {
            get: function () {
                return (0, util_1.getUa)(originalUa);
            }
        });
    };
    Webview.prototype.initMessenger = function () {
        this.messenger = new wxa_runtime_base_1.IframeMessenger(window.parent, this.handleMsgSync);
    };
    Webview.prototype.handleCallMethodSync = function (data) {
        var name = data.name, args = data.args;
        var method = this[name];
        return method.call.apply(method, __spreadArray([this], args, false));
    };
    return Webview;
}());
exports.Webview = Webview;
window.webview = new Webview();


/***/ }),

/***/ "./src/webview/lib/createBridge.ts":
/*!*****************************************!*\
  !*** ./src/webview/lib/createBridge.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var pulldownRefresh_1 = __importDefault(__webpack_require__(/*! ./pulldownRefresh */ "./src/webview/lib/pulldownRefresh.ts"));
var uniqId_1 = __importDefault(__webpack_require__(/*! licia/uniqId */ "./node_modules/licia/uniqId.js"));
var wxa_runtime_base_1 = __webpack_require__(/*! @tencent/wxa-runtime-base */ "../base/dist/browser.js");
var logger = (0, wxa_runtime_base_1.log)('wvBridge');
function default_1(messenger) {
    var onEmitter = new events_1.EventEmitter();
    var subscribeEmitter = new events_1.EventEmitter();
    var callbacks = {};
    messenger.on('message', function (msg) {
        var command = msg.command, data = msg.data;
        switch (command) {
            case 'WEBVIEW_INVOKE_CALLBACK': {
                var callbackId = data.callbackId, res = data.res;
                logger.debug(res.errMsg, callbackId, res);
                if (callbacks[callbackId]) {
                    callbacks[callbackId](res);
                    delete callbacks[callbackId];
                }
                break;
            }
            case 'WEBVIEW_ON_EVENT': {
                logger.debug(data.eventName, data.data);
                onEmitter.emit(data.eventName, data.data);
                break;
            }
            case 'START_PULLDOWN_REFRESH': {
                logger.debug('start pulldown refresh');
                pulldownRefresh_1["default"].trigger();
                break;
            }
            case 'STOP_PULLDOWN_REFRESH': {
                logger.debug('stop pulldown refresh');
                pulldownRefresh_1["default"].reset();
                break;
            }
            case 'DISABLE_SCROLL_BOUNCE': {
                var disable = data.disable;
                logger.debug('disable scroll bounce', disable);
                disable ? pulldownRefresh_1["default"].disable() : pulldownRefresh_1["default"].enable();
                break;
            }
            case 'APPSERVICE_PUBLISH': {
                subscribeEmitter.emit(data.eventName, data.data);
                break;
            }
        }
    });
    return {
        // 调用接口
        invoke: function (api, args, callback) {
            var callbackId = (0, uniqId_1["default"])();
            logger.debug('invoke', api, callbackId, args);
            callbacks[callbackId] = callback;
            messenger.send({
                command: 'WEBVIEW_INVOKE',
                data: {
                    api: api,
                    args: args,
                    callbackId: callbackId
                }
            });
        },
        // 发布事件到 appservice
        publish: function (eventName, data) {
            logger.debug('publish', eventName, data);
            data = JSON.parse(JSON.stringify(data));
            messenger.send({
                command: 'WEBVIEW_PUBLISH',
                data: {
                    eventName: eventName,
                    data: data
                }
            });
        },
        // 监听 appservice 发过来的事件
        subscribe: function (eventName, callback) {
            logger.debug('subscribe', eventName);
            subscribeEmitter.on(eventName, callback);
        },
        // 监听系统类事件
        on: function (api, callback) {
            logger.debug('on', api);
            onEmitter.on(api, callback);
        }
    };
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/webview/lib/pulldownRefresh.ts":
/*!********************************************!*\
  !*** ./src/webview/lib/pulldownRefresh.ts ***!
  \********************************************/
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
exports.__esModule = true;
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var darkLoading = 'data:image/gif;base64,R0lGODlhQAAMAMQZAPT09Orq6ubm5unp6dPT06ysrPz8/NbW1q+vr9fX1+vr687Ozv39/fr6+tXV1Z6ens3NzZ2dnZubm66urpycnKurq+Xl5czMzJmZmf///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODFiMWQ5My0wMDIwLTRiYmItYjVlMS04YjI4NTFkMzMzMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjFEQzRGRkU4NkU4MTFFNjkwOTg4NjNGN0JEMzY0OTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjFEQzRGRkQ4NkU4MTFFNjkwOTg4NjNGN0JEMzY0OTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplY2RjM2MyNC03NDBkLTQ1NzMtOTc0Ni1iZGQ2MzhlMjEyYjUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MGUzZDU2Ny1jZTk1LTExNzktYWFmZC04MmQ1NzRhYmI2YzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJFAAZACwAAAAAQAAMAAAFvmCWMQTyPAjBiGzrukOyLMnw3jegCIICtIACZkgs/HC3xuHCbB4ayJshYKlaA4aRkMgtZKOtZXPsALuo1nQgQ+C6MQSzaDCuX2xyQHpvASDeXAhyGQl2YwmDCnxpChKARBSDEIZNEIMCi1YCjo8YD5KUTAuXmVUCf52CcoWhiHKKpQptnXFydKF4ZnqlAAZbbxVfcg6UZYMZaHxrGUFvRscZSnYOUMdTysIkExEREyrQLAMHMwe54AABPAFHGSEAIfkECRQAGQAsAAAAAEAADAAABb9gJgKKICiAqK4syxDI8yAE097tkCxLMqyGgGVIDBhwOEABw2wWUshW43CpWg8NkZDIDURdy6a4cPyqqNa0IwPgui1QM0FMxxDMokF6fxko3lwKeBkIdWIIgwl8aQkCgEQCgxKGTRSDEItWEI6PFpF4k5QYD5eZVQt/nYJ4haKIeIqmCW2dcV9zond4eqY/W29egwZhdRVleA6ZaxlBwMd4SnVPgyJTfA5ZKgABJgG21C8TERETNdQrAwc8Bz8iIQAh+QQFFAAZACwAAAAAQAAMAAAFv2AmDsmyJIOormwLKIKgAG3dMgTyPAjBqI3DZUg8NGw2Q8DCbAYMyBqggKlaC7SMkMh1RFvLpjjwXTGo1nTBMOC6L6lyBiCuW7JlQnqPISTeXAlyGQp2YgqDCHxpCBCARBCDAoZNAoMSi1YUjo8XC5KUTJZymJkYD3+dgnKFoYhyiqYIbZ1xZXSheF96pgQZDo9egxlhdmSDBmh8FVBBbw5Hw0rGUMNTfFgrAwcmB7bDIgABMQG6wzgTERETPiIhADs=';
var lightLoading = 'data:image/gif;base64,R0lGODlhQAAMAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphODFiMWQ5My0wMDIwLTRiYmItYjVlMS04YjI4NTFkMzMzMjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0Q5MjI2RkE4NkU1MTFFNkFDRDc5Mjc3OTE2NjVFRTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0Q5MjI2Rjk4NkU1MTFFNkFDRDc5Mjc3OTE2NjVFRTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphODFiMWQ5My0wMDIwLTRiYmItYjVlMS04YjI4NTFkMzMzMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YTgxYjFkOTMtMDAyMC00YmJiLWI1ZTEtOGIyODUxZDMzMzIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECRQAAQAsAAAAAEAADAAAAkVMgInG7a7Wmy+CZhWlOe3ZLaH3YWEJnaOErhd6uCscj7Q8w+6Nn3re6nV4tp/QQvQFjxFaLeN8IqVNZzE5pbKi2SiVUQAAIfkECRQAAQAsAAAAAEAADAAAAkWMgWnL3QmBmy7KZSGlWe3aXeH1YSNZBqN6pkfrnjL6yS47h7cd53q/AvosO1hq2CkGj60l01kKQqM/ZYZBvGGvWpPGUAAAIfkEBRQAAQAsAAAAAEAADAAAAkWMgWnL7amcbBCuWufEVj+OHCDgfWDJjGqGBivZvm/rrrRsxzmKq/de6o1+Pp0QQxwah8Uk0smpnWjSKLVZDVFTrG02UgAAOw==';
var PULL_DOWN_MAX_DISTANCE = 100;
var PULL_DOWN_VALID_DISTANCE = 50;
var PulldownRefresh = /** @class */ (function (_super) {
    __extends(PulldownRefresh, _super);
    function PulldownRefresh() {
        var _this = _super.call(this) || this;
        _this.isEnabled = false;
        _this.isTouch = false;
        _this.startY = 0;
        _this.delta = 0;
        _this.handleTouchStart = function (e) {
            if (window.scrollY !== 0) {
                return;
            }
            _this.insertLoadingDom();
            _this.isTouch = true;
            _this.startY = e.touches[0].pageY;
            window.document.body.style.transition = 'all linear 0';
            _this.loadingDom.style.transition = 'all linear 0';
        };
        _this.handleTouchMove = function (e) {
            if (!_this.isTouch) {
                return;
            }
            var delta = e.touches[0].pageY - _this.startY;
            delta = Math.max(0, delta);
            delta = Math.min(PULL_DOWN_MAX_DISTANCE, delta);
            _this.delta = delta;
            window.document.body.style.marginTop = "".concat(delta, "px");
            _this.loadingDom.style.height = "".concat(delta, "px");
        };
        _this.handleTouchEnd = function (e) {
            _this.isTouch = false;
            if (_this.delta > PULL_DOWN_VALID_DISTANCE) {
                _this.emit('pulldown-refresh');
                _this.delta = PULL_DOWN_VALID_DISTANCE;
                window.document.body.style.marginTop = "".concat(_this.delta, "px");
                _this.loadingDom.style.height = "".concat(_this.delta, "px");
                setTimeout(function () {
                    _this.reset();
                }, 3000);
            }
            else {
                _this.reset();
            }
        };
        _this.loadingDom = document.createElement('div');
        _this.iconDom = document.createElement('i');
        Object.assign(_this.loadingDom.style, {
            height: '0px',
            width: '100%',
            position: 'fixed',
            top: '0px'
        });
        Object.assign(_this.iconDom.style, {
            width: '32px',
            position: 'absolute',
            height: '6px',
            left: '50%',
            bottom: '20px',
            backgroundRepeat: 'no-repeat',
            marginLeft: '-16px',
            backgroundSize: 'cover'
        });
        _this.loadingDom.appendChild(_this.iconDom);
        return _this;
    }
    PulldownRefresh.prototype.enable = function () {
        this.isEnabled = true;
        this.bindEvents();
    };
    PulldownRefresh.prototype.disable = function () {
        this.isEnabled = false;
    };
    PulldownRefresh.prototype.toggle = function () {
        this.isEnabled ? this.disable() : this.enable();
    };
    PulldownRefresh.prototype.trigger = function () {
        if (!this.isEnabled) {
            return;
        }
        this.insertLoadingDom();
        this.loadingDom.style.height = "".concat(PULL_DOWN_VALID_DISTANCE, "px");
        window.document.body.style.transition = 'all linear 0';
        window.document.body.style.marginTop = "".concat(PULL_DOWN_VALID_DISTANCE, "px");
        this.emit('pulldown-refresh');
    };
    PulldownRefresh.prototype.setStyle = function (style) {
        this.iconDom.style.backgroundImage = "url(".concat(style !== 'light' ? darkLoading : lightLoading, ")");
    };
    PulldownRefresh.prototype.setBackgroundColor = function (color) {
        this.loadingDom.style.backgroundColor = color;
    };
    PulldownRefresh.prototype.reset = function () {
        var body = window.document.body;
        if (!body)
            return;
        Object.assign(body.style, {
            transition: 'all linear 0.3s',
            marginTop: '0px'
        });
        Object.assign(this.loadingDom.style, {
            transition: 'all linear 0.3s',
            height: '0px'
        });
    };
    PulldownRefresh.prototype.bindEvents = function () {
        window.addEventListener('touchstart', this.handleTouchStart, true);
        window.addEventListener('touchmove', this.handleTouchMove, true);
        window.addEventListener('touchend', this.handleTouchEnd, true);
    };
    PulldownRefresh.prototype.insertLoadingDom = function () {
        document.body.insertBefore(this.loadingDom, document.body.firstChild);
    };
    return PulldownRefresh;
}(events_1.EventEmitter));
exports["default"] = new PulldownRefresh();


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/webview/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=webview.js.map
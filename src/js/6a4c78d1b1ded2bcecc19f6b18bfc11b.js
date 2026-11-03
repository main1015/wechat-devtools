'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.error = exports.warn = exports.info = exports.LogLevel = void 0
const tslib_1 = require('tslib')
tslib_1.__exportStar(require('./17cc688efc2a8e47d91fdb2900a9d684.js'), exports)
var types_1 = require('./cacb013e1248e753f3a89286376e61ba.js')
Object.defineProperty(exports, 'LogLevel', {
  enumerable: true,
  get: function () {
    return types_1.LogLevel
  },
})
// #region transports
tslib_1.__exportStar(require('./0b6e4b3dce6396a86cf6febb45c187c3.js'), exports)
tslib_1.__exportStar(require('./b54e76873d85e3f9a4043593929bdc87.js'), exports)
tslib_1.__exportStar(require('./a55b2640ff722b9bb9a4984b68680226.js'), exports)
// #endregion
// #region compatible with the legacy code
const info = () => console.error('`log.info` is deprecated. Upgrade ASAP!')
exports.info = info
const warn = () => console.error('`log.warn` is deprecated. Upgrade ASAP!')
exports.warn = warn
const error = () => console.error('`log.error` is deprecated. Upgrade ASAP!')
exports.error = error
// #endregion

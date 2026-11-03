'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Log = exports.DEFAULT_FORMAT = void 0
const util = require('util')
const stackTrace = require('licia/stackTrace')
const pad_1 = require('./ac7badfd597a1fc92590527604361bd9.js')
const types_1 = require('./cacb013e1248e753f3a89286376e61ba.js')
exports.DEFAULT_FORMAT =
  '[{year}-{month}-{day} {hour}:{minute}:{second}.{millisecond}][{level}][{clientversion}][{caller}] {text}'
class Log {
  constructor(options) {
    this.options = options
    this.transports = new Set()
    this.stackPosition = 0
    // #region log API
    this.debug = (...messages) => {
      this.formattedDebug(exports.DEFAULT_FORMAT, ...messages)
    }
    this.formattedDebug = (format = exports.DEFAULT_FORMAT, ...messages) => {
      this.write(types_1.LogLevel.DEBUG, format, null, ...messages)
    }
    this.filterDebug = (filter, ...messages) => {
      this.write(
        types_1.LogLevel.DEBUG,
        exports.DEFAULT_FORMAT,
        filter,
        ...messages
      )
    }
    this.info = (...messages) => {
      this.formattedInfo(exports.DEFAULT_FORMAT, ...messages)
    }
    this.formattedInfo = (format = exports.DEFAULT_FORMAT, ...messages) => {
      this.write(types_1.LogLevel.INFO, format, null, ...messages)
    }
    this.filterInfo = (filter, ...messages) => {
      this.write(
        types_1.LogLevel.INFO,
        exports.DEFAULT_FORMAT,
        filter,
        ...messages
      )
    }
    this.warn = (...messages) => {
      this.formattedWarn(exports.DEFAULT_FORMAT, ...messages)
    }
    this.formattedWarn = (format = exports.DEFAULT_FORMAT, ...messages) => {
      this.write(types_1.LogLevel.WARN, format, null, ...messages)
    }
    this.filterWarn = (filter, ...messages) => {
      this.write(
        types_1.LogLevel.WARN,
        exports.DEFAULT_FORMAT,
        filter,
        ...messages
      )
    }
    this.error = (...messages) => {
      this.formattedError(exports.DEFAULT_FORMAT, ...messages)
    }
    this.formattedError = (format = exports.DEFAULT_FORMAT, ...messages) => {
      this.write(types_1.LogLevel.ERROR, format, null, ...messages)
    }
    this.filterError = (filter, ...messages) => {
      this.write(
        types_1.LogLevel.ERROR,
        exports.DEFAULT_FORMAT,
        filter,
        ...messages
      )
    }
    // #endregion
    this.addTransport = (transport) => {
      this.transports.add(transport)
    }
    this.removeTransport = (transport) => {
      this.transports.delete(transport)
    }
    this.getTransports = () => Array.from(this.transports)
    this.updateCaller = () => {
      const stack = stackTrace()
      for (const item of stack) {
        const fileName = item.getFileName()
        if (fileName !== module.filename) {
          this.caller = fileName.replace(process.cwd(), '')
          return
        }
      }
    }
    this.formatMessages = (
      format = exports.DEFAULT_FORMAT,
      level,
      ...messages
    ) => {
      const date = new Date()
      let filename = ''
      // 如果设置了堆栈的修正位置
      if (this.stackPosition) {
        const errStackStr = new Error().stack || ''
        const info = errStackStr.split('\n')[this.stackPosition] || ''
        let res = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i.exec(info) // at func (/some/path:98:1)
        if (res) {
          filename = res[2].replace(process.cwd(), '')
        } else {
          // 匿名函数的情况
          res = /at\s+(.*):(\d*):(\d*)/i.exec(info) // at /some/path:98:1
          filename = (
            (res === null || res === void 0 ? void 0 : res[1]) || ''
          ).replace(process.cwd(), '')
        }
      }
      return (
        format
          .replace('{year}', String(date.getFullYear()))
          .replace('{month}', (0, pad_1.default)(date.getMonth() + 1))
          .replace('{day}', (0, pad_1.default)(date.getDate()))
          .replace('{hour}', (0, pad_1.default)(date.getHours()))
          .replace('{minute}', (0, pad_1.default)(date.getMinutes()))
          .replace('{second}', (0, pad_1.default)(date.getSeconds()))
          .replace(
            '{millisecond}',
            (0, pad_1.default)(date.getMilliseconds(), 3)
          )
          .replace('{level}', types_1.LogLevel[level]) // reverse mappings
          // @ts-ignore
          .replace('{clientversion}', global.appVersion || 'unknow')
          .replace('{caller}', filename || this.caller || '')
          // @ts-ignore: `util.format()` returns ''
          .replace('{text}', util.format(...messages)) + '\n'
      )
    }
    this.write = (
      logLevel,
      format = exports.DEFAULT_FORMAT,
      filter,
      ...messages
    ) => {
      // discard trivial messages
      if (logLevel > this.options.logLevel) {
        return
      }
      this.updateCaller()
      const formattedMessage = this.formatMessages(
        format,
        logLevel,
        ...messages
      )
      // @ts-ignore: `util.format()` returns ''
      const onlyFormattedMessage = util.format(...messages)
      let usingFilter = []
      if (Array.isArray(filter)) {
        usingFilter = filter
      } else {
        // 未使用 filter log 方法，尝试自动分词
        usingFilter = onlyFormattedMessage
          .split(/\s*[\s,;:\[\]<>{}]\s*/)
          .map((w) => w.trim())
          .filter((w) => w && w.length > 1)
      }
      this.transports.forEach((transport) =>
        transport.write(logLevel, formattedMessage, usingFilter)
      )
    }
    this.stackPosition = options.stackPosition
  }
}
exports.Log = Log

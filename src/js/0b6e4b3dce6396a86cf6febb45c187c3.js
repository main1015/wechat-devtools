'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ConsoleTransport = void 0
const types_1 = require('./cacb013e1248e753f3a89286376e61ba.js')
class ConsoleTransport {
  write(level, message) {
    const method = types_1.LogLevel[level].toLowerCase()
    // @ts-ignore
    console[method === 'debug' ? 'log' : method](message)
    return true
  }
}
exports.ConsoleTransport = ConsoleTransport

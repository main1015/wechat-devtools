'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.NetworkTranport = exports.NetworkTranportLevel = void 0
const types_1 = require('./cacb013e1248e753f3a89286376e61ba.js')
var NetworkTranportLevel
;(function(NetworkTranportLevel) {
  NetworkTranportLevel[(NetworkTranportLevel['DEBUG'] = 1)] = 'DEBUG'
  NetworkTranportLevel[(NetworkTranportLevel['INFO'] = 2)] = 'INFO'
  NetworkTranportLevel[(NetworkTranportLevel['WARN'] = 4)] = 'WARN'
  NetworkTranportLevel[(NetworkTranportLevel['ERROR'] = 8)] = 'ERROR'
})(
  (NetworkTranportLevel =
    exports.NetworkTranportLevel || (exports.NetworkTranportLevel = {}))
)
const MAX_BUFFER_CAPACITY = 10 * 1024
const UPLOAD_INTERVAL = 60 * 1000
class NetworkTranport {
  constructor(options) {
    this.options = options
    this.logs = new Array()
    this.bytesWritten = 0
    this.isFull = false
    this.accumulatedLevel = 0
    this.accumulatedFilter = []
    this.write = (level, message, filter = []) => {
      if (this.isFull || level > this.options.level) return false
      const { prefix } = this.options
      const prefixedMessage = (prefix ? prefix + ' ' : '') + message
      const method = types_1.LogLevel[level]
      const networkTranportLevel = NetworkTranportLevel[method] || 0
      const log = {
        l: networkTranportLevel,
        m: [prefixedMessage],
      }
      const length = Buffer.byteLength(JSON.stringify(log))
      if (length + this.bytesWritten > MAX_BUFFER_CAPACITY) {
        this.isFull = true
        return false
      }
      this.accumulatedLevel |= networkTranportLevel
      this.accumulatedFilter = [...this.accumulatedFilter, ...filter]
      this.logs.push(log)
      this.bytesWritten += length
      return true
    }
    this.stop = () => {
      this.reset()
      clearInterval(this.timer)
    }
    this.upload = async () => {
      if (this.logs.length === 0) {
        return
      }
      this.options.upload({
        level: this.accumulatedLevel,
        msg: JSON.stringify(this.logs),
        filter: this.accumulatedFilter.join(' ') || undefined,
      })
      this.reset()
    }
    this.reset = () => {
      this.logs = new Array()
      this.bytesWritten = 0
      this.isFull = false
      this.accumulatedLevel = 0
      this.accumulatedFilter = []
    }
    process.on('beforeExit', async () => {
      try {
        await this.upload()
      } catch (err) {
        console.error('upload log error:', err)
      } finally {
        this.stop()
      }
    })
    this.timer = setInterval(() => {
      this.upload()
    }, UPLOAD_INTERVAL)
  }
}
exports.NetworkTranport = NetworkTranport

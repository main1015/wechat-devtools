'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.FileTransport = exports.MAX_FILE_SIZE = exports.MAX_FILE_COUNT = void 0
const fs = require('fs')
const path = require('path')
const pad_1 = require('./ac7badfd597a1fc92590527604361bd9.js')
const mkdir_1 = require('./216d77c54608d50842c06d55d0c2dc44.js')
exports.MAX_FILE_COUNT = 30
exports.MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB
const RANDOM_MAX = 999
const RANDOM_MIN = 100
class FileTransport {
  constructor(options) {
    this.options = options
    this.fileCounter = 0
    this.clean = (removeAll = false) => {
      let filesToRemove
      if (this.stream) {
        this.stream.end()
      }
      if (removeAll) {
        // remove everything in the directory
        const { directory } = this.options
        filesToRemove = fs
          .readdirSync(directory)
          .map((filename) => path.join(directory, filename))
      } else {
        const files = this.getLogFiles()
        filesToRemove = files.slice(exports.MAX_FILE_COUNT - 1)
      }
      filesToRemove.forEach((filePath) => {
        try {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
          }
        } catch (e) {
          console.error('delete log files error:', e)
        }
      })
      this.init() // re-init
    }
    this.getLogFiles = () => {
      // list all log files and sort in chronological order
      const { directory } = this.options
      const files = fs
        .readdirSync(directory)
        .map((filename) => {
          const filePath = path.join(directory, filename)
          try {
            // could throw Error(EPERM: operation not permitted) on Windows
            const createdTime = fs.statSync(filePath).birthtimeMs
            return {
              filename: filePath,
              createdTime,
            }
          } catch (error) {
            console.error('get log files error:', error)
            return null
          }
        })
        .filter((file) => file !== null)
      return (
        files
          // newer files come first
          .sort(({ createdTime: a }, { createdTime: b }) => b - a)
          .map(({ filename }) => filename)
      )
    }
    this.init = () => {
      const { directory, filename } = this.options
      const date = new Date()
      const defaultFilename = `${date.getFullYear()}-${(0, pad_1.default)(
        date.getMonth() + 1
      )}-${(0, pad_1.default)(date.getDate())}-${(0, pad_1.default)(
        date.getHours()
      )}-${(0, pad_1.default)(date.getMinutes())}-${(0, pad_1.default)(
        date.getSeconds()
      )}-${this.randomNumber(RANDOM_MIN, RANDOM_MAX)}.log`
      const logFilename = filename
        ? filename(this.fileCounter)
        : defaultFilename
      const logPath = path.join(directory, logFilename)
      if (this.stream) {
        this.stream.close()
      }
      this.stream = fs.createWriteStream(logPath)
    }
    this.randomNumber = (min, max) => {
      const random = Math.round((max - min) * Math.random())
      return min + random
    }
    this.rotateIfNeeded = () => {
      if (this.stream.bytesWritten < exports.MAX_FILE_SIZE) return
      this.fileCounter++
      this.clean()
    }
    // Make sure all messages are written before exit
    process.on('beforeExit', () => {
      if (this.stream) this.stream.end()
    })
    ;(0, mkdir_1.default)(options.directory)
    this.clean()
  }
  write(_, message) {
    this.rotateIfNeeded()
    try {
      this.stream.write(message)
      return true
    } catch (error) {
      console.error('write log failed:', error)
      return false
    }
  }
}
exports.FileTransport = FileTransport

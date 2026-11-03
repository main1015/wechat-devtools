'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const fs = require('fs')
const path = require('path')
const mkdirSync = directory => {
  if (fs.existsSync(directory)) return
  const parent = path.dirname(directory)
  mkdirSync(parent)
  fs.mkdirSync(directory)
}
exports.default = mkdirSync

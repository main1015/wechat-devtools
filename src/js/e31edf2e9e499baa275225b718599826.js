const setChromeProxy = require('./02f1253bfcec1f040a498b491dd37bf2.js')
const makeDirectConfig = require('./53165f604004446703f8b26b4bcac074.js')
const makeUrlConfig = require('./5cdc4e7d6d75e26ecd33089e8a90b8b0.js')
const makeSystemConfig = require('./9b53826e60a29fa72109e76d15795e2e.js')
const isWin = process.platform === 'win32'

let currentProxyType = 'SYSTEM'
const setSystemProxy = async function () {
  const config = await makeSystemConfig()
  if (currentProxyType != 'SYSTEM') {
    // 如果这里不是 SYSTEM 说明有另一个 update 请求来了，这里就放过设置
    return
  }
  return await setChromeProxy(config)
}

/** direct * */
const setDirectProxy = async function () {
  const config = makeDirectConfig()
  return await setChromeProxy(config)
}

/** url * */
const setUrlProxy = async function (options) {
  const config = makeUrlConfig(options)
  return await setChromeProxy(config)
}

async function set(type) {
  currentProxyType = type
  if (type === 'SYSTEM') {
    return setSystemProxy()
  } else if (type === 'DIRECT') {
    return setDirectProxy()
  } else {
    return setUrlProxy({
      ProxyServer: type.replace('PROXY ', '')
    })
  }
}

async function up(type) {
  return await set(type)
}

module.exports = {
  set,
  up
}

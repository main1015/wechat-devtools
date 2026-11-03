const URL = require('url')
const proxy = require('./bb54a89248faa8c881f128ab7e5d7817.js')
const setAppProxy = require('./e31edf2e9e499baa275225b718599826.js')
const proxyLocal = require('./6ed289bc55d7f9f5ec4c792fc8c8048b.js')
const setLog = require('./bb6af9bbfc029226a5c77d49061ffd7f.js').setLog
const setProxyCachePath = require('./6a8060b1148d69ea14e86255a0e0d3f9.js').setProxyCachePath

let proxyCache = {}

function trasnlateReqToUrlParse(req) {
  const host = req.headers.host
  const protocol = (!!req.connection.encrypted && !/^http:/.test(req.url)) ? 'https' : 'http'
  const fullUrl = protocol === 'http' ? req.url : (`${protocol}://${host}${req.url}`)
  const res = URL.parse(fullUrl)
  return `${protocol}://${host}${res.path}`
}

async function startProxyServer(options) {
  const {
    port,
    rule,
    type = 'DIRECT',
    hostname = '127.0.0.1'
  } = options

  clearProxyCache()

  if (Object.prototype.toString.call(rule.forceLocalProxy) == '[object Array]') {
    proxyLocal.makeProxyLocal(port, rule.forceLocalProxy)
    const forceLocalProxy = rule.forceLocalProxy
    rule.shouldUseLocalResponse = (req, reqData) => {
      const pureHref = trasnlateReqToUrlParse(req)
      if (
        pureHref.indexOf(`http://127.0.0.1:${port}`) === 0 ||
        // 给安卓模拟器用的
        pureHref.indexOf(`http://10.0.2.2:${port}`) === 0
      ) {
        return true
      }

      let result = false
      for (let i = 0, len = forceLocalProxy.length; i < len; i++) {
        const item = forceLocalProxy[i]
        const type = Object.prototype.toString.call(item)
        if (type == '[object RegExp]') {
          if (item.test(pureHref)) {
            result = true
            break
          }
        } else if (type == '[object String]') {
          if (pureHref.indexOf(item) === 0) {
            result = true
            break
          }
        }
      }
      return result
    }
    delete rule.forceLocalProxy
  }

  new proxy.proxyServer({
    port,
    hostname,
    rule,
  })

  return
}

async function updateProxy(type) {
  clearProxyCache()
  return await setAppProxy.up(type)
}

const clearProxyCache = () => {
  proxyCache = {}
}

const getProxyForURL = (url) => {
  const urlObj = URL.parse(url)
  url = `${urlObj.protocol}//${urlObj.hostname}`

  let urlProxyCache = proxyCache[url]
  if (typeof urlProxyCache == 'undefined') {
    let proxy = nw.App.getProxyForURL(url)
    // http://agent.smartproxy.oa.com:12669;DIRECT
    if (proxy === undefined) {
      // 没有网络的时候，肯出现 undefined 的情况
      return null
    }

    try {
      const proxySp = proxy.split(';')
      proxy = proxySp.length > 1 ? proxySp[1] : proxySp[0]
    } catch (e) {}

    if (proxy === 'DIRECT') {
      proxy = null
    } else {
      proxy = `http://${proxy.replace('PROXY ', '')}`
    }
    proxyCache[url] = proxy
    urlProxyCache = proxy
  }
  return urlProxyCache
}

const exported = {
  startProxyServer,
  updateProxy,
  clearProxyCache,
  getProxyForURL,
  setLog,
  setProxyCachePath,
}
// 支持 import proxy from 的写法
exported.default = proxy
module.exports = exported
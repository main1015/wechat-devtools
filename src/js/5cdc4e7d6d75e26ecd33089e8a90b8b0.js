const log = require('./bb6af9bbfc029226a5c77d49061ffd7f.js').log
const proxyLocal = require('./6ed289bc55d7f9f5ec4c792fc8c8048b.js')
const isWin = process.platform === 'win32'

const makeProxyOverride = (ProxyOverride) => {
  try {
    let hostDomains
    if (ProxyOverride && ProxyOverride.length) {
      const res = ProxyOverride.map((host) => {
        return `host.indexOf('${host}') === 0`
      })

      return `if(${res.join('||')}) {
          return 'DIRECT'
        }`
    } else {
      return ''
    }
  } catch (e) {
    log.error(`setAppProxy.js makeProxyOverride error: ${e}`)
    return ''
  }
}

function makeUrlConfig(options) {
  const systemHost = makeProxyOverride(options.ProxyOverride)
  let proxyServer = ''
  if (isWin) {
    // 127.0.0.1:8888
    // http=127.0.0.1:8888;https=127.0.0.1:8888
    // http=127.0.0.1:8888
    if (!options.ProxyServer) {
      proxyServer = 'return \'DIRECT\''
    } else if (options.ProxyServer.indexOf('=') === -1) {
      proxyServer = `return 'PROXY ${options.ProxyServer}'`
    } else {
      const proxyArr = options.ProxyServer.split(';')
      proxyArr.forEach((proxy) => {
        const p = proxy.replace(/https?=/, '')
        if (proxy.indexOf('https') === 0) {
          proxyServer += `
            if(url.indexOf('https') === 0)
              return 'PROXY ${p}'
            `
        } else if (proxy.indexOf('http') === 0) {
          proxyServer += `
            if(url.indexOf('http') === 0 && url.indexOf('https') === -1)
              return 'PROXY ${p}'
            `
        }
      })
    }
  } else {
    if (options.httpsProxyEnable) {
      proxyServer += `
        if(url.indexOf('https:') === 0)
          return 'PROXY ${options.httpsProxy}'
        `
    }

    if (options.httpProxyEnable) {
      proxyServer += `
        if(url.indexOf('http:') === 0)
          return 'PROXY ${options.httpProxy}'
        `
    }

    // 用户自己设置的
    if (options.ProxyServer) {
      proxyServer = `return 'PROXY ${options.ProxyServer}'`
    }
  }

  return {
    mode: 'pac_script',
    pacScript: {
      data: `function FindProxyForURL(url, host) {
          ${proxyLocal.config}
          ${systemHost}
          ${proxyServer}
          return 'DIRECT'
        }`
    }
  }
}

module.exports = makeUrlConfig

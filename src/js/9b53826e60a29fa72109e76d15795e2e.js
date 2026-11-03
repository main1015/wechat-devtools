const path = require('path')
const fs = require('fs')
const request = require('request')
const log = require('./bb6af9bbfc029226a5c77d49061ffd7f.js').log

const getSystemProxy = require('./7a8319760c9e95a7837938caef872ed0.js')
const proxyLocal = require('./6ed289bc55d7f9f5ec4c792fc8c8048b.js')
const makeUrlConfig = require('./5cdc4e7d6d75e26ecd33089e8a90b8b0.js')
const makeDirectConfig = require('./53165f604004446703f8b26b4bcac074.js')
const proxyCache = require('./6a8060b1148d69ea14e86255a0e0d3f9.js')
// const dirConfig = require('./87340deef308fb62efd7eb7a7e63e98d.js')
// const proxyCachePath = dirConfig.ProxyCache
const isWin = process.platform === 'win32'


function initProxy(proxySetting) {
  return new Promise((resolve, reject) => {
    if (proxySetting.AutoConfigURL) {
      request({
        url: proxySetting.AutoConfigURL,
        proxy: null
      }, (error, resp, body) => {
        if (!error) {
          try {
            const proxyCachePath = proxyCache.getProxyCachePath()
            if (!proxyCachePath) {
              reject('init proxy error proxyCachePath is not set')
            }
            const temppacPath = path.join(proxyCachePath, 'temppac.pac')
            fs.writeFileSync(temppacPath, `${body}\n module.exports=FindProxyForURL`, 'utf8')
            const FindProxyForURL = require(temppacPath)
            const FindProxyForURLFun = FindProxyForURL.toString()

            log.info(`setAppProxy.js initProxy FindProxyForURLFun: ${FindProxyForURLFun}`)

            const hackProxyForURLFun = body.replace(FindProxyForURLFun, `
                function FindProxyForURL(url, host) {
                  ${proxyLocal.config}
                  ${FindProxyForURLFun}
                  return FindProxyForURL(url, host)
                }
              `)

            const pacFile = path.join(proxyCachePath, 'pacFile.pac')

            fs.writeFileSync(pacFile, body.replace(FindProxyForURLFun, hackProxyForURLFun))

            proxySetting.hackProxyForURLFun = hackProxyForURLFun
            if (isWin) {
              const imgTemp = document.createElement('img')
              imgTemp.src = pacFile
              proxySetting.AutoConfigURL = `${imgTemp.src}?${+new Date()}`
            } else {
              proxySetting.AutoConfigURL = encodeURI(`file:///${pacFile}?${+new Date()}`)
            }

            resolve(proxySetting)
          } catch (e) {
            reject(`init proxy error ${e}`)
          }
        } else {
          reject(`init proxy error ${error}`)
        }
      })
    } else {
      resolve(proxySetting)
    }
  })
}

function makePacConfig(proxySetting) {
  if (proxySetting.hackProxyForURLFun) {
    return {
      mode: 'pac_script',
      pacScript: {
        data: proxySetting.hackProxyForURLFun,
      }
    }
  }

  return {
    mode: 'pac_script',
    pacScript: {
      url: proxySetting.AutoConfigURL
    }
  }
}

const makeSystemConfig = async function () {
  let proxySetting = await getSystemProxy()
  proxySetting = await initProxy(proxySetting)

  const isUrlConfig = (isWin && proxySetting.ProxyEnable)
    || (!isWin && (proxySetting.httpProxyEnable || proxySetting.httpsProxyEnable))
  let config

  if (proxySetting.AutoConfigURL) {
    config = makePacConfig(proxySetting)
  } else if (isUrlConfig) {
    config = makeUrlConfig(proxySetting)
  } else {
    config = makeDirectConfig()
  }

  return config
}

module.exports = makeSystemConfig

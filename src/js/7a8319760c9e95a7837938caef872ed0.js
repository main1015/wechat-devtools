const exec = require('child_process').exec
const path = require('path')
const ITEM_PATTERN = /^(.*)\s(REG_SZ|REG_MULTI_SZ|REG_EXPAND_SZ|REG_DWORD|REG_QWORD|REG_BINARY|REG_NONE)\s+([^\s].*)$/;

function parseOutput(stdout) {
  const lines = stdout.split(/\r?\n/)
  const result = {};
  for (const line of lines.slice(1)) {
      const match = ITEM_PATTERN.exec(line.trim())
      if (match) {
          const name = match[1].trim()
          // const type = match[2].trim()
          const value = match[3].trim()
          result[name] = value
      }
  }
  return result;
}

function getWinSystemProxySetting(callback) {
  return new Promise((resolve, reject) => {
    const commandStr = 'REG QUERY "HKCU\\SOFTWARE\\MICROSOFT\\WINDOWS\\CURRENTVERSION\\INTERNET SETTINGS"'
    exec(commandStr, {}, (error, stdout, stderr) => {
      if (!error) {
        try {
          const values = parseOutput(stdout)
          const res = {}

          res.AutoConfigURL = values['AutoConfigURL']
          res.ProxyEnable = !!parseInt(values['ProxyEnable'])
          res.ProxyServer = values['ProxyServer']
          res.ProxyOverride = values['ProxyOverride']

          if (res.ProxyOverride) res.ProxyOverride = res.ProxyOverride.split(';')
          else if (global.autoTest) {
            res.ProxyOverride = ['<Local>']
          }

          if (global.autoTest && !res.ProxyEnable) {
            let envProxy = process.env.http_proxy || process.env.https_proxy
            if (envProxy) {
              const match = envProxy.match(/^https?:\/\/(.+)/)
              if (match && match[1]) {
                envProxy = match[1]
                res.ProxyEnable = true
                res.AutoConfigURL = null
                res.ProxyServer = envProxy
                res.ProxyOverride = ['<Local>']
              }
            }
          }

          resolve(res)
        } catch (e) {
          reject(`get win system proxy error ${e}`)
        }
      } else {
        reject(`get win system proxy error ${error}`)
      }
    })
  })
}

function getOsxSystemProxySetting(callback) {
  return new Promise((resolve, reject) => {
    // dist 所在目录
    const rootPath = global.appConfig.isDev
      ? path.resolve(__dirname, '../../..') // __dirname == dist/js/common/proxy
      : path.resolve(__dirname, '../') // __dirname == dist/js  // __dirname == dist/core.wxvpkg

    const shFile = path.join(rootPath, './js/common/proxy/getosxproxysetting.sh')

    exec(`sh "${shFile}"`, {}, (error, stdout, stderr) => {
      if (!error) {
        const res = stdout.split(/\r?\n/)

        // Enabled: Yes
        // Server: 192.168.2.168
        // Port: 8888
        // Authenticated Proxy Enabled: 0
        // Enabled: No
        // Server:
        // Port: 0
        // Authenticated Proxy Enabled: 0
        // URL: http://txp-01.tencent.com/proxy.pac
        // Enabled: Yes

        try {
          const info = {}

          info.httpProxyEnable = res[0] === 'Enabled: Yes'
          const httpServer = res[1].replace('Server:', '').trim()
          const httpPort = res[2].replace('Port:', '').trim()
          info.httpProxy = httpServer ? `${httpServer}:${httpPort}` : ''

          info.httpsProxyEnable = res[4] === 'Enabled: Yes'
          const httpsServer = res[5].replace('Server:', '').trim()
          const httpsPort = res[6].replace('Port:', '').trim()
          info.httpsProxy = httpsServer ? `${httpsServer}:${httpsPort}` : ''

          const pacEnable = res[9] === 'Enabled: Yes'
          info.AutoConfigURL = pacEnable ? res[8].replace('URL:', '').trim() : ''

          // get proxy ProxyOverride
          if (res[10].indexOf("There aren't any bypass domains") === 0) info.ProxyOverride = []
          else info.ProxyOverride = res[10].split(' ')

          resolve(info)
        } catch (e) {
          reject(`get osx system proxy error ${e}`)
        }
      } else {
        resolve(`get osx system proxy error ${error}`)
      }
    })
  })
}

const getSystemProxySetting = async function () {
  if (process.platform === 'win32') {
    return await getWinSystemProxySetting()
  } else {
    return await getOsxSystemProxySetting()
  }
}

module.exports = getSystemProxySetting

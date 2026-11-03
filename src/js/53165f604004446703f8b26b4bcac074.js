const proxyLocal = require('./6ed289bc55d7f9f5ec4c792fc8c8048b.js')

function makeDirectConfig() {
  return {
    mode: 'pac_script',
    pacScript: {
      data: `function FindProxyForURL(url, host) {
              ${proxyLocal.config}
              return 'DIRECT'
            }`
    }
  }
}

module.exports = makeDirectConfig

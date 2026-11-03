const http = require('http')
const async = require('async')
const requestHandler = require('./9d122281b049bc57672f6b6ba121e3a6.js')
const log = require('./bb6af9bbfc029226a5c77d49061ffd7f.js').log

const DEFAULT_PORT = 8001
const DEFAULT_HOST = 'localhost'

const defaultRule = require('./942d2908f5a20a8effb8e38fc449bdd3.js')

// option
// option.port     : 8001(default)
// option.hostname : localhost(default)
// option.rule          : ruleModule
function proxyServer(option) {
  option = option || {}

  const self = this
  const proxyPort = option.port || DEFAULT_PORT
  const proxyHost = option.hostname || DEFAULT_HOST
  const proxyRules = option.rule || defaultRule

  requestHandler.setRules(proxyRules) // TODO : optimize calling for set rule
  self.httpProxyServer = null

  async.series(
    [
      // creat proxy server
      function (callback) {
        self.httpProxyServer = http.createServer(requestHandler.userRequestHandler)
        callback(null)
      },

      // start proxy server
      function (callback) {
        self.httpProxyServer.listen(proxyPort, proxyHost)
        callback(null)
      },

      // server status manager
      function (callback) {
        callback(null)
      }
    ],

    // final callback
    function (err, result) {
      if (err) {
        log.error(`err when start proxy server : ${err}`)
      }
    }
  )

  self.close = function () {
    self.httpProxyServer && self.httpProxyServer.close()
  }
}

module.exports.proxyServer = proxyServer

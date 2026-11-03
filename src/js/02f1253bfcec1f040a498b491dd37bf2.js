const log = require('./bb6af9bbfc029226a5c77d49061ffd7f.js').log

async function setChromeProxy(config) {
  return new Promise((resolve, reject) => {
    chrome.proxy.settings.set({
      value: config,
      scope: 'regular'
    }, () => {
      log.info(`setChromeProxy config: ${JSON.stringify(config)}`)
      resolve()
    })
  })
}

module.exports = setChromeProxy

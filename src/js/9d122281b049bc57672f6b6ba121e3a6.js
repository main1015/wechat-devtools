const http = require('http')
const https = require('https')
const url = require('url')
const zlib = require('zlib')
const async = require('async')
const Buffer = require('buffer').Buffer
const util = require('./5b917555f8b0604daa17d75b162f0f85.js')
const log = require('./bb6af9bbfc029226a5c77d49061ffd7f.js').log
const defaultRule = require('./942d2908f5a20a8effb8e38fc449bdd3.js')

let userRule = defaultRule // init

function userRequestHandler(req, userRes) {
  /*
  note
      req.url is wired
      in http  server : http://www.example.com/a/b/c
      in https server : /a/b/c
  */
  const host = req.headers.host
  let protocol = (!!req.connection.encrypted && !/^http:/.test(req.url)) ? 'https' : 'http'
  const fullUrl = protocol === 'http' ? req.url : (`${protocol}://${host}${req.url}`)
  const urlPattern = url.parse(fullUrl)
  const path = urlPattern.path
  const resourceInfoId = -1
  let reqData

  // record
  const resourceInfo = {
    host,
    method: req.method,
    path,
    protocol,
    url: `${protocol}://${host}${path}`,
    req,
    startTime: new Date().getTime()
  }

  // get request body and route to local or remote
  async.series([
    fetchReqData,
    routeReq
  ], function () {
    // mark some ext info
  })

  // get request body
  function fetchReqData(callback) {
    const postData = []
    req.on('data', function (chunk) {
      postData.push(chunk)
    })
    req.on('end', function () {
      reqData = Buffer.concat(postData)
      resourceInfo.reqBody = reqData.toString()
      req.body = reqData.toString()
      callback()
    })
  }

  // route to dealing function
  function routeReq(callback) {
    if (userRule.shouldUseLocalResponse(req, reqData)) {
      dealWithLocalResponse(callback)
    } else {
      dealWithRemoteResonse(callback)
    }
  }

  function dealWithLocalResponse(callback) {
    userRule.dealLocalResponse(req, reqData, function (statusCode, resHeader, resBody) {
      // update record info
      resourceInfo.endTime = new Date().getTime()
      resourceInfo.res = { // construct a self-defined res object
        statusCode: statusCode || '',
        headers: resHeader || {}
      }
      resourceInfo.resHeader = resHeader || {}
      resourceInfo.resBody = resBody
      resourceInfo.length = resBody ? resBody.length : 0
      resourceInfo.statusCode = statusCode

      resHeader = resHeader || {}
      resHeader.Connection = 'Keep-Alive'

      userRes.writeHead(statusCode, resHeader)
      userRes.end(resBody)
      callback && callback()
    })

    return
  }

  function dealWithRemoteResonse(callback) {
    // modify request protocol
    protocol = userRule.replaceRequestProtocol(req, protocol) || protocol

    // modify request options
    const options = {
      hostname: urlPattern.hostname || req.headers.host,
      port: urlPattern.port || req.port || (/https/.test(protocol) ? 443 : 80),
      path,
      method: req.method,
      headers: req.headers
    }

    userRule.replaceRequestOption(req, options, function () {
      // options = userRule.replaceRequestOption(req, options) || options;
      options.rejectUnauthorized = false


      // update request data
      reqData = userRule.replaceRequestData(req, reqData) || reqData
      options.headers = util.lower_keys(options.headers)
      if (options.headers['proxy-connection']) {
        options.headers.connection = options.headers['proxy-connection']
        delete options.headers['proxy-connection']
      }
      if (options.headers['accept-language']) {
        options.headers['accept-language'] = 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4'
      }
      options.headers['content-length'] = reqData.length // rewrite content length info

      // send request
      const proxyReq = (/https/.test(protocol) ? https : http).request(options, function (res) {
        // var proxyReq = ( /https/.test(protocol) ? https : http).request(proOptions, function(res) {
        // deal response header
        let statusCode = res.statusCode
        statusCode = userRule.replaceResponseStatusCode(req, res, statusCode) || statusCode

        let resHeader = userRule.replaceResponseHeader(req, res, res.headers) || res.headers
        resHeader = util.lower_keys(resHeader)

        // remove gzip related header, and ungzip the content
        // note there are other compression types like deflate
        const ifServerGzipped = /gzip/i.test(resHeader['content-encoding'])
        // if (ifServerGzipped) {
        //     delete resHeader['content-encoding'];
        // }
        // delete resHeader['content-length'];

        // userRes.writeHead(statusCode, resHeader);

        // deal response data
        let length
        const resData = []

        res.on('data', function (chunk) {
          resData.push(chunk)
        })

        res.on('end', function () {
          let serverResData

          async.series([

            // ungzip server res
            function (callback) {
              serverResData = Buffer.concat(resData)
              if (ifServerGzipped) {
                zlib.gunzip(serverResData, function (err, buff) {
                  serverResData = buff
                  callback()
                })
              } else {
                callback()
              }

              // get custom response
            },
            function (callback) {
              if (userRule.replaceServerResData) {
                serverResData = userRule.replaceServerResData(req, res, serverResData) || serverResData
                callback()
              } else if (userRule.replaceServerResDataAsync) {
                userRule.replaceServerResDataAsync(req, res, serverResData, function (newRes) {
                  serverResData = newRes
                  callback()
                })
              } else {
                callback()
              }

              // delay
            },
            function (callback) {
              const pauseTimeInMS = userRule.pauseBeforeSendingResponse(req, res)
              if (pauseTimeInMS) {
                setTimeout(callback, pauseTimeInMS)
              } else {
                callback()
              }

              // send response
            },
            function (callback) {
              userRule.saveAllHttpResponse(req, statusCode, resHeader, serverResData)
              userRes.writeHead(statusCode, resHeader)

              userRes.end(serverResData)
              callback()

              // udpate record info
            },
            function (callback) {
              resourceInfo.endTime = new Date().getTime()
              resourceInfo.statusCode = statusCode
              resourceInfo.resHeader = resHeader
              resourceInfo.resBody = ifServerGzipped ? zlib.gunzipSync(serverResData) : serverResData
              resourceInfo.length = serverResData ? serverResData.length : 0

              callback()
              // push trafic data to rule file
            },
            function (callback) {
              userRule.fetchTrafficData && userRule.fetchTrafficData(resourceInfoId, resourceInfo)
              callback()
            }

          ], function (err, result) {
            callback && callback()
          })
        })

        res.on('error', function (error) {
          log.error(`error${error}`)
        })
      })

      proxyReq.on('error', function (e) {
        log.error(`err with request :${e}  ${req.url}`)
        userRes.end()
      })

      proxyReq.end(reqData)
    })
  }
}


function setRules(newRule) {
  if (!newRule) return
  userRule = util.merge(defaultRule, newRule)
  if (typeof (userRule.init) == 'function') {
    userRule.init()
  }
}

module.exports = {
  userRequestHandler,
  setRules
}

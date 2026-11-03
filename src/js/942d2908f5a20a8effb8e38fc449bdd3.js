const fs = require('fs')

module.exports = {
  summary() {
    const tip = 'the default rule for AnyProxy which supports CORS.'
    return tip
  },

  shouldUseLocalResponse(req, reqBody) {
    return true
  },

  dealLocalResponse(req, reqBody, callback) {
    if (req.method == 'OPTIONS') {
      callback(200, mergeCORSHeader(req.headers), '')
    } else if (req.anyproxy_map_local) {
      fs.readFile(req.anyproxy_map_local, function (err, buffer) {
        if (err) {
          callback(200, {}, `[AnyProxy failed to load local file] ${err}`)
        } else {
          callback(200, {}, buffer)
        }
      })
    }
  },

  replaceRequestProtocol(req, protocol) {},

  replaceRequestOption(req, option) {},

  replaceRequestData(req, data) {},

  replaceResponseStatusCode(req, res, statusCode) {},

  replaceResponseHeader(req, res, header) {
    return mergeCORSHeader(req.headers, header)
  },

  // Deprecated
  // replaceServerResData: function(req,res,serverResData){
  //     return serverResData;
  // },

  replaceServerResDataAsync(req, res, serverResData, callback) {
    callback(serverResData)
  },

  pauseBeforeSendingResponse(req, res) {},

  saveAllHttpResponse(req, statusCode, resHeader, serverResData) {},
  // [beta]
  // fetch entire traffic data
  fetchTrafficData(id, info) {}
}

function mergeCORSHeader(reqHeader, originHeader) {
  const targetObj = originHeader || {}

  delete targetObj['Access-Control-Allow-Credentials']
  delete targetObj['Access-Control-Allow-Origin']
  delete targetObj['Access-Control-Allow-Methods']
  delete targetObj['Access-Control-Allow-Headers']

  targetObj['access-control-allow-credentials'] = 'true'
  targetObj['access-control-allow-origin'] = reqHeader.origin || reqHeader.Origin || '-___-||'
  targetObj['access-control-allow-methods'] = 'GET, POST, PUT'
  targetObj['access-control-allow-headers'] = reqHeader['access-control-request-headers'] || '-___-||'

  return targetObj
}

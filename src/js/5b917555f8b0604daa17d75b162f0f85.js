// {"Content-Encoding":"gzip"} --> {"content-encoding":"gzip"}
const lower_keys = function (obj) {
  for (const key in obj) {
    const low = key.toLowerCase()
    const val = obj[key]
    delete obj[key]
    if (low !== 'host') {
      obj[low] = val
    } else {
      obj.Host = val
    }
  }

  return obj
}

const merge = function (baseObj, extendObj) {
  for (const key in extendObj) {
    baseObj[key] = extendObj[key]
  }
  return baseObj
}


module.exports = {
  merge,
  lower_keys
}

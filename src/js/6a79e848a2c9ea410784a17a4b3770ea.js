// src: https://github.com/davidchambers/Base64.js/blob/master/base64.js
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const btoa = function (input) {
  const str = String(input)
  let output = ''
  for (
    let block, charCode, idx = 0, map = chars;
    str.charAt(idx | 0) || (map = '=', idx % 1);
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3/4)
    if (charCode > 0xFF) {
      throw new Error('"btoa" failed')
    }
    block = block << 8 | charCode
  }
  return output
}
const atob = function (input) {
  const str = String(input).replace(/=+$/, '')
  let output = ''
  if (str.length % 4 === 1) {
    throw new Error('"atob" failed')
  }
  for (
    let bc = 0, bs, buffer, idx = 0;
    buffer = str.charAt(idx++);
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ?
      output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    buffer = chars.indexOf(buffer)
  }
  return output
}

function arrayBufferToBase64(buffer) {
  let binaryString = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binaryString += String.fromCharCode(bytes[i])
  }
  return btoa(binaryString)
}

function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64)
  const len = binaryString.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes.buffer
}

module.exports = {
  arrayBufferToBase64,
  base64ToArrayBuffer
}

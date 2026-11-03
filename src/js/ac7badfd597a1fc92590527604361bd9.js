'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
/**
 * Pad a number with leading zeros
 */
exports.default = (number, minWidth = 2) => {
  return number > Math.pow(10, minWidth)
    ? String(number)
    : `${new Array(minWidth).join('0')}${number}`.slice(-minWidth)
}

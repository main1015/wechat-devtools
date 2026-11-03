"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ab2str = ab2str;
exports.str2ab = str2ab;
exports.writeChars = writeChars;
function ab2str(buf, charIndex = 0, charLen) {
    const nCharLen = charLen || (buf.byteLength / 2 - charIndex);
    return String.fromCharCode.apply(null, new Uint16Array(buf, charIndex * 2, nCharLen));
}
function str2ab(str, ctor) {
    const len = str.length;
    const buf = new ctor(len * 2);
    const bufView = new Uint16Array(buf);
    for (let i = 0, strLen = len; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
function writeChars(fullStr, buf, bufWriteOffset, strOffset, writeLen) {
    const bufView = new Uint16Array(buf, bufWriteOffset, writeLen);
    for (let j = 0, i = strOffset, strLen = strOffset + writeLen; i < strLen;) {
        bufView[j] = fullStr.charCodeAt(i);
        i += 1;
        j += 1;
    }
    return buf;
}
//# sourceMappingURL=util.js.map
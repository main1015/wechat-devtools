"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSignature = exports.checkBufferSignature = exports.generateMd5 = void 0;
// const fs = require('fs');
const crypto = require('crypto');
const PUBLIKEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIfocuCk0FdG9zN9C6GqhJRVNG
1FbJa8aUAZDawoCcwowIc/zMHRCl3srHUOQi3fjZpSObiVbvLidlWDSOw/rdBxbU
G/4BqJFuIUQziCnqdRiCyYV2w9Z29/qNcKbr1gxmqXVgo0WRbkKlIFKGvSXFiVM3
n49RQm2mgWsvqXn2vQIDAQAB
-----END PUBLIC KEY-----`;
function generateMd5(buffer) {
    const md5sum = crypto.createHash('md5');
    md5sum.update(buffer);
    return md5sum.digest('hex');
}
exports.generateMd5 = generateMd5;
function checkBufferSignature(buffer, signature, publicKey) {
    if (!signature) {
        return false;
    }
    const md5 = generateMd5(buffer);
    return checkSignature(md5, signature, publicKey);
}
exports.checkBufferSignature = checkBufferSignature;
function checkSignature(origin, signature, publicKey) {
    if (!signature) {
        return false;
    }
    const buf = Buffer.from(signature, 'base64');
    const verify = crypto.createVerify('RSA-SHA1');
    verify.update(origin);
    if (verify.verify(publicKey || PUBLIKEY, buf)) {
        return true;
    }
    return false;
}
exports.checkSignature = checkSignature;
// export function checkFileMd5Signature(filePath: string, signature: string, publicKey?: string) {
//   const fileBuffer = fs.readFileSync(filePath);
//   return checkBufferSignature(fileBuffer, signature, publicKey);
// }

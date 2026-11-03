"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferCoder = void 0;
const common_1 = require("./common");
class BufferCoder {
    constructor(descriptor, buffer) {
        this.descriptor = descriptor;
        this.buffer = buffer;
        this._elementsCache = [];
        if (buffer.byteLength !== descriptor.totalBytes) {
            throw new Error('BufferCoder length not match its descriptor');
        }
    }
    _getOffsetForElement(index) {
        if (index < 0 || index >= this.descriptor.byteOffsets.length) {
            throw new Error('BufferCoder read out of range');
        }
        const offset = this.descriptor.byteOffsets[index];
        let readLen = -1;
        if (index < this.descriptor.byteOffsets.length - 1) {
            readLen = this.descriptor.byteOffsets[index + 1] - offset;
        }
        else {
            const totalLen = this.descriptor.totalBytes;
            readLen = totalLen - offset;
        }
        return [offset, readLen];
    }
    readElement(index) {
        const cache = this._elementsCache[index];
        if (typeof cache === 'number')
            return cache;
        const info = this._getOffsetForElement(index);
        const num = this._doReadElement(info[0], info[1]);
        this._elementsCache[index] = num;
        return num;
    }
    writeElement(index, value) {
        this._outdate();
        const info = this._getOffsetForElement(index);
        return this._doWriteElement(info[0], info[1], value);
    }
    _doReadElement(offset, readLen) {
        switch (readLen) {
            case 1: return this.dataView.getUint8(offset);
            case 4: return this.dataView.getUint16(offset, common_1.littleEndian);
            case 8: return this.dataView.getUint32(offset, common_1.littleEndian);
            default: {
                throw new Error('BufferCoder invalid read offset and len');
            }
        }
    }
    _doWriteElement(offset, readLen, value) {
        switch (readLen) {
            case 1: return this.dataView.setInt8(offset, value);
            case 4: return this.dataView.setUint16(offset, value, common_1.littleEndian);
            case 8: return this.dataView.setUint32(offset, value, common_1.littleEndian);
            default: {
                throw new Error('BufferCoder invalid write offset and len');
            }
        }
    }
    _outdate() {
        if (this._elementsCache.length === 0)
            return;
        this._elementsCache.length = 0;
    }
    get dataView() {
        if (!this._dataView) {
            this._dataView = new DataView(this.buffer, 0, this.buffer.byteLength);
        }
        return this._dataView;
    }
}
exports.BufferCoder = BufferCoder;
//# sourceMappingURL=coder.js.map
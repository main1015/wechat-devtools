"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WXMLNodeBufferEncoder = exports.ReadonlyWXMLNodeBufferDecoder = exports.WXMLAttrBufferEncoder = exports.ReadonlyWXMLAttrBufferDecoder = exports.WXMLAttrBufferCoderDescriptor = exports.WXMLNodeBufferCoderDescriptor = void 0;
exports.typeOfWXMLBufferCoder = typeOfWXMLBufferCoder;
const coder_1 = require("./coder");
exports.WXMLNodeBufferCoderDescriptor = {
    byteOffsets: [0, 1, 5, 9, 13],
    totalBytes: 17,
};
exports.WXMLAttrBufferCoderDescriptor = {
    byteOffsets: [0, 1, 5, 9, 13],
    totalBytes: 17,
};
class ReadonlyWXMLAttrBufferDecoder extends coder_1.BufferCoder {
    constructor(ab) {
        super(exports.WXMLAttrBufferCoderDescriptor, ab);
    }
    get nodeType() {
        const isAttr = (this.readElement(0) & 0b001) !== 0;
        return !isAttr ? 0 : 1;
    }
    get offset() {
        return this.readElement(1);
    }
    get endOffset() {
        return this.readElement(2);
    }
    get keyEndOffset() {
        return this.readElement(3);
    }
    get valueOffset() {
        return this.readElement(4);
    }
    print() {
        return `Attr {${([this.nodeType, this.offset, this.endOffset, this.keyEndOffset, this.valueOffset]).join(',')}}`;
    }
}
exports.ReadonlyWXMLAttrBufferDecoder = ReadonlyWXMLAttrBufferDecoder;
class WXMLAttrBufferEncoder extends ReadonlyWXMLAttrBufferDecoder {
    constructor(ab) {
        super(ab || new ArrayBuffer(exports.WXMLNodeBufferCoderDescriptor.totalBytes));
    }
    set nodeType(val) {
        if (val !== 1) {
            throw new Error('Setting non-node type ion buffer encoder');
        }
        this.writeElement(0, val);
    }
    get nodeType() {
        return super.nodeType;
    }
    set offset(val) {
        this.writeElement(1, val);
    }
    get offset() {
        return super.offset;
    }
    set endOffset(val) {
        this.writeElement(2, val);
    }
    get endOffset() {
        return super.endOffset;
    }
    set keyEndOffset(val) {
        this.writeElement(3, val);
    }
    get keyEndOffset() {
        return super.keyEndOffset;
    }
    set valueOffset(val) {
        this.writeElement(4, val);
    }
    get valueOffset() {
        return super.valueOffset;
    }
}
exports.WXMLAttrBufferEncoder = WXMLAttrBufferEncoder;
class ReadonlyWXMLNodeBufferDecoder extends coder_1.BufferCoder {
    constructor(ab) {
        super(exports.WXMLNodeBufferCoderDescriptor, ab);
    }
    get nodeType() {
        const isAttr = (this.readElement(0) & 0b001) !== 0;
        return !isAttr ? 0 : 1;
    }
    get closed() {
        const isClosed = (this.readElement(0) & 0b100) !== 0;
        return isClosed ? 1 : 0;
    }
    get offset() {
        return this.readElement(1);
    }
    get endOffset() {
        return this.readElement(2);
    }
    get openTagCloseOffset() {
        return this.readElement(3);
    }
    get closeTagOffset() {
        return this.readElement(4);
    }
    print() {
        return `Node {${([this.nodeType, `(${this.closed ? 'closed' : 'open'})`, this.offset, this.endOffset, this.openTagCloseOffset, this.closeTagOffset]).join(',')}}`;
    }
}
exports.ReadonlyWXMLNodeBufferDecoder = ReadonlyWXMLNodeBufferDecoder;
class WXMLNodeBufferEncoder extends ReadonlyWXMLNodeBufferDecoder {
    constructor(ab) {
        super(ab || new ArrayBuffer(exports.WXMLNodeBufferCoderDescriptor.totalBytes));
        this._closed = false;
    }
    set nodeType(val) {
        if (val !== 0) {
            throw new Error('Setting non-node type ion buffer encoder');
        }
        let bit = 0b000;
        if (this._closed) {
            bit = 0b100;
        }
        this.writeElement(0, bit);
    }
    get nodeType() {
        return super.nodeType;
    }
    set closed(val) {
        this._closed = Boolean(val);
        this.nodeType = 0;
    }
    get closed() {
        return super.closed;
    }
    set offset(val) {
        this.writeElement(1, val);
    }
    get offset() {
        return super.offset;
    }
    set endOffset(val) {
        this.writeElement(2, val);
    }
    get endOffset() {
        return super.endOffset;
    }
    set openTagCloseOffset(val) {
        this.writeElement(3, val);
    }
    get openTagCloseOffset() {
        return super.openTagCloseOffset;
    }
    set closeTagOffset(val) {
        this.writeElement(4, val);
    }
    get closeTagOffset() {
        return super.closeTagOffset;
    }
}
exports.WXMLNodeBufferEncoder = WXMLNodeBufferEncoder;
function typeOfWXMLBufferCoder(ab) {
    if (ab.byteLength < 1) {
        return 255;
    }
    let dv = new DataView(ab, 0, ab.byteLength);
    const type = dv.getUint8(0);
    dv = null;
    const isAttr = (type & 0b001) !== 0;
    return !isAttr ? 0 : 1;
}
//# sourceMappingURL=pageCoder.js.map
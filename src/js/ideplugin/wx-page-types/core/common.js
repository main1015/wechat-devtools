"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.littleEndian = void 0;
exports.littleEndian = (function () {
    const buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true);
    return new Int16Array(buffer)[0] === 256;
}());
//# sourceMappingURL=common.js.map
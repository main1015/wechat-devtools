"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferedTextDocumentModelNode = exports.BufferedTextDocumentModelNodeDescriptor = exports.PreferredChunkSize = void 0;
exports.reArrangeNodes = reArrangeNodes;
exports.nodeIndexForByteOffset = nodeIndexForByteOffset;
exports.nodeIndexForCharOffset = nodeIndexForCharOffset;
exports.copyArrayWithReplaces = copyArrayWithReplaces;
exports.deleteCharsInsideNodes = deleteCharsInsideNodes;
exports.insertCharsWithinNodes = insertCharsWithinNodes;
const index_1 = require("../core/index");
const util_1 = require("../common/util");
exports.PreferredChunkSize = 64 * 1024;
exports.BufferedTextDocumentModelNodeDescriptor = {
    byteOffsets: [0, 1, 5, 9],
    totalBytes: 13,
};
class BufferedTextDocumentModelNode extends index_1.BufferCoder {
    constructor(ab) {
        super(exports.BufferedTextDocumentModelNodeDescriptor, ab || new SharedArrayBuffer(exports.BufferedTextDocumentModelNodeDescriptor.totalBytes));
    }
    clone() {
        const node = new BufferedTextDocumentModelNode();
        node.nodeType = this.nodeType;
        node.chunkIndex = this.chunkIndex;
        node.charLen = this.charLen;
        node.charIndex = this.charIndex;
        return node;
    }
    set nodeType(val) {
        if (val !== 0 && val !== 1) {
            throw new Error('Setting error type of BufferedTextDocumentModelNode');
        }
        this.writeElement(0, val);
    }
    get nodeType() {
        return this.readElement(0);
    }
    set chunkIndex(val) {
        this.writeElement(1, val);
    }
    get chunkIndex() {
        return this.readElement(1);
    }
    set charIndex(val) {
        this.writeElement(2, val);
    }
    get charIndex() {
        return this.readElement(2);
    }
    set charLen(val) {
        this.writeElement(3, val);
    }
    get charLen() {
        return this.readElement(3);
    }
    print() {
        return `BTDMNode { ${this.nodeType === 1 ? 'Added' : 'Original'}, ${this.chunkIndex}, ${this.charIndex}, ${this.charLen} }`;
    }
}
exports.BufferedTextDocumentModelNode = BufferedTextDocumentModelNode;
function reArrangeNodes(nodes) {
    let prevNode;
    let prevType;
    let prevChunkIdx;
    let prevStoppingCharIndex;
    let i = 0;
    let current = nodes[i];
    const newNodes = [];
    const needMerges = [];
    let mergedLen = 0;
    const mergeNodes = () => {
        if (needMerges.length === 0)
            return;
        const first = needMerges[0];
        if (needMerges.length === 1) {
            newNodes.push(first);
        }
        else {
            const mergedOne = first.clone();
            mergedOne.charLen = mergedLen;
            newNodes.push(mergedOne);
        }
        needMerges.length = 0;
        mergedLen = 0;
    };
    const pushMerge = (curr) => {
        mergedLen += curr.charLen;
        needMerges.push(curr);
    };
    while (current) {
        const { nodeType } = current;
        const { chunkIndex } = current;
        const { charLen } = current;
        const { charIndex } = current;
        let skipUpdate = false;
        if (!prevNode) {
            pushMerge(current);
        }
        else if (chunkIndex === prevChunkIdx
            && nodeType === prevType
            && (prevStoppingCharIndex + 1) === charIndex) {
            pushMerge(current);
        }
        else if (charLen === 0) {
            skipUpdate = true;
        }
        else {
            mergeNodes();
            pushMerge(current);
        }
        if (!skipUpdate) {
            prevNode = current;
            prevType = nodeType;
            prevChunkIdx = chunkIndex;
            prevStoppingCharIndex = charIndex + charLen - 1;
        }
        i += 1;
        current = nodes[i];
    }
    mergeNodes();
    return newNodes;
}
function nodeIndexForByteOffset(nodes, byteOffset) {
    if (byteOffset < 0)
        return undefined;
    let i = 0;
    let node = nodes[0];
    let leftEdgeByteOffset = -1;
    let rightEdgeByteOffset = -1;
    while (node) {
        if (node.charLen > 0) {
            leftEdgeByteOffset = rightEdgeByteOffset + 1;
            rightEdgeByteOffset = leftEdgeByteOffset + node.charLen * 2 - 1;
            if (byteOffset <= rightEdgeByteOffset) {
                return [i, leftEdgeByteOffset, rightEdgeByteOffset];
            }
        }
        i += 1;
        node = nodes[i];
    }
    return undefined;
}
function nodeIndexForCharOffset(nodes, charOffset) {
    const r = nodeIndexForByteOffset(nodes, charOffset * 2);
    return r ? [r[0], r[1] / 2, (r[2] - 1) / 2] : void 0;
}
function copyArrayWithReplaces(array, replaces) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (replaces.has(i)) {
            const itemOrArray = replaces.get(i);
            if (!itemOrArray) {
                continue;
            }
            else if (Array.isArray(itemOrArray)) {
                newArray.push(...itemOrArray);
            }
            else {
                newArray.push(itemOrArray);
            }
            continue;
        }
        newArray.push(array[i]);
    }
    return newArray;
}
function deleteCharsInsideNodes(nodes, charOffset, deleteCharLen) {
    if (deleteCharLen <= 0) {
        return nodes;
    }
    const [startNodeIdx, startLeftCharOffset, startRightCharOffset] = nodeIndexForCharOffset(nodes, charOffset) || [];
    let [endNodeIdx, endLeftCharOffset, endRightCharOffset] = nodeIndexForCharOffset(nodes, charOffset + deleteCharLen - 1) || [];
    if (isNaN(startNodeIdx))
        return nodes;
    const replaces = new Map();
    const startNode = nodes[startNodeIdx];
    const endNode = nodes[endNodeIdx];
    const endCharOffset = charOffset + deleteCharLen - 1;
    if (startNode === endNode) {
        if (startLeftCharOffset === charOffset && startRightCharOffset === endCharOffset) {
            replaces.set(startNodeIdx, null);
        }
        else if (startLeftCharOffset === charOffset) {
            const newNode = endNode.clone();
            newNode.charIndex = newNode.charIndex + deleteCharLen;
            newNode.charLen = newNode.charLen - deleteCharLen;
            replaces.set(startNodeIdx, newNode);
        }
        else if (startRightCharOffset === endCharOffset) {
            const newNode = startNode.clone();
            newNode.charLen = newNode.charLen - deleteCharLen;
            replaces.set(startNodeIdx, newNode);
        }
        else {
            const newLeftNode = endNode.clone();
            const newRightNode = endNode.clone();
            newLeftNode.charLen = charOffset - startLeftCharOffset;
            newRightNode.charIndex = endNode.charIndex + newLeftNode.charLen + deleteCharLen;
            newRightNode.charLen = endNode.charLen - deleteCharLen - newLeftNode.charLen;
            replaces.set(startNodeIdx, [newLeftNode, newRightNode]);
        }
    }
    else {
        let collectedLen = 0;
        if (startLeftCharOffset === charOffset) {
            replaces.set(startNodeIdx, null);
            collectedLen += startNode.charLen;
        }
        else {
            const newNode = startNode.clone();
            newNode.charLen = charOffset - startLeftCharOffset;
            replaces.set(startNodeIdx, newNode);
            collectedLen += (startNode.charLen - newNode.charLen);
        }
        if (!endNode) {
            endNodeIdx = nodes.length;
        }
        for (let j = startNodeIdx + 1; j < endNodeIdx; j++) {
            collectedLen += nodes[j].charLen;
            replaces.set(j, null);
        }
        if (endNode) {
            const lengthRemain = deleteCharLen - collectedLen;
            if (endRightCharOffset === endCharOffset) {
                replaces.set(endNodeIdx, null);
            }
            else {
                const newNode = endNode.clone();
                newNode.charIndex = endNode.charIndex + lengthRemain;
                newNode.charLen = endNode.charLen - lengthRemain;
                replaces.set(endNodeIdx, newNode);
            }
        }
    }
    return copyArrayWithReplaces(nodes, replaces);
}
function insertCharsWithinNodes(nodes, originalChunkSlot, lastChunkIndex, lastChunkWriteOffset, beforeCharOffset, chars, ctor) {
    const [nodeIdx, targetLeftCharOffset, targeRightCharOffset] = nodeIndexForCharOffset(nodes, beforeCharOffset) || [];
    let insertToBottom = false;
    if (isNaN(nodeIdx)) {
        insertToBottom = true;
    }
    const targetNode = nodes[nodeIdx];
    const newlyChunks = [];
    let lastOffset = lastChunkWriteOffset;
    const newlyNodes = [];
    function writeChunk(chunk, chunkId, strOffset) {
        const restByteLen = chunk ? (chunk.byteLength - lastOffset) : 0;
        if (!chunk || restByteLen < 2) {
            const newChunk = new ctor(exports.PreferredChunkSize);
            newlyChunks.push(newChunk);
            lastOffset = 0;
            writeChunk(newChunk, newlyChunks.length + lastChunkIndex, strOffset);
        }
        else {
            const restCharsLen = Math.floor(restByteLen / 2);
            const thisTimeCharWriteLen = Math.min(restCharsLen, chars.length - strOffset);
            (0, util_1.writeChars)(chars, chunk, lastOffset, strOffset, thisTimeCharWriteLen);
            const node = new BufferedTextDocumentModelNode();
            node.nodeType = 1;
            node.chunkIndex = chunkId;
            node.charIndex = lastOffset / 2;
            node.charLen = thisTimeCharWriteLen;
            newlyNodes.push(node);
            lastOffset = lastOffset + thisTimeCharWriteLen * 2;
            const nStrOffset = strOffset + thisTimeCharWriteLen;
            if (nStrOffset < chars.length) {
                writeChunk(chunk, chunkId, nStrOffset);
            }
        }
    }
    writeChunk(originalChunkSlot, lastChunkIndex, 0);
    let replaces;
    if (!insertToBottom) {
        replaces = new Map();
        if (targetLeftCharOffset === beforeCharOffset) {
            newlyNodes.push(targetNode);
            replaces.set(nodeIdx, newlyNodes);
        }
        else {
            const left = targetNode.clone();
            const right = targetNode.clone();
            left.charLen = beforeCharOffset - targetLeftCharOffset;
            right.charIndex = left.charIndex + left.charLen;
            right.charLen = targetNode.charLen - left.charLen;
            newlyNodes.unshift(left);
            newlyNodes.push(right);
            replaces.set(nodeIdx, newlyNodes);
        }
    }
    return {
        newlyChunks,
        lastOffset,
        nodes: replaces ? copyArrayWithReplaces(nodes, replaces) : [...nodes, ...newlyNodes],
    };
}
//# sourceMappingURL=bufferedTextDocumentModelNode.js.map
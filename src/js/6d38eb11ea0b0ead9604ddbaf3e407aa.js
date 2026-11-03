/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.UdpLockStepSync = (function() {

    /**
     * Properties of an UdpLockStepSync.
     * @exports IUdpLockStepSync
     * @interface IUdpLockStepSync
     * @property {IUdpLockStepSyncMeta|null} [meta] UdpLockStepSync meta
     * @property {string|null} [gameAccessInfo] UdpLockStepSync gameAccessInfo
     * @property {string|null} [sessionId] UdpLockStepSync sessionId
     * @property {number|null} [requestId] UdpLockStepSync requestId
     * @property {number|null} [cmdId] UdpLockStepSync cmdId
     * @property {Uint8Array|null} [body] UdpLockStepSync body
     * @property {number|null} [errCode] UdpLockStepSync errCode
     * @property {string|null} [errMsg] UdpLockStepSync errMsg
     */

    /**
     * Constructs a new UdpLockStepSync.
     * @exports UdpLockStepSync
     * @classdesc Represents an UdpLockStepSync.
     * @implements IUdpLockStepSync
     * @constructor
     * @param {IUdpLockStepSync=} [properties] Properties to set
     */
    function UdpLockStepSync(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UdpLockStepSync meta.
     * @member {IUdpLockStepSyncMeta|null|undefined} meta
     * @memberof UdpLockStepSync
     * @instance
     */
    UdpLockStepSync.prototype.meta = null;

    /**
     * UdpLockStepSync gameAccessInfo.
     * @member {string} gameAccessInfo
     * @memberof UdpLockStepSync
     * @instance
     */
    UdpLockStepSync.prototype.gameAccessInfo = "";

    /**
     * UdpLockStepSync sessionId.
     * @member {string} sessionId
     * @memberof UdpLockStepSync
     * @instance
     */
    UdpLockStepSync.prototype.sessionId = "";

    /**
     * UdpLockStepSync requestId.
     * @member {number} requestId
     * @memberof UdpLockStepSync
     * @instance
     */
    UdpLockStepSync.prototype.requestId = 0;

    /**
     * UdpLockStepSync cmdId.
     * @member {number} cmdId
     * @memberof UdpLockStepSync
     * @instance
     */
    UdpLockStepSync.prototype.cmdId = 0;

    /**
     * UdpLockStepSync body.
     * @member {Uint8Array} body
     * @memberof UdpLockStepSync
     * @instance
     */
    UdpLockStepSync.prototype.body = $util.newBuffer([]);

    /**
     * UdpLockStepSync errCode.
     * @member {number} errCode
     * @memberof UdpLockStepSync
     * @instance
     */
    UdpLockStepSync.prototype.errCode = 0;

    /**
     * UdpLockStepSync errMsg.
     * @member {string} errMsg
     * @memberof UdpLockStepSync
     * @instance
     */
    UdpLockStepSync.prototype.errMsg = "";

    /**
     * Creates a new UdpLockStepSync instance using the specified properties.
     * @function create
     * @memberof UdpLockStepSync
     * @static
     * @param {IUdpLockStepSync=} [properties] Properties to set
     * @returns {UdpLockStepSync} UdpLockStepSync instance
     */
    UdpLockStepSync.create = function create(properties) {
        return new UdpLockStepSync(properties);
    };

    /**
     * Encodes the specified UdpLockStepSync message. Does not implicitly {@link UdpLockStepSync.verify|verify} messages.
     * @function encode
     * @memberof UdpLockStepSync
     * @static
     * @param {IUdpLockStepSync} message UdpLockStepSync message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpLockStepSync.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.meta != null && message.hasOwnProperty("meta"))
            $root.UdpLockStepSyncMeta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.gameAccessInfo != null && message.hasOwnProperty("gameAccessInfo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameAccessInfo);
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sessionId);
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.requestId);
        if (message.cmdId != null && message.hasOwnProperty("cmdId"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cmdId);
        if (message.body != null && message.hasOwnProperty("body"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.body);
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.errCode);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.errMsg);
        return writer;
    };

    /**
     * Encodes the specified UdpLockStepSync message, length delimited. Does not implicitly {@link UdpLockStepSync.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UdpLockStepSync
     * @static
     * @param {IUdpLockStepSync} message UdpLockStepSync message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpLockStepSync.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UdpLockStepSync message from the specified reader or buffer.
     * @function decode
     * @memberof UdpLockStepSync
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UdpLockStepSync} UdpLockStepSync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpLockStepSync.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UdpLockStepSync();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.meta = $root.UdpLockStepSyncMeta.decode(reader, reader.uint32());
                break;
            case 2:
                message.gameAccessInfo = reader.string();
                break;
            case 3:
                message.sessionId = reader.string();
                break;
            case 4:
                message.requestId = reader.uint32();
                break;
            case 5:
                message.cmdId = reader.uint32();
                break;
            case 6:
                message.body = reader.bytes();
                break;
            case 17:
                message.errCode = reader.int32();
                break;
            case 18:
                message.errMsg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UdpLockStepSync message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UdpLockStepSync
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UdpLockStepSync} UdpLockStepSync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpLockStepSync.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UdpLockStepSync message.
     * @function verify
     * @memberof UdpLockStepSync
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UdpLockStepSync.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.meta != null && message.hasOwnProperty("meta")) {
            var error = $root.UdpLockStepSyncMeta.verify(message.meta);
            if (error)
                return "meta." + error;
        }
        if (message.gameAccessInfo != null && message.hasOwnProperty("gameAccessInfo"))
            if (!$util.isString(message.gameAccessInfo))
                return "gameAccessInfo: string expected";
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (!$util.isString(message.sessionId))
                return "sessionId: string expected";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
        if (message.cmdId != null && message.hasOwnProperty("cmdId"))
            if (!$util.isInteger(message.cmdId))
                return "cmdId: integer expected";
        if (message.body != null && message.hasOwnProperty("body"))
            if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                return "body: buffer expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            if (!$util.isString(message.errMsg))
                return "errMsg: string expected";
        return null;
    };

    /**
     * Creates an UdpLockStepSync message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UdpLockStepSync
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UdpLockStepSync} UdpLockStepSync
     */
    UdpLockStepSync.fromObject = function fromObject(object) {
        if (object instanceof $root.UdpLockStepSync)
            return object;
        var message = new $root.UdpLockStepSync();
        if (object.meta != null) {
            if (typeof object.meta !== "object")
                throw TypeError(".UdpLockStepSync.meta: object expected");
            message.meta = $root.UdpLockStepSyncMeta.fromObject(object.meta);
        }
        if (object.gameAccessInfo != null)
            message.gameAccessInfo = String(object.gameAccessInfo);
        if (object.sessionId != null)
            message.sessionId = String(object.sessionId);
        if (object.requestId != null)
            message.requestId = object.requestId >>> 0;
        if (object.cmdId != null)
            message.cmdId = object.cmdId >>> 0;
        if (object.body != null)
            if (typeof object.body === "string")
                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
            else if (object.body.length)
                message.body = object.body;
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        return message;
    };

    /**
     * Creates a plain object from an UdpLockStepSync message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UdpLockStepSync
     * @static
     * @param {UdpLockStepSync} message UdpLockStepSync
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UdpLockStepSync.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.meta = null;
            object.gameAccessInfo = "";
            object.sessionId = "";
            object.requestId = 0;
            object.cmdId = 0;
            if (options.bytes === String)
                object.body = "";
            else {
                object.body = [];
                if (options.bytes !== Array)
                    object.body = $util.newBuffer(object.body);
            }
            object.errCode = 0;
            object.errMsg = "";
        }
        if (message.meta != null && message.hasOwnProperty("meta"))
            object.meta = $root.UdpLockStepSyncMeta.toObject(message.meta, options);
        if (message.gameAccessInfo != null && message.hasOwnProperty("gameAccessInfo"))
            object.gameAccessInfo = message.gameAccessInfo;
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            object.sessionId = message.sessionId;
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.cmdId != null && message.hasOwnProperty("cmdId"))
            object.cmdId = message.cmdId;
        if (message.body != null && message.hasOwnProperty("body"))
            object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        return object;
    };

    /**
     * Converts this UdpLockStepSync to JSON.
     * @function toJSON
     * @memberof UdpLockStepSync
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UdpLockStepSync.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UdpLockStepSync;
})();

$root.UdpLockStepSyncMeta = (function() {

    /**
     * Properties of an UdpLockStepSyncMeta.
     * @exports IUdpLockStepSyncMeta
     * @interface IUdpLockStepSyncMeta
     * @property {number|null} [compressAlgo] UdpLockStepSyncMeta compressAlgo
     * @property {number|null} [cryptAlgo] UdpLockStepSyncMeta cryptAlgo
     */

    /**
     * Constructs a new UdpLockStepSyncMeta.
     * @exports UdpLockStepSyncMeta
     * @classdesc Represents an UdpLockStepSyncMeta.
     * @implements IUdpLockStepSyncMeta
     * @constructor
     * @param {IUdpLockStepSyncMeta=} [properties] Properties to set
     */
    function UdpLockStepSyncMeta(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UdpLockStepSyncMeta compressAlgo.
     * @member {number} compressAlgo
     * @memberof UdpLockStepSyncMeta
     * @instance
     */
    UdpLockStepSyncMeta.prototype.compressAlgo = 0;

    /**
     * UdpLockStepSyncMeta cryptAlgo.
     * @member {number} cryptAlgo
     * @memberof UdpLockStepSyncMeta
     * @instance
     */
    UdpLockStepSyncMeta.prototype.cryptAlgo = 0;

    /**
     * Creates a new UdpLockStepSyncMeta instance using the specified properties.
     * @function create
     * @memberof UdpLockStepSyncMeta
     * @static
     * @param {IUdpLockStepSyncMeta=} [properties] Properties to set
     * @returns {UdpLockStepSyncMeta} UdpLockStepSyncMeta instance
     */
    UdpLockStepSyncMeta.create = function create(properties) {
        return new UdpLockStepSyncMeta(properties);
    };

    /**
     * Encodes the specified UdpLockStepSyncMeta message. Does not implicitly {@link UdpLockStepSyncMeta.verify|verify} messages.
     * @function encode
     * @memberof UdpLockStepSyncMeta
     * @static
     * @param {IUdpLockStepSyncMeta} message UdpLockStepSyncMeta message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpLockStepSyncMeta.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.compressAlgo != null && message.hasOwnProperty("compressAlgo"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.compressAlgo);
        if (message.cryptAlgo != null && message.hasOwnProperty("cryptAlgo"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cryptAlgo);
        return writer;
    };

    /**
     * Encodes the specified UdpLockStepSyncMeta message, length delimited. Does not implicitly {@link UdpLockStepSyncMeta.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UdpLockStepSyncMeta
     * @static
     * @param {IUdpLockStepSyncMeta} message UdpLockStepSyncMeta message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpLockStepSyncMeta.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UdpLockStepSyncMeta message from the specified reader or buffer.
     * @function decode
     * @memberof UdpLockStepSyncMeta
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UdpLockStepSyncMeta} UdpLockStepSyncMeta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpLockStepSyncMeta.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UdpLockStepSyncMeta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.compressAlgo = reader.uint32();
                break;
            case 2:
                message.cryptAlgo = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UdpLockStepSyncMeta message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UdpLockStepSyncMeta
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UdpLockStepSyncMeta} UdpLockStepSyncMeta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpLockStepSyncMeta.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UdpLockStepSyncMeta message.
     * @function verify
     * @memberof UdpLockStepSyncMeta
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UdpLockStepSyncMeta.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.compressAlgo != null && message.hasOwnProperty("compressAlgo"))
            if (!$util.isInteger(message.compressAlgo))
                return "compressAlgo: integer expected";
        if (message.cryptAlgo != null && message.hasOwnProperty("cryptAlgo"))
            if (!$util.isInteger(message.cryptAlgo))
                return "cryptAlgo: integer expected";
        return null;
    };

    /**
     * Creates an UdpLockStepSyncMeta message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UdpLockStepSyncMeta
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UdpLockStepSyncMeta} UdpLockStepSyncMeta
     */
    UdpLockStepSyncMeta.fromObject = function fromObject(object) {
        if (object instanceof $root.UdpLockStepSyncMeta)
            return object;
        var message = new $root.UdpLockStepSyncMeta();
        if (object.compressAlgo != null)
            message.compressAlgo = object.compressAlgo >>> 0;
        if (object.cryptAlgo != null)
            message.cryptAlgo = object.cryptAlgo >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an UdpLockStepSyncMeta message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UdpLockStepSyncMeta
     * @static
     * @param {UdpLockStepSyncMeta} message UdpLockStepSyncMeta
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UdpLockStepSyncMeta.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.compressAlgo = 0;
            object.cryptAlgo = 0;
        }
        if (message.compressAlgo != null && message.hasOwnProperty("compressAlgo"))
            object.compressAlgo = message.compressAlgo;
        if (message.cryptAlgo != null && message.hasOwnProperty("cryptAlgo"))
            object.cryptAlgo = message.cryptAlgo;
        return object;
    };

    /**
     * Converts this UdpLockStepSyncMeta to JSON.
     * @function toJSON
     * @memberof UdpLockStepSyncMeta
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UdpLockStepSyncMeta.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UdpLockStepSyncMeta;
})();

$root.ClientPkg = (function() {

    /**
     * Properties of a ClientPkg.
     * @exports IClientPkg
     * @interface IClientPkg
     * @property {IClientPkgHead|null} [head] ClientPkg head
     * @property {Array.<Uint8Array>|null} [actionList] ClientPkg actionList
     */

    /**
     * Constructs a new ClientPkg.
     * @exports ClientPkg
     * @classdesc Represents a ClientPkg.
     * @implements IClientPkg
     * @constructor
     * @param {IClientPkg=} [properties] Properties to set
     */
    function ClientPkg(properties) {
        this.actionList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientPkg head.
     * @member {IClientPkgHead|null|undefined} head
     * @memberof ClientPkg
     * @instance
     */
    ClientPkg.prototype.head = null;

    /**
     * ClientPkg actionList.
     * @member {Array.<Uint8Array>} actionList
     * @memberof ClientPkg
     * @instance
     */
    ClientPkg.prototype.actionList = $util.emptyArray;

    /**
     * Creates a new ClientPkg instance using the specified properties.
     * @function create
     * @memberof ClientPkg
     * @static
     * @param {IClientPkg=} [properties] Properties to set
     * @returns {ClientPkg} ClientPkg instance
     */
    ClientPkg.create = function create(properties) {
        return new ClientPkg(properties);
    };

    /**
     * Encodes the specified ClientPkg message. Does not implicitly {@link ClientPkg.verify|verify} messages.
     * @function encode
     * @memberof ClientPkg
     * @static
     * @param {IClientPkg} message ClientPkg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientPkg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.head != null && message.hasOwnProperty("head"))
            $root.ClientPkgHead.encode(message.head, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.actionList != null && message.actionList.length)
            for (var i = 0; i < message.actionList.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.actionList[i]);
        return writer;
    };

    /**
     * Encodes the specified ClientPkg message, length delimited. Does not implicitly {@link ClientPkg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientPkg
     * @static
     * @param {IClientPkg} message ClientPkg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientPkg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientPkg message from the specified reader or buffer.
     * @function decode
     * @memberof ClientPkg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientPkg} ClientPkg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientPkg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientPkg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.head = $root.ClientPkgHead.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.actionList && message.actionList.length))
                    message.actionList = [];
                message.actionList.push(reader.bytes());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientPkg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientPkg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientPkg} ClientPkg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientPkg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientPkg message.
     * @function verify
     * @memberof ClientPkg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientPkg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.head != null && message.hasOwnProperty("head")) {
            var error = $root.ClientPkgHead.verify(message.head);
            if (error)
                return "head." + error;
        }
        if (message.actionList != null && message.hasOwnProperty("actionList")) {
            if (!Array.isArray(message.actionList))
                return "actionList: array expected";
            for (var i = 0; i < message.actionList.length; ++i)
                if (!(message.actionList[i] && typeof message.actionList[i].length === "number" || $util.isString(message.actionList[i])))
                    return "actionList: buffer[] expected";
        }
        return null;
    };

    /**
     * Creates a ClientPkg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientPkg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientPkg} ClientPkg
     */
    ClientPkg.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientPkg)
            return object;
        var message = new $root.ClientPkg();
        if (object.head != null) {
            if (typeof object.head !== "object")
                throw TypeError(".ClientPkg.head: object expected");
            message.head = $root.ClientPkgHead.fromObject(object.head);
        }
        if (object.actionList) {
            if (!Array.isArray(object.actionList))
                throw TypeError(".ClientPkg.actionList: array expected");
            message.actionList = [];
            for (var i = 0; i < object.actionList.length; ++i)
                if (typeof object.actionList[i] === "string")
                    $util.base64.decode(object.actionList[i], message.actionList[i] = $util.newBuffer($util.base64.length(object.actionList[i])), 0);
                else if (object.actionList[i].length)
                    message.actionList[i] = object.actionList[i];
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientPkg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientPkg
     * @static
     * @param {ClientPkg} message ClientPkg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientPkg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.actionList = [];
        if (options.defaults)
            object.head = null;
        if (message.head != null && message.hasOwnProperty("head"))
            object.head = $root.ClientPkgHead.toObject(message.head, options);
        if (message.actionList && message.actionList.length) {
            object.actionList = [];
            for (var j = 0; j < message.actionList.length; ++j)
                object.actionList[j] = options.bytes === String ? $util.base64.encode(message.actionList[j], 0, message.actionList[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.actionList[j]) : message.actionList[j];
        }
        return object;
    };

    /**
     * Converts this ClientPkg to JSON.
     * @function toJSON
     * @memberof ClientPkg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientPkg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientPkg;
})();

$root.ClientPkgHead = (function() {

    /**
     * Properties of a ClientPkgHead.
     * @exports IClientPkgHead
     * @interface IClientPkgHead
     * @property {number|null} [seq] ClientPkgHead seq
     * @property {number|null} [ack] ClientPkgHead ack
     * @property {number|null} [clientFrameId] ClientPkgHead clientFrameId
     */

    /**
     * Constructs a new ClientPkgHead.
     * @exports ClientPkgHead
     * @classdesc Represents a ClientPkgHead.
     * @implements IClientPkgHead
     * @constructor
     * @param {IClientPkgHead=} [properties] Properties to set
     */
    function ClientPkgHead(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientPkgHead seq.
     * @member {number} seq
     * @memberof ClientPkgHead
     * @instance
     */
    ClientPkgHead.prototype.seq = 0;

    /**
     * ClientPkgHead ack.
     * @member {number} ack
     * @memberof ClientPkgHead
     * @instance
     */
    ClientPkgHead.prototype.ack = 0;

    /**
     * ClientPkgHead clientFrameId.
     * @member {number} clientFrameId
     * @memberof ClientPkgHead
     * @instance
     */
    ClientPkgHead.prototype.clientFrameId = 0;

    /**
     * Creates a new ClientPkgHead instance using the specified properties.
     * @function create
     * @memberof ClientPkgHead
     * @static
     * @param {IClientPkgHead=} [properties] Properties to set
     * @returns {ClientPkgHead} ClientPkgHead instance
     */
    ClientPkgHead.create = function create(properties) {
        return new ClientPkgHead(properties);
    };

    /**
     * Encodes the specified ClientPkgHead message. Does not implicitly {@link ClientPkgHead.verify|verify} messages.
     * @function encode
     * @memberof ClientPkgHead
     * @static
     * @param {IClientPkgHead} message ClientPkgHead message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientPkgHead.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seq != null && message.hasOwnProperty("seq"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.seq);
        if (message.ack != null && message.hasOwnProperty("ack"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ack);
        if (message.clientFrameId != null && message.hasOwnProperty("clientFrameId"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.clientFrameId);
        return writer;
    };

    /**
     * Encodes the specified ClientPkgHead message, length delimited. Does not implicitly {@link ClientPkgHead.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientPkgHead
     * @static
     * @param {IClientPkgHead} message ClientPkgHead message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientPkgHead.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientPkgHead message from the specified reader or buffer.
     * @function decode
     * @memberof ClientPkgHead
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientPkgHead} ClientPkgHead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientPkgHead.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientPkgHead();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seq = reader.uint32();
                break;
            case 2:
                message.ack = reader.uint32();
                break;
            case 3:
                message.clientFrameId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientPkgHead message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientPkgHead
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientPkgHead} ClientPkgHead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientPkgHead.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientPkgHead message.
     * @function verify
     * @memberof ClientPkgHead
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientPkgHead.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (!$util.isInteger(message.seq))
                return "seq: integer expected";
        if (message.ack != null && message.hasOwnProperty("ack"))
            if (!$util.isInteger(message.ack))
                return "ack: integer expected";
        if (message.clientFrameId != null && message.hasOwnProperty("clientFrameId"))
            if (!$util.isInteger(message.clientFrameId))
                return "clientFrameId: integer expected";
        return null;
    };

    /**
     * Creates a ClientPkgHead message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientPkgHead
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientPkgHead} ClientPkgHead
     */
    ClientPkgHead.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientPkgHead)
            return object;
        var message = new $root.ClientPkgHead();
        if (object.seq != null)
            message.seq = object.seq >>> 0;
        if (object.ack != null)
            message.ack = object.ack >>> 0;
        if (object.clientFrameId != null)
            message.clientFrameId = object.clientFrameId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ClientPkgHead message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientPkgHead
     * @static
     * @param {ClientPkgHead} message ClientPkgHead
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientPkgHead.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seq = 0;
            object.ack = 0;
            object.clientFrameId = 0;
        }
        if (message.seq != null && message.hasOwnProperty("seq"))
            object.seq = message.seq;
        if (message.ack != null && message.hasOwnProperty("ack"))
            object.ack = message.ack;
        if (message.clientFrameId != null && message.hasOwnProperty("clientFrameId"))
            object.clientFrameId = message.clientFrameId;
        return object;
    };

    /**
     * Converts this ClientPkgHead to JSON.
     * @function toJSON
     * @memberof ClientPkgHead
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientPkgHead.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientPkgHead;
})();

$root.ServerPkg = (function() {

    /**
     * Properties of a ServerPkg.
     * @exports IServerPkg
     * @interface IServerPkg
     * @property {IServerPkgHead|null} [head] ServerPkg head
     * @property {Array.<ILockStepFrame>|null} [frameList] ServerPkg frameList
     */

    /**
     * Constructs a new ServerPkg.
     * @exports ServerPkg
     * @classdesc Represents a ServerPkg.
     * @implements IServerPkg
     * @constructor
     * @param {IServerPkg=} [properties] Properties to set
     */
    function ServerPkg(properties) {
        this.frameList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerPkg head.
     * @member {IServerPkgHead|null|undefined} head
     * @memberof ServerPkg
     * @instance
     */
    ServerPkg.prototype.head = null;

    /**
     * ServerPkg frameList.
     * @member {Array.<ILockStepFrame>} frameList
     * @memberof ServerPkg
     * @instance
     */
    ServerPkg.prototype.frameList = $util.emptyArray;

    /**
     * Creates a new ServerPkg instance using the specified properties.
     * @function create
     * @memberof ServerPkg
     * @static
     * @param {IServerPkg=} [properties] Properties to set
     * @returns {ServerPkg} ServerPkg instance
     */
    ServerPkg.create = function create(properties) {
        return new ServerPkg(properties);
    };

    /**
     * Encodes the specified ServerPkg message. Does not implicitly {@link ServerPkg.verify|verify} messages.
     * @function encode
     * @memberof ServerPkg
     * @static
     * @param {IServerPkg} message ServerPkg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerPkg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.head != null && message.hasOwnProperty("head"))
            $root.ServerPkgHead.encode(message.head, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.frameList != null && message.frameList.length)
            for (var i = 0; i < message.frameList.length; ++i)
                $root.LockStepFrame.encode(message.frameList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerPkg message, length delimited. Does not implicitly {@link ServerPkg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerPkg
     * @static
     * @param {IServerPkg} message ServerPkg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerPkg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerPkg message from the specified reader or buffer.
     * @function decode
     * @memberof ServerPkg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerPkg} ServerPkg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerPkg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerPkg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.head = $root.ServerPkgHead.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.frameList && message.frameList.length))
                    message.frameList = [];
                message.frameList.push($root.LockStepFrame.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerPkg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerPkg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerPkg} ServerPkg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerPkg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerPkg message.
     * @function verify
     * @memberof ServerPkg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerPkg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.head != null && message.hasOwnProperty("head")) {
            var error = $root.ServerPkgHead.verify(message.head);
            if (error)
                return "head." + error;
        }
        if (message.frameList != null && message.hasOwnProperty("frameList")) {
            if (!Array.isArray(message.frameList))
                return "frameList: array expected";
            for (var i = 0; i < message.frameList.length; ++i) {
                var error = $root.LockStepFrame.verify(message.frameList[i]);
                if (error)
                    return "frameList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerPkg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerPkg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerPkg} ServerPkg
     */
    ServerPkg.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerPkg)
            return object;
        var message = new $root.ServerPkg();
        if (object.head != null) {
            if (typeof object.head !== "object")
                throw TypeError(".ServerPkg.head: object expected");
            message.head = $root.ServerPkgHead.fromObject(object.head);
        }
        if (object.frameList) {
            if (!Array.isArray(object.frameList))
                throw TypeError(".ServerPkg.frameList: array expected");
            message.frameList = [];
            for (var i = 0; i < object.frameList.length; ++i) {
                if (typeof object.frameList[i] !== "object")
                    throw TypeError(".ServerPkg.frameList: object expected");
                message.frameList[i] = $root.LockStepFrame.fromObject(object.frameList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerPkg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerPkg
     * @static
     * @param {ServerPkg} message ServerPkg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerPkg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.frameList = [];
        if (options.defaults)
            object.head = null;
        if (message.head != null && message.hasOwnProperty("head"))
            object.head = $root.ServerPkgHead.toObject(message.head, options);
        if (message.frameList && message.frameList.length) {
            object.frameList = [];
            for (var j = 0; j < message.frameList.length; ++j)
                object.frameList[j] = $root.LockStepFrame.toObject(message.frameList[j], options);
        }
        return object;
    };

    /**
     * Converts this ServerPkg to JSON.
     * @function toJSON
     * @memberof ServerPkg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerPkg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerPkg;
})();

$root.ServerPkgHead = (function() {

    /**
     * Properties of a ServerPkgHead.
     * @exports IServerPkgHead
     * @interface IServerPkgHead
     * @property {number|null} [seq] ServerPkgHead seq
     * @property {number|null} [ack] ServerPkgHead ack
     * @property {string|null} [accessInfo] ServerPkgHead accessInfo
     */

    /**
     * Constructs a new ServerPkgHead.
     * @exports ServerPkgHead
     * @classdesc Represents a ServerPkgHead.
     * @implements IServerPkgHead
     * @constructor
     * @param {IServerPkgHead=} [properties] Properties to set
     */
    function ServerPkgHead(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerPkgHead seq.
     * @member {number} seq
     * @memberof ServerPkgHead
     * @instance
     */
    ServerPkgHead.prototype.seq = 0;

    /**
     * ServerPkgHead ack.
     * @member {number} ack
     * @memberof ServerPkgHead
     * @instance
     */
    ServerPkgHead.prototype.ack = 0;

    /**
     * ServerPkgHead accessInfo.
     * @member {string} accessInfo
     * @memberof ServerPkgHead
     * @instance
     */
    ServerPkgHead.prototype.accessInfo = "";

    /**
     * Creates a new ServerPkgHead instance using the specified properties.
     * @function create
     * @memberof ServerPkgHead
     * @static
     * @param {IServerPkgHead=} [properties] Properties to set
     * @returns {ServerPkgHead} ServerPkgHead instance
     */
    ServerPkgHead.create = function create(properties) {
        return new ServerPkgHead(properties);
    };

    /**
     * Encodes the specified ServerPkgHead message. Does not implicitly {@link ServerPkgHead.verify|verify} messages.
     * @function encode
     * @memberof ServerPkgHead
     * @static
     * @param {IServerPkgHead} message ServerPkgHead message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerPkgHead.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seq != null && message.hasOwnProperty("seq"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.seq);
        if (message.ack != null && message.hasOwnProperty("ack"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ack);
        if (message.accessInfo != null && message.hasOwnProperty("accessInfo"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.accessInfo);
        return writer;
    };

    /**
     * Encodes the specified ServerPkgHead message, length delimited. Does not implicitly {@link ServerPkgHead.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerPkgHead
     * @static
     * @param {IServerPkgHead} message ServerPkgHead message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerPkgHead.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerPkgHead message from the specified reader or buffer.
     * @function decode
     * @memberof ServerPkgHead
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerPkgHead} ServerPkgHead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerPkgHead.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerPkgHead();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.seq = reader.uint32();
                break;
            case 2:
                message.ack = reader.uint32();
                break;
            case 3:
                message.accessInfo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerPkgHead message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerPkgHead
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerPkgHead} ServerPkgHead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerPkgHead.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerPkgHead message.
     * @function verify
     * @memberof ServerPkgHead
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerPkgHead.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (!$util.isInteger(message.seq))
                return "seq: integer expected";
        if (message.ack != null && message.hasOwnProperty("ack"))
            if (!$util.isInteger(message.ack))
                return "ack: integer expected";
        if (message.accessInfo != null && message.hasOwnProperty("accessInfo"))
            if (!$util.isString(message.accessInfo))
                return "accessInfo: string expected";
        return null;
    };

    /**
     * Creates a ServerPkgHead message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerPkgHead
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerPkgHead} ServerPkgHead
     */
    ServerPkgHead.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerPkgHead)
            return object;
        var message = new $root.ServerPkgHead();
        if (object.seq != null)
            message.seq = object.seq >>> 0;
        if (object.ack != null)
            message.ack = object.ack >>> 0;
        if (object.accessInfo != null)
            message.accessInfo = String(object.accessInfo);
        return message;
    };

    /**
     * Creates a plain object from a ServerPkgHead message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerPkgHead
     * @static
     * @param {ServerPkgHead} message ServerPkgHead
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerPkgHead.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.seq = 0;
            object.ack = 0;
            object.accessInfo = "";
        }
        if (message.seq != null && message.hasOwnProperty("seq"))
            object.seq = message.seq;
        if (message.ack != null && message.hasOwnProperty("ack"))
            object.ack = message.ack;
        if (message.accessInfo != null && message.hasOwnProperty("accessInfo"))
            object.accessInfo = message.accessInfo;
        return object;
    };

    /**
     * Converts this ServerPkgHead to JSON.
     * @function toJSON
     * @memberof ServerPkgHead
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerPkgHead.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerPkgHead;
})();

$root.LockStepFrame = (function() {

    /**
     * Properties of a LockStepFrame.
     * @exports ILockStepFrame
     * @interface ILockStepFrame
     * @property {number|null} [frameId] LockStepFrame frameId
     * @property {Array.<Uint8Array>|null} [actionList] LockStepFrame actionList
     */

    /**
     * Constructs a new LockStepFrame.
     * @exports LockStepFrame
     * @classdesc Represents a LockStepFrame.
     * @implements ILockStepFrame
     * @constructor
     * @param {ILockStepFrame=} [properties] Properties to set
     */
    function LockStepFrame(properties) {
        this.actionList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LockStepFrame frameId.
     * @member {number} frameId
     * @memberof LockStepFrame
     * @instance
     */
    LockStepFrame.prototype.frameId = 0;

    /**
     * LockStepFrame actionList.
     * @member {Array.<Uint8Array>} actionList
     * @memberof LockStepFrame
     * @instance
     */
    LockStepFrame.prototype.actionList = $util.emptyArray;

    /**
     * Creates a new LockStepFrame instance using the specified properties.
     * @function create
     * @memberof LockStepFrame
     * @static
     * @param {ILockStepFrame=} [properties] Properties to set
     * @returns {LockStepFrame} LockStepFrame instance
     */
    LockStepFrame.create = function create(properties) {
        return new LockStepFrame(properties);
    };

    /**
     * Encodes the specified LockStepFrame message. Does not implicitly {@link LockStepFrame.verify|verify} messages.
     * @function encode
     * @memberof LockStepFrame
     * @static
     * @param {ILockStepFrame} message LockStepFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LockStepFrame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.frameId != null && message.hasOwnProperty("frameId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.frameId);
        if (message.actionList != null && message.actionList.length)
            for (var i = 0; i < message.actionList.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.actionList[i]);
        return writer;
    };

    /**
     * Encodes the specified LockStepFrame message, length delimited. Does not implicitly {@link LockStepFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LockStepFrame
     * @static
     * @param {ILockStepFrame} message LockStepFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LockStepFrame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LockStepFrame message from the specified reader or buffer.
     * @function decode
     * @memberof LockStepFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LockStepFrame} LockStepFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LockStepFrame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LockStepFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.frameId = reader.uint32();
                break;
            case 2:
                if (!(message.actionList && message.actionList.length))
                    message.actionList = [];
                message.actionList.push(reader.bytes());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LockStepFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LockStepFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LockStepFrame} LockStepFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LockStepFrame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LockStepFrame message.
     * @function verify
     * @memberof LockStepFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LockStepFrame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.frameId != null && message.hasOwnProperty("frameId"))
            if (!$util.isInteger(message.frameId))
                return "frameId: integer expected";
        if (message.actionList != null && message.hasOwnProperty("actionList")) {
            if (!Array.isArray(message.actionList))
                return "actionList: array expected";
            for (var i = 0; i < message.actionList.length; ++i)
                if (!(message.actionList[i] && typeof message.actionList[i].length === "number" || $util.isString(message.actionList[i])))
                    return "actionList: buffer[] expected";
        }
        return null;
    };

    /**
     * Creates a LockStepFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LockStepFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LockStepFrame} LockStepFrame
     */
    LockStepFrame.fromObject = function fromObject(object) {
        if (object instanceof $root.LockStepFrame)
            return object;
        var message = new $root.LockStepFrame();
        if (object.frameId != null)
            message.frameId = object.frameId >>> 0;
        if (object.actionList) {
            if (!Array.isArray(object.actionList))
                throw TypeError(".LockStepFrame.actionList: array expected");
            message.actionList = [];
            for (var i = 0; i < object.actionList.length; ++i)
                if (typeof object.actionList[i] === "string")
                    $util.base64.decode(object.actionList[i], message.actionList[i] = $util.newBuffer($util.base64.length(object.actionList[i])), 0);
                else if (object.actionList[i].length)
                    message.actionList[i] = object.actionList[i];
        }
        return message;
    };

    /**
     * Creates a plain object from a LockStepFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LockStepFrame
     * @static
     * @param {LockStepFrame} message LockStepFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LockStepFrame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.actionList = [];
        if (options.defaults)
            object.frameId = 0;
        if (message.frameId != null && message.hasOwnProperty("frameId"))
            object.frameId = message.frameId;
        if (message.actionList && message.actionList.length) {
            object.actionList = [];
            for (var j = 0; j < message.actionList.length; ++j)
                object.actionList[j] = options.bytes === String ? $util.base64.encode(message.actionList[j], 0, message.actionList[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.actionList[j]) : message.actionList[j];
        }
        return object;
    };

    /**
     * Converts this LockStepFrame to JSON.
     * @function toJSON
     * @memberof LockStepFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LockStepFrame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LockStepFrame;
})();

$root.RepairFrameReq = (function() {

    /**
     * Properties of a RepairFrameReq.
     * @exports IRepairFrameReq
     * @interface IRepairFrameReq
     * @property {number|null} [repairStartframeId] RepairFrameReq repairStartframeId
     * @property {number|null} [repairEndframeId] RepairFrameReq repairEndframeId
     */

    /**
     * Constructs a new RepairFrameReq.
     * @exports RepairFrameReq
     * @classdesc Represents a RepairFrameReq.
     * @implements IRepairFrameReq
     * @constructor
     * @param {IRepairFrameReq=} [properties] Properties to set
     */
    function RepairFrameReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RepairFrameReq repairStartframeId.
     * @member {number} repairStartframeId
     * @memberof RepairFrameReq
     * @instance
     */
    RepairFrameReq.prototype.repairStartframeId = 0;

    /**
     * RepairFrameReq repairEndframeId.
     * @member {number} repairEndframeId
     * @memberof RepairFrameReq
     * @instance
     */
    RepairFrameReq.prototype.repairEndframeId = 0;

    /**
     * Creates a new RepairFrameReq instance using the specified properties.
     * @function create
     * @memberof RepairFrameReq
     * @static
     * @param {IRepairFrameReq=} [properties] Properties to set
     * @returns {RepairFrameReq} RepairFrameReq instance
     */
    RepairFrameReq.create = function create(properties) {
        return new RepairFrameReq(properties);
    };

    /**
     * Encodes the specified RepairFrameReq message. Does not implicitly {@link RepairFrameReq.verify|verify} messages.
     * @function encode
     * @memberof RepairFrameReq
     * @static
     * @param {IRepairFrameReq} message RepairFrameReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RepairFrameReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.repairStartframeId != null && message.hasOwnProperty("repairStartframeId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.repairStartframeId);
        if (message.repairEndframeId != null && message.hasOwnProperty("repairEndframeId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.repairEndframeId);
        return writer;
    };

    /**
     * Encodes the specified RepairFrameReq message, length delimited. Does not implicitly {@link RepairFrameReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RepairFrameReq
     * @static
     * @param {IRepairFrameReq} message RepairFrameReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RepairFrameReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RepairFrameReq message from the specified reader or buffer.
     * @function decode
     * @memberof RepairFrameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RepairFrameReq} RepairFrameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RepairFrameReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RepairFrameReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.repairStartframeId = reader.uint32();
                break;
            case 2:
                message.repairEndframeId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RepairFrameReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RepairFrameReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RepairFrameReq} RepairFrameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RepairFrameReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RepairFrameReq message.
     * @function verify
     * @memberof RepairFrameReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RepairFrameReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.repairStartframeId != null && message.hasOwnProperty("repairStartframeId"))
            if (!$util.isInteger(message.repairStartframeId))
                return "repairStartframeId: integer expected";
        if (message.repairEndframeId != null && message.hasOwnProperty("repairEndframeId"))
            if (!$util.isInteger(message.repairEndframeId))
                return "repairEndframeId: integer expected";
        return null;
    };

    /**
     * Creates a RepairFrameReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RepairFrameReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RepairFrameReq} RepairFrameReq
     */
    RepairFrameReq.fromObject = function fromObject(object) {
        if (object instanceof $root.RepairFrameReq)
            return object;
        var message = new $root.RepairFrameReq();
        if (object.repairStartframeId != null)
            message.repairStartframeId = object.repairStartframeId >>> 0;
        if (object.repairEndframeId != null)
            message.repairEndframeId = object.repairEndframeId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a RepairFrameReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RepairFrameReq
     * @static
     * @param {RepairFrameReq} message RepairFrameReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RepairFrameReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.repairStartframeId = 0;
            object.repairEndframeId = 0;
        }
        if (message.repairStartframeId != null && message.hasOwnProperty("repairStartframeId"))
            object.repairStartframeId = message.repairStartframeId;
        if (message.repairEndframeId != null && message.hasOwnProperty("repairEndframeId"))
            object.repairEndframeId = message.repairEndframeId;
        return object;
    };

    /**
     * Converts this RepairFrameReq to JSON.
     * @function toJSON
     * @memberof RepairFrameReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RepairFrameReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RepairFrameReq;
})();

$root.ReconnectReq = (function() {

    /**
     * Properties of a ReconnectReq.
     * @exports IReconnectReq
     * @interface IReconnectReq
     * @property {number|null} [startFrameId] ReconnectReq startFrameId
     */

    /**
     * Constructs a new ReconnectReq.
     * @exports ReconnectReq
     * @classdesc Represents a ReconnectReq.
     * @implements IReconnectReq
     * @constructor
     * @param {IReconnectReq=} [properties] Properties to set
     */
    function ReconnectReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReconnectReq startFrameId.
     * @member {number} startFrameId
     * @memberof ReconnectReq
     * @instance
     */
    ReconnectReq.prototype.startFrameId = 0;

    /**
     * Creates a new ReconnectReq instance using the specified properties.
     * @function create
     * @memberof ReconnectReq
     * @static
     * @param {IReconnectReq=} [properties] Properties to set
     * @returns {ReconnectReq} ReconnectReq instance
     */
    ReconnectReq.create = function create(properties) {
        return new ReconnectReq(properties);
    };

    /**
     * Encodes the specified ReconnectReq message. Does not implicitly {@link ReconnectReq.verify|verify} messages.
     * @function encode
     * @memberof ReconnectReq
     * @static
     * @param {IReconnectReq} message ReconnectReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReconnectReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.startFrameId != null && message.hasOwnProperty("startFrameId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.startFrameId);
        return writer;
    };

    /**
     * Encodes the specified ReconnectReq message, length delimited. Does not implicitly {@link ReconnectReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReconnectReq
     * @static
     * @param {IReconnectReq} message ReconnectReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReconnectReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReconnectReq message from the specified reader or buffer.
     * @function decode
     * @memberof ReconnectReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReconnectReq} ReconnectReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReconnectReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReconnectReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.startFrameId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReconnectReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReconnectReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReconnectReq} ReconnectReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReconnectReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReconnectReq message.
     * @function verify
     * @memberof ReconnectReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReconnectReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.startFrameId != null && message.hasOwnProperty("startFrameId"))
            if (!$util.isInteger(message.startFrameId))
                return "startFrameId: integer expected";
        return null;
    };

    /**
     * Creates a ReconnectReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReconnectReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReconnectReq} ReconnectReq
     */
    ReconnectReq.fromObject = function fromObject(object) {
        if (object instanceof $root.ReconnectReq)
            return object;
        var message = new $root.ReconnectReq();
        if (object.startFrameId != null)
            message.startFrameId = object.startFrameId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ReconnectReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReconnectReq
     * @static
     * @param {ReconnectReq} message ReconnectReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReconnectReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.startFrameId = 0;
        if (message.startFrameId != null && message.hasOwnProperty("startFrameId"))
            object.startFrameId = message.startFrameId;
        return object;
    };

    /**
     * Converts this ReconnectReq to JSON.
     * @function toJSON
     * @memberof ReconnectReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReconnectReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReconnectReq;
})();

$root.ReconnectResp = (function() {

    /**
     * Properties of a ReconnectResp.
     * @exports IReconnectResp
     * @interface IReconnectResp
     * @property {number|null} [maxFrameId] ReconnectResp maxFrameId
     * @property {number|null} [pkgCount] ReconnectResp pkgCount
     */

    /**
     * Constructs a new ReconnectResp.
     * @exports ReconnectResp
     * @classdesc Represents a ReconnectResp.
     * @implements IReconnectResp
     * @constructor
     * @param {IReconnectResp=} [properties] Properties to set
     */
    function ReconnectResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReconnectResp maxFrameId.
     * @member {number} maxFrameId
     * @memberof ReconnectResp
     * @instance
     */
    ReconnectResp.prototype.maxFrameId = 0;

    /**
     * ReconnectResp pkgCount.
     * @member {number} pkgCount
     * @memberof ReconnectResp
     * @instance
     */
    ReconnectResp.prototype.pkgCount = 0;

    /**
     * Creates a new ReconnectResp instance using the specified properties.
     * @function create
     * @memberof ReconnectResp
     * @static
     * @param {IReconnectResp=} [properties] Properties to set
     * @returns {ReconnectResp} ReconnectResp instance
     */
    ReconnectResp.create = function create(properties) {
        return new ReconnectResp(properties);
    };

    /**
     * Encodes the specified ReconnectResp message. Does not implicitly {@link ReconnectResp.verify|verify} messages.
     * @function encode
     * @memberof ReconnectResp
     * @static
     * @param {IReconnectResp} message ReconnectResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReconnectResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.maxFrameId != null && message.hasOwnProperty("maxFrameId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.maxFrameId);
        if (message.pkgCount != null && message.hasOwnProperty("pkgCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pkgCount);
        return writer;
    };

    /**
     * Encodes the specified ReconnectResp message, length delimited. Does not implicitly {@link ReconnectResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReconnectResp
     * @static
     * @param {IReconnectResp} message ReconnectResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReconnectResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReconnectResp message from the specified reader or buffer.
     * @function decode
     * @memberof ReconnectResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReconnectResp} ReconnectResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReconnectResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReconnectResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.maxFrameId = reader.uint32();
                break;
            case 2:
                message.pkgCount = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReconnectResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReconnectResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReconnectResp} ReconnectResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReconnectResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReconnectResp message.
     * @function verify
     * @memberof ReconnectResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReconnectResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.maxFrameId != null && message.hasOwnProperty("maxFrameId"))
            if (!$util.isInteger(message.maxFrameId))
                return "maxFrameId: integer expected";
        if (message.pkgCount != null && message.hasOwnProperty("pkgCount"))
            if (!$util.isInteger(message.pkgCount))
                return "pkgCount: integer expected";
        return null;
    };

    /**
     * Creates a ReconnectResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReconnectResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReconnectResp} ReconnectResp
     */
    ReconnectResp.fromObject = function fromObject(object) {
        if (object instanceof $root.ReconnectResp)
            return object;
        var message = new $root.ReconnectResp();
        if (object.maxFrameId != null)
            message.maxFrameId = object.maxFrameId >>> 0;
        if (object.pkgCount != null)
            message.pkgCount = object.pkgCount >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ReconnectResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReconnectResp
     * @static
     * @param {ReconnectResp} message ReconnectResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReconnectResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.maxFrameId = 0;
            object.pkgCount = 0;
        }
        if (message.maxFrameId != null && message.hasOwnProperty("maxFrameId"))
            object.maxFrameId = message.maxFrameId;
        if (message.pkgCount != null && message.hasOwnProperty("pkgCount"))
            object.pkgCount = message.pkgCount;
        return object;
    };

    /**
     * Converts this ReconnectResp to JSON.
     * @function toJSON
     * @memberof ReconnectResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReconnectResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReconnectResp;
})();

$root.GetSvrMetaResp = (function() {

    /**
     * Properties of a GetSvrMetaResp.
     * @exports IGetSvrMetaResp
     * @interface IGetSvrMetaResp
     * @property {number|null} [maxFrameId] GetSvrMetaResp maxFrameId
     */

    /**
     * Constructs a new GetSvrMetaResp.
     * @exports GetSvrMetaResp
     * @classdesc Represents a GetSvrMetaResp.
     * @implements IGetSvrMetaResp
     * @constructor
     * @param {IGetSvrMetaResp=} [properties] Properties to set
     */
    function GetSvrMetaResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetSvrMetaResp maxFrameId.
     * @member {number} maxFrameId
     * @memberof GetSvrMetaResp
     * @instance
     */
    GetSvrMetaResp.prototype.maxFrameId = 0;

    /**
     * Creates a new GetSvrMetaResp instance using the specified properties.
     * @function create
     * @memberof GetSvrMetaResp
     * @static
     * @param {IGetSvrMetaResp=} [properties] Properties to set
     * @returns {GetSvrMetaResp} GetSvrMetaResp instance
     */
    GetSvrMetaResp.create = function create(properties) {
        return new GetSvrMetaResp(properties);
    };

    /**
     * Encodes the specified GetSvrMetaResp message. Does not implicitly {@link GetSvrMetaResp.verify|verify} messages.
     * @function encode
     * @memberof GetSvrMetaResp
     * @static
     * @param {IGetSvrMetaResp} message GetSvrMetaResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetSvrMetaResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.maxFrameId != null && message.hasOwnProperty("maxFrameId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.maxFrameId);
        return writer;
    };

    /**
     * Encodes the specified GetSvrMetaResp message, length delimited. Does not implicitly {@link GetSvrMetaResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetSvrMetaResp
     * @static
     * @param {IGetSvrMetaResp} message GetSvrMetaResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetSvrMetaResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetSvrMetaResp message from the specified reader or buffer.
     * @function decode
     * @memberof GetSvrMetaResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetSvrMetaResp} GetSvrMetaResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetSvrMetaResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetSvrMetaResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.maxFrameId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetSvrMetaResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetSvrMetaResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetSvrMetaResp} GetSvrMetaResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetSvrMetaResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetSvrMetaResp message.
     * @function verify
     * @memberof GetSvrMetaResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetSvrMetaResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.maxFrameId != null && message.hasOwnProperty("maxFrameId"))
            if (!$util.isInteger(message.maxFrameId))
                return "maxFrameId: integer expected";
        return null;
    };

    /**
     * Creates a GetSvrMetaResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetSvrMetaResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetSvrMetaResp} GetSvrMetaResp
     */
    GetSvrMetaResp.fromObject = function fromObject(object) {
        if (object instanceof $root.GetSvrMetaResp)
            return object;
        var message = new $root.GetSvrMetaResp();
        if (object.maxFrameId != null)
            message.maxFrameId = object.maxFrameId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a GetSvrMetaResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetSvrMetaResp
     * @static
     * @param {GetSvrMetaResp} message GetSvrMetaResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetSvrMetaResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.maxFrameId = 0;
        if (message.maxFrameId != null && message.hasOwnProperty("maxFrameId"))
            object.maxFrameId = message.maxFrameId;
        return object;
    };

    /**
     * Converts this GetSvrMetaResp to JSON.
     * @function toJSON
     * @memberof GetSvrMetaResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetSvrMetaResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetSvrMetaResp;
})();

module.exports = $root;

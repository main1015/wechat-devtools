/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LanDebugHeader = (function() {

    /**
     * Properties of a LanDebugHeader.
     * @exports ILanDebugHeader
     * @interface ILanDebugHeader
     * @property {number} version LanDebugHeader version
     * @property {string} method LanDebugHeader method
     * @property {number} id LanDebugHeader id
     * @property {boolean} isString LanDebugHeader isString
     * @property {string} clientId LanDebugHeader clientId
     * @property {boolean} [notEnd] LanDebugHeader notEnd
     * @property {string} [options] LanDebugHeader options
     */

    /**
     * Constructs a new LanDebugHeader.
     * @exports LanDebugHeader
     * @classdesc Represents a LanDebugHeader.
     * @constructor
     * @param {ILanDebugHeader=} [properties] Properties to set
     */
    function LanDebugHeader(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LanDebugHeader version.
     * @member {number}version
     * @memberof LanDebugHeader
     * @instance
     */
    LanDebugHeader.prototype.version = 0;

    /**
     * LanDebugHeader method.
     * @member {string}method
     * @memberof LanDebugHeader
     * @instance
     */
    LanDebugHeader.prototype.method = "";

    /**
     * LanDebugHeader id.
     * @member {number}id
     * @memberof LanDebugHeader
     * @instance
     */
    LanDebugHeader.prototype.id = 0;

    /**
     * LanDebugHeader isString.
     * @member {boolean}isString
     * @memberof LanDebugHeader
     * @instance
     */
    LanDebugHeader.prototype.isString = false;

    /**
     * LanDebugHeader clientId.
     * @member {string}clientId
     * @memberof LanDebugHeader
     * @instance
     */
    LanDebugHeader.prototype.clientId = "";

    /**
     * LanDebugHeader notEnd.
     * @member {boolean}notEnd
     * @memberof LanDebugHeader
     * @instance
     */
    LanDebugHeader.prototype.notEnd = false;

    /**
     * LanDebugHeader options.
     * @member {string}options
     * @memberof LanDebugHeader
     * @instance
     */
    LanDebugHeader.prototype.options = "";

    /**
     * Creates a new LanDebugHeader instance using the specified properties.
     * @function create
     * @memberof LanDebugHeader
     * @static
     * @param {ILanDebugHeader=} [properties] Properties to set
     * @returns {LanDebugHeader} LanDebugHeader instance
     */
    LanDebugHeader.create = function create(properties) {
        return new LanDebugHeader(properties);
    };

    /**
     * Encodes the specified LanDebugHeader message. Does not implicitly {@link LanDebugHeader.verify|verify} messages.
     * @function encode
     * @memberof LanDebugHeader
     * @static
     * @param {ILanDebugHeader} message LanDebugHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LanDebugHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 0, wireType 0 =*/0).int32(message.version);
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.method);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isString);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientId);
        if (message.notEnd != null && message.hasOwnProperty("notEnd"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.notEnd);
        if (message.options != null && message.hasOwnProperty("options"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.options);
        return writer;
    };

    /**
     * Encodes the specified LanDebugHeader message, length delimited. Does not implicitly {@link LanDebugHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LanDebugHeader
     * @static
     * @param {ILanDebugHeader} message LanDebugHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LanDebugHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LanDebugHeader message from the specified reader or buffer.
     * @function decode
     * @memberof LanDebugHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LanDebugHeader} LanDebugHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LanDebugHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LanDebugHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.version = reader.int32();
                break;
            case 1:
                message.method = reader.string();
                break;
            case 2:
                message.id = reader.int32();
                break;
            case 3:
                message.isString = reader.bool();
                break;
            case 4:
                message.clientId = reader.string();
                break;
            case 5:
                message.notEnd = reader.bool();
                break;
            case 6:
                message.options = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("version"))
            throw $util.ProtocolError("missing required 'version'", { instance: message });
        if (!message.hasOwnProperty("method"))
            throw $util.ProtocolError("missing required 'method'", { instance: message });
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("isString"))
            throw $util.ProtocolError("missing required 'isString'", { instance: message });
        if (!message.hasOwnProperty("clientId"))
            throw $util.ProtocolError("missing required 'clientId'", { instance: message });
        return message;
    };

    /**
     * Decodes a LanDebugHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LanDebugHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LanDebugHeader} LanDebugHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LanDebugHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LanDebugHeader message.
     * @function verify
     * @memberof LanDebugHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LanDebugHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.version))
            return "version: integer expected";
        if (!$util.isString(message.method))
            return "method: string expected";
        if (!$util.isInteger(message.id))
            return "id: integer expected";
        if (typeof message.isString !== "boolean")
            return "isString: boolean expected";
        if (!$util.isString(message.clientId))
            return "clientId: string expected";
        if (message.notEnd != null && message.hasOwnProperty("notEnd"))
            if (typeof message.notEnd !== "boolean")
                return "notEnd: boolean expected";
        if (message.options != null && message.hasOwnProperty("options"))
            if (!$util.isString(message.options))
                return "options: string expected";
        return null;
    };

    /**
     * Creates a LanDebugHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LanDebugHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LanDebugHeader} LanDebugHeader
     */
    LanDebugHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.LanDebugHeader)
            return object;
        var message = new $root.LanDebugHeader();
        if (object.version != null)
            message.version = object.version | 0;
        if (object.method != null)
            message.method = String(object.method);
        if (object.id != null)
            message.id = object.id | 0;
        if (object.isString != null)
            message.isString = Boolean(object.isString);
        if (object.clientId != null)
            message.clientId = String(object.clientId);
        if (object.notEnd != null)
            message.notEnd = Boolean(object.notEnd);
        if (object.options != null)
            message.options = String(object.options);
        return message;
    };

    /**
     * Creates a plain object from a LanDebugHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LanDebugHeader
     * @static
     * @param {LanDebugHeader} message LanDebugHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LanDebugHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.version = 0;
            object.method = "";
            object.id = 0;
            object.isString = false;
            object.clientId = "";
            object.notEnd = false;
            object.options = "";
        }
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.method != null && message.hasOwnProperty("method"))
            object.method = message.method;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.isString != null && message.hasOwnProperty("isString"))
            object.isString = message.isString;
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            object.clientId = message.clientId;
        if (message.notEnd != null && message.hasOwnProperty("notEnd"))
            object.notEnd = message.notEnd;
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = message.options;
        return object;
    };

    /**
     * Converts this LanDebugHeader to JSON.
     * @function toJSON
     * @memberof LanDebugHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LanDebugHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LanDebugHeader;
})();

module.exports = $root;

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.WechatIDE = (function() {

    /**
     * Namespace WechatIDE.
     * @exports WechatIDE
     * @namespace
     */
    var WechatIDE = {};

    WechatIDE.SourceMap = (function() {

        /**
         * Properties of a SourceMap.
         * @memberof WechatIDE
         * @interface ISourceMap
         * @property {string|null} [file] SourceMap file
         * @property {string|null} [mappings] SourceMap mappings
         * @property {number|null} [version] SourceMap version
         * @property {Array.<string>|null} [names] SourceMap names
         * @property {Array.<string>|null} [sources] SourceMap sources
         * @property {Array.<string>|null} [sourcesContent] SourceMap sourcesContent
         */

        /**
         * Constructs a new SourceMap.
         * @memberof WechatIDE
         * @classdesc Represents a SourceMap.
         * @implements ISourceMap
         * @constructor
         * @param {WechatIDE.ISourceMap=} [p] Properties to set
         */
        function SourceMap(p) {
            this.names = [];
            this.sources = [];
            this.sourcesContent = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SourceMap file.
         * @member {string} file
         * @memberof WechatIDE.SourceMap
         * @instance
         */
        SourceMap.prototype.file = "";

        /**
         * SourceMap mappings.
         * @member {string} mappings
         * @memberof WechatIDE.SourceMap
         * @instance
         */
        SourceMap.prototype.mappings = "";

        /**
         * SourceMap version.
         * @member {number} version
         * @memberof WechatIDE.SourceMap
         * @instance
         */
        SourceMap.prototype.version = 0;

        /**
         * SourceMap names.
         * @member {Array.<string>} names
         * @memberof WechatIDE.SourceMap
         * @instance
         */
        SourceMap.prototype.names = $util.emptyArray;

        /**
         * SourceMap sources.
         * @member {Array.<string>} sources
         * @memberof WechatIDE.SourceMap
         * @instance
         */
        SourceMap.prototype.sources = $util.emptyArray;

        /**
         * SourceMap sourcesContent.
         * @member {Array.<string>} sourcesContent
         * @memberof WechatIDE.SourceMap
         * @instance
         */
        SourceMap.prototype.sourcesContent = $util.emptyArray;

        /**
         * Creates a new SourceMap instance using the specified properties.
         * @function create
         * @memberof WechatIDE.SourceMap
         * @static
         * @param {WechatIDE.ISourceMap=} [properties] Properties to set
         * @returns {WechatIDE.SourceMap} SourceMap instance
         */
        SourceMap.create = function create(properties) {
            return new SourceMap(properties);
        };

        /**
         * Encodes the specified SourceMap message. Does not implicitly {@link WechatIDE.SourceMap.verify|verify} messages.
         * @function encode
         * @memberof WechatIDE.SourceMap
         * @static
         * @param {WechatIDE.ISourceMap} m SourceMap message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceMap.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.file != null && Object.hasOwnProperty.call(m, "file"))
                w.uint32(10).string(m.file);
            if (m.mappings != null && Object.hasOwnProperty.call(m, "mappings"))
                w.uint32(18).string(m.mappings);
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(24).uint32(m.version);
            if (m.names != null && m.names.length) {
                for (var i = 0; i < m.names.length; ++i)
                    w.uint32(34).string(m.names[i]);
            }
            if (m.sources != null && m.sources.length) {
                for (var i = 0; i < m.sources.length; ++i)
                    w.uint32(42).string(m.sources[i]);
            }
            if (m.sourcesContent != null && m.sourcesContent.length) {
                for (var i = 0; i < m.sourcesContent.length; ++i)
                    w.uint32(50).string(m.sourcesContent[i]);
            }
            return w;
        };

        /**
         * Encodes the specified SourceMap message, length delimited. Does not implicitly {@link WechatIDE.SourceMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WechatIDE.SourceMap
         * @static
         * @param {WechatIDE.ISourceMap} message SourceMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SourceMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SourceMap message from the specified reader or buffer.
         * @function decode
         * @memberof WechatIDE.SourceMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {WechatIDE.SourceMap} SourceMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceMap.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WechatIDE.SourceMap();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.file = r.string();
                    break;
                case 2:
                    m.mappings = r.string();
                    break;
                case 3:
                    m.version = r.uint32();
                    break;
                case 4:
                    if (!(m.names && m.names.length))
                        m.names = [];
                    m.names.push(r.string());
                    break;
                case 5:
                    if (!(m.sources && m.sources.length))
                        m.sources = [];
                    m.sources.push(r.string());
                    break;
                case 6:
                    if (!(m.sourcesContent && m.sourcesContent.length))
                        m.sourcesContent = [];
                    m.sourcesContent.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * Decodes a SourceMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WechatIDE.SourceMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WechatIDE.SourceMap} SourceMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SourceMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SourceMap message.
         * @function verify
         * @memberof WechatIDE.SourceMap
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SourceMap.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (m.file != null && m.hasOwnProperty("file")) {
                if (!$util.isString(m.file))
                    return "file: string expected";
            }
            if (m.mappings != null && m.hasOwnProperty("mappings")) {
                if (!$util.isString(m.mappings))
                    return "mappings: string expected";
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                if (!$util.isInteger(m.version))
                    return "version: integer expected";
            }
            if (m.names != null && m.hasOwnProperty("names")) {
                if (!Array.isArray(m.names))
                    return "names: array expected";
                for (var i = 0; i < m.names.length; ++i) {
                    if (!$util.isString(m.names[i]))
                        return "names: string[] expected";
                }
            }
            if (m.sources != null && m.hasOwnProperty("sources")) {
                if (!Array.isArray(m.sources))
                    return "sources: array expected";
                for (var i = 0; i < m.sources.length; ++i) {
                    if (!$util.isString(m.sources[i]))
                        return "sources: string[] expected";
                }
            }
            if (m.sourcesContent != null && m.hasOwnProperty("sourcesContent")) {
                if (!Array.isArray(m.sourcesContent))
                    return "sourcesContent: array expected";
                for (var i = 0; i < m.sourcesContent.length; ++i) {
                    if (!$util.isString(m.sourcesContent[i]))
                        return "sourcesContent: string[] expected";
                }
            }
            return null;
        };

        /**
         * Creates a SourceMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WechatIDE.SourceMap
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {WechatIDE.SourceMap} SourceMap
         */
        SourceMap.fromObject = function fromObject(d) {
            if (d instanceof $root.WechatIDE.SourceMap)
                return d;
            var m = new $root.WechatIDE.SourceMap();
            if (d.file != null) {
                m.file = String(d.file);
            }
            if (d.mappings != null) {
                m.mappings = String(d.mappings);
            }
            if (d.version != null) {
                m.version = d.version >>> 0;
            }
            if (d.names) {
                if (!Array.isArray(d.names))
                    throw TypeError(".WechatIDE.SourceMap.names: array expected");
                m.names = [];
                for (var i = 0; i < d.names.length; ++i) {
                    m.names[i] = String(d.names[i]);
                }
            }
            if (d.sources) {
                if (!Array.isArray(d.sources))
                    throw TypeError(".WechatIDE.SourceMap.sources: array expected");
                m.sources = [];
                for (var i = 0; i < d.sources.length; ++i) {
                    m.sources[i] = String(d.sources[i]);
                }
            }
            if (d.sourcesContent) {
                if (!Array.isArray(d.sourcesContent))
                    throw TypeError(".WechatIDE.SourceMap.sourcesContent: array expected");
                m.sourcesContent = [];
                for (var i = 0; i < d.sourcesContent.length; ++i) {
                    m.sourcesContent[i] = String(d.sourcesContent[i]);
                }
            }
            return m;
        };

        /**
         * Creates a plain object from a SourceMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WechatIDE.SourceMap
         * @static
         * @param {WechatIDE.SourceMap} m SourceMap
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SourceMap.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.names = [];
                d.sources = [];
                d.sourcesContent = [];
            }
            if (o.defaults) {
                d.file = "";
                d.mappings = "";
                d.version = 0;
            }
            if (m.file != null && m.hasOwnProperty("file")) {
                d.file = m.file;
            }
            if (m.mappings != null && m.hasOwnProperty("mappings")) {
                d.mappings = m.mappings;
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = m.version;
            }
            if (m.names && m.names.length) {
                d.names = [];
                for (var j = 0; j < m.names.length; ++j) {
                    d.names[j] = m.names[j];
                }
            }
            if (m.sources && m.sources.length) {
                d.sources = [];
                for (var j = 0; j < m.sources.length; ++j) {
                    d.sources[j] = m.sources[j];
                }
            }
            if (m.sourcesContent && m.sourcesContent.length) {
                d.sourcesContent = [];
                for (var j = 0; j < m.sourcesContent.length; ++j) {
                    d.sourcesContent[j] = m.sourcesContent[j];
                }
            }
            return d;
        };

        /**
         * Converts this SourceMap to JSON.
         * @function toJSON
         * @memberof WechatIDE.SourceMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SourceMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SourceMap;
    })();

    WechatIDE.JSCompileResult = (function() {

        /**
         * Properties of a JSCompileResult.
         * @memberof WechatIDE
         * @interface IJSCompileResult
         * @property {string} code JSCompileResult code
         * @property {boolean|null} [customTranslated] JSCompileResult customTranslated
         * @property {boolean|null} [isLargeFile] JSCompileResult isLargeFile
         * @property {boolean|null} [isBabelIgnore] JSCompileResult isBabelIgnore
         * @property {Array.<string>|null} [helpers] JSCompileResult helpers
         * @property {string|null} [mapString] JSCompileResult mapString
         * @property {WechatIDE.ISourceMap|null} [map] JSCompileResult map
         */

        /**
         * Constructs a new JSCompileResult.
         * @memberof WechatIDE
         * @classdesc Represents a JSCompileResult.
         * @implements IJSCompileResult
         * @constructor
         * @param {WechatIDE.IJSCompileResult=} [p] Properties to set
         */
        function JSCompileResult(p) {
            this.helpers = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * JSCompileResult code.
         * @member {string} code
         * @memberof WechatIDE.JSCompileResult
         * @instance
         */
        JSCompileResult.prototype.code = "";

        /**
         * JSCompileResult customTranslated.
         * @member {boolean} customTranslated
         * @memberof WechatIDE.JSCompileResult
         * @instance
         */
        JSCompileResult.prototype.customTranslated = false;

        /**
         * JSCompileResult isLargeFile.
         * @member {boolean} isLargeFile
         * @memberof WechatIDE.JSCompileResult
         * @instance
         */
        JSCompileResult.prototype.isLargeFile = false;

        /**
         * JSCompileResult isBabelIgnore.
         * @member {boolean} isBabelIgnore
         * @memberof WechatIDE.JSCompileResult
         * @instance
         */
        JSCompileResult.prototype.isBabelIgnore = false;

        /**
         * JSCompileResult helpers.
         * @member {Array.<string>} helpers
         * @memberof WechatIDE.JSCompileResult
         * @instance
         */
        JSCompileResult.prototype.helpers = $util.emptyArray;

        /**
         * JSCompileResult mapString.
         * @member {string} mapString
         * @memberof WechatIDE.JSCompileResult
         * @instance
         */
        JSCompileResult.prototype.mapString = "";

        /**
         * JSCompileResult map.
         * @member {WechatIDE.ISourceMap|null|undefined} map
         * @memberof WechatIDE.JSCompileResult
         * @instance
         */
        JSCompileResult.prototype.map = null;

        /**
         * Creates a new JSCompileResult instance using the specified properties.
         * @function create
         * @memberof WechatIDE.JSCompileResult
         * @static
         * @param {WechatIDE.IJSCompileResult=} [properties] Properties to set
         * @returns {WechatIDE.JSCompileResult} JSCompileResult instance
         */
        JSCompileResult.create = function create(properties) {
            return new JSCompileResult(properties);
        };

        /**
         * Encodes the specified JSCompileResult message. Does not implicitly {@link WechatIDE.JSCompileResult.verify|verify} messages.
         * @function encode
         * @memberof WechatIDE.JSCompileResult
         * @static
         * @param {WechatIDE.IJSCompileResult} m JSCompileResult message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JSCompileResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            w.uint32(10).string(m.code);
            if (m.customTranslated != null && Object.hasOwnProperty.call(m, "customTranslated"))
                w.uint32(16).bool(m.customTranslated);
            if (m.isLargeFile != null && Object.hasOwnProperty.call(m, "isLargeFile"))
                w.uint32(24).bool(m.isLargeFile);
            if (m.isBabelIgnore != null && Object.hasOwnProperty.call(m, "isBabelIgnore"))
                w.uint32(32).bool(m.isBabelIgnore);
            if (m.helpers != null && m.helpers.length) {
                for (var i = 0; i < m.helpers.length; ++i)
                    w.uint32(42).string(m.helpers[i]);
            }
            if (m.mapString != null && Object.hasOwnProperty.call(m, "mapString"))
                w.uint32(50).string(m.mapString);
            if (m.map != null && Object.hasOwnProperty.call(m, "map"))
                $root.WechatIDE.SourceMap.encode(m.map, w.uint32(58).fork()).ldelim();
            return w;
        };

        /**
         * Encodes the specified JSCompileResult message, length delimited. Does not implicitly {@link WechatIDE.JSCompileResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof WechatIDE.JSCompileResult
         * @static
         * @param {WechatIDE.IJSCompileResult} message JSCompileResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JSCompileResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JSCompileResult message from the specified reader or buffer.
         * @function decode
         * @memberof WechatIDE.JSCompileResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {WechatIDE.JSCompileResult} JSCompileResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JSCompileResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WechatIDE.JSCompileResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.code = r.string();
                    break;
                case 2:
                    m.customTranslated = r.bool();
                    break;
                case 3:
                    m.isLargeFile = r.bool();
                    break;
                case 4:
                    m.isBabelIgnore = r.bool();
                    break;
                case 5:
                    if (!(m.helpers && m.helpers.length))
                        m.helpers = [];
                    m.helpers.push(r.string());
                    break;
                case 6:
                    m.mapString = r.string();
                    break;
                case 7:
                    m.map = $root.WechatIDE.SourceMap.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            if (!m.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: m });
            return m;
        };

        /**
         * Decodes a JSCompileResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof WechatIDE.JSCompileResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {WechatIDE.JSCompileResult} JSCompileResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JSCompileResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JSCompileResult message.
         * @function verify
         * @memberof WechatIDE.JSCompileResult
         * @static
         * @param {Object.<string,*>} m Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JSCompileResult.verify = function verify(m) {
            if (typeof m !== "object" || m === null)
                return "object expected";
            if (!$util.isString(m.code))
                return "code: string expected";
            if (m.customTranslated != null && m.hasOwnProperty("customTranslated")) {
                if (typeof m.customTranslated !== "boolean")
                    return "customTranslated: boolean expected";
            }
            if (m.isLargeFile != null && m.hasOwnProperty("isLargeFile")) {
                if (typeof m.isLargeFile !== "boolean")
                    return "isLargeFile: boolean expected";
            }
            if (m.isBabelIgnore != null && m.hasOwnProperty("isBabelIgnore")) {
                if (typeof m.isBabelIgnore !== "boolean")
                    return "isBabelIgnore: boolean expected";
            }
            if (m.helpers != null && m.hasOwnProperty("helpers")) {
                if (!Array.isArray(m.helpers))
                    return "helpers: array expected";
                for (var i = 0; i < m.helpers.length; ++i) {
                    if (!$util.isString(m.helpers[i]))
                        return "helpers: string[] expected";
                }
            }
            if (m.mapString != null && m.hasOwnProperty("mapString")) {
                if (!$util.isString(m.mapString))
                    return "mapString: string expected";
            }
            if (m.map != null && m.hasOwnProperty("map")) {
                {
                    var e = $root.WechatIDE.SourceMap.verify(m.map);
                    if (e)
                        return "map." + e;
                }
            }
            return null;
        };

        /**
         * Creates a JSCompileResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof WechatIDE.JSCompileResult
         * @static
         * @param {Object.<string,*>} d Plain object
         * @returns {WechatIDE.JSCompileResult} JSCompileResult
         */
        JSCompileResult.fromObject = function fromObject(d) {
            if (d instanceof $root.WechatIDE.JSCompileResult)
                return d;
            var m = new $root.WechatIDE.JSCompileResult();
            if (d.code != null) {
                m.code = String(d.code);
            }
            if (d.customTranslated != null) {
                m.customTranslated = Boolean(d.customTranslated);
            }
            if (d.isLargeFile != null) {
                m.isLargeFile = Boolean(d.isLargeFile);
            }
            if (d.isBabelIgnore != null) {
                m.isBabelIgnore = Boolean(d.isBabelIgnore);
            }
            if (d.helpers) {
                if (!Array.isArray(d.helpers))
                    throw TypeError(".WechatIDE.JSCompileResult.helpers: array expected");
                m.helpers = [];
                for (var i = 0; i < d.helpers.length; ++i) {
                    m.helpers[i] = String(d.helpers[i]);
                }
            }
            if (d.mapString != null) {
                m.mapString = String(d.mapString);
            }
            if (d.map != null) {
                if (typeof d.map !== "object")
                    throw TypeError(".WechatIDE.JSCompileResult.map: object expected");
                m.map = $root.WechatIDE.SourceMap.fromObject(d.map);
            }
            return m;
        };

        /**
         * Creates a plain object from a JSCompileResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof WechatIDE.JSCompileResult
         * @static
         * @param {WechatIDE.JSCompileResult} m JSCompileResult
         * @param {$protobuf.IConversionOptions} [o] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JSCompileResult.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.helpers = [];
            }
            if (o.defaults) {
                d.code = "";
                d.customTranslated = false;
                d.isLargeFile = false;
                d.isBabelIgnore = false;
                d.mapString = "";
                d.map = null;
            }
            if (m.code != null && m.hasOwnProperty("code")) {
                d.code = m.code;
            }
            if (m.customTranslated != null && m.hasOwnProperty("customTranslated")) {
                d.customTranslated = m.customTranslated;
            }
            if (m.isLargeFile != null && m.hasOwnProperty("isLargeFile")) {
                d.isLargeFile = m.isLargeFile;
            }
            if (m.isBabelIgnore != null && m.hasOwnProperty("isBabelIgnore")) {
                d.isBabelIgnore = m.isBabelIgnore;
            }
            if (m.helpers && m.helpers.length) {
                d.helpers = [];
                for (var j = 0; j < m.helpers.length; ++j) {
                    d.helpers[j] = m.helpers[j];
                }
            }
            if (m.mapString != null && m.hasOwnProperty("mapString")) {
                d.mapString = m.mapString;
            }
            if (m.map != null && m.hasOwnProperty("map")) {
                d.map = $root.WechatIDE.SourceMap.toObject(m.map, o);
            }
            return d;
        };

        /**
         * Converts this JSCompileResult to JSON.
         * @function toJSON
         * @memberof WechatIDE.JSCompileResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JSCompileResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JSCompileResult;
    })();

    return WechatIDE;
})();

module.exports = $root;

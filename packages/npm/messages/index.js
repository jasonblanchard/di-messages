/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.messages = (function() {

    /**
     * Namespace messages.
     * @exports messages
     * @namespace
     */
    var messages = {};

    messages.notebook = (function() {

        /**
         * Namespace notebook.
         * @memberof messages
         * @namespace
         */
        var notebook = {};

        notebook.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof messages.notebook
             * @interface IError
             * @property {messages.notebook.Error.Code|null} [code] Error code
             * @property {string|null} [message] Error message
             */

            /**
             * Constructs a new Error.
             * @memberof messages.notebook
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {messages.notebook.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error code.
             * @member {messages.notebook.Error.Code} code
             * @memberof messages.notebook.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Error message.
             * @member {string} message
             * @memberof messages.notebook.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof messages.notebook.Error
             * @static
             * @param {messages.notebook.IError=} [properties] Properties to set
             * @returns {messages.notebook.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.notebook.Error.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.Error
             * @static
             * @param {messages.notebook.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.notebook.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.Error
             * @static
             * @param {messages.notebook.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof messages.notebook.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    switch (message.code) {
                    default:
                        return "code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.Error)
                    return object;
                var message = new $root.messages.notebook.Error();
                switch (object.code) {
                case "UNKNOWN":
                case 0:
                    message.code = 0;
                    break;
                case "NOT_FOUND":
                case 1:
                    message.code = 1;
                    break;
                case "VALIDATION_FAILED":
                case 2:
                    message.code = 2;
                    break;
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.Error
             * @static
             * @param {messages.notebook.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = options.enums === String ? "UNKNOWN" : 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = options.enums === String ? $root.messages.notebook.Error.Code[message.code] : message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof messages.notebook.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Code enum.
             * @name messages.notebook.Error.Code
             * @enum {string}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} NOT_FOUND=1 NOT_FOUND value
             * @property {number} VALIDATION_FAILED=2 VALIDATION_FAILED value
             */
            Error.Code = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "NOT_FOUND"] = 1;
                values[valuesById[2] = "VALIDATION_FAILED"] = 2;
                return values;
            })();

            return Error;
        })();

        notebook.Principal = (function() {

            /**
             * Properties of a Principal.
             * @memberof messages.notebook
             * @interface IPrincipal
             * @property {messages.notebook.Principal.Type|null} [type] Principal type
             * @property {string|null} [id] Principal id
             */

            /**
             * Constructs a new Principal.
             * @memberof messages.notebook
             * @classdesc Represents a Principal.
             * @implements IPrincipal
             * @constructor
             * @param {messages.notebook.IPrincipal=} [properties] Properties to set
             */
            function Principal(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Principal type.
             * @member {messages.notebook.Principal.Type} type
             * @memberof messages.notebook.Principal
             * @instance
             */
            Principal.prototype.type = 0;

            /**
             * Principal id.
             * @member {string} id
             * @memberof messages.notebook.Principal
             * @instance
             */
            Principal.prototype.id = "";

            /**
             * Creates a new Principal instance using the specified properties.
             * @function create
             * @memberof messages.notebook.Principal
             * @static
             * @param {messages.notebook.IPrincipal=} [properties] Properties to set
             * @returns {messages.notebook.Principal} Principal instance
             */
            Principal.create = function create(properties) {
                return new Principal(properties);
            };

            /**
             * Encodes the specified Principal message. Does not implicitly {@link messages.notebook.Principal.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.Principal
             * @static
             * @param {messages.notebook.IPrincipal} message Principal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Principal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.notebook.Principal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.Principal
             * @static
             * @param {messages.notebook.IPrincipal} message Principal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Principal.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Principal message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.Principal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.Principal} Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Principal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.Principal();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Principal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.Principal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.Principal} Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Principal.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Principal message.
             * @function verify
             * @memberof messages.notebook.Principal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Principal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a Principal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.Principal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.Principal} Principal
             */
            Principal.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.Principal)
                    return object;
                var message = new $root.messages.notebook.Principal();
                switch (object.type) {
                case "USER":
                case 0:
                    message.type = 0;
                    break;
                }
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a Principal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.Principal
             * @static
             * @param {messages.notebook.Principal} message Principal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Principal.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "USER" : 0;
                    object.id = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.messages.notebook.Principal.Type[message.type] : message.type;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this Principal to JSON.
             * @function toJSON
             * @memberof messages.notebook.Principal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Principal.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name messages.notebook.Principal.Type
             * @enum {string}
             * @property {number} USER=0 USER value
             */
            Principal.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER"] = 0;
                return values;
            })();

            return Principal;
        })();

        notebook.RequestContext = (function() {

            /**
             * Properties of a RequestContext.
             * @memberof messages.notebook
             * @interface IRequestContext
             * @property {string|null} [traceId] RequestContext traceId
             * @property {messages.notebook.IPrincipal|null} [principal] RequestContext principal
             */

            /**
             * Constructs a new RequestContext.
             * @memberof messages.notebook
             * @classdesc Represents a RequestContext.
             * @implements IRequestContext
             * @constructor
             * @param {messages.notebook.IRequestContext=} [properties] Properties to set
             */
            function RequestContext(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestContext traceId.
             * @member {string} traceId
             * @memberof messages.notebook.RequestContext
             * @instance
             */
            RequestContext.prototype.traceId = "";

            /**
             * RequestContext principal.
             * @member {messages.notebook.IPrincipal|null|undefined} principal
             * @memberof messages.notebook.RequestContext
             * @instance
             */
            RequestContext.prototype.principal = null;

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @function create
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {messages.notebook.IRequestContext=} [properties] Properties to set
             * @returns {messages.notebook.RequestContext} RequestContext instance
             */
            RequestContext.create = function create(properties) {
                return new RequestContext(properties);
            };

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.notebook.RequestContext.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {messages.notebook.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.traceId);
                if (message.principal != null && message.hasOwnProperty("principal"))
                    $root.messages.notebook.Principal.encode(message.principal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.notebook.RequestContext.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {messages.notebook.IRequestContext} message RequestContext message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestContext.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.RequestContext();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.traceId = reader.string();
                        break;
                    case 2:
                        message.principal = $root.messages.notebook.Principal.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.RequestContext} RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestContext.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestContext message.
             * @function verify
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestContext.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.principal != null && message.hasOwnProperty("principal")) {
                    var error = $root.messages.notebook.Principal.verify(message.principal);
                    if (error)
                        return "principal." + error;
                }
                return null;
            };

            /**
             * Creates a RequestContext message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.RequestContext} RequestContext
             */
            RequestContext.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.RequestContext)
                    return object;
                var message = new $root.messages.notebook.RequestContext();
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.principal != null) {
                    if (typeof object.principal !== "object")
                        throw TypeError(".messages.notebook.RequestContext.principal: object expected");
                    message.principal = $root.messages.notebook.Principal.fromObject(object.principal);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.RequestContext
             * @static
             * @param {messages.notebook.RequestContext} message RequestContext
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestContext.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.traceId = "";
                    object.principal = null;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.principal != null && message.hasOwnProperty("principal"))
                    object.principal = $root.messages.notebook.Principal.toObject(message.principal, options);
                return object;
            };

            /**
             * Converts this RequestContext to JSON.
             * @function toJSON
             * @memberof messages.notebook.RequestContext
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestContext.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestContext;
        })();

        notebook.ReadEntryRequest = (function() {

            /**
             * Properties of a ReadEntryRequest.
             * @memberof messages.notebook
             * @interface IReadEntryRequest
             * @property {messages.notebook.IRequestContext|null} [context] ReadEntryRequest context
             * @property {messages.notebook.ReadEntryRequest.IPayload|null} [payload] ReadEntryRequest payload
             */

            /**
             * Constructs a new ReadEntryRequest.
             * @memberof messages.notebook
             * @classdesc Represents a ReadEntryRequest.
             * @implements IReadEntryRequest
             * @constructor
             * @param {messages.notebook.IReadEntryRequest=} [properties] Properties to set
             */
            function ReadEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadEntryRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.ReadEntryRequest
             * @instance
             */
            ReadEntryRequest.prototype.context = null;

            /**
             * ReadEntryRequest payload.
             * @member {messages.notebook.ReadEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.ReadEntryRequest
             * @instance
             */
            ReadEntryRequest.prototype.payload = null;

            /**
             * Creates a new ReadEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {messages.notebook.IReadEntryRequest=} [properties] Properties to set
             * @returns {messages.notebook.ReadEntryRequest} ReadEntryRequest instance
             */
            ReadEntryRequest.create = function create(properties) {
                return new ReadEntryRequest(properties);
            };

            /**
             * Encodes the specified ReadEntryRequest message. Does not implicitly {@link messages.notebook.ReadEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {messages.notebook.IReadEntryRequest} message ReadEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ReadEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ReadEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {messages.notebook.IReadEntryRequest} message ReadEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ReadEntryRequest} ReadEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ReadEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.ReadEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReadEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ReadEntryRequest} ReadEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadEntryRequest message.
             * @function verify
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ReadEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ReadEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ReadEntryRequest} ReadEntryRequest
             */
            ReadEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ReadEntryRequest)
                    return object;
                var message = new $root.messages.notebook.ReadEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ReadEntryRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ReadEntryRequest.payload: object expected");
                    message.payload = $root.messages.notebook.ReadEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ReadEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ReadEntryRequest
             * @static
             * @param {messages.notebook.ReadEntryRequest} message ReadEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ReadEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ReadEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.ReadEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ReadEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ReadEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ReadEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ReadEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ReadEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ReadEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ReadEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ReadEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ReadEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ReadEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ReadEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.ReadEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ReadEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ReadEntryRequest;
        })();

        notebook.ReadEntryResponse = (function() {

            /**
             * Properties of a ReadEntryResponse.
             * @memberof messages.notebook
             * @interface IReadEntryResponse
             * @property {google.rpc.IStatus|null} [status] ReadEntryResponse status
             * @property {messages.notebook.ReadEntryResponse.IPayload|null} [payload] ReadEntryResponse payload
             * @property {string|null} [traceId] ReadEntryResponse traceId
             */

            /**
             * Constructs a new ReadEntryResponse.
             * @memberof messages.notebook
             * @classdesc Represents a ReadEntryResponse.
             * @implements IReadEntryResponse
             * @constructor
             * @param {messages.notebook.IReadEntryResponse=} [properties] Properties to set
             */
            function ReadEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReadEntryResponse status.
             * @member {google.rpc.IStatus|null|undefined} status
             * @memberof messages.notebook.ReadEntryResponse
             * @instance
             */
            ReadEntryResponse.prototype.status = null;

            /**
             * ReadEntryResponse payload.
             * @member {messages.notebook.ReadEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.notebook.ReadEntryResponse
             * @instance
             */
            ReadEntryResponse.prototype.payload = null;

            /**
             * ReadEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.notebook.ReadEntryResponse
             * @instance
             */
            ReadEntryResponse.prototype.traceId = "";

            /**
             * Creates a new ReadEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {messages.notebook.IReadEntryResponse=} [properties] Properties to set
             * @returns {messages.notebook.ReadEntryResponse} ReadEntryResponse instance
             */
            ReadEntryResponse.create = function create(properties) {
                return new ReadEntryResponse(properties);
            };

            /**
             * Encodes the specified ReadEntryResponse message. Does not implicitly {@link messages.notebook.ReadEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {messages.notebook.IReadEntryResponse} message ReadEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && message.hasOwnProperty("status"))
                    $root.google.rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ReadEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified ReadEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {messages.notebook.IReadEntryResponse} message ReadEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReadEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReadEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ReadEntryResponse} ReadEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ReadEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = $root.google.rpc.Status.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.ReadEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReadEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ReadEntryResponse} ReadEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReadEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReadEntryResponse message.
             * @function verify
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReadEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status")) {
                    var error = $root.google.rpc.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ReadEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a ReadEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ReadEntryResponse} ReadEntryResponse
             */
            ReadEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ReadEntryResponse)
                    return object;
                var message = new $root.messages.notebook.ReadEntryResponse();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".messages.notebook.ReadEntryResponse.status: object expected");
                    message.status = $root.google.rpc.Status.fromObject(object.status);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ReadEntryResponse.payload: object expected");
                    message.payload = $root.messages.notebook.ReadEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a ReadEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ReadEntryResponse
             * @static
             * @param {messages.notebook.ReadEntryResponse} message ReadEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReadEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = null;
                    object.payload = null;
                    object.traceId = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.google.rpc.Status.toObject(message.status, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ReadEntryResponse.Payload.toObject(message.payload, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this ReadEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.ReadEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReadEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ReadEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ReadEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ReadEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ReadEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ReadEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ReadEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ReadEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ReadEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ReadEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ReadEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ReadEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.notebook.ReadEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.ReadEntryResponse.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.ReadEntryResponse.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ReadEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ReadEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ReadEntryResponse;
        })();

        notebook.StartNewEntryRequest = (function() {

            /**
             * Properties of a StartNewEntryRequest.
             * @memberof messages.notebook
             * @interface IStartNewEntryRequest
             * @property {messages.notebook.IRequestContext|null} [context] StartNewEntryRequest context
             * @property {messages.notebook.StartNewEntryRequest.IPayload|null} [payload] StartNewEntryRequest payload
             */

            /**
             * Constructs a new StartNewEntryRequest.
             * @memberof messages.notebook
             * @classdesc Represents a StartNewEntryRequest.
             * @implements IStartNewEntryRequest
             * @constructor
             * @param {messages.notebook.IStartNewEntryRequest=} [properties] Properties to set
             */
            function StartNewEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartNewEntryRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.StartNewEntryRequest
             * @instance
             */
            StartNewEntryRequest.prototype.context = null;

            /**
             * StartNewEntryRequest payload.
             * @member {messages.notebook.StartNewEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.StartNewEntryRequest
             * @instance
             */
            StartNewEntryRequest.prototype.payload = null;

            /**
             * Creates a new StartNewEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {messages.notebook.IStartNewEntryRequest=} [properties] Properties to set
             * @returns {messages.notebook.StartNewEntryRequest} StartNewEntryRequest instance
             */
            StartNewEntryRequest.create = function create(properties) {
                return new StartNewEntryRequest(properties);
            };

            /**
             * Encodes the specified StartNewEntryRequest message. Does not implicitly {@link messages.notebook.StartNewEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {messages.notebook.IStartNewEntryRequest} message StartNewEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartNewEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.StartNewEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StartNewEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {messages.notebook.IStartNewEntryRequest} message StartNewEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartNewEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartNewEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.StartNewEntryRequest} StartNewEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartNewEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.StartNewEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.StartNewEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartNewEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.StartNewEntryRequest} StartNewEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartNewEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartNewEntryRequest message.
             * @function verify
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartNewEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.StartNewEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a StartNewEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.StartNewEntryRequest} StartNewEntryRequest
             */
            StartNewEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.StartNewEntryRequest)
                    return object;
                var message = new $root.messages.notebook.StartNewEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryRequest.payload: object expected");
                    message.payload = $root.messages.notebook.StartNewEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a StartNewEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.StartNewEntryRequest
             * @static
             * @param {messages.notebook.StartNewEntryRequest} message StartNewEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartNewEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.StartNewEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this StartNewEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.StartNewEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartNewEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StartNewEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.StartNewEntryRequest
                 * @interface IPayload
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.StartNewEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.StartNewEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.StartNewEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.StartNewEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.StartNewEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.StartNewEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.text = reader.string();
                            break;
                        case 2:
                            message.creatorId = reader.string();
                            break;
                        case 3:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.StartNewEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.StartNewEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.StartNewEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.StartNewEntryRequest.Payload();
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.StartNewEntryRequest.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.StartNewEntryRequest.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.StartNewEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return StartNewEntryRequest;
        })();

        notebook.StartNewEntryResponse = (function() {

            /**
             * Properties of a StartNewEntryResponse.
             * @memberof messages.notebook
             * @interface IStartNewEntryResponse
             * @property {messages.notebook.IError|null} [error] StartNewEntryResponse error
             * @property {messages.notebook.StartNewEntryResponse.IPayload|null} [payload] StartNewEntryResponse payload
             * @property {string|null} [traceId] StartNewEntryResponse traceId
             */

            /**
             * Constructs a new StartNewEntryResponse.
             * @memberof messages.notebook
             * @classdesc Represents a StartNewEntryResponse.
             * @implements IStartNewEntryResponse
             * @constructor
             * @param {messages.notebook.IStartNewEntryResponse=} [properties] Properties to set
             */
            function StartNewEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartNewEntryResponse error.
             * @member {messages.notebook.IError|null|undefined} error
             * @memberof messages.notebook.StartNewEntryResponse
             * @instance
             */
            StartNewEntryResponse.prototype.error = null;

            /**
             * StartNewEntryResponse payload.
             * @member {messages.notebook.StartNewEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.notebook.StartNewEntryResponse
             * @instance
             */
            StartNewEntryResponse.prototype.payload = null;

            /**
             * StartNewEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.notebook.StartNewEntryResponse
             * @instance
             */
            StartNewEntryResponse.prototype.traceId = "";

            /**
             * Creates a new StartNewEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {messages.notebook.IStartNewEntryResponse=} [properties] Properties to set
             * @returns {messages.notebook.StartNewEntryResponse} StartNewEntryResponse instance
             */
            StartNewEntryResponse.create = function create(properties) {
                return new StartNewEntryResponse(properties);
            };

            /**
             * Encodes the specified StartNewEntryResponse message. Does not implicitly {@link messages.notebook.StartNewEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {messages.notebook.IStartNewEntryResponse} message StartNewEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartNewEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.notebook.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.StartNewEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified StartNewEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {messages.notebook.IStartNewEntryResponse} message StartNewEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartNewEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartNewEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.StartNewEntryResponse} StartNewEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartNewEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.StartNewEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.messages.notebook.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.StartNewEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartNewEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.StartNewEntryResponse} StartNewEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartNewEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartNewEntryResponse message.
             * @function verify
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartNewEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.notebook.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.StartNewEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a StartNewEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.StartNewEntryResponse} StartNewEntryResponse
             */
            StartNewEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.StartNewEntryResponse)
                    return object;
                var message = new $root.messages.notebook.StartNewEntryResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryResponse.error: object expected");
                    message.error = $root.messages.notebook.Error.fromObject(object.error);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.StartNewEntryResponse.payload: object expected");
                    message.payload = $root.messages.notebook.StartNewEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a StartNewEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.StartNewEntryResponse
             * @static
             * @param {messages.notebook.StartNewEntryResponse} message StartNewEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartNewEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.payload = null;
                    object.traceId = "";
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.notebook.Error.toObject(message.error, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.StartNewEntryResponse.Payload.toObject(message.payload, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this StartNewEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.StartNewEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartNewEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StartNewEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.StartNewEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.StartNewEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.StartNewEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.StartNewEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.StartNewEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.StartNewEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.StartNewEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.StartNewEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.StartNewEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.StartNewEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.notebook.StartNewEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.StartNewEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.StartNewEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return StartNewEntryResponse;
        })();

        notebook.ChangeEntryRequest = (function() {

            /**
             * Properties of a ChangeEntryRequest.
             * @memberof messages.notebook
             * @interface IChangeEntryRequest
             * @property {messages.notebook.IRequestContext|null} [context] ChangeEntryRequest context
             * @property {messages.notebook.ChangeEntryRequest.IPayload|null} [payload] ChangeEntryRequest payload
             */

            /**
             * Constructs a new ChangeEntryRequest.
             * @memberof messages.notebook
             * @classdesc Represents a ChangeEntryRequest.
             * @implements IChangeEntryRequest
             * @constructor
             * @param {messages.notebook.IChangeEntryRequest=} [properties] Properties to set
             */
            function ChangeEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChangeEntryRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.ChangeEntryRequest
             * @instance
             */
            ChangeEntryRequest.prototype.context = null;

            /**
             * ChangeEntryRequest payload.
             * @member {messages.notebook.ChangeEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.ChangeEntryRequest
             * @instance
             */
            ChangeEntryRequest.prototype.payload = null;

            /**
             * Creates a new ChangeEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {messages.notebook.IChangeEntryRequest=} [properties] Properties to set
             * @returns {messages.notebook.ChangeEntryRequest} ChangeEntryRequest instance
             */
            ChangeEntryRequest.create = function create(properties) {
                return new ChangeEntryRequest(properties);
            };

            /**
             * Encodes the specified ChangeEntryRequest message. Does not implicitly {@link messages.notebook.ChangeEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {messages.notebook.IChangeEntryRequest} message ChangeEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ChangeEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ChangeEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {messages.notebook.IChangeEntryRequest} message ChangeEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChangeEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ChangeEntryRequest} ChangeEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ChangeEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.ChangeEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChangeEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ChangeEntryRequest} ChangeEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChangeEntryRequest message.
             * @function verify
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ChangeEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ChangeEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ChangeEntryRequest} ChangeEntryRequest
             */
            ChangeEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ChangeEntryRequest)
                    return object;
                var message = new $root.messages.notebook.ChangeEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryRequest.payload: object expected");
                    message.payload = $root.messages.notebook.ChangeEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ChangeEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ChangeEntryRequest
             * @static
             * @param {messages.notebook.ChangeEntryRequest} message ChangeEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ChangeEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ChangeEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.ChangeEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ChangeEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ChangeEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ChangeEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ChangeEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ChangeEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ChangeEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ChangeEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ChangeEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ChangeEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ChangeEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ChangeEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.ChangeEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ChangeEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ChangeEntryRequest;
        })();

        notebook.ChangeEntryResponse = (function() {

            /**
             * Properties of a ChangeEntryResponse.
             * @memberof messages.notebook
             * @interface IChangeEntryResponse
             * @property {messages.notebook.IError|null} [error] ChangeEntryResponse error
             * @property {messages.notebook.ChangeEntryResponse.IPayload|null} [payload] ChangeEntryResponse payload
             * @property {string|null} [traceId] ChangeEntryResponse traceId
             */

            /**
             * Constructs a new ChangeEntryResponse.
             * @memberof messages.notebook
             * @classdesc Represents a ChangeEntryResponse.
             * @implements IChangeEntryResponse
             * @constructor
             * @param {messages.notebook.IChangeEntryResponse=} [properties] Properties to set
             */
            function ChangeEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChangeEntryResponse error.
             * @member {messages.notebook.IError|null|undefined} error
             * @memberof messages.notebook.ChangeEntryResponse
             * @instance
             */
            ChangeEntryResponse.prototype.error = null;

            /**
             * ChangeEntryResponse payload.
             * @member {messages.notebook.ChangeEntryResponse.IPayload|null|undefined} payload
             * @memberof messages.notebook.ChangeEntryResponse
             * @instance
             */
            ChangeEntryResponse.prototype.payload = null;

            /**
             * ChangeEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.notebook.ChangeEntryResponse
             * @instance
             */
            ChangeEntryResponse.prototype.traceId = "";

            /**
             * Creates a new ChangeEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {messages.notebook.IChangeEntryResponse=} [properties] Properties to set
             * @returns {messages.notebook.ChangeEntryResponse} ChangeEntryResponse instance
             */
            ChangeEntryResponse.create = function create(properties) {
                return new ChangeEntryResponse(properties);
            };

            /**
             * Encodes the specified ChangeEntryResponse message. Does not implicitly {@link messages.notebook.ChangeEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {messages.notebook.IChangeEntryResponse} message ChangeEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.notebook.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ChangeEntryResponse.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified ChangeEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {messages.notebook.IChangeEntryResponse} message ChangeEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChangeEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChangeEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ChangeEntryResponse} ChangeEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ChangeEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.messages.notebook.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.ChangeEntryResponse.Payload.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChangeEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ChangeEntryResponse} ChangeEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChangeEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChangeEntryResponse message.
             * @function verify
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChangeEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.notebook.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ChangeEntryResponse.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a ChangeEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ChangeEntryResponse} ChangeEntryResponse
             */
            ChangeEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ChangeEntryResponse)
                    return object;
                var message = new $root.messages.notebook.ChangeEntryResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryResponse.error: object expected");
                    message.error = $root.messages.notebook.Error.fromObject(object.error);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ChangeEntryResponse.payload: object expected");
                    message.payload = $root.messages.notebook.ChangeEntryResponse.Payload.fromObject(object.payload);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a ChangeEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ChangeEntryResponse
             * @static
             * @param {messages.notebook.ChangeEntryResponse} message ChangeEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChangeEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.payload = null;
                    object.traceId = "";
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.notebook.Error.toObject(message.error, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ChangeEntryResponse.Payload.toObject(message.payload, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this ChangeEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.ChangeEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChangeEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ChangeEntryResponse.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ChangeEntryResponse
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ChangeEntryResponse
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ChangeEntryResponse.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryResponse.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ChangeEntryResponse.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ChangeEntryResponse.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryResponse.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryResponse.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ChangeEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ChangeEntryResponse.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ChangeEntryResponse.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ChangeEntryResponse.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ChangeEntryResponse.Payload)
                        return object;
                    var message = new $root.messages.notebook.ChangeEntryResponse.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.ChangeEntryResponse.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.ChangeEntryResponse.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @static
                 * @param {messages.notebook.ChangeEntryResponse.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ChangeEntryResponse.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ChangeEntryResponse;
        })();

        notebook.ListEntriesRequest = (function() {

            /**
             * Properties of a ListEntriesRequest.
             * @memberof messages.notebook
             * @interface IListEntriesRequest
             * @property {messages.notebook.IRequestContext|null} [context] ListEntriesRequest context
             * @property {messages.notebook.ListEntriesRequest.IPayload|null} [payload] ListEntriesRequest payload
             */

            /**
             * Constructs a new ListEntriesRequest.
             * @memberof messages.notebook
             * @classdesc Represents a ListEntriesRequest.
             * @implements IListEntriesRequest
             * @constructor
             * @param {messages.notebook.IListEntriesRequest=} [properties] Properties to set
             */
            function ListEntriesRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListEntriesRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.ListEntriesRequest
             * @instance
             */
            ListEntriesRequest.prototype.context = null;

            /**
             * ListEntriesRequest payload.
             * @member {messages.notebook.ListEntriesRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.ListEntriesRequest
             * @instance
             */
            ListEntriesRequest.prototype.payload = null;

            /**
             * Creates a new ListEntriesRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {messages.notebook.IListEntriesRequest=} [properties] Properties to set
             * @returns {messages.notebook.ListEntriesRequest} ListEntriesRequest instance
             */
            ListEntriesRequest.create = function create(properties) {
                return new ListEntriesRequest(properties);
            };

            /**
             * Encodes the specified ListEntriesRequest message. Does not implicitly {@link messages.notebook.ListEntriesRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {messages.notebook.IListEntriesRequest} message ListEntriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.ListEntriesRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListEntriesRequest message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {messages.notebook.IListEntriesRequest} message ListEntriesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ListEntriesRequest} ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.ListEntriesRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ListEntriesRequest} ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListEntriesRequest message.
             * @function verify
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListEntriesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.ListEntriesRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a ListEntriesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ListEntriesRequest} ListEntriesRequest
             */
            ListEntriesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ListEntriesRequest)
                    return object;
                var message = new $root.messages.notebook.ListEntriesRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.ListEntriesRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.ListEntriesRequest.payload: object expected");
                    message.payload = $root.messages.notebook.ListEntriesRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListEntriesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ListEntriesRequest
             * @static
             * @param {messages.notebook.ListEntriesRequest} message ListEntriesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListEntriesRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.ListEntriesRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this ListEntriesRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.ListEntriesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListEntriesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListEntriesRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.ListEntriesRequest
                 * @interface IPayload
                 * @property {number|null} [first] Payload first
                 * @property {string|null} [after] Payload after
                 * @property {string|null} [creatorId] Payload creatorId
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.ListEntriesRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.ListEntriesRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload first.
                 * @member {number} first
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.first = 0;

                /**
                 * Payload after.
                 * @member {string} after
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.after = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.ListEntriesRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ListEntriesRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.first != null && message.hasOwnProperty("first"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.first);
                    if (message.after != null && message.hasOwnProperty("after"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.after);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ListEntriesRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.first = reader.int32();
                            break;
                        case 2:
                            message.after = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ListEntriesRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.first != null && message.hasOwnProperty("first"))
                        if (!$util.isInteger(message.first))
                            return "first: integer expected";
                    if (message.after != null && message.hasOwnProperty("after"))
                        if (!$util.isString(message.after))
                            return "after: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ListEntriesRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ListEntriesRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.ListEntriesRequest.Payload();
                    if (object.first != null)
                        message.first = object.first | 0;
                    if (object.after != null)
                        message.after = String(object.after);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @static
                 * @param {messages.notebook.ListEntriesRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.first = 0;
                        object.after = "";
                        object.creatorId = "";
                    }
                    if (message.first != null && message.hasOwnProperty("first"))
                        object.first = message.first;
                    if (message.after != null && message.hasOwnProperty("after"))
                        object.after = message.after;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ListEntriesRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return ListEntriesRequest;
        })();

        notebook.ListEntriesResponse = (function() {

            /**
             * Properties of a ListEntriesResponse.
             * @memberof messages.notebook
             * @interface IListEntriesResponse
             * @property {messages.notebook.IError|null} [error] ListEntriesResponse error
             * @property {Array.<messages.notebook.ListEntriesResponse.IEntity>|null} [payload] ListEntriesResponse payload
             * @property {string|null} [traceId] ListEntriesResponse traceId
             * @property {messages.notebook.ListEntriesResponse.IPageInfo|null} [pageInfo] ListEntriesResponse pageInfo
             */

            /**
             * Constructs a new ListEntriesResponse.
             * @memberof messages.notebook
             * @classdesc Represents a ListEntriesResponse.
             * @implements IListEntriesResponse
             * @constructor
             * @param {messages.notebook.IListEntriesResponse=} [properties] Properties to set
             */
            function ListEntriesResponse(properties) {
                this.payload = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListEntriesResponse error.
             * @member {messages.notebook.IError|null|undefined} error
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.error = null;

            /**
             * ListEntriesResponse payload.
             * @member {Array.<messages.notebook.ListEntriesResponse.IEntity>} payload
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.payload = $util.emptyArray;

            /**
             * ListEntriesResponse traceId.
             * @member {string} traceId
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.traceId = "";

            /**
             * ListEntriesResponse pageInfo.
             * @member {messages.notebook.ListEntriesResponse.IPageInfo|null|undefined} pageInfo
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             */
            ListEntriesResponse.prototype.pageInfo = null;

            /**
             * Creates a new ListEntriesResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {messages.notebook.IListEntriesResponse=} [properties] Properties to set
             * @returns {messages.notebook.ListEntriesResponse} ListEntriesResponse instance
             */
            ListEntriesResponse.create = function create(properties) {
                return new ListEntriesResponse(properties);
            };

            /**
             * Encodes the specified ListEntriesResponse message. Does not implicitly {@link messages.notebook.ListEntriesResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {messages.notebook.IListEntriesResponse} message ListEntriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.notebook.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.payload.length)
                    for (var i = 0; i < message.payload.length; ++i)
                        $root.messages.notebook.ListEntriesResponse.Entity.encode(message.payload[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                    $root.messages.notebook.ListEntriesResponse.PageInfo.encode(message.pageInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListEntriesResponse message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {messages.notebook.IListEntriesResponse} message ListEntriesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListEntriesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.ListEntriesResponse} ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.messages.notebook.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.payload && message.payload.length))
                            message.payload = [];
                        message.payload.push($root.messages.notebook.ListEntriesResponse.Entity.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.traceId = reader.string();
                        break;
                    case 4:
                        message.pageInfo = $root.messages.notebook.ListEntriesResponse.PageInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.ListEntriesResponse} ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListEntriesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListEntriesResponse message.
             * @function verify
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListEntriesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.notebook.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    if (!Array.isArray(message.payload))
                        return "payload: array expected";
                    for (var i = 0; i < message.payload.length; ++i) {
                        var error = $root.messages.notebook.ListEntriesResponse.Entity.verify(message.payload[i]);
                        if (error)
                            return "payload." + error;
                    }
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                    var error = $root.messages.notebook.ListEntriesResponse.PageInfo.verify(message.pageInfo);
                    if (error)
                        return "pageInfo." + error;
                }
                return null;
            };

            /**
             * Creates a ListEntriesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.ListEntriesResponse} ListEntriesResponse
             */
            ListEntriesResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.ListEntriesResponse)
                    return object;
                var message = new $root.messages.notebook.ListEntriesResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.notebook.ListEntriesResponse.error: object expected");
                    message.error = $root.messages.notebook.Error.fromObject(object.error);
                }
                if (object.payload) {
                    if (!Array.isArray(object.payload))
                        throw TypeError(".messages.notebook.ListEntriesResponse.payload: array expected");
                    message.payload = [];
                    for (var i = 0; i < object.payload.length; ++i) {
                        if (typeof object.payload[i] !== "object")
                            throw TypeError(".messages.notebook.ListEntriesResponse.payload: object expected");
                        message.payload[i] = $root.messages.notebook.ListEntriesResponse.Entity.fromObject(object.payload[i]);
                    }
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                if (object.pageInfo != null) {
                    if (typeof object.pageInfo !== "object")
                        throw TypeError(".messages.notebook.ListEntriesResponse.pageInfo: object expected");
                    message.pageInfo = $root.messages.notebook.ListEntriesResponse.PageInfo.fromObject(object.pageInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListEntriesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.ListEntriesResponse
             * @static
             * @param {messages.notebook.ListEntriesResponse} message ListEntriesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListEntriesResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.payload = [];
                if (options.defaults) {
                    object.error = null;
                    object.traceId = "";
                    object.pageInfo = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.notebook.Error.toObject(message.error, options);
                if (message.payload && message.payload.length) {
                    object.payload = [];
                    for (var j = 0; j < message.payload.length; ++j)
                        object.payload[j] = $root.messages.notebook.ListEntriesResponse.Entity.toObject(message.payload[j], options);
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                    object.pageInfo = $root.messages.notebook.ListEntriesResponse.PageInfo.toObject(message.pageInfo, options);
                return object;
            };

            /**
             * Converts this ListEntriesResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.ListEntriesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListEntriesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ListEntriesResponse.PageInfo = (function() {

                /**
                 * Properties of a PageInfo.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @interface IPageInfo
                 * @property {number|null} [totalCount] PageInfo totalCount
                 * @property {boolean|null} [hasNextPage] PageInfo hasNextPage
                 * @property {string|null} [startCursor] PageInfo startCursor
                 * @property {string|null} [endCursor] PageInfo endCursor
                 */

                /**
                 * Constructs a new PageInfo.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @classdesc Represents a PageInfo.
                 * @implements IPageInfo
                 * @constructor
                 * @param {messages.notebook.ListEntriesResponse.IPageInfo=} [properties] Properties to set
                 */
                function PageInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PageInfo totalCount.
                 * @member {number} totalCount
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.totalCount = 0;

                /**
                 * PageInfo hasNextPage.
                 * @member {boolean} hasNextPage
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.hasNextPage = false;

                /**
                 * PageInfo startCursor.
                 * @member {string} startCursor
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.startCursor = "";

                /**
                 * PageInfo endCursor.
                 * @member {string} endCursor
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 */
                PageInfo.prototype.endCursor = "";

                /**
                 * Creates a new PageInfo instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPageInfo=} [properties] Properties to set
                 * @returns {messages.notebook.ListEntriesResponse.PageInfo} PageInfo instance
                 */
                PageInfo.create = function create(properties) {
                    return new PageInfo(properties);
                };

                /**
                 * Encodes the specified PageInfo message. Does not implicitly {@link messages.notebook.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPageInfo} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalCount);
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasNextPage);
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.startCursor);
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.endCursor);
                    return writer;
                };

                /**
                 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IPageInfo} message PageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PageInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ListEntriesResponse.PageInfo} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesResponse.PageInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.totalCount = reader.int32();
                            break;
                        case 2:
                            message.hasNextPage = reader.bool();
                            break;
                        case 3:
                            message.startCursor = reader.string();
                            break;
                        case 4:
                            message.endCursor = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ListEntriesResponse.PageInfo} PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PageInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PageInfo message.
                 * @function verify
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PageInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        if (!$util.isInteger(message.totalCount))
                            return "totalCount: integer expected";
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        if (typeof message.hasNextPage !== "boolean")
                            return "hasNextPage: boolean expected";
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        if (!$util.isString(message.startCursor))
                            return "startCursor: string expected";
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        if (!$util.isString(message.endCursor))
                            return "endCursor: string expected";
                    return null;
                };

                /**
                 * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ListEntriesResponse.PageInfo} PageInfo
                 */
                PageInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ListEntriesResponse.PageInfo)
                        return object;
                    var message = new $root.messages.notebook.ListEntriesResponse.PageInfo();
                    if (object.totalCount != null)
                        message.totalCount = object.totalCount | 0;
                    if (object.hasNextPage != null)
                        message.hasNextPage = Boolean(object.hasNextPage);
                    if (object.startCursor != null)
                        message.startCursor = String(object.startCursor);
                    if (object.endCursor != null)
                        message.endCursor = String(object.endCursor);
                    return message;
                };

                /**
                 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.PageInfo} message PageInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PageInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.totalCount = 0;
                        object.hasNextPage = false;
                        object.startCursor = "";
                        object.endCursor = "";
                    }
                    if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                        object.totalCount = message.totalCount;
                    if (message.hasNextPage != null && message.hasOwnProperty("hasNextPage"))
                        object.hasNextPage = message.hasNextPage;
                    if (message.startCursor != null && message.hasOwnProperty("startCursor"))
                        object.startCursor = message.startCursor;
                    if (message.endCursor != null && message.hasOwnProperty("endCursor"))
                        object.endCursor = message.endCursor;
                    return object;
                };

                /**
                 * Converts this PageInfo to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ListEntriesResponse.PageInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PageInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PageInfo;
            })();

            ListEntriesResponse.Entity = (function() {

                /**
                 * Properties of an Entity.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @interface IEntity
                 * @property {string|null} [id] Entity id
                 * @property {string|null} [text] Entity text
                 * @property {string|null} [creatorId] Entity creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Entity createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Entity updatedAt
                 */

                /**
                 * Constructs a new Entity.
                 * @memberof messages.notebook.ListEntriesResponse
                 * @classdesc Represents an Entity.
                 * @implements IEntity
                 * @constructor
                 * @param {messages.notebook.ListEntriesResponse.IEntity=} [properties] Properties to set
                 */
                function Entity(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Entity id.
                 * @member {string} id
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.id = "";

                /**
                 * Entity text.
                 * @member {string} text
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.text = "";

                /**
                 * Entity creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.creatorId = "";

                /**
                 * Entity createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.createdAt = null;

                /**
                 * Entity updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @instance
                 */
                Entity.prototype.updatedAt = null;

                /**
                 * Creates a new Entity instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IEntity=} [properties] Properties to set
                 * @returns {messages.notebook.ListEntriesResponse.Entity} Entity instance
                 */
                Entity.create = function create(properties) {
                    return new Entity(properties);
                };

                /**
                 * Encodes the specified Entity message. Does not implicitly {@link messages.notebook.ListEntriesResponse.Entity.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Entity message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.Entity.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Entity message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.ListEntriesResponse.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.ListEntriesResponse.Entity();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Entity message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.ListEntriesResponse.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Entity message.
                 * @function verify
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Entity.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.ListEntriesResponse.Entity} Entity
                 */
                Entity.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.ListEntriesResponse.Entity)
                        return object;
                    var message = new $root.messages.notebook.ListEntriesResponse.Entity();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.ListEntriesResponse.Entity.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.ListEntriesResponse.Entity.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Entity message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @static
                 * @param {messages.notebook.ListEntriesResponse.Entity} message Entity
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Entity.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Entity to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.ListEntriesResponse.Entity
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Entity.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Entity;
            })();

            return ListEntriesResponse;
        })();

        notebook.DiscardEntryRequest = (function() {

            /**
             * Properties of a DiscardEntryRequest.
             * @memberof messages.notebook
             * @interface IDiscardEntryRequest
             * @property {messages.notebook.IRequestContext|null} [context] DiscardEntryRequest context
             * @property {messages.notebook.DiscardEntryRequest.IPayload|null} [payload] DiscardEntryRequest payload
             */

            /**
             * Constructs a new DiscardEntryRequest.
             * @memberof messages.notebook
             * @classdesc Represents a DiscardEntryRequest.
             * @implements IDiscardEntryRequest
             * @constructor
             * @param {messages.notebook.IDiscardEntryRequest=} [properties] Properties to set
             */
            function DiscardEntryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscardEntryRequest context.
             * @member {messages.notebook.IRequestContext|null|undefined} context
             * @memberof messages.notebook.DiscardEntryRequest
             * @instance
             */
            DiscardEntryRequest.prototype.context = null;

            /**
             * DiscardEntryRequest payload.
             * @member {messages.notebook.DiscardEntryRequest.IPayload|null|undefined} payload
             * @memberof messages.notebook.DiscardEntryRequest
             * @instance
             */
            DiscardEntryRequest.prototype.payload = null;

            /**
             * Creates a new DiscardEntryRequest instance using the specified properties.
             * @function create
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {messages.notebook.IDiscardEntryRequest=} [properties] Properties to set
             * @returns {messages.notebook.DiscardEntryRequest} DiscardEntryRequest instance
             */
            DiscardEntryRequest.create = function create(properties) {
                return new DiscardEntryRequest(properties);
            };

            /**
             * Encodes the specified DiscardEntryRequest message. Does not implicitly {@link messages.notebook.DiscardEntryRequest.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {messages.notebook.IDiscardEntryRequest} message DiscardEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardEntryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.context != null && message.hasOwnProperty("context"))
                    $root.messages.notebook.RequestContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.DiscardEntryRequest.Payload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DiscardEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {messages.notebook.IDiscardEntryRequest} message DiscardEntryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardEntryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardEntryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.DiscardEntryRequest} DiscardEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardEntryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.DiscardEntryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.context = $root.messages.notebook.RequestContext.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.payload = $root.messages.notebook.DiscardEntryRequest.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DiscardEntryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.DiscardEntryRequest} DiscardEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardEntryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardEntryRequest message.
             * @function verify
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardEntryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.context != null && message.hasOwnProperty("context")) {
                    var error = $root.messages.notebook.RequestContext.verify(message.context);
                    if (error)
                        return "context." + error;
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.DiscardEntryRequest.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates a DiscardEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.DiscardEntryRequest} DiscardEntryRequest
             */
            DiscardEntryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.DiscardEntryRequest)
                    return object;
                var message = new $root.messages.notebook.DiscardEntryRequest();
                if (object.context != null) {
                    if (typeof object.context !== "object")
                        throw TypeError(".messages.notebook.DiscardEntryRequest.context: object expected");
                    message.context = $root.messages.notebook.RequestContext.fromObject(object.context);
                }
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.DiscardEntryRequest.payload: object expected");
                    message.payload = $root.messages.notebook.DiscardEntryRequest.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from a DiscardEntryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.DiscardEntryRequest
             * @static
             * @param {messages.notebook.DiscardEntryRequest} message DiscardEntryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardEntryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.context = null;
                    object.payload = null;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = $root.messages.notebook.RequestContext.toObject(message.context, options);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.DiscardEntryRequest.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this DiscardEntryRequest to JSON.
             * @function toJSON
             * @memberof messages.notebook.DiscardEntryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardEntryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DiscardEntryRequest.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.DiscardEntryRequest
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.DiscardEntryRequest
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.DiscardEntryRequest.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.DiscardEntryRequest.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.DiscardEntryRequest.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.DiscardEntryRequest.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.DiscardEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryRequest.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.DiscardEntryRequest.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.DiscardEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.DiscardEntryRequest.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.DiscardEntryRequest.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.DiscardEntryRequest.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.DiscardEntryRequest.Payload)
                        return object;
                    var message = new $root.messages.notebook.DiscardEntryRequest.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @static
                 * @param {messages.notebook.DiscardEntryRequest.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.DiscardEntryRequest.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return DiscardEntryRequest;
        })();

        notebook.DiscardEntryResponse = (function() {

            /**
             * Properties of a DiscardEntryResponse.
             * @memberof messages.notebook
             * @interface IDiscardEntryResponse
             * @property {messages.notebook.IError|null} [error] DiscardEntryResponse error
             * @property {string|null} [traceId] DiscardEntryResponse traceId
             */

            /**
             * Constructs a new DiscardEntryResponse.
             * @memberof messages.notebook
             * @classdesc Represents a DiscardEntryResponse.
             * @implements IDiscardEntryResponse
             * @constructor
             * @param {messages.notebook.IDiscardEntryResponse=} [properties] Properties to set
             */
            function DiscardEntryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscardEntryResponse error.
             * @member {messages.notebook.IError|null|undefined} error
             * @memberof messages.notebook.DiscardEntryResponse
             * @instance
             */
            DiscardEntryResponse.prototype.error = null;

            /**
             * DiscardEntryResponse traceId.
             * @member {string} traceId
             * @memberof messages.notebook.DiscardEntryResponse
             * @instance
             */
            DiscardEntryResponse.prototype.traceId = "";

            /**
             * Creates a new DiscardEntryResponse instance using the specified properties.
             * @function create
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {messages.notebook.IDiscardEntryResponse=} [properties] Properties to set
             * @returns {messages.notebook.DiscardEntryResponse} DiscardEntryResponse instance
             */
            DiscardEntryResponse.create = function create(properties) {
                return new DiscardEntryResponse(properties);
            };

            /**
             * Encodes the specified DiscardEntryResponse message. Does not implicitly {@link messages.notebook.DiscardEntryResponse.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {messages.notebook.IDiscardEntryResponse} message DiscardEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardEntryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.messages.notebook.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.traceId);
                return writer;
            };

            /**
             * Encodes the specified DiscardEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {messages.notebook.IDiscardEntryResponse} message DiscardEntryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardEntryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardEntryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.DiscardEntryResponse} DiscardEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardEntryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.DiscardEntryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.messages.notebook.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.traceId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DiscardEntryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.DiscardEntryResponse} DiscardEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardEntryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardEntryResponse message.
             * @function verify
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardEntryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.messages.notebook.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    if (!$util.isString(message.traceId))
                        return "traceId: string expected";
                return null;
            };

            /**
             * Creates a DiscardEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.DiscardEntryResponse} DiscardEntryResponse
             */
            DiscardEntryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.DiscardEntryResponse)
                    return object;
                var message = new $root.messages.notebook.DiscardEntryResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".messages.notebook.DiscardEntryResponse.error: object expected");
                    message.error = $root.messages.notebook.Error.fromObject(object.error);
                }
                if (object.traceId != null)
                    message.traceId = String(object.traceId);
                return message;
            };

            /**
             * Creates a plain object from a DiscardEntryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.DiscardEntryResponse
             * @static
             * @param {messages.notebook.DiscardEntryResponse} message DiscardEntryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardEntryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.traceId = "";
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.messages.notebook.Error.toObject(message.error, options);
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = message.traceId;
                return object;
            };

            /**
             * Converts this DiscardEntryResponse to JSON.
             * @function toJSON
             * @memberof messages.notebook.DiscardEntryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardEntryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DiscardEntryResponse;
        })();

        notebook.InfoEntryCreated = (function() {

            /**
             * Properties of an InfoEntryCreated.
             * @memberof messages.notebook
             * @interface IInfoEntryCreated
             * @property {messages.notebook.InfoEntryCreated.IPayload|null} [payload] InfoEntryCreated payload
             */

            /**
             * Constructs a new InfoEntryCreated.
             * @memberof messages.notebook
             * @classdesc Represents an InfoEntryCreated.
             * @implements IInfoEntryCreated
             * @constructor
             * @param {messages.notebook.IInfoEntryCreated=} [properties] Properties to set
             */
            function InfoEntryCreated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryCreated payload.
             * @member {messages.notebook.InfoEntryCreated.IPayload|null|undefined} payload
             * @memberof messages.notebook.InfoEntryCreated
             * @instance
             */
            InfoEntryCreated.prototype.payload = null;

            /**
             * Creates a new InfoEntryCreated instance using the specified properties.
             * @function create
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {messages.notebook.IInfoEntryCreated=} [properties] Properties to set
             * @returns {messages.notebook.InfoEntryCreated} InfoEntryCreated instance
             */
            InfoEntryCreated.create = function create(properties) {
                return new InfoEntryCreated(properties);
            };

            /**
             * Encodes the specified InfoEntryCreated message. Does not implicitly {@link messages.notebook.InfoEntryCreated.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {messages.notebook.IInfoEntryCreated} message InfoEntryCreated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryCreated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.InfoEntryCreated.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryCreated message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryCreated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {messages.notebook.IInfoEntryCreated} message InfoEntryCreated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryCreated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.InfoEntryCreated} InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryCreated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryCreated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.notebook.InfoEntryCreated.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.InfoEntryCreated} InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryCreated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryCreated message.
             * @function verify
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryCreated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.InfoEntryCreated.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryCreated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.InfoEntryCreated} InfoEntryCreated
             */
            InfoEntryCreated.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.InfoEntryCreated)
                    return object;
                var message = new $root.messages.notebook.InfoEntryCreated();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.InfoEntryCreated.payload: object expected");
                    message.payload = $root.messages.notebook.InfoEntryCreated.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryCreated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.InfoEntryCreated
             * @static
             * @param {messages.notebook.InfoEntryCreated} message InfoEntryCreated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryCreated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.payload = null;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.InfoEntryCreated.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryCreated to JSON.
             * @function toJSON
             * @memberof messages.notebook.InfoEntryCreated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryCreated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryCreated.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.InfoEntryCreated
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.InfoEntryCreated
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.InfoEntryCreated.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryCreated.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.InfoEntryCreated.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryCreated.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryCreated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryCreated.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryCreated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.InfoEntryCreated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryCreated.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.InfoEntryCreated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.InfoEntryCreated.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.InfoEntryCreated.Payload)
                        return object;
                    var message = new $root.messages.notebook.InfoEntryCreated.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryCreated.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.InfoEntryCreated.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryCreated;
        })();

        notebook.InfoEntryUpdated = (function() {

            /**
             * Properties of an InfoEntryUpdated.
             * @memberof messages.notebook
             * @interface IInfoEntryUpdated
             * @property {messages.notebook.InfoEntryUpdated.IPayload|null} [payload] InfoEntryUpdated payload
             */

            /**
             * Constructs a new InfoEntryUpdated.
             * @memberof messages.notebook
             * @classdesc Represents an InfoEntryUpdated.
             * @implements IInfoEntryUpdated
             * @constructor
             * @param {messages.notebook.IInfoEntryUpdated=} [properties] Properties to set
             */
            function InfoEntryUpdated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryUpdated payload.
             * @member {messages.notebook.InfoEntryUpdated.IPayload|null|undefined} payload
             * @memberof messages.notebook.InfoEntryUpdated
             * @instance
             */
            InfoEntryUpdated.prototype.payload = null;

            /**
             * Creates a new InfoEntryUpdated instance using the specified properties.
             * @function create
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {messages.notebook.IInfoEntryUpdated=} [properties] Properties to set
             * @returns {messages.notebook.InfoEntryUpdated} InfoEntryUpdated instance
             */
            InfoEntryUpdated.create = function create(properties) {
                return new InfoEntryUpdated(properties);
            };

            /**
             * Encodes the specified InfoEntryUpdated message. Does not implicitly {@link messages.notebook.InfoEntryUpdated.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {messages.notebook.IInfoEntryUpdated} message InfoEntryUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.InfoEntryUpdated.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryUpdated message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {messages.notebook.IInfoEntryUpdated} message InfoEntryUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.InfoEntryUpdated} InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryUpdated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.notebook.InfoEntryUpdated.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.InfoEntryUpdated} InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryUpdated message.
             * @function verify
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.InfoEntryUpdated.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.InfoEntryUpdated} InfoEntryUpdated
             */
            InfoEntryUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.InfoEntryUpdated)
                    return object;
                var message = new $root.messages.notebook.InfoEntryUpdated();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.InfoEntryUpdated.payload: object expected");
                    message.payload = $root.messages.notebook.InfoEntryUpdated.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.InfoEntryUpdated
             * @static
             * @param {messages.notebook.InfoEntryUpdated} message InfoEntryUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.payload = null;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.InfoEntryUpdated.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryUpdated to JSON.
             * @function toJSON
             * @memberof messages.notebook.InfoEntryUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryUpdated.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.InfoEntryUpdated
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 * @property {string|null} [text] Payload text
                 * @property {string|null} [creatorId] Payload creatorId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Payload createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Payload updatedAt
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.InfoEntryUpdated
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.InfoEntryUpdated.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Payload text.
                 * @member {string} text
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.text = "";

                /**
                 * Payload creatorId.
                 * @member {string} creatorId
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.creatorId = "";

                /**
                 * Payload createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.createdAt = null;

                /**
                 * Payload updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 */
                Payload.prototype.updatedAt = null;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryUpdated.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.InfoEntryUpdated.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryUpdated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.text != null && message.hasOwnProperty("text"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.creatorId);
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryUpdated.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.InfoEntryUpdated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryUpdated.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.text = reader.string();
                            break;
                        case 3:
                            message.creatorId = reader.string();
                            break;
                        case 4:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.InfoEntryUpdated.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        if (!$util.isString(message.creatorId))
                            return "creatorId: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.InfoEntryUpdated.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.InfoEntryUpdated.Payload)
                        return object;
                    var message = new $root.messages.notebook.InfoEntryUpdated.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.creatorId != null)
                        message.creatorId = String(object.creatorId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".messages.notebook.InfoEntryUpdated.Payload.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".messages.notebook.InfoEntryUpdated.Payload.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryUpdated.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.text = "";
                        object.creatorId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.creatorId != null && message.hasOwnProperty("creatorId"))
                        object.creatorId = message.creatorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.InfoEntryUpdated.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryUpdated;
        })();

        notebook.InfoEntryDeleted = (function() {

            /**
             * Properties of an InfoEntryDeleted.
             * @memberof messages.notebook
             * @interface IInfoEntryDeleted
             * @property {messages.notebook.InfoEntryDeleted.IPayload|null} [payload] InfoEntryDeleted payload
             */

            /**
             * Constructs a new InfoEntryDeleted.
             * @memberof messages.notebook
             * @classdesc Represents an InfoEntryDeleted.
             * @implements IInfoEntryDeleted
             * @constructor
             * @param {messages.notebook.IInfoEntryDeleted=} [properties] Properties to set
             */
            function InfoEntryDeleted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InfoEntryDeleted payload.
             * @member {messages.notebook.InfoEntryDeleted.IPayload|null|undefined} payload
             * @memberof messages.notebook.InfoEntryDeleted
             * @instance
             */
            InfoEntryDeleted.prototype.payload = null;

            /**
             * Creates a new InfoEntryDeleted instance using the specified properties.
             * @function create
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {messages.notebook.IInfoEntryDeleted=} [properties] Properties to set
             * @returns {messages.notebook.InfoEntryDeleted} InfoEntryDeleted instance
             */
            InfoEntryDeleted.create = function create(properties) {
                return new InfoEntryDeleted(properties);
            };

            /**
             * Encodes the specified InfoEntryDeleted message. Does not implicitly {@link messages.notebook.InfoEntryDeleted.verify|verify} messages.
             * @function encode
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {messages.notebook.IInfoEntryDeleted} message InfoEntryDeleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryDeleted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payload != null && message.hasOwnProperty("payload"))
                    $root.messages.notebook.InfoEntryDeleted.Payload.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InfoEntryDeleted message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryDeleted.verify|verify} messages.
             * @function encodeDelimited
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {messages.notebook.IInfoEntryDeleted} message InfoEntryDeleted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InfoEntryDeleted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer.
             * @function decode
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {messages.notebook.InfoEntryDeleted} InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryDeleted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryDeleted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.payload = $root.messages.notebook.InfoEntryDeleted.Payload.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {messages.notebook.InfoEntryDeleted} InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InfoEntryDeleted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InfoEntryDeleted message.
             * @function verify
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InfoEntryDeleted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    var error = $root.messages.notebook.InfoEntryDeleted.Payload.verify(message.payload);
                    if (error)
                        return "payload." + error;
                }
                return null;
            };

            /**
             * Creates an InfoEntryDeleted message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {messages.notebook.InfoEntryDeleted} InfoEntryDeleted
             */
            InfoEntryDeleted.fromObject = function fromObject(object) {
                if (object instanceof $root.messages.notebook.InfoEntryDeleted)
                    return object;
                var message = new $root.messages.notebook.InfoEntryDeleted();
                if (object.payload != null) {
                    if (typeof object.payload !== "object")
                        throw TypeError(".messages.notebook.InfoEntryDeleted.payload: object expected");
                    message.payload = $root.messages.notebook.InfoEntryDeleted.Payload.fromObject(object.payload);
                }
                return message;
            };

            /**
             * Creates a plain object from an InfoEntryDeleted message. Also converts values to other types if specified.
             * @function toObject
             * @memberof messages.notebook.InfoEntryDeleted
             * @static
             * @param {messages.notebook.InfoEntryDeleted} message InfoEntryDeleted
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InfoEntryDeleted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.payload = null;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = $root.messages.notebook.InfoEntryDeleted.Payload.toObject(message.payload, options);
                return object;
            };

            /**
             * Converts this InfoEntryDeleted to JSON.
             * @function toJSON
             * @memberof messages.notebook.InfoEntryDeleted
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InfoEntryDeleted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InfoEntryDeleted.Payload = (function() {

                /**
                 * Properties of a Payload.
                 * @memberof messages.notebook.InfoEntryDeleted
                 * @interface IPayload
                 * @property {string|null} [id] Payload id
                 */

                /**
                 * Constructs a new Payload.
                 * @memberof messages.notebook.InfoEntryDeleted
                 * @classdesc Represents a Payload.
                 * @implements IPayload
                 * @constructor
                 * @param {messages.notebook.InfoEntryDeleted.IPayload=} [properties] Properties to set
                 */
                function Payload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Payload id.
                 * @member {string} id
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @instance
                 */
                Payload.prototype.id = "";

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @function create
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryDeleted.IPayload=} [properties] Properties to set
                 * @returns {messages.notebook.InfoEntryDeleted.Payload} Payload instance
                 */
                Payload.create = function create(properties) {
                    return new Payload(properties);
                };

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @function encode
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryDeleted.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryDeleted.IPayload} message Payload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Payload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @function decode
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {messages.notebook.InfoEntryDeleted.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.notebook.InfoEntryDeleted.Payload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {messages.notebook.InfoEntryDeleted.Payload} Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Payload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Payload message.
                 * @function verify
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Payload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {messages.notebook.InfoEntryDeleted.Payload} Payload
                 */
                Payload.fromObject = function fromObject(object) {
                    if (object instanceof $root.messages.notebook.InfoEntryDeleted.Payload)
                        return object;
                    var message = new $root.messages.notebook.InfoEntryDeleted.Payload();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @static
                 * @param {messages.notebook.InfoEntryDeleted.Payload} message Payload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Payload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Payload to JSON.
                 * @function toJSON
                 * @memberof messages.notebook.InfoEntryDeleted.Payload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Payload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Payload;
            })();

            return InfoEntryDeleted;
        })();

        return notebook;
    })();

    return messages;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    google.rpc = (function() {

        /**
         * Namespace rpc.
         * @memberof google
         * @namespace
         */
        var rpc = {};

        rpc.Status = (function() {

            /**
             * Properties of a Status.
             * @memberof google.rpc
             * @interface IStatus
             * @property {number|null} [code] Status code
             * @property {string|null} [message] Status message
             * @property {Array.<google.protobuf.IAny>|null} [details] Status details
             */

            /**
             * Constructs a new Status.
             * @memberof google.rpc
             * @classdesc Represents a Status.
             * @implements IStatus
             * @constructor
             * @param {google.rpc.IStatus=} [properties] Properties to set
             */
            function Status(properties) {
                this.details = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Status code.
             * @member {number} code
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.code = 0;

            /**
             * Status message.
             * @member {string} message
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.message = "";

            /**
             * Status details.
             * @member {Array.<google.protobuf.IAny>} details
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.details = $util.emptyArray;

            /**
             * Creates a new Status instance using the specified properties.
             * @function create
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus=} [properties] Properties to set
             * @returns {google.rpc.Status} Status instance
             */
            Status.create = function create(properties) {
                return new Status(properties);
            };

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.details != null && message.details.length)
                    for (var i = 0; i < message.details.length; ++i)
                        $root.google.protobuf.Any.encode(message.details[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Status();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    case 3:
                        if (!(message.details && message.details.length))
                            message.details = [];
                        message.details.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Status message.
             * @function verify
             * @memberof google.rpc.Status
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.details != null && message.hasOwnProperty("details")) {
                    if (!Array.isArray(message.details))
                        return "details: array expected";
                    for (var i = 0; i < message.details.length; ++i) {
                        var error = $root.google.protobuf.Any.verify(message.details[i]);
                        if (error)
                            return "details." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.Status
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.Status} Status
             */
            Status.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.Status)
                    return object;
                var message = new $root.google.rpc.Status();
                if (object.code != null)
                    message.code = object.code | 0;
                if (object.message != null)
                    message.message = String(object.message);
                if (object.details) {
                    if (!Array.isArray(object.details))
                        throw TypeError(".google.rpc.Status.details: array expected");
                    message.details = [];
                    for (var i = 0; i < object.details.length; ++i) {
                        if (typeof object.details[i] !== "object")
                            throw TypeError(".google.rpc.Status.details: object expected");
                        message.details[i] = $root.google.protobuf.Any.fromObject(object.details[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.Status} message Status
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Status.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.details = [];
                if (options.defaults) {
                    object.code = 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.details && message.details.length) {
                    object.details = [];
                    for (var j = 0; j < message.details.length; ++j)
                        object.details[j] = $root.google.protobuf.Any.toObject(message.details[j], options);
                }
                return object;
            };

            /**
             * Converts this Status to JSON.
             * @function toJSON
             * @memberof google.rpc.Status
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Status;
        })();

        /**
         * Code enum.
         * @name google.rpc.Code
         * @enum {string}
         * @property {number} OK=0 OK value
         * @property {number} CANCELLED=1 CANCELLED value
         * @property {number} UNKNOWN=2 UNKNOWN value
         * @property {number} INVALID_ARGUMENT=3 INVALID_ARGUMENT value
         * @property {number} DEADLINE_EXCEEDED=4 DEADLINE_EXCEEDED value
         * @property {number} NOT_FOUND=5 NOT_FOUND value
         * @property {number} ALREADY_EXISTS=6 ALREADY_EXISTS value
         * @property {number} PERMISSION_DENIED=7 PERMISSION_DENIED value
         * @property {number} UNAUTHENTICATED=16 UNAUTHENTICATED value
         * @property {number} RESOURCE_EXHAUSTED=8 RESOURCE_EXHAUSTED value
         * @property {number} FAILED_PRECONDITION=9 FAILED_PRECONDITION value
         * @property {number} ABORTED=10 ABORTED value
         * @property {number} OUT_OF_RANGE=11 OUT_OF_RANGE value
         * @property {number} UNIMPLEMENTED=12 UNIMPLEMENTED value
         * @property {number} INTERNAL=13 INTERNAL value
         * @property {number} UNAVAILABLE=14 UNAVAILABLE value
         * @property {number} DATA_LOSS=15 DATA_LOSS value
         */
        rpc.Code = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "CANCELLED"] = 1;
            values[valuesById[2] = "UNKNOWN"] = 2;
            values[valuesById[3] = "INVALID_ARGUMENT"] = 3;
            values[valuesById[4] = "DEADLINE_EXCEEDED"] = 4;
            values[valuesById[5] = "NOT_FOUND"] = 5;
            values[valuesById[6] = "ALREADY_EXISTS"] = 6;
            values[valuesById[7] = "PERMISSION_DENIED"] = 7;
            values[valuesById[16] = "UNAUTHENTICATED"] = 16;
            values[valuesById[8] = "RESOURCE_EXHAUSTED"] = 8;
            values[valuesById[9] = "FAILED_PRECONDITION"] = 9;
            values[valuesById[10] = "ABORTED"] = 10;
            values[valuesById[11] = "OUT_OF_RANGE"] = 11;
            values[valuesById[12] = "UNIMPLEMENTED"] = 12;
            values[valuesById[13] = "INTERNAL"] = 13;
            values[valuesById[14] = "UNAVAILABLE"] = 14;
            values[valuesById[15] = "DATA_LOSS"] = 15;
            return values;
        })();

        return rpc;
    })();

    return google;
})();

module.exports = $root;

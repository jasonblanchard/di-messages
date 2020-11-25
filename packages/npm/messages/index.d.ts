import * as $protobuf from "protobufjs";
/** Namespace messages. */
export namespace messages {

    /** Namespace notebook. */
    namespace notebook {

        /** Properties of a NullableTimestamp. */
        interface INullableTimestamp {

            /** NullableTimestamp null */
            "null"?: (google.protobuf.NullValue|null);

            /** NullableTimestamp timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a NullableTimestamp. */
        class NullableTimestamp implements INullableTimestamp {

            /**
             * Constructs a new NullableTimestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.INullableTimestamp);

            /** NullableTimestamp null. */
            public null: google.protobuf.NullValue;

            /** NullableTimestamp timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** NullableTimestamp value. */
            public value?: ("null"|"timestamp");

            /**
             * Creates a new NullableTimestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullableTimestamp instance
             */
            public static create(properties?: messages.notebook.INullableTimestamp): messages.notebook.NullableTimestamp;

            /**
             * Encodes the specified NullableTimestamp message. Does not implicitly {@link messages.notebook.NullableTimestamp.verify|verify} messages.
             * @param message NullableTimestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.INullableTimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullableTimestamp message, length delimited. Does not implicitly {@link messages.notebook.NullableTimestamp.verify|verify} messages.
             * @param message NullableTimestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.INullableTimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullableTimestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NullableTimestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.NullableTimestamp;

            /**
             * Decodes a NullableTimestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NullableTimestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.NullableTimestamp;

            /**
             * Verifies a NullableTimestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullableTimestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullableTimestamp
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.NullableTimestamp;

            /**
             * Creates a plain object from a NullableTimestamp message. Also converts values to other types if specified.
             * @param message NullableTimestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.NullableTimestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullableTimestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Principal. */
        interface IPrincipal {

            /** Principal type */
            type?: (messages.notebook.Principal.Type|null);

            /** Principal id */
            id?: (string|null);
        }

        /** Represents a Principal. */
        class Principal implements IPrincipal {

            /**
             * Constructs a new Principal.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IPrincipal);

            /** Principal type. */
            public type: messages.notebook.Principal.Type;

            /** Principal id. */
            public id: string;

            /**
             * Creates a new Principal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Principal instance
             */
            public static create(properties?: messages.notebook.IPrincipal): messages.notebook.Principal;

            /**
             * Encodes the specified Principal message. Does not implicitly {@link messages.notebook.Principal.verify|verify} messages.
             * @param message Principal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.notebook.Principal.verify|verify} messages.
             * @param message Principal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Principal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.Principal;

            /**
             * Decodes a Principal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.Principal;

            /**
             * Verifies a Principal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Principal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Principal
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.Principal;

            /**
             * Creates a plain object from a Principal message. Also converts values to other types if specified.
             * @param message Principal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.Principal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Principal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Principal {

            /** Type enum. */
            enum Type {
                USER = 0
            }
        }

        /** Properties of a RequestContext. */
        interface IRequestContext {

            /** RequestContext traceId */
            traceId?: (string|null);

            /** RequestContext principal */
            principal?: (messages.notebook.IPrincipal|null);

            /** RequestContext origin */
            origin?: (string|null);
        }

        /** Represents a RequestContext. */
        class RequestContext implements IRequestContext {

            /**
             * Constructs a new RequestContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IRequestContext);

            /** RequestContext traceId. */
            public traceId: string;

            /** RequestContext principal. */
            public principal?: (messages.notebook.IPrincipal|null);

            /** RequestContext origin. */
            public origin: string;

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestContext instance
             */
            public static create(properties?: messages.notebook.IRequestContext): messages.notebook.RequestContext;

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.notebook.RequestContext.verify|verify} messages.
             * @param message RequestContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.notebook.RequestContext.verify|verify} messages.
             * @param message RequestContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.RequestContext;

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.RequestContext;

            /**
             * Verifies a RequestContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestContext
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.RequestContext;

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @param message RequestContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.RequestContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseContext. */
        interface IResponseContext {

            /** ResponseContext traceId */
            traceId?: (string|null);

            /** ResponseContext origin */
            origin?: (string|null);
        }

        /** Represents a ResponseContext. */
        class ResponseContext implements IResponseContext {

            /**
             * Constructs a new ResponseContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IResponseContext);

            /** ResponseContext traceId. */
            public traceId: string;

            /** ResponseContext origin. */
            public origin: string;

            /**
             * Creates a new ResponseContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseContext instance
             */
            public static create(properties?: messages.notebook.IResponseContext): messages.notebook.ResponseContext;

            /**
             * Encodes the specified ResponseContext message. Does not implicitly {@link messages.notebook.ResponseContext.verify|verify} messages.
             * @param message ResponseContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IResponseContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseContext message, length delimited. Does not implicitly {@link messages.notebook.ResponseContext.verify|verify} messages.
             * @param message ResponseContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IResponseContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ResponseContext;

            /**
             * Decodes a ResponseContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ResponseContext;

            /**
             * Verifies a ResponseContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponseContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseContext
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ResponseContext;

            /**
             * Creates a plain object from a ResponseContext message. Also converts values to other types if specified.
             * @param message ResponseContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ResponseContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InfoContext. */
        interface IInfoContext {

            /** InfoContext traceId */
            traceId?: (string|null);

            /** InfoContext origin */
            origin?: (string|null);
        }

        /** Represents an InfoContext. */
        class InfoContext implements IInfoContext {

            /**
             * Constructs a new InfoContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IInfoContext);

            /** InfoContext traceId. */
            public traceId: string;

            /** InfoContext origin. */
            public origin: string;

            /**
             * Creates a new InfoContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoContext instance
             */
            public static create(properties?: messages.notebook.IInfoContext): messages.notebook.InfoContext;

            /**
             * Encodes the specified InfoContext message. Does not implicitly {@link messages.notebook.InfoContext.verify|verify} messages.
             * @param message InfoContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IInfoContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoContext message, length delimited. Does not implicitly {@link messages.notebook.InfoContext.verify|verify} messages.
             * @param message InfoContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IInfoContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.InfoContext;

            /**
             * Decodes an InfoContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.InfoContext;

            /**
             * Verifies an InfoContext message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoContext message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoContext
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.InfoContext;

            /**
             * Creates a plain object from an InfoContext message. Also converts values to other types if specified.
             * @param message InfoContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.InfoContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadEntryRequest. */
        interface IReadEntryRequest {

            /** ReadEntryRequest context */
            context?: (messages.notebook.IRequestContext|null);

            /** ReadEntryRequest payload */
            payload?: (messages.notebook.ReadEntryRequest.IPayload|null);
        }

        /** Represents a ReadEntryRequest. */
        class ReadEntryRequest implements IReadEntryRequest {

            /**
             * Constructs a new ReadEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IReadEntryRequest);

            /** ReadEntryRequest context. */
            public context?: (messages.notebook.IRequestContext|null);

            /** ReadEntryRequest payload. */
            public payload?: (messages.notebook.ReadEntryRequest.IPayload|null);

            /**
             * Creates a new ReadEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadEntryRequest instance
             */
            public static create(properties?: messages.notebook.IReadEntryRequest): messages.notebook.ReadEntryRequest;

            /**
             * Encodes the specified ReadEntryRequest message. Does not implicitly {@link messages.notebook.ReadEntryRequest.verify|verify} messages.
             * @param message ReadEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IReadEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryRequest.verify|verify} messages.
             * @param message ReadEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IReadEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ReadEntryRequest;

            /**
             * Decodes a ReadEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ReadEntryRequest;

            /**
             * Verifies a ReadEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ReadEntryRequest;

            /**
             * Creates a plain object from a ReadEntryRequest message. Also converts values to other types if specified.
             * @param message ReadEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ReadEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ReadEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.ReadEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.ReadEntryRequest.IPayload): messages.notebook.ReadEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ReadEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ReadEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ReadEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ReadEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ReadEntryRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.ReadEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ReadEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ReadEntryResponse. */
        interface IReadEntryResponse {

            /** ReadEntryResponse status */
            status?: (google.rpc.IStatus|null);

            /** ReadEntryResponse context */
            context?: (messages.notebook.IResponseContext|null);

            /** ReadEntryResponse payload */
            payload?: (messages.notebook.ReadEntryResponse.IPayload|null);
        }

        /** Represents a ReadEntryResponse. */
        class ReadEntryResponse implements IReadEntryResponse {

            /**
             * Constructs a new ReadEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IReadEntryResponse);

            /** ReadEntryResponse status. */
            public status?: (google.rpc.IStatus|null);

            /** ReadEntryResponse context. */
            public context?: (messages.notebook.IResponseContext|null);

            /** ReadEntryResponse payload. */
            public payload?: (messages.notebook.ReadEntryResponse.IPayload|null);

            /**
             * Creates a new ReadEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadEntryResponse instance
             */
            public static create(properties?: messages.notebook.IReadEntryResponse): messages.notebook.ReadEntryResponse;

            /**
             * Encodes the specified ReadEntryResponse message. Does not implicitly {@link messages.notebook.ReadEntryResponse.verify|verify} messages.
             * @param message ReadEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IReadEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryResponse.verify|verify} messages.
             * @param message ReadEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IReadEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ReadEntryResponse;

            /**
             * Decodes a ReadEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ReadEntryResponse;

            /**
             * Verifies a ReadEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ReadEntryResponse;

            /**
             * Creates a plain object from a ReadEntryResponse message. Also converts values to other types if specified.
             * @param message ReadEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ReadEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ReadEntryResponse {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);

                /** Payload createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt */
                updatedAt?: (messages.notebook.INullableTimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.ReadEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /** Payload creatorId. */
                public creatorId: string;

                /** Payload createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt. */
                public updatedAt?: (messages.notebook.INullableTimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.ReadEntryResponse.IPayload): messages.notebook.ReadEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ReadEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ReadEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ReadEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ReadEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ReadEntryResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.ReadEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ReadEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a StartNewEntryRequest. */
        interface IStartNewEntryRequest {

            /** StartNewEntryRequest context */
            context?: (messages.notebook.IRequestContext|null);

            /** StartNewEntryRequest payload */
            payload?: (messages.notebook.StartNewEntryRequest.IPayload|null);
        }

        /** Represents a StartNewEntryRequest. */
        class StartNewEntryRequest implements IStartNewEntryRequest {

            /**
             * Constructs a new StartNewEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IStartNewEntryRequest);

            /** StartNewEntryRequest context. */
            public context?: (messages.notebook.IRequestContext|null);

            /** StartNewEntryRequest payload. */
            public payload?: (messages.notebook.StartNewEntryRequest.IPayload|null);

            /**
             * Creates a new StartNewEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartNewEntryRequest instance
             */
            public static create(properties?: messages.notebook.IStartNewEntryRequest): messages.notebook.StartNewEntryRequest;

            /**
             * Encodes the specified StartNewEntryRequest message. Does not implicitly {@link messages.notebook.StartNewEntryRequest.verify|verify} messages.
             * @param message StartNewEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IStartNewEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartNewEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryRequest.verify|verify} messages.
             * @param message StartNewEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IStartNewEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartNewEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartNewEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.StartNewEntryRequest;

            /**
             * Decodes a StartNewEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartNewEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.StartNewEntryRequest;

            /**
             * Verifies a StartNewEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartNewEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartNewEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.StartNewEntryRequest;

            /**
             * Creates a plain object from a StartNewEntryRequest message. Also converts values to other types if specified.
             * @param message StartNewEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.StartNewEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartNewEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace StartNewEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload creatorId */
                creatorId?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.StartNewEntryRequest.IPayload);

                /** Payload creatorId. */
                public creatorId: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.StartNewEntryRequest.IPayload): messages.notebook.StartNewEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.StartNewEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.StartNewEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.StartNewEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.StartNewEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.StartNewEntryRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.StartNewEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.StartNewEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a StartNewEntryResponse. */
        interface IStartNewEntryResponse {

            /** StartNewEntryResponse status */
            status?: (google.rpc.IStatus|null);

            /** StartNewEntryResponse context */
            context?: (messages.notebook.IResponseContext|null);

            /** StartNewEntryResponse payload */
            payload?: (messages.notebook.StartNewEntryResponse.IPayload|null);
        }

        /** Represents a StartNewEntryResponse. */
        class StartNewEntryResponse implements IStartNewEntryResponse {

            /**
             * Constructs a new StartNewEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IStartNewEntryResponse);

            /** StartNewEntryResponse status. */
            public status?: (google.rpc.IStatus|null);

            /** StartNewEntryResponse context. */
            public context?: (messages.notebook.IResponseContext|null);

            /** StartNewEntryResponse payload. */
            public payload?: (messages.notebook.StartNewEntryResponse.IPayload|null);

            /**
             * Creates a new StartNewEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartNewEntryResponse instance
             */
            public static create(properties?: messages.notebook.IStartNewEntryResponse): messages.notebook.StartNewEntryResponse;

            /**
             * Encodes the specified StartNewEntryResponse message. Does not implicitly {@link messages.notebook.StartNewEntryResponse.verify|verify} messages.
             * @param message StartNewEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IStartNewEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartNewEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryResponse.verify|verify} messages.
             * @param message StartNewEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IStartNewEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartNewEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartNewEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.StartNewEntryResponse;

            /**
             * Decodes a StartNewEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartNewEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.StartNewEntryResponse;

            /**
             * Verifies a StartNewEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartNewEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartNewEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.StartNewEntryResponse;

            /**
             * Creates a plain object from a StartNewEntryResponse message. Also converts values to other types if specified.
             * @param message StartNewEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.StartNewEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartNewEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace StartNewEntryResponse {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.StartNewEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.StartNewEntryResponse.IPayload): messages.notebook.StartNewEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.StartNewEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.StartNewEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.StartNewEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.StartNewEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.StartNewEntryResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.StartNewEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.StartNewEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ChangeEntryRequest. */
        interface IChangeEntryRequest {

            /** ChangeEntryRequest context */
            context?: (messages.notebook.IRequestContext|null);

            /** ChangeEntryRequest payload */
            payload?: (messages.notebook.ChangeEntryRequest.IPayload|null);
        }

        /** Represents a ChangeEntryRequest. */
        class ChangeEntryRequest implements IChangeEntryRequest {

            /**
             * Constructs a new ChangeEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IChangeEntryRequest);

            /** ChangeEntryRequest context. */
            public context?: (messages.notebook.IRequestContext|null);

            /** ChangeEntryRequest payload. */
            public payload?: (messages.notebook.ChangeEntryRequest.IPayload|null);

            /**
             * Creates a new ChangeEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangeEntryRequest instance
             */
            public static create(properties?: messages.notebook.IChangeEntryRequest): messages.notebook.ChangeEntryRequest;

            /**
             * Encodes the specified ChangeEntryRequest message. Does not implicitly {@link messages.notebook.ChangeEntryRequest.verify|verify} messages.
             * @param message ChangeEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IChangeEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangeEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryRequest.verify|verify} messages.
             * @param message ChangeEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IChangeEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangeEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangeEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ChangeEntryRequest;

            /**
             * Decodes a ChangeEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangeEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ChangeEntryRequest;

            /**
             * Verifies a ChangeEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangeEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangeEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ChangeEntryRequest;

            /**
             * Creates a plain object from a ChangeEntryRequest message. Also converts values to other types if specified.
             * @param message ChangeEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ChangeEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangeEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ChangeEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.ChangeEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.ChangeEntryRequest.IPayload): messages.notebook.ChangeEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ChangeEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ChangeEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ChangeEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ChangeEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ChangeEntryRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.ChangeEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ChangeEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ChangeEntryResponse. */
        interface IChangeEntryResponse {

            /** ChangeEntryResponse status */
            status?: (google.rpc.IStatus|null);

            /** ChangeEntryResponse context */
            context?: (messages.notebook.IResponseContext|null);

            /** ChangeEntryResponse payload */
            payload?: (messages.notebook.ChangeEntryResponse.IPayload|null);
        }

        /** Represents a ChangeEntryResponse. */
        class ChangeEntryResponse implements IChangeEntryResponse {

            /**
             * Constructs a new ChangeEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IChangeEntryResponse);

            /** ChangeEntryResponse status. */
            public status?: (google.rpc.IStatus|null);

            /** ChangeEntryResponse context. */
            public context?: (messages.notebook.IResponseContext|null);

            /** ChangeEntryResponse payload. */
            public payload?: (messages.notebook.ChangeEntryResponse.IPayload|null);

            /**
             * Creates a new ChangeEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangeEntryResponse instance
             */
            public static create(properties?: messages.notebook.IChangeEntryResponse): messages.notebook.ChangeEntryResponse;

            /**
             * Encodes the specified ChangeEntryResponse message. Does not implicitly {@link messages.notebook.ChangeEntryResponse.verify|verify} messages.
             * @param message ChangeEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IChangeEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangeEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryResponse.verify|verify} messages.
             * @param message ChangeEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IChangeEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangeEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangeEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ChangeEntryResponse;

            /**
             * Decodes a ChangeEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangeEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ChangeEntryResponse;

            /**
             * Verifies a ChangeEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangeEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangeEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ChangeEntryResponse;

            /**
             * Creates a plain object from a ChangeEntryResponse message. Also converts values to other types if specified.
             * @param message ChangeEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ChangeEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangeEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ChangeEntryResponse {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);

                /** Payload updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.ChangeEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /** Payload updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.ChangeEntryResponse.IPayload): messages.notebook.ChangeEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ChangeEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ChangeEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ChangeEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ChangeEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ChangeEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ChangeEntryResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.ChangeEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ChangeEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ListEntriesRequest. */
        interface IListEntriesRequest {

            /** ListEntriesRequest context */
            context?: (messages.notebook.IRequestContext|null);

            /** ListEntriesRequest payload */
            payload?: (messages.notebook.ListEntriesRequest.IPayload|null);
        }

        /** Represents a ListEntriesRequest. */
        class ListEntriesRequest implements IListEntriesRequest {

            /**
             * Constructs a new ListEntriesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IListEntriesRequest);

            /** ListEntriesRequest context. */
            public context?: (messages.notebook.IRequestContext|null);

            /** ListEntriesRequest payload. */
            public payload?: (messages.notebook.ListEntriesRequest.IPayload|null);

            /**
             * Creates a new ListEntriesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEntriesRequest instance
             */
            public static create(properties?: messages.notebook.IListEntriesRequest): messages.notebook.ListEntriesRequest;

            /**
             * Encodes the specified ListEntriesRequest message. Does not implicitly {@link messages.notebook.ListEntriesRequest.verify|verify} messages.
             * @param message ListEntriesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IListEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEntriesRequest message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesRequest.verify|verify} messages.
             * @param message ListEntriesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IListEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ListEntriesRequest;

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ListEntriesRequest;

            /**
             * Verifies a ListEntriesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListEntriesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListEntriesRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ListEntriesRequest;

            /**
             * Creates a plain object from a ListEntriesRequest message. Also converts values to other types if specified.
             * @param message ListEntriesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ListEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListEntriesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ListEntriesRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload first */
                first?: (number|null);

                /** Payload after */
                after?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.ListEntriesRequest.IPayload);

                /** Payload first. */
                public first: number;

                /** Payload after. */
                public after: string;

                /** Payload creatorId. */
                public creatorId: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.ListEntriesRequest.IPayload): messages.notebook.ListEntriesRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ListEntriesRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ListEntriesRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ListEntriesRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ListEntriesRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ListEntriesRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.ListEntriesRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ListEntriesRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ListEntriesResponse. */
        interface IListEntriesResponse {

            /** ListEntriesResponse status */
            status?: (google.rpc.IStatus|null);

            /** ListEntriesResponse context */
            context?: (messages.notebook.IResponseContext|null);

            /** ListEntriesResponse payload */
            payload?: (messages.notebook.ListEntriesResponse.IPayload|null);
        }

        /** Represents a ListEntriesResponse. */
        class ListEntriesResponse implements IListEntriesResponse {

            /**
             * Constructs a new ListEntriesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IListEntriesResponse);

            /** ListEntriesResponse status. */
            public status?: (google.rpc.IStatus|null);

            /** ListEntriesResponse context. */
            public context?: (messages.notebook.IResponseContext|null);

            /** ListEntriesResponse payload. */
            public payload?: (messages.notebook.ListEntriesResponse.IPayload|null);

            /**
             * Creates a new ListEntriesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEntriesResponse instance
             */
            public static create(properties?: messages.notebook.IListEntriesResponse): messages.notebook.ListEntriesResponse;

            /**
             * Encodes the specified ListEntriesResponse message. Does not implicitly {@link messages.notebook.ListEntriesResponse.verify|verify} messages.
             * @param message ListEntriesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IListEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEntriesResponse message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.verify|verify} messages.
             * @param message ListEntriesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IListEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ListEntriesResponse;

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ListEntriesResponse;

            /**
             * Verifies a ListEntriesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListEntriesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListEntriesResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ListEntriesResponse;

            /**
             * Creates a plain object from a ListEntriesResponse message. Also converts values to other types if specified.
             * @param message ListEntriesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ListEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListEntriesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ListEntriesResponse {

            /** Properties of a PageInfo. */
            interface IPageInfo {

                /** PageInfo totalCount */
                totalCount?: (number|null);

                /** PageInfo hasNextPage */
                hasNextPage?: (boolean|null);

                /** PageInfo startCursor */
                startCursor?: (string|null);

                /** PageInfo endCursor */
                endCursor?: (string|null);
            }

            /** Represents a PageInfo. */
            class PageInfo implements IPageInfo {

                /**
                 * Constructs a new PageInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.ListEntriesResponse.IPageInfo);

                /** PageInfo totalCount. */
                public totalCount: number;

                /** PageInfo hasNextPage. */
                public hasNextPage: boolean;

                /** PageInfo startCursor. */
                public startCursor: string;

                /** PageInfo endCursor. */
                public endCursor: string;

                /**
                 * Creates a new PageInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PageInfo instance
                 */
                public static create(properties?: messages.notebook.ListEntriesResponse.IPageInfo): messages.notebook.ListEntriesResponse.PageInfo;

                /**
                 * Encodes the specified PageInfo message. Does not implicitly {@link messages.notebook.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @param message PageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ListEntriesResponse.IPageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @param message PageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ListEntriesResponse.IPageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ListEntriesResponse.PageInfo;

                /**
                 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ListEntriesResponse.PageInfo;

                /**
                 * Verifies a PageInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PageInfo
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.ListEntriesResponse.PageInfo;

                /**
                 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
                 * @param message PageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ListEntriesResponse.PageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Entry. */
            interface IEntry {

                /** Entry id */
                id?: (string|null);

                /** Entry text */
                text?: (string|null);

                /** Entry creatorId */
                creatorId?: (string|null);

                /** Entry createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Entry updatedAt */
                updatedAt?: (messages.notebook.INullableTimestamp|null);
            }

            /** Represents an Entry. */
            class Entry implements IEntry {

                /**
                 * Constructs a new Entry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.ListEntriesResponse.IEntry);

                /** Entry id. */
                public id: string;

                /** Entry text. */
                public text: string;

                /** Entry creatorId. */
                public creatorId: string;

                /** Entry createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Entry updatedAt. */
                public updatedAt?: (messages.notebook.INullableTimestamp|null);

                /**
                 * Creates a new Entry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entry instance
                 */
                public static create(properties?: messages.notebook.ListEntriesResponse.IEntry): messages.notebook.ListEntriesResponse.Entry;

                /**
                 * Encodes the specified Entry message. Does not implicitly {@link messages.notebook.ListEntriesResponse.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ListEntriesResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entry message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ListEntriesResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ListEntriesResponse.Entry;

                /**
                 * Decodes an Entry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ListEntriesResponse.Entry;

                /**
                 * Verifies an Entry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entry
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.ListEntriesResponse.Entry;

                /**
                 * Creates a plain object from an Entry message. Also converts values to other types if specified.
                 * @param message Entry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ListEntriesResponse.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload entries */
                entries?: (messages.notebook.ListEntriesResponse.IEntry[]|null);

                /** Payload pageInfo */
                pageInfo?: (messages.notebook.ListEntriesResponse.IPageInfo|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.ListEntriesResponse.IPayload);

                /** Payload entries. */
                public entries: messages.notebook.ListEntriesResponse.IEntry[];

                /** Payload pageInfo. */
                public pageInfo?: (messages.notebook.ListEntriesResponse.IPageInfo|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.ListEntriesResponse.IPayload): messages.notebook.ListEntriesResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ListEntriesResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ListEntriesResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ListEntriesResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ListEntriesResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ListEntriesResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ListEntriesResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.ListEntriesResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ListEntriesResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a DiscardEntryRequest. */
        interface IDiscardEntryRequest {

            /** DiscardEntryRequest context */
            context?: (messages.notebook.IRequestContext|null);

            /** DiscardEntryRequest payload */
            payload?: (messages.notebook.DiscardEntryRequest.IPayload|null);
        }

        /** Represents a DiscardEntryRequest. */
        class DiscardEntryRequest implements IDiscardEntryRequest {

            /**
             * Constructs a new DiscardEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IDiscardEntryRequest);

            /** DiscardEntryRequest context. */
            public context?: (messages.notebook.IRequestContext|null);

            /** DiscardEntryRequest payload. */
            public payload?: (messages.notebook.DiscardEntryRequest.IPayload|null);

            /**
             * Creates a new DiscardEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscardEntryRequest instance
             */
            public static create(properties?: messages.notebook.IDiscardEntryRequest): messages.notebook.DiscardEntryRequest;

            /**
             * Encodes the specified DiscardEntryRequest message. Does not implicitly {@link messages.notebook.DiscardEntryRequest.verify|verify} messages.
             * @param message DiscardEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IDiscardEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscardEntryRequest message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryRequest.verify|verify} messages.
             * @param message DiscardEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IDiscardEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscardEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscardEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.DiscardEntryRequest;

            /**
             * Decodes a DiscardEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscardEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.DiscardEntryRequest;

            /**
             * Verifies a DiscardEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscardEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscardEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.DiscardEntryRequest;

            /**
             * Creates a plain object from a DiscardEntryRequest message. Also converts values to other types if specified.
             * @param message DiscardEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.DiscardEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscardEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DiscardEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.DiscardEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.DiscardEntryRequest.IPayload): messages.notebook.DiscardEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.DiscardEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.DiscardEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.DiscardEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.DiscardEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.DiscardEntryRequest.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.DiscardEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.DiscardEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a DiscardEntryResponse. */
        interface IDiscardEntryResponse {

            /** DiscardEntryResponse status */
            status?: (google.rpc.IStatus|null);

            /** DiscardEntryResponse context */
            context?: (messages.notebook.IResponseContext|null);
        }

        /** Represents a DiscardEntryResponse. */
        class DiscardEntryResponse implements IDiscardEntryResponse {

            /**
             * Constructs a new DiscardEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IDiscardEntryResponse);

            /** DiscardEntryResponse status. */
            public status?: (google.rpc.IStatus|null);

            /** DiscardEntryResponse context. */
            public context?: (messages.notebook.IResponseContext|null);

            /**
             * Creates a new DiscardEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscardEntryResponse instance
             */
            public static create(properties?: messages.notebook.IDiscardEntryResponse): messages.notebook.DiscardEntryResponse;

            /**
             * Encodes the specified DiscardEntryResponse message. Does not implicitly {@link messages.notebook.DiscardEntryResponse.verify|verify} messages.
             * @param message DiscardEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IDiscardEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscardEntryResponse message, length delimited. Does not implicitly {@link messages.notebook.DiscardEntryResponse.verify|verify} messages.
             * @param message DiscardEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IDiscardEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscardEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscardEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.DiscardEntryResponse;

            /**
             * Decodes a DiscardEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscardEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.DiscardEntryResponse;

            /**
             * Verifies a DiscardEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscardEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscardEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.DiscardEntryResponse;

            /**
             * Creates a plain object from a DiscardEntryResponse message. Also converts values to other types if specified.
             * @param message DiscardEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.DiscardEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscardEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InfoEntryCreated. */
        interface IInfoEntryCreated {

            /** InfoEntryCreated context */
            context?: (messages.notebook.IInfoContext|null);

            /** InfoEntryCreated payload */
            payload?: (messages.notebook.InfoEntryCreated.IPayload|null);
        }

        /** Represents an InfoEntryCreated. */
        class InfoEntryCreated implements IInfoEntryCreated {

            /**
             * Constructs a new InfoEntryCreated.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IInfoEntryCreated);

            /** InfoEntryCreated context. */
            public context?: (messages.notebook.IInfoContext|null);

            /** InfoEntryCreated payload. */
            public payload?: (messages.notebook.InfoEntryCreated.IPayload|null);

            /**
             * Creates a new InfoEntryCreated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryCreated instance
             */
            public static create(properties?: messages.notebook.IInfoEntryCreated): messages.notebook.InfoEntryCreated;

            /**
             * Encodes the specified InfoEntryCreated message. Does not implicitly {@link messages.notebook.InfoEntryCreated.verify|verify} messages.
             * @param message InfoEntryCreated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IInfoEntryCreated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryCreated message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryCreated.verify|verify} messages.
             * @param message InfoEntryCreated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IInfoEntryCreated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.InfoEntryCreated;

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.InfoEntryCreated;

            /**
             * Verifies an InfoEntryCreated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoEntryCreated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoEntryCreated
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.InfoEntryCreated;

            /**
             * Creates a plain object from an InfoEntryCreated message. Also converts values to other types if specified.
             * @param message InfoEntryCreated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.InfoEntryCreated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoEntryCreated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace InfoEntryCreated {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);

                /** Payload createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.InfoEntryCreated.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /** Payload creatorId. */
                public creatorId: string;

                /** Payload createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.InfoEntryCreated.IPayload): messages.notebook.InfoEntryCreated.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryCreated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.InfoEntryCreated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryCreated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.InfoEntryCreated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.InfoEntryCreated.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.InfoEntryCreated.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.InfoEntryCreated.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.InfoEntryCreated.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an InfoEntryUpdated. */
        interface IInfoEntryUpdated {

            /** InfoEntryUpdated context */
            context?: (messages.notebook.IInfoContext|null);

            /** InfoEntryUpdated payload */
            payload?: (messages.notebook.InfoEntryUpdated.IPayload|null);
        }

        /** Represents an InfoEntryUpdated. */
        class InfoEntryUpdated implements IInfoEntryUpdated {

            /**
             * Constructs a new InfoEntryUpdated.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IInfoEntryUpdated);

            /** InfoEntryUpdated context. */
            public context?: (messages.notebook.IInfoContext|null);

            /** InfoEntryUpdated payload. */
            public payload?: (messages.notebook.InfoEntryUpdated.IPayload|null);

            /**
             * Creates a new InfoEntryUpdated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryUpdated instance
             */
            public static create(properties?: messages.notebook.IInfoEntryUpdated): messages.notebook.InfoEntryUpdated;

            /**
             * Encodes the specified InfoEntryUpdated message. Does not implicitly {@link messages.notebook.InfoEntryUpdated.verify|verify} messages.
             * @param message InfoEntryUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IInfoEntryUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryUpdated message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryUpdated.verify|verify} messages.
             * @param message InfoEntryUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IInfoEntryUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.InfoEntryUpdated;

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.InfoEntryUpdated;

            /**
             * Verifies an InfoEntryUpdated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoEntryUpdated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoEntryUpdated
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.InfoEntryUpdated;

            /**
             * Creates a plain object from an InfoEntryUpdated message. Also converts values to other types if specified.
             * @param message InfoEntryUpdated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.InfoEntryUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoEntryUpdated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace InfoEntryUpdated {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);

                /** Payload createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.InfoEntryUpdated.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /** Payload creatorId. */
                public creatorId: string;

                /** Payload createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.InfoEntryUpdated.IPayload): messages.notebook.InfoEntryUpdated.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.InfoEntryUpdated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.InfoEntryUpdated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.InfoEntryUpdated.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.InfoEntryUpdated.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.InfoEntryUpdated.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.InfoEntryUpdated.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an InfoEntryDeleted. */
        interface IInfoEntryDeleted {

            /** InfoEntryDeleted context */
            context?: (messages.notebook.IInfoContext|null);

            /** InfoEntryDeleted payload */
            payload?: (messages.notebook.InfoEntryDeleted.IPayload|null);
        }

        /** Represents an InfoEntryDeleted. */
        class InfoEntryDeleted implements IInfoEntryDeleted {

            /**
             * Constructs a new InfoEntryDeleted.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IInfoEntryDeleted);

            /** InfoEntryDeleted context. */
            public context?: (messages.notebook.IInfoContext|null);

            /** InfoEntryDeleted payload. */
            public payload?: (messages.notebook.InfoEntryDeleted.IPayload|null);

            /**
             * Creates a new InfoEntryDeleted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryDeleted instance
             */
            public static create(properties?: messages.notebook.IInfoEntryDeleted): messages.notebook.InfoEntryDeleted;

            /**
             * Encodes the specified InfoEntryDeleted message. Does not implicitly {@link messages.notebook.InfoEntryDeleted.verify|verify} messages.
             * @param message InfoEntryDeleted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IInfoEntryDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryDeleted message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryDeleted.verify|verify} messages.
             * @param message InfoEntryDeleted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IInfoEntryDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.InfoEntryDeleted;

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.InfoEntryDeleted;

            /**
             * Verifies an InfoEntryDeleted message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoEntryDeleted message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoEntryDeleted
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.InfoEntryDeleted;

            /**
             * Creates a plain object from an InfoEntryDeleted message. Also converts values to other types if specified.
             * @param message InfoEntryDeleted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.InfoEntryDeleted, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoEntryDeleted to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace InfoEntryDeleted {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);

                /** Payload creatorId */
                creatorId?: (string|null);

                /** Payload createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt */
                updatedAt?: (messages.notebook.INullableTimestamp|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.InfoEntryDeleted.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /** Payload creatorId. */
                public creatorId: string;

                /** Payload createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Payload updatedAt. */
                public updatedAt?: (messages.notebook.INullableTimestamp|null);

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.InfoEntryDeleted.IPayload): messages.notebook.InfoEntryDeleted.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.InfoEntryDeleted.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.InfoEntryDeleted.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.InfoEntryDeleted.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.InfoEntryDeleted.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.InfoEntryDeleted.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.InfoEntryDeleted.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Code enum. */
        enum Code {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            UNAUTHENTICATED = 16,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15
        }
    }
}

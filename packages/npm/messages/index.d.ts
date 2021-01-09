import * as $protobuf from "protobufjs";
/** Namespace messages. */
export namespace messages {

    /** Namespace entry. */
    namespace entry {

        /** Properties of an Error. */
        interface IError {

            /** Error code */
            code?: (messages.entry.Error.Code|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IError);

            /** Error code. */
            public code: messages.entry.Error.Code;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: messages.entry.IError): messages.entry.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Error {

            /** Code enum. */
            enum Code {
                UNKNOWN = 0,
                NOT_FOUND = 1,
                VALIDATION_FAILED = 2
            }
        }

        /** Properties of a Principal. */
        interface IPrincipal {

            /** Principal type */
            type?: (messages.entry.Principal.Type|null);

            /** Principal id */
            id?: (string|null);
        }

        /** Represents a Principal. */
        class Principal implements IPrincipal {

            /**
             * Constructs a new Principal.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IPrincipal);

            /** Principal type. */
            public type: messages.entry.Principal.Type;

            /** Principal id. */
            public id: string;

            /**
             * Creates a new Principal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Principal instance
             */
            public static create(properties?: messages.entry.IPrincipal): messages.entry.Principal;

            /**
             * Encodes the specified Principal message. Does not implicitly {@link messages.entry.Principal.verify|verify} messages.
             * @param message Principal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.entry.Principal.verify|verify} messages.
             * @param message Principal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Principal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.Principal;

            /**
             * Decodes a Principal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.Principal;

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
            public static fromObject(object: { [k: string]: any }): messages.entry.Principal;

            /**
             * Creates a plain object from a Principal message. Also converts values to other types if specified.
             * @param message Principal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.Principal, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            principal?: (messages.entry.IPrincipal|null);
        }

        /** Represents a RequestContext. */
        class RequestContext implements IRequestContext {

            /**
             * Constructs a new RequestContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IRequestContext);

            /** RequestContext traceId. */
            public traceId: string;

            /** RequestContext principal. */
            public principal?: (messages.entry.IPrincipal|null);

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestContext instance
             */
            public static create(properties?: messages.entry.IRequestContext): messages.entry.RequestContext;

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.entry.RequestContext.verify|verify} messages.
             * @param message RequestContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.entry.RequestContext.verify|verify} messages.
             * @param message RequestContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.RequestContext;

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.RequestContext;

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
            public static fromObject(object: { [k: string]: any }): messages.entry.RequestContext;

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @param message RequestContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.RequestContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetEntryRequest. */
        interface IGetEntryRequest {

            /** GetEntryRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** GetEntryRequest payload */
            payload?: (messages.entry.GetEntryRequest.IPayload|null);
        }

        /** Represents a GetEntryRequest. */
        class GetEntryRequest implements IGetEntryRequest {

            /**
             * Constructs a new GetEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IGetEntryRequest);

            /** GetEntryRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** GetEntryRequest payload. */
            public payload?: (messages.entry.GetEntryRequest.IPayload|null);

            /**
             * Creates a new GetEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetEntryRequest instance
             */
            public static create(properties?: messages.entry.IGetEntryRequest): messages.entry.GetEntryRequest;

            /**
             * Encodes the specified GetEntryRequest message. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @param message GetEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IGetEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetEntryRequest message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @param message GetEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IGetEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryRequest;

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryRequest;

            /**
             * Verifies a GetEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryRequest;

            /**
             * Creates a plain object from a GetEntryRequest message. Also converts values to other types if specified.
             * @param message GetEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.GetEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetEntryRequest {

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
                constructor(properties?: messages.entry.GetEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.GetEntryRequest.IPayload): messages.entry.GetEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.GetEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.GetEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryRequest.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.GetEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GetEntryResponse. */
        interface IGetEntryResponse {

            /** GetEntryResponse payload */
            payload?: (messages.entry.GetEntryResponse.IPayload|null);

            /** GetEntryResponse error */
            error?: (messages.entry.IError|null);

            /** GetEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents a GetEntryResponse. */
        class GetEntryResponse implements IGetEntryResponse {

            /**
             * Constructs a new GetEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IGetEntryResponse);

            /** GetEntryResponse payload. */
            public payload?: (messages.entry.GetEntryResponse.IPayload|null);

            /** GetEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** GetEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new GetEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetEntryResponse instance
             */
            public static create(properties?: messages.entry.IGetEntryResponse): messages.entry.GetEntryResponse;

            /**
             * Encodes the specified GetEntryResponse message. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @param message GetEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IGetEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetEntryResponse message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @param message GetEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IGetEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryResponse;

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryResponse;

            /**
             * Verifies a GetEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryResponse;

            /**
             * Creates a plain object from a GetEntryResponse message. Also converts values to other types if specified.
             * @param message GetEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.GetEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetEntryResponse {

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
                constructor(properties?: messages.entry.GetEntryResponse.IPayload);

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
                public static create(properties?: messages.entry.GetEntryResponse.IPayload): messages.entry.GetEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.GetEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.GetEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryResponse.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.GetEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a CreateEntryRequest. */
        interface ICreateEntryRequest {

            /** CreateEntryRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** CreateEntryRequest payload */
            payload?: (messages.entry.CreateEntryRequest.IPayload|null);
        }

        /** Represents a CreateEntryRequest. */
        class CreateEntryRequest implements ICreateEntryRequest {

            /**
             * Constructs a new CreateEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.ICreateEntryRequest);

            /** CreateEntryRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** CreateEntryRequest payload. */
            public payload?: (messages.entry.CreateEntryRequest.IPayload|null);

            /**
             * Creates a new CreateEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateEntryRequest instance
             */
            public static create(properties?: messages.entry.ICreateEntryRequest): messages.entry.CreateEntryRequest;

            /**
             * Encodes the specified CreateEntryRequest message. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @param message CreateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.ICreateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @param message CreateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.ICreateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryRequest;

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryRequest;

            /**
             * Verifies a CreateEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryRequest;

            /**
             * Creates a plain object from a CreateEntryRequest message. Also converts values to other types if specified.
             * @param message CreateEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.CreateEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CreateEntryRequest {

            /** Properties of a Payload. */
            interface IPayload {

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
                constructor(properties?: messages.entry.CreateEntryRequest.IPayload);

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
                public static create(properties?: messages.entry.CreateEntryRequest.IPayload): messages.entry.CreateEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.CreateEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.CreateEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryRequest.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.CreateEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a CreateEntryResponse. */
        interface ICreateEntryResponse {

            /** CreateEntryResponse payload */
            payload?: (messages.entry.CreateEntryResponse.IPayload|null);

            /** CreateEntryResponse error */
            error?: (messages.entry.IError|null);

            /** CreateEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents a CreateEntryResponse. */
        class CreateEntryResponse implements ICreateEntryResponse {

            /**
             * Constructs a new CreateEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.ICreateEntryResponse);

            /** CreateEntryResponse payload. */
            public payload?: (messages.entry.CreateEntryResponse.IPayload|null);

            /** CreateEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** CreateEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new CreateEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateEntryResponse instance
             */
            public static create(properties?: messages.entry.ICreateEntryResponse): messages.entry.CreateEntryResponse;

            /**
             * Encodes the specified CreateEntryResponse message. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @param message CreateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.ICreateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @param message CreateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.ICreateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryResponse;

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryResponse;

            /**
             * Verifies a CreateEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryResponse;

            /**
             * Creates a plain object from a CreateEntryResponse message. Also converts values to other types if specified.
             * @param message CreateEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.CreateEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CreateEntryResponse {

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
                constructor(properties?: messages.entry.CreateEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.CreateEntryResponse.IPayload): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.CreateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.CreateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryResponse.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.CreateEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an UpdateEntryRequest. */
        interface IUpdateEntryRequest {

            /** UpdateEntryRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** UpdateEntryRequest payload */
            payload?: (messages.entry.UpdateEntryRequest.IPayload|null);
        }

        /** Represents an UpdateEntryRequest. */
        class UpdateEntryRequest implements IUpdateEntryRequest {

            /**
             * Constructs a new UpdateEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IUpdateEntryRequest);

            /** UpdateEntryRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** UpdateEntryRequest payload. */
            public payload?: (messages.entry.UpdateEntryRequest.IPayload|null);

            /**
             * Creates a new UpdateEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEntryRequest instance
             */
            public static create(properties?: messages.entry.IUpdateEntryRequest): messages.entry.UpdateEntryRequest;

            /**
             * Encodes the specified UpdateEntryRequest message. Does not implicitly {@link messages.entry.UpdateEntryRequest.verify|verify} messages.
             * @param message UpdateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IUpdateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryRequest.verify|verify} messages.
             * @param message UpdateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IUpdateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.UpdateEntryRequest;

            /**
             * Decodes an UpdateEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.UpdateEntryRequest;

            /**
             * Verifies an UpdateEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.UpdateEntryRequest;

            /**
             * Creates a plain object from an UpdateEntryRequest message. Also converts values to other types if specified.
             * @param message UpdateEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.UpdateEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UpdateEntryRequest {

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
                constructor(properties?: messages.entry.UpdateEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.UpdateEntryRequest.IPayload): messages.entry.UpdateEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.UpdateEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.UpdateEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.UpdateEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.UpdateEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.UpdateEntryRequest.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.UpdateEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.UpdateEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an UpdateEntryResponse. */
        interface IUpdateEntryResponse {

            /** UpdateEntryResponse payload */
            payload?: (messages.entry.UpdateEntryResponse.IPayload|null);

            /** UpdateEntryResponse error */
            error?: (messages.entry.IError|null);

            /** UpdateEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents an UpdateEntryResponse. */
        class UpdateEntryResponse implements IUpdateEntryResponse {

            /**
             * Constructs a new UpdateEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IUpdateEntryResponse);

            /** UpdateEntryResponse payload. */
            public payload?: (messages.entry.UpdateEntryResponse.IPayload|null);

            /** UpdateEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** UpdateEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new UpdateEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEntryResponse instance
             */
            public static create(properties?: messages.entry.IUpdateEntryResponse): messages.entry.UpdateEntryResponse;

            /**
             * Encodes the specified UpdateEntryResponse message. Does not implicitly {@link messages.entry.UpdateEntryResponse.verify|verify} messages.
             * @param message UpdateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IUpdateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryResponse.verify|verify} messages.
             * @param message UpdateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IUpdateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.UpdateEntryResponse;

            /**
             * Decodes an UpdateEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.UpdateEntryResponse;

            /**
             * Verifies an UpdateEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.UpdateEntryResponse;

            /**
             * Creates a plain object from an UpdateEntryResponse message. Also converts values to other types if specified.
             * @param message UpdateEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.UpdateEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UpdateEntryResponse {

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
                constructor(properties?: messages.entry.UpdateEntryResponse.IPayload);

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
                public static create(properties?: messages.entry.UpdateEntryResponse.IPayload): messages.entry.UpdateEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.UpdateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.UpdateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.UpdateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.UpdateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.UpdateEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.UpdateEntryResponse.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.UpdateEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.UpdateEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            context?: (messages.entry.IRequestContext|null);

            /** ListEntriesRequest payload */
            payload?: (messages.entry.ListEntriesRequest.IPayload|null);
        }

        /** Represents a ListEntriesRequest. */
        class ListEntriesRequest implements IListEntriesRequest {

            /**
             * Constructs a new ListEntriesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IListEntriesRequest);

            /** ListEntriesRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** ListEntriesRequest payload. */
            public payload?: (messages.entry.ListEntriesRequest.IPayload|null);

            /**
             * Creates a new ListEntriesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEntriesRequest instance
             */
            public static create(properties?: messages.entry.IListEntriesRequest): messages.entry.ListEntriesRequest;

            /**
             * Encodes the specified ListEntriesRequest message. Does not implicitly {@link messages.entry.ListEntriesRequest.verify|verify} messages.
             * @param message ListEntriesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IListEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEntriesRequest message, length delimited. Does not implicitly {@link messages.entry.ListEntriesRequest.verify|verify} messages.
             * @param message ListEntriesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IListEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesRequest;

            /**
             * Decodes a ListEntriesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEntriesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesRequest;

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
            public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesRequest;

            /**
             * Creates a plain object from a ListEntriesRequest message. Also converts values to other types if specified.
             * @param message ListEntriesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.ListEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: messages.entry.ListEntriesRequest.IPayload);

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
                public static create(properties?: messages.entry.ListEntriesRequest.IPayload): messages.entry.ListEntriesRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.ListEntriesRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.ListEntriesRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.ListEntriesRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.ListEntriesRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesRequest.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.ListEntriesRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ListEntriesResponse. */
        interface IListEntriesResponse {

            /** ListEntriesResponse payload */
            payload?: (messages.entry.ListEntriesResponse.IEntity[]|null);

            /** ListEntriesResponse error */
            error?: (messages.entry.IError|null);

            /** ListEntriesResponse traceId */
            traceId?: (string|null);

            /** ListEntriesResponse pageInfo */
            pageInfo?: (messages.entry.ListEntriesResponse.IPageInfo|null);
        }

        /** Represents a ListEntriesResponse. */
        class ListEntriesResponse implements IListEntriesResponse {

            /**
             * Constructs a new ListEntriesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IListEntriesResponse);

            /** ListEntriesResponse payload. */
            public payload: messages.entry.ListEntriesResponse.IEntity[];

            /** ListEntriesResponse error. */
            public error?: (messages.entry.IError|null);

            /** ListEntriesResponse traceId. */
            public traceId: string;

            /** ListEntriesResponse pageInfo. */
            public pageInfo?: (messages.entry.ListEntriesResponse.IPageInfo|null);

            /**
             * Creates a new ListEntriesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListEntriesResponse instance
             */
            public static create(properties?: messages.entry.IListEntriesResponse): messages.entry.ListEntriesResponse;

            /**
             * Encodes the specified ListEntriesResponse message. Does not implicitly {@link messages.entry.ListEntriesResponse.verify|verify} messages.
             * @param message ListEntriesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IListEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListEntriesResponse message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.verify|verify} messages.
             * @param message ListEntriesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IListEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesResponse;

            /**
             * Decodes a ListEntriesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListEntriesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesResponse;

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
            public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesResponse;

            /**
             * Creates a plain object from a ListEntriesResponse message. Also converts values to other types if specified.
             * @param message ListEntriesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.ListEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: messages.entry.ListEntriesResponse.IPageInfo);

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
                public static create(properties?: messages.entry.ListEntriesResponse.IPageInfo): messages.entry.ListEntriesResponse.PageInfo;

                /**
                 * Encodes the specified PageInfo message. Does not implicitly {@link messages.entry.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @param message PageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.ListEntriesResponse.IPageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.PageInfo.verify|verify} messages.
                 * @param message PageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.ListEntriesResponse.IPageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesResponse.PageInfo;

                /**
                 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesResponse.PageInfo;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesResponse.PageInfo;

                /**
                 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
                 * @param message PageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.ListEntriesResponse.PageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Entity. */
            interface IEntity {

                /** Entity id */
                id?: (string|null);

                /** Entity text */
                text?: (string|null);

                /** Entity creatorId */
                creatorId?: (string|null);

                /** Entity createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Entity updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an Entity. */
            class Entity implements IEntity {

                /**
                 * Constructs a new Entity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.ListEntriesResponse.IEntity);

                /** Entity id. */
                public id: string;

                /** Entity text. */
                public text: string;

                /** Entity creatorId. */
                public creatorId: string;

                /** Entity createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Entity updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Entity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entity instance
                 */
                public static create(properties?: messages.entry.ListEntriesResponse.IEntity): messages.entry.ListEntriesResponse.Entity;

                /**
                 * Encodes the specified Entity message. Does not implicitly {@link messages.entry.ListEntriesResponse.Entity.verify|verify} messages.
                 * @param message Entity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.ListEntriesResponse.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entity message, length delimited. Does not implicitly {@link messages.entry.ListEntriesResponse.Entity.verify|verify} messages.
                 * @param message Entity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.ListEntriesResponse.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.ListEntriesResponse.Entity;

                /**
                 * Decodes an Entity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.ListEntriesResponse.Entity;

                /**
                 * Verifies an Entity message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entity
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.ListEntriesResponse.Entity;

                /**
                 * Creates a plain object from an Entity message. Also converts values to other types if specified.
                 * @param message Entity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.ListEntriesResponse.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entity to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a DeleteEntryRequest. */
        interface IDeleteEntryRequest {

            /** DeleteEntryRequest context */
            context?: (messages.entry.IRequestContext|null);

            /** DeleteEntryRequest payload */
            payload?: (messages.entry.DeleteEntryRequest.IPayload|null);
        }

        /** Represents a DeleteEntryRequest. */
        class DeleteEntryRequest implements IDeleteEntryRequest {

            /**
             * Constructs a new DeleteEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IDeleteEntryRequest);

            /** DeleteEntryRequest context. */
            public context?: (messages.entry.IRequestContext|null);

            /** DeleteEntryRequest payload. */
            public payload?: (messages.entry.DeleteEntryRequest.IPayload|null);

            /**
             * Creates a new DeleteEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteEntryRequest instance
             */
            public static create(properties?: messages.entry.IDeleteEntryRequest): messages.entry.DeleteEntryRequest;

            /**
             * Encodes the specified DeleteEntryRequest message. Does not implicitly {@link messages.entry.DeleteEntryRequest.verify|verify} messages.
             * @param message DeleteEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IDeleteEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteEntryRequest message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryRequest.verify|verify} messages.
             * @param message DeleteEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IDeleteEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.DeleteEntryRequest;

            /**
             * Decodes a DeleteEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.DeleteEntryRequest;

            /**
             * Verifies a DeleteEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.DeleteEntryRequest;

            /**
             * Creates a plain object from a DeleteEntryRequest message. Also converts values to other types if specified.
             * @param message DeleteEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.DeleteEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DeleteEntryRequest {

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
                constructor(properties?: messages.entry.DeleteEntryRequest.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.DeleteEntryRequest.IPayload): messages.entry.DeleteEntryRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.DeleteEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.DeleteEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.DeleteEntryRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.DeleteEntryRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.DeleteEntryRequest.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.DeleteEntryRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.DeleteEntryRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a DeleteEntryResponse. */
        interface IDeleteEntryResponse {

            /** DeleteEntryResponse error */
            error?: (messages.entry.IError|null);

            /** DeleteEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents a DeleteEntryResponse. */
        class DeleteEntryResponse implements IDeleteEntryResponse {

            /**
             * Constructs a new DeleteEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IDeleteEntryResponse);

            /** DeleteEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** DeleteEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new DeleteEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteEntryResponse instance
             */
            public static create(properties?: messages.entry.IDeleteEntryResponse): messages.entry.DeleteEntryResponse;

            /**
             * Encodes the specified DeleteEntryResponse message. Does not implicitly {@link messages.entry.DeleteEntryResponse.verify|verify} messages.
             * @param message DeleteEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IDeleteEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteEntryResponse message, length delimited. Does not implicitly {@link messages.entry.DeleteEntryResponse.verify|verify} messages.
             * @param message DeleteEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IDeleteEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.DeleteEntryResponse;

            /**
             * Decodes a DeleteEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.DeleteEntryResponse;

            /**
             * Verifies a DeleteEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.DeleteEntryResponse;

            /**
             * Creates a plain object from a DeleteEntryResponse message. Also converts values to other types if specified.
             * @param message DeleteEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.DeleteEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InfoEntryCreated. */
        interface IInfoEntryCreated {

            /** InfoEntryCreated payload */
            payload?: (messages.entry.InfoEntryCreated.IPayload|null);
        }

        /** Represents an InfoEntryCreated. */
        class InfoEntryCreated implements IInfoEntryCreated {

            /**
             * Constructs a new InfoEntryCreated.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IInfoEntryCreated);

            /** InfoEntryCreated payload. */
            public payload?: (messages.entry.InfoEntryCreated.IPayload|null);

            /**
             * Creates a new InfoEntryCreated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryCreated instance
             */
            public static create(properties?: messages.entry.IInfoEntryCreated): messages.entry.InfoEntryCreated;

            /**
             * Encodes the specified InfoEntryCreated message. Does not implicitly {@link messages.entry.InfoEntryCreated.verify|verify} messages.
             * @param message InfoEntryCreated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IInfoEntryCreated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryCreated message, length delimited. Does not implicitly {@link messages.entry.InfoEntryCreated.verify|verify} messages.
             * @param message InfoEntryCreated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IInfoEntryCreated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryCreated;

            /**
             * Decodes an InfoEntryCreated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryCreated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryCreated;

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
            public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryCreated;

            /**
             * Creates a plain object from an InfoEntryCreated message. Also converts values to other types if specified.
             * @param message InfoEntryCreated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.InfoEntryCreated, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.InfoEntryCreated.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.InfoEntryCreated.IPayload): messages.entry.InfoEntryCreated.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryCreated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.InfoEntryCreated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryCreated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.InfoEntryCreated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryCreated.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryCreated.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryCreated.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.InfoEntryCreated.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an InfoEntryUpdated. */
        interface IInfoEntryUpdated {

            /** InfoEntryUpdated payload */
            payload?: (messages.entry.InfoEntryUpdated.IPayload|null);
        }

        /** Represents an InfoEntryUpdated. */
        class InfoEntryUpdated implements IInfoEntryUpdated {

            /**
             * Constructs a new InfoEntryUpdated.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IInfoEntryUpdated);

            /** InfoEntryUpdated payload. */
            public payload?: (messages.entry.InfoEntryUpdated.IPayload|null);

            /**
             * Creates a new InfoEntryUpdated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryUpdated instance
             */
            public static create(properties?: messages.entry.IInfoEntryUpdated): messages.entry.InfoEntryUpdated;

            /**
             * Encodes the specified InfoEntryUpdated message. Does not implicitly {@link messages.entry.InfoEntryUpdated.verify|verify} messages.
             * @param message InfoEntryUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IInfoEntryUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryUpdated message, length delimited. Does not implicitly {@link messages.entry.InfoEntryUpdated.verify|verify} messages.
             * @param message InfoEntryUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IInfoEntryUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryUpdated;

            /**
             * Decodes an InfoEntryUpdated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryUpdated;

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
            public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryUpdated;

            /**
             * Creates a plain object from an InfoEntryUpdated message. Also converts values to other types if specified.
             * @param message InfoEntryUpdated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.InfoEntryUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: messages.entry.InfoEntryUpdated.IPayload);

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
                public static create(properties?: messages.entry.InfoEntryUpdated.IPayload): messages.entry.InfoEntryUpdated.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.InfoEntryUpdated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryUpdated.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.InfoEntryUpdated.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryUpdated.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryUpdated.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryUpdated.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.InfoEntryUpdated.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an InfoEntryDeleted. */
        interface IInfoEntryDeleted {

            /** InfoEntryDeleted payload */
            payload?: (messages.entry.InfoEntryDeleted.IPayload|null);
        }

        /** Represents an InfoEntryDeleted. */
        class InfoEntryDeleted implements IInfoEntryDeleted {

            /**
             * Constructs a new InfoEntryDeleted.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IInfoEntryDeleted);

            /** InfoEntryDeleted payload. */
            public payload?: (messages.entry.InfoEntryDeleted.IPayload|null);

            /**
             * Creates a new InfoEntryDeleted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntryDeleted instance
             */
            public static create(properties?: messages.entry.IInfoEntryDeleted): messages.entry.InfoEntryDeleted;

            /**
             * Encodes the specified InfoEntryDeleted message. Does not implicitly {@link messages.entry.InfoEntryDeleted.verify|verify} messages.
             * @param message InfoEntryDeleted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IInfoEntryDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntryDeleted message, length delimited. Does not implicitly {@link messages.entry.InfoEntryDeleted.verify|verify} messages.
             * @param message InfoEntryDeleted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IInfoEntryDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryDeleted;

            /**
             * Decodes an InfoEntryDeleted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntryDeleted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryDeleted;

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
            public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryDeleted;

            /**
             * Creates a plain object from an InfoEntryDeleted message. Also converts values to other types if specified.
             * @param message InfoEntryDeleted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.InfoEntryDeleted, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.InfoEntryDeleted.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.InfoEntryDeleted.IPayload): messages.entry.InfoEntryDeleted.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.InfoEntryDeleted.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntryDeleted.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.InfoEntryDeleted.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntryDeleted.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntryDeleted.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntryDeleted.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.InfoEntryDeleted.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace insights. */
    namespace insights {

        /** Properties of an Error. */
        interface IError {

            /** Error code */
            code?: (messages.insights.Error.Code|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.insights.IError);

            /** Error code. */
            public code: messages.insights.Error.Code;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: messages.insights.IError): messages.insights.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.insights.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.insights.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.insights.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.insights.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): messages.insights.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.insights.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Error {

            /** Code enum. */
            enum Code {
                UNKNOWN = 0,
                NOT_FOUND = 1,
                VALIDATION_FAILED = 2
            }
        }

        /** Properties of a Principal. */
        interface IPrincipal {

            /** Principal type */
            type?: (messages.insights.Principal.Type|null);

            /** Principal id */
            id?: (string|null);
        }

        /** Represents a Principal. */
        class Principal implements IPrincipal {

            /**
             * Constructs a new Principal.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.insights.IPrincipal);

            /** Principal type. */
            public type: messages.insights.Principal.Type;

            /** Principal id. */
            public id: string;

            /**
             * Creates a new Principal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Principal instance
             */
            public static create(properties?: messages.insights.IPrincipal): messages.insights.Principal;

            /**
             * Encodes the specified Principal message. Does not implicitly {@link messages.insights.Principal.verify|verify} messages.
             * @param message Principal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.insights.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.insights.Principal.verify|verify} messages.
             * @param message Principal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.insights.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Principal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.Principal;

            /**
             * Decodes a Principal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Principal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.Principal;

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
            public static fromObject(object: { [k: string]: any }): messages.insights.Principal;

            /**
             * Creates a plain object from a Principal message. Also converts values to other types if specified.
             * @param message Principal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.insights.Principal, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            principal?: (messages.insights.IPrincipal|null);
        }

        /** Represents a RequestContext. */
        class RequestContext implements IRequestContext {

            /**
             * Constructs a new RequestContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.insights.IRequestContext);

            /** RequestContext traceId. */
            public traceId: string;

            /** RequestContext principal. */
            public principal?: (messages.insights.IPrincipal|null);

            /**
             * Creates a new RequestContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestContext instance
             */
            public static create(properties?: messages.insights.IRequestContext): messages.insights.RequestContext;

            /**
             * Encodes the specified RequestContext message. Does not implicitly {@link messages.insights.RequestContext.verify|verify} messages.
             * @param message RequestContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.insights.IRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestContext message, length delimited. Does not implicitly {@link messages.insights.RequestContext.verify|verify} messages.
             * @param message RequestContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.insights.IRequestContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.RequestContext;

            /**
             * Decodes a RequestContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.RequestContext;

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
            public static fromObject(object: { [k: string]: any }): messages.insights.RequestContext;

            /**
             * Creates a plain object from a RequestContext message. Also converts values to other types if specified.
             * @param message RequestContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.insights.RequestContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an IncrementDailyCounter. */
        interface IIncrementDailyCounter {

            /** IncrementDailyCounter context */
            context?: (messages.insights.IRequestContext|null);

            /** IncrementDailyCounter payload */
            payload?: (messages.insights.IncrementDailyCounter.IPayload|null);
        }

        /** Represents an IncrementDailyCounter. */
        class IncrementDailyCounter implements IIncrementDailyCounter {

            /**
             * Constructs a new IncrementDailyCounter.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.insights.IIncrementDailyCounter);

            /** IncrementDailyCounter context. */
            public context?: (messages.insights.IRequestContext|null);

            /** IncrementDailyCounter payload. */
            public payload?: (messages.insights.IncrementDailyCounter.IPayload|null);

            /**
             * Creates a new IncrementDailyCounter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IncrementDailyCounter instance
             */
            public static create(properties?: messages.insights.IIncrementDailyCounter): messages.insights.IncrementDailyCounter;

            /**
             * Encodes the specified IncrementDailyCounter message. Does not implicitly {@link messages.insights.IncrementDailyCounter.verify|verify} messages.
             * @param message IncrementDailyCounter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.insights.IIncrementDailyCounter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IncrementDailyCounter message, length delimited. Does not implicitly {@link messages.insights.IncrementDailyCounter.verify|verify} messages.
             * @param message IncrementDailyCounter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.insights.IIncrementDailyCounter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IncrementDailyCounter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IncrementDailyCounter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.IncrementDailyCounter;

            /**
             * Decodes an IncrementDailyCounter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IncrementDailyCounter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.IncrementDailyCounter;

            /**
             * Verifies an IncrementDailyCounter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IncrementDailyCounter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IncrementDailyCounter
             */
            public static fromObject(object: { [k: string]: any }): messages.insights.IncrementDailyCounter;

            /**
             * Creates a plain object from an IncrementDailyCounter message. Also converts values to other types if specified.
             * @param message IncrementDailyCounter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.insights.IncrementDailyCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IncrementDailyCounter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace IncrementDailyCounter {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload day */
                day?: (google.protobuf.ITimestamp|null);

                /** Payload creatorId */
                creatorId?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.insights.IncrementDailyCounter.IPayload);

                /** Payload day. */
                public day?: (google.protobuf.ITimestamp|null);

                /** Payload creatorId. */
                public creatorId: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.insights.IncrementDailyCounter.IPayload): messages.insights.IncrementDailyCounter.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.insights.IncrementDailyCounter.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.insights.IncrementDailyCounter.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.insights.IncrementDailyCounter.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.insights.IncrementDailyCounter.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.IncrementDailyCounter.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.IncrementDailyCounter.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.insights.IncrementDailyCounter.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.insights.IncrementDailyCounter.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GetVelocityRequest. */
        interface IGetVelocityRequest {

            /** GetVelocityRequest context */
            context?: (messages.insights.IRequestContext|null);

            /** GetVelocityRequest payload */
            payload?: (messages.insights.GetVelocityRequest.IPayload|null);
        }

        /** Represents a GetVelocityRequest. */
        class GetVelocityRequest implements IGetVelocityRequest {

            /**
             * Constructs a new GetVelocityRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.insights.IGetVelocityRequest);

            /** GetVelocityRequest context. */
            public context?: (messages.insights.IRequestContext|null);

            /** GetVelocityRequest payload. */
            public payload?: (messages.insights.GetVelocityRequest.IPayload|null);

            /**
             * Creates a new GetVelocityRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetVelocityRequest instance
             */
            public static create(properties?: messages.insights.IGetVelocityRequest): messages.insights.GetVelocityRequest;

            /**
             * Encodes the specified GetVelocityRequest message. Does not implicitly {@link messages.insights.GetVelocityRequest.verify|verify} messages.
             * @param message GetVelocityRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.insights.IGetVelocityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetVelocityRequest message, length delimited. Does not implicitly {@link messages.insights.GetVelocityRequest.verify|verify} messages.
             * @param message GetVelocityRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.insights.IGetVelocityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetVelocityRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetVelocityRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.GetVelocityRequest;

            /**
             * Decodes a GetVelocityRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetVelocityRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.GetVelocityRequest;

            /**
             * Verifies a GetVelocityRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetVelocityRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetVelocityRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.insights.GetVelocityRequest;

            /**
             * Creates a plain object from a GetVelocityRequest message. Also converts values to other types if specified.
             * @param message GetVelocityRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.insights.GetVelocityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetVelocityRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetVelocityRequest {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload start */
                start?: (google.protobuf.ITimestamp|null);

                /** Payload end */
                end?: (google.protobuf.ITimestamp|null);

                /** Payload creatorId */
                creatorId?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.insights.GetVelocityRequest.IPayload);

                /** Payload start. */
                public start?: (google.protobuf.ITimestamp|null);

                /** Payload end. */
                public end?: (google.protobuf.ITimestamp|null);

                /** Payload creatorId. */
                public creatorId: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.insights.GetVelocityRequest.IPayload): messages.insights.GetVelocityRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.insights.GetVelocityRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.insights.GetVelocityRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.insights.GetVelocityRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.insights.GetVelocityRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.GetVelocityRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.GetVelocityRequest.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.insights.GetVelocityRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.insights.GetVelocityRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GetVelocityResponse. */
        interface IGetVelocityResponse {

            /** GetVelocityResponse payload */
            payload?: (messages.insights.GetVelocityResponse.IDailyVelocity[]|null);

            /** GetVelocityResponse error */
            error?: (messages.insights.IError|null);
        }

        /** Represents a GetVelocityResponse. */
        class GetVelocityResponse implements IGetVelocityResponse {

            /**
             * Constructs a new GetVelocityResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.insights.IGetVelocityResponse);

            /** GetVelocityResponse payload. */
            public payload: messages.insights.GetVelocityResponse.IDailyVelocity[];

            /** GetVelocityResponse error. */
            public error?: (messages.insights.IError|null);

            /**
             * Creates a new GetVelocityResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetVelocityResponse instance
             */
            public static create(properties?: messages.insights.IGetVelocityResponse): messages.insights.GetVelocityResponse;

            /**
             * Encodes the specified GetVelocityResponse message. Does not implicitly {@link messages.insights.GetVelocityResponse.verify|verify} messages.
             * @param message GetVelocityResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.insights.IGetVelocityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetVelocityResponse message, length delimited. Does not implicitly {@link messages.insights.GetVelocityResponse.verify|verify} messages.
             * @param message GetVelocityResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.insights.IGetVelocityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetVelocityResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetVelocityResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.GetVelocityResponse;

            /**
             * Decodes a GetVelocityResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetVelocityResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.GetVelocityResponse;

            /**
             * Verifies a GetVelocityResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetVelocityResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetVelocityResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.insights.GetVelocityResponse;

            /**
             * Creates a plain object from a GetVelocityResponse message. Also converts values to other types if specified.
             * @param message GetVelocityResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.insights.GetVelocityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetVelocityResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetVelocityResponse {

            /** Properties of a DailyVelocity. */
            interface IDailyVelocity {

                /** DailyVelocity day */
                day?: (google.protobuf.ITimestamp|null);

                /** DailyVelocity score */
                score?: (number|null);
            }

            /** Represents a DailyVelocity. */
            class DailyVelocity implements IDailyVelocity {

                /**
                 * Constructs a new DailyVelocity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.insights.GetVelocityResponse.IDailyVelocity);

                /** DailyVelocity day. */
                public day?: (google.protobuf.ITimestamp|null);

                /** DailyVelocity score. */
                public score: number;

                /**
                 * Creates a new DailyVelocity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DailyVelocity instance
                 */
                public static create(properties?: messages.insights.GetVelocityResponse.IDailyVelocity): messages.insights.GetVelocityResponse.DailyVelocity;

                /**
                 * Encodes the specified DailyVelocity message. Does not implicitly {@link messages.insights.GetVelocityResponse.DailyVelocity.verify|verify} messages.
                 * @param message DailyVelocity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.insights.GetVelocityResponse.IDailyVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DailyVelocity message, length delimited. Does not implicitly {@link messages.insights.GetVelocityResponse.DailyVelocity.verify|verify} messages.
                 * @param message DailyVelocity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.insights.GetVelocityResponse.IDailyVelocity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DailyVelocity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DailyVelocity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.insights.GetVelocityResponse.DailyVelocity;

                /**
                 * Decodes a DailyVelocity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DailyVelocity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.insights.GetVelocityResponse.DailyVelocity;

                /**
                 * Verifies a DailyVelocity message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DailyVelocity message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DailyVelocity
                 */
                public static fromObject(object: { [k: string]: any }): messages.insights.GetVelocityResponse.DailyVelocity;

                /**
                 * Creates a plain object from a DailyVelocity message. Also converts values to other types if specified.
                 * @param message DailyVelocity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.insights.GetVelocityResponse.DailyVelocity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DailyVelocity to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

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

        /** Properties of an ErrorResponse. */
        interface IErrorResponse {

            /** ErrorResponse status */
            status?: (messages.notebook.IStatus|null);

            /** ErrorResponse context */
            context?: (messages.notebook.IResponseContext|null);
        }

        /** Represents an ErrorResponse. */
        class ErrorResponse implements IErrorResponse {

            /**
             * Constructs a new ErrorResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IErrorResponse);

            /** ErrorResponse status. */
            public status?: (messages.notebook.IStatus|null);

            /** ErrorResponse context. */
            public context?: (messages.notebook.IResponseContext|null);

            /**
             * Creates a new ErrorResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorResponse instance
             */
            public static create(properties?: messages.notebook.IErrorResponse): messages.notebook.ErrorResponse;

            /**
             * Encodes the specified ErrorResponse message. Does not implicitly {@link messages.notebook.ErrorResponse.verify|verify} messages.
             * @param message ErrorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ErrorResponse message, length delimited. Does not implicitly {@link messages.notebook.ErrorResponse.verify|verify} messages.
             * @param message ErrorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ErrorResponse;

            /**
             * Decodes an ErrorResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ErrorResponse;

            /**
             * Verifies an ErrorResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ErrorResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ErrorResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ErrorResponse;

            /**
             * Creates a plain object from an ErrorResponse message. Also converts values to other types if specified.
             * @param message ErrorResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ErrorResponse to JSON.
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
            status?: (messages.notebook.IStatus|null);

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
            public status?: (messages.notebook.IStatus|null);

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
            status?: (messages.notebook.IStatus|null);

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
            public status?: (messages.notebook.IStatus|null);

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
            status?: (messages.notebook.IStatus|null);

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
            public status?: (messages.notebook.IStatus|null);

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
            status?: (messages.notebook.IStatus|null);

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
            public status?: (messages.notebook.IStatus|null);

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
            status?: (messages.notebook.IStatus|null);

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
            public status?: (messages.notebook.IStatus|null);

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

        /** Properties of a ReadEntryGRPCRequest. */
        interface IReadEntryGRPCRequest {

            /** ReadEntryGRPCRequest principal */
            principal?: (messages.notebook.IPrincipal|null);

            /** ReadEntryGRPCRequest payload */
            payload?: (messages.notebook.ReadEntryGRPCRequest.IPayload|null);
        }

        /** Represents a ReadEntryGRPCRequest. */
        class ReadEntryGRPCRequest implements IReadEntryGRPCRequest {

            /**
             * Constructs a new ReadEntryGRPCRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IReadEntryGRPCRequest);

            /** ReadEntryGRPCRequest principal. */
            public principal?: (messages.notebook.IPrincipal|null);

            /** ReadEntryGRPCRequest payload. */
            public payload?: (messages.notebook.ReadEntryGRPCRequest.IPayload|null);

            /**
             * Creates a new ReadEntryGRPCRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadEntryGRPCRequest instance
             */
            public static create(properties?: messages.notebook.IReadEntryGRPCRequest): messages.notebook.ReadEntryGRPCRequest;

            /**
             * Encodes the specified ReadEntryGRPCRequest message. Does not implicitly {@link messages.notebook.ReadEntryGRPCRequest.verify|verify} messages.
             * @param message ReadEntryGRPCRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IReadEntryGRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadEntryGRPCRequest message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryGRPCRequest.verify|verify} messages.
             * @param message ReadEntryGRPCRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IReadEntryGRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadEntryGRPCRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadEntryGRPCRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ReadEntryGRPCRequest;

            /**
             * Decodes a ReadEntryGRPCRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadEntryGRPCRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ReadEntryGRPCRequest;

            /**
             * Verifies a ReadEntryGRPCRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadEntryGRPCRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadEntryGRPCRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ReadEntryGRPCRequest;

            /**
             * Creates a plain object from a ReadEntryGRPCRequest message. Also converts values to other types if specified.
             * @param message ReadEntryGRPCRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ReadEntryGRPCRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadEntryGRPCRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ReadEntryGRPCRequest {

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
                constructor(properties?: messages.notebook.ReadEntryGRPCRequest.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.ReadEntryGRPCRequest.IPayload): messages.notebook.ReadEntryGRPCRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ReadEntryGRPCRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ReadEntryGRPCRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryGRPCRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ReadEntryGRPCRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ReadEntryGRPCRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ReadEntryGRPCRequest.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.notebook.ReadEntryGRPCRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ReadEntryGRPCRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ReadEntryGRPCResponse. */
        interface IReadEntryGRPCResponse {

            /** ReadEntryGRPCResponse payload */
            payload?: (messages.notebook.ReadEntryGRPCResponse.IPayload|null);
        }

        /** Represents a ReadEntryGRPCResponse. */
        class ReadEntryGRPCResponse implements IReadEntryGRPCResponse {

            /**
             * Constructs a new ReadEntryGRPCResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IReadEntryGRPCResponse);

            /** ReadEntryGRPCResponse payload. */
            public payload?: (messages.notebook.ReadEntryGRPCResponse.IPayload|null);

            /**
             * Creates a new ReadEntryGRPCResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadEntryGRPCResponse instance
             */
            public static create(properties?: messages.notebook.IReadEntryGRPCResponse): messages.notebook.ReadEntryGRPCResponse;

            /**
             * Encodes the specified ReadEntryGRPCResponse message. Does not implicitly {@link messages.notebook.ReadEntryGRPCResponse.verify|verify} messages.
             * @param message ReadEntryGRPCResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IReadEntryGRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadEntryGRPCResponse message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryGRPCResponse.verify|verify} messages.
             * @param message ReadEntryGRPCResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IReadEntryGRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadEntryGRPCResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadEntryGRPCResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ReadEntryGRPCResponse;

            /**
             * Decodes a ReadEntryGRPCResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadEntryGRPCResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ReadEntryGRPCResponse;

            /**
             * Verifies a ReadEntryGRPCResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadEntryGRPCResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadEntryGRPCResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.ReadEntryGRPCResponse;

            /**
             * Creates a plain object from a ReadEntryGRPCResponse message. Also converts values to other types if specified.
             * @param message ReadEntryGRPCResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.ReadEntryGRPCResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadEntryGRPCResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ReadEntryGRPCResponse {

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
                constructor(properties?: messages.notebook.ReadEntryGRPCResponse.IPayload);

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
                public static create(properties?: messages.notebook.ReadEntryGRPCResponse.IPayload): messages.notebook.ReadEntryGRPCResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.ReadEntryGRPCResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.ReadEntryGRPCResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.ReadEntryGRPCResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.ReadEntryGRPCResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.ReadEntryGRPCResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.ReadEntryGRPCResponse.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.notebook.ReadEntryGRPCResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.ReadEntryGRPCResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a StartNewEntryGRPCRequest. */
        interface IStartNewEntryGRPCRequest {

            /** StartNewEntryGRPCRequest principal */
            principal?: (messages.notebook.IPrincipal|null);

            /** StartNewEntryGRPCRequest payload */
            payload?: (messages.notebook.StartNewEntryGRPCRequest.IPayload|null);
        }

        /** Represents a StartNewEntryGRPCRequest. */
        class StartNewEntryGRPCRequest implements IStartNewEntryGRPCRequest {

            /**
             * Constructs a new StartNewEntryGRPCRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IStartNewEntryGRPCRequest);

            /** StartNewEntryGRPCRequest principal. */
            public principal?: (messages.notebook.IPrincipal|null);

            /** StartNewEntryGRPCRequest payload. */
            public payload?: (messages.notebook.StartNewEntryGRPCRequest.IPayload|null);

            /**
             * Creates a new StartNewEntryGRPCRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartNewEntryGRPCRequest instance
             */
            public static create(properties?: messages.notebook.IStartNewEntryGRPCRequest): messages.notebook.StartNewEntryGRPCRequest;

            /**
             * Encodes the specified StartNewEntryGRPCRequest message. Does not implicitly {@link messages.notebook.StartNewEntryGRPCRequest.verify|verify} messages.
             * @param message StartNewEntryGRPCRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IStartNewEntryGRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartNewEntryGRPCRequest message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryGRPCRequest.verify|verify} messages.
             * @param message StartNewEntryGRPCRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IStartNewEntryGRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartNewEntryGRPCRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartNewEntryGRPCRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.StartNewEntryGRPCRequest;

            /**
             * Decodes a StartNewEntryGRPCRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartNewEntryGRPCRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.StartNewEntryGRPCRequest;

            /**
             * Verifies a StartNewEntryGRPCRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartNewEntryGRPCRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartNewEntryGRPCRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.StartNewEntryGRPCRequest;

            /**
             * Creates a plain object from a StartNewEntryGRPCRequest message. Also converts values to other types if specified.
             * @param message StartNewEntryGRPCRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.StartNewEntryGRPCRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartNewEntryGRPCRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace StartNewEntryGRPCRequest {

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
                constructor(properties?: messages.notebook.StartNewEntryGRPCRequest.IPayload);

                /** Payload creatorId. */
                public creatorId: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.StartNewEntryGRPCRequest.IPayload): messages.notebook.StartNewEntryGRPCRequest.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.StartNewEntryGRPCRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.StartNewEntryGRPCRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryGRPCRequest.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.StartNewEntryGRPCRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.StartNewEntryGRPCRequest.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.StartNewEntryGRPCRequest.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.notebook.StartNewEntryGRPCRequest.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.StartNewEntryGRPCRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a StartNewEntryGRPCResponse. */
        interface IStartNewEntryGRPCResponse {

            /** StartNewEntryGRPCResponse payload */
            payload?: (messages.notebook.StartNewEntryGRPCResponse.IPayload|null);
        }

        /** Represents a StartNewEntryGRPCResponse. */
        class StartNewEntryGRPCResponse implements IStartNewEntryGRPCResponse {

            /**
             * Constructs a new StartNewEntryGRPCResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.notebook.IStartNewEntryGRPCResponse);

            /** StartNewEntryGRPCResponse payload. */
            public payload?: (messages.notebook.StartNewEntryGRPCResponse.IPayload|null);

            /**
             * Creates a new StartNewEntryGRPCResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartNewEntryGRPCResponse instance
             */
            public static create(properties?: messages.notebook.IStartNewEntryGRPCResponse): messages.notebook.StartNewEntryGRPCResponse;

            /**
             * Encodes the specified StartNewEntryGRPCResponse message. Does not implicitly {@link messages.notebook.StartNewEntryGRPCResponse.verify|verify} messages.
             * @param message StartNewEntryGRPCResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IStartNewEntryGRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartNewEntryGRPCResponse message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryGRPCResponse.verify|verify} messages.
             * @param message StartNewEntryGRPCResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IStartNewEntryGRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartNewEntryGRPCResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartNewEntryGRPCResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.StartNewEntryGRPCResponse;

            /**
             * Decodes a StartNewEntryGRPCResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartNewEntryGRPCResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.StartNewEntryGRPCResponse;

            /**
             * Verifies a StartNewEntryGRPCResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartNewEntryGRPCResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartNewEntryGRPCResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.notebook.StartNewEntryGRPCResponse;

            /**
             * Creates a plain object from a StartNewEntryGRPCResponse message. Also converts values to other types if specified.
             * @param message StartNewEntryGRPCResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.StartNewEntryGRPCResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartNewEntryGRPCResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace StartNewEntryGRPCResponse {

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
                constructor(properties?: messages.notebook.StartNewEntryGRPCResponse.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.notebook.StartNewEntryGRPCResponse.IPayload): messages.notebook.StartNewEntryGRPCResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.StartNewEntryGRPCResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.StartNewEntryGRPCResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.StartNewEntryGRPCResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.StartNewEntryGRPCResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.StartNewEntryGRPCResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.StartNewEntryGRPCResponse.Payload;

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
                public static fromObject(object: { [k: string]: any }): messages.notebook.StartNewEntryGRPCResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.StartNewEntryGRPCResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Represents a Notebook */
        class Notebook extends $protobuf.rpc.Service {

            /**
             * Constructs a new Notebook service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Notebook service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Notebook;

            /**
             * Calls ReadEntry.
             * @param request ReadEntryGRPCRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ReadEntryGRPCResponse
             */
            public readEntry(request: messages.notebook.IReadEntryGRPCRequest, callback: messages.notebook.Notebook.ReadEntryCallback): void;

            /**
             * Calls ReadEntry.
             * @param request ReadEntryGRPCRequest message or plain object
             * @returns Promise
             */
            public readEntry(request: messages.notebook.IReadEntryGRPCRequest): Promise<messages.notebook.ReadEntryGRPCResponse>;

            /**
             * Calls StartNewEntry.
             * @param request StartNewEntryGRPCRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and StartNewEntryGRPCResponse
             */
            public startNewEntry(request: messages.notebook.IStartNewEntryGRPCRequest, callback: messages.notebook.Notebook.StartNewEntryCallback): void;

            /**
             * Calls StartNewEntry.
             * @param request StartNewEntryGRPCRequest message or plain object
             * @returns Promise
             */
            public startNewEntry(request: messages.notebook.IStartNewEntryGRPCRequest): Promise<messages.notebook.StartNewEntryGRPCResponse>;
        }

        namespace Notebook {

            /**
             * Callback as used by {@link messages.notebook.Notebook#readEntry}.
             * @param error Error, if any
             * @param [response] ReadEntryGRPCResponse
             */
            type ReadEntryCallback = (error: (Error|null), response?: messages.notebook.ReadEntryGRPCResponse) => void;

            /**
             * Callback as used by {@link messages.notebook.Notebook#startNewEntry}.
             * @param error Error, if any
             * @param [response] StartNewEntryGRPCResponse
             */
            type StartNewEntryCallback = (error: (Error|null), response?: messages.notebook.StartNewEntryGRPCResponse) => void;
        }

        /** Namespace v2. */
        namespace v2 {

            /** Properties of a Principal. */
            interface IPrincipal {

                /** Principal type */
                type?: (messages.notebook.v2.Principal.Type|null);

                /** Principal id */
                id?: (string|null);
            }

            /** Represents a Principal. */
            class Principal implements IPrincipal {

                /**
                 * Constructs a new Principal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.v2.IPrincipal);

                /** Principal type. */
                public type: messages.notebook.v2.Principal.Type;

                /** Principal id. */
                public id: string;

                /**
                 * Creates a new Principal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Principal instance
                 */
                public static create(properties?: messages.notebook.v2.IPrincipal): messages.notebook.v2.Principal;

                /**
                 * Encodes the specified Principal message. Does not implicitly {@link messages.notebook.v2.Principal.verify|verify} messages.
                 * @param message Principal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.v2.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Principal message, length delimited. Does not implicitly {@link messages.notebook.v2.Principal.verify|verify} messages.
                 * @param message Principal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.v2.IPrincipal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Principal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Principal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.Principal;

                /**
                 * Decodes a Principal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Principal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.Principal;

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
                public static fromObject(object: { [k: string]: any }): messages.notebook.v2.Principal;

                /**
                 * Creates a plain object from a Principal message. Also converts values to other types if specified.
                 * @param message Principal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.v2.Principal, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a ReadEntryGRPCRequest. */
            interface IReadEntryGRPCRequest {

                /** ReadEntryGRPCRequest principal */
                principal?: (messages.notebook.v2.IPrincipal|null);

                /** ReadEntryGRPCRequest payload */
                payload?: (messages.notebook.v2.ReadEntryGRPCRequest.IPayload|null);
            }

            /** Represents a ReadEntryGRPCRequest. */
            class ReadEntryGRPCRequest implements IReadEntryGRPCRequest {

                /**
                 * Constructs a new ReadEntryGRPCRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.v2.IReadEntryGRPCRequest);

                /** ReadEntryGRPCRequest principal. */
                public principal?: (messages.notebook.v2.IPrincipal|null);

                /** ReadEntryGRPCRequest payload. */
                public payload?: (messages.notebook.v2.ReadEntryGRPCRequest.IPayload|null);

                /**
                 * Creates a new ReadEntryGRPCRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReadEntryGRPCRequest instance
                 */
                public static create(properties?: messages.notebook.v2.IReadEntryGRPCRequest): messages.notebook.v2.ReadEntryGRPCRequest;

                /**
                 * Encodes the specified ReadEntryGRPCRequest message. Does not implicitly {@link messages.notebook.v2.ReadEntryGRPCRequest.verify|verify} messages.
                 * @param message ReadEntryGRPCRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.v2.IReadEntryGRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReadEntryGRPCRequest message, length delimited. Does not implicitly {@link messages.notebook.v2.ReadEntryGRPCRequest.verify|verify} messages.
                 * @param message ReadEntryGRPCRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.v2.IReadEntryGRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReadEntryGRPCRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReadEntryGRPCRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.ReadEntryGRPCRequest;

                /**
                 * Decodes a ReadEntryGRPCRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReadEntryGRPCRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.ReadEntryGRPCRequest;

                /**
                 * Verifies a ReadEntryGRPCRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReadEntryGRPCRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReadEntryGRPCRequest
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.v2.ReadEntryGRPCRequest;

                /**
                 * Creates a plain object from a ReadEntryGRPCRequest message. Also converts values to other types if specified.
                 * @param message ReadEntryGRPCRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.v2.ReadEntryGRPCRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReadEntryGRPCRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ReadEntryGRPCRequest {

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
                    constructor(properties?: messages.notebook.v2.ReadEntryGRPCRequest.IPayload);

                    /** Payload id. */
                    public id: string;

                    /**
                     * Creates a new Payload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Payload instance
                     */
                    public static create(properties?: messages.notebook.v2.ReadEntryGRPCRequest.IPayload): messages.notebook.v2.ReadEntryGRPCRequest.Payload;

                    /**
                     * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.v2.ReadEntryGRPCRequest.Payload.verify|verify} messages.
                     * @param message Payload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: messages.notebook.v2.ReadEntryGRPCRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.v2.ReadEntryGRPCRequest.Payload.verify|verify} messages.
                     * @param message Payload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: messages.notebook.v2.ReadEntryGRPCRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Payload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.ReadEntryGRPCRequest.Payload;

                    /**
                     * Decodes a Payload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.ReadEntryGRPCRequest.Payload;

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
                    public static fromObject(object: { [k: string]: any }): messages.notebook.v2.ReadEntryGRPCRequest.Payload;

                    /**
                     * Creates a plain object from a Payload message. Also converts values to other types if specified.
                     * @param message Payload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: messages.notebook.v2.ReadEntryGRPCRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Payload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ReadEntryGRPCResponse. */
            interface IReadEntryGRPCResponse {

                /** ReadEntryGRPCResponse payload */
                payload?: (messages.notebook.v2.ReadEntryGRPCResponse.IPayload|null);
            }

            /** Represents a ReadEntryGRPCResponse. */
            class ReadEntryGRPCResponse implements IReadEntryGRPCResponse {

                /**
                 * Constructs a new ReadEntryGRPCResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.v2.IReadEntryGRPCResponse);

                /** ReadEntryGRPCResponse payload. */
                public payload?: (messages.notebook.v2.ReadEntryGRPCResponse.IPayload|null);

                /**
                 * Creates a new ReadEntryGRPCResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReadEntryGRPCResponse instance
                 */
                public static create(properties?: messages.notebook.v2.IReadEntryGRPCResponse): messages.notebook.v2.ReadEntryGRPCResponse;

                /**
                 * Encodes the specified ReadEntryGRPCResponse message. Does not implicitly {@link messages.notebook.v2.ReadEntryGRPCResponse.verify|verify} messages.
                 * @param message ReadEntryGRPCResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.v2.IReadEntryGRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReadEntryGRPCResponse message, length delimited. Does not implicitly {@link messages.notebook.v2.ReadEntryGRPCResponse.verify|verify} messages.
                 * @param message ReadEntryGRPCResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.v2.IReadEntryGRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReadEntryGRPCResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReadEntryGRPCResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.ReadEntryGRPCResponse;

                /**
                 * Decodes a ReadEntryGRPCResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReadEntryGRPCResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.ReadEntryGRPCResponse;

                /**
                 * Verifies a ReadEntryGRPCResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReadEntryGRPCResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReadEntryGRPCResponse
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.v2.ReadEntryGRPCResponse;

                /**
                 * Creates a plain object from a ReadEntryGRPCResponse message. Also converts values to other types if specified.
                 * @param message ReadEntryGRPCResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.v2.ReadEntryGRPCResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReadEntryGRPCResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ReadEntryGRPCResponse {

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
                    constructor(properties?: messages.notebook.v2.ReadEntryGRPCResponse.IPayload);

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
                    public static create(properties?: messages.notebook.v2.ReadEntryGRPCResponse.IPayload): messages.notebook.v2.ReadEntryGRPCResponse.Payload;

                    /**
                     * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.v2.ReadEntryGRPCResponse.Payload.verify|verify} messages.
                     * @param message Payload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: messages.notebook.v2.ReadEntryGRPCResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.v2.ReadEntryGRPCResponse.Payload.verify|verify} messages.
                     * @param message Payload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: messages.notebook.v2.ReadEntryGRPCResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Payload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.ReadEntryGRPCResponse.Payload;

                    /**
                     * Decodes a Payload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.ReadEntryGRPCResponse.Payload;

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
                    public static fromObject(object: { [k: string]: any }): messages.notebook.v2.ReadEntryGRPCResponse.Payload;

                    /**
                     * Creates a plain object from a Payload message. Also converts values to other types if specified.
                     * @param message Payload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: messages.notebook.v2.ReadEntryGRPCResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Payload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a StartNewEntryGRPCRequest. */
            interface IStartNewEntryGRPCRequest {

                /** StartNewEntryGRPCRequest principal */
                principal?: (messages.notebook.v2.IPrincipal|null);

                /** StartNewEntryGRPCRequest payload */
                payload?: (messages.notebook.v2.StartNewEntryGRPCRequest.IPayload|null);
            }

            /** Represents a StartNewEntryGRPCRequest. */
            class StartNewEntryGRPCRequest implements IStartNewEntryGRPCRequest {

                /**
                 * Constructs a new StartNewEntryGRPCRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.v2.IStartNewEntryGRPCRequest);

                /** StartNewEntryGRPCRequest principal. */
                public principal?: (messages.notebook.v2.IPrincipal|null);

                /** StartNewEntryGRPCRequest payload. */
                public payload?: (messages.notebook.v2.StartNewEntryGRPCRequest.IPayload|null);

                /**
                 * Creates a new StartNewEntryGRPCRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartNewEntryGRPCRequest instance
                 */
                public static create(properties?: messages.notebook.v2.IStartNewEntryGRPCRequest): messages.notebook.v2.StartNewEntryGRPCRequest;

                /**
                 * Encodes the specified StartNewEntryGRPCRequest message. Does not implicitly {@link messages.notebook.v2.StartNewEntryGRPCRequest.verify|verify} messages.
                 * @param message StartNewEntryGRPCRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.v2.IStartNewEntryGRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StartNewEntryGRPCRequest message, length delimited. Does not implicitly {@link messages.notebook.v2.StartNewEntryGRPCRequest.verify|verify} messages.
                 * @param message StartNewEntryGRPCRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.v2.IStartNewEntryGRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StartNewEntryGRPCRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartNewEntryGRPCRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.StartNewEntryGRPCRequest;

                /**
                 * Decodes a StartNewEntryGRPCRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StartNewEntryGRPCRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.StartNewEntryGRPCRequest;

                /**
                 * Verifies a StartNewEntryGRPCRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StartNewEntryGRPCRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StartNewEntryGRPCRequest
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.v2.StartNewEntryGRPCRequest;

                /**
                 * Creates a plain object from a StartNewEntryGRPCRequest message. Also converts values to other types if specified.
                 * @param message StartNewEntryGRPCRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.v2.StartNewEntryGRPCRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StartNewEntryGRPCRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace StartNewEntryGRPCRequest {

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
                    constructor(properties?: messages.notebook.v2.StartNewEntryGRPCRequest.IPayload);

                    /** Payload creatorId. */
                    public creatorId: string;

                    /**
                     * Creates a new Payload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Payload instance
                     */
                    public static create(properties?: messages.notebook.v2.StartNewEntryGRPCRequest.IPayload): messages.notebook.v2.StartNewEntryGRPCRequest.Payload;

                    /**
                     * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.v2.StartNewEntryGRPCRequest.Payload.verify|verify} messages.
                     * @param message Payload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: messages.notebook.v2.StartNewEntryGRPCRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.v2.StartNewEntryGRPCRequest.Payload.verify|verify} messages.
                     * @param message Payload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: messages.notebook.v2.StartNewEntryGRPCRequest.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Payload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.StartNewEntryGRPCRequest.Payload;

                    /**
                     * Decodes a Payload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.StartNewEntryGRPCRequest.Payload;

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
                    public static fromObject(object: { [k: string]: any }): messages.notebook.v2.StartNewEntryGRPCRequest.Payload;

                    /**
                     * Creates a plain object from a Payload message. Also converts values to other types if specified.
                     * @param message Payload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: messages.notebook.v2.StartNewEntryGRPCRequest.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Payload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a StartNewEntryGRPCResponse. */
            interface IStartNewEntryGRPCResponse {

                /** StartNewEntryGRPCResponse payload */
                payload?: (messages.notebook.v2.StartNewEntryGRPCResponse.IPayload|null);
            }

            /** Represents a StartNewEntryGRPCResponse. */
            class StartNewEntryGRPCResponse implements IStartNewEntryGRPCResponse {

                /**
                 * Constructs a new StartNewEntryGRPCResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.notebook.v2.IStartNewEntryGRPCResponse);

                /** StartNewEntryGRPCResponse payload. */
                public payload?: (messages.notebook.v2.StartNewEntryGRPCResponse.IPayload|null);

                /**
                 * Creates a new StartNewEntryGRPCResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartNewEntryGRPCResponse instance
                 */
                public static create(properties?: messages.notebook.v2.IStartNewEntryGRPCResponse): messages.notebook.v2.StartNewEntryGRPCResponse;

                /**
                 * Encodes the specified StartNewEntryGRPCResponse message. Does not implicitly {@link messages.notebook.v2.StartNewEntryGRPCResponse.verify|verify} messages.
                 * @param message StartNewEntryGRPCResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.notebook.v2.IStartNewEntryGRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StartNewEntryGRPCResponse message, length delimited. Does not implicitly {@link messages.notebook.v2.StartNewEntryGRPCResponse.verify|verify} messages.
                 * @param message StartNewEntryGRPCResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.notebook.v2.IStartNewEntryGRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StartNewEntryGRPCResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartNewEntryGRPCResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.StartNewEntryGRPCResponse;

                /**
                 * Decodes a StartNewEntryGRPCResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StartNewEntryGRPCResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.StartNewEntryGRPCResponse;

                /**
                 * Verifies a StartNewEntryGRPCResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StartNewEntryGRPCResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StartNewEntryGRPCResponse
                 */
                public static fromObject(object: { [k: string]: any }): messages.notebook.v2.StartNewEntryGRPCResponse;

                /**
                 * Creates a plain object from a StartNewEntryGRPCResponse message. Also converts values to other types if specified.
                 * @param message StartNewEntryGRPCResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.notebook.v2.StartNewEntryGRPCResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StartNewEntryGRPCResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace StartNewEntryGRPCResponse {

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
                    constructor(properties?: messages.notebook.v2.StartNewEntryGRPCResponse.IPayload);

                    /** Payload id. */
                    public id: string;

                    /**
                     * Creates a new Payload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Payload instance
                     */
                    public static create(properties?: messages.notebook.v2.StartNewEntryGRPCResponse.IPayload): messages.notebook.v2.StartNewEntryGRPCResponse.Payload;

                    /**
                     * Encodes the specified Payload message. Does not implicitly {@link messages.notebook.v2.StartNewEntryGRPCResponse.Payload.verify|verify} messages.
                     * @param message Payload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: messages.notebook.v2.StartNewEntryGRPCResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.notebook.v2.StartNewEntryGRPCResponse.Payload.verify|verify} messages.
                     * @param message Payload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: messages.notebook.v2.StartNewEntryGRPCResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Payload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.v2.StartNewEntryGRPCResponse.Payload;

                    /**
                     * Decodes a Payload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Payload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.v2.StartNewEntryGRPCResponse.Payload;

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
                    public static fromObject(object: { [k: string]: any }): messages.notebook.v2.StartNewEntryGRPCResponse.Payload;

                    /**
                     * Creates a plain object from a Payload message. Also converts values to other types if specified.
                     * @param message Payload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: messages.notebook.v2.StartNewEntryGRPCResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Payload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Represents a Notebook */
            class Notebook extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Notebook service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Notebook service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Notebook;

                /**
                 * Calls ReadEntry.
                 * @param request ReadEntryGRPCRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ReadEntryGRPCResponse
                 */
                public readEntry(request: messages.notebook.v2.IReadEntryGRPCRequest, callback: messages.notebook.v2.Notebook.ReadEntryCallback): void;

                /**
                 * Calls ReadEntry.
                 * @param request ReadEntryGRPCRequest message or plain object
                 * @returns Promise
                 */
                public readEntry(request: messages.notebook.v2.IReadEntryGRPCRequest): Promise<messages.notebook.v2.ReadEntryGRPCResponse>;

                /**
                 * Calls StartNewEntry.
                 * @param request StartNewEntryGRPCRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and StartNewEntryGRPCResponse
                 */
                public startNewEntry(request: messages.notebook.v2.IStartNewEntryGRPCRequest, callback: messages.notebook.v2.Notebook.StartNewEntryCallback): void;

                /**
                 * Calls StartNewEntry.
                 * @param request StartNewEntryGRPCRequest message or plain object
                 * @returns Promise
                 */
                public startNewEntry(request: messages.notebook.v2.IStartNewEntryGRPCRequest): Promise<messages.notebook.v2.StartNewEntryGRPCResponse>;
            }

            namespace Notebook {

                /**
                 * Callback as used by {@link messages.notebook.v2.Notebook#readEntry}.
                 * @param error Error, if any
                 * @param [response] ReadEntryGRPCResponse
                 */
                type ReadEntryCallback = (error: (Error|null), response?: messages.notebook.v2.ReadEntryGRPCResponse) => void;

                /**
                 * Callback as used by {@link messages.notebook.v2.Notebook#startNewEntry}.
                 * @param error Error, if any
                 * @param [response] StartNewEntryGRPCResponse
                 */
                type StartNewEntryCallback = (error: (Error|null), response?: messages.notebook.v2.StartNewEntryGRPCResponse) => void;
            }
        }

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
            constructor(properties?: messages.notebook.IStatus);

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
            public static create(properties?: messages.notebook.IStatus): messages.notebook.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link messages.notebook.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.notebook.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link messages.notebook.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.notebook.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.notebook.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.notebook.Status;

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
            public static fromObject(object: { [k: string]: any }): messages.notebook.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.notebook.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

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

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
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

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

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

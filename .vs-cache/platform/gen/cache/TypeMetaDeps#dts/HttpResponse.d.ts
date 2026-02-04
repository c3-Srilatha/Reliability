// TypeScript definitions for the C3 type HttpResponse

/**
 * HTTP response, usually produced by {@link HttpRequest#sendAsync} or {@link HttpRequest#sendSync sendSync}.
 *
 * If result in the response is a stream, and the client header is set to `Accept: text/event-stream`, api server will
 * stream the results back with server sent events (SSE) protocol.
 *
 * @remarks this represents a value passed to a method that expects an instance of HttpResponse
 */
declare interface IHttpResponse {

  /**
   * private field to keep track whether to avoid using chunked Transfer-Encoding for the {@link HttpRequest}
   */
  _notChunked?: boolean;

  /**
   * The internally used case-insensitive HTTP headers.
   */
  _headers?: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>};

  /**
   * The HTTP status code (200, 400, etc) from the remote server.
   */
  statusCode?: number | null;

  /**
   * The HTTP status reason phrase ("OK", "Bad Request", etc).
   */
  reasonPhrase?: string | null;

  /**
   * The HTTP version phrase ("HTTP/1.1").
   */
  httpVersion?: string | null;

  /**
   * The original request this response corresponds to.
   */
  request?: IHttpRequest | null;

  /**
   * The time in milliseconds that sending the request and reading the response took.
   */
  elapsedMs?: number | null;

  _body?: any | null | IByteStream | null | IBytePushStream | null | IStream<any> | null | null;
}

/**
 * HTTP response, usually produced by {@link HttpRequest#sendAsync} or {@link HttpRequest#sendSync sendSync}.
 *
 * If result in the response is a stream, and the client header is set to `Accept: text/event-stream`, api server will
 * stream the results back with server sent events (SSE) protocol.
 *
 * @remarks this represents a made instance of HttpResponse
 */
declare class HttpResponse extends Obj {

  /**
   * private field to keep track whether to avoid using chunked Transfer-Encoding for the {@link HttpRequest}
   */
  readonly _notChunked?: boolean;
  with_notChunked(_notChunked: boolean): HttpResponse;

  /**
   * The internally used case-insensitive HTTP headers.
   */
  readonly _headers?: C3.Map<string | null, C3.Array<string | null>>;
  with_headers(_headers: C3.Map<string | null, C3.Array<string | null>> | {[key: string | null]: C3.Array<string | null> | Array<string | null>}): HttpResponse;

  /**
   * The HTTP status code (200, 400, etc) from the remote server.
   */
  readonly statusCode?: number | null;
  withStatusCode(statusCode: number | null): HttpResponse;

  /**
   * The HTTP status reason phrase ("OK", "Bad Request", etc).
   */
  readonly reasonPhrase?: string | null;
  withReasonPhrase(reasonPhrase: string | null): HttpResponse;

  /**
   * The HTTP version phrase ("HTTP/1.1").
   */
  readonly httpVersion?: string | null;
  withHttpVersion(httpVersion: string | null): HttpResponse;

  /**
   * The original request this response corresponds to.
   */
  readonly request?: HttpRequest | null;
  withRequest(request: IHttpRequest | null): HttpResponse;

  /**
   * The time in milliseconds that sending the request and reading the response took.
   */
  readonly elapsedMs?: number | null;
  withElapsedMs(elapsedMs: number | null): HttpResponse;

  readonly _body?: any | null | ByteStream | null | BytePushStream | null | Stream<any> | null | null;
  with_body(_body: any | null | IByteStream | null | IBytePushStream | null | IStream<any> | null | null): HttpResponse;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): HttpResponse | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): HttpResponse | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): HttpResponse | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): HttpResponse | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): HttpResponse;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): HttpResponse;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): HttpResponse;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<HttpResponse | null>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<HttpResponse | null>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): HttpResponse;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): HttpResponse;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): HttpResponse;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): HttpResponse;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): HttpResponse;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): HttpResponse;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): HttpResponse;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): HttpResponse;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): HttpResponse;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string | null): HttpResponse;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType | null): HttpResponse;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): HttpResponse;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): HttpResponse;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): HttpResponse;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): HttpResponse;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): HttpResponse;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): HttpResponse;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): HttpResponse;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): HttpResponse;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): HttpResponse;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): HttpResponse;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): HttpResponse;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, otherFieldsFilter: Type): HttpResponse;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): HttpResponse;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): HttpResponse;

  mergeJson(json: any | null): HttpResponse;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): HttpResponse;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): HttpResponse;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<HttpResponse | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<HttpResponse | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<HttpResponse | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<HttpResponse | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<HttpResponse | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, HttpResponse | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, HttpResponse | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<HttpResponse | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<HttpResponse | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): HttpResponse;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): HttpResponse;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): HttpResponse;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): HttpResponse;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): HttpResponse;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): HttpResponse;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): HttpResponse;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): HttpResponse;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): HttpResponse;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<HttpResponse>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): HttpResponse;

  /**
   * Returns the header value for a header containing a single value.
   *
   * @param @required name
   *           The header name, case insensitive
   * @param dflt
   *           The default value to return if the header does not exist
   * @return The header value, or values concatenated together by ', ' if multiple, or dflt if not found.
   */
  header(name: string, dflt?: string | null): string | null;

  /**
   * Returns the header values for a header containing potentially multiple values.
   *
   * @param @required name
   *           the header name, case insensitive
   * @return The header values array if header is found, else empty array.
   */
  headers(name: string): C3.Array<string | null>;

  /**
   * Returns the headers map with the lower-case header and list of values
   */
  allHeaders(): C3.Map<string | null, C3.Array<string | null>>;

  /**
   * Returns headers map with keys of the lower-case header and value the result of the predicate. If predicate is not
   * provided, it will combine all headers with a ", " except it will skip the set-cookie header if its present.
   *
   * @param merger
   *           the optional function used to turn the array of header values to a string value. If the predicate returns
   *           an empty value, it will not be added to the output.
   * @return The headers map with keys of the lower-case header and value the result of the predicate
   */
  allHeadersMerged(merger?: λBiFunction<string | null, C3.Array<string | null>, string | null> | null): C3.Map<string | null, string | null>;

  /**
   * Returns the first header value satisfied by the given predicate.
   *
   * @param name
   *           the header name (case-insensitive)
   * @param predicate
   *           the condition used to find the header value. If null the first header value found will be used
   * @return The first matching header value for name or null if not found.
   */
  findFirstHeaderValue(name: string, predicate?: λPredicate<string> | null): string | null;

  /**
   * Returns the header values satisfied by the given predicate.
   *
   * @param name
   *           the header name (case-insensitive)
   * @param predicate
   *           the condition used to find the header values. If null the all header values for name will be returned
   * @return All matching header values for name or null if not found.
   */
  findAllHeaderValues(name: string, predicate?: λPredicate<string> | null): C3.Array<string | null>;

  /**
   * The content type for these headers.
   */
  contentType(): string | null;

  /**
   * The content encoding for these headers.
   */
  contentEncoding(): string | null;

  /**
   * Gets the cookie value from Http headers by a given cookie key.
   *
   * @param key
   *           cookie key
   * @return The cookie value or null if not found.
   */
  cookieValue(key: string): string | null;

  /**
   * Sets the header to (only) the specified value. This will wipe out any prior setting of this header, replacing it
   * with just this value. This is useful to _change_ a header value, instead of adding another value.
   *
   * @param name
   *           header name (case-insensitive)
   * @param value
   *           replacement header value
   * @return The new {@link WithHttpHeaders} object with name and value applied
   *
   * @see #withHeader
   * @see #withoutHeader
   */
  replaceHeader(name: string, value: string): HttpResponse;

  /**
   * Adds a header value into the existing headers. If called multiple times with the same header name, all values
   * will be added in the order they were called with duplicates removed.
   *
   * @param name
   *           header name (case-insensitive)
   * @param value
   *           additional header value
   * @return The new {@link WithHttpHeaders} object with name and value applied
   *
   * @see #replaceHeader
   * @see #withoutHeader
   */
  withHeader(name: string, value: string): HttpResponse;

  /**
   * Removes all values from the existing header.
   *
   * @param name
   *           header name (case-insensitive)
   * @return The new {@link WithHttpHeaders} object with header removed
   *
   * @see #withHeader
   * @see #replaceHeader
   */
  withoutHeader(name: string): HttpResponse;

  /**
   * Puts multiple header values into the existing headers. If the map has keys that collide in a case-insensitive way,
   * the order of the values may not be preserved, but duplicate values will be removed.
   *
   * @param headers
   *           a map where the key is a header and value is one or many string values for that header.
   * @return A modified {@link WithHttpHeaders} object with the headers applied
   */
  withHeaders(headers?: C3.Map<string, string | null | C3.Array<string | null> | null>): HttpResponse;

  /**
   * Adds "Accept" and "ContentType" headers as "application/json".
   */
  withJsonHeaders(): HttpResponse;

  /**
   * Add a "X-C3-Action-Engine" header appropriate to the current execution environment.
   */
  withActionEngineHeader(): HttpResponse;

  /**
   * Add Authorization header to this HTTP header.
   */
  withAuthHeader(auth: string | null): HttpResponse;

  /**
   * Adds a content type to this HTTP header. Will silently not add contentType if it is empty.
   */
  withContentType(contentType: string | null): HttpResponse;

  /**
   * Adds a content encoding type to this HTTP header. Will silently not add contentEncoding if it is empty.
   */
  withContentEncoding(contentEncoding: string): HttpResponse;

  /**
   * This method ensures that the chunked Transfer-Encoding will NOT be applied to the {@link HttpRequest} body.
   */
  withoutChunkedTransferEncoding(): HttpResponse;

  /**
   * Return the standard reason phrase for an status code. For example: "Not Found" for 404.
   *
   * @param code HTTP status code
   * @param failIfNone throw an error if the code is invalid
   * @return reason phrase
   */
  static statusCodeToReasonPhrase(code: number, failIfNone?: boolean): string | null;

  /**
   * The entity body as {@link Content} from the response, if any.
   */
  body(): Content | null;

  /**
   * Whether any body is present (regardless of status code).
   */
  hasBody(): boolean;

  /**
   * @return `true` if the request succeeded (2xx).
   */
  succeeded(): boolean;

  /**
   * @return `true` if the request failed (4xx, 5xx).
   */
  failed(): boolean;

  /**
   * @return error information if request has #failed.
   */
  error(): C3.Error | null;

  /**
   * @return `true` if the request was a redirect (3xx).
   */
  redirected(): boolean;

  /**
   * @return new location if request was #redirected.
   */
  redirectUrl(): string | null;

  /**
   * @return C3 server id if this request was sent to C3 server or null or error otherwise.
   */
  serverId(failIfNot?: boolean): string | null;

  /**
   * Parse the response body as JSON. If the body is empty, the value is null, otherwise it must be valid JSON.
   */
  json(): any | null;

  /**
   * Get the response body as a string. If the body is empty, the value is null.
   */
  string(): string | null;

  static fromJava(request: HttpRequest, rsp: any): HttpResponse;

  static fromJavaClosable(request: HttpRequest, srp: any): HttpResponse;

  /**
   * Construct HttpResponse from python native http.client.HttpResponse.
   */
  static fromPython(rsp: any): HttpResponse;

  withBody(body?: any | null | string | null | null): HttpResponse;

  /**
   * Constructs a new HttpResponse with the given FormPost as the body.
   */
  withFormPostBinding(formPost?: Html.FormPostBinding | null): HttpResponse;

  /**
   * Adds a Set-Cookie header to the response. Note that each cookie uses a separate header so a new header is always
   * added.
   *
   * @param name cookie name
   * @param value cookie value
   * @return modified response
   */
  withSetCookie(name: string, value: string | null): HttpResponse;

  /**
   * Write body, headers, status code, and reason phrase from ths HttpResponse to provided java native
   * HttpServerResponse. This is not a pure function - the HttpServerResponse will be mutated.
   */
  writeToHttpServerResponse(res: any): void;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}

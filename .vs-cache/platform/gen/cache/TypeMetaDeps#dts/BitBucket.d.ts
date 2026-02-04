// TypeScript definitions for the C3 type BitBucket

/**
 * REST APIs for BiBucket Server git repositories.
 * Some APIs return paginated results. Please refer to the documentation at
 * https://docs.atlassian.com/bitbucket-server/rest/5.0.1/bitbucket-rest.html#paging-params on how to use
 * the query parameters for pagination (`start`, `limit`).
 *
 * @remarks this represents a value passed to a method that expects an instance of BitBucket
 */
declare interface IBitBucket {

  url?: string | null;

  auth?: string | null;
}

/**
 * REST APIs for BiBucket Server git repositories.
 * Some APIs return paginated results. Please refer to the documentation at
 * https://docs.atlassian.com/bitbucket-server/rest/5.0.1/bitbucket-rest.html#paging-params on how to use
 * the query parameters for pagination (`start`, `limit`).
 *
 * @remarks this represents a made instance of BitBucket
 */
declare class BitBucket extends Obj {

  readonly url?: string | null;
  withUrl(url: string | null): BitBucket;

  readonly auth?: string | null;
  withAuth(auth: string | null): BitBucket;

  /**
   * @return executes given action representing abstract method call on one of this type's sub-type.
   */
  static _exec(action: Action): any;

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
  static fromJson(json: any | null): BitBucket | null;

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
  static fromJsonString(json: string | null): BitBucket | null;

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
  static fromXmlString(xml: string | null): BitBucket | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): BitBucket | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): BitBucket;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BitBucket;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): BitBucket;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BitBucket | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<BitBucket | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): BitBucket;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BitBucket;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): BitBucket;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): BitBucket;

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
  withField(field: string, value: any, doNotConvert?: boolean): BitBucket;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): BitBucket;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): BitBucket;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): BitBucket;

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
  withoutFieldAtPath(path: string): BitBucket;

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
  withoutField(field: string | null): BitBucket;

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
  withoutField(field: FieldType | null): BitBucket;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): BitBucket;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): BitBucket;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): BitBucket;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): BitBucket;

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
  defaultField(field: string): BitBucket;

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
  defaultField(field: FieldType): BitBucket;

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
  unsetField(field: string): BitBucket;

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
  unsetField(field: FieldType): BitBucket;

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
  removeField(field: string): BitBucket;

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
  removeField(field: FieldType): BitBucket;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): BitBucket;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): BitBucket;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): BitBucket;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): BitBucket;

  mergeJson(json: any | null): BitBucket;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): BitBucket;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): BitBucket;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<BitBucket | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<BitBucket | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<BitBucket | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<BitBucket | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<BitBucket | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, BitBucket | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, BitBucket | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<BitBucket | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<BitBucket | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): BitBucket;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): BitBucket;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): BitBucket;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): BitBucket;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): BitBucket;

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
  static make(fields: any, withDefaults?: boolean): BitBucket;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): BitBucket;

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
  afterMake(): BitBucket;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): BitBucket;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<BitBucket>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): BitBucket;

  /**
   * Returns cached configuration for instance of this type. See Configurable type documentation for more details.
   *
   * @param secrets
   *          if set to `true` and current role has sufficient permissions configuration will contain values of secret
   *          fields. Otherwise configuration will not have values for secrets.
   * @return instance of configuration - never `null`.
   */
  config(secrets?: boolean): RestConfig;

  /**
   * @return configuration key for this instance.
   */
  configKey(): string | null;

  /**
   * @return configuration key for this type assuming it is singleton.
   */
  configSingletonKey(): string | null;

  /**
   * @return type configuration for the given {@link Configurable} type.
   * E.g. {@see REST} & {@see RestConfig}
   */
  static typeConfig(): RestConfig;

  /**
   * @return weather or not target URL is configured.
   */
  static isUrlConfigured(): boolean;

  /**
   * @return URL endpoint for this API.
   */
  apiUrl(): string | null;

  /**
   * @return authorization token this API.
   */
  apiAuth(): string | null;

  /**
   * sets configuration for Api URL and Auth.
   */
  static setApiUrlAndAuth(url: string | null, auth?: string | null, configOverride?: string | null): void;

  /**
   * Call an existing action on this type using the provided args
   * e.g. {@link Jira#search} may return certain mapped fields but if you want the raw json payload from the api use this
   * @param action
   *            Name of the action to call. e.g. 'search' on {@link Jira} type
   * @param args
   *            Positional args for the action to invoke
   * @return raw json response or null (if Content-Type is not application/json) from the api
   */
  callJson(action: string, ...args: any[]): any | null;

  /**
   * Trigger an http call with the given parameters and return response as json
   * This is a low level api call that returns the raw json response and helpful when either an api is not mapped or not
   * all fields are part of the response and this is useful to get the raw values
   * @param httpMethod
   *            The http method to use (e.g. GET, POST, PUT, DELETE)
   * @param encodedPath
   *            The path to append to the configured url for this Rest type. E.g. if Jira has a configured url, provide the encodedPath to append to it e.g. /issue/TICKET-1234
   * @param request
   *            The http request body
   * @param httpHeaders
   *            The http request headers
   * @return raw json response or null (if Content-Type is not application/json) from the api
   */
  callJsonApi(httpMethod: string, encodedPath: string, request?: any | null, httpHeaders?: C3.Map<string | null, string | null>): any | null;

  /**
   * Determine if OAuth 2.0 is configured
   */
  isOAuthConfigured(): boolean;

  /**
   * generate the OAuth 2.0 token for the specified scopes
   */
  generateOAuthToken(oAuthScope?: C3.Array<string>): string | null;

  /**
   * Set up {@link RestConfig.OAuth} along with the private key.
   */
  static setOAuth(url: string | null, oauth: RestConfig.OAuth, privateKey: CryptoPrivateKey, configOverride?: string | null): void;

  /**
   * Gets the repositories available to the user making this call
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/5.0.1/bitbucket-rest.html#idm45993794109152
   *
   * @param name
   *           Filters the results to repos that have this name
   * @param projectname
   *           Filters the results to repos that are associated with this project name
   * @param permission
   *           Filters the results to repos that matches the permission for the user making the call
   * @param visibility
   *           Filters the results based on the visibility of the repo
   * @param start
   *           The page number for the paginated results
   * @param limit
   *           The max number of records to return per page
   */
  repositories(name?: string | null, projectname?: string | null, permission?: string | null, visibility?: string | null, start?: number | null, limit?: number | null): any | null;

  /**
   * Gets the content of a file
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/5.0.1/bitbucket-rest.html#idm45993793705776
   * Note: The API returns lines instead of raw content
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param filePath
   *           The path to the file to get the contents from
   * @param at
   *           The branch name to get the file from
   * @param type
   *           When set to true, the file type instead of the file contents will be returned
   * @param blame
   *           If present the blame will be returned for the file as well
   * @param noContent
   *           If present and used with `blame` only the blame is retrieved instead of the contents
   * @param start
   *           The page number for the paginated results
   * @param limit
   *           The max number of records to return per page
   */
  content(projectKey: string, repoName: string, filePath: string, at?: string | null, type?: string | null, blame?: string | null, noContent?: string | null, start?: number | null, limit?: number | null): any | null;

  /**
   * Gets the branches in the repository
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/5.0.1/bitbucket-rest.html#idm45993793026928
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param baseBranch
   *           The name of the base branch
   * @param details
   *           When set to true, the details about the branch is returned as well
   * @param filterText
   *           Filters the branch name with substring match
   * @param orderBy
   *           Order the result alphabetically or chronologically
   * @param start
   *           The page number for the paginated results
   * @param limit
   *           The max number of records to return per page
   */
  branches(projectKey: string, repoName: string, baseBranch?: string | null, details?: boolean, filterText?: string | null, orderBy?: string | null, start?: number | null, limit?: number | null): any | null;

  /**
   * REST API to create a branch on BitBucket.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/5.5.0/bitbucket-branch-rest.html#idm138909639685792
   *
   * Example of payload for this POST request:
   * {
   *   "name": "feature/my-feature-branch",
   *   "startPoint": "refs/heads/master"
   * }
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param name
   *           The name of the branch
   * @param startPoint
   *           The base branch
   */
  createBranch(projectKey: string, repoName: string, name: string, startPoint: string): any | null;

  /**
   * REST API to delete a branch on BitBucket.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/5.5.0/bitbucket-branch-rest.html#idm138909639685792
   *
   * Example of payload for this DELETE request:
   * {
   *   "name": "feature/my-feature-branch",
   *   "dryRun": false
   * }
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param name
   *           The name of the branch
   * @param dryRun
   *           When set to true, will not actually delete the branch. This feature is useful to check if deleting the
   *           branch will cause any errors.
   */
  deleteBranch(projectKey: string, repoName: string, name: string, dryRun?: boolean): any | null;

  /**
   * Create a pull request.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/7.7.1/bitbucket-rest.html#idp293
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param title
   *           The pull request title
   * @param description
   *           The pull request description
   * @param fromRef
   *           An object identifying the ref from which the pull request should be created.  This can be an object
   *           with one field, named `id`, whose value is the ref.  Ex. `{id: 'featureBranchName'}`.
   * @param toRef
   *           An object identifying the ref where the pull request is intended to be merged to.This can be an object
   *           with one field, named `id`, whose value is the ref.  Ex. `{id: 'develop'}`.
   */
  createPullRequest(projectKey: string, repoName: string, title: string, description?: string | null, fromRef: any, toRef: any): any | null;

  /**
   * Return pull requests that match the given parameters.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/7.7.1/bitbucket-rest.html#idp292
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param direction
   *           The direction relative to the specified repository
   * @param at
   *           The fully-qualified branch name to find pull requests to or from.  Ex. `refs/heads/master`
   * @param state
   *           The state of the pull requests to return.
   * @param order
   *           The order of the returned pull requests.  `newest` means newest pull requests are first.
   * @param withAttributes
   *           If true, return additional pull request attributes.
   * @param withProperties
   *           If true, return additional pull request properties.
   * @param filterText
   *           String filter for pull request title or description.
   * @param start
   *           The starting index for the paginated results
   * @param limit
   *           The max number of records to return per page
   *
   * @return an object containing the results, with fields size (int), limit (int), start (int), and values (array).
   *         The values array contain the individual pull requests.  Some of the fields include
   *         - title
   *         - description
   *         - state ('OPEN', etc.)
   *         - fromRef (an object whose id is a ref; it contains many other fields)
   *         - toRef (id is a ref)
   *         - author (an object with a `user` field contains name, emailAddress, etc. of the pull request author)
   */
  pullRequests(projectKey: string, repoName: string, direction?: string | null, at?: string | null, state?: string | null, order?: string | null, withAttributes?: boolean, withProperties?: boolean, filterText?: string | null, start?: number | null, limit?: number | null): any | null;

  /**
   * Return the pull request with the given id.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/7.7.1/bitbucket-rest.html#idp295
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param pullRequestId
   *           The id of the pull request
   * @return the pull request.  See format in {@link pullRequests}.
   */
  pullRequest(projectKey: string, repoName: string, pullRequestId: string): any | null;

  /**
   * Return commits that match the given parameters.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/7.7.1/bitbucket-rest.html#idp225
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param followRenames
   *           Whether to follow commit history through file renames.  An error will occur unless {@link path} is
   *           provided and points to a single file.
   * @param ignoreMissing
   *           Whether to ignore missing commits
   * @param merges
   *           Whether to `exclude` merge commits, `include` both merge and non-merge commits, or
   *           `only` return merge commits
   * @param path
   *           The path to filter commits by
   * @param since
   *           Return commits after this commit id or ref, exclusive
   * @param until
   *           Return commits before this commit id or ref, inclusive
   * @param withCounts
   *           If true, return counts of commits and unique authors
   * @param avatarSize
   *           If set, also return avatar urls of commit authors with this size in pixels
   * @param avatarScheme
   *           The scheme for the avatar urls
   * @param start
   *           The starting index for the paginated results
   * @param limit
   *           The max number of records to return per page
   */
  commits(projectKey: string, repoName: string, followRenames?: boolean, ignoreMissing?: boolean, merges?: string | null, path?: string | null, since?: string | null, until?: string | null, withCounts?: boolean, avatarSize?: string | null, avatarScheme?: string | null, start?: number | null, limit?: number | null): any | null;

  /**
   * Returns details of the given commit.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/7.7.1/bitbucket-rest.html#idp223
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param commitId
   *           The commit sha (branch names, etc. will not work)
   * @param path
   *           If specified, return details for the first commit starting from the given
   *           commitId that affects this path.  Otherwise, the commit with the given
   *           commitId is returned.
   */
  commit(projectKey: string, repoName: string, commitId: string, path?: string | null): any | null;

  /**
   * Returns diffs of the given commit.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/7.7.1/bitbucket-rest.html#idp238
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param commitId
   *           The commit id
   * @param autoSrcPath
   *           If true, try to find source path if not provided.
   * @param contextLines
   *           The number of lines to include around added/removed lines in the diff
   * @param pullRequestId
   *           Only retrieve comments for this pull request.  Requires withComments to be true.
   * @param since
   *           The previous commit to compare against.  If blank, compare against the commit's immediate
   *           parent (if any).
   * @param srcPath
   *           The source path of the file if it was copied, removed, or renamed.
   * @param whitespace
   *           Whitespace handling.  Only documented value is 'ignore-all'.
   * @param withComments
   *           If true, embed comments in the diff.
   * @param start
   *           The starting index for the paginated results
   * @param limit
   *           The max number of records to return per page
   */
  commitDiffs(projectKey: string, repoName: string, commitId: string, autoSrcPath?: boolean, contextLines?: number | null, pullRequestId?: string | null, since?: string | null, srcPath?: string | null, whitespace?: string | null, withComments?: boolean, start?: number | null, limit?: number | null): any | null;

  /**
   * Create or update a file and create a commit for that file.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/7.7.1/bitbucket-rest.html#idp218
   *
   * Note: this resource apparently only accepts content type multipart/form-data.  This is not
   * explicitly stated in the atlassian.com documentation.
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param path
   *           The path of the file
   * @param branch
   *           The branch to commit to
   * @param sourceBranch
   *           If creating a new branch, the source branch for the new branch (the new branch name is given
   *           by {@link branch}).  If this is not set, the commit is on an existing branch (given by
   *           {@link branch}).
   * @param content
   *           The file content
   * @param message
   *           The commit message
   * @param sourceCommitId
   *           The commit id of the previous version of the file.  This is used to detect a change in
   *           the file.  If this is not set, the file is expected to be a new file.
   */
  createContent(projectKey: string, repoName: string, path: string, branch?: string | null, sourceBranch?: string | null, content?: string | null, message?: string | null, sourceCommitId?: string | null): any | null;

  /**
   * Retrieve version information and other application properties.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/7.8.0/bitbucket-rest.html#idp89
   */
  applicationProperties(): HttpResponse | null;

  /**
   * Attempts to merge a pull request.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/4.14.1/bitbucket-rest.html#idm45888278164320
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param pullRequestId
   *           The number id of the pull request
   * @param version
   *           The version of the pull request
   */
  mergePullRequest(projectKey: string, repoName: string, pullRequestId: string, version?: number | null): any | null;

  /**
   * Closes a pull request.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/4.14.1/bitbucket-rest.html#idm45888278147920
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param pullRequestId
   *           The number id of the pull request
   * @param version
   *           The version of the pull request
   */
  declinePullRequest(projectKey: string, repoName: string, pullRequestId: string, version?: number | null): any | null;

  /**
   * Gets information about a pull request. Used to grab the version before performing any write actions on the pull
   * request.
   * Documentation: https://docs.atlassian.com/bitbucket-server/rest/4.14.1/bitbucket-rest.html#idm45888278177824
   *
   * @param projectKey
   *           The BitBucket project key
   * @param repoName
   *           The name of the repository
   * @param pullRequestId
   *           The number id of the pull request
   */
  getPullRequest(projectKey: string, repoName: string, pullRequestId: string): any | null;

  /**
   * Return the username associated with the auth token.
   * See https://community.atlassian.com/t5/Answers-Developer-Questions/Stash-how-to-get-the-identity-of-the-connected-user-via-the-REST/qaq-p/566075
   */
  whoAmI(): string | null;
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

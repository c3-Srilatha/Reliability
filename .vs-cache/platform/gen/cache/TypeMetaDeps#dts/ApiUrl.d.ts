// TypeScript definitions for the C3 type ApiUrl

/**
 * URL for C3 Api Endpoint.
 *
 * @remarks this represents a value passed to a method that expects an instance of ApiUrl
 */
declare interface IApiUrl {

  /**
   * Scheme of URL, ex. scheme = 'ftp'.
   */
  scheme: string;

  /**
   * Encoded (raw) user of URL, ex. user = 'c3iot'.
   */
  encodedUser?: string | null;

  /**
   * Encoded (raw) raw password of URL, ex. password = 'pwd'.
   */
  encodedPassword?: string | null;

  /**
   * Host of URL, ex. host = 'ftp.example.com'.
   */
  host?: string | null;

  /**
   * Port Number of URL, ex. port = 8080. Will null if missing.
   */
  port?: number | null;

  /**
   * Encoded (raw) path of URL, ex. '/docs/my%20resource.html'.
   */
  encodedPath?: string | null;

  /**
   * Encoded (raw) query of URL (after the `?` mark), ex. 'ion=1&espv=8'. (This will not include the fragment.)
   */
  encodedQuery?: string | null;

  /**
   * Encoded (raw) fragment of URL (after the `#` mark), ex. 'chapter1'.
   */
  encodedFragment?: string | null;
}

/**
 * URL for C3 Api Endpoint.
 *
 * @remarks this represents a made instance of ApiUrl
 */
declare class ApiUrl extends Obj {

  /**
   * Scheme of URL, ex. scheme = 'ftp'.
   */
  readonly scheme: string;
  withScheme(scheme: string): ApiUrl;

  /**
   * Encoded (raw) user of URL, ex. user = 'c3iot'.
   */
  readonly encodedUser?: string | null;
  withEncodedUser(encodedUser: string | null): ApiUrl;

  /**
   * Encoded (raw) raw password of URL, ex. password = 'pwd'.
   */
  readonly encodedPassword?: string | null;
  withEncodedPassword(encodedPassword: string | null): ApiUrl;

  /**
   * Host of URL, ex. host = 'ftp.example.com'.
   */
  readonly host?: string | null;
  withHost(host: string | null): ApiUrl;

  /**
   * Port Number of URL, ex. port = 8080. Will null if missing.
   */
  readonly port?: number | null;
  withPort(port: number | null): ApiUrl;

  /**
   * Encoded (raw) path of URL, ex. '/docs/my%20resource.html'.
   */
  readonly encodedPath?: string | null;
  withEncodedPath(encodedPath: string | null): ApiUrl;

  /**
   * Encoded (raw) query of URL (after the `?` mark), ex. 'ion=1&espv=8'. (This will not include the fragment.)
   */
  readonly encodedQuery?: string | null;
  withEncodedQuery(encodedQuery: string | null): ApiUrl;

  /**
   * Encoded (raw) fragment of URL (after the `#` mark), ex. 'chapter1'.
   */
  readonly encodedFragment?: string | null;
  withEncodedFragment(encodedFragment: string | null): ApiUrl;

  /**
   * @return a string representation of URL
   */
  toString(): string | null;

  /**
   * Parse the input URL string into Url type and instantiate correct sub-type based on scheme (e.g. FileUrl)
   * @param url
   *           A string represents URL
   * @return the correct Url type constructed from the input URL string
   */
  static fromString(s: string | null): ApiUrl | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): ApiUrl | null;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): ApiUrl;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ApiUrl;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): ApiUrl;

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
  static make(fields: any, withDefaults?: boolean): ApiUrl;

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
  static fromJson(json: any | null): ApiUrl | null;

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
  static fromJsonString(json: string | null): ApiUrl | null;

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
  static fromXmlString(xml: string | null): ApiUrl | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): ApiUrl | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ApiUrl;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ApiUrl;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ApiUrl;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ApiUrl | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ApiUrl | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): ApiUrl;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ApiUrl;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ApiUrl;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ApiUrl;

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
  withField(field: string, value: any, doNotConvert?: boolean): ApiUrl;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ApiUrl;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): ApiUrl;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ApiUrl;

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
  withoutFieldAtPath(path: string): ApiUrl;

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
  withoutField(field: string | null): ApiUrl;

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
  withoutField(field: FieldType | null): ApiUrl;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): ApiUrl;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): ApiUrl;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ApiUrl;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): ApiUrl;

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
  defaultField(field: string): ApiUrl;

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
  defaultField(field: FieldType): ApiUrl;

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
  unsetField(field: string): ApiUrl;

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
  unsetField(field: FieldType): ApiUrl;

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
  removeField(field: string): ApiUrl;

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
  removeField(field: FieldType): ApiUrl;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): ApiUrl;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): ApiUrl;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): ApiUrl;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): ApiUrl;

  mergeJson(json: any | null): ApiUrl;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): ApiUrl;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): ApiUrl;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<ApiUrl | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<ApiUrl | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ApiUrl | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<ApiUrl | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ApiUrl | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, ApiUrl | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ApiUrl | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ApiUrl | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ApiUrl | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): ApiUrl;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): ApiUrl;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): ApiUrl;

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
  afterMake(): ApiUrl;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ApiUrl;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<ApiUrl>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): ApiUrl;

  /**
   * Decoded user id for this URL.
   */
  user(): string | null;

  /**
   * Decoded password for this URL.
   */
  password(): string | null;

  /**
   * Domain of URL, ex. 'example.com'
   */
  domainName(): string | null;

  /**
   * Default port number for this URL. This is helpful if port is missing.
   */
  defaultPort(): number;

  /**
   * Origin of the represented URL. If this does not include a host, null is returned.
   */
  origin(): string | null;

  /**
   * Decoded path of URL.e.g.'/docs/my resource.html'
   */
  path(): UrlPath | null;

  /**
   * Checks whether a given url belongs to the specified top level domain
   */
  isForTopLevelDomain(zone: string): boolean;

  /**
   * Decoded query of URL.
   */
  query(): UrlQuery | null;

  /**
   * Decoded fragment of URL, ex. 'chapter1'.
   */
  fragment(): string | null;

  /**
   * Retrieves directory url where this file is located.
   */
  directoryUrl(): string;

  /**
   * Calls provided action by passing URL of each parent directory of the path in this URL starting from root.
   *
   * E.g. for `s3://data-load/dir1/dir2/file` will call `action` 3 times with:
   * - `s3://data-load/`
   * - `s3://data-load/dir1/`
   * - `s3://data-load/dir1/dir2/`
   */
  eachDirectory(action: λConsumer<string | null>): number;

  /**
   * Retrieves name of the parent directory. Note that directory names are not URL encoded.
   */
  parentDirectory(): string | null;

  /**
   * Retrieves name of the file. Note that file names are not URL encoded.
   */
  fileName(): string | null;

  /**
   * Retrieves extension of the file or null if file doesn't have an extension, including the leading dot (e.g., ".html", ".json").
   * Note that file extensions are not URL encoded.
   */
  fileExt(): string | null;

  /**
   * Retrieves extension of the file without the leading dot or null if file doesn't have an extension (e.g., "html", "json").
   * Note that file extensions are not URL encoded.
   */
  fileExtWithoutDot(): string | null;

  /**
   * Retrieves name of the file without file extension.
   */
  fileNameNoExt(): string | null;

  /**
   * Changes file name in this instance.
   */
  withFileName(fileName: string | null): ApiUrl;

  /**
   * Changes file extension in this instance.
   */
  withFileExt(fileExt: string | null): ApiUrl;

  /**
   * Url encodes and replaces current path.
   */
  withPath(...parts: string | null[]): ApiUrl;

  /**
   * Replaces current path with provided encoded path.
   */
  withEncodedPath(...encodedParts: string | null[]): ApiUrl;

  /**
   * Return the URL without the query string (`?`) or fragment (`#`).
   */
  withoutQueryOrFragment(): Url;

  /**
   * Url encodes and appends component to path.
   */
  appendPath(...parts: string | null[]): ApiUrl;

  /**
   * Appends already URL encoded component to path.
   */
  appendEncodedPath(...encodedParts: string | null[]): ApiUrl;

  /**
   * @return true if this is a valid url.
   */
  static isValid(url: string): boolean;

  /**
   * @return true if this is a valid url host.
   */
  static isValidHost(host: string): boolean;

  /**
   * @return true if this is a remote url (e.g. S3, HDFS)
   */
  isRemote(): boolean;

  /**
   * @return true if this url is reachable for access.
   */
  isReachable(spec?: RetryableSpec | null): boolean;

  /**
   * @return the result for pinging this URL.
   */
  ping(spec?: RetryableSpec | null): PingResult;

  /**
   * @return true if this path has a url scheme.
   */
  static hasScheme(path: string): boolean;

  /**
   * @return true if this path has a HTTP/HTTPS url scheme.
   */
  static hasHttpScheme(path: string): boolean;

  /**
   * Test if the request has query parameters in the URL (`?`).
   */
  static hasQuery(url: string): boolean;

  /**
   * @return true if this path has a HTTP/HTTPS url scheme and not a relative path.
   */
  static isHttpAbsolute(path: string): boolean;

  /**
   * @return url path that can be used to navigate from this URL to a target URL.
   */
  relativePathTo(targetUrl?: Url | null): UrlPath | null;

  /**
   * @return serializer / deserializer for file extension of this URL or `null` if none available
   */
  serDeser(serType?: Type | null, failIfNone?: boolean): SerDeser | null;

  /**
   * @return true if this is a file:// url.
   */
  isFileUrl(): boolean;

  /**
   * @return FileUrl if this is a file:// url or null otherwise.
   */
  asFileUrl(): FileUrl | null;

  /**
   * @return specialized sub-type Url based on provided scheme. Could return Url if scheme has no specialization.
   */
  static typeFromScheme(scheme: string): Type;

  /**
   * @return path from a given url. If input is not a fully qualified url assumes it's already a path.
   */
  static extractPath(url?: string | null): UrlPath | null;

  /**
   * @return Url obj with appended parts for in memory content
   */
  static mem(...parts: string | null[]): Url;

  /**
   * @return checks if host of url is valid domain name (FQDN)
   */
  isHostValidDomainName(): boolean;

  /**
   * @return checks if host of url is ipv4 or ipv6 address
   */
  isHostValidIp(): boolean;

  /**
   * @return checks if host of url is ipv4 address
   */
  isHostValidIpv4(): boolean;

  /**
   * @return checks if host of url is ipv6 address
   */
  isHostValidIpv6(): boolean;

  /**
   * @return the URL element value properly encoded (UTF-8)
   */
  static encode(s: string | null): string | null;

  /**
   * @return endpoint to root of this URL; ex. { address: ftp.example.com, port: 8080 }
   */
  toEndpoint(): Endpoint;

  /**
   * Splits the fragment from thisURL or path. The first element of the pair will be the URL/path and the second
   * will be everything after the `#`.
   */
  static splitFragment(s: string | null): Pair<string | null, string | null>;

  /**
   * @return C3 server node id if input is a valid C3 request url and it's targeted for a specific C3 server node.
   *         (vs. load balanced endpoint). Will return `null` if this is not a C3 request url or it's using cluster-wide
   *         endpoint behind load balancer.
   */
  static extractServerNodeId(url: string | null): string | null;

  /**
   * @return API endpoint url for /file/ commands to upload/import files
   * ```js
   * var file = FileSystem.c3().createFile("foo/bar/baz.csv");
   * var fileUrl = file.url();
   * var appUrl = C3.app().url().endpoint();
   * var absoluteFileUrl = ApiUrl.forFile(file);
   * var relativeFileUrl = ApiUrl.forFile(file, true);
   * ```
   * The above code may give values like below:
   * fileUrl = "c3fs:///foo/bar/baz.csv"
   * appUrl = "https://mydomain/myenv/myapp/"
   * absoluteFileUrl = "https://mydomain/myenv/myapp/file/c3fs:///foo/bar/baz.txt"
   * relativeFileUrl = "file/c3fs:///foo/bar/baz.csv"
   * Note: appUrl + relativeFileUrl = absoluteFileUrl
   *
   * @see AppUrl#endpoint
   * @see FileApi
   */
  static forFile(file: File, relative?: boolean): string;

  /**
   * @return url for curl commands to upload/import files
   */
  static forFileCurl(spec: CurlFileSpec, contentLocation: string, prefix: string): string;

  /**
   * @return url for Apis
   */
  static forApiCurl(action: PartiallyAppliedAction, cluster?: string | null, tenant?: string | null, tag?: string | null): string;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
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

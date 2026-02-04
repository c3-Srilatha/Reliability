// TypeScript definitions for the C3 type ContentType

/**
 * Represents the media content type. Please refer to {@link MediaType} for the list of supported media types.
 * For frequently used files such as *.csv, *.json, *.xml, please use text/csv, application/json,
 * and application/xml as their mimeType
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * @remarks this represents a value passed to a method that expects an instance of ContentType
 */
declare interface IContentType {

  /**
   * Media Type.
   */
  mediaType: string;

  /**
   * Character set name.
   */
  charset?: string | null;

  /**
   * Custom parameters.
   *
   * E.g. in `Content-Type: multipart/form-data; boundary=ExampleBoundaryString` the boundary is a parameter.
   */
  parameters?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};
}

/**
 * Represents the media content type. Please refer to {@link MediaType} for the list of supported media types.
 * For frequently used files such as *.csv, *.json, *.xml, please use text/csv, application/json,
 * and application/xml as their mimeType
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * @remarks this represents a made instance of ContentType
 */
declare class ContentType extends Obj {

  /**
   * Media Type.
   */
  readonly mediaType: string;
  withMediaType(mediaType: string): ContentType;

  /**
   * Character set name.
   */
  readonly charset?: string | null;
  withCharset(charset: string | null): ContentType;

  /**
   * Custom parameters.
   *
   * E.g. in `Content-Type: multipart/form-data; boundary=ExampleBoundaryString` the boundary is a parameter.
   */
  readonly parameters?: C3.Map<string | null, string | null>;
  withParameters(parameters: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): ContentType;

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
  static fromJson(json: any | null): ContentType | null;

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
  static fromJsonString(json: string | null): ContentType | null;

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
  static fromXmlString(xml: string | null): ContentType | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): ContentType | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ContentType;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ContentType;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): ContentType;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ContentType | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<ContentType | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): ContentType;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ContentType;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ContentType;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ContentType;

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
  withField(field: string, value: any, doNotConvert?: boolean): ContentType;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ContentType;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): ContentType;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ContentType;

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
  withoutFieldAtPath(path: string): ContentType;

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
  withoutField(field: string | null): ContentType;

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
  withoutField(field: FieldType | null): ContentType;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): ContentType;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): ContentType;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ContentType;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): ContentType;

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
  defaultField(field: string): ContentType;

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
  defaultField(field: FieldType): ContentType;

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
  unsetField(field: string): ContentType;

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
  unsetField(field: FieldType): ContentType;

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
  removeField(field: string): ContentType;

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
  removeField(field: FieldType): ContentType;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): ContentType;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): ContentType;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): ContentType;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): ContentType;

  mergeJson(json: any | null): ContentType;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): ContentType;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): ContentType;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<ContentType | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<ContentType | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ContentType | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<ContentType | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ContentType | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, ContentType | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ContentType | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ContentType | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ContentType | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): ContentType;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): ContentType;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): ContentType;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ContentType;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): ContentType;

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
  static make(fields: any, withDefaults?: boolean): ContentType;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): ContentType | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): ContentType;

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
  afterMake(): ContentType;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ContentType;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<ContentType>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): ContentType;

  /**
   * @return true if this is a text content (not simply plain text but csv, json, xml etc).
   * I.e. readString is meaningful on a Content.
   */
  isAnyText(): boolean;

  /**
   * Helper method for isAnyText() implementation which takes in the `mediaType` of the `ContentTypeInfo` subTypes
   * ({@link ContentType}, {@link ContentMeta}).
   */
  isAnyTextImpl(mediaType: string): boolean;

  /**
   * @return true if this is a plain text content (i.e. not specifically csv, json, xml etc).
   */
  isPlainText(): boolean;

  /**
   * @return true if this is a unknown binary content (i.e. not specifically c3Binary or parquet).
   */
  isBinary(): boolean;

  /**
   * @return true if this is a csv content.
   */
  isCsv(): boolean;

  /**
   * @return true if this is a green button csv content.
   */
  isGreenButtonCsv(): boolean;

  /**
   * @return true if this is a green button xml content.
   */
  isGreenButtonXml(): boolean;

  /**
   * @return true if this is a json content.
   */
  isJson(): boolean;

  /**
   * @return true if this is a json content. http://jsonlines.org/.
   */
  isJsonLines(): boolean;

  /**
   * @return true if this is YAML content.
   *
   * @see https://yaml.org/
   */
  isYaml(): boolean;

  /**
   * @return true if this is a xml content.
   */
  isXml(): boolean;

  /**
   * @return true if this is a xlsx content.
   */
  isXlsx(): boolean;

  /**
   * @return true if this is a X12-EDI content.
   */
  isEdi(): boolean;

  /**
   * @return true if this is c3 binary content.
   */
  isC3Binary(): boolean;

  /**
   * @return true if this is a c3 type content.
   */
  isC3Type(): boolean;

  /**
   * @return true if this is a JavaScript content.
   */
  isJavaScript(): boolean;

  /**
   * @return true if this is a Python content.
   */
  isPython(): boolean;

  /**
   * @return true if this is a R content.
   */
  isR(): boolean;

  /**
   * @return true if this is a ruby source code content.
   */
  isRuby(): boolean;

  /**
   * @return true if this is a Java content.
   */
  isJava(): boolean;

  /**
   * @return true if this is a Java Script content.
   */
  isTypeScript(): boolean;

  /**
   * @return true if this is any source code content.
   */
  isAnyCode(): boolean;

  /**
   * @return true if this is an Apache Avro content.
   */
  isAvro(): boolean;

  /**
   * @return true if this is an Apache Parquet content.
   */
  isParquet(): boolean;

  /**
   * @return true if this is HDF5 content.
   */
  isHdf5(): boolean;

  /**
   * @return true if this is HTML content.
   */
  isHtml(): boolean;

  /**
   * @return true if this is a Zip file content.
   */
  isZip(): boolean;

  /**
   * @return true if this is a Dsl file content.
   */
  isDsl(): boolean;

  /**
   * @return true if this is a Type Dsl file content.
   */
  isTypeDsl(): boolean;

  /**
   * @return true if this is a UI Dsl file content.
   */
  isUiDsl(): boolean;

  /**
   * @return true if this is a (c3) Doc file content.
   */
  isDoc(): boolean;

  /**
   * @return true if this is a Markdown file content.
   */
  isMarkdown(): boolean;

  /**
   * @return true if this is a an image content.
   */
  isImage(): boolean;

  /**
   * @return true if this is a SVG content.
   */
  isSvg(): boolean;

  /**
   * @return true if this is a PNG content.
   */
  isPng(): boolean;

  /**
   * @return true if this is a JPEG content.
   */
  isJpeg(): boolean;

  /**
   * Returns string representation of this content type.
   */
  toString(): string;

  /**
   * Creates instance from a string representation. Will throw error if contentType is not parse-able. Will return
   * default content type if input is empty.
   */
  static fromString(s: string | null): ContentType | null;

  /**
   * Same as ContentType#fromString.
   */
  static parse(contentType: string | null): ContentType;

  /**
   * Extracts MIME type from provided content type string or returns default MIME type.
   */
  static extractMediaType(contentType: string | null): string;

  /**
   * Default MIME type.
   */
  static defaultMediaType(): string;

  /**
   * Default charset.
   */
  static defaultCharset(): string;

  /**
   * @return input charset or default charset if input is missing or invalid.
   */
  static safeCharset(charset: string | null): string;

  /**
   * Extracts charset from provided content type string or null if charset is not specified.
   */
  static extractCharset(contentType: string | null): string | null;

  /**
   * Extracts valid charset from provided content type string or returns default charset.
   */
  static safeExtractCharset(contentType: string | null): string;

  /**
   * Extracts parameters from provided content type.
   */
  static extractParams(contentType: string | null): C3.Map<string | null, string | null>;

  /**
   * Adds (replaces, if specified) new parameters to the ContentType and returns the be ContentType.
   */
  addParams(params: C3.Map<string | null, string | null> | null, replace?: boolean): ContentType | null;

  /**
   * Returns true if the delimiter is set
   */
  static hasDelimiter(contentType: string | null): boolean;

  /**
   * Retrieves the delimiter from the provided content type.
   * Cannot return null.
   */
  static delimiter(contentType: string | null): string;

  /**
   * Returns a content type of the #defaultMediaType.
   */
  static defaultContentType(): ContentType;

  /**
   * @return default file extension for this content type.
   */
  defaultFileExt(): string;

  /**
   * @return new file name with default file extension for this content type and (optionally) content encoding.
   */
  fileNameWithDefaultExt(fileName: string, contentEncoding?: string | null): string;

  /**
   * @return new file name with .json and .gzip extension
   */
  static fileNameWithJsonGzip(fileName: string): string;

  /**
   * @return input content type or default content type if input is missing.
   *
   * safeContentType : inline function(string contentType) : !string
   *
   * @return content type and encoding if known or best guess based on available info; first part of the pair is
   *         content type.
   */
  static guessContentTypeAndEncoding(contentType?: string | null, contentEncoding?: string | null, fileUrlOrEncodedPath?: string | null): Pair<string | null, string | null>;

  /**
   * @return guess content type from file extension with defaults
   */
  static guessContentType(fileName: string, defaultMediaType?: string | null, defaultCharset?: string | null): string | null;

  /**
   * @return content type for plain text content.
   */
  static plainText(charset?: string | null): ContentType;

  /**
   * @return content type for binary content.
   */
  static binary(): ContentType;

  /**
   * @return content type for c3 csv content.
   */
  static csv(charset?: string | null): ContentType;

  /**
   * @return content type for c3 green button csv content.
   */
  static greenButtonCsv(charset?: string | null): ContentType;

  /**
   * @return content type for c3 green button xml content.
   */
  static greenButtonXml(charset?: string | null): ContentType;

  /**
   * @return content type for c3 json content.
   */
  static json(): ContentType;

  /**
   * @return content type for c3 notebook content.
   */
  static c3nb(): ContentType;

  /**
   * @return content type for c3 json lines content. http://jsonlines.org/.
   */
  static jsonLines(): ContentType;

  /**
   * @return content type for c3 xml content.
   */
  static xml(charset?: string | null): ContentType;

  /**
   * @return content type for c3 xlsx content.
   */
  static xlsx(charset?: string | null): ContentType;

  /**
   * @return content type for X12-EDI content.
   */
  static edi(): ContentType;

  /**
   * @return content type for c3 binary serialized content.
   */
  static c3Binary(): ContentType;

  /**
   * @return content type for c3 type metadata.
   */
  static c3Type(): ContentType;

  /**
   * @return content type for JavaScript code.
   */
  static javaScript(): ContentType;

  /**
   * @return content type for Python code.
   */
  static python(): ContentType;

  /**
   * @return content type for R code.
   */
  static R(): ContentType;

  /**
   * @return content type for Ruby code.
   */
  static ruby(): ContentType;

  /**
   * @return content type for Apache Avro content.
   */
  static avro(): ContentType;

  /**
   * @return content type for Apache Parquet content.
   */
  static parquet(): ContentType;

  /**
   * @return content type for Apache Arrow file content.
   */
  static arrowFile(): ContentType;

  /**
   * @return content type for Apache Arrow stream content.
   */
  static arrowStream(): ContentType;

  /**
   * @return content type for HDF5 content.
   */
  static hdf5(): ContentType;

  /**
   * @return content type for Zip file content.
   */
  static zip(): ContentType;

  /**
   * @return content type for Yaml file content
   */
  static yml(): ContentType;

  /**
   * @return content type for HTML file content
   */
  static html(): ContentType;

  /**
   * @return content type for Markdown file content
   */
  static markdown(): ContentType;

  /**
   * @return true if provided content type has same media type as this content type
   */
  hasSameMediaType(other: ContentType | null): boolean;

  /**
   * @return true if provided content type has same media type as this content type
   */
  hasSameMediaType(other: string | null): boolean;

  /**
   * @return true if provided content type has same base media type as this content type considering vendor
   *         customization or alternatives
   */
  hasSameBaseMediaType(other: ContentType | null): boolean;

  /**
   * @return true if provided content type has same base media type considering vendor customization or alternatives
   */
  hasSameBaseMediaType(other: string | null): boolean;

  /**
   * Extract the baseline MediaType from a potentially vendor-specific content type.
   * For example, <code>text/vnd.c3.typ+plain</code> is a variant of <code>text/plain</code>
   */
  baseMediaType(): string | null;

  /**
   * Whether the media type is a complete wildcard: "* / *".
   */
  isWildcard(): boolean;

  /**
   * Whether the media type has a subtype wildcard: "text/ *".
   */
  isSubtypeWildcard(): boolean;

  /**
   * Split the media type, separated by a slash. For example in, "text/html", "text" is the type and "html" is the
   * subtype.
   */
  splitMediaType(): Pair<string | null, string | null>;

  /**
   * Determine if this content type matches a value in the client Accept header string.
   *
   * Matching supports:
   *  - full wildcards (* / *) match anything
   *  - subtype wildcards (image/ *) match any subtype for that type
   *  - simple types: (application/json) match vendor-specific types (application/openapi+json) base types
   *  - multiple values in accept string (text/html, text/*;q=0.8)
   */
  isAcceptable(accept: string | null): boolean;

  /**
   * Determine if a content type string matches a value in the client Accept header string. If the contentType string
   * is missing, this will only be true if the accept string is a wildcard or missing.
   *
   * @see #isAcceptable
   */
  static isAcceptableType(contentType: string | null, accept: string | null): boolean;
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

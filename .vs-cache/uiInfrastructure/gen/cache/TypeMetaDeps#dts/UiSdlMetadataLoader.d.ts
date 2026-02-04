// TypeScript definitions for the C3 type UiSdlMetadataLoader

/**
 * A type that provides methods to support the process of generating TSX source implementation from the JSON UI metadata configuration.
 *
 * @remarks this represents a value passed to a method that expects an instance of UiSdlMetadataLoader
 */
declare interface IUiSdlMetadataLoader {

  /**
   * Prefix for federated module exposed path.
   */
  EXPOSED_PATH_PREFIX?: string | null;

  /**
   * Path category for types.
   */
  PATH_CATEGORY_TYPES?: string | null;

  /**
   * Path category for typesys types.
   */
  PATH_CATEGORY_TYPESYS_TYPES?: string | null;

  /**
   * Path category for epics.
   */
  PATH_CATEGORY_EPICS?: string | null;

  /**
   * Path category for styles.
   */
  PATH_CATEGORY_STYLES?: string | null;

  /**
   * Path category for tests.
   */
  PATH_CATEGORY_TESTS?: string | null;

  /**
   * Path category for pluggables.
   */
  PATH_CATEGORY_PLUGGABLES?: string | null;
}

/**
 * A type that provides methods to support the process of generating TSX source implementation from the JSON UI metadata configuration.
 *
 * @remarks this represents a made instance of UiSdlMetadataLoader
 */
declare class UiSdlMetadataLoader extends Obj {

  /**
   * Prefix for federated module exposed path.
   */
  readonly EXPOSED_PATH_PREFIX?: string | null;
  withEXPOSED_PATH_PREFIX(EXPOSED_PATH_PREFIX: string | null): UiSdlMetadataLoader;

  /**
   * Path category for types.
   */
  readonly PATH_CATEGORY_TYPES?: string | null;
  withPATH_CATEGORY_TYPES(PATH_CATEGORY_TYPES: string | null): UiSdlMetadataLoader;

  /**
   * Path category for typesys types.
   */
  readonly PATH_CATEGORY_TYPESYS_TYPES?: string | null;
  withPATH_CATEGORY_TYPESYS_TYPES(PATH_CATEGORY_TYPESYS_TYPES: string | null): UiSdlMetadataLoader;

  /**
   * Path category for epics.
   */
  readonly PATH_CATEGORY_EPICS?: string | null;
  withPATH_CATEGORY_EPICS(PATH_CATEGORY_EPICS: string | null): UiSdlMetadataLoader;

  /**
   * Path category for styles.
   */
  readonly PATH_CATEGORY_STYLES?: string | null;
  withPATH_CATEGORY_STYLES(PATH_CATEGORY_STYLES: string | null): UiSdlMetadataLoader;

  /**
   * Path category for tests.
   */
  readonly PATH_CATEGORY_TESTS?: string | null;
  withPATH_CATEGORY_TESTS(PATH_CATEGORY_TESTS: string | null): UiSdlMetadataLoader;

  /**
   * Path category for pluggables.
   */
  readonly PATH_CATEGORY_PLUGGABLES?: string | null;
  withPATH_CATEGORY_PLUGGABLES(PATH_CATEGORY_PLUGGABLES: string | null): UiSdlMetadataLoader;

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
  static fromJson(json: any | null): UiSdlMetadataLoader | null;

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
  static fromJsonString(json: string | null): UiSdlMetadataLoader | null;

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
  static fromXmlString(xml: string | null): UiSdlMetadataLoader | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): UiSdlMetadataLoader | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): UiSdlMetadataLoader;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlMetadataLoader;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): UiSdlMetadataLoader;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlMetadataLoader | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<UiSdlMetadataLoader | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): UiSdlMetadataLoader;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlMetadataLoader;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): UiSdlMetadataLoader;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): UiSdlMetadataLoader;

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
  withField(field: string, value: any, doNotConvert?: boolean): UiSdlMetadataLoader;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): UiSdlMetadataLoader;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): UiSdlMetadataLoader;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): UiSdlMetadataLoader;

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
  withoutFieldAtPath(path: string): UiSdlMetadataLoader;

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
  withoutField(field: string | null): UiSdlMetadataLoader;

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
  withoutField(field: FieldType | null): UiSdlMetadataLoader;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): UiSdlMetadataLoader;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): UiSdlMetadataLoader;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): UiSdlMetadataLoader;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): UiSdlMetadataLoader;

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
  defaultField(field: string): UiSdlMetadataLoader;

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
  defaultField(field: FieldType): UiSdlMetadataLoader;

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
  unsetField(field: string): UiSdlMetadataLoader;

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
  unsetField(field: FieldType): UiSdlMetadataLoader;

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
  removeField(field: string): UiSdlMetadataLoader;

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
  removeField(field: FieldType): UiSdlMetadataLoader;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): UiSdlMetadataLoader;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): UiSdlMetadataLoader;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): UiSdlMetadataLoader;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): UiSdlMetadataLoader;

  mergeJson(json: any | null): UiSdlMetadataLoader;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): UiSdlMetadataLoader;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): UiSdlMetadataLoader;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<UiSdlMetadataLoader | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<UiSdlMetadataLoader | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<UiSdlMetadataLoader | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<UiSdlMetadataLoader | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<UiSdlMetadataLoader | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, UiSdlMetadataLoader | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, UiSdlMetadataLoader | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<UiSdlMetadataLoader | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<UiSdlMetadataLoader | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): UiSdlMetadataLoader;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): UiSdlMetadataLoader;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): UiSdlMetadataLoader;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): UiSdlMetadataLoader;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): UiSdlMetadataLoader;

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
  static make(fields: any, withDefaults?: boolean): UiSdlMetadataLoader;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): UiSdlMetadataLoader;

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
  afterMake(): UiSdlMetadataLoader;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): UiSdlMetadataLoader;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<UiSdlMetadataLoader>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): UiSdlMetadataLoader;

  /**
   * Generates source files for each page. One `.json` file will be generated with the initial UI metadata required
   * for the page, as well as the TSX source implementation for the page.
   *
   * @return a map of source file path to source file content.
   */
  static generateSourceFiles(): C3.Map<string | null, string | null>;

  /**
   * Returns an NPM module containing all the types as TypeScript interfaces in a single .d.ts file.
   */
  static produceTsDeclNpmModule(): ContentValue;

  /**
   * Returns an NPM module containing all the UI metadata and source code produced by {@link generateSourceFiles}.
   */
  static produceC3UiNpmModule(): ContentValue;

  /**
   * Returns an NPM module containing all the sdl-react presentational source code produced by {@link generateSdlReactPresentationalSourceCode}.
   */
  static produceC3SdlReactNpmModule(): ContentValue;

  /**
   * Returns an NPM module @c3/bundler.
   *
   * This c3-bundler.tgz is used to retrieve the c3-bundler in platform package.
   *
   * This is different than the bundler.tgz used in {@link UiBundlerRestApi} as it is used prior to when the UI was migrated out of c3-server.
   */
  static readC3BundlerNpmModule(): ContentValue;

  /**
   * Compatibility Notice: This method is no longer used but is kept here for compatibility reasons.
   *
   * Generates a mapping of all source files for the given namespace.
   *
   * If {@link UiSdlExtraFilesInvalidatingCacheLoader} is disabled, remove files in:
   * `.*\/ui/{namespace}/(?!src/customComponents|src/customInstances).*`
   *
   * @see UiBundler.produceUiFiles
   */
  static produceUiFiles(namespace: string): C3.Map<string | null, string | null>;

  /**
   * Checks whether src/test.tsx file exists in the store. This is used to create a webpack entry point for tests.
   */
  static isSrcTestTsxPresent(): boolean;

  /**
   * Generates a manifest map containing file paths matched to their describing metadata.
   * Do not use this API directly as it is expensive, use UiSdlMetadataFileManifestCache.generateManifest instead.
   *
   * The keys in the manifest map are file paths as indicated in generateSourceFiles plus some extra files that, although are not
   * generated to be reused from UI, contain code or data that might change the outcome of generating bundles (like
   * UiSdlConfig.infrastructure.webpackMode or the webpack.config.js file)
   *
   * @param files Optional collection of files to be used for the generation, if not passed, generateSourceFilesData will be used
   *              to create them.
   * @return The manifest contents as a map of file paths to UiSdlMetadataFileManifestEntry values
   */
  static generateManifest(files?: C3.Map<string | null, UiSdlMetadataFile | null>): C3.Map<string | null, any>;

  /**
   * Detects circular dependencies and throws error if detected.
   */
  static detectCircularDependencies(): any;

  /**
   * Helper function for {@link detectCircularDependencies} without side effects.
   */
  static detectCircularDependenciesInImports(importedBy?: C3.Map<string | null, C3.Array<string | null>>): any;

  /**
   * Generates source file data to be consumed by different methods.
   */
  static generateSourceFilesData(): C3.Map<string | null, UiSdlMetadataFile | null>;

  /**
   * Compares the manifest in TagMetadataStore (ui/content/c3/manifest.json) with a freshly generated manifest from the
   * TagMetadataStore source files.
   *
   * @return true if all digests from the new manifest match the cached manifest in the TagMetadataStore.
   */
  static isMetadataStoreMatchingManifest(manifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>): boolean;

  /**
   * Compares the manifest from the last run (stored in UiSdlMetadataFileManifest) with a freshly generated manifest from the
   * TagMetadataStore source files.
   *
   * @return true if all digests from the new manifest match the cached manifest in UiSdlMetadataFileManifest
   */
  static isMetadataStoreMatchingUiBundlerResultManifest(manifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>): boolean;

  /**
   * Compares two manifests
   *
   * @return true if both manifests are the same
   */
  static manifestsMatch(newManifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>, oldManifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>): boolean;

  /**
   * Debug function to find out differences between manifest between MetadataStore and newly generated manifest.
   *
   * @return an array of objects that are different.
   */
  static diffManifestMetadataStoreVsNewManifest(): C3.Array<C3.Map<string | null, string | null>>;

  /**
   * Debug function to find out differences between manifest between MetadataStore and last time UiBundler generated manifest.
   *
   * @return an array of objects that are different.
   */
  static diffManifestMetadataStoreVsUiBundlerResult(): C3.Array<C3.Map<string | null, string | null>>;

  /**
   * Detects changes in the files included in a federated module and returns true if there are any.
   *
   * @return true if changes are detected or no manifest is present.
   */
  static federatedModuleHasChanges(federatedModuleName?: string | null): boolean;

  /**
   * Returns a mapping between federated module and status in the UiBundlerResults. When true, it means the federated module appears in at least
   * one of the {@link UiBundlerResult} records.
   */
  static getFederatedModulesFromUiBundlerResults(bundlerResults?: C3.Array<UiBundlerResult | null>): C3.Map<string | null, boolean>;

  /**
   * Returns true if all the federated modules mentioned in the manifest are present in the {@link UiBundlerResult} records.
   * Uses getFederatedModulesFromUiBundlerResults to retrieve the list of present federated modules in UiBundlerResults
   */
  static areBundlerResultsUsable(manifest?: UiSdlMetadataFileManifest | null): boolean;

  /**
   * Returns manifest contents from the manifest located at ui/c3/manifest.json in the tag's MetadataStore
   */
  static getManifestFromMetadataStore(): C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>;

  /**
   * Returns the manifest contents from the manifest saved in the {@link UiSdlMetadataFileManifest} singleton
   */
  static getManifestFromLastRun(): C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>;

  /**
   * Detects changes from one manifest to another in all files that belong to a particular federated module.
   */
  static federatedModuleHasChangesAgainstManifest(federatedModuleName?: string | null, manifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>, cachedManifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>): boolean;

  /**
   * Helper method for federatedModuleHasChanges, uses federatedModuleHasChangesAgainstManifest and takes into consideration that files have to be present in the metadata store
   */
  static federatedModuleHasChangesAgainstManifests(federatedModuleName?: string | null, deployedManifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>, deployedFileList?: C3.Array<string | null>, cachedManifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>, manifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>): boolean;

  /**
   * Detects changes in cache-invalidating files, files that affect all federated modules, by comparing to two manifests in case they
   * are present in either the MetadataStore or in UiSdlMetadataFileManifest.
   */
  static areCacheInvalidatingChangesPresent(manifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>, deployedManifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>, cachedManifest?: C3.Map<string | null, UiSdlMetadataFileManifestEntry | null>): boolean;

  /**
   * Generates a mapping of exposed module names to file paths.
   *
   * @return A map where keys are module names and values are objects with properties types and components.
   */
  static exposedByFederatedModule(): C3.Map<string | null, any>;

  /**
   * Transforms a @c3/ui path to a federated module exposed path.
   *
   * @param path
   *        A @c3/ui path to be transformed.
   */
  static c3UiPathToExposedPath(path?: string | null): string | null;

  /**
   * Generates a map whose keys are paths from @c3/ui and where each
   * value is the name of the federated module where the file will be exposed
   */
  static generateC3UiToFederatedModuleMapping(): C3.Map<string | null, string | null>;

  /**
   * Generates an index.js implementation that imports and exports all webpack config
   * extensions in reverse remix order (root package last)
   */
  static generateWebpackExtensionsIndex(namespace?: string | null): string | null;

  /**
   * Generates a map whose keys are paths from @c3/ui and where each
   * value is the path to the file from the c3 namespace folder.
   */
  static generateC3UiToExposedPathMapping(): C3.Map<string | null, string | null>;

  /**
   * Generates a mapping of exposed paths to their federated module.
   */
  static exposedToFederatedModule(): C3.Map<string | null, string | null>;

  /**
   * Transforms a exposed path from a federated module to a path from '@c3/ui'.
   *
   * @param exposedPath
   *           The exposed path to be transformed.
   */
  static exposedPathToC3UiPath(path?: string | null): string | null;

  /**
   * Used to test the internal functionality.
   *
   * Add extra files generated by {@link UiSdlExtraFilesInvalidatingCacheLoader} if
   * UiSdlConfig.infrastructure.disableExtraFilesLoader is not set to true.
   */
  static addExtraSourceFiles(fileMap?: C3.Map<string | null, UiSdlMetadataFile | null>): C3.Map<string | null, UiSdlMetadataFile | null>;

  /**
   * Creates a typescript declaration based on the type metadata for a single type.
   * @param typeMeta
   *           The typeMeta for the type.
   * @param typeName
   *           The name of the type
   * @return The typescript declaration for the type.
   */
  static doGenerateTsDeclForTypes(typeMeta?: TypeMeta | null, typeName?: string | null): string | null;

  /**
   * Generates a typescript declaration for all types in the system.
   * @return A map of index filename to typescript declaration for all types.
   */
  static generateTsDeclForTypes(typeMetas?: C3.Map<string | null, TypeMeta | null>): C3.Map<string | null, ContentValue | null>;
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

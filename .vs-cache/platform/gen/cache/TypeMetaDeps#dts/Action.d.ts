// TypeScript definitions for the C3 type Action

/**
 * Represents C3 Action i.e. application of C3 Type method.
 *
 * @remarks this represents a value passed to a method that expects an instance of Action
 */
declare interface IAction {

  /**
   * Id of the action. This id is unique across the entire {@link Cluster}
   */
  id: string;
}

/**
 * Represents C3 Action i.e. application of C3 Type method.
 *
 * @remarks this represents a made instance of Action
 */
declare class Action extends Obj {

  /**
   * Id of the action. This id is unique across the entire {@link Cluster}
   */
  readonly id: string;
  withId(id: string): Action;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): Action | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Action | null;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Action;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): Action;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Action;

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
  static make(fields: any, withDefaults?: boolean): Action;

  /**
   * Convert the internal object representation to a JSON object.
   *
   * @return JSON object representation
   *
   * @see #fromJson
   */
  toJson(): any;

  toJson(include?: string | null, exclude?: string | null): any;

  toJson(include?: Include | null, exclude?: Exclude | null): any;

  /**
   * Convert the internal object representation to a _typed_ JSON object.
   * @param omitTopLevelType
   *        Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
   *        the outer level of the produced json.
   * @param runtime
   *        If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
   *        performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
   *
   *
   * @return JSON object representation
   *
   * @see #fromJson
   * @see #toJson
   * @see serdeser.c3doc
   * @see JsonType
   */
  toTypedJson(omitTopLevelType?: boolean, actionRequirement?: string | null): any;

  toTypedJson(include?: string | null, exclude?: string | null): any;

  toTypedJson(include?: Include | null, exclude?: Exclude | null): any;

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
  static fromJson(json: any | null): Action | null;

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
  static fromJsonString(json: string | null): Action | null;

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
  static fromXmlString(xml: string | null): Action | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): Action | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): Action;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Action;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Action;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Action | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Action | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Action;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Action;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Action;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): Action;

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
  withField(field: string, value: any, doNotConvert?: boolean): Action;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): Action;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Action;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Action;

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
  withoutFieldAtPath(path: string): Action;

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
  withoutField(field: string | null): Action;

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
  withoutField(field: FieldType | null): Action;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): Action;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Action;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): Action;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Action;

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
  defaultField(field: string): Action;

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
  defaultField(field: FieldType): Action;

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
  unsetField(field: string): Action;

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
  unsetField(field: FieldType): Action;

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
  removeField(field: string): Action;

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
  removeField(field: FieldType): Action;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Action;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): Action;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Action;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Action;

  mergeJson(json: any | null): Action;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Action;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): Action;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<Action | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<Action | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<Action | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<Action | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<Action | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, Action | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, Action | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<Action | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<Action | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Action;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Action;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Action;

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
  afterMake(): Action;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): Action;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Action>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): Action;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  /**
   * Lookup running action instance for a provided id, `null` if action is no longer running
   */
  static forId(id: string | null, failIfMissing?: boolean): Action | null;

  /**
   * environment where this action is being executed
   */
  get env(): Env;

  /**
   * environment name where this action is being executed
   */
  get envName(): string;

  /**
   * application where this action is being executed
   */
  get app(): App;

  /**
   * application name where this action is being executed
   */
  get appName(): string;

  /**
   * The Type on which this action is executing
   */
  targetType(): Type;

  /**
   * The name of the type on which this action is executing
   */
  get typeName(): string;

  /**
   * Name of this action. Derived from methodType#name
   */
  get name(): string;

  /**
   * method type for which this action will be invoked
   */
  methodType(): MethodType;

  /**
   * The Method that this action is executing
   */
  method(): Method;

  /**
   * {@link ActionRef} of this action
   */
  get actionRef(): ActionRef;

  /**
   * The version of the C3 application package where this method is implemented
   */
  version(): SemanticVersion.MajorMinor;

  /**
   * The version of the C3 application package that client / caller is aware of this method; this is
   */
  clientVersion(): SemanticVersion.MajorMinor;

  /**
   * Every action has a name and target type.
   * @return a unique string that identifies this action as <type>#<method>
   */
  target(): string;

  /**
   * The return type of the declared method
   */
  returnType(): ValueType | null;

  /**
   * @return true if this action for a different App or different server Node
   */
  isRemote(): boolean;

  /**
   * @return true if #method is an overloaded method
   */
  isOverloaded(): boolean;

  /**
   * @return true if #methodType is a member method
   */
  isMember(): boolean;

  /**
   * @return true if this action should stay in current execution thread; false if it needs to be remoted to a different
   *         node or app of it has a dedicated thread pool that current thread is not part of
   */
  shouldStayInThread(): boolean;

  /**
   * @return true if this action should execute locally using {@link C3#callInLocalJvmApp} instead of being remoted.
   *         This is determined by the {@link Db.Domain.Config#callAppInLocalJvm} setting on the method's db domain.
   *
   * @see MethodType#dbDomainCallAppInLocalJvm
   */
  shouldStayInLocalJvm(): boolean;

  /**
   * the current state of an action. See {@link Action.State} for more details.
   */
  get state(): string | null;

  /**
   * return true if the action has failed, false if still running or successful
   */
  failed(): boolean;

  /**
   * @return true if this action is still running
   */
  isRunning(): boolean;

  /**
   * @return true if this action has completed call but results are still being streamed
   */
  isStreaming(): boolean;

  /**
   * Returns a Error or null if !failed()
   */
  error(): C3.Error | null;

  /**
   * Secondary key set by caller of action. Generally used for Action#forSecondaryKey operations
   *
   * @return the somewhat unique id of this action
   *
   * @see #generateSecondaryKey
   */
  get secondaryKey(): string | null;

  /**
   * the time that has elapsed since this action started running formatted according to
   * {@link Num#formatTimingS}
   * Useful for logging.
   */
  get age(): string | null;

  /**
   * the time that has elapsed since this action started running in seconds.
   */
  get elapsed(): number | null;

  /**
   * node id where this action is being executed
   */
  get nodeId(): string;

  /**
   * @return node where this action is being executed
   */
  node(): App.Node | null;

  /**
   * thread id of the thread executing this action
   */
  get threadId(): string | null;

  /**
   * name of the thread executing this action
   */
  get threadName(): string | null;

  /**
   * thread group name of the thread executing this action
   */
  get threadGroup(): string | null;

  /**
   * Parent action that invoked the current action.
   */
  parent(): Action | null;

  /**
   * @return action id for the parent of this action
   */
  get parentId(): string | null;

  /**
   * A set of Actions may form a tree, enabled by the parent property.
   * @return the action under whose auspices this action was created, or null
   */
  root(): Action | null;

  /**
   * @return action id for the parent of this action
   */
  get rootId(): string | null;

  /**
   * @return true if this action has no parent
   */
  isRoot(): boolean;

  /**
   * @return root action id of an action that scheduled an async job that invoked this action
   */
  get asyncRootId(): string | null;

  /**
   * @return action id that scheduled an async job that invoked this action
   */
  get asyncParentId(): string | null;

  /**
   * @return action async depth starting from 1, i.e. if given action was invoked from an asynchronous job that was
   *         initiated by end user directly then the async depth is 1, if it that async job was invoked from another
   *         async job then async depth is 2, and so on.
   */
  get asyncDepth(): number;

  /**
   * all the child actions for this action
   */
  get children(): C3.Array<Action | null>;

  /**
   * @return action in the parent chain based on the provided predicate
   */
  findParent(predicate: λPredicate<Action | null>): Action | null;

  /**
   * @return true if this action is any parent of the given action (i.e., exists anywhere in the parent chain of the given action)
   */
  isAnyParentOf(p: Action): boolean;

  /**
   * @return target App where this Action should be executed
   */
  targetApp(): App | null;

  /**
   * @return target server role of the server node where this Action should be executed
   */
  targetNodeRoles(): C3.Array<string | null>;

  /**
   * @return target App.NodePool where this Action should be executed
   */
  targetNodePools(): C3.Array<string | null>;

  /**
   * @return target Server where this Action should be executed
   */
  targetNode(): Server | null;

  /**
   * @return target App.Node.ThreadPool where this Action should be executed
   */
  targetThreadPool(): App.Node.ThreadPool | null;

  /**
   * Reference to ActionTelemetry which supports timing related fields and methods
   */
  telemetry(): ActionTelemetry | null;

  /**
   * Url used to access the current action. Can be null if this is not a Rest request.
   */
  hostUrl(): string | null;

  /**
   * User executing this action.
   */
  user(): User;

  /**
   * Name of the user executing this action.
   */
  userName(): string;

  /**
   * User + UserGroups + Roles of the Principal executing this action.
   */
  accessControlEntities(): C3.Array<AccessControlEntity | null>;

  /**
   * @return true if this action is being executed by a user with cluster admin privileges
   */
  isClusterAdmin(): boolean;

  /**
   * @return true if this action is being executed by a user with env admin privileges
   */
  isEnvAdmin(): boolean;

  /**
   * @return true if this action is being executed by a user with app admin privileges
   */
  isAppAdmin(): boolean;

  /**
   * True if this action should be authorized always; false otherwise
   */
  authzAlways(): boolean;

  /**
   * @return true if auth is enforced for child actions
   */
  authzChildActions(): boolean;

  /**
   * @return {@link TimeoutSpec} applied to this action.
   *
   * If timeout is not null, then action will be interrupted and stopped based on the defined {@link TimeoutSpec#interruptInSec}
   * and {@Link TimeoutSpec#stopInSec}. Additionally, {@link TimeoutSpec#interruptInSec} and
   * {@link TimeoutSpec#stopInSec} need to be > 0.0s.
   *
   * @see #interrupt
   * @see #stop
   */
  get timeout(): TimeoutSpec | null;

  /**
   * Interrupts the execution of the thread that is running this action.
   */
  interrupt(reason?: string | null): string | null;

  /**
   * Force stops the execution of this action.
   */
  stop(reason?: string | null): string | null;

  /**
   * @return string representation of call stack for this action in the format of
   * `[ <parent-action-call-stack> -> ] <type>#action`
   */
  callStackKey(): string;

  /**
   * @return stack trace of the given action. If the action is not running, then returns could not find action
   */
  stackTrace(): string | null;

  /**
   * @return json input for this action
   */
  input(): any | null;

  /**
   * wait for {@param waitSec} seconds for the given action to complete. If not specified, will wait for completion
   */
  waitFor(waitSec?: number | null): void;

  /**
   * Lookup running action instance for a provided secondary key, `null` if action is no longer running. Note, will
   * reach out to server node where action should be running to locate it.
   */
  static forSecondaryKey(secondaryKey: string | null, failIfMissing?: boolean): Action | null;

  /**
   * @return new key that can be used for C3#callWithSecondaryKey
   */
  static generateSecondaryKey(): string;

  /**
   * @return new key that can be used for C3#callWithSecondaryKey
   */
  static generateSecondaryKey(key: string): string;

  /**
   * @return parses Action secondaryKey extracting node and key values
   */
  static parseSecondaryKey(secondaryKey: string | null, failIfMissing?: boolean): [node: string | null, key: string | null] | null;

  /**
   * @return Authorization key given the corresponding user's session
   */
  authorizationKey(userSession: string): string;

  /**
   * @return list of all running actions in jvm
   */
  static dump(spec?: ActionsSpec | null): C3.Array<Action | null>;

  /**
   * Interrupts the oldest action currently being executed.
   */
  static interruptOldest(reason?: string | null, force?: boolean): string | null;

  /**
   * @return oldest action for this Application
   */
  static oldest(): Action | null;

  /**
   * @return total running actions in this Application
   */
  static runningCount(): number | null;

  /**
   * @return true if this is a deprecated method or private method called from outside of the declaring package
   */
  assertPrivateOrDeprecated(): boolean;

  /**
   * Combine all custom contexts from this action and all of its predecessors by walking the action stack.
   * @param remoteOnly
   *        If set to true, only custom contexts that can be remoted are returned. Else, all contexts will be returned.
   *
   * @return A map of custom contexts
   */
  customContexts(remoteOnly?: boolean): C3.Map<string | null, any>;

  /**
   * Find custom contexts by given names, note that each context might be associated with different actions in the
   * action stack.
   * @param names
   *        list of custom context names to find
   * @param remoteOnly
   *        If set to true, only custom contexts that can be remoted are returned. Else, all contexts will be returned.
   *
   * @return A map of custom contexts with given names
   */
  customContexts(names: C3.Array<string>, remoteOnly?: boolean): C3.Map<string | null, any>;

  /**
   * Associate custom contexts with current action by given key value pairs.
   *
   * @param contexts
   *        map of custom contexts to associate with this action
   * @param remote
   *        If set, serialized actions will propagate these custom context to other nodes/app.
   */
  setCustomContexts(contexts: C3.Map<string | null, any>, remote?: boolean): void;

  /**
   * Clears all custom contexts with current action.
   * @return true if it clears custom contexts, otherwise false
   */
  clearAllCustomContext(): boolean;

  static cachedInclude(): any;
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

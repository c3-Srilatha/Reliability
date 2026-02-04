// TypeScript definitions for the C3 type PersistableWritable

/**
 * Type for persistable write actions
 *
 * @remarks this represents a value passed to a method that expects an instance of PersistableWritable
 */
declare interface IPersistableWritable {

  /**
   * The id of this instance.
   */
  id?: string | null;
}

/**
 * Type for persistable write actions
 *
 * @remarks this represents a made instance of PersistableWritable
 */
declare class PersistableWritable extends Obj {

  /**
   * The id of this instance.
   */
  readonly id?: string | null;
  withId(id: string | null): PersistableWritable;

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
  static fromJson(json: any | null): PersistableWritable | null;

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
  static fromJsonString(json: string | null): PersistableWritable | null;

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
  static fromXmlString(xml: string | null): PersistableWritable | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): PersistableWritable | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): PersistableWritable;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): PersistableWritable;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): PersistableWritable;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<PersistableWritable | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<PersistableWritable | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): PersistableWritable;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): PersistableWritable;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): PersistableWritable;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): PersistableWritable;

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
  withField(field: string, value: any, doNotConvert?: boolean): PersistableWritable;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): PersistableWritable;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): PersistableWritable;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): PersistableWritable;

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
  withoutFieldAtPath(path: string): PersistableWritable;

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
  withoutField(field: string | null): PersistableWritable;

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
  withoutField(field: FieldType | null): PersistableWritable;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): PersistableWritable;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): PersistableWritable;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): PersistableWritable;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): PersistableWritable;

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
  defaultField(field: string): PersistableWritable;

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
  defaultField(field: FieldType): PersistableWritable;

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
  unsetField(field: string): PersistableWritable;

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
  unsetField(field: FieldType): PersistableWritable;

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
  removeField(field: string): PersistableWritable;

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
  removeField(field: FieldType): PersistableWritable;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): PersistableWritable;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): PersistableWritable;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): PersistableWritable;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): PersistableWritable;

  mergeJson(json: any | null): PersistableWritable;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): PersistableWritable;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): PersistableWritable;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<PersistableWritable | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<PersistableWritable | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<PersistableWritable | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<PersistableWritable | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<PersistableWritable | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, PersistableWritable | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, PersistableWritable | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<PersistableWritable | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<PersistableWritable | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): PersistableWritable;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): PersistableWritable;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): PersistableWritable;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): PersistableWritable;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): PersistableWritable;

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
  static make(fields: any, withDefaults?: boolean): PersistableWritable;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): PersistableWritable | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): PersistableWritable;

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
  afterMake(): PersistableWritable;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): PersistableWritable;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<PersistableWritable>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): PersistableWritable;

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
  static fromString(s: string | null): PersistableWritable | null;

  /**
   * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
   * instance already exist.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
   *         will have only those fields populated. Otherwise only the id field will be populated.
   */
  create(spec?: UpsertSpec | null): PersistableWritable | null;

  /**
   * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances already exist.
   *
   * @param objs
   *           New objs to create.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
   *         include spec is specified in the 'spec.include' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static createBatch(objs: C3.Array<PersistableWritable | null> | null, spec?: UpsertSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances already exist.
   *
   * @param objs
   *           New objs to create.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
   *          `spec.includeObjsInResults`.
   */
  static createBatchObjStream(objs: Stream<PersistableWritable | null> | null, spec?: CreateBatchObjStreamSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
   * instance does not already exist.
   *
   * @param srcObj
   *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
   *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
   *         obj will have only those fields populated. Otherwise only the id field will be populated.
   */
  update(srcObj?: PersistableWritable | null, spec?: UpsertSpec | null): PersistableWritable | null;

  /**
   * Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
   * exception will be thrown.
   *
   * @param srcObj
   *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
   *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
   *        doesn't already exist.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
   *         returned obj will have only those fields populated. Otherwise only the id field will be populated.
   */
  upsert(srcObj?: PersistableWritable | null, spec?: UpsertSpec | null): PersistableWritable | null;

  /**
   * Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
   * updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
   * is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
   * explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
   * {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
   *
   * For collections, the merge operation is applied to every element in the source and updated collection rather than
   * merging the collections themselves.  This means that every element will be merged with the element with the same
   * key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
   * add/append elements to a collection.
   *
   * Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
   *
   * If the operation fails an exception will be thrown.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.
   *
   * @see Mergespec#csvInclude
   */
  merge(spec?: MergeSpec | null): PersistableWritable | null;

  /**
   * Merges an instance of a C3 type if it exists and creates it if it doesn't.
   *
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.
   */
  merge(mergeInclude: string, spec?: MergeSpec | null): PersistableWritable | null;

  /**
   * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   *
   * @return The created or updated obj.
   */
  touch(spec?: TouchSpec | null): PersistableWritable | null;

  /**
   * Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances don't already exist.
   *
   * @param objs
   *        Updated objs.
   * @param srcObjs
   *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
   *        diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
   *        replace the existing one.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
   *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static updateBatch(objs: C3.Array<PersistableWritable | null> | null, srcObjs?: C3.Array<PersistableWritable | null>, spec?: UpsertSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
   * called again to provide updated instances to be updated. If the operation fails for other reasons and
   * {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   * @param spec
   *        Various parameters that control the operation of the operation
   * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
   *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static updateObjs(objs: λSupplier<C3.Array<PersistableWritable | null>>, spec?: UpsertSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
   * fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *        Updated or new objs.
   * @param srcObjs
   *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
   *        diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
   *        existing one if it doesn't already exist.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
   *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static upsertBatch(objs: C3.Array<PersistableWritable | null> | null, srcObjs?: C3.Array<PersistableWritable | null>, spec?: UpsertSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
   * fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
   * If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
   * default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
   * {@link ObjList}.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   * @param spec
   *        Various parameters that control the operation of the operation
   * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
   *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static upsertObjs(objs: λSupplier<C3.Array<PersistableWritable | null>>, spec?: UpsertSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
   * objs will be considered an error.
   *
   * @param objs
   *        Objs to touch.
   *
   * @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
   *         include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static touchBatch(objs: C3.Array<PersistableWritable | null> | null, spec?: TouchSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
   * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
   * merge} function.
   *
   * If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *           Objs to merge.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#mergeInclude
   * @see Mergespec#csvInclude
   */
  static mergeBatch(objs: C3.Array<PersistableWritable | null> | null, spec?: MergeSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
   * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
   * merge} function.
   *
   * If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *           Objs to merge.
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#csvInclude
   */
  static mergeBatch(objs: C3.Array<PersistableWritable | null> | null, mergeInclude: string, spec?: MergeSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
   * conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
   * fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
   * C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
   * operation is described in the {@link merge} function.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   *
   * @param objs
   *        Lambda providing objs to be merged
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#csvInclude
   */
  static mergeObjs(objs: λSupplier<C3.Array<PersistableWritable | null>>, mergeInclude: string, spec?: MergeSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
   * functions, the set of fields to be merged can be controlled by specifying an include spec in either
   * {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
   * can be controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as
   * in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The number of objs that were merged.
   */
  static mergeAll(mergeObj: PersistableWritable | null, spec?: MergeAllSpec | null): number | null;

  /**
   * Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
   * controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as in
   * {@link FetchSpec#filter}.  If not specified, all instances will be merged.
   *
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The number of objs that were merged.
   */
  static mergeAll(mergeObj: PersistableWritable | null, mergeInclude: string, spec?: MergeAllSpec | null): number | null;

  /**
   * Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
   *
   * If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * @param spec
   *         Various parameters that control the operation of function.
   * @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
   *
   * @see Ann.Db#archive
   */
  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
   * reported in the returned {@link ObjList}.
   *
   * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * @param objs
   *         Objs to remove.
   * @param spec
   *         Various parameters that control the operation of function.
   * @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
   *
   * @see Ann.Db#archive
   */
  static removeBatch(objs: C3.Array<PersistableWritable | null> | null, spec?: UpsertSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Removes multiple instances of a C3 type based.
   *
   * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * For kv types, data that is currently being compacted will not be removed and thus will not guarantee
   * that all data will be removed. If you need a strong guarantee, use {@link clearCollection} instead.
   *
   * @param spec
   *         Spec controlling the operation
   * @param confirm
   *         Must be specified as true.  Otherwise request will be rejected.
   * @return The number of objs removed.  Note that under some circumstances the total number removed may not be
   *         known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
   *         connection can't return the value).  In those cases, this will return -1.
   */
  static removeAll(spec?: RemoveAllSpec | null, confirm: boolean): number;

  /**
   * Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *         Updated or new objs.  Any existing objs that aren't included in objs will be removed.
   * @param spec
   *         Various parameters that control the operation of function.
   * @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
   *         specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static replace(objs: C3.Array<PersistableWritable | null> | null, spec?: UpsertSpec | null): ObjList<PersistableWritable | null> | null;

  /**
   * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
   * {@link removeBatch} functions). If the operation fails an exception will be thrown.
   *
   * @return The recovered obj instance with all of its fields populated.
   *
   * @see Ann.Db#archive
   */
  unremove(): PersistableWritable | null;

  /**
   * Optional function to call during upsert/create/merge operations when an instance is being created and no value for
   * the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
   * short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
   * generate the id based on other field values present in the input.  Note that if an instance already exists with the
   * produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
   * existing instances for performing updates.
   */
  generateUniqueId(): string;

  /**
   * Callback that is called synchronously during an operation that creates objs before those objs are created.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be created.  The objs will be the entire input objs being created.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeCreate(objs: C3.Array<PersistableWritable | null> | null): ObjList<PersistableWritable | null>;

  /**
   * Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be updated.  By default the objs will be the complete original source
   *           obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
   *           a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
   *           will have at least those requested fields.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeUpdate(objs: C3.Array<PersistableWritable | null> | null): ObjList<PersistableWritable | null>;

  /**
   * Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be removed.  By default the objs will be the complete original source
   *           obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
   *           be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
   *           requested fields.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeRemove(objs: C3.Array<PersistableWritable | null> | null): ObjList<PersistableWritable | null>;

  /**
   * Callback that is called synchronously during a request that creates objs after those objs are created.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were created.  The objs will already have been created.  By default, only the id
   *           is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   * @return List of any errors that were encountered.
   */
  static afterCreate(objs: C3.Array<PersistableWritable | null> | null): C3.Array<ObjError | null>;

  /**
   * Callback that is called synchronously during a request that updates objs after those objs are updated.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were updated.  The objs will already have been updated.  By default, only the id
   *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   * @return List of any errors that were encountered.
   */
  static afterUpdate(objs: C3.Array<PersistableWritable | null> | null): C3.Array<ObjError | null>;

  /**
   * Callback that is called synchronously during a request that removes objs after those objs are removed.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were removed.  The objs will already have been removed.  By default, only the id
   *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   *           Since the objs will already have been removed, they will be in the state they were in prior to removal.
   * @return List of any errors that were encountered.
   */
  static afterRemove(objs: C3.Array<PersistableWritable | null> | null): C3.Array<ObjError | null>;

  /**
   * Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
   * valid for C3 types that are stored in Cassandra.
   *
   * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
   * apis as fast as direct IO apis.
   * Use with caution!!!
   *
   * @param clearNullValues
   *           If true then map keys with null values will be cleared.
   * @return The created or updated obj with only the id populated if it exists and null otherwise.
   */
  upsertDirect(merge?: boolean, clearNullValues?: boolean): Obj | null;

  /**
   * Begin an upsert operation to the secondary data store.
   *
   * IMPORTANT:
   *
   * 1. This is only valid for types that specify a secondary datastore.
   * 2. Currently only types that are not extendable are supported.
   *
   * @param type
   *           Type that the upsert operation is for.
   *
   * @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
   */
  static beginUpsertToSecondaryDs(type: Type): SecondaryDsUpsert;

  /**
   * Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
   * defaulting to using multi-row sql for the deletes.
   *
   * @param spec
   *        Spec controlling the operation
   * @param confirm
   *        Must be specified as true.  Otherwise request will be rejected.
   */
  static clearCollection(spec?: ClearCollectionSpec | null, confirm: boolean): void;

  /**
   * Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
   * {@link merge} or their batch equivalents.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were created.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static created(txn: Transaction): void;

  /**
   * Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
   * {@link merge} or their batch equivalents.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were updated.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static updated(txn: Transaction): void;

  /**
   * Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
   * {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
   * archive operation or it is physically removed.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were removed.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static removed(txn: Transaction): void;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}

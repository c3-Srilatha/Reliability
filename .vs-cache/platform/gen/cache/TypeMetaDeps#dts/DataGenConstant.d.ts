// TypeScript definitions for the C3 type DataGenConstant

/**
 * A data generator which always returns a single value. Note that this does not depend on randomness and so always
 * returns the passed-in seed value.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataGenConstant
 */
declare interface IDataGenConstant<T> {

  /**
   * Value type for generated values.
   */
  valueType?: IValueType | null;

  /**
   * Whether to generate simplified, example-style data rather than the full possible range of values.
   * For example this will produce a simple value like "17" for an `int` rather than a uniform random number in
   * [-2⁶³..2⁶³).
   *
   * This is only relevant for untrained models, such as {@link DataGenObj} and {@link DataGenPrimitive}.
   */
  example?: boolean;

  /**
   * Initial seed value for randomization. Note that generators with same seed are required to produce exact same
   * sequence of values. This value is mutated as methods are called on it; see #next and #array.
   */
  seed?: number | null;

  /**
   * The single value to be returned by each call to #next.
   */
  value: T;
}

/**
 * A data generator which always returns a single value. Note that this does not depend on randomness and so always
 * returns the passed-in seed value.
 *
 * @remarks this represents a made instance of DataGenConstant
 */
declare class DataGenConstant<T> extends Obj {

  /**
   * Value type for generated values.
   */
  valueType?: ValueType | null;
  withValueType(valueType: IValueType | null): DataGenConstant;

  /**
   * Whether to generate simplified, example-style data rather than the full possible range of values.
   * For example this will produce a simple value like "17" for an `int` rather than a uniform random number in
   * [-2⁶³..2⁶³).
   *
   * This is only relevant for untrained models, such as {@link DataGenObj} and {@link DataGenPrimitive}.
   */
  example?: boolean;
  withExample(example: boolean): DataGenConstant;

  /**
   * Initial seed value for randomization. Note that generators with same seed are required to produce exact same
   * sequence of values. This value is mutated as methods are called on it; see #next and #array.
   */
  seed?: number | null;
  withSeed(seed: number | null): DataGenConstant;

  /**
   * The single value to be returned by each call to #next.
   */
  value: T;
  withValue(value: T): DataGenConstant;

  /**
   * Construct an instance with initial state.
   */
  static make(): DataGenConstant<T>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): DataGenConstant<T>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): DataGenConstant<T>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): DataGenConstant<T>;

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
  static make(fields: any, withDefaults?: boolean): DataGenConstant<T>;

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
  static fromJson(json: any | null): DataGenConstant<T> | null;

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
  static fromJsonString(json: string | null): DataGenConstant<T> | null;

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
  static fromXmlString(xml: string | null): DataGenConstant<T> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): DataGenConstant<T> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): DataGenConstant<T>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataGenConstant<T>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataGenConstant<T>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataGenConstant<T> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataGenConstant<T> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): DataGenConstant<T>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataGenConstant<T>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataGenConstant<T>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): DataGenConstant<T>;

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
  withField(field: string, value: any, doNotConvert?: boolean): DataGenConstant<T>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): DataGenConstant<T>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): DataGenConstant<T>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): DataGenConstant<T>;

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
  withoutFieldAtPath(path: string): DataGenConstant<T>;

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
  withoutField(field: string | null): DataGenConstant<T>;

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
  withoutField(field: FieldType | null): DataGenConstant<T>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): DataGenConstant<T>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): DataGenConstant<T>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): DataGenConstant<T>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): DataGenConstant<T>;

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
  defaultField(field: string): DataGenConstant<T>;

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
  defaultField(field: FieldType): DataGenConstant<T>;

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
  unsetField(field: string): DataGenConstant<T>;

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
  unsetField(field: FieldType): DataGenConstant<T>;

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
  removeField(field: string): DataGenConstant<T>;

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
  removeField(field: FieldType): DataGenConstant<T>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): DataGenConstant<T>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): DataGenConstant<T>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): DataGenConstant<T>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): DataGenConstant<T>;

  mergeJson(json: any | null): DataGenConstant<T>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): DataGenConstant<T>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): DataGenConstant<T>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<DataGenConstant<T> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<DataGenConstant<T> | null>;

  /**
   * Generate an array of random values of the specified type. This starts with the seed maintained by {@link Rnd}.
   *
   * @param size number of data instances to be generated
   * @return array of random values
   *
   * @see #next
   */
  static array(elementType: ValueType, size: number): C3.Array<V | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<DataGenConstant<T> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<DataGenConstant<T> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<DataGenConstant<T> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, DataGenConstant<T> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, DataGenConstant<T> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<DataGenConstant<T> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<DataGenConstant<T> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): DataGenConstant<T>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): DataGenConstant<T>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): DataGenConstant<T>;

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
  afterMake(): DataGenConstant<T>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): DataGenConstant<T>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<DataGenConstant<T>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): DataGenConstant<T>;

  /**
   * Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
   * The value must be of the correct type if doNotConvert flag is true.
   *
   * @param name
   *           of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, attempt to convert the value to match the field's type
   * @return this Obj
   */
  setField(field: string, value: any, doNotConvert?: boolean): DataGenConstant<T>;

  /**
   * Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
   * The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, attempt to convert the value to match the field's type
   * @return this Obj
   */
  setField(field: FieldType, value: any, doNotConvert?: boolean): DataGenConstant<T>;

  /**
   * Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
   * field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
   * properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
   * collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
   * key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
   * collection field. This has the same appearance as if the collection field were assigned from a previously
   * unassigned value.
   *
   * Example:
   * ```type
   * type A mixes MutableObj {
   *   onChange: ~
   *   b: [string]
   *   c: map<string, int>
   *   d: D
   * }
   * type D mixes MutableObj {
   *   onChange: ~
   *   e: string
   * }
   * ```
   * ```js
   * var a = A.make({b: ['hello', 'goodbye'], d: {}});
   * a.b[1] = 'World'; // 1
   * a.c['hello'] = 'world'; // 2
   * a.d.e = 'hello' // 3
   * a.b.pop(); // 4
   * ```
   * `A.onChange` should be called four times:
   *   1. when the field `b` changed - the FieldPath will be "b[1]".
   *   2. when the field `c` changed - the FieldPath will be "c.hello".
   *   3. when `d` changed - the FieldPath will be "d.e".
   *   4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
   *
   * `D.onChange` should be called once - the FieldPath will be `e`.
   *
   * Note that if multiple elements of a child collection are changed, you will get multiple field paths.
   *
   * @param changed paths to fields that changed
   *
   * @see #onEdit
   */
  onChange(changed: C3.Array<string | null>): void;

  /**
   * Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
   * contains more information about the values which changed, including their prior values. This allows a full
   * difference to be calculated if desired. Note that maintaining this state is much more costly than simple
   * notification via #onChange and should only be used if truly required.
   *
   * @param edits a list of what changed and the prior values
   *
   * @see #onChange
   */
  onEdit(edits: Obj): void;

  /**
   * Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
   *
   * @param action the lambda to invoke that makes changes without notification
   */
  withoutChangeEvent(action: λConsumer<Mutable | null>): void;

  /**
   * Initial seed value for randomization. If the #seed field is null, the seed maintained by {@link Rnd} is used
   * and the field is updated.
   */
  safeSeed(): number;

  /**
   * Generate a random value. This starts with the current #seed and updates the field as it goes.
   *
   * @param prev the previous value in the sequence if any
   * @return generated next value
   *
   * @see #array
   */
  next(prev?: T | null): T;

  /**
   * Generate array of random data of type T, by number of instances. This starts with the current #seed and updates
   * the field as it goes.
   *
   * @param n: number of data instances to be generated
   * @return an array of size n of random data
   */
  generateValues(n: number): C3.Array<T | null>;

  /**
   * Set the seed and generate array of random data of type T, by number of instances. This starts with the specified
   * seed and updates the #seed field as it goes.
   *
   * @param seed to be fed to random number generator
   * @param n number of data instances to be generated
   * @return an array of size n of random data
   */
  generateValues(seed: number, n: number): C3.Array<T | null>;

  /**
   * @return default random data generator for a given type or `null` if one is not available.
   */
  static forType(valueType: ValueType, parent?: DataGen<any> | null): DataGenConstant<V> | null;

  /**
   * @return converted value for a type of this generator.
   */
  convertValue(v?: any): any;

  /**
   * Implemented by each sub-type to generate a value based on its algorithm and configuration.
   *
   * @return generated next value and updated seed.
   */
  _next(seed: number, prev?: T | null): RndResult<T>;

  /**
   * @return generated int value and updated seed
   */
  static nextInt(seed: number, generator?: DataGenInt | null, min?: number | null, max?: number | null): RndInt;

  /**
   * This method must be implemented by every sub-type to return data based on its algorithm and configuration.
   *
   * @return generated value and updated seed
   */
  static nextVal(seed: number, generator?: DataGen<any> | null, prev?: any): RndResult<any> | null;

  /**
   * Return the type of values this generator generates. This is the binding for the **T** generic variable on this
   * type. Note that this returns null if the value is not fully bound (unbound or bound to another variable reference).
   *
   * @param failIfNone if true, throw an error instead of returning null
   *
   * @see Type#genericVarBinding
   */
  generatedValueType(failIfUnbound?: boolean): ValueType | null;

  /**
   * Create a constant generator of the specified value. If the value type is specified, the value must be convertible
   * to that type. Otherwise, its type must be unambiguously determinable by {@link ValueType#guessType}.
   */
  static forValue(value: any, valueType?: ValueType | null): DataGenConstant | null;
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

// TypeScript definitions for the C3 type MicrobenchResultSet

/**
 * The results from multiple runs of one or more performance tests.
 *
 * In "test" mode, there will be a single entry in the map, which has one or more runs as individual
 * {@link MicrobenchResult} instances. See {@link Microbench#test}.
 *
 * In "compare" mode, there will be multiple entries in the map, which include comparative as well as absolute results.
 * See {@link Microbench#compare}.
 *
 * In both cases, the keys of the map will be a metric base name, such as "Foo_Kpi.1M.frubbles" to which the
 * individual metrics collected by each run, such as {@link MicrobenchResult#time}, are appended. For the above
 * example, the metrics "Foo_Kpi.1M.frubbles.time" and "Foo_Kpi.1M.frubbles.gcTime" might be recorded in the
 * perf. metrics database.
 *
 * @see Microbench
 * @see MicrobenchResult
 *
 * @remarks this represents a value passed to a method that expects an instance of MicrobenchResultSet
 */
declare interface IMicrobenchResultSet {

  /**
   * The individual results for each run of each test. The key is the test name and the value is the set of results.
   */
  results: C3.Map<string | null, C3.Array<MicrobenchResult>> | {[key: string | null]: C3.Array<MicrobenchResult> | Array<IMicrobenchResult>};

  /**
   * The summary results for each test, normally a composite of the _best_ performance from all the runs. This is what
   * gets reported in the {@link PerfMetric} database.
   *
   * @see MicrobenchResult.bestCase
   */
  summary: C3.Map<string | null, MicrobenchResult> | {[key: string | null]: IMicrobenchResult};
}

/**
 * The results from multiple runs of one or more performance tests.
 *
 * In "test" mode, there will be a single entry in the map, which has one or more runs as individual
 * {@link MicrobenchResult} instances. See {@link Microbench#test}.
 *
 * In "compare" mode, there will be multiple entries in the map, which include comparative as well as absolute results.
 * See {@link Microbench#compare}.
 *
 * In both cases, the keys of the map will be a metric base name, such as "Foo_Kpi.1M.frubbles" to which the
 * individual metrics collected by each run, such as {@link MicrobenchResult#time}, are appended. For the above
 * example, the metrics "Foo_Kpi.1M.frubbles.time" and "Foo_Kpi.1M.frubbles.gcTime" might be recorded in the
 * perf. metrics database.
 *
 * @see Microbench
 * @see MicrobenchResult
 *
 * @remarks this represents a made instance of MicrobenchResultSet
 */
declare class MicrobenchResultSet extends Obj {

  /**
   * The individual results for each run of each test. The key is the test name and the value is the set of results.
   */
  readonly results: C3.Map<string | null, C3.Array<MicrobenchResult>>;
  withResults(results: C3.Map<string | null, C3.Array<MicrobenchResult>> | {[key: string | null]: C3.Array<MicrobenchResult> | Array<IMicrobenchResult>}): MicrobenchResultSet;

  /**
   * The summary results for each test, normally a composite of the _best_ performance from all the runs. This is what
   * gets reported in the {@link PerfMetric} database.
   *
   * @see MicrobenchResult.bestCase
   */
  readonly summary: C3.Map<string | null, MicrobenchResult>;
  withSummary(summary: C3.Map<string | null, MicrobenchResult> | {[key: string | null]: IMicrobenchResult}): MicrobenchResultSet;

  /**
   * String-based representation of instance of this type.
   */
  toString(): string | null;

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
  static fromJson(json: any | null): MicrobenchResultSet | null;

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
  static fromJsonString(json: string | null): MicrobenchResultSet | null;

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
  static fromXmlString(xml: string | null): MicrobenchResultSet | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): MicrobenchResultSet | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): MicrobenchResultSet;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MicrobenchResultSet;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MicrobenchResultSet;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MicrobenchResultSet | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MicrobenchResultSet | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): MicrobenchResultSet;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MicrobenchResultSet;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MicrobenchResultSet;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): MicrobenchResultSet;

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
  withField(field: string, value: any, doNotConvert?: boolean): MicrobenchResultSet;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): MicrobenchResultSet;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): MicrobenchResultSet;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): MicrobenchResultSet;

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
  withoutFieldAtPath(path: string): MicrobenchResultSet;

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
  withoutField(field: string | null): MicrobenchResultSet;

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
  withoutField(field: FieldType | null): MicrobenchResultSet;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): MicrobenchResultSet;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): MicrobenchResultSet;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): MicrobenchResultSet;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): MicrobenchResultSet;

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
  defaultField(field: string): MicrobenchResultSet;

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
  defaultField(field: FieldType): MicrobenchResultSet;

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
  unsetField(field: string): MicrobenchResultSet;

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
  unsetField(field: FieldType): MicrobenchResultSet;

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
  removeField(field: string): MicrobenchResultSet;

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
  removeField(field: FieldType): MicrobenchResultSet;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): MicrobenchResultSet;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): MicrobenchResultSet;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): MicrobenchResultSet;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): MicrobenchResultSet;

  mergeJson(json: any | null): MicrobenchResultSet;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): MicrobenchResultSet;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): MicrobenchResultSet;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<MicrobenchResultSet | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<MicrobenchResultSet | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<MicrobenchResultSet | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<MicrobenchResultSet | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<MicrobenchResultSet | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, MicrobenchResultSet | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, MicrobenchResultSet | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<MicrobenchResultSet | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<MicrobenchResultSet | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): MicrobenchResultSet;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): MicrobenchResultSet;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): MicrobenchResultSet;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): MicrobenchResultSet;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): MicrobenchResultSet;

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
  static make(fields: any, withDefaults?: boolean): MicrobenchResultSet;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): MicrobenchResultSet;

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
  afterMake(): MicrobenchResultSet;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): MicrobenchResultSet;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<MicrobenchResultSet>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): MicrobenchResultSet;

  /**
   * Get the test names, which correspond to the keys of the #results map.
   */
  testNames(): C3.Array<string | null>;

  /**
   * Get the number of distinct tests, which corresponds to the number of entries in the #results map.
   */
  testCount(): number;

  /**
   * The value returned from a single iteration of a run of the only test (if any).
   *
   * @see MicrobenchResult#resultValue
   */
  resultValue(): any;

  /**
   * The value returned from a single iteration of a run of the specified test (if any).
   *
   * @see MicrobenchResult#resultValue
   */
  resultValue(test: string): any;

  /**
   * Convert to a comma-separated-value (CSV) string, including the time for all results and the summary. For example:
   * ```
   * testname,run #0,run #1
   * KPI.mergeSimilar.random.100,0.063826748,0.046710056
   * KPI.mergeSimilar.random.200,0.061991947,0.056542636
   * ```
   */
  timesToCsv(delimiter?: string | null): string | null;

  /**
   * Convert a summary of multiple test runs to a tabular format. This includes all statistics that are reported in
   * all the different tests. This will show both the absolute types and the time relative to the first test (the
   * baseline).
   *
   * Supported formats are:
   *  - "text/plain" plain text with spaces to align columns
   *  - "text/html" HTML table
   *  - "text/markdown" for a GFM Markdown table
   */
  compareTable(contentType: ContentType): Content;

  /**
   * Report the summary results of all tests and store them in the perf. metrics database. Each test name in the
   * #summary map will be prefixed by the specified value (if any) when stored as the "metric".
   *
   * @param metricPrefix prefix to each test name to make them unique across the database
   * @param timestamp date/time for the metric, defaults to when the test was run
   *
   * @see PerfMetric
   */
  report(metricPrefix?: string | null, timestamp?: DateTime | null): void;

  /**
   * Generate a report for full historical view of test results (measurements) and generate a regression report if there's
   * any performance regression detected. Write these reports to historicalReportPath and regressionReportPath,
   * respectively.
   *
   * @param historySet
   *           The history result set loaded from perf. metrics database, which will be fully displayed in the
   *           historical report and compared with current result(ths) to detect performance regression. Note that only
   *           the latest 100 results will be used for comparing.
   * @param currentSet
   *           The result set loaded from perf. metrics database for the current SHA, representing the current state
   *           of the code.
   * @param displayName
   *           The name for this result set which will be displayed in the report.
   *           If not provided, it is assumed that the result set contains only one result and the name of that result
   *           is used as the displayed name.
   * @param metricBase
   *           Only used for `MicrobenchResultSet`s which contain the results of a comparative test.
   *           This parameter denotes the common prefix of the name of all results in the set; this
   *           common prefix is trimmed to create the displayed name of each result.
   * @param historicalReportPath the path in local file system to write historical report to
   * @param regressionReportPath the path in local file system to write regression report to (if any)
   *
   * @see PerfMetric
   */
  generateHtmlReport(historySet?: MicrobenchResultSet | null, currentSet?: MicrobenchResultSet | null, displayName?: string | null, metricBase?: string | null, historicalReportPath?: string | null, regressionReportPath?: string | null): void;

  /**
   * Generate a lite report for historical view of test results (measurements).
   * Write these reports to historicalReportPath
   *
   * @param historySet
   *           The history result set loaded from perf. metrics database, which will be fully displayed in the
   *           historical report and compared with current result(ths) to detect performance regression. Note that only
   *           the latest 24 results will be used for comparing.
   * @param methodName
   *           The name for this result set which will be displayed in the report.
   *           If not provided, the name of this result set is used as the displayed name.
   * @param metricBase
   *           Only used for `MicrobenchResultSet`s which contain the results of a comparative test.
   *           This parameter denotes the common prefix of the name of all results in the set; this
   *           common prefix is trimmed to create the displayed name of each result.
   * @param historicalReportPath the path in local file system to write historical report to
   *
   * @see PerfMetric
   */
  generateLiteHtmlReport(historySet?: MicrobenchResultSet | null, title?: string | null, methodName?: string | null, metricBase?: string | null, historicalReportPath?: string | null): void;

  /**
   * Load reported summary results from the perf. metrics database for the tests in this result set.
   * Only a small number (100 by default) of the most recent results are loaded and only for the current machine.
   * The summaries are produced as the averages of the prior runs, with outliers removed.
   *
   * Note that "current machine" is the same {@link Hardware#instanceType instance type} if running in the cloud or
   * the same {@link Hardware#name host name} if running locally.
   *
   * @param metricPrefix prefix to each test name to make them unique across the database
   * @param spec options for amount to fetch and summary preparation
   *
   * @see PerfMetric
   * @see Hardware
   */
  loadHistory(metricPrefix?: string | null, spec?: MicrobenchResultSet.LoadHistorySpec | null): MicrobenchResultSet | null;

  /**
   * Load reported summary results from the perf. metrics database for the named tests. Only a small number (100 by
   * default) of the most recent results are loaded and only for the current machine. The summaries are produced as the
   * averages of the prior runs, with outliers removed.
   *
   * Note that "current machine" is the same {@link Hardware#instanceType instance type} if running in the cloud or
   * the same {@link Hardware#name host name} if running locally.
   *
   * Note that when running on CI, it will fetch data:
   * - that only come from main branches: develop/release/master/support/v*
   * - whose major.minor version <= currMajor.currMinor, if the data point is produced by develop build
   * - whose major.minor version is equal to currMajor.currMinor, if the data point is produced by other main branches
   *
   * When running locally, it will fetch data whose gitBranch match the current branch.
   *
   * @param metricPrefix prefix to each test name to make them unique across the database
   * @param spec options for amount to fetch and summary preparation
   *
   * @see PerfMetric
   * @see Hardware
   */
  static loadTestHistory(names: C3.Array<string | null>, spec?: MicrobenchResultSet.LoadHistorySpec | null): MicrobenchResultSet | null;

  /**
   * Load reported summary results from the perf. metrics database for all tests that match the filter criteria.
   * Only a small number (100 by default) of the most recent results are loaded and only for the current machine.
   * The summaries are produced as the averages of the prior runs, with outliers removed
   *
   * Note that "current machine" is the same {@link Hardware#instanceType instance type} if running in the cloud or
   * the same {@link Hardware#name host name} if running locally.
   *
   * @param spec options for amount to fetch and summary preparation
   */
  static loadTestReports(spec?: MicrobenchResultSet.LoadHistorySpec | null): MicrobenchResultSet | null;

  /**
   * Load reported summary results from the perf. metrics database for the named tests. Only a small number (100 by
   * default) of the most recent results are loaded and only for the current machine. The summaries are produced as the
   * averages of the prior runs, with outliers removed.
   *
   * Two sets are loaded:
   *  - "history" contains results from the base branch
   *  - "current" contains results from the current branch
   *
   * See {@link MicrobenchSpec} for details of how the base branch is guessed.
   * See #specHistoryAndCurrent
   */
  static loadHistoryAndCurrent(names: C3.Array<string | null>, spec?: MicrobenchSpec | null): Pair<MicrobenchResultSet | null, MicrobenchResultSet | null>;

  /**
   * {@link MicrobenchResultSet.LoadHistorySpec Specs} to load summary results from the perf. metrics database for the
   * named tests. Only a small number (100 by default) of the most recent results are loaded and only for the current
   * machine. The summaries are produced as the averages of the prior runs, with outliers removed.
   *
   * Two specs are returned:
   *  - "history" contains results from the base branch
   *  - "current" contains results from the current branch
   *
   * See {@link MicrobenchSpec} for details of how the base branch is guessed.
   */
  static specHistoryAndCurrent(names: C3.Array<string | null>, spec?: MicrobenchSpec | null): Pair<MicrobenchResultSet.LoadHistorySpec | null, MicrobenchResultSet.LoadHistorySpec | null>;

  /**
   * Issue an arbitrary {@link Persistable#fetch fetch} against the {@link PerfMetric} database. Note that this has a
   * huge number of entries so any useful query will need a restrictive filter and probably ordering by
   * `descending(timestamp)`.
   *
   * For example:
   * ```js
   * MicrobenchResultSet.fetchPerfMetrics({
   *   filter: 'startsWith(metric, "code-gen")',
   *   order:  'descending(timestamp)',
   *   limit:  100
   * })
   * ```
   *
   * Note that the perf metrics are stored in a different cluster, so this query cannot be done directly in the
   * current database. Also the returned instances are not {@link Persistable} so cannot be used in further DB
   * operations.
   *
   * Finally, when comparing results, grouping by `instanceType` and `gitBranch` is important. See all the
   * {@link PerfMetricDimensionFields possible dimensions}.
   *
   * @see PerfMetric
   */
  static fetchPerfMetrics(spec: FetchSpec): FetchResult<PerfMetric | null>;

  /**
   * Publish a lite html report.
   * The report will be consisted of each test, with time performance and a graph that shows trend of the test.
   * The graph will be composed by 24 `v8only` branch's historical data points and 1 current branch's data point
   * The report will be as simple as
   * #####
   * [Test name]
   * '[Test name].time of 19.5s is 5.8σ above historical average 17.1s'
   * [Graph of 25 data points]
   * #####
   *
   * @param names: `./v8 js -e [code(args)]` does not take in complex arguments, such as array
   *                Format as below "test1,test2,test3"
   * @param title: title shown in the lite html report
   * @param outputPath: output path of the html report
   */
  static publishLiteReport(names: string, title: string, outputPath: string, spec?: MicrobenchSpec | null): void;

  /**
   * Generate a report that should contain results for Poly KPI test cases in the form of a table and compare them
   * across the requirements from a map. Used by {@link #generatePolyKpiPerfReport} and exposed for testing purpose
   */
  static generatePolyKpiPerfReportFromMap(jsonData: C3.Map<string | null, any>, baseRequirements: C3.Array<string | null>): string | null;

  /**
   * Generate a report that should contain results for Poly KPI test cases in the form of a table and compare them
   * across the requirements.
   * @param gitBranch: The git branch for which we will generate the Poly KPI performance report.
   * @param buildNumber: The build number of the the git branch for which we will generate the Poly KPI performance report.
   * @param polyKpiPerfReportPath the path in local file system to write report to
   *
   * @see PerfMetric
   */
  static generatePolyKpiPerfReport(gitBranch?: string | null, buildNumber?: number | null, polyKpiPerfReportPath?: string | null): void;
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

// TypeScript definitions for the C3 type MetricEvaluatable

/**
 * Defines a set of APIs for evaluating metrics
 *
 * @remarks this represents a value passed to a method that expects an instance of MetricEvaluatable
 */
declare interface IMetricEvaluatable {
}

/**
 * Defines a set of APIs for evaluating metrics
 *
 * @remarks this represents a made instance of MetricEvaluatable
 */
declare class MetricEvaluatable extends Obj {

  /**
   * Get a renderer that will show info on the metrics available for this source object to HTML.
   */
  renderer(): HtmlRenderer | null;

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
  static fromJson(json: any | null): MetricEvaluatable | null;

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
  static fromJsonString(json: string | null): MetricEvaluatable | null;

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
  static fromXmlString(xml: string | null): MetricEvaluatable | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): MetricEvaluatable | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): MetricEvaluatable;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MetricEvaluatable;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MetricEvaluatable;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MetricEvaluatable | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MetricEvaluatable | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): MetricEvaluatable;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MetricEvaluatable;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MetricEvaluatable;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): MetricEvaluatable;

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
  withField(field: string, value: any, doNotConvert?: boolean): MetricEvaluatable;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): MetricEvaluatable;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): MetricEvaluatable;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): MetricEvaluatable;

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
  withoutFieldAtPath(path: string): MetricEvaluatable;

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
  withoutField(field: string | null): MetricEvaluatable;

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
  withoutField(field: FieldType | null): MetricEvaluatable;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): MetricEvaluatable;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): MetricEvaluatable;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): MetricEvaluatable;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): MetricEvaluatable;

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
  defaultField(field: string): MetricEvaluatable;

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
  defaultField(field: FieldType): MetricEvaluatable;

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
  unsetField(field: string): MetricEvaluatable;

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
  unsetField(field: FieldType): MetricEvaluatable;

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
  removeField(field: string): MetricEvaluatable;

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
  removeField(field: FieldType): MetricEvaluatable;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): MetricEvaluatable;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): MetricEvaluatable;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): MetricEvaluatable;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): MetricEvaluatable;

  mergeJson(json: any | null): MetricEvaluatable;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): MetricEvaluatable;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): MetricEvaluatable;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<MetricEvaluatable | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<MetricEvaluatable | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<MetricEvaluatable | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<MetricEvaluatable | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<MetricEvaluatable | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, MetricEvaluatable | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, MetricEvaluatable | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<MetricEvaluatable | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<MetricEvaluatable | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): MetricEvaluatable;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): MetricEvaluatable;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): MetricEvaluatable;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): MetricEvaluatable;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): MetricEvaluatable;

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
  static make(fields: any, withDefaults?: boolean): MetricEvaluatable;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): MetricEvaluatable;

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
  afterMake(): MetricEvaluatable;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): MetricEvaluatable;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<MetricEvaluatable>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): MetricEvaluatable;

  /**
   * API for returning a list of simple and compound metrics applicable for this type (alphabetically sorted)
   * @return a list of metrics
   */
  static listMetrics(): C3.Array<Metric | null>;

  /**
   * List of simple and compound metrics for this type
   * @return ListMetricsResult
   */
  static listMetricsByKind(): ListMetricsResult | null;

  /**
   * Returns the simple metric associated with the source type OR the parent if the one for source doesn't exist
   * @return the SimpleMetric for the source type or parent type based on whats present
   */
  static getSimpleMetric(metricName: string): SimpleMetric | null;

  /**
   * API to be used for evaluating single source with single metric
   * @param spec
   *          The spec which specifies the sourceId / start / end / metricName / grain
   * @return a Timeseries for the given spec
   */
  static evalMetric(spec?: EvalMetricSpec | null): Timeseries<any> | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return the result of evaluation containing multiple source and multiple metrics
   */
  static evalMetrics(spec?: EvalMetricsSpec | null): EvalMetricsResult | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return stream of evaluation containing multiple source and multiple metrics one source at a time
   */
  static evalMetricsStream(spec?: EvalMetricsSpec | null): EvalMetricsResultStream | null;

  /**
   * This api should be used when all the metrics in the spec are aggregate metrics and are expected to return only a scalar value
   * Since evalMetrics and evalMetric api's return Timeseries for aggregate metrics with the same value repeated in data field
   * this api will be handy for just accessing the scalar value easily
   * @param spec
   *          EvalMetricsSpec specifying start / end / interval / ids (source ids) / expressions (this should be aggregate expressions ONLY)
   *          The onus of passing aggregate metrics is on the user and the api will pick the first value from the result
   *          and stick it in as the scalar value with the appropriate unit
   * @return The map of srcId -> expression -> Aggregated value with unit
   */
  static evalAggregateMetrics(spec?: EvalMetricsSpec | null): C3.Map<string | null, C3.Map<string | null, Dimension | null>>;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries for that 1 Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information
   * @return 1 timeseries which is an aggregation of all the sources' timeseries
   */
  static rollupMetric(spec?: RollupMetricSpec | null): Timeseries<any> | null;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetrics(spec?: RollupMetricSpec | null): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric by passing custom metrics on the fly
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetricsWithMetadata(spec?: RollupMetricSpec | null, overrideMetrics?: C3.Array<Metric | null>): C3.Map<string | null, Timeseries<any> | null>;

  /**
   * Returns all the variables in the given expression
   * @param expression
   *                The expression for which you need to find variables
   * @return a list of all the variables in the metric expression
   */
  static metricVariables(expression: string): C3.Array<MetricVariable | null>;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return the result which contains the result of metric evaluations for various sources
   */
  static evalMetricsWithMetadata(spec?: EvalMetricsSpec | null, overrideMetrics?: C3.Array<Metric | null>): EvalMetricsResult | null;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return stream of result which contains the result of metric evaluations for various sources one source at a time
   */
  static evalMetricsWithMetadataStream(spec?: EvalMetricsSpec | null, overrideMetrics?: C3.Array<Metric | null>): EvalMetricsResultStream | null;

  /**
   * The api should be used to export all the source data to s3
   * This includes extracting the relational data, timeseries data and tsDecl data
   * It internally creates a map reduce job to write data to s3
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @param numObjPerFile (optional)
   *          Number of objects per file to be created in S3
   * @param typeForSrcIds (optional)
   *          If this type is specified then ids for exporting src type objects will be picked from this type and not
   *          from the spec object
   * @return the export job object for tracking status
   */
  static exportMetricsDataJob(spec?: EvalMetricsSpec | null, additionalExportSpec?: AdditionalExportSpec | null, numObjPerFile?: number | null, typeForSrcIds?: Type | null): Export | null;

  /**
   * API used to import all the exported data in s3
   * @param filePrefix (optional)
   *          Optional filePrefix to used to get files from S3
   * @return the import job object for tracking status
   */
  static importMetricsDataJob(filePrefix?: string | null): Import | null;

  /**
   * The api should be used to download data for all the metrics / sources specified in the EvalMetricsSpec
   * This includes extracting the relational data, timeseries data and tsDecl data
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @return an ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static extractMetricsData(spec?: EvalMetricsSpec | null, additionalExportSpec?: AdditionalExportSpec | null): ExportedObj | null;

  /**
   * API is supposed to import the data that was exported using the extractMetricsData api
   * @param input
   *          Input is a map of typeName to array of array of objects grouped by a batch size
   *          ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static importMetricsData(input?: ExportedObj | null): void;

  /**
   * This api is used to refresh metrics cache. Subsequent evalMetrics call should serve results from cache. Metrics cache should be defined
   * via "<type-name>-MetricsCacheConfig" TenantConfig. Only metrics that are specified in "<type-name>-MetricsCacheConfig" will be cached.
   * There is no invalidation of this cache and should be refreshed manually
   * @param ids
   *          The src ids that need to be cached.
   * @param metricNames (optional)
   *          The list of metrics that need to be cached. This could be simple and/or compound or a mix.
   *                                          This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param startDate (optional)
   *          Optional evaluation start date for caching metrics
   * @param endDate (optional)
   *          Optional evaluation end date for caching metrics
   */
  static refreshMetricsCache(ids?: C3.Array<string | null>, metricNames?: C3.Array<string | null>, startDate?: DateTime | null, endDate?: DateTime | null): void;

  /**
   * This api should be used to kick of the metrics cache refresh map reduce job
   * @param metricNames (optional)
   *                The list of metrics whose cache needs to be refreshed. This could be simple and/ or compound or a mix
   *                This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param filter (optional)
   *                Filter out certain source ids
   * @param startDate (optional)
   *                Optional start date for caching metrics
   * @param endDate (optional)
   *                Optional end date for caching metrics
   */
  static startMetricsCacheRefreshJob(metricNames?: C3.Array<string | null>, batchSize?: number | null, filter?: string | null, startDate?: DateTime | null, endDate?: DateTime | null): MetricsCacheRefreshJob | null;

  /**
   * This provides the status for the metrics cache refresh job
   */
  static metricsCacheRefreshJobStatus(): MapReduceStatus | null;

  /**
   * API to generate stats like min / max / avg / count / gaps/ unavailable / earliest data point / latest data point
   * for a metric source combination in a given time range
   * @param ids
   *         list of ids that stats need to be computed for
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static generateMetricsStats(ids?: C3.Array<string | null>, metricNames?: C3.Array<string | null>, startDate?: DateTime | null, endDate?: DateTime | null, interval?: string | null, testHash?: boolean): void;

  /**
   * Helper function to kick off metrics stats generation for metrics & sources combination for a given time range
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param batchSize
   *         No of sources to be included in 1 map reduce job: Default: 100
   * @param filter
   *         Filter criteria on the source type
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static startMetricsStatsJob(metricNames?: C3.Array<string | null>, batchSize?: number | null, filter?: string | null, startDate?: DateTime | null, endDate?: DateTime | null, interval?: string | null, testHash?: boolean): MetricsStatsJob | null;

  /**
   * API to report the status of currently running metrics stats job
   */
  static metricsStatsJobStatus(): MapReduceStatus | null;

  /**
   * Provides histogram data for a given set of ids and metrics.
   *
   * The period of histogram data can be specified through either period parameter or start and end parameters,
   * and period parameter has higher priority than start and end parameters which means the internal API will choose
   * period other than start and end if period parameter is available.
   *
   * @param ids
   *          Array of source ids
   * @param metricName
   *          CompoundMetricId
   * @param period
   *          Time period (e.g., last12m, 2012, 2013, 2014)
   * @param start
   *          Start of benchmarking period
   * @param end
   *          End of benchmarking period
   * @param ignoreZeroValues
   *          Flag indicates whether to ignore zero values.
   *          If true, any points with a zero value will not be factored into the histogram
   * @param binningType
   *          Whether to bin by 'value' or 'quantile'
   * @param numberBins
   *          How many bins to split the data into
   * @return Histogram data contains buckets info and data info
   */
  static getDistribution(ids: C3.Array<string | null> | null, metricName: string, period?: string | null, start?: DateTime | null, end?: DateTime | null, ignoreZeroValues?: boolean, binningType?: string | null, numberBins?: number | null): HistogramEvaluationResult | null;

  /**
   * Compute stats for every timeseries obtained by the metric / source combination
   * @param spec
   *          Provide the spec for which stats need to be computed
   * @return stats for every timeseries obtained for every source metric combination
   */
  static evalMetricsStats(spec: EvalMetricsSpec): C3.Map<string | null, C3.Map<string | null, TimeseriesStats | null>>;

  /**
   * The motivation for Eval Metrics Batch mode is to compile expressions, pre-fetch sources, plug-in variables and
   * bindings for the expressions exactly once and call evaluate metrics for various time ranges multiple times
   * This ends up re-using the fnd cache/ asTimeseries cache too
   * Initializes (Compiles expressions, pre-fetches sources, etc) eval metrics in batch mode
   * @param spec
   *          EvalMetricsSpec containing all the metrics and the largest time-period that the individual runs are
   *          going to be called with
   * @return a cache key that eval metrics produces for this spec (this cache is on the current action)
   */
  static startEvalMetricsBatch(spec: EvalMetricsSpec): string | null;

  /**
   * Cleans up and closes the eval metrics batch
   * @param keys
   *              Cleans up the eval metrics batch objects for the given cache keys
   * @return the current number of the cached evaluator instances
   */
  static endEvalMetricsBatch(key: string): number | null;

  /**
   * Runs evalMetrics for the given start and end by using the cached copy of the objects in startEvalMetricsBatch
   * @param key
   *              Cache key to use to load cached objects (prefetched objects, spec, compiled exprs) during evalMetrics
   * @param start
   *              start date for metrics evaluation
   * @param end
   *              end date for metrics evaluation
   * @return EvalMetricsResult for the given start and end and the spec from the cached key
   */
  static evalMetricsBatch(key: string, start: DateTime, end: DateTime): EvalMetricsResult | null;

  /**
   * API to retrieve the eval metrics batch key based on the spec. Returns null if nothing is found
   * @param spec
   *          Eval metrics spec to be used to figure out the eval metrics batch key
   * return the eval metrics batch key for the spec or null if one does not exist
   */
  static evalMetricsBatchKey(spec: EvalMetricsSpec): string | null;

  /**
   * Specifies whether the 'child' EvalMetricsSpec is a subset of 'this' EvalMetricsSpec
   * This currently supports checking for only time range subset. If ids / metrics / grain / timezone/ cache/ unitId/
   * filter/ limit / include do not match as is it will return false.
   * @param this
   *          Parent EvalMetricsSpec which acts as the superset
   * @param child
   *          Child EvalMetricsSpec which acts as the subset
   * @return whether child is a subset of this EvalMetricsSpec
   */
  static isSubset(parent: EvalMetricsSpec, child: EvalMetricsSpec): boolean;

  /**
   * API to estimate the size of objects in eval metrics batch cache.
   * This will give a breakdown of the metric evaluator instance (compiled exprs, source fetch with hierarchies, other
   * info to be used during evaluation), normalized data cache, and tsDecl cache
   * @param key
   *        Eval Metrics Batch cache key for which size needs to be estimated
   * @return object that gives the size of evaluator, normalized data cache and tsDecl cache
   */
  static estimateEvalMetricsBatchCacheSize(key: string): EvalMetricsBatchCacheSize | null;

  /**
   * Lists all the cached keys in the eval metrics batch
   * @return list of keys
   */
  static listEvalMetricsBatchKeys(): C3.Array<string | null>;

  /**
   * Get EvalPlan to be used to metric data export. This method will return the hierarchies constructed and
   * src type fetch spec
   * @param Eval metrics spec that would be used for evalMetrics
   * @return EvalPlan with hierarchies and srcTypeFetchSpec populated
   */
  static getExportEvalPlan(spec?: EvalMetricsSpec | null): EvalPlan | null;

  /**
   * For internal use only:
   * Generate eval metrics spec from existing spec and overridden metrics. This is particularly useful when spec has bindings
   * with multiple values. In case of no / single bindings this will return the same spec back to be used for evaluation
   */
  static generateEvalMetricsSpec(spec: EvalMetricsSpec, overrideMetrics?: C3.Array<Metric | null>): Pair<EvalMetricsSpec | null, C3.Array<Metric | null>>;
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

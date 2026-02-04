// TypeScript definitions for the C3 type TSDecl

/**
 * This Type specifies {@link SimpleMetric#tsDecl} to normalize time-based raw data points into a {@link Timeseries}. See {@link tutorial-tsdecl-metrics.c3doc} and {@link normalization.c3doc}.
 *
 * Follow the below sequence of operations to create the {@link TSDecl}:
 *
 * - Collect the #data.
 * - Apply the #filter (optional).
 * - Calculate the #value (optional).
 * - Resolve duplicates with the #overlapHandling (optional).
 * - Normalize raw data with the #treatment.
 * - Rollup multiple time series into one with #rollupFunc (optional).
 * - Apply the final {@link #transform} (optional)
 *
 * Also note that everything in `tsDecl` other than #data must refer to something that would be a valid expression on the Type defined in #data.
 *
 * @remarks this represents a value passed to a method that expects an instance of TSDecl
 */
declare interface ITSDecl {

  /**
   * Name of the field in the resulting Type after the {@link SimpleMetric#path} field is resolved.
   *
   * For example: When the {@link SimpleMetric#path} is set to `fixtureHistory.to.apartment.building` which resolves to the Type Building, this field can be set to `gridStatusSet`, which is a valid field on the Type Building.
   */
  data: string;

  /**
   * Treatment to be applied when converting the objects to a time series. See {@link AggOp} for how this field aggregates the data points.
   */
  treatment: string;

  /**
   * Overlap handling to be applied when converting the objects to a time series (optional, null treated as AVG). When multiple points overlap due to overlapping `start` and `end`, this field will be used to aggregate points.
   */
  overlapHandling?: string | null;

  /**
   * The `start` date expression on the Type that results after resolving the #data field. This field determines the start value for a time series of interval data points (interval readings measured between start and end times, for example, consumption), or the timestamp for a time series of timed data points (point readings measured at specific times, for example,  temperature).
   */
  start: string;

  /**
   * The `end` date expression on the Type that results after resolving the  #data field. This field determines the end value for a time series of interval data points (interval readings measured between start and end times, for example, consumption).
   */
  end?: string | null;

  /**
   * The value expression on the Type that results after resolving the #data field. This field is required, with the exception of when the #treatment field is set to `COUNT` or `ROLLINGCOUNT`. Note that this field must return a primitive data type that will be converted into a double value.
   */
  value?: string | null;

  /**
   * The expression for evaluating the data version of the data point on the resulting Type after resolving the #data field. This field is used for resolving conflicts in scenarios where two points are for the same time period but have different versions. The data point with a higher data version will be chosen.
   */
  dataVersion?: string | null;

  /**
   * The expression for evaluating if the data point value, on the resulting Type after resolving the #data field, is estimated or not. This can be used in reporting whether the data for every interval is estimated or not, for downstream analysis and reporting. For example, if a bill was an estimated for a month, then while returning the time series, it is useful to indicate that the month's bill was estimated and not actual.
   * If both actual and estimated is provided for the same period, the actual value will be chosen.
   */
  isEstimated?: string | null;

  /**
   * The filter expression to be applied on the data points on the resulting Type after resolving the #data field. For example, if you prefer not to normalize certain points, then you can filter them out by providing a filter expression.
   */
  filter?: string | null;

  /**
   * If this function is set, then individual time series will be constructed for the Type objects resulting after the {@link SimpleMetric#path} field is resolved, and then the given roll up function will be applied to roll up the multiple time series into a single time series.
   *
   * Default : null - All the data points for all {@link SimpleMetric#path} resultant Type objects will be fed into a single times series and hence roll up is not required.
   */
  rollupFunc?: string | null;

  /**
   * After the time series is generated from the value expression, this expression is applied. Within the expression the keyword, `this` refers to the time series. For example, `fillMissing(this, 0)` means the `fillMissing` will be applied on a time series generated as a result of the fields provided in {@link TSDecl} spec.
   */
  transform?: string | null;
}

/**
 * This Type specifies {@link SimpleMetric#tsDecl} to normalize time-based raw data points into a {@link Timeseries}. See {@link tutorial-tsdecl-metrics.c3doc} and {@link normalization.c3doc}.
 *
 * Follow the below sequence of operations to create the {@link TSDecl}:
 *
 * - Collect the #data.
 * - Apply the #filter (optional).
 * - Calculate the #value (optional).
 * - Resolve duplicates with the #overlapHandling (optional).
 * - Normalize raw data with the #treatment.
 * - Rollup multiple time series into one with #rollupFunc (optional).
 * - Apply the final {@link #transform} (optional)
 *
 * Also note that everything in `tsDecl` other than #data must refer to something that would be a valid expression on the Type defined in #data.
 *
 * @remarks this represents a made instance of TSDecl
 */
declare class TSDecl extends Obj {

  /**
   * Name of the field in the resulting Type after the {@link SimpleMetric#path} field is resolved.
   *
   * For example: When the {@link SimpleMetric#path} is set to `fixtureHistory.to.apartment.building` which resolves to the Type Building, this field can be set to `gridStatusSet`, which is a valid field on the Type Building.
   */
  readonly data: string;
  withData(data: string): TSDecl;

  /**
   * Treatment to be applied when converting the objects to a time series. See {@link AggOp} for how this field aggregates the data points.
   */
  readonly treatment: string;
  withTreatment(treatment: string): TSDecl;

  /**
   * Overlap handling to be applied when converting the objects to a time series (optional, null treated as AVG). When multiple points overlap due to overlapping `start` and `end`, this field will be used to aggregate points.
   */
  readonly overlapHandling?: string | null;
  withOverlapHandling(overlapHandling: string | null): TSDecl;

  /**
   * The `start` date expression on the Type that results after resolving the #data field. This field determines the start value for a time series of interval data points (interval readings measured between start and end times, for example, consumption), or the timestamp for a time series of timed data points (point readings measured at specific times, for example,  temperature).
   */
  readonly start: string;
  withStart(start: string): TSDecl;

  /**
   * The `end` date expression on the Type that results after resolving the  #data field. This field determines the end value for a time series of interval data points (interval readings measured between start and end times, for example, consumption).
   */
  readonly end?: string | null;
  withEnd(end: string | null): TSDecl;

  /**
   * The value expression on the Type that results after resolving the #data field. This field is required, with the exception of when the #treatment field is set to `COUNT` or `ROLLINGCOUNT`. Note that this field must return a primitive data type that will be converted into a double value.
   */
  readonly value?: string | null;
  withValue(value: string | null): TSDecl;

  /**
   * The expression for evaluating the data version of the data point on the resulting Type after resolving the #data field. This field is used for resolving conflicts in scenarios where two points are for the same time period but have different versions. The data point with a higher data version will be chosen.
   */
  readonly dataVersion?: string | null;
  withDataVersion(dataVersion: string | null): TSDecl;

  /**
   * The expression for evaluating if the data point value, on the resulting Type after resolving the #data field, is estimated or not. This can be used in reporting whether the data for every interval is estimated or not, for downstream analysis and reporting. For example, if a bill was an estimated for a month, then while returning the time series, it is useful to indicate that the month's bill was estimated and not actual.
   * If both actual and estimated is provided for the same period, the actual value will be chosen.
   */
  readonly isEstimated?: string | null;
  withIsEstimated(isEstimated: string | null): TSDecl;

  /**
   * The filter expression to be applied on the data points on the resulting Type after resolving the #data field. For example, if you prefer not to normalize certain points, then you can filter them out by providing a filter expression.
   */
  readonly filter?: string | null;
  withFilter(filter: string | null): TSDecl;

  /**
   * If this function is set, then individual time series will be constructed for the Type objects resulting after the {@link SimpleMetric#path} field is resolved, and then the given roll up function will be applied to roll up the multiple time series into a single time series.
   *
   * Default : null - All the data points for all {@link SimpleMetric#path} resultant Type objects will be fed into a single times series and hence roll up is not required.
   */
  readonly rollupFunc?: string | null;
  withRollupFunc(rollupFunc: string | null): TSDecl;

  /**
   * After the time series is generated from the value expression, this expression is applied. Within the expression the keyword, `this` refers to the time series. For example, `fillMissing(this, 0)` means the `fillMissing` will be applied on a time series generated as a result of the fields provided in {@link TSDecl} spec.
   */
  readonly transform?: string | null;
  withTransform(transform: string | null): TSDecl;

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
  static fromJson(json: any | null): TSDecl | null;

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
  static fromJsonString(json: string | null): TSDecl | null;

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
  static fromXmlString(xml: string | null): TSDecl | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): TSDecl | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): TSDecl;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TSDecl;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TSDecl;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TSDecl | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TSDecl | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): TSDecl;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TSDecl;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TSDecl;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): TSDecl;

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
  withField(field: string, value: any, doNotConvert?: boolean): TSDecl;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): TSDecl;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): TSDecl;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): TSDecl;

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
  withoutFieldAtPath(path: string): TSDecl;

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
  withoutField(field: string | null): TSDecl;

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
  withoutField(field: FieldType | null): TSDecl;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): TSDecl;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): TSDecl;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): TSDecl;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): TSDecl;

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
  defaultField(field: string): TSDecl;

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
  defaultField(field: FieldType): TSDecl;

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
  unsetField(field: string): TSDecl;

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
  unsetField(field: FieldType): TSDecl;

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
  removeField(field: string): TSDecl;

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
  removeField(field: FieldType): TSDecl;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): TSDecl;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): TSDecl;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): TSDecl;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): TSDecl;

  mergeJson(json: any | null): TSDecl;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): TSDecl;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): TSDecl;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<TSDecl | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<TSDecl | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<TSDecl | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<TSDecl | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<TSDecl | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, TSDecl | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, TSDecl | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<TSDecl | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<TSDecl | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): TSDecl;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): TSDecl;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): TSDecl;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): TSDecl;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): TSDecl;

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
  static make(fields: any, withDefaults?: boolean): TSDecl;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): TSDecl;

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
  afterMake(): TSDecl;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): TSDecl;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<TSDecl>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): TSDecl;

  /**
   * Gets the input-optimized include spec for a metric's `tsDecl`.
   *
   * @param metric
   *        Metric that the `tsDecl` is for.
   *
   * @return The input-optimized include spec for a metric's `tsDecl`.
   */
  inputOptimizedInclude(metric: SimpleMetric): string | null;

  /**
   * @return The parsed expression for the value expression.
   */
  valueExprNode(): any;

  /**
   * Gets the literal primitive Type for the value expression.
   *
   * @param metric
   *        Metric that the `tsDecl` is for.
   *
   * @return The literal primitive Type for the value expression.
   */
  literalType(metric: SimpleMetric): any;

  /**
   * @return True if the `tsDecl` is for an interval, for example, has an #end expression.
   */
  isInterval(): boolean;

  /**
   * @return True if the `tsDecl` value expression is the same as the #start expression.
   */
  isValueSameAsStart(): boolean;

  /**
   * @return True if the `tsDecl` value expression is the same as the #end expression.
   */
  isValueSameAsEnd(): boolean;
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

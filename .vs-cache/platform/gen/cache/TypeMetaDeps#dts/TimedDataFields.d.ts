// TypeScript definitions for the C3 type TimedDataFields

/**
 * This is a platform-generated Type. It is read-only for the applications.
 *
 * @remarks this represents a value passed to a method that expects an instance of TimedDataFields
 */
declare interface ITimedDataFields<TDP> {

  /**
   * Populated on normalization. Indicates the earliest data point across various timeseries fields.
   */
  earliest?: DateTime | Date | string | null;

  /**
   * Populated on normalization. Indicates the latest data point across various timeseries fields.
   */
  latest?: DateTime | Date | string | null;

  /**
   * Populated on normalization. Indicates the earliest data point for each {@link Ann.Ts} fields.
   */
  earliestTsDp?: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null};

  /**
   * Populated on normalization. Indicates the latest data point for each {@link Ann.Ts} fields.
   */
  latestTsDp?: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null};

  /**
   * The interval (grain) at which data should be normalized.
   *
   * If this field is not specified, the algorithm looks at the first 100 raw data points and deduces the interval.
   * However, when determining the interval based on first 100 raw data points, the finest granularity that will be
   * assigned automatically is QUARTER_HOUR, even though these first 100 raw data points may have an interval of,
   * for example, a minute. If you need an interval finer than QUARTER_HOUR, then you must set the interval manually
   * by setting this field.
   */
  interval?: string | null;

  /**
   * If set, the time series will be normalized in the specified zone.
   */
  timeZone?: string | null;

  /**
   * If set, disables normalizing this time series. Invalidations will still continue to happen for this series normally.
   */
  doNotNormalize?: boolean;

  data?: C3.Array<TDP | null> | Array<TDP | null>;

  /**
   * Use this field to specify the interpolation mechanism to be applied for gaps in interval timeseries. Default: `ZERO_INTERPOLATOR`.
   */
  interpolator?: string | null;

  /**
   * Use this field to specify how normalization should handle duplicate data points. A duplicate point is one that has the same start, end, value, unit, and {@link TimedDataPointFields#isEstimated} values. Default: `IGNORE`.
   */
  duplicateHandling?: string | null;

  /**
   * Used to specify how normalization should handle overlapping data points. Default: `AVG`.
   */
  overlapHandling?: string | null;

  /**
   * Normalized time series is a series of continuous values. In order to optimize the reads the C3 AI Suite buckets the values into specific intervals (for example, MONTH) and stores all the data values for the month in that bucket. Use this field to change the underlying storage for much more optimal reads (reading less data).
   *
   * If the normalization interval (#interval) is coarser than the `bucketInterval`, then `bucketInterval` will be adjusted to be the normalization interval. This will be an automatic operation and a warning will be logged.
   */
  bucketInterval?: string | null;

  /**
   * Describes partitioning strategy for NormalizedTimeseries tables indicating how much data lives in what storage
   * Takes precedence over the provided config in {@link NormalizationConfig#partitionStrategy}
   */
  normalizationPartitionStrategy?: INormalizationPartitionStrategy | null;
}

/**
 * This is a platform-generated Type. It is read-only for the applications.
 *
 * @remarks this represents a made instance of TimedDataFields
 */
declare class TimedDataFields<TDP> extends Obj {

  /**
   * Populated on normalization. Indicates the earliest data point across various timeseries fields.
   */
  readonly earliest?: DateTime | null;
  withEarliest(earliest: DateTime | Date | string | null): TimedDataFields;

  /**
   * Populated on normalization. Indicates the latest data point across various timeseries fields.
   */
  readonly latest?: DateTime | null;
  withLatest(latest: DateTime | Date | string | null): TimedDataFields;

  /**
   * Populated on normalization. Indicates the earliest data point for each {@link Ann.Ts} fields.
   */
  readonly earliestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withEarliestTsDp(earliestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): TimedDataFields;

  /**
   * Populated on normalization. Indicates the latest data point for each {@link Ann.Ts} fields.
   */
  readonly latestTsDp?: C3.Map<string | null, TSDataPoint | null>;
  withLatestTsDp(latestTsDp: C3.Map<string | null, TSDataPoint | null> | {[key: string | null]: ITSDataPoint | null}): TimedDataFields;

  /**
   * The interval (grain) at which data should be normalized.
   *
   * If this field is not specified, the algorithm looks at the first 100 raw data points and deduces the interval.
   * However, when determining the interval based on first 100 raw data points, the finest granularity that will be
   * assigned automatically is QUARTER_HOUR, even though these first 100 raw data points may have an interval of,
   * for example, a minute. If you need an interval finer than QUARTER_HOUR, then you must set the interval manually
   * by setting this field.
   */
  readonly interval?: string | null;
  withInterval(interval: string | null): TimedDataFields;

  /**
   * If set, the time series will be normalized in the specified zone.
   */
  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): TimedDataFields;

  /**
   * If set, disables normalizing this time series. Invalidations will still continue to happen for this series normally.
   */
  readonly doNotNormalize?: boolean;
  withDoNotNormalize(doNotNormalize: boolean): TimedDataFields;

  readonly data?: C3.Array<TDP | null>;
  withData(data: C3.Array<TDP | null> | Array<TDP | null>): TimedDataFields;

  /**
   * Use this field to specify the interpolation mechanism to be applied for gaps in interval timeseries. Default: `ZERO_INTERPOLATOR`.
   */
  readonly interpolator?: string | null;
  withInterpolator(interpolator: string | null): TimedDataFields;

  /**
   * Use this field to specify how normalization should handle duplicate data points. A duplicate point is one that has the same start, end, value, unit, and {@link TimedDataPointFields#isEstimated} values. Default: `IGNORE`.
   */
  readonly duplicateHandling?: string | null;
  withDuplicateHandling(duplicateHandling: string | null): TimedDataFields;

  /**
   * Used to specify how normalization should handle overlapping data points. Default: `AVG`.
   */
  readonly overlapHandling?: string | null;
  withOverlapHandling(overlapHandling: string | null): TimedDataFields;

  /**
   * Normalized time series is a series of continuous values. In order to optimize the reads the C3 AI Suite buckets the values into specific intervals (for example, MONTH) and stores all the data values for the month in that bucket. Use this field to change the underlying storage for much more optimal reads (reading less data).
   *
   * If the normalization interval (#interval) is coarser than the `bucketInterval`, then `bucketInterval` will be adjusted to be the normalization interval. This will be an automatic operation and a warning will be logged.
   */
  readonly bucketInterval?: string | null;
  withBucketInterval(bucketInterval: string | null): TimedDataFields;

  /**
   * Describes partitioning strategy for NormalizedTimeseries tables indicating how much data lives in what storage
   * Takes precedence over the provided config in {@link NormalizationConfig#partitionStrategy}
   */
  readonly normalizationPartitionStrategy?: NormalizationPartitionStrategy | null;
  withNormalizationPartitionStrategy(normalizationPartitionStrategy: INormalizationPartitionStrategy | null): TimedDataFields;

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
  static fromJson(json: any | null): TimedDataFields<TDP> | null;

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
  static fromJsonString(json: string | null): TimedDataFields<TDP> | null;

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
  static fromXmlString(xml: string | null): TimedDataFields<TDP> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): TimedDataFields<TDP> | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): TimedDataFields<TDP>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TimedDataFields<TDP>;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TimedDataFields<TDP>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TimedDataFields<TDP> | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TimedDataFields<TDP> | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): TimedDataFields<TDP>;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TimedDataFields<TDP>;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TimedDataFields<TDP>;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): TimedDataFields<TDP>;

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
  withField(field: string, value: any, doNotConvert?: boolean): TimedDataFields<TDP>;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): TimedDataFields<TDP>;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): TimedDataFields<TDP>;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): TimedDataFields<TDP>;

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
  withoutFieldAtPath(path: string): TimedDataFields<TDP>;

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
  withoutField(field: string | null): TimedDataFields<TDP>;

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
  withoutField(field: FieldType | null): TimedDataFields<TDP>;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): TimedDataFields<TDP>;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): TimedDataFields<TDP>;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): TimedDataFields<TDP>;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): TimedDataFields<TDP>;

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
  defaultField(field: string): TimedDataFields<TDP>;

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
  defaultField(field: FieldType): TimedDataFields<TDP>;

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
  unsetField(field: string): TimedDataFields<TDP>;

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
  unsetField(field: FieldType): TimedDataFields<TDP>;

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
  removeField(field: string): TimedDataFields<TDP>;

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
  removeField(field: FieldType): TimedDataFields<TDP>;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): TimedDataFields<TDP>;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): TimedDataFields<TDP>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): TimedDataFields<TDP>;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): TimedDataFields<TDP>;

  mergeJson(json: any | null): TimedDataFields<TDP>;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): TimedDataFields<TDP>;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): TimedDataFields<TDP>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<TimedDataFields<TDP> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<TimedDataFields<TDP> | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<TimedDataFields<TDP> | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<TimedDataFields<TDP> | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<TimedDataFields<TDP> | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, TimedDataFields<TDP> | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, TimedDataFields<TDP> | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<TimedDataFields<TDP> | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<TimedDataFields<TDP> | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): TimedDataFields<TDP>;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): TimedDataFields<TDP>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): TimedDataFields<TDP>;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): TimedDataFields<TDP>;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): TimedDataFields<TDP>;

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
  static make(fields: any, withDefaults?: boolean): TimedDataFields<TDP>;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): TimedDataFields<TDP>;

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
  afterMake(): TimedDataFields<TDP>;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): TimedDataFields<TDP>;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<TimedDataFields<TDP>>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): TimedDataFields<TDP>;

  /**
   * Computes partition strategy in the following order:
   * 1. #normalizationPartitionStrategy - if set, then reads from this field
   * 2. NormalizationConfig#partitionStrategy - if set for the given type
   * 3. NormalizationConfig#partitionStrategy - with key ALL that is applied to all types
   */
  finalNormalizationPartitionStrategy(): NormalizationPartitionStrategy | null;

  /**
   * This field, `computeTimeRange`, is very similar to evaluate on normalizedTimeseries. It does all the work that evaluate will do except for fetching the actual  datapoints.
   *
   * @param spec The spec for the time series. In the {@link TSEvalSpec}:
   * - The `start`, `end` and `grain` can all be null.
   * - If `start` and `end` are null, the returned {@link TimeRange} will contain the earliest and latest for the time series.
   * - If `start` and/or `end` is null, the returned {@link TimeRange} will be an "intersection" of the provided time range and the time range of the time series.
   * - If the `grain` parameter is null, then the time calculations will be performed based on the default grain for the time series.
   * - If the `grain` parameter is not null, time calculations will be performed using the specified `grain`.
   * @param rawParent Required. The parent for which data is desired.
   * @return The time range available.
   */
  static computeTimeRange(spec?: TSEvalSpec | null, rawParent: Obj): TimeRange | null;

  /**
   * Returns the normalized data object.
   *
   * @param spec The spec must specify the start / end / grain / filter / projection for the time series.
   * @param rawParent The parent for which normalized data should be fetched.
   * @return Contains the normalized data.
   */
  static fetchNormalizedData(spec?: TSEvalSpec | null, rawParent: Obj): Timeseries<any> | null;

  /**
   * This function triggers the normalization asynchronously.
   *
   * @param timeseries The time series header for which normalization should be called.
   * @param start The start period of normalization.
   * @param end The end period of normalization.
   * @param overrideGrain Grain to be used for normalization.
   * @param forceGrainDetection Force normalization to detect the grain.
   * @param force Force normalization even if the series has been previously normalized and valid.
   */
  static triggerNormalizeTimeseries(timeseries: Obj, start?: DateTime | null, end?: DateTime | null, overrideGrain?: string | null, forceGrainDetection?: boolean, force?: boolean): void;

  /**
   * This is an event handler. It is typically called asynchronously some time after the raw timed data is updated. Its behavior is idempotent and also resilient to abnormal or race conditions.
   *
   * @param txn The transaction that caused the event.
   */
  static timeRangeUpdated(txn?: Transaction | null): void;

  /**
   * This is an event handler. It is typically called asynchronously some time after the raw timed data is removed. Its behavior is idempotent and also resilient to abnormal or race conditions.
   *
   * @param txn The transaction that caused the event.
   */
  static timeRangeRemoved(txn?: Transaction | null): void;

  /**
   * This function, `normalizeTimeseries` is called asynchronously by #triggerNormalizeTimeseries.
   *
   * This function can also be used to normalize only a part of the time series by supplying start and end. However, the `overrideGrain` and `forceGrainDetection` are not valid when used in this way.
   *
   * @param timeseries The timeseries header for which normalization should to be called.
   * @param start The start period of normalization.
   * @param end The end period of normalization.
   * @param overrideGrain Grain to be used for normalization.
   * @param force Force normalization to detect grain.
   * @param forceNormalize Force normalization even if the series has been previously normalized and valid.
   */
  static normalizeTimeseries(timeseries?: TimedDataFields<TDP> | null, start?: DateTime | null, end?: DateTime | null, overrideGrain?: string | null, forceGrainDetection?: boolean, force?: boolean): void;

  /**
   * This function normalizes the time series on the fly for all time series fields without persisting the normalized values. It returns a map of `tsField -> Timeseries`.
   *
   * This function currently ignores the `start`, and `end` values, and instead fetches all raw data points and normalizes them. This function also ignores the timezone requests / per `tsField` requests. It always returns data in `timeZone=NONE` for all `tsField`s for a header.
   *
   * @param timeseries The time series header for which normalization should be called.
   * @param start The start period of normalization.
   * @param end The end period of normalization.
   * @param overrideGrain Grain to be used for normalization.
   * @param forceGrainDetection Force normalization to detect grain.
   * @return The result containing a list of all time series fields for the header and the corresponding normalized values.
   */
  static normalize(timeseries?: TimedDataFields<TDP> | null, start?: DateTime | null, end?: DateTime | null, overrideGrain?: string | null, forceGrainDetection?: boolean): NormalizationResult | null;

  /**
   * This function invalidates the time series headers. That is, it marks the normalization state as invalid so that the subsequent calls to normalized data can retrieve the correct values.
   *
   * @param headerIds
   *        Header IDs to invalidate. If empty, no headers will be invalidated.
   *
   * @return IDs of the header type that were not marked invalid as {@link NormalizedTimeseriesState} did not exist for them.
   */
  static invalidateTimeseries(headerIds?: C3.Array<string | null>): C3.Set<string | null>;

  /**
   * This function invalidates the time series headers with time ranges. That is, it marks the normalization state as invalid so that the subsequent calls to normalized data can retrieve the right values.
   *
   * **Note:**`` If data is removed, there will be no incremental normalization, but the series will be fully normalized at the appropriate time as defined in the {@link NormalizationMode}.
   *
   * @param headers
   *        Header IDs to invalidate along with their time ranges. If empty, no headers will be invalidated.
   *
   * @return IDs of the header type that were not marked invalid since {@link NormalizedTimeseriesState} did not exist for them.
   */
  static invalidateTimeseriesWithTimeRanges(headers?: C3.Array<NormalizationInvalidationSpec | null>): C3.Set<string | null>;

  /**
   * This function refreshes/renormalizes the time series for objs based on a spec. This should only be called on Types that represent a time series header.
   *
   * @param spec
   *           Spec that indicates which time series headers to renormalize, along with other options that control the operation.
   * @return If `spec.sync` ({@link RefreshNormalizationSpec#sync}) is not set to true, returns the {@link BatchJob} that was created/used for processing the request. Null otherwise.
   */
  static refreshNormalization(spec?: RefreshNormalizationSpec | null): Obj | null;

  /**
   * Returns the ID of the {@link NormalizedTimeseries} and {@link NormalizedTimeseriesState} object.
   *
   * @param headerId
   *              ID of the time series header.
   * @param tsField
   *              Time series field that was normalized.
   * @return ID used to store the state and the normalized time series.
   */
  static normalizedTimeseriesKey(headerId: string, tsField: string): string;

  /**
   * This function indicates if the given time series has been normalized.
   *
   * @param tsField
   *            If provided, only checks the normalized state for that particular `tsField`. If not set, provides the normalized state across all `tsField`s. This function will return false even if a single `tsField` has not been normalized for this header.
   * @return If the time series has been normalized across all or the given `tsfield`.
   */
  isNormalized(tsField?: string | null): boolean;

  /**
   * Returns the normalization unit for the `tsfield` on the raw header.
   * @param rawHeader
   *               The time series header object for the given `tsField`.
   * @param tsField
   *               The time series field for which unit should be determined.
   * @return The unit for the `tsfield` on the given header. Null if no unit could be found.
   */
  static normalizationUnit(rawHeader: TimedDataFields<TDP>, tsField: string): Unit | null;

  /**
   * This function returns the normalization treatment for the time series.
   *
   * @param rawHeader
   *               The time series header object for the given `tsField`.
   * @param tsField
   *               The time series field for which the treatment should be determined.
   * @return The treatment for the `tsField` on the given header. Default values will be returned if nothing is set.
   */
  static normalizationTreatment(rawHeader: TimedDataFields<TDP>, tsField: string): string;

  /**
   * This function invalidates the time series and invokes any other downstream analytic invalidations if async processing is enabled.
   */
  invalidate(timeRange?: TimeRange | null): void;

  /**
   * This function removes the normalized values for the given header.
   *
   * @param tsField
   *            If specified, the normalized data for only this `tsField` is removed.
   * @return If the normalized values were removed.
   */
  removeNormalized(tsField?: string | null): boolean;

  /**
   * This function compares the existing normalized data with on-the-fly full normalization results. In order to obtain the normalized data, the #fetchNormalizedData function is called, and all the rules for {@link NormalizationMode} will be followed in order to normalize the time series. The result will be compared with the results from {@link normalize}.
   *
   * @param tsField
   *            If specified, the normalized data for only this `tsField` is compared. If not specified, all the `tsField`s on this header are checked for.
   * @return A map of `tsField -> comparison` of two time series (null if they are equal). First series in the object will be already normalized time series and second object will be the one that was normalized on-the-fly.
   */
  compareNormalizedTs(tsField?: string | null): C3.Map<string | null, EditList | null>;
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

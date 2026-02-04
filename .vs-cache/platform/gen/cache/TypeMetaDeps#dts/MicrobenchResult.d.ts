// TypeScript definitions for the C3 type MicrobenchResult

/**
 * The results from a single performance test run. Note that most testing will produce multiple runs (by default 5),
 * each of which will have a separate result instance. There is also a summary instance with the minimum (base case)
 * values. In all cases, "smaller is better" for values (they represent elapsed time or resource consumption).
 *
 * There are two sets of values, one set absolute (such as #time) and one set relative (#timeX). The absolute values
 * are actual measurements and the relative values are the ratio of the measured value divided by the baseline.
 * For example, a measured time of 3s for a test with a baseline measurement of 1.5s would have a time of 1.5 and a
 * timeX of 2. (This measurement was twice that of the baseline.)
 *
 * The fields here correspond to a subset of the {@link PerfMetricMeasureFields PerfMetric measures}, which is how they
 * are persisted over time for regression detection and trend analysis.
 *
 * Note that the values are _per iteration_, so numbers are comparable between runs if the code being tested gets faster
 * or slower (changing the number of iterations needed to reach the threshold time).
 *
 * The #testName is a metric base name, such as "Foo_Kpi.1M.frubbles" to which the individual metrics collected are
 * appended. For example, for the testName "Foo_Kpi.1M.frubbles", the metrics "Foo_Kpi.1M.frubbles.time" and
 * "Foo_Kpi.1M.frubbles.gcTime" might be recorded in the perf. metrics database.
 *
 * Results for multiple runs are typically collected into a {@link MicrobenchResultSet} by test execution.
 *
 * @see Microbench
 * @see PerfMetric
 *
 * @remarks this represents a value passed to a method that expects an instance of MicrobenchResult
 */
declare interface IMicrobenchResult {

  /**
   * The options used during testing, always including the name of this particular test.
   */
  options: IMicrobenchSpec;

  /**
   * Elapsed total time in seconds.
   */
  time?: number | null;

  /**
   * Elapsed total time as ratio vs baseline.
   *
   * @see #time
   */
  timeX?: number | null;

  /**
   * Total garbage collection elapsed time in seconds.
   */
  gcTime?: number | null;

  /**
   * Total garbage collection time as ratio vs baseline.
   *
   * @see #gcTime
   */
  gcTimeX?: number | null;

  /**
   * Old generation garbage collection elapsed time in seconds.
   */
  oldGenTime?: number | null;

  /**
   * Old generation garbage collection time as ratio vs baseline.
   *
   * @see #oldGenTime
   */
  oldGenTimeX?: number | null;

  /**
   * Old generation additional consumption as percentage of available.
   */
  oldGenPct?: number | null;

  /**
   * Old generation additional consumption as ratio vs baseline.
   *
   * @see #oldGenPct
   */
  oldGenPctX?: number | null;

  /**
   * Retained memory in bytes. This is the size of the object returned by the lambda.
   */
  retainedMem?: number | null;

  /**
   * Retained memory as ratio vs baseline.
   *
   * @see #retainedMem
   */
  retainedMemX?: number | null;

  /**
   * Bytes allocated during execution of the test.
   */
  allocatedMem?: number | null;

  /**
   * Bytes allocated as ratio vs baseline.
   *
   * @see #allocatedMem
   */
  allocatedMemX?: number | null;

  /**
   * Number of allocations (calls to new).
   */
  memAllocations?: number | null;

  /**
   * Number of allocations as ratio vs baseline.
   *
   * @see #memAllocations
   */
  memAllocationsX?: number | null;

  /**
   * Number of actual iterations of the test that produced these measurements.
   */
  testRunCount?: number | null;

  /**
   * Total execution time of the test that produced these measurements (all runs).
   */
  testRunTime?: number | null;

  /**
   * The time at which these measurements were made.
   */
  timestamp?: DateTime | Date | string | null;

  /**
   * The value returned from a single iteration of this run (if any). This is used to calculate the #retainedMem
   * value, and also made available to the immediate caller for further tests. It may be large so should not be
   * held longer than necessary.
   */
  resultValue?: any;

  /**
   * The version of the server build that produced this result.
   */
  buildVersion?: string | null;
}

/**
 * The results from a single performance test run. Note that most testing will produce multiple runs (by default 5),
 * each of which will have a separate result instance. There is also a summary instance with the minimum (base case)
 * values. In all cases, "smaller is better" for values (they represent elapsed time or resource consumption).
 *
 * There are two sets of values, one set absolute (such as #time) and one set relative (#timeX). The absolute values
 * are actual measurements and the relative values are the ratio of the measured value divided by the baseline.
 * For example, a measured time of 3s for a test with a baseline measurement of 1.5s would have a time of 1.5 and a
 * timeX of 2. (This measurement was twice that of the baseline.)
 *
 * The fields here correspond to a subset of the {@link PerfMetricMeasureFields PerfMetric measures}, which is how they
 * are persisted over time for regression detection and trend analysis.
 *
 * Note that the values are _per iteration_, so numbers are comparable between runs if the code being tested gets faster
 * or slower (changing the number of iterations needed to reach the threshold time).
 *
 * The #testName is a metric base name, such as "Foo_Kpi.1M.frubbles" to which the individual metrics collected are
 * appended. For example, for the testName "Foo_Kpi.1M.frubbles", the metrics "Foo_Kpi.1M.frubbles.time" and
 * "Foo_Kpi.1M.frubbles.gcTime" might be recorded in the perf. metrics database.
 *
 * Results for multiple runs are typically collected into a {@link MicrobenchResultSet} by test execution.
 *
 * @see Microbench
 * @see PerfMetric
 *
 * @remarks this represents a made instance of MicrobenchResult
 */
declare class MicrobenchResult extends Obj {

  /**
   * The options used during testing, always including the name of this particular test.
   */
  readonly options: MicrobenchSpec;
  withOptions(options: IMicrobenchSpec): MicrobenchResult;

  /**
   * Elapsed total time in seconds.
   */
  readonly time?: number | null;
  withTime(time: number | null): MicrobenchResult;

  /**
   * Elapsed total time as ratio vs baseline.
   *
   * @see #time
   */
  readonly timeX?: number | null;
  withTimeX(timeX: number | null): MicrobenchResult;

  /**
   * Total garbage collection elapsed time in seconds.
   */
  readonly gcTime?: number | null;
  withGcTime(gcTime: number | null): MicrobenchResult;

  /**
   * Total garbage collection time as ratio vs baseline.
   *
   * @see #gcTime
   */
  readonly gcTimeX?: number | null;
  withGcTimeX(gcTimeX: number | null): MicrobenchResult;

  /**
   * Old generation garbage collection elapsed time in seconds.
   */
  readonly oldGenTime?: number | null;
  withOldGenTime(oldGenTime: number | null): MicrobenchResult;

  /**
   * Old generation garbage collection time as ratio vs baseline.
   *
   * @see #oldGenTime
   */
  readonly oldGenTimeX?: number | null;
  withOldGenTimeX(oldGenTimeX: number | null): MicrobenchResult;

  /**
   * Old generation additional consumption as percentage of available.
   */
  readonly oldGenPct?: number | null;
  withOldGenPct(oldGenPct: number | null): MicrobenchResult;

  /**
   * Old generation additional consumption as ratio vs baseline.
   *
   * @see #oldGenPct
   */
  readonly oldGenPctX?: number | null;
  withOldGenPctX(oldGenPctX: number | null): MicrobenchResult;

  /**
   * Retained memory in bytes. This is the size of the object returned by the lambda.
   */
  readonly retainedMem?: number | null;
  withRetainedMem(retainedMem: number | null): MicrobenchResult;

  /**
   * Retained memory as ratio vs baseline.
   *
   * @see #retainedMem
   */
  readonly retainedMemX?: number | null;
  withRetainedMemX(retainedMemX: number | null): MicrobenchResult;

  /**
   * Bytes allocated during execution of the test.
   */
  readonly allocatedMem?: number | null;
  withAllocatedMem(allocatedMem: number | null): MicrobenchResult;

  /**
   * Bytes allocated as ratio vs baseline.
   *
   * @see #allocatedMem
   */
  readonly allocatedMemX?: number | null;
  withAllocatedMemX(allocatedMemX: number | null): MicrobenchResult;

  /**
   * Number of allocations (calls to new).
   */
  readonly memAllocations?: number | null;
  withMemAllocations(memAllocations: number | null): MicrobenchResult;

  /**
   * Number of allocations as ratio vs baseline.
   *
   * @see #memAllocations
   */
  readonly memAllocationsX?: number | null;
  withMemAllocationsX(memAllocationsX: number | null): MicrobenchResult;

  /**
   * Number of actual iterations of the test that produced these measurements.
   */
  readonly testRunCount?: number | null;
  withTestRunCount(testRunCount: number | null): MicrobenchResult;

  /**
   * Total execution time of the test that produced these measurements (all runs).
   */
  readonly testRunTime?: number | null;
  withTestRunTime(testRunTime: number | null): MicrobenchResult;

  /**
   * The time at which these measurements were made.
   */
  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): MicrobenchResult;

  /**
   * The value returned from a single iteration of this run (if any). This is used to calculate the #retainedMem
   * value, and also made available to the immediate caller for further tests. It may be large so should not be
   * held longer than necessary.
   */
  readonly resultValue?: any;
  withResultValue(resultValue: any): MicrobenchResult;

  /**
   * The version of the server build that produced this result.
   */
  readonly buildVersion?: string | null;
  withBuildVersion(buildVersion: string | null): MicrobenchResult;

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
  static fromJson(json: any | null): MicrobenchResult | null;

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
  static fromJsonString(json: string | null): MicrobenchResult | null;

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
  static fromXmlString(xml: string | null): MicrobenchResult | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): MicrobenchResult | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): MicrobenchResult;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MicrobenchResult;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): MicrobenchResult;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MicrobenchResult | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<MicrobenchResult | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): MicrobenchResult;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MicrobenchResult;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): MicrobenchResult;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): MicrobenchResult;

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
  withField(field: string, value: any, doNotConvert?: boolean): MicrobenchResult;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): MicrobenchResult;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): MicrobenchResult;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): MicrobenchResult;

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
  withoutFieldAtPath(path: string): MicrobenchResult;

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
  withoutField(field: string | null): MicrobenchResult;

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
  withoutField(field: FieldType | null): MicrobenchResult;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): MicrobenchResult;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): MicrobenchResult;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): MicrobenchResult;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): MicrobenchResult;

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
  defaultField(field: string): MicrobenchResult;

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
  defaultField(field: FieldType): MicrobenchResult;

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
  unsetField(field: string): MicrobenchResult;

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
  unsetField(field: FieldType): MicrobenchResult;

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
  removeField(field: string): MicrobenchResult;

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
  removeField(field: FieldType): MicrobenchResult;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): MicrobenchResult;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): MicrobenchResult;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): MicrobenchResult;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): MicrobenchResult;

  mergeJson(json: any | null): MicrobenchResult;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): MicrobenchResult;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): MicrobenchResult;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<MicrobenchResult | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<MicrobenchResult | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<MicrobenchResult | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<MicrobenchResult | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<MicrobenchResult | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, MicrobenchResult | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, MicrobenchResult | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<MicrobenchResult | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<MicrobenchResult | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): MicrobenchResult;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): MicrobenchResult;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): MicrobenchResult;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): MicrobenchResult;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): MicrobenchResult;

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
  static make(fields: any, withDefaults?: boolean): MicrobenchResult;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): MicrobenchResult;

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
  afterMake(): MicrobenchResult;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): MicrobenchResult;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<MicrobenchResult>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): MicrobenchResult;

  /**
   * Get the test name from the attached options.
   */
  testName(): string | null;

  /**
   * Get the non-null measurements in this result. Note that these correspond to the numeric fields of this type
   * (and also to the {@link PerfMetricMeasureFields PerfMetric measures}).
   *
   * @see #allMeasures
   */
  recordedMeasures(): C3.Array<MicrobenchResult.Measure | null>;

  /**
   * Get the non-null assertable measurements in this result.
   *
   * @see #recordedMeasures
   */
  assertableMeasures(): C3.Array<MicrobenchResult.Measure | null>;

  /**
   * Get a user-friendly label for a single measure. For example "Str_Kpi.1M_Str.concat.time" would have the label
   * "Time for 1M Str.concat". Note that this works regardless of whether or not the measure has been recorded.
   */
  measureLabel(name: string): string;

  /**
   * Get a single measure in this result by name. Note that these names correspond to the numeric fields of
   * this type (and also to the {@link PerfMetricMeasureFields PerfMetric measures}).
   *
   * @param name measure name to find
   * @param failIfNone if true, throw exception rather than returning null
   *
   * @see #recordedMeasures
   */
  recordedMeasure(name: string | null, failIfNone?: boolean): MicrobenchResult.Measure | null;

  /**
   * Get a measurement value of the result and format it appropriately as a string. If the measurement is null a null
   * string is returned.
   *
   * @param measure measure to extract
   * @param unit unit for formatting (see #pickUnit)
   *
   * @see #recordedMeasures
   */
  formatMeasure(measure: MicrobenchResult.Measure, unit?: Pair<number | null, string | null> | null): string | null;

  /**
   * Get a measurement value of the result and format it appropriately as a string, looking up the measure by name.
   *
   * @param measureName measure name to extract
   * @param unit unit for formatting (see #pickUnit)
   */
  formatMeasure(measureName: string | null, unit?: Pair<number | null, string | null> | null): string | null;

  /**
   * Get a measurement value of the result and format it appropriately as a string, then split it at the decimal point.
   * If the measurement is null a null pair is returned. The first half of the pair is the whole number part and the
   * second half is the fractional part (including the decimal point).
   *
   * @param measure measure to extract
   * @param unit unit for formatting (see #pickUnit)
   *
   * @see #formatMeasure
   */
  formatMeasureDecimal(measure: MicrobenchResult.Measure, unit?: Pair<number | null, string | null> | null): StrPair | null;

  /**
   * Get a measurement value of the result and format it appropriately as a string, looking up the measure by name,
   * then split it at the decimal point. If the measurement is null a null pair is returned. The first half of the pair
   * is the whole number part and the second half is the fractional part (including the decimal point).
   *
   * @param measureName measure name to extract
   * @param unit unit for formatting (see #pickUnit)
   *
   * @see #formatMeasure
   */
  formatMeasureDecimal(measureName: string | null, unit?: Pair<number | null, string | null> | null): StrPair | null;

  /**
   * Produce the same format as toString, but with the measurement values aligned. This allows a set of results with
   * the same recorded values to be printed one at a time with some chance of lining up. If the results differ too
   * much between runs this won't work completely, but should still be more readable than with minimal spacing.
   *
   * @param columnWidth the column width to format each measurement value for
   * @param columnSep the value to insert between columns
   * @param withoutNames if true, don't include measure names, just the values
   * @param map of pairs of chosen scale and unit
   */
  toColumnarString(columnWidth?: number, columnSep?: string | null, withoutNames?: boolean, units?: C3.Map<string | null, Pair<number | null, string | null> | null>): string | null;

  /**
   * Produce the same format as toString, but with the measurement values aligned. This allows a set of results with
   * the same recorded values to be printed one at a time with some chance of lining up. If the results differ too
   * much between runs this won't work completely, but should still be more readable than with minimal spacing.
   *
   * @param map of pairs of chosen scale and unit
   */
  toColumnarString(units?: C3.Map<string | null, Pair<number | null, string | null> | null>): string | null;

  /**
   * Choose units based on the actual measured values for this result. This returns a map of measure names to pairs
   * of scales and unit names. For example, when measuring size 5,123,000 bytes would map to `10⁻⁶, "Mb"`
   * since it would be formatted as "5.12Mb". To handle smaller values one could pass `1` for scaleDigits, which
   * would adjust the value by 10⁻¹ mapping to `3, "Kb"` which would be formatted as "5,123Kb" (3+ digits as if the
   * value were 1/10th as large).
   *
   * @param scaleDigits adjust the values by 10⁻ⁿ to affect the chosen units
   * @return map of pairs of chosen scale and unit
   */
  pickUnits(scaleDigits?: number): C3.Map<string | null, Pair<number | null, string | null> | null>;

  /**
   * Choose the unit based on the actual measured values for a measure. This returns a pair of scale and unit name.
   * For example, for "retainedMem" 5,123,000 (bytes) would map to `10⁻⁶, "Mb"` since it would be formatted as
   * "5.12Mb". To handle smaller values one could pass `1` for scaleDigits, which would adjust the value by 10⁻¹
   * mapping to `10⁻³, "Kb"` which would be formatted as "5,123Kb" (3+ digits as if the value were 1/10th as large).
   *
   * @param measure measure to determine units
   * @param value measured value to determine scale
   * @param scaleDigits adjust the values by 10⁻ⁿ to affect the chosen units
   * @return pair of chosen scale and unit
   */
  static pickUnit(measure: MicrobenchResult.Measure, value: number, scaleDigits?: number): Pair<number | null, string | null> | null;

  /**
   * Add the measures in the specified results to this one and return the sum. Note that this the _sum_ of the values,
   * not the "best case". This is useful for adding the result of multiple iterations, but not determining which run
   * should be recorded.
   */
  accumulate(...others: MicrobenchResult | null[]): MicrobenchResult;

  /**
   * Divide the measures in this result by a factor. This allows standardization per iteration, regardless of the
   * actual number of iterations run for a test.
   *
   * @param divisor individual values are divided by this value
   */
  amortize(divisor: number): MicrobenchResult;

  /**
   * Extrapolate/Interpolate the measures in this result by a factor of [target iterations of measurement/actual
   * iterations executed]. This allows projection of current result to a target result with a desired iterations of the
   * lambda being executed. E.g. The lambda has been executed 900 times but the target is 1000 iterations. To get a
   * result that is comparable to the target number of iterations, call this function to extrapolate the result as if
   * the test had run for 1000 iterations.
   *
   * @param targetIterations desired number of iterations
   */
  scale(targetIterations: number): MicrobenchResult;

  /**
   * Determine whether this result is at least as good as another result. This means that every measure present in this
   * result must be ≤ the value in the other result (if not missing). Measures in the other result that are not present
   * in this result are not considered.
   */
  beats(other: MicrobenchResult): boolean;

  /**
   * Return a new instance of this result with the "*X" (times) measures filled in based on the specified result.
   * For example if the "time" measure took 1s in this result and 0.5s in the other result, the "timeX" measure will be
   * set to 2.0.
   */
  withTimesRelativeTo(other: MicrobenchResult): MicrobenchResult;

  /**
   * Produce a composite of the specified set of results that is composed of the best (lowest) stats from each of the
   * runs. If there is only a single result in the array, that one is returned.
   *
   * @param results individual results
   * @param spec options to attach to summary
   * @return composite summary of best case results
   */
  static bestCase(results: C3.Array<MicrobenchResult | null>, spec?: MicrobenchSpec | null): MicrobenchResult;

  /**
   * Produce a composite of the specified set of results that is composed of the worst (highest) stats from each of the
   * runs. If there is only a single result in the array, that one is returned.
   *
   * @param results individual results
   * @param spec options to attach to summary
   * @return composite summary of worst case results
   */
  static worstCase(results: C3.Array<MicrobenchResult | null>, spec?: MicrobenchSpec | null): MicrobenchResult;

  /**
   * Produce a composite of the specified set of results that is composed of the arithmetic mean of the stats from each
   * of the runs. If there is only a single result in the array, that one is returned.
   *
   * @param results individual results
   * @param spec options to attach to summary
   * @return composite summary of average case results
   */
  static averageCase(results: C3.Array<MicrobenchResult | null>, spec?: MicrobenchSpec | null): MicrobenchResult;

  /**
   * Produce a composite of the specified set of results that is composed of a summary of the stats from each of the
   * runs. If there is only a single result in the array, that one is returned.
   *
   * @param results individual results
   * @param spec options to attach to summary
   * @param reduce lambda that reduces individual results to a single value
   * @return composite summary of results
   */
  static summarize(results: C3.Array<MicrobenchResult | null>, spec: MicrobenchSpec, reduce: λFunction<C3.Array<number | null>, number | null>): MicrobenchResult;

  /**
   * Produce a composite of the specified set of results that is composed of a summary of the stats from each of the
   * runs. If there is only a single result in the array, that one is returned.
   *
   * @param results individual results
   * @param reduce lambda that reduces individual results to a single value
   * @return composite summary of results
   */
  static summarize(results: C3.Array<MicrobenchResult | null>, reduce: λFunction<C3.Array<number | null>, number | null>): MicrobenchResult;

  /**
   * Get all possible measurement names in a result as an array. Note that these names correspond to the numeric fields
   * of this type (and also to a subset of the {@link PerfMetricMeasureFields PerfMetric measures}).
   */
  static allMeasures(): C3.Array<MicrobenchResult.Measure | null>;

  /**
   * Get all possible measurement names in a result as an array. Note that these names correspond to the numeric fields
   * of this type (and also to a subset of the {@link PerfMetricMeasureFields PerfMetric measures}).
   */
  static measure(name: string, failIfInvalid?: boolean): MicrobenchResult.Measure | null;

  /**
   * Build a simple SVG chart image showing the history of values for a single measure. The chart has a nominal width
   * and height (10:1), but since it is a vector image it can be scaled as needed.
   *
   * If there are not at least two valid measurements, null is returned. Each result is shown, but invalid measurement
   * values are left blank.
   *
   * @param results set of results to chart
   * @param avg summary value (if null, mean is calculated)
   * @param measure value to chart
   * @param format chart image format (text or SVG)
   */
  static chart(results?: C3.Array<MicrobenchResult | null>, avg: number | null, measure: MicrobenchResult.Measure, format?: string | null): string | null;

  /**
   * Build a simple SVG chart image showing the history of values compared to the current value for a single measure.
   * The chart has a nominal width and height (10:1), but since it is a vector image it can be scaled as needed.
   *
   * If there are not at least two valid measurements (including the current), null is returned. Each history and
   * current result is shown, but invalid measurement values are left blank.
   *
   * @param history set of previous results to chart
   * @param historyAvg summary value (if null, mean is calculated)
   * @param current latest result to compare
   * @param measure value to chart
   * @param format chart image format (text or SVG)
   */
  static comparisonChart(history?: C3.Array<MicrobenchResult | null>, historyAvg: number | null, current: MicrobenchResult, measure: MicrobenchResult.Measure, format?: string | null): string | null;

  /**
   * Build a simple SVG chart image showing the history of values compared to the current value for a single measure.
   * The chart has a nominal width and height (10:1), but since it is a vector image it can be scaled as needed.
   *
   * If there are not at least two valid measurements (including the current), null is returned. Each history current
   * result is shown, but invalid measurement values are left blank.
   *
   * @param history set of previous results to chart
   * @param historyAvg summary value (if null, mean is calculated)
   * @param current latest results to compare
   * @param measure value to chart
   * @param format chart image format (text or SVG)
   */
  static comparisonChart(history?: C3.Array<MicrobenchResult | null>, historyAvg: number | null, current?: C3.Array<MicrobenchResult | null>, measure: MicrobenchResult.Measure, format?: string | null): string | null;
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

// TypeScript definitions for the C3 type RollupMetricBatchJobOptions

/**
 * Batch job options for {@link RollupMetricBatchJob}.
 *
 * @remarks this represents a value passed to a method that expects an instance of RollupMetricBatchJobOptions
 */
declare interface IRollupMetricBatchJobOptions {

  /**
   * Start datetime of the time range. The start date is inclusive of the date mentioned.
   * E.g. '2010-01-01T00:00:00' (everything starting from '2011-01-01T00:00:00' will be included)
   */
  start: DateTime | Date | string;

  /**
   * End datetime of the time range. The end date is exclusive of the date mentioned.
   * E.g. '2011-01-01T00:00:00' (everything before '2011-01-01T00:00:00' will be included)
   */
  end: DateTime | Date | string;

  /**
   * Interval of timeseries.
   */
  interval: string;

  /**
   * @inheritdoc
   * If you want to evaluate a metric for a specific time zone, adding timezone info in the start and end time
   * (i.e. 2013-01-01T00:00:00+09:00) will not have any effect. You must specify the {@link TimeZone} explicitly.
   */
  timeZone?: ITimeZone;

  /**
   * length of this time-info in intervals. I.e. size of the timeseries this info represents.
   */
  _size?: number;

  /**
   * true if time range is aligned with interval.
   */
  _isAligned?: boolean;

  /**
   * Desired unit of evaluation. If specified, results will be converted to this unit.
   */
  unitId?: string;

  /**
   * Include spec.
   */
  include?: string;

  /**
   * Indicates expression compiler options to be used during evaluation of metrics. Typically used for debugging
   * When using {@link EvalMetricsSpec#explain}, be sure to provide this field and set {@link ExprCompileOptions#evalPlanInclude}
   * to indicate what debugging information is required. Here are the options:
   * expr - Expression provided by the end user (not so interesting)
   * rewrittenExpr - How the metric engine rewrote the expression to optimize it and remove common sub expressions
   * srcTypeFetchSpec - Fetch spec generated to evaluate objects at the end of the path (in simple metrics). If you feel data is present, but metric engine returns missing values, be sure to generate the fetch spec using this approach
   * hierarchies - Objects obtained at the end of the {@link SimpleMetric#path} on the source objects
   * simpleMetrics - Results of simple metrics in the given expressions (If you are evaluating a simple metric, the result will be the same)
   * evalInstrumentation, tsEvalInstrumentation - Profiled view of within the metric expression where exactly the time was spent. This is crucial in understanding which sub metric / expression took the most amount of time during evaluation
   */
  options?: IEvalMetricsOptions;

  /**
   * If specified uses the following as the key field instead of id
   */
  srcKey?: λFunction<Obj | null, string | null>;

  /**
   * This field will fetch the timeseries for the metric from the cache if available. If it is not available in cache,
   * then it will evaluate it and serve the result
   */
  cache?: boolean;

  /**
   * This field will be populated with pre-fetched sources to be used for hierarchy generation in the metric engine.
   * If this field is set, metric engine will use ALL the objects provided in this list and not do a source fetch
   * at all. The engine expects all the fields required by the metrics to be populated by the user.
   */
  sources?: ICollection<Obj>;

  /**
   * Ids for the sources for the source type. Either ids or {@link EvalMetricsSpec#filter} is required for evaluating a
   * metric.
   * E.g. ["Airplane1","Airplane2"]
   */
  ids?: Set_Type<string> | Array<string>;

  /**
   * If ids is not specified, alternatively a filter could be used to fetch the ids that one is interested in evaluating for a single source type
   * This filter will be applied on the source type and a default limit of 2000 sources will be applied if not otherwise
   * specified using {@link EvalMetricsSpec#limit}. The ids generated as a result of fetch using this filter will be used for
   * evaluation of the metrics. This should not be used to filter values on the results of the time series.
   */
  filter?: string;

  /**
   * Optionally you can also provide a limit with a filter to limit the number of sources. Default limit is as set by
   * the database engine i.e. 2000 objects
   */
  limit?: number;

  /**
   * Specify the expressions that you want to evaluate. Could be multiple Simple / Compound Metrics or a combination or
   * they could be independent expressions.
   * E.g. ['SimpleMetric1', 'CompoundMetric1', 'identity(1) + identity(2)']
   */
  expressions: Set_Type<string> | Array<string>;

  /**
   * Set this flag to let metric engine continue to evaluate other src / metric combinations on error for certain src / metrics.
   * In cases where, it is okay for certain metric evaluations to fail for a source / metric combination, we can set this
   * flag. The result will contain results for all other source / metric combinations other than the ones that failed.
   *
   * E.g. This could be useful in cases where there is a custom user defined metric function library function which throws
   * an error and it is okay for the evaluation to skip those errors
   */
  continueOnError?: boolean;

  /**
   *  If true then produces evaluation plan with details on final expression, simple metrics and execution timings.
   *  These flag needs to be used in conjunction with #options#evalPlanInclude field where the items needed for debugging needs to be
   *  included. E.g.
   * ```js
   *  EvalMetricsSpec.make({
   *    ids: ['a'], expressions: ['B'], start:"2010-01-01", end:"2011-01-01", interval:"MONTH", explain:true,
   *    options: {evalPlanInclude: "expr, rewrittenExpr, srcTypeFetchSpec, hierarchies, simpleMetrics, evalInstrumentation, tsEvalInstrumentation" }
   *  })
   * ```
   */
  explain?: boolean;

  /**
   * This flag indicates the locale in which the {@link expressions} will be translated to,
   * in the {@link EvalMetricsResult#translations}. See {@link Translation} for information to pass {@link locale}
   */
  locale?: string;

  /**
   * This variable provides a way to provide values for fields at runtime for compound metrics
   *   e.g. weatherNormalizeElectricity(ElectricityConsumption, eventDate)
   *   and say eventDate is to be provided at run-time. We can declare a binding in the spec
   *   bindings : <eventDate, "2013-01-01T00:00:00"> and we will plug in this value during evaluation
   *
   * Alternatively, multiple values can be provided for the same bindings in a different map by using the `[map<string,any>]` signature
   * Bindings when combined with {@link #bindingsCartesianProduct} will take a cartesian product of every binding with the
   * provided values to produce Math.pow(NoOfValues, NoOfVariables) number of expression combinations (given each variable has the same number of values provided)
   */
  bindings?: Map_Type<string, any> | {[key: string]: any} | Array_Type<Map_Type<string, any>> | Array<Map_Type<string, any> | {[key: string]: any}>;

  /**
   * Generate a cartesian product of all the binding parameters passed in.
   * e.g. For a metric expression that takes 2 variables each of which can take on 3 potential values, this will result in 9 result expressions
   * [{a:1,b:2}, {a:3,b:4}, {a:5,b:6}] => [{a:1,b:2},{a:1,b:4},{a:1,b:6},{a:3,b:2},{a:3,b:4},{a:3,b:6},{a:5,b:2},{a:5,b:4},{a:5,b:6}]
   * If this value is not set, then individual values provided by the user in the {@link #bindings} will be used
   */
  bindingsCartesianProduct?: boolean;

  /**
   * Lambda expression providing a way to generate the key for the metric expression in {@link EvalMetricsResult#result}
   * The result of this will replace the map<string, map<string, Timeseries>>
   *                                                       ^
   * The inputs provided to the function will be the source expression name, the names of the binding & the values passed
   * by the user. The expectation from the function is to generate a unique name across the eval metric call for the
   * inputs passed in
   */
  resultKey?: λBiFunction<string | null, Map_Type<string, any> | null, string>;

  /**
   * Id of the saved {@link SavedEvalMetricsSpec}. The parameters provided in the spec will be included as a part of
   * the evaluation when this field is set. Helpful when adding multiple bindings as a seed data
   */
  savedSpecId?: string;

  /**
   * Specify the aggregation function that needs to be used to roll up results of all individual sources into 1 timeseries
   */
  rollupFunc?: string;

  /**
   * Specifies the percentileValue to be computed if the rollupFunc is PERCENTILE
   */
  percentileValue?: number;

  /**
   * Size of each batch.
   */
  batchSize?: number;

  /**
   * C3 type name.
   */
  srcType: string;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}
/**
 * Batch job options for {@link RollupMetricBatchJob}.
 *
 * @remarks this represents a made instance of RollupMetricBatchJobOptions
 */
declare class RollupMetricBatchJobOptions extends Obj  {

  /**
   * Start datetime of the time range. The start date is inclusive of the date mentioned.
   * E.g. '2010-01-01T00:00:00' (everything starting from '2011-01-01T00:00:00' will be included)
   */
  readonly start: DateTime;
  withStart(start: DateTime | Date | string): RollupMetricBatchJobOptions;

  /**
   * End datetime of the time range. The end date is exclusive of the date mentioned.
   * E.g. '2011-01-01T00:00:00' (everything before '2011-01-01T00:00:00' will be included)
   */
  readonly end: DateTime;
  withEnd(end: DateTime | Date | string): RollupMetricBatchJobOptions;

  /**
   * Interval of timeseries.
   */
  readonly interval: string;
  withInterval(interval: string): RollupMetricBatchJobOptions;

  /**
   * @inheritdoc
   * If you want to evaluate a metric for a specific time zone, adding timezone info in the start and end time
   * (i.e. 2013-01-01T00:00:00+09:00) will not have any effect. You must specify the {@link TimeZone} explicitly.
   */
  readonly timeZone?: TimeZone;
  withTimeZone(timeZone: ITimeZone | null): RollupMetricBatchJobOptions;

  /**
   * length of this time-info in intervals. I.e. size of the timeseries this info represents.
   */
  readonly _size?: number;
  with_size(_size: number | null): RollupMetricBatchJobOptions;

  /**
   * true if time range is aligned with interval.
   */
  readonly _isAligned?: boolean;
  with_isAligned(_isAligned: boolean): RollupMetricBatchJobOptions;

  /**
   * Desired unit of evaluation. If specified, results will be converted to this unit.
   */
  readonly unitId?: string;
  withUnitId(unitId: string | null): RollupMetricBatchJobOptions;

  /**
   * Include spec.
   */
  readonly include?: string;
  withInclude(include: string | null): RollupMetricBatchJobOptions;

  /**
   * Indicates expression compiler options to be used during evaluation of metrics. Typically used for debugging
   * When using {@link EvalMetricsSpec#explain}, be sure to provide this field and set {@link ExprCompileOptions#evalPlanInclude}
   * to indicate what debugging information is required. Here are the options:
   * expr - Expression provided by the end user (not so interesting)
   * rewrittenExpr - How the metric engine rewrote the expression to optimize it and remove common sub expressions
   * srcTypeFetchSpec - Fetch spec generated to evaluate objects at the end of the path (in simple metrics). If you feel data is present, but metric engine returns missing values, be sure to generate the fetch spec using this approach
   * hierarchies - Objects obtained at the end of the {@link SimpleMetric#path} on the source objects
   * simpleMetrics - Results of simple metrics in the given expressions (If you are evaluating a simple metric, the result will be the same)
   * evalInstrumentation, tsEvalInstrumentation - Profiled view of within the metric expression where exactly the time was spent. This is crucial in understanding which sub metric / expression took the most amount of time during evaluation
   */
  readonly options?: EvalMetricsOptions;
  withOptions(options: IEvalMetricsOptions | null): RollupMetricBatchJobOptions;

  /**
   * If specified uses the following as the key field instead of id
   */
  readonly srcKey?: λFunction<Obj | null, string | null>;
  withSrcKey(srcKey: λFunction<Obj | null, string | null> | null): RollupMetricBatchJobOptions;

  /**
   * This field will fetch the timeseries for the metric from the cache if available. If it is not available in cache,
   * then it will evaluate it and serve the result
   */
  readonly cache?: boolean;
  withCache(cache: boolean): RollupMetricBatchJobOptions;

  /**
   * This field will be populated with pre-fetched sources to be used for hierarchy generation in the metric engine.
   * If this field is set, metric engine will use ALL the objects provided in this list and not do a source fetch
   * at all. The engine expects all the fields required by the metrics to be populated by the user.
   */
  readonly sources?: Collection<Obj>;
  withSources(sources: ICollection<Obj> | null): RollupMetricBatchJobOptions;

  /**
   * Ids for the sources for the source type. Either ids or {@link EvalMetricsSpec#filter} is required for evaluating a
   * metric.
   * E.g. ["Airplane1","Airplane2"]
   */
  readonly ids?: Set_Type<string>;
  withIds(ids: Set_Type<string> | Array<string> | null): RollupMetricBatchJobOptions;

  /**
   * If ids is not specified, alternatively a filter could be used to fetch the ids that one is interested in evaluating for a single source type
   * This filter will be applied on the source type and a default limit of 2000 sources will be applied if not otherwise
   * specified using {@link EvalMetricsSpec#limit}. The ids generated as a result of fetch using this filter will be used for
   * evaluation of the metrics. This should not be used to filter values on the results of the time series.
   */
  readonly filter?: string;
  withFilter(filter: string | null): RollupMetricBatchJobOptions;

  /**
   * Optionally you can also provide a limit with a filter to limit the number of sources. Default limit is as set by
   * the database engine i.e. 2000 objects
   */
  readonly limit?: number;
  withLimit(limit: number | null): RollupMetricBatchJobOptions;

  /**
   * Specify the expressions that you want to evaluate. Could be multiple Simple / Compound Metrics or a combination or
   * they could be independent expressions.
   * E.g. ['SimpleMetric1', 'CompoundMetric1', 'identity(1) + identity(2)']
   */
  readonly expressions: Set_Type<string>;
  withExpressions(expressions: Set_Type<string> | Array<string>): RollupMetricBatchJobOptions;

  /**
   * Set this flag to let metric engine continue to evaluate other src / metric combinations on error for certain src / metrics.
   * In cases where, it is okay for certain metric evaluations to fail for a source / metric combination, we can set this
   * flag. The result will contain results for all other source / metric combinations other than the ones that failed.
   *
   * E.g. This could be useful in cases where there is a custom user defined metric function library function which throws
   * an error and it is okay for the evaluation to skip those errors
   */
  readonly continueOnError?: boolean;
  withContinueOnError(continueOnError: boolean): RollupMetricBatchJobOptions;

  /**
   *  If true then produces evaluation plan with details on final expression, simple metrics and execution timings.
   *  These flag needs to be used in conjunction with #options#evalPlanInclude field where the items needed for debugging needs to be
   *  included. E.g.
   * ```js
   *  EvalMetricsSpec.make({
   *    ids: ['a'], expressions: ['B'], start:"2010-01-01", end:"2011-01-01", interval:"MONTH", explain:true,
   *    options: {evalPlanInclude: "expr, rewrittenExpr, srcTypeFetchSpec, hierarchies, simpleMetrics, evalInstrumentation, tsEvalInstrumentation" }
   *  })
   * ```
   */
  readonly explain?: boolean;
  withExplain(explain: boolean): RollupMetricBatchJobOptions;

  /**
   * This flag indicates the locale in which the {@link expressions} will be translated to,
   * in the {@link EvalMetricsResult#translations}. See {@link Translation} for information to pass {@link locale}
   */
  readonly locale?: string;
  withLocale(locale: string | null): RollupMetricBatchJobOptions;

  /**
   * This variable provides a way to provide values for fields at runtime for compound metrics
   *   e.g. weatherNormalizeElectricity(ElectricityConsumption, eventDate)
   *   and say eventDate is to be provided at run-time. We can declare a binding in the spec
   *   bindings : <eventDate, "2013-01-01T00:00:00"> and we will plug in this value during evaluation
   *
   * Alternatively, multiple values can be provided for the same bindings in a different map by using the `[map<string,any>]` signature
   * Bindings when combined with {@link #bindingsCartesianProduct} will take a cartesian product of every binding with the
   * provided values to produce Math.pow(NoOfValues, NoOfVariables) number of expression combinations (given each variable has the same number of values provided)
   */
  readonly bindings?: Map_Type<string, any> | Array_Type<Map_Type<string, any>>;
  withBindings(bindings: Map_Type<string, any> | {[key: string]: any} | Array_Type<Map_Type<string, any>> | Array<Map_Type<string, any> | {[key: string]: any}> | null): RollupMetricBatchJobOptions;

  /**
   * Generate a cartesian product of all the binding parameters passed in.
   * e.g. For a metric expression that takes 2 variables each of which can take on 3 potential values, this will result in 9 result expressions
   * [{a:1,b:2}, {a:3,b:4}, {a:5,b:6}] => [{a:1,b:2},{a:1,b:4},{a:1,b:6},{a:3,b:2},{a:3,b:4},{a:3,b:6},{a:5,b:2},{a:5,b:4},{a:5,b:6}]
   * If this value is not set, then individual values provided by the user in the {@link #bindings} will be used
   */
  readonly bindingsCartesianProduct?: boolean;
  withBindingsCartesianProduct(bindingsCartesianProduct: boolean): RollupMetricBatchJobOptions;

  /**
   * Lambda expression providing a way to generate the key for the metric expression in {@link EvalMetricsResult#result}
   * The result of this will replace the map<string, map<string, Timeseries>>
   *                                                       ^
   * The inputs provided to the function will be the source expression name, the names of the binding & the values passed
   * by the user. The expectation from the function is to generate a unique name across the eval metric call for the
   * inputs passed in
   */
  readonly resultKey?: λBiFunction<string | null, Map_Type<string, any> | null, string>;
  withResultKey(resultKey: λBiFunction<string | null, Map_Type<string, any> | null, string> | null): RollupMetricBatchJobOptions;

  /**
   * Id of the saved {@link SavedEvalMetricsSpec}. The parameters provided in the spec will be included as a part of
   * the evaluation when this field is set. Helpful when adding multiple bindings as a seed data
   */
  readonly savedSpecId?: string;
  withSavedSpecId(savedSpecId: string | null): RollupMetricBatchJobOptions;

  /**
   * Specify the aggregation function that needs to be used to roll up results of all individual sources into 1 timeseries
   */
  readonly rollupFunc?: string;
  withRollupFunc(rollupFunc: string | null): RollupMetricBatchJobOptions;

  /**
   * Specifies the percentileValue to be computed if the rollupFunc is PERCENTILE
   */
  readonly percentileValue?: number;
  withPercentileValue(percentileValue: number | null): RollupMetricBatchJobOptions;

  /**
   * Size of each batch.
   */
  readonly batchSize?: number;
  withBatchSize(batchSize: number | null): RollupMetricBatchJobOptions;

  /**
   * C3 type name.
   */
  readonly srcType: string;
  withSrcType(srcType: string): RollupMetricBatchJobOptions;

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
  static fromJson(json: any): RollupMetricBatchJobOptions | null;

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
  static fromJsonString(json: string): RollupMetricBatchJobOptions | null;

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
  static fromXmlString(xml: string): RollupMetricBatchJobOptions | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): RollupMetricBatchJobOptions | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): RollupMetricBatchJobOptions;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): RollupMetricBatchJobOptions;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): RollupMetricBatchJobOptions;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<RollupMetricBatchJobOptions>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<RollupMetricBatchJobOptions>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): RollupMetricBatchJobOptions;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): RollupMetricBatchJobOptions;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): RollupMetricBatchJobOptions;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): RollupMetricBatchJobOptions;

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
  withField(field: string, value: any, doNotConvert?: boolean): RollupMetricBatchJobOptions;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): RollupMetricBatchJobOptions;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): RollupMetricBatchJobOptions;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): RollupMetricBatchJobOptions;

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
  withoutFieldAtPath(path: string): RollupMetricBatchJobOptions;

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
  withoutField(field: string): RollupMetricBatchJobOptions;

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
  withoutField(field: FieldType): RollupMetricBatchJobOptions;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): RollupMetricBatchJobOptions;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): RollupMetricBatchJobOptions;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): RollupMetricBatchJobOptions;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): RollupMetricBatchJobOptions;

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
  defaultField(field: string): RollupMetricBatchJobOptions;

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
  defaultField(field: FieldType): RollupMetricBatchJobOptions;

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
  unsetField(field: string): RollupMetricBatchJobOptions;

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
  unsetField(field: FieldType): RollupMetricBatchJobOptions;

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
  removeField(field: string): RollupMetricBatchJobOptions;

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
  removeField(field: FieldType): RollupMetricBatchJobOptions;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): RollupMetricBatchJobOptions;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): RollupMetricBatchJobOptions;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): RollupMetricBatchJobOptions;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): RollupMetricBatchJobOptions;

  mergeJson(json: any): RollupMetricBatchJobOptions;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): RollupMetricBatchJobOptions;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): RollupMetricBatchJobOptions;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<RollupMetricBatchJobOptions>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<RollupMetricBatchJobOptions> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<RollupMetricBatchJobOptions> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<RollupMetricBatchJobOptions>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<RollupMetricBatchJobOptions> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, RollupMetricBatchJobOptions> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, RollupMetricBatchJobOptions> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<RollupMetricBatchJobOptions>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<RollupMetricBatchJobOptions>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): RollupMetricBatchJobOptions;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): RollupMetricBatchJobOptions;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): RollupMetricBatchJobOptions;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): RollupMetricBatchJobOptions;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): RollupMetricBatchJobOptions;

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
  static make(fields: any, withDefaults?: boolean): RollupMetricBatchJobOptions;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): RollupMetricBatchJobOptions;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): RollupMetricBatchJobOptions;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): RollupMetricBatchJobOptions;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<RollupMetricBatchJobOptions> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): RollupMetricBatchJobOptions;

  /**
   * Get 1 year timerange from 12 months ago to now, range always starts on first date of a month.
   * Ex: current time - 2016-08-23, one should get 2015-08-01 to 2016-08-01 timerange
   */
  static last12Months(): RollupMetricBatchJobOptions | null;

  /**
   * Get 1 year timerange from 24 months ago to 12 months ago, range always starts on first date of a month.
   * Ex: current time - 2016-08-23, one should get 2014-08-01 to 2015-08-01 timerange.
   */
  static prevLast12Months(): RollupMetricBatchJobOptions | null;

  /**
   * API to de-dup time ranges and sort it in ascending order by start, end and combine consecutive time periods
   * E.g. ["2014-01-01" -> "2015-01-01"], ["2015-01-01" -> "2016-01-01"] => ["2014-01-01" -> "2016-01-01"]
   * @param timeRanges
   *                that need to be sorted and deduped
   * @return deduped and sorted time ranges with merged consecutive ranges
   */
  static combineAndSort(timeRanges: Array_Type<TimeRange>): Array_Type<RollupMetricBatchJobOptions> | null;

  /**
   * Merge various time ranges into a larger range
   * E.g. ["2014-01-01" -> "2014-02-01"], ["2015-01-01" -> "2016-01-01"] => {"2014-01-01" -> "2016-01-01"}
   */
  static coalesce(timeRanges: Array_Type<TimeRange>): RollupMetricBatchJobOptions | null;

  /**
   * Whether this time range covers time
   */
  contains(time: DateTime): boolean;

  /**
   * Whether this time range covers input time range
   */
  contains(othr: TimeRange): boolean;

  /**
   * Returns whether this time range intersects with the other
   */
  intersects(othr: TimeRange): boolean;

  /**
   * Returns overlap TimeRange with the input TimeRange. Returns null if no overlap found
   */
  overlap(othr: TimeRange): RollupMetricBatchJobOptions | null;

  /**
   * @returns TimeRange from pretty printed TimeRange
   * e.g. var tr = TimeRange.fromPrettyPrint('2017-01-01::2017-02-01')
   *      tr.start.toString() will be  '2017-01-01'
   *      tr.end.toString() will be '2017-02-01'
   */
  static fromPrettyPrint(prettyPrint: string): RollupMetricBatchJobOptions;

  /**
   * Construct array of TimeRange from map<datetime, datetime>
   */
  static fromMap(map: Map_Type<DateTime, DateTime>): Array_Type<RollupMetricBatchJobOptions> | null;

  /**
   * @return a prettified string representation of the TimeRange
   * e.g. TimeRange.make({start: '2017-01-01', end: '2017-02-01'}).prettyPrint()
   *      return 2017-01-01::2017-02-01
   */
  prettyPrint(): string;

  /**
   * Apply duration shift to the existing time range
   */
  shift(offset: Duration): RollupMetricBatchJobOptions;

  /**
   * @return new time info shifted by provided length. It will shift the dates by the specified number of intervals
   */
  shift(length: number): TimeInfo | null;

  /**
   * String-based representation of instance of this type.
   */
  toString(): string | null;

  /**
   * true if time range is aligned with interval.
   */
  isAligned(): boolean;

  /**
   * length of this time-info in intervals. I.e. size of the timeseries this info represents.
   */
  size(): number;

  /**
   * Time range for timeseries.
   */
  range(): TimeRange | null;

  /**
   * @return new time info with time range aligned with interval.
   */
  align(): TimeInfo;

  /**
   * @return new time info with updated start and end.
   */
  withStartAndEnd(start: DateTime, end?: DateTime): TimeInfo;

  /**
   * @return new time information that spans over time range needed to compute a window function.
   */
  extendForWindow(offset: number, span: number): TimeInfo | null;

  /**
   * @return new instance of timeseries time info.
   */
  static from(range: TimeRange, interval: string, timeZone?: TimeZone): TimeInfo;

  static from(start: DateTime, end: DateTime, interval: string, timeZone?: TimeZone, align?: boolean): TimeInfo;

  static from(start: DateTime, end: DateTime, interval: string, timeZone?: TimeZone, _size?: number, _isAligned?: boolean): TimeInfo;

  /**
   * @return new instance of time info based on the Timeseries c3 obj.
   */
  static fromTimeseries(ts: Timeseries<any>): TimeInfo;

  /**
   * @return new instance of time info based on the spec c3 obj.
   */
  static fromSpecObj(spec?: Obj, align?: boolean): TimeInfo;

  /**
   * convert input map into the desired timezone
   */
  static convert(timeZone: TimeZone, inputMap: Map_Type<DateTime, DateTime>): Map_Type<DateTime, DateTime> | null;

  /**
   * Convert the given dates to the specified time zone
   *
   * @param timeZone
   * @param dates
   * @return
   */
  static convert(timeZone: TimeZone, dates: Array_Type<DateTime>): Array_Type<DateTime> | null;

  /**
   * Converts the given start & end pair to the given time zone
   *
   * @param start
   * @param end
   * @param timeZone
   * @return
   */
  static convert(timeZone: TimeZone, start: DateTime, end: DateTime): Pair<DateTime, DateTime> | null;

  static extractTimeZoneShifts(dates?: Array_Type<DateTime>): Array_Type<DateTime> | null;

  static applyAndConvert(timeZone?: TimeZone, start?: DateTime, end?: DateTime, tzShifts?: Array_Type<DateTime>): Pair<DateTime, DateTime> | null;

  /**
   * Apply time zones to dates according to the times when the shift happened
   *
   * @param dates
   * @param tzShifts
   * @return
   */
  static applyTimeZoneShifts(dates: Array_Type<DateTime>, tzShifts?: Array_Type<DateTime>): Array_Type<DateTime> | null;

  /**
   * Apply time zones to dates according to the times when the shift happened
   *
   * @param inputMap
   * @param tzShifts
   * @return
   */
  static applyTimeZoneShifts(inputMap: Map_Type<DateTime, DateTime>, tzShifts?: Array_Type<DateTime>): Map_Type<DateTime, DateTime> | null;

  static applyTimeZoneShifts(start?: DateTime, end?: DateTime, tzShifts?: Array_Type<DateTime>): Pair<DateTime, DateTime> | null;

  /**
   * Create a TimeInfo object where `end` is the beginning of the provided period from now (E.g. beginning of today if period is '1d')
   * and start is {@link count} intervals in the past
   *
   * E.g.
   * ```js
   * // Let's assume today (now) is 2020-10-10T14:23:12
   * TimeInfo.fromValueCount(10, '1d')
   * => TimeInfo.make({start: "2020-10-01", end:"2020-10-10", interval: "DAY"})
   * ```
   */
  static fromValueCount(count: number, period?: string = '"1d"'): TimeInfo;

  /**
   * Generate the key for the metric expression in {@link EvalMetricsResult#result}
   * The result of this will replace the map<string, map<string, Timeseries>>
   *                                                       ^
   * The inputs provided to the function will be the source expression name, the names of the binding & the values passed
   * by the user. The function will hash the key-value pair in the binding and generate the value
   */
  static generateResultKey(expression?: string, bindings?: Map_Type<string, any>): string;

  /**
   * Whether this spec requires full time range for the source type. This loops through the metrics in the expression and
   * checks if any of the {@link TSDecl} metrics require full time range for the source type
   */
  requiresFullTsDeclTimeRange(srcType: Type, overrideMetrics?: Array_Type<Metric>): boolean;

  /**
   * Estimates the size of the result of the {@link MetricEvaluatable#evalMetrics} for 1 source without doing an evaluation.
   * NOTE: in order to avoid doing even a sample evaluation, this heuristic assumes all Timeseries data points are doubles
   *
   * @return size in bytes
   */
  estimateSize(): number;

  /**
   * Whether current spec is a subset of the parent
   */
  isSubset(parent: EvalMetricsSpec): boolean;

  /**
   * Compute hash of this spec
   */
  hash(srcType: Type): string | null;
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

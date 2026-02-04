// TypeScript definitions for the C3 type EvalSpec

/**
 * {@link Evaluatable#eval} spec type
 *
 * @remarks this represents a value passed to a method that expects an instance of EvalSpec
 */
declare interface IEvalSpec {

  /**
   * Ids that will be added to the filter. {@link Filter.intersects} is constructed with `id` field and provided values
   */
  ids?: C3.Array<string | null> | Array<string | null>;

  /**
   * id that will be added to the filter. {@link Filter.intersects} is constructed with `id` field and provided value
   */
  id?: string | null;

  /**
   * Start datetime of the time range. The start date is inclusive of the date mentioned.
   * E.g. '2010-01-01T00:00:00' (everything starting from '2011-01-01T00:00:00' will be included)
   */
  start?: DateTime | Date | string | null;

  /**
   * End datetime of the time range. The end date is exclusive of the date mentioned.
   * E.g. '2011-01-01T00:00:00' (everything before '2011-01-01T00:00:00' will be included)
   */
  end?: DateTime | Date | string | null;

  /**
   * Filter expression for which Obj instances to return.  Filter expressions must evaluate to a value type of
   * Boolean.  They support basic comparison operators (e.g. "==", "<", "<=", ">", ">=", "!="), arithmetic operators
   * (e.g. "+", "-", "*", "/"), "&&", "||" and "most" non-timeseries functions supported by the C3 expression engine.
   *
   * Expressions can include fields in the Obj itself (e.g. "name == 'foo'"), as well as fields in Objs in other
   * types referenced from the Obj (e.g. "refField.name == 'foo'").  Expressions involving arry/mapp fields will
   * automatically be interpreted as "exists" queries (e.g. "refArry.name == 'foo'" will bring back all Obj instances
   * that have at least one entry in refArry where the referenced Obj has the value 'foo' for its name field).
   */
  filter?: string | null;

  /**
   * Variables values to substitute in filter expression. CURRENTLY UNDER CONSTRUCTION!
   */
  vars?: C3.Map<string | null, Obj | null> | {[key: string | null]: IObj | null};

  /**
   * Specifies the order to return Objs.  Default if not specified is by "id".
   *
   * Supports multiple fields (e.g. "field1, field2") and descending order per field (e.g. "field1, descending(field2)").
   *
   * If {@link limit} is set to -1, and order is specified as "<none>", then no order will be applied at the database.
   * This should only be done if its impact is fully understood as it may help performance in some cases and hurt it in
   * others.  If you aren't sure, DON'T USE IT.
   */
  order?: string | null;

  /**
   * Offset to use for paged reads.
   */
  offset?: number | null;

  /**
   * Maximum number of Objs to return (starting from {@link offset}).  If there are fewer rows than were requested, only
   * those will be returned.  If there are additional rows beyond what was requested, then {@link FetchResult.hasMore}
   * will be set to true.
   *
   * -1 returns all.
   */
  limit?: number | null;

  /**
   * Comma separated list of expressions to be evaluated on each processed obj.  If projections can be handled
   * directly in SQL (by the db engine), they will be, otherwise they will be handled by the expression with certain
   * reduced functionality (e.g. grouping and ordering is not supported on projections handled by the expression
   * engine).
   */
  projection?: string | null;

  /**
   * Comma separated list of projections to perform SQL style grouping on.  Each group spec must exactly match a
   * projection spec and only projections that will be handled by the db engine are allowed.
   */
  group?: string | null;

  /**
   * SQL style having expression.  Only valid when group is specified.  Only grouped projections can be referenced in
   * the having expression.
   */
  having?: string | null;

  /**
   * Singleton timestamp, series of timestamp, singleton {@link TimeRange} or series of  {@link TimeRange} feature from
   * this set that is used to pick the data point(s) from other timeseries features in this set.
   *
   * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
   */
  asOfFeature?: string | null;

  /**
   * Feature whose values are integers or booleans to mask and filter other features during materialization,
   * i.e. to only keep rows with a mask value of 0 or false
   *
   * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
   */
  maskFeature?: string | null;

  /**
   *  This represents the interval for the time-series data.
   *  Please take note of the support of **interval** on {@link EvalSpec} and how it impacts {@link Evaluatable#eval}:
   *  ```
   *  | Kind                                | Supports Interval |  Valid  | Example
   *  |-------------------------------------|-------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------|
   *  | Projection with Metrics             | Yes               |   ✅    | `eval(interval = 'DAY', projection="gearOilTemperatureAvg")`                                                                             |
   *  | Projection with normalized data     | Yes               |   ✅    | `eval(interval = 'DAY', projection="normalized.data.gearOilTemperature")`                                                                |
   *  | Projection with non-normalized data | No                |   ❌    | `eval(interval = 'DAY', projection="data.gearOilTemperature")`                                                                           |
   *  | Projection with Feature.Set         | No                |   ❌    | `eval(interval = 'DAY', projection="WindTurbineFeatureSet")`                                                                             |
   *  | Projection with Feature.Set columns | No                |   ❌    | `eval(interval = 'DAY', projection="WindTurbineFeatureSet.gearOilTemperatureAvgFeat, WindTurbineFeatureSet.gearOilTemperatureMinFeat")`  |
   * ```
   *  Also, note that:
   *  * `gearOilTemperatureAvg` is a {@link Metric} on `WindTurbine`.
   *  * `WindTurbineFeatureSet` is a {@link Feature.Set} with 2 features `gearOilTemperatureAvgFeat` and `gearOilTemperatureMinFeat` on `WindTurbine`.
   *  * `gearOilTemperature` is a {@link Ann.Ts @ts} field on a referenced type via `data` field on `WindTurbine`. Please look at {@link TimedDataHeader} and {@link TimedDataPoint} for more information about normalization.
   */
  interval?: string | null;

  /**
   * Aggregation function per feature if we are merging features in this set by aggregating or dissaggregating on time
   * interval.
   *
   * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
   */
  agg?: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null;

  /**
   * Optionally globally unique id of a "snapshot" of a Feature.Set. {@link Feature.Set.Snapshot}s are immutable and can be used to
   * access "unchanging data" for the evaluation or training. Alternatively, in case of {@link Feature.Set#createSnapshot} API,
   * **snapshotId** is used to create a single snapshot. Please also refer to {@link CreateSnapshotSpec#sourceSnapshotId} if an existing
   * snapshot is to be used to create a new snapshot.
   * Please note that if the snapshotId is specified, then:
   * 1. it will be always used. (Even if Feature.Set is created with {@link Feature.Set#doNotMaterialize} as true)
   * 2. An error will be thrown if the snapshot doesn't exist.
   * 3. An error will be thrown if {@link #skipMaterialized} is set to true.
   */
  snapshotId?: string | null;

  /**
   * Allows the Feature/Feature.Set to be evaluated directly during runtime instead of fetching materialized Data
   * from Feature Store.
   * Depending on the combination of this field and {@link FeatureBase#doNotMaterialize}, the behavior of evalFeature*()
   * is as follows:
   *
   * |    Feature/FeatureSet    | skipMaterialized = true |  skipMaterialized = false   |
   * |--------------------------|-------------------------|-----------------------------|
   * | doNotMaterialize = True  |       compute data      |         compute data        |
   * | doNotMaterialize = False |       compute data      |   get materialized data     |
   */
  skipMaterialized?: boolean;

  /**
   * If set, eval will additionally store the {@link EvalMetricsResult result} on {@link Data.Pandas#_emr}.
   */
  toEmr?: boolean;

  /**
   * Desired unit of evaluation. If specified, results will be converted to this unit.
   */
  unitId?: string | null;

  /**
   * Time zone treatment for timeseries.
   */
  timeZone?: ITimeZone | null;

  /**
   * length of this time-info in intervals. I.e. size of the timeseries this info represents.
   */
  _size?: number | null;

  /**
   * true if time range is aligned with interval.
   */
  _isAligned?: boolean;

  /**
   * The list of metrics that need to be overridden during evaluation
   */
  overrideMetrics?: C3.Array<Metric | null> | Array<IMetric | null>;

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
  options?: IEvalMetricsOptions | null;

  /**
   * If set, returns actualized {@link Data} otherwise returns a lazy handle to actualize Data
   */
  actualize?: boolean;

  /**
   * If set to true, eval functions will return a mutable instance of Data, otherwise return an immutable instance by default.
   * For now, if set to true, the returned instance will also be stateful.
   */
  mutable?: boolean;
}

/**
 * {@link Evaluatable#eval} spec type
 *
 * @remarks this represents a made instance of EvalSpec
 */
declare class EvalSpec extends Obj {

  /**
   * Ids that will be added to the filter. {@link Filter.intersects} is constructed with `id` field and provided values
   */
  readonly ids?: C3.Array<string | null>;
  withIds(ids: C3.Array<string | null> | Array<string | null>): EvalSpec;

  /**
   * id that will be added to the filter. {@link Filter.intersects} is constructed with `id` field and provided value
   */
  readonly id?: string | null;
  withId(id: string | null): EvalSpec;

  /**
   * Start datetime of the time range. The start date is inclusive of the date mentioned.
   * E.g. '2010-01-01T00:00:00' (everything starting from '2011-01-01T00:00:00' will be included)
   */
  readonly start?: DateTime | null;
  withStart(start: DateTime | Date | string | null): EvalSpec;

  /**
   * End datetime of the time range. The end date is exclusive of the date mentioned.
   * E.g. '2011-01-01T00:00:00' (everything before '2011-01-01T00:00:00' will be included)
   */
  readonly end?: DateTime | null;
  withEnd(end: DateTime | Date | string | null): EvalSpec;

  /**
   * Filter expression for which Obj instances to return.  Filter expressions must evaluate to a value type of
   * Boolean.  They support basic comparison operators (e.g. "==", "<", "<=", ">", ">=", "!="), arithmetic operators
   * (e.g. "+", "-", "*", "/"), "&&", "||" and "most" non-timeseries functions supported by the C3 expression engine.
   *
   * Expressions can include fields in the Obj itself (e.g. "name == 'foo'"), as well as fields in Objs in other
   * types referenced from the Obj (e.g. "refField.name == 'foo'").  Expressions involving arry/mapp fields will
   * automatically be interpreted as "exists" queries (e.g. "refArry.name == 'foo'" will bring back all Obj instances
   * that have at least one entry in refArry where the referenced Obj has the value 'foo' for its name field).
   */
  readonly filter?: string | null;
  withFilter(filter: string | null): EvalSpec;

  /**
   * Variables values to substitute in filter expression. CURRENTLY UNDER CONSTRUCTION!
   */
  readonly vars?: C3.Map<string | null, Obj | null>;
  withVars(vars: C3.Map<string | null, Obj | null> | {[key: string | null]: IObj | null}): EvalSpec;

  /**
   * Specifies the order to return Objs.  Default if not specified is by "id".
   *
   * Supports multiple fields (e.g. "field1, field2") and descending order per field (e.g. "field1, descending(field2)").
   *
   * If {@link limit} is set to -1, and order is specified as "<none>", then no order will be applied at the database.
   * This should only be done if its impact is fully understood as it may help performance in some cases and hurt it in
   * others.  If you aren't sure, DON'T USE IT.
   */
  readonly order?: string | null;
  withOrder(order: string | null): EvalSpec;

  /**
   * Offset to use for paged reads.
   */
  readonly offset?: number | null;
  withOffset(offset: number | null): EvalSpec;

  /**
   * Maximum number of Objs to return (starting from {@link offset}).  If there are fewer rows than were requested, only
   * those will be returned.  If there are additional rows beyond what was requested, then {@link FetchResult.hasMore}
   * will be set to true.
   *
   * -1 returns all.
   */
  readonly limit?: number | null;
  withLimit(limit: number | null): EvalSpec;

  /**
   * Comma separated list of expressions to be evaluated on each processed obj.  If projections can be handled
   * directly in SQL (by the db engine), they will be, otherwise they will be handled by the expression with certain
   * reduced functionality (e.g. grouping and ordering is not supported on projections handled by the expression
   * engine).
   */
  readonly projection?: string | null;
  withProjection(projection: string | null): EvalSpec;

  /**
   * Comma separated list of projections to perform SQL style grouping on.  Each group spec must exactly match a
   * projection spec and only projections that will be handled by the db engine are allowed.
   */
  readonly group?: string | null;
  withGroup(group: string | null): EvalSpec;

  /**
   * SQL style having expression.  Only valid when group is specified.  Only grouped projections can be referenced in
   * the having expression.
   */
  readonly having?: string | null;
  withHaving(having: string | null): EvalSpec;

  /**
   * Singleton timestamp, series of timestamp, singleton {@link TimeRange} or series of  {@link TimeRange} feature from
   * this set that is used to pick the data point(s) from other timeseries features in this set.
   *
   * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
   */
  readonly asOfFeature?: string | null;
  withAsOfFeature(asOfFeature: string | null): EvalSpec;

  /**
   * Feature whose values are integers or booleans to mask and filter other features during materialization,
   * i.e. to only keep rows with a mask value of 0 or false
   *
   * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
   */
  readonly maskFeature?: string | null;
  withMaskFeature(maskFeature: string | null): EvalSpec;

  /**
   *  This represents the interval for the time-series data.
   *  Please take note of the support of **interval** on {@link EvalSpec} and how it impacts {@link Evaluatable#eval}:
   *  ```
   *  | Kind                                | Supports Interval |  Valid  | Example
   *  |-------------------------------------|-------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------|
   *  | Projection with Metrics             | Yes               |   ✅    | `eval(interval = 'DAY', projection="gearOilTemperatureAvg")`                                                                             |
   *  | Projection with normalized data     | Yes               |   ✅    | `eval(interval = 'DAY', projection="normalized.data.gearOilTemperature")`                                                                |
   *  | Projection with non-normalized data | No                |   ❌    | `eval(interval = 'DAY', projection="data.gearOilTemperature")`                                                                           |
   *  | Projection with Feature.Set         | No                |   ❌    | `eval(interval = 'DAY', projection="WindTurbineFeatureSet")`                                                                             |
   *  | Projection with Feature.Set columns | No                |   ❌    | `eval(interval = 'DAY', projection="WindTurbineFeatureSet.gearOilTemperatureAvgFeat, WindTurbineFeatureSet.gearOilTemperatureMinFeat")`  |
   * ```
   *  Also, note that:
   *  * `gearOilTemperatureAvg` is a {@link Metric} on `WindTurbine`.
   *  * `WindTurbineFeatureSet` is a {@link Feature.Set} with 2 features `gearOilTemperatureAvgFeat` and `gearOilTemperatureMinFeat` on `WindTurbine`.
   *  * `gearOilTemperature` is a {@link Ann.Ts @ts} field on a referenced type via `data` field on `WindTurbine`. Please look at {@link TimedDataHeader} and {@link TimedDataPoint} for more information about normalization.
   */
  readonly interval?: string | null;
  withInterval(interval: string | null): EvalSpec;

  /**
   * Aggregation function per feature if we are merging features in this set by aggregating or dissaggregating on time
   * interval.
   *
   * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
   */
  readonly agg?: C3.Map<string | null, string | null> | string | null | null;
  withAgg(agg: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): EvalSpec;

  /**
   * Optionally globally unique id of a "snapshot" of a Feature.Set. {@link Feature.Set.Snapshot}s are immutable and can be used to
   * access "unchanging data" for the evaluation or training. Alternatively, in case of {@link Feature.Set#createSnapshot} API,
   * **snapshotId** is used to create a single snapshot. Please also refer to {@link CreateSnapshotSpec#sourceSnapshotId} if an existing
   * snapshot is to be used to create a new snapshot.
   * Please note that if the snapshotId is specified, then:
   * 1. it will be always used. (Even if Feature.Set is created with {@link Feature.Set#doNotMaterialize} as true)
   * 2. An error will be thrown if the snapshot doesn't exist.
   * 3. An error will be thrown if {@link #skipMaterialized} is set to true.
   */
  readonly snapshotId?: string | null;
  withSnapshotId(snapshotId: string | null): EvalSpec;

  /**
   * Allows the Feature/Feature.Set to be evaluated directly during runtime instead of fetching materialized Data
   * from Feature Store.
   * Depending on the combination of this field and {@link FeatureBase#doNotMaterialize}, the behavior of evalFeature*()
   * is as follows:
   *
   * |    Feature/FeatureSet    | skipMaterialized = true |  skipMaterialized = false   |
   * |--------------------------|-------------------------|-----------------------------|
   * | doNotMaterialize = True  |       compute data      |         compute data        |
   * | doNotMaterialize = False |       compute data      |   get materialized data     |
   */
  readonly skipMaterialized?: boolean;
  withSkipMaterialized(skipMaterialized: boolean): EvalSpec;

  /**
   * If set, eval will additionally store the {@link EvalMetricsResult result} on {@link Data.Pandas#_emr}.
   */
  readonly toEmr?: boolean;
  withToEmr(toEmr: boolean): EvalSpec;

  /**
   * Desired unit of evaluation. If specified, results will be converted to this unit.
   */
  readonly unitId?: string | null;
  withUnitId(unitId: string | null): EvalSpec;

  /**
   * Time zone treatment for timeseries.
   */
  readonly timeZone?: TimeZone | null;
  withTimeZone(timeZone: ITimeZone | null): EvalSpec;

  /**
   * length of this time-info in intervals. I.e. size of the timeseries this info represents.
   */
  readonly _size?: number | null;
  with_size(_size: number | null): EvalSpec;

  /**
   * true if time range is aligned with interval.
   */
  readonly _isAligned?: boolean;
  with_isAligned(_isAligned: boolean): EvalSpec;

  /**
   * The list of metrics that need to be overridden during evaluation
   */
  readonly overrideMetrics?: C3.Array<Metric | null>;
  withOverrideMetrics(overrideMetrics: C3.Array<Metric | null> | Array<IMetric | null>): EvalSpec;

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
  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): EvalSpec;

  /**
   * If set, returns actualized {@link Data} otherwise returns a lazy handle to actualize Data
   */
  readonly actualize?: boolean;
  withActualize(actualize: boolean): EvalSpec;

  /**
   * If set to true, eval functions will return a mutable instance of Data, otherwise return an immutable instance by default.
   * For now, if set to true, the returned instance will also be stateful.
   */
  readonly mutable?: boolean;
  withMutable(mutable: boolean): EvalSpec;

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
  static fromJson(json: any | null): EvalSpec | null;

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
  static fromJsonString(json: string | null): EvalSpec | null;

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
  static fromXmlString(xml: string | null): EvalSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): EvalSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): EvalSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): EvalSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): EvalSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<EvalSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<EvalSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): EvalSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): EvalSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): EvalSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): EvalSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): EvalSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): EvalSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): EvalSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): EvalSpec;

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
  withoutFieldAtPath(path: string): EvalSpec;

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
  withoutField(field: string | null): EvalSpec;

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
  withoutField(field: FieldType | null): EvalSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): EvalSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): EvalSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): EvalSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): EvalSpec;

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
  defaultField(field: string): EvalSpec;

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
  defaultField(field: FieldType): EvalSpec;

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
  unsetField(field: string): EvalSpec;

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
  unsetField(field: FieldType): EvalSpec;

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
  removeField(field: string): EvalSpec;

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
  removeField(field: FieldType): EvalSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): EvalSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): EvalSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): EvalSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): EvalSpec;

  mergeJson(json: any | null): EvalSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): EvalSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): EvalSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<EvalSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<EvalSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<EvalSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<EvalSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<EvalSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, EvalSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, EvalSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<EvalSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<EvalSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): EvalSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): EvalSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): EvalSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): EvalSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): EvalSpec;

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
  static make(fields: any, withDefaults?: boolean): EvalSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): EvalSpec;

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
  afterMake(): EvalSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): EvalSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<EvalSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): EvalSpec;

  /**
   * Get 1 year timerange from 12 months ago to now, range always starts on first date of a month.
   * Ex: current time - 2016-08-23, one should get 2015-08-01 to 2016-08-01 timerange
   */
  static last12Months(): EvalSpec | null;

  /**
   * Get 1 year timerange from 24 months ago to 12 months ago, range always starts on first date of a month.
   * Ex: current time - 2016-08-23, one should get 2014-08-01 to 2015-08-01 timerange.
   */
  static prevLast12Months(): EvalSpec | null;

  /**
   * API to de-dup time ranges and sort it in ascending order by start, end and combine consecutive time periods
   * E.g. ["2014-01-01" -> "2015-01-01"], ["2015-01-01" -> "2016-01-01"] => ["2014-01-01" -> "2016-01-01"]
   * @param timeRanges
   *                that need to be sorted and deduped
   * @return deduped and sorted time ranges with merged consecutive ranges
   */
  static combineAndSort(timeRanges: C3.Array<TimeRange | null> | null): C3.Array<EvalSpec | null>;

  /**
   * Merge various time ranges into a larger range
   * E.g. ["2014-01-01" -> "2014-02-01"], ["2015-01-01" -> "2016-01-01"] => {"2014-01-01" -> "2016-01-01"}
   */
  static coalesce(timeRanges: C3.Array<TimeRange | null> | null): EvalSpec | null;

  /**
   * Whether this time range covers time
   */
  contains(time: DateTime): boolean;

  /**
   * Whether this time range covers input time range
   */
  contains(othr: TimeRange | null): boolean;

  /**
   * Returns whether this time range intersects with the other
   */
  intersects(othr: TimeRange | null): boolean;

  /**
   * Returns overlap TimeRange with the input TimeRange. Returns null if no overlap found
   */
  overlap(othr: TimeRange | null): EvalSpec | null;

  /**
   * @returns TimeRange from pretty printed TimeRange
   * e.g. var tr = TimeRange.fromPrettyPrint('2017-01-01::2017-02-01')
   *      tr.start.toString() will be  '2017-01-01'
   *      tr.end.toString() will be '2017-02-01'
   */
  static fromPrettyPrint(prettyPrint: string): EvalSpec;

  /**
   * Construct array of TimeRange from map<datetime, datetime>
   */
  static fromMap(map: C3.Map<DateTime | null, DateTime | null>): C3.Array<EvalSpec | null>;

  /**
   * @return a prettified string representation of the TimeRange
   * e.g. TimeRange.make({start: '2017-01-01', end: '2017-02-01'}).prettyPrint()
   *      return 2017-01-01::2017-02-01
   */
  prettyPrint(): string;

  /**
   * Apply duration shift to the existing time range
   */
  shift(offset: Duration): EvalSpec;

  /**
   * @return new time info shifted by provided length. It will shift the dates by the specified number of intervals
   */
  shift(length: number): TimeInfo | null;

  /**
   * Parsed projection for the given type for #projection
   */
  projectionParsed(evalTypeMeta: TypeMeta): C3.Array<Expr | null>;

  /**
   * Individual projection expressions in #projection
   */
  projectionParts(): C3.Array<string | null>;

  /**
   * if one of #agg, #asOFeature, #merger is set, return true; otherwise false
   */
  hasAnyMergeLogic(): boolean;

  /**
   * check if merging is valid: only one of #agg, #merger, #asOfFeature should be set
   */
  isMergeValid(): boolean;

  /**
   * Checks whether the aggregation operation contains valid pandas operation(s)
   */
  isValidAgg(): boolean;

  /**
   * Checks whether the interval rule is a valid pandas rule
   */
  isValidInterval(): boolean;

  /**
   * This function returns the validated columns for the input feature set based on the {@link #projection} field of the spec.
   * If there are invalid columns of this spec, errors will be thrown. See {@link Feature.Set#validateColumns} for how to validate the columns.
   * For example
   * ```python
   * ## Using a metric feature set as example, but the usage is the same for lambda feature set
   * feats = ['f1', 'f2', 'f3', 'f4']
   * fs = c3.Feature.Set(name='predict', id='WindTurbine#predict', features=feats, subjectType=c3.WindTurbine).create()
   * # 1. Returns subset of columns
   * spec = c3.EvalFeatureSetBatch(projection='f1, f3')
   * spec.validatedColumns(fs) # This returns ['f1', 'f3']
   * # 2. Fails if projection contains not exists columns
   * spec = c3.EvalFeatureSetBatch(projection='f1, f3, invalidFeat')
   * spec.validatedColumns(fs) # Error: The following columns don't exist in the feature set predict: ['invalidFeat']
   * # 3. Fails if projection contains duplicate columns
   * spec = c3.EvalFeatureSetBatch(projection='f1, f3, f1')
   * spec.validatedColumns(fs) # Error: Features [f1] must not repeat in projection
   * ```
   */
  validatedColumns(fs: Feature.Set): C3.Array<string | null>;

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
  withStartAndEnd(start: DateTime, end?: DateTime | null): TimeInfo;

  /**
   * @return new time information that spans over time range needed to compute a window function.
   */
  extendForWindow(offset: number, span: number): TimeInfo | null;

  /**
   * @return new instance of timeseries time info.
   */
  static from(range: TimeRange, interval: string, timeZone?: TimeZone | null): TimeInfo;

  static from(start: DateTime, end: DateTime, interval: string, timeZone?: TimeZone | null, align?: boolean): TimeInfo;

  static from(start: DateTime, end: DateTime, interval: string, timeZone?: TimeZone | null, _size?: number | null, _isAligned?: boolean): TimeInfo;

  /**
   * @return new instance of time info based on the Timeseries c3 obj.
   */
  static fromTimeseries(ts: Timeseries<any>): TimeInfo;

  /**
   * @return new instance of time info based on the spec c3 obj.
   */
  static fromSpecObj(spec?: Obj | null, align?: boolean): TimeInfo;

  /**
   * convert input map into the desired timezone
   */
  static convert(timeZone: TimeZone, inputMap: C3.Map<DateTime | null, DateTime | null> | null): C3.Map<DateTime | null, DateTime | null>;

  /**
   * Convert the given dates to the specified time zone
   *
   * @param timeZone
   * @param dates
   * @return
   */
  static convert(timeZone: TimeZone, dates: C3.Array<DateTime | null> | null): C3.Array<DateTime | null>;

  /**
   * Converts the given start & end pair to the given time zone
   *
   * @param start
   * @param end
   * @param timeZone
   * @return
   */
  static convert(timeZone: TimeZone, start: DateTime, end: DateTime): Pair<DateTime | null, DateTime | null> | null;

  static extractTimeZoneShifts(dates?: C3.Array<DateTime | null>): C3.Array<DateTime | null>;

  static applyAndConvert(timeZone?: TimeZone | null, start?: DateTime | null, end?: DateTime | null, tzShifts?: C3.Array<DateTime | null>): Pair<DateTime | null, DateTime | null> | null;

  /**
   * Apply time zones to dates according to the times when the shift happened
   *
   * @param dates
   * @param tzShifts
   * @return
   */
  static applyTimeZoneShifts(dates: C3.Array<DateTime | null> | null, tzShifts?: C3.Array<DateTime | null>): C3.Array<DateTime | null>;

  /**
   * Apply time zones to dates according to the times when the shift happened
   *
   * @param inputMap
   * @param tzShifts
   * @return
   */
  static applyTimeZoneShifts(inputMap: C3.Map<DateTime | null, DateTime | null> | null, tzShifts?: C3.Array<DateTime | null>): C3.Map<DateTime | null, DateTime | null>;

  static applyTimeZoneShifts(start?: DateTime | null, end?: DateTime | null, tzShifts?: C3.Array<DateTime | null>): Pair<DateTime | null, DateTime | null> | null;

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
  static fromValueCount(count: number, period?: string | null): TimeInfo;

  /**
   * @return EvalSpec by removing the following fields: "ids", "id", "start", "end", "filter"
   */
  withoutAnyFilter(): EvalSpec;

  /**
   * Resultant type for this spec as a result of {@see Evaluatable#eval}
   */
  dataType(evalType: Type): TupleType;

  /**
   * Validates if the spec if correct
   * @param singleValued
   *                If set, validation validates that either #projection has exactly 1 output value
   */
  validate(singleValued?: boolean): void;

  /**
   * Default aggregation function for {@link Data} depending on underlying agg function
   *
   * Looks into the aggregation functions for underlying {@link SimpleMetric} and infers the default aggregation function
   */
  dataDefaultAgg(evalType: Type): string | null;

  /**
   * @return kind of evaluation for this EvalSpec
   */
  kind(evalType: Type): string | null;

  /**
   * Reverse map of projection to aliased name. E.g. projection="{'foo' : a+b }" => {"a+b"="foo"}
   * If there is no alias, return value will be an empty map
   */
  get aliases(): C3.Map<string | null, string | null>;
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

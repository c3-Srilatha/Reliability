// TypeScript definitions for the C3 type EvaluateArrowStreamSpec

/**
 * Specification of which Objs to bring back and which fields to bring back in them for a
 * {@link PersistableEvaluatablee#evaluateArrowStream} call.
 *
 * @remarks this represents a value passed to a method that expects an instance of EvaluateArrowStreamSpec
 */
declare interface IEvaluateArrowStreamSpec {

  /**
   * Comma separated list of expressions to be evaluated on each processed obj.  If projections can be handled
   * directly in SQL (by the db engine), they will be, otherwise they will be handled by the expression with certain
   * reduced functionality (e.g. grouping and ordering is not supported on projections handled by the expression
   * engine).
   */
  projection: string;

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
   * Flag indicating that the normal suppression of hidden seed data should not be applied.  Only used internally for
   * proper seed data handling.  For types that do not mixin SeedData, this is ignored.
   */
  fetchHiddenSeedData?: boolean;

  /**
   * Flag indicating that only Obj instances that are extension types of the requested type should not be returned.
   * For example, if FixedAsset.fetch is called with this option, then Objs of type Facility, etc. will not be returned.
   */
  excludeExtensions?: boolean;

  /**
   * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
   * to return only the values that were effective at that time.  This should not be specified along with {@link timeRange}.
   */
  asOf?: DateTime | Date | string | null;

  /**
   * If true and the maximum number of bind variables has been reached for the query, additional values will be added
   * to the query as literal values, quoted and escaped as necessary.
   */
  allowLiteralOnBindVariableOverflow?: boolean;

  /**
   * If true, a dedicated connection will be used for the operation.  Otherwise, a shared read connection may be
   * used.
   */
  useDedicatedConnection?: boolean;

  /**
   * When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements on
   * the connection used will be set with this timeout value.  Note that this will apply to all child actions
   * (synchronous only) that occur as part of the action this is called on.  Also note this applies to the execution of
   * the query itself and does not apply to total time used to read/process the entire result set or processing child
   * queries.
   *
   * Note that this will be ignored for any backing datastore that does not support it.
   */
  stmtTimeoutMs?: number | null;

  /**
   * If an error occurs deserializing a persisted json value for a value type that accepts either string (or boxed
   * string), the error text will be returned as the value.  If the value type doesn't accept either string (or boxed
   * string) and this is true, null will be returned as the value, otherwise an exception will be thrown.
   */
  dontThrowJsonDeserErrors?: boolean;

  /**
   * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
   * to return only the values that were effective within that time range.  If either the start/end time is null, then
   * they are assumed to be BOT/EOT.  This should not be specified along with {@link asOf}.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  timeRange?: ITimeRange | null;

  /**
   * Set to true to fetch instances that aren't of the fetch type but are instance of its base types. Used for auto
   * promotion in upsert.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  timedFetchParentField?: string | null;

  includeBaseTypes?: boolean;

  /**
   * Set to true to not have the viewInclude limit the input include.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  ignoreViewInclude?: boolean;

  /**
   * Comma separated list of projections to order the results by.  Each order spec must exactly match a projection
   * spec (or a projection spec as the argument to the descending function) and only projections that will be handled
   * by the db engine are allowed.
   */
  order?: string | null;

  /**
   * Offset to use for paged evaluation.  Indicates the first computed result to return. Default is 0 (first).
   */
  offset?: number | null;

  /**
   * Maximum number of results to return (starting from {@link offset}).  If there are results than were requested,
   * only those will be returned.  If there are additional results beyond what was requested, then
   * {@link EvaluateResult.hasMore} will be set to true.
   *
   * Default is to evaluate 2000 Objs. -1 evaluates all all.
   */
  limit?: number | null;

  /**
   * Numeric id of hardcoded sql registered with the system for special purpose evaluation that couldn't be handled
   * generically.
   * This should ONLY NEVER BE USED unless you have David's and Tom's permission and if you are either the
   * author of the hardcoded sql or know exactly what it is.  If you don't know, DON'T USE IT.
   */
  sqlId?: number | null;

  /**
   * Disables authorization (both Acl and expression based authorization) for the request.  In general, the same
   * authorization that would be applied for a {@link Persistable#fetch} call will be applied unless this is set to
   * true.
   */
  disableAuthz?: boolean;

  /**
   * In general, projections are processed by the db engine when they can be, and by the expression engine when they
   * can't.  However, under certain rare circumstances, a projection may be sent to the db engine that can't be
   * handled properly there (most likely due to a bug so please report if you encounter one).  In those cases, set
   * this flag to true to indicate that the expression engine should handle all projections (though with possible
   * reduced performance).
   */
  forceExprEval?: boolean;

  /**
   * In general, projections are processed by the db engine when they can be, and by the expression engine when they
   *  can't.  However, under certain rare circumstances, a projection may be sent to the expression engine that can
   * be handled properly by the db engine.  This can cause undesired results when the behavior of the 2 may be
   * different (that is really a bug but requires a rewrite of the expression engine to address).  In this situation
   * set this flag to force the db engine to perform the evaluation.
   */
  forceDbEngineEval?: boolean;

  /**
   * Start of time range for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.
   * Moving forward {@link Evaluatable#tsEval} should be used
   * instead.
   *
   * @see MetricEvaluatable
   */
  timeRangeStart?: DateTime | Date | string | null;

  /**
   * End of time range for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.
   * Moving forward {@link Evaluatable#tsEval} should be used
   * instead.
   *
   * @see MetricEvaluatable
   */
  timeRangeEnd?: DateTime | Date | string | null;

  /**
   * Grain for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.  Moving forward
   * {@link Evaluatable#tsEval} should be used instead.
   *
   * @see MetricEvaluatable
   */
  grain?: string | null;

  /**
   * Interval for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.  Moving forward
   * {@link Evaluatable#tsEval} should be used instead.
   */
  interval?: string | null;

  /**
   * Time zone handling for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.
   * Moving forward {@link MetricEvaluatable.evalMetric} or {@link MetricEvaluatable.evalMetrics} should be used
   * instead.
   *
   * @see MetricEvaluatable
   */
  timeZone?: string | null;

  /**
   * Flag to request generation of the query plan in addition to returning the data.  Can be used for performance
   * analysis, etc.
   */
  explain?: boolean;

  /**
   * Maximum number of rows to include in a single batch
   */
  batchSize: number;
}

/**
 * Specification of which Objs to bring back and which fields to bring back in them for a
 * {@link PersistableEvaluatablee#evaluateArrowStream} call.
 *
 * @remarks this represents a made instance of EvaluateArrowStreamSpec
 */
declare class EvaluateArrowStreamSpec extends Obj {

  /**
   * Comma separated list of expressions to be evaluated on each processed obj.  If projections can be handled
   * directly in SQL (by the db engine), they will be, otherwise they will be handled by the expression with certain
   * reduced functionality (e.g. grouping and ordering is not supported on projections handled by the expression
   * engine).
   */
  readonly projection: string;
  withProjection(projection: string): EvaluateArrowStreamSpec;

  /**
   * Comma separated list of projections to perform SQL style grouping on.  Each group spec must exactly match a
   * projection spec and only projections that will be handled by the db engine are allowed.
   */
  readonly group?: string | null;
  withGroup(group: string | null): EvaluateArrowStreamSpec;

  /**
   * SQL style having expression.  Only valid when group is specified.  Only grouped projections can be referenced in
   * the having expression.
   */
  readonly having?: string | null;
  withHaving(having: string | null): EvaluateArrowStreamSpec;

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
  withFilter(filter: string | null): EvaluateArrowStreamSpec;

  /**
   * Variables values to substitute in filter expression. CURRENTLY UNDER CONSTRUCTION!
   */
  readonly vars?: C3.Map<string | null, Obj | null>;
  withVars(vars: C3.Map<string | null, Obj | null> | {[key: string | null]: IObj | null}): EvaluateArrowStreamSpec;

  /**
   * Flag indicating that the normal suppression of hidden seed data should not be applied.  Only used internally for
   * proper seed data handling.  For types that do not mixin SeedData, this is ignored.
   */
  readonly fetchHiddenSeedData?: boolean;
  withFetchHiddenSeedData(fetchHiddenSeedData: boolean): EvaluateArrowStreamSpec;

  /**
   * Flag indicating that only Obj instances that are extension types of the requested type should not be returned.
   * For example, if FixedAsset.fetch is called with this option, then Objs of type Facility, etc. will not be returned.
   */
  readonly excludeExtensions?: boolean;
  withExcludeExtensions(excludeExtensions: boolean): EvaluateArrowStreamSpec;

  /**
   * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
   * to return only the values that were effective at that time.  This should not be specified along with {@link timeRange}.
   */
  readonly asOf?: DateTime | null;
  withAsOf(asOf: DateTime | Date | string | null): EvaluateArrowStreamSpec;

  /**
   * If true and the maximum number of bind variables has been reached for the query, additional values will be added
   * to the query as literal values, quoted and escaped as necessary.
   */
  readonly allowLiteralOnBindVariableOverflow?: boolean;
  withAllowLiteralOnBindVariableOverflow(allowLiteralOnBindVariableOverflow: boolean): EvaluateArrowStreamSpec;

  /**
   * If true, a dedicated connection will be used for the operation.  Otherwise, a shared read connection may be
   * used.
   */
  readonly useDedicatedConnection?: boolean;
  withUseDedicatedConnection(useDedicatedConnection: boolean): EvaluateArrowStreamSpec;

  /**
   * When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements on
   * the connection used will be set with this timeout value.  Note that this will apply to all child actions
   * (synchronous only) that occur as part of the action this is called on.  Also note this applies to the execution of
   * the query itself and does not apply to total time used to read/process the entire result set or processing child
   * queries.
   *
   * Note that this will be ignored for any backing datastore that does not support it.
   */
  readonly stmtTimeoutMs?: number | null;
  withStmtTimeoutMs(stmtTimeoutMs: number | null): EvaluateArrowStreamSpec;

  /**
   * If an error occurs deserializing a persisted json value for a value type that accepts either string (or boxed
   * string), the error text will be returned as the value.  If the value type doesn't accept either string (or boxed
   * string) and this is true, null will be returned as the value, otherwise an exception will be thrown.
   */
  readonly dontThrowJsonDeserErrors?: boolean;
  withDontThrowJsonDeserErrors(dontThrowJsonDeserErrors: boolean): EvaluateArrowStreamSpec;

  /**
   * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
   * to return only the values that were effective within that time range.  If either the start/end time is null, then
   * they are assumed to be BOT/EOT.  This should not be specified along with {@link asOf}.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  readonly timeRange?: TimeRange | null;
  withTimeRange(timeRange: ITimeRange | null): EvaluateArrowStreamSpec;

  /**
   * Set to true to fetch instances that aren't of the fetch type but are instance of its base types. Used for auto
   * promotion in upsert.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  readonly timedFetchParentField?: string | null;
  withTimedFetchParentField(timedFetchParentField: string | null): EvaluateArrowStreamSpec;

  readonly includeBaseTypes?: boolean;
  withIncludeBaseTypes(includeBaseTypes: boolean): EvaluateArrowStreamSpec;

  /**
   * Set to true to not have the viewInclude limit the input include.
   *
   * INTERNAL USE ONLY - DO NOT USE
   */
  readonly ignoreViewInclude?: boolean;
  withIgnoreViewInclude(ignoreViewInclude: boolean): EvaluateArrowStreamSpec;

  /**
   * Comma separated list of projections to order the results by.  Each order spec must exactly match a projection
   * spec (or a projection spec as the argument to the descending function) and only projections that will be handled
   * by the db engine are allowed.
   */
  readonly order?: string | null;
  withOrder(order: string | null): EvaluateArrowStreamSpec;

  /**
   * Offset to use for paged evaluation.  Indicates the first computed result to return. Default is 0 (first).
   */
  readonly offset?: number | null;
  withOffset(offset: number | null): EvaluateArrowStreamSpec;

  /**
   * Maximum number of results to return (starting from {@link offset}).  If there are results than were requested,
   * only those will be returned.  If there are additional results beyond what was requested, then
   * {@link EvaluateResult.hasMore} will be set to true.
   *
   * Default is to evaluate 2000 Objs. -1 evaluates all all.
   */
  readonly limit?: number | null;
  withLimit(limit: number | null): EvaluateArrowStreamSpec;

  /**
   * Numeric id of hardcoded sql registered with the system for special purpose evaluation that couldn't be handled
   * generically.
   * This should ONLY NEVER BE USED unless you have David's and Tom's permission and if you are either the
   * author of the hardcoded sql or know exactly what it is.  If you don't know, DON'T USE IT.
   */
  readonly sqlId?: number | null;
  withSqlId(sqlId: number | null): EvaluateArrowStreamSpec;

  /**
   * Disables authorization (both Acl and expression based authorization) for the request.  In general, the same
   * authorization that would be applied for a {@link Persistable#fetch} call will be applied unless this is set to
   * true.
   */
  readonly disableAuthz?: boolean;
  withDisableAuthz(disableAuthz: boolean): EvaluateArrowStreamSpec;

  /**
   * In general, projections are processed by the db engine when they can be, and by the expression engine when they
   * can't.  However, under certain rare circumstances, a projection may be sent to the db engine that can't be
   * handled properly there (most likely due to a bug so please report if you encounter one).  In those cases, set
   * this flag to true to indicate that the expression engine should handle all projections (though with possible
   * reduced performance).
   */
  readonly forceExprEval?: boolean;
  withForceExprEval(forceExprEval: boolean): EvaluateArrowStreamSpec;

  /**
   * In general, projections are processed by the db engine when they can be, and by the expression engine when they
   *  can't.  However, under certain rare circumstances, a projection may be sent to the expression engine that can
   * be handled properly by the db engine.  This can cause undesired results when the behavior of the 2 may be
   * different (that is really a bug but requires a rewrite of the expression engine to address).  In this situation
   * set this flag to force the db engine to perform the evaluation.
   */
  readonly forceDbEngineEval?: boolean;
  withForceDbEngineEval(forceDbEngineEval: boolean): EvaluateArrowStreamSpec;

  /**
   * Start of time range for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.
   * Moving forward {@link Evaluatable#tsEval} should be used
   * instead.
   *
   * @see MetricEvaluatable
   */
  readonly timeRangeStart?: DateTime | null;
  withTimeRangeStart(timeRangeStart: DateTime | Date | string | null): EvaluateArrowStreamSpec;

  /**
   * End of time range for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.
   * Moving forward {@link Evaluatable#tsEval} should be used
   * instead.
   *
   * @see MetricEvaluatable
   */
  readonly timeRangeEnd?: DateTime | null;
  withTimeRangeEnd(timeRangeEnd: DateTime | Date | string | null): EvaluateArrowStreamSpec;

  /**
   * Grain for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.  Moving forward
   * {@link Evaluatable#tsEval} should be used instead.
   *
   * @see MetricEvaluatable
   */
  readonly grain?: string | null;
  withGrain(grain: string | null): EvaluateArrowStreamSpec;

  /**
   * Interval for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.  Moving forward
   * {@link Evaluatable#tsEval} should be used instead.
   */
  readonly interval?: string | null;
  withInterval(interval: string | null): EvaluateArrowStreamSpec;

  /**
   * Time zone handling for timeseries based evaluation.  Support for timeseries based evaluation is deprecated.
   * Moving forward {@link MetricEvaluatable.evalMetric} or {@link MetricEvaluatable.evalMetrics} should be used
   * instead.
   *
   * @see MetricEvaluatable
   */
  readonly timeZone?: string | null;
  withTimeZone(timeZone: string | null): EvaluateArrowStreamSpec;

  /**
   * Flag to request generation of the query plan in addition to returning the data.  Can be used for performance
   * analysis, etc.
   */
  readonly explain?: boolean;
  withExplain(explain: boolean): EvaluateArrowStreamSpec;

  /**
   * Maximum number of rows to include in a single batch
   */
  readonly batchSize: number;
  withBatchSize(batchSize: number): EvaluateArrowStreamSpec;

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
  static fromJson(json: any | null): EvaluateArrowStreamSpec | null;

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
  static fromJsonString(json: string | null): EvaluateArrowStreamSpec | null;

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
  static fromXmlString(xml: string | null): EvaluateArrowStreamSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): EvaluateArrowStreamSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): EvaluateArrowStreamSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): EvaluateArrowStreamSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): EvaluateArrowStreamSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<EvaluateArrowStreamSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<EvaluateArrowStreamSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): EvaluateArrowStreamSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): EvaluateArrowStreamSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): EvaluateArrowStreamSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): EvaluateArrowStreamSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): EvaluateArrowStreamSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): EvaluateArrowStreamSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): EvaluateArrowStreamSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): EvaluateArrowStreamSpec;

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
  withoutFieldAtPath(path: string): EvaluateArrowStreamSpec;

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
  withoutField(field: string | null): EvaluateArrowStreamSpec;

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
  withoutField(field: FieldType | null): EvaluateArrowStreamSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): EvaluateArrowStreamSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): EvaluateArrowStreamSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): EvaluateArrowStreamSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): EvaluateArrowStreamSpec;

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
  defaultField(field: string): EvaluateArrowStreamSpec;

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
  defaultField(field: FieldType): EvaluateArrowStreamSpec;

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
  unsetField(field: string): EvaluateArrowStreamSpec;

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
  unsetField(field: FieldType): EvaluateArrowStreamSpec;

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
  removeField(field: string): EvaluateArrowStreamSpec;

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
  removeField(field: FieldType): EvaluateArrowStreamSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): EvaluateArrowStreamSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): EvaluateArrowStreamSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): EvaluateArrowStreamSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): EvaluateArrowStreamSpec;

  mergeJson(json: any | null): EvaluateArrowStreamSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): EvaluateArrowStreamSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): EvaluateArrowStreamSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<EvaluateArrowStreamSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<EvaluateArrowStreamSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<EvaluateArrowStreamSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<EvaluateArrowStreamSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<EvaluateArrowStreamSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, EvaluateArrowStreamSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, EvaluateArrowStreamSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<EvaluateArrowStreamSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<EvaluateArrowStreamSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): EvaluateArrowStreamSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): EvaluateArrowStreamSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): EvaluateArrowStreamSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): EvaluateArrowStreamSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): EvaluateArrowStreamSpec;

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
  static make(fields: any, withDefaults?: boolean): EvaluateArrowStreamSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): EvaluateArrowStreamSpec;

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
  afterMake(): EvaluateArrowStreamSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): EvaluateArrowStreamSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<EvaluateArrowStreamSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): EvaluateArrowStreamSpec;

  /**
   * Parsed projection for the given type for #projection
   */
  projectionParsed(evalTypeMeta: TypeMeta): C3.Array<Expr | null>;

  /**
   * Individual projection expressions in #projection
   */
  projectionParts(): C3.Array<string | null>;

  /**
   * Creates timed fetch filter based on the type fetch will be invoked on
   */
  timedFetchFilter(type: Type): string | null;

  /**
   * Determines if the given spec has {@link #timeRange} or {@link #asOf} field set
   */
  hasTimeRange(): boolean;
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

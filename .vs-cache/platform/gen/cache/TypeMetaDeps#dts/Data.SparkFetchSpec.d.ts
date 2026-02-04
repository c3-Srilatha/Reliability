// TypeScript definitions for the C3 type Data.SparkFetchSpec

/**
 * @remarks this represents a value passed to a method that expects an instance of Data.SparkFetchSpec
 */
declare namespace Data {
  export interface ISparkFetchSpec {

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
     * Specifies which fields to bring back values for in the returned Obj instances.  Include specifications are
     * logically a list of field paths.  The following examples illustrate the supported ways to specify them:
     *
     * - Simple list of fields - "[field1, field2, field3]"
     *
     * - List of fields involving references and non-reference fields - "[refField1.name, refField1.refField2.name]"
     *
     * - Same as above with Obj notation - "[{refField1: [name, {refField2: [name]}]}]"
     *
     * - Using array/mapp '[index/key]' references
     *
     *   [arrayField[1]] - Array element with key '1'
     *
     *   [mappField['k1']] - Mapp element with key 'k1'
     *
     *   [fkeyArrayField[1] - Fkey array element at offset '1'
     *
     *   [arrayField[1].(name == 'foo')] Array element with key '1' if it matches name filter
     *
     *   [arrayField.(name == 'foo')[1]] array element with offset '1' that matches name filter
     *
     *   [fkeyField.(offset() == 0 && limit() == 3)] offset/limit applied to fkey
     *
     *   [fkeyField.(pos() >= 0 && pos() < 3)] alternate way to specify offset/limit applied to fkey
     *
     * - Return all fields in obj - Either not specified or "[this]"  Note that for external references, only the ids are
     *   returned unless an explicit include indicates that data from the reference should be returned (see below).
     *   Also, fkey fields (e.g. fields defined like arry: SomeType(fkeyField)) are also only brought back if specifically
     *   included.
     *
     * - Using dot query to filter arry/mapp results - "[refArry.(name == 'foo')]" or "[{refArry: [id]}.(name == 'foo')]"
     */
    include?: string | null;

    /**
     * The `meta` field is included by default when fetching data.  Set this to true to avoid it from being included.
     * This can reduce the i/o for fetching large amounts of data when the `meta` isn't required.
     */
    excludeMeta?: boolean;

    /**
     * If true, then all read calcs will be returned by default (including for any included child refs that specify
     * the default include), if false, only those specifically requested via the `include` will be returned.
     */
    includeReadCalcs?: boolean;

    /**
     * Flag indicating that any stored calc fields being returned are calculated to have up to date values as part of this
     * request.  This should only be used if up to date data is absolutely required and there is the possibility, due to
     * asynchronous processing delay of stored calc fields, that they may not be up to date.
     */
    refreshCalcFields?: boolean;

    /**
     * List of stored calc fields to recalculate.  Ignored if {@link refreshCalcFields} is false.  If
     * {@link refreshCalcFields} is true and this is not specified, then all stored calc fields will be recalculated.
     */
    calcFieldsToRefresh?: C3.Array<string | null> | Array<string | null>;

    /**
     * Flag indicating that the ACL authorization check should be done even in cases when it wouldn't normally be (e.g.
     * request is by "authorizer" or ACL is temporarily disabled via EnableAclPrivileges).
     */
    forceAcl?: boolean;

    /**
     * Flag to request generation of the query plan in addition to returning the data.  Can be used for performance
     * analysis, etc.
     */
    explain?: boolean;

    /**
     * Flag indicating that the input parameters should all be validated (including database syntax error checking) and
     * the query plan should be generated but not data should be retrieved from the database or returned.  Useful for
     * validating filter/include syntax and doing preventive performance analysis without actually issuing database
     * queries.
     */
    validateOnly?: boolean;

    /**
     * Caller controllable hints to alter the way that queries are generated/executed in a fetch call.  Hints will
     * NEVER change the returned results.
     */
    hints?: IFetchHints | null;

    /**
     * If true, the fetch will be done from the secondary datastore for the type.  If no secondary datastore is defined
     * an exception will be thrown.  If the fetch references types that don't have a secondary datastore defined, the
     * behavior will be the same as if those types without a secondary datastore (or one that doesn't match) were in
     * a facaded tenant/tag.
     */
    useSecondaryDatastore?: boolean;

    /**
     * For array fields specified in the include, if a dot query expression is provided to filter the array results the
     * returned array is compressed to remove non matching elements.  As a result the original array indexes are lost.
     * Set this to true to preserve the original array indexes in this situation.
     */
    preserveArrayIndexes?: boolean;

    /**
     * By default, entity references retrieved via {@link Persistable.fetch} and {@link Persistable.get} only include the
     * `id` of the reference, unless additional fields in the referenced type are added as part of the include spec.
     * Also, for references to extended/parametric types, the returned instances will have the type of the the field's
     * reference type, rather than the concrete type of the actual instances themselves.
     *
     * If this flag is set to true, then those instances will be of the correct concrete type if they aren't already.
     * Note that this requires additional queries/joins (up to 1 for each referenced field) so it should only be used when
     * having the instances of the concrete type is necessary.
     */
    resolveRefTypes?: boolean;

    /**
     * Indicates if resulting Spark Dataframe should be exploded and flattened.
     */
    flatten?: boolean;

    /**
     * Number of rows to retrieve in a single fetch partition.
     */
    partitionSize?: number | null;

    /**
     * Number of rows to include in a single batch when sending results to Spark cluster.
     */
    batchSize?: number | null;
  }
}

/**
 * @remarks this represents a made instance of Data.SparkFetchSpec
 */
declare namespace Data {
  export class SparkFetchSpec extends Obj {

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
    withOrder(order: string | null): Data.SparkFetchSpec;

    /**
     * Offset to use for paged reads.
     */
    readonly offset?: number | null;
    withOffset(offset: number | null): Data.SparkFetchSpec;

    /**
     * Maximum number of Objs to return (starting from {@link offset}).  If there are fewer rows than were requested, only
     * those will be returned.  If there are additional rows beyond what was requested, then {@link FetchResult.hasMore}
     * will be set to true.
     *
     * -1 returns all.
     */
    readonly limit?: number | null;
    withLimit(limit: number | null): Data.SparkFetchSpec;

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
    withFilter(filter: string | null): Data.SparkFetchSpec;

    /**
     * Variables values to substitute in filter expression. CURRENTLY UNDER CONSTRUCTION!
     */
    readonly vars?: C3.Map<string | null, Obj | null>;
    withVars(vars: C3.Map<string | null, Obj | null> | {[key: string | null]: IObj | null}): Data.SparkFetchSpec;

    /**
     * Flag indicating that the normal suppression of hidden seed data should not be applied.  Only used internally for
     * proper seed data handling.  For types that do not mixin SeedData, this is ignored.
     */
    readonly fetchHiddenSeedData?: boolean;
    withFetchHiddenSeedData(fetchHiddenSeedData: boolean): Data.SparkFetchSpec;

    /**
     * Flag indicating that only Obj instances that are extension types of the requested type should not be returned.
     * For example, if FixedAsset.fetch is called with this option, then Objs of type Facility, etc. will not be returned.
     */
    readonly excludeExtensions?: boolean;
    withExcludeExtensions(excludeExtensions: boolean): Data.SparkFetchSpec;

    /**
     * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
     * to return only the values that were effective at that time.  This should not be specified along with {@link timeRange}.
     */
    readonly asOf?: DateTime | null;
    withAsOf(asOf: DateTime | Date | string | null): Data.SparkFetchSpec;

    /**
     * If true and the maximum number of bind variables has been reached for the query, additional values will be added
     * to the query as literal values, quoted and escaped as necessary.
     */
    readonly allowLiteralOnBindVariableOverflow?: boolean;
    withAllowLiteralOnBindVariableOverflow(allowLiteralOnBindVariableOverflow: boolean): Data.SparkFetchSpec;

    /**
     * If true, a dedicated connection will be used for the operation.  Otherwise, a shared read connection may be
     * used.
     */
    readonly useDedicatedConnection?: boolean;
    withUseDedicatedConnection(useDedicatedConnection: boolean): Data.SparkFetchSpec;

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
    withStmtTimeoutMs(stmtTimeoutMs: number | null): Data.SparkFetchSpec;

    /**
     * If an error occurs deserializing a persisted json value for a value type that accepts either string (or boxed
     * string), the error text will be returned as the value.  If the value type doesn't accept either string (or boxed
     * string) and this is true, null will be returned as the value, otherwise an exception will be thrown.
     */
    readonly dontThrowJsonDeserErrors?: boolean;
    withDontThrowJsonDeserErrors(dontThrowJsonDeserErrors: boolean): Data.SparkFetchSpec;

    /**
     * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
     * to return only the values that were effective within that time range.  If either the start/end time is null, then
     * they are assumed to be BOT/EOT.  This should not be specified along with {@link asOf}.
     *
     * INTERNAL USE ONLY - DO NOT USE
     */
    readonly timeRange?: TimeRange | null;
    withTimeRange(timeRange: ITimeRange | null): Data.SparkFetchSpec;

    /**
     * Set to true to fetch instances that aren't of the fetch type but are instance of its base types. Used for auto
     * promotion in upsert.
     *
     * INTERNAL USE ONLY - DO NOT USE
     */
    readonly timedFetchParentField?: string | null;
    withTimedFetchParentField(timedFetchParentField: string | null): Data.SparkFetchSpec;

    readonly includeBaseTypes?: boolean;
    withIncludeBaseTypes(includeBaseTypes: boolean): Data.SparkFetchSpec;

    /**
     * Set to true to not have the viewInclude limit the input include.
     *
     * INTERNAL USE ONLY - DO NOT USE
     */
    readonly ignoreViewInclude?: boolean;
    withIgnoreViewInclude(ignoreViewInclude: boolean): Data.SparkFetchSpec;

    /**
     * Specifies which fields to bring back values for in the returned Obj instances.  Include specifications are
     * logically a list of field paths.  The following examples illustrate the supported ways to specify them:
     *
     * - Simple list of fields - "[field1, field2, field3]"
     *
     * - List of fields involving references and non-reference fields - "[refField1.name, refField1.refField2.name]"
     *
     * - Same as above with Obj notation - "[{refField1: [name, {refField2: [name]}]}]"
     *
     * - Using array/mapp '[index/key]' references
     *
     *   [arrayField[1]] - Array element with key '1'
     *
     *   [mappField['k1']] - Mapp element with key 'k1'
     *
     *   [fkeyArrayField[1] - Fkey array element at offset '1'
     *
     *   [arrayField[1].(name == 'foo')] Array element with key '1' if it matches name filter
     *
     *   [arrayField.(name == 'foo')[1]] array element with offset '1' that matches name filter
     *
     *   [fkeyField.(offset() == 0 && limit() == 3)] offset/limit applied to fkey
     *
     *   [fkeyField.(pos() >= 0 && pos() < 3)] alternate way to specify offset/limit applied to fkey
     *
     * - Return all fields in obj - Either not specified or "[this]"  Note that for external references, only the ids are
     *   returned unless an explicit include indicates that data from the reference should be returned (see below).
     *   Also, fkey fields (e.g. fields defined like arry: SomeType(fkeyField)) are also only brought back if specifically
     *   included.
     *
     * - Using dot query to filter arry/mapp results - "[refArry.(name == 'foo')]" or "[{refArry: [id]}.(name == 'foo')]"
     */
    readonly include?: string | null;
    withInclude(include: string | null): Data.SparkFetchSpec;

    /**
     * The `meta` field is included by default when fetching data.  Set this to true to avoid it from being included.
     * This can reduce the i/o for fetching large amounts of data when the `meta` isn't required.
     */
    readonly excludeMeta?: boolean;
    withExcludeMeta(excludeMeta: boolean): Data.SparkFetchSpec;

    /**
     * If true, then all read calcs will be returned by default (including for any included child refs that specify
     * the default include), if false, only those specifically requested via the `include` will be returned.
     */
    readonly includeReadCalcs?: boolean;
    withIncludeReadCalcs(includeReadCalcs: boolean): Data.SparkFetchSpec;

    /**
     * Flag indicating that any stored calc fields being returned are calculated to have up to date values as part of this
     * request.  This should only be used if up to date data is absolutely required and there is the possibility, due to
     * asynchronous processing delay of stored calc fields, that they may not be up to date.
     */
    readonly refreshCalcFields?: boolean;
    withRefreshCalcFields(refreshCalcFields: boolean): Data.SparkFetchSpec;

    /**
     * List of stored calc fields to recalculate.  Ignored if {@link refreshCalcFields} is false.  If
     * {@link refreshCalcFields} is true and this is not specified, then all stored calc fields will be recalculated.
     */
    readonly calcFieldsToRefresh?: C3.Array<string | null>;
    withCalcFieldsToRefresh(calcFieldsToRefresh: C3.Array<string | null> | Array<string | null>): Data.SparkFetchSpec;

    /**
     * Flag indicating that the ACL authorization check should be done even in cases when it wouldn't normally be (e.g.
     * request is by "authorizer" or ACL is temporarily disabled via EnableAclPrivileges).
     */
    readonly forceAcl?: boolean;
    withForceAcl(forceAcl: boolean): Data.SparkFetchSpec;

    /**
     * Flag to request generation of the query plan in addition to returning the data.  Can be used for performance
     * analysis, etc.
     */
    readonly explain?: boolean;
    withExplain(explain: boolean): Data.SparkFetchSpec;

    /**
     * Flag indicating that the input parameters should all be validated (including database syntax error checking) and
     * the query plan should be generated but not data should be retrieved from the database or returned.  Useful for
     * validating filter/include syntax and doing preventive performance analysis without actually issuing database
     * queries.
     */
    readonly validateOnly?: boolean;
    withValidateOnly(validateOnly: boolean): Data.SparkFetchSpec;

    /**
     * Caller controllable hints to alter the way that queries are generated/executed in a fetch call.  Hints will
     * NEVER change the returned results.
     */
    readonly hints?: FetchHints | null;
    withHints(hints: IFetchHints | null): Data.SparkFetchSpec;

    /**
     * If true, the fetch will be done from the secondary datastore for the type.  If no secondary datastore is defined
     * an exception will be thrown.  If the fetch references types that don't have a secondary datastore defined, the
     * behavior will be the same as if those types without a secondary datastore (or one that doesn't match) were in
     * a facaded tenant/tag.
     */
    readonly useSecondaryDatastore?: boolean;
    withUseSecondaryDatastore(useSecondaryDatastore: boolean): Data.SparkFetchSpec;

    /**
     * For array fields specified in the include, if a dot query expression is provided to filter the array results the
     * returned array is compressed to remove non matching elements.  As a result the original array indexes are lost.
     * Set this to true to preserve the original array indexes in this situation.
     */
    readonly preserveArrayIndexes?: boolean;
    withPreserveArrayIndexes(preserveArrayIndexes: boolean): Data.SparkFetchSpec;

    /**
     * By default, entity references retrieved via {@link Persistable.fetch} and {@link Persistable.get} only include the
     * `id` of the reference, unless additional fields in the referenced type are added as part of the include spec.
     * Also, for references to extended/parametric types, the returned instances will have the type of the the field's
     * reference type, rather than the concrete type of the actual instances themselves.
     *
     * If this flag is set to true, then those instances will be of the correct concrete type if they aren't already.
     * Note that this requires additional queries/joins (up to 1 for each referenced field) so it should only be used when
     * having the instances of the concrete type is necessary.
     */
    readonly resolveRefTypes?: boolean;
    withResolveRefTypes(resolveRefTypes: boolean): Data.SparkFetchSpec;

    /**
     * Indicates if resulting Spark Dataframe should be exploded and flattened.
     */
    readonly flatten?: boolean;
    withFlatten(flatten: boolean): Data.SparkFetchSpec;

    /**
     * Number of rows to retrieve in a single fetch partition.
     */
    readonly partitionSize?: number | null;
    withPartitionSize(partitionSize: number | null): Data.SparkFetchSpec;

    /**
     * Number of rows to include in a single batch when sending results to Spark cluster.
     */
    readonly batchSize?: number | null;
    withBatchSize(batchSize: number | null): Data.SparkFetchSpec;

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
    static fromJson(json: any | null): Data.SparkFetchSpec | null;

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
    static fromJsonString(json: string | null): Data.SparkFetchSpec | null;

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
    static fromXmlString(xml: string | null): Data.SparkFetchSpec | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Data.SparkFetchSpec | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Data.SparkFetchSpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.SparkFetchSpec;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Data.SparkFetchSpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.SparkFetchSpec | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Data.SparkFetchSpec | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Data.SparkFetchSpec;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.SparkFetchSpec;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Data.SparkFetchSpec;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Data.SparkFetchSpec;

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
    withField(field: string, value: any, doNotConvert?: boolean): Data.SparkFetchSpec;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Data.SparkFetchSpec;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Data.SparkFetchSpec;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Data.SparkFetchSpec;

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
    withoutFieldAtPath(path: string): Data.SparkFetchSpec;

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
    withoutField(field: string | null): Data.SparkFetchSpec;

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
    withoutField(field: FieldType | null): Data.SparkFetchSpec;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Data.SparkFetchSpec;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Data.SparkFetchSpec;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Data.SparkFetchSpec;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Data.SparkFetchSpec;

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
    defaultField(field: string): Data.SparkFetchSpec;

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
    defaultField(field: FieldType): Data.SparkFetchSpec;

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
    unsetField(field: string): Data.SparkFetchSpec;

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
    unsetField(field: FieldType): Data.SparkFetchSpec;

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
    removeField(field: string): Data.SparkFetchSpec;

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
    removeField(field: FieldType): Data.SparkFetchSpec;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Data.SparkFetchSpec;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Data.SparkFetchSpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Data.SparkFetchSpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Data.SparkFetchSpec;

    mergeJson(json: any | null): Data.SparkFetchSpec;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Data.SparkFetchSpec;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Data.SparkFetchSpec;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Data.SparkFetchSpec | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Data.SparkFetchSpec | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Data.SparkFetchSpec | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Data.SparkFetchSpec | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Data.SparkFetchSpec | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Data.SparkFetchSpec | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Data.SparkFetchSpec | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Data.SparkFetchSpec | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Data.SparkFetchSpec | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Data.SparkFetchSpec;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Data.SparkFetchSpec;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Data.SparkFetchSpec;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Data.SparkFetchSpec;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Data.SparkFetchSpec;

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
    static make(fields: any, withDefaults?: boolean): Data.SparkFetchSpec;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Data.SparkFetchSpec;

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
    afterMake(): Data.SparkFetchSpec;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Data.SparkFetchSpec;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Data.SparkFetchSpec>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Data.SparkFetchSpec;

    /**
     * Creates timed fetch filter based on the type fetch will be invoked on
     */
    timedFetchFilter(type: Type): string | null;

    /**
     * Determines if the given spec has {@link #timeRange} or {@link #asOf} field set
     */
    hasTimeRange(): boolean;

    /**
     * Adds snippet "id == <id>" to the filter
     *
     * @param id
     *           Id to filter for.
     *
     * @return updated FetchSpec
     */
    withIdFilter(id: string): Data.SparkFetchSpec | null;

    /**
     * Adds snippet "intersects(id, [<ids>])" to the filter
     *
     * @param ids
     *           Ids to filter for.
     *
     * @return updated FetchSpec
     */
    withIdsFilter(ids: C3.Array<string | null> | null): Data.SparkFetchSpec | null;

    /**
     * Adds id range snippet to the filter
     *
     * @param startId
     *           If not null, start of id range.
     * @param endId
     *           If not null, end of id range.
     *
     * @return updated FetchSpec
     */
    withIdRangeFilter(startId?: string | null, endId?: string | null): Data.SparkFetchSpec | null;

    /**
     * @return quoted representation of the value that is safe to be used in C3 expressions.
     */
    static quoteValue(value?: any): string;
  }
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

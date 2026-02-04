// TypeScript definitions for the C3 type Genai.Query.ResultCount.Spec

/**
 * This type is used to define the shape of the input expected by the {@link Genai.Query.ResultCount#usage} method.
 * This enables the API to return paginated results of query consumed by users.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Query.ResultCount.Spec
 */
declare namespace Genai.Query.ResultCount {
  export interface ISpec {

    /**
     * Specifies the order to return Objs.  Default if not specified is by "id".
     *
     * Supports multiple fields (e.g. "field1, field2") and descending order per field (e.g. "field1, descending(field2)").
     *
     * If {@link limit} is set to -1, and order is specified as "<none>", then no order will be applied at the database.
     * This should only be done if its impact is fully understood as it may help performance in some cases and hurt it in
     * others.  If you aren't sure, DON'T USE IT.
     */
    order?: string;

    /**
     * Offset to use for paged reads.
     */
    offset?: number;

    /**
     * Maximum number of Objs to return (starting from {@link offset}).  If there are fewer rows than were requested, only
     * those will be returned.  If there are additional rows beyond what was requested, then {@link FetchResult.hasMore}
     * will be set to true.
     *
     * -1 returns all.
     */
    limit?: number;

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
    filter?: string;

    /**
     * Variables values to substitute in filter expression. CURRENTLY UNDER CONSTRUCTION!
     */
    vars?: Map_Type<string, Obj> | {[key: string]: IObj};

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
    asOf?: DateTime | Date | string;

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
    stmtTimeoutMs?: number;

    /**
     * If true and an error occurs deserializing a persisted json value, the error text will be returned as the value and
     * no exception will be thrown.  Otherwise, the exception will be thrown.
     */
    dontThrowJsonDeserErrors?: boolean;

    /**
     * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
     * to return only the values that were effective within that time range.  If either the start/end time is null, then
     * they are assumed to be BOT/EOT.  This should not be specified along with {@link asOf}.
     *
     * INTERNAL USE ONLY - DO NOT USE
     */
    timeRange?: ITimeRange;

    /**
     * Set to true to fetch instances that aren't of the fetch type but are instance of its base types. Used for auto
     * promotion in upsert.
     *
     * INTERNAL USE ONLY - DO NOT USE
     */
    timedFetchParentField?: string;

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
    include?: string;

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
    calcFieldsToRefresh?: Array_Type<string> | Array<string>;

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
    hints?: IFetchHints;

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
     * The start time (inclusive) when user queries should be counted for the specific
     * {@link Genai.Query.ResultCount#usage} call.
     */
    start?: DateTime | Date | string;

    /**
     * The end time (inclusive) when user queries should be counted for the specific
     * {@link Genai.Query.ResultCount#usage} call.
     */
    end?: DateTime | Date | string;
  }
}

/**
 * This type is used to define the shape of the input expected by the {@link Genai.Query.ResultCount#usage} method.
 * This enables the API to return paginated results of query consumed by users.
 *
 * @remarks this represents a made instance of Genai.Query.ResultCount.Spec
 */
declare namespace Genai.Query.ResultCount {
  export class Spec extends Obj  {

    /**
     * Specifies the order to return Objs.  Default if not specified is by "id".
     *
     * Supports multiple fields (e.g. "field1, field2") and descending order per field (e.g. "field1, descending(field2)").
     *
     * If {@link limit} is set to -1, and order is specified as "<none>", then no order will be applied at the database.
     * This should only be done if its impact is fully understood as it may help performance in some cases and hurt it in
     * others.  If you aren't sure, DON'T USE IT.
     */
    readonly order?: string;
    withOrder(order: string | null): Genai.Query.ResultCount.Spec;

    /**
     * Offset to use for paged reads.
     */
    readonly offset?: number;
    withOffset(offset: number | null): Genai.Query.ResultCount.Spec;

    /**
     * Maximum number of Objs to return (starting from {@link offset}).  If there are fewer rows than were requested, only
     * those will be returned.  If there are additional rows beyond what was requested, then {@link FetchResult.hasMore}
     * will be set to true.
     *
     * -1 returns all.
     */
    readonly limit?: number;
    withLimit(limit: number | null): Genai.Query.ResultCount.Spec;

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
    readonly filter?: string;
    withFilter(filter: string | null): Genai.Query.ResultCount.Spec;

    /**
     * Variables values to substitute in filter expression. CURRENTLY UNDER CONSTRUCTION!
     */
    readonly vars?: Map_Type<string, Obj>;
    withVars(vars: Map_Type<string, Obj> | {[key: string]: IObj} | null): Genai.Query.ResultCount.Spec;

    /**
     * Flag indicating that the normal suppression of hidden seed data should not be applied.  Only used internally for
     * proper seed data handling.  For types that do not mixin SeedData, this is ignored.
     */
    readonly fetchHiddenSeedData?: boolean;
    withFetchHiddenSeedData(fetchHiddenSeedData: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Flag indicating that only Obj instances that are extension types of the requested type should not be returned.
     * For example, if FixedAsset.fetch is called with this option, then Objs of type Facility, etc. will not be returned.
     */
    readonly excludeExtensions?: boolean;
    withExcludeExtensions(excludeExtensions: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
     * to return only the values that were effective at that time.  This should not be specified along with {@link timeRange}.
     */
    readonly asOf?: DateTime;
    withAsOf(asOf: DateTime | Date | string | null): Genai.Query.ResultCount.Spec;

    /**
     * If true and the maximum number of bind variables has been reached for the query, additional values will be added
     * to the query as literal values, quoted and escaped as necessary.
     */
    readonly allowLiteralOnBindVariableOverflow?: boolean;
    withAllowLiteralOnBindVariableOverflow(allowLiteralOnBindVariableOverflow: boolean): Genai.Query.ResultCount.Spec;

    /**
     * If true, a dedicated connection will be used for the operation.  Otherwise, a shared read connection may be
     * used.
     */
    readonly useDedicatedConnection?: boolean;
    withUseDedicatedConnection(useDedicatedConnection: boolean): Genai.Query.ResultCount.Spec;

    /**
     * When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements on
     * the connection used will be set with this timeout value.  Note that this will apply to all child actions
     * (synchronous only) that occur as part of the action this is called on.  Also note this applies to the execution of
     * the query itself and does not apply to total time used to read/process the entire result set or processing child
     * queries.
     *
     * Note that this will be ignored for any backing datastore that does not support it.
     */
    readonly stmtTimeoutMs?: number;
    withStmtTimeoutMs(stmtTimeoutMs: number | null): Genai.Query.ResultCount.Spec;

    /**
     * If true and an error occurs deserializing a persisted json value, the error text will be returned as the value and
     * no exception will be thrown.  Otherwise, the exception will be thrown.
     */
    readonly dontThrowJsonDeserErrors?: boolean;
    withDontThrowJsonDeserErrors(dontThrowJsonDeserErrors: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Timed fetch parameter to limit all requested arrys with a reference type of either TimedValueHistory or TimedRelation
     * to return only the values that were effective within that time range.  If either the start/end time is null, then
     * they are assumed to be BOT/EOT.  This should not be specified along with {@link asOf}.
     *
     * INTERNAL USE ONLY - DO NOT USE
     */
    readonly timeRange?: TimeRange;
    withTimeRange(timeRange: ITimeRange | null): Genai.Query.ResultCount.Spec;

    /**
     * Set to true to fetch instances that aren't of the fetch type but are instance of its base types. Used for auto
     * promotion in upsert.
     *
     * INTERNAL USE ONLY - DO NOT USE
     */
    readonly timedFetchParentField?: string;
    withTimedFetchParentField(timedFetchParentField: string | null): Genai.Query.ResultCount.Spec;

    readonly includeBaseTypes?: boolean;
    withIncludeBaseTypes(includeBaseTypes: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Set to true to not have the viewInclude limit the input include.
     *
     * INTERNAL USE ONLY - DO NOT USE
     */
    readonly ignoreViewInclude?: boolean;
    withIgnoreViewInclude(ignoreViewInclude: boolean): Genai.Query.ResultCount.Spec;

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
    readonly include?: string;
    withInclude(include: string | null): Genai.Query.ResultCount.Spec;

    /**
     * The `meta` field is included by default when fetching data.  Set this to true to avoid it from being included.
     * This can reduce the i/o for fetching large amounts of data when the `meta` isn't required.
     */
    readonly excludeMeta?: boolean;
    withExcludeMeta(excludeMeta: boolean): Genai.Query.ResultCount.Spec;

    /**
     * If true, then all read calcs will be returned by default (including for any included child refs that specify
     * the default include), if false, only those specifically requested via the `include` will be returned.
     */
    readonly includeReadCalcs?: boolean;
    withIncludeReadCalcs(includeReadCalcs: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Flag indicating that any stored calc fields being returned are calculated to have up to date values as part of this
     * request.  This should only be used if up to date data is absolutely required and there is the possibility, due to
     * asynchronous processing delay of stored calc fields, that they may not be up to date.
     */
    readonly refreshCalcFields?: boolean;
    withRefreshCalcFields(refreshCalcFields: boolean): Genai.Query.ResultCount.Spec;

    /**
     * List of stored calc fields to recalculate.  Ignored if {@link refreshCalcFields} is false.  If
     * {@link refreshCalcFields} is true and this is not specified, then all stored calc fields will be recalculated.
     */
    readonly calcFieldsToRefresh?: Array_Type<string>;
    withCalcFieldsToRefresh(calcFieldsToRefresh: Array_Type<string> | Array<string> | null): Genai.Query.ResultCount.Spec;

    /**
     * Flag indicating that the ACL authorization check should be done even in cases when it wouldn't normally be (e.g.
     * request is by "authorizer" or ACL is temporarily disabled via EnableAclPrivileges).
     */
    readonly forceAcl?: boolean;
    withForceAcl(forceAcl: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Flag to request generation of the query plan in addition to returning the data.  Can be used for performance
     * analysis, etc.
     */
    readonly explain?: boolean;
    withExplain(explain: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Flag indicating that the input parameters should all be validated (including database syntax error checking) and
     * the query plan should be generated but not data should be retrieved from the database or returned.  Useful for
     * validating filter/include syntax and doing preventive performance analysis without actually issuing database
     * queries.
     */
    readonly validateOnly?: boolean;
    withValidateOnly(validateOnly: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Caller controllable hints to alter the way that queries are generated/executed in a fetch call.  Hints will
     * NEVER change the returned results.
     */
    readonly hints?: FetchHints;
    withHints(hints: IFetchHints | null): Genai.Query.ResultCount.Spec;

    /**
     * If true, the fetch will be done from the secondary datastore for the type.  If no secondary datastore is defined
     * an exception will be thrown.  If the fetch references types that don't have a secondary datastore defined, the
     * behavior will be the same as if those types without a secondary datastore (or one that doesn't match) were in
     * a facaded tenant/tag.
     */
    readonly useSecondaryDatastore?: boolean;
    withUseSecondaryDatastore(useSecondaryDatastore: boolean): Genai.Query.ResultCount.Spec;

    /**
     * For array fields specified in the include, if a dot query expression is provided to filter the array results the
     * returned array is compressed to remove non matching elements.  As a result the original array indexes are lost.
     * Set this to true to preserve the original array indexes in this situation.
     */
    readonly preserveArrayIndexes?: boolean;
    withPreserveArrayIndexes(preserveArrayIndexes: boolean): Genai.Query.ResultCount.Spec;

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
    withResolveRefTypes(resolveRefTypes: boolean): Genai.Query.ResultCount.Spec;

    /**
     * The start time (inclusive) when user queries should be counted for the specific
     * {@link Genai.Query.ResultCount#usage} call.
     */
    readonly start?: DateTime;
    withStart(start: DateTime | Date | string | null): Genai.Query.ResultCount.Spec;

    /**
     * The end time (inclusive) when user queries should be counted for the specific
     * {@link Genai.Query.ResultCount#usage} call.
     */
    readonly end?: DateTime;
    withEnd(end: DateTime | Date | string | null): Genai.Query.ResultCount.Spec;

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
    static fromJson(json: any): Genai.Query.ResultCount.Spec | null;

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
    static fromJsonString(json: string): Genai.Query.ResultCount.Spec | null;

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
    static fromXmlString(xml: string): Genai.Query.ResultCount.Spec | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.Query.ResultCount.Spec | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.Query.ResultCount.Spec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Query.ResultCount.Spec;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Query.ResultCount.Spec>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Query.ResultCount.Spec>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Query.ResultCount.Spec;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Query.ResultCount.Spec;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.Query.ResultCount.Spec;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.Query.ResultCount.Spec;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Query.ResultCount.Spec;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Query.ResultCount.Spec;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Query.ResultCount.Spec;

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
    withoutFieldAtPath(path: string): Genai.Query.ResultCount.Spec;

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
    withoutField(field: string): Genai.Query.ResultCount.Spec;

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
    withoutField(field: FieldType): Genai.Query.ResultCount.Spec;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.Query.ResultCount.Spec;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Query.ResultCount.Spec;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.Query.ResultCount.Spec;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Query.ResultCount.Spec;

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
    defaultField(field: string): Genai.Query.ResultCount.Spec;

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
    defaultField(field: FieldType): Genai.Query.ResultCount.Spec;

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
    unsetField(field: string): Genai.Query.ResultCount.Spec;

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
    unsetField(field: FieldType): Genai.Query.ResultCount.Spec;

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
    removeField(field: string): Genai.Query.ResultCount.Spec;

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
    removeField(field: FieldType): Genai.Query.ResultCount.Spec;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Query.ResultCount.Spec;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Query.ResultCount.Spec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Query.ResultCount.Spec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Query.ResultCount.Spec;

    mergeJson(json: any): Genai.Query.ResultCount.Spec;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Query.ResultCount.Spec;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.Query.ResultCount.Spec>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.Query.ResultCount.Spec> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.Query.ResultCount.Spec> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.Query.ResultCount.Spec>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.Query.ResultCount.Spec> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.Query.ResultCount.Spec> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.Query.ResultCount.Spec> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.Query.ResultCount.Spec>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.Query.ResultCount.Spec>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.Query.ResultCount.Spec;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.Query.ResultCount.Spec;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.Query.ResultCount.Spec;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.Query.ResultCount.Spec;

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
    static make(fields: any, withDefaults?: boolean): Genai.Query.ResultCount.Spec;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.Query.ResultCount.Spec;

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
    afterMake(): Genai.Query.ResultCount.Spec;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.Query.ResultCount.Spec;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.Query.ResultCount.Spec> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.Query.ResultCount.Spec;

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
    withIdFilter(id: string): Genai.Query.ResultCount.Spec | null;

    /**
     * Adds snippet "intersects(id, [<ids>])" to the filter
     *
     * @param ids
     *           Ids to filter for.
     *
     * @return updated FetchSpec
     */
    withIdsFilter(ids: Array_Type<string>): Genai.Query.ResultCount.Spec | null;

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
    withIdRangeFilter(startId?: string, endId?: string): Genai.Query.ResultCount.Spec | null;

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

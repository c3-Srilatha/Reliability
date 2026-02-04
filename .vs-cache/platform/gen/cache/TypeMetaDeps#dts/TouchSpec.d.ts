// TypeScript definitions for the C3 type TouchSpec

/**
 * Controls various aspects of the operation of {@link Persistable#touch} and {@link Persistable#touchBatch}
 *
 * @remarks this represents a value passed to a method that expects an instance of TouchSpec
 */
declare interface ITouchSpec {

  /**
   * Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
   */
  retrySpec?: IRetrySpec | null;

  /**
   * Forces any recalculating of calculated fields for the object being upserted to be done asynchronously, rather
   * than as part of the request.
   *
   * This is set for things such as data load where we want to get the data in as fast as possible where the
   * refreshing of the calculated fields will be done either by the invalidation queue mechanism (incremental)
   * or {@link App#rebuild} (initial).
   */
  forceAsyncCalcFieldRefresh?: boolean;

  /**
   * Set by RefreshCalcFieldsTask for the update to the calc fields themselves.  It is used to avoid
   * duplicate/circular updating of calculated fields that depend on each other.  It should not be used otherwise.
   */
  calcFieldsBeingRefreshed?: C3.Array<string | null> | Array<string | null>;

  /**
   * For large batches of input obs, they will be committed to the database in batches of this size.
   */
  commitSize?: number | null;

  /**
   * When set to true, allows overriding the system-managed metadata fields ({@link Meta#updated},
   * {@link Meta#updatedBy}, {@link Meta#created}, and {@link Meta#createdBy}) with values provided in the input
   * object's meta field.
   *
   * Design Intent: This option is specifically designed for CI/data loading scenarios where data loads
   * don't always come in order and/or you need to indicate that an object was created earlier than when it was
   * originally loaded, based on the actual data being loaded. It is not intended for arbitrary modification of metadata
   * by application logic for reasons unrelated to data loading integrity.
   *
   * Behavior when enabled:
   * - For new records: If only one of created/updated info is specified, it will be used for both. If neither is
   *   specified, system defaults are used. The created timestamp must be <= updated timestamp.
   * - For existing records: The behavior for {@link Meta#created} and {@link Meta#createdBy} is complex:
   *   - Historic updates: If the new {@link Meta#created} timestamp is earlier than the current value in the database,
   *     the new created info is applied (this represents correcting historical data)
   *   - Non-historic updates: If the new {@link Meta#created} timestamp is later than or equal to the current value,
   *     both the new {@link Meta#created} and {@link Meta#createdBy} are ignored and the existing database values are
   *     retained
   *   - Updated info: {@link Meta#updated} and {@link Meta#updatedBy} are always applied if specified
   * - System updates: This setting is ignored for system updates (when the operation is performed by the system rather
   *   than a user).
   *
   * Restrictions and Safeguards:
   * - Not allowed on types that mix {@link NoMetaOverride} - attempting to use this on such types will throw an error
   * - Only works when the input object has a non-null meta field with the desired values
   * - Built-in validation ensures {@link Meta#updated} cannot be set earlier than {@link Meta#created}
   * - For existing records, creation metadata is only updated for historic corrections (earlier timestamps)
   * - These fields are system-managed and should not be arbitrarily modified by application logic
   *
   * Intended use cases:
   * - CI/Data Loading: When data loads arrive out of order and you need to correct creation timestamps
   *   based on the actual data being loaded
   * - Data Migration: Preserving original creation/update timestamps and users from source systems
   * - Bulk Data Loading: Ensuring metadata reflects the source system's information rather than load time
   * - Historical Data Correction: Backdating creation information when the data indicates earlier creation
   * - Audit Trail Integrity: Maintaining accurate creator and creation time information for compliance
   *
   * @see NoMetaOverride For types that disallow this functionality
   * @see Meta For the metadata fields that can be overridden
   */
  metaOverride?: boolean;

  /**
   * Turns off all asynchronous invalidation/processing that would ordinarily be triggered by the request (e.g. stored
   * calcs, created/updated/removed callbacks, etc.).  Note that this will be ignored for any callback that specifies
   * {@link Ann.Db#callbackRequired}.
   */
  disableAsyncProcessing?: boolean;

  /**
   * Disables calls to any defined before callback functions (e.g. {@link Persistable#beforeCreate},
   * {@link Persistable#beforeUpdate} and {@link Persistable#beforeRemove}).  Note that this will be ignored for any
   * callback that specifies {@link Ann.Db#callbackRequired}.
   */
  disableBeforeCallbacks?: boolean;

  /**
   * Disables calls to any defined after callback functions (e.g. {@link Persistable#afterCreate},
   * {@link Persistable#afterUpdate} and {@link Persistable#afterRemove}).
   */
  disableAfterCallbacks?: boolean;

  /**
   * Include spec indicating which fields should be returned for the returned objs of the operation.  Specifying
   * this will cause an additional fetch to be made for created/updated objs to get the data for those fields.
   * The default is to return the id only (which does not require an additional fetch).
   *
   * Any valid include spec is supported.
   *
   * @see FetchSpec.include
   */
  include?: string | null;

  /**
   * Include spec indicating which fields should be returned for the returned objs of the operation.  Specifying
   * this will cause an additional fetch to be made for created/updated objs to get the data for those fields.
   * The default is to return the id only (which does not require an additional fetch).
   *
   * Any valid include spec is supported.
   *
   * @see FetchSpec.include
   */
  returnInclude?: string | null;

  /**
   * Indicates that if objs with the same id are found in the input batch, only the first one will be processed.
   * All others will be ignored.  This is used by data load for cases where every loaded timeseries data point
   * causes an attempt to upsert identical timeseries headers.
   */
  ignoreDuplicates?: boolean;

  /**
   * Only relevant for operations of types that mixin {@link SeedData}.  This is used to force updates to be
   * processed as though they were from a user, rather than authorizer/provisioner.
   *
   * @see SeedData
   */
  forceUserUpdate?: boolean;

  /**
   * If true and the type mixes in {@link SeedData}, the special seed data handling (e.g. protecting user updates
   * etc.) will not be performed.  Instead the operation will be treated as a normal upsert.
   */
  ignoreSeed?: boolean;

  /**
   * If true then an ObjList will be returned containing the errors.  Otherwise batch operations will throw a
   * C3BatchException if any error occurs.
   */
  dontThrowOnBatchError?: boolean;

  /**
   * If true, instances will use the direct creation mechanism into cassandra.  This is only valid if the
   * operation is createBatch and the type is in Cassandra.
   */
  createDirect?: boolean;

  /**
   * Indicates that the upsert request should not attempt to dedup incoming input.
   */
  noHistoryDedup?: boolean;

  /**
   * Indicates which parent field should be used for deduping timed relations.
   */
  timedRelationParentField?: string | null;

  /**
   * If true, and the the type being upserted mixes {@link Versionable}, the update will become a saved version.
   *
   * @see Versionable
   */
  saveVersion?: boolean;

  /**
   * If true and the backing datastore supports it, conflicts on create will be ignored.
   */
  ignoreCreateConflicts?: boolean;

  /**
   * If true and no changes are detected during the upsert operation, the obj will still be "touched" (e.g. the version
   * number will be incremented and the `meta.updated` `meta.updatedBy` and `meta.timestamp` fields will be updated).
   * Otherwise the operation will be a no-op.
   */
  forceTouch?: boolean;

  /**
   * When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements on
   * the connection used will be set with this timeout value.  Note that this will apply to all child actions
   * (synchronous only) that occur as part of the action this is called on.  Also note this applies to the execution of
   * individual db operations and not the entire function execution.
   *
   * Note that this will be ignored for any backing datastore that does not support it.
   */
  stmtTimeoutMs?: number | null;

  /**
   * Indicates that the upsert operation is idempotent.  In this context it means that any version numbers on the input
   * objs will be ignored (i.e. no version checking will be done).  If any internal version conflicts occur (strictly
   * due to timing/high concurrency, the operation will be internally retried based on the `UpsertSpec#retrySpec`. For
   * non-idempotent operations (the default), any version conflict will cause the operation to fail (will currently
   * only log a warning but will eventually cause the operation to fail).
   */
  idempotent?: boolean;

  /**
   * FOR INTERNAL USE ONLY - When true, any attempt to update an existing obj (either through update, upsert or merge)
   * where no version number was provided in the input, will be considered a version conflict.  For the new upsertObjs,
   * updateObjs, and mergeObjs, this will cause the `objs` lambda to be called again to address the situation.  This
   * will enforce that those new apis are used properly.  For the existing apis, the version conflict would cause them
   * to fail.  Note that since this is for internal use only, that scenario will not occur yet.
   *
   * This will be removed once we fully enforce version control and only allow a missing version number for legitimate
   * idempotent operations (e.g. DI).
   */
  strictVersionCheck?: boolean;
}

/**
 * Controls various aspects of the operation of {@link Persistable#touch} and {@link Persistable#touchBatch}
 *
 * @remarks this represents a made instance of TouchSpec
 */
declare class TouchSpec extends Obj {

  /**
   * Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
   */
  readonly retrySpec?: RetrySpec | null;
  withRetrySpec(retrySpec: IRetrySpec | null): TouchSpec;

  /**
   * Forces any recalculating of calculated fields for the object being upserted to be done asynchronously, rather
   * than as part of the request.
   *
   * This is set for things such as data load where we want to get the data in as fast as possible where the
   * refreshing of the calculated fields will be done either by the invalidation queue mechanism (incremental)
   * or {@link App#rebuild} (initial).
   */
  readonly forceAsyncCalcFieldRefresh?: boolean;
  withForceAsyncCalcFieldRefresh(forceAsyncCalcFieldRefresh: boolean): TouchSpec;

  /**
   * Set by RefreshCalcFieldsTask for the update to the calc fields themselves.  It is used to avoid
   * duplicate/circular updating of calculated fields that depend on each other.  It should not be used otherwise.
   */
  readonly calcFieldsBeingRefreshed?: C3.Array<string | null>;
  withCalcFieldsBeingRefreshed(calcFieldsBeingRefreshed: C3.Array<string | null> | Array<string | null>): TouchSpec;

  /**
   * For large batches of input obs, they will be committed to the database in batches of this size.
   */
  readonly commitSize?: number | null;
  withCommitSize(commitSize: number | null): TouchSpec;

  /**
   * When set to true, allows overriding the system-managed metadata fields ({@link Meta#updated},
   * {@link Meta#updatedBy}, {@link Meta#created}, and {@link Meta#createdBy}) with values provided in the input
   * object's meta field.
   *
   * Design Intent: This option is specifically designed for CI/data loading scenarios where data loads
   * don't always come in order and/or you need to indicate that an object was created earlier than when it was
   * originally loaded, based on the actual data being loaded. It is not intended for arbitrary modification of metadata
   * by application logic for reasons unrelated to data loading integrity.
   *
   * Behavior when enabled:
   * - For new records: If only one of created/updated info is specified, it will be used for both. If neither is
   *   specified, system defaults are used. The created timestamp must be <= updated timestamp.
   * - For existing records: The behavior for {@link Meta#created} and {@link Meta#createdBy} is complex:
   *   - Historic updates: If the new {@link Meta#created} timestamp is earlier than the current value in the database,
   *     the new created info is applied (this represents correcting historical data)
   *   - Non-historic updates: If the new {@link Meta#created} timestamp is later than or equal to the current value,
   *     both the new {@link Meta#created} and {@link Meta#createdBy} are ignored and the existing database values are
   *     retained
   *   - Updated info: {@link Meta#updated} and {@link Meta#updatedBy} are always applied if specified
   * - System updates: This setting is ignored for system updates (when the operation is performed by the system rather
   *   than a user).
   *
   * Restrictions and Safeguards:
   * - Not allowed on types that mix {@link NoMetaOverride} - attempting to use this on such types will throw an error
   * - Only works when the input object has a non-null meta field with the desired values
   * - Built-in validation ensures {@link Meta#updated} cannot be set earlier than {@link Meta#created}
   * - For existing records, creation metadata is only updated for historic corrections (earlier timestamps)
   * - These fields are system-managed and should not be arbitrarily modified by application logic
   *
   * Intended use cases:
   * - CI/Data Loading: When data loads arrive out of order and you need to correct creation timestamps
   *   based on the actual data being loaded
   * - Data Migration: Preserving original creation/update timestamps and users from source systems
   * - Bulk Data Loading: Ensuring metadata reflects the source system's information rather than load time
   * - Historical Data Correction: Backdating creation information when the data indicates earlier creation
   * - Audit Trail Integrity: Maintaining accurate creator and creation time information for compliance
   *
   * @see NoMetaOverride For types that disallow this functionality
   * @see Meta For the metadata fields that can be overridden
   */
  readonly metaOverride?: boolean;
  withMetaOverride(metaOverride: boolean): TouchSpec;

  /**
   * Turns off all asynchronous invalidation/processing that would ordinarily be triggered by the request (e.g. stored
   * calcs, created/updated/removed callbacks, etc.).  Note that this will be ignored for any callback that specifies
   * {@link Ann.Db#callbackRequired}.
   */
  readonly disableAsyncProcessing?: boolean;
  withDisableAsyncProcessing(disableAsyncProcessing: boolean): TouchSpec;

  /**
   * Disables calls to any defined before callback functions (e.g. {@link Persistable#beforeCreate},
   * {@link Persistable#beforeUpdate} and {@link Persistable#beforeRemove}).  Note that this will be ignored for any
   * callback that specifies {@link Ann.Db#callbackRequired}.
   */
  readonly disableBeforeCallbacks?: boolean;
  withDisableBeforeCallbacks(disableBeforeCallbacks: boolean): TouchSpec;

  /**
   * Disables calls to any defined after callback functions (e.g. {@link Persistable#afterCreate},
   * {@link Persistable#afterUpdate} and {@link Persistable#afterRemove}).
   */
  readonly disableAfterCallbacks?: boolean;
  withDisableAfterCallbacks(disableAfterCallbacks: boolean): TouchSpec;

  /**
   * Include spec indicating which fields should be returned for the returned objs of the operation.  Specifying
   * this will cause an additional fetch to be made for created/updated objs to get the data for those fields.
   * The default is to return the id only (which does not require an additional fetch).
   *
   * Any valid include spec is supported.
   *
   * @see FetchSpec.include
   */
  readonly include?: string | null;
  withInclude(include: string | null): TouchSpec;

  /**
   * Include spec indicating which fields should be returned for the returned objs of the operation.  Specifying
   * this will cause an additional fetch to be made for created/updated objs to get the data for those fields.
   * The default is to return the id only (which does not require an additional fetch).
   *
   * Any valid include spec is supported.
   *
   * @see FetchSpec.include
   */
  readonly returnInclude?: string | null;
  withReturnInclude(returnInclude: string | null): TouchSpec;

  /**
   * Indicates that if objs with the same id are found in the input batch, only the first one will be processed.
   * All others will be ignored.  This is used by data load for cases where every loaded timeseries data point
   * causes an attempt to upsert identical timeseries headers.
   */
  readonly ignoreDuplicates?: boolean;
  withIgnoreDuplicates(ignoreDuplicates: boolean): TouchSpec;

  /**
   * Only relevant for operations of types that mixin {@link SeedData}.  This is used to force updates to be
   * processed as though they were from a user, rather than authorizer/provisioner.
   *
   * @see SeedData
   */
  readonly forceUserUpdate?: boolean;
  withForceUserUpdate(forceUserUpdate: boolean): TouchSpec;

  /**
   * If true and the type mixes in {@link SeedData}, the special seed data handling (e.g. protecting user updates
   * etc.) will not be performed.  Instead the operation will be treated as a normal upsert.
   */
  readonly ignoreSeed?: boolean;
  withIgnoreSeed(ignoreSeed: boolean): TouchSpec;

  /**
   * If true then an ObjList will be returned containing the errors.  Otherwise batch operations will throw a
   * C3BatchException if any error occurs.
   */
  readonly dontThrowOnBatchError?: boolean;
  withDontThrowOnBatchError(dontThrowOnBatchError: boolean): TouchSpec;

  /**
   * If true, instances will use the direct creation mechanism into cassandra.  This is only valid if the
   * operation is createBatch and the type is in Cassandra.
   */
  readonly createDirect?: boolean;
  withCreateDirect(createDirect: boolean): TouchSpec;

  /**
   * Indicates that the upsert request should not attempt to dedup incoming input.
   */
  readonly noHistoryDedup?: boolean;
  withNoHistoryDedup(noHistoryDedup: boolean): TouchSpec;

  /**
   * Indicates which parent field should be used for deduping timed relations.
   */
  readonly timedRelationParentField?: string | null;
  withTimedRelationParentField(timedRelationParentField: string | null): TouchSpec;

  /**
   * If true, and the the type being upserted mixes {@link Versionable}, the update will become a saved version.
   *
   * @see Versionable
   */
  readonly saveVersion?: boolean;
  withSaveVersion(saveVersion: boolean): TouchSpec;

  /**
   * If true and the backing datastore supports it, conflicts on create will be ignored.
   */
  readonly ignoreCreateConflicts?: boolean;
  withIgnoreCreateConflicts(ignoreCreateConflicts: boolean): TouchSpec;

  /**
   * If true and no changes are detected during the upsert operation, the obj will still be "touched" (e.g. the version
   * number will be incremented and the `meta.updated` `meta.updatedBy` and `meta.timestamp` fields will be updated).
   * Otherwise the operation will be a no-op.
   */
  readonly forceTouch?: boolean;
  withForceTouch(forceTouch: boolean): TouchSpec;

  /**
   * When set to something > 0 and there is a backing db that supports it, the timeout for operations/statements on
   * the connection used will be set with this timeout value.  Note that this will apply to all child actions
   * (synchronous only) that occur as part of the action this is called on.  Also note this applies to the execution of
   * individual db operations and not the entire function execution.
   *
   * Note that this will be ignored for any backing datastore that does not support it.
   */
  readonly stmtTimeoutMs?: number | null;
  withStmtTimeoutMs(stmtTimeoutMs: number | null): TouchSpec;

  /**
   * Indicates that the upsert operation is idempotent.  In this context it means that any version numbers on the input
   * objs will be ignored (i.e. no version checking will be done).  If any internal version conflicts occur (strictly
   * due to timing/high concurrency, the operation will be internally retried based on the `UpsertSpec#retrySpec`. For
   * non-idempotent operations (the default), any version conflict will cause the operation to fail (will currently
   * only log a warning but will eventually cause the operation to fail).
   */
  readonly idempotent?: boolean;
  withIdempotent(idempotent: boolean): TouchSpec;

  /**
   * FOR INTERNAL USE ONLY - When true, any attempt to update an existing obj (either through update, upsert or merge)
   * where no version number was provided in the input, will be considered a version conflict.  For the new upsertObjs,
   * updateObjs, and mergeObjs, this will cause the `objs` lambda to be called again to address the situation.  This
   * will enforce that those new apis are used properly.  For the existing apis, the version conflict would cause them
   * to fail.  Note that since this is for internal use only, that scenario will not occur yet.
   *
   * This will be removed once we fully enforce version control and only allow a missing version number for legitimate
   * idempotent operations (e.g. DI).
   */
  readonly strictVersionCheck?: boolean;
  withStrictVersionCheck(strictVersionCheck: boolean): TouchSpec;

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
  static fromJson(json: any | null): TouchSpec | null;

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
  static fromJsonString(json: string | null): TouchSpec | null;

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
  static fromXmlString(xml: string | null): TouchSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): TouchSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): TouchSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TouchSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TouchSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TouchSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TouchSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): TouchSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TouchSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TouchSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): TouchSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): TouchSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): TouchSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): TouchSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): TouchSpec;

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
  withoutFieldAtPath(path: string): TouchSpec;

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
  withoutField(field: string | null): TouchSpec;

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
  withoutField(field: FieldType | null): TouchSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): TouchSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): TouchSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): TouchSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): TouchSpec;

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
  defaultField(field: string): TouchSpec;

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
  defaultField(field: FieldType): TouchSpec;

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
  unsetField(field: string): TouchSpec;

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
  unsetField(field: FieldType): TouchSpec;

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
  removeField(field: string): TouchSpec;

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
  removeField(field: FieldType): TouchSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): TouchSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): TouchSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): TouchSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): TouchSpec;

  mergeJson(json: any | null): TouchSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): TouchSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): TouchSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<TouchSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<TouchSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<TouchSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<TouchSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<TouchSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, TouchSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, TouchSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<TouchSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<TouchSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): TouchSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): TouchSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): TouchSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): TouchSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): TouchSpec;

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
  static make(fields: any, withDefaults?: boolean): TouchSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): TouchSpec;

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
  afterMake(): TouchSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): TouchSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<TouchSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): TouchSpec;

  /**
   * @return new instance of this spec with `retrySpec` set
   */
  withRetry(maxRetries?: number | null, initialSleepMillis?: number | null, exponent?: number | null): TouchSpec | null;

  /**
   * @return instance of this spec with `retrySpec`'s `maxTotalMillis` set
   */
  static timeoutSeconds(secs: number | null): TouchSpec;
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

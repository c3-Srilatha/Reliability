// TypeScript definitions for the C3 type RefreshUniqueIndexesSpec

/**
 * Spec for the {@link Persistable#refreshUniqueIndexes} function.
 *
 * @remarks this represents a value passed to a method that expects an instance of RefreshUniqueIndexesSpec
 */
declare interface IRefreshUniqueIndexesSpec {

  /**
   * For {@link App#rebuild} operations, used to pass the type associated with a request in a particular batch.
   */
  objTypeRef?: IType | null;

  /**
   * Specific list of ids to process/refresh.  If specified, then {@link startFromId} and {@link endId} are ignored.
   * If not specified (or empty) then all will be refreshed, applying any specified {@link startFromId} and
   * {@link endId}.
   */
  ids?: C3.Array<string | null> | Array<string | null>;

  /**
   * Starting id for a range of ids to process.  Ignored if {@link ids} is also specified and not empty.
   */
  startFromId?: string | null;

  /**
   * Ending id for a range of ids to process.  Ignored if {@link startFromId} is not specified and not empty.
   */
  endId?: string | null;

  /**
   * Filter to identify which objs to process.  Can be specified in addition to {@link ids} or
   * {@link startFromId}/{@link endId}.  In that case only objs that satisfy both the filter and the id base filter
   * will be promised.
   */
  filter?: string | null;

  /**
   * Number of ids to include in range id search for each invalidation request for for async call.
   */
  batchSize?: number | null;

  /**
   * Number of objs to operate on in synchronous call.  When specified in async call, the value is passed in to
   * subsequent synchronous call. Defaults to {@link batchSize}.
   */
  subBatchSize?: number | null;

  /**
   * Number of entries to submit to the invalidation queue at one time for async call.
   */
  invalidationsBatchSize?: number | null;

  /**
   * True if the request should be processed synchronously.
   */
  sync?: boolean;

  /**
   * Initial priority of batch jobs started from async processing.
   */
  priority?: number | null;

  /**
   * If the request is part of a larger batch job (e.g. {@link App#rebuild}), this will be set by the framework to the owning batch job for orchestration.
   */
  batchJob?: IObj | null;

  /**
   * Numerical batch number set by the framework in {@link BatchJob.scheduleObjBatch}
   */
  batchNum?: number | null;

  /**
   * Indicates that the job is in the disabled state meaning that no queue entries will be processed for the job.
   * This should only be set manually when initially creating/starting the job.  To disable/enable a running job call
   * {@link disable}/{@link enable}.
   */
  disabled?: boolean;

  /**
   * The maximum number of invalidation queue entries that will be processed simultaneously for a job.  If -1, no limit
   * is applied. This is enforced independently of {@link maxConcurrencyPerNode}.
   */
  maxConcurrency?: number | null;

  /**
   * The maximum number of invalidation queue entries that will be processed simultaneously for a job per node.  If -1,
   * no limit is applied.  This is enforced independently of {@link maxConcurrency}.
   */
  maxConcurrencyPerNode?: number | null;

  /**
   * If true, the appropriate functions (e.g. map/reduce in MapReduce and processBatch in BatchJob) will be run as the
   * user who started the job.  If false, they will be run as root.
   */
  runAsUser?: boolean | null;

  /**
   * When non-null, invalidation queue entries for the job will only be processed by servers with a matching
   * nodePool.  When null, invalidation queue entries for the job will only be processed by servers from default
   * nodePool.
   */
  nodePool?: string | null;

  /**
   * If true, attempts to start the job will be ignored if it is already running and no error will be thrown.  This is useful,
   * for instance, if a cron job starts a job and the job from a previous cron invocation may not have completed before the next
   * scheduled run.
   *
   * If false, an error will be thrown if an attempt is made to start the job if it is already running.
   */
  skipIfRunning?: boolean | null;

  /**
   * Set to between 1 and 5 to enable auto recovery. See {@link invalidation-queues.c3doc Invalidation Queues} for detailed documentation.
   */
  numAutoRecoveryAttempts?: number | null;
}

/**
 * Spec for the {@link Persistable#refreshUniqueIndexes} function.
 *
 * @remarks this represents a made instance of RefreshUniqueIndexesSpec
 */
declare class RefreshUniqueIndexesSpec extends Obj {

  /**
   * For {@link App#rebuild} operations, used to pass the type associated with a request in a particular batch.
   */
  readonly objTypeRef?: Type | null;
  withObjTypeRef(objTypeRef: IType | null): RefreshUniqueIndexesSpec;

  /**
   * Specific list of ids to process/refresh.  If specified, then {@link startFromId} and {@link endId} are ignored.
   * If not specified (or empty) then all will be refreshed, applying any specified {@link startFromId} and
   * {@link endId}.
   */
  readonly ids?: C3.Array<string | null>;
  withIds(ids: C3.Array<string | null> | Array<string | null>): RefreshUniqueIndexesSpec;

  /**
   * Starting id for a range of ids to process.  Ignored if {@link ids} is also specified and not empty.
   */
  readonly startFromId?: string | null;
  withStartFromId(startFromId: string | null): RefreshUniqueIndexesSpec;

  /**
   * Ending id for a range of ids to process.  Ignored if {@link startFromId} is not specified and not empty.
   */
  readonly endId?: string | null;
  withEndId(endId: string | null): RefreshUniqueIndexesSpec;

  /**
   * Filter to identify which objs to process.  Can be specified in addition to {@link ids} or
   * {@link startFromId}/{@link endId}.  In that case only objs that satisfy both the filter and the id base filter
   * will be promised.
   */
  readonly filter?: string | null;
  withFilter(filter: string | null): RefreshUniqueIndexesSpec;

  /**
   * Number of ids to include in range id search for each invalidation request for for async call.
   */
  readonly batchSize?: number | null;
  withBatchSize(batchSize: number | null): RefreshUniqueIndexesSpec;

  /**
   * Number of objs to operate on in synchronous call.  When specified in async call, the value is passed in to
   * subsequent synchronous call. Defaults to {@link batchSize}.
   */
  readonly subBatchSize?: number | null;
  withSubBatchSize(subBatchSize: number | null): RefreshUniqueIndexesSpec;

  /**
   * Number of entries to submit to the invalidation queue at one time for async call.
   */
  readonly invalidationsBatchSize?: number | null;
  withInvalidationsBatchSize(invalidationsBatchSize: number | null): RefreshUniqueIndexesSpec;

  /**
   * True if the request should be processed synchronously.
   */
  readonly sync?: boolean;
  withSync(sync: boolean): RefreshUniqueIndexesSpec;

  /**
   * Initial priority of batch jobs started from async processing.
   */
  readonly priority?: number | null;
  withPriority(priority: number | null): RefreshUniqueIndexesSpec;

  /**
   * If the request is part of a larger batch job (e.g. {@link App#rebuild}), this will be set by the framework to the owning batch job for orchestration.
   */
  readonly batchJob?: Obj | null;
  withBatchJob(batchJob: IObj | null): RefreshUniqueIndexesSpec;

  /**
   * Numerical batch number set by the framework in {@link BatchJob.scheduleObjBatch}
   */
  readonly batchNum?: number | null;
  withBatchNum(batchNum: number | null): RefreshUniqueIndexesSpec;

  /**
   * Indicates that the job is in the disabled state meaning that no queue entries will be processed for the job.
   * This should only be set manually when initially creating/starting the job.  To disable/enable a running job call
   * {@link disable}/{@link enable}.
   */
  readonly disabled?: boolean;
  withDisabled(disabled: boolean): RefreshUniqueIndexesSpec;

  /**
   * The maximum number of invalidation queue entries that will be processed simultaneously for a job.  If -1, no limit
   * is applied. This is enforced independently of {@link maxConcurrencyPerNode}.
   */
  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): RefreshUniqueIndexesSpec;

  /**
   * The maximum number of invalidation queue entries that will be processed simultaneously for a job per node.  If -1,
   * no limit is applied.  This is enforced independently of {@link maxConcurrency}.
   */
  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): RefreshUniqueIndexesSpec;

  /**
   * If true, the appropriate functions (e.g. map/reduce in MapReduce and processBatch in BatchJob) will be run as the
   * user who started the job.  If false, they will be run as root.
   */
  readonly runAsUser?: boolean | null;
  withRunAsUser(runAsUser: boolean | null): RefreshUniqueIndexesSpec;

  /**
   * When non-null, invalidation queue entries for the job will only be processed by servers with a matching
   * nodePool.  When null, invalidation queue entries for the job will only be processed by servers from default
   * nodePool.
   */
  readonly nodePool?: string | null;
  withNodePool(nodePool: string | null): RefreshUniqueIndexesSpec;

  /**
   * If true, attempts to start the job will be ignored if it is already running and no error will be thrown.  This is useful,
   * for instance, if a cron job starts a job and the job from a previous cron invocation may not have completed before the next
   * scheduled run.
   *
   * If false, an error will be thrown if an attempt is made to start the job if it is already running.
   */
  readonly skipIfRunning?: boolean | null;
  withSkipIfRunning(skipIfRunning: boolean | null): RefreshUniqueIndexesSpec;

  /**
   * Set to between 1 and 5 to enable auto recovery. See {@link invalidation-queues.c3doc Invalidation Queues} for detailed documentation.
   */
  readonly numAutoRecoveryAttempts?: number | null;
  withNumAutoRecoveryAttempts(numAutoRecoveryAttempts: number | null): RefreshUniqueIndexesSpec;

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
  static fromJson(json: any | null): RefreshUniqueIndexesSpec | null;

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
  static fromJsonString(json: string | null): RefreshUniqueIndexesSpec | null;

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
  static fromXmlString(xml: string | null): RefreshUniqueIndexesSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): RefreshUniqueIndexesSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): RefreshUniqueIndexesSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): RefreshUniqueIndexesSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): RefreshUniqueIndexesSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<RefreshUniqueIndexesSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<RefreshUniqueIndexesSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): RefreshUniqueIndexesSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): RefreshUniqueIndexesSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): RefreshUniqueIndexesSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): RefreshUniqueIndexesSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): RefreshUniqueIndexesSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): RefreshUniqueIndexesSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): RefreshUniqueIndexesSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): RefreshUniqueIndexesSpec;

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
  withoutFieldAtPath(path: string): RefreshUniqueIndexesSpec;

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
  withoutField(field: string | null): RefreshUniqueIndexesSpec;

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
  withoutField(field: FieldType | null): RefreshUniqueIndexesSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): RefreshUniqueIndexesSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): RefreshUniqueIndexesSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): RefreshUniqueIndexesSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): RefreshUniqueIndexesSpec;

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
  defaultField(field: string): RefreshUniqueIndexesSpec;

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
  defaultField(field: FieldType): RefreshUniqueIndexesSpec;

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
  unsetField(field: string): RefreshUniqueIndexesSpec;

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
  unsetField(field: FieldType): RefreshUniqueIndexesSpec;

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
  removeField(field: string): RefreshUniqueIndexesSpec;

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
  removeField(field: FieldType): RefreshUniqueIndexesSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): RefreshUniqueIndexesSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): RefreshUniqueIndexesSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): RefreshUniqueIndexesSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): RefreshUniqueIndexesSpec;

  mergeJson(json: any | null): RefreshUniqueIndexesSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): RefreshUniqueIndexesSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): RefreshUniqueIndexesSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<RefreshUniqueIndexesSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<RefreshUniqueIndexesSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<RefreshUniqueIndexesSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<RefreshUniqueIndexesSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<RefreshUniqueIndexesSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, RefreshUniqueIndexesSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, RefreshUniqueIndexesSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<RefreshUniqueIndexesSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<RefreshUniqueIndexesSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): RefreshUniqueIndexesSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): RefreshUniqueIndexesSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): RefreshUniqueIndexesSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): RefreshUniqueIndexesSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): RefreshUniqueIndexesSpec;

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
  static make(fields: any, withDefaults?: boolean): RefreshUniqueIndexesSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): RefreshUniqueIndexesSpec;

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
  afterMake(): RefreshUniqueIndexesSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): RefreshUniqueIndexesSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<RefreshUniqueIndexesSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): RefreshUniqueIndexesSpec;
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

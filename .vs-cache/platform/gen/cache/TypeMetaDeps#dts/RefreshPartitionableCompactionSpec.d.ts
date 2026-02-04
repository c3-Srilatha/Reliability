// TypeScript definitions for the C3 type RefreshPartitionableCompactionSpec

/**
 * @remarks this represents a value passed to a method that expects an instance of RefreshPartitionableCompactionSpec
 */
declare interface IRefreshPartitionableCompactionSpec {

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
   * number of new cols to read during fillBuckets operation - this limits the memory footprint in memory and limits
   * size of records written to cassandra during fillBuckets. Use -1 to read everything (with caution)
   */
  newColReadCount?: number | null;

  /**
   * Limit on the number of objects in the new col c__nc__ col to not blow up memory when #newColReadCount columns are
   * read in memory
   */
  newColMaxObjCount?: number | null;

  /**
   * If set, then retries {@link Partitionable#fillBuckets} or {@link Partitionable#compact} actions repeatedly until
   * it is fully compacted, up to {@link PartitionBucketStrategy#maxRetries}.
   * This will be done incrementally, so it will not use significant memory.
   * If #force or #fullCompact is set, then this is ignored
   */
  rewriteAllIncremental?: boolean;

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

  /**
   * If true, the job will propagate {@link Action.Context}.
   * This should only be set manually when starting the job.
   */
  propagateActionContext?: boolean;

  /**
   * Target type ref - has to be persistable and has to mixin TargetType - if not provided then TargetType will
   * be used instead
   */
  targetType?: IType | null;

  /**
   * If true, the file system will be used for intermediate value storage.  Otherwise, the default KV store will
   * be used.
   */
  useFileSystemForInterVals?: boolean;

  /**
   * If true, the `batchIds` function will be called on the target type during `readInput` to allow for delegating the
   * i/o associated with reading the target objs to the map processing phase.  The `numBatches` or `batchSize` and
   * `filter` for the job run will be supplied as parameters to the `batchIds` call.
   *
   * IMPORTANT - See {@link Fetchable#batchIds} for information on how the `numBatches` and `batchSize` parameters are
   *             interpreted.
   *
   * Not valid if order is specified
   */
  useBatchIdsForReadInput?: boolean;

  /**
   * include spec for c3 Objs passed to map function as inValue array
   *
   * default is TargetType @db(partitionKeyField) or "id" if partitionKeyField is not specified
   *
   * if include is a single field path then only unique values will be present in c3 Objs in inValue array
   */
  include?: string | null;

  /**
   * optional order
   *
   * if not specified, order will be by the id of the target type.
   */
  order?: string | null;

  /**
   * optional number of TargetType objs to process; actual number processed will be exactly this number (or
   * less if there is less data)
   *
   * only valid when order is specified
   */
  limit?: number | null;

  /**
   * optional percentage of TargetType objs to process; actual number will be approximate
   *
   * only valid when order and useBatchIdsForReadInput not specified
   */
  samplePct?: number | null;

  /**
   * optional total number of batches to break the target data into (e.g. the number of dispatchMap entries that
   * will be put in the MapReduceQueue)
   *
   * if specified, batchSize will be ignored
   */
  numBatches?: number | null;

  /**
   * optional flag to abort on first error (by default on first error job will continue processing all maps or
   *
   * reduces and will simply mark state as "failing" - it can be recovered from this state using "recover" action)
   */
  abortOnError?: boolean;

  /**
   * If set, only places the specified number of objects per hot bucket
   */
  numObjsPerHotBucket?: number | null;

  /**
   * If set, attempts to hold as many objects as can fit in the allowed size in Mbs. The size in every bucket will be close
   * to the one specified but is not guaranteed to be exactly the same
   */
  sizeMbPerHotBucket?: number | null;

  /**
   * If set, buckets objects in the specified number of buckets. Can be used in conjunction with {@link numObjsPerHotBucket}
   * & {@link numHotBuckets}, and this will limit the max number of hot buckets. If not specified, a default number of
   * hot buckets will be created
   */
  numHotBuckets?: number | null;

  /**
   * Max value across all the buckets in hot storage. E.g. max date until which data should be in hot storage (e.g. "start < (now() - period(6, 'MONTH'))"
   * Only supports filter on {@link Ann.Db#persisenceOrder} for the given type
   */
  maxHotSortKey?: string | null;

  /**
   * Multiplier from each hot bucket size. If hot buckets are partitioned by {@link numObjsPerHotBucket} then this multiplier
   * will result in max object count in each cold bucket. If it is partitioned by {@link sizeMbPerHotBucket} then
   * this multiplier will result in max size in mb in each cold bucket. Of course, the number of objects and size could
   * be less if the total number of objects in cold bucket is fewer than the max capacity.
   * If set, determines the size of each cold bucket & the total number of cold buckets depending on remaining data from
   * hot + size of each cold bucket
   */
  coldBucketMultiplier?: number | null;

  /**
   * Schedule at which compaction needs to run. {@see DataPartition#compact}. Defaults to 1st every month at 00:00
   */
  compactionSchedule?: string | null;

  /**
   * If set, no error will be thrown if packing fails and will log an error instead.
   */
  doNotThrowOnFailure?: boolean;

  /**
   * Determines how long to continuously pack if {@link PartitionBucketNewColSpec#rewriteAllIncremental} is true.
   * Set to -1 to pack as long as nc columns exist, but use with caution!
   */
  maxRetries?: number | null;

  /**
   * **CAUTION** For Internal Use only
   * If set, performs full compaction {@see DataPartition#fullCompact}. This operation is costly and reads all the data
   * (not incremental) and tries to stick to the spec as close as possible. Regular compaction is incremental & tries
   * to touch as little data as needed but may end up with not perfectly sized buckets
   */
  fullCompact?: boolean;

  /**
   * **CAUTION** For Internal Use only
   * If set, the state column of the partition will be re-written based on the source of truth currently in the row.
   * This will reconcile orphaned hot buckets and remove references to buckets that no longer exist.
   */
  repair?: boolean;

  /**
   * If set, the sort key is determined by the lambda function. Input is a Partitionable object and is
   * expected to produce the sort key as string output. This key will be used to group various {@link Partitionable} objects
   * in buckets
   */
  bucketIdSupplier?: λFunction<Partitionable<any> | null, string> | null;

  /**
   * If set, force buckets all new columns instead of incrementally filling of buckets or compaction. Note, using this
   * could use significant memory, so use with caution
   */
  force?: boolean;

  /**
   * The type of partitionable to refresh
   */
  partitionableType: IType;
}


interface λFunction<T, R> {
  (t: T): R
}
/**
 * @remarks this represents a made instance of RefreshPartitionableCompactionSpec
 */
declare class RefreshPartitionableCompactionSpec extends Obj {

  /**
   * For {@link App#rebuild} operations, used to pass the type associated with a request in a particular batch.
   */
  readonly objTypeRef?: Type | null;
  withObjTypeRef(objTypeRef: IType | null): RefreshPartitionableCompactionSpec;

  /**
   * Specific list of ids to process/refresh.  If specified, then {@link startFromId} and {@link endId} are ignored.
   * If not specified (or empty) then all will be refreshed, applying any specified {@link startFromId} and
   * {@link endId}.
   */
  readonly ids?: C3.Array<string | null>;
  withIds(ids: C3.Array<string | null> | Array<string | null>): RefreshPartitionableCompactionSpec;

  /**
   * Starting id for a range of ids to process.  Ignored if {@link ids} is also specified and not empty.
   */
  readonly startFromId?: string | null;
  withStartFromId(startFromId: string | null): RefreshPartitionableCompactionSpec;

  /**
   * Ending id for a range of ids to process.  Ignored if {@link startFromId} is not specified and not empty.
   */
  readonly endId?: string | null;
  withEndId(endId: string | null): RefreshPartitionableCompactionSpec;

  /**
   * Filter to identify which objs to process.  Can be specified in addition to {@link ids} or
   * {@link startFromId}/{@link endId}.  In that case only objs that satisfy both the filter and the id base filter
   * will be promised.
   */
  readonly filter?: string | null;
  withFilter(filter: string | null): RefreshPartitionableCompactionSpec;

  /**
   * Number of ids to include in range id search for each invalidation request for for async call.
   */
  readonly batchSize?: number | null;
  withBatchSize(batchSize: number | null): RefreshPartitionableCompactionSpec;

  /**
   * Number of objs to operate on in synchronous call.  When specified in async call, the value is passed in to
   * subsequent synchronous call. Defaults to {@link batchSize}.
   */
  readonly subBatchSize?: number | null;
  withSubBatchSize(subBatchSize: number | null): RefreshPartitionableCompactionSpec;

  /**
   * Number of entries to submit to the invalidation queue at one time for async call.
   */
  readonly invalidationsBatchSize?: number | null;
  withInvalidationsBatchSize(invalidationsBatchSize: number | null): RefreshPartitionableCompactionSpec;

  /**
   * True if the request should be processed synchronously.
   */
  readonly sync?: boolean;
  withSync(sync: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Initial priority of batch jobs started from async processing.
   */
  readonly priority?: number | null;
  withPriority(priority: number | null): RefreshPartitionableCompactionSpec;

  /**
   * If the request is part of a larger batch job (e.g. {@link App#rebuild}), this will be set by the framework to the owning batch job for orchestration.
   */
  readonly batchJob?: Obj | null;
  withBatchJob(batchJob: IObj | null): RefreshPartitionableCompactionSpec;

  /**
   * Numerical batch number set by the framework in {@link BatchJob.scheduleObjBatch}
   */
  readonly batchNum?: number | null;
  withBatchNum(batchNum: number | null): RefreshPartitionableCompactionSpec;

  /**
   * number of new cols to read during fillBuckets operation - this limits the memory footprint in memory and limits
   * size of records written to cassandra during fillBuckets. Use -1 to read everything (with caution)
   */
  readonly newColReadCount?: number | null;
  withNewColReadCount(newColReadCount: number | null): RefreshPartitionableCompactionSpec;

  /**
   * Limit on the number of objects in the new col c__nc__ col to not blow up memory when #newColReadCount columns are
   * read in memory
   */
  readonly newColMaxObjCount?: number | null;
  withNewColMaxObjCount(newColMaxObjCount: number | null): RefreshPartitionableCompactionSpec;

  /**
   * If set, then retries {@link Partitionable#fillBuckets} or {@link Partitionable#compact} actions repeatedly until
   * it is fully compacted, up to {@link PartitionBucketStrategy#maxRetries}.
   * This will be done incrementally, so it will not use significant memory.
   * If #force or #fullCompact is set, then this is ignored
   */
  readonly rewriteAllIncremental?: boolean;
  withRewriteAllIncremental(rewriteAllIncremental: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Indicates that the job is in the disabled state meaning that no queue entries will be processed for the job.
   * This should only be set manually when initially creating/starting the job.  To disable/enable a running job call
   * {@link disable}/{@link enable}.
   */
  readonly disabled?: boolean;
  withDisabled(disabled: boolean): RefreshPartitionableCompactionSpec;

  /**
   * The maximum number of invalidation queue entries that will be processed simultaneously for a job.  If -1, no limit
   * is applied. This is enforced independently of {@link maxConcurrencyPerNode}.
   */
  readonly maxConcurrency?: number | null;
  withMaxConcurrency(maxConcurrency: number | null): RefreshPartitionableCompactionSpec;

  /**
   * The maximum number of invalidation queue entries that will be processed simultaneously for a job per node.  If -1,
   * no limit is applied.  This is enforced independently of {@link maxConcurrency}.
   */
  readonly maxConcurrencyPerNode?: number | null;
  withMaxConcurrencyPerNode(maxConcurrencyPerNode: number | null): RefreshPartitionableCompactionSpec;

  /**
   * If true, the appropriate functions (e.g. map/reduce in MapReduce and processBatch in BatchJob) will be run as the
   * user who started the job.  If false, they will be run as root.
   */
  readonly runAsUser?: boolean | null;
  withRunAsUser(runAsUser: boolean | null): RefreshPartitionableCompactionSpec;

  /**
   * When non-null, invalidation queue entries for the job will only be processed by servers with a matching
   * nodePool.  When null, invalidation queue entries for the job will only be processed by servers from default
   * nodePool.
   */
  readonly nodePool?: string | null;
  withNodePool(nodePool: string | null): RefreshPartitionableCompactionSpec;

  /**
   * If true, attempts to start the job will be ignored if it is already running and no error will be thrown.  This is useful,
   * for instance, if a cron job starts a job and the job from a previous cron invocation may not have completed before the next
   * scheduled run.
   *
   * If false, an error will be thrown if an attempt is made to start the job if it is already running.
   */
  readonly skipIfRunning?: boolean | null;
  withSkipIfRunning(skipIfRunning: boolean | null): RefreshPartitionableCompactionSpec;

  /**
   * Set to between 1 and 5 to enable auto recovery. See {@link invalidation-queues.c3doc Invalidation Queues} for detailed documentation.
   */
  readonly numAutoRecoveryAttempts?: number | null;
  withNumAutoRecoveryAttempts(numAutoRecoveryAttempts: number | null): RefreshPartitionableCompactionSpec;

  /**
   * If true, the job will propagate {@link Action.Context}.
   * This should only be set manually when starting the job.
   */
  readonly propagateActionContext?: boolean;
  withPropagateActionContext(propagateActionContext: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Target type ref - has to be persistable and has to mixin TargetType - if not provided then TargetType will
   * be used instead
   */
  readonly targetType?: Type | null;
  withTargetType(targetType: IType | null): RefreshPartitionableCompactionSpec;

  /**
   * If true, the file system will be used for intermediate value storage.  Otherwise, the default KV store will
   * be used.
   */
  readonly useFileSystemForInterVals?: boolean;
  withUseFileSystemForInterVals(useFileSystemForInterVals: boolean): RefreshPartitionableCompactionSpec;

  /**
   * If true, the `batchIds` function will be called on the target type during `readInput` to allow for delegating the
   * i/o associated with reading the target objs to the map processing phase.  The `numBatches` or `batchSize` and
   * `filter` for the job run will be supplied as parameters to the `batchIds` call.
   *
   * IMPORTANT - See {@link Fetchable#batchIds} for information on how the `numBatches` and `batchSize` parameters are
   *             interpreted.
   *
   * Not valid if order is specified
   */
  readonly useBatchIdsForReadInput?: boolean;
  withUseBatchIdsForReadInput(useBatchIdsForReadInput: boolean): RefreshPartitionableCompactionSpec;

  /**
   * include spec for c3 Objs passed to map function as inValue array
   *
   * default is TargetType @db(partitionKeyField) or "id" if partitionKeyField is not specified
   *
   * if include is a single field path then only unique values will be present in c3 Objs in inValue array
   */
  readonly include?: string | null;
  withInclude(include: string | null): RefreshPartitionableCompactionSpec;

  /**
   * optional order
   *
   * if not specified, order will be by the id of the target type.
   */
  readonly order?: string | null;
  withOrder(order: string | null): RefreshPartitionableCompactionSpec;

  /**
   * optional number of TargetType objs to process; actual number processed will be exactly this number (or
   * less if there is less data)
   *
   * only valid when order is specified
   */
  readonly limit?: number | null;
  withLimit(limit: number | null): RefreshPartitionableCompactionSpec;

  /**
   * optional percentage of TargetType objs to process; actual number will be approximate
   *
   * only valid when order and useBatchIdsForReadInput not specified
   */
  readonly samplePct?: number | null;
  withSamplePct(samplePct: number | null): RefreshPartitionableCompactionSpec;

  /**
   * optional total number of batches to break the target data into (e.g. the number of dispatchMap entries that
   * will be put in the MapReduceQueue)
   *
   * if specified, batchSize will be ignored
   */
  readonly numBatches?: number | null;
  withNumBatches(numBatches: number | null): RefreshPartitionableCompactionSpec;

  /**
   * optional flag to abort on first error (by default on first error job will continue processing all maps or
   *
   * reduces and will simply mark state as "failing" - it can be recovered from this state using "recover" action)
   */
  readonly abortOnError?: boolean;
  withAbortOnError(abortOnError: boolean): RefreshPartitionableCompactionSpec;

  /**
   * If set, only places the specified number of objects per hot bucket
   */
  readonly numObjsPerHotBucket?: number | null;
  withNumObjsPerHotBucket(numObjsPerHotBucket: number | null): RefreshPartitionableCompactionSpec;

  /**
   * If set, attempts to hold as many objects as can fit in the allowed size in Mbs. The size in every bucket will be close
   * to the one specified but is not guaranteed to be exactly the same
   */
  readonly sizeMbPerHotBucket?: number | null;
  withSizeMbPerHotBucket(sizeMbPerHotBucket: number | null): RefreshPartitionableCompactionSpec;

  /**
   * If set, buckets objects in the specified number of buckets. Can be used in conjunction with {@link numObjsPerHotBucket}
   * & {@link numHotBuckets}, and this will limit the max number of hot buckets. If not specified, a default number of
   * hot buckets will be created
   */
  readonly numHotBuckets?: number | null;
  withNumHotBuckets(numHotBuckets: number | null): RefreshPartitionableCompactionSpec;

  /**
   * Max value across all the buckets in hot storage. E.g. max date until which data should be in hot storage (e.g. "start < (now() - period(6, 'MONTH'))"
   * Only supports filter on {@link Ann.Db#persisenceOrder} for the given type
   */
  readonly maxHotSortKey?: string | null;
  withMaxHotSortKey(maxHotSortKey: string | null): RefreshPartitionableCompactionSpec;

  /**
   * Multiplier from each hot bucket size. If hot buckets are partitioned by {@link numObjsPerHotBucket} then this multiplier
   * will result in max object count in each cold bucket. If it is partitioned by {@link sizeMbPerHotBucket} then
   * this multiplier will result in max size in mb in each cold bucket. Of course, the number of objects and size could
   * be less if the total number of objects in cold bucket is fewer than the max capacity.
   * If set, determines the size of each cold bucket & the total number of cold buckets depending on remaining data from
   * hot + size of each cold bucket
   */
  readonly coldBucketMultiplier?: number | null;
  withColdBucketMultiplier(coldBucketMultiplier: number | null): RefreshPartitionableCompactionSpec;

  /**
   * Schedule at which compaction needs to run. {@see DataPartition#compact}. Defaults to 1st every month at 00:00
   */
  readonly compactionSchedule?: string | null;
  withCompactionSchedule(compactionSchedule: string | null): RefreshPartitionableCompactionSpec;

  /**
   * If set, no error will be thrown if packing fails and will log an error instead.
   */
  readonly doNotThrowOnFailure?: boolean;
  withDoNotThrowOnFailure(doNotThrowOnFailure: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Determines how long to continuously pack if {@link PartitionBucketNewColSpec#rewriteAllIncremental} is true.
   * Set to -1 to pack as long as nc columns exist, but use with caution!
   */
  readonly maxRetries?: number | null;
  withMaxRetries(maxRetries: number | null): RefreshPartitionableCompactionSpec;

  /**
   * **CAUTION** For Internal Use only
   * If set, performs full compaction {@see DataPartition#fullCompact}. This operation is costly and reads all the data
   * (not incremental) and tries to stick to the spec as close as possible. Regular compaction is incremental & tries
   * to touch as little data as needed but may end up with not perfectly sized buckets
   */
  readonly fullCompact?: boolean;
  withFullCompact(fullCompact: boolean): RefreshPartitionableCompactionSpec;

  /**
   * **CAUTION** For Internal Use only
   * If set, the state column of the partition will be re-written based on the source of truth currently in the row.
   * This will reconcile orphaned hot buckets and remove references to buckets that no longer exist.
   */
  readonly repair?: boolean;
  withRepair(repair: boolean): RefreshPartitionableCompactionSpec;

  /**
   * If set, the sort key is determined by the lambda function. Input is a Partitionable object and is
   * expected to produce the sort key as string output. This key will be used to group various {@link Partitionable} objects
   * in buckets
   */
  readonly bucketIdSupplier?: λFunction<Partitionable<any> | null, string> | null;
  withBucketIdSupplier(bucketIdSupplier: λFunction<Partitionable<any> | null, string> | null): RefreshPartitionableCompactionSpec;

  /**
   * If set, force buckets all new columns instead of incrementally filling of buckets or compaction. Note, using this
   * could use significant memory, so use with caution
   */
  readonly force?: boolean;
  withForce(force: boolean): RefreshPartitionableCompactionSpec;

  /**
   * The type of partitionable to refresh
   */
  readonly partitionableType: Type;
  withPartitionableType(partitionableType: IType): RefreshPartitionableCompactionSpec;

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
  static fromJson(json: any | null): RefreshPartitionableCompactionSpec | null;

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
  static fromJsonString(json: string | null): RefreshPartitionableCompactionSpec | null;

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
  static fromXmlString(xml: string | null): RefreshPartitionableCompactionSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): RefreshPartitionableCompactionSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): RefreshPartitionableCompactionSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): RefreshPartitionableCompactionSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<RefreshPartitionableCompactionSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<RefreshPartitionableCompactionSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): RefreshPartitionableCompactionSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): RefreshPartitionableCompactionSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): RefreshPartitionableCompactionSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): RefreshPartitionableCompactionSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): RefreshPartitionableCompactionSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): RefreshPartitionableCompactionSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): RefreshPartitionableCompactionSpec;

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
  withoutFieldAtPath(path: string): RefreshPartitionableCompactionSpec;

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
  withoutField(field: string | null): RefreshPartitionableCompactionSpec;

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
  withoutField(field: FieldType | null): RefreshPartitionableCompactionSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): RefreshPartitionableCompactionSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): RefreshPartitionableCompactionSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): RefreshPartitionableCompactionSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): RefreshPartitionableCompactionSpec;

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
  defaultField(field: string): RefreshPartitionableCompactionSpec;

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
  defaultField(field: FieldType): RefreshPartitionableCompactionSpec;

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
  unsetField(field: string): RefreshPartitionableCompactionSpec;

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
  unsetField(field: FieldType): RefreshPartitionableCompactionSpec;

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
  removeField(field: string): RefreshPartitionableCompactionSpec;

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
  removeField(field: FieldType): RefreshPartitionableCompactionSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): RefreshPartitionableCompactionSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): RefreshPartitionableCompactionSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): RefreshPartitionableCompactionSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): RefreshPartitionableCompactionSpec;

  mergeJson(json: any | null): RefreshPartitionableCompactionSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): RefreshPartitionableCompactionSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<RefreshPartitionableCompactionSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<RefreshPartitionableCompactionSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<RefreshPartitionableCompactionSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<RefreshPartitionableCompactionSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<RefreshPartitionableCompactionSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, RefreshPartitionableCompactionSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, RefreshPartitionableCompactionSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<RefreshPartitionableCompactionSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<RefreshPartitionableCompactionSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): RefreshPartitionableCompactionSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): RefreshPartitionableCompactionSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): RefreshPartitionableCompactionSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): RefreshPartitionableCompactionSpec;

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
  static make(fields: any, withDefaults?: boolean): RefreshPartitionableCompactionSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): RefreshPartitionableCompactionSpec;

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
  afterMake(): RefreshPartitionableCompactionSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): RefreshPartitionableCompactionSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<RefreshPartitionableCompactionSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): RefreshPartitionableCompactionSpec;
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

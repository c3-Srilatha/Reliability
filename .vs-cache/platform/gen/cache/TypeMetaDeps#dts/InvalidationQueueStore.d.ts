// TypeScript definitions for the C3 type InvalidationQueueStore

/**
 * Type that defines the api for invalidation queue storage.  All reading/writing of invalidation queue entries must
 * occur through this api.
 *
 * @remarks this represents a value passed to a method that expects an instance of InvalidationQueueStore
 */
declare interface IInvalidationQueueStore {
}

/**
 * Type that defines the api for invalidation queue storage.  All reading/writing of invalidation queue entries must
 * occur through this api.
 *
 * @remarks this represents a made instance of InvalidationQueueStore
 */
declare class InvalidationQueueStore {

  /**
   * Clears all entries from the store type associated with a queue type.
   *
   * @param queueType
   *           Queue type to remove entries for.
   * @param filter
   *           If specified, only entries indicated by the filter will be removed.
   *           If not specified, all entries will be removed.
   */
  static clear(queueType: Type, filter?: InvalidationQueueFilterSpec | null): void;

  /**
   * Clears all entries from the store type associated with a queue type.
   *
   * @param queueType
   *           Queue type to remove entries for.
   * @param entries
   *           List of entries to clear.
   */
  static clearEntries(queueType: Type, entries: C3.Array<InvalidationQueueEntry<any> | null> | null): void;

  /**
   * Clears the contexts for the specified entries in the queue.  This is only valid on queues where a null context is
   * valid and indicates
   * a superset of the action of any non-null context (e.g. CalcFieldsQueue).
   *
   * @param queueType
   *           Queue type to remove entries for.
   * @param filter
   *           If specified, only the entries specified by the filter will be removed.
   *           If not specified, then all entries will be removed.
   */
  static clearContexts(queueType: Type, filter?: InvalidationQueueFilterSpec | null): void;

  /**
   * Invalidate the specified entries in the specified queue.
   *
   * It is the responsibility of the store implementation to properly set the status field on the incoming queue
   * entries.
   *
   * @param queueType
   *           Queue type to process.
   * @param entries
   *           Entries to invalidate.
   * @param grouping
   *           Comma separated list that entries will be grouped by for processing.  If specified, the grouping fields
   *           will be applied in addition to targetTypeId. If not specified, no grouping will be
   *           done.
   * @param autoCommit
   *           True, if the entries should be committed automatically.  False if they will be subsequently committed or
   *           aborted.
   * @param ignoreUniqueConstraintViolation
   *           If true, and the only errors are errors are unique constraint violations, they will be ignored.
   *           Otherwise an exception will be throw on any error, including unique constraint violations.
   */
  static invalidate(queueType: Type, entries: C3.Array<InvalidationQueueEntry<any> | null> | null, grouping?: string | null, autoCommit: boolean, ignoreUniqueConstraintViolations?: boolean): void;

  /**
   * Initializes incoming invalidation queue entries appropriately for storage/dispatching.
   *
   * It is the responsibility of the store implementation to properly set the status field on the incoming queue
   * entries.
   *
   * @param queueType
   *           Queue type to process.
   * @param entries
   *           Entries to invalidate.
   * @param grouping
   *           Comma separated list that entries will be grouped by for processing.  If specified, the grouping fields
   *           will be applied in addition to targetTypeId. If not specified, no grouping will be
   *           done.
   * @param autoCommit
   *           True, if the entries should be committed automatically.  False if they will be subsequently committed or
   *           aborted.
   */
  static initEntries(queueType: Type, entries: C3.Array<InvalidationQueueEntry<any> | null> | null, grouping?: string | null, autoCommit: boolean): C3.Array<InvalidationQueueEntry<any> | null>;

  /**
   * Commit all initial invalidations by the source calling action.
   *
   * @param queueType
   *           Queue type to commit invalidations for.
   * @param srcActionId
   *           Source action that created invalidations to be committed.  This action id was provided in the incoming
   *           entries to {@link invalidate} with autoCommit set to false.
   *
   * @see invalidate
   */
  static commit(queueType: Type, srcActionId: string): void;

  /**
   * Commit all invalidations for a given target object.
   *
   * @param queueType
   *           Queue type to commit invalidations for.
   * @param targetTypeId
   *           Target type id to commit invalidations for.
   * @param targetObjId
   *           Target obj to commit invalidations for.
   */
  static commitAll(queueType: Type, targetTypeId: number, targetObjId: string): void;

  /**
   * Abort all invalidations by the source calling action.
   *
   * @param queueType
   *           Queue type to abort invalidations for.
   * @param srcActionId
   *           Source action that created invalidations to be committed.  This action id was provided in the incoming
   *           entries to {@link invalidate} with autoCommit set to false.
   *
   * @see commit
   */
  static abort(queueType: Type, srcActionId: string): void;

  /**
   * Finds the requested entries
   *
   * @param queueType
   *           Queue type to find invalidations for.
   * @param spec
   *           Optional settings controlling the operation.
   *
   * @return the list of requested entries.
   */
  static find(queueType: Type, spec?: InvalidationQueue.FindSpec | null): C3.Array<InvalidationQueueEntry<any> | null>;

  /**
   * Finds the requested entries (streaming version)
   *
   * @param queueType
   *           Queue type to find invalidations for.
   * @param spec
   *           Optional settings controlling the operation.
   *
   * @return the list of requested entries.
   */
  static findStream(queueType: Type, filter?: InvalidationQueue.FindStreamSpec | null): Stream<InvalidationQueueEntry<any> | null>;

  /**
   * Finds the unique target obj ids for a target app and type
   *
   * @param queueType
   *           Queue type to find the target obj ids for.
   * @param targetTypeId
   *           TargetType to find ids for.
   *
   * @return a stream containing all of the unique target obj ids for the specified target app and type,
   */
  static targetObjIds(queueType: Type, targetTypeId: number): Stream<string | null>;

  /**
   * Finds the unique target obj ids for a specific reschedule key
   *
   * @param queueType
   *           Queue type to find the target obj ids for.
   * @param rescheduleKey
   *           Key to find the target obj ids for.
   *
   * @return a stream containing all of the unique target obj ids for the specified reschedule key,
   */
  static targetObjIdsForRescheduleKey(queueType: Type, rescheduleKey: string): Stream<string | null>;

  /**
   * Returns true if the queue has any entries for the current app/node.
   *
   * @param queueType
   *           Queue type to check for entries.
   *
   * @return true if the queue has any entries for the current app
   */
  static hasEntriesForThisNode(queueType: Type): boolean;

  /**
   * Returns the name of the physical entry type associated with the queue type.
   *
   * @param queueType
   *           Queue type to get the entry type for.
   */
  static entryType(queueType: Type): string | null;

  /**
   * Get status of an invalidation queue.
   *
   * @param queueType
   *           Queue type to get the status for.
   * @param group
   *           Grouping to be applied.  If specified, then the results will be grouped as requested.
   *           If not specified, then no grouping will be done.
   * @param filter
   *           Filter to be applied to the count query.  If not specified, then all entries will be counted.
   * @param excludePaused
   *           If true, then queue entries for paused apps will be ignored, except for the computing count.
   * @param includePendingActions
   *          If true, the number of actions necessary to compute all of the currently pending entries will be computed
   *          and returned in `InvalidationQueueStats.pendingActions`.  Otherwise, 0 will be returned there.
   * @param offset
   *           Offset of first row to return.
   * @param limit
   *           Maximum number of rows to return.
   *
   * @return the status of an invalidation queue.
   */
  static count(queueType: Type, group?: InvalidationQueueGroupSpec | null, filter?: InvalidationQueueFilterSpec | null, excludePaused?: boolean, includePendingActions?: boolean, offset?: number | null, limit?: number | null): C3.Array<InvalidationQueueGroupResult | null>;

  /**
   * Counts the number of computing entries, grouped by target obj.
   *
   * @param queueType
   *           Queue type to get the computing count for.
   * @param forNode
   *           If true, then only actions computing on the node will be counted, otherwise actions from all nodes
   *           will be counted.
   *
   * @return the number of computing entries, grouped by target obj.
   */
  static countComputing(queueType: Type, forNode?: boolean): C3.Array<InvalidationQueueComputingCount | null>;

  /**
   * Counts all of the pending entries for the CronQueue that are being (or will be) processed by the specified node
   * pool
   *
   * @param nodePool
   *        Specific node pool to count the entries for.  The qualifying entries for the requested node pool will be
   *        determined as follows:
   *
   *        “task”        - include all entries that have a null node pool specified THAT AREN'T for runOnLeader jobs
   *
   *        “leader”      - include ONLY entries that have a null node pool specified and are for runOnLeader jobs
   *
   *        “singlenode”  - include ALL entries that have a null node pool specified
   *
   *        Anything else - Include ALL entries that have that specific node pool specified
   * @param excludePaused
   *          If true, only entries in non-paused queues will be included
   *
   * @return the number of qualifying queue entries
   */
  static countPendingCronJobsForNodePool(nodePool: string, excludePaused?: boolean): number;

  /**
   * @return true if the specified node pool process generic tasks (e.g. tasks with no nodePool specified).
   */
  static includeGenericTasks(nodePool: string): boolean;

  /**
   * Gets the set of distinct jobs for a queue along with their priority.  Note that this is only relevant for
   * {@link BatchQueue} and {@link MapReduceQueue}.
   *
   * @param queueType
   *           Queue type to get the computing count for.
   *
   * @return the set of distinct jobs for a queue along with their priority.
   */
  static runningJobs(queueType: Type): C3.Array<InvalidationQueueRunningJobInfo | null>;

  /**
   * @return the base filter to be applied to fetch queue entries for locking
   */
  static lockFilterBase(nodePool?: string | null): string | null;

  /**
   * Gets a summary of locked invalidation queue entries for an invalidation queue.  Results will be grouped by
   * `computingNodeId, targetType, entryType`, and for BatchQueue/MapReduceQueue, `targetObjId`
   * as well.
   *
   * @param queueType
   *        Queue type to get the summary for.
   *
   * @return The requested summary.
   */
  static lockSummary(queueType: Type): C3.Array<InvalidationQueueLockSummary | null>;

  /**
   * Locks and returns entries from a queue to be computed.
   *
   * @param queueType
   *           Queue type to get locked entries for.
   * @param grouping
   *           Comma separated list of fields that entries will be grouped by targetObjId to send to compute.  If
   *           specified, the specified group fields will be applied in addition to targetTypeId.
   *           The implementation should therefore, lock/return all pending entries for any matching grouped entries
   *           that it returns.
   * @param skipTargetObjs
   *           List of target objs to be skipped.  These will typically be mapReduce or batch jobs that are already at
   *           their maxConcurrency settings or cron jobs that are intended to be run on leader nodes while request is
   *           made from a task node.
   * @param onlyTargetObjs
   *           List of specific target objs to be checked.  These will typically be cron jobs that are intended to be
   *           run on leader nodes while request is made from a leader node.
   *
   * @return entries that were locked.
   */
  static lock(queueType: Type, grouping?: string | null, skipTargetObjs?: C3.Array<InvalidationQueueTargetObj | null>, onlyTargetObjs?: C3.Array<InvalidationQueueTargetObj | null>): LockedEntries | null;

  /**
   * Gets information about existing locks that are currently held.
   *
   * @param queueType
   *           Queue type to get locks for.
   * @param computingNodeId
   *           Computing node id to get locks for.  If null, locks for all computing nodes will be returned.
   * @param lockedSinceNumMins
   *           Only locks that have been in place for at least this number of minutes will be returned.  -1 returns all
   *           locks.
   * @param limit
   *           Maximum number of locks to return.
   *
   * @return a list of {@link LockInfo} entries containing the lock id and computing node for the lock.
   */
  static locked(queueType: Type, computingNodeId?: string | null, lockedSinceNumMins?: number | null, limit?: number | null): C3.Array<LockInfo | null>;

  /**
   * Unlocks any entries in the queue that are locked by the specified locks.
   *
   * @param queueType
   *           Queue type that owns the locks.
   * @param lockIds
   *           Ids of locks to unlock.  These ids will be those returned in {@link LockedEntries.id} from {@link lock}
   *           or returned from {@link locked}.
   * @param checkForNullIds
   *           If true, check for null ids as they require special handling.  This will be true when called from
   *           {@link InvalidationQueue#recoverStuck} which may deal with malformed lock entries.
   */
  static unlock(queueType: Type, lockIds: C3.Array<string | null> | null, checkForNullIds?: boolean): void;

  /**
   * The entries were successfully completed.  The entries and locks should be removed.
   *
   * @param queueType
   *           Queue type the entries were for.
   * @param lockedEntries
   *           Entries that were returned from {@link lock}.
   */
  static completed(queueType: Type, lockedEntries: LockedEntries): void;

  /**
   * Sets the priority field for invalidation queue entries
   *
   * @param queueType
   *           Queue type that is having priorities set for.
   * @param filter
   *          Filter identifying which entries to set the priority for.
   * @param priority
   *          New priority value (lower value is higher priority).
   *
   * @return the number of entries updated.
   */
  static setPriority(queueType: Type, filter: InvalidationQueueFilterSpec | null, priority: number): number;

  /**
   * Sets the hardwareProfile field for invalidation queue entries
   *
   * @param queueType
   *           Queue type that is having the hardware profile set for.
   * @param filter
   *          Filter identifying which entries to set the hardware profile for.
   * @param nodePool
   *          New nodePool value.
   *
   * @return the number of entries updated.
   */
  static setNodePool(queueType: Type, filter: InvalidationQueueFilterSpec, nodePool?: string | null): number;

  /**
   * Sets the rescheduleKey field for invalidation queue entries
   *
   * @param queueType
   *           Queue type that is having the rescheduleKey set for.
   * @param filter
   *          Filter identifying which entries to set the scheduleKey for.
   * @param scheduleKey
   *          New scheduleKey value.
   *
   * @return the number of entries updated.
   */
  static setRescheduleKey(queueType: Type, filter: InvalidationQueueFilterSpec, rescheduleKey?: string | null): number;

  /**
   * Sets the status of an entry in the queue if it exists and is a no-op if it doesn't.
   *
   * @param queueType
   *           QueueType that is having entry updated.
   * @param entryId
   *           Id of the queue entry that will be updated.
   * @param status
   *           New value for the status.
   *
   * @return true if the entry existed and was updated
   */
  static setStatus(queueType: Type, entryId: string, status: string): void;

  /**
   * Sets the context of an entry in the queue if it exists and is a no-op if it doesn't.
   *
   * @param queueType
   *           QueueType that is having entry updated.
   * @param entryId
   *           Id of the queue entry that will be updated.
   * @param context
   *           New value for the context.
   *
   * @return true if the entry existed and was updated
   */
  static setContext(queueType: Type, entryId: string, context?: any): void;
}


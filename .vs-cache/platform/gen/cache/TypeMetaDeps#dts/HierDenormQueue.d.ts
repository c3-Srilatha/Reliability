// TypeScript definitions for the C3 type HierDenormQueue

/**
 * Invalidation queue for hierarchy denorm processing.  Hierarchy denorm is caching of parent/child Obj instances in a
 * hierarchy for optimizing hierarchy based operations.
 *
 * Note: `targetObjId` is set to the edge type ID (not the individual edge object ID), so all edges of the same
 * type share the same `targetObjId` and are grouped together. See {@link HierDenormInvalidator#processHierDenormEdges()}
 *
 * @see HierDenormQueueEntry
 *
 * @remarks this represents a value passed to a method that expects an instance of HierDenormQueue
 */
declare interface IHierDenormQueue {
}

/**
 * Invalidation queue for hierarchy denorm processing.  Hierarchy denorm is caching of parent/child Obj instances in a
 * hierarchy for optimizing hierarchy based operations.
 *
 * Note: `targetObjId` is set to the edge type ID (not the individual edge object ID), so all edges of the same
 * type share the same `targetObjId` and are grouped together. See {@link HierDenormInvalidator#processHierDenormEdges()}
 *
 * @see HierDenormQueueEntry
 *
 * @remarks this represents a made instance of HierDenormQueue
 */
declare class HierDenormQueue {

  /**
   * Invalidation queue engine calls this method to handle a set of pending invalidation queue entries.
   *
   * This function should be claimed by individual InvalidationQueue types such as CalcFieldsQueue.
   *
   * @param targetType
   *           Target type for all of the entries being computed.
   * @param entries
   *           Invalidation queue entries being computed.  They will all be for the specified targetType.
   */
  static compute(targetType: Type, entries: C3.Array<HierDenormQueueEntry | null> | null): void;

  /**
   * Invalidate the specified objects with the specified invalidation contexts.
   *
   * Unless autoCommit is set to true this action creates invalidation entries in the 'initial' state. Commit
   * or abort functions can be called to either move state to 'pending' or delete the entries.
   *
   * @see commit, abort
   */
  static invalidate(targetType?: Type | null, specs?: C3.Array<InvalidationSpec | null>, autoCommit?: boolean, ignoreUniqueConstraintViolations?: boolean, srcActionIdOverride?: string | null): void;

  /**
   * Commit all initial invalidations by the source calling action.
   *
   * @see invalidate
   */
  static commit(): void;

  /**
   * Abort all invalidations by the source calling action.
   *
   * @see commit
   */
  static abort(): void;

  /**
   * Commit all invalidations for a given target object.
   */
  static commitAll(targetTypeId?: number | null, targetObjId?: string | null): void;

  /**
   * Dispatches compute action for provided target objects - assumes that corresponding entries are already locked i.e.
   * their status is "computing"
   *
   * @param lockedEntries
   *           Entries to compute.
   */
  static dispatchCompute(lockedEntries?: LockedEntries | null): void;

  /**
   * Administrative task to merge all duplicate logical invalidation requests in the queue. This task is invoked
   * periodically for all duplicate entries in the queue.
   *
   * @param targetTypeId
   *           Target typeId.
   * @param targetObjIds
   *           List of targetObjIds to merge.  If null, or empty, all entries of the targetApp/targetType will be
   *           merged.
   */
  static mergeEntries(targetTypeId: number, targetObjIds?: C3.Array<string | null>): void;

  /**
   * Finds the requested entries
   *
   * @param spec
   *           Optional settings controlling the operation.
   *
   * @return the list of requested entries.
   */
  static find(spec?: InvalidationQueue.FindSpec | null): C3.Array<HierDenormQueueEntry | null>;

  /**
   * Finds the requested entries (streaming version)
   *
   * @param spec
   *           Optional settings controlling the operation.
   *
   * @return the list of requested entries.
   */
  static findStream(spec?: InvalidationQueue.FindStreamSpec | null): Stream<HierDenormQueueEntry | null>;

  /**
   * Get status of this invalidation queue.  This function is only valid to be called on a concrete invalidation queue
   * type, not on the {@link InvalidationQueue} type itself.  If called from the c3/c3 app, then the count from all
   * apps will be included.  If called from any other app, then only those queue entries for that app will be counted,
   * unless a different app is specified in the filter.
   *
   * @param filter
   *          Filter to be applied to the count query.  If not specified, then all entries will be counted.
   * @param excludePaused
   *          If true, queue entries in paused apps will not be counted except for the computing count.
   * @param errorSummary
   *          If true, include error summary in result.
   * @param includePendingActions
   *          If true, the number of actions necessary to compute all of the currently pending entries will be computed
   *          and returned in `InvalidationQueueStats.pendingActions`.  Otherwise, 0 will be returned there.
   * @param errorSummaryLimit
   *          Number of failed entries to include errors for in the error summary.
   */
  static count(filter?: InvalidationQueueFilterSpec | null, excludePaused?: boolean, errorSummary?: boolean, includePendingActions?: boolean, errorSummaryLimit?: number | null): InvalidationQueueStats | null;

  /**
   * Get status of one or more invalidation queues with optional grouping by target app/type.  If called from the c3/c3
   * app, then the counts from all apps will be included.  If called from any other app, then only those queue entries
   * for that app will be counted, unless a different app is specified in the filter.
   *
   * If called on a specific queue type, only counts for that queue type will be returned.  If called on the
   * InvalidationQueue type itself, then counts for all queue types will be returned.
   *
   * @param group
   *          Comma separated list of one of "type", "context".
   * @param filter
   *          Filter to be applied to the count query.  If not specified, then all entries will be counted.
   * @param excludePaused
   *          If true, queue entries in paused queues will not be counted except for the computing count.
   * @param errorSummary
   *          If true, include error summary in result.
   * @param includePendingActions
   *          If true, the number of actions necessary to compute all of the currently pending entries will be computed
   *          and returned in `InvalidationQueueStats.pendingActions`.  Otherwise, 0 will be returned there.
   * @param errorSummaryLimit
   *          Number of failed entries to include errors for in the error summary.
   */
  static countAll(group?: string | null, filter?: InvalidationQueueFilterSpec | null, excludePaused?: boolean, errorSummary?: boolean, includePendingActions?: boolean, errorSummaryLimit?: number | null): C3.Array<InvalidationQueueStats | null>;

  /**
   * Counts all of the pending entries for all queues that are being (or will be) processed by the specified node pool
   *
   * If called on a specific queue type, only counts for that queue type will be included.  If called on the
   * InvalidationQueue type itself, then counts for all queue types will be included.
   *
   * Note that queue entries with a priority of < 0 will be ignored as they are considered "disabled".
   *
   * @param nodePool
   *        Specific node pool to count the entries for.  The qualifying entries for the requested node pool will be
   *        determined as follows:
   *
   *        “task”        - include all entries that have a null node pool specified EXCEPT for CronQueue entries for
   *                        runOnLeader jobs
   *
   *        “leader”      - include ONLY entries from the CronQueue that have a null node pool specified and, of those,
   *                        ONLY entries for runOnLeader jobs
   *
   *        “singlenode”  - include ALL entries from ALL queues that have a null node pool specified
   *
   *        Anything else - Include ALL entries from ALL queues that have that specific node pool specified
   * @param excludePaused
   *          If true, only entries in non-paused queues will be included.
   *
   * @return the number of qualifying queue entries
   */
  static countAllPendingForNodePool(nodePool: string, excludePaused?: boolean): number;

  /**
   * Pause invalidation queue processing for this queue.  If called on InvalidationQueue itself, all queues will be
   * paused. Queues that are already paused for any reason will be ignored.
   *
   * @param pauseFor
   *           Reason for pausing the queue(s). If specified, calling `resume` will resume the queue(s) if either the
   *           same specific reason is given, or if no reason is given.
   */
  static pause(pauseFor?: string | null): void;

  /**
   * Is this queue paused?
   *
   * @param pausedFor
   *           If specified, returns true only if the queue is paused for the specified reason.
   *           If not specified, returns true if the queue is paused for any reason.
   */
  static isPaused(pausedFor?: string | null): boolean;

  /**
   * List of queues.
   */
  static allQueues(): C3.Array<Type | null>;

  /**
   * List of queues that are paused.
   */
  static allPaused(): C3.Array<Type | null>;

  /**
   * List of queues that are not paused.
   */
  static allActive(): C3.Array<Type | null>;

  /**
   * Resume invalidation queue processing for this queue if called on a specific queue type or all queues if called on
   * the `InvalidationQueue` type itself.
   *
   * @param pausedFor
   *           If specified, only resume the queue(s) if they were paused for the specified reason.  If not specified
   *           resume the queue(s) regardless of why they were paused.
   */
  static resume(pausedFor?: string | null): void;

  /**
   * Recovers failed invalidations for this queue by changing their status to 'pending'. If called on base
   * InvalidationQueue type then errors from all queues will be recovered.
   *
   * @param filter
   *           Filter to identify the queue error entries to recover.
   */
  static recoverFailed(filter?: InvalidationQueueFilterSpec | null): void;

  /**
   * Recovers failed invalidations for this queue by changing their status to 'pending'.
   */
  static recoverFailedEntries(errors: Stream<InvalidationQueueError | null> | null): void;

  /**
   * Recovers failed invalidations for this queue by changing their status to 'pending'.  If called on base
   * InvalidationQueue type then errors from all queues will be recovered.
   */
  static recoverFailedAll(): void;

  /**
   * Recover 'stuck' invalidations for this queue type. Invalidation entry is considered stuck if it is either in the
   * uncommitted state and the node or the source action are no longer running, or the entry is locked and the computing
   * node or the computing action are no longer running.  If this is called on the base InvalidationQueue type, then
   * entries from all queues will be recovered.
   *
   * @param force
   *           If true, then all locked entries and all entries in the 'initial' state will be recovered with no time
   *           check as long as the action for the entry has not been verified to be running.  If not specified or false,
   *           then only actions that have been stuck for at least 10 minutes and it was verified that their actions are
   *           not currently running will be recovered.
   */
  static recoverStuck(force?: boolean): void;

  /**
   * Recover 'stuck' invalidations for this node/queue type. Invalidation entry is considered stuck if it is either in
   * the uncommitted state and the node or the source action are no longer running, or the entry is locked and the
   * computing node or the computing action are no longer running.  If this is called on the base InvalidationQueue
   * type, then entries from all queues will be recovered.
   *
   * @param nodeId
   *           Node to recover stuck invalidations for
   * @param force
   *           If true, then all locked entries and all entries in the 'initial' state will be recovered with no time
   *           check as long as the action for the entry has not been verified to be running.  If not specified or false,
   *           then only actions that have been stuck for at least 10 minutes and it was verified that their actions are
   *           not currently running will be recovered.
   */
  static recoverStuckForNode(nodeId: string, force?: boolean): void;

  /**
   * Sets the priority field for invalidation queue entries.
   *
   * @param filter
   *          Filter identifying which entries to set the priority for.
   * @param priority
   *          New priority value (lower value is higher priority).
   *
   * @return the number of entries updated.
   */
  static setPriority(filter: InvalidationQueueFilterSpec, priority: number): number;

  /**
   * @return The default priority for the type producing entries for a queue.
   */
  static defaultPriority(type: Type): number;

  /**
   * Sets the hardwareProfile field for invalidation queue entries {@see hardwareProfile}.
   *
   * @param filter
   *          Filter identifying which entries to set the hardwareProfile for.
   * @param hardwareProfile
   *          New hardwareProfile value.
   *
   * @return the number of entries updated.
   */
  static setNodePool(filter: InvalidationQueueFilterSpec, nodePool?: string | null): number;

  /**
   * Clears the entries in the store associated with the queue type.
   *
   * @param filter
   *           If specified, only the entries specified by the filter will be removed.
   *           If not specified, then all entries will be removed.
   */
  static clear(filter?: InvalidationQueueFilterSpec | null): void;

  /**
   * Clears the contexts for the specified entries in the queue.  This is only valid on queues where a null context is
   * valid and indicates a superset of the action of any non-null context (e.g. CalcFieldsQueue).
   *
   * @param filter
   *           If specified, only the entries specified by the filter will be removed.
   *           If not specified, then all entries will be removed.
   */
  static clearContexts(filter?: InvalidationQueueFilterSpec | null): void;

  /**
   * Compacts the queue for the queue type it is called on.  If called on the base InvalidationQueue type, all queues
   * that support compaction will be compacted.
   *
   * @param targetTypeId
   *           Target typeId to compact for.  If null, entries with all targetTypeIds will be compacted/merged.
   * @param batchSize
   *           Batch size to use for mapReduce compaction jobs.
   *
   * @return arry of mapReduce jobs necessary to complete the request.
   */
  static compact(targetTypeId?: number | null, batchSize?: number | null): C3.Array<InvalidationQueueCompactor | null>;

  /**
   * @return the type name for the InvalidationQueueStore backing the queue.
   */
  static storeType(): Type;

  /**
   * @return delay in milliseconds before a worker will start processing invalidation queue requests.
   */
  static initialScheduleDelay(): number;

  /**
   * @return maximum number of attempts to retry compute for queue entries when retryable errors occur.
   */
  static retryCount(): number;

  /**
   * @return maximum recursive depth limit for asynchronous processing.
   */
  static depthLimit(): number;

  /**
   * @return interval for resetting the accumulated time consumed by tags for scheduling "fairness"
   */
  static schedQueueTimesResetIntervalMinute(): number;

  /**
   * Gets the list of errors for an invalidation queue.  This function is only valid to be called on a concrete
   * invalidation queue type, not on the {@link InvalidationQueue} type itself.  If called from the c3/c3 app then
   * errors from all apps will be included.  If called from any other app, then only errors from that app will be
   * included, unless a different app is specified in the filter.
   *
   *  @param filter
   *            Filter spec to apply.
   *  @param limit
   *            Maximum number of errors to get.
   *  @param include
   *            string to specify fields to be included in InvalidationQueueError fetch.
   *  @return the requested error entries.
   */
  static errors(filter?: InvalidationQueueFilterSpec | null, include?: string | null, limit?: number | null): C3.Array<InvalidationQueueError | null>;

  /**
   * @return A summary of locked invalidation queue entries.  If this is called on the `InvalidationQueue` type itself,
   *         then it will contain results from all queues.  Otherwise, it will only return results for the queue type it
   *         is called on.  If this is called from c3/c3, then it will contain entries for all apps.  Otherwise it will
   *         only contain results for the current app.  Results will be grouped by `queue, computingNodeId,
   *         entryType, actionKey`, and for BatchQueue/MapReduceQueue, `targetObjId` as well.
   */
  static lockSummary(): C3.Array<InvalidationQueueLockSummary | null>;

  static isDisabled(): boolean;

  static batchSize(): number | null;

  /**
   * Generates report of the current contents of the queue.  This function is only valid to be called on a concrete
   * invalidation queue type, not on the {@link InvalidationQueue} type itself.  If called from the c3/c3 app then
   * entries from all apps will be included.  If called from any other app, then only entries from that app will be
   * included.
   *
   * @param detailed
   *           If true, the detailed report (grouping defined by InvalidationQueueOptions.detailReportGrouping) will be
   *           returned.  If false, the default report (grouping defined by
   *           InvalidationQueueOptions.defaultReportGrouping) will be returned.
   * @param offset
   *           Offset (0 based) of starting row to return.
   * @param  limit
   *           Maximum number of rows to return.
   */
  static report(detailed?: boolean, offset?: number | null, limit?: number | null): C3.Array<Tuple | null>;

  /**
   * Gets the header for a queue report.  This function is only valid to be called on a concrete invalidation queue
   * type, not on the {@link InvalidationQueue} type itself.
   *
   * @param detailed
   *           If true, the detailed report header (grouping defined by InvalidationQueueOptions.detailReportGrouping)
   *           will be returned.  If false, the default report header (grouping defined by
   *           InvalidationQueueOptions.defaultReportGrouping) will be returned.
   */
  static reportHeader(detailed?: boolean): TupleType | null;

  /**
   * Generates report of the current errors for the queue.  This function is only valid to be called on a concrete
   * invalidation queue type, not on the {@link InvalidationQueue} type itself.  If called from the c3/c3 app then
   * errors from all apps will be included.  If called from any other app, then only errors from that app will be
   * included.
   *
   * @param detailed
   *           If true, the detailed report (grouping defined by InvalidationQueueOptions.detailErrorReportGrouping)
   *           will be returned.  If false, the default report (grouping defined by
   *           InvalidationQueueOptions.defaultErrorReportGrouping) will be returned.
   * @param offset
   *           Offset (0 based) of starting row to return.
   * @param  limit
   *           Maximum number of rows to return.
   */
  static errorReport(detailed?: boolean, offset?: number | null, limit?: number | null): C3.Array<Tuple | null>;

  /**
   * Gets the header for a queue report.  This function is only valid to be called on a concrete invalidation queue
   * type, not on the {@link InvalidationQueue} type itself.
   *
   * @param detailed
   *           If true, the detailed report header (grouping defined by
   *           InvalidationQueueOptions.detailErrorReportGrouping) will be returned.  If false, the default report
   *           header (grouping defined by InvalidationQueueOptions.defaultErrorReportGrouping) will be returned.
   */
  static errorReportHeader(detailed?: boolean): TupleType | null;

  /**
   * Gets the count used by {@link report} (one count per line).  Results will always be grouped by status in addition
   * to the provided group spec.  This differs from {@link count} and {@link countAll} in that those provide counts for
   * all statuses for a single group based on the other group columns as a single row.
   *
   * @param group
   *           Group spec to apply.  Results will always be grouped by status in addition to what is specified.
   * @param offset
   *           Starting offset to return entries from.
   * @param limit
   *           Maximum number of entries to return.
   *
   * @return the requested counts.
   */
  static reportCount(group?: InvalidationQueueGroupSpec | null, offset?: number | null, limit?: number | null): C3.Array<InvalidationQueueGroupResult | null>;

  /**
   * Sets the review for a set of error entries. This will set the {@link InvalidationQueueError.review} field to the
   * input review for all error entries being reviewed.
   *
   * @param errors
   *           List of errors to set review for.
   * @param review
   *           Review instance for the review.  If null or if the input does not have an id, or the review doesn't
   *           exist, it will be created.  Otherwise it will just be assigned to the corresponding error entries
   *           being reviewed.
   *
   * @return the review object, fully populated
   */
  static setErrorsReview(errors: C3.Array<InvalidationQueueError | null> | null, review?: InvalidationQueueErrorReview | null): InvalidationQueueErrorReview;

  /**
   * Mark a set of errors specified by a filter as reviewed. This will set the {@link InvalidationQueueError.review}
   * field to the input review for all error entries being reviewed.
   *
   * @param filter
   *           Filter indicating which error entries to set the review for.
   * @param review
   *           Review instance for the review.  If null or if the input does not have an id, or the review doesn't
   *           exist, it will be created.  Otherwise it will just be assigned to the corresponding error entries
   *           reviewed.
   *
   * @return the review object, fully populated
   */
  static setErrorsReviewByFilter(filter: InvalidationQueueFilterSpec, review?: InvalidationQueueErrorReview | null): InvalidationQueueErrorReview;

  /**
   * @param filter
   *        Filter to apply to entries being returned.  Follows same rules as {@link FetchSpec#filter}.
   * @param order
   *        The order to return the entries in
   * @param limit
   *        Maximum number of entries to return.
   * @param offset
   *        Index of first returned entry.
   *
   * @return all actions for currently computing queue entries for the queue type the action is called on, or for all
   *         queues if called on InvalidationQueue.
   */
  static computingActions(filter?: string | null, order?: string | null, limit?: number | null, offset?: number | null): C3.Array<Action | null>;

  /**
   * @return node pools of Queue entries specified in {@link App.NodePool}
   */
  static nodePools(): C3.Array<App.NodePool.Config | null>;

  /**
   * @return the maxConcurrentComputes from the {@link ResourceGovernorConfig}.
   */
  static maxConcurrentComputes(): number;

  /**
   * @return the max number of parallel processing threads allowed for cloud queues.
   */
  static maxConcurrentProcessingThreads(): number;

  /**
   * @return the number of computing actions in the queue
   */
  static computingActionsCount(): number;

  /**
   * FOR INTERNAL USE ONLY!
   *
   * Clears the entries in the store associated with the queue type.
   *
   * @param entries
   *           Entries to remove.
   */
  static clearEntries(entries: C3.Array<HierDenormQueueEntry | null> | null): void;

  /**
   * Gets the set of DataIssue types to be created for the queue/target type.
   *
   * @param targetType
   *        Target type to get the DataIssue types for.
   *
   * @return Map of DataIssue types that the queue type uses along with the types they invalidate.
   */
  static dataIssueTypes(targetType: Type): C3.Map<Type | null, C3.Array<Type | null>>;

  /**
   * wait for all the queues to complete.
   */
  static waitForCompute(spec?: InvalidationQueueWaitSpec | null): void;

  /**
   * Sets the default Postgres autoVacuum parameters for invalidation queues.  If called on a specific
   * queue type, only the table for that queue will have the parameters set.  If called on the base InvalidationQueue
   * type, then the tables for all queues, and the tables for {@link InvalidationQueueError} and
   * {@link InvalidationQueueLock}
   * will have the parameters set.
   */
  static setDefaultAutoVacuumParameters(): void;

  /**
   * @return the tags for the appMeter for the queue type. There are basically 2 tags "queue" [ Calc | Source etc ] and "field" [ ].
   */
  static appMeterTags(): C3.Array<C3.Map<string | null, string | null>>;

  /**
   * @return meter value for given app meter tags. If the tags provided are not specified in {@link InvalidationQueueConfig}
   * null is returned. The InvalidationQueueConfig will be eventually consistent with the `appMeterTags` due to the
   * cache on {@link #appMeterValues}.
   */
  static appMeterValue(appMeterTags: C3.Map<string | null, string | null>): number | null;

  /**
   * @return meter values for all app meter tags.
   */
  static appMeterValues(): C3.Map<string | null, C3.Map<string | null, number | null>>;
}


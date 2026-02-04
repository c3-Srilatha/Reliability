#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.InvalidationQueueGroupSpec import InvalidationQueueGroupSpec
from c3.platform.InvalidationQueueGroupResult import InvalidationQueueGroupResult
from c3.platform.App.NodePool.Config import App.NodePool.Config
from c3.platform.InvalidationQueueCompactor import InvalidationQueueCompactor
from c3.platform.TupleType import TupleType
from c3.platform.Type import Type
from c3.platform.Action import Action
from c3.platform.InvalidationQueueErrorReview import InvalidationQueueErrorReview
from c3.platform.InvalidationQueueStats import InvalidationQueueStats
from c3.platform.InvalidationQueueWaitSpec import InvalidationQueueWaitSpec
from c3.platform.Obj import Obj
from c3.platform.InvalidationQueueError import InvalidationQueueError
from c3.platform.InvalidationQueue.FindStreamSpec import InvalidationQueue.FindStreamSpec
from c3.platform.DataIntegSpec import DataIntegSpec
from c3.platform.InvalidationQueueFilterSpec import InvalidationQueueFilterSpec
from c3.platform.InvalidationQueueLockSummary import InvalidationQueueLockSummary
from c3.platform.InvalidationQueue.FindSpec import InvalidationQueue.FindSpec
from c3.platform.InvalidationSpec import InvalidationSpec
from c3.platform.LockedEntries import LockedEntries
from c3.platform.SourceStatusQueueEntry import SourceStatusQueueEntry

# Python definitions for the C3 type SourceStatusQueue


class SourceStatusQueue(SourceQueueBase[SourceStatusQueueEntry], MergeableInvalidationQueue[SourceStatusQueueEntry], Value):
    """
    Invalidation Queue for async processing {@link SourceStatus}
    
    @remarks this represents a made instance of SourceStatusQueue
    """
    def __init__(self) -> None: ...

    @classmethod
    def compute(cls, targetType: Type, entries: Array[SourceStatusQueueEntry]) -> None:
    """
    Invalidation queue engine calls this method to handle a set of pending invalidation queue entries.
    
    This function should be claimed by individual InvalidationQueue types such as CalcFieldsQueue.
    
    @param targetType
              Target type for all of the entries being computed.
    @param entries
              Invalidation queue entries being computed.  They will all be for the specified targetType.
    """
        ...
    @classmethod
    def invalidate(cls, targetType: Type=None, specs: Array[InvalidationSpec]=None, autoCommit: bool=None, ignoreUniqueConstraintViolations: bool=None, srcActionIdOverride: str=None) -> None:
    """
    Invalidate the specified objects with the specified invalidation contexts.
    
    Unless autoCommit is set to true this action creates invalidation entries in the 'initial' state. Commit
    or abort functions can be called to either move state to 'pending' or delete the entries.
    
    @see commit, abort
    """
        ...
    @classmethod
    def commit(cls) -> None:
    """
    Commit all initial invalidations by the source calling action.
    
    @see invalidate
    """
        ...
    @classmethod
    def abort(cls) -> None:
    """
    Abort all invalidations by the source calling action.
    
    @see commit
    """
        ...
    @classmethod
    def commitAll(cls, targetTypeId: int=None, targetObjId: str=None) -> None:
    """
    Commit all invalidations for a given target object.
    """
        ...
    @classmethod
    def dispatchCompute(cls, lockedEntries: LockedEntries=None) -> None:
    """
    Dispatches compute action for provided target objects - assumes that corresponding entries are already locked i.e.
    their status is "computing"
    
    @param lockedEntries
              Entries to compute.
    """
        ...
    @classmethod
    def mergeEntries(cls, targetTypeId: int, targetObjIds: Array[str]=None) -> None:
    """
    Administrative task to merge all duplicate logical invalidation requests in the queue. This task is invoked
    periodically for all duplicate entries in the queue.
    
    @param targetTypeId
              Target typeId.
    @param targetObjIds
              List of targetObjIds to merge.  If null, or empty, all entries of the targetApp/targetType will be
              merged.
    """
        ...
    @classmethod
    def find(cls, spec: InvalidationQueue.FindSpec=None) -> Union[Array[SourceStatusQueueEntry]]:
    """
    Finds the requested entries
    
    @param spec
              Optional settings controlling the operation.
    
    @return the list of requested entries.
    """
        ...
    @classmethod
    def findStream(cls, spec: InvalidationQueue.FindStreamSpec=None) -> Union[Stream[SourceStatusQueueEntry]]:
    """
    Finds the requested entries (streaming version)
    
    @param spec
              Optional settings controlling the operation.
    
    @return the list of requested entries.
    """
        ...
    @classmethod
    def count(cls, filter: InvalidationQueueFilterSpec=None, excludePaused: bool=None, errorSummary: bool=None, includePendingActions: bool=None, errorSummaryLimit: int='10') -> Union[InvalidationQueueStats]:
    """
    Get status of this invalidation queue.  This function is only valid to be called on a concrete invalidation queue
    type, not on the {@link InvalidationQueue} type itself.  If called from the c3/c3 app, then the count from all
    apps will be included.  If called from any other app, then only those queue entries for that app will be counted,
    unless a different app is specified in the filter.
    
    @param filter
             Filter to be applied to the count query.  If not specified, then all entries will be counted.
    @param excludePaused
             If true, queue entries in paused apps will not be counted except for the computing count.
    @param errorSummary
             If true, include error summary in result.
    @param includePendingActions
             If true, the number of actions necessary to compute all of the currently pending entries will be computed
             and returned in `InvalidationQueueStats.pendingActions`.  Otherwise, 0 will be returned there.
    @param errorSummaryLimit
             Number of failed entries to include errors for in the error summary.
    """
        ...
    @classmethod
    def countAll(cls, group: str=None, filter: InvalidationQueueFilterSpec=None, excludePaused: bool=None, errorSummary: bool=None, includePendingActions: bool=None, errorSummaryLimit: int='10') -> Union[Array[InvalidationQueueStats]]:
    """
    Get status of one or more invalidation queues with optional grouping by target app/type.  If called from the c3/c3
    app, then the counts from all apps will be included.  If called from any other app, then only those queue entries
    for that app will be counted, unless a different app is specified in the filter.
    
    If called on a specific queue type, only counts for that queue type will be returned.  If called on the
    InvalidationQueue type itself, then counts for all queue types will be returned.
    
    @param group
             Comma separated list of one of "type", "context".
    @param filter
             Filter to be applied to the count query.  If not specified, then all entries will be counted.
    @param excludePaused
             If true, queue entries in paused queues will not be counted except for the computing count.
    @param errorSummary
             If true, include error summary in result.
    @param includePendingActions
             If true, the number of actions necessary to compute all of the currently pending entries will be computed
             and returned in `InvalidationQueueStats.pendingActions`.  Otherwise, 0 will be returned there.
    @param errorSummaryLimit
             Number of failed entries to include errors for in the error summary.
    """
        ...
    @classmethod
    def countAllPendingForNodePool(cls, nodePool: str, excludePaused: bool=None) -> int:
    """
    Counts all of the pending entries for all queues that are being (or will be) processed by the specified node pool
    
    If called on a specific queue type, only counts for that queue type will be included.  If called on the
    InvalidationQueue type itself, then counts for all queue types will be included.
    
    Note that queue entries with a priority of < 0 will be ignored as they are considered "disabled".
    
    @param nodePool
           Specific node pool to count the entries for.  The qualifying entries for the requested node pool will be
           determined as follows:
    
           “task”        - include all entries that have a null node pool specified EXCEPT for CronQueue entries for
                           runOnLeader jobs
    
           “leader”      - include ONLY entries from the CronQueue that have a null node pool specified and, of those,
                           ONLY entries for runOnLeader jobs
    
           “singlenode”  - include ALL entries from ALL queues that have a null node pool specified
    
           Anything else - Include ALL entries from ALL queues that have that specific node pool specified
    @param excludePaused
             If true, only entries in non-paused queues will be included.
    
    @return the number of qualifying queue entries
    """
        ...
    @classmethod
    def pause(cls, pauseFor: str=None) -> None:
    """
    Pause invalidation queue processing for this queue.  If called on InvalidationQueue itself, all queues will be
    paused. Queues that are already paused for any reason will be ignored.
    
    @param pauseFor
              Reason for pausing the queue(s). If specified, calling `resume` will resume the queue(s) if either the
              same specific reason is given, or if no reason is given.
    """
        ...
    @classmethod
    def isPaused(cls, pausedFor: str=None) -> bool:
    """
    Is this queue paused?
    
    @param pausedFor
              If specified, returns true only if the queue is paused for the specified reason.
              If not specified, returns true if the queue is paused for any reason.
    """
        ...
    @classmethod
    def allQueues(cls) -> Union[Array[Type]]:
    """
    List of queues.
    """
        ...
    @classmethod
    def allPaused(cls) -> Union[Array[Type]]:
    """
    List of queues that are paused.
    """
        ...
    @classmethod
    def allActive(cls) -> Union[Array[Type]]:
    """
    List of queues that are not paused.
    """
        ...
    @classmethod
    def resume(cls, pausedFor: str=None) -> None:
    """
    Resume invalidation queue processing for this queue if called on a specific queue type or all queues if called on
    the `InvalidationQueue` type itself.
    
    @param pausedFor
              If specified, only resume the queue(s) if they were paused for the specified reason.  If not specified
              resume the queue(s) regardless of why they were paused.
    """
        ...
    @classmethod
    def recoverFailed(cls, filter: InvalidationQueueFilterSpec=None) -> None:
    """
    Recovers failed invalidations for this queue by changing their status to 'pending'. If called on base
    InvalidationQueue type then errors from all queues will be recovered.
    
    @param filter
              Filter to identify the queue error entries to recover.
    """
        ...
    @classmethod
    def recoverFailedEntries(cls, errors: Stream[InvalidationQueueError]) -> None:
    """
    Recovers failed invalidations for this queue by changing their status to 'pending'.
    """
        ...
    @classmethod
    def recoverFailedAll(cls) -> None:
    """
    Recovers failed invalidations for this queue by changing their status to 'pending'.  If called on base
    InvalidationQueue type then errors from all queues will be recovered.
    """
        ...
    @classmethod
    def recoverStuck(cls, force: bool=None) -> None:
    """
    Recover 'stuck' invalidations for this queue type. Invalidation entry is considered stuck if it is either in the
    uncommitted state and the node or the source action are no longer running, or the entry is locked and the computing
    node or the computing action are no longer running.  If this is called on the base InvalidationQueue type, then
    entries from all queues will be recovered.
    
    @param force
              If true, then all locked entries and all entries in the 'initial' state will be recovered with no time
              check as long as the action for the entry has not been verified to be running.  If not specified or false,
              then only actions that have been stuck for at least 10 minutes and it was verified that their actions are
              not currently running will be recovered.
    """
        ...
    @classmethod
    def recoverStuckForNode(cls, nodeId: str, force: bool=None) -> None:
    """
    Recover 'stuck' invalidations for this node/queue type. Invalidation entry is considered stuck if it is either in
    the uncommitted state and the node or the source action are no longer running, or the entry is locked and the
    computing node or the computing action are no longer running.  If this is called on the base InvalidationQueue
    type, then entries from all queues will be recovered.
    
    @param nodeId
              Node to recover stuck invalidations for
    @param force
              If true, then all locked entries and all entries in the 'initial' state will be recovered with no time
              check as long as the action for the entry has not been verified to be running.  If not specified or false,
              then only actions that have been stuck for at least 10 minutes and it was verified that their actions are
              not currently running will be recovered.
    """
        ...
    @classmethod
    def setPriority(cls, filter: InvalidationQueueFilterSpec, priority: int) -> int:
    """
    Sets the priority field for invalidation queue entries.
    
    @param filter
             Filter identifying which entries to set the priority for.
    @param priority
             New priority value (lower value is higher priority).
    
    @return the number of entries updated.
    """
        ...
    @classmethod
    def defaultPriority(cls, type: Type) -> int:
    """
    @return The default priority for the type producing entries for a queue.
    """
        ...
    @classmethod
    def setNodePool(cls, filter: InvalidationQueueFilterSpec, nodePool: str=None) -> int:
    """
    Sets the hardwareProfile field for invalidation queue entries {@see hardwareProfile}.
    
    @param filter
             Filter identifying which entries to set the hardwareProfile for.
    @param hardwareProfile
             New hardwareProfile value.
    
    @return the number of entries updated.
    """
        ...
    @classmethod
    def clear(cls, filter: InvalidationQueueFilterSpec=None) -> None:
    """
    Clears the entries in the store associated with the queue type.
    
    @param filter
              If specified, only the entries specified by the filter will be removed.
              If not specified, then all entries will be removed.
    """
        ...
    @classmethod
    def clearContexts(cls, filter: InvalidationQueueFilterSpec=None) -> None:
    """
    Clears the contexts for the specified entries in the queue.  This is only valid on queues where a null context is
    valid and indicates a superset of the action of any non-null context (e.g. CalcFieldsQueue).
    
    @param filter
              If specified, only the entries specified by the filter will be removed.
              If not specified, then all entries will be removed.
    """
        ...
    @classmethod
    def compact(cls, targetTypeId: int=None, batchSize: int='1000') -> Union[Array[InvalidationQueueCompactor]]:
    """
    Compacts the queue for the queue type it is called on.  If called on the base InvalidationQueue type, all queues
    that support compaction will be compacted.
    
    @param targetTypeId
              Target typeId to compact for.  If null, entries with all targetTypeIds will be compacted/merged.
    @param batchSize
              Batch size to use for mapReduce compaction jobs.
    
    @return arry of mapReduce jobs necessary to complete the request.
    """
        ...
    @classmethod
    def storeType(cls) -> Type:
    """
    @return the type name for the InvalidationQueueStore backing the queue.
    """
        ...
    @classmethod
    def initialScheduleDelay(cls) -> int:
    """
    @return delay in milliseconds before a worker will start processing invalidation queue requests.
    """
        ...
    @classmethod
    def retryCount(cls) -> int:
    """
    @return maximum number of attempts to retry compute for queue entries when retryable errors occur.
    """
        ...
    @classmethod
    def depthLimit(cls) -> int:
    """
    @return maximum recursive depth limit for asynchronous processing.
    """
        ...
    @classmethod
    def schedQueueTimesResetIntervalMinute(cls) -> int:
    """
    @return interval for resetting the accumulated time consumed by tags for scheduling "fairness"
    """
        ...
    @classmethod
    def errors(cls, filter: InvalidationQueueFilterSpec=None, include: str=None, limit: int='10') -> Union[Array[InvalidationQueueError]]:
    """
    Gets the list of errors for an invalidation queue.  This function is only valid to be called on a concrete
    invalidation queue type, not on the {@link InvalidationQueue} type itself.  If called from the c3/c3 app then
    errors from all apps will be included.  If called from any other app, then only errors from that app will be
    included, unless a different app is specified in the filter.
    
     @param filter
               Filter spec to apply.
     @param limit
               Maximum number of errors to get.
     @param include
               string to specify fields to be included in InvalidationQueueError fetch.
     @return the requested error entries.
    """
        ...
    @classmethod
    def lockSummary(cls) -> Union[Array[InvalidationQueueLockSummary]]:
    """
    @return A summary of locked invalidation queue entries.  If this is called on the `InvalidationQueue` type itself,
            then it will contain results from all queues.  Otherwise, it will only return results for the queue type it
            is called on.  If this is called from c3/c3, then it will contain entries for all apps.  Otherwise it will
            only contain results for the current app.  Results will be grouped by `queue, computingNodeId,
            entryType, actionKey`, and for BatchQueue/MapReduceQueue, `targetObjId` as well.
    """
        ...
    @classmethod
    def isDisabled(cls) -> bool:
        ...
    @classmethod
    def batchSize(cls) -> Union[int]:
        ...
    @classmethod
    def report(cls, detailed: bool=None, offset: int='0', limit: int='10') -> Union[Array[]]:
    """
    Generates report of the current contents of the queue.  This function is only valid to be called on a concrete
    invalidation queue type, not on the {@link InvalidationQueue} type itself.  If called from the c3/c3 app then
    entries from all apps will be included.  If called from any other app, then only entries from that app will be
    included.
    
    @param detailed
              If true, the detailed report (grouping defined by InvalidationQueueOptions.detailReportGrouping) will be
              returned.  If false, the default report (grouping defined by
              InvalidationQueueOptions.defaultReportGrouping) will be returned.
    @param offset
              Offset (0 based) of starting row to return.
    @param  limit
              Maximum number of rows to return.
    """
        ...
    @classmethod
    def reportHeader(cls, detailed: bool=None) -> Union[TupleType]:
    """
    Gets the header for a queue report.  This function is only valid to be called on a concrete invalidation queue
    type, not on the {@link InvalidationQueue} type itself.
    
    @param detailed
              If true, the detailed report header (grouping defined by InvalidationQueueOptions.detailReportGrouping)
              will be returned.  If false, the default report header (grouping defined by
              InvalidationQueueOptions.defaultReportGrouping) will be returned.
    """
        ...
    @classmethod
    def errorReport(cls, detailed: bool=None, offset: int='0', limit: int='10') -> Union[Array[]]:
    """
    Generates report of the current errors for the queue.  This function is only valid to be called on a concrete
    invalidation queue type, not on the {@link InvalidationQueue} type itself.  If called from the c3/c3 app then
    errors from all apps will be included.  If called from any other app, then only errors from that app will be
    included.
    
    @param detailed
              If true, the detailed report (grouping defined by InvalidationQueueOptions.detailErrorReportGrouping)
              will be returned.  If false, the default report (grouping defined by
              InvalidationQueueOptions.defaultErrorReportGrouping) will be returned.
    @param offset
              Offset (0 based) of starting row to return.
    @param  limit
              Maximum number of rows to return.
    """
        ...
    @classmethod
    def errorReportHeader(cls, detailed: bool=None) -> Union[TupleType]:
    """
    Gets the header for a queue report.  This function is only valid to be called on a concrete invalidation queue
    type, not on the {@link InvalidationQueue} type itself.
    
    @param detailed
              If true, the detailed report header (grouping defined by
              InvalidationQueueOptions.detailErrorReportGrouping) will be returned.  If false, the default report
              header (grouping defined by InvalidationQueueOptions.defaultErrorReportGrouping) will be returned.
    """
        ...
    @classmethod
    def reportCount(cls, group: InvalidationQueueGroupSpec=None, offset: int='0', limit: int='100') -> Union[Array[InvalidationQueueGroupResult]]:
    """
    Gets the count used by {@link report} (one count per line).  Results will always be grouped by status in addition
    to the provided group spec.  This differs from {@link count} and {@link countAll} in that those provide counts for
    all statuses for a single group based on the other group columns as a single row.
    
    @param group
              Group spec to apply.  Results will always be grouped by status in addition to what is specified.
    @param offset
              Starting offset to return entries from.
    @param limit
              Maximum number of entries to return.
    
    @return the requested counts.
    """
        ...
    @classmethod
    def setErrorsReview(cls, errors: Array[InvalidationQueueError], review: InvalidationQueueErrorReview=None) -> InvalidationQueueErrorReview:
    """
    Sets the review for a set of error entries. This will set the {@link InvalidationQueueError.review} field to the
    input review for all error entries being reviewed.
    
    @param errors
              List of errors to set review for.
    @param review
              Review instance for the review.  If null or if the input does not have an id, or the review doesn't
              exist, it will be created.  Otherwise it will just be assigned to the corresponding error entries
              being reviewed.
    
    @return the review object, fully populated
    """
        ...
    @classmethod
    def setErrorsReviewByFilter(cls, filter: InvalidationQueueFilterSpec, review: InvalidationQueueErrorReview=None) -> InvalidationQueueErrorReview:
    """
    Mark a set of errors specified by a filter as reviewed. This will set the {@link InvalidationQueueError.review}
    field to the input review for all error entries being reviewed.
    
    @param filter
              Filter indicating which error entries to set the review for.
    @param review
              Review instance for the review.  If null or if the input does not have an id, or the review doesn't
              exist, it will be created.  Otherwise it will just be assigned to the corresponding error entries
              reviewed.
    
    @return the review object, fully populated
    """
        ...
    @classmethod
    def computingActions(cls, filter: str=None, order: str='\'descending(age)\'', limit: int='-1', offset: int='0') -> Union[Array[Action]]:
    """
    @param filter
           Filter to apply to entries being returned.  Follows same rules as {@link FetchSpec#filter}.
    @param order
           The order to return the entries in
    @param limit
           Maximum number of entries to return.
    @param offset
           Index of first returned entry.
    
    @return all actions for currently computing queue entries for the queue type the action is called on, or for all
            queues if called on InvalidationQueue.
    """
        ...
    @classmethod
    def nodePools(cls) -> Union[Array[App.NodePool.Config]]:
    """
    @return node pools of Queue entries specified in {@link App.NodePool}
    """
        ...
    @classmethod
    def maxConcurrentComputes(cls) -> int:
    """
    @return the maxConcurrentComputes from the {@link ResourceGovernorConfig}.
    """
        ...
    @classmethod
    def maxConcurrentProcessingThreads(cls) -> int:
    """
    @return the max number of parallel processing threads allowed for cloud queues.
    """
        ...
    @classmethod
    def computingActionsCount(cls) -> int:
    """
    @return the number of computing actions in the queue
    """
        ...
    @classmethod
    def clearEntries(cls, entries: Array[SourceStatusQueueEntry]) -> None:
    """
    FOR INTERNAL USE ONLY!
    
    Clears the entries in the store associated with the queue type.
    
    @param entries
              Entries to remove.
    """
        ...
    @classmethod
    def dataIssueTypes(cls, targetType: Type) -> Map[Type, Array[Type]]:
    """
    Gets the set of DataIssue types to be created for the queue/target type.
    
    @param targetType
           Target type to get the DataIssue types for.
    
    @return Map of DataIssue types that the queue type uses along with the types they invalidate.
    """
        ...
    @classmethod
    def waitForCompute(cls, spec: InvalidationQueueWaitSpec=None) -> None:
    """
    wait for all the queues to complete.
    """
        ...
    @classmethod
    def setDefaultAutoVacuumParameters(cls) -> None:
    """
    Sets the default Postgres autoVacuum parameters for invalidation queues.  If called on a specific
    queue type, only the table for that queue will have the parameters set.  If called on the base InvalidationQueue
    type, then the tables for all queues, and the tables for {@link InvalidationQueueError} and
    {@link InvalidationQueueLock}
    will have the parameters set.
    """
        ...
    @classmethod
    def appMeterTags(cls) -> Array[Map[str, str]]:
    """
    @return the tags for the appMeter for the queue type. There are basically 2 tags "queue" [ Calc | Source etc ] and "field" [ ].
    """
        ...
    @classmethod
    def appMeterValue(cls, appMeterTags: Map[str, str]) -> Union[float]:
    """
    @return meter value for given app meter tags. If the tags provided are not specified in {@link InvalidationQueueConfig}
    null is returned. The InvalidationQueueConfig will be eventually consistent with the `appMeterTags` due to the
    cache on {@link #appMeterValues}.
    """
        ...
    @classmethod
    def appMeterValues(cls) -> Map[str, Map[str, float]]:
    """
    @return meter values for all app meter tags.
    """
        ...
    @classmethod
    def submit(cls, obj: Obj, spec: DataIntegSpec=None, doNotAutoCommit: bool=None) -> None:
    """
    submits a chunk/source file/status for async processing
    """
        ...
    @classmethod
    def mergeContexts(cls, targetType: Type=None, entries: Array[SourceStatusQueueEntry]=None) -> Union[Array[SourceStatusQueueEntry]]:
    """
    Invalidation queue engine calls this method to possibly merge pending invalidation queue entries.
    
    This function should be claimed by individual InvalidationQueue types such as CalcFieldsQueue.
    """
        ...


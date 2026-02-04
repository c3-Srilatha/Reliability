#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Include import Include
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Mutable import Mutable
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Map import Map
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Cron.Processor.Status import Cron.Processor.Status
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Promise import Promise
from c3.platform.Data import Data
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Db.Engine import Db.Engine
from c3.platform.InvalidationQueueLockSummary import InvalidationQueueLockSummary
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.LockedEntries import LockedEntries
from c3.platform.MapType import MapType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.InvalidationQueueGroupResult import InvalidationQueueGroupResult
from c3.platform.InvalidationQueueCompactor import InvalidationQueueCompactor
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.InvalidationQueueConfig import InvalidationQueueConfig
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.TupleType import TupleType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Promise import Promise
from c3.platform.InvalidationQueueError import InvalidationQueueError
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.InvalidationSpec import InvalidationSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.InvalidationQueueGroupSpec import InvalidationQueueGroupSpec
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.Promise import Promise
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.InvalidationQueueOrderField import InvalidationQueueOrderField
from c3.platform.FieldType import FieldType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.App.NodePool.Config import App.NodePool.Config
from c3.platform.Type import Type
from c3.platform.InvalidationQueueRunningJobInfo import InvalidationQueueRunningJobInfo
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValueType import ValueType
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetType import SetType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Exclude import Exclude
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Action import Action
from c3.platform.InvalidationQueueErrorReview import InvalidationQueueErrorReview
from c3.platform.InvalidationQueueWaitSpec import InvalidationQueueWaitSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.InvalidationQueueFilterSpec import InvalidationQueueFilterSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ArrayType import ArrayType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Map import Map
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.InvalidationQueueStats import InvalidationQueueStats
from c3.platform.Obj import Obj
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder

# Python definitions for the C3 type InvalidationQueue

ET = TypeVar('ET')

class InvalidationQueue(Generic[ET], Value):
    """
    See {@link invalidation-queues.c3doc Invalidation Queues} for detailed documentation.
    
    @remarks this represents a made instance of InvalidationQueue
    """
    def __init__(self) -> None: ...

    @classmethod
    def compute(cls, targetType: Type, entries: Array[ET]) -> None:
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
    def find(cls, spec: InvalidationQueue.FindSpec=None) -> Union[Array[ET]]:
    """
    Finds the requested entries
    
    @param spec
              Optional settings controlling the operation.
    
    @return the list of requested entries.
    """
        ...
    @classmethod
    def findStream(cls, spec: InvalidationQueue.FindStreamSpec=None) -> Union[Stream[ET]]:
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
    def clearEntries(cls, entries: Array[ET]) -> None:
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
    
    class Status():
        """
        @remarks this represents a made instance of InvalidationQueue.Status
        """
        
        initial: Optional[str]=None

        pending: Optional[str]=None

        disabled: Optional[str]=None

        computingActions: Optional[str]=None

        computingEntries: Optional[str]=None

        awaitingCompute: Optional[str]=None

        pendingActions: Optional[str]=None

        failed: Optional[str]=None
        def __init__(self, initial: Optional[str]=None, pending: Optional[str]=None, disabled: Optional[str]=None, computingActions: Optional[str]=None, computingEntries: Optional[str]=None, awaitingCompute: Optional[str]=None, pendingActions: Optional[str]=None, failed: Optional[str]=None) -> None: ...

        @classmethod
        def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
        """
        Translate the enum label (field name) to the value.
        For simple enums (that don't define explicit values), the value is a string
        that matches the label.
        @param label the enum label
        @return the associated value
        """
            ...
        @classmethod
        def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
        """
        Translate the enum value to the label (field name).
        @param value the enum value
        @return the enum label
        """
            ...
        @classmethod
        def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
        """
        Get the index of the label in the enum.
        @param label the enum label (field name)
        @return index or -1 if not found
        """
            ...
        @classmethod
        def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
        """
        Get the index of the value in the enum.
        @param value the enum value
        @return index or -1 if not found
        """
            ...
        @classmethod
        def valueType(cls) -> ValueType:
        """
        @return value type of values in this enum
        """
            ...
        @classmethod
        def values(cls) -> Union[Array[str]]:
        """
        Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
        the field name (same as the labels).
        """
            ...
        @classmethod
        def labels(cls) -> Union[Array[str]]:
        """
        Return an array of all enumeration labels. These are the same as the field names of the enum type.
        """
            ...
        @classmethod
        def valueToLabels(cls) -> Union[Map[str, str]]:
        """
        Return a map of all enumeration values to their labels.
        """
            ...
        @classmethod
        def labelToValues(cls) -> Union[Map[str, str]]:
        """
        Return a map of all enumeration labels to their values.
        """
            ...
        @classmethod
        def containsValue(cls, value: str) -> bool:
        """
        Is value a valid value for this enum type?
        @param value the enum value
        """
            ...
        @classmethod
        def eachLabel(cls, action: Callable[[str]]=None) -> None:
        """
        Calls provided action for each enum label.
        """
            ...
        @classmethod
        def eachValue(cls, action: Callable[[str]]=None) -> None:
        """
        Calls provided action for each enum value.
        """
            ...
    
    class Priority():
        """
        @remarks this represents a made instance of InvalidationQueue.Priority
        """
        
        NORMAL_PRIORITY: Optional[int]=None

        HIGH_PRIORITY: Optional[int]=None

        URGENT_PRIORITY: Optional[int]=None
        def __init__(self, NORMAL_PRIORITY: Optional[int]=None, HIGH_PRIORITY: Optional[int]=None, URGENT_PRIORITY: Optional[int]=None) -> None: ...

        @classmethod
        def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[int]:
        """
        Translate the enum label (field name) to the value.
        For simple enums (that don't define explicit values), the value is a string
        that matches the label.
        @param label the enum label
        @return the associated value
        """
            ...
        @classmethod
        def toLabel(cls, value: int, failIfInvalid: bool=None) -> Union[str]:
        """
        Translate the enum value to the label (field name).
        @param value the enum value
        @return the enum label
        """
            ...
        @classmethod
        def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
        """
        Get the index of the label in the enum.
        @param label the enum label (field name)
        @return index or -1 if not found
        """
            ...
        @classmethod
        def valueIndex(cls, value: int, failIfInvalid: bool=None) -> int:
        """
        Get the index of the value in the enum.
        @param value the enum value
        @return index or -1 if not found
        """
            ...
        @classmethod
        def valueType(cls) -> ValueType:
        """
        @return value type of values in this enum
        """
            ...
        @classmethod
        def values(cls) -> Union[Array[int]]:
        """
        Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
        the field name (same as the labels).
        """
            ...
        @classmethod
        def labels(cls) -> Union[Array[str]]:
        """
        Return an array of all enumeration labels. These are the same as the field names of the enum type.
        """
            ...
        @classmethod
        def valueToLabels(cls) -> Union[Map[int, str]]:
        """
        Return a map of all enumeration values to their labels.
        """
            ...
        @classmethod
        def labelToValues(cls) -> Union[Map[str, int]]:
        """
        Return a map of all enumeration labels to their values.
        """
            ...
        @classmethod
        def containsValue(cls, value: int) -> bool:
        """
        Is value a valid value for this enum type?
        @param value the enum value
        """
            ...
        @classmethod
        def eachLabel(cls, action: Callable[[str]]=None) -> None:
        """
        Calls provided action for each enum label.
        """
            ...
        @classmethod
        def eachValue(cls, action: Callable[[int]]=None) -> None:
        """
        Calls provided action for each enum value.
        """
            ...
    
    class FindStreamSpec(InvalidationQueue.FindSpec):
        """
        Used for specifying filter criteria for count/find functions.  All conditions will be "AND"ed.  Any that are null will be ignored.
        
        @remarks this represents a made instance of InvalidationQueue.FindStreamSpec
        """
        
        targetTypeId: Optional[int]=None
        """
        Target type id to return.
        """

        targetObjIds: Optional[Array[str]]=None
        """
        Target obj ids to return.
        """

        srcActionId: Optional[str]=None
        """
        Source action id that invalidated the entry to return entries for.
        """

        entryType: Optional[str]=None
        """
        Value of entryType field to return values for.
        """

        status: Optional[str]=None
        """
        Status value to return values for.
        """

        context: Optional[str]=None
        """
        Context value to return values for.
        """

        contextFields: Optional[Map[str, Any]]=None
        """
        Filter values for individual context fields when the context value type is an included type.
        """

        errorCode: Optional[str]=None
        """
        Error code to return values for.  Only valid for finding/reporting errors
        """

        review: Optional[str]=None
        """
        Review to return
        """

        nodePool: Optional[str]=None
        """
        Node pool to return values for.
        """

        rescheduleKey: Optional[str]=None
        """
        Key for rescheduleByType operation to return values for.
        """

        priority: Optional[int]=None
        """
        Priority to return values for.
        """

        invalidatedNodeId: Optional[str]=None
        """
        Node that invalidated the entry.
        """

        nullFields: Optional[Array[str]]=None
        """
        Fields to search for null values on.
        """

        customFilter: Optional[str]=None
        """
        Custom filter expression following normal conventions for {@link FetchSpec#filter}.
        """

        orderFields: Optional[Array[InvalidationQueueOrderField]]=None
        """
        Fields to order by.
        """

        include: Optional[str]=None
        """
        Fields to include in the returned instances.  Follows same rules as {@link FetchSpec#include}.
        """

        offset: Optional[int]
        """
        Index of first entry to return.
        """

        limit: Optional[int]
        """
        Maximum number of entries to return.  Specifying -1 will return all
        """
        def __init__(self, targetTypeId: Optional[int]=None, targetObjIds: Optional[Array[str]]=None, srcActionId: Optional[str]=None, entryType: Optional[str]=None, status: Optional[str]=None, context: Optional[str]=None, contextFields: Optional[Map[str, Any]]=None, errorCode: Optional[str]=None, review: Optional[str]=None, nodePool: Optional[str]=None, rescheduleKey: Optional[str]=None, priority: Optional[int]=None, invalidatedNodeId: Optional[str]=None, nullFields: Optional[Array[str]]=None, customFilter: Optional[str]=None, orderFields: Optional[Array[InvalidationQueueOrderField]]=None, include: Optional[str]=None, offset: Optional[int]=None, limit: Optional[int]=None) -> None: ...

        @overload
        def toJson(self) -> any:
        """
        Convert the internal object representation to a JSON object.
        
        @return JSON object representation
        
        @see #fromJson
        """
            ...
        @overload
        def toJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
        """
        Convert the internal object representation to a _typed_ JSON object.
        @param omitTopLevelType
               Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
               the outer level of the produced json.
        @param runtime
               If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
               performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
        
        
        @return JSON object representation
        
        @see #fromJson
        @see #toJson
        @see serdeser.c3doc
        @see JsonType
        """
            ...
        @overload
        def toTypedJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toJsonString(self) -> str:
            ...
        @overload
        def toJsonString(self, pretty: bool) -> str:
        """
        Convert the internal object representation to a serialized JSON string.
        
        @return JSON object as string
        """
            ...
        @overload
        def toTypedJsonString(self) -> str:
            ...
        @overload
        def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
            ...
        @overload
        def toJsString(self) -> str:
            ...
        @overload
        def toJsString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized JavaScript object literal.
        
        @return JavaScript object literal string
        """
            ...
        @overload
        def toXmlString(self) -> str:
            ...
        @overload
        def toXmlString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized XML string.
        
        @return XML element as string
        
        @see #fromXmlString
        """
            ...
        def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
        """
        Convert the internal object representation to a string serialized representation of the object.
        
        @return string serialized object representation
        """
            ...
        @classmethod
        def fromJson(cls, json: any) -> Union[InvalidationQueue.FindStreamSpec]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJson
        """
            ...
        @classmethod
        def fromJsonString(cls, json: str) -> Union[InvalidationQueue.FindStreamSpec]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJsonString
        """
            ...
        @classmethod
        def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.FindStreamSpec]:
        """
        Load the XML-based representation and reconstruct the corresponding object.
        
        fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
        may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
        isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
        will return an instance of the correct type.
        
        @see #toXmlString
        """
            ...
        @classmethod
        def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.FindStreamSpec]:
        """
        Load from contentType representation and reconstruct the corresponding object.
        
        fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
        (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
        will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
        type and will return an instance of the correct type.
        """
            ...
        def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
        """
        Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
        there is a slight possibility that two objects with the same fingerprint will actually differ.
        
        The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
        {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
        unless the allIdentifiedRefFields option is specified.
        
        If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
        However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
        
        @param allIdentifiedRefFields
                  if `true`, fingerprint individual fields of persistable references, not just the `id`
        @param trackRecursiveRefs
                  if `true`, a set of referenced objects is maintained to avoid infinite recursion
        @param traversedRefs
                  only considered together with trackRecursiveRefs and if provided then all traversed references are
                  checked against and added to it
        @return integer fingerprint
        
        @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
        """
            ...
        def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
        """
        Measures retained memory by this instance.
        
        @param deep
               if true and this instance contains references to other objects also measures memory retained by those
        @param allMeasured
               if set then will skip instances that are in the set and will add instances that where measured by this call
        @return retained memory in bytes for this instances
        """
            ...
        def type(self) -> Type:
        """
        C3 Type of this instance.
        """
            ...
        def replaceType(self, old: Type, new: Type) -> InvalidationQueue.FindStreamSpec:
        """
        Returns new instance with all references to old type, including result of #type, replaced with new type. If new
        type does not contain fields from old or field value types are not convertable then drops the field.
        
        This method is used during live metadata update
        """
            ...
        def super(self, mixin: Type=None) -> Any:
        """
         Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
         useful for redispatching **member** methods reimplemented on this type to a parent implementation:
         ```js
         function toString() {
           return this.super().toString() + ', x=' + this.x;
         }
         ```
        
         ```py
         def toString(this):
            return this.super().toString() + ', x=' + this.x
        ```
        
         To redispatch **static** methods, see {@link Type#super}.
        
         Note that this not the same as the language-specific `super` keyword because it works through the type system and
         supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
         globally.
        
         If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
         This can be used to create a local implementation "around" the server implementation for additional caching or
         other local state management.
        
         @param mixin if specified, this mixin is used instead or an error is thrown
         @return "super" calling proxy for this object
        
         @see Type.super
        """
            ...
        @overload
        def instanceOf(self, typeName: str) -> bool:
        """
        Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        """
            ...
        @overload
        def instanceOf(self, type: Type) -> bool:
        """
        Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        
        @see ValueType#isA
        """
            ...
        def isEmptyObj(self) -> bool:
        """
        Whether all the fields of this instance are empty.
        """
            ...
        def isSame(self, other: Obj) -> bool:
        """
        Whether the specified instance represents exactly the same object as this instance.
        """
            ...
        @overload
        def isFieldSet(self, field: str) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldSet(self, field: FieldType) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldMissing(self, field: str) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def isFieldMissing(self, field: FieldType) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        """
            ...
        @overload
        def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
        the obj.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        @return value for the given field
        """
            ...
        def fieldValues(self) -> Union[Array[FieldValue]]:
        """
        Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
        """
        Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
        Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
        #dataFieldTypes
        """
            ...
        def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
        """
        Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
        """
        Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldNames(self) -> Union[Array[str]]:
        """
        Returns all data field names including those whose values are empty. Array is ordered by
        field ordinal.
        """
            ...
        def unsetFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
        field ordinal.
        """
            ...
        def missingFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
        field ordinal.
        """
            ...
        @overload
        def at(self, ordinal: int) -> Union[T]:
        """
        Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
        
        @param ordinal
                Integer ordinal of the field in the parent type
        @return value of field at ordinal
        """
            ...
        @overload
        def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
        """
        Return value for the given serialized expression
        
        @param expr
                Serialized expression to obtain the value in the given Obj
        @param failIfNotValid
                If set, fails if not a valid expression
        @return value obtained as a result of expression evaluation
        """
            ...
        def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
        """
        Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
        `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
        that it also handles `null`. If path contains any collections then only first element will be traversed,
        unless the collection index is specified in the path.
        
        If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return the field or null
        """
            ...
        def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
        """
        Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
        traversals, unless the collection index is specified in the path.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return fields as a flat list
        
        @see #fieldValueAtPath
        """
            ...
        @overload
        def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        @overload
        def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply
        """
            ...
        def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
        """
        Perform an action for each {@link isFieldSet set} field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
        """
        Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
        on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply; stop if this `action` returns `false
        @return `true` if iteration was not aborted by lambda i.e. it saw all field values
        """
            ...
        @overload
        def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        @overload
        def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type while processing action returns
        `true`.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance; stops processing if return `false`
        @return `true` if iteration was not aborted by lambda i.e. it saw all refs
        """
            ...
        def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
        """
            ...
        def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
        processing action returns `true`.
        """
            ...
        @overload
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.FindStreamSpec]:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the asynchronous `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that fields
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.FindStreamSpec]:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        asynchronous `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Result of this function call is a copy of current instance with specified field value replaced based on result of
        the `mapper` invocation.
        @param field
                  field being mapped
        @param includeEmpty
                  if set, invokes mapper for fields with empty value
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param mapper
                  function to be executed for each pair of field type and Obj instance for producing new reference value
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` will be `null`.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
        result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
        """
        Evaluates given projection expression over this instance.
        """
            ...
        @overload
        def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
        """
        Evaluates given projection over this instance and returns results as json.
        """
            ...
        @overload
        def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
        """
        Evaluates given projection over this instance and returns results as instance of the new Obj.
        """
            ...
        @overload
        def validateObj(self) -> InvalidationQueue.FindStreamSpec:
        """
        Populates all missing default values and throws error if any constraint is violated.
        """
            ...
        @overload
        def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
        """
        Validate that the Obj fields are set according to all the required rules.
        """
            ...
        @overload
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  name of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        @overload
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
        defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
        
        @param fields
                  map of field names/values
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @return new Obj
        """
            ...
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
        If you would like to #unsetField, you should call #withoutFieldAtPath instead.
        
        Immutable objects may return the same instance if the field being set does not actually represent a
        change to the existing object.
        
        @param path
                  path to set value at
        @param value
                  value to set
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @param doNotCreateIfMissing
                  true indicates that any empty reference along the path will not set the value
        @return new Obj
        """
            ...
        def withoutFieldAtPath(self, path: str) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj without the specified path field.
        
        Immutable objects may return the same instance if the field being removed does not actually represent a
        change to the existing object.
        
        @param path
                  path for field to remove
        @return new Obj
        
        @see #withFieldAtPath
        @see #withoutField
        """
            ...
        @overload
        def withoutField(self, field: str) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj, removing the field with the provided name.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        @overload
        def withoutField(self, field: FieldType) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj, removing the field with the provided field type.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        def withoutFields(self, fields: Array[str]) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> InvalidationQueue.FindStreamSpec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
        calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
        {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
        fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
        fields that have already been set.
        
        {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
        As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
        
        @param includeEmptyRefsWithDefaults
                  it `true` then missing / empty child references that have fields with defaults will also be instantiated
        @param defaultFields
                  If not empty, a list of default field paths to populate.  Any default fields not specified in the
                  array will be ignored.
        @return new Obj
        
        @see #defaultField
        @see FieldType#defaultValueConst
        @see FieldType#defaultValue
        """
            ...
        @overload
        def defaultField(self, field: str) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                name of the field to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def defaultField(self, field: FieldType) -> InvalidationQueue.FindStreamSpec:
        """
        Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                field type to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def unsetField(self, field: str) -> InvalidationQueue.FindStreamSpec:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                name of the field to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def unsetField(self, field: FieldType) -> InvalidationQueue.FindStreamSpec:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                field type to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def removeField(self, field: str) -> InvalidationQueue.FindStreamSpec:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                name of the field to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def removeField(self, field: FieldType) -> InvalidationQueue.FindStreamSpec:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                field type to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.FindStreamSpec:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
        
        @param other
                  object
        @param fieldPathMergeSpec
                  mapping of fields of the object to the respective merge annotations
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.FindStreamSpec:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence.
        
        @param other
                  object
        @param otherFieldsFilter
                  only fields of otherFieldsFilter type from other are merged into this obj.
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.FindStreamSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
        traverse child reference and collection fields.
        """
            ...
        def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
        """
        Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
        Fields that non null in only one of this and other will be in the resulting Obj without change.
        """
            ...
        def mergeJson(self, json: any) -> InvalidationQueue.FindStreamSpec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.FindStreamSpec:
        """
        Merge the obj references within the current obj
        @param deep
               If set, traverses the reference fields within the obj as well for a deep merge
        @param objKey
               lambda specifying how to obtain the key for the Obj while determining which Objs to merge
        @param filter
               Field paths that need to be filtered from this merge
        @return Obj with child references merged
        """
            ...
        def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[InvalidationQueue.FindStreamSpec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.FindStreamSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.FindStreamSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[InvalidationQueue.FindStreamSpec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.FindStreamSpec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.FindStreamSpec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.FindStreamSpec]]:
        """
        Create a map with the given key type and elements of this type.
        """
            ...
        @classmethod
        def myReferenceType(cls) -> ReferenceType:
            ...
        @classmethod
        def myMapTypeOf(cls, keyType: ValueType) -> MapType:
            ...
        @classmethod
        def myMapType(cls) -> MapType:
            ...
        @classmethod
        def myArrayType(cls) -> ArrayType:
            ...
        @classmethod
        def mySetType(cls) -> SetType:
            ...
        @classmethod
        def myStreamType(cls) -> StreamType:
            ...
        def toBuilder(self) -> ObjBuilder[InvalidationQueue.FindStreamSpec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[InvalidationQueue.FindStreamSpec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.FindStreamSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.FindStreamSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                   populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Construct an instance from provided fields
        @param fields
                   Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                   field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                   to Panda.make()
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                   -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                   the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
        
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
        
        ```js
        User.make({
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        
        Obj.make({
          type: 'User',
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        ```
        
        ```py
        c3.User.make({
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.Obj.make({
          "type": 'User',
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.User(email='joe@smith.com', realName='Joe Smith')
        
        c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
        ```
        
        Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
        specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
        such as {@link Ann.Ser} do not apply.
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.FindStreamSpec:
        """
        Construct an instance of this type from provided instance of a subtype or a "duck type".
        """
            ...
        def remakeAs(self, type: Type) -> O:
        """
        Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
        converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
        could be costly if types have different value types for same fields.
        
        @param type
                Type of new obj to return
        @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                converted and copied to it
        """
            ...
        @classmethod
        def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
        """
        Optional override that will be called every time instance of this type is created.
        
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        def afterMake(self) -> InvalidationQueue.FindStreamSpec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> InvalidationQueue.FindStreamSpec:
        """
        Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
        every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
        Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
        
        @see ValueType#defaultEmptyValue
        """
            ...
        def toData(self) -> Union[Data]:
        """
        Represent the current obj instance as {@link Data}
        """
            ...
        @classmethod
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.FindStreamSpec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.FindStreamSpec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def filterExpr(cls, spec: InvalidationQueueFilterSpec=None) -> Union[str]:
        """
        Constructs a filter expression based on the spec.  This is not a member function so that it can be called on
        null specs.
        
        @param spec
                  Spec to build filter expression for.
        
        @return a filter expression based on the filter spec.
        """
            ...
        @classmethod
        def errorFilterExpr(cls, queueType: Type=None, spec: InvalidationQueueFilterSpec=None) -> Union[str]:
        """
        Constructs a filter expression for getting errors based on the spec.  This is not a member function so that it
        can be called on null specs.
        
        @param queueType
                  Queue type to filter errors for.
        @param spec
                  Spec to build filter expression for.
        
        @return a filter expression based on the filter spec.
        """
            ...
        @classmethod
        def appendFilterClause(cls, fieldName: str, value: Any=None, filterExpr: str=None, includeNullFilter: bool=None) -> Union[str]:
        """
        Appends a filter clause to an existing filter expression (returned from {@link filterExpr}).
        
        @param fieldName
                  Name of field the new clause is for.
        @param value
                  Value to filter on.
        @param filterExpr
                  Filter expression to add clause to.
        @param includeNullFilter
                  True if null check should be made for null value, otherwise null values will be ignored.
        
        @return original filter expression appended with the new filter clause.
        """
            ...
        @classmethod
        def fromReportGroupKey(cls, groupKey: str) -> InvalidationQueueFilterSpec:
        """
        Constructs a spec from a group key returned in a row from a queue report or queue error report.
        """
            ...
    
    class Processor(Configurable[InvalidationQueueConfig]):
        """
        Process invalidation queue entries for a single `App` execution environment.
        
        @remarks this represents a made instance of InvalidationQueue.Processor
        """
        
        dbe: Optional[Db.Engine]=None
        """
        Db.Engine that owns this processor
        """

        serverNodeId: Optional[str]=None
        """
        Node id
        """

        computeSummary: Optional[InvalidationQueue.Processor.ComputeSummary]=None
        """
        Summary of time used by each queue
        """

        _scheduler: Optional[Any]=None

        _activeComputeActions: Optional[MapBuilder[str, InvalidationQueue.Processor.ComputeDesc]]=None

        _numThreadsScheduling: Optional[Any]=None

        _shouldProcess: Optional[Any]=None

        _isProcessing: Optional[Any]=None

        _processingStarted: Optional[Any]=None

        _processingTerminated: Optional[Any]=None

        _processingTerminatedCause: Optional[Any]=None

        _lastEmptyQueueCheckRefresh: Optional[Any]=None

        _lastProcessed: Optional[Any]=None

        _lastDispatched: Optional[Any]=None

        _lastError: Optional[Any]=None

        _lastErrorReportedAt: Optional[Any]=None

        _maxJobConcurrency: Optional[Any]=None
        def __init__(self, dbe: Optional[Db.Engine]=None, serverNodeId: Optional[str]=None, computeSummary: Optional[InvalidationQueue.Processor.ComputeSummary]=None, _scheduler: Optional[Any]=None, _activeComputeActions: Optional[MapBuilder[str, InvalidationQueue.Processor.ComputeDesc]]=None, _numThreadsScheduling: Optional[Any]=None, _shouldProcess: Optional[Any]=None, _isProcessing: Optional[Any]=None, _processingStarted: Optional[Any]=None, _processingTerminated: Optional[Any]=None, _processingTerminatedCause: Optional[Any]=None, _lastEmptyQueueCheckRefresh: Optional[Any]=None, _lastProcessed: Optional[Any]=None, _lastDispatched: Optional[Any]=None, _lastError: Optional[Any]=None, _lastErrorReportedAt: Optional[Any]=None, _maxJobConcurrency: Optional[Any]=None) -> None: ...

        @overload
        def toJson(self) -> any:
        """
        Convert the internal object representation to a JSON object.
        
        @return JSON object representation
        
        @see #fromJson
        """
            ...
        @overload
        def toJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
        """
        Convert the internal object representation to a _typed_ JSON object.
        @param omitTopLevelType
               Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
               the outer level of the produced json.
        @param runtime
               If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
               performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
        
        
        @return JSON object representation
        
        @see #fromJson
        @see #toJson
        @see serdeser.c3doc
        @see JsonType
        """
            ...
        @overload
        def toTypedJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toJsonString(self) -> str:
            ...
        @overload
        def toJsonString(self, pretty: bool) -> str:
        """
        Convert the internal object representation to a serialized JSON string.
        
        @return JSON object as string
        """
            ...
        @overload
        def toTypedJsonString(self) -> str:
            ...
        @overload
        def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
            ...
        @overload
        def toJsString(self) -> str:
            ...
        @overload
        def toJsString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized JavaScript object literal.
        
        @return JavaScript object literal string
        """
            ...
        @overload
        def toXmlString(self) -> str:
            ...
        @overload
        def toXmlString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized XML string.
        
        @return XML element as string
        
        @see #fromXmlString
        """
            ...
        def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
        """
        Convert the internal object representation to a string serialized representation of the object.
        
        @return string serialized object representation
        """
            ...
        @classmethod
        def fromJson(cls, json: any) -> Union[InvalidationQueue.Processor]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJson
        """
            ...
        @classmethod
        def fromJsonString(cls, json: str) -> Union[InvalidationQueue.Processor]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJsonString
        """
            ...
        @classmethod
        def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.Processor]:
        """
        Load the XML-based representation and reconstruct the corresponding object.
        
        fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
        may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
        isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
        will return an instance of the correct type.
        
        @see #toXmlString
        """
            ...
        @classmethod
        def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.Processor]:
        """
        Load from contentType representation and reconstruct the corresponding object.
        
        fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
        (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
        will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
        type and will return an instance of the correct type.
        """
            ...
        def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
        """
        Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
        there is a slight possibility that two objects with the same fingerprint will actually differ.
        
        The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
        {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
        unless the allIdentifiedRefFields option is specified.
        
        If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
        However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
        
        @param allIdentifiedRefFields
                  if `true`, fingerprint individual fields of persistable references, not just the `id`
        @param trackRecursiveRefs
                  if `true`, a set of referenced objects is maintained to avoid infinite recursion
        @param traversedRefs
                  only considered together with trackRecursiveRefs and if provided then all traversed references are
                  checked against and added to it
        @return integer fingerprint
        
        @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
        """
            ...
        def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
        """
        Measures retained memory by this instance.
        
        @param deep
               if true and this instance contains references to other objects also measures memory retained by those
        @param allMeasured
               if set then will skip instances that are in the set and will add instances that where measured by this call
        @return retained memory in bytes for this instances
        """
            ...
        def type(self) -> Type:
        """
        C3 Type of this instance.
        """
            ...
        def replaceType(self, old: Type, new: Type) -> InvalidationQueue.Processor:
        """
        Returns new instance with all references to old type, including result of #type, replaced with new type. If new
        type does not contain fields from old or field value types are not convertable then drops the field.
        
        This method is used during live metadata update
        """
            ...
        def super(self, mixin: Type=None) -> Any:
        """
         Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
         useful for redispatching **member** methods reimplemented on this type to a parent implementation:
         ```js
         function toString() {
           return this.super().toString() + ', x=' + this.x;
         }
         ```
        
         ```py
         def toString(this):
            return this.super().toString() + ', x=' + this.x
        ```
        
         To redispatch **static** methods, see {@link Type#super}.
        
         Note that this not the same as the language-specific `super` keyword because it works through the type system and
         supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
         globally.
        
         If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
         This can be used to create a local implementation "around" the server implementation for additional caching or
         other local state management.
        
         @param mixin if specified, this mixin is used instead or an error is thrown
         @return "super" calling proxy for this object
        
         @see Type.super
        """
            ...
        @overload
        def instanceOf(self, typeName: str) -> bool:
        """
        Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        """
            ...
        @overload
        def instanceOf(self, type: Type) -> bool:
        """
        Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        
        @see ValueType#isA
        """
            ...
        def isEmptyObj(self) -> bool:
        """
        Whether all the fields of this instance are empty.
        """
            ...
        def isSame(self, other: Obj) -> bool:
        """
        Whether the specified instance represents exactly the same object as this instance.
        """
            ...
        @overload
        def isFieldSet(self, field: str) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldSet(self, field: FieldType) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldMissing(self, field: str) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def isFieldMissing(self, field: FieldType) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        """
            ...
        @overload
        def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
        the obj.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        @return value for the given field
        """
            ...
        def fieldValues(self) -> Union[Array[FieldValue]]:
        """
        Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
        """
        Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
        Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
        #dataFieldTypes
        """
            ...
        def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
        """
        Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
        """
        Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldNames(self) -> Union[Array[str]]:
        """
        Returns all data field names including those whose values are empty. Array is ordered by
        field ordinal.
        """
            ...
        def unsetFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
        field ordinal.
        """
            ...
        def missingFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
        field ordinal.
        """
            ...
        @overload
        def at(self, ordinal: int) -> Union[T]:
        """
        Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
        
        @param ordinal
                Integer ordinal of the field in the parent type
        @return value of field at ordinal
        """
            ...
        @overload
        def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
        """
        Return value for the given serialized expression
        
        @param expr
                Serialized expression to obtain the value in the given Obj
        @param failIfNotValid
                If set, fails if not a valid expression
        @return value obtained as a result of expression evaluation
        """
            ...
        def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
        """
        Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
        `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
        that it also handles `null`. If path contains any collections then only first element will be traversed,
        unless the collection index is specified in the path.
        
        If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return the field or null
        """
            ...
        def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
        """
        Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
        traversals, unless the collection index is specified in the path.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return fields as a flat list
        
        @see #fieldValueAtPath
        """
            ...
        @overload
        def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        @overload
        def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply
        """
            ...
        def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
        """
        Perform an action for each {@link isFieldSet set} field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
        """
        Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
        on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply; stop if this `action` returns `false
        @return `true` if iteration was not aborted by lambda i.e. it saw all field values
        """
            ...
        @overload
        def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        @overload
        def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type while processing action returns
        `true`.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance; stops processing if return `false`
        @return `true` if iteration was not aborted by lambda i.e. it saw all refs
        """
            ...
        def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
        """
            ...
        def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
        processing action returns `true`.
        """
            ...
        @overload
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor]:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the asynchronous `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that fields
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor]:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        asynchronous `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.Processor:
        """
        Result of this function call is a copy of current instance with specified field value replaced based on result of
        the `mapper` invocation.
        @param field
                  field being mapped
        @param includeEmpty
                  if set, invokes mapper for fields with empty value
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param mapper
                  function to be executed for each pair of field type and Obj instance for producing new reference value
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` will be `null`.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
        result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
        """
        Evaluates given projection expression over this instance.
        """
            ...
        @overload
        def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
        """
        Evaluates given projection over this instance and returns results as json.
        """
            ...
        @overload
        def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
        """
        Evaluates given projection over this instance and returns results as instance of the new Obj.
        """
            ...
        @overload
        def validateObj(self) -> InvalidationQueue.Processor:
        """
        Populates all missing default values and throws error if any constraint is violated.
        """
            ...
        @overload
        def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
        """
        Validate that the Obj fields are set according to all the required rules.
        """
            ...
        @overload
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  name of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        @overload
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.Processor:
        """
        Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
        defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
        
        @param fields
                  map of field names/values
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @return new Obj
        """
            ...
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.Processor:
        """
        Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
        If you would like to #unsetField, you should call #withoutFieldAtPath instead.
        
        Immutable objects may return the same instance if the field being set does not actually represent a
        change to the existing object.
        
        @param path
                  path to set value at
        @param value
                  value to set
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @param doNotCreateIfMissing
                  true indicates that any empty reference along the path will not set the value
        @return new Obj
        """
            ...
        def withoutFieldAtPath(self, path: str) -> InvalidationQueue.Processor:
        """
        Builds a new Obj without the specified path field.
        
        Immutable objects may return the same instance if the field being removed does not actually represent a
        change to the existing object.
        
        @param path
                  path for field to remove
        @return new Obj
        
        @see #withFieldAtPath
        @see #withoutField
        """
            ...
        @overload
        def withoutField(self, field: str) -> InvalidationQueue.Processor:
        """
        Builds a new Obj, removing the field with the provided name.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        @overload
        def withoutField(self, field: FieldType) -> InvalidationQueue.Processor:
        """
        Builds a new Obj, removing the field with the provided field type.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        def withoutFields(self, fields: Array[str]) -> InvalidationQueue.Processor:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.Processor:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> InvalidationQueue.Processor:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.Processor:
        """
        Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
        calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
        {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
        fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
        fields that have already been set.
        
        {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
        As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
        
        @param includeEmptyRefsWithDefaults
                  it `true` then missing / empty child references that have fields with defaults will also be instantiated
        @param defaultFields
                  If not empty, a list of default field paths to populate.  Any default fields not specified in the
                  array will be ignored.
        @return new Obj
        
        @see #defaultField
        @see FieldType#defaultValueConst
        @see FieldType#defaultValue
        """
            ...
        @overload
        def defaultField(self, field: str) -> InvalidationQueue.Processor:
        """
        Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                name of the field to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def defaultField(self, field: FieldType) -> InvalidationQueue.Processor:
        """
        Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                field type to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def unsetField(self, field: str) -> InvalidationQueue.Processor:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                name of the field to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def unsetField(self, field: FieldType) -> InvalidationQueue.Processor:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                field type to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def removeField(self, field: str) -> InvalidationQueue.Processor:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                name of the field to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def removeField(self, field: FieldType) -> InvalidationQueue.Processor:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                field type to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.Processor:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
        
        @param other
                  object
        @param fieldPathMergeSpec
                  mapping of fields of the object to the respective merge annotations
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.Processor:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence.
        
        @param other
                  object
        @param otherFieldsFilter
                  only fields of otherFieldsFilter type from other are merged into this obj.
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.Processor:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.Processor:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
        traverse child reference and collection fields.
        """
            ...
        def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
        """
        Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
        Fields that non null in only one of this and other will be in the resulting Obj without change.
        """
            ...
        def mergeJson(self, json: any) -> InvalidationQueue.Processor:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.Processor:
        """
        Merge the obj references within the current obj
        @param deep
               If set, traverses the reference fields within the obj as well for a deep merge
        @param objKey
               lambda specifying how to obtain the key for the Obj while determining which Objs to merge
        @param filter
               Field paths that need to be filtered from this merge
        @return Obj with child references merged
        """
            ...
        def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.Processor:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[InvalidationQueue.Processor]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.Processor]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.Processor]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[InvalidationQueue.Processor]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.Processor]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.Processor]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.Processor]]:
        """
        Create a map with the given key type and elements of this type.
        """
            ...
        @classmethod
        def myReferenceType(cls) -> ReferenceType:
            ...
        @classmethod
        def myMapTypeOf(cls, keyType: ValueType) -> MapType:
            ...
        @classmethod
        def myMapType(cls) -> MapType:
            ...
        @classmethod
        def myArrayType(cls) -> ArrayType:
            ...
        @classmethod
        def mySetType(cls) -> SetType:
            ...
        @classmethod
        def myStreamType(cls) -> StreamType:
            ...
        def toBuilder(self) -> ObjBuilder[InvalidationQueue.Processor]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[InvalidationQueue.Processor]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> InvalidationQueue.Processor:
        """
        Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                   populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor:
        """
        Construct an instance from provided fields
        @param fields
                   Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                   field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                   to Panda.make()
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                   -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                   the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
        
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.Processor:
        """
        Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
        
        ```js
        User.make({
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        
        Obj.make({
          type: 'User',
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        ```
        
        ```py
        c3.User.make({
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.Obj.make({
          "type": 'User',
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.User(email='joe@smith.com', realName='Joe Smith')
        
        c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
        ```
        
        Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
        specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
        such as {@link Ann.Ser} do not apply.
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.Processor:
        """
        Construct an instance of this type from provided instance of a subtype or a "duck type".
        """
            ...
        def remakeAs(self, type: Type) -> O:
        """
        Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
        converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
        could be costly if types have different value types for same fields.
        
        @param type
                Type of new obj to return
        @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                converted and copied to it
        """
            ...
        @classmethod
        def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
        """
        Optional override that will be called every time instance of this type is created.
        
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        def afterMake(self) -> InvalidationQueue.Processor:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> InvalidationQueue.Processor:
        """
        Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
        every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
        Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
        
        @see ValueType#defaultEmptyValue
        """
            ...
        def toData(self) -> Union[Data]:
        """
        Represent the current obj instance as {@link Data}
        """
            ...
        @classmethod
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.Processor]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.Processor:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def config(self, secrets: bool=None) -> InvalidationQueueConfig:
        """
        Returns cached configuration for instance of this type. See Configurable type documentation for more details.
        
        @param secrets
                 if set to `true` and current role has sufficient permissions configuration will contain values of secret
                 fields. Otherwise configuration will not have values for secrets.
        @return instance of configuration - never `null`.
        """
            ...
        def configKey(self) -> Union[str]:
        """
        @return configuration key for this instance.
        """
            ...
        def configSingletonKey(self) -> Union[str]:
        """
        @return configuration key for this type assuming it is singleton.
        """
            ...
        @classmethod
        def typeConfig(cls) -> InvalidationQueueConfig:
        """
        @return type configuration for the given {@link Configurable} type.
        E.g. {@see REST} & {@see RestConfig}
        """
            ...
        def maxJobConcurrency(self) -> Union[Any]:
        """
        Maximum job concurrency for batch/mapReduce jobs
        """
            ...
        def start(self) -> None:
        """
        Starts processing
        """
            ...
        @classmethod
        def status(cls) -> InvalidationQueue.Processor.Status:
        """
        @return the current status of the various functions/states of the processor
        """
            ...
        def getStatus(self) -> InvalidationQueue.Processor.Status:
            ...
        @classmethod
        def makeInitial(cls, dbe: Db.Engine) -> InvalidationQueue.Processor:
        """
        Makes new instance of InvalidationQueue.Processor
        """
            ...
        def scheduler(self) -> Union[InvalidationQueue.Processor.Scheduler]:
        """
        Schedules queue entries for processing
        """
            ...
        def numThreadsScheduling(self) -> int:
        """
        Number of threads currently scheduling queue entries for processing
        """
            ...
        def incrementNumThreadsScheduling(self) -> int:
        """
        Increments the number of threads currently scheduling queue entries for processing
        """
            ...
        def decrementNumThreadsScheduling(self) -> int:
        """
        Increments the number of threads currently scheduling queue entries for processing
        """
            ...
        def allQueueTypes(self) -> Union[Array[Type]]:
        """
        All currently used queue types
        """
            ...
        def activeComputeActions(self) -> Union[Map[str, InvalidationQueue.Processor.ComputeDesc]]:
        """
        Current active compute actions
        """
            ...
        def recoverStuck(self, forNode: bool=None) -> None:
        """
        Recovers stuck invalidation queue entries
        
        @param forNode:
               If true, only queue entries for the current node will be recovered.  Otherwise entries for all nodes will
               be.
        """
            ...
        def lockAndDispatchComputesForQueue(self, queueType: Type, forLeader: bool=None) -> bool:
        """
        Locks and asynchronously dispatches actions for queue entries for the specified queue.
        
        @param queueType
               Queue to lock and dispatch for
        
        @param forLeader
               If true, the request is being made specifically for actions that are specified to be run on a leader node.
        
        @return True if any entries were dispatched.
        """
            ...
        def isQueueDisabled(self, queueType: Type) -> bool:
        """
        @return true if the specified queue is disabled
        """
            ...
        def isProcessing(self) -> bool:
        """
        @return true if the processor instance is currently processing entries (e.g. not stopped or terminated, etc.).
        """
            ...
        def lastProcessed(self) -> Union[datetime]:
        """
        Timestamp of last pass through the main processing loop
        """
            ...
        def lastDispatched(self) -> Union[datetime]:
        """
        Timestamp of last successful dispatch of queue entries from main processing loop
        """
            ...
        def processingStarted(self) -> Union[datetime]:
        """
        Timestamp when main processing loop was started
        """
            ...
        def processingTerminated(self) -> Union[datetime]:
        """
        Timestamp when processing loop terminated
        """
            ...
        def processingTerminatedCause(self) -> Union[str]:
            ...
        def setProcessingTerminated(self, cause: str) -> None:
            ...
        def lastError(self) -> Union[Any]:
        """
        The last error encountered during processing
        """
            ...
        def lastErrorReportedAt(self) -> Union[datetime]:
            ...
        def setLastError(self, lastError: Any) -> None:
            ...
        
        class Status():
            """
            Status for a single InvalidationQueue.Processor instance
            
            @remarks this represents a made instance of InvalidationQueue.Processor.Status
            """
            
            currentTime: Optional[datetime]
            """
            Time status request was made
            """

            appId: Optional[str]=None
            """
            Appid for the processor
            """

            serverNodeId: Optional[str]=None
            """
            Node id
            """

            isProcessing: Optional[bool]=None
            """
            Currently processing
            """

            isServerRunning: Optional[bool]=None
            """
            Server is currently running
            """

            isDbeRunning: Optional[bool]=None
            """
            Db.Engine instance is currently running
            """

            isDbeTerminated: Optional[bool]=None
            """
            Db.Engine instance is terminated
            """

            isCurrentProcessor: Optional[bool]=None
            """
            Processor is for current instance of {@link Db.Engine}
            """

            processingStarted: Optional[datetime]=None
            """
            Timestamp when main processing loop was started
            """

            processingTerminated: Optional[datetime]=None
            """
            Timestamp when main processing loop terminated
            """

            processingTerminatedCause: Optional[str]=None
            """
            What caused the processing to be terminated
            """

            canCompute: Optional[bool]=None
            """
            Computing slots are available for dispatching
            """

            queuesToProcess: Optional[Array[Type]]=None
            """
            Queues that currently have entries that need processing
            """

            lastProcessed: Optional[datetime]=None
            """
            Timestamp of last pass through main processing loop
            """

            lastDispatched: Optional[datetime]=None
            """
            Timestamp of last successful dispatching of queue entries
            """

            lastErrorMsg: Optional[str]=None
            """
            Last error message encountered by processing loop
            """

            lastErrorStackTrace: Optional[str]=None
            """
            Stack trace of last reported error
            """

            lastErrorReportedAt: Optional[datetime]=None
            """
            Timestamp when last error was reported
            """

            maxJobConcurrency: Optional[Map[str, Triple[datetime, int, int]]]=None
            """
            Current maximum job concurrency for batch/mapReduce jobs
            """

            computeSummary: Optional[InvalidationQueue.Processor.ComputeSummary]=None
            """
            Latest summary of time used by each queue
            """

            numThreadsScheduling: Optional[int]
            """
            Current number of threads currently scheduling queue entries for processing
            """

            activeComputeActions: Optional[Map[str, InvalidationQueue.Processor.ComputeDesc]]=None
            """
            Current active compute actions
            """

            cronProcessorStatus: Optional[Cron.Processor.Status]=None
            """
            Status of the {@link Cron.Processor}
            """
            def __init__(self, currentTime: Optional[datetime]=None, appId: Optional[str]=None, serverNodeId: Optional[str]=None, isProcessing: Optional[bool]=None, isServerRunning: Optional[bool]=None, isDbeRunning: Optional[bool]=None, isDbeTerminated: Optional[bool]=None, isCurrentProcessor: Optional[bool]=None, processingStarted: Optional[datetime]=None, processingTerminated: Optional[datetime]=None, processingTerminatedCause: Optional[str]=None, canCompute: Optional[bool]=None, queuesToProcess: Optional[Array[Type]]=None, lastProcessed: Optional[datetime]=None, lastDispatched: Optional[datetime]=None, lastErrorMsg: Optional[str]=None, lastErrorStackTrace: Optional[str]=None, lastErrorReportedAt: Optional[datetime]=None, maxJobConcurrency: Optional[Map[str, Triple[datetime, int, int]]]=None, computeSummary: Optional[InvalidationQueue.Processor.ComputeSummary]=None, numThreadsScheduling: Optional[int]=None, activeComputeActions: Optional[Map[str, InvalidationQueue.Processor.ComputeDesc]]=None, cronProcessorStatus: Optional[Cron.Processor.Status]=None) -> None: ...

            @overload
            def toJson(self) -> any:
            """
            Convert the internal object representation to a JSON object.
            
            @return JSON object representation
            
            @see #fromJson
            """
                ...
            @overload
            def toJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
            """
            Convert the internal object representation to a _typed_ JSON object.
            @param omitTopLevelType
                   Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
                   the outer level of the produced json.
            @param runtime
                   If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
                   performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
            
            
            @return JSON object representation
            
            @see #fromJson
            @see #toJson
            @see serdeser.c3doc
            @see JsonType
            """
                ...
            @overload
            def toTypedJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toJsonString(self) -> str:
                ...
            @overload
            def toJsonString(self, pretty: bool) -> str:
            """
            Convert the internal object representation to a serialized JSON string.
            
            @return JSON object as string
            """
                ...
            @overload
            def toTypedJsonString(self) -> str:
                ...
            @overload
            def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
                ...
            @overload
            def toJsString(self) -> str:
                ...
            @overload
            def toJsString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized JavaScript object literal.
            
            @return JavaScript object literal string
            """
                ...
            @overload
            def toXmlString(self) -> str:
                ...
            @overload
            def toXmlString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized XML string.
            
            @return XML element as string
            
            @see #fromXmlString
            """
                ...
            def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
            """
            Convert the internal object representation to a string serialized representation of the object.
            
            @return string serialized object representation
            """
                ...
            @classmethod
            def fromJson(cls, json: any) -> Union[InvalidationQueue.Processor.Status]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJson
            """
                ...
            @classmethod
            def fromJsonString(cls, json: str) -> Union[InvalidationQueue.Processor.Status]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJsonString
            """
                ...
            @classmethod
            def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.Processor.Status]:
            """
            Load the XML-based representation and reconstruct the corresponding object.
            
            fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
            may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
            isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
            will return an instance of the correct type.
            
            @see #toXmlString
            """
                ...
            @classmethod
            def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.Processor.Status]:
            """
            Load from contentType representation and reconstruct the corresponding object.
            
            fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
            (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
            will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
            type and will return an instance of the correct type.
            """
                ...
            def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
            """
            Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
            there is a slight possibility that two objects with the same fingerprint will actually differ.
            
            The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
            {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
            unless the allIdentifiedRefFields option is specified.
            
            If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
            However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
            
            @param allIdentifiedRefFields
                      if `true`, fingerprint individual fields of persistable references, not just the `id`
            @param trackRecursiveRefs
                      if `true`, a set of referenced objects is maintained to avoid infinite recursion
            @param traversedRefs
                      only considered together with trackRecursiveRefs and if provided then all traversed references are
                      checked against and added to it
            @return integer fingerprint
            
            @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
            """
                ...
            def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
            """
            Measures retained memory by this instance.
            
            @param deep
                   if true and this instance contains references to other objects also measures memory retained by those
            @param allMeasured
                   if set then will skip instances that are in the set and will add instances that where measured by this call
            @return retained memory in bytes for this instances
            """
                ...
            def type(self) -> Type:
            """
            C3 Type of this instance.
            """
                ...
            def replaceType(self, old: Type, new: Type) -> InvalidationQueue.Processor.Status:
            """
            Returns new instance with all references to old type, including result of #type, replaced with new type. If new
            type does not contain fields from old or field value types are not convertable then drops the field.
            
            This method is used during live metadata update
            """
                ...
            def super(self, mixin: Type=None) -> Any:
            """
             Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
             useful for redispatching **member** methods reimplemented on this type to a parent implementation:
             ```js
             function toString() {
               return this.super().toString() + ', x=' + this.x;
             }
             ```
            
             ```py
             def toString(this):
                return this.super().toString() + ', x=' + this.x
            ```
            
             To redispatch **static** methods, see {@link Type#super}.
            
             Note that this not the same as the language-specific `super` keyword because it works through the type system and
             supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
             globally.
            
             If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
             This can be used to create a local implementation "around" the server implementation for additional caching or
             other local state management.
            
             @param mixin if specified, this mixin is used instead or an error is thrown
             @return "super" calling proxy for this object
            
             @see Type.super
            """
                ...
            @overload
            def instanceOf(self, typeName: str) -> bool:
            """
            Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            """
                ...
            @overload
            def instanceOf(self, type: Type) -> bool:
            """
            Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            
            @see ValueType#isA
            """
                ...
            def isEmptyObj(self) -> bool:
            """
            Whether all the fields of this instance are empty.
            """
                ...
            def isSame(self, other: Obj) -> bool:
            """
            Whether the specified instance represents exactly the same object as this instance.
            """
                ...
            @overload
            def isFieldSet(self, field: str) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldSet(self, field: FieldType) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldMissing(self, field: str) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def isFieldMissing(self, field: FieldType) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            """
                ...
            @overload
            def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
            the obj.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            @return value for the given field
            """
                ...
            def fieldValues(self) -> Union[Array[FieldValue]]:
            """
            Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
            """
            Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
            Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
            #dataFieldTypes
            """
                ...
            def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
            """
            Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
            """
            Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldNames(self) -> Union[Array[str]]:
            """
            Returns all data field names including those whose values are empty. Array is ordered by
            field ordinal.
            """
                ...
            def unsetFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
            field ordinal.
            """
                ...
            def missingFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
            field ordinal.
            """
                ...
            @overload
            def at(self, ordinal: int) -> Union[T]:
            """
            Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
            
            @param ordinal
                    Integer ordinal of the field in the parent type
            @return value of field at ordinal
            """
                ...
            @overload
            def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
            """
            Return value for the given serialized expression
            
            @param expr
                    Serialized expression to obtain the value in the given Obj
            @param failIfNotValid
                    If set, fails if not a valid expression
            @return value obtained as a result of expression evaluation
            """
                ...
            def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
            """
            Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
            `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
            that it also handles `null`. If path contains any collections then only first element will be traversed,
            unless the collection index is specified in the path.
            
            If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return the field or null
            """
                ...
            def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
            """
            Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
            traversals, unless the collection index is specified in the path.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return fields as a flat list
            
            @see #fieldValueAtPath
            """
                ...
            @overload
            def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            @overload
            def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply
            """
                ...
            def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
            """
            Perform an action for each {@link isFieldSet set} field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
            """
            Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
            on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply; stop if this `action` returns `false
            @return `true` if iteration was not aborted by lambda i.e. it saw all field values
            """
                ...
            @overload
            def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            @overload
            def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type while processing action returns
            `true`.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance; stops processing if return `false`
            @return `true` if iteration was not aborted by lambda i.e. it saw all refs
            """
                ...
            def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
            """
                ...
            def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
            processing action returns `true`.
            """
                ...
            @overload
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.Status]:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the asynchronous `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that fields
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.Status]:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            asynchronous `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Result of this function call is a copy of current instance with specified field value replaced based on result of
            the `mapper` invocation.
            @param field
                      field being mapped
            @param includeEmpty
                      if set, invokes mapper for fields with empty value
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param mapper
                      function to be executed for each pair of field type and Obj instance for producing new reference value
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` will be `null`.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
            result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
            """
            Evaluates given projection expression over this instance.
            """
                ...
            @overload
            def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
            """
            Evaluates given projection over this instance and returns results as json.
            """
                ...
            @overload
            def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
            """
            Evaluates given projection over this instance and returns results as instance of the new Obj.
            """
                ...
            @overload
            def validateObj(self) -> InvalidationQueue.Processor.Status:
            """
            Populates all missing default values and throws error if any constraint is violated.
            """
                ...
            @overload
            def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
            """
            Validate that the Obj fields are set according to all the required rules.
            """
                ...
            @overload
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      name of the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            @overload
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
            defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
            
            @param fields
                      map of field names/values
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @return new Obj
            """
                ...
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
            If you would like to #unsetField, you should call #withoutFieldAtPath instead.
            
            Immutable objects may return the same instance if the field being set does not actually represent a
            change to the existing object.
            
            @param path
                      path to set value at
            @param value
                      value to set
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @param doNotCreateIfMissing
                      true indicates that any empty reference along the path will not set the value
            @return new Obj
            """
                ...
            def withoutFieldAtPath(self, path: str) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj without the specified path field.
            
            Immutable objects may return the same instance if the field being removed does not actually represent a
            change to the existing object.
            
            @param path
                      path for field to remove
            @return new Obj
            
            @see #withFieldAtPath
            @see #withoutField
            """
                ...
            @overload
            def withoutField(self, field: str) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj, removing the field with the provided name.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            @overload
            def withoutField(self, field: FieldType) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj, removing the field with the provided field type.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            def withoutFields(self, fields: Array[str]) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> InvalidationQueue.Processor.Status:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
            calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
            {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
            fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
            fields that have already been set.
            
            {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
            As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
            
            @param includeEmptyRefsWithDefaults
                      it `true` then missing / empty child references that have fields with defaults will also be instantiated
            @param defaultFields
                      If not empty, a list of default field paths to populate.  Any default fields not specified in the
                      array will be ignored.
            @return new Obj
            
            @see #defaultField
            @see FieldType#defaultValueConst
            @see FieldType#defaultValue
            """
                ...
            @overload
            def defaultField(self, field: str) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    name of the field to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def defaultField(self, field: FieldType) -> InvalidationQueue.Processor.Status:
            """
            Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    field type to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def unsetField(self, field: str) -> InvalidationQueue.Processor.Status:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    name of the field to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def unsetField(self, field: FieldType) -> InvalidationQueue.Processor.Status:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    field type to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def removeField(self, field: str) -> InvalidationQueue.Processor.Status:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    name of the field to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def removeField(self, field: FieldType) -> InvalidationQueue.Processor.Status:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    field type to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.Processor.Status:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
            
            @param other
                      object
            @param fieldPathMergeSpec
                      mapping of fields of the object to the respective merge annotations
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.Processor.Status:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence.
            
            @param other
                      object
            @param otherFieldsFilter
                      only fields of otherFieldsFilter type from other are merged into this obj.
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.Processor.Status:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
            traverse child reference and collection fields.
            """
                ...
            def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
            """
            Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
            Fields that non null in only one of this and other will be in the resulting Obj without change.
            """
                ...
            def mergeJson(self, json: any) -> InvalidationQueue.Processor.Status:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.Processor.Status:
            """
            Merge the obj references within the current obj
            @param deep
                   If set, traverses the reference fields within the obj as well for a deep merge
            @param objKey
                   lambda specifying how to obtain the key for the Obj while determining which Objs to merge
            @param filter
                   Field paths that need to be filtered from this merge
            @return Obj with child references merged
            """
                ...
            def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[InvalidationQueue.Processor.Status]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.Processor.Status]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.Processor.Status]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[InvalidationQueue.Processor.Status]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.Processor.Status]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.Processor.Status]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.Processor.Status]]:
            """
            Create a map with the given key type and elements of this type.
            """
                ...
            @classmethod
            def myReferenceType(cls) -> ReferenceType:
                ...
            @classmethod
            def myMapTypeOf(cls, keyType: ValueType) -> MapType:
                ...
            @classmethod
            def myMapType(cls) -> MapType:
                ...
            @classmethod
            def myArrayType(cls) -> ArrayType:
                ...
            @classmethod
            def mySetType(cls) -> SetType:
                ...
            @classmethod
            def myStreamType(cls) -> StreamType:
                ...
            def toBuilder(self) -> ObjBuilder[InvalidationQueue.Processor.Status]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[InvalidationQueue.Processor.Status]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.Status:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Construct an instance of this type from provided fields
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.Status:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                       populated
            
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Construct an instance from provided fields
            @param fields
                       Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                       field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                       to Panda.make()
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                       -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                       the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
            
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
            
            ```js
            User.make({
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            
            Obj.make({
              type: 'User',
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            ```
            
            ```py
            c3.User.make({
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.Obj.make({
              "type": 'User',
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.User(email='joe@smith.com', realName='Joe Smith')
            
            c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
            ```
            
            Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
            specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
            such as {@link Ann.Ser} do not apply.
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @classmethod
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.Processor.Status:
            """
            Construct an instance of this type from provided instance of a subtype or a "duck type".
            """
                ...
            def remakeAs(self, type: Type) -> O:
            """
            Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
            converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
            could be costly if types have different value types for same fields.
            
            @param type
                    Type of new obj to return
            @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                    converted and copied to it
            """
                ...
            @classmethod
            def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
            """
            Optional override that will be called every time instance of this type is created.
            
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            def afterMake(self) -> InvalidationQueue.Processor.Status:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> InvalidationQueue.Processor.Status:
            """
            Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
            every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
            Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
            
            @see ValueType#defaultEmptyValue
            """
                ...
            def toData(self) -> Union[Data]:
            """
            Represent the current obj instance as {@link Data}
            """
                ...
            @classmethod
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.Processor.Status]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.Processor.Status:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
        
        class ComputeSummary(Mutable):
            """
            Accumulates statistics of queue scheduling. Used for periodic logging of what queue processing was done
            
            @remarks this represents a made instance of InvalidationQueue.Processor.ComputeSummary
            """
            
            _queues: Optional[MapBuilder[Type, InvalidationQueue.Processor.ComputeSummary.Queue]]=None
            """
            Number of entries processed
            """
            def __init__(self, _queues: Optional[MapBuilder[Type, InvalidationQueue.Processor.ComputeSummary.Queue]]=None) -> None: ...

            @overload
            @classmethod
            def make(cls) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Construct an instance with initial state.
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                       populated
            
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Construct an instance from provided fields
            @param fields
                       Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                       field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                       to Panda.make()
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                       -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                       the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
            
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
            
            ```js
            User.make({
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            
            Obj.make({
              type: 'User',
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            ```
            
            ```py
            c3.User.make({
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.Obj.make({
              "type": 'User',
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.User(email='joe@smith.com', realName='Joe Smith')
            
            c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
            ```
            
            Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
            specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
            such as {@link Ann.Ser} do not apply.
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @overload
            def toJson(self) -> any:
            """
            Convert the internal object representation to a JSON object.
            
            @return JSON object representation
            
            @see #fromJson
            """
                ...
            @overload
            def toJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
            """
            Convert the internal object representation to a _typed_ JSON object.
            @param omitTopLevelType
                   Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
                   the outer level of the produced json.
            @param runtime
                   If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
                   performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
            
            
            @return JSON object representation
            
            @see #fromJson
            @see #toJson
            @see serdeser.c3doc
            @see JsonType
            """
                ...
            @overload
            def toTypedJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toJsonString(self) -> str:
                ...
            @overload
            def toJsonString(self, pretty: bool) -> str:
            """
            Convert the internal object representation to a serialized JSON string.
            
            @return JSON object as string
            """
                ...
            @overload
            def toTypedJsonString(self) -> str:
                ...
            @overload
            def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
                ...
            @overload
            def toJsString(self) -> str:
                ...
            @overload
            def toJsString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized JavaScript object literal.
            
            @return JavaScript object literal string
            """
                ...
            @overload
            def toXmlString(self) -> str:
                ...
            @overload
            def toXmlString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized XML string.
            
            @return XML element as string
            
            @see #fromXmlString
            """
                ...
            def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
            """
            Convert the internal object representation to a string serialized representation of the object.
            
            @return string serialized object representation
            """
                ...
            @classmethod
            def fromJson(cls, json: any) -> Union[InvalidationQueue.Processor.ComputeSummary]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJson
            """
                ...
            @classmethod
            def fromJsonString(cls, json: str) -> Union[InvalidationQueue.Processor.ComputeSummary]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJsonString
            """
                ...
            @classmethod
            def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.Processor.ComputeSummary]:
            """
            Load the XML-based representation and reconstruct the corresponding object.
            
            fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
            may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
            isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
            will return an instance of the correct type.
            
            @see #toXmlString
            """
                ...
            @classmethod
            def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.Processor.ComputeSummary]:
            """
            Load from contentType representation and reconstruct the corresponding object.
            
            fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
            (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
            will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
            type and will return an instance of the correct type.
            """
                ...
            def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
            """
            Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
            there is a slight possibility that two objects with the same fingerprint will actually differ.
            
            The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
            {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
            unless the allIdentifiedRefFields option is specified.
            
            If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
            However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
            
            @param allIdentifiedRefFields
                      if `true`, fingerprint individual fields of persistable references, not just the `id`
            @param trackRecursiveRefs
                      if `true`, a set of referenced objects is maintained to avoid infinite recursion
            @param traversedRefs
                      only considered together with trackRecursiveRefs and if provided then all traversed references are
                      checked against and added to it
            @return integer fingerprint
            
            @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
            """
                ...
            def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
            """
            Measures retained memory by this instance.
            
            @param deep
                   if true and this instance contains references to other objects also measures memory retained by those
            @param allMeasured
                   if set then will skip instances that are in the set and will add instances that where measured by this call
            @return retained memory in bytes for this instances
            """
                ...
            def type(self) -> Type:
            """
            C3 Type of this instance.
            """
                ...
            def replaceType(self, old: Type, new: Type) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Returns new instance with all references to old type, including result of #type, replaced with new type. If new
            type does not contain fields from old or field value types are not convertable then drops the field.
            
            This method is used during live metadata update
            """
                ...
            def super(self, mixin: Type=None) -> Any:
            """
             Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
             useful for redispatching **member** methods reimplemented on this type to a parent implementation:
             ```js
             function toString() {
               return this.super().toString() + ', x=' + this.x;
             }
             ```
            
             ```py
             def toString(this):
                return this.super().toString() + ', x=' + this.x
            ```
            
             To redispatch **static** methods, see {@link Type#super}.
            
             Note that this not the same as the language-specific `super` keyword because it works through the type system and
             supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
             globally.
            
             If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
             This can be used to create a local implementation "around" the server implementation for additional caching or
             other local state management.
            
             @param mixin if specified, this mixin is used instead or an error is thrown
             @return "super" calling proxy for this object
            
             @see Type.super
            """
                ...
            @overload
            def instanceOf(self, typeName: str) -> bool:
            """
            Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            """
                ...
            @overload
            def instanceOf(self, type: Type) -> bool:
            """
            Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            
            @see ValueType#isA
            """
                ...
            def isEmptyObj(self) -> bool:
            """
            Whether all the fields of this instance are empty.
            """
                ...
            def isSame(self, other: Obj) -> bool:
            """
            Whether the specified instance represents exactly the same object as this instance.
            """
                ...
            @overload
            def isFieldSet(self, field: str) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldSet(self, field: FieldType) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldMissing(self, field: str) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def isFieldMissing(self, field: FieldType) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            """
                ...
            @overload
            def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
            the obj.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            @return value for the given field
            """
                ...
            def fieldValues(self) -> Union[Array[FieldValue]]:
            """
            Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
            """
            Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
            Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
            #dataFieldTypes
            """
                ...
            def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
            """
            Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
            """
            Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldNames(self) -> Union[Array[str]]:
            """
            Returns all data field names including those whose values are empty. Array is ordered by
            field ordinal.
            """
                ...
            def unsetFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
            field ordinal.
            """
                ...
            def missingFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
            field ordinal.
            """
                ...
            @overload
            def at(self, ordinal: int) -> Union[T]:
            """
            Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
            
            @param ordinal
                    Integer ordinal of the field in the parent type
            @return value of field at ordinal
            """
                ...
            @overload
            def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
            """
            Return value for the given serialized expression
            
            @param expr
                    Serialized expression to obtain the value in the given Obj
            @param failIfNotValid
                    If set, fails if not a valid expression
            @return value obtained as a result of expression evaluation
            """
                ...
            def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
            """
            Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
            `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
            that it also handles `null`. If path contains any collections then only first element will be traversed,
            unless the collection index is specified in the path.
            
            If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return the field or null
            """
                ...
            def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
            """
            Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
            traversals, unless the collection index is specified in the path.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return fields as a flat list
            
            @see #fieldValueAtPath
            """
                ...
            @overload
            def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            @overload
            def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply
            """
                ...
            def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
            """
            Perform an action for each {@link isFieldSet set} field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
            """
            Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
            on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply; stop if this `action` returns `false
            @return `true` if iteration was not aborted by lambda i.e. it saw all field values
            """
                ...
            @overload
            def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            @overload
            def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type while processing action returns
            `true`.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance; stops processing if return `false`
            @return `true` if iteration was not aborted by lambda i.e. it saw all refs
            """
                ...
            def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
            """
                ...
            def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
            processing action returns `true`.
            """
                ...
            @overload
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.ComputeSummary]:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the asynchronous `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that fields
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.ComputeSummary]:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            asynchronous `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Result of this function call is a copy of current instance with specified field value replaced based on result of
            the `mapper` invocation.
            @param field
                      field being mapped
            @param includeEmpty
                      if set, invokes mapper for fields with empty value
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param mapper
                      function to be executed for each pair of field type and Obj instance for producing new reference value
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` will be `null`.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
            result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
            """
            Evaluates given projection expression over this instance.
            """
                ...
            @overload
            def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
            """
            Evaluates given projection over this instance and returns results as json.
            """
                ...
            @overload
            def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
            """
            Evaluates given projection over this instance and returns results as instance of the new Obj.
            """
                ...
            @overload
            def validateObj(self) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Populates all missing default values and throws error if any constraint is violated.
            """
                ...
            @overload
            def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
            """
            Validate that the Obj fields are set according to all the required rules.
            """
                ...
            @overload
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      name of the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            @overload
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
            defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
            
            @param fields
                      map of field names/values
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @return new Obj
            """
                ...
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
            If you would like to #unsetField, you should call #withoutFieldAtPath instead.
            
            Immutable objects may return the same instance if the field being set does not actually represent a
            change to the existing object.
            
            @param path
                      path to set value at
            @param value
                      value to set
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @param doNotCreateIfMissing
                      true indicates that any empty reference along the path will not set the value
            @return new Obj
            """
                ...
            def withoutFieldAtPath(self, path: str) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj without the specified path field.
            
            Immutable objects may return the same instance if the field being removed does not actually represent a
            change to the existing object.
            
            @param path
                      path for field to remove
            @return new Obj
            
            @see #withFieldAtPath
            @see #withoutField
            """
                ...
            @overload
            def withoutField(self, field: str) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj, removing the field with the provided name.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            @overload
            def withoutField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj, removing the field with the provided field type.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            def withoutFields(self, fields: Array[str]) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> InvalidationQueue.Processor.ComputeSummary:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
            calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
            {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
            fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
            fields that have already been set.
            
            {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
            As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
            
            @param includeEmptyRefsWithDefaults
                      it `true` then missing / empty child references that have fields with defaults will also be instantiated
            @param defaultFields
                      If not empty, a list of default field paths to populate.  Any default fields not specified in the
                      array will be ignored.
            @return new Obj
            
            @see #defaultField
            @see FieldType#defaultValueConst
            @see FieldType#defaultValue
            """
                ...
            @overload
            def defaultField(self, field: str) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    name of the field to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def defaultField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    field type to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def unsetField(self, field: str) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    name of the field to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def unsetField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    field type to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def removeField(self, field: str) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    name of the field to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def removeField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    field type to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
            
            @param other
                      object
            @param fieldPathMergeSpec
                      mapping of fields of the object to the respective merge annotations
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence.
            
            @param other
                      object
            @param otherFieldsFilter
                      only fields of otherFieldsFilter type from other are merged into this obj.
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
            traverse child reference and collection fields.
            """
                ...
            def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
            """
            Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
            Fields that non null in only one of this and other will be in the resulting Obj without change.
            """
                ...
            def mergeJson(self, json: any) -> InvalidationQueue.Processor.ComputeSummary:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Merge the obj references within the current obj
            @param deep
                   If set, traverses the reference fields within the obj as well for a deep merge
            @param objKey
                   lambda specifying how to obtain the key for the Obj while determining which Objs to merge
            @param filter
                   Field paths that need to be filtered from this merge
            @return Obj with child references merged
            """
                ...
            def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[InvalidationQueue.Processor.ComputeSummary]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.Processor.ComputeSummary]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.Processor.ComputeSummary]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[InvalidationQueue.Processor.ComputeSummary]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.Processor.ComputeSummary]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.Processor.ComputeSummary]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.Processor.ComputeSummary]]:
            """
            Create a map with the given key type and elements of this type.
            """
                ...
            @classmethod
            def myReferenceType(cls) -> ReferenceType:
                ...
            @classmethod
            def myMapTypeOf(cls, keyType: ValueType) -> MapType:
                ...
            @classmethod
            def myMapType(cls) -> MapType:
                ...
            @classmethod
            def myArrayType(cls) -> ArrayType:
                ...
            @classmethod
            def mySetType(cls) -> SetType:
                ...
            @classmethod
            def myStreamType(cls) -> StreamType:
                ...
            def toBuilder(self) -> ObjBuilder[InvalidationQueue.Processor.ComputeSummary]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[InvalidationQueue.Processor.ComputeSummary]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Construct an instance of this type from provided fields
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see withDefaults
            """
                ...
            @classmethod
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Construct an instance of this type from provided instance of a subtype or a "duck type".
            """
                ...
            def remakeAs(self, type: Type) -> O:
            """
            Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
            converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
            could be costly if types have different value types for same fields.
            
            @param type
                    Type of new obj to return
            @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                    converted and copied to it
            """
                ...
            @classmethod
            def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
            """
            Optional override that will be called every time instance of this type is created.
            
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            def afterMake(self) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
            every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
            Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
            
            @see ValueType#defaultEmptyValue
            """
                ...
            def toData(self) -> Union[Data]:
            """
            Represent the current obj instance as {@link Data}
            """
                ...
            @classmethod
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.Processor.ComputeSummary]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            @overload
            def setField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
            The value must be of the correct type if doNotConvert flag is true.
            
            @param name
                      of the field
            @param value
                      of the field
            @param doNotConvert
                      if true, attempt to convert the value to match the field's type
            @return this Obj
            """
                ...
            @overload
            def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary:
            """
            Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
            The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      the field
            @param value
                      of the field
            @param doNotConvert
                      if true, attempt to convert the value to match the field's type
            @return this Obj
            """
                ...
            def onChange(self, changed: Array[str]) -> None:
            """
            Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
            field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
            properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
            collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
            key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
            collection field. This has the same appearance as if the collection field were assigned from a previously
            unassigned value.
            
            Example:
            ```type
            type A mixes MutableObj {
              onChange: ~
              b: [string]
              c: map<string, int>
              d: D
            }
            type D mixes MutableObj {
              onChange: ~
              e: string
            }
            ```
            ```js
            var a = A.make({b: ['hello', 'goodbye'], d: {}});
            a.b[1] = 'World'; // 1
            a.c['hello'] = 'world'; // 2
            a.d.e = 'hello' // 3
            a.b.pop(); // 4
            ```
            `A.onChange` should be called four times:
              1. when the field `b` changed - the FieldPath will be "b[1]".
              2. when the field `c` changed - the FieldPath will be "c.hello".
              3. when `d` changed - the FieldPath will be "d.e".
              4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
            
            `D.onChange` should be called once - the FieldPath will be `e`.
            
            Note that if multiple elements of a child collection are changed, you will get multiple field paths.
            
            @param changed paths to fields that changed
            
            @see #onEdit
            """
                ...
            def onEdit(self, edits: Obj) -> None:
            """
            Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
            contains more information about the values which changed, including their prior values. This allows a full
            difference to be calculated if desired. Note that maintaining this state is much more costly than simple
            notification via #onChange and should only be used if truly required.
            
            @param edits a list of what changed and the prior values
            
            @see #onChange
            """
                ...
            def withoutChangeEvent(self, action: Callable[[Union[Mutable]]]) -> None:
            """
            Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
            
            @param action the lambda to invoke that makes changes without notification
            """
                ...
            def addCompute(self, queue: Type, numEntries: int, timeMillis: int) -> None:
            """
            Adds the info for one compute action
            
            @param queue
                   queue type the compute action was for
            @param numEntries
                   number of entries the compute action was for
            @param timeMillis
                   time the action took
            """
                ...
            def logSummary(self) -> None:
            """
            Logs the recent queue activity and clears the state
            """
                ...
            
            class Queue(Mutable):
                """
                A single queue's compute summary
                
                @remarks this represents a made instance of InvalidationQueue.Processor.ComputeSummary.Queue
                """
                
                numEntries: Optional[int]=None
                """
                Number of entries processed
                """

                timeMillis: Optional[int]=None
                """
                Processing time for the queue
                """
                def __init__(self, numEntries: Optional[int]=None, timeMillis: Optional[int]=None) -> None: ...

                @overload
                @classmethod
                def make(cls) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Construct an instance with initial state.
                """
                    ...
                @overload
                @classmethod
                def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Construct instance of this type from provided field values and options
                """
                    ...
                @overload
                @classmethod
                def make(cls, withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
                @param withDefaults
                           If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                           populated
                
                @see withDefaults
                """
                    ...
                @overload
                @classmethod
                def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Construct an instance from provided fields
                @param fields
                           Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                           field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                           to Panda.make()
                @param withDefaults
                           If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                           -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                           the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
                
                
                @see fromFields
                @see beforeMake
                @see afterMake
                @see withDefaults
                """
                    ...
                @overload
                @classmethod
                def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
                
                ```js
                User.make({
                  email: 'joe@smith.com',
                  realName: 'Joe Smith'
                })
                
                Obj.make({
                  type: 'User',
                  email: 'joe@smith.com',
                  realName: 'Joe Smith'
                })
                ```
                
                ```py
                c3.User.make({
                  "email": 'joe@smith.com',
                  "realName": 'Joe Smith'
                })
                
                c3.Obj.make({
                  "type": 'User',
                  "email": 'joe@smith.com',
                  "realName": 'Joe Smith'
                })
                
                c3.User(email='joe@smith.com', realName='Joe Smith')
                
                c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
                ```
                
                Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
                specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
                such as {@link Ann.Ser} do not apply.
                @param fields
                           Fields to construct the instance of the obj with
                @param withDefaults
                           If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
                
                @see fromFields
                @see beforeMake
                @see afterMake
                @see withDefaults
                """
                    ...
                @overload
                def toJson(self) -> any:
                """
                Convert the internal object representation to a JSON object.
                
                @return JSON object representation
                
                @see #fromJson
                """
                    ...
                @overload
                def toJson(self, include: str=None, exclude: str=None) -> any:
                    ...
                @overload
                def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
                    ...
                @overload
                def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
                """
                Convert the internal object representation to a _typed_ JSON object.
                @param omitTopLevelType
                       Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
                       the outer level of the produced json.
                @param runtime
                       If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
                       performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
                
                
                @return JSON object representation
                
                @see #fromJson
                @see #toJson
                @see serdeser.c3doc
                @see JsonType
                """
                    ...
                @overload
                def toTypedJson(self, include: str=None, exclude: str=None) -> any:
                    ...
                @overload
                def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
                    ...
                @overload
                def toJsonString(self) -> str:
                    ...
                @overload
                def toJsonString(self, pretty: bool) -> str:
                """
                Convert the internal object representation to a serialized JSON string.
                
                @return JSON object as string
                """
                    ...
                @overload
                def toTypedJsonString(self) -> str:
                    ...
                @overload
                def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
                    ...
                @overload
                def toJsString(self) -> str:
                    ...
                @overload
                def toJsString(self, withType: bool) -> str:
                """
                Convert the internal object representation to a serialized JavaScript object literal.
                
                @return JavaScript object literal string
                """
                    ...
                @overload
                def toXmlString(self) -> str:
                    ...
                @overload
                def toXmlString(self, withType: bool) -> str:
                """
                Convert the internal object representation to a serialized XML string.
                
                @return XML element as string
                
                @see #fromXmlString
                """
                    ...
                def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
                """
                Convert the internal object representation to a string serialized representation of the object.
                
                @return string serialized object representation
                """
                    ...
                @classmethod
                def fromJson(cls, json: any) -> Union[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                Load the JSON-based representation and reconstruct the corresponding object.
                
                fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
                a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
                called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
                an instance of the correct type.
                
                @see #toJson
                """
                    ...
                @classmethod
                def fromJsonString(cls, json: str) -> Union[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                Load the JSON-based representation and reconstruct the corresponding object.
                
                fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
                a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
                called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
                an instance of the correct type.
                
                @see #toJsonString
                """
                    ...
                @classmethod
                def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                Load the XML-based representation and reconstruct the corresponding object.
                
                fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
                may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
                isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
                will return an instance of the correct type.
                
                @see #toXmlString
                """
                    ...
                @classmethod
                def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                Load from contentType representation and reconstruct the corresponding object.
                
                fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
                (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
                will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
                type and will return an instance of the correct type.
                """
                    ...
                def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
                """
                Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
                there is a slight possibility that two objects with the same fingerprint will actually differ.
                
                The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
                {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
                unless the allIdentifiedRefFields option is specified.
                
                If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
                However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
                
                @param allIdentifiedRefFields
                          if `true`, fingerprint individual fields of persistable references, not just the `id`
                @param trackRecursiveRefs
                          if `true`, a set of referenced objects is maintained to avoid infinite recursion
                @param traversedRefs
                          only considered together with trackRecursiveRefs and if provided then all traversed references are
                          checked against and added to it
                @return integer fingerprint
                
                @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
                """
                    ...
                def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
                """
                Measures retained memory by this instance.
                
                @param deep
                       if true and this instance contains references to other objects also measures memory retained by those
                @param allMeasured
                       if set then will skip instances that are in the set and will add instances that where measured by this call
                @return retained memory in bytes for this instances
                """
                    ...
                def type(self) -> Type:
                """
                C3 Type of this instance.
                """
                    ...
                def replaceType(self, old: Type, new: Type) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Returns new instance with all references to old type, including result of #type, replaced with new type. If new
                type does not contain fields from old or field value types are not convertable then drops the field.
                
                This method is used during live metadata update
                """
                    ...
                def super(self, mixin: Type=None) -> Any:
                """
                 Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
                 useful for redispatching **member** methods reimplemented on this type to a parent implementation:
                 ```js
                 function toString() {
                   return this.super().toString() + ', x=' + this.x;
                 }
                 ```
                
                 ```py
                 def toString(this):
                    return this.super().toString() + ', x=' + this.x
                ```
                
                 To redispatch **static** methods, see {@link Type#super}.
                
                 Note that this not the same as the language-specific `super` keyword because it works through the type system and
                 supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
                 globally.
                
                 If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
                 This can be used to create a local implementation "around" the server implementation for additional caching or
                 other local state management.
                
                 @param mixin if specified, this mixin is used instead or an error is thrown
                 @return "super" calling proxy for this object
                
                 @see Type.super
                """
                    ...
                @overload
                def instanceOf(self, typeName: str) -> bool:
                """
                Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
                This is the most convenient way to ask "is this type usable in a context requiring the other type?"
                
                @return true if this instance is of this type or any of its mixins
                """
                    ...
                @overload
                def instanceOf(self, type: Type) -> bool:
                """
                Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
                This is the most convenient way to ask "is this type usable in a context requiring the other type?"
                
                @return true if this instance is of this type or any of its mixins
                
                @see ValueType#isA
                """
                    ...
                def isEmptyObj(self) -> bool:
                """
                Whether all the fields of this instance are empty.
                """
                    ...
                def isSame(self, other: Obj) -> bool:
                """
                Whether the specified instance represents exactly the same object as this instance.
                """
                    ...
                @overload
                def isFieldSet(self, field: str) -> bool:
                """
                 Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
                 if the field value set the its default value by the constructor. A set field is never missing.
                
                @param field the field to check
                
                @return whether the specified field is set
                """
                    ...
                @overload
                def isFieldSet(self, field: FieldType) -> bool:
                """
                 Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
                 if the field value set the its default value by the constructor. A set field is never missing.
                
                @param field the field to check
                
                @return whether the specified field is set
                """
                    ...
                @overload
                def isFieldMissing(self, field: str) -> bool:
                """
                 Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
                 should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
                {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
                A missing field is never set.
                
                @param field the field to check
                
                @return whether the specified field is missing
                """
                    ...
                @overload
                def isFieldMissing(self, field: FieldType) -> bool:
                """
                 Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
                 should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
                {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
                A missing field is never set.
                
                @param field the field to check
                
                @return whether the specified field is missing
                """
                    ...
                @overload
                def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
                """
                Returns value of the given field.
                
                @param field
                          Field to return the value for
                       defaultToEmpty
                          will return default empty value if field is missing
                """
                    ...
                @overload
                def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
                """
                Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
                the obj.
                
                @param field
                          Field to return the value for
                       defaultToEmpty
                          will return default empty value if field is missing
                @return value for the given field
                """
                    ...
                def fieldValues(self) -> Union[Array[FieldValue]]:
                """
                Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
                """
                    ...
                def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
                """
                Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
                Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
                #dataFieldTypes
                """
                    ...
                def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
                """
                Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
                """
                    ...
                def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
                """
                Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
                """
                    ...
                def fieldNames(self) -> Union[Array[str]]:
                """
                Returns all data field names including those whose values are empty. Array is ordered by
                field ordinal.
                """
                    ...
                def unsetFieldNames(self) -> Union[Array[str]]:
                """
                @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
                field ordinal.
                """
                    ...
                def missingFieldNames(self) -> Union[Array[str]]:
                """
                @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
                field ordinal.
                """
                    ...
                @overload
                def at(self, ordinal: int) -> Union[T]:
                """
                Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
                
                @param ordinal
                        Integer ordinal of the field in the parent type
                @return value of field at ordinal
                """
                    ...
                @overload
                def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
                """
                Return value for the given serialized expression
                
                @param expr
                        Serialized expression to obtain the value in the given Obj
                @param failIfNotValid
                        If set, fails if not a valid expression
                @return value obtained as a result of expression evaluation
                """
                    ...
                def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
                """
                Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
                `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
                that it also handles `null`. If path contains any collections then only first element will be traversed,
                unless the collection index is specified in the path.
                
                If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
                
                @param fieldPath
                          field names separated by dots
                @param failIfNotFound
                          if true, an error will be thrown if the any of the field types aren't defined
                @param context
                          if an error is thrown, the context returned by calling the lambda will be incorporated
                @return the field or null
                """
                    ...
                def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
                """
                Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
                traversals, unless the collection index is specified in the path.
                
                @param fieldPath
                          field names separated by dots
                @param failIfNotFound
                          if true, an error will be thrown if the any of the field types aren't defined
                @param context
                          if an error is thrown, the context returned by calling the lambda will be incorporated
                @return fields as a flat list
                
                @see #fieldValueAtPath
                """
                    ...
                @overload
                def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
                """
                Perform an action for each non-empty field of this object.
                
                @param action
                          lambda to apply
                """
                    ...
                @overload
                def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
                """
                Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
                
                @param spec
                          which fields to include
                @param action
                          lambda to apply
                """
                    ...
                def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
                """
                Perform an action for each {@link isFieldSet set} field of this object.
                
                @param action
                          lambda to apply
                """
                    ...
                def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
                """
                Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
                on provided `spec`.
                
                @param spec
                          which fields to include
                @param action
                          lambda to apply; stop if this `action` returns `false
                @return `true` if iteration was not aborted by lambda i.e. it saw all field values
                """
                    ...
                @overload
                def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
                """
                Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
                the field value if non-null and for collections of Obj, this means each element in the collection.
                
                @param action
                          function to be executed for each pair of field type and Obj instance
                """
                    ...
                @overload
                def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
                """
                Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
                the field value if non-null and for collections of Obj, this means each element in the collection.
                
                @param includeEmpty
                          if `true` will also process references with `null` / "Empty" references
                @param action
                          function to be executed for each pair of field type and Obj instance
                """
                    ...
                def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
                """
                Execute the specified lambda against each referenced Obj instance in this type while processing action returns
                `true`.
                
                @param includeEmpty
                          if `true` will also process references with `null` / "Empty" references
                @param action
                          function to be executed for each pair of field type and Obj instance; stops processing if return `false`
                @return `true` if iteration was not aborted by lambda i.e. it saw all refs
                """
                    ...
                def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
                """
                Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
                """
                    ...
                def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
                """
                Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
                processing action returns `true`.
                """
                    ...
                @overload
                def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Result of this function call is a copy of current instance with all non empty fields replaced based on results of
                the `mapper` invocation.
                
                @param action
                          lambda to apply for every field value to produce a new value for that field
                @param convertValue
                          if true, attempt to convert the value to match the field's type
                """
                    ...
                @overload
                def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Result of this function call is a copy of current instance with all fields replaced based on results of the
                `mapper` invocation.
                
                @param spec
                          which fields to include
                @param mapper
                          lambda to apply for every field value to produce a new value for that field
                @param convertValue
                          if true, attempt to convert the value to match the field's type
                """
                    ...
                @overload
                def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                Result of this function call is a copy of current instance with all non empty fields replaced based on results of
                the asynchronous `mapper` invocation.
                
                @param action
                          lambda to apply for every field value to produce a new value for that fields
                @param convertValue
                          if true, attempt to convert the value to match the field's type
                """
                    ...
                @overload
                def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                Result of this function call is a copy of current instance with all fields replaced based on results of the
                asynchronous `mapper` invocation.
                
                @param spec
                          which fields to include
                @param mapper
                          lambda to apply for every field value to produce a new value for that field
                @param convertValue
                          if true, attempt to convert the value to match the field's type
                """
                    ...
                def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Result of this function call is a copy of current instance with specified field value replaced based on result of
                the `mapper` invocation.
                @param field
                          field being mapped
                @param includeEmpty
                          if set, invokes mapper for fields with empty value
                @param mapper
                          lambda to apply for every field value to produce a new value for that field
                @param convertValue
                          if true, attempt to convert the value to match the field's type
                """
                    ...
                @overload
                def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
                lambda application.
                
                Result of this function call is a copy of current instance with all references replaced based on results of the
                `mapper` invocation.
                
                @param action
                          function to be executed for each pair of field type and Obj instance
                @param convertValue
                          if true, attempt to convert the value to match the field's type
                """
                    ...
                @overload
                def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
                lambda application.
                
                Result of this function call is a copy of current instance with all references replaced based on results of the
                `mapper` invocation.
                
                @param includeEmpty
                          if `true` will also process references with `null` / "Empty" references
                @param mapper
                          function to be executed for each pair of field type and Obj instance for producing new reference value
                @param convertValue
                          if true, attempt to convert the value to match the field's type
                """
                    ...
                @overload
                def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
                """
                Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
                argument is a result of previous application. Initial value of `accumulator` will be `null`.
                
                This function is useful for calculating aggregate values based on all current non empty field values.
                Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
                e.g
                ```
                o = {a:1, b:2, c:0}
                o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
                
                o = {a: {x:1, y:2}, b: {x:10, z:2}}
                o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
                ```
                """
                    ...
                @overload
                def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
                """
                Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
                argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
                
                This function is useful for calculating aggregate values based on all current non empty field values.
                Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
                e.g
                ```
                o = {a:1, b:2, c:0}
                o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
                
                o = {a: {x:1, y:2}, b: {x:10, z:2}}
                o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
                ```
                """
                    ...
                @overload
                def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
                """
                Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
                result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
                
                This function is useful for calculating aggregate values based on all field values.
                Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
                e.g
                ```
                o = {a:1, b:2, c:0}
                o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
                
                o = {a: {x:1, y:2}, b: {x:10, z:2}}
                o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
                ```
                """
                    ...
                @overload
                def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
                """
                Evaluates given projection expression over this instance.
                """
                    ...
                @overload
                def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
                """
                Evaluates given projection over this instance and returns results as json.
                """
                    ...
                @overload
                def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
                """
                Evaluates given projection over this instance and returns results as instance of the new Obj.
                """
                    ...
                @overload
                def validateObj(self) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Populates all missing default values and throws error if any constraint is violated.
                """
                    ...
                @overload
                def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
                """
                Validate that the Obj fields are set according to all the required rules.
                """
                    ...
                @overload
                def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
                defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
                
                @param field
                          name of the field
                @param value
                          of the field
                @param doNotConvert
                          if true, do not attempt to convert the value to match the field's type
                @return new Obj
                
                @see #withoutField
                @see #defaultField
                """
                    ...
                @overload
                def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
                defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
                
                @param field
                          the field
                @param value
                          of the field
                @param doNotConvert
                          if true, do not attempt to convert the value to match the field's type
                @return new Obj
                
                @see #withoutField
                @see #defaultField
                """
                    ...
                def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
                defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
                
                @param fields
                          map of field names/values
                @param doNotConvert
                          if true, attempt to convert the values to match the fields' type
                @return new Obj
                """
                    ...
                def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
                If you would like to #unsetField, you should call #withoutFieldAtPath instead.
                
                Immutable objects may return the same instance if the field being set does not actually represent a
                change to the existing object.
                
                @param path
                          path to set value at
                @param value
                          value to set
                @param doNotConvert
                          if true, attempt to convert the values to match the fields' type
                @param doNotCreateIfMissing
                          true indicates that any empty reference along the path will not set the value
                @return new Obj
                """
                    ...
                def withoutFieldAtPath(self, path: str) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj without the specified path field.
                
                Immutable objects may return the same instance if the field being removed does not actually represent a
                change to the existing object.
                
                @param path
                          path for field to remove
                @return new Obj
                
                @see #withFieldAtPath
                @see #withoutField
                """
                    ...
                @overload
                def withoutField(self, field: str) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj, removing the field with the provided name.
                
                Immutable objects may return the same instance if the field being removed is not present in the existing object.
                
                @param field
                          name of the field to remove
                @return new Obj with removed field
                
                @see #unsetField
                @see #removeField
                """
                    ...
                @overload
                def withoutField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj, removing the field with the provided field type.
                
                Immutable objects may return the same instance if the field being removed is not present in the existing object.
                
                @param field
                          name of the field to remove
                @return new Obj with removed field
                
                @see #unsetField
                @see #removeField
                """
                    ...
                def withoutFields(self, fields: Array[str]) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj, removing the fields with the provided names.
                
                Immutable objects may return the same instance if the fields being removed are not present in the existing object.
                
                @param fields
                          names of the fields to remove
                @return new Obj with removed fields
                """
                    ...
                def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
                exact same type as the type of the obj to respect the "ordinal" of the field type
                
                Immutable objects may return the same instance if the fields being removed are not present in the existing object.
                
                @param fields
                          field types to remove
                @return new Obj with removed fields
                """
                    ...
                def withoutSecretFields(self) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
                """
                    ...
                def secretFieldsSet(self) -> Array[str]:
                """
                @return a list of the secret field paths that were found to be set on this Obj.
                """
                    ...
                def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
                calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
                {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
                fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
                fields that have already been set.
                
                {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
                As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
                
                @param includeEmptyRefsWithDefaults
                          it `true` then missing / empty child references that have fields with defaults will also be instantiated
                @param defaultFields
                          If not empty, a list of default field paths to populate.  Any default fields not specified in the
                          array will be ignored.
                @return new Obj
                
                @see #defaultField
                @see FieldType#defaultValueConst
                @see FieldType#defaultValue
                """
                    ...
                @overload
                def defaultField(self, field: str) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
                method will behave the same as {@link #unsetField}.
                
                @param field
                        name of the field to default
                @return new `Obj` with the specified field set to its default value
                
                @see #withField
                @see #unsetField
                """
                    ...
                @overload
                def defaultField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
                method will behave the same as {@link #unsetField}.
                
                @param field
                        field type to default
                @return new `Obj` with the specified field set to its default value
                
                @see #withField
                @see #unsetField
                """
                    ...
                @overload
                def unsetField(self, field: str) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
                is different from {@link removeField}
                
                @param field
                        name of the field to unset
                @return new `Obj` with the specified field unset
                
                @see #withoutField
                @see #removeField
                """
                    ...
                @overload
                def unsetField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
                is different from {@link removeField}
                
                @param field
                        field type to unset
                @return new `Obj` with the specified field unset
                
                @see #withoutField
                @see #removeField
                """
                    ...
                @overload
                def removeField(self, field: str) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
                is different from {@link #unsetField}
                
                @param field
                        name of the field to remove
                @return new `Obj` with the specified field removed
                
                @see #withoutField
                @see #unsetField
                """
                    ...
                @overload
                def removeField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
                is different from {@link #unsetField}
                
                @param field
                        field type to remove
                @return new `Obj` with the specified field removed
                
                @see #withoutField
                @see #unsetField
                """
                    ...
                @overload
                def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
                In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
                
                @param other
                          object
                @param fieldPathMergeSpec
                          mapping of fields of the object to the respective merge annotations
                @return the new merged Obj
                """
                    ...
                @overload
                def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
                In case of conflicts, fields of other instance take precedence.
                
                @param other
                          object
                @param otherFieldsFilter
                          only fields of otherFieldsFilter type from other are merged into this obj.
                @return the new merged Obj
                """
                    ...
                @overload
                def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
                fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
                @param deep
                       if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                       the same key or index.
                """
                    ...
                @overload
                def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
                fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
                traverse child reference and collection fields.
                """
                    ...
                def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
                """
                Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
                Fields that non null in only one of this and other will be in the resulting Obj without change.
                """
                    ...
                def mergeJson(self, json: any) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                    ...
                def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Merge the obj references within the current obj
                @param deep
                       If set, traverses the reference fields within the obj as well for a deep merge
                @param objKey
                       lambda specifying how to obtain the key for the Obj while determining which Objs to merge
                @param filter
                       Field paths that need to be filtered from this merge
                @return Obj with child references merged
                """
                    ...
                def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Adds the numeric Obj fields with the other Objs respective fields.
                If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
                references with same name and collection elements at same index or key.
                """
                    ...
                def singletonArray(self) -> Array[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                Build an array of the correct type with a single element which is this instance.
                
                @return new array instance with this as only element.
                """
                    ...
                @classmethod
                def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.Processor.ComputeSummary.Queue]]:
                """
                Creates an array of instances of this type.
                """
                    ...
                @classmethod
                def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.Processor.ComputeSummary.Queue]]:
                """
                Creates an array of instances of this type.
                """
                    ...
                def singletonSet(self) -> Set[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                Build an set of the correct type with a single element which is this instance.
                
                @return new array instance with this as only element.
                """
                    ...
                @classmethod
                def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.Processor.ComputeSummary.Queue]]:
                """
                Creates a set of instances of this type.
                """
                    ...
                @classmethod
                def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.Processor.ComputeSummary.Queue]]:
                """
                Create a map of string to elements of this type.
                """
                    ...
                @classmethod
                def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.Processor.ComputeSummary.Queue]]:
                """
                Create a map with the given key type and elements of this type.
                """
                    ...
                @classmethod
                def myReferenceType(cls) -> ReferenceType:
                    ...
                @classmethod
                def myMapTypeOf(cls, keyType: ValueType) -> MapType:
                    ...
                @classmethod
                def myMapType(cls) -> MapType:
                    ...
                @classmethod
                def myArrayType(cls) -> ArrayType:
                    ...
                @classmethod
                def mySetType(cls) -> SetType:
                    ...
                @classmethod
                def myStreamType(cls) -> StreamType:
                    ...
                def toBuilder(self) -> ObjBuilder[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                @return new ObjBuilder with initial state set to fields of this instance.
                """
                    ...
                @classmethod
                def builder(cls) -> ObjBuilder[InvalidationQueue.Processor.ComputeSummary.Queue]:
                """
                @return new ObjBuilder of this instance.
                """
                    ...
                @overload
                @classmethod
                def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Construct instance of this type from provided field values and options
                """
                    ...
                @overload
                @classmethod
                def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Construct an instance of this type from provided fields
                @param fields
                           Fields to construct the instance of the obj with
                @param withDefaults
                           If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
                
                @see withDefaults
                """
                    ...
                @classmethod
                def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Construct an instance of this type from provided instance of a subtype or a "duck type".
                """
                    ...
                def remakeAs(self, type: Type) -> O:
                """
                Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
                converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
                could be costly if types have different value types for same fields.
                
                @param type
                        Type of new obj to return
                @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                        converted and copied to it
                """
                    ...
                @classmethod
                def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
                """
                Optional override that will be called every time instance of this type is created.
                
                
                Note that it introduces additional overhead so should only be implemented for low volume data.
                """
                    ...
                def afterMake(self) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Optional override that will be called after every instance creation.
                
                Note that it introduces additional overhead so should only be implemented for low volume data.
                """
                    ...
                @classmethod
                def cachedEmptyInst(cls) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
                every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
                Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
                
                @see ValueType#defaultEmptyValue
                """
                    ...
                def toData(self) -> Union[Data]:
                """
                Represent the current obj instance as {@link Data}
                """
                    ...
                @classmethod
                def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.Processor.ComputeSummary.Queue]]:
                """
                Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
                value is read.
                """
                    ...
                @classmethod
                def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
                random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
                populates fields in a more realistic way.
                """
                    ...
                @overload
                def setField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
                The value must be of the correct type if doNotConvert flag is true.
                
                @param name
                          of the field
                @param value
                          of the field
                @param doNotConvert
                          if true, attempt to convert the value to match the field's type
                @return this Obj
                """
                    ...
                @overload
                def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeSummary.Queue:
                """
                Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
                The value must be of the correct type if doNotConvert flag is true.
                
                @param field
                          the field
                @param value
                          of the field
                @param doNotConvert
                          if true, attempt to convert the value to match the field's type
                @return this Obj
                """
                    ...
                def onChange(self, changed: Array[str]) -> None:
                """
                Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
                field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
                properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
                collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
                key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
                collection field. This has the same appearance as if the collection field were assigned from a previously
                unassigned value.
                
                Example:
                ```type
                type A mixes MutableObj {
                  onChange: ~
                  b: [string]
                  c: map<string, int>
                  d: D
                }
                type D mixes MutableObj {
                  onChange: ~
                  e: string
                }
                ```
                ```js
                var a = A.make({b: ['hello', 'goodbye'], d: {}});
                a.b[1] = 'World'; // 1
                a.c['hello'] = 'world'; // 2
                a.d.e = 'hello' // 3
                a.b.pop(); // 4
                ```
                `A.onChange` should be called four times:
                  1. when the field `b` changed - the FieldPath will be "b[1]".
                  2. when the field `c` changed - the FieldPath will be "c.hello".
                  3. when `d` changed - the FieldPath will be "d.e".
                  4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
                
                `D.onChange` should be called once - the FieldPath will be `e`.
                
                Note that if multiple elements of a child collection are changed, you will get multiple field paths.
                
                @param changed paths to fields that changed
                
                @see #onEdit
                """
                    ...
                def onEdit(self, edits: Obj) -> None:
                """
                Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
                contains more information about the values which changed, including their prior values. This allows a full
                difference to be calculated if desired. Note that maintaining this state is much more costly than simple
                notification via #onChange and should only be used if truly required.
                
                @param edits a list of what changed and the prior values
                
                @see #onChange
                """
                    ...
                def withoutChangeEvent(self, action: Callable[[Union[Mutable]]]) -> None:
                """
                Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
                
                @param action the lambda to invoke that makes changes without notification
                """
                    ...
        
        class Scheduler(Mutable):
            """
            Used to implement weighted priority scheduling for invalidation queues
            
            @remarks this represents a made instance of InvalidationQueue.Processor.Scheduler
            """
            
            iqp: Optional[InvalidationQueue.Processor]=None

            queueTimes: Optional[InvalidationQueue.Processor.QueueTimes]=None
            """
            Accumulated time usage for each queue
            """

            lastReset: Optional[datetime]=None
            """
            Last time the accumulated usage was reset
            """

            lastErrorThrown: Optional[datetime]=None
            """
            Last time an error was thrown while calling {@link checkRefresh}.  We only throw an error every 30 minutes.
            """

            priorityFactors: Optional[MapBuilder[Type, int]]=None
            """
            Factor to be applied to each queue's accumulated time based on the configured priority for the queue
            """

            _queues: Optional[Map[Type, int]]=None

            _lastRefresh: Optional[Any]=None

            _batchJobs: Optional[Array[InvalidationQueueRunningJobInfo]]=None

            _lastBatchJobsRefresh: Optional[Any]=None

            _mapReduceJobs: Optional[Array[InvalidationQueueRunningJobInfo]]=None

            _lastMapReduceJobsRefresh: Optional[Any]=None
            def __init__(self, iqp: Optional[InvalidationQueue.Processor]=None, queueTimes: Optional[InvalidationQueue.Processor.QueueTimes]=None, lastReset: Optional[datetime]=None, lastErrorThrown: Optional[datetime]=None, priorityFactors: Optional[MapBuilder[Type, int]]=None, _queues: Optional[Map[Type, int]]=None, _lastRefresh: Optional[Any]=None, _batchJobs: Optional[Array[InvalidationQueueRunningJobInfo]]=None, _lastBatchJobsRefresh: Optional[Any]=None, _mapReduceJobs: Optional[Array[InvalidationQueueRunningJobInfo]]=None, _lastMapReduceJobsRefresh: Optional[Any]=None) -> None: ...

            @overload
            @classmethod
            def make(cls) -> InvalidationQueue.Processor.Scheduler:
            """
            Construct an instance with initial state.
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.Scheduler:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                       populated
            
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Construct an instance from provided fields
            @param fields
                       Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                       field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                       to Panda.make()
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                       -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                       the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
            
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
            
            ```js
            User.make({
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            
            Obj.make({
              type: 'User',
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            ```
            
            ```py
            c3.User.make({
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.Obj.make({
              "type": 'User',
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.User(email='joe@smith.com', realName='Joe Smith')
            
            c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
            ```
            
            Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
            specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
            such as {@link Ann.Ser} do not apply.
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @overload
            def toJson(self) -> any:
            """
            Convert the internal object representation to a JSON object.
            
            @return JSON object representation
            
            @see #fromJson
            """
                ...
            @overload
            def toJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
            """
            Convert the internal object representation to a _typed_ JSON object.
            @param omitTopLevelType
                   Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
                   the outer level of the produced json.
            @param runtime
                   If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
                   performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
            
            
            @return JSON object representation
            
            @see #fromJson
            @see #toJson
            @see serdeser.c3doc
            @see JsonType
            """
                ...
            @overload
            def toTypedJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toJsonString(self) -> str:
                ...
            @overload
            def toJsonString(self, pretty: bool) -> str:
            """
            Convert the internal object representation to a serialized JSON string.
            
            @return JSON object as string
            """
                ...
            @overload
            def toTypedJsonString(self) -> str:
                ...
            @overload
            def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
                ...
            @overload
            def toJsString(self) -> str:
                ...
            @overload
            def toJsString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized JavaScript object literal.
            
            @return JavaScript object literal string
            """
                ...
            @overload
            def toXmlString(self) -> str:
                ...
            @overload
            def toXmlString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized XML string.
            
            @return XML element as string
            
            @see #fromXmlString
            """
                ...
            def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
            """
            Convert the internal object representation to a string serialized representation of the object.
            
            @return string serialized object representation
            """
                ...
            @classmethod
            def fromJson(cls, json: any) -> Union[InvalidationQueue.Processor.Scheduler]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJson
            """
                ...
            @classmethod
            def fromJsonString(cls, json: str) -> Union[InvalidationQueue.Processor.Scheduler]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJsonString
            """
                ...
            @classmethod
            def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.Processor.Scheduler]:
            """
            Load the XML-based representation and reconstruct the corresponding object.
            
            fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
            may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
            isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
            will return an instance of the correct type.
            
            @see #toXmlString
            """
                ...
            @classmethod
            def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.Processor.Scheduler]:
            """
            Load from contentType representation and reconstruct the corresponding object.
            
            fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
            (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
            will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
            type and will return an instance of the correct type.
            """
                ...
            def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
            """
            Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
            there is a slight possibility that two objects with the same fingerprint will actually differ.
            
            The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
            {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
            unless the allIdentifiedRefFields option is specified.
            
            If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
            However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
            
            @param allIdentifiedRefFields
                      if `true`, fingerprint individual fields of persistable references, not just the `id`
            @param trackRecursiveRefs
                      if `true`, a set of referenced objects is maintained to avoid infinite recursion
            @param traversedRefs
                      only considered together with trackRecursiveRefs and if provided then all traversed references are
                      checked against and added to it
            @return integer fingerprint
            
            @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
            """
                ...
            def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
            """
            Measures retained memory by this instance.
            
            @param deep
                   if true and this instance contains references to other objects also measures memory retained by those
            @param allMeasured
                   if set then will skip instances that are in the set and will add instances that where measured by this call
            @return retained memory in bytes for this instances
            """
                ...
            def type(self) -> Type:
            """
            C3 Type of this instance.
            """
                ...
            def replaceType(self, old: Type, new: Type) -> InvalidationQueue.Processor.Scheduler:
            """
            Returns new instance with all references to old type, including result of #type, replaced with new type. If new
            type does not contain fields from old or field value types are not convertable then drops the field.
            
            This method is used during live metadata update
            """
                ...
            def super(self, mixin: Type=None) -> Any:
            """
             Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
             useful for redispatching **member** methods reimplemented on this type to a parent implementation:
             ```js
             function toString() {
               return this.super().toString() + ', x=' + this.x;
             }
             ```
            
             ```py
             def toString(this):
                return this.super().toString() + ', x=' + this.x
            ```
            
             To redispatch **static** methods, see {@link Type#super}.
            
             Note that this not the same as the language-specific `super` keyword because it works through the type system and
             supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
             globally.
            
             If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
             This can be used to create a local implementation "around" the server implementation for additional caching or
             other local state management.
            
             @param mixin if specified, this mixin is used instead or an error is thrown
             @return "super" calling proxy for this object
            
             @see Type.super
            """
                ...
            @overload
            def instanceOf(self, typeName: str) -> bool:
            """
            Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            """
                ...
            @overload
            def instanceOf(self, type: Type) -> bool:
            """
            Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            
            @see ValueType#isA
            """
                ...
            def isEmptyObj(self) -> bool:
            """
            Whether all the fields of this instance are empty.
            """
                ...
            def isSame(self, other: Obj) -> bool:
            """
            Whether the specified instance represents exactly the same object as this instance.
            """
                ...
            @overload
            def isFieldSet(self, field: str) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldSet(self, field: FieldType) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldMissing(self, field: str) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def isFieldMissing(self, field: FieldType) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            """
                ...
            @overload
            def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
            the obj.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            @return value for the given field
            """
                ...
            def fieldValues(self) -> Union[Array[FieldValue]]:
            """
            Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
            """
            Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
            Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
            #dataFieldTypes
            """
                ...
            def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
            """
            Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
            """
            Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldNames(self) -> Union[Array[str]]:
            """
            Returns all data field names including those whose values are empty. Array is ordered by
            field ordinal.
            """
                ...
            def unsetFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
            field ordinal.
            """
                ...
            def missingFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
            field ordinal.
            """
                ...
            @overload
            def at(self, ordinal: int) -> Union[T]:
            """
            Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
            
            @param ordinal
                    Integer ordinal of the field in the parent type
            @return value of field at ordinal
            """
                ...
            @overload
            def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
            """
            Return value for the given serialized expression
            
            @param expr
                    Serialized expression to obtain the value in the given Obj
            @param failIfNotValid
                    If set, fails if not a valid expression
            @return value obtained as a result of expression evaluation
            """
                ...
            def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
            """
            Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
            `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
            that it also handles `null`. If path contains any collections then only first element will be traversed,
            unless the collection index is specified in the path.
            
            If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return the field or null
            """
                ...
            def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
            """
            Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
            traversals, unless the collection index is specified in the path.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return fields as a flat list
            
            @see #fieldValueAtPath
            """
                ...
            @overload
            def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            @overload
            def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply
            """
                ...
            def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
            """
            Perform an action for each {@link isFieldSet set} field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
            """
            Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
            on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply; stop if this `action` returns `false
            @return `true` if iteration was not aborted by lambda i.e. it saw all field values
            """
                ...
            @overload
            def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            @overload
            def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type while processing action returns
            `true`.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance; stops processing if return `false`
            @return `true` if iteration was not aborted by lambda i.e. it saw all refs
            """
                ...
            def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
            """
                ...
            def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
            processing action returns `true`.
            """
                ...
            @overload
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.Scheduler]:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the asynchronous `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that fields
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.Scheduler]:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            asynchronous `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Result of this function call is a copy of current instance with specified field value replaced based on result of
            the `mapper` invocation.
            @param field
                      field being mapped
            @param includeEmpty
                      if set, invokes mapper for fields with empty value
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param mapper
                      function to be executed for each pair of field type and Obj instance for producing new reference value
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` will be `null`.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
            result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
            """
            Evaluates given projection expression over this instance.
            """
                ...
            @overload
            def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
            """
            Evaluates given projection over this instance and returns results as json.
            """
                ...
            @overload
            def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
            """
            Evaluates given projection over this instance and returns results as instance of the new Obj.
            """
                ...
            @overload
            def validateObj(self) -> InvalidationQueue.Processor.Scheduler:
            """
            Populates all missing default values and throws error if any constraint is violated.
            """
                ...
            @overload
            def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
            """
            Validate that the Obj fields are set according to all the required rules.
            """
                ...
            @overload
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      name of the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            @overload
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
            defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
            
            @param fields
                      map of field names/values
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @return new Obj
            """
                ...
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
            If you would like to #unsetField, you should call #withoutFieldAtPath instead.
            
            Immutable objects may return the same instance if the field being set does not actually represent a
            change to the existing object.
            
            @param path
                      path to set value at
            @param value
                      value to set
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @param doNotCreateIfMissing
                      true indicates that any empty reference along the path will not set the value
            @return new Obj
            """
                ...
            def withoutFieldAtPath(self, path: str) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj without the specified path field.
            
            Immutable objects may return the same instance if the field being removed does not actually represent a
            change to the existing object.
            
            @param path
                      path for field to remove
            @return new Obj
            
            @see #withFieldAtPath
            @see #withoutField
            """
                ...
            @overload
            def withoutField(self, field: str) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj, removing the field with the provided name.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            @overload
            def withoutField(self, field: FieldType) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj, removing the field with the provided field type.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            def withoutFields(self, fields: Array[str]) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> InvalidationQueue.Processor.Scheduler:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
            calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
            {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
            fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
            fields that have already been set.
            
            {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
            As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
            
            @param includeEmptyRefsWithDefaults
                      it `true` then missing / empty child references that have fields with defaults will also be instantiated
            @param defaultFields
                      If not empty, a list of default field paths to populate.  Any default fields not specified in the
                      array will be ignored.
            @return new Obj
            
            @see #defaultField
            @see FieldType#defaultValueConst
            @see FieldType#defaultValue
            """
                ...
            @overload
            def defaultField(self, field: str) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    name of the field to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def defaultField(self, field: FieldType) -> InvalidationQueue.Processor.Scheduler:
            """
            Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    field type to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def unsetField(self, field: str) -> InvalidationQueue.Processor.Scheduler:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    name of the field to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def unsetField(self, field: FieldType) -> InvalidationQueue.Processor.Scheduler:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    field type to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def removeField(self, field: str) -> InvalidationQueue.Processor.Scheduler:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    name of the field to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def removeField(self, field: FieldType) -> InvalidationQueue.Processor.Scheduler:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    field type to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
            
            @param other
                      object
            @param fieldPathMergeSpec
                      mapping of fields of the object to the respective merge annotations
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.Processor.Scheduler:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence.
            
            @param other
                      object
            @param otherFieldsFilter
                      only fields of otherFieldsFilter type from other are merged into this obj.
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.Processor.Scheduler:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
            traverse child reference and collection fields.
            """
                ...
            def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
            """
            Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
            Fields that non null in only one of this and other will be in the resulting Obj without change.
            """
                ...
            def mergeJson(self, json: any) -> InvalidationQueue.Processor.Scheduler:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Merge the obj references within the current obj
            @param deep
                   If set, traverses the reference fields within the obj as well for a deep merge
            @param objKey
                   lambda specifying how to obtain the key for the Obj while determining which Objs to merge
            @param filter
                   Field paths that need to be filtered from this merge
            @return Obj with child references merged
            """
                ...
            def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[InvalidationQueue.Processor.Scheduler]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.Processor.Scheduler]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.Processor.Scheduler]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[InvalidationQueue.Processor.Scheduler]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.Processor.Scheduler]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.Processor.Scheduler]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.Processor.Scheduler]]:
            """
            Create a map with the given key type and elements of this type.
            """
                ...
            @classmethod
            def myReferenceType(cls) -> ReferenceType:
                ...
            @classmethod
            def myMapTypeOf(cls, keyType: ValueType) -> MapType:
                ...
            @classmethod
            def myMapType(cls) -> MapType:
                ...
            @classmethod
            def myArrayType(cls) -> ArrayType:
                ...
            @classmethod
            def mySetType(cls) -> SetType:
                ...
            @classmethod
            def myStreamType(cls) -> StreamType:
                ...
            def toBuilder(self) -> ObjBuilder[InvalidationQueue.Processor.Scheduler]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[InvalidationQueue.Processor.Scheduler]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.Scheduler:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Construct an instance of this type from provided fields
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see withDefaults
            """
                ...
            @classmethod
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Construct an instance of this type from provided instance of a subtype or a "duck type".
            """
                ...
            def remakeAs(self, type: Type) -> O:
            """
            Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
            converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
            could be costly if types have different value types for same fields.
            
            @param type
                    Type of new obj to return
            @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                    converted and copied to it
            """
                ...
            @classmethod
            def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
            """
            Optional override that will be called every time instance of this type is created.
            
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            def afterMake(self) -> InvalidationQueue.Processor.Scheduler:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> InvalidationQueue.Processor.Scheduler:
            """
            Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
            every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
            Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
            
            @see ValueType#defaultEmptyValue
            """
                ...
            def toData(self) -> Union[Data]:
            """
            Represent the current obj instance as {@link Data}
            """
                ...
            @classmethod
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.Processor.Scheduler]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            @overload
            def setField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
            The value must be of the correct type if doNotConvert flag is true.
            
            @param name
                      of the field
            @param value
                      of the field
            @param doNotConvert
                      if true, attempt to convert the value to match the field's type
            @return this Obj
            """
                ...
            @overload
            def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.Scheduler:
            """
            Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
            The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      the field
            @param value
                      of the field
            @param doNotConvert
                      if true, attempt to convert the value to match the field's type
            @return this Obj
            """
                ...
            def onChange(self, changed: Array[str]) -> None:
            """
            Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
            field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
            properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
            collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
            key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
            collection field. This has the same appearance as if the collection field were assigned from a previously
            unassigned value.
            
            Example:
            ```type
            type A mixes MutableObj {
              onChange: ~
              b: [string]
              c: map<string, int>
              d: D
            }
            type D mixes MutableObj {
              onChange: ~
              e: string
            }
            ```
            ```js
            var a = A.make({b: ['hello', 'goodbye'], d: {}});
            a.b[1] = 'World'; // 1
            a.c['hello'] = 'world'; // 2
            a.d.e = 'hello' // 3
            a.b.pop(); // 4
            ```
            `A.onChange` should be called four times:
              1. when the field `b` changed - the FieldPath will be "b[1]".
              2. when the field `c` changed - the FieldPath will be "c.hello".
              3. when `d` changed - the FieldPath will be "d.e".
              4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
            
            `D.onChange` should be called once - the FieldPath will be `e`.
            
            Note that if multiple elements of a child collection are changed, you will get multiple field paths.
            
            @param changed paths to fields that changed
            
            @see #onEdit
            """
                ...
            def onEdit(self, edits: Obj) -> None:
            """
            Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
            contains more information about the values which changed, including their prior values. This allows a full
            difference to be calculated if desired. Note that maintaining this state is much more costly than simple
            notification via #onChange and should only be used if truly required.
            
            @param edits a list of what changed and the prior values
            
            @see #onChange
            """
                ...
            def withoutChangeEvent(self, action: Callable[[Union[Mutable]]]) -> None:
            """
            Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
            
            @param action the lambda to invoke that makes changes without notification
            """
                ...
            @classmethod
            def initialize(cls, iqp: InvalidationQueue.Processor) -> InvalidationQueue.Processor.Scheduler:
            """
            Constructs scheduler in initial state
            
            @param iqp
                   InvalidationQueue.Processor instance the scheduler is owned by
            """
                ...
            def addTimeMillis(self, queue: Type, time: int) -> None:
            """
            Adds time for the specifed app. Called when an active compute action completes.
            
            @param queue
                   queue to add time for
            @param appCode
                   app to add time for
            @param time
                   time to add
            """
                ...
            def checkRefresh(self) -> bool:
            """
            Refreshes the list of queues that have queue entries
            
            @return true if there are any queues with entries to process.
            """
                ...
            def applyPriority(self, queues: Array[Type]=None) -> Union[Array[Type]]:
            """
            Orders the specified queues by priority based on accumulated usage and configured priorities
            """
                ...
            def resetPriorityFactors(self) -> None:
            """
            Resets the priority factors (to avoid accidental starvation)
            """
                ...
            def queues(self) -> Union[Array[Type]]:
            """
            Queues that currently have entries that need processing
            """
                ...
            def runningJobs(self, queueType: Type) -> Union[Array[InvalidationQueueRunningJobInfo]]:
            """
            Gets info about the running jobs for a queue.  Note that this is only relevant for {@link BatchQueue} and
            {@link MapReduceQueue}.
            
            @param queueType
                   Queue type to get running job info for
            
            @return info about the running jobs for a queue.
            """
                ...
        
        class ComputeDesc():
            """
            Descriptive information for an individual queue compute action
            
            @remarks this represents a made instance of InvalidationQueue.Processor.ComputeDesc
            """
            
            queue: Optional[Type]
            """
            Queue that compute action was for
            """

            numEntries: Optional[int]=None
            """
            Number of queue entries participating in the compute action
            """

            startTimeMillis: Optional[Any]=None
            """
            Time compute action was dispatched
            """
            def __init__(self, queue: Optional[Type]=None, numEntries: Optional[int]=None, startTimeMillis: Optional[Any]=None) -> None: ...

            @overload
            def toJson(self) -> any:
            """
            Convert the internal object representation to a JSON object.
            
            @return JSON object representation
            
            @see #fromJson
            """
                ...
            @overload
            def toJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
            """
            Convert the internal object representation to a _typed_ JSON object.
            @param omitTopLevelType
                   Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
                   the outer level of the produced json.
            @param runtime
                   If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
                   performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
            
            
            @return JSON object representation
            
            @see #fromJson
            @see #toJson
            @see serdeser.c3doc
            @see JsonType
            """
                ...
            @overload
            def toTypedJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toJsonString(self) -> str:
                ...
            @overload
            def toJsonString(self, pretty: bool) -> str:
            """
            Convert the internal object representation to a serialized JSON string.
            
            @return JSON object as string
            """
                ...
            @overload
            def toTypedJsonString(self) -> str:
                ...
            @overload
            def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
                ...
            @overload
            def toJsString(self) -> str:
                ...
            @overload
            def toJsString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized JavaScript object literal.
            
            @return JavaScript object literal string
            """
                ...
            @overload
            def toXmlString(self) -> str:
                ...
            @overload
            def toXmlString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized XML string.
            
            @return XML element as string
            
            @see #fromXmlString
            """
                ...
            def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
            """
            Convert the internal object representation to a string serialized representation of the object.
            
            @return string serialized object representation
            """
                ...
            @classmethod
            def fromJson(cls, json: any) -> Union[InvalidationQueue.Processor.ComputeDesc]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJson
            """
                ...
            @classmethod
            def fromJsonString(cls, json: str) -> Union[InvalidationQueue.Processor.ComputeDesc]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJsonString
            """
                ...
            @classmethod
            def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.Processor.ComputeDesc]:
            """
            Load the XML-based representation and reconstruct the corresponding object.
            
            fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
            may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
            isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
            will return an instance of the correct type.
            
            @see #toXmlString
            """
                ...
            @classmethod
            def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.Processor.ComputeDesc]:
            """
            Load from contentType representation and reconstruct the corresponding object.
            
            fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
            (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
            will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
            type and will return an instance of the correct type.
            """
                ...
            def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
            """
            Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
            there is a slight possibility that two objects with the same fingerprint will actually differ.
            
            The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
            {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
            unless the allIdentifiedRefFields option is specified.
            
            If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
            However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
            
            @param allIdentifiedRefFields
                      if `true`, fingerprint individual fields of persistable references, not just the `id`
            @param trackRecursiveRefs
                      if `true`, a set of referenced objects is maintained to avoid infinite recursion
            @param traversedRefs
                      only considered together with trackRecursiveRefs and if provided then all traversed references are
                      checked against and added to it
            @return integer fingerprint
            
            @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
            """
                ...
            def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
            """
            Measures retained memory by this instance.
            
            @param deep
                   if true and this instance contains references to other objects also measures memory retained by those
            @param allMeasured
                   if set then will skip instances that are in the set and will add instances that where measured by this call
            @return retained memory in bytes for this instances
            """
                ...
            def type(self) -> Type:
            """
            C3 Type of this instance.
            """
                ...
            def replaceType(self, old: Type, new: Type) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Returns new instance with all references to old type, including result of #type, replaced with new type. If new
            type does not contain fields from old or field value types are not convertable then drops the field.
            
            This method is used during live metadata update
            """
                ...
            def super(self, mixin: Type=None) -> Any:
            """
             Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
             useful for redispatching **member** methods reimplemented on this type to a parent implementation:
             ```js
             function toString() {
               return this.super().toString() + ', x=' + this.x;
             }
             ```
            
             ```py
             def toString(this):
                return this.super().toString() + ', x=' + this.x
            ```
            
             To redispatch **static** methods, see {@link Type#super}.
            
             Note that this not the same as the language-specific `super` keyword because it works through the type system and
             supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
             globally.
            
             If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
             This can be used to create a local implementation "around" the server implementation for additional caching or
             other local state management.
            
             @param mixin if specified, this mixin is used instead or an error is thrown
             @return "super" calling proxy for this object
            
             @see Type.super
            """
                ...
            @overload
            def instanceOf(self, typeName: str) -> bool:
            """
            Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            """
                ...
            @overload
            def instanceOf(self, type: Type) -> bool:
            """
            Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            
            @see ValueType#isA
            """
                ...
            def isEmptyObj(self) -> bool:
            """
            Whether all the fields of this instance are empty.
            """
                ...
            def isSame(self, other: Obj) -> bool:
            """
            Whether the specified instance represents exactly the same object as this instance.
            """
                ...
            @overload
            def isFieldSet(self, field: str) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldSet(self, field: FieldType) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldMissing(self, field: str) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def isFieldMissing(self, field: FieldType) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            """
                ...
            @overload
            def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
            the obj.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            @return value for the given field
            """
                ...
            def fieldValues(self) -> Union[Array[FieldValue]]:
            """
            Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
            """
            Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
            Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
            #dataFieldTypes
            """
                ...
            def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
            """
            Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
            """
            Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldNames(self) -> Union[Array[str]]:
            """
            Returns all data field names including those whose values are empty. Array is ordered by
            field ordinal.
            """
                ...
            def unsetFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
            field ordinal.
            """
                ...
            def missingFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
            field ordinal.
            """
                ...
            @overload
            def at(self, ordinal: int) -> Union[T]:
            """
            Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
            
            @param ordinal
                    Integer ordinal of the field in the parent type
            @return value of field at ordinal
            """
                ...
            @overload
            def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
            """
            Return value for the given serialized expression
            
            @param expr
                    Serialized expression to obtain the value in the given Obj
            @param failIfNotValid
                    If set, fails if not a valid expression
            @return value obtained as a result of expression evaluation
            """
                ...
            def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
            """
            Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
            `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
            that it also handles `null`. If path contains any collections then only first element will be traversed,
            unless the collection index is specified in the path.
            
            If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return the field or null
            """
                ...
            def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
            """
            Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
            traversals, unless the collection index is specified in the path.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return fields as a flat list
            
            @see #fieldValueAtPath
            """
                ...
            @overload
            def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            @overload
            def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply
            """
                ...
            def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
            """
            Perform an action for each {@link isFieldSet set} field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
            """
            Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
            on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply; stop if this `action` returns `false
            @return `true` if iteration was not aborted by lambda i.e. it saw all field values
            """
                ...
            @overload
            def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            @overload
            def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type while processing action returns
            `true`.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance; stops processing if return `false`
            @return `true` if iteration was not aborted by lambda i.e. it saw all refs
            """
                ...
            def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
            """
                ...
            def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
            processing action returns `true`.
            """
                ...
            @overload
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.ComputeDesc]:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the asynchronous `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that fields
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.ComputeDesc]:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            asynchronous `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Result of this function call is a copy of current instance with specified field value replaced based on result of
            the `mapper` invocation.
            @param field
                      field being mapped
            @param includeEmpty
                      if set, invokes mapper for fields with empty value
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param mapper
                      function to be executed for each pair of field type and Obj instance for producing new reference value
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` will be `null`.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
            result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
            """
            Evaluates given projection expression over this instance.
            """
                ...
            @overload
            def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
            """
            Evaluates given projection over this instance and returns results as json.
            """
                ...
            @overload
            def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
            """
            Evaluates given projection over this instance and returns results as instance of the new Obj.
            """
                ...
            @overload
            def validateObj(self) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Populates all missing default values and throws error if any constraint is violated.
            """
                ...
            @overload
            def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
            """
            Validate that the Obj fields are set according to all the required rules.
            """
                ...
            @overload
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      name of the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            @overload
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
            defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
            
            @param fields
                      map of field names/values
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @return new Obj
            """
                ...
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
            If you would like to #unsetField, you should call #withoutFieldAtPath instead.
            
            Immutable objects may return the same instance if the field being set does not actually represent a
            change to the existing object.
            
            @param path
                      path to set value at
            @param value
                      value to set
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @param doNotCreateIfMissing
                      true indicates that any empty reference along the path will not set the value
            @return new Obj
            """
                ...
            def withoutFieldAtPath(self, path: str) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj without the specified path field.
            
            Immutable objects may return the same instance if the field being removed does not actually represent a
            change to the existing object.
            
            @param path
                      path for field to remove
            @return new Obj
            
            @see #withFieldAtPath
            @see #withoutField
            """
                ...
            @overload
            def withoutField(self, field: str) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj, removing the field with the provided name.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            @overload
            def withoutField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj, removing the field with the provided field type.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            def withoutFields(self, fields: Array[str]) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> InvalidationQueue.Processor.ComputeDesc:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
            calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
            {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
            fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
            fields that have already been set.
            
            {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
            As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
            
            @param includeEmptyRefsWithDefaults
                      it `true` then missing / empty child references that have fields with defaults will also be instantiated
            @param defaultFields
                      If not empty, a list of default field paths to populate.  Any default fields not specified in the
                      array will be ignored.
            @return new Obj
            
            @see #defaultField
            @see FieldType#defaultValueConst
            @see FieldType#defaultValue
            """
                ...
            @overload
            def defaultField(self, field: str) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    name of the field to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def defaultField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    field type to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def unsetField(self, field: str) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    name of the field to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def unsetField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    field type to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def removeField(self, field: str) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    name of the field to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def removeField(self, field: FieldType) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    field type to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
            
            @param other
                      object
            @param fieldPathMergeSpec
                      mapping of fields of the object to the respective merge annotations
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence.
            
            @param other
                      object
            @param otherFieldsFilter
                      only fields of otherFieldsFilter type from other are merged into this obj.
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
            traverse child reference and collection fields.
            """
                ...
            def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
            """
            Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
            Fields that non null in only one of this and other will be in the resulting Obj without change.
            """
                ...
            def mergeJson(self, json: any) -> InvalidationQueue.Processor.ComputeDesc:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Merge the obj references within the current obj
            @param deep
                   If set, traverses the reference fields within the obj as well for a deep merge
            @param objKey
                   lambda specifying how to obtain the key for the Obj while determining which Objs to merge
            @param filter
                   Field paths that need to be filtered from this merge
            @return Obj with child references merged
            """
                ...
            def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[InvalidationQueue.Processor.ComputeDesc]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.Processor.ComputeDesc]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.Processor.ComputeDesc]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[InvalidationQueue.Processor.ComputeDesc]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.Processor.ComputeDesc]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.Processor.ComputeDesc]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.Processor.ComputeDesc]]:
            """
            Create a map with the given key type and elements of this type.
            """
                ...
            @classmethod
            def myReferenceType(cls) -> ReferenceType:
                ...
            @classmethod
            def myMapTypeOf(cls, keyType: ValueType) -> MapType:
                ...
            @classmethod
            def myMapType(cls) -> MapType:
                ...
            @classmethod
            def myArrayType(cls) -> ArrayType:
                ...
            @classmethod
            def mySetType(cls) -> SetType:
                ...
            @classmethod
            def myStreamType(cls) -> StreamType:
                ...
            def toBuilder(self) -> ObjBuilder[InvalidationQueue.Processor.ComputeDesc]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[InvalidationQueue.Processor.ComputeDesc]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Construct an instance of this type from provided fields
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                       populated
            
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Construct an instance from provided fields
            @param fields
                       Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                       field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                       to Panda.make()
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                       -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                       the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
            
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
            
            ```js
            User.make({
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            
            Obj.make({
              type: 'User',
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            ```
            
            ```py
            c3.User.make({
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.Obj.make({
              "type": 'User',
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.User(email='joe@smith.com', realName='Joe Smith')
            
            c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
            ```
            
            Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
            specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
            such as {@link Ann.Ser} do not apply.
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @classmethod
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Construct an instance of this type from provided instance of a subtype or a "duck type".
            """
                ...
            def remakeAs(self, type: Type) -> O:
            """
            Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
            converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
            could be costly if types have different value types for same fields.
            
            @param type
                    Type of new obj to return
            @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                    converted and copied to it
            """
                ...
            @classmethod
            def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
            """
            Optional override that will be called every time instance of this type is created.
            
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            def afterMake(self) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
            every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
            Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
            
            @see ValueType#defaultEmptyValue
            """
                ...
            def toData(self) -> Union[Data]:
            """
            Represent the current obj instance as {@link Data}
            """
                ...
            @classmethod
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.Processor.ComputeDesc]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            @classmethod
            def forComputeAction(cls, queue: Type, numEntries: int) -> InvalidationQueue.Processor.ComputeDesc:
            """
            Create instance for a compute action
            
            @param queue
                   Queue the compute action was for
            @param numEntries
                   Number of queue entries participating in the compute action
            
            @return the created instance
            """
                ...
            def resetStartTime(self) -> None:
            """
            Resets the start time (after utilization was reported)
            """
                ...
        
        class QueueTimes(Mutable):
            """
            Keeps track of the total amount of time (since the last reset) used by each queue.
            
            @remarks this represents a made instance of InvalidationQueue.Processor.QueueTimes
            """
            
            _timesByQueue: Optional[MapBuilder[Type, int]]=None
            def __init__(self, _timesByQueue: Optional[MapBuilder[Type, int]]=None) -> None: ...

            @overload
            @classmethod
            def make(cls) -> InvalidationQueue.Processor.QueueTimes:
            """
            Construct an instance with initial state.
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.QueueTimes:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                       populated
            
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Construct an instance from provided fields
            @param fields
                       Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                       field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                       to Panda.make()
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                       -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                       the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
            
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @overload
            @classmethod
            def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
            
            ```js
            User.make({
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            
            Obj.make({
              type: 'User',
              email: 'joe@smith.com',
              realName: 'Joe Smith'
            })
            ```
            
            ```py
            c3.User.make({
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.Obj.make({
              "type": 'User',
              "email": 'joe@smith.com',
              "realName": 'Joe Smith'
            })
            
            c3.User(email='joe@smith.com', realName='Joe Smith')
            
            c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
            ```
            
            Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
            specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
            such as {@link Ann.Ser} do not apply.
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see fromFields
            @see beforeMake
            @see afterMake
            @see withDefaults
            """
                ...
            @overload
            def toJson(self) -> any:
            """
            Convert the internal object representation to a JSON object.
            
            @return JSON object representation
            
            @see #fromJson
            """
                ...
            @overload
            def toJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
            """
            Convert the internal object representation to a _typed_ JSON object.
            @param omitTopLevelType
                   Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
                   the outer level of the produced json.
            @param runtime
                   If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
                   performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
            
            
            @return JSON object representation
            
            @see #fromJson
            @see #toJson
            @see serdeser.c3doc
            @see JsonType
            """
                ...
            @overload
            def toTypedJson(self, include: str=None, exclude: str=None) -> any:
                ...
            @overload
            def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
                ...
            @overload
            def toJsonString(self) -> str:
                ...
            @overload
            def toJsonString(self, pretty: bool) -> str:
            """
            Convert the internal object representation to a serialized JSON string.
            
            @return JSON object as string
            """
                ...
            @overload
            def toTypedJsonString(self) -> str:
                ...
            @overload
            def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
                ...
            @overload
            def toJsString(self) -> str:
                ...
            @overload
            def toJsString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized JavaScript object literal.
            
            @return JavaScript object literal string
            """
                ...
            @overload
            def toXmlString(self) -> str:
                ...
            @overload
            def toXmlString(self, withType: bool) -> str:
            """
            Convert the internal object representation to a serialized XML string.
            
            @return XML element as string
            
            @see #fromXmlString
            """
                ...
            def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
            """
            Convert the internal object representation to a string serialized representation of the object.
            
            @return string serialized object representation
            """
                ...
            @classmethod
            def fromJson(cls, json: any) -> Union[InvalidationQueue.Processor.QueueTimes]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJson
            """
                ...
            @classmethod
            def fromJsonString(cls, json: str) -> Union[InvalidationQueue.Processor.QueueTimes]:
            """
            Load the JSON-based representation and reconstruct the corresponding object.
            
            fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
            a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
            called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
            an instance of the correct type.
            
            @see #toJsonString
            """
                ...
            @classmethod
            def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.Processor.QueueTimes]:
            """
            Load the XML-based representation and reconstruct the corresponding object.
            
            fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
            may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
            isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
            will return an instance of the correct type.
            
            @see #toXmlString
            """
                ...
            @classmethod
            def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.Processor.QueueTimes]:
            """
            Load from contentType representation and reconstruct the corresponding object.
            
            fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
            (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
            will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
            type and will return an instance of the correct type.
            """
                ...
            def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
            """
            Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
            there is a slight possibility that two objects with the same fingerprint will actually differ.
            
            The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
            {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
            unless the allIdentifiedRefFields option is specified.
            
            If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
            However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
            
            @param allIdentifiedRefFields
                      if `true`, fingerprint individual fields of persistable references, not just the `id`
            @param trackRecursiveRefs
                      if `true`, a set of referenced objects is maintained to avoid infinite recursion
            @param traversedRefs
                      only considered together with trackRecursiveRefs and if provided then all traversed references are
                      checked against and added to it
            @return integer fingerprint
            
            @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
            """
                ...
            def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
            """
            Measures retained memory by this instance.
            
            @param deep
                   if true and this instance contains references to other objects also measures memory retained by those
            @param allMeasured
                   if set then will skip instances that are in the set and will add instances that where measured by this call
            @return retained memory in bytes for this instances
            """
                ...
            def type(self) -> Type:
            """
            C3 Type of this instance.
            """
                ...
            def replaceType(self, old: Type, new: Type) -> InvalidationQueue.Processor.QueueTimes:
            """
            Returns new instance with all references to old type, including result of #type, replaced with new type. If new
            type does not contain fields from old or field value types are not convertable then drops the field.
            
            This method is used during live metadata update
            """
                ...
            def super(self, mixin: Type=None) -> Any:
            """
             Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
             useful for redispatching **member** methods reimplemented on this type to a parent implementation:
             ```js
             function toString() {
               return this.super().toString() + ', x=' + this.x;
             }
             ```
            
             ```py
             def toString(this):
                return this.super().toString() + ', x=' + this.x
            ```
            
             To redispatch **static** methods, see {@link Type#super}.
            
             Note that this not the same as the language-specific `super` keyword because it works through the type system and
             supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
             globally.
            
             If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
             This can be used to create a local implementation "around" the server implementation for additional caching or
             other local state management.
            
             @param mixin if specified, this mixin is used instead or an error is thrown
             @return "super" calling proxy for this object
            
             @see Type.super
            """
                ...
            @overload
            def instanceOf(self, typeName: str) -> bool:
            """
            Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            """
                ...
            @overload
            def instanceOf(self, type: Type) -> bool:
            """
            Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
            This is the most convenient way to ask "is this type usable in a context requiring the other type?"
            
            @return true if this instance is of this type or any of its mixins
            
            @see ValueType#isA
            """
                ...
            def isEmptyObj(self) -> bool:
            """
            Whether all the fields of this instance are empty.
            """
                ...
            def isSame(self, other: Obj) -> bool:
            """
            Whether the specified instance represents exactly the same object as this instance.
            """
                ...
            @overload
            def isFieldSet(self, field: str) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldSet(self, field: FieldType) -> bool:
            """
             Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
             if the field value set the its default value by the constructor. A set field is never missing.
            
            @param field the field to check
            
            @return whether the specified field is set
            """
                ...
            @overload
            def isFieldMissing(self, field: str) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def isFieldMissing(self, field: FieldType) -> bool:
            """
             Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
             should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
            {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
            A missing field is never set.
            
            @param field the field to check
            
            @return whether the specified field is missing
            """
                ...
            @overload
            def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            """
                ...
            @overload
            def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
            """
            Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
            the obj.
            
            @param field
                      Field to return the value for
                   defaultToEmpty
                      will return default empty value if field is missing
            @return value for the given field
            """
                ...
            def fieldValues(self) -> Union[Array[FieldValue]]:
            """
            Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
            """
            Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
            Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
            #dataFieldTypes
            """
                ...
            def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
            """
            Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
            """
            Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
            """
                ...
            def fieldNames(self) -> Union[Array[str]]:
            """
            Returns all data field names including those whose values are empty. Array is ordered by
            field ordinal.
            """
                ...
            def unsetFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
            field ordinal.
            """
                ...
            def missingFieldNames(self) -> Union[Array[str]]:
            """
            @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
            field ordinal.
            """
                ...
            @overload
            def at(self, ordinal: int) -> Union[T]:
            """
            Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
            
            @param ordinal
                    Integer ordinal of the field in the parent type
            @return value of field at ordinal
            """
                ...
            @overload
            def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
            """
            Return value for the given serialized expression
            
            @param expr
                    Serialized expression to obtain the value in the given Obj
            @param failIfNotValid
                    If set, fails if not a valid expression
            @return value obtained as a result of expression evaluation
            """
                ...
            def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
            """
            Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
            `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
            that it also handles `null`. If path contains any collections then only first element will be traversed,
            unless the collection index is specified in the path.
            
            If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return the field or null
            """
                ...
            def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
            """
            Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
            traversals, unless the collection index is specified in the path.
            
            @param fieldPath
                      field names separated by dots
            @param failIfNotFound
                      if true, an error will be thrown if the any of the field types aren't defined
            @param context
                      if an error is thrown, the context returned by calling the lambda will be incorporated
            @return fields as a flat list
            
            @see #fieldValueAtPath
            """
                ...
            @overload
            def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            @overload
            def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
            """
            Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply
            """
                ...
            def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
            """
            Perform an action for each {@link isFieldSet set} field of this object.
            
            @param action
                      lambda to apply
            """
                ...
            def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
            """
            Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
            on provided `spec`.
            
            @param spec
                      which fields to include
            @param action
                      lambda to apply; stop if this `action` returns `false
            @return `true` if iteration was not aborted by lambda i.e. it saw all field values
            """
                ...
            @overload
            def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            @overload
            def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
            the field value if non-null and for collections of Obj, this means each element in the collection.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance
            """
                ...
            def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type while processing action returns
            `true`.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param action
                      function to be executed for each pair of field type and Obj instance; stops processing if return `false`
            @return `true` if iteration was not aborted by lambda i.e. it saw all refs
            """
                ...
            def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
            """
                ...
            def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
            """
            Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
            processing action returns `true`.
            """
                ...
            @overload
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.QueueTimes]:
            """
            Result of this function call is a copy of current instance with all non empty fields replaced based on results of
            the asynchronous `mapper` invocation.
            
            @param action
                      lambda to apply for every field value to produce a new value for that fields
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.Processor.QueueTimes]:
            """
            Result of this function call is a copy of current instance with all fields replaced based on results of the
            asynchronous `mapper` invocation.
            
            @param spec
                      which fields to include
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Result of this function call is a copy of current instance with specified field value replaced based on result of
            the `mapper` invocation.
            @param field
                      field being mapped
            @param includeEmpty
                      if set, invokes mapper for fields with empty value
            @param mapper
                      lambda to apply for every field value to produce a new value for that field
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param action
                      function to be executed for each pair of field type and Obj instance
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
            lambda application.
            
            Result of this function call is a copy of current instance with all references replaced based on results of the
            `mapper` invocation.
            
            @param includeEmpty
                      if `true` will also process references with `null` / "Empty" references
            @param mapper
                      function to be executed for each pair of field type and Obj instance for producing new reference value
            @param convertValue
                      if true, attempt to convert the value to match the field's type
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` will be `null`.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
            argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all current non empty field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
            """
            Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
            result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
            
            This function is useful for calculating aggregate values based on all field values.
            Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
            e.g
            ```
            o = {a:1, b:2, c:0}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
            
            o = {a: {x:1, y:2}, b: {x:10, z:2}}
            o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
            ```
            """
                ...
            @overload
            def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
            """
            Evaluates given projection expression over this instance.
            """
                ...
            @overload
            def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
            """
            Evaluates given projection over this instance and returns results as json.
            """
                ...
            @overload
            def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
            """
            Evaluates given projection over this instance and returns results as instance of the new Obj.
            """
                ...
            @overload
            def validateObj(self) -> InvalidationQueue.Processor.QueueTimes:
            """
            Populates all missing default values and throws error if any constraint is violated.
            """
                ...
            @overload
            def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
            """
            Validate that the Obj fields are set according to all the required rules.
            """
                ...
            @overload
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      name of the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            @overload
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
            defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      the field
            @param value
                      of the field
            @param doNotConvert
                      if true, do not attempt to convert the value to match the field's type
            @return new Obj
            
            @see #withoutField
            @see #defaultField
            """
                ...
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
            defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
            
            @param fields
                      map of field names/values
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @return new Obj
            """
                ...
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
            If you would like to #unsetField, you should call #withoutFieldAtPath instead.
            
            Immutable objects may return the same instance if the field being set does not actually represent a
            change to the existing object.
            
            @param path
                      path to set value at
            @param value
                      value to set
            @param doNotConvert
                      if true, attempt to convert the values to match the fields' type
            @param doNotCreateIfMissing
                      true indicates that any empty reference along the path will not set the value
            @return new Obj
            """
                ...
            def withoutFieldAtPath(self, path: str) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj without the specified path field.
            
            Immutable objects may return the same instance if the field being removed does not actually represent a
            change to the existing object.
            
            @param path
                      path for field to remove
            @return new Obj
            
            @see #withFieldAtPath
            @see #withoutField
            """
                ...
            @overload
            def withoutField(self, field: str) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj, removing the field with the provided name.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            @overload
            def withoutField(self, field: FieldType) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj, removing the field with the provided field type.
            
            Immutable objects may return the same instance if the field being removed is not present in the existing object.
            
            @param field
                      name of the field to remove
            @return new Obj with removed field
            
            @see #unsetField
            @see #removeField
            """
                ...
            def withoutFields(self, fields: Array[str]) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> InvalidationQueue.Processor.QueueTimes:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def secretFieldsSet(self) -> Array[str]:
            """
            @return a list of the secret field paths that were found to be set on this Obj.
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
            calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
            {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
            fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
            fields that have already been set.
            
            {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
            As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
            
            @param includeEmptyRefsWithDefaults
                      it `true` then missing / empty child references that have fields with defaults will also be instantiated
            @param defaultFields
                      If not empty, a list of default field paths to populate.  Any default fields not specified in the
                      array will be ignored.
            @return new Obj
            
            @see #defaultField
            @see FieldType#defaultValueConst
            @see FieldType#defaultValue
            """
                ...
            @overload
            def defaultField(self, field: str) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    name of the field to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def defaultField(self, field: FieldType) -> InvalidationQueue.Processor.QueueTimes:
            """
            Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
            method will behave the same as {@link #unsetField}.
            
            @param field
                    field type to default
            @return new `Obj` with the specified field set to its default value
            
            @see #withField
            @see #unsetField
            """
                ...
            @overload
            def unsetField(self, field: str) -> InvalidationQueue.Processor.QueueTimes:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    name of the field to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def unsetField(self, field: FieldType) -> InvalidationQueue.Processor.QueueTimes:
            """
            Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
            is different from {@link removeField}
            
            @param field
                    field type to unset
            @return new `Obj` with the specified field unset
            
            @see #withoutField
            @see #removeField
            """
                ...
            @overload
            def removeField(self, field: str) -> InvalidationQueue.Processor.QueueTimes:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    name of the field to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def removeField(self, field: FieldType) -> InvalidationQueue.Processor.QueueTimes:
            """
            Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
            is different from {@link #unsetField}
            
            @param field
                    field type to remove
            @return new `Obj` with the specified field removed
            
            @see #withoutField
            @see #unsetField
            """
                ...
            @overload
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
            
            @param other
                      object
            @param fieldPathMergeSpec
                      mapping of fields of the object to the respective merge annotations
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.Processor.QueueTimes:
            """
            Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
            In case of conflicts, fields of other instance take precedence.
            
            @param other
                      object
            @param otherFieldsFilter
                      only fields of otherFieldsFilter type from other are merged into this obj.
            @return the new merged Obj
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.Processor.QueueTimes:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
            traverse child reference and collection fields.
            """
                ...
            def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
            """
            Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
            Fields that non null in only one of this and other will be in the resulting Obj without change.
            """
                ...
            def mergeJson(self, json: any) -> InvalidationQueue.Processor.QueueTimes:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Merge the obj references within the current obj
            @param deep
                   If set, traverses the reference fields within the obj as well for a deep merge
            @param objKey
                   lambda specifying how to obtain the key for the Obj while determining which Objs to merge
            @param filter
                   Field paths that need to be filtered from this merge
            @return Obj with child references merged
            """
                ...
            def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[InvalidationQueue.Processor.QueueTimes]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.Processor.QueueTimes]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.Processor.QueueTimes]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[InvalidationQueue.Processor.QueueTimes]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.Processor.QueueTimes]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.Processor.QueueTimes]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.Processor.QueueTimes]]:
            """
            Create a map with the given key type and elements of this type.
            """
                ...
            @classmethod
            def myReferenceType(cls) -> ReferenceType:
                ...
            @classmethod
            def myMapTypeOf(cls, keyType: ValueType) -> MapType:
                ...
            @classmethod
            def myMapType(cls) -> MapType:
                ...
            @classmethod
            def myArrayType(cls) -> ArrayType:
                ...
            @classmethod
            def mySetType(cls) -> SetType:
                ...
            @classmethod
            def myStreamType(cls) -> StreamType:
                ...
            def toBuilder(self) -> ObjBuilder[InvalidationQueue.Processor.QueueTimes]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[InvalidationQueue.Processor.QueueTimes]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.Processor.QueueTimes:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Construct an instance of this type from provided fields
            @param fields
                       Fields to construct the instance of the obj with
            @param withDefaults
                       If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
            
            @see withDefaults
            """
                ...
            @classmethod
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Construct an instance of this type from provided instance of a subtype or a "duck type".
            """
                ...
            def remakeAs(self, type: Type) -> O:
            """
            Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
            converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
            could be costly if types have different value types for same fields.
            
            @param type
                    Type of new obj to return
            @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                    converted and copied to it
            """
                ...
            @classmethod
            def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
            """
            Optional override that will be called every time instance of this type is created.
            
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            def afterMake(self) -> InvalidationQueue.Processor.QueueTimes:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> InvalidationQueue.Processor.QueueTimes:
            """
            Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
            every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
            Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
            
            @see ValueType#defaultEmptyValue
            """
                ...
            def toData(self) -> Union[Data]:
            """
            Represent the current obj instance as {@link Data}
            """
                ...
            @classmethod
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.Processor.QueueTimes]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            @overload
            def setField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
            The value must be of the correct type if doNotConvert flag is true.
            
            @param name
                      of the field
            @param value
                      of the field
            @param doNotConvert
                      if true, attempt to convert the value to match the field's type
            @return this Obj
            """
                ...
            @overload
            def setField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.Processor.QueueTimes:
            """
            Sets the mutable field value. The name must correspond to an existing field defined on this type or its mixins.
            The value must be of the correct type if doNotConvert flag is true.
            
            @param field
                      the field
            @param value
                      of the field
            @param doNotConvert
                      if true, attempt to convert the value to match the field's type
            @return this Obj
            """
                ...
            def onChange(self, changed: Array[str]) -> None:
            """
            Called by the machinery whenever one or more fields of this mutable Obj are changed. If this mutable Obj has
            field value types that are mutable Obj or collections, then `onChange` will also be called when fields or
            properties of those values change. The elements of the array indicate the {@link FieldPath}s that changed. For
            collections, a single element change will be reflected in the FieldPath: for arrays, the index and for maps, the
            key. More complex operations to the collections will not be reflected in the FieldPath; the path will end at the
            collection field. This has the same appearance as if the collection field were assigned from a previously
            unassigned value.
            
            Example:
            ```type
            type A mixes MutableObj {
              onChange: ~
              b: [string]
              c: map<string, int>
              d: D
            }
            type D mixes MutableObj {
              onChange: ~
              e: string
            }
            ```
            ```js
            var a = A.make({b: ['hello', 'goodbye'], d: {}});
            a.b[1] = 'World'; // 1
            a.c['hello'] = 'world'; // 2
            a.d.e = 'hello' // 3
            a.b.pop(); // 4
            ```
            `A.onChange` should be called four times:
              1. when the field `b` changed - the FieldPath will be "b[1]".
              2. when the field `c` changed - the FieldPath will be "c.hello".
              3. when `d` changed - the FieldPath will be "d.e".
              4. when the field `b` changed by removing an element - the FieldPath will be "b[1]".
            
            `D.onChange` should be called once - the FieldPath will be `e`.
            
            Note that if multiple elements of a child collection are changed, you will get multiple field paths.
            
            @param changed paths to fields that changed
            
            @see #onEdit
            """
                ...
            def onEdit(self, edits: Obj) -> None:
            """
            Called by the machinery whenever one or more fields of this mutable Obj are changed. The {@link EditList}
            contains more information about the values which changed, including their prior values. This allows a full
            difference to be calculated if desired. Note that maintaining this state is much more costly than simple
            notification via #onChange and should only be used if truly required.
            
            @param edits a list of what changed and the prior values
            
            @see #onChange
            """
                ...
            def withoutChangeEvent(self, action: Callable[[Union[Mutable]]]) -> None:
            """
            Changes made to the instance inside the provided lambda will not trigger #onChange or #onEdit.
            
            @param action the lambda to invoke that makes changes without notification
            """
                ...
            def timesByQueue(self) -> Union[Map[Type, int]]:
            """
            Time used by each queue in the app
            """
                ...
            def addTimeMillis(self, queue: Type, timeMillis: int) -> None:
            """
            Adds time used for a queue
            
            @param queue
                   Queue to add time for
            @param timeMillis
                   Time used, in milliseconds
            """
                ...
            def reset(self) -> None:
            """
            Resets the accumulated times
            """
                ...
    
    class FindSpec(InvalidationQueueFilterSpec, InvalidationQueueOrderSpec):
        """
        Used for specifying filter criteria for count/find functions.  All conditions will be "AND"ed.  Any that are null will be ignored.
        
        @remarks this represents a made instance of InvalidationQueue.FindSpec
        """
        
        targetTypeId: Optional[int]=None
        """
        Target type id to return.
        """

        targetObjIds: Optional[Array[str]]=None
        """
        Target obj ids to return.
        """

        srcActionId: Optional[str]=None
        """
        Source action id that invalidated the entry to return entries for.
        """

        entryType: Optional[str]=None
        """
        Value of entryType field to return values for.
        """

        status: Optional[str]=None
        """
        Status value to return values for.
        """

        context: Optional[str]=None
        """
        Context value to return values for.
        """

        contextFields: Optional[Map[str, Any]]=None
        """
        Filter values for individual context fields when the context value type is an included type.
        """

        errorCode: Optional[str]=None
        """
        Error code to return values for.  Only valid for finding/reporting errors
        """

        review: Optional[str]=None
        """
        Review to return
        """

        nodePool: Optional[str]=None
        """
        Node pool to return values for.
        """

        rescheduleKey: Optional[str]=None
        """
        Key for rescheduleByType operation to return values for.
        """

        priority: Optional[int]=None
        """
        Priority to return values for.
        """

        invalidatedNodeId: Optional[str]=None
        """
        Node that invalidated the entry.
        """

        nullFields: Optional[Array[str]]=None
        """
        Fields to search for null values on.
        """

        customFilter: Optional[str]=None
        """
        Custom filter expression following normal conventions for {@link FetchSpec#filter}.
        """

        orderFields: Optional[Array[InvalidationQueueOrderField]]=None
        """
        Fields to order by.
        """

        include: Optional[str]=None
        """
        Fields to include in the returned instances.  Follows same rules as {@link FetchSpec#include}.
        """

        offset: Optional[int]
        """
        Index of first entry to return.
        """

        limit: Optional[int]
        """
        Maximum number of entries to return.  Specifying -1 will return all
        """
        def __init__(self, targetTypeId: Optional[int]=None, targetObjIds: Optional[Array[str]]=None, srcActionId: Optional[str]=None, entryType: Optional[str]=None, status: Optional[str]=None, context: Optional[str]=None, contextFields: Optional[Map[str, Any]]=None, errorCode: Optional[str]=None, review: Optional[str]=None, nodePool: Optional[str]=None, rescheduleKey: Optional[str]=None, priority: Optional[int]=None, invalidatedNodeId: Optional[str]=None, nullFields: Optional[Array[str]]=None, customFilter: Optional[str]=None, orderFields: Optional[Array[InvalidationQueueOrderField]]=None, include: Optional[str]=None, offset: Optional[int]=None, limit: Optional[int]=None) -> None: ...

        @overload
        def toJson(self) -> any:
        """
        Convert the internal object representation to a JSON object.
        
        @return JSON object representation
        
        @see #fromJson
        """
            ...
        @overload
        def toJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
        """
        Convert the internal object representation to a _typed_ JSON object.
        @param omitTopLevelType
               Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
               the outer level of the produced json.
        @param runtime
               If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
               performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
        
        
        @return JSON object representation
        
        @see #fromJson
        @see #toJson
        @see serdeser.c3doc
        @see JsonType
        """
            ...
        @overload
        def toTypedJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toJsonString(self) -> str:
            ...
        @overload
        def toJsonString(self, pretty: bool) -> str:
        """
        Convert the internal object representation to a serialized JSON string.
        
        @return JSON object as string
        """
            ...
        @overload
        def toTypedJsonString(self) -> str:
            ...
        @overload
        def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
            ...
        @overload
        def toJsString(self) -> str:
            ...
        @overload
        def toJsString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized JavaScript object literal.
        
        @return JavaScript object literal string
        """
            ...
        @overload
        def toXmlString(self) -> str:
            ...
        @overload
        def toXmlString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized XML string.
        
        @return XML element as string
        
        @see #fromXmlString
        """
            ...
        def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
        """
        Convert the internal object representation to a string serialized representation of the object.
        
        @return string serialized object representation
        """
            ...
        @classmethod
        def fromJson(cls, json: any) -> Union[InvalidationQueue.FindSpec]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJson
        """
            ...
        @classmethod
        def fromJsonString(cls, json: str) -> Union[InvalidationQueue.FindSpec]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJsonString
        """
            ...
        @classmethod
        def fromXmlString(cls, xml: str) -> Union[InvalidationQueue.FindSpec]:
        """
        Load the XML-based representation and reconstruct the corresponding object.
        
        fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
        may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
        isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
        will return an instance of the correct type.
        
        @see #toXmlString
        """
            ...
        @classmethod
        def deserialize(cls, contentStr: str, contentType: str) -> Union[InvalidationQueue.FindSpec]:
        """
        Load from contentType representation and reconstruct the corresponding object.
        
        fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
        (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
        will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
        type and will return an instance of the correct type.
        """
            ...
        def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
        """
        Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
        there is a slight possibility that two objects with the same fingerprint will actually differ.
        
        The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
        {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
        unless the allIdentifiedRefFields option is specified.
        
        If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
        However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
        
        @param allIdentifiedRefFields
                  if `true`, fingerprint individual fields of persistable references, not just the `id`
        @param trackRecursiveRefs
                  if `true`, a set of referenced objects is maintained to avoid infinite recursion
        @param traversedRefs
                  only considered together with trackRecursiveRefs and if provided then all traversed references are
                  checked against and added to it
        @return integer fingerprint
        
        @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
        """
            ...
        def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
        """
        Measures retained memory by this instance.
        
        @param deep
               if true and this instance contains references to other objects also measures memory retained by those
        @param allMeasured
               if set then will skip instances that are in the set and will add instances that where measured by this call
        @return retained memory in bytes for this instances
        """
            ...
        def type(self) -> Type:
        """
        C3 Type of this instance.
        """
            ...
        def replaceType(self, old: Type, new: Type) -> InvalidationQueue.FindSpec:
        """
        Returns new instance with all references to old type, including result of #type, replaced with new type. If new
        type does not contain fields from old or field value types are not convertable then drops the field.
        
        This method is used during live metadata update
        """
            ...
        def super(self, mixin: Type=None) -> Any:
        """
         Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
         useful for redispatching **member** methods reimplemented on this type to a parent implementation:
         ```js
         function toString() {
           return this.super().toString() + ', x=' + this.x;
         }
         ```
        
         ```py
         def toString(this):
            return this.super().toString() + ', x=' + this.x
        ```
        
         To redispatch **static** methods, see {@link Type#super}.
        
         Note that this not the same as the language-specific `super` keyword because it works through the type system and
         supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
         globally.
        
         If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
         This can be used to create a local implementation "around" the server implementation for additional caching or
         other local state management.
        
         @param mixin if specified, this mixin is used instead or an error is thrown
         @return "super" calling proxy for this object
        
         @see Type.super
        """
            ...
        @overload
        def instanceOf(self, typeName: str) -> bool:
        """
        Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        """
            ...
        @overload
        def instanceOf(self, type: Type) -> bool:
        """
        Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        
        @see ValueType#isA
        """
            ...
        def isEmptyObj(self) -> bool:
        """
        Whether all the fields of this instance are empty.
        """
            ...
        def isSame(self, other: Obj) -> bool:
        """
        Whether the specified instance represents exactly the same object as this instance.
        """
            ...
        @overload
        def isFieldSet(self, field: str) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldSet(self, field: FieldType) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldMissing(self, field: str) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def isFieldMissing(self, field: FieldType) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        """
            ...
        @overload
        def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
        the obj.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        @return value for the given field
        """
            ...
        def fieldValues(self) -> Union[Array[FieldValue]]:
        """
        Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
        """
        Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
        Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
        #dataFieldTypes
        """
            ...
        def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
        """
        Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
        """
        Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldNames(self) -> Union[Array[str]]:
        """
        Returns all data field names including those whose values are empty. Array is ordered by
        field ordinal.
        """
            ...
        def unsetFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
        field ordinal.
        """
            ...
        def missingFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
        field ordinal.
        """
            ...
        @overload
        def at(self, ordinal: int) -> Union[T]:
        """
        Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
        
        @param ordinal
                Integer ordinal of the field in the parent type
        @return value of field at ordinal
        """
            ...
        @overload
        def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
        """
        Return value for the given serialized expression
        
        @param expr
                Serialized expression to obtain the value in the given Obj
        @param failIfNotValid
                If set, fails if not a valid expression
        @return value obtained as a result of expression evaluation
        """
            ...
        def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
        """
        Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
        `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
        that it also handles `null`. If path contains any collections then only first element will be traversed,
        unless the collection index is specified in the path.
        
        If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return the field or null
        """
            ...
        def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
        """
        Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
        traversals, unless the collection index is specified in the path.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return fields as a flat list
        
        @see #fieldValueAtPath
        """
            ...
        @overload
        def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        @overload
        def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply
        """
            ...
        def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
        """
        Perform an action for each {@link isFieldSet set} field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
        """
        Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
        on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply; stop if this `action` returns `false
        @return `true` if iteration was not aborted by lambda i.e. it saw all field values
        """
            ...
        @overload
        def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        @overload
        def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type while processing action returns
        `true`.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance; stops processing if return `false`
        @return `true` if iteration was not aborted by lambda i.e. it saw all refs
        """
            ...
        def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
        """
            ...
        def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
        processing action returns `true`.
        """
            ...
        @overload
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.FindSpec:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> InvalidationQueue.FindSpec:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.FindSpec]:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the asynchronous `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that fields
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[InvalidationQueue.FindSpec]:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        asynchronous `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> InvalidationQueue.FindSpec:
        """
        Result of this function call is a copy of current instance with specified field value replaced based on result of
        the `mapper` invocation.
        @param field
                  field being mapped
        @param includeEmpty
                  if set, invokes mapper for fields with empty value
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.FindSpec:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> InvalidationQueue.FindSpec:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param mapper
                  function to be executed for each pair of field type and Obj instance for producing new reference value
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` will be `null`.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
        result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
        """
        Evaluates given projection expression over this instance.
        """
            ...
        @overload
        def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
        """
        Evaluates given projection over this instance and returns results as json.
        """
            ...
        @overload
        def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
        """
        Evaluates given projection over this instance and returns results as instance of the new Obj.
        """
            ...
        @overload
        def validateObj(self) -> InvalidationQueue.FindSpec:
        """
        Populates all missing default values and throws error if any constraint is violated.
        """
            ...
        @overload
        def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
        """
        Validate that the Obj fields are set according to all the required rules.
        """
            ...
        @overload
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  name of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        @overload
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
        defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
        
        @param fields
                  map of field names/values
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @return new Obj
        """
            ...
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
        If you would like to #unsetField, you should call #withoutFieldAtPath instead.
        
        Immutable objects may return the same instance if the field being set does not actually represent a
        change to the existing object.
        
        @param path
                  path to set value at
        @param value
                  value to set
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @param doNotCreateIfMissing
                  true indicates that any empty reference along the path will not set the value
        @return new Obj
        """
            ...
        def withoutFieldAtPath(self, path: str) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj without the specified path field.
        
        Immutable objects may return the same instance if the field being removed does not actually represent a
        change to the existing object.
        
        @param path
                  path for field to remove
        @return new Obj
        
        @see #withFieldAtPath
        @see #withoutField
        """
            ...
        @overload
        def withoutField(self, field: str) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj, removing the field with the provided name.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        @overload
        def withoutField(self, field: FieldType) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj, removing the field with the provided field type.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        def withoutFields(self, fields: Array[str]) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> InvalidationQueue.FindSpec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
        calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
        {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
        fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
        fields that have already been set.
        
        {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
        As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
        
        @param includeEmptyRefsWithDefaults
                  it `true` then missing / empty child references that have fields with defaults will also be instantiated
        @param defaultFields
                  If not empty, a list of default field paths to populate.  Any default fields not specified in the
                  array will be ignored.
        @return new Obj
        
        @see #defaultField
        @see FieldType#defaultValueConst
        @see FieldType#defaultValue
        """
            ...
        @overload
        def defaultField(self, field: str) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                name of the field to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def defaultField(self, field: FieldType) -> InvalidationQueue.FindSpec:
        """
        Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                field type to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def unsetField(self, field: str) -> InvalidationQueue.FindSpec:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                name of the field to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def unsetField(self, field: FieldType) -> InvalidationQueue.FindSpec:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                field type to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def removeField(self, field: str) -> InvalidationQueue.FindSpec:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                name of the field to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def removeField(self, field: FieldType) -> InvalidationQueue.FindSpec:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                field type to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> InvalidationQueue.FindSpec:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
        
        @param other
                  object
        @param fieldPathMergeSpec
                  mapping of fields of the object to the respective merge annotations
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> InvalidationQueue.FindSpec:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence.
        
        @param other
                  object
        @param otherFieldsFilter
                  only fields of otherFieldsFilter type from other are merged into this obj.
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> InvalidationQueue.FindSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> InvalidationQueue.FindSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
        traverse child reference and collection fields.
        """
            ...
        def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
        """
        Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
        Fields that non null in only one of this and other will be in the resulting Obj without change.
        """
            ...
        def mergeJson(self, json: any) -> InvalidationQueue.FindSpec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> InvalidationQueue.FindSpec:
        """
        Merge the obj references within the current obj
        @param deep
               If set, traverses the reference fields within the obj as well for a deep merge
        @param objKey
               lambda specifying how to obtain the key for the Obj while determining which Objs to merge
        @param filter
               Field paths that need to be filtered from this merge
        @return Obj with child references merged
        """
            ...
        def sumObj(self, other: Obj, deep: bool=None) -> InvalidationQueue.FindSpec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[InvalidationQueue.FindSpec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[InvalidationQueue.FindSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[InvalidationQueue.FindSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[InvalidationQueue.FindSpec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[InvalidationQueue.FindSpec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, InvalidationQueue.FindSpec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, InvalidationQueue.FindSpec]]:
        """
        Create a map with the given key type and elements of this type.
        """
            ...
        @classmethod
        def myReferenceType(cls) -> ReferenceType:
            ...
        @classmethod
        def myMapTypeOf(cls, keyType: ValueType) -> MapType:
            ...
        @classmethod
        def myMapType(cls) -> MapType:
            ...
        @classmethod
        def myArrayType(cls) -> ArrayType:
            ...
        @classmethod
        def mySetType(cls) -> SetType:
            ...
        @classmethod
        def myStreamType(cls) -> StreamType:
            ...
        def toBuilder(self) -> ObjBuilder[InvalidationQueue.FindSpec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[InvalidationQueue.FindSpec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> InvalidationQueue.FindSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.FindSpec:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> InvalidationQueue.FindSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> InvalidationQueue.FindSpec:
        """
        Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                   populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> InvalidationQueue.FindSpec:
        """
        Construct an instance from provided fields
        @param fields
                   Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                   field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                   to Panda.make()
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                   -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                   the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
        
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Any, withDefaults: bool=None) -> InvalidationQueue.FindSpec:
        """
        Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
        
        ```js
        User.make({
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        
        Obj.make({
          type: 'User',
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        ```
        
        ```py
        c3.User.make({
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.Obj.make({
          "type": 'User',
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.User(email='joe@smith.com', realName='Joe Smith')
        
        c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
        ```
        
        Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
        specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
        such as {@link Ann.Ser} do not apply.
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> InvalidationQueue.FindSpec:
        """
        Construct an instance of this type from provided instance of a subtype or a "duck type".
        """
            ...
        def remakeAs(self, type: Type) -> O:
        """
        Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
        converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
        could be costly if types have different value types for same fields.
        
        @param type
                Type of new obj to return
        @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                converted and copied to it
        """
            ...
        @classmethod
        def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
        """
        Optional override that will be called every time instance of this type is created.
        
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        def afterMake(self) -> InvalidationQueue.FindSpec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> InvalidationQueue.FindSpec:
        """
        Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
        every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
        Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
        
        @see ValueType#defaultEmptyValue
        """
            ...
        def toData(self) -> Union[Data]:
        """
        Represent the current obj instance as {@link Data}
        """
            ...
        @classmethod
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[InvalidationQueue.FindSpec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> InvalidationQueue.FindSpec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def filterExpr(cls, spec: InvalidationQueueFilterSpec=None) -> Union[str]:
        """
        Constructs a filter expression based on the spec.  This is not a member function so that it can be called on
        null specs.
        
        @param spec
                  Spec to build filter expression for.
        
        @return a filter expression based on the filter spec.
        """
            ...
        @classmethod
        def errorFilterExpr(cls, queueType: Type=None, spec: InvalidationQueueFilterSpec=None) -> Union[str]:
        """
        Constructs a filter expression for getting errors based on the spec.  This is not a member function so that it
        can be called on null specs.
        
        @param queueType
                  Queue type to filter errors for.
        @param spec
                  Spec to build filter expression for.
        
        @return a filter expression based on the filter spec.
        """
            ...
        @classmethod
        def appendFilterClause(cls, fieldName: str, value: Any=None, filterExpr: str=None, includeNullFilter: bool=None) -> Union[str]:
        """
        Appends a filter clause to an existing filter expression (returned from {@link filterExpr}).
        
        @param fieldName
                  Name of field the new clause is for.
        @param value
                  Value to filter on.
        @param filterExpr
                  Filter expression to add clause to.
        @param includeNullFilter
                  True if null check should be made for null value, otherwise null values will be ignored.
        
        @return original filter expression appended with the new filter clause.
        """
            ...
        @classmethod
        def fromReportGroupKey(cls, groupKey: str) -> InvalidationQueueFilterSpec:
        """
        Constructs a spec from a group key returned in a row from a queue report or queue error report.
        """
            ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.InvalidationQueueGroupSpec import InvalidationQueueGroupSpec
from c3.platform.InvalidationQueueGroupResult import InvalidationQueueGroupResult
from c3.platform.InvalidationQueueTargetObj import InvalidationQueueTargetObj
from c3.platform.Type import Type
from c3.platform.InvalidationQueueRunningJobInfo import InvalidationQueueRunningJobInfo
from c3.platform.InvalidationQueueEntry import InvalidationQueueEntry
from c3.platform.InvalidationQueue.FindStreamSpec import InvalidationQueue.FindStreamSpec
from c3.platform.InvalidationQueueFilterSpec import InvalidationQueueFilterSpec
from c3.platform.LockInfo import LockInfo
from c3.platform.InvalidationQueueLockSummary import InvalidationQueueLockSummary
from c3.platform.InvalidationQueue.FindSpec import InvalidationQueue.FindSpec
from c3.platform.LockedEntries import LockedEntries
from c3.platform.InvalidationQueueComputingCount import InvalidationQueueComputingCount

# Python definitions for the C3 type SqlInvalidationQueueStore


class SqlInvalidationQueueStore(InvalidationQueueStore, Value):
    """
    Invalidation queue store type which defines the physical store level apis for invalidation queues.
    
    @remarks this represents a made instance of SqlInvalidationQueueStore
    """
    def __init__(self) -> None: ...

    @classmethod
    def clear(cls, queueType: Type, filter: InvalidationQueueFilterSpec=None) -> None:
    """
    Clears all entries from the store type associated with a queue type.
    
    @param queueType
              Queue type to remove entries for.
    @param filter
              If specified, only entries indicated by the filter will be removed.
              If not specified, all entries will be removed.
    """
        ...
    @classmethod
    def clearEntries(cls, queueType: Type, entries: Array[InvalidationQueueEntry[Any]]) -> None:
    """
    Clears all entries from the store type associated with a queue type.
    
    @param queueType
              Queue type to remove entries for.
    @param entries
              List of entries to clear.
    """
        ...
    @classmethod
    def clearContexts(cls, queueType: Type, filter: InvalidationQueueFilterSpec=None) -> None:
    """
    Clears the contexts for the specified entries in the queue.  This is only valid on queues where a null context is
    valid and indicates
    a superset of the action of any non-null context (e.g. CalcFieldsQueue).
    
    @param queueType
              Queue type to remove entries for.
    @param filter
              If specified, only the entries specified by the filter will be removed.
              If not specified, then all entries will be removed.
    """
        ...
    @classmethod
    def invalidate(cls, queueType: Type, entries: Array[InvalidationQueueEntry[Any]], autoCommit: bool, grouping: str=None, ignoreUniqueConstraintViolations: bool=None) -> None:
    """
    Invalidate the specified entries in the specified queue.
    
    It is the responsibility of the store implementation to properly set the status field on the incoming queue
    entries.
    
    @param queueType
              Queue type to process.
    @param entries
              Entries to invalidate.
    @param grouping
              Comma separated list that entries will be grouped by for processing.  If specified, the grouping fields
              will be applied in addition to targetTypeId. If not specified, no grouping will be
              done.
    @param autoCommit
              True, if the entries should be committed automatically.  False if they will be subsequently committed or
              aborted.
    @param ignoreUniqueConstraintViolation
              If true, and the only errors are errors are unique constraint violations, they will be ignored.
              Otherwise an exception will be throw on any error, including unique constraint violations.
    """
        ...
    @classmethod
    def initEntries(cls, queueType: Type, entries: Array[InvalidationQueueEntry[Any]], autoCommit: bool, grouping: str=None) -> Union[Array[InvalidationQueueEntry[Any]]]:
    """
    Initializes incoming invalidation queue entries appropriately for storage/dispatching.
    
    It is the responsibility of the store implementation to properly set the status field on the incoming queue
    entries.
    
    @param queueType
              Queue type to process.
    @param entries
              Entries to invalidate.
    @param grouping
              Comma separated list that entries will be grouped by for processing.  If specified, the grouping fields
              will be applied in addition to targetTypeId. If not specified, no grouping will be
              done.
    @param autoCommit
              True, if the entries should be committed automatically.  False if they will be subsequently committed or
              aborted.
    """
        ...
    @classmethod
    def commit(cls, queueType: Type, srcActionId: str) -> None:
    """
    Commit all initial invalidations by the source calling action.
    
    @param queueType
              Queue type to commit invalidations for.
    @param srcActionId
              Source action that created invalidations to be committed.  This action id was provided in the incoming
              entries to {@link invalidate} with autoCommit set to false.
    
    @see invalidate
    """
        ...
    @classmethod
    def commitAll(cls, queueType: Type, targetTypeId: int, targetObjId: str) -> None:
    """
    Commit all invalidations for a given target object.
    
    @param queueType
              Queue type to commit invalidations for.
    @param targetTypeId
              Target type id to commit invalidations for.
    @param targetObjId
              Target obj to commit invalidations for.
    """
        ...
    @classmethod
    def abort(cls, queueType: Type, srcActionId: str) -> None:
    """
    Abort all invalidations by the source calling action.
    
    @param queueType
              Queue type to abort invalidations for.
    @param srcActionId
              Source action that created invalidations to be committed.  This action id was provided in the incoming
              entries to {@link invalidate} with autoCommit set to false.
    
    @see commit
    """
        ...
    @classmethod
    def find(cls, queueType: Type, spec: InvalidationQueue.FindSpec=None) -> Union[Array[InvalidationQueueEntry[Any]]]:
    """
    Finds the requested entries
    
    @param queueType
              Queue type to find invalidations for.
    @param spec
              Optional settings controlling the operation.
    
    @return the list of requested entries.
    """
        ...
    @classmethod
    def findStream(cls, queueType: Type, filter: InvalidationQueue.FindStreamSpec=None) -> Union[Stream[InvalidationQueueEntry[Any]]]:
    """
    Finds the requested entries (streaming version)
    
    @param queueType
              Queue type to find invalidations for.
    @param spec
              Optional settings controlling the operation.
    
    @return the list of requested entries.
    """
        ...
    @classmethod
    def targetObjIds(cls, queueType: Type, targetTypeId: int) -> Union[Stream[str]]:
    """
    Finds the unique target obj ids for a target app and type
    
    @param queueType
              Queue type to find the target obj ids for.
    @param targetTypeId
              TargetType to find ids for.
    
    @return a stream containing all of the unique target obj ids for the specified target app and type,
    """
        ...
    @classmethod
    def targetObjIdsForRescheduleKey(cls, queueType: Type, rescheduleKey: str) -> Union[Stream[str]]:
    """
    Finds the unique target obj ids for a specific reschedule key
    
    @param queueType
              Queue type to find the target obj ids for.
    @param rescheduleKey
              Key to find the target obj ids for.
    
    @return a stream containing all of the unique target obj ids for the specified reschedule key,
    """
        ...
    @classmethod
    def hasEntriesForThisNode(cls, queueType: Type) -> bool:
    """
    Returns true if the queue has any entries for the current app/node.
    
    @param queueType
              Queue type to check for entries.
    
    @return true if the queue has any entries for the current app
    """
        ...
    @classmethod
    def entryType(cls, queueType: Type) -> Union[str]:
    """
    Returns the name of the physical entry type associated with the queue type.
    
    @param queueType
              Queue type to get the entry type for.
    """
        ...
    @classmethod
    def count(cls, queueType: Type, group: InvalidationQueueGroupSpec=None, filter: InvalidationQueueFilterSpec=None, excludePaused: bool=None, includePendingActions: bool=None, offset: int='0', limit: int='100') -> Union[Array[InvalidationQueueGroupResult]]:
    """
    Get status of an invalidation queue.
    
    @param queueType
              Queue type to get the status for.
    @param group
              Grouping to be applied.  If specified, then the results will be grouped as requested.
              If not specified, then no grouping will be done.
    @param filter
              Filter to be applied to the count query.  If not specified, then all entries will be counted.
    @param excludePaused
              If true, then queue entries for paused apps will be ignored, except for the computing count.
    @param includePendingActions
             If true, the number of actions necessary to compute all of the currently pending entries will be computed
             and returned in `InvalidationQueueStats.pendingActions`.  Otherwise, 0 will be returned there.
    @param offset
              Offset of first row to return.
    @param limit
              Maximum number of rows to return.
    
    @return the status of an invalidation queue.
    """
        ...
    @classmethod
    def countComputing(cls, queueType: Type, forNode: bool=None) -> Union[Array[InvalidationQueueComputingCount]]:
    """
    Counts the number of computing entries, grouped by target obj.
    
    @param queueType
              Queue type to get the computing count for.
    @param forNode
              If true, then only actions computing on the node will be counted, otherwise actions from all nodes
              will be counted.
    
    @return the number of computing entries, grouped by target obj.
    """
        ...
    @classmethod
    def countPendingCronJobsForNodePool(cls, nodePool: str, excludePaused: bool=None) -> int:
    """
    Counts all of the pending entries for the CronQueue that are being (or will be) processed by the specified node
    pool
    
    @param nodePool
           Specific node pool to count the entries for.  The qualifying entries for the requested node pool will be
           determined as follows:
    
           “task”        - include all entries that have a null node pool specified THAT AREN'T for runOnLeader jobs
    
           “leader”      - include ONLY entries that have a null node pool specified and are for runOnLeader jobs
    
           “singlenode”  - include ALL entries that have a null node pool specified
    
           Anything else - Include ALL entries that have that specific node pool specified
    @param excludePaused
             If true, only entries in non-paused queues will be included
    
    @return the number of qualifying queue entries
    """
        ...
    @classmethod
    def includeGenericTasks(cls, nodePool: str) -> bool:
    """
    @return true if the specified node pool process generic tasks (e.g. tasks with no nodePool specified).
    """
        ...
    @classmethod
    def runningJobs(cls, queueType: Type) -> Union[Array[InvalidationQueueRunningJobInfo]]:
    """
    Gets the set of distinct jobs for a queue along with their priority.  Note that this is only relevant for
    {@link BatchQueue} and {@link MapReduceQueue}.
    
    @param queueType
              Queue type to get the computing count for.
    
    @return the set of distinct jobs for a queue along with their priority.
    """
        ...
    @classmethod
    def lockFilterBase(cls, nodePool: str=None) -> Union[str]:
    """
    @return the base filter to be applied to fetch queue entries for locking
    """
        ...
    @classmethod
    def lockSummary(cls, queueType: Type) -> Union[Array[InvalidationQueueLockSummary]]:
    """
    Gets a summary of locked invalidation queue entries for an invalidation queue.  Results will be grouped by
    `computingNodeId, targetType, entryType`, and for BatchQueue/MapReduceQueue, `targetObjId`
    as well.
    
    @param queueType
           Queue type to get the summary for.
    
    @return The requested summary.
    """
        ...
    @classmethod
    def lock(cls, queueType: Type, grouping: str=None, skipTargetObjs: Array[InvalidationQueueTargetObj]=None, onlyTargetObjs: Array[InvalidationQueueTargetObj]=None) -> Union[LockedEntries]:
    """
    Locks and returns entries from a queue to be computed.
    
    @param queueType
              Queue type to get locked entries for.
    @param grouping
              Comma separated list of fields that entries will be grouped by targetObjId to send to compute.  If
              specified, the specified group fields will be applied in addition to targetTypeId.
              The implementation should therefore, lock/return all pending entries for any matching grouped entries
              that it returns.
    @param skipTargetObjs
              List of target objs to be skipped.  These will typically be mapReduce or batch jobs that are already at
              their maxConcurrency settings or cron jobs that are intended to be run on leader nodes while request is
              made from a task node.
    @param onlyTargetObjs
              List of specific target objs to be checked.  These will typically be cron jobs that are intended to be
              run on leader nodes while request is made from a leader node.
    
    @return entries that were locked.
    """
        ...
    @classmethod
    def locked(cls, queueType: Type, computingNodeId: str=None, lockedSinceNumMins: int=None, limit: int=None) -> Union[Array[LockInfo]]:
    """
    Gets information about existing locks that are currently held.
    
    @param queueType
              Queue type to get locks for.
    @param computingNodeId
              Computing node id to get locks for.  If null, locks for all computing nodes will be returned.
    @param lockedSinceNumMins
              Only locks that have been in place for at least this number of minutes will be returned.  -1 returns all
              locks.
    @param limit
              Maximum number of locks to return.
    
    @return a list of {@link LockInfo} entries containing the lock id and computing node for the lock.
    """
        ...
    @classmethod
    def unlock(cls, queueType: Type, lockIds: Array[str], checkForNullIds: bool=None) -> None:
    """
    Unlocks any entries in the queue that are locked by the specified locks.
    
    @param queueType
              Queue type that owns the locks.
    @param lockIds
              Ids of locks to unlock.  These ids will be those returned in {@link LockedEntries.id} from {@link lock}
              or returned from {@link locked}.
    @param checkForNullIds
              If true, check for null ids as they require special handling.  This will be true when called from
              {@link InvalidationQueue#recoverStuck} which may deal with malformed lock entries.
    """
        ...
    @classmethod
    def completed(cls, queueType: Type, lockedEntries: LockedEntries) -> None:
    """
    The entries were successfully completed.  The entries and locks should be removed.
    
    @param queueType
              Queue type the entries were for.
    @param lockedEntries
              Entries that were returned from {@link lock}.
    """
        ...
    @classmethod
    def setPriority(cls, queueType: Type, filter: InvalidationQueueFilterSpec, priority: int) -> int:
    """
    Sets the priority field for invalidation queue entries
    
    @param queueType
              Queue type that is having priorities set for.
    @param filter
             Filter identifying which entries to set the priority for.
    @param priority
             New priority value (lower value is higher priority).
    
    @return the number of entries updated.
    """
        ...
    @classmethod
    def setNodePool(cls, queueType: Type, filter: InvalidationQueueFilterSpec, nodePool: str=None) -> int:
    """
    Sets the hardwareProfile field for invalidation queue entries
    
    @param queueType
              Queue type that is having the hardware profile set for.
    @param filter
             Filter identifying which entries to set the hardware profile for.
    @param nodePool
             New nodePool value.
    
    @return the number of entries updated.
    """
        ...
    @classmethod
    def setRescheduleKey(cls, queueType: Type, filter: InvalidationQueueFilterSpec, rescheduleKey: str=None) -> int:
    """
    Sets the rescheduleKey field for invalidation queue entries
    
    @param queueType
              Queue type that is having the rescheduleKey set for.
    @param filter
             Filter identifying which entries to set the scheduleKey for.
    @param scheduleKey
             New scheduleKey value.
    
    @return the number of entries updated.
    """
        ...
    @classmethod
    def setStatus(cls, queueType: Type, entryId: str, status: str) -> None:
    """
    Sets the status of an entry in the queue if it exists and is a no-op if it doesn't.
    
    @param queueType
              QueueType that is having entry updated.
    @param entryId
              Id of the queue entry that will be updated.
    @param status
              New value for the status.
    
    @return true if the entry existed and was updated
    """
        ...
    @classmethod
    def setContext(cls, queueType: Type, entryId: str, context: Any=None) -> None:
    """
    Sets the context of an entry in the queue if it exists and is a no-op if it doesn't.
    
    @param queueType
              QueueType that is having entry updated.
    @param entryId
              Id of the queue entry that will be updated.
    @param context
              New value for the context.
    
    @return true if the entry existed and was updated
    """
        ...


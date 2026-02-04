#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.ChangeLogQueueEntry import ChangeLogQueueEntry
from c3.platform.FacadedDbChangeLogInfo import FacadedDbChangeLogInfo
from c3.platform.DbSourceOperInfo import DbSourceOperInfo
from c3.platform.DbEditList import DbEditList

# Python definitions for the C3 type FacadedDbChangeLogListener


class FacadedDbChangeLogListener(ChangeLogListener[FacadedDbChangeLogInfo], Value):
    """
    ChangeLogListener for db engine handling facaded deps
    
    @remarks this represents a made instance of FacadedDbChangeLogListener
    """
    def __init__(self) -> None: ...

    @classmethod
    def shouldLog(cls, typeRef: Type, sourceOperInfo: DbSourceOperInfo, changes: Array[DbEditList]=None) -> bool:
    """
    Called during invalidation to determine if a set of changes requires logging into the {@link ChangeLogQueue}.
    
    @param typeRef
           Type for the data changes.
    @param changes
           List of changed entries.  For collection operations (specified in {@link sourceOperInfo}) this will be
           empty.
    
    @param sourceOperInfo
           Various information about the source operation that caused the changes.
    
    @return true if the set of changes require logging into the {@link ChangeLogQueue}.
    """
        ...
    @classmethod
    def logInfo(cls, typeRef: Type, sourceOperInfo: DbSourceOperInfo, changes: Array[DbEditList]=None) -> Union[Map[str, FacadedDbChangeLogInfo]]:
    """
    Called during invalidation to compute the info to put in the change log entries for a set of changes that require
    logging into the {@link ChangeLogQueue}.
    
    @param typeRef
           Type for the data changes.
    @param changes
           List of changed entries.  For collection operations (specified in {@link sourceOperInfo}) this will be
           empty.
    
    @param sourceOperInfo
           Various information about the source operation that caused the changes.
    
    @return a map of info to put in the change log entries keyed by the source Obj id.  Note that the targetTypeId
            in the actual change log entry will be that of the incoming source.  Every entry in the map will be used
            to generate a single ChangeLogQueue entry.
    """
        ...
    @classmethod
    def process(cls, typeRef: Type, logs: Map[str, Array[FacadedDbChangeLogInfo]]) -> None:
    """
    Called during ChangeLogQueueCompute to process entries that were invalidated by the listener type.
    
    @param typeRef
           TypeRef of the original changes the log entry was for.
    @param logs
           Log info to process.  Each entry is an arry of info for changes logged for the same obj/id that is the key
           for that entry
    """
        ...
    @classmethod
    def mergeEntries(cls, entry1: ChangeLogQueueEntry, entry2: ChangeLogQueueEntry) -> Union[Array[ChangeLogQueueEntry]]:
    """
    Merges 2 potentially mergeable queue entries.
    
    @param entry1
           First entry to merge.
    @param entry2
           Second entry to merge.
    
    @return An array of entries.  If they were merged, the returned array size will be 1, otherwise it will be 2.
    """
        ...


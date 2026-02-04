#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type

# Python definitions for the C3 type MergeableInvalidationQueue

ET = TypeVar('ET')

class MergeableInvalidationQueue(Generic[ET], Value):
    """
    @remarks this represents a made instance of MergeableInvalidationQueue
    """
    def __init__(self) -> None: ...

    @classmethod
    def mergeContexts(cls, targetType: Type=None, entries: Array[ET]=None) -> Union[Array[ET]]:
    """
    Invalidation queue engine calls this method to possibly merge pending invalidation queue entries.
    
    This function should be claimed by individual InvalidationQueue types such as CalcFieldsQueue.
    """
        ...


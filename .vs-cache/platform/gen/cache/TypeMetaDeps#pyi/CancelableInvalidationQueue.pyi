#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CancelableInvalidationQueueEntry import CancelableInvalidationQueueEntry

# Python definitions for the C3 type CancelableInvalidationQueue


class CancelableInvalidationQueue(Value):
    """
    @remarks this represents a made instance of CancelableInvalidationQueue
    """
    def __init__(self) -> None: ...

    @classmethod
    def cancel(cls, entries: Array[CancelableInvalidationQueueEntry[Any]]) -> None:
    """
    Attempts to cancel any currently running actions for the specified queue entries and removes the entries.
    
    @param entries
           queue entries to remove
    """
        ...


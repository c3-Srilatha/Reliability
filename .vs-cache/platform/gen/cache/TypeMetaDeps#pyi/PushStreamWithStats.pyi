#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ActionStats import ActionStats
from c3.platform.PushStream import PushStream
from c3.platform.ObjError import ObjError
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.ObjStats import ObjStats

# Python definitions for the C3 type PushStreamWithStats

V = TypeVar('V')

class PushStreamWithStats(Generic[V], PushStream[V], Value):
    """
    Obj that stores the instance of a push stream of data values.  It is parameterized by the individual value type. As
    data is written into this stream various statistics and possible errors are accumulated along the way.
    
    @remarks this represents a made instance of PushStreamWithStats
    """
    
    onClose: Optional[Callable[[Union[PushStreamWithStats[V]]]]]=None
    """
    Callback lambda on close of this stream
    """
    def __init__(self, onClose: Optional[Callable[[Union[PushStreamWithStats[V]]]]]=None) -> None: ...

    def close(self) -> None:
    """
    Deallocates any potential resource and calls onClose if provided.
    """
        ...
    def doClose(self) -> None:
    """
    Callback on stream close.
    """
        ...
    def closed(self) -> bool:
    """
    @returns true if this Closable resource has been closed
    """
        ...
    def write(self, value: V) -> None:
    """
    Pushes the next single value into stream. Throws exception if stream is closed.
    """
        ...
    def writeBatch(self, value: Array[V]) -> None:
    """
    Pushes the next batch of values into stream. Throws exception if stream is closed.
    """
        ...
    def writeStream(self, value: Stream[V]) -> None:
    """
    Pushes the next batch of values into stream. Throws exception if stream is closed.
    """
        ...
    @classmethod
    def create(cls, onWrite: Callable[[Union[V], Union[PushStreamWithStats[V]]]], onClose: Callable[[Union[PushStreamWithStats[V]]]]=None) -> PushStreamWithStats[V]:
    """
    Creates new push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBuffered(cls, onWrite: Callable[[Union[Array[V]], Union[PushStreamWithStats[V]]]], onClose: Callable[[Union[PushStreamWithStats[V]]]]=None, bufferSize: int=None) -> PushStream[V]:
    """
    Creates new buffered push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBufferedWithStats(cls, onWrite: Callable[[Union[V], Union[PushStreamWithStats[V]]], Union[ObjStats]], onClose: Callable[[Union[PushStreamWithStats[V]]]]=None, bufferSize: int=None) -> PushStreamWithStats[V]:
    """
    Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
    buffer.
    """
        ...
    def stats(self) -> ActionStats:
    """
    @return statistics for this stream operations.
    """
        ...
    def errs(self) -> Array[ObjError]:
    """
    @return any possible errors happened during this steam operations.
    """
        ...


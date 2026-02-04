#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.LambdaPushStream import LambdaPushStream
from c3.platform.PushStream import PushStream
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.ObjStats import ObjStats

# Python definitions for the C3 type LambdaPushStream

V = TypeVar('V')

class LambdaPushStream(Generic[V], PushStream[V], Value):
    """
    C3 Type for implementing lambda based push stream.
    
    @remarks this represents a made instance of LambdaPushStream
    """
    
    onClose: Optional[Callable[[Union[LambdaPushStream[V]]]]]=None
    """
    Callback lambda on close of this stream
    """

    onWrite: Optional[Callable[[Union[V], Union[PushStream[V]]]]]=None
    """
    callback lambda on write to this stream
    """
    def __init__(self, onClose: Optional[Callable[[Union[LambdaPushStream[V]]]]]=None, onWrite: Optional[Callable[[Union[V], Union[PushStream[V]]]]]=None) -> None: ...

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
    def create(cls, onWrite: Callable[[Union[V], Union[LambdaPushStream[V]]]], onClose: Callable[[Union[LambdaPushStream[V]]]]=None) -> LambdaPushStream[V]:
    """
    Creates new push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBuffered(cls, onWrite: Callable[[Union[Array[V]], Union[LambdaPushStream[V]]]], onClose: Callable[[Union[LambdaPushStream[V]]]]=None, bufferSize: int=None) -> PushStream[V]:
    """
    Creates new buffered push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBufferedWithStats(cls, onWrite: Callable[[Union[V], Union[LambdaPushStream[V]]], Union[ObjStats]], onClose: Callable[[Union[LambdaPushStream[V]]]]=None, bufferSize: int=None) -> PushStreamWithStats[V]:
    """
    Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
    buffer.
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.PushStream import PushStream
from c3.platform.ObjStats import ObjStats
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.EventStream.PushStream import EventStream.PushStream

# Python definitions for the C3 type EventStream.PushStream

E = TypeVar('E')

class PushStream(Generic[E], LambdaPushStream[E], Value):
    """
    Additional fields from {@link EventStream} bundled with a {@link LambdaPushStream}.
    
    @remarks this represents a made instance of EventStream.PushStream
    """
    
    onClose: Optional[Callable[[Union[EventStream.PushStream[E]]]]]=None
    """
    Callback lambda on close of this stream
    """

    onWrite: Optional[Callable[[Union[E], Union[PushStream[E]]]]]=None
    """
    callback lambda on write to this stream
    """

    clientId: Optional[str]=None

    eventStreamId: Optional[str]=None
    def __init__(self, onClose: Optional[Callable[[Union[EventStream.PushStream[E]]]]]=None, onWrite: Optional[Callable[[Union[E], Union[PushStream[E]]]]]=None, clientId: Optional[str]=None, eventStreamId: Optional[str]=None) -> None: ...

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
    def write(self, value: E) -> None:
    """
    Pushes the next single value into stream. Throws exception if stream is closed.
    """
        ...
    def writeBatch(self, value: Array[E]) -> None:
    """
    Pushes the next batch of values into stream. Throws exception if stream is closed.
    """
        ...
    def writeStream(self, value: Stream[E]) -> None:
    """
    Pushes the next batch of values into stream. Throws exception if stream is closed.
    """
        ...
    @classmethod
    def create(cls, onWrite: Callable[[Union[E], Union[EventStream.PushStream[E]]]], onClose: Callable[[Union[EventStream.PushStream[E]]]]=None) -> EventStream.PushStream[E]:
    """
    Creates new push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBuffered(cls, onWrite: Callable[[Union[Array[E]], Union[EventStream.PushStream[E]]]], onClose: Callable[[Union[EventStream.PushStream[E]]]]=None, bufferSize: int=None) -> PushStream[E]:
    """
    Creates new buffered push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBufferedWithStats(cls, onWrite: Callable[[Union[E], Union[EventStream.PushStream[E]]], Union[ObjStats]], onClose: Callable[[Union[EventStream.PushStream[E]]]]=None, bufferSize: int=None) -> PushStreamWithStats[E]:
    """
    Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
    buffer.
    """
        ...


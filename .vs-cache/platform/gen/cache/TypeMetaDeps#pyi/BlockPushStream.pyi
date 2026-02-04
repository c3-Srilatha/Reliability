#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.BlockPushStream import BlockPushStream
from c3.platform.PushStream import PushStream
from c3.platform.ObjStats import ObjStats
from c3.platform.PushStreamWithStats import PushStreamWithStats

# Python definitions for the C3 type BlockPushStream

B = TypeVar('B')
E = TypeVar('E')

class BlockPushStream(Generic[B, E], PushStream[E], Value):
    """
    A block push stream wraps a raw push stream and provides larger block writes to process
    the low-level stream more efficiently.
    
    @var E the fundamental values of the stream
    @var B the aggregate (block) value
    
    @remarks this represents a made instance of BlockPushStream
    """
    
    onClose: Optional[Callable[[Union[BlockPushStream[E, B]]]]]=None
    """
    Callback lambda on close of this stream
    """

    DEFAULT_BLOCK_SIZE: Optional[int]=None
    """
    Default size of the block when writing
    """
    def __init__(self, onClose: Optional[Callable[[Union[BlockPushStream[E, B]]]]]=None, DEFAULT_BLOCK_SIZE: Optional[int]=None) -> None: ...

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
    def create(cls, onWrite: Callable[[Union[E], Union[BlockPushStream[E, B]]]], onClose: Callable[[Union[BlockPushStream[E, B]]]]=None) -> BlockPushStream[E, B]:
    """
    Creates new push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBuffered(cls, onWrite: Callable[[Union[Array[E]], Union[BlockPushStream[E, B]]]], onClose: Callable[[Union[BlockPushStream[E, B]]]]=None, bufferSize: int=None) -> PushStream[E]:
    """
    Creates new buffered push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBufferedWithStats(cls, onWrite: Callable[[Union[E], Union[BlockPushStream[E, B]]], Union[ObjStats]], onClose: Callable[[Union[BlockPushStream[E, B]]]]=None, bufferSize: int=None) -> PushStreamWithStats[E]:
    """
    Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
    buffer.
    """
        ...
    @classmethod
    def createBlock(cls, onWrite: Callable[[Union[B], Union[BlockPushStream[E, B]]]], onClose: Callable[[Union[BlockPushStream[E, B]]]]=None, blockSize: int='1024') -> BlockPushStream[E, B]:
    """
    Creates new block push stream based on logic in provided callbacks.
    """
        ...
    def writeBlock(self, blockValue: B) -> None:
    """
    Write the next block of values into push stream.
    
    This is generally the more efficient way to process the push stream than using
    the {@link write} methods.
    """
        ...


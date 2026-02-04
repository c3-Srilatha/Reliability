#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ObjStats import ObjStats
from c3.platform.PushStream import PushStream
from c3.platform.PushStreamWithStats import PushStreamWithStats

# Python definitions for the C3 type CharPushStream


class CharPushStream(BlockPushStream[int32, string], Value):
    """
    The specialized CharacterStream type provides extra support for streams of characters.
    In particular, they can be processed as string blocks instead of one character at a time.
    
    Note that characters generally do not correspond to bytes, so the number of characters
    will *not* be the same as the number of bytes processed. For example in UTF-8 encoding
    each character requires from 1 to 6 bytes.
    
    @remarks this represents a made instance of CharPushStream
    """
    
    onClose: Optional[Callable[[Union[CharPushStream]]]]=None
    """
    Callback lambda on close of this stream
    """

    DEFAULT_BLOCK_SIZE: Optional[int]=None
    """
    Default size of the block when writing
    """
    def __init__(self, onClose: Optional[Callable[[Union[CharPushStream]]]]=None, DEFAULT_BLOCK_SIZE: Optional[int]=None) -> None: ...

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
    def write(self, value: int) -> None:
    """
    Pushes the next single value into stream. Throws exception if stream is closed.
    """
        ...
    def writeBatch(self, value: Array[int]) -> None:
    """
    Pushes the next batch of values into stream. Throws exception if stream is closed.
    """
        ...
    def writeStream(self, value: Stream[int]) -> None:
    """
    Pushes the next batch of values into stream. Throws exception if stream is closed.
    """
        ...
    @classmethod
    def create(cls, onWrite: Callable[[Union[int], Union[CharPushStream]]], onClose: Callable[[Union[CharPushStream]]]=None) -> CharPushStream:
    """
    Creates new push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBuffered(cls, onWrite: Callable[[Union[Array[int]], Union[CharPushStream]]], onClose: Callable[[Union[CharPushStream]]]=None, bufferSize: int=None) -> PushStream[int]:
    """
    Creates new buffered push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBufferedWithStats(cls, onWrite: Callable[[Union[int], Union[CharPushStream]], Union[ObjStats]], onClose: Callable[[Union[CharPushStream]]]=None, bufferSize: int=None) -> PushStreamWithStats[int]:
    """
    Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
    buffer.
    """
        ...
    @classmethod
    def createBlock(cls, onWrite: Callable[[Union[str], Union[CharPushStream]]], onClose: Callable[[Union[CharPushStream]]]=None, blockSize: int='1024') -> CharPushStream:
    """
    Creates new block push stream based on logic in provided callbacks.
    """
        ...
    def writeBlock(self, blockValue: str) -> None:
    """
    Write the next block of values into push stream.
    
    This is generally the more efficient way to process the push stream than using
    the {@link write} methods.
    """
        ...


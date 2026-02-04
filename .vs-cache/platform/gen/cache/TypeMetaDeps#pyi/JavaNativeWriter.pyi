#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ObjStats import ObjStats
from c3.platform.PushStream import PushStream
from c3.platform.PushStreamWithStats import PushStreamWithStats

# Python definitions for the C3 type JavaNativeWriter


class JavaNativeWriter(CharPushStream, Value):
    """
    Native character push stream based on a Java Writer.
    
    @remarks this represents a made instance of JavaNativeWriter
    """
    
    onClose: Optional[Callable[[Union[JavaNativeWriter]]]]=None
    """
    Callback lambda on close of this stream
    """

    DEFAULT_BLOCK_SIZE: Optional[int]=None
    """
    Default size of the block when writing
    """

    writer: Optional[Any]=None
    def __init__(self, onClose: Optional[Callable[[Union[JavaNativeWriter]]]]=None, DEFAULT_BLOCK_SIZE: Optional[int]=None, writer: Optional[Any]=None) -> None: ...

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
    def create(cls, onWrite: Callable[[Union[int], Union[JavaNativeWriter]]], onClose: Callable[[Union[JavaNativeWriter]]]=None) -> JavaNativeWriter:
    """
    Creates new push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBuffered(cls, onWrite: Callable[[Union[Array[int]], Union[JavaNativeWriter]]], onClose: Callable[[Union[JavaNativeWriter]]]=None, bufferSize: int=None) -> PushStream[int]:
    """
    Creates new buffered push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBufferedWithStats(cls, onWrite: Callable[[Union[int], Union[JavaNativeWriter]], Union[ObjStats]], onClose: Callable[[Union[JavaNativeWriter]]]=None, bufferSize: int=None) -> PushStreamWithStats[int]:
    """
    Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
    buffer.
    """
        ...
    @classmethod
    def createBlock(cls, onWrite: Callable[[Union[str], Union[JavaNativeWriter]]], onClose: Callable[[Union[JavaNativeWriter]]]=None, blockSize: int='1024') -> JavaNativeWriter:
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
    @classmethod
    def make(cls, writer: Any, onClose: Callable[[Union[JavaNativeWriter]]]=None) -> JavaNativeWriter:
        ...


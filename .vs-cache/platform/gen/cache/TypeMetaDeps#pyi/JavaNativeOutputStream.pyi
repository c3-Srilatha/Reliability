#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CharPushStream import CharPushStream
from c3.platform.PushStream import PushStream
from c3.platform.ObjStats import ObjStats
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.BytePushStream import BytePushStream

# Python definitions for the C3 type JavaNativeOutputStream


class JavaNativeOutputStream(BytePushStream, Value):
    """
    Native byte push stream based on a Java output stream.
    
    @remarks this represents a made instance of JavaNativeOutputStream
    """
    
    onClose: Optional[Callable[[Union[JavaNativeOutputStream]]]]=None
    """
    Callback lambda on close of this stream
    """

    DEFAULT_BLOCK_SIZE: Optional[int]=None
    """
    Default size of the block when writing
    """

    outputStream: Optional[Any]=None
    def __init__(self, onClose: Optional[Callable[[Union[JavaNativeOutputStream]]]]=None, DEFAULT_BLOCK_SIZE: Optional[int]=None, outputStream: Optional[Any]=None) -> None: ...

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
    def create(cls, onWrite: Callable[[Union[int], Union[JavaNativeOutputStream]]], onClose: Callable[[Union[JavaNativeOutputStream]]]=None) -> JavaNativeOutputStream:
    """
    Creates new push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBuffered(cls, onWrite: Callable[[Union[Array[int]], Union[JavaNativeOutputStream]]], onClose: Callable[[Union[JavaNativeOutputStream]]]=None, bufferSize: int=None) -> PushStream[int]:
    """
    Creates new buffered push stream based on logic in provided callbacks.
    """
        ...
    @classmethod
    def createBufferedWithStats(cls, onWrite: Callable[[Union[int], Union[JavaNativeOutputStream]], Union[ObjStats]], onClose: Callable[[Union[JavaNativeOutputStream]]]=None, bufferSize: int=None) -> PushStreamWithStats[int]:
    """
    Creates new buffered push stream based on logic in provided callbacks and accumulates stats on after write of a
    buffer.
    """
        ...
    @classmethod
    def createBlock(cls, onWrite: Callable[[Union[any], Union[JavaNativeOutputStream]]], onClose: Callable[[Union[JavaNativeOutputStream]]]=None, blockSize: int='1024') -> JavaNativeOutputStream:
    """
    Creates new block push stream based on logic in provided callbacks.
    """
        ...
    def writeBlock(self, blockValue: any) -> None:
    """
    Write the next block of values into push stream.
    
    This is generally the more efficient way to process the push stream than using
    the {@link write} methods.
    """
        ...
    @classmethod
    def fromNative(cls, out: Any) -> BytePushStream:
    """
    Creates a new instance based on the native output/write stream:
     - Java: `java.io.OutputStream`
     - JavaScript: `WritableStream`
    """
        ...
    def compress(self, contentEncoding: str) -> BytePushStream:
    """
    Creates new byte push stream that will compress data on write.
    """
        ...
    def toCharPushStream(self, contentType: str=None, contentEncoding: str=None) -> CharPushStream:
    """
    @return character push stream on top of this byte stream.
    """
        ...
    def asOutputStream(self, failIfNot: bool=None) -> Union[Any]:
    """
    @return java.io.OutputStream if this push stream is backed by it.
    """
        ...
    @classmethod
    def make(cls, outputStream: Any, onClose: Callable[[Union[JavaNativeOutputStream]]]=None) -> JavaNativeOutputStream:
        ...


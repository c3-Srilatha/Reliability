#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ContentStream import ContentStream
from c3.platform.HttpRequest import HttpRequest
from c3.platform.HttpResponse import HttpResponse
from c3.platform.BlockStream import BlockStream
from c3.platform.CharStream import CharStream
from c3.platform.BytePushStream import BytePushStream

# Python definitions for the C3 type ByteStream


class ByteStream(BlockStream[byte, binary], Value):
    """
    The specialized BinaryStream type provides extra support for streams of bytes.
    In particular, they can be processed as binary blocks instead of one byte at a time.
    
    @remarks this represents a made instance of ByteStream
    """
    
    onClose: Optional[Callable[[Union[ByteStream]]]]=None
    """
    Callback lambda on close of this stream
    """
    def __init__(self, onClose: Optional[Callable[[Union[ByteStream]]]]=None) -> None: ...

    @classmethod
    def fromHttpRequest(cls, req: HttpRequest) -> ByteStream:
    """
    Constructs instance from given HTTP request. Expectation is that the request in not immediately consumed, and
    content will eventually be read in a streaming manner by the instance.
    """
        ...
    def toHttpResponse(self, req: HttpRequest) -> HttpResponse:
    """
    Constructs instance of HTTP response from this instances. Expectation is that the response in not immediately
    produced in memory, and HTTP response body will eventually be written in a streaming manner by the instance.
    """
        ...
    def close(self) -> None:
    """
    Deallocates any potential resource and calls onClose if provided.
    """
        ...
    def doClose(self) -> None:
    """
    Discard any unconsumed items and release underlying resources.
    """
        ...
    def closed(self) -> bool:
    """
    @returns true if this Closable resource has been closed
    """
        ...
    def readBlock(self, offset: int=None, len: int=None) -> Union[any]:
    """
    Consume the next block of values. Throws exception if stream is exhausted or closed.
    This is generally the more efficient way to process the stream than using the {@link next} method.
    
    Correct usage is to only call `readBlock` after #hasNext returns true:
    ```py
    while s.hasNext():
       process(s.readBlock(0, 1024))
    ```
    
    The offset is relative to the current position, so passing a positive value is equivalent to calling #skip.
    
    @param offset
              offset from the current position; defaults to 0.
    @param len
              number of values to read; defaults to entire stream length.
    
    @return block of values up to the specified length or the size of the stream whichever is smaller
    """
        ...
    def hasNext(self) -> bool:
    """
    Whether or not there is at least one more value to be consumed.
    """
        ...
    def next(self) -> Union[int]:
    """
    Consume the next single value. Throws exception if stream is exhausted or closed.
    
    Correct usage is only to only call `next` after #hasNext returns true:
    after #hasNext returns true:
    ```py
    while s.hasNext():
       process(s.next())
    ```
    """
        ...
    def skip(self, n: int) -> int:
    """
    Skip over the specified number of items.  If the the stream ends before the specified number of items have been
    skipped, the return value will be smaller than the argument.
    
    @return number of items skipped
    """
        ...
    def mapToSame(self, mapper: Callable[[Union[int]], Union[int]]) -> ByteStream:
    """
    Return another stream on top of this one that allows modification of each single value via a lambda and returns a
    new stream of those modified values. The current stream will be closed once the returned stream is consumed.
    
    @param mapper take each value and transform it
    """
        ...
    @overload
    def mapBlocksToSame(self, mapper: Callable[[any], Union[any]]) -> ByteStream:
    """
    Return another stream on top of this one that allows modification of each block via a lambda and returns a new
    stream of those modified blocks. The current stream will be closed once the returned stream is consumed.
    Blocks of a default size, such as 10 KB, will be read.
    
    @param mapper take each block and transform it
    """
        ...
    @overload
    def mapBlocksToSame(self, blockSize: int, mapper: Callable[[any], Union[any]]) -> ByteStream:
    """
    Return another stream on top of this one that allows modification of each block via a lambda and returns a new
    stream of those modified blocks. The current stream will be closed once the returned stream is consumed.
    Blocks of the specifid size will be read.
    
    @param blockSize the maximum size of input blocks to read
    @param mapper take each block and transform it
    """
        ...
    def concat(self, other: BlockStream[int, any]) -> ByteStream:
    """
    Return another stream which combines this one and the argument streams. The current and specified streams will be
    closed once the returned stream is consumed.
    """
        ...
    def readString(self, contentType: str=None, contentEncoding: str=None) -> str:
    """
    @return string from these bytes based on input charset and compression type.
    """
        ...
    def drain(self, target: BytePushStream, doNotCloseTarget: bool=None) -> None:
    """
    Drains this stream into a byte push stream and closes this stream, even if there is any exception. Target push
    stream will be closed based on doNotCloseTarget.
    """
        ...
    def compress(self, out: BytePushStream, contentEncoding: str) -> None:
    """
    Compresses the byte stream into out and closes both streams; if contentEncoding is 'identity' doesn't compress.
    """
        ...
    def uncompress(self, contentEncoding: str) -> ByteStream:
    """
    Uncompresses the stream; if contentEncoding is 'identity' returns the same stream. It's important to make sure
    that resulting stream is closed so all the allocated resources are released properly.
    """
        ...
    def transcode(self, contentType: str, contentEncoding: str, out: BytePushStream, outContentType: str, outContentEncoding: str) -> None:
    """
    Transcodes this stream from contentType and contentEncoding into outContentType and outContentEncoding and closes
    both streams.
    """
        ...
    def toCharStream(self, contentType: str=None, contentEncoding: str=None) -> CharStream:
    """
    @return character stream on top of this byte stream. It's important to make sure that resulting
    stream is closed so all the allocated resources are released properly.
    """
        ...
    def toContentStream(self, contentType: str=None, contentEncoding: str=None) -> ContentStream:
    """
    @return a {@Link ContentStream} on top of this byte stream. It's important to make sure that resulting
    stream is closed so all the allocated resources are released properly.
    """
        ...
    def asInputStream(self, failIfNot: bool=None) -> Union[Any]:
    """
    @return java.io.InputStream if this stream is backed by it.
    """
        ...
    @classmethod
    def fromBinary(cls, value: any) -> ByteStream:
    """
    @return new stream from a binary value.
    """
        ...
    @classmethod
    def fromBytes(cls, value: Stream[int]) -> ByteStream:
    """
    @return new stream from a binary value.
    """
        ...
    @classmethod
    def fromNettyByteBuf(cls, byteBuf: Any=None) -> Union[ByteStream]:
    """
    @return new stream from netty ByteBuf (https://netty.io/4.0/api/io/netty/buffer/ByteBuf.html)
    """
        ...
    @classmethod
    def fromNative(cls, inputStream: Any) -> ByteStream:
    """
    Creates a new instance based on the native input/read stream:
     - Java: `java.io.InputStream`
     - JavaScript: [iterable/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
    """
        ...
    @classmethod
    def fromText(cls, value: str=None, charset: str=None) -> Union[ByteStream]:
    """
    @return new stream from a text value.
    """
        ...


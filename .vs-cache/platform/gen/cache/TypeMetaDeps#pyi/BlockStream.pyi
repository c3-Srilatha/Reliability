#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.BlockStream import BlockStream
from c3.platform.HttpRequest import HttpRequest
from c3.platform.HttpResponse import HttpResponse

# Python definitions for the C3 type BlockStream

B = TypeVar('B')
E = TypeVar('E')

class BlockStream(Generic[B, E], Streamable, Closable, Value):
    """
    A block stream wraps a raw stream and provides larger block reads to process the low-level stream more efficiently.
    
    Like other streams, reading should only be after #hasNext returns true as an exception will be thrown if the
    stream is exhausted or closed:
    ```py
    while s.hasNext():
       process(s.readBlock(0, 1024))
    ```
    
    @var E the fundamental values of the stream
    @var B the aggregate (block) values
    
    @remarks this represents a made instance of BlockStream
    """
    
    onClose: Optional[Callable[[Union[BlockStream[E, B]]]]]=None
    """
    Callback lambda on close of this stream
    """
    def __init__(self, onClose: Optional[Callable[[Union[BlockStream[E, B]]]]]=None) -> None: ...

    @classmethod
    def fromHttpRequest(cls, req: HttpRequest) -> BlockStream[E, B]:
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
    def readBlock(self, offset: int=None, len: int=None) -> Union[B]:
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
    def next(self) -> Union[E]:
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
    def mapToSame(self, mapper: Callable[[Union[E]], Union[E]]) -> BlockStream[E, B]:
    """
    Return another stream on top of this one that allows modification of each single value via a lambda and returns a
    new stream of those modified values. The current stream will be closed once the returned stream is consumed.
    
    @param mapper take each value and transform it
    """
        ...
    @overload
    def mapBlocksToSame(self, mapper: Callable[[B], Union[B]]) -> BlockStream[E, B]:
    """
    Return another stream on top of this one that allows modification of each block via a lambda and returns a new
    stream of those modified blocks. The current stream will be closed once the returned stream is consumed.
    Blocks of a default size, such as 10 KB, will be read.
    
    @param mapper take each block and transform it
    """
        ...
    @overload
    def mapBlocksToSame(self, blockSize: int, mapper: Callable[[B], Union[B]]) -> BlockStream[E, B]:
    """
    Return another stream on top of this one that allows modification of each block via a lambda and returns a new
    stream of those modified blocks. The current stream will be closed once the returned stream is consumed.
    Blocks of the specifid size will be read.
    
    @param blockSize the maximum size of input blocks to read
    @param mapper take each block and transform it
    """
        ...
    def concat(self, other: BlockStream[E, B]) -> BlockStream[E, B]:
    """
    Return another stream which combines this one and the argument streams. The current and specified streams will be
    closed once the returned stream is consumed.
    """
        ...


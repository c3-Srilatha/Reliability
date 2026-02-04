#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ContentStream import ContentStream
from c3.platform.ByteStream import ByteStream
from c3.platform.HttpRequest import HttpRequest
from c3.platform.HttpResponse import HttpResponse
from c3.platform.BlockStream import BlockStream

# Python definitions for the C3 type CharStream


class CharStream(BlockStream[int32, string], Value):
    """
    The specialized CharacterStream type provides extra support for streams of characters.
    In particular, they can be processed as string blocks instead of one character at a time.
    
    Note that characters generally do not correspond to bytes, so the number of characters
    will *not* be the same as the number of bytes processed. For example in UTF-8 encoding
    each character requires from 1 to 6 bytes.
    
    Also, not all characters fit in a single [UTF-16](https://en.wikipedia.org/wiki/UTF-16) _code unit_ so the
    character code point can be larger than 2¹⁶ (up to U+10FFFF, 1,114,111₁₀).
    
    These methods will not break apart characters. For example #skip will skip over both `char` (code unit) values in a
    surrogate pair (UTF-16 encoding) and #readString will not return the first half of a pair as the last value in the
    string.
    
    @remarks this represents a made instance of CharStream
    """
    
    onClose: Optional[Callable[[Union[CharStream]]]]=None
    """
    Callback lambda on close of this stream
    """
    def __init__(self, onClose: Optional[Callable[[Union[CharStream]]]]=None) -> None: ...

    @classmethod
    def fromHttpRequest(cls, req: HttpRequest) -> CharStream:
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
    def readBlock(self, offset: int=None, len: int=None) -> Union[str]:
    """
    @inheritdoc
    
    Reads the content as string. The returned length may be shorter or _longer_ than the requested length either if
    the end is reached or to avoid returning a broken character (the first value of a surrogate pair). In particular,
    reading with a length of 1 will return a string of length 2 to avoid breaking the code units apart.
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
    def mapToSame(self, mapper: Callable[[Union[int]], Union[int]]) -> CharStream:
    """
    Return another stream on top of this one that allows modification of each single value via a lambda and returns a
    new stream of those modified values. The current stream will be closed once the returned stream is consumed.
    
    @param mapper take each value and transform it
    """
        ...
    @overload
    def mapBlocksToSame(self, mapper: Callable[[str], Union[str]]) -> CharStream:
    """
    Return another stream on top of this one that allows modification of each block via a lambda and returns a new
    stream of those modified blocks. The current stream will be closed once the returned stream is consumed.
    Blocks of a default size, such as 10 KB, will be read.
    
    @param mapper take each block and transform it
    """
        ...
    @overload
    def mapBlocksToSame(self, blockSize: int, mapper: Callable[[str], Union[str]]) -> CharStream:
    """
    Return another stream on top of this one that allows modification of each block via a lambda and returns a new
    stream of those modified blocks. The current stream will be closed once the returned stream is consumed.
    Blocks of the specifid size will be read.
    
    @param blockSize the maximum size of input blocks to read
    @param mapper take each block and transform it
    """
        ...
    def concat(self, other: BlockStream[int, str]) -> CharStream:
    """
    Return another stream which combines this one and the argument streams. The current and specified streams will be
    closed once the returned stream is consumed.
    """
        ...
    def readString(self, offset: int=None, len: int=None) -> Union[str]:
    """
    Reads the content as string. This is the same as #readBlock. The returned length may be shorter or longer than the
    requested length either if the end is reached or to avoid returning a broken character (the first value of a
    surrogate pair). In particular, reading with a length of 1 will return a string of length 2 to avoid breaking the
    code units apart.
    
    @param offset
              offset from current position; defaults to 0.
    @param len
              maximum length of the string; defaults to entire file size.
    @return the string content.
    """
        ...
    def toByteStream(self, charset: str=None) -> ByteStream:
    """
    @return full content of the stream as binary. It's important to make sure that resulting
            stream is closed so all the allocated resources are released properly.
    """
        ...
    def toContentStream(self, contentType: str=None, contentEncoding: str=None) -> ContentStream:
    """
    @return full content of the stream as content stream. It's important to make sure that resulting
            Content is consumed / closed so all the allocated resources are released properly.
    """
        ...
    @classmethod
    def fromText(cls, s: str) -> CharStream:
    """
    @return new stream from a string value. It's important to make sure that resulting
    stream is closed so all the allocated resources are released properly.
    """
        ...
    @classmethod
    def fromStrings(cls, s: Stream[Union[str]]) -> CharStream:
    """
    @return new stream from a string value. It's important to make sure that resulting
    stream is closed so all the allocated resources are released properly.
    """
        ...
    @classmethod
    def fromLines(cls, lines: Stream[Union[str]], separator: str=None) -> CharStream:
    """
    @return new stream from string lines by concatenating them with optional separator.
    """
        ...
    @overload
    def mapLines(self, mapper: Callable[[Union[str]], Union[str]]) -> CharStream:
    """
    Return a new stream from this one by mapping individual lines using the specified mapper. The newline character(s)
    are _not_ included in the line passed to the mapper.
    
    Note that this normalizes line endings to a single LF (ASCII 10). The output will have the same number of lines as
    the input (unless the mapper returns an updated line containing a newline).
    """
        ...
    @overload
    def mapLines(self, maxLength: int, mapper: Callable[[Union[str], int], Union[str]]) -> CharStream:
    """
    Return a new stream from this one by mapping individual lines using the specified mapper. The newline character(s)
    are _not_ included in the line passed to the mapper.
    
    In order to avoid issues with very long lines (such as JSON files), the maximum length of a block must be
    specified and if any lines are longer than this, the line is mapped in multiple pieces. In this case,
    successive calls to the mapper will have the same line number.
    
    Note that this normalizes line endings to a single LF (ASCII 10), but does not add a newline if lines are broken
    due to exceeding maxLength. Thus the output will have the same number of lines as the input (unless the mapper
    returns an updated line containing a newline).
    
    @param maxLength maximum length of a chunk to return
    @param mapper lambda that returns content to replace this particular line/chunk
    """
        ...
    def filterChars(self, filter: Callable[[int], bool]=None) -> CharStream:
    """
    @return a new stream that rejects individual characters (without context). It's important to make sure the
    resulting stream is closed so all the allocated resources are released properly.
    """
        ...
    def javaNativeReader(self) -> Union[Any]:
    """
    @return Java java.io.Reader of this stream
    """
        ...
    def readLines(self) -> Union[Stream[str]]:
    """
    Reads the content as stream of strings, one per line.
    """
        ...
    def indent(self, n: int) -> Union[CharStream]:
    """
    Produce a new stream with each line prefixed by the specified number of spaces.
    
    @param n number of spaces to insert at the beginning in each line
    """
        ...
    def withMaxLineLength(self, len: int) -> Union[CharStream]:
    """
    Produce a new stream with each line truncated to the specified length. If a line is truncated, the last character
    will be a Unicode elipses ("…" U+2026).
    
    @param len maximum line length (must be positive)
    """
        ...
    @classmethod
    def fromNative(cls, reader: Any) -> CharStream:
    """
    Creates a new instance based on the native text reader:
     - Java: `java.io.Reader`
     - JavaScript: [iterable/iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
    """
        ...


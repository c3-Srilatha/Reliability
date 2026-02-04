#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.Pkg import Pkg

# Python definitions for the C3 type Bin


class Bin(Value):
    """
    Helper class for binary data, implemented on `ByteBuffer` for Java, `ArrayBuffer` for JavaScript and `bytes` for
    Python.
    
    @remarks this represents a made instance of Bin
    """
    def __init__(self) -> None: ...

    @overload
    @classmethod
    def myType(cls) -> Union[Type]:
        ...
    @overload
    @classmethod
    def myType(cls, pkg: Pkg) -> Union[Type]:
        ...
    @classmethod
    def concat(cls, a: any, b: any) -> Union[any]:
    """
    Return a binary value that contains the contents of both specified values.
    """
        ...
    @classmethod
    def fromBase64(cls, s: str) -> Union[any]:
    """
    Create a binary value from a Base64 encoded string. This will throw an error if the string is invalid.
    
    @see Base64
    """
        ...
    @classmethod
    def fromHex(cls, s: str) -> Union[any]:
    """
    Create a binary value from a hexadecimal encoded string. Each pair of characters represents one byte in the
    result. If the string is empty, this will return null, and will throw an error if the string is invalid.
    """
        ...
    @classmethod
    def isEmpty(cls, b: any) -> bool:
    """
    Check whether a binary value is null or has no content.
    """
        ...
    @classmethod
    def isSame(cls, a: any, b: any) -> bool:
    """
    Check whether two binary values have the same content.
    """
        ...
    @classmethod
    def readUtf8String(cls, b: any) -> Union[str]:
    """
    Read the contents of a binary as UTF-8 encoded text.
    """
        ...
    @classmethod
    def size(cls, b: any) -> int:
    """
    Get the size of a binary value in bytes. This will return 0 for a null value.
    """
        ...
    @classmethod
    def wrap(cls, s: str) -> Union[any]:
    """
    Convert a string to a UTF-8 encoded binary value.
    """
        ...
    @classmethod
    def zeroes(cls, size: int) -> Union[any]:
    """
    Produce a binary value containing the specified number of zero bytes. The return value will never be null,
    but will be "empty" if the size is `0`.
    
    @param size
           number of bytes; must be non-negative
    """
        ...
    @overload
    @classmethod
    def fromBytes(cls, bytes: Array[int], offset: int, len: int) -> Union[any]:
        ...
    @overload
    @classmethod
    def fromBytes(cls, bytes: Array[int], offset: int) -> Union[any]:
        ...
    @overload
    @classmethod
    def fromBytes(cls, bytes: Array[int]) -> Union[any]:
        ...
    @overload
    @classmethod
    def fromBytes(cls, bytes: Array[int], offset: int, len: int) -> Union[any]:
        ...
    @overload
    @classmethod
    def fromBytes(cls, bytes: Array[int], offset: int) -> Union[any]:
        ...
    @overload
    @classmethod
    def fromBytes(cls, bytes: Array[int]) -> Union[any]:
        ...
    @classmethod
    def compressSnappy(cls, bb: any) -> Union[any]:
    """
    Compress data with Snappy.
    """
        ...
    @classmethod
    def compressGzip(cls, bb: any) -> Union[any]:
    """
    Compress data with Gzip.
    """
        ...
    @classmethod
    def uncompressSnappy(cls, bb: any) -> Union[any]:
    """
    Decompress data compressed with Snappy.
    """
        ...
    @classmethod
    def uncompressGzip(cls, bb: any) -> Union[any]:
    """
    Decompress data compressed with Gzip.
    """
        ...
    @classmethod
    def uncompressSnappyString(cls, bb: any) -> Union[str]:
    """
    Decompress UTF-8 data compressed with Snappy.
    """
        ...
    @classmethod
    def uncompressGzipString(cls, bb: any) -> Union[str]:
    """
    Decompress UTF-8 data compressed with Gzip.
    """
        ...
    @overload
    @classmethod
    def isUtf8Text(cls, bb: any) -> bool:
    """
    Determine if the specified binary has valid UTF-8 text. Note that this excludes nuls, most control characters
    and byte sequences that aren't valid UTF-8 sequences. This will return true for pure ASCII text as well, since
    it is a subset of UTF-8.
    Note that some characters which are technically valid will flag the data as non-text. For example NUL (zero)
    bytes and most control characters. These values, especially NUL are common in binary files and very uncommon in
    text.
    
    @param bb
           binary data to examine
    @return true if the data is valid UTF-8 text
    """
        ...
    @overload
    @classmethod
    def isUtf8Text(cls, bb: any, partial: bool=None) -> bool:
    """
    Determine if the specified binary has valid UTF-8 text. Note that this excludes nuls, most control characters
    and byte sequences that aren't valid UTF-8 sequences. This will return true for pure ASCII text as well, since
    it is a subset of UTF-8.
    Note that some characters which are technically valid will flag the data as non-text. For example NUL (zero)
    bytes and most control characters. These values, especially NUL are common in binary files and very uncommon in
    text.
    
    @param bb
           binary data to examine
    @param partial
           whether this is a subset of a larger block of data
    @return true if the data is valid UTF-8 text
    """
        ...


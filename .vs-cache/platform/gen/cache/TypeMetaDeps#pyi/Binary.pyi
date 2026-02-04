#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Binary


class Binary(Value):
    """
    Uninterpreted data, declared as `binary`.  This is a series of byte values that can be used
    to store arbitrary data, such as an image.
    
    Binary data stored in NoSQL databases is always arbitrary length.
    
    Binary should not be used to store strings because this will require extra information on
    the character encoding to be maintained.  Use `string` instead.
    
    There are three types of binary data, backed by different Java implementations: HeapByteBuffer, DirectByteBuffer, and
    MappedByteBuffer.  The type of binary data is determined by the `isSharedMemory` and `isMemoryMapped` functions.
    HeapByteBuffer is the default; DirectByteBuffer is used for direct memory access between Java and JEP; MappedByteBuffer
    is used to implement shared memory between Java and Py4j.
    
    @see PrimitiveType
    
    @remarks this represents a made instance of Binary
    """
    def __init__(self) -> None: ...

    @overload
    @classmethod
    def wrap(cls, bytes: Any=None) -> Union[Binary]:
    """
    Wrap a Java ByteBuffer as a Binary.
    """
        ...
    @overload
    @classmethod
    def wrap(cls, bytes: Any=None) -> Union[Binary]:
    """
    Wrap a Java byte array as a Binary on heap.
    """
        ...
    @overload
    @classmethod
    def wrap(cls, bytes: Any=None, offset: int=None, length: int=None) -> Union[Binary]:
    """
    Wrap a Java byte array as a Binary on heap.
    """
        ...
    @classmethod
    def allocate(cls, capacity: int=None) -> Union[Binary]:
    """
    Allocate a new Binary with the given capacity on heap.
    """
        ...
    @classmethod
    def allocateDirect(cls, capacity: int=None) -> Union[Binary]:
    """
    Allocate a new Binary with the given capacity off heap, using direct memory.
    """
        ...
    @classmethod
    def allocateMapped(cls, capacity: int=None) -> Union[Binary]:
    """
    Allocate a new Binary with the given capacity off heap, using memory mapped file.
    """
        ...
    def isDirectMemory(self) -> bool:
    """
    @return true if the binary data is using direct memory. Note that this also returns true for memory mapped files.
    """
        ...
    def isMemoryMapped(self) -> bool:
    """
    @return true if the binary data is backed by a memory mapped file.
    """
        ...
    def filename(self) -> Union[str]:
    """
    @return the file name of the memory mapped file, if #isMemoryMapped; empty otherwise.
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CollectionInMemory import CollectionInMemory

# Python definitions for the C3 type CollectionInMemory

E = TypeVar('E')

class CollectionInMemory(Generic[E], WithSize, InMemory[any], Value):
    """
    Base type and common methods for collections that reside in memory.
    
    @remarks this represents a made instance of CollectionInMemory
    """
    def __init__(self) -> None: ...

    def _length_(self) -> int:
    """
    Implements the js `.length` property or py `len()` support.
    @return the number of elements in this instance
    """
        ...
    def size(self) -> int:
    """
    Number of elements in this instance.
    """
        ...
    def isEmpty(self) -> bool:
    """
    @return true if this instance is empty.
    """
        ...
    def isCompressed(self) -> bool:
    """
    Whether or not this object is compressed to optimize memory usage at the expense of access time.
    
    @see #compress
    @see #uncompress
    """
        ...
    def compress(self) -> CollectionInMemory[E]:
    """
    Return an immutable compact copy of the object or itself if already compressd.
    """
        ...
    def uncompress(self) -> CollectionInMemory[E]:
    """
    Return an immutable compress copy of the object or itself if is not compressed.
    """
        ...
    def isPacked(self) -> bool:
    """
    Whether or not this object is packed to optimize memory usage at the expense of access time.
    
    @see #pack
    @see #unpack
    """
        ...
    def pack(self) -> CollectionInMemory[E]:
    """
    Return an immutable compact copy of the object or itself if already packed.
    
    @see #isPacked
    """
        ...
    def unpack(self) -> CollectionInMemory[E]:
    """
    Return an immutable unpacked copy of the object or itself if already unpacked.
    
    @see #isPacked
    """
        ...
    def reversed(self) -> Union[CollectionInMemory[E]]:
    """
    @return collection with elements reversed. The first element becomes the last, and the last element becomes the
            first.
    """
        ...
    @overload
    def withIfMissing(self, e: E) -> CollectionInMemory[E]:
    """
    @return new collection with new element added to it if it is not already present.
    """
        ...
    @overload
    def withIfMissing(self, e: E, predicate: Callable[[Union[E]], bool]) -> CollectionInMemory[E]:
    """
    @return new collection with new element added to it if it is not already present based on provided predicate.
    """
        ...
    def toInMemory(self) -> Union[CollectionInMemory[E]]:
        ...


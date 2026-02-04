#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.InMemory import InMemory

# Python definitions for the C3 type InMemory

E = TypeVar('E')

class InMemory(Generic[E], Compressible, Packable, Value):
    """
    Base type and common methods for data structures that reside in memory.
    
    @remarks this represents a made instance of InMemory
    """
    def __init__(self) -> None: ...

    def isCompressed(self) -> bool:
    """
    Whether or not this object is compressed to optimize memory usage at the expense of access time.
    
    @see #compress
    @see #uncompress
    """
        ...
    def compress(self) -> InMemory[E]:
    """
    Return an immutable compact copy of the object or itself if already compressd.
    """
        ...
    def uncompress(self) -> InMemory[E]:
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
    def pack(self) -> InMemory[E]:
    """
    Return an immutable compact copy of the object or itself if already packed.
    
    @see #isPacked
    """
        ...
    def unpack(self) -> InMemory[E]:
    """
    Return an immutable unpacked copy of the object or itself if already unpacked.
    
    @see #isPacked
    """
        ...


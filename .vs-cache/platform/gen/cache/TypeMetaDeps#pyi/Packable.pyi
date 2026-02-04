#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Packable


class Packable(Value):
    """
    Base type for values / instances that can by "packed" - i.e. optimize memory usage at the expense of access time.
    
    @remarks this represents a made instance of Packable
    """
    def __init__(self) -> None: ...

    def isPacked(self) -> bool:
    """
    Whether or not this object is packed to optimize memory usage at the expense of access time.
    
    @see #pack
    @see #unpack
    """
        ...
    def pack(self) -> Packable:
    """
    Return an immutable compact copy of the object or itself if already packed.
    
    @see #isPacked
    """
        ...
    def unpack(self) -> Packable:
    """
    Return an immutable unpacked copy of the object or itself if already unpacked.
    
    @see #isPacked
    """
        ...


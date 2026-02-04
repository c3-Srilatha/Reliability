#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Compressible


class Compressible(Value):
    """
    Base type for values / instances that can by "compressed" - i.e. optimize memory usage at the expense of access time.
    
    @remarks this represents a made instance of Compressible
    """
    def __init__(self) -> None: ...

    def isCompressed(self) -> bool:
    """
    Whether or not this object is compressed to optimize memory usage at the expense of access time.
    
    @see #compress
    @see #uncompress
    """
        ...
    def compress(self) -> Compressible:
    """
    Return an immutable compact copy of the object or itself if already compressd.
    """
        ...
    def uncompress(self) -> Compressible:
    """
    Return an immutable compress copy of the object or itself if is not compressed.
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type WithCacheKey


class WithCacheKey(Value):
    """
    Base type for objects with a natural cache key. I.e. value that could be used as key for caches of instances of this
    type .
    
    @see Cached
    
    @remarks this represents a made instance of WithCacheKey
    """
    def __init__(self) -> None: ...

    def cacheKey(self) -> Union[str]:
    """
    The name of this instance.
    """
        ...


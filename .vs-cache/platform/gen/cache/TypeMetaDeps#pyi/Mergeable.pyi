#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Collection import Collection

# Python definitions for the C3 type Mergeable

T = TypeVar('T')

class Mergeable(Generic[T], Value):
    """
    This type can be merged with a type of instance T
    
    @remarks this represents a made instance of Mergeable
    """
    def __init__(self) -> None: ...

    def mergeWith(self, other: T) -> T:
    """
    Combine an instance of this Type with an instance of T to form a single T
    """
        ...
    @classmethod
    def mergeAll(cls, elements: Collection[T]) -> T:
    """
    Merge a collection of T to form a single T
    """
        ...


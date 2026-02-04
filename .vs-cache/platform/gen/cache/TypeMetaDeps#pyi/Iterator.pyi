#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Iterator

E = TypeVar('E')

class Iterator(Generic[E], Value):
    """
    Iterator interface over sequence of elements
    
    @remarks this represents a made instance of Iterator
    """
    def __init__(self) -> None: ...

    def hasNext(self) -> bool:
    """
    @return true if there is an element in the sequence
    """
        ...
    def next(self) -> Union[E]:
    """
    @return next element in the sequence
    """
        ...
    def close(self) -> None:
    """
    "Close" iterator so any associated resources can be released. Exhausting iterator with hasNext / next should always
    close it but it should be ok to close it early.
    """
        ...


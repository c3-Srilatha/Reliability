#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Iterator import Iterator

# Python definitions for the C3 type Iterable

E = TypeVar('E')

class Iterable(Generic[E], ImplLanguageProtocol, Value):
    """
    Iterable interface that can produce {@link Iterator} of elements
    
    @remarks this represents a made instance of Iterable
    """
    def __init__(self) -> None: ...

    def iter(self) -> Union[Iterator[E]]:
    """
    Use this method if you want to use a C3 iterator.
    @return a C3 iterator of the elements of the collection
    """
        ...
    def _iter_(self) -> Union[Any]:
    """
    Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Iterator import Iterator

# Python definitions for the C3 type ContainerProtocol

E = TypeVar('E')

class ContainerProtocol(Generic[E], MapProtocol, WithSize, WithContains, Iterable[E], Value):
    """
    Marker type indicating support for implementation language container syntax e.g. accessor via [].
    Every method here is intended to unconditionally implement its language syntax, unless otherwise specified.
    Also see {@link MutableContainerProtocol}.
    
    @remarks this represents a made instance of ContainerProtocol
    """
    def __init__(self) -> None: ...

    def get(self, key: Any) -> Union[Any]:
    """
    Implements the square bracket `[]` syntactic sugar in js and py.
    NOTE: The type of the return value for this method can also vary dynamically with the type of the provided key.
    For example accessing an element in a double array will provide a double if the key is an integer, and it would
    provide a double array if the key is a "slice".
    @param key
            key associated with the desired element.
    @return the element associated with the given key
    """
        ...
    def _length_(self) -> int:
    """
    Implements the js `.length` property or py `len()` support.
    @return the number of elements in this instance
    """
        ...
    def size(self) -> int:
    """
    Implements the `len()` built-in for py.
    @return size of the container
    """
        ...
    def isEmpty(self) -> bool:
    """
    @return true if this instance is empty.
    """
        ...
    def contains(self, element: Any) -> bool:
    """
    Implements the `in` key word in py.
    @param element
            element to test membership for.
    @return true iff container contains element
    """
        ...
    def iter(self) -> Union[Iterator[E]]:
    """
    Implements the iterable syntactic sugars in py, for example `for x in iterable`.
    @return an iterator over the elements of the container
    """
        ...
    def _iter_(self) -> Union[Any]:
    """
    Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
    """
        ...


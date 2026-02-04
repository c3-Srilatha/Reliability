#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Iterator import Iterator
from c3.platform.MutableContainerProtocol import MutableContainerProtocol

# Python definitions for the C3 type MutableContainerProtocol

E = TypeVar('E')

class MutableContainerProtocol(Generic[E], ContainerProtocol[E], MutableMapProtocol, Value):
    """
    Marker type indicating support for implementation language container syntax e.g. indexed access via [].
    Supports mutation operations.
    Every method here is intended to unconditionally implement its language syntax, unless otherwise specified.
    
    @remarks this represents a made instance of MutableContainerProtocol
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
    @classmethod
    def make(cls) -> MutableContainerProtocol[E]:
    """
    Construct an instance with initial state.
    """
        ...
    def set(self, key: Any, value: Any) -> None:
    """
    Implements the square bracket `obj[key] = value` syntactic sugar in js and py.
    @param key
            key associated with the element to set value for.
    @param value
            value to set element to.
    """
        ...
    def removeKey(self, key: Any) -> None:
    """
    Implements the `del()` built-in for py.
    @param key
            key associated with the element to remove.
    """
        ...


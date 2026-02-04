#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type MutableMapProtocol


class MutableMapProtocol(MapProtocol, Mutable, Value):
    """
    Marker type indicating support for implementation language map syntax e.g. indexed access via [].
    Supports mutation operations.
    Every method here is intended to unconditionally implement its language syntax, unless otherwise specified.
    
    @remarks this represents a made instance of MutableMapProtocol
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
    @classmethod
    def make(cls) -> MutableMapProtocol:
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


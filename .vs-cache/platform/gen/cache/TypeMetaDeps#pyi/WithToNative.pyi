#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type WithToNative


class WithToNative(Value):
    """
    Type that provides a way to map an instance to a language-native value. This must be implemented in _every_ language
    to be fully useful.
    
    For some instance/language combinations, the native value may be the same as the C3 "made" type, in which case this
    will just return the value. For example, in Java, {@link Obj} instances will be returned as-is, but {@link DateTime}
    values will be converted to `java.time.Instant` values.
    
    @remarks this represents a made instance of WithToNative
    """
    def __init__(self) -> None: ...

    def toNative(self, doNotCopy: bool=None) -> Union[Any]:
    """
    The closest native representation of the value.
    
    In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
    access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
    exposed, copying if necessary.
    
    @param doNotCopy return internal state without copying (unsafe access)
    """
        ...


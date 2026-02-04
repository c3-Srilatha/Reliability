#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.UiSdlImmutableJS import UiSdlImmutableJS

# Python definitions for the C3 type UiSdlImmutableJS

T = TypeVar('T')

class UiSdlImmutableJS(Generic[T], Value):
    """
    Immutable objects created with the UiSdlImmutableJS library.
    @see https://facebook.github.io/immutable-js/docs/#/
    
    @remarks this represents a made instance of UiSdlImmutableJS
    """
    def __init__(self) -> None: ...

    def getIn(self, keyPath: Array[str]=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Retrieves a deep value by providing a path.
    @param keyPath The path to the value.
    @returns the immutable value that resides at the given path.
    """
        ...
    def setIn(self, keyPath: Array[str]=None, value: UiSdlImmutableJS[Any]=None) -> Union[UiSdlImmutableJS]:
    """
    Returns a copy of the immutable with the value at the provided path set to the given value.
    @param keyPath The path to the value to set
    @returns a the modified copy
    """
        ...


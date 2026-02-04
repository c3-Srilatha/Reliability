#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type LengthProtocol


class LengthProtocol(ImplLanguageProtocol, Value):
    """
    Marker type indicating support for implementation language syntax for the length of a composite object.
    
    @see FieldProtocol
    @see InProtocol
    
    @remarks this represents a made instance of LengthProtocol
    """
    def __init__(self) -> None: ...

    def _length_(self) -> int:
    """
    Implements the js `.length` property or py `len()` support.
    @return the number of elements in this instance
    """
        ...


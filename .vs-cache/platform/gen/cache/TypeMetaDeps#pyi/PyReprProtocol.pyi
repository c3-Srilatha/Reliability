#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type PyReprProtocol


class PyReprProtocol(Value):
    """
    Marker type indicating support for Python's __repr__() built-in function
    
    @remarks this represents a made instance of PyReprProtocol
    """
    def __init__(self) -> None: ...

    def _repr_(self) -> Union[str]:
    """
    Implements Python repr(this)
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type BoolProtocol


class BoolProtocol(ImplLanguageProtocol, Value):
    """
    Marker type indicating support for implementation language syntax for truthiness.
    
    @remarks this represents a made instance of BoolProtocol
    """
    def __init__(self) -> None: ...

    def _bool_(self) -> bool:
    """
    Determines if this value is truth or falsy
    """
        ...


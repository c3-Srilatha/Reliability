#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type UnknownType


class UnknownType(Value):
    """
    System type used in Action#fromJson if typename is not recognized.
    
    @remarks this represents a made instance of UnknownType
    """
    def __init__(self) -> None: ...

    @classmethod
    def unknown(cls) -> None:
        ...


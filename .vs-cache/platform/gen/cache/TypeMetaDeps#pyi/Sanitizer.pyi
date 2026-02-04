#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Sanitizer


class Sanitizer(Value):
    """
    @remarks this represents a made instance of Sanitizer
    """
    def __init__(self) -> None: ...

    @classmethod
    def sanitizeAll(cls, type: ValueType, value: Any) -> Union[Any]:
    """
    Clears secret material anywhere in the object tree.
    """
        ...


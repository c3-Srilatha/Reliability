#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type WithContains


class WithContains(Value):
    """
    @remarks this represents a made instance of WithContains
    """
    def __init__(self) -> None: ...

    def contains(self, element: Any) -> bool:
    """
    @param element
            element to check for.
    @return true iff the given element is present in this object.
    """
        ...


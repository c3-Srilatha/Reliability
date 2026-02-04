#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Mutable


class Mutable(Value):
    """
    Base type of instances (value) that can mutate it's instance state. I.e. field values can be modified in-place; it
    grows #setFieldValue and related methods.
    
    Note that Mutable types are not implicitly Stateful but can be if needed.
    Note also that Mutable types are not guaranteed to be thread-safe.
    
    @see Obj
    @see Value
    @see Stateful
    
    @remarks this represents a made instance of Mutable
    """
    def __init__(self) -> None: ...

    @classmethod
    def make(cls) -> Mutable:
    """
    Construct an instance with initial state.
    """
        ...


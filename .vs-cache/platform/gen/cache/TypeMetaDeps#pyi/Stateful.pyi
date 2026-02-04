#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Stateful


class Stateful(Value):
    """
    Base type of instances (value) that hold the state. Typically means that instance of a type is effectively a
    reference to some back-end state e.g. file or an in memory instance. Something can be {@link Mutable} but not
    {@link Stateful}.
    
    Sub-types will not implicitly mixin Obj C3 type so will not have implicit methods like Obj.fromJson.
    
    @see Obj
    @see Value
    
    @remarks this represents a made instance of Stateful
    """
    def __init__(self) -> None: ...

    @classmethod
    def make(cls) -> Stateful:
    """
    Construct an instance with initial state.
    """
        ...


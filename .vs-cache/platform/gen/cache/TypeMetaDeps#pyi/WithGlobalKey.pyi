#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type WithGlobalKey


class WithGlobalKey(Value):
    """
    A base type for types that have a globally unique key and be looked up by it.
    E.g. Named , Identified etc.
    
    @remarks this represents a made instance of WithGlobalKey
    """
    def __init__(self) -> None: ...



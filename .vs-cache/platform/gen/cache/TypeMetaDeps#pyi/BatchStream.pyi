#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type BatchStream

V = TypeVar('V')

class BatchStream(Generic[V], Value):
    """
    The specialized BatchStream type is used to transform a stream of <V> into a stream of Arry<V>
    
    @remarks this represents a made instance of BatchStream
    """
    def __init__(self) -> None: ...



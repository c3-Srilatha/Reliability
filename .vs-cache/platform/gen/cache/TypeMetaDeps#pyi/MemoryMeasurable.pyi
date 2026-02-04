#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SetBuilder import SetBuilder

# Python definitions for the C3 type MemoryMeasurable


class MemoryMeasurable(Value):
    """
    Base type for values and instances that can measure their retained memory
    
    @remarks this represents a made instance of MemoryMeasurable
    """
    def __init__(self) -> None: ...

    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...


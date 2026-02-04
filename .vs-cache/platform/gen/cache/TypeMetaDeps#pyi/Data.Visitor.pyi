#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DataImpl.Lazy import DataImpl.Lazy
from c3.platform.DataImpl.Pandas import DataImpl.Pandas

# Python definitions for the C3 type Data.Visitor

C = TypeVar('C')

class Visitor(Generic[C], Value):
    """
    Visitor interface for Data related types
    
    @see DataVisitable
    
    @remarks this represents a made instance of Data.Visitor
    """
    def __init__(self) -> None: ...

    def lazy(self, lazy: DataImpl.Lazy, ctx: C) -> Union[C]:
        ...
    def pandas(self, pandas: DataImpl.Pandas, ctx: C) -> Union[C]:
        ...


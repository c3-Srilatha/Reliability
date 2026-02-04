#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Data.Visitor import Data.Visitor

# Python definitions for the C3 type DataVisitable


class DataVisitable(Value):
    """
    Interface for implementing visitor pattern across {@link Data} related types.
    
    @see DataVisitor
    
    @remarks this represents a made instance of DataVisitable
    """
    def __init__(self) -> None: ...

    def visit(self, visitor: Data.Visitor[C], ctx: C) -> Union[C]:
    """
    Visits this {@link DataVisitable} instance using provided {@link DataVisitor}
    
    @param visitor
           DataVisitor that implements visitation of this DataVisitable instance
    @param name
           parameter or field name of currently visited {@link DataVisitable} instance
    @param ctx
           state that is passed along with visitor
    """
        ...


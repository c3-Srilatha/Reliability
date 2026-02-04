#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.Obj import Obj
from c3.platform.Typesys.Ref import Typesys.Ref

# Python definitions for the C3 type Typesys.WithRef


class WithRef(WithRef, Value):
    """
    Base marker type for all type-system elements that can be referenced via simple string in a given root C3 package.
    
    @see Typesys.Ref
    
    @remarks this represents a made instance of Typesys.WithRef
    """
    def __init__(self) -> None: ...

    def toRef(self) -> Typesys.Ref:
    """
    Reference value of this instance.
    """
        ...
    def toRefString(self) -> str:
    """
    Reference string serialized value of the reference to this instance.
    """
        ...
    @classmethod
    def fromRef(cls, ref: Obj, failIfMissing: bool=None) -> Typesys.WithRef:
    """
    Construct instance from a reference.
    """
        ...
    @classmethod
    def refType(cls) -> Union[Type]:
    """
    C3 type for the reference value.
    """
        ...


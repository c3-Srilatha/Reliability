#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.Obj import Obj
from c3.platform.Typesys.Ref import Typesys.Ref

# Python definitions for the C3 type WithRef


class WithRef(Value):
    """
    Base type for instances (value) of a type that are "pass by reference" by default. This type impacts the
    behavior of serialization and deserialization of its instances between the C3 Server and remote clients.
    Remote member calls to instances of such types have `this` argument serialized as result of call to `#toRef()`, and
    deserialized as a result of calling `#fromRef`.
    
    @remarks this represents a made instance of WithRef
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
    def fromRef(cls, ref: Obj, failIfMissing: bool=None) -> WithRef:
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


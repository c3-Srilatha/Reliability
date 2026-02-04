#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.Type import Type
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors
from c3.platform.CollectionConstructors import CollectionConstructors

# Python definitions for the C3 type CollectionConstructors

E = TypeVar('E')

class CollectionConstructors(Generic[E], Value):
    """
    Base type for common collection constructor methods.
    
    @remarks this represents a made instance of CollectionConstructors
    """
    def __init__(self) -> None: ...

    @classmethod
    def of(cls, elementType: ValueType, *elements: Array[T]) -> Union[CollectionConstructors[T]]:
    """
    @return collection of provided element type and values.
    """
        ...
    @classmethod
    def ofAny(cls, *elements: Array[T]) -> Union[CollectionConstructors[T]]:
    """
    @return collection of any with provided elements.
    """
        ...
    @classmethod
    def ofBool(cls, *elements: Array[bool]) -> Union[CollectionConstructors[bool]]:
    """
    @return collection of provided booleans.
    """
        ...
    @classmethod
    def ofInt(cls, *elements: Array[int]) -> Union[CollectionConstructors[int]]:
    """
    @return collection of provided 64 bit integers.
    """
        ...
    @classmethod
    def ofInt32(cls, *elements: Array[int]) -> Union[CollectionConstructors[int]]:
    """
    @return collection of provided 32 bit integers.
    """
        ...
    @classmethod
    def ofInt16(cls, *elements: Array[int]) -> Union[CollectionConstructors[int]]:
    """
    @return collection of provided 16 bit integers.
    """
        ...
    @classmethod
    def ofFloat(cls, *elements: Array[float]) -> Union[CollectionConstructors[float]]:
    """
    @return collection of provided floats.
    """
        ...
    @classmethod
    def ofDbl(cls, *elements: Array[float]) -> Union[CollectionConstructors[float]]:
    """
    @return collection of provided doubles.
    """
        ...
    @classmethod
    def ofByte(cls, *elements: Array[int]) -> Union[CollectionConstructors[int]]:
    """
    @return collection of provided doubles.
    """
        ...
    @classmethod
    def ofDateTime(cls, *elements: Array[datetime]) -> Union[CollectionConstructors[datetime]]:
    """
    @return collection of provided datetime.
    """
        ...
    @classmethod
    def ofStr(cls, *strs: Array[str]) -> Union[CollectionConstructors[str]]:
    """
    @return collection of provided string.
    """
        ...
    @overload
    @classmethod
    def ofObj(cls, *objs: Array[Obj]) -> Union[CollectionConstructors[Obj]]:
    """
    @return collection of generic obj and provided instances.
    """
        ...
    @overload
    @classmethod
    def ofObj(cls, type: Type, *objs: Array[Obj]) -> Union[CollectionConstructors[O]]:
    """
    @return collection of provided C3 type and provided instances.
    """
        ...
    @classmethod
    def ofIntInRange(cls, min: int, max: int, step: int=None) -> Union[CollectionConstructors[int]]:
    """
    @return collection of provided integers in a range.
    """
        ...
    @classmethod
    def ofInt32InRange(cls, min: int, max: int, step: int=None) -> Union[CollectionConstructors[int]]:
    """
    @return collection of provided integers in a range.
    """
        ...


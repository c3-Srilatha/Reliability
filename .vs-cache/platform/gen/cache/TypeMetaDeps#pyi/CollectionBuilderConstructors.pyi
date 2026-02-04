#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.Type import Type
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.CollectionBuilder import CollectionBuilder

# Python definitions for the C3 type CollectionBuilderConstructors

B = TypeVar('B')

class CollectionBuilderConstructors(Generic[B], Value):
    """
    Base type for common collection builder constructor methods.
    
    @remarks this represents a made instance of CollectionBuilderConstructors
    """
    def __init__(self) -> None: ...

    @classmethod
    def builderOf(cls, elementType: ValueType, *elements: Array[T]) -> CollectionBuilder[T]:
    """
    @return collection of provided element type and values.
    """
        ...
    @classmethod
    def builderOfAny(cls, *elements: Array[T]) -> CollectionBuilder[T]:
    """
    @return collection of any with provided elements.
    """
        ...
    @classmethod
    def builderOfInt(cls, *elements: Array[int]) -> CollectionBuilder[int]:
    """
    @return collection of provided 64 bit integers.
    """
        ...
    @classmethod
    def builderOfInt32(cls, *elements: Array[int]) -> CollectionBuilder[int]:
    """
    @return collection of provided 32 bit integers.
    """
        ...
    @classmethod
    def builderOfInt16(cls, *elements: Array[int]) -> CollectionBuilder[int]:
    """
    @return collection of provided 16 bit integers.
    """
        ...
    @classmethod
    def builderOfFloat(cls, *elements: Array[float]) -> CollectionBuilder[float]:
    """
    @return collection of provided floats.
    """
        ...
    @classmethod
    def builderOfDbl(cls, *elements: Array[float]) -> CollectionBuilder[float]:
    """
    @return collection of provided doubles.
    """
        ...
    @classmethod
    def builderOfStr(cls, *strs: Array[str]) -> CollectionBuilder[str]:
    """
    @return collection of provided string.
    """
        ...
    @classmethod
    def builderOfByte(cls, *bytes: Array[int]) -> CollectionBuilder[int]:
    """
    @return collection of provided byte.
    """
        ...
    @classmethod
    def builderOfBool(cls, *bools: Array[bool]) -> CollectionBuilder[bool]:
    """
    @return collection of provided booleans.
    """
        ...
    @classmethod
    def builderOfDateTime(cls, *datetimes: Array[datetime]) -> CollectionBuilder[datetime]:
    """
    @return collection of provided byte.
    """
        ...
    @overload
    @classmethod
    def builderOfObj(cls, *objs: Array[Obj]) -> CollectionBuilder[Obj]:
    """
    @return collection of generic obj and provided instances.
    """
        ...
    @overload
    @classmethod
    def builderOfObj(cls, type: Type, *objs: Array[Obj]) -> CollectionBuilder[O]:
    """
    @return collection of provided C3 type and provided instances.
    """
        ...


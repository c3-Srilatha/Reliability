#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type WithValueType


class WithValueType(Value):
    """
    Base type of instances (value) of a type that are "value-type-aware" i.e. can fully infer or store its own value
    type.
    
    @see Collection
    @see DateTime
    
    @remarks this represents a made instance of WithValueType
    """
    def __init__(self) -> None: ...

    def valueType(self) -> ValueType:
    """
    C3 ValueType of this instance.
    """
        ...
    @classmethod
    def valueTypeOf(cls, type: Type, failIfNot: bool=None) -> Union[ValueType]:
    """
    Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
    considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
    
    @see ValueType#instanceType
    """
        ...


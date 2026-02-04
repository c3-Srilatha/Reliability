#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Instance


class Instance(WithValueType, WithToNative, Value):
    """
    Marker type that indicates the type provides an implementation of a type system value. For example, the
    {@link DateTime} _instance_ implements the {@link DateTimeType datetime} _value type_.
    
    Instances should never be used in type declarations; instead the corresponding value type should be used.
    For example, a field or method parameter should never be declared using the {@link Lambda} _instance_, instead use
    the `lambda` value type syntax.
    
    Instances always have a way to get the corresponding value type because they must implement the `valueType`
    method from {@link WithValueType}.
    
    They also have a way to turn into the closest native value because they must implement `toNative` in all languages.
    
    @remarks this represents a made instance of Instance
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
    def toNative(self, doNotCopy: bool=None) -> Union[Any]:
    """
    The closest native representation of the value.
    
    In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
    access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
    exposed, copying if necessary.
    
    @param doNotCopy return internal state without copying (unsafe access)
    """
        ...


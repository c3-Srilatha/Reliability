#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type StringSerializable


class StringSerializable(WithToString, Value):
    """
    Base type for types that implement custom string serialization. This is naturally used with the `serialized`
    syntax when values are to be stored as strings, but have inner structure that can be represented by a type.
    For example: `string serialized Url` indicates that a value is passed as a string, but represents a {@link Url}.
    
    Note that values declared as `string serialized` aren't necessary canonicalized:
     - a serialized value must work with fromString
     - it may not be the form produced by toString
     - it should not be compared/found _as_ a string
    
    @see serdeser.c3doc
    
    @remarks this represents a made instance of StringSerializable
    """
    def __init__(self) -> None: ...

    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[StringSerializable]:
    """
    Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
    provide deserialization.
    
    fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
    of called-on type, but perhaps not the same type.
    
    E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
    
    @see #toString
    """
        ...
    @classmethod
    def make(cls, s: str) -> Union[StringSerializable]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...


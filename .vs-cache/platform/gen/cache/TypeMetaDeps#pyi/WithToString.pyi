#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type WithToString


class WithToString(Value):
    """
    Base type for types that implement custom string representation. Note that this is slightly different then
    "serialization" as there is no guarantee that content can be reconstructed from this string.
    
    @see StringSerializable
    @see Serializable
    
    @remarks this represents a made instance of WithToString
    """
    def __init__(self) -> None: ...

    def toString(self) -> Union[str]:
    """
    String-based representation of instance of this type.
    """
        ...


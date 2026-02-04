#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type FieldProtocol


class FieldProtocol(ImplLanguageProtocol, Value):
    """
    Marker type indicating support for implementation language attribute syntax e.g. accessor via `.`.
    
    @see FieldsProtocol
    @see MutableFieldProtocol
    @see ItemProtocol
    @see InProtocol
    
    @remarks this represents a made instance of FieldProtocol
    """
    def __init__(self) -> None: ...

    def _field_(self, name: str) -> Union[T]:
    """
    Implements the `.` syntactic sugar in js and py.
    @param name
              name associated with the desired attribute value.
    @return the attribute value associated with the given attribute name
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type FieldsProtocol


class FieldsProtocol(FieldProtocol, Value):
    """
    Marker type indicating support for implementation language attribute syntax e.g. accessor via `.`.
    
    Extends base FieldProtocol by introducing multi-field access
    
    Also see {@link FieldProtocol}.
    
    @remarks this represents a made instance of FieldsProtocol
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
    def _fields_(self, names: Array[str]) -> Union[Array[Any]]:
    """
    Implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
    @param names
            names associated with the desired attribute values.
    @return the attribute values associated with the given attribute names
    """
        ...
    def _fieldNames_(self) -> Union[Array[str]]:
    """
    Implements the `.` auto-complete syntax in js and py.
    @return list of all attribute names
    """
        ...


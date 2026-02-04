#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type

# Python definitions for the C3 type TypeInstProtocol


class TypeInstProtocol(ImplLanguageProtocol, Value):
    """
    Marker type indicating that instance of the subtype can provide its C3 Type and native implementation.
    
    Also see {@link FieldsProtocol}.
    Also see {@link MutableFieldProtocol}.
    
    @remarks this represents a made instance of TypeInstProtocol
    """
    def __init__(self) -> None: ...

    def _type_(self) -> Type:
    """
    @return native object with all fields
    """
        ...
    def _this_(self) -> Any:
    """
    @return native object with all fields
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ItemProtocol


class ItemProtocol(ImplLanguageProtocol, Value):
    """
    Marker type indicating support for implementation language syntax for item getter via `[]` syntax.
    
    @see FieldProtocol
    @see InProtocol
    
    @remarks this represents a made instance of ItemProtocol
    """
    def __init__(self) -> None: ...

    def _item_(self, key: Any) -> Union[Any]:
    """
    Implements the square bracket getter `obj[item]`.
    
    @param key
            item associated with the desired element.
    @return the element associated with the given item
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type MutableItemProtocol


class MutableItemProtocol(ItemProtocol, Value):
    """
    Marker type indicating support for implementation language syntax for item setter/remover for bracket (`[]``) syntax
    
    @remarks this represents a made instance of MutableItemProtocol
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
    def _setItem_(self, key: Any, value: Any) -> None:
    """
    Implements the square bracket setter `obj[item] = value`
    @param key
            item associated with the element to set value for.
    @param value
            value to set element to.
    """
        ...
    def _removeItem_(self, key: Any) -> None:
    """
    Implements the `del` or equivalent operator
    @param key
      item associated with the element to remove.
    """
        ...


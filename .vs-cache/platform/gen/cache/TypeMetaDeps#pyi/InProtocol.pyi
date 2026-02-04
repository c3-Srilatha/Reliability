#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type InProtocol


class InProtocol(ImplLanguageProtocol, Value):
    """
    Marker type indicating support for implementation language `in` syntax.
    
    @see FieldProtocol
    @see ItemProtocol
    
    @remarks this represents a made instance of InProtocol
    """
    def __init__(self) -> None: ...

    def _contains_(self, key: Any) -> bool:
    """
    Implements the `in` syntactic sugar in js and py.
    @param key
              element to test existence of
    @return true if there is an element corresponding to the given key
    """
        ...


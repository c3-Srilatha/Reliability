#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type MethodProtocol


class MethodProtocol(ImplLanguageProtocol, Value):
    """
    Marker type indicating support for implementation language method application syntax e.g. call via `.func()`.
    
    @remarks this represents a made instance of MethodProtocol
    """
    def __init__(self) -> None: ...

    def _call_(self, name: str, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Any]:
    """
    Implements the `.func()` syntactic sugar in js and py.
    
    Language SDKs typically just dispatch this call to remote API or java
    
    Note that since typically implementation is shared across language SDKs and is in java args are `any` and can not
    accept `native`
    
    An example of the subtype is Obj.c3typ that exposes `with<field name>` & `without<field name>` methods via this
    protocol
    
    @param args positional arguments
    @param kwargs arguments by name
    
    @see MethodType#firstKwargIndex
    @see MethodType#call
    """
        ...
    def _isMethodNameValid_(self, name: str) -> bool:
    """
    @return true if it is valid to call method by provided name on this instance
    """
        ...


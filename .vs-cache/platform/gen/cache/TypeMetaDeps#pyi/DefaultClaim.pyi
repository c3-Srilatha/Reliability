#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Action import Action

# Python definitions for the C3 type DefaultClaim


class DefaultClaim(ImplLanguageProtocol, Value):
    """
    Marker type indicating that it automatically claims abstract sub type methods.
    
    @remarks this represents a made instance of DefaultClaim
    """
    def __init__(self) -> None: ...

    @classmethod
    def _exec(cls, action: Action) -> Union[Any]:
    """
    @return executes given action representing abstract method call on one of this type's sub-type.
    """
        ...


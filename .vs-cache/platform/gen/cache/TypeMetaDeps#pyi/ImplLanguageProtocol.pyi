#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ImplLanguageProtocol


class ImplLanguageProtocol(Value):
    """
    Base type for all C3 type system Protocols. An "ImplLanguageProtocol" is an interface describing implicit behavior of
    implementation languages.
    
    @see DefaultInstance
    
    @remarks this represents a made instance of ImplLanguageProtocol
    """
    def __init__(self) -> None: ...



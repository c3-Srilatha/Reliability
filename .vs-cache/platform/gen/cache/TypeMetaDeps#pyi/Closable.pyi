#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Closable


class Closable(Value):
    """
    Abstract type for implementing resource close and onClose callback semantic.
    
    @remarks this represents a made instance of Closable
    """
    
    onClose: Optional[Callable[[Union[Closable]]]]=None
    """
    Callback lambda on close of this stream
    """
    def __init__(self, onClose: Optional[Callable[[Union[Closable]]]]=None) -> None: ...

    def close(self) -> None:
    """
    Deallocates any potential resource and calls onClose if provided.
    """
        ...
    def doClose(self) -> None:
    """
    Deallocates any potential resource.
    """
        ...
    def closed(self) -> bool:
    """
    @returns true if this Closable resource has been closed
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type EventListener

E = TypeVar('E')

class EventListener(Generic[E], Value):
    """
    Base type for pre-defined event listeners
    
    @remarks this represents a made instance of EventListener
    """
    def __init__(self) -> None: ...

    @classmethod
    def notify(cls, e: E) -> None:
    """
    Notification of an event
    """
        ...


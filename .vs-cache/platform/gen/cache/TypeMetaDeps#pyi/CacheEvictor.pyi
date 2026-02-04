#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Event import Event

# Python definitions for the C3 type CacheEvictor


class CacheEvictor(Value):
    """
    @remarks this represents a made instance of CacheEvictor
    """
    def __init__(self) -> None: ...

    @classmethod
    def evict(cls, evt: Event=None) -> None:
        ...
    @classmethod
    def onEvicted(cls, evt: Event=None) -> None:
        ...


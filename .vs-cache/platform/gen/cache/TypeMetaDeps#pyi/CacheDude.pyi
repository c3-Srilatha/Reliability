#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Event import Event

# Python definitions for the C3 type CacheDude


class CacheDude(Value):
    """
    @remarks this represents a made instance of CacheDude
    """
    def __init__(self) -> None: ...

    @classmethod
    def invalidate(cls, evt: Event=None) -> None:
        ...
    @classmethod
    def invalidateCache(cls, evt: Event=None) -> None:
        ...


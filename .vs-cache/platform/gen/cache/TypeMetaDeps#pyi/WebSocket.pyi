#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type WebSocket


class WebSocket(Value):
    """
    @remarks this represents a made instance of WebSocket
    """
    def __init__(self) -> None: ...

    @classmethod
    def dispatchRun(cls, target: str=None, socketId: int=None) -> None:
    """
    This is a private function and it cannot be extended. It is used as a wrapper to the executor 'run' function.
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type WebSocketSession


class WebSocketSession(Value):
    """
    This type is used for action logging purposes (splunk action profiler).
    All c3 types that want to use the C3.remote.tcp.WebSocket functions MUST mix this type.
    Note that WebSocketExecutor already mixes this type.
    
    @remarks this represents a made instance of WebSocketSession
    """
    def __init__(self) -> None: ...

    @classmethod
    def connect(cls) -> None:
        ...
    @classmethod
    def send(cls) -> None:
        ...
    @classmethod
    def receive(cls) -> None:
        ...
    @classmethod
    def close(cls) -> None:
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type HttpProxyServer


class HttpProxyServer(Value):
    """
    HttpProxyServer creates forward http/https proxy server on localhost.
    
    @remarks this represents a made instance of HttpProxyServer
    """
    def __init__(self) -> None: ...

    @classmethod
    def start(cls, port: int) -> None:
        ...
    @classmethod
    def stop(cls, port: int) -> None:
        ...


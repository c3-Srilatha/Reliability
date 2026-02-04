#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MstrAuthInfo import MstrAuthInfo

# Python definitions for the C3 type MstrServer


class MstrServer(Value):
    """
    @remarks this represents a made instance of MstrServer
    """
    def __init__(self) -> None: ...

    @classmethod
    def getAuthInfo(cls) -> Union[MstrAuthInfo]:
        ...
    @classmethod
    def getServerUrl(cls) -> Union[str]:
        ...


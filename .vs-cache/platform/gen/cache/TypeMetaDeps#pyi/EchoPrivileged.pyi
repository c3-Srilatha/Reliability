#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type EchoPrivileged


class EchoPrivileged(Value):
    """
    @remarks this represents a made instance of EchoPrivileged
    """
    def __init__(self) -> None: ...

    @classmethod
    def echo(cls, msg: str=None) -> Union[str]:
        ...
    @classmethod
    def echoJs(cls, msg: str=None) -> Union[str]:
        ...
    @classmethod
    def echoUnprivilegedJs(cls, msg: str=None) -> Union[str]:
        ...


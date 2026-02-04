#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MBean import MBean

# Python definitions for the C3 type JMX


class JMX(Value):
    """
    @remarks this represents a made instance of JMX
    """
    def __init__(self) -> None: ...

    @classmethod
    def list(cls, hostname: str=None, port: int=None) -> Union[Array[MBean]]:
        ...
    @classmethod
    def listWithValues(cls, hostname: str=None, port: int=None) -> Union[Array[MBean]]:
        ...
    @classmethod
    def mbean(cls, name: str=None, hostname: str=None, port: int=None) -> Union[MBean]:
        ...
    @classmethod
    def find(cls, nameSpec: str=None) -> Union[Array[MBean]]:
        ...


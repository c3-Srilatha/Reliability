#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Obj import Obj

# Python definitions for the C3 type JSScanCallback


class JSScanCallback(Value):
    """
    @remarks this represents a made instance of JSScanCallback
    """
    def __init__(self) -> None: ...

    @classmethod
    def process(cls, callback: str=None, objs: Array[Obj]=None, context: Obj=None) -> None:
        ...


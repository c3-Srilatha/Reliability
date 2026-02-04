#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Hadoop


class Hadoop(Value):
    """
    @remarks this represents a made instance of Hadoop
    """
    def __init__(self) -> None: ...

    @classmethod
    def enterSafeMode(cls) -> None:
        ...
    @classmethod
    def leaveSafeMode(cls) -> None:
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type UnaryArithmeticProtocol


class UnaryArithmeticProtocol(Value):
    """
    @remarks this represents a made instance of UnaryArithmeticProtocol
    """
    def __init__(self) -> None: ...

    def toNegative(self) -> Any:
        ...
    def toPositive(self) -> Any:
        ...
    def toAbsolute(self) -> Any:
        ...
    def toInverted(self) -> Any:
        ...
    def toRounded(self, decimals: int=None) -> Any:
        ...


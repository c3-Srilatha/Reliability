#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type FFT


class FFT(Value):
    """
    @remarks this represents a made instance of FFT
    """
    def __init__(self) -> None: ...

    @classmethod
    def forward(cls, input: Array[float]=None) -> Union[Array[float]]:
        ...


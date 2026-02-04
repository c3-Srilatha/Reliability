#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type Pandas.ExponentialMovingWindowGroupby

R = TypeVar('R')

class ExponentialMovingWindowGroupby(Generic[R], Value):
    """
    @remarks this represents a made instance of Pandas.ExponentialMovingWindowGroupby
    """
    def __init__(self) -> None: ...

    def corr(self) -> Union[Any]:
        ...
    def cov(self) -> Union[Any]:
        ...
    def mean(self, engine: Any=None, engine_kwargs: Any=None) -> Union[R]:
        ...
    def std(self) -> Union[Any]:
        ...
    def var(self) -> Union[Any]:
        ...


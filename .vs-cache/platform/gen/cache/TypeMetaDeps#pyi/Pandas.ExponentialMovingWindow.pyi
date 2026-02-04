#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Data.Series import Data.Series
from c3.platform.Data import Data

# Python definitions for the C3 type Pandas.ExponentialMovingWindow

R = TypeVar('R')

class ExponentialMovingWindow(Generic[R], Value):
    """
    @remarks this represents a made instance of Pandas.ExponentialMovingWindow
    """
    def __init__(self) -> None: ...

    def agg(self, func: Any=None) -> Union[Union[Data,Data.Series,int]]:
        ...
    def aggregate(self, func: Any=None) -> Union[Union[Data,Data.Series,int]]:
        ...
    def corr(self, other: Any=None, pairwise: bool=None) -> Union[R]:
        ...
    def cov(self, other: Any=None, pairwise: bool=None, bias: bool=None) -> Union[R]:
        ...
    def mean(self, engine: Any=None, engine_kwargs: Any=None) -> Union[R]:
        ...
    def std(self, bias: bool=None) -> Union[R]:
        ...
    def var(self, bias: bool=None) -> Union[R]:
        ...


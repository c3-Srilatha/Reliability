#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Data.Spark.DataFrame import Data.Spark.DataFrame
from c3.platform.Data.Spark.Series import Data.Spark.Series

# Python definitions for the C3 type Data.Spark.Resampler


class Resampler(Value):
    """
    @remarks this represents a made instance of Data.Spark.Resampler
    """
    def __init__(self) -> None: ...

    def get_make_interval(self, unit: str=None, col: Any=None) -> Union[Any]:
        ...
    def max(self) -> Union[Union[Data.Spark.DataFrame,Data.Spark.Series]]:
        ...
    def mean(self) -> Union[Union[Data.Spark.DataFrame,Data.Spark.Series]]:
        ...
    def min(self) -> Union[Union[Data.Spark.DataFrame,Data.Spark.Series]]:
        ...
    def std(self) -> Union[Union[Data.Spark.DataFrame,Data.Spark.Series]]:
        ...
    def sum(self) -> Union[Union[Data.Spark.DataFrame,Data.Spark.Series]]:
        ...
    def var(self) -> Union[Union[Data.Spark.DataFrame,Data.Spark.Series]]:
        ...


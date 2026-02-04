#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Data import Data

# Python definitions for the C3 type Pandas.DataFrameStatic


class DataFrameStatic(Value):
    """
    @remarks this represents a made instance of Pandas.DataFrameStatic
    """
    def __init__(self) -> None: ...

    @classmethod
    def from_dict(cls, data: Any=None, orient: Any=None, dtype: Any=None, columns: Any=None) -> Union[Data]:
        ...
    @classmethod
    def from_records(cls, data: Any=None, index: Any=None, exclude: Any=None, columns: Any=None, coerce_float: Any=None, nrows: Any=None) -> Union[Data]:
        ...


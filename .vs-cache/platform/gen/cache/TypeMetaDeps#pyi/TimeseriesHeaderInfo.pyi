#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Unit import Unit

# Python definitions for the C3 type TimeseriesHeaderInfo


class TimeseriesHeaderInfo(Value):
    """
    Type that specifies rules about treating a timeseries itself
    
    @remarks this represents a made instance of TimeseriesHeaderInfo
    """
    
    interpolator: Optional[str]=None
    """
    default: ZERO_INTERPOLATOR
    """

    duplicateHandling: Optional[str]=None
    """
    default: IGNORE
    """

    overlapHandling: Optional[str]=None
    """
    default: AVG
    """

    interval: Optional[str]=None

    treatment: Optional[str]=None

    extrapolate: Optional[bool]=None
    """
    default: false
    """

    unit: Optional[Unit]=None
    def __init__(self, interpolator: Optional[str]=None, duplicateHandling: Optional[str]=None, overlapHandling: Optional[str]=None, interval: Optional[str]=None, treatment: Optional[str]=None, extrapolate: Optional[bool]=None, unit: Optional[Unit]=None) -> None: ...



#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TSDataPoint import TSDataPoint

# Python definitions for the C3 type GrainDetector


class GrainDetector(Value):
    """
    Type to detect grain
    
    @remarks this represents a made instance of GrainDetector
    """
    def __init__(self) -> None: ...

    @classmethod
    def detectGrain(cls, dataPoints: Array[TSDataPoint]=None) -> str:
    """
    Detect grain of the given set of sorted (by start, end) data points
    @param dataPoints
                   Sorted set of data points
    @return detected grain from the given data points
    """
        ...


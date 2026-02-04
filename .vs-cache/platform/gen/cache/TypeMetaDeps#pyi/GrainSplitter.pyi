#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TSDataPoint import TSDataPoint

# Python definitions for the C3 type GrainSplitter


class GrainSplitter(Value):
    """
    Type to aggregate / dis aggregate data points into calendar aligned dates
    
    @remarks this represents a made instance of GrainSplitter
    """
    def __init__(self) -> None: ...

    @classmethod
    def align(cls, dataPoints: Array[TSDataPoint]=None, normInterval: str=None, isInterval: bool=None, treatment: str=None) -> Union[Array[TSDataPoint]]:
    """
    Function to aggregate / dis - aggregate data points into calendar aligned dates
    @param dataPoints
                   Data Points that need to be aggregated / disaggregated
    @param normInterval
                   Interval at which we need to aggregate / disaggregate these points
    @param isInterval
                   Are these datapoints interval data points
    @param treatment
                   Treatment to be applied to these data points
    @return list of calendar aligned agg / disagg data points at normInterval interval
    """
        ...


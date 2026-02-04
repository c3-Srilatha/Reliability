#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MismatchTimeseriesResult import MismatchTimeseriesResult
from c3.platform.DetectMismatchSpec import DetectMismatchSpec

# Python definitions for the C3 type MetricInspector


class MetricInspector(Value):
    """
    Type used to perform various inspections on the metric expressions. This type is like a doctor for metrics.
    Any surgery / diagnosis that needs to be run on the metrics should go here.
    
    @remarks this represents a made instance of MetricInspector
    """
    def __init__(self) -> None: ...

    @classmethod
    def detectMismatch(cls, spec: DetectMismatchSpec) -> Union[MismatchTimeseriesResult]:
    """
    API to detect mismatch in timeseries results for the time common for timerange1 & timerange2
    Use Case: Often times expressions yield different results when time range changes due to the way the metric / expression
    has been authored. It becomes very tedious to find out which metric within the hierarchy of metrics is the root
    cause. This api will help automate the detection of these mismatches and output the metric at fault.
    Typical example is using 'eval' function with custom start and custom end. Such type of metrics yield in
    different results when evaluated for different time ranges. When we have a deeply nested expression its tricky
    to track these kind of errors. This function will help in detecting these issues.
    @param spec
               Detect Mismatch Spec
    @return the metric where the results mismatch with the original query range, srcId, field that mismatches
             or return null if everything matches
    """
        ...


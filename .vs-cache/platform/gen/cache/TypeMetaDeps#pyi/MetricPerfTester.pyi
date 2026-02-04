#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.PerfTime import PerfTime

# Python definitions for the C3 type MetricPerfTester


class MetricPerfTester(Value):
    """
    This type is intended to measure the performance of feature engineering in Python versus the performance of
    building the features using c3.ai metrics.
    
    @remarks this represents a made instance of MetricPerfTester
    """
    def __init__(self) -> None: ...

    @classmethod
    def timeMetricNormalizedData(cls, metricDurationInDays: int, featureEngineeringFlag: bool, interval: str) -> Union[PerfTime]:
    """
    Method used to compare the performance of evaluating metrics on unnormalized data with fetching the data and perform the
    same feature engineering in python.
    @param metricDurationInDays
              number of days of data to test the performance. The difference between start and end of the evaluation period.
    @param featureEngineeringFlag
              whether or not to perform feature engineering during the testing.
    @param interval
              the evaluation interval while evaluating c3 metric. This parameter will also be used to normalize dataset we get through python.
    @return PerfTime. The "c3Time" field is the amount of time taken (in nanoseconds) to train the model using C3;
             the "pyTime" field is the amount of time taken (in nanoseconds) to train in pure Python.
    """
        ...
    @classmethod
    def timeMetricUnnormalizedData(cls, metricDurationInDays: int, featureEngineeringFlag: bool, interval: str) -> Union[PerfTime]:
    """
    Method used to compare the performance of evaluating metrics on normalized data with fetching the data and perform the
    same feature engineering in python.
    @param metricDurationInDays
              number of days of data to test the performance. The difference between start and end of the evaluation period.
    @param featureEngineeringFlag
              whether or not to perform feature engineering during the testing.
    @param interval
              the evaluation interval while evaluating c3 metric. This parameter will also be used to normalize dataset we get through python.
    @return PerfTime. The "c3Time" field is the amount of time taken (in nanoseconds) to train the model using C3;
             the "pyTime" field is the amount of time taken (in nanoseconds) to train in pure Python.
    """
        ...


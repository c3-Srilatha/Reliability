#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AggOp


class AggOp():
    """
    Supported aggregation functions
    
    @remarks this represents a made instance of AggOp
    """
    
    PREVIOUS: Optional[str]=None
    """
    Aggregation: The latest occurring point in the interval will be used as value in that interval and will continue to be the value till we see the next point.
    
        E.g.
                 1,2   3,4                   2     4     4
               |-----|-----|-----| ====>  |-----|-----|-----|
              t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
        E.g.
          			 10                    10    10    10
               |-----------------| =====> |-----|-----|-----|
               t1               t4        t1    t2    t3    t4
    """

    EARLIEST: Optional[str]=None
    """
    Treatment EARLIEST returns the first value in every interval
    
       Aggregation: The earliest occurring point in the interval will be used as value in that interval.
    
         E.g
                  1,2   3,4                   1     3     0
                |-----|-----|-----| ====>  |-----|-----|-----|
               t1    t2    t3    t4        t1    t2    t3    t4
    
       Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
         E.g.
           			 10                    10    10    10
                |-----------------| =====> |-----|-----|-----|
                t1               t4        t1    t2    t3    t4
    """

    LATEST: Optional[str]=None
    """
    Treatment LATEST is very similar to PREVIOUS except the part where the value overflows to the subsequent intervals forward.
    
       Aggregation: The latest occurring point in the interval will be used as value in that interval.
    
         E.g
                  1,2   3,4                   2     4     0
                |-----|-----|-----| ====>  |-----|-----|-----|
               t1    t2    t3    t4        t1    t2    t3    t4
    
       Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
         E.g.
           			 10                    10    10    10
                |-----------------| =====> |-----|-----|-----|
                t1               t4        t1    t2    t3    t4
    """

    AND: Optional[str]=None
    """
    Datapoints will be AND'ed based on their values. The following rules will be followed
             0 & 0 = 0
             0 & 1 = 0
             1 & 0 = 0
             1 & 1 = 1
    
      Aggregation: The data points will be AND'ed within the interval
    
          E.g.
                  1,1   0,0   1,0             1     0     0
                |-----|-----|-----| ====>  |-----|-----|-----|
               t1    t2    t3    t4        t1    t2    t3    t4
    
      Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
          E.g.
                        1                     1     1     1
                |-----------------| =====> |-----|-----|-----|
                t1               t4        t1    t2    t3    t4
    """

    OR: Optional[str]=None
    """
    Datapoints will be OR'ed based on their values. The following rules will be followed
             0 || 0 = 0
             0 || 1 = 1
             1 || 0 = 1
             1 || 1 = 1
    
      Aggregation: The data points will be OR'ed within the interval
    
          E.g.
                  1,1   0,0   1,0             1     0     1
                |-----|-----|-----| ====>  |-----|-----|-----|
               t1    t2    t3    t4        t1    t2    t3    t4
    
      Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
          E.g.
                        1                     1     1     1
                |-----------------| =====> |-----|-----|-----|
                t1               t4        t1    t2    t3    t4
    """

    COUNT: Optional[str]=None
    """
    Value at each interval will be the count of the raw data points in that interval
    
    Aggregation: The raw data point will be counted and the resultant count used as the value of the interval
    
        E.g.
                1,1   5,5                   2     2     0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
    
        E.g.
                      1                    1/3   1/3   1/3
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    ROLLINGCOUNT: Optional[str]=None
    """
    Value at each interval will be the rolling count from the beginning of the data irrespective of the time range. (Only supported in @see TSDecl)
    
    Aggregation: Value at each interval will be the rolling count from the beginning of the data irrespective of the time range.
    
        E.g.
                1,1   0,0                   2     4     4
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
    
        E.g.
                      1                    1/3   1/3   1/3
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    INTEGRAL: Optional[str]=None
    """
    Values at each interval will the summed to the interval / divided equally in each interval
    
    Aggregation: Values for each interval will be summed
    
        E.g.
                1,2   3,4                   3     7     0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
    
        E.g.
                      10                  10/3  10/3  10/3
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    SUM: Optional[str]=None
    """
    Values at each interval will the summed to the interval / divided equally in each interval (same as INTEGRAL, INTEGRAL kept for backward compatibility)
    When called on boolean values, the values are converted as such before adding:
    True -> 1, False -> 0
    
    Aggregation: Values for each interval will be summed
    
        E.g.
                1,2   3,4                   3     7     0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
    
        E.g.
                      10                  10/3  10/3  10/3
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    PROD: Optional[str]=None
    """
    Values at each interval will the multiplied to the interval / divided equally in each interval
    When called on boolean values, the values are converted as such before multiplying:
    True -> 1, False -> 0
    
    Aggregation: Values for each interval will be multiplied
    
        E.g.
                1,2   3,4                   2     12     0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the value of the points = value / noOfInterval for every sub interval
    
        E.g.
                      24                    8     8     8
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    RATE: Optional[str]=None
    """
    Value at each interval will be the weighted average for that interval, i.e. the rate at which the values
    measured are is flowing
    For TimedData (without end date) a simple average instead of weighted average is taken
    In both cases, the values for the interval are averaged with the most recent preceding value,
    which could be any amount of time before.
    
      Aggregation: Values for each interval will be averaged (weighted for interval)
    
          E.g.
                  1,2   3,4                  1.5   3.5    0
                |-----|-----|-----| ====>  |-----|-----|-----|
               t1    t2    t3    t4        t1    t2    t3    t4
    
      Disaggregation:During disaggregation the same point will be repeated for all the sub intervals
    
          E.g.
                        10                   10    10    10
                |-----------------| =====> |-----|-----|-----|
                t1               t4        t1    t2    t3    t4
    """

    AVG: Optional[str]=None
    """
    Value at each interval will be the weighted average for that interval a.k.a the rate at which the data is flowing (same as RATE, RATE kept for backward compatibility)
    For TimedData (without end date) a simple average instead of weighted average is taken
    Aggregation: Values for each interval will be averaged (weighted for interval)
    
        E.g.
                1,2   3,4                  1.5   3.5    0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
        E.g.
                      10                   10    10    10
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    MIN: Optional[str]=None
    """
    Minimum value of all the data points will be chosen for the given interval. During aggregation, minimum value will be chosen. During disaggregation, same value repeats for every interval.
    
    Aggregation: Values for each interval will be a MIN of all the values in that interval
    
        E.g.
                1,2   3,4                  1     3      0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
        E.g.
                      10                   10    10    10
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    MAX: Optional[str]=None
    """
    Maximum value of all the data points will be chosen for the given interval. During aggregation, maximum value will be chosen. During disaggregation, same value repeats for every interval.
    
    Aggregation: Values for each interval will be a MAX of all the values in that interval
    
        E.g.
                1,2   3,4                   2     4     0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
        E.g.
                      10                   10    10    10
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    STDDEV: Optional[str]=None
    """
    Standard deviation of all the data points will be chosen for the given interval.
    During aggregation, stddev will be computed. During disaggregation, same value repeats for every interval
    
    Aggregation: Values for each interval will be the standard deviation of all the values in that interval
    
        E.g.
               1,2,3 3,4,5                   1     1     0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
        E.g.
                      1                     1     1     1
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    VARIANCE: Optional[str]=None
    """
    Variance of all the data points will be chosen for the given interval. During aggregation, maximum value will be chosen. During disaggregation, same value repeats for every interval.
    
    Aggregation: Values for each interval will be the variance of all the values in that interval
    
        E.g.
               1,2,3 3,4,5                   1     1     0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
        E.g.
                      1                     1     1     1
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    PERCENTILE: Optional[str]=None
    """
    Xth Percentile of all the data points will be chosen for the given interval. During aggregation, xth percentile value will be chosen. During disaggregation, same value repeats for every interval.
    
    Aggregation: Values for each interval will be the xth percentile of all the values in that interval - lets say percentile is 75th
    
        E.g.
               1,2,3,4 3,4,5,6                      3      5      0
              |-------|-------|-------| ====>  |-------|-------|-------|
             t1       t2     t3      t4        t1     t2      t3      t4
    
    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
        E.g.
                      1                     1     1     1
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    MEDIAN: Optional[str]=None
    """
    Median of all the data points will be chosen for the given interval. During aggregation, median value will be chosen. During disaggregation, same value repeats for every interval.
    
    Aggregation: Values for each interval will be the median of all the values in that interval
    
        E.g.
               1,2,3 3,4,5                   2     4     0
              |-----|-----|-----| ====>  |-----|-----|-----|
             t1    t2    t3    t4        t1    t2    t3    t4
    
    Disaggregation: During disaggregation the same point will be repeated for all the sub intervals
    
        E.g.
                      1                     1     1     1
              |-----------------| =====> |-----|-----|-----|
              t1               t4        t1    t2    t3    t4
    """

    ALL: Optional[str]=None
    def __init__(self, PREVIOUS: Optional[str]=None, EARLIEST: Optional[str]=None, LATEST: Optional[str]=None, AND: Optional[str]=None, OR: Optional[str]=None, COUNT: Optional[str]=None, ROLLINGCOUNT: Optional[str]=None, INTEGRAL: Optional[str]=None, SUM: Optional[str]=None, PROD: Optional[str]=None, RATE: Optional[str]=None, AVG: Optional[str]=None, MIN: Optional[str]=None, MAX: Optional[str]=None, STDDEV: Optional[str]=None, VARIANCE: Optional[str]=None, PERCENTILE: Optional[str]=None, MEDIAN: Optional[str]=None, ALL: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...
    @classmethod
    def isIntegral(cls, agg: str) -> bool:
    """
    Is an integral function (SUM/INTEGRAL)
    """
        ...
    @classmethod
    def isRate(cls, agg: str) -> bool:
    """
    Is a rate function (AVG/RATE)
    """
        ...
    @classmethod
    def isLogicalOperator(cls, agg: str) -> bool:
    """
    Is a logical function (AND/OR)
    """
        ...
    @classmethod
    def pointValidUntilNext(cls, agg: str) -> bool:
    """
    Does function indicate that previous point should be valid until next point is seen
    """
        ...
    @classmethod
    def toDataAgg(cls, agg: str) -> Union[str]:
    """
    Converts this aggregation function to a pandas-compatible aggregation function
    on a {@link Data.Resample}
    """
        ...
    @classmethod
    def reliesOnDataOutOfRange(cls, agg: str) -> bool:
    """
    Does this aggregation function rely on previous data points. E.g. ROLLINGCOUNT, EARLIEST, LATEST, PREVIOUS
    """
        ...


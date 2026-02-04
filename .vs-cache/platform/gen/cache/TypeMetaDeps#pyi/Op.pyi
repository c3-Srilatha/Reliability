#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Op


class Op(BinaryOp, UnaryOp, AggOp):
    """
    Enumeration of all supported operations
    
    @remarks this represents a made instance of Op
    """
    
    ADD: Optional[str]=None
    """
    Adds other value to elements.
    """

    SUB: Optional[str]=None
    """
    Subtracts other value from elements.
    """

    MUL: Optional[str]=None
    """
    Multiples other value to elements.
    """

    DIV: Optional[str]=None
    """
    Alias for TRUEDIV.
    """

    TRUEDIV: Optional[str]=None
    """
    Floating point division of elements by other value.
    """

    FLOORDIV: Optional[str]=None
    """
    Floor division of elements by other value.
    """

    MOD: Optional[str]=None
    """
    Modulos elements by other value.
    """

    POW: Optional[str]=None
    """
    Raises elements to the power of other value.
    """

    RADD: Optional[str]=None

    RSUB: Optional[str]=None

    RMUL: Optional[str]=None

    RDIV: Optional[str]=None

    RTRUEDIV: Optional[str]=None

    RFLOORDIV: Optional[str]=None

    RMOD: Optional[str]=None

    RPOW: Optional[str]=None

    EQ: Optional[str]=None
    """
    Elementwise equality comparison of elements with other value.
    """

    GT: Optional[str]=None
    """
     Elementwise greater than comparison. Comparison with a null operand will always produce false.
     When comparing values of DateTime with String/Number, String/Number value will be converted, if possible,
     to Datetime, and then a comparison is performed.
     Collection<int> > scalar:
    ```
     [[1, 2, 3]           [[false, false, true]
      [4, null, 6]  > 2 =  [true, false, true]
      [7, 8, 9]]           [true, true, true]]
    ```
    
     Collection<int> > Collection<int>:
    ```
     [[1, 1, 3]                   [[false, false, true]
      [1, 1, 3]  > [null, 2, 1] =  [false, false, true]
      [1, 1, 3]]                   [false, false, true]]
    ```
     Collections with different shapes
     Collection<int> > Collection<int>:
    ```
     [[1, 1, 3]    [[0, 2],      [[true, false, false]
      [1, 1, 3]  >  [null, 2], =  [false, false, false]
      [1, 1, 3]]    [4, 0]]       [false, true, false]]
    ```
    
     Collection<Obj> > scalar:
    ```
     [{a: 1, b: 1}        [{a: false, b: false}
      {a: 2, b: 2}  > 2 =  {a: false, b: false}
      {a: 3, b: 3}]        {a: true, b: true}]
    ```
    
     Collection<Obj> > Collection<Obj>:
    ```
     [{a: 1, b: 1}                      [{a: false, b: false}
      {a: 2, b: 2}  + [{a: 2, b: 1}] =   {a: false, b: true}
      {a: 3, b: 3}]                      {a: true, b: true}]
    ```
    """

    GE: Optional[str]=None
    """
    Elementwise greater than or equal to comparison of elements with other value.
    """

    LT: Optional[str]=None
    """
    Elementwise less than comparison of elements with other value.
    """

    LE: Optional[str]=None
    """
    Elementwise less than or equal to comparison of elements with other value.
    """

    NE: Optional[str]=None
    """
    Elementwise not equals comparison of elements with other value.
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

    ABS: Optional[str]=None

    NEG: Optional[str]=None

    INVERT: Optional[str]=None

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
    def __init__(self, ADD: Optional[str]=None, SUB: Optional[str]=None, MUL: Optional[str]=None, DIV: Optional[str]=None, TRUEDIV: Optional[str]=None, FLOORDIV: Optional[str]=None, MOD: Optional[str]=None, POW: Optional[str]=None, RADD: Optional[str]=None, RSUB: Optional[str]=None, RMUL: Optional[str]=None, RDIV: Optional[str]=None, RTRUEDIV: Optional[str]=None, RFLOORDIV: Optional[str]=None, RMOD: Optional[str]=None, RPOW: Optional[str]=None, EQ: Optional[str]=None, GT: Optional[str]=None, GE: Optional[str]=None, LT: Optional[str]=None, LE: Optional[str]=None, NE: Optional[str]=None, AND: Optional[str]=None, OR: Optional[str]=None, ABS: Optional[str]=None, NEG: Optional[str]=None, INVERT: Optional[str]=None, PREVIOUS: Optional[str]=None, EARLIEST: Optional[str]=None, LATEST: Optional[str]=None, COUNT: Optional[str]=None, ROLLINGCOUNT: Optional[str]=None, INTEGRAL: Optional[str]=None, SUM: Optional[str]=None, PROD: Optional[str]=None, RATE: Optional[str]=None, AVG: Optional[str]=None, MIN: Optional[str]=None, MAX: Optional[str]=None, STDDEV: Optional[str]=None, VARIANCE: Optional[str]=None, PERCENTILE: Optional[str]=None, MEDIAN: Optional[str]=None, ALL: Optional[str]=None) -> None: ...

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


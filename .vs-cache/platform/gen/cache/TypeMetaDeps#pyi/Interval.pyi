#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Period import Period
from c3.platform.ValueType import ValueType
from c3.platform.Duration import Duration

# Python definitions for the C3 type Interval


class Interval():
    """
    The possible value of the standard normalized time intervals used most often for timeseries.
    
    Note that these are _values_ in the sense that they are pre-defined periods, but are handy to have pre-defined to
    avoid the need for specifying the value each time. For example, `QUARTER_HOUR` is equivalent to the {@link Period}
    `15m` (15 minutes).
    
    @see TemporalUnit
    
    @remarks this represents a made instance of Interval
    """
    
    SECOND: Optional[str]=None

    MINUTE: Optional[str]=None

    FIVE_MINUTE: Optional[str]=None

    TEN_MINUTE: Optional[str]=None

    QUARTER_HOUR: Optional[str]=None

    HALF_HOUR: Optional[str]=None

    HOUR: Optional[str]=None

    DAY: Optional[str]=None

    MONTH: Optional[str]=None

    YEAR: Optional[str]=None
    def __init__(self, SECOND: Optional[str]=None, MINUTE: Optional[str]=None, FIVE_MINUTE: Optional[str]=None, TEN_MINUTE: Optional[str]=None, QUARTER_HOUR: Optional[str]=None, HALF_HOUR: Optional[str]=None, HOUR: Optional[str]=None, DAY: Optional[str]=None, MONTH: Optional[str]=None, YEAR: Optional[str]=None) -> None: ...

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
    def alignDate(cls, date: datetime, interval: str) -> datetime:
    """
    Aligns date to the start of the interval.
    """
        ...
    @classmethod
    def distance(cls, interval: str, start: datetime, end: datetime) -> Union[int]:
    """
    Integer distance (complete intervals - not partial) in between to the two dates for a given interval
    """
        ...
    @classmethod
    def toLowercase(cls, interval: str) -> str:
    """
    Converts the interval name to a lower-case string.
    """
        ...
    @classmethod
    def divide(cls, interval: str, by: str) -> Union[float]:
    """
    Returns a factor by dividing the value interval with the by interval.
    """
        ...
    @classmethod
    def standardize(cls, s: str, failIfBad: bool=None) -> Union[str]:
    """
    Convert various string values into the official interval enum. For example "d" and "days" are both aliases for DAY.
    If the value cannot be understood null is returned, unless failIfBad is true in which case an error is thrown.
    
    @param str string to parse
    @param failIfBad if true, throw an error if string is not recognized
    """
        ...
    @classmethod
    def toPeriod(cls, interval: str) -> Period:
    """
    Return the period this interval corresponds to.
    """
        ...
    @classmethod
    def toDataPeriod(cls, interval: str) -> str:
    """
    Return the pandas-compatible frequency string this interval corresponds to
    """
        ...
    @classmethod
    def coverage(cls, interval: str, start: datetime, end: datetime) -> float:
    """
    Returns the number of intervals the given start and end cover
    e.g.
    ```js
       Interval.coverage('DAY', '2020-01-01', '2020-01-03') => 2
    ```
    @param start
           start timestamp
    @param end
           end timestamp
    @return the coverage for the given dates in the interval
    """
        ...
    @classmethod
    def aligns(cls, interval: str, dt: datetime) -> bool:
    """
    @return true if input timestamp aligns with this interval boundary.
    """
        ...
    @overload
    @classmethod
    def nextTimePoint(cls, interval: str, dt: datetime) -> datetime:
    """
    @return start of the next interval. Assumes time is aligned.
    """
        ...
    @overload
    @classmethod
    def nextTimePoint(cls, interval: str, dt: datetime, n: int) -> datetime:
    """
    Computes n'th next time point. Assumes time is aligned.
    """
        ...
    @overload
    @classmethod
    def prevTimePoint(cls, interval: str, dt: datetime) -> datetime:
    """
    @return start of the previous interval. Assumes time is aligned.
    """
        ...
    @overload
    @classmethod
    def prevTimePoint(cls, interval: str, dt: datetime, n: int) -> datetime:
    """
    Computes n'th previous time point. Assumes time is aligned.
    """
        ...
    @classmethod
    def plus(cls, interval: str, dt: datetime, n: int) -> datetime:
    """
    Returns the timestamp obtained by adding the number of intervals passed to the timestamp.
    
    @param start
           the timestamp.
    @param n
           the number of intervals to add.
    @return the timestamp corresponding to the result/
    """
        ...
    @classmethod
    def nextAligningTimePoint(cls, interval: str, dt: datetime) -> datetime:
    """
    Returns the next time point that aligns with this interval boundary.
    <p>
    For example, if the grain is MONTH:
    <p>
    <li>nextAligningTimePoint("01-01-2000 00:00:00") returns "02-01-2000 00:00:00"
    <li>nextAligningTimePoint("01-17-2000 00:00:00") returns "02-01-2000 00:00:00"
    <li>nextAligningTimePoint("01-01-2000 00:00:01") returns "02-01-2000 00:00:00"
    """
        ...
    @classmethod
    def previousAligningTimePoint(cls, interval: str, dt: datetime) -> datetime:
    """
    If the passed time point aligns with this interval boundary, returns it.
    <p>
    If not, it returns the previous time point that aligns with the grain boundary.
    <p>
    For example, if the grain is MONTH:
    <p>
    <li>previousAligningTimePoint("01-01-2000 00:00:00") returns "01-01-2000 00:00:00"
    <li>previousAligningTimePoint("01-17-2000 00:00:00") returns "01-01-2000 00:00:00"
    <li>previousAligningTimePoint("01-31-2000 23:59:59") returns "01-01-2000 00:00:00"
    """
        ...
    @classmethod
    def dataPointNumber(cls, interval: str, earliest: datetime, searchPoint: datetime) -> int:
    """
    Finds the data point number given the earliest and the start of a particular data point.
    """
        ...
    @classmethod
    def pointCoverage(cls, interval: str, start: datetime, end: datetime) -> float:
    """
    returns the coverage for a single time point
    
    @param start
           the timestamp
    @param end
           the timestamp
    @return point's coverage
    """
        ...
    @classmethod
    def nthTimePoint(cls, interval: str, start: datetime, n: int) -> datetime:
    """
    returns the nth timeseries data point that starts with start (which may or may not
    align with the grain boundary) for the given grain.
    For example: MONTH grain
    nthTimePoint("2000-01-17 00:00:00", 1) returns "2000-01-17 00:00:00"
    nthTimePoint("2000-01-17 00:00:00", 2) returns "2000-02-01 00:00:00"
    nthTimePoint("2000-01-17 00:00:00", 10) returns "2000-10-17 00:00:00"
    nthTimePoint("2000-01-01 00:00:00", 1) returns "2000-01-01 00:00:00"
    
    @param start
           the start of the timeseries
    @param n
           the data point number (1 for 1st data point, etc)
    @return the nth data point
    """
        ...
    @classmethod
    def mask(cls, interval: str, dt: datetime) -> datetime:
    """
    Mask all other components of the input date other than the existing interval.
    E.g. mask(YEAR, '2020-04-03T12:04:12Z') => '2020-01-01T00:00:00Z'
    """
        ...
    @classmethod
    def isFiner(cls, first: str, second: str) -> bool:
    """
    Checks which interval is finer.
    
    @return true if this interval is finer (<) than the other.
    """
        ...
    @classmethod
    def isCoarser(cls, first: str, second: str) -> bool:
    """
    Checks which interval is coarser.
    
    @return true if this interval is coarser (>) than the other.
    """
        ...
    @classmethod
    def toDuration(cls, interval: str) -> Union[Duration]:
    """
    Convert the given interval into a Duration. Note that durations support only up to days natively, so logical
    intervals like month and year will not have an accurate representation for actual calendar periods.
    """
        ...
    @classmethod
    def nextInterval(cls, interval: str) -> Union[str]:
    """
    Next interval in ascending order after the given interval
    """
        ...
    @classmethod
    def prevInterval(cls, interval: str) -> Union[str]:
    """
    Next interval in descending order after the given interval
    """
        ...
    @classmethod
    def closestInterval(cls, first: datetime, second: datetime) -> Union[str]:
    """
    @return closest matching interval between the provided datetime
    """
        ...
    @classmethod
    def closestAlignedInterval(cls, dateTime: datetime) -> Union[str]:
    """
    @return aligned interval
    """
        ...
    @overload
    @classmethod
    def gcd(cls, a: str, b: str) -> str:
    """
    Pick an interval which is the greatest common divisor of the two intervals. Smaller intervals are generally
    sub-intervals of larger ones, but not always. For example, gcd(TEN_MINUTES, QUARTER_HOUR) = FIVE_MINUTE.
    """
        ...
    @overload
    @classmethod
    def gcd(cls, intervals: Array[str]) -> str:
    """
    Pick an interval which is the greatest common divisor of the list of intervals. Smaller intervals are generally
    sub-intervals of larger ones, but not always. For example, gcd(TEN_MINUTES, QUARTER_HOUR) = FIVE_MINUTE.
    """
        ...
    @overload
    @classmethod
    def lcm(cls, a: str, b: str) -> str:
    """
    Pick an interval which is the lowest common multiple(lcm) of the two intervals. Larger intervals are generally
    lcm of smaller ones, but not always. For example, lcm(TEN_MINUTES, QUARTER_HOUR) = HALF_HOUR
    """
        ...
    @overload
    @classmethod
    def lcm(cls, intervals: Array[str]) -> str:
    """
    Pick an interval which is the lowest common multiple(lcm) of the list of intervals.Larger intervals are generally
    lcm of smaller ones, but not always. For example, lcm(TEN_MINUTES, QUARTER_HOUR) = HALF_HOUR
    """
        ...
    @classmethod
    def seconds(cls, interval: str) -> int:
    """
    Number of seconds in an interval
    """
        ...
    @classmethod
    def milliseconds(cls, interval: str) -> int:
    """
    Number of milliseconds in an interval
    """
        ...


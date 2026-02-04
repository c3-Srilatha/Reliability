#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Log.AppProfile.MetricKind


class MetricKind():
    """
    Represents statistical computation options for profiling application logs.
    
    @remarks this represents a made instance of Log.AppProfile.MetricKind
    """
    
    COUNT: Optional[str]=None
    """
    Number of times the action was called.
    """

    VALUES: Optional[str]=None
    """
    All the values for the field matching the groupBy condition.
    """

    SUM: Optional[str]=None
    """
    Sum of time spent on the action, across all calls, in seconds.
    """

    AVG: Optional[str]=None
    """
    Average time spent on the action, across all calls, in seconds.
    """

    MEDIAN: Optional[str]=None
    """
    Median time spent on the action, across all calls, in seconds.
    """

    MAX: Optional[str]=None
    """
    Highest time spent on the action, across all calls, in seconds.
    """

    THIRD_QUARTILE: Optional[str]=None
    """
    Third quartile time spent on the action, across all calls.
    """

    P90: Optional[str]=None
    """
    90th percentile time spent on the action, across all calls.
    """

    P95: Optional[str]=None
    """
    95th percentile time spent on the action, across all calls.
    If there are 100 calls, this is the time spent on the 5th-longest call.
    If there are 5 calls, this is the time spent on the longest call.
    """
    def __init__(self, COUNT: Optional[str]=None, VALUES: Optional[str]=None, SUM: Optional[str]=None, AVG: Optional[str]=None, MEDIAN: Optional[str]=None, MAX: Optional[str]=None, THIRD_QUARTILE: Optional[str]=None, P90: Optional[str]=None, P95: Optional[str]=None) -> None: ...

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


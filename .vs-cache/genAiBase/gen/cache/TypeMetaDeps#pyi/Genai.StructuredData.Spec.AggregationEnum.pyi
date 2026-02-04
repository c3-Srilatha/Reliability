#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Genai.StructuredData.Spec.AggregationEnum


class AggregationEnum():
    """
    Enum type for supported aggregation methods, i.e. methods when {@link EvalSpec#group} is specified.
    
    @remarks this represents a made instance of Genai.StructuredData.Spec.AggregationEnum
    """
    
    SUM: Optional[str]=None
    """
    Arithmetic sum
    """

    AVG: Optional[str]=None
    """
    Arithmetic average
    """

    MAX: Optional[str]=None
    """
    Maximum value
    """

    MIN: Optional[str]=None
    """
    Minimum value
    """

    MEAN: Optional[str]=None
    """
    Mean value
    """

    MEDIAN: Optional[str]=None
    """
    Median value
    """

    COUNT: Optional[str]=None
    """
    Count of values
    """

    YEAR: Optional[str]=None
    """
    Aggregate by year
    """

    MONTH: Optional[str]=None
    """
    Aggregate by month
    """

    DAY: Optional[str]=None
    """
    Aggregate by day
    """

    HOUR: Optional[str]=None
    """
    Aggregate by hour
    """
    def __init__(self, SUM: Optional[str]=None, AVG: Optional[str]=None, MAX: Optional[str]=None, MIN: Optional[str]=None, MEAN: Optional[str]=None, MEDIAN: Optional[str]=None, COUNT: Optional[str]=None, YEAR: Optional[str]=None, MONTH: Optional[str]=None, DAY: Optional[str]=None, HOUR: Optional[str]=None) -> None: ...

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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Data.ColumnMetric


class ColumnMetric():
    """
    @remarks this represents a made instance of Data.ColumnMetric
    """
    
    COUNT_NULL: Optional[str]=None
    """
    Compute count of null values in string, numeric or timestamp/date column.
    """

    COUNT_NAN: Optional[str]=None
    """
    Compute count of NaN values in numeric column.
    """

    COUNT_ZERO: Optional[str]=None
    """
    Compute count of zero values in numeric column.
    """

    MIN: Optional[str]=None
    """
    Compute minimum value in numeric column.
    """

    MAX: Optional[str]=None
    """
    Compute maximum value in numeric column.
    """

    MEAN: Optional[str]=None
    """
    Compute mean value in numeric column.
    """

    Q1: Optional[str]=None
    """
    Compute approximate value of first quartile in numeric column.
    """

    Q2: Optional[str]=None
    """
    Compute approximate value of second quartile in numeric column.
    """

    Q3: Optional[str]=None
    """
    Compute approximate value of third quartile in numeric column.
    """

    COUNT_MILD_OUTLIERS: Optional[str]=None
    """
    Compute number of mild outliers in numeric column.
    """

    COUNT_EXTREME_OUTLIERS: Optional[str]=None
    """
    Compute number of extreme outliers in numeric column.
    """

    POP_STD_DEV: Optional[str]=None
    """
    Compute the population standard deviation of numeric column.
    """

    SAMPLE_STD_DEV: Optional[str]=None
    """
    Compute the sample standard deviation of numeric column.
    """

    SKEW: Optional[str]=None
    """
    Compute skewness of numeric column.
    """

    KURTOSIS: Optional[str]=None
    """
    Compute kurtosis of numeric column.
    """

    COUNT_UNIQ: Optional[str]=None
    """
    Compute number of unique values in string column.
    """

    COUNT_EMPTY: Optional[str]=None
    """
    Compute number of empty values in string column.
    """
    def __init__(self, COUNT_NULL: Optional[str]=None, COUNT_NAN: Optional[str]=None, COUNT_ZERO: Optional[str]=None, MIN: Optional[str]=None, MAX: Optional[str]=None, MEAN: Optional[str]=None, Q1: Optional[str]=None, Q2: Optional[str]=None, Q3: Optional[str]=None, COUNT_MILD_OUTLIERS: Optional[str]=None, COUNT_EXTREME_OUTLIERS: Optional[str]=None, POP_STD_DEV: Optional[str]=None, SAMPLE_STD_DEV: Optional[str]=None, SKEW: Optional[str]=None, KURTOSIS: Optional[str]=None, COUNT_UNIQ: Optional[str]=None, COUNT_EMPTY: Optional[str]=None) -> None: ...

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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type TimeseriesRequestedData


class TimeseriesRequestedData():
    """
    When a Timeseries is created, different category of data can be requested
    e.g.
    1. actual normalized values for the {@link aggFunc} provided
    2. Earliest/Latest value or date time of the underlying series generated
    3. what intervals are estimated
    In order to retrieve non standard (simple aggregated provided via #aggFunc), use this field
    
    Data info:
                     isTimeRangeAvailable  | canResultHaveGaps
    
    
        COUNT            YES                      NO
    
        ESTIMATES        YES                      YES
    
        NORMALIZED       YES                      YES
    
        MISSING          YES                      NO
    
    @remarks this represents a made instance of TimeseriesRequestedData
    """
    
    NORMALIZED: Optional[str]=None
    """
    Returns data as normalized by the specified {@link AggOp} during the Timeseries generation
    """

    ESTIMATES: Optional[str]=None
    """
    Returns a boolean Timeseries converted double values determining whether the given interval is estimated or not
    """

    COUNT: Optional[str]=None
    """
    Returns count of raw data points in every interval for the returned Timeseries
    """

    MISSING: Optional[str]=None
    """
    Returns a boolean Timeseries converted double values determining whether the given interval is missing or not
    """

    EARLIEST: Optional[str]=None
    """
    Returns an identity Timeseries with the value of the earliest available datetime
    """

    LATEST: Optional[str]=None
    """
    Returns an identity Timeseries with the value of the latest available datetime
    """

    EARLIEST_VALUE: Optional[str]=None
    """
    Returns an identity Timeseries with the value of the earliest available value
    """

    LATEST_VALUE: Optional[str]=None
    """
    Returns an identity Timeseries with the value of the latest available value
    """
    def __init__(self, NORMALIZED: Optional[str]=None, ESTIMATES: Optional[str]=None, COUNT: Optional[str]=None, MISSING: Optional[str]=None, EARLIEST: Optional[str]=None, LATEST: Optional[str]=None, EARLIEST_VALUE: Optional[str]=None, LATEST_VALUE: Optional[str]=None) -> None: ...

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


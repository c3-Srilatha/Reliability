#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Genai.DateTimeGranularityFormat


class DateTimeGranularityFormat():
    """
    Enum type mapping date time granularities to corresponding string format.
    
    @remarks this represents a made instance of Genai.DateTimeGranularityFormat
    """
    
    seconds: Optional[str]=None
    """
    Format including year, month, day, hour, minute, and second
    """

    minutes: Optional[str]=None
    """
    Format including year, month, day, hour, and minute (seconds set to 00)
    """

    hours: Optional[str]=None
    """
    Format including year, month, day, and hour (minutes and seconds set to 00:00)
    """

    days: Optional[str]=None
    """
    Format including year, month, and day (time set to 00:00:00)
    """

    weeks: Optional[str]=None
    """
    Format including year, month, and day (time set to 00:00:00, representing the start of the week)
    """

    months: Optional[str]=None
    """
    Format including year and month (day set to 01 and time set to 00:00:00, representing the start of the month)
    """

    years: Optional[str]=None
    """
    Format including year (month and day set to 01-01 and time set to 00:00:00, representing the start of the year)
    """
    def __init__(self, seconds: Optional[str]=None, minutes: Optional[str]=None, hours: Optional[str]=None, days: Optional[str]=None, weeks: Optional[str]=None, months: Optional[str]=None, years: Optional[str]=None) -> None: ...

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


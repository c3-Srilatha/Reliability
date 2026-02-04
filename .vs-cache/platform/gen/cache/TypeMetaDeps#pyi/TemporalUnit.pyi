#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type TemporalUnit


class TemporalUnit():
    """
    The possible units of time measurement. Note that these are logical units, especially ones larger than "hour",
    because calendar and time zone logic makes them vary in actual length.
    
    @remarks this represents a made instance of TemporalUnit
    """
    
    NANOSECOND: Optional[str]=None
    """
    One billionth (10⁻⁹) of a second.
    """

    MICROSECOND: Optional[str]=None
    """
    One milionth (10⁻⁶) of a second.
    """

    MILLISECOND: Optional[str]=None
    """
    One thousandth of a second.
    """

    SECOND: Optional[str]=None
    """
    One second.
    """

    MINUTE: Optional[str]=None
    """
    One minute (60 seconds).
    """

    HOUR: Optional[str]=None
    """
    One hour (60 minutes).
    """

    DAY: Optional[str]=None
    """
    One day (24 hours except on daylight savings transitions).
    """

    WEEK: Optional[str]=None
    """
    A 7-day period.
    """

    MONTH: Optional[str]=None
    """
    A calendar month (Gregorian calendar). A logical month is "30 days", but actual months are 28-31 days depending on
    which month and whether it is a leap year.
    """

    QUARTER: Optional[str]=None
    """
    Three months. A logical quarter is 91 days, but actual quarters have slight different lengths depending on which
    months comprise them.
    """

    YEAR: Optional[str]=None
    """
    A calendar year. This is usually 365 days, but 366 on leap years.
    """
    def __init__(self, NANOSECOND: Optional[str]=None, MICROSECOND: Optional[str]=None, MILLISECOND: Optional[str]=None, SECOND: Optional[str]=None, MINUTE: Optional[str]=None, HOUR: Optional[str]=None, DAY: Optional[str]=None, WEEK: Optional[str]=None, MONTH: Optional[str]=None, QUARTER: Optional[str]=None, YEAR: Optional[str]=None) -> None: ...

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
    def isFiner(cls, left: str, right: str) -> bool:
    """
    Return true if the first argument represents a _shorter_ time period than the latter. For example, MILLISECOND is
    finer than SECOND.
    
    @see #isCoarser
    """
        ...
    @classmethod
    def isCoarser(cls, left: str, right: str) -> bool:
    """
    Return true if the first argument represents a _longer_ time period than the latter. For example, WEEK is coarser
    than DAY.
    
    @see #isFiner
    """
        ...
    @classmethod
    def standardize(cls, s: str, failIfBad: bool=None) -> Union[str]:
    """
    Convert various string values into the official enum value. For example "d" and "days" are both aliases for DAY.
    If the value cannot be understood null is returned, unless failIfBad is true in which case an error is thrown.
    
    Note that units are generally case insensitive, except the abbreviation "m" which indicates MINUTE while the
    alias "M" indicates MONTH. This also supports the Pandas period aliases and frequencies, such as "A" for YEAR.
    
    @param str string to parse
    @param failIfBad if true, throw an error if string is not recognized
    """
        ...
    @classmethod
    def abbreviate(cls, unit: str, failIfBad: bool=None) -> Union[str]:
    """
    Return the standard abbreviation for this unit. This will be a short (1- or 2-character) lower-case string:
     - "ns" (nanosecond)
     - "μs" (microsecond)
     - "ms" (millisecond)
     - "s" (second)
     - "m" (minute)
     - "h" (hour)
     - "d" (day)
     - "w" (week)
     - "mo" (month)
     - "q" (quarter)
     - "y" (year)
    
    Note that most abbreviations are 1 letter long, except the sub-second values (for clarity) and MONTH
    (to distinguish it from MINUTE).
    
    @param unit unit value
    @param failIfBad if true, throw an error if unit is not recognized
    """
        ...


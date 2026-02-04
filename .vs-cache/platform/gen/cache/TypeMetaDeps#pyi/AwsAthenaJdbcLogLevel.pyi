#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsAthenaJdbcLogLevel


class AwsAthenaJdbcLogLevel():
    """
    @remarks this represents a made instance of AwsAthenaJdbcLogLevel
    """
    
    DISABLE: Optional[int]=None
    """
    Disable all logging.
    """

    FATAL: Optional[int]=None
    """
    Log severe error events that lead the driver to abort.
    """

    ERROR: Optional[int]=None
    """
    Log error events that might allow the driver to continue running.
    """

    WARN: Optional[int]=None
    """
    Log events that might result in an error if action is not taken.
    """

    INFO: Optional[int]=None
    """
    Log general information that describes the progress of the driver
    """

    DEBUG: Optional[int]=None
    """
    Log detailed information that is useful for debugging the driver.
    """

    TRACE: Optional[int]=None
    """
    Log all driver activity.
    """
    def __init__(self, DISABLE: Optional[int]=None, FATAL: Optional[int]=None, ERROR: Optional[int]=None, WARN: Optional[int]=None, INFO: Optional[int]=None, DEBUG: Optional[int]=None, TRACE: Optional[int]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[int]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: int, failIfInvalid: bool=None) -> Union[str]:
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
    def valueIndex(cls, value: int, failIfInvalid: bool=None) -> int:
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
    def values(cls) -> Union[Array[int]]:
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
    def valueToLabels(cls) -> Union[Map[int, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, int]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: int) -> bool:
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
    def eachValue(cls, action: Callable[[int]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...


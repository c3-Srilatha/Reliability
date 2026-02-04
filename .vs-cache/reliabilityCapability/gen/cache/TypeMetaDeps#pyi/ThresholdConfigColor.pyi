#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ThresholdConfigColor


class ThresholdConfigColor():
    """
    Enum specifying the available colors for {@link ThresholdConfig#color}.
    
    @remarks this represents a made instance of ThresholdConfigColor
    """
    
    RED: Optional[str]=None
    """
    Red
    """

    ORANGE: Optional[str]=None
    """
    Orange
    """

    YELLOW: Optional[str]=None
    """
    Yellow
    """

    GREEN: Optional[str]=None
    """
    Green
    """

    LIGHT_GREEN: Optional[str]=None
    """
    Light Green
    """

    GREY: Optional[str]=None
    """
    Grey
    """

    CYAN: Optional[str]=None
    """
    Cyan
    """

    BLUE: Optional[str]=None
    """
    Blue
    """

    OLIVE: Optional[str]=None
    """
    Olive
    """

    PURPLE: Optional[str]=None
    """
    Purple
    """

    PLUM: Optional[str]=None
    """
    Plum
    """

    WHITE: Optional[str]=None
    """
    White
    """
    def __init__(self, RED: Optional[str]=None, ORANGE: Optional[str]=None, YELLOW: Optional[str]=None, GREEN: Optional[str]=None, LIGHT_GREEN: Optional[str]=None, GREY: Optional[str]=None, CYAN: Optional[str]=None, BLUE: Optional[str]=None, OLIVE: Optional[str]=None, PURPLE: Optional[str]=None, PLUM: Optional[str]=None, WHITE: Optional[str]=None) -> None: ...

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


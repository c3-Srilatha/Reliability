#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type UiSdlChartColor


class UiSdlChartColor():
    """
    All the options for UiDesigner components that have enum types for their color selection.
    
    @remarks this represents a made instance of UiSdlChartColor
    """
    
    DARK_BLUE: Optional[str]=None
    """
    Blue.
    """

    RED50: Optional[str]=None
    """
    Red-50 design token color.
    """

    GREEN50: Optional[str]=None
    """
    Green-50 design token color.
    """

    RED: Optional[str]=None
    """
    Red.
    """

    GREEN: Optional[str]=None
    """
    Green.
    """

    ORANGE: Optional[str]=None
    """
    Orange.
    """

    LILAC: Optional[str]=None
    """
    Lilac.
    """

    LIGHT_BLUE: Optional[str]=None
    """
    Light blue.
    """

    YELLOW: Optional[str]=None
    """
    Yellow.
    """

    OLIVE: Optional[str]=None
    """
    Olive.
    """

    SKY: Optional[str]=None
    """
    Sky.
    """

    TEAL: Optional[str]=None
    """
    Teal.
    """

    CARBON: Optional[str]=None
    """
    Carbon.
    """

    MAUVE: Optional[str]=None
    """
    Mauve.
    """

    SLATE: Optional[str]=None
    """
    Slate.
    """

    PURPLE: Optional[str]=None
    """
    Purple.
    """
    def __init__(self, DARK_BLUE: Optional[str]=None, RED50: Optional[str]=None, GREEN50: Optional[str]=None, RED: Optional[str]=None, GREEN: Optional[str]=None, ORANGE: Optional[str]=None, LILAC: Optional[str]=None, LIGHT_BLUE: Optional[str]=None, YELLOW: Optional[str]=None, OLIVE: Optional[str]=None, SKY: Optional[str]=None, TEAL: Optional[str]=None, CARBON: Optional[str]=None, MAUVE: Optional[str]=None, SLATE: Optional[str]=None, PURPLE: Optional[str]=None) -> None: ...

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


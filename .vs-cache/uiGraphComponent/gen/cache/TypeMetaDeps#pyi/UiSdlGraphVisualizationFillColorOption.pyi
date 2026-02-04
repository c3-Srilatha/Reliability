#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type UiSdlGraphVisualizationFillColorOption


class UiSdlGraphVisualizationFillColorOption():
    """
    The list of legal colors that can be used to color nodes and edges in the {@link UiSdlGraphVisualization} component.
    
    @remarks this represents a made instance of UiSdlGraphVisualizationFillColorOption
    """
    
    BLUE_50: Optional[str]=None
    """
    Blue 50.
    """

    CYAN_30: Optional[str]=None
    """
    Cyan 30.
    """

    PURPLE_50: Optional[str]=None
    """
    Purple 50.
    """

    SLATE_50: Optional[str]=None
    """
    Slate 50.
    """

    PLUM_50: Optional[str]=None
    """
    Plum 50.
    """

    FOREST_40: Optional[str]=None
    """
    Forest 40.
    """

    CHOCO_50: Optional[str]=None
    """
    Choco 50.
    """

    YELLOW_20: Optional[str]=None
    """
    Yellow 20.
    """

    CYAN_50: Optional[str]=None
    """
    Cyan 50.
    """

    PLUM_30: Optional[str]=None
    """
    Plum 30.
    """

    RED_40: Optional[str]=None
    """
    Red 40.
    """

    ORANGE_40: Optional[str]=None
    """
    Orange 40.
    """

    LIME_40: Optional[str]=None
    """
    Lime 40.
    """

    PURPLE_40: Optional[str]=None
    """
    Purple 40.
    """
    def __init__(self, BLUE_50: Optional[str]=None, CYAN_30: Optional[str]=None, PURPLE_50: Optional[str]=None, SLATE_50: Optional[str]=None, PLUM_50: Optional[str]=None, FOREST_40: Optional[str]=None, CHOCO_50: Optional[str]=None, YELLOW_20: Optional[str]=None, CYAN_50: Optional[str]=None, PLUM_30: Optional[str]=None, RED_40: Optional[str]=None, ORANGE_40: Optional[str]=None, LIME_40: Optional[str]=None, PURPLE_40: Optional[str]=None) -> None: ...

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


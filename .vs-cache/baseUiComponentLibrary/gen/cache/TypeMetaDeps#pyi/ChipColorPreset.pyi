#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ChipColorPreset


class ChipColorPreset():
    """
    All available color presets for chips in a {@link ChipsCell}. When {@link ChipsCell#outlined}
    is true, only the primary color will be used.
    
    @see ChipStyle#colorPreset
    
    @remarks this represents a made instance of ChipColorPreset
    """
    
    SLATE: Optional[str]=None
    """
    |                | Light      | Dark       |
    |----------------|:----------:|:----------:|
    | **Primary**    | `slate-70` | `slate-40` |
    | **Background** | `slate-20` | `slate-80` |
    """

    ORANGE: Optional[str]=None
    """
    |                | Light       | Dark        |
    |----------------|:-----------:|:-----------:|
    | **Primary**    | `orange-70` | `orange-40` |
    | **Background** | `orange-20` | `orange-80` |
    """

    OLIVE: Optional[str]=None
    """
    |                | Light      | Dark       |
    |----------------|:----------:|:----------:|
    | **Primary**    | `olive-70` | `olive-40` |
    | **Background** | `olive-20` | `olive-80` |
    """

    LIME: Optional[str]=None
    """
    |                | Light     | Dark      |
    |----------------|:---------:|:---------:|
    | **Primary**    | `lime-70` | `lime-40` |
    | **Background** | `lime-20` | `lime-80` |
    """

    FOREST: Optional[str]=None
    """
    |                | Light       | Dark        |
    |----------------|:-----------:|:-----------:|
    | **Primary**    | `forest-70` | `forest-40` |
    | **Background** | `forest-20` | `forest-80` |
    """

    CYAN: Optional[str]=None
    """
    |                | Light     | Dark      |
    |----------------|:---------:|:---------:|
    | **Primary**    | `cyan-70` | `cyan-40` |
    | **Background** | `cyan-20` | `cyan-80` |
    """

    BLUE: Optional[str]=None
    """
    |                | Light     | Dark      |
    |----------------|:---------:|:---------:|
    | **Primary**    | `blue-70` | `blue-40` |
    | **Background** | `blue-20` | `blue-80` |
    """

    PURPLE: Optional[str]=None
    """
    |                | Light       | Dark        |
    |----------------|:-----------:|:-----------:|
    | **Primary**    | `purple-70` | `purple-40` |
    | **Background** | `purple-20` | `purple-80` |
    """

    PLUM: Optional[str]=None
    """
    |                | Light     | Dark      |
    |----------------|:---------:|:---------:|
    | **Primary**    | `plum-70` | `plum-40` |
    | **Background** | `plum-20` | `plum-80` |
    """

    CHOCO: Optional[str]=None
    """
    |                | Light      | Dark       |
    |----------------|:----------:|:----------:|
    | **Primary**    | `choco-70` | `choco-40` |
    | **Background** | `choco-20` | `choco-80` |
    """

    RED: Optional[str]=None
    """
    |                | Light    | Dark     |
    |----------------|:--------:|:--------:|
    | **Primary**    | `red-70` | `red-40` |
    | **Background** | `red-20` | `red-80` |
    """

    YELLOW: Optional[str]=None
    """
    |                | Light       | Dark        |
    |----------------|:-----------:|:-----------:|
    | **Primary**    | `yellow-70` | `yellow-40` |
    | **Background** | `yellow-20` | `yellow-80` |
    """

    GREEN: Optional[str]=None
    """
    |                | Light      | Dark       |
    |----------------|:----------:|:----------:|
    | **Primary**    | `green-70` | `green-40` |
    | **Background** | `green-20` | `green-80` |
    """
    def __init__(self, SLATE: Optional[str]=None, ORANGE: Optional[str]=None, OLIVE: Optional[str]=None, LIME: Optional[str]=None, FOREST: Optional[str]=None, CYAN: Optional[str]=None, BLUE: Optional[str]=None, PURPLE: Optional[str]=None, PLUM: Optional[str]=None, CHOCO: Optional[str]=None, RED: Optional[str]=None, YELLOW: Optional[str]=None, GREEN: Optional[str]=None) -> None: ...

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


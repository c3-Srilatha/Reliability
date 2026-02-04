#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type UiSdlGridGutterAndPadding


class UiSdlGridGutterAndPadding():
    """
    The padding and gutter values available for {@link UiSdlGridLayout},
    {@link UiSdlGridContainer} and {@link UiSdlComponentContainer}.
    
    @remarks this represents a made instance of UiSdlGridGutterAndPadding
    """
    
    GP0: Optional[int]=None

    GP2: Optional[int]=None

    GP4: Optional[int]=None

    GP8: Optional[int]=None

    GP12: Optional[int]=None

    GP16: Optional[int]=None

    GP24: Optional[int]=None

    GP32: Optional[int]=None

    GP40: Optional[int]=None

    GP80: Optional[int]=None
    def __init__(self, GP0: Optional[int]=None, GP2: Optional[int]=None, GP4: Optional[int]=None, GP8: Optional[int]=None, GP12: Optional[int]=None, GP16: Optional[int]=None, GP24: Optional[int]=None, GP32: Optional[int]=None, GP40: Optional[int]=None, GP80: Optional[int]=None) -> None: ...

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


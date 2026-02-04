#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Log.AppProfile.GroupByField


class GroupByField():
    """
    GroupBy operation is supported on the following action fields.
    
    @remarks this represents a made instance of Log.AppProfile.GroupByField
    """
    
    ACTION_NAME: Optional[str]=None
    """
    Id of the {@link Action}
    """

    ACTION_TYPE: Optional[str]=None
    """
    Target type of the {@link Action}
    """

    STATUS: Optional[str]=None
    """
    Status of the {@link Action}
    """

    ACTION_FUNCTION: Optional[str]=None
    """
    Unique longHashCode of the TargetType#actionName string
    """

    PARENT_ACTION_FUNCTIONS: Optional[str]=None
    """
    A string attribute representing a list of parent function identifiers.
    The identifiers are separated by colons (:) and indicate the functions that called the current function (a_func).
    """

    ACTION_ID: Optional[str]=None
    """
    Unique identifier of the action
    """

    PARENT_ACTION_IDS: Optional[str]=None
    """
    A string attribute representing a list of parent actionIds.
    The actionIds are separated by colons (:).
    """
    def __init__(self, ACTION_NAME: Optional[str]=None, ACTION_TYPE: Optional[str]=None, STATUS: Optional[str]=None, ACTION_FUNCTION: Optional[str]=None, PARENT_ACTION_FUNCTIONS: Optional[str]=None, ACTION_ID: Optional[str]=None, PARENT_ACTION_IDS: Optional[str]=None) -> None: ...

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


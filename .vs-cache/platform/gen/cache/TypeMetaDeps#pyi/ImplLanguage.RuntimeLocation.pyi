#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ImplLanguage.RuntimeLocation


class RuntimeLocation():
    """
    The logical location of {@link Action} execution.
    
    @remarks this represents a made instance of ImplLanguage.RuntimeLocation
    """
    
    SERVER: Optional[str]=None
    """
    Execute from the server address space. This is the only option for action engines implemented directly in Java or
    using processes run from the Java server.
    """

    CLIENT: Optional[str]=None
    """
    Execute from the client (caller) address space. This is the only option for actions which need to interact with
    the local environment directly, such as user interface.
    """
    def __init__(self, SERVER: Optional[str]=None, CLIENT: Optional[str]=None) -> None: ...

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
    def forName(cls, name: str, failIfNone: bool=None) -> str:
    """
    @return the matching runtime value for the specified name or null
    """
        ...
    @classmethod
    def canRun(cls, firstLocation: str=None, secondLocation: str=None) -> bool:
    """
    @return if @firstLocation can run @secondLocation. A location with null value can only run a location with null value.
    A non-null location can run itself and a location with null value.
    """
        ...
    @classmethod
    def regexPattern(cls) -> str:
    """
    Regular expression that matches all valid locations.
    """
        ...
    @classmethod
    def superset(cls, location: str=None) -> Union[Array[str]]:
    """
    @return If the location is null return an array with empty string else return an array with empty string and the location.
    """
        ...


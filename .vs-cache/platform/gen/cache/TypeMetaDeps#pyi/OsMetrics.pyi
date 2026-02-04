#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type OsMetrics


class OsMetrics():
    """
    Type that identifies the state of the hosting operating system and run commands.
    
    @remarks this represents a made instance of OsMetrics
    """
    
    CPU_COUNT: Optional[str]=None
    """
    the cpu count of the host on which the Os is installed.
    """

    MEMORY_GB: Optional[str]=None
    """
    the memory of the host.
    """

    THREAD_COUNT: Optional[str]=None
    """
    the thread count of all the processes running in the Os.
    """

    PROCESS_COUNT: Optional[str]=None
    """
    the process count of the Os.
    """

    OPEN_FILE_DESCRIPTOR_COUNT: Optional[str]=None
    """
    count the number of open file descriptors
    """

    FREE_MEMORY_GB: Optional[str]=None
    """
    returns the available memory on the host
    """

    FREE_SWAP_SPACE_GB: Optional[str]=None
    """
    returns the free swap space size on the host
    """

    CPU: Optional[str]=None
    """
    returns CPU Usage of the host
    """
    def __init__(self, CPU_COUNT: Optional[str]=None, MEMORY_GB: Optional[str]=None, THREAD_COUNT: Optional[str]=None, PROCESS_COUNT: Optional[str]=None, OPEN_FILE_DESCRIPTOR_COUNT: Optional[str]=None, FREE_MEMORY_GB: Optional[str]=None, FREE_SWAP_SPACE_GB: Optional[str]=None, CPU: Optional[str]=None) -> None: ...

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


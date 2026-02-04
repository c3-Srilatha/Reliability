#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type PerfMetricMeasure


class PerfMetricMeasure():
    """
    @remarks this represents a made instance of PerfMetricMeasure
    """
    
    time: Optional[str]=None
    """
    Elapsed time in seconds
    """

    cpu: Optional[str]=None
    """
    CPU time in seconds
    """

    io: Optional[str]=None
    """
    I/O time in seconds
    """

    kv: Optional[str]=None
    """
    Key and Value Store time in seconds
    """

    sql: Optional[str]=None
    """
    SQL time in seconds
    """

    fs: Optional[str]=None
    """
    File System time in seconds
    """

    retainedMem: Optional[str]=None
    """
    Retained memory MB
    """

    allocatedMem: Optional[str]=None
    """
    Total allocated (including freed) memory MB
    """

    memAllocations: Optional[str]=None
    """
    Number of total memory allocations (including memory that was freed)
    """
    def __init__(self, time: Optional[str]=None, cpu: Optional[str]=None, io: Optional[str]=None, kv: Optional[str]=None, sql: Optional[str]=None, fs: Optional[str]=None, retainedMem: Optional[str]=None, allocatedMem: Optional[str]=None, memAllocations: Optional[str]=None) -> None: ...

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


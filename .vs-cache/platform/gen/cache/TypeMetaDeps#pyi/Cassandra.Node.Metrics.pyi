#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Cassandra.Node.Metrics


class Metrics():
    """
    Enum type that identifies the metric to collect for a {@link Cassandra.Node}
    
    @remarks this represents a made instance of Cassandra.Node.Metrics
    """
    
    PendingTaskCount: Optional[str]=None
    """
    Number of queued up tasks across all threadpools on {@link Cassandra.Node}
    """

    ReadLatency: Optional[str]=None
    """
    Local read latency across all tables on {@link Cassandra.Node}
    """

    WriteLatency: Optional[str]=None
    """
    Local write latency across all tables on {@link Cassandra.Node}
    """

    CpuUsage: Optional[str]=None
    """
    CPU usage of {@link Cassandra.Node}
    """

    DiskUsage: Optional[str]=None
    """
    Total disk space used across all SSTables on {@link Cassandra.Node}
    """

    SystemLoad: Optional[str]=None
    """
    Size, in megabytes, of the on disk data size {@link Cassandra.Node} manages
    """

    CompressionMetadataOffHeap: Optional[str]=None
    """
    Off-heap memory used by compression metadata on {@link Cassandra.Node}
    """
    def __init__(self, PendingTaskCount: Optional[str]=None, ReadLatency: Optional[str]=None, WriteLatency: Optional[str]=None, CpuUsage: Optional[str]=None, DiskUsage: Optional[str]=None, SystemLoad: Optional[str]=None, CompressionMetadataOffHeap: Optional[str]=None) -> None: ...

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


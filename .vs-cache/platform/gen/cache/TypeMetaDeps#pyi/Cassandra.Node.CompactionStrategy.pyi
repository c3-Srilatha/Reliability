#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Cassandra.Node.CompactionStrategy


class CompactionStrategy():
    """
    Enum type that identifies the compaction strategy to use when forcing a compaction on {@link Cassandra.Node}
    @see Cassandra.Node#compact
    
    @remarks this represents a made instance of Cassandra.Node.CompactionStrategy
    """
    
    STCS: Optional[str]=None
    """
    SizeTieredCompactionStrategy
    Default compaction strategy. Triggers a minor compaction when there are a number of similar sized SSTables on disk.
    Number of similar sized SSTables to compact on is set in table subproperty, min_threshold.
    """

    TWCS: Optional[str]=None
    """
    TimeWindowCompactionStrategy
    Alternative for time series data. Compacts SSTables using series of 'time windows'. Uses STCS to compact within a time window.
    Duration of the time window is a configurable subproperty
    """

    LCS: Optional[str]=None
    """
    LeveledCompactionStrategy
    Creates small SSTables (160MB by default) that are grouped in to levels. Within levels, SSTables are non-overlapping.
    Each level is 10x larger than previous with more uniform Disk I/O.
    At each level, row keys are merged into non-overlapping SSTables in the next level. SSTables continuously being compacted in to larger levels.
    """
    def __init__(self, STCS: Optional[str]=None, TWCS: Optional[str]=None, LCS: Optional[str]=None) -> None: ...

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


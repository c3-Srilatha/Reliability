#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type DbSourceOper


class DbSourceOper():
    """
    Enum of all source operations for upsert related operations.  Used by UpsertTask/CollectionTask to manage necessary
    invalidations.
    
    @remarks this represents a made instance of DbSourceOper
    """
    
    created: Optional[str]=None
    """
    Data was created via create/upsert/merge operation
    """

    beforeUpdate: Optional[str]=None
    """
    Data is about to be updated via update/upsert/merge operation.
    """

    updated: Optional[str]=None
    """
    Data was updated via update/upsert/merge operation.
    """

    beforeRemove: Optional[str]=None
    """
    Data is about to be removed via remove operation.
    """

    beforeClearCollection: Optional[str]=None
    """
    All data is about to be removed via clearCollection operation.
    """

    beforeCollectionRemoveData: Optional[str]=None
    """
    All data is about to be removed via removeAll operation.
    """

    collectionDataRefreshed: Optional[str]=None
    """
    Invalidations being forced for refresh operation (e.g. refreshCalcFields)
    """

    timeRangeUpdated: Optional[str]=None
    """
    New timeseries data was added.
    """

    timeRangeRemoved: Optional[str]=None
    """
    Timeseries data was removed.
    """

    normalizeTimeseriesTriggered: Optional[str]=None
    """
    Timeseries normalization was explicitely triggered.
    """
    def __init__(self, created: Optional[str]=None, beforeUpdate: Optional[str]=None, updated: Optional[str]=None, beforeRemove: Optional[str]=None, beforeClearCollection: Optional[str]=None, beforeCollectionRemoveData: Optional[str]=None, collectionDataRefreshed: Optional[str]=None, timeRangeUpdated: Optional[str]=None, timeRangeRemoved: Optional[str]=None, normalizeTimeseriesTriggered: Optional[str]=None) -> None: ...

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


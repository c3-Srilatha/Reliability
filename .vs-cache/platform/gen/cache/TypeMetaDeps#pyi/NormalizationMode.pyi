#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type NormalizationMode


class NormalizationMode():
    """
      Determines the normalization mode the tenant is in. This is set on the TenantConfig `Normalize` and has behaviors
      as described below
      E.g.
     ```js
     NormalizationConfig.make().setConfigValue("mode", "ALL");
     ```
      Default mode of normalization is on demand. To check normalization mode use this code:
    ```js
    NormalizationConfig.inst().configValue('mode') || 'ON_DEMAND'
    ```
    
    @remarks this represents a made instance of NormalizationMode
    """
    
    ON_DEMAND: Optional[str]=None
    """
    Invalidates all the series that have been normalized in the past and does NOT put an entry in the normalization queue for normalization asynchronously. (default)
    The series will be normalized the first time it is read. This could cause a delay in response to obtain the series
    """

    ALL: Optional[str]=None
    """
    Invalidates all the series that have been normalized in the past and PUTS an entry in the normalization queue for all series to be normalized asynchronously.
    On reading the series, the current state of the series is returned irrespective of whether the series is normalized or not (This could return stale data). In the case when series is not normalized,
    the current state will be returned & NO NEW entry will be placed in the invalidation queue since there will be one already in the NormalizationQueue for the incremental mode. This data will be eventually consistent
    """

    RECENT: Optional[str]=None
    """
    Invalidates already normalized timeseries, and puts an entry in the invalidation queue to re-normalize the series asynchronously. It doesn't normalize the series who have never been normalized
    """

    AFTER_QUERY: Optional[str]=None
    """
    Invalidates already normalized timeseries, and puts an entry in the invalidation queue to re-normalize the series asynchronously. It doesn't normalize the series who have never been normalized.
    On reading the series, the current state of the series is returned irrespective of whether the series is normalized or not (This could return stale data). In the case when series is not normalized,
    ON_DEMAND normalization will be performed & NO entry will be placed in the invalidation queue to normalize it asynchronously since this is the first access and data will be returned for this series.
    This could be used in scenarios where UI wants the results as per the current state & not wait for normalization to occur when series is marked as invalid
    """
    def __init__(self, ON_DEMAND: Optional[str]=None, ALL: Optional[str]=None, RECENT: Optional[str]=None, AFTER_QUERY: Optional[str]=None) -> None: ...

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


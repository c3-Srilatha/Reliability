#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ReliabilityRawDataValidationDataType


class ReliabilityRawDataValidationDataType():
    """
    Represents the kind of raw data that are validated before deploying the
    C3 AI Reliability application.
    1. `SENSOR_TIME_SERIES` --> This refers to the `CanonicalPointMeasurement` data
    2. `PPMS` --> This refers to the `CanonicalPointPhysicalMeasurementSeries` data
    3. `EVENTS` --> This refers to the `CanonicalReliabilityAssetEvent` data
    4. `ASSET_HIERARCHY_EXCEL` --> This refers to the asset hierarchy excel spreadsheet that
    contains the relational data representing the asset hierarchy and asset templates (plus failure modes
    and recommended actions)
    5. `CROSS_VALIDATION` --> This is not strictly a data type but it represents the existence of
    many different kinds of data that need to be cross-referenced with one another to validate all
    data sources together as opposed to just verifying that one data source contains good data. An example
    cross-reference would be to check if there are sensor id's that do not have time series data associated
    with them. This would involve tallying the sensor id's from the `ASSET_HIERARCHY_EXCEL` and
    `SENSOR_TIME_SERIES`. There are several such checks that need to be performed to completely validate the
    raw data provided.
    
    @remarks this represents a made instance of ReliabilityRawDataValidationDataType
    """
    
    SENSOR_TIME_SERIES: Optional[str]=None
    """
    Represents time series sensor data used for validation.
    This refers to `CanonicalPointMeasurement` data.
    """

    PPMS: Optional[str]=None
    """
    Represents physical measurement series data used for validation.
    This refers to `CanonicalPointPhysicalMeasurementSeries` data.
    """

    EVENTS: Optional[str]=None
    """
    Represents event data associated with reliability assets.
    This refers to `CanonicalReliabilityAssetEvent` data.
    """

    ASSET_HIERARCHY_EXCEL: Optional[str]=None
    """
    Represents the asset hierarchy spreadsheet used for asset structure validation.
    This includes relational asset data, failure modes, and recommended actions.
    """

    CROSS_VALIDATION: Optional[str]=None
    """
    Represents cross-validation across multiple data sources.
    Ensures consistency, such as verifying sensor IDs exist in both `ASSET_HIERARCHY_EXCEL` and `SENSOR_TIME_SERIES`.
    """
    def __init__(self, SENSOR_TIME_SERIES: Optional[str]=None, PPMS: Optional[str]=None, EVENTS: Optional[str]=None, ASSET_HIERARCHY_EXCEL: Optional[str]=None, CROSS_VALIDATION: Optional[str]=None) -> None: ...

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


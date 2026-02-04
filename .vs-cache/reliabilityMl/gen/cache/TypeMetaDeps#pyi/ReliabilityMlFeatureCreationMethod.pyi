#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ReliabilityMlFeatureCreationMethod


class ReliabilityMlFeatureCreationMethod():
    """
    Used within {@link ReliabilityMlFeaturePreparationSpec}. To create {@link Feature}s for all the
    {@link Sensor}s associated with a {@link ReliabilityAsset}, we can employ two approaches. One way is
    to create {@link Feature}s based on the {@link ExpectedSensor} associated with the
    ReliabilityAssetSensorAssociationJob, i.e., `EXPECTED_SENSOR`. The other way is to create
    {@link Feature}s based on the {@link Sensor#id} directly, i.e., `SENSOR`.
    Sometimes, only some {@link ReliabilityAssetSensorRelation}s will have an associated
    {@link ExpectedSensor}. In these cases, when {@link Feature}s from ALL {@link Sensor}s have to be
    used in the {@link MlModel}, use the `BEST` option.
    
    @remarks this represents a made instance of ReliabilityMlFeatureCreationMethod
    """
    
    SENSOR: Optional[str]=None
    """
    Represents the creation of features based on the sensor's ID directly.
    Use this method when you want to create features from the {@link Sensor#id} of a sensor.
    """

    EXPECTED_SENSOR: Optional[str]=None
    """
    Represents the creation of features based on the associated {@link ExpectedSensor}.
    Use this method when you want to use an {@link ExpectedSensor} associated with the
    ReliabilityAssetSensorAssociationJob for feature creation.
    """

    BEST: Optional[str]=None
    """
    Represents the use of the best available sensor data when there are mixed cases.
    This method should be used when {@link Feature}s from all sensors are required,
    but only some sensors have an associated {@link ExpectedSensor}.
    """
    def __init__(self, SENSOR: Optional[str]=None, EXPECTED_SENSOR: Optional[str]=None, BEST: Optional[str]=None) -> None: ...

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


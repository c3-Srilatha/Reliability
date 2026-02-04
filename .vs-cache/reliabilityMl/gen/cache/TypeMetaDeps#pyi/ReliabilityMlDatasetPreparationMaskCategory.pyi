#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ReliabilityMlDatasetPreparationMaskCategory


class ReliabilityMlDatasetPreparationMaskCategory():
    """
    Enum of possible masks that can be used as a part of dataset preparation.
    See {@link ReliabilityMlDatasetPreparationHelper} for more details.
    
    @remarks this represents a made instance of ReliabilityMlDatasetPreparationMaskCategory
    """
    
    mask_IsAssetNotOperational: Optional[str]=None
    """
    Mask indicating that the asset is not operational.
    This could be used to filter or handle data related to downtime or failure events.
    """

    mask_AssetEvent: Optional[str]=None
    """
    Mask representing asset event data, such as maintenance or failure events.
    This can be useful for isolating data that corresponds to significant asset-related events.
    """

    mask_PreAssetEvent: Optional[str]=None
    """
    Mask for data occurring before an asset event.
    This is useful for analyzing the conditions leading up to a specific asset event.
    """

    mask_PostAssetEvent: Optional[str]=None
    """
    Mask for data occurring after an asset event.
    This helps in understanding the impact or recovery after an asset event has occurred.
    """

    mask_AdHocTraining: Optional[str]=None
    """
    Mask for ad hoc training data, typically used for one-off or special training tasks.
    This is often used for specific model training based on temporary or non-standard datasets.
    """

    mask_AdHocInference: Optional[str]=None
    """
    Mask for ad hoc inference data, typically used for making one-time predictions or analysis.
    This is used when applying the model to data that wasn't part of the original training set.
    """

    mask_AlgorithmicallyComputed: Optional[str]=None
    """
    Mask for algorithmically computed data.
    This is used for features or data points that are generated through a specific algorithm, rather than being directly observed.
    """
    def __init__(self, mask_IsAssetNotOperational: Optional[str]=None, mask_AssetEvent: Optional[str]=None, mask_PreAssetEvent: Optional[str]=None, mask_PostAssetEvent: Optional[str]=None, mask_AdHocTraining: Optional[str]=None, mask_AdHocInference: Optional[str]=None, mask_AlgorithmicallyComputed: Optional[str]=None) -> None: ...

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


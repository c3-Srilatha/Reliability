#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsRedShiftStatus


class AwsRedShiftStatus():
    """
    @remarks this represents a made instance of AwsRedShiftStatus
    """
    
    AVAILABLE: Optional[str]=None
    """
    The cluster is running and available.
    """

    CREATING: Optional[str]=None
    """
    Amazon Redshift is creating the cluster.
    """

    DELETING: Optional[str]=None
    """
    Amazon Redshift is deleting the cluster.
    """

    MODIFYING: Optional[str]=None
    """
    Amazon Redshift is applying changes to the cluster.
    """

    REBOOTING: Optional[str]=None
    """
    Amazon Redshift is rebooting the cluster.
    """

    RENAMING: Optional[str]=None
    """
    Amazon Redshift is applying a new name to the cluster.
    """

    RESIZING: Optional[str]=None
    """
    Amazon Redshift is resizing the cluster.
    """

    ROTATING_KEYS: Optional[str]=None
    """
    Amazon Redshift is rotating encryption keys for the cluster.
    """

    STORAGE_FULL: Optional[str]=None
    """
    The cluster has reached its storage capacity. Resize the cluster to add nodes or to choose a different node size.
    """

    UPDATING_HSM: Optional[str]=None
    """
    Amazon Redshift is updating the HSM configuration.
    """

    FINAL_SNAPSHOT: Optional[str]=None
    """
    Amazon Redshift is taking a final snapshot of the cluster before deleting it.
    """

    HARDWARE_FAILURE: Optional[str]=None
    """
    The cluster suffered a hardware failure.
    """

    INCOMPATIBLE_HSM: Optional[str]=None
    """
    Amazon Redshift cannot connect to the hardware security module (HSM).
    """

    INCOMPATIBLE_NETWORK: Optional[str]=None
    """
    There is an issue with the underlying network configuration.
    """

    INCOMPATIBLE_PARAMETERS: Optional[str]=None
    """
    There is an issue with one or more parameter values in the associated parameter group, and the parameter value or
    values cannot be applied.
    """

    INCOMPATIBLE_RESTORE: Optional[str]=None
    """
    There was an issue restoring the cluster from the snapshot.
    """
    def __init__(self, AVAILABLE: Optional[str]=None, CREATING: Optional[str]=None, DELETING: Optional[str]=None, MODIFYING: Optional[str]=None, REBOOTING: Optional[str]=None, RENAMING: Optional[str]=None, RESIZING: Optional[str]=None, ROTATING_KEYS: Optional[str]=None, STORAGE_FULL: Optional[str]=None, UPDATING_HSM: Optional[str]=None, FINAL_SNAPSHOT: Optional[str]=None, HARDWARE_FAILURE: Optional[str]=None, INCOMPATIBLE_HSM: Optional[str]=None, INCOMPATIBLE_NETWORK: Optional[str]=None, INCOMPATIBLE_PARAMETERS: Optional[str]=None, INCOMPATIBLE_RESTORE: Optional[str]=None) -> None: ...

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


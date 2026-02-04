#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsEmrInstanceGroupState


class AwsEmrInstanceGroupState():
    """
    Enum for all possible states of an instance group inside the Emr cluster
    
    @remarks this represents a made instance of AwsEmrInstanceGroupState
    """
    
    ARRESTED: Optional[str]=None
    """
    The instance group becomes arrested when it encounters too many errors while trying to launch nodes
    """

    BOOTSTRAPPING: Optional[str]=None
    """
    The instance group is bootstrapping
    """

    ENDED: Optional[str]=None
    """
    The instance group is ended
    """

    PROVISIONING: Optional[str]=None
    """
    The instance group is provisioning applications
    """

    RESIZING: Optional[str]=None
    """
    The instance group is changing its number of nodes.
    """

    RUNNING: Optional[str]=None
    """
    The instance group is running normally
    """

    SHUTTING_DOWN: Optional[str]=None
    """
    The instance group is shutting down.
    """

    SUSPENDED: Optional[str]=None
    """
    The instance group is suspended.
    """

    TERMINATED: Optional[str]=None
    """
    The instance group is terminated in a normal way
    """

    TERMINATING: Optional[str]=None
    """
    The instance group is in the process of termination
    """
    def __init__(self, ARRESTED: Optional[str]=None, BOOTSTRAPPING: Optional[str]=None, ENDED: Optional[str]=None, PROVISIONING: Optional[str]=None, RESIZING: Optional[str]=None, RUNNING: Optional[str]=None, SHUTTING_DOWN: Optional[str]=None, SUSPENDED: Optional[str]=None, TERMINATED: Optional[str]=None, TERMINATING: Optional[str]=None) -> None: ...

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


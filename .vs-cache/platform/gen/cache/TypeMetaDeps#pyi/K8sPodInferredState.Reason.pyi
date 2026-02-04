#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type K8sPodInferredState.Reason


class Reason():
    """
    Specific reason for the inferred pod state.
    Each reason belongs to a parent Kind (see K8sPodInferredState.Kind).
    
    @remarks this represents a made instance of K8sPodInferredState.Reason
    """
    
    PENDING: Optional[str]=None

    SCHEDULING: Optional[str]=None

    CONFIGURING_NETWORK: Optional[str]=None

    MOUNTING_VOLUMES: Optional[str]=None

    STARTING: Optional[str]=None

    PULLING_IMAGE: Optional[str]=None

    IMAGE_PROBLEM: Optional[str]=None

    IMAGE_NOT_FOUND: Optional[str]=None

    IMAGE_AUTH_FAILURE: Optional[str]=None

    IMAGE_ACCESS_DENIED: Optional[str]=None

    IMAGE_REGISTRY_UNREACHABLE: Optional[str]=None

    IMAGE_RATE_LIMITED: Optional[str]=None

    READY: Optional[str]=None

    NOT_READY: Optional[str]=None

    CONTAINER_WAITING: Optional[str]=None

    CRASH_LOOP: Optional[str]=None

    OUT_OF_MEMORY: Optional[str]=None

    CONTAINER_ERROR: Optional[str]=None

    CONTAINER_TERMINATED: Optional[str]=None

    FAILED: Optional[str]=None

    BEING_DELETED_TAINT: Optional[str]=None

    BEING_EVICTED: Optional[str]=None

    DISRUPTION: Optional[str]=None

    TERMINATING: Optional[str]=None

    EVICTED: Optional[str]=None

    COMPLETED: Optional[str]=None

    UNKNOWN: Optional[str]=None
    def __init__(self, PENDING: Optional[str]=None, SCHEDULING: Optional[str]=None, CONFIGURING_NETWORK: Optional[str]=None, MOUNTING_VOLUMES: Optional[str]=None, STARTING: Optional[str]=None, PULLING_IMAGE: Optional[str]=None, IMAGE_PROBLEM: Optional[str]=None, IMAGE_NOT_FOUND: Optional[str]=None, IMAGE_AUTH_FAILURE: Optional[str]=None, IMAGE_ACCESS_DENIED: Optional[str]=None, IMAGE_REGISTRY_UNREACHABLE: Optional[str]=None, IMAGE_RATE_LIMITED: Optional[str]=None, READY: Optional[str]=None, NOT_READY: Optional[str]=None, CONTAINER_WAITING: Optional[str]=None, CRASH_LOOP: Optional[str]=None, OUT_OF_MEMORY: Optional[str]=None, CONTAINER_ERROR: Optional[str]=None, CONTAINER_TERMINATED: Optional[str]=None, FAILED: Optional[str]=None, BEING_DELETED_TAINT: Optional[str]=None, BEING_EVICTED: Optional[str]=None, DISRUPTION: Optional[str]=None, TERMINATING: Optional[str]=None, EVICTED: Optional[str]=None, COMPLETED: Optional[str]=None, UNKNOWN: Optional[str]=None) -> None: ...

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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type K8sPodPhase


class K8sPodPhase():
    """
    @see https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase
    
    @remarks this represents a made instance of K8sPodPhase
    """
    
    PENDING: Optional[str]=None
    """
    The Pod has been accepted by the Kubernetes cluster,
    but one or more of the containers has not been set up and made ready to run.
    This includes time a Pod spends waiting to be scheduled as well as the time spent downloading container images over the network.
    """

    RUNNING: Optional[str]=None
    """
    The Pod has been bound to a node, and all of the containers have been created.
    At least one container is still running, or is in the process of starting or restarting.
    """

    SUCCEEDED: Optional[str]=None
    """
    All containers in the Pod have terminated in success, and will not be restarted.
    """

    FAILED: Optional[str]=None
    """
    All containers in the Pod have terminated, and at least one container has terminated in failure.
    That is, the container either exited with non-zero status or was terminated by the system.
    """

    UNKNOWN: Optional[str]=None
    """
    For some reason the state of the Pod could not be obtained.
    This phase typically occurs due to an error in communicating with the node where the Pod should be running.
    """
    def __init__(self, PENDING: Optional[str]=None, RUNNING: Optional[str]=None, SUCCEEDED: Optional[str]=None, FAILED: Optional[str]=None, UNKNOWN: Optional[str]=None) -> None: ...

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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Probe


class Probe():
    """
    List of supported of {@link App.Probe} for a C3 {@link Server}
    
    @remarks this represents a made instance of Probe
    """
    
    READINESS: Optional[str]=None
    """
    Used to determine if the C3 {@link Server} is ready to accept network traffic.
    Runs periodically throughout the lifetime of a C3 {@link Server}.
    If the readiness probe is unsuccessful, network requests will not be received by this C3 {@link Server} until the probe succeeds.
    
    Examples:
     - Useful for slow starting a C3 Server like in ModelInferenceServing where loading LLM models into memory can take a couple of minutes.
     - Useful for load balancing. If a C3 Server becomes overloaded with outstanding client-requests then we can choose to remove this C3 Server from a load-balancer.
     - Useful for handling imminent node shutdowns. If a C3 Server receives a SIGTERM, then we don’t want to accept any more client-requests while being able to drain already accepted client-requests.
     - Useful for implementing targeted down-scaling. If a C3 Server is supposed to be down-scaled, then we want to remove the C3 Server(s) with the least of amount outstanding client requests (nodes which are not "healthy" will be down-scaled first)
    """

    LIVENESS: Optional[str]=None
    """
    Used to determine if the C3 {@link Server} is "running" or making meaningful progress.
    Runs periodically throughout the lifetime of a C3 {@link Server}.
    If a C3 {@link Server} fails its liveness probe repeatedly, it will be restarted.
    
    Examples:
     - Useful to restart the C3 Server when it has effectively “deadlocked” (ex: thread-deadlocked)
     - Useful to recover from corrupt thread states in an Action.Runtime
    """
    def __init__(self, READINESS: Optional[str]=None, LIVENESS: Optional[str]=None) -> None: ...

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


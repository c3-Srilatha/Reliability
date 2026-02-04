#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Engine.State


class State():
    """
    State of the C3 Engine.
    
    @see Engine.Deprecated
    
    @remarks this represents a made instance of Engine.State
    """
    
    STARTING: Optional[str]=None
    """
    The system has called the {@link Engine.Deprecated#start} method but it has not yet completed. Calls to this engine will be
    blocked until it starts.
    """

    RUNNING: Optional[str]=None
    """
    The {@link Engine.Deprecated#start} method has completed successfully and the engine is functional.
    """

    STOPPING: Optional[str]=None
    """
    The {@link Engine.Deprecated#stop} method has been called and it's in the process of shutting down. It will continue to accept
    requests, but should not make calls against other engines (allowing orderly shutdown with dependencies).
    """

    STOPPED: Optional[str]=None
    """
    The {@link Engine.Deprecated#shutdown shutdown} method has been called and the engine will no longer accept requests.
    """

    UNHEALTHY: Optional[str]=None
    """
    The {@link Engine} started, but has internal problems.
    For example, it can happen if desired number of threads for the Engine's instance not reached.
    """
    def __init__(self, STARTING: Optional[str]=None, RUNNING: Optional[str]=None, STOPPING: Optional[str]=None, STOPPED: Optional[str]=None, UNHEALTHY: Optional[str]=None) -> None: ...

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


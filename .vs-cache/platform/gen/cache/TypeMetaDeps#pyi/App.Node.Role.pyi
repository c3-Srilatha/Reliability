#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type App.Node.Role


class Role():
    """
    Role of the App.Node in {@link App} / {@link Env} / {@link Cluster}.
    
    @remarks this represents a made instance of App.Node.Role
    """
    
    LEADER: Optional[str]=None
    """
    Node accepting API requests and managing workers and other nodes
    """

    WORKER: Optional[str]=None
    """
    Node managing the single compute instance of the cluster running task, data or db nodes
    """

    AGENT: Optional[str]=None
    """
    Node managing the single compute instance of the cluster running 3rd party software like Cassandra or PG
    """

    TASK: Optional[str]=None
    """
    Node running on a worker compute instance executing tasks
    """

    DATA: Optional[str]=None
    """
    Node running on a worker compute instance holding data
    """

    PROXY: Optional[str]=None
    """
    Node running on a worker compute instance performing database connection pooling
    """

    SERVICE: Optional[str]=None
    """
    Node that usually used for running {@link Engine engines}
    """

    ALL: Optional[str]=None
    """
    Node that performs the operation of all server roles
    """
    def __init__(self, LEADER: Optional[str]=None, WORKER: Optional[str]=None, AGENT: Optional[str]=None, TASK: Optional[str]=None, DATA: Optional[str]=None, PROXY: Optional[str]=None, SERVICE: Optional[str]=None, ALL: Optional[str]=None) -> None: ...

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
    @classmethod
    def cloudRole(cls, role: str) -> str:
    """
    @return cloud role for the provided App.Node.Role
    """
        ...
    @classmethod
    def forCloudRole(cls, cloudRole: str) -> str:
    """
    @return App.Node.Role for the provided cloud role
    """
        ...


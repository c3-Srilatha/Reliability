#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type WorkOrderStatusEnum


class WorkOrderStatusEnum():
    """
    Enumeration of Work Order Status.
    
    This enum represents the possible states that a work order can be in during its lifecycle.
    Work orders can be in various stages such as "Open", "Assigned", "Completed", "Closed", etc.
    These statuses help track the progress and state of a work order within the system.
    
    @remarks this represents a made instance of WorkOrderStatusEnum
    """
    
    OPEN: Optional[str]=None
    """
    The work order is created but not yet assigned or worked on.
    Typically indicates that it is awaiting processing.
    """

    ASSIGNED: Optional[str]=None
    """
    The work order has been assigned to a worker or team for execution.
    """

    COMPLETED: Optional[str]=None
    """
    The work order has been completed and is finished.
    """

    CLOSED: Optional[str]=None
    """
    The work order has been closed, meaning no further work is planned or required.
    """

    CANCELLED: Optional[str]=None
    """
    The work order was cancelled before completion.
    """

    INPROGRESS: Optional[str]=None
    """
    The work order is in progress, meaning work is currently being done on it.
    """

    ONHOLD: Optional[str]=None
    """
    The work order has been temporarily paused or is awaiting action before proceeding.
    """
    def __init__(self, OPEN: Optional[str]=None, ASSIGNED: Optional[str]=None, COMPLETED: Optional[str]=None, CLOSED: Optional[str]=None, CANCELLED: Optional[str]=None, INPROGRESS: Optional[str]=None, ONHOLD: Optional[str]=None) -> None: ...

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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type WorkflowDiagramNodeStatus


class WorkflowDiagramNodeStatus():
    """
    Statuses for nodes from workflow runs.
    
    @remarks this represents a made instance of WorkflowDiagramNodeStatus
    """
    
    RUNNING: Optional[str]=None
    """
    The node is currently running.
    """

    FAILED: Optional[str]=None
    """
    The node failed.
    """

    SUCCESS: Optional[str]=None
    """
    The node completed successfully.
    """

    UPSTREAM_FAILED: Optional[str]=None
    """
    The node did not run because an upstream node failed.
    """

    PENDING: Optional[str]=None
    """
    The node has not run yet because an upstream node is running.
    UPSTREAM_FAILED has precedence over PENDING.
    """

    CANCELED: Optional[str]=None
    """
    The node was canceled.
    """

    NOT_RUN: Optional[str]=None
    """
    The node did not run because of some reason other than an upstream node failing.
    Barring additions to this list of statuses, the reason might be one of:
    - one of this node's ancestors was canceled
    - this node, or one of its ancestors, is an error handler for a node that didn't have errors
    """

    NONE: Optional[str]=None
    """
    There is no status for this node. This can be used when displaying a Workflow graph that
    is not associated to any particular run. (In this case, all nodes should have this status.)
    """

    UNKNOWN: Optional[str]=None
    """
    The node status has not yet been determined. This should only be used internally when
    calculating statuses.
    """
    def __init__(self, RUNNING: Optional[str]=None, FAILED: Optional[str]=None, SUCCESS: Optional[str]=None, UPSTREAM_FAILED: Optional[str]=None, PENDING: Optional[str]=None, CANCELED: Optional[str]=None, NOT_RUN: Optional[str]=None, NONE: Optional[str]=None, UNKNOWN: Optional[str]=None) -> None: ...

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


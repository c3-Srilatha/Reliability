#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Jarvis.Report.Status


class Status(Jarvis.State, Jarvis.Status):
    """
    Represents the status of a {@link Jarvis.Report}. For simplicity, reports can mix state and status.
    
    @remarks this represents a made instance of Jarvis.Report.Status
    """
    
    PENDING: Optional[str]=None
    """
    Scheduled but has not yet picked up by Jarvis Executor
    """

    INITIALIZING: Optional[str]=None
    """
    Used exclusively for executors. Describes an executor that is having infrastructure brought up or is being
    configured.
    """

    ASSIGNED: Optional[str]=None
    """
    Used exclusively for {@link Jarvis.Step}. The step is assigned to an executor but it has yet to be
    begin its execution.
    """

    RUNNING: Optional[str]=None
    """
    Being executed on one of Jarvis Executors; note, intermediate result can be produced during execution
    """

    TIMING_OUT: Optional[str]=None
    """
    The execution is being terminated because it has timed out. When the termination is complete a corresponding
    status of {@link Jarvis.Status#TIMED_OUT} will be set on the respective result.
    """

    ABORTING: Optional[str]=None
    """
    The execution is in the process of being aborted. When the abortion is complete, the state will transition
    to DONE and a corresponding Result object with status ABORTED will be created.
    """

    DONE: Optional[str]=None
    """
    At this point, this build or step will not be picked up by an executor. It does not indicate a successful or
    failed run.
    """

    SUCCESS: Optional[str]=None
    """
    The execution was successful
    """

    NON_FATAL_ERROR: Optional[str]=None
    """
    The execution completed, but has non fatal errors.
    """

    ERROR: Optional[str]=None
    """
    An error was thrown in the execution.
    """

    NON_RETRYABLE_ERROR: Optional[str]=None
    """
    None retryable error thrown in the execution.
    """

    TIMED_OUT: Optional[str]=None
    """
    The execution did not complete in allocated time so it was canceled by Jarvis.
    """

    ABORTED: Optional[str]=None
    """
    The execution did not complete because it was aborted.
    """
    def __init__(self, PENDING: Optional[str]=None, INITIALIZING: Optional[str]=None, ASSIGNED: Optional[str]=None, RUNNING: Optional[str]=None, TIMING_OUT: Optional[str]=None, ABORTING: Optional[str]=None, DONE: Optional[str]=None, SUCCESS: Optional[str]=None, NON_FATAL_ERROR: Optional[str]=None, ERROR: Optional[str]=None, NON_RETRYABLE_ERROR: Optional[str]=None, TIMED_OUT: Optional[str]=None, ABORTED: Optional[str]=None) -> None: ...

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
    def isTerminating(cls, state: str=None) -> bool:
    """
    Determines whether or not this state is in the process of terminating.
    """
        ...
    @classmethod
    def isTerminable(cls, state: str=None) -> bool:
    """
    Determines whether or not this state can be terminated.
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type SourcesState


class SourcesState():
    """
    State of the Data Integration step
    state transition:
    initial ->  (rejected | validated)
    validated -> scheduled -> processing -> (completed | (failing -> failed))
    (scheduled | processing) -> stopping -> stopped
    
    @remarks this represents a made instance of SourcesState
    """
    
    INITIAL: Optional[str]=None
    """
    Sources is synced with the file or the queue to determine source of truth.
    """

    CHUNKED: Optional[str]=None
    """
    Sources are chunked
    """

    VALIDATED: Optional[str]=None
    """
    Sources metadata has been validated. For example, {@see SourceFile#validated}
    """

    REJECTED: Optional[str]=None
    """
    Sources cannot be processed because of original file parsing errors, or metadata issues.
    """

    REJECTING: Optional[str]=None
    """
    Sources cannot be processed because of original file parsing errors, or metadata issues
    """

    SCHEDULED: Optional[str]=None
    """
    Sources is marked and placed in the queue for processing.
    """

    PROCESSING: Optional[str]=None
    """
    Sources is picked from a file or a queue for data load
    """

    COMPLETED: Optional[str]=None
    """
    Sources has been successfully transformed and loaded into target types
    """

    FAILING: Optional[str]=None
    """
    Some source objects have failed and other objects are still being processed
    """

    FAILED: Optional[str]=None
    """
    Sources have completed processing and at least some sources have failed
    """

    STOPPING: Optional[str]=None
    """
    Sources is marked for stopping will remain in this state till all the sources(chunk) is drained from the queues.
    """

    STOPPED: Optional[str]=None
    """
    Sources is marked as stopped only after being in stopping state and all the sources(chunks) are drained from
    the queues.
    """
    def __init__(self, INITIAL: Optional[str]=None, CHUNKED: Optional[str]=None, VALIDATED: Optional[str]=None, REJECTED: Optional[str]=None, REJECTING: Optional[str]=None, SCHEDULED: Optional[str]=None, PROCESSING: Optional[str]=None, COMPLETED: Optional[str]=None, FAILING: Optional[str]=None, FAILED: Optional[str]=None, STOPPING: Optional[str]=None, STOPPED: Optional[str]=None) -> None: ...

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
    def isFinal(cls, status: str) -> bool:
    """
    @return true if status of SourcesState state machine is a final state
    Final States are : REJECTED, COMPLETED, FAILED
    """
        ...
    @classmethod
    def isInitial(cls, status: str) -> bool:
    """
    @return true if status of SourcesState state machine is INITIAL
    """
        ...
    @classmethod
    def isValidated(cls, status: str) -> bool:
    """
    @return true if status of SourcesState state machine is VALIDATED
    """
        ...
    @classmethod
    def isScheduled(cls, status: str) -> bool:
    """
    @return true if status of SourcesState state machine is SCHEDULED
    """
        ...
    @classmethod
    def isStopped(cls, status: str) -> bool:
    """
    @return true if status of SourcesState state machine is a stopped state
    Stopped States are #STOPPING and #STOPPED
    """
        ...
    @classmethod
    def isCompleted(cls, status: str) -> bool:
    """
    @return `true` if the state is "completed"
    """
        ...
    @classmethod
    def isProcessing(cls, status: str) -> bool:
    """
    @return `true` if the state is "processing"
    """
        ...
    @classmethod
    def isFailed(cls, status: str) -> bool:
    """
    @return `true` if the state is "failed"
    """
        ...
    @classmethod
    def isRejected(cls, status: str) -> bool:
    """
    @return `true` if the state is "rejected"
    """
        ...
    @classmethod
    def isFailing(cls, status: str) -> bool:
    """
    @return `true` if the state is "failing"
    """
        ...
    @classmethod
    def isRejecting(cls, status: str) -> bool:
    """
    @return `true` if the state is "rejecting"
    """
        ...


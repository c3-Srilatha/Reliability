#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type GcpVertexAICustomJob.Status


class Status():
    """
    @remarks this represents a made instance of GcpVertexAICustomJob.Status
    """
    
    JOB_STATE_UNSPECIFIED: Optional[str]=None
    """
    The job state is unspecified.
    """

    JOB_STATE_QUEUED: Optional[str]=None
    """
    The job has been just created or resumed and processing has not yet begun.
    """

    JOB_STATE_PENDING: Optional[str]=None
    """
    The service is preparing to run the job.
    """

    JOB_STATE_RUNNING: Optional[str]=None
    """
    The job is in progress.
    """

    JOB_STATE_SUCCEEDED: Optional[str]=None
    """
    The job completed successfully.
    """

    JOB_STATE_FAILED: Optional[str]=None
    """
    The job failed.
    """

    JOB_STATE_CANCELLING: Optional[str]=None
    """
    The job is being cancelled. From this state the job may only go to either JOB_STATE_SUCCEEDED, JOB_STATE_FAILED or
    JOB_STATE_CANCELLED.
    """

    JOB_STATE_CANCELLED: Optional[str]=None
    """
    The job has been cancelled.
    """

    JOB_STATE_PAUSED: Optional[str]=None
    """
    The job has been stopped, and can be resumed.
    """

    JOB_STATE_EXPIRED: Optional[str]=None
    """
    The job has expired.
    """

    JOB_STATE_UPDATING: Optional[str]=None
    """
    The job is being updated. The job is only able to be updated at RUNNING state; if the update operation succeeds,
    job goes back to RUNNING state; if the update operation fails, the job goes back to RUNNING state with error
    messages written to [ModelDeploymentMonitoringJob.partial_errors][] field if it is a ModelDeploymentMonitoringJob.
    """
    def __init__(self, JOB_STATE_UNSPECIFIED: Optional[str]=None, JOB_STATE_QUEUED: Optional[str]=None, JOB_STATE_PENDING: Optional[str]=None, JOB_STATE_RUNNING: Optional[str]=None, JOB_STATE_SUCCEEDED: Optional[str]=None, JOB_STATE_FAILED: Optional[str]=None, JOB_STATE_CANCELLING: Optional[str]=None, JOB_STATE_CANCELLED: Optional[str]=None, JOB_STATE_PAUSED: Optional[str]=None, JOB_STATE_EXPIRED: Optional[str]=None, JOB_STATE_UPDATING: Optional[str]=None) -> None: ...

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
    def fromNative(cls, spec: Any) -> str:
        ...


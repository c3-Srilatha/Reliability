#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Jarvis.Step.Status


class Status():
    """
    The status of a {@link Jarvis.Step.Result}
    
    The inherited enum ERROR, TIMED_OUT, and ABORT all result in subsequent steps being skipped.
    
    TODO: PLAT-46267 - Unable to redefine enum values with ~
    
    All the inherited enums are present in this file to define the order of severity of the result.
    
    @remarks this represents a made instance of Jarvis.Step.Status
    """
    
    IGNORABLE: Optional[str]=None
    """
    The step has produced an ignorable result. Steps with this status will not be retried and steps proceeding
    this step will still be executed.
    This status will not factor into the calculation of the overall build status and cannot be the only status
    of steps in a build.
    """

    SUCCESS: Optional[str]=None
    """
    @inheritdoc
    """

    PARTIAL: Optional[str]=None
    """
    The step has produced some results but is still executing. Eventually this status will
    transition to a final status.
    """

    NON_FATAL_ERROR: Optional[str]=None
    """
    @inheritdoc
    The details of these failures will be in the respective subtypes of {@link Jarvis.Step.Result}.
    Steps proceeding this step will still be executed.
    """

    NON_RETRYABLE_ERROR: Optional[str]=None
    """
    @inheritdoc
    """

    SKIPPED: Optional[str]=None
    """
    The step was skipped in the build and will not run in its build lifecycle.
    Utilized for downstream steps when an upstream step does not complete successfully.
    SKIPPED steps cannot appear in a successful build.
    """

    ERROR: Optional[str]=None
    """
    @inheritdoc
    """

    TIMED_OUT: Optional[str]=None
    """
    @inheritdoc
    """

    ABORTED: Optional[str]=None
    """
    @inheritdoc
    """
    def __init__(self, IGNORABLE: Optional[str]=None, SUCCESS: Optional[str]=None, PARTIAL: Optional[str]=None, NON_FATAL_ERROR: Optional[str]=None, NON_RETRYABLE_ERROR: Optional[str]=None, SKIPPED: Optional[str]=None, ERROR: Optional[str]=None, TIMED_OUT: Optional[str]=None, ABORTED: Optional[str]=None) -> None: ...

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


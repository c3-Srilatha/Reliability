#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type C3Request.State


class State():
    """
    Describes the state of a {@link C3Request}.
    
    @remarks this represents a made instance of C3Request.State
    """
    
    PENDING: Optional[str]=None
    """
    The request is waiting to be decided upon.
    """

    APPROVING: Optional[str]=None
    """
    The request has been approved, but it's {@link C3Request.Processor} has not finished processing the approval.
    """

    DENYING: Optional[str]=None
    """
    The request has been denied, but it's {@link C3Request.Processor} has not finished processing the denial.
    """

    CANCELLING: Optional[str]=None
    """
    The request has been cancelled, but it's {@link C3Request.Processor} has not finished processing the cancellation.
    """

    APPROVED: Optional[str]=None
    """
    The request has been approved, and processing has completed.
    The result of processing can be seen on the {@link C3Request#status}, {@link C3Request#result},
    and {@link C3Request#status} fields.
    """

    DENIED: Optional[str]=None
    """
    The request has been denied, and processing has completed.
    The result of processing can be seen on the {@link C3Request#status}, {@link C3Request#result},
    and {@link C3Request#status} fields.
    """

    CANCELLED: Optional[str]=None
    """
    The request has been cancelled, and processing has completed.
    The result of processing can be seen on the {@link C3Request#status}, {@link C3Request#result},
    and {@link C3Request#status} fields.
    """
    def __init__(self, PENDING: Optional[str]=None, APPROVING: Optional[str]=None, DENYING: Optional[str]=None, CANCELLING: Optional[str]=None, APPROVED: Optional[str]=None, DENIED: Optional[str]=None, CANCELLED: Optional[str]=None) -> None: ...

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


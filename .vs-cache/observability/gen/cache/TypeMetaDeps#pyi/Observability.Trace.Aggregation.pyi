#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Observability.Trace.Aggregation


class Aggregation():
    """
    Enum specifying the types of aggregation supported for populating fields of
    {@link Observability.Trace} from the values of {@link Observability.Span#attributes} of spans within the trace.
    Aggregations are calulated incrementally as each new span is added.
    
    @See Observability.Trace#aggregationMapper for additional details.
    
    @remarks this represents a made instance of Observability.Trace.Aggregation
    """
    
    MIN: Optional[str]=None
    """
    Trace field will be populated using minimum of span attribute values recorded so far.
    This operation is applicable to primitive numeric attribute values only.
    """

    MAX: Optional[str]=None
    """
    Trace field will be populated using maximum of span attribute values recorded so far.
    This operation is applicable to primitive numeric attribute values only.
    """

    SUM: Optional[str]=None
    """
    Trace field will be populated using summation of span attribute values recorded so far.
    This operation is applicable to primitive numeric attribute values only.
    """

    COUNT: Optional[str]=None
    """
    Trace field will be populated by counting the existence of a span attribute key recorded so far.
    This operation is applicable to any span attribute key, irrespective of its value.
    """

    ANY: Optional[str]=None
    """
    Trace field will be populated using "OR" of span attribute values recorded so far.
    This operation is applicable to boolean attribute values only.
    """

    ALL: Optional[str]=None
    """
    Trace field will be populated using "AND" of span attribute values recorded so far.
    This operation is applicable to boolean attribute values only.
    """

    APPEND: Optional[str]=None
    """
    Trace field will be populated by appending span attribute values recorded so far.
    To use this feature, trace field type must be a list or array. This aggregation will be applied on root spans only
    to propagate attribute values from root spans to trace.
    Root {@link Observability.Span}s are spans whose {@link Observability.Span#parentSpanId} is null.
    """
    def __init__(self, MIN: Optional[str]=None, MAX: Optional[str]=None, SUM: Optional[str]=None, COUNT: Optional[str]=None, ANY: Optional[str]=None, ALL: Optional[str]=None, APPEND: Optional[str]=None) -> None: ...

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


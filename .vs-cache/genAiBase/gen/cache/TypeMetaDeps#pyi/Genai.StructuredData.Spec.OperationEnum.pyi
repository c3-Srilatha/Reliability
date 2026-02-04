#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Genai.StructuredData.Spec.OperationEnum


class OperationEnum():
    """
    Enum type for supported regular operations methods, used in {@link EvalSpec#projection}, {@link EvalSpec#filter},
    {@link EvalSpec#order}.
    
    @remarks this represents a made instance of Genai.StructuredData.Spec.OperationEnum
    """
    
    SECOND: Optional[str]=None
    """
    Time operation: get second
    """

    MINUTE: Optional[str]=None
    """
    Time operation: get minute
    """

    HOUR: Optional[str]=None
    """
    Time operation: get hour
    """

    DAY: Optional[str]=None
    """
    Time operation: get day
    """

    MONTH: Optional[str]=None
    """
    Time operation: get month
    """

    YEAR: Optional[str]=None
    """
    Time operation: get year
    """

    DAY_OF_WEEK: Optional[str]=None
    """
    Time operation: get day of week
    """

    DAYS_IN_YEAR: Optional[str]=None
    """
    Time operation: get day of month
    """

    ABS: Optional[str]=None
    """
    Math operation: absolute value
    """

    SQRT: Optional[str]=None
    """
    Math operation: square root
    """

    EXP: Optional[str]=None
    """
    Math operation: exponentiation
    """

    CEIL: Optional[str]=None
    """
    Math operation: ceiling
    """

    FLOOR: Optional[str]=None
    """
    Math operation: floor
    """

    LOG: Optional[str]=None
    """
    Math operation: natural logarithm
    """

    LOWER_CASE: Optional[str]=None
    """
    String operation: to lower case
    """

    UPPER_CASE: Optional[str]=None
    """
    String operation: to upper case
    """
    def __init__(self, SECOND: Optional[str]=None, MINUTE: Optional[str]=None, HOUR: Optional[str]=None, DAY: Optional[str]=None, MONTH: Optional[str]=None, YEAR: Optional[str]=None, DAY_OF_WEEK: Optional[str]=None, DAYS_IN_YEAR: Optional[str]=None, ABS: Optional[str]=None, SQRT: Optional[str]=None, EXP: Optional[str]=None, CEIL: Optional[str]=None, FLOOR: Optional[str]=None, LOG: Optional[str]=None, LOWER_CASE: Optional[str]=None, UPPER_CASE: Optional[str]=None) -> None: ...

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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type TestScript.Compare


class Compare():
    """
    Comparison operators, see {@link TestScript.AssertValue#compare}.
    
    @remarks this represents a made instance of TestScript.Compare
    """
    
    NULL: Optional[str]=None
    """
    `null` or language-specific equivalent (`undefined`, `None`)
    """

    NOT_NULL: Optional[str]=None
    """
    not* `null` or equivalent
    """

    EQ: Optional[str]=None
    """
    equivalent to the specified value
    """

    NE: Optional[str]=None
    """
    not equivalent to the specified value
    """

    LT: Optional[str]=None
    """
    less than the specified value
    """

    LE: Optional[str]=None
    """
    less than or equal to the specified value
    """

    GT: Optional[str]=None
    """
    greater than the specified value
    """

    GE: Optional[str]=None
    """
    greater than or equal to the specified value
    """

    MATCHES: Optional[str]=None
    """
    matches the value RE
    """

    NOT_MATCHES: Optional[str]=None
    """
    not* matches the value RE
    """

    EXACT_EQ: Optional[str]=None
    """
    identical to the specified value
    """

    EXACT_NE: Optional[str]=None
    """
    not* identical to the specified value
    """
    def __init__(self, NULL: Optional[str]=None, NOT_NULL: Optional[str]=None, EQ: Optional[str]=None, NE: Optional[str]=None, LT: Optional[str]=None, LE: Optional[str]=None, GT: Optional[str]=None, GE: Optional[str]=None, MATCHES: Optional[str]=None, NOT_MATCHES: Optional[str]=None, EXACT_EQ: Optional[str]=None, EXACT_NE: Optional[str]=None) -> None: ...

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
    def operator(cls, compare: str) -> str:
    """
    Produce the JavaScript operator that goes with this comparison. Note that not all values have unique
    operators. The enum takes into account both the original poly test operator and the right-hand-side value.
    """
        ...


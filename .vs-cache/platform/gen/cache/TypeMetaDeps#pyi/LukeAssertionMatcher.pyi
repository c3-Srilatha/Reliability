#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type LukeAssertionMatcher


class LukeAssertionMatcher():
    """
    Matchers that are supported by {@link LukeAsyncQueueNode#assert}
    
    @remarks this represents a made instance of LukeAssertionMatcher
    """
    
    EQUAL: Optional[str]=None
    """
    Deprecated C3 Matchers!
    use toEqual instead
    """

    GREATER_THAN: Optional[str]=None
    """
    use toBeGreaterThan instead
    """

    LESS_THAN: Optional[str]=None
    """
    use toBeLessThan instead
    """

    CONTAIN: Optional[str]=None
    """
    use toContain instead
    """

    STRING_CONTAIN: Optional[str]=None
    """
    use toContain instead
    """

    HAS_LENGTH: Optional[str]=None
    """
    use toHaveLength instead
    """

    EMPTY: Optional[str]=None
    """
    use toBeEmpty instead
    """

    EXISTS: Optional[str]=None
    """
    use toExist instead
    """

    TO_HAVE_LENGTH: Optional[str]=None
    """
    C3 Matchers
    """

    TO_BE_EMPTY: Optional[str]=None

    TO_EXIST: Optional[str]=None

    TO_MATCH_OBJECT: Optional[str]=None

    TO_BE: Optional[str]=None
    """
    Jasmine Matchers
    """

    TO_BE_CLOSE_TO: Optional[str]=None

    TO_BE_DEFINED: Optional[str]=None

    TO_BE_FALSE: Optional[str]=None

    TO_BE_FALSY: Optional[str]=None

    TO_BE_GREATER_THAN: Optional[str]=None

    TO_BE_GREATER_THAN_OR_EQUAL: Optional[str]=None

    TO_BE_INSTANCE_OF: Optional[str]=None

    TO_BE_LESS_THAN: Optional[str]=None

    TO_BE_LESS_THAN_OR_EQUAL: Optional[str]=None

    TO_BE_NAN: Optional[str]=None

    TO_BE_NEGATIVE_INFINITY: Optional[str]=None

    TO_BE_NULL: Optional[str]=None

    TO_BE_POSITIVE_INFINITY: Optional[str]=None

    TO_BE_TRUTHY: Optional[str]=None

    TO_BE_UNDEFINED: Optional[str]=None

    TO_CONTAIN: Optional[str]=None

    TO_EQUAL: Optional[str]=None

    TO_MATCH: Optional[str]=None
    def __init__(self, EQUAL: Optional[str]=None, GREATER_THAN: Optional[str]=None, LESS_THAN: Optional[str]=None, CONTAIN: Optional[str]=None, STRING_CONTAIN: Optional[str]=None, HAS_LENGTH: Optional[str]=None, EMPTY: Optional[str]=None, EXISTS: Optional[str]=None, TO_HAVE_LENGTH: Optional[str]=None, TO_BE_EMPTY: Optional[str]=None, TO_EXIST: Optional[str]=None, TO_MATCH_OBJECT: Optional[str]=None, TO_BE: Optional[str]=None, TO_BE_CLOSE_TO: Optional[str]=None, TO_BE_DEFINED: Optional[str]=None, TO_BE_FALSE: Optional[str]=None, TO_BE_FALSY: Optional[str]=None, TO_BE_GREATER_THAN: Optional[str]=None, TO_BE_GREATER_THAN_OR_EQUAL: Optional[str]=None, TO_BE_INSTANCE_OF: Optional[str]=None, TO_BE_LESS_THAN: Optional[str]=None, TO_BE_LESS_THAN_OR_EQUAL: Optional[str]=None, TO_BE_NAN: Optional[str]=None, TO_BE_NEGATIVE_INFINITY: Optional[str]=None, TO_BE_NULL: Optional[str]=None, TO_BE_POSITIVE_INFINITY: Optional[str]=None, TO_BE_TRUTHY: Optional[str]=None, TO_BE_UNDEFINED: Optional[str]=None, TO_CONTAIN: Optional[str]=None, TO_EQUAL: Optional[str]=None, TO_MATCH: Optional[str]=None) -> None: ...

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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type JavaScriptVersion


class JavaScriptVersion():
    """
    ECMAScript versions supported for JavaScript in source code and runtimes.
    
    @see https://en.wikipedia.org/wiki/ECMAScript
    
    @remarks this represents a made instance of JavaScriptVersion
    """
    
    ES3: Optional[str]=None

    ES5: Optional[str]=None

    ES2015: Optional[str]=None

    ES2016: Optional[str]=None

    ES2017: Optional[str]=None

    ES2018: Optional[str]=None

    ESNext: Optional[str]=None
    def __init__(self, ES3: Optional[str]=None, ES5: Optional[str]=None, ES2015: Optional[str]=None, ES2016: Optional[str]=None, ES2017: Optional[str]=None, ES2018: Optional[str]=None, ESNext: Optional[str]=None) -> None: ...

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
    def isSuperset(cls, lhs: str, rhs: str) -> bool:
    """
    Whether the first argument is the same or higher version than the second. I.e., `isSuperset(ES2016, ES2015)` is
    true, but the reverse is false.
    
    @param lhs version that must be the same or later
    @param rhs version that must be the same or earlier
    """
        ...
    @classmethod
    def fromString(cls, s: str=None, failIfNone: bool=None) -> Union[str]:
    """
    Canonicalize the specified value and return the the matching official enumeration value. This handles standard
    aliases, such as "ES6" for `ES2015`. If there is no match, returns null.
    
    @param s string to match
    @param failIfNone if true, throw an error if no match rather than returning null
    """
        ...


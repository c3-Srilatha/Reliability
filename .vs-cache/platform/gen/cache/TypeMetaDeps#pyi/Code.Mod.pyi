#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Code.Mod


class Mod():
    """
    All possible "modifiers" of language structure.
    
    @see Code.WithMods
    
    @remarks this represents a made instance of Code.Mod
    """
    
    PUBLIC: Optional[str]=None
    """
    can be used from anywhere
    """

    PROTECTED: Optional[str]=None
    """
    can only be used in the same package
    """

    PRIVATE: Optional[str]=None
    """
    can only be used in the same class
    """

    STATIC: Optional[str]=None
    """
    available on the class itself
    """

    ABSTRACT: Optional[str]=None
    """
    not implemented yet
    """

    FINAL: Optional[str]=None
    """
    cannot be overridden
    """

    SYNCHRONIZED: Optional[str]=None
    """
    critical section limited to one thread
    """

    VOLATILE: Optional[str]=None
    """
    value can change in another thread so instructions involving this variable cannot be reordered
    """

    DEFAULT: Optional[str]=None
    """
    base implementation in an interface
    """

    CONST: Optional[str]=None
    """
    can only be set initially
    """

    CLASS: Optional[str]=None
    """
    is a Python class method
    """
    def __init__(self, PUBLIC: Optional[str]=None, PROTECTED: Optional[str]=None, PRIVATE: Optional[str]=None, STATIC: Optional[str]=None, ABSTRACT: Optional[str]=None, FINAL: Optional[str]=None, SYNCHRONIZED: Optional[str]=None, VOLATILE: Optional[str]=None, DEFAULT: Optional[str]=None, CONST: Optional[str]=None, CLASS: Optional[str]=None) -> None: ...

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


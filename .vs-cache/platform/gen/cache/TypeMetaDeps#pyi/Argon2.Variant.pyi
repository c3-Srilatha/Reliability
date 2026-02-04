#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Argon2.Variant


class Variant():
    """
    Argon2 variant types.
    {@link Argon2}
    
    @remarks this represents a made instance of Argon2.Variant
    """
    
    Argon2d: Optional[str]=None
    """
    Argon2d is faster and uses data-depending memory access,
       which makes it highly resistant against GPU cracking attacks
       and suitable for applications with no threats from side-channel timing attacks.
       Resistant to TMTO attacks.
    """

    Argon2i: Optional[str]=None
    """
    Argon2i is slower and uses data-independent memory access,
       which is preferred for password hashing and password-based key derivation.
       Resistant to side-channel cache timing attacks.
    """

    Argon2id: Optional[str]=None
    """
    Argon2id is a hybrid version of Argon2 combining Argon2i and Argon2d,
       using a combination of data-depending and data-independent memory accesses,
       which gives some of Argon2i's resistance to side-channel cache timing attacks
       and much of Argon2d's resistance to GPU cracking attacks.
    """
    def __init__(self, Argon2d: Optional[str]=None, Argon2i: Optional[str]=None, Argon2id: Optional[str]=None) -> None: ...

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


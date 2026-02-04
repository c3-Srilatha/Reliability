#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Range import Range
from c3.platform.ValueType import ValueType
from c3.platform.Rnd import Rnd

# Python definitions for the C3 type RndStrKind


class RndStrKind():
    """
    Built-in string formats. This is used to generate strings with different content for use in random data.
    
    @see Rnd#str
    
    @remarks this represents a made instance of RndStrKind
    """
    
    ID: Optional[str]=None
    """
    Typical ID values; generally a sequence of word characters and select punctuation.
    """

    NAME: Optional[str]=None
    """
    Typical names values; generally a sequence of word characters.
    """

    SUMMARY: Optional[str]=None
    """
    Typical prose values; generally a sequence of words.
    """

    DESCRIPTION: Optional[str]=None
    """
    Typical prose values; generally a sequence of words.
    """

    ALPHA: Optional[str]=None
    """
    Letters only.
    """

    ALPHANUMERIC: Optional[str]=None
    """
    Letters and digits only.
    """

    HEX: Optional[str]=None
    """
    Hexadecimal digits only.
    """

    DOMAIN: Optional[str]=None
    """
    Typical domain name.
    """

    EMAIL: Optional[str]=None
    """
    Typical email address.
    """

    URL: Optional[str]=None
    """
    Typical URL.
    """

    VERSION: Optional[str]=None
    """
    Semantic version.
    """

    FILE_PATH: Optional[str]=None
    """
    Local file path.
    """

    FILE_URL: Optional[str]=None
    """
    Local file URL.
    """

    EXPR: Optional[str]=None
    """
    Expression.
    """

    IP_ADDR: Optional[str]=None
    """
    IPV4 address.
    """

    LOCALE: Optional[str]=None
    """
    Language/region.
    """

    MIME_TYPE: Optional[str]=None
    """
    Content-Type.
    """

    DATETIME: Optional[str]=None
    """
    Datetime.
    """
    def __init__(self, ID: Optional[str]=None, NAME: Optional[str]=None, SUMMARY: Optional[str]=None, DESCRIPTION: Optional[str]=None, ALPHA: Optional[str]=None, ALPHANUMERIC: Optional[str]=None, HEX: Optional[str]=None, DOMAIN: Optional[str]=None, EMAIL: Optional[str]=None, URL: Optional[str]=None, VERSION: Optional[str]=None, FILE_PATH: Optional[str]=None, FILE_URL: Optional[str]=None, EXPR: Optional[str]=None, IP_ADDR: Optional[str]=None, LOCALE: Optional[str]=None, MIME_TYPE: Optional[str]=None, DATETIME: Optional[str]=None) -> None: ...

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
    def lenRange(cls, rnd: Rnd, kind: str, example: bool=None) -> Range[int]:
        ...
    @classmethod
    def dflt(cls, kind: str=None) -> str:
        ...


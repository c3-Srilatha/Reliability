#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type DslComment.Kind


class Kind():
    """
    The style of a comment. All comments in the DSL are preserved in the built structure, but only special
    "documentation" comments show up in the produced documentation. Ordinary single- and multi-line comments do not
    affect public documentation, only multi-line comments that start with `/**` are parsed for documentation.
    
    @remarks this represents a made instance of DslComment.Kind
    """
    
    SINGLE_LINE: Optional[str]=None
    """
    A C++ style single-line comment, starting with `//` and ending with the end of that line.
    """

    MULTI_LINE: Optional[str]=None
    """
    A C style multi-line comment, starting with `/*` and ending with `*\/`.
    """

    DOC: Optional[str]=None
    """
    A Javadoc style multi-line comment, starting with `/**` and ending with `*\/`. These are used to associate
    documentation with a piece of structure.
    """
    def __init__(self, SINGLE_LINE: Optional[str]=None, MULTI_LINE: Optional[str]=None, DOC: Optional[str]=None) -> None: ...

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
    def leader(cls, kind: str) -> str:
    """
    The characters that start this kind of comment.
    """
        ...
    @classmethod
    def isMultiLine(cls, kind: str) -> bool:
    """
    Whether or not this kind of comment is multi-line.
    
    @see #MULTI_LINE
    @see #DOC
    """
        ...
    @classmethod
    def isSingleLine(cls, kind: str) -> bool:
    """
    Whether or not this kind of comment is single-line.
    
    @see #SINGLE_LINE
    """
        ...
    @classmethod
    def kindOf(cls, source: str, failIfNone: bool=None) -> Union[str]:
    """
    Determine the kind of comment this source represents.
    
    @param source the comment source (including delimiters)
    @param failIfNone throw error instead of returning null if not a comment
    @return kind of comment
    """
        ...


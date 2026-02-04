#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type DocumentationSpanStyle


class DocumentationSpanStyle():
    """
    What style the Markdown span represents. These are basically HTML elements, since Markdown is generally translated
    into HTML for rendering.
    
    @see DocumentationSpan
    
    @remarks this represents a made instance of DocumentationSpanStyle
    """
    
    PLAIN: Optional[str]=None
    """
    Undecorated span of text.
    """

    EM: Optional[str]=None
    """
    Ordinary emphasis (italic).
    """

    STRONG: Optional[str]=None
    """
    Extra emphasis (bold).
    """

    STRIKE: Optional[str]=None
    """
    Strikethrough.
    """

    CODE: Optional[str]=None
    """
    Monospace.
    """

    LINK: Optional[str]=None
    """
    A reference to another page.
    
    @see DocumentationReference
    """

    IMAGE: Optional[str]=None
    """
    A reference to an external image.
    
    @see DocumentationReference
    """

    MATH: Optional[str]=None
    """
    Inline math equation.
    """

    BR: Optional[str]=None
    """
    Hard line break (no content).
    """
    def __init__(self, PLAIN: Optional[str]=None, EM: Optional[str]=None, STRONG: Optional[str]=None, STRIKE: Optional[str]=None, CODE: Optional[str]=None, LINK: Optional[str]=None, IMAGE: Optional[str]=None, MATH: Optional[str]=None, BR: Optional[str]=None) -> None: ...

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
    def fromObj(cls, obj: Obj=None, failIfInvalid: bool=None) -> Union[str]:
    """
    Extract the rendering style from a span object. If the obj is null or has no style, null is returned.
    If failIfInvalid is true, a missing or invalid style throws an appropriate error.
    
    @param obj DocumentationSpan obj to extract style from
    @param failIfInvalid if true, error is thrown if obj is null, has no style, or the style is invalid
    
    @see DocumentationSpan
    @see #toValue
    """
        ...


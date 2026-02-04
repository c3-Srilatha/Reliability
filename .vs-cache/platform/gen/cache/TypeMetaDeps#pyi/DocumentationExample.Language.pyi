#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType
from c3.platform.ImplLanguage import ImplLanguage

# Python definitions for the C3 type DocumentationExample.Language


class Language():
    """
    Language of example code. This is a combination of some key {@link ImplLanguage implementation languages} and other
    forms of API invocation such as {@link https://en.wikipedia.org/wiki/REST REST}.
    
    @see DocumentationParserSpec#exampleLang
    @see DocumentationExample#lang
    
    @remarks this represents a made instance of DocumentationExample.Language
    """
    
    JAVA: Optional[str]=None
    """
    Java source.
    @see ImplLanguage#JAVA
    """

    JAVASCRIPT: Optional[str]=None
    """
    JavaScript source (any ECMAScript version).
    @see ImplLanguage#JAVASCRIPT
    """

    PYTHON: Optional[str]=None
    """
    Python source.
    @see ImplLanguage#PYTHON
    """

    TYPESCRIPT: Optional[str]=None
    """
    TypeScript source.
    @see ImplLanguage#TYPESCRIPT
    """

    TYPE: Optional[str]=None
    """
    C3 Type declaration (`.c3typ` files).
    """

    TSX: Optional[str]=None
    """
    TypeScript source with JSX syntax.
    @see ImplLanguage#TSX
    """

    REST_JSON: Optional[str]=None
    """
    REST API raw JSON
    """

    REST_CURL: Optional[str]=None
    """
    REST API via cURL
    @see https://curl.se/
    """

    HTML: Optional[str]=None
    """
    HyperText Markup Language (HTML).
    """

    JSON: Optional[str]=None
    """
    JavaScript Object Notation (JSON).
    """

    TEXT: Optional[str]=None
    """
    Plain text. This is a fallback for when there is no supported syntax for the example.
    """
    def __init__(self, JAVA: Optional[str]=None, JAVASCRIPT: Optional[str]=None, PYTHON: Optional[str]=None, TYPESCRIPT: Optional[str]=None, TYPE: Optional[str]=None, TSX: Optional[str]=None, REST_JSON: Optional[str]=None, REST_CURL: Optional[str]=None, HTML: Optional[str]=None, JSON: Optional[str]=None, TEXT: Optional[str]=None) -> None: ...

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
    def isImplLanguage(cls, s: str) -> bool:
    """
    @return true if this is an {@link ImplLanguage implementation language}
    """
        ...
    @classmethod
    def toImplLanguage(cls, s: str, failIfInvalid: bool=None) -> Union[ImplLanguage]:
    """
    @return {@link ImplLanguage} value
    """
        ...
    @classmethod
    def isRest(cls, s: str) -> bool:
    """
    @return true if this is a form of REST calling
    """
        ...
    @classmethod
    def isType(cls, s: str) -> bool:
    """
    @return true if this is a type declaration
    """
        ...
    @classmethod
    def syntaxLang(cls, s: str) -> str:
    """
    @return syntax coloring label for this language
    """
        ...
    @classmethod
    def mediaType(cls, s: str) -> Union[str]:
    """
    @return MIME type of this language
    """
        ...
    @classmethod
    def forName(cls, name: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Get the canonical (enum) value for the specified value. Like {@link ImplLanguage#forName} this handles common
    aliases and abbreviations.
    """
        ...


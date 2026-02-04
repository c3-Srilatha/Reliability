#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type MarkdownNodeName


class MarkdownNodeName():
    """
    Each node of the parsed Markdown has a name that relates to the CommonMark spec, plus the some of the GitHub
    Flavored Markdown (GFM) extensions.
    
    @see MarkdownNode
    
    @remarks this represents a made instance of MarkdownNodeName
    """
    
    BlockQuote: Optional[str]=None

    BulletList: Optional[str]=None

    Code: Optional[str]=None

    Document: Optional[str]=None

    Emphasis: Optional[str]=None

    FencedCodeBlock: Optional[str]=None

    HardLineBreak: Optional[str]=None

    Heading: Optional[str]=None

    HtmlBlock: Optional[str]=None

    HtmlInline: Optional[str]=None

    Image: Optional[str]=None

    IndentedCodeBlock: Optional[str]=None

    Link: Optional[str]=None

    ListBlock: Optional[str]=None

    ListItem: Optional[str]=None

    OrderedList: Optional[str]=None

    Paragraph: Optional[str]=None

    SoftLineBreak: Optional[str]=None

    Strikethrough: Optional[str]=None

    StrongEmphasis: Optional[str]=None

    TableBlock: Optional[str]=None

    TableBody: Optional[str]=None

    TableCell: Optional[str]=None

    TableHead: Optional[str]=None

    TableRow: Optional[str]=None

    Text: Optional[str]=None

    ThematicBreak: Optional[str]=None
    def __init__(self, BlockQuote: Optional[str]=None, BulletList: Optional[str]=None, Code: Optional[str]=None, Document: Optional[str]=None, Emphasis: Optional[str]=None, FencedCodeBlock: Optional[str]=None, HardLineBreak: Optional[str]=None, Heading: Optional[str]=None, HtmlBlock: Optional[str]=None, HtmlInline: Optional[str]=None, Image: Optional[str]=None, IndentedCodeBlock: Optional[str]=None, Link: Optional[str]=None, ListBlock: Optional[str]=None, ListItem: Optional[str]=None, OrderedList: Optional[str]=None, Paragraph: Optional[str]=None, SoftLineBreak: Optional[str]=None, Strikethrough: Optional[str]=None, StrongEmphasis: Optional[str]=None, TableBlock: Optional[str]=None, TableBody: Optional[str]=None, TableCell: Optional[str]=None, TableHead: Optional[str]=None, TableRow: Optional[str]=None, Text: Optional[str]=None, ThematicBreak: Optional[str]=None) -> None: ...

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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type DocumentationBlockKind


class DocumentationBlockKind():
    """
    What type of Markdown structure the block represents. These are basically HTML elements, since Markdown is generally
    translated into HTML for rendering.
    
    @see DocumentationBlock
    
    @remarks this represents a made instance of DocumentationBlockKind
    """
    
    DOC: Optional[str]=None
    """
    A whole document (list of outermost blocks).
    """

    H1: Optional[str]=None
    """
    Top-level heading.
    
    @see DocumentationHeading
    """

    H2: Optional[str]=None
    """
    2nd-level heading.
    
    @see DocumentationHeading
    """

    H3: Optional[str]=None
    """
    3rd-level heading.
    
    @see DocumentationHeading
    """

    H4: Optional[str]=None
    """
    4th-level heading.
    
    @see DocumentationHeading
    """

    H5: Optional[str]=None
    """
    5th-level heading.
    
    @see DocumentationHeading
    """

    H6: Optional[str]=None
    """
    6th-level heading.
    
    @see DocumentationHeading
    """

    P: Optional[str]=None
    """
    Ordinary paragraph.
    """

    QUOTE: Optional[str]=None
    """
    Quoted paragraph.
    """

    CODE: Optional[str]=None
    """
    Fenced code block (source code).
    """

    OL: Optional[str]=None
    """
    Ordered list (numbers).
    """

    UL: Optional[str]=None
    """
    Unordered list (bullets).
    """

    LI: Optional[str]=None
    """
    Item in a list.
    """

    HR: Optional[str]=None
    """
    Horizontal rule.
    """

    TABLE: Optional[str]=None
    """
    Table.
    
    @see DocumentationTable
    """

    TR: Optional[str]=None
    """
    Row of a table.
    """

    TD: Optional[str]=None
    """
    Cell of a table (header or body).
    """

    MATH: Optional[str]=None
    """
    Display math equation.
    """

    TABSET: Optional[str]=None
    """
    Outer structure for one or more tabs made from sections using `=` as the leader. Contains `TAB` blocks.
    
    @see DocumentationTabSet
    """

    TAB: Optional[str]=None
    """
    Inner structure for each tab made from sections using `=` as the leader (inside a `TABSET`).
    
    @see DocumentationTab
    """

    COLLAPSE: Optional[str]=None
    """
    A collapsible section using `+` as the leader.
    """

    FOOTNOTE: Optional[str]=None
    """
    The body of a footnote at the bottom of the page.
    """

    CARD: Optional[str]=None
    """
    A bordered section in a grid layout, delimited by multiple open and close brackets.
    """
    def __init__(self, DOC: Optional[str]=None, H1: Optional[str]=None, H2: Optional[str]=None, H3: Optional[str]=None, H4: Optional[str]=None, H5: Optional[str]=None, H6: Optional[str]=None, P: Optional[str]=None, QUOTE: Optional[str]=None, CODE: Optional[str]=None, OL: Optional[str]=None, UL: Optional[str]=None, LI: Optional[str]=None, HR: Optional[str]=None, TABLE: Optional[str]=None, TR: Optional[str]=None, TD: Optional[str]=None, MATH: Optional[str]=None, TABSET: Optional[str]=None, TAB: Optional[str]=None, COLLAPSE: Optional[str]=None, FOOTNOTE: Optional[str]=None, CARD: Optional[str]=None) -> None: ...

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
    Extract the block kind from a block object. If the obj is null or has no kind, null is returned.
    If failIfInvalid is true, a missing or invalid kind throws an appropriate error.
    
    @param obj DocumentationBlock obj to extract kind from
    @param failIfInvalid if true, error is thrown if obj is null, has no kind, or the kind is invalid
    
    @see DocumentationBlock
    @see #toValue
    """
        ...
    @classmethod
    def isHeading(cls, kind: str=None) -> bool:
    """
    Whether or not this is a heading element (H1 through H6).
    """
        ...
    @classmethod
    def isParagraph(cls, kind: str=None) -> bool:
    """
    Whether or not this is a paragraph.
    """
        ...
    @classmethod
    def isCode(cls, kind: str=None) -> bool:
    """
    Whether or not this is a code block.
    """
        ...
    @classmethod
    def headingDepth(cls, kind: str=None) -> Union[int]:
    """
    Get the depth of the heading; zero-based. If this is not a heading (H1 through H6), return null.
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type PdfChartFontWeightEnum


class PdfChartFontWeightEnum():
    """
    Specifies the weight (bold) of the text on a chart.
    
    @remarks this represents a made instance of PdfChartFontWeightEnum
    """
    
    ULTRALIGHT: Optional[str]=None
    """
    Very thin font weight.
    """

    LIGHT: Optional[str]=None
    """
    A slightly heavier font weight than 'ultralight'.
    """

    NORMAL: Optional[str]=None
    """
    Standard font weight.
    """

    REGULAR: Optional[str]=None
    """
    Almost equivalent to normal.
    """

    BOOK: Optional[str]=None
    """
    A weight slightly lighter than 'normal'.
    """

    MEDIUM: Optional[str]=None
    """
    A mid-weight font between 'regular' and 'bold'.
    """

    ROMAN: Optional[str]=None
    """
    Standard serif font weight, typically similar to 'regular'.
    """

    SEMIBOLD: Optional[str]=None
    """
    A font weight between 'medium' and 'bold'.
    """

    DEMI_BOLD: Optional[str]=None
    """
    Synonym for 'semibold'; used in some typefaces.
    """

    DEMI: Optional[str]=None
    """
    Another term for 'semibold'; context-dependent.
    """

    BOLD: Optional[str]=None
    """
    Standard bold font weight.
    """

    HEAVY: Optional[str]=None
    """
    A heavier font weight than 'bold'.
    """

    EXTRA_BOLD: Optional[str]=None
    """
    Bolder than 'bold', but not as heavy as 'black'.
    """

    BLACK: Optional[str]=None
    """
    The heaviest font weight; used for maximum emphasis.
    """
    def __init__(self, ULTRALIGHT: Optional[str]=None, LIGHT: Optional[str]=None, NORMAL: Optional[str]=None, REGULAR: Optional[str]=None, BOOK: Optional[str]=None, MEDIUM: Optional[str]=None, ROMAN: Optional[str]=None, SEMIBOLD: Optional[str]=None, DEMI_BOLD: Optional[str]=None, DEMI: Optional[str]=None, BOLD: Optional[str]=None, HEAVY: Optional[str]=None, EXTRA_BOLD: Optional[str]=None, BLACK: Optional[str]=None) -> None: ...

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


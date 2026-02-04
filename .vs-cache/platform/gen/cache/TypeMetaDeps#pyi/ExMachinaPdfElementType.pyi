#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ExMachinaPdfElementType


class ExMachinaPdfElementType():
    """
    @remarks this represents a made instance of ExMachinaPdfElementType
    """
    
    ECHARTS: Optional[str]=None
    """
    Render a Visualization based on an ECharts config. The
    The corresponding {@link ExMachinaPdfElement#elementConfig} must have the following fields set:
     1. config — The echarts config used to generate visualization. May include function pointers to
                 hardcoded functions in the {@link ExMachinaPdf} implementation, used for formatting purposes
     2. height — Desired height of the Visualization to render on the PDF Report
     3. width — Desired width of the Visualization to render on the PDF Report
    
    The PDF Report generation logic will use those 3 to generate an SVG representing the visualization
    Every other field specified as part of the corresponding {@link ExMachinaPdfElement#elementConfig} must be
    a valid field on a pdf make element: https://pdfmake.github.io/docs/0.1/document-definition-object/
    """

    TEXT: Optional[str]=None
    """
    A text element to be rendered on the PDF
    """

    NATIVE: Optional[str]=None
    """
    A native pdf element that can directly be rendered with pdfmake:
    https://pdfmake.github.io/docs/0.1/document-definition-object/
    """

    COLUMNS: Optional[str]=None
    """
    Render a set of {@link ExMachinaPdfElement}s side by side in a column format.
    Requires a field named "columns" to be set in the {@link ExMachinaPdfElement#elementConfig}
    
    Will eventually get transformed to a native pdfmake column element:
    https://pdfmake.github.io/docs/0.1/document-definition-object/columns/
    """
    def __init__(self, ECHARTS: Optional[str]=None, TEXT: Optional[str]=None, NATIVE: Optional[str]=None, COLUMNS: Optional[str]=None) -> None: ...

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


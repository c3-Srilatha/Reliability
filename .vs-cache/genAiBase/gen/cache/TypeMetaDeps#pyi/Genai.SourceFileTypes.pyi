#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Genai.SourceFileTypes


class SourceFileTypes():
    """
    Supported file formats for source file ingestion
    
    @remarks this represents a made instance of Genai.SourceFileTypes
    """
    
    C3DOC_MD: Optional[str]=None
    """
    C3doc markdown file
    """

    C3DOC: Optional[str]=None
    """
    C3doc markdown file
    """

    MD: Optional[str]=None
    """
    Markdown file
    """

    IPYNB: Optional[str]=None
    """
    Jupyter notebook
    """

    PDF: Optional[str]=None
    """
    PDF file
    """

    C3TYP: Optional[str]=None
    """
    C3typ file
    """

    DOC: Optional[str]=None
    """
    DOC file
    """

    DOCX: Optional[str]=None
    """
    DOCX file
    """

    HTML: Optional[str]=None
    """
    HTML file
    """

    PPTX: Optional[str]=None
    """
    PPTX file
    """

    TXT: Optional[str]=None
    """
    TXT file
    """

    RTF: Optional[str]=None
    """
    RTF file
    """

    PNG: Optional[str]=None
    """
    PNG file
    """

    JPEG: Optional[str]=None
    """
    JPEG file
    """

    JPG: Optional[str]=None
    """
    JPG file
    """

    XLSX: Optional[str]=None
    """
    XLSX file
    """
    def __init__(self, C3DOC_MD: Optional[str]=None, C3DOC: Optional[str]=None, MD: Optional[str]=None, IPYNB: Optional[str]=None, PDF: Optional[str]=None, C3TYP: Optional[str]=None, DOC: Optional[str]=None, DOCX: Optional[str]=None, HTML: Optional[str]=None, PPTX: Optional[str]=None, TXT: Optional[str]=None, RTF: Optional[str]=None, PNG: Optional[str]=None, JPEG: Optional[str]=None, JPG: Optional[str]=None, XLSX: Optional[str]=None) -> None: ...

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


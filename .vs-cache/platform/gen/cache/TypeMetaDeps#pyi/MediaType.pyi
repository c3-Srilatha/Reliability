#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.MediaTypeFields import MediaTypeFields
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type MediaType


class MediaType(VisualMediaType):
    """
    A list of commonly used Media Types (formerly known as MIME types). Full list can be found at
    http://www.iana.org/assignments/media-types/media-types.xhtml.
    
    @see ContentType
    
    @remarks this represents a made instance of MediaType
    """
    
    JPEG: Optional[str]=None
    """
    JPEG image.
    """

    PNG: Optional[str]=None
    """
    PNG image.
    """

    BMP: Optional[str]=None
    """
    BMP image.
    """

    GIF: Optional[str]=None
    """
    GIF image.
    """

    SVG: Optional[str]=None
    """
    SVG image.
    """

    ICO: Optional[str]=None
    """
    ICO icon.
    """

    ARF: Optional[str]=None
    """
    ARF file.
    """

    PLAIN_TEXT: Optional[str]=None

    OCTET_STREAM: Optional[str]=None

    MD: Optional[str]=None

    CSV: Optional[str]=None

    CSV_APP: Optional[str]=None

    TSV: Optional[str]=None

    XML: Optional[str]=None

    XML_APP: Optional[str]=None

    ATOM_XML: Optional[str]=None

    JSON: Optional[str]=None

    JSON_ALT: Optional[str]=None

    JSON_LINES: Optional[str]=None

    JSON_MERGE_PATCH: Optional[str]=None

    JSON_PATCH: Optional[str]=None

    YAML: Optional[str]=None

    XLSX: Optional[str]=None

    ZIP: Optional[str]=None

    GZIP: Optional[str]=None

    AVRO: Optional[str]=None

    PARQUET: Optional[str]=None

    HDF5: Optional[str]=None

    ARROW_FILE: Optional[str]=None

    ARROW_STREAM: Optional[str]=None

    CSV_GREEN_BUTTON: Optional[str]=None

    XML_GREEN_BUTTON: Optional[str]=None

    FORM_URLENCODED: Optional[str]=None

    FORM_DATA: Optional[str]=None

    HTML: Optional[str]=None

    CSS: Optional[str]=None

    SCSS: Optional[str]=None

    XHTML_XML: Optional[str]=None

    EDI: Optional[str]=None

    DSL_TYPE: Optional[str]=None

    DSL_UI: Optional[str]=None

    DOC: Optional[str]=None

    JS_TYPE: Optional[str]=None

    JS_UI: Optional[str]=None

    JS_TEST: Optional[str]=None

    JS: Optional[str]=None

    JS_APP: Optional[str]=None

    JS5: Optional[str]=None

    PY_TYPE: Optional[str]=None

    PY_TEST: Optional[str]=None

    PY: Optional[str]=None

    PY_ALT: Optional[str]=None

    R_TYPE: Optional[str]=None

    R_TEST: Optional[str]=None

    R: Optional[str]=None

    RUBY_TYPE: Optional[str]=None

    RUBY: Optional[str]=None

    TS_TYPE: Optional[str]=None

    TS: Optional[str]=None

    TS_APP: Optional[str]=None

    TSX_TYPE: Optional[str]=None

    TSX: Optional[str]=None

    TSX_APP: Optional[str]=None

    JSON_DATA: Optional[str]=None

    CSV_DATA: Optional[str]=None

    XML_DATA: Optional[str]=None

    C3BIN_DATA: Optional[str]=None

    JAVA_SRC: Optional[str]=None

    R_SRC: Optional[str]=None

    WOFF: Optional[str]=None

    WOFF2: Optional[str]=None

    OPEN_API_YAML: Optional[str]=None

    OPEN_API_JSON: Optional[str]=None

    PDF: Optional[str]=None

    JUPYTER_NOTEBOOK: Optional[str]=None

    C3_NOTEBOOK: Optional[str]=None

    WILDCARD: Optional[str]=None

    GDRIVE_FOLDER: Optional[str]=None

    GOOGLE_DOCS: Optional[str]=None

    GOOGLE_SHEETS: Optional[str]=None

    GOOGLE_SLIDES: Optional[str]=None

    EVENT_STREAM: Optional[str]=None

    SHELL: Optional[str]=None
    def __init__(self, JPEG: Optional[str]=None, PNG: Optional[str]=None, BMP: Optional[str]=None, GIF: Optional[str]=None, SVG: Optional[str]=None, ICO: Optional[str]=None, ARF: Optional[str]=None, PLAIN_TEXT: Optional[str]=None, OCTET_STREAM: Optional[str]=None, MD: Optional[str]=None, CSV: Optional[str]=None, CSV_APP: Optional[str]=None, TSV: Optional[str]=None, XML: Optional[str]=None, XML_APP: Optional[str]=None, ATOM_XML: Optional[str]=None, JSON: Optional[str]=None, JSON_ALT: Optional[str]=None, JSON_LINES: Optional[str]=None, JSON_MERGE_PATCH: Optional[str]=None, JSON_PATCH: Optional[str]=None, YAML: Optional[str]=None, XLSX: Optional[str]=None, ZIP: Optional[str]=None, GZIP: Optional[str]=None, AVRO: Optional[str]=None, PARQUET: Optional[str]=None, HDF5: Optional[str]=None, ARROW_FILE: Optional[str]=None, ARROW_STREAM: Optional[str]=None, CSV_GREEN_BUTTON: Optional[str]=None, XML_GREEN_BUTTON: Optional[str]=None, FORM_URLENCODED: Optional[str]=None, FORM_DATA: Optional[str]=None, HTML: Optional[str]=None, CSS: Optional[str]=None, SCSS: Optional[str]=None, XHTML_XML: Optional[str]=None, EDI: Optional[str]=None, DSL_TYPE: Optional[str]=None, DSL_UI: Optional[str]=None, DOC: Optional[str]=None, JS_TYPE: Optional[str]=None, JS_UI: Optional[str]=None, JS_TEST: Optional[str]=None, JS: Optional[str]=None, JS_APP: Optional[str]=None, JS5: Optional[str]=None, PY_TYPE: Optional[str]=None, PY_TEST: Optional[str]=None, PY: Optional[str]=None, PY_ALT: Optional[str]=None, R_TYPE: Optional[str]=None, R_TEST: Optional[str]=None, R: Optional[str]=None, RUBY_TYPE: Optional[str]=None, RUBY: Optional[str]=None, TS_TYPE: Optional[str]=None, TS: Optional[str]=None, TS_APP: Optional[str]=None, TSX_TYPE: Optional[str]=None, TSX: Optional[str]=None, TSX_APP: Optional[str]=None, JSON_DATA: Optional[str]=None, CSV_DATA: Optional[str]=None, XML_DATA: Optional[str]=None, C3BIN_DATA: Optional[str]=None, JAVA_SRC: Optional[str]=None, R_SRC: Optional[str]=None, WOFF: Optional[str]=None, WOFF2: Optional[str]=None, OPEN_API_YAML: Optional[str]=None, OPEN_API_JSON: Optional[str]=None, PDF: Optional[str]=None, JUPYTER_NOTEBOOK: Optional[str]=None, C3_NOTEBOOK: Optional[str]=None, WILDCARD: Optional[str]=None, GDRIVE_FOLDER: Optional[str]=None, GOOGLE_DOCS: Optional[str]=None, GOOGLE_SHEETS: Optional[str]=None, GOOGLE_SLIDES: Optional[str]=None, EVENT_STREAM: Optional[str]=None, SHELL: Optional[str]=None) -> None: ...

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
    def defaultCharset(cls, mediaType: str) -> Union[str]:
    """
    @return character set typically used with provided media type or null if unknown. @see Charset
    """
        ...
    @classmethod
    def isAnyText(cls, mediaType: str) -> bool:
    """
    @return true if provided media type is used for textual content. Note that this method may return false negatives
            I.e. some new / yet unknown media type may be for text but this method will still return false.
    """
        ...
    @classmethod
    def isAnyImage(cls, mediaType: str) -> bool:
    """
    @return true if provided media type is used for images.
    """
        ...
    @classmethod
    def baseMediaType(cls, contentType: str) -> Union[str]:
    """
    Extract the baseline MediaType from a potentially vendor-specific content type.
    For example, <code>text/vnd.c3.typ+plain</code> is a variant of <code>text/plain</code>
    {link ContentType#baseMediaType}
    """
        ...
    @classmethod
    def isRegisteredMediaType(cls, mediaType: str) -> bool:
    """
    Check if provided media type is registered with IANA https://www.iana.org/ - will pull latest csv file if possible.
    
    https://www.iana.org/assignments/media-types/media-types.xhtml
    https://www.iana.org/assignments/media-types/application.csv
    """
        ...
    @classmethod
    def registeredMediaTypes(cls, filter: str=None, sort: str=None, noCache: bool=None) -> Union[Array[MediaTypeFields]]:
    """
    @param filter
           c3 expression to filter media type fields
    @param sort
           c3 sort order expression to sort media type by field(s)
    @param noCache
           if true, will not use cached data and make a fresh request to IANA
    
    @return list of all known media types registered with IANA https://www.iana.org/
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type FileExt


class FileExt():
    """
    Standard file extensions supported by C3.
    Also see Media types {@link MediaType}
    
    @remarks this represents a made instance of FileExt
    """
    
    TXT: Optional[str]=None

    XML: Optional[str]=None

    CSV: Optional[str]=None

    XLSX: Optional[str]=None

    JSON: Optional[str]=None

    JSON_LINES: Optional[str]=None

    JSON_SCHEMA: Optional[str]=None

    YAML: Optional[str]=None

    HTML: Optional[str]=None

    CSS: Optional[str]=None

    SCSS: Optional[str]=None

    ZIP: Optional[str]=None

    TAR: Optional[str]=None

    TGZ: Optional[str]=None

    GZ: Optional[str]=None

    SNAPPY: Optional[str]=None

    LZ4: Optional[str]=None

    PKG: Optional[str]=None

    PKG_LOCK: Optional[str]=None

    TYPE: Optional[str]=None

    UI: Optional[str]=None

    DOC: Optional[str]=None

    DOC2: Optional[str]=None

    POLY: Optional[str]=None

    C3BIN: Optional[str]=None

    JS: Optional[str]=None

    JS5: Optional[str]=None

    JS_MAP: Optional[str]=None

    JS_MODULE: Optional[str]=None

    JS_X: Optional[str]=None

    TS: Optional[str]=None

    TSX: Optional[str]=None

    D_TS: Optional[str]=None

    PY: Optional[str]=None

    PYI: Optional[str]=None

    JAVA: Optional[str]=None

    R: Optional[str]=None

    RB: Optional[str]=None

    EDI: Optional[str]=None

    AVRO: Optional[str]=None

    ARROW: Optional[str]=None

    PARQUET: Optional[str]=None

    HDF5: Optional[str]=None

    H5: Optional[str]=None

    GH5: Optional[str]=None

    PNG: Optional[str]=None

    JPG: Optional[str]=None

    JPEG: Optional[str]=None

    SVG: Optional[str]=None

    ICO: Optional[str]=None

    MD: Optional[str]=None

    WOFF: Optional[str]=None

    WOFF2: Optional[str]=None

    BYT: Optional[str]=None

    FEATHER: Optional[str]=None

    IPYNB: Optional[str]=None
    """
    Jupyter notebook.
    """

    C3NB: Optional[str]=None
    """
    C3 notebook (Console and VSCode).
    """
    def __init__(self, TXT: Optional[str]=None, XML: Optional[str]=None, CSV: Optional[str]=None, XLSX: Optional[str]=None, JSON: Optional[str]=None, JSON_LINES: Optional[str]=None, JSON_SCHEMA: Optional[str]=None, YAML: Optional[str]=None, HTML: Optional[str]=None, CSS: Optional[str]=None, SCSS: Optional[str]=None, ZIP: Optional[str]=None, TAR: Optional[str]=None, TGZ: Optional[str]=None, GZ: Optional[str]=None, SNAPPY: Optional[str]=None, LZ4: Optional[str]=None, PKG: Optional[str]=None, PKG_LOCK: Optional[str]=None, TYPE: Optional[str]=None, UI: Optional[str]=None, DOC: Optional[str]=None, DOC2: Optional[str]=None, POLY: Optional[str]=None, C3BIN: Optional[str]=None, JS: Optional[str]=None, JS5: Optional[str]=None, JS_MAP: Optional[str]=None, JS_MODULE: Optional[str]=None, JS_X: Optional[str]=None, TS: Optional[str]=None, TSX: Optional[str]=None, D_TS: Optional[str]=None, PY: Optional[str]=None, PYI: Optional[str]=None, JAVA: Optional[str]=None, R: Optional[str]=None, RB: Optional[str]=None, EDI: Optional[str]=None, AVRO: Optional[str]=None, ARROW: Optional[str]=None, PARQUET: Optional[str]=None, HDF5: Optional[str]=None, H5: Optional[str]=None, GH5: Optional[str]=None, PNG: Optional[str]=None, JPG: Optional[str]=None, JPEG: Optional[str]=None, SVG: Optional[str]=None, ICO: Optional[str]=None, MD: Optional[str]=None, WOFF: Optional[str]=None, WOFF2: Optional[str]=None, BYT: Optional[str]=None, FEATHER: Optional[str]=None, IPYNB: Optional[str]=None, C3NB: Optional[str]=None) -> None: ...

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
    def compoundExts(cls) -> Union[Array[str]]:
    """
    Those extensions which have two parts, such as ".d.ts". For these, the methods below will #extract,
    {@link #fileHasExt find} and {@link #fileWithoutExt remove} _both_ parts.
    """
        ...
    @classmethod
    def dfltForContentTypeAndEncoding(cls, contentType: str, contentEncoding: str=None) -> str:
    """
    @return default file extension for given contentType and contentEncoding.
    """
        ...
    @classmethod
    def fileHasExt(cls, path: str, extension: str) -> bool:
    """
    Check whether a file name has the specified extension (case insensitive).
    
    @param path file path to check
    @param extension file extension to check, including period (`".py"`)
    """
        ...
    @classmethod
    def fileWithoutExt(cls, path: str) -> str:
    """
    Remove the extension from a file name. This will be the final period in the path, as long as not followed by
    a slash:
    ```
    foo.txt    --> foo
    a/b/c.jpg  --> a/b/c
    a/b/c      --> a/b/c
    a.b/c      --> a.b/c
    ```
    """
        ...
    @classmethod
    def extract(cls, path: str) -> Union[str]:
    """
    Extract the extension from a file name, including the separating period.
    
    @param path file path to extract from
    @return file extension, including period (`".py"`) or null
    """
        ...


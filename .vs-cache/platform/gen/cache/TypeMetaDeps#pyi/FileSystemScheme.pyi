#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type FileSystemScheme


class FileSystemScheme():
    """
    Enum for all possible file system schemes.
    
    @remarks this represents a made instance of FileSystemScheme
    """
    
    c3fs: Optional[str]=None
    """
    C3 file-system
    """

    meta: Optional[str]=None
    """
    Current meta-data for a tag
    """

    allmeta: Optional[str]=None
    """
    All the meta-data known to environment
    """

    file: Optional[str]=None
    """
    Local file-system
    """

    http: Optional[str]=None
    """
    HTTP
    """

    https: Optional[str]=None
    """
    HTTPS
    """

    s3: Optional[str]=None
    """
    AWS S3
    """

    azure: Optional[str]=None
    """
    Azure blob
    """

    adl: Optional[str]=None
    """
    Azure Data Lake Gen 2
    """

    hdfs: Optional[str]=None
    """
    HDFS
    """

    gcs: Optional[str]=None
    """
    GCS
    """

    github: Optional[str]=None
    """
    GitHub
    """

    git: Optional[str]=None
    """
    Git
    """

    tmp: Optional[str]=None
    """
    Tmp
    """

    zip: Optional[str]=None
    """
    Zip file-system
    """

    mem: Optional[str]=None
    """
    In memory content
    """

    msgraph: Optional[str]=None
    """
    MsGraph (OneDrive and SharePoint)
    """

    gdrive: Optional[str]=None
    """
    GoogleDrive
    """

    box: Optional[str]=None
    """
    Box
    """
    def __init__(self, c3fs: Optional[str]=None, meta: Optional[str]=None, allmeta: Optional[str]=None, file: Optional[str]=None, http: Optional[str]=None, https: Optional[str]=None, s3: Optional[str]=None, azure: Optional[str]=None, adl: Optional[str]=None, hdfs: Optional[str]=None, gcs: Optional[str]=None, github: Optional[str]=None, git: Optional[str]=None, tmp: Optional[str]=None, zip: Optional[str]=None, mem: Optional[str]=None, msgraph: Optional[str]=None, gdrive: Optional[str]=None, box: Optional[str]=None) -> None: ...

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


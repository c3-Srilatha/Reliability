#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type SelfServiceDISourceCollectionStatus


class SelfServiceDISourceCollectionStatus():
    """
    Statuses for a {@link FileSourceCollection} created through FileUpload
    
    @remarks this represents a made instance of SelfServiceDISourceCollectionStatus
    """
    
    UPLOADING: Optional[str]=None
    """
    Files are uploading
    """

    UPLOAD_FAILED: Optional[str]=None
    """
    File upload failed. Typically caused by terminating file upload
    """

    UPLOAD_ERROR: Optional[str]=None
    """
    File upload error. Typically caused by terminating file upload
    """

    UPLOAD_INVALID: Optional[str]=None
    """
    File upload invalid. Typically caused by terminating file upload
    """

    UPLOAD_CANCELLED: Optional[str]=None
    """
    File upload cancelled. Typically caused by terminating file upload
    """

    UPLOADED: Optional[str]=None
    """
    Files upload completed
    """

    PROCESSING: Optional[str]=None
    """
    SourceFiles are processing
    """

    INTEGRATING: Optional[str]=None
    """
    SourceFiles are integrating
    """

    PROCESS_FAILED: Optional[str]=None
    """
    There are some failures during SourceFile process
    """

    QUEUED_FOR_UPLOAD: Optional[str]=None
    """
    Files queued for upload
    """

    QUEUED_FOR_INTEGRATION: Optional[str]=None
    """
    Files queued for integration
    """

    PROCESS_COMPLETED: Optional[str]=None
    """
    SourceFiles has completed processing
    """
    def __init__(self, UPLOADING: Optional[str]=None, UPLOAD_FAILED: Optional[str]=None, UPLOAD_ERROR: Optional[str]=None, UPLOAD_INVALID: Optional[str]=None, UPLOAD_CANCELLED: Optional[str]=None, UPLOADED: Optional[str]=None, PROCESSING: Optional[str]=None, INTEGRATING: Optional[str]=None, PROCESS_FAILED: Optional[str]=None, QUEUED_FOR_UPLOAD: Optional[str]=None, QUEUED_FOR_INTEGRATION: Optional[str]=None, PROCESS_COMPLETED: Optional[str]=None) -> None: ...

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


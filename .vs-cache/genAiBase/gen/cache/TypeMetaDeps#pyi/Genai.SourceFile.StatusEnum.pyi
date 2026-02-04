#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Genai.SourceFile.StatusEnum


class StatusEnum():
    """
    Represents the current state of the source file with respect to
    ingestion (indexed, unindexed, re-indexing required,...)
    
    @remarks this represents a made instance of Genai.SourceFile.StatusEnum
    """
    
    INDEXED: Optional[str]=None
    """
    The {@link Genai.SourceFile} was successfully indexed
    """

    CHUNKED: Optional[str]=None
    """
    The {@link Genai.SourceFile} was successfully chunked
    """

    NOT_INDEXED: Optional[str]=None
    """
    When a {@link Genai.SourceFile} was either first created from syncing and has not been indexed yet
    or is manually removed from the index by a user
    """

    FAILED: Optional[str]=None
    """
    Either chunking or indexing failed for the {@link Genai.SourceFile}
    """

    NEEDS_REINDEXING: Optional[str]=None
    """
    The {@link Genai.SourceFile} is currently indexed but its {@link Genai.SourceFile#originalFile}
    has since been updated
    """

    REMOVING: Optional[str]=None
    """
    The {@link Genai.SourceFile} is being removed from the index
    """

    SYNCING: Optional[str]=None
    """
    The {@link Genai.SourceFile} is being synced. Depending on the configuration and results, it will
    then transition to #NOT_INDEXED or #NEEDS_REINDEXING
    """

    INDEXING: Optional[str]=None
    """
    The {@link Genai.SourceFile} has started to be indexed. Depending on the result, it will
    transition to #INDEXED or #FAILED
    """

    CHUNKING: Optional[str]=None
    """
    The {@link Genai.SourceFile} has started to be chunked. Depending on the result, it will
    transition to #CHUNKED or #FAILED
    """

    ARCHIVED: Optional[str]=None
    """
    The {@link Genai.SourceFile#originalFile} no longer exists, and the file is not currently indexed
    into {@link Genai.Retriever}
    """

    NEEDS_REMOVAL: Optional[str]=None
    """
    The {@link Genai.SourceFile#originalFile} no longer exists, but the file is currently indexed into
    the {@link Genai.Retriever}
    """

    DELETED: Optional[str]=None
    """
    User has deleted the {@link Genai.SourceFile}. Deleted files cannot be indexed.
    """
    def __init__(self, INDEXED: Optional[str]=None, CHUNKED: Optional[str]=None, NOT_INDEXED: Optional[str]=None, FAILED: Optional[str]=None, NEEDS_REINDEXING: Optional[str]=None, REMOVING: Optional[str]=None, SYNCING: Optional[str]=None, INDEXING: Optional[str]=None, CHUNKING: Optional[str]=None, ARCHIVED: Optional[str]=None, NEEDS_REMOVAL: Optional[str]=None, DELETED: Optional[str]=None) -> None: ...

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


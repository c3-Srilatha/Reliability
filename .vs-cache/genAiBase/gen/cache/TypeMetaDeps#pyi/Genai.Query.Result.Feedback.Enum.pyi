#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Genai.Query.Result.Feedback.Enum


class Enum():
    """
    Enum type for additional feedback options for a {@link Genai.Query.Result}.
    
    @remarks this represents a made instance of Genai.Query.Result.Feedback.Enum
    """
    
    HELPFUL: Optional[str]=None
    """
    Helpful status
    """

    ACCURATE: Optional[str]=None
    """
    Accurate status
    """

    NOT_HELPFUL: Optional[str]=None
    """
    Not helpful status
    """

    INACCURATE: Optional[str]=None
    """
    Inacurate status
    """

    OUTDATED: Optional[str]=None
    """
    Outdated status
    """

    HARMFUL: Optional[str]=None
    """
    Harmful status
    """

    TEXT_SUMMARY: Optional[str]=None
    """
    With just a text summary
    """

    IMAGE: Optional[str]=None
    """
    With an image
    """

    TABLE: Optional[str]=None
    """
    With a table
    """

    DATABASE_QUERY: Optional[str]=None
    """
    From database
    """

    VISUALIZATION: Optional[str]=None
    """
    With a visualization
    """

    EDITED_STRUCTURED_QUERY_SPEC: Optional[str]=None
    """
    From an edited structured query spec
    """
    def __init__(self, HELPFUL: Optional[str]=None, ACCURATE: Optional[str]=None, NOT_HELPFUL: Optional[str]=None, INACCURATE: Optional[str]=None, OUTDATED: Optional[str]=None, HARMFUL: Optional[str]=None, TEXT_SUMMARY: Optional[str]=None, IMAGE: Optional[str]=None, TABLE: Optional[str]=None, DATABASE_QUERY: Optional[str]=None, VISUALIZATION: Optional[str]=None, EDITED_STRUCTURED_QUERY_SPEC: Optional[str]=None) -> None: ...

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


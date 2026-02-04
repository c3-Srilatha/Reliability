#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Genai.Query.Type


class Type():
    """
    Queries that can be executed from the GenAI application.
    
    @remarks this represents a made instance of Genai.Query.Type
    """
    
    QUERY: Optional[str]=None
    """
    Standalone query
    """

    CHAT: Optional[str]=None
    """
    Chat history
    """

    QUERY_FROM_CHAT: Optional[str]=None
    """
    Queries from a chat message
    """

    QUERY_FROM_CHILD_RESULT: Optional[str]=None
    """
    Used internally in the application to track the child instances of {@link Genai.Query.Result} created during execution of a {@link Genai.Agent.Tool.MultiSourceSynthesizer}
    This is not for a user facing api, but only used for internal tracking of {@link Genai.Query.Result}
    Queries triggered using this type are not tracked for consumption in {@link Genai.Query.ResultCount}
    """

    QUERY_FROM_SUGGESTION: Optional[str]=None
    """
    Queries from a suggested follow-up
    """

    QUERY_FROM_TEST_CASE: Optional[str]=None
    """
    Queries from agent configuration test feed
    """

    FEW_SHOT_EXAMPLE_QUERY: Optional[str]=None
    """
    Queries from Few Shot Examples
    """
    def __init__(self, QUERY: Optional[str]=None, CHAT: Optional[str]=None, QUERY_FROM_CHAT: Optional[str]=None, QUERY_FROM_CHILD_RESULT: Optional[str]=None, QUERY_FROM_SUGGESTION: Optional[str]=None, QUERY_FROM_TEST_CASE: Optional[str]=None, FEW_SHOT_EXAMPLE_QUERY: Optional[str]=None) -> None: ...

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


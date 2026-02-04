#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Genai.Query.Result.InterimStatusEnum


class InterimStatusEnum():
    """
    Represents a status of the {@link Genai.Query.Result} in the
    process to answer a query (processing query, searching documents, generating final answer...)
    
    @remarks this represents a made instance of Genai.Query.Result.InterimStatusEnum
    """
    
    COMPLETED: Optional[str]=None
    """
    The query is being completed
    """

    EVALUATE_METRIC: Optional[str]=None
    """
    The metric is being evaluated
    """

    GENERATE_ANSWER: Optional[str]=None
    """
    The answer is being generated
    """

    GENERATE_VISUALIZATION: Optional[str]=None
    """
    The visualization is being generated
    """

    GENERATE_FOLLOW_UP_QUERIES: Optional[str]=None
    """
    The follow-up queries are being generated
    """

    EVAL_QUERY_TOOL_STALE: Optional[str]=None
    """
    The query tool is stale
    """

    INITIALIZE_EVAL_QUERY_TOOL: Optional[str]=None
    """
    The query tool is being initialized
    """

    INITIALIZE_STRUCTURED_QUERY_TOOL: Optional[str]=None
    """
    The structured query tool is being initialized
    """

    INITIALIZE_UNSTRUCTURED_QUERY_TOOL: Optional[str]=None
    """
    The unstructured query tool is being initialized
    """

    INITIALIZE_MULTI_SOURCE_QUERY_TOOL: Optional[str]=None
    """
    The multi-source query tool is being initialized
    """

    C3_METHOD_GENERATE_ARGS: Optional[str]=None
    """
    Generating args for C3 method
    """

    C3_METHOD_INVOKE_METHOD: Optional[str]=None
    """
    Invoking C3 method
    """

    C3_METHOD_PROCESS_RESULT: Optional[str]=None
    """
    Processing C3 method result
    """

    PROCESS_QUERY: Optional[str]=None
    """
    Processing query
    """

    QUERY_DATABASE: Optional[str]=None
    """
    Querying database
    """

    SEARCH_DOCUMENTS: Optional[str]=None
    """
    Searching documents
    """

    RETRIEVE_DATA: Optional[str]=None
    """
    Retrieving data from all sources
    """

    USE_EVAL_QUERY_TOOL: Optional[str]=None
    """
    The query tool is to be used next
    """

    USE_STRUCTURED_QUERY_TOOL: Optional[str]=None
    """
    The structured query tool is to be used next
    """

    USE_UNSTRUCTURED_QUERY_TOOL: Optional[str]=None
    """
    The unstructured query tool is to be used next
    """

    USE_MULTI_SOURCE_QUERY_TOOL: Optional[str]=None
    """
    The multi-source query tool is to be used next
    """

    USE_WEB_SEARCH_TOOL: Optional[str]=None
    """
    The web search tool is to be used next
    """

    MULTI_SOURCE_QUERY_TOOL_STALE: Optional[str]=None
    """
    The multi-source query tool is stale
    """

    FAILED: Optional[str]=None
    """
    Failed
    """

    INITIALIZE_PLANNER: Optional[str]=None
    """
    Initializing planner
    """

    GENERATE_PLAN: Optional[str]=None
    """
    Generating plan
    """

    GENERATE_PLAN_COMPLETED: Optional[str]=None
    """
    Generating plan completed
    """

    EXECUTE_PLAN: Optional[str]=None
    """
    Executing plan
    """

    INITIALIZE_DYNAMIC_AGENT: Optional[str]=None
    """
    Initializing dynamic agent
    """

    USE_DYNAMIC_AGENT: Optional[str]=None
    """
    The dynamic agent is to be used
    """
    def __init__(self, COMPLETED: Optional[str]=None, EVALUATE_METRIC: Optional[str]=None, GENERATE_ANSWER: Optional[str]=None, GENERATE_VISUALIZATION: Optional[str]=None, GENERATE_FOLLOW_UP_QUERIES: Optional[str]=None, EVAL_QUERY_TOOL_STALE: Optional[str]=None, INITIALIZE_EVAL_QUERY_TOOL: Optional[str]=None, INITIALIZE_STRUCTURED_QUERY_TOOL: Optional[str]=None, INITIALIZE_UNSTRUCTURED_QUERY_TOOL: Optional[str]=None, INITIALIZE_MULTI_SOURCE_QUERY_TOOL: Optional[str]=None, C3_METHOD_GENERATE_ARGS: Optional[str]=None, C3_METHOD_INVOKE_METHOD: Optional[str]=None, C3_METHOD_PROCESS_RESULT: Optional[str]=None, PROCESS_QUERY: Optional[str]=None, QUERY_DATABASE: Optional[str]=None, SEARCH_DOCUMENTS: Optional[str]=None, RETRIEVE_DATA: Optional[str]=None, USE_EVAL_QUERY_TOOL: Optional[str]=None, USE_STRUCTURED_QUERY_TOOL: Optional[str]=None, USE_UNSTRUCTURED_QUERY_TOOL: Optional[str]=None, USE_MULTI_SOURCE_QUERY_TOOL: Optional[str]=None, USE_WEB_SEARCH_TOOL: Optional[str]=None, MULTI_SOURCE_QUERY_TOOL_STALE: Optional[str]=None, FAILED: Optional[str]=None, INITIALIZE_PLANNER: Optional[str]=None, GENERATE_PLAN: Optional[str]=None, GENERATE_PLAN_COMPLETED: Optional[str]=None, EXECUTE_PLAN: Optional[str]=None, INITIALIZE_DYNAMIC_AGENT: Optional[str]=None, USE_DYNAMIC_AGENT: Optional[str]=None) -> None: ...

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


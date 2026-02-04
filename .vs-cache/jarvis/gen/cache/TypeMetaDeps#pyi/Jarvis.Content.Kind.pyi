#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Jarvis.Content.Kind


class Kind():
    """
    Represents the kind of a {@link Jarvis.Content}.
    
    @remarks this represents a made instance of Jarvis.Content.Kind
    """
    
    LOG: Optional[str]=None
    """
    Set when saving the complete record of logs for a {@link Jarvis.Step}.
    """

    LOG_CHUNK: Optional[str]=None
    """
    Set when periodically saving logs for a {@link Jarvis.Step}.
    """

    SCREENSHOT: Optional[str]=None
    """
    Set when saving screenshots for failed UI tests.
    """

    STEP_ARTIFACTS: Optional[str]=None
    """
    Set when saving a ZIP of all the artifacts saved for a {@link Jarvis.Step}.
    """

    TEST_ERROR: Optional[str]=None
    """
    Set when saving an individual test error that occurred during a {@link Jarvis.Step}.
    """

    TEST_FAILURE: Optional[str]=None
    """
    Set when saving an individual test failure that occurred during a {@link Jarvis.Step}.
    """

    TEST_FAILURES_AND_ERRORS: Optional[str]=None
    """
    Set when saving an aggregation of all the test failures and errors that occurred during a {@link Jarvis.Step}.
    """
    def __init__(self, LOG: Optional[str]=None, LOG_CHUNK: Optional[str]=None, SCREENSHOT: Optional[str]=None, STEP_ARTIFACTS: Optional[str]=None, TEST_ERROR: Optional[str]=None, TEST_FAILURE: Optional[str]=None, TEST_FAILURES_AND_ERRORS: Optional[str]=None) -> None: ...

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


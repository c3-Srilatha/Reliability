#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type EnvironmentVariable


class EnvironmentVariable():
    """
    Environment Variable names
    
    @remarks this represents a made instance of EnvironmentVariable
    """
    
    ACTION_ID: Optional[str]=None
    """
    id of the current action.
    The corresponding environment variable name is C3_ACTION_ID.
    """

    ACTION_AUTH_TOKEN: Optional[str]=None
    """
    Action Authentication Token. It is valid while the action used to generate it is running,
    only in the server where the action is running.
    The corresponding environment variable name is C3_ACTION_AUTH_TOKEN.
    """

    ENV: Optional[str]=None
    """
    Specifies a valid C3 Env name.
    The corresponding environment variable name is C3_Env.
    """

    APP: Optional[str]=None
    """
    Specifies a valid C3 App name in the context of the ENV.
    The corresponding environment variable name is C3_APP.
    """

    CONNECTOR: Optional[str]=None
    """
    Specifies a connector type that will be used to connect external action engine
    """

    HOST_URL: Optional[str]=None
    """
    Specifies full server host url.
    The corresponding environment variable name is C3_HOST_URL.
    """

    LD_LIBRARY_PATH: Optional[str]=None
    """
    Specifies the library path for CUDA installations.
    The corresponding environment variable name is LD_LIBRARY_PATH
    """
    def __init__(self, ACTION_ID: Optional[str]=None, ACTION_AUTH_TOKEN: Optional[str]=None, ENV: Optional[str]=None, APP: Optional[str]=None, CONNECTOR: Optional[str]=None, HOST_URL: Optional[str]=None, LD_LIBRARY_PATH: Optional[str]=None) -> None: ...

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


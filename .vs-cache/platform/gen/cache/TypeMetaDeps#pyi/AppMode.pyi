#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AppMode


class AppMode():
    """
    All possible modes a C3 Application can be deployed in.
    
    @remarks this represents a made instance of AppMode
    """
    
    PROD: Optional[str]=None
    """
    App is in a production mode; i.e. source code and metadata is read only, data integration is turned ON, and
    features are materialized using integrated data.
    In this mode, basic auth will not be enabled. Users must log in through SSO.
    """

    DEV: Optional[str]=None
    """
    App is in a development mode; i.e. source code and metadata is updatable, test data and types are available,
    data integration is turned ON, and features are materialized using integrated data.
    """

    TEST: Optional[str]=None
    """
    App is in a production like mode but with test data, source code, and metadata available; i.e. source code and
    metadata is read only, data integration is turned ON, and features are materialized using integrated data.
    """

    TRIAL: Optional[str]=None
    """
    App is in a trial / experimentation mode; i.e. source code and metadata is updatable for the root pkg,
    but test data and types are not available, data integration is turned OFF,
    and features are materialized using raw source data.
    """
    def __init__(self, PROD: Optional[str]=None, DEV: Optional[str]=None, TEST: Optional[str]=None, TRIAL: Optional[str]=None) -> None: ...

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
    def includesTestOverlay(cls, mode: str) -> bool:
    """
    Returns true if the AppMode includes Pkg contents from test overlay.
    """
        ...
    @classmethod
    def requiresUpdatablePkg(cls, mode: str) -> bool:
    """
    Returns true, in this mode, if Pkg needs to be updatable.
    """
        ...


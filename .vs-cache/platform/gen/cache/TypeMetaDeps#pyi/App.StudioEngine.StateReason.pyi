#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type App.StudioEngine.StateReason


class StateReason():
    """
    Represents the node state reason as a complementary information for Studio to determine
    the actual state and indicators exposed to the users.
    It contains the node state reason inferred from {@link App.StudioEngine}
    
    @remarks this represents a made instance of App.StudioEngine.StateReason
    """
    
    UPGRADING_SCHEMA: Optional[str]=None
    """
    The schema is being upgraded corresponding to {@link App.StudioEngine.State#BOOTSTRAPPING}
    """

    UPSERTING_SEED_DATA: Optional[str]=None
    """
    The seed data is being upserted corresponding to {@link App.StudioEngine.State#BOOTSTRAPPING}
    """

    SERVER_NOT_READY: Optional[str]=None
    """
    The {@link LocalJvm#readiness} returns false corresponding to {@link App.StudioEngine.State#BOOTSTRAPPING}
    """

    FATAL_PKG_ISSUE: Optional[str]=None
    """
    There is a critical pkg issue corresponding to {@link App.StudioEngine.State#ERROR}
    """

    FATAL_SEED_ISSUE: Optional[str]=None
    """
    There is a critical seed data issue corresponding to {@link App.StudioEngine.State#DEGRADED}
    """

    MISSING_ARTIFACT: Optional[str]=None
    """
    There is missing artifact from {@link Pkg.Store#validateConfiguredArtifactsExist}, corresponding to {@link App.StudioEngine.State#DEGRADED}
    """
    def __init__(self, UPGRADING_SCHEMA: Optional[str]=None, UPSERTING_SEED_DATA: Optional[str]=None, SERVER_NOT_READY: Optional[str]=None, FATAL_PKG_ISSUE: Optional[str]=None, FATAL_SEED_ISSUE: Optional[str]=None, MISSING_ARTIFACT: Optional[str]=None) -> None: ...

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


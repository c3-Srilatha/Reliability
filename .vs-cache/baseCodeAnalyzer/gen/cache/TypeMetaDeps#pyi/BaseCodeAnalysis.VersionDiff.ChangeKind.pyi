#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type BaseCodeAnalysis.VersionDiff.ChangeKind


class ChangeKind():
    """
    Enum Type for the different kinds of changes that can be reported in a changelog
    for a C3 application.
    
    @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.ChangeKind
    """
    
    ADDED: Optional[str]=None
    """
    A Type, field, method, method parameter, {@link Role}, UI component, or other metadata
    element was added.
    """

    REMOVED: Optional[str]=None
    """
    A Type, field, method, method parameter, {@link Role}, UI component, or other metadata
    element was removed.
    """

    CHANGED: Optional[str]=None
    """
    The metadata element exists in both versions, but has been changed in some way. For example,
    
      - A field or method parameter's {@link ValueType} was changed.
      - A field or method parameter's default value was changed.
      - The {@link ValueModifier} of a field or method parameter was changed.
      - The order of method parameters was changed.
      - A Type or field's schema name was changed.
    
    Depending on the nature of the change, this should result in a [deprecation](DEPRECATED)
    or should be marked as a breaking change.
    """

    DEPRECATED: Optional[str]=None
    """
    The metadata element was marked as [@deprecated](Ann.Deprecated) in the new version due
    to a backwards-incompatible change or because it's no longer recommended for use.
    """
    def __init__(self, ADDED: Optional[str]=None, REMOVED: Optional[str]=None, CHANGED: Optional[str]=None, DEPRECATED: Optional[str]=None) -> None: ...

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


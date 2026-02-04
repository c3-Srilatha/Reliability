#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsDbInstanceClass


class AwsDbInstanceClass():
    """
    Enumeration of all known aws db instance class.
    
    @remarks this represents a made instance of AwsDbInstanceClass
    """
    
    DB_T1_MICRO: Optional[str]=None

    DB_M1_SMALL: Optional[str]=None

    DB_M1_MEDIUM: Optional[str]=None

    DB_M1_LARGE: Optional[str]=None

    DB_M1_XLARGE: Optional[str]=None

    DB_M2_XLARGE: Optional[str]=None

    DB_M2_2XLARGE: Optional[str]=None

    DB_M2_4XLARGE: Optional[str]=None

    DB_M3_MEDIUM: Optional[str]=None

    DB_M3_LARGE: Optional[str]=None

    DB_M3_XLARGE: Optional[str]=None

    DB_M3_2XLARGE: Optional[str]=None

    DB_M4_LARGE: Optional[str]=None

    DB_M4_XLARGE: Optional[str]=None

    DB_M4_2XLARGE: Optional[str]=None

    DB_M4_4XLARGE: Optional[str]=None

    DB_M4_10XLARGE: Optional[str]=None

    DB_R3_LARGE: Optional[str]=None

    DB_R3_XLARGE: Optional[str]=None

    DB_R3_2XLARGE: Optional[str]=None

    DB_R3_4XLARGE: Optional[str]=None

    DB_R3_8XLARGE: Optional[str]=None

    DB_T2_MICRO: Optional[str]=None

    DB_T2_SMALL: Optional[str]=None

    DB_T2_MEDIUM: Optional[str]=None

    DB_T2_LARGE: Optional[str]=None
    def __init__(self, DB_T1_MICRO: Optional[str]=None, DB_M1_SMALL: Optional[str]=None, DB_M1_MEDIUM: Optional[str]=None, DB_M1_LARGE: Optional[str]=None, DB_M1_XLARGE: Optional[str]=None, DB_M2_XLARGE: Optional[str]=None, DB_M2_2XLARGE: Optional[str]=None, DB_M2_4XLARGE: Optional[str]=None, DB_M3_MEDIUM: Optional[str]=None, DB_M3_LARGE: Optional[str]=None, DB_M3_XLARGE: Optional[str]=None, DB_M3_2XLARGE: Optional[str]=None, DB_M4_LARGE: Optional[str]=None, DB_M4_XLARGE: Optional[str]=None, DB_M4_2XLARGE: Optional[str]=None, DB_M4_4XLARGE: Optional[str]=None, DB_M4_10XLARGE: Optional[str]=None, DB_R3_LARGE: Optional[str]=None, DB_R3_XLARGE: Optional[str]=None, DB_R3_2XLARGE: Optional[str]=None, DB_R3_4XLARGE: Optional[str]=None, DB_R3_8XLARGE: Optional[str]=None, DB_T2_MICRO: Optional[str]=None, DB_T2_SMALL: Optional[str]=None, DB_T2_MEDIUM: Optional[str]=None, DB_T2_LARGE: Optional[str]=None) -> None: ...

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


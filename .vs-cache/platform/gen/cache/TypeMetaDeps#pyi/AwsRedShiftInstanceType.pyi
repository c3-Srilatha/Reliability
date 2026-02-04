#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsRedShiftInstanceType


class AwsRedShiftInstanceType():
    """
    @remarks this represents a made instance of AwsRedShiftInstanceType
    """
    
    DC1_LARGE: Optional[str]=None
    """
    The node has 7 EC2 Compute Units (2 virtual cores), 15Gib Memory, 160GB SSD Storage, and moderate I/O performance
    """

    DC2_LARGE: Optional[str]=None

    DC2_8XLARGE: Optional[str]=None

    DS1_XLARGE: Optional[str]=None
    """
    The node has 2 virtual cores, 15Gib Memory, 2TB HDD Storage, and moderate I/O performance
    """

    DS2_XLARGE: Optional[str]=None
    """
    The node has 13 EC2 Compute Units (4 virtual cores), 31Gib Memory, 2TB HDD Storage, and moderate I/O performance
    """

    DC1_8XLARGE: Optional[str]=None
    """
    The node has 104 EC2 Compute Units (32 virtual cores), 244Gib Memory, 2.56TB SSD Storage, and very high I/O performance
    """

    DS2_8XLARGE: Optional[str]=None
    """
    The node has 119 EC2 Compute Units (36 virtual cores), 244Gib Memory, 16TB HDD Storage, and very high I/O performance
    """

    DS1_8XLARGE: Optional[str]=None
    """
    The node has 16 virtual cores, 120Gib Memory, 16TB HDD Storage, and high I/O performance
    """
    def __init__(self, DC1_LARGE: Optional[str]=None, DC2_LARGE: Optional[str]=None, DC2_8XLARGE: Optional[str]=None, DS1_XLARGE: Optional[str]=None, DS2_XLARGE: Optional[str]=None, DC1_8XLARGE: Optional[str]=None, DS2_8XLARGE: Optional[str]=None, DS1_8XLARGE: Optional[str]=None) -> None: ...

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


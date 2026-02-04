#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type EC2InstanceType


class EC2InstanceType():
    """
    The following enum defines all the AWS instance types, this enum is used
    in the Cluster.startNodes() API.
    
    @remarks this represents a made instance of EC2InstanceType
    """
    
    t2_micro: Optional[str]=None

    t2_small: Optional[str]=None

    t2_medium: Optional[str]=None

    t2_large: Optional[str]=None

    m4_large: Optional[str]=None

    m4_xlarge: Optional[str]=None

    m4_2xlarge: Optional[str]=None

    m4_4xlarge: Optional[str]=None

    m4_10xlarge: Optional[str]=None

    m3_medium: Optional[str]=None

    m3_large: Optional[str]=None

    m3_xlarge: Optional[str]=None

    m3_2xlarge: Optional[str]=None

    c4_large: Optional[str]=None

    c4_xlarge: Optional[str]=None

    c4_2xlarge: Optional[str]=None

    c4_4xlarge: Optional[str]=None

    c4_8xlarge: Optional[str]=None

    c3_large: Optional[str]=None

    c3_xlarge: Optional[str]=None

    c3_2xlarge: Optional[str]=None

    c3_4xlarge: Optional[str]=None

    c3_8xlarge: Optional[str]=None

    r3_large: Optional[str]=None

    r3_xlarge: Optional[str]=None

    r3_2xlarge: Optional[str]=None

    r3_4xlarge: Optional[str]=None

    r3_8xlarge: Optional[str]=None

    g2_2xlarge: Optional[str]=None

    g2_8xlarge: Optional[str]=None

    i2_xlarge: Optional[str]=None

    i2_2xlarge: Optional[str]=None

    i2_4xlarge: Optional[str]=None

    i2_8xlarge: Optional[str]=None

    d2_xlarge: Optional[str]=None

    d2_2xlarge: Optional[str]=None

    d2_4xlarge: Optional[str]=None

    d2_8xlarge: Optional[str]=None
    def __init__(self, t2_micro: Optional[str]=None, t2_small: Optional[str]=None, t2_medium: Optional[str]=None, t2_large: Optional[str]=None, m4_large: Optional[str]=None, m4_xlarge: Optional[str]=None, m4_2xlarge: Optional[str]=None, m4_4xlarge: Optional[str]=None, m4_10xlarge: Optional[str]=None, m3_medium: Optional[str]=None, m3_large: Optional[str]=None, m3_xlarge: Optional[str]=None, m3_2xlarge: Optional[str]=None, c4_large: Optional[str]=None, c4_xlarge: Optional[str]=None, c4_2xlarge: Optional[str]=None, c4_4xlarge: Optional[str]=None, c4_8xlarge: Optional[str]=None, c3_large: Optional[str]=None, c3_xlarge: Optional[str]=None, c3_2xlarge: Optional[str]=None, c3_4xlarge: Optional[str]=None, c3_8xlarge: Optional[str]=None, r3_large: Optional[str]=None, r3_xlarge: Optional[str]=None, r3_2xlarge: Optional[str]=None, r3_4xlarge: Optional[str]=None, r3_8xlarge: Optional[str]=None, g2_2xlarge: Optional[str]=None, g2_8xlarge: Optional[str]=None, i2_xlarge: Optional[str]=None, i2_2xlarge: Optional[str]=None, i2_4xlarge: Optional[str]=None, i2_8xlarge: Optional[str]=None, d2_xlarge: Optional[str]=None, d2_2xlarge: Optional[str]=None, d2_4xlarge: Optional[str]=None, d2_8xlarge: Optional[str]=None) -> None: ...

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


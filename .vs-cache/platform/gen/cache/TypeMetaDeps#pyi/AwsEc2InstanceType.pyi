#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsEc2InstanceType


class AwsEc2InstanceType():
    """
    Enumeration of all known AWS Ec2 Instance Types.
    
    @remarks this represents a made instance of AwsEc2InstanceType
    """
    
    T1_MICRO: Optional[str]=None

    T2_NANO: Optional[str]=None

    T2_MICRO: Optional[str]=None

    T2_SMALL: Optional[str]=None

    T2_MEDIUM: Optional[str]=None

    T2_LARGE: Optional[str]=None

    T2_XLARGE: Optional[str]=None

    T2_2XLARGE: Optional[str]=None

    M1_SMALL: Optional[str]=None

    M1_MEDIUM: Optional[str]=None

    M1_LARGE: Optional[str]=None

    M1_XLARGE: Optional[str]=None

    M3_MEDIUM: Optional[str]=None

    M3_LARGE: Optional[str]=None

    M3_XLARGE: Optional[str]=None

    M3_2XLARGE: Optional[str]=None

    M4_LARGE: Optional[str]=None

    M4_XLARGE: Optional[str]=None

    M4_2XLARGE: Optional[str]=None

    M4_4XLARGE: Optional[str]=None

    M4_10XLARGE: Optional[str]=None

    M4_16XLARGE: Optional[str]=None

    M2_XLARGE: Optional[str]=None

    M2_2XLARGE: Optional[str]=None

    M2_4XLARGE: Optional[str]=None

    M5_LARGE: Optional[str]=None

    M5_XLARGE: Optional[str]=None

    M5_2XLARGE: Optional[str]=None

    M5_4XLARGE: Optional[str]=None

    M5_12XLARGE: Optional[str]=None

    M5_24XLARGE: Optional[str]=None

    M5D_LARGE: Optional[str]=None

    M5D_XLARGE: Optional[str]=None

    M5D_2XLARGE: Optional[str]=None

    M5D_4XLARGE: Optional[str]=None

    M5D_12XLARGE: Optional[str]=None

    M5D_24XLARGE: Optional[str]=None

    CR1_8XLARGE: Optional[str]=None

    R3_LARGE: Optional[str]=None

    R3_XLARGE: Optional[str]=None

    R3_2XLARGE: Optional[str]=None

    R3_4XLARGE: Optional[str]=None

    R3_8XLARGE: Optional[str]=None

    R4_LARGE: Optional[str]=None

    R4_XLARGE: Optional[str]=None

    R4_2XLARGE: Optional[str]=None

    R4_4XLARGE: Optional[str]=None

    R4_8XLARGE: Optional[str]=None

    R4_16XLARGE: Optional[str]=None

    R5_LARGE: Optional[str]=None

    R5_XLARGE: Optional[str]=None

    R5_2XLARGE: Optional[str]=None

    R5_4XLARGE: Optional[str]=None

    R5_12XLARGE: Optional[str]=None

    R5_24XLARGE: Optional[str]=None

    R5D_LARGE: Optional[str]=None

    R5D_XLARGE: Optional[str]=None

    R5D_2XLARGE: Optional[str]=None

    R5D_4XLARGE: Optional[str]=None

    R5D_12XLARGE: Optional[str]=None

    R5D_24XLARGE: Optional[str]=None

    X1_16XLARGE: Optional[str]=None

    X1_32XLARGE: Optional[str]=None

    I2_XLARGE: Optional[str]=None

    I2_2XLARGE: Optional[str]=None

    I2_4XLARGE: Optional[str]=None

    I2_8XLARGE: Optional[str]=None

    I3_LARGE: Optional[str]=None

    I3_XLARGE: Optional[str]=None

    I3_2XLARGE: Optional[str]=None

    I3_4XLARGE: Optional[str]=None

    I3_8XLARGE: Optional[str]=None

    I3_16XLARGE: Optional[str]=None

    HI1_4XLARGE: Optional[str]=None

    HS1_8XLARGE: Optional[str]=None

    C1_MEDIUM: Optional[str]=None

    C1_XLARGE: Optional[str]=None

    C3_LARGE: Optional[str]=None

    C3_XLARGE: Optional[str]=None

    C3_2XLARGE: Optional[str]=None

    C3_4XLARGE: Optional[str]=None

    C3_8XLARGE: Optional[str]=None

    C4_LARGE: Optional[str]=None

    C4_XLARGE: Optional[str]=None

    C4_2XLARGE: Optional[str]=None

    C4_4XLARGE: Optional[str]=None

    C4_8XLARGE: Optional[str]=None

    C5_LARGE: Optional[str]=None

    C5_XLARGE: Optional[str]=None

    C5_2XLARGE: Optional[str]=None

    C5_4XLARGE: Optional[str]=None

    C5_9XLARGE: Optional[str]=None

    C5_18XLARGE: Optional[str]=None

    C5D_LARGE: Optional[str]=None

    C5D_XLARGE: Optional[str]=None

    C5D_2XLARGE: Optional[str]=None

    C5D_4XLARGE: Optional[str]=None

    C5D_9XLARGE: Optional[str]=None

    C5D_18XLARGE: Optional[str]=None

    CC1_4XLARGE: Optional[str]=None

    CC2_8XLARGE: Optional[str]=None

    G2_2XLARGE: Optional[str]=None

    G2_8XLARGE: Optional[str]=None

    CG1_4XLARGE: Optional[str]=None

    P2_XLARGE: Optional[str]=None

    P2_8XLARGE: Optional[str]=None

    P2_16XLARGE: Optional[str]=None

    P3_2XLARGE: Optional[str]=None

    P3_8XLARGE: Optional[str]=None

    P3_16XLARGE: Optional[str]=None

    D2_XLARGE: Optional[str]=None

    D2_2XLARGE: Optional[str]=None

    D2_4XLARGE: Optional[str]=None

    D2_8XLARGE: Optional[str]=None

    F1_2XLARGE: Optional[str]=None

    F1_16XLARGE: Optional[str]=None

    R6I_LARGE: Optional[str]=None

    R6I_XLARGE: Optional[str]=None

    R6I_2XLARGE: Optional[str]=None

    R6I_4XLARGE: Optional[str]=None

    R6I_8XLARGE: Optional[str]=None

    R6I_12XLARGE: Optional[str]=None

    R6I_16XLARGE: Optional[str]=None

    R6I_24XLARGE: Optional[str]=None

    R6I_32XLARGE: Optional[str]=None

    M6I_LARGE: Optional[str]=None

    M6I_XLARGE: Optional[str]=None

    M6I_2XLARGE: Optional[str]=None

    M6I_4XLARGE: Optional[str]=None

    M6I_8XLARGE: Optional[str]=None

    M6I_12XLARGE: Optional[str]=None

    M6I_16XLARGE: Optional[str]=None

    M6I_24XLARGE: Optional[str]=None

    M6I_32XLARGE: Optional[str]=None

    C6I_LARGE: Optional[str]=None

    C6I_XLARGE: Optional[str]=None

    C6I_2XLARGE: Optional[str]=None

    C6I_4XLARGE: Optional[str]=None

    C6I_8XLARGE: Optional[str]=None

    C6I_12XLARGE: Optional[str]=None

    C6I_16XLARGE: Optional[str]=None

    C6I_24XLARGE: Optional[str]=None

    C6I_32XLARGE: Optional[str]=None
    def __init__(self, T1_MICRO: Optional[str]=None, T2_NANO: Optional[str]=None, T2_MICRO: Optional[str]=None, T2_SMALL: Optional[str]=None, T2_MEDIUM: Optional[str]=None, T2_LARGE: Optional[str]=None, T2_XLARGE: Optional[str]=None, T2_2XLARGE: Optional[str]=None, M1_SMALL: Optional[str]=None, M1_MEDIUM: Optional[str]=None, M1_LARGE: Optional[str]=None, M1_XLARGE: Optional[str]=None, M3_MEDIUM: Optional[str]=None, M3_LARGE: Optional[str]=None, M3_XLARGE: Optional[str]=None, M3_2XLARGE: Optional[str]=None, M4_LARGE: Optional[str]=None, M4_XLARGE: Optional[str]=None, M4_2XLARGE: Optional[str]=None, M4_4XLARGE: Optional[str]=None, M4_10XLARGE: Optional[str]=None, M4_16XLARGE: Optional[str]=None, M2_XLARGE: Optional[str]=None, M2_2XLARGE: Optional[str]=None, M2_4XLARGE: Optional[str]=None, M5_LARGE: Optional[str]=None, M5_XLARGE: Optional[str]=None, M5_2XLARGE: Optional[str]=None, M5_4XLARGE: Optional[str]=None, M5_12XLARGE: Optional[str]=None, M5_24XLARGE: Optional[str]=None, M5D_LARGE: Optional[str]=None, M5D_XLARGE: Optional[str]=None, M5D_2XLARGE: Optional[str]=None, M5D_4XLARGE: Optional[str]=None, M5D_12XLARGE: Optional[str]=None, M5D_24XLARGE: Optional[str]=None, CR1_8XLARGE: Optional[str]=None, R3_LARGE: Optional[str]=None, R3_XLARGE: Optional[str]=None, R3_2XLARGE: Optional[str]=None, R3_4XLARGE: Optional[str]=None, R3_8XLARGE: Optional[str]=None, R4_LARGE: Optional[str]=None, R4_XLARGE: Optional[str]=None, R4_2XLARGE: Optional[str]=None, R4_4XLARGE: Optional[str]=None, R4_8XLARGE: Optional[str]=None, R4_16XLARGE: Optional[str]=None, R5_LARGE: Optional[str]=None, R5_XLARGE: Optional[str]=None, R5_2XLARGE: Optional[str]=None, R5_4XLARGE: Optional[str]=None, R5_12XLARGE: Optional[str]=None, R5_24XLARGE: Optional[str]=None, R5D_LARGE: Optional[str]=None, R5D_XLARGE: Optional[str]=None, R5D_2XLARGE: Optional[str]=None, R5D_4XLARGE: Optional[str]=None, R5D_12XLARGE: Optional[str]=None, R5D_24XLARGE: Optional[str]=None, X1_16XLARGE: Optional[str]=None, X1_32XLARGE: Optional[str]=None, I2_XLARGE: Optional[str]=None, I2_2XLARGE: Optional[str]=None, I2_4XLARGE: Optional[str]=None, I2_8XLARGE: Optional[str]=None, I3_LARGE: Optional[str]=None, I3_XLARGE: Optional[str]=None, I3_2XLARGE: Optional[str]=None, I3_4XLARGE: Optional[str]=None, I3_8XLARGE: Optional[str]=None, I3_16XLARGE: Optional[str]=None, HI1_4XLARGE: Optional[str]=None, HS1_8XLARGE: Optional[str]=None, C1_MEDIUM: Optional[str]=None, C1_XLARGE: Optional[str]=None, C3_LARGE: Optional[str]=None, C3_XLARGE: Optional[str]=None, C3_2XLARGE: Optional[str]=None, C3_4XLARGE: Optional[str]=None, C3_8XLARGE: Optional[str]=None, C4_LARGE: Optional[str]=None, C4_XLARGE: Optional[str]=None, C4_2XLARGE: Optional[str]=None, C4_4XLARGE: Optional[str]=None, C4_8XLARGE: Optional[str]=None, C5_LARGE: Optional[str]=None, C5_XLARGE: Optional[str]=None, C5_2XLARGE: Optional[str]=None, C5_4XLARGE: Optional[str]=None, C5_9XLARGE: Optional[str]=None, C5_18XLARGE: Optional[str]=None, C5D_LARGE: Optional[str]=None, C5D_XLARGE: Optional[str]=None, C5D_2XLARGE: Optional[str]=None, C5D_4XLARGE: Optional[str]=None, C5D_9XLARGE: Optional[str]=None, C5D_18XLARGE: Optional[str]=None, CC1_4XLARGE: Optional[str]=None, CC2_8XLARGE: Optional[str]=None, G2_2XLARGE: Optional[str]=None, G2_8XLARGE: Optional[str]=None, CG1_4XLARGE: Optional[str]=None, P2_XLARGE: Optional[str]=None, P2_8XLARGE: Optional[str]=None, P2_16XLARGE: Optional[str]=None, P3_2XLARGE: Optional[str]=None, P3_8XLARGE: Optional[str]=None, P3_16XLARGE: Optional[str]=None, D2_XLARGE: Optional[str]=None, D2_2XLARGE: Optional[str]=None, D2_4XLARGE: Optional[str]=None, D2_8XLARGE: Optional[str]=None, F1_2XLARGE: Optional[str]=None, F1_16XLARGE: Optional[str]=None, R6I_LARGE: Optional[str]=None, R6I_XLARGE: Optional[str]=None, R6I_2XLARGE: Optional[str]=None, R6I_4XLARGE: Optional[str]=None, R6I_8XLARGE: Optional[str]=None, R6I_12XLARGE: Optional[str]=None, R6I_16XLARGE: Optional[str]=None, R6I_24XLARGE: Optional[str]=None, R6I_32XLARGE: Optional[str]=None, M6I_LARGE: Optional[str]=None, M6I_XLARGE: Optional[str]=None, M6I_2XLARGE: Optional[str]=None, M6I_4XLARGE: Optional[str]=None, M6I_8XLARGE: Optional[str]=None, M6I_12XLARGE: Optional[str]=None, M6I_16XLARGE: Optional[str]=None, M6I_24XLARGE: Optional[str]=None, M6I_32XLARGE: Optional[str]=None, C6I_LARGE: Optional[str]=None, C6I_XLARGE: Optional[str]=None, C6I_2XLARGE: Optional[str]=None, C6I_4XLARGE: Optional[str]=None, C6I_8XLARGE: Optional[str]=None, C6I_12XLARGE: Optional[str]=None, C6I_16XLARGE: Optional[str]=None, C6I_24XLARGE: Optional[str]=None, C6I_32XLARGE: Optional[str]=None) -> None: ...

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


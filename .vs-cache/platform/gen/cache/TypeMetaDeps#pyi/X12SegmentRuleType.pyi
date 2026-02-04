#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type X12SegmentRuleType


class X12SegmentRuleType():
    """
    Type of segment rules.
    
    @see X12SegmentRule
    
    @remarks this represents a made instance of X12SegmentRuleType
    """
    
    SET_OF_VALUES: Optional[str]=None
    """
    element value should be one of those listed in ruleAttributes:
    ruleAttributes[0] - element id ('ref') in segment
    ruleAttributes[1..n] - applicable values
    """

    REQUIRED_IF_SET_OF_VALUES: Optional[str]=None
    """
    the element A is required if element B has value that is one of those listed in ruleAttributes:
    ruleAttributes[0] - element B id ('ref') in segment
    ruleAttributes[1] - element A id ('ref') in segment
    ruleAttributes[2..n] - applicable values
    """

    SYNTAX: Optional[str]=None
    """
    List of syntax rules, that checks rules like 'is element A is required, the element B should be as well", etc.
    ruleAttributes[0..n] - list of syntax rules
    Possible syntax rules types (X1..XN are the elements with IDs specified in the rule):
    CX1X2: if X is present then Y is required;
    EX1X2: only one of X1 or X2 should be present;
    LX1X2..XN: if X1 is present then at least one of X2..XN should be present as well;
    PX1X2: if X1 is present then X2 should be present as well, and vice versa;
    RX1..XN: at least one of X1..Xn should be present.
    """

    TYPE: Optional[str]=None
    """
    element at index ruleAttributes[0] should has type ruleAttributes[1].
    """

    MAX_LENGTH: Optional[str]=None
    """
    length of the value for an element at index ruleAttributes[0] should not exceed ruleAttributes[1].
    """
    def __init__(self, SET_OF_VALUES: Optional[str]=None, REQUIRED_IF_SET_OF_VALUES: Optional[str]=None, SYNTAX: Optional[str]=None, TYPE: Optional[str]=None, MAX_LENGTH: Optional[str]=None) -> None: ...

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


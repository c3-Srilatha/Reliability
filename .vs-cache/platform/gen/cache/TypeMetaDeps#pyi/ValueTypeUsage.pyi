#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ValueTypeUsage


class ValueTypeUsage():
    """
    List of places where the ValueType usage occurs
    
    @remarks this represents a made instance of ValueTypeUsage
    """
    
    RETURN_TYPE: Optional[str]=None
    """
    usage is at action return type
    E.g. function(arg: Digest<V>) : int
                                     |
    """

    FUNC_ARG: Optional[str]=None
    """
    usage is an argument to a method
    E.g. function(arg: Digest<V>)
                          |
    """

    VAR_BINDING_IN_FUNC_ARG: Optional[str]=None
    """
    usage is an var binding in a function argument
    E.g. function(arg: Digest<V>)
                              |
    """

    VAR_BINDING_IN_RETURN_TYPE: Optional[str]=None
    """
    usage is at action return type
    E.g. function(arg: Digest<V>) : Digest<V>
                                           |
    """

    FIELD: Optional[str]=None
    """
    usage is on the field
    E.g. Digest<V> obj;
            |
    """

    VAR_BINDING_IN_FIELD: Optional[str]=None
    """
    usage is on the var binding of the field's value type
    E.g. Digest<V> obj;
                |
    """
    def __init__(self, RETURN_TYPE: Optional[str]=None, FUNC_ARG: Optional[str]=None, VAR_BINDING_IN_FUNC_ARG: Optional[str]=None, VAR_BINDING_IN_RETURN_TYPE: Optional[str]=None, FIELD: Optional[str]=None, VAR_BINDING_IN_FIELD: Optional[str]=None) -> None: ...

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
    def isInReturnType(cls, usage: str) -> bool:
    """
    @return true if ValueTypeUsage is in action return type
    """
        ...
    @classmethod
    def isInFunc(cls, usage: str) -> bool:
    """
    @return true if ValueTypeUsage is in action argument
    """
        ...
    @classmethod
    def isInVarBinding(cls, usage: str) -> bool:
    """
    @return true if ValueTypeUsage is in a var binding
    """
        ...


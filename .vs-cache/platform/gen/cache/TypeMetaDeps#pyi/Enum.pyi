#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Enum

T = TypeVar('T')

class Enum(Generic[T], Value):
    """
    This is the mixin type of every declared enumeration type, with a generic variable which is bound to the
    type of the enumeration values. It provides methods available on all enumerations.
    An enumeration type is a way to declare a set of constant keys (and optionally values) which is reusable.
    
    Simple enumerations have the value identical to the key, of type string:
    ```type
    enum type Characters { GOOD BAD UGLY }
    ```
    Will produce a type with three constant fields, each of whose value is a string with the same text as the key.
    
    It is also possible to assign values to the constants:
    ```type
    enum type HttpStatus { OK = 200 BAD_REQUEST = 400 NOT_FOUND = 404 }
    ```
    In this case, the values must all be of the same type and the resulting type will have the generic variable **T**
    bound to that value type.
    
    Despite the examples above, it is best to put each enumeration value on a separate line with a documentation comment.
    
    Enums may also be mixed in:
    ```type
    enum type ImageUploadHttpStatus mixes HttpStatus { TOO_BLURRY = 460 }
    ```
    This makes a new enum *ImageUploadHttpStatus* that has all the values of *HttpStatus*, plus the new one it defines.
    The original HttpStatus enum is not affected.
    
    Note that the type of the enum value must be consistent across all mixed-in enum types (just as they must be between
    values of the same enum type).
    
    When an enum is used to declare a field or function parameter, the syntax is:
    ```type
    status: int enum HttpStatus
    ```
    If a default value is desired, use the name of the enum field:
    ```type
    status: int enum HttpStatus = OK
    ```
    Enum fields (labels/values) need to be defined in order for its ordering-related APIs to work, such as values(), labelIndex()
    See also {@link TypMeta#declaredFieldTypes}
    
    @var T will be bound to the type of the enum values
    
    @remarks this represents a made instance of Enum
    """
    def __init__(self) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[T]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: T, failIfInvalid: bool=None) -> Union[str]:
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
    def valueIndex(cls, value: T, failIfInvalid: bool=None) -> int:
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
    def values(cls) -> Union[Array[T]]:
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
    def valueToLabels(cls) -> Union[Map[T, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, T]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: T) -> bool:
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
    def eachValue(cls, action: Callable[[T]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...


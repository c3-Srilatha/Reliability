#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType
from c3.platform.Iterator import Iterator

# Python definitions for the C3 type Arrow.Vector


class Vector(Value):
    """
    Type representing https://arrow.apache.org/docs/index.html value vector
    
    @remarks this represents a made instance of Arrow.Vector
    """
    def __init__(self) -> None: ...

    def at(self, index: int) -> Union[T]:
    """
    Retrieve value at index
    """
        ...
    def doubleAt(self, index: int) -> float:
    """
    Retrieve double value at index; or error if this is not a double vector
    """
        ...
    def strAt(self, index: int) -> Union[str]:
    """
    Retrieve string value at index; or error if this is not a string vector
    """
        ...
    def datetimeAt(self, index: int) -> Union[datetime]:
    """
    Retrieve datetime value at index; or error if this is not a string vector
    """
        ...
    def utf8At(self, index: int) -> Union[any]:
    """
    Retrieve UTF-8 string value at index; or error if this is not a string vector
    """
        ...
    def isNull(self, index: int) -> bool:
    """
    Check if value at index in null
    """
        ...
    def name(self) -> str:
    """
    Name of the field for this vector
    """
        ...
    def valueType(self) -> ValueType:
    """
    C3 Value Type of elements in this vector
    """
        ...
    def arrowType(self) -> str:
    """
    String representation of Arrow schema of field for this vector
    """
        ...
    def javaField(self) -> Any:
    """
    Java native schema of this Arrow buffer
    """
        ...
    @classmethod
    def toCol(cls, fieldVector: Any, valueTypeOverrides: Map[str, ValueType]=None) -> Union[Array[Any]]:
    """
    @param valueTypeOverrides
         We always override the `ValueType` as provided in the `valueTypeOverrides` but do attempt to validate the
         `ValueType` from the data and throw an exception when neither the "overridden ValueType"
         would be serialized as the given FieldVector nor the ValueTypes are bi-directionally assignable to each other: {@link ValueType#isAssignableTo}
         When its not provided, then we go with "inferred ValueType", if it can be inferred and go for `any` if it can't.
    Convert an Arrow.FieldVector to a C3.Collection.
    Please note that this function does not copy the contents from the fieldVector during creation but on first access,
    therefore, please consume / materialize the array before moving to the next Arrow Record Batch
    C3 ValueType is inferred from the Arrow Field using {@link Arrow#c3ValueTypeFromArrowField}
    """
        ...
    def iter(self) -> Union[Iterator[Any]]:
        ...


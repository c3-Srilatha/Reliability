#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.FieldType import FieldType

# Python definitions for the C3 type FieldValue


class FieldValue(Value):
    """
    Instance of a single field value of an Obj.
    
    Each Obj has a set of fields corresponding to the non-null values set on it. Each field corresponds to a
    {@link FieldType field type} declared on the type of the Obj or a type it mixes in. So "field types" represent
    metadata about possible fields and "fields" store the actual values on a single instance of an Obj.
    
    For code that needs to examine Obj instances generically, going through the field interfaces (Obj#fields and
    Obj#field) provides a way to operate on objects of unknown type. However, most often the code understands the
    types it expects to operate on and should use the direct accessors appropriate to the language.
    
    Java:
    ```java
    obj.field("location").asObj()
    obj.location()
    ```
    
    JavaScript/Python:
    ```javascript
    obj.field("location").asObj()
    obj.location
    ```
    
    The accessors that start with "as" return null if the value does not correspond to the requested value type while
    the ones starting with "to" attempt to convert the value. Both flavors accept a boolean to control the behavior when
    the result is not of the requested type (return null or throw an error). If failIfNot is true, a lambda can be
    passed in the second argument to provide context that will be incorporated into the error message.
    
    @see Obj
    @see FieldType
    
    @remarks this represents a made instance of FieldValue
    """
    
    fieldType: Optional[FieldType]
    """
    The declaration of this field's type. This will be from the Obj's type or one of its mixins.
    """

    value: Optional[Any]
    """
    The value of the field, which cannot be null because the field only exists if there is a value set.
    This must be {@link ValueType.isSameValue isSameValue} for the field's {@link #fieldType declared value type}.
    """
    def __init__(self, fieldType: Optional[FieldType]=None, value: Optional[Any]=None) -> None: ...

    def valueType(self) -> ValueType:
    """
    Get the value type of the field type.
    
    @return the type of the value of this field
    """
        ...
    def isObj(self) -> bool:
    """
    Whether or not this field's value type is a Type, indicating that it hold an Obj value.
    
    @return true if this field is a reference
    """
        ...
    def asObj(self) -> Union[Obj]:
    """
    Get the field value if it's an Obj instance, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not an Obj
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return an Obj if it's the type of this field
    
    @see #isObj
    """
        ...
    def toObj(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[Obj]:
    """
    Get the field value if it can be converted to an Obj, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return an Obj if the value of the field can be converted
    """
        ...
    def isInt(self) -> bool:
    """
    Whether or not this field's value type is `int` (32-bit integer).
    
    @return true if this field is an integer
    """
        ...
    def asInt(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[int]:
    """
    Get the field value if it's an integer, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not an integer
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return an integer if it's the type of this field
    """
        ...
    def toInt(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[int]:
    """
    Get the field value if it can be converted to an integer, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return an integer if the value of the field can be converted
    """
        ...
    def isLong(self) -> bool:
    """
    Whether or not this field's value type is `long int` (64-bit integer).
    
    @return true if this field is a long integer
    """
        ...
    def asLong(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[int]:
    """
    Get the field value if it's a long, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a long
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a long if it's the type of this field
    """
        ...
    def toLong(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[int]:
    """
    Get the field value if it can be converted to a long, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a long if the value of the field can be converted
    """
        ...
    def isByte(self) -> bool:
    """
    Whether or not this field's value type is `byte` (1-byte integer).
    
    @return true if this field is a byte
    """
        ...
    def asByte(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[int]:
    """
    Get the field value if it's a byte, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a byte
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a byte if it's the type of this field
    """
        ...
    def toByte(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[int]:
    """
    Get the field value if it can be converted to a byte, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a byte if the value of the field can be converted
    """
        ...
    def isString(self) -> bool:
    """
    Whether or not this field's value type is `string`.
    
    @return true if this field is a string
    """
        ...
    def asString(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[str]:
    """
    Get the field value if it's a string, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a string
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a string if it's the type of this field
    """
        ...
    def toString(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[str]:
    """
    Get the field value if it can be converted to a string, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a string if the value of the field can be converted
    """
        ...
    def isChar(self) -> bool:
    """
    Whether or not this field's value type is `char` (single character).
    
    @return true if this field is a char
    """
        ...
    def asChar(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[int]:
    """
    Get the field value if it's a char, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a char
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a char if it's the type of this field
    """
        ...
    def toChar(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[int]:
    """
    Get the field value if it can be converted to a char, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a char if the value of the field can be converted
    """
        ...
    def isDecimal(self) -> bool:
    """
    Whether or not this field's value type is `decimal` (arbitrary precision number).
    
    @return true if this field is a decimal
    """
        ...
    def asDecimal(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[float]:
    """
    Get the field value if it's a decimal, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a decimal
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a decimal if it's the type of this field
    """
        ...
    def toDecimal(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[float]:
    """
    Get the field value if it can be converted to a decimal, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a decimal if the value of the field can be converted
    """
        ...
    def isDouble(self) -> bool:
    """
    Whether or not this field's value type is `double` (double precision floating point).
    
    @return true if this field is a double
    """
        ...
    def asDouble(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[float]:
    """
    Get the field value if it's a double, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a double
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a double if it's the type of this field
    """
        ...
    def toDouble(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[float]:
    """
    Get the field value if it can be converted to a double, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a double if the value of the field can be converted
    """
        ...
    def isFloat(self) -> bool:
    """
    Whether or not this field's value type is `float` (single-precision floating point).
    
    @return true if this field is a float
    """
        ...
    def asFloat(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[float]:
    """
    Get the field value if it's a float, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a float
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a float if it's the type of this field
    """
        ...
    def toFloat(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[float]:
    """
    Get the field value if it can be converted to a float, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a float if the value of the field can be converted
    """
        ...
    def isDate(self) -> bool:
    """
    Whether or not this field's value type is `date` or `datetime`.
    
    @return true if this field is a date
    """
        ...
    def isDateWithoutTimeZone(self) -> bool:
    """
    Whether or not this field's value type is `date` or a `datetime no tz`.
    
    @return true if this field is a date/time without time zone offset
    """
        ...
    def asDate(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[datetime]:
    """
    Get the field value if it's a date/time, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a date/time
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a date/time if it's the type of this field
    """
        ...
    def toDate(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[datetime]:
    """
    Get the field value if it can be converted to a date/time, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a date/time if the value of the field can be converted
    """
        ...
    def isBoolean(self) -> bool:
    """
    Whether or not this field's value type is `boolean`.
    
    @return true if this field is a boolean
    """
        ...
    def asBoolean(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> bool:
    """
    Get the field value if it's a boolean value, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a boolean value
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a boolean value if it's the type of this field
    """
        ...
    def toBoolean(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> bool:
    """
    Get the field value if it can be converted to a boolean value, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a boolean value if the value of the field can be converted
    """
        ...
    def isJson(self) -> bool:
    """
    Whether or not this field's value type is `json`.
    
    @return true if this field is a json
    """
        ...
    def asJson(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[any]:
    """
    Get the field value if it's JSON structure, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not JSON structure
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return JSON structure if it's the type of this field
    """
        ...
    def toJson(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[any]:
    """
    Get the field value if it can be converted to JSON structure, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return JSON structure if the value of the field can be converted
    """
        ...
    def isBinary(self) -> bool:
    """
    Whether or not this field's value type is `binary`.
    
    @return true if this field is a binary
    """
        ...
    def asBinary(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[any]:
    """
    Get the field value if it's binary data, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not binary data
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return binary data if it's the type of this field
    """
        ...
    def toBinary(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[any]:
    """
    Get the field value if it can be converted to binary data, otherwise null.
    
    @param failIfNot
              if true, null is returned if the value cannot be converted
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return binary data if the value of the field can be converted
    """
        ...
    def isArray(self) -> bool:
    """
    Whether or not this field's value type is `[...]` (any element type).
    
    @return true if this field is an array
    """
        ...
    def asArray(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
    """
    Get the field value if it's an array, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not an array
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return an array if it's the type of this field
    """
        ...
    def isObjArray(self) -> bool:
    """
    Whether or not this field's value type is `[type]` (for any {@link Type type}).
    
    @return true if this field is an array of Obj
    """
        ...
    def isMap(self) -> bool:
    """
    Whether or not this field's value type is `map<>` (any key and value types).
    
    @return true if this field is a map
    """
        ...
    def asMap(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[Map[K, V]]:
    """
    Get the field value if it's a map, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a map
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a map if it's the type of this field
    """
        ...
    def isObjMap(self) -> bool:
    """
    Whether or not this field's value type is `map<..., type>` (for any {@link Type type}).
    
    @return true if this field is a map with Obj values
    """
        ...
    def isSet(self) -> bool:
    """
    Whether or not this field's value type is `set<...>`
    
    @return true if this field is a set
    """
        ...
    def asSet(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[Set[E]]:
    """
    Get the field value if it's a set, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a set
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a set if it's the type of this field
    """
        ...
    def isStream(self) -> bool:
    """
    Whether or not this field's value type is `stream<...>`.
    
    @return true if this field is a stream
    """
        ...
    def asStream(self, failIfNot: bool=None, context: Callable[[], Union[str]]=None) -> Union[Stream[E]]:
    """
    Get the field value if it's a stream, otherwise null.
    
    @param failIfNot
              if true, an error is thrown if the value is not a stream
    @param context
              if failIfNot is true, the error thrown includes this context info
    @return a stream if it's the type of this field
    """
        ...
    def isMethod(self) -> bool:
    """
    Whether or not this field's value type is `function(...` (a declared method).
    
    @return true if this field is a method
    """
        ...
    def isLambda(self) -> bool:
    """
    Whether or not this field's value type is `lambda(...`.
    
    @return true if this field is a lambda
    """
        ...
    def isEmpty(self) -> bool:
    """
    Whether or not the field has an empty string or a collection with no elements.
    Note the field values will never be null.
    
    @return true if the field is empty
    """
        ...
    def eachValueObj(self, callback: Callable[[Union[Obj]]]) -> None:
    """
    Execute the specified lambda against each Obj instance in this field's value. For reference fields, this means the
    field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param callback
              function to be executed for each Obj instance
    @return the number of objects processed
    
    @see Obj#eachObj
    """
        ...
    @classmethod
    def make(cls, ft: FieldType, v: Any) -> FieldValue:
    """
    Creates new instance
    """
        ...


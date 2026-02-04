#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type

# Python definitions for the C3 type ObjProtocol


class ObjProtocol(ImplLanguageProtocol, WithType, Value):
    """
    Marker type indicating support for implementation language attribute syntax e.g. accessor via `.`.
    Every method here is intended to unconditionally implement its language syntax, unless otherwise specified.
    Also see {@link MutableObjProtocol}.
    
    @remarks this represents a made instance of ObjProtocol
    """
    def __init__(self) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> ObjProtocol:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    def fieldValue(self, name: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Implements the `.` syntactic sugar in js and py.
    Also, conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type string.
    @param name
              name associated with the desired attribute value.
           defaultToEmpty
              will return default empty value if field is missing
    @return the attribute value associated with the given attribute name
    """
        ...
    def fieldValues(self, names: Array[str]) -> Union[Any]:
    """
    Conditionally implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
    @param names
            names associated with the desired attribute values.
    @return the attribute values associated with the given attribute names
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Implements the `.` auto-complete syntax in js and py.
    @return list of all attribute names
    """
        ...
    def _this(self) -> Any:
    """
    @return native object with all fields
    """
        ...


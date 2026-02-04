#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Method import Method
from c3.platform.Type import Type

# Python definitions for the C3 type WithLazyType


class WithLazyType(WithType, Value):
    """
    Base type of instances (value) of a type that are "type-aware" and also with lazy metadata in the sense that produce
    additional method declarations lazily at runtime.
    
    @see Annotations, Err and ObjBuilder for an example of usage
    
    @remarks this represents a made instance of WithLazyType
    """
    def __init__(self) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> WithLazyType:
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
    @classmethod
    def implicitMethod(cls, method: str, failIfMissing: bool=None) -> Union[Method]:
    """
    Dynamically constructs method for this type
    """
        ...
    @classmethod
    def callImplicitMethod(cls, method: str, thsArg: WithLazyType=None, args: Array[Any]=None) -> Union[Any]:
    """
    Call implicit method on this type by name
    """
        ...


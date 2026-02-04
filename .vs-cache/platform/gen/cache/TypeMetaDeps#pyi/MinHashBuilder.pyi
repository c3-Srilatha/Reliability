#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Collection import Collection
from c3.platform.MinHash import MinHash
from c3.platform.Type import Type
from c3.platform.Obj import Obj

# Python definitions for the C3 type MinHashBuilder


class MinHashBuilder(StatsBuilder[MinHash, MinHashBuilder], Value):
    """
    Builder of a MinHash data structure.
    
    @see MinHash
    @see MinHashSpec
    
    @remarks this represents a made instance of MinHashBuilder
    """
    def __init__(self) -> None: ...

    @overload
    @classmethod
    def make(cls) -> MinHashBuilder:
    """
    Construct an instance with initial state.
    """
        ...
    @overload
    @classmethod
    def make(cls, initial: Any) -> Union[MinHashBuilder]:
    """
    Instantiates new builder with initial stats
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> MinHashBuilder:
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
    @overload
    def add(self, value: Any) -> MinHashBuilder:
    """
    Updates statistics based on a given value
    """
        ...
    @overload
    def add(self, str: str) -> MinHashBuilder:
    """
    Updates statistics based on a given string value
    """
        ...
    @overload
    def add(self, dt: datetime) -> MinHashBuilder:
    """
    Updates statistics based on a given datetime value
    """
        ...
    @overload
    def add(self, num: float) -> MinHashBuilder:
    """
    Updates statistics based on a given numeric value
    """
        ...
    @overload
    def add(self, bool: bool) -> MinHashBuilder:
    """
    Updates statistics based on a given boolean value
    """
        ...
    @overload
    def add(self, jsn: any) -> MinHashBuilder:
    """
    Updates statistics based on a given json value
    """
        ...
    @overload
    def add(self, obj: Obj) -> MinHashBuilder:
    """
    Updates statistics based on a given Obj value
    """
        ...
    @overload
    def add(self, obj: Collection[Any]) -> MinHashBuilder:
    """
    Updates statistics based on a given Collection value
    """
        ...
    def addAll(self, e: Collection[Any]) -> MinHashBuilder:
    """
    Update statistics based on all elements from a given collection
    """
        ...
    def addNull(self) -> MinHashBuilder:
    """
    Updates statistics based on a null value
    """
        ...
    def build(self) -> MinHash:
    """
    Builds instance of stats based on current state
    """
        ...
    def statsType(self) -> Type:
    """
    Type of stats this builder is constructing
    """
        ...


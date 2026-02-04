#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.BitSet import BitSet
from c3.platform.Type import Type

# Python definitions for the C3 type BitSet.Builder


class Builder(WithType, Builder[BitSet], Value):
    """
    A way to quickly construct a {@link BitSet}. It can also function as a mutable BitSet if desired, although it may
    be less efficient than a normal, immutable instance.
    
    @remarks this represents a made instance of BitSet.Builder
    """
    def __init__(self) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> BitSet.Builder:
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
    def make(cls) -> BitSet.Builder:
    """
    Construct an instance with initial state.
    """
        ...
    def clear(self) -> BitSet.Builder:
    """
    Clear all bits to false (empty the builder).
    """
        ...
    def build(self) -> BitSet:
    """
    Produce an instance of {@link BitSet} with the bits set in the builder so far.
    """
        ...
    def bitAt(self, idx: int) -> bool:
    """
    Get the bit at the specified index.
    """
        ...
    def isEmpty(self) -> bool:
    """
    @return if the builder has no bit set to 1
    """
        ...
    def setAt(self, idx: int, value: bool) -> BitSet.Builder:
    """
    Set the bit at the specified index to the specified value.
    """
        ...
    def toggleAt(self, idx: int) -> BitSet.Builder:
    """
    Change the bit at the specified index to the negation of its current value.
    """
        ...


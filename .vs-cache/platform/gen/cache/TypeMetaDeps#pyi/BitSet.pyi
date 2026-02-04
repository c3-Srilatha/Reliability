#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type

# Python definitions for the C3 type BitSet


class BitSet(WithType, StringSerializable, WithToNative, Buildable[BitSet.Builder], Value):
    """
    An indexable collection of bits. Insignificant (high false) bits will be automatically dropped.
    
    These are most commonly created using the builder pattern:
    ```js
    let b = BitSet.builder();
    type.meta().fieldTypes.each(ft => {
      if (ft.name.includes("duck")) {
        b.setAt(ft.ordinal(), true);
      }
    });
    let ducks = b.build();
    ```
    
    @see BitSet.Builder
    
    @remarks this represents a made instance of BitSet
    """
    def __init__(self) -> None: ...

    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> BitSet:
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
    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[BitSet]:
    """
    Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
    provide deserialization.
    
    fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
    of called-on type, but perhaps not the same type.
    
    E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
    
    @see #toString
    """
        ...
    @classmethod
    def make(cls, s: str) -> Union[BitSet]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    def toNative(self, doNotCopy: bool=None) -> Union[Any]:
    """
    The closest native representation of the value.
    
    In the case where that native representation would be unavoidably mutable, the `doNotCopy` flag may be passed to
    access that internal state. _The caller must not modify this state._ By default, no sensitive state will be
    exposed, copying if necessary.
    
    @param doNotCopy return internal state without copying (unsafe access)
    """
        ...
    @classmethod
    def builder(cls) -> BitSet.Builder:
    """
    Create a builder for efficient instantiation of the corresponding type.
    """
        ...
    def toBuilder(self) -> BitSet.Builder:
    """
    Create a builder with this initial state for efficient updating.
    """
        ...
    def bitAt(self, idx: int) -> bool:
    """
    @return the bit at the given index. Return false if out of range
    """
        ...
    def withBitAt(self, idx: int, value: bool) -> BitSet:
    """
    @return a new BitSet with the bit at the given index set to the value. Resize the bitset if the index is out of
    range.
    """
        ...
    @classmethod
    def fromBinary(cls, bin: any) -> BitSet:
    """
    @return a new BitSet from the bits in the provided binary, with the insignificant bits removed.
    """
        ...
    def toBools(self) -> Array[bool]:
    """
    @return an array of booleans representing the BitSet value
    """
        ...
    def lastBitIndex(self) -> int:
    """
    @return the index of the last bit set to 1. Return -1 if there are none.
    """
        ...
    def isEmpty(self) -> bool:
    """
    @return if the BitSet has no bit set to 1
    """
        ...
    def or(self, bitset: BitSet) -> BitSet:
    """
    @return a logical OR of this with the {@link BitSet} argument
    """
        ...
    
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


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Collection import Collection
from c3.platform.Collection import Collection
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Type import Type
from c3.platform.ArrayType import ArrayType
from c3.platform.ValueType import ValueType
from c3.platform.Array import Array
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.Data import Data
from c3.platform.ArrayBuilder import ArrayBuilder

# Python definitions for the C3 type ArrayBuilder

E = TypeVar('E')

class ArrayBuilder(Generic[E], CollectionBuilder[E], Value):
    """
    Builder of arrays.
    
    @see Array#buidlerOf
    @see Array#toBuidler
    @see ArrayType#makeBuidler
    
    @remarks this represents a made instance of ArrayBuilder
    """
    def __init__(self) -> None: ...

    @classmethod
    def make(cls) -> ArrayBuilder[E]:
    """
    Construct an instance with initial state.
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> ArrayBuilder[E]:
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
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object. By default (i.e. with no arguments) the result will
    contain no type information.
    
    @see #toTypedJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    def toJsonString(self) -> str:
    """
    Convert the internal object representation to an _untyped_ serialized JSON string. This is the equivalent of
    `toJson().serialize()`.
    
    @return JSON object as string
    """
        ...
    def toTypedJsonString(self) -> str:
    """
    Convert the internal object representation to a _typed_ serialized JSON string. This is the equivalent of
    `toTypedJson().serialize()`.
    
    @return JSON object as string
    """
        ...
    def toJsString(self) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    def toXmlString(self) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[ArrayBuilder[E]]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an object of the appropriate type (which may
    be  a type that mixes in the type on which it is called). This means that the resulting object's type will be isA
    the called-on type, but perhaps not identical. In particular, `fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[ArrayBuilder[E]]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromJsonString` works for any actual
    type and will return an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[ArrayBuilder[E]]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual
    type and will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[ArrayBuilder[E]]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    @overload
    def e(self, e: E) -> ArrayBuilder[E]:
    """
    Adds new element to this builder.
    """
        ...
    @overload
    def e(self, e: Any, doNotConvert: bool) -> ArrayBuilder[E]:
    """
    Adds new generic element to this builder specifying if the given value should be converted or not
    """
        ...
    def add(self, e: E) -> ArrayBuilder[E]:
    """
    Adds new element to this builder.
    """
        ...
    def addConvertValue(self, e: Any) -> ArrayBuilder[E]:
    """
    Adds new element to this builder converting value to element type.
    """
        ...
    def addCollection(self, elemBuilder: Callable[[Union[CollectionBuilder[Any]]]]) -> ArrayBuilder[E]:
    """
    Puts new element collection builder in this map builder. Assumes this a builder of map of collections
    """
        ...
    def addRef(self, elemBuilder: Callable[[Union[ObjBuilder[Obj]]]]) -> ArrayBuilder[E]:
    """
    Puts new element reference builder in this map builder. Assumes this a builder of map of references
    """
        ...
    @overload
    def addIfMissing(self, e: E) -> bool:
    """
    Adds new element to this builder if not already present and return true if element was added
    """
        ...
    @overload
    def addIfMissing(self, e: E, predicate: Callable[[Union[E]], bool]) -> bool:
    """
    Adds new element to this builder if not already present based on provided predicate and return true if element was
    added
    """
        ...
    @overload
    def addAll(self, *elements: Array[E]) -> ArrayBuilder[E]:
    """
    Adds new elements to this builder.
    """
        ...
    @overload
    def addAll(self, elements: Collection[E]) -> ArrayBuilder[E]:
    """
    Adds all elements from provided collection to this builder.
    """
        ...
    @overload
    def addAll(self, elements: Data) -> ArrayBuilder[E]:
    """
    Adds all elements from provided collection of Data to this builder.
    """
        ...
    def addAllConvertValue(self, elements: Collection[Any]) -> ArrayBuilder[E]:
    """
    Adds all elements from provided collection to this builder also converting values as needed.
    """
        ...
    def contains(self, e: E) -> bool:
    """
    Returns true if this builder contains the specified element.
    """
        ...
    @overload
    def remove(self, e: E) -> int:
    """
    Removes all occurrences of element from this builder and returns count of elements removed
    """
        ...
    @overload
    def remove(self, predicate: Callable[[Union[E]], bool]) -> int:
    """
    Removes all occurrences of elements from this builder based on provided criteria and returns count of elements
    removed
    """
        ...
    def take(self, predicate: Callable[[Union[E]], bool]) -> Union[Array[E]]:
    """
    Removes all occurrences of elements from this builder based on provided criteria and returns removed elements
    """
        ...
    def replace(self, e: E, predicate: Callable[[Union[E]], bool]) -> int:
    """
    Replaces element if present based on provided predicate. If indexed, replacements should be in the same order
    as what they replaced. If not indexed, replacement can be done in any order.
    """
        ...
    def merge(self, e: E, predicate: Callable[[Union[E]], bool]) -> int:
    """
    Merges new element to existing if present based on provided predicate or adds new element and returns number of
    elements merged
    """
        ...
    def clear(self) -> ArrayBuilder[E]:
    """
    Clears contents of this builder.
    """
        ...
    def unique(self) -> ArrayBuilder[E]:
    """
    Enforce uniqueness of elements in this builder.
    """
        ...
    def index(self) -> ArrayBuilder[E]:
    """
    Preserve insertion order in this builder and enable #at method on built collection. Note that this enabled #at
    method in a build collection.
    """
        ...
    def size(self) -> int:
    """
    The current number of elements in this builder.
    """
        ...
    @overload
    def sort(self) -> ArrayBuilder[E]:
    """
    Insert elements in a natural sorted order in this builder. If element type does not have a natural sort order then
    preserve insertion order. Note that this enabled #at method in a build collection.
    """
        ...
    @overload
    def sort(self, descending: bool=None) -> ArrayBuilder[E]:
    """
    Insert elements in opposite of natural sorted order in this builder.
    """
        ...
    @overload
    def sort(self, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> ArrayBuilder[E]:
    """
    Insert elements in order based on provided comparator.
    """
        ...
    @overload
    def sort(self, descending: bool, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> ArrayBuilder[E]:
    """
    Insert elements in order based on provided comparator.
    """
        ...
    def constrain(self) -> ArrayBuilder[E]:
    """
    Enforce constraints when inserting element in this builder.
    """
        ...
    def synchronize(self) -> ArrayBuilder[E]:
    """
    Ensure this builder can be used concurrently from multiple threads.
    """
        ...
    def current(self) -> Union[Array[E]]:
    """
    Builds temporary set representing current state of the builder. Unlike #build collection may not be packed / optimized.
    It is recommended to use #current in the process of building the collection and only call #build once done.
    """
        ...
    def build(self) -> Union[Array[E]]:
    """
    Builds final optimized collection for this builder. While it is allowed to call #build more then once if there is such
    need then #current is more advisable.
    """
        ...
    def validated(self) -> bool:
    """
    @return if the current builder is validated
    """
        ...
    def isEmpty(self) -> bool:
    """
    @return true if this builder has no elements
    """
        ...
    def collectionType(self) -> ArrayType:
    """
    @return value type of this collection.
    """
        ...
    def elementType(self) -> ValueType:
    """
    @return value type of elements in this collection.
    """
        ...
    @classmethod
    def _withJsonOptions(cls, builder: CollectionBuilder[Any], json: any) -> CollectionBuilder[Any]:
    """
    Add the options specified in the JSON serialized ArrayBuilder to the specified builder.
    """
        ...
    def set(self, index: int, e: E) -> ArrayBuilder[E]:
    """
    Sets element at provided index.
    """
        ...
    def setConvertValue(self, index: int, e: Any) -> ArrayBuilder[E]:
    """
    Sets element at provided index converting value if needed.
    """
        ...
    def insertAt(self, index: int, e: E) -> ArrayBuilder[E]:
    """
    Inserts element at provided index.
    """
        ...
    def insertAtConvertValue(self, index: int, e: Any) -> ArrayBuilder[E]:
    """
    Inserts element at provided index converting value if needed.
    """
        ...
    def replaceAt(self, index: int, e: E) -> ArrayBuilder[E]:
    """
    Replaces element at provided index.
    """
        ...
    def replaceAtConvertValue(self, index: int, e: Any) -> ArrayBuilder[E]:
    """
    Replaces element at provided index converting value if needed.
    """
        ...
    def removeAt(self, index: int) -> ArrayBuilder[E]:
    """
    Removes element at provided index.
    """
        ...
    def takeAt(self, index: int) -> Union[E]:
    """
    Removes element at provided index and returns it.
    """
        ...
    @overload
    def slice(self, fromIndex: int) -> ArrayBuilder[E]:
    """
    Removes all elements before #fromIndex, leaving only elements starting at #fromIndex in the builder.
    Positive value of #fromIndex is relative to the first position in the builder.
    Negative value of #fromIndex is relative to last position.
    """
        ...
    @overload
    def slice(self, fromIndex: int, toIndex: int) -> ArrayBuilder[E]:
    """
    Removes elements before #fromIndex and after #toIndex (inclusive), leaving only elements starting at #fromIndex
    and up to (exclusive) #toIndex in the builder.
    Positive index values are relative to the first position in the builder.
    Negative index values are relative to last position.
    If both #fromIndex and #toIndex are 0, no elements are removed.
    """
        ...
    @overload
    def splice(self, start: int) -> Union[Array[E]]:
    """
    Removes specified elements and return an array of them. This behaves like the JavaScript `Array.splice()` function
    with a single argument.
    
    @param start index at which to start removing. If negative, treated as relative to the size.
    @return array of elements that were remove
    
    @see #slice
    """
        ...
    @overload
    def splice(self, start: int, *items: Array[E], count: int=None) -> Union[Array[E]]:
    """
    Removes or replaces specified elements and return an array of them. This behaves like the JavaScript
    `Array.splice()` function with 2 or more arguments.
    
    @param start index at which to start removing. If negative, treated as relative to the size.
    @param count number of elements to remove, default the remainder of the collection
    @param items values that replace in the removed elements
    @return array of elements that were remove/replaced
    
    @see #slice
    """
        ...
    def setSize(self, size: int) -> ArrayBuilder[E]:
    """
    Sets size of resulting array by adding empty elements or removing extra elements.
    """
        ...
    def fill(self, value: E, start: int=None, end: int=None) -> Union[ArrayBuilder[E]]:
    """
    Fills the builder with the specified value. This behaves like the JavaScript `Array.fill()` function.
    
    @param value the value to fill with
    @param start the index to start with, default 0. If negative, treated as relative to the size.
    @param end the index (exclusive) to end before, default end of builder. If negative, treated as relative to the size.
    @return the same builder
    """
        ...
    def reverse(self) -> Union[ArrayBuilder[E]]:
    """
    Reverses the order of all elements in the builder so the old first is the new last element.
    @return the same builder
    """
        ...
    def pop(self, failIfEmpty: bool=None) -> Union[E]:
    """
    Remove the last element from the builder and return it.
    
    @param failIfEmpty if true, throw an error if there are no elements
    @return the last element or null if empty
    """
        ...
    def push(self, *elements: Array[E]) -> int:
    """
    Add the specified elements to the end of the builder.
    
    @param elements new elements to add to the builder
    @return the new length of the builder
    """
        ...
    def shift(self, failIfEmpty: bool=None) -> Union[E]:
    """
    Remove the first element from the builder and return it.
    
    @param failIfEmpty if true, throw an error if there are no elements
    @return the first element or null if empty
    @see #pop
    """
        ...
    def unshift(self, *elements: Array[E]) -> int:
    """
    Add the specified elements to the start of the builder.
    
    @param elements new elements to add to the builder
    @return the new length of the builder
    @see #push
    """
        ...
    def at(self, index: int) -> Union[E]:
    """
    Gets element at provided index.
    """
        ...


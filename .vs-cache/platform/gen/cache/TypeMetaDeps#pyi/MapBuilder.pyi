#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Collection import Collection
from c3.platform.Collection import Collection
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Pair import Pair
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType
from c3.platform.MapType import MapType
from c3.platform.Collection import Collection
from c3.platform.CollectionBuilder import CollectionBuilder
from c3.platform.Data import Data
from c3.platform.MapBuilder import MapBuilder

# Python definitions for the C3 type MapBuilder

E = TypeVar('E')
K = TypeVar('K')

class MapBuilder(Generic[E, K], CollectionBuilder[E], Value):
    """
    Builder of maps.
    
    @see Map#buidlerOf
    @see MapType#makeBuidler
    @see Map#toBuidler
    
    @remarks this represents a made instance of MapBuilder
    """
    def __init__(self) -> None: ...

    @classmethod
    def make(cls) -> MapBuilder[K, E]:
    """
    Construct an instance with initial state.
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> MapBuilder[K, E]:
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
    def fromJson(cls, json: any) -> Union[MapBuilder[K, E]]:
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
    def fromJsonString(cls, json: str) -> Union[MapBuilder[K, E]]:
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
    def fromXmlString(cls, xml: str) -> Union[MapBuilder[K, E]]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[MapBuilder[K, E]]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    @overload
    def e(self, e: E) -> MapBuilder[K, E]:
    """
    Adds new element to this builder.
    """
        ...
    @overload
    def e(self, e: Any, doNotConvert: bool) -> MapBuilder[K, E]:
    """
    Adds new generic element to this builder specifying if the given value should be converted or not
    """
        ...
    @overload
    def e(self, k: K, e: E) -> MapBuilder[K, E]:
    """
    Puts new element in this map builder.
    """
        ...
    @overload
    def e(self, k: Any, e: Any, doNotConvert: bool) -> MapBuilder[K, E]:
    """
    Puts new element in this map builder specifying if the given value should be converted or not
    """
        ...
    def add(self, e: E) -> MapBuilder[K, E]:
    """
    Adds new element to this builder.
    """
        ...
    def addConvertValue(self, e: Any) -> MapBuilder[K, E]:
    """
    Adds new element to this builder converting value to element type.
    """
        ...
    def addCollection(self, elemBuilder: Callable[[Union[CollectionBuilder[Any]]]]) -> MapBuilder[K, E]:
    """
    Puts new element collection builder in this map builder. Assumes this a builder of map of collections
    """
        ...
    def addRef(self, elemBuilder: Callable[[Union[ObjBuilder[Obj]]]]) -> MapBuilder[K, E]:
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
    def addAll(self, *elements: Array[E]) -> MapBuilder[K, E]:
    """
    Adds new elements to this builder.
    """
        ...
    @overload
    def addAll(self, elements: Collection[E]) -> MapBuilder[K, E]:
    """
    Adds all elements from provided collection to this builder.
    """
        ...
    @overload
    def addAll(self, elements: Data) -> MapBuilder[K, E]:
    """
    Adds all elements from provided collection of Data to this builder.
    """
        ...
    def addAllConvertValue(self, elements: Collection[Any]) -> MapBuilder[K, E]:
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
    def clear(self) -> MapBuilder[K, E]:
    """
    Clears contents of this map builder.
    """
        ...
    def unique(self) -> MapBuilder[K, E]:
    """
    Enforce uniqueness of elements in this builder.
    """
        ...
    def index(self) -> MapBuilder[K, E]:
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
    def sort(self) -> MapBuilder[K, E]:
    """
    Insert elements in a natural sorted order in this builder. If element type does not have a natural sort order then
    preserve insertion order. Note that this enabled #at method in a build collection.
    """
        ...
    @overload
    def sort(self, descending: bool=None) -> MapBuilder[K, E]:
    """
    Insert elements in opposite of natural sorted order in this builder.
    """
        ...
    @overload
    def sort(self, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> MapBuilder[K, E]:
    """
    Insert elements in order based on provided comparator.
    """
        ...
    @overload
    def sort(self, descending: bool, comparator: Callable[[Union[E], Union[E]], Union[int]]) -> MapBuilder[K, E]:
    """
    Insert elements in order based on provided comparator.
    """
        ...
    def constrain(self) -> MapBuilder[K, E]:
    """
    Enforce constraints when inserting element in this builder.
    """
        ...
    def synchronize(self) -> MapBuilder[K, E]:
    """
    Ensure this builder can be used concurrently from multiple threads.
    """
        ...
    def current(self) -> Union[Map[K, E]]:
    """
    Builds temporary set representing current state of the builder. Unlike #build collection may not be packed / optimized.
    It is recommended to use #current in the process of building the collection and only call #build once done.
    """
        ...
    def build(self) -> Union[Map[K, E]]:
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
    def collectionType(self) -> MapType:
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
    def containsKey(self, k: K) -> bool:
    """
    Returns true if this map builder contains a mapping for the specified key.
    """
        ...
    @overload
    def put(self, k: K, e: E) -> MapBuilder[K, E]:
    """
    Puts new element in this map builder.
    """
        ...
    @overload
    def put(self, entry: Pair[K, E]) -> MapBuilder[K, E]:
    """
    Puts new entry in this map builder.
    """
        ...
    @overload
    def put(self, k: K, initial: Callable[[], Union[E]], agg: Callable[[Union[E]], Union[E]]) -> MapBuilder[K, E]:
    """
    Puts new entry in this map builder if it does not exists or modifies value of an existing entry.
    """
        ...
    def putCollection(self, k: K, elemBuilder: Callable[[Union[CollectionBuilder[Any]]]]) -> MapBuilder[K, E]:
    """
    Puts new element collection builder in this map builder. Assumes this is a builder of map or collections
    """
        ...
    def putRef(self, k: K, elemBuilder: Callable[[Union[ObjBuilder[Obj]]]]) -> MapBuilder[K, E]:
    """
    Puts new element reference builder in this map builder. Assumes this is a builder of map or collections
    """
        ...
    def putIfKeyMissing(self, k: K, e: E) -> bool:
    """
    Puts new element to this builder if key is not already present and return true if element was added
    """
        ...
    def putIfMissing(self, k: K, e: E, predicate: Callable[[Union[E], Union[K]], bool]) -> bool:
    """
    Puts  new element to this builder if key is not already present based on provided predicate and return true if
    element was added
    """
        ...
    def putAll(self, keyElements: Map[K, E]) -> MapBuilder[K, E]:
    """
    Puts all elements from provided map in this map builder.
    """
        ...
    def putKeyElements(self, *keyElements: Array[Any]) -> MapBuilder[K, E]:
    """
    Puts all key and elements from provided arguments where first argument is a key second is an element and so on.
    """
        ...
    def get(self, k: K, dflt: Callable[[], Union[E]]=None) -> Union[E]:
    """
    Gets element for key and if missing puts new one based on provided default.
    """
        ...
    def removeKey(self, k: K) -> bool:
    """
    Removes key from this map builder and returns `true` if existed
    """
        ...
    def removeKeys(self, keys: Collection[K]) -> int:
    """
    Removes keys from this map builder and returns count of keys actually removed
    """
        ...
    def upsert(self, key: K, value: Callable[[], Union[E]]) -> Union[E]:
    """
    Retrieves value for the key if exists or puts new one
    """
        ...
    @overload
    def sortKeys(self) -> MapBuilder[K, E]:
    """
    Build new map with keys sorted in a natural order.
    """
        ...
    @overload
    def sortKeys(self, comparator: Callable[[Union[K], Union[K]], Union[int]]) -> MapBuilder[K, E]:
    """
    Build new map with keys sorted based on provided comparator.
    """
        ...
    def keyType(self) -> ValueType:
    """
    @return value type of the key.
    """
        ...


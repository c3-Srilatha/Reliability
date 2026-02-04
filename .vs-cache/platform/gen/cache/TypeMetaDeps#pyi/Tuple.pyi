#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Iterator import Iterator
from c3.platform.ValueType import ValueType
from c3.platform.TupleType import TupleType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Data.Column import Data.Column

# Python definitions for the C3 type Tuple


class Tuple(Iterable[native], Fingerprintable, Serializable, Instance, FieldsProtocol, ItemProtocol, InProtocol, LengthProtocol, Value):
    """
    Set of named or positional values.
    
    To get the {@link TupleType} from a tuple instance, use TupleType#ofTuple. In JavaScript and Python, the `$type`
    property can also be used.
    
    @see TupleType
    
    @remarks this represents a made instance of Tuple
    """
    def __init__(self) -> None: ...

    def iter(self) -> Union[Iterator[Any]]:
    """
    Use this method if you want to use a C3 iterator.
    @return a C3 iterator of the elements of the collection
    """
        ...
    def _iter_(self) -> Union[Any]:
    """
    Use this method if you want to use a native iterator. This method is typically implemented using {@link #iter}.
    """
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
    there is a slight possibility that two objects with the same fingerprint will actually differ.
    
    The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
    {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
    unless the allIdentifiedRefFields option is specified.
    
    If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
    However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
    
    @param allIdentifiedRefFields
              if `true`, fingerprint individual fields of persistable references, not just the `id`
    @param trackRecursiveRefs
              if `true`, a set of referenced objects is maintained to avoid infinite recursion
    @param traversedRefs
              only considered together with trackRecursiveRefs and if provided then all traversed references are
              checked against and added to it
    @return integer fingerprint
    
    @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
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
    def fromJson(cls, json: any) -> Union[Tuple]:
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
    def fromJsonString(cls, json: str) -> Union[Tuple]:
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
    def fromXmlString(cls, xml: str) -> Union[Tuple]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Tuple]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def valueType(self) -> ValueType:
    """
    C3 ValueType of this instance.
    """
        ...
    @classmethod
    def valueTypeOf(cls, type: Type, failIfNot: bool=None) -> Union[ValueType]:
    """
    Approximate C3 ValueType from a type. Note that this will lose value type annotations and modifiers as it only
    considers the type and its generic bindings. Use #valueType on an instance for a more precise result.
    
    @see ValueType#instanceType
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
    def _field_(self, name: str) -> Union[T]:
    """
    Implements the `.` syntactic sugar in js and py.
    @param name
              name associated with the desired attribute value.
    @return the attribute value associated with the given attribute name
    """
        ...
    def _fields_(self, names: Array[str]) -> Union[Array[Any]]:
    """
    Implements the square bracket `[]` syntactic sugar in js and py for key-type list of string.
    @param names
            names associated with the desired attribute values.
    @return the attribute values associated with the given attribute names
    """
        ...
    def _fieldNames_(self) -> Union[Array[str]]:
    """
    Implements the `.` auto-complete syntax in js and py.
    @return list of all attribute names
    """
        ...
    def _item_(self, key: Any) -> Union[Any]:
    """
    Implements the square bracket getter `obj[item]`.
    
    @param key
            item associated with the desired element.
    @return the element associated with the given item
    """
        ...
    def _contains_(self, key: Any) -> bool:
    """
    Return true if the requested value is equal to one of the values in the tuple.
    """
        ...
    def _length_(self) -> int:
    """
    Implements the js `.length` property or py `len()` support.
    @return the number of elements in this instance
    """
        ...
    @overload
    def field(self, name: str) -> Union[T]:
    """
    Tuple field value by name. If field doesn't exit, returns null.
    """
        ...
    @overload
    def field(self, index: int) -> Union[T]:
    """
    Tuple field value by index. If not in range, returns null.
    """
        ...
    def fields(self) -> Union[Array[Any]]:
    """
    Tuple field values by index.
    """
        ...
    def fieldsByName(self) -> Union[Map[str, Any]]:
    """
    Tuple field values by name.
    """
        ...
    @overload
    def withField(self, name: str, value: Any, doNotConvert: bool=None) -> Tuple:
    """
    New tuple with provided field set by name
    """
        ...
    @overload
    def withField(self, index: int, value: Any, doNotConvert: bool=None) -> Tuple:
    """
    New tuple with provided field set by index
    """
        ...
    @classmethod
    def fromDataColumns(cls, cols: Array[Data.Column]=None) -> Union[Array[Tuple]]:
    """
    Constructor for obtaining array of Tuple
    """
        ...
    @classmethod
    def of(cls, *fields: Array[Any]) -> Union[]:
    """
    Constructs named tuple from fields provided as sequence of triples of field name, value type and value. E.g.
    `Tuple.of("a", "string", "foo", "b", "int", 17)` produces tuple `{a: "foo", b: 17}` of type `{a: string, b: int}`
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Returns an array containing all the fields of a named tuple
    """
        ...
    def type(self) -> TupleType:
    """
    Type of this tuple
    """
        ...


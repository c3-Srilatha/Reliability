#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.BitSet import BitSet
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Type import Type
from c3.platform.Obj import Obj
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.FieldType import FieldType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ArrayBuilder import ArrayBuilder

# Python definitions for the C3 type ObjBuilder

O = TypeVar('O')

class ObjBuilder(Generic[O], MethodsProtocol, WithType, Mutable, Value, Serializable):
    """
    Builder of Obj i.e. instances of C3 Type.
    
    @see Obj.builder
    @see Type.objBuilder
    
    @remarks this represents a made instance of ObjBuilder
    """
    def __init__(self) -> None: ...

    def _call_(self, name: str, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Any]:
    """
    Implements the `.func()` syntactic sugar in js and py.
    
    Language SDKs typically just dispatch this call to remote API or java
    
    Note that since typically implementation is shared across language SDKs and is in java args are `any` and can not
    accept `native`
    
    An example of the subtype is Obj.c3typ that exposes `with<field name>` & `without<field name>` methods via this
    protocol
    
    @param args positional arguments
    @param kwargs arguments by name
    
    @see MethodType#firstKwargIndex
    @see MethodType#call
    """
        ...
    def _isMethodNameValid_(self, name: str) -> bool:
    """
    @return true if it is valid to call method by provided name on this instance
    """
        ...
    def _methodNames_(self) -> Union[Array[str]]:
    """
    @return method names callable by this protocol; note that methods can change from instance to instance of the same
            subtype so it is not safe to cache then in SDKs by type; however implementation can cache them if needed.
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> ObjBuilder[O]:
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
    def make(cls) -> ObjBuilder[O]:
    """
    Construct an instance with initial state.
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
    def fromJson(cls, json: any) -> Union[ObjBuilder[O]]:
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
    def fromJsonString(cls, json: str) -> Union[ObjBuilder[O]]:
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
    def fromXmlString(cls, xml: str) -> Union[ObjBuilder[O]]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[ObjBuilder[O]]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    @overload
    def v(self, field: str, value: Any, doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Adds a new field to this builder.
    """
        ...
    @overload
    def v(self, field: FieldType, value: Any, doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Adds a new field to this builder.
    """
        ...
    @overload
    def r(self, field: str) -> ObjBuilder[O]:
    """
    Adds a new reference field builder.
    """
        ...
    @overload
    def r(self, field: FieldType) -> ObjBuilder[O]:
    """
    Adds a new reference field builder.
    """
        ...
    @overload
    def a(self, field: str, element: Any, doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Adds a new element in an array field for this builder. The array is automatically created on first call.
    """
        ...
    @overload
    def a(self, field: FieldType, element: Any, doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Adds a new element in an array field for this builder. The array is automatically created on first call.
    """
        ...
    @overload
    def a(self, field: str) -> Union[ArrayBuilder[E]]:
    """
    Creates a new array builder for a given array field.
    """
        ...
    @overload
    def a(self, field: FieldType) -> Union[ArrayBuilder[E]]:
    """
    Creates a new array builder for a given array field.
    """
        ...
    @overload
    def m(self, field: str, key: Any, element: Any, doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Adds a new key/value pair in a map field for this builder. The map is automatically created on first call.
    """
        ...
    @overload
    def m(self, field: FieldType, key: Any, element: Any, doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Adds a new key/value pair in a map field for this builder. The map is automatically created on first call.
    """
        ...
    @overload
    def m(self, field: str) -> MapBuilder[K, E]:
    """
    Creates a new map builder for a given map field.
    """
        ...
    @overload
    def m(self, field: FieldType) -> MapBuilder[K, E]:
    """
    Creates a new map builder for a given map field.
    """
        ...
    @overload
    def s(self, field: str, element: Any, doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Adds a new element in a set field for this builder. The set is automatically created on first call.
    """
        ...
    @overload
    def s(self, field: FieldType, element: Any, doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Adds a new element in a set field for this builder. The set is automatically created on first call.
    """
        ...
    @overload
    def s(self, field: str) -> Union[SetBuilder[E]]:
    """
    Creates a new set builder for a given set field.
    """
        ...
    @overload
    def s(self, field: FieldType) -> Union[SetBuilder[E]]:
    """
    Creates a new set builder for a given set field.
    """
        ...
    @overload
    def unsetField(self, field: str) -> ObjBuilder[O]:
    """
    Unsets a field, meaning that the field will become not {@link isFieldSet set} in the built `Obj`.
    """
        ...
    @overload
    def unsetField(self, field: FieldType) -> ObjBuilder[O]:
    """
    Unsets a field, meaning that the field will become not {@link isFieldSet set} in the built `Obj`.
    """
        ...
    @overload
    def removeField(self, field: str) -> ObjBuilder[O]:
    """
    Removes a field, meaning that the field will become {@link isFieldMissing missing} in the built `Obj`.
    """
        ...
    @overload
    def removeField(self, field: FieldType) -> ObjBuilder[O]:
    """
    Removes a field, meaning that the field will become {@link isFieldMissing missing} in the built `Obj`.
    """
        ...
    def setFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> ObjBuilder[O]:
    """
    Sets provided fields into this builder.
    """
        ...
    def unsetFields(self, fields: Set[str]) -> ObjBuilder[O]:
    """
    Unsets provided fields into this builder.
    """
        ...
    def removeFields(self, fields: Set[str]) -> ObjBuilder[O]:
    """
    Removes provided fields from this builder.
    """
        ...
    @overload
    def mergeObj(self, other: Obj) -> ObjBuilder[O]:
    """
    Merges all field from other into this builder.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> ObjBuilder[O]:
    """
    Merges all fields of otherFieldsFilter type from other into this builder.
    """
        ...
    def mergeJson(self, json: any, failIfInvalid: bool=None) -> ObjBuilder[O]:
    """
    Merges all json fields into this builder.
    """
        ...
    def clear(self) -> ObjBuilder[O]:
    """
    Clears all field values.
    """
        ...
    def constrain(self) -> ObjBuilder[E]:
    """
    Enforce constraints when building final Obj.
    """
        ...
    def withoutDefaults(self) -> ObjBuilder:
    """
    Enforces that resulting `Obj` built from this builder will not have default values applied to fields. This is
    the default behavior of `ObjBuilder` and is implicitly opted into.
    @see ObjSpec#withoutDefaults
    """
        ...
    def withDefaults(self) -> ObjBuilder:
    """
    Enforces that resulting `Obj` built from this builder will have default values applied to fields. This is
    not the default behavior of `ObjBuilder` and must be explicitly opted into.
    """
        ...
    def _setFieldState(self, state: BitSet) -> ObjBuilder:
    """
    set the state field to the {@link BitSet}
    """
        ...
    def withMissing(self) -> ObjBuilder:
    """
    Enforces that all fields on the resulting `Obj` which were not set on this builder (including fields on the `Obj`
    from which this builder was produced) are {@link Obj#isFieldMissing missing}. This is not the default behavior of
    `ObjBuilder` and must be explicitly opted into. If this method is called on an `ObjBuilder`, calling
    {@link withoutDefaults} will have no effect.
    
    @see ObjSpec#withMissing
    """
        ...
    def withoutMissing(self) -> ObjBuilder:
    """
    Enforces that resulting `Obj` from this builder will have no {@link Obj#isFieldMissing missing fields}.
    This is the default behavior of `ObjBuilder` and is implicitly opted into. This reverts the effect of
    {@link withMissing}
    """
        ...
    def isEmpty(self) -> bool:
    """
    True if no field values are set.
    """
        ...
    def current(self) -> O:
    """
    Builds temporary instance of Obj representing current state of the builder. Unlike #build Obj instance may not be
    packed / optimized. It is recommended to use #current in the process of building the collection and only call
    #build once done.
    """
        ...
    def build(self) -> O:
    """
    Builds final optimized instance of Obj for this builder. While it is allowed to call #build more than once if there
    is such need then #current is more advisable.
    """
        ...
    def objType(self) -> Type:
    """
    @return type which this builder builds.
    """
        ...
    @overload
    def fieldValue(self, field: str) -> Union[Any]:
    """
    @return the current value of the field.
    """
        ...
    @overload
    def fieldValue(self, field: FieldType) -> Union[Any]:
    """
    @return the current value of the field.
    """
        ...


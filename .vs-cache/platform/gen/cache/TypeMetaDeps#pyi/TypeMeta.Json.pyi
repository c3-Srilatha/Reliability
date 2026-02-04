#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Typesys.Json import Typesys.Json
from c3.platform.Typesys import Typesys
from c3.platform.TypeMeta import TypeMeta
from c3.platform.TypeMeta import TypeMeta
from c3.platform.Typesys.Json.PrecomputedMethods import Typesys.Json.PrecomputedMethods

# Python definitions for the C3 type TypeMeta.Json


class Json(Typesys.Json, Value):
    """
    Structure holding all the specific details of a built C3 Type for an efficient loading at execution time.
    
    This structure is persisted as `<#parentTypeMeta name>.json` file in the `gen/cache/` folder of a C3 Pkg artifact.
    
    @remarks this represents a made instance of TypeMeta.Json
    """
    def __init__(self) -> None: ...

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
    @overload
    @classmethod
    def fromJson(cls, json: any) -> Union[TypeMeta.Json]:
    """
    Construct instance from json.
    """
        ...
    @overload
    @classmethod
    def fromJson(cls, json: any, parentTypeMeta: TypeMeta) -> Typesys.Json:
    """
    Construct instance from json.
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[TypeMeta.Json]:
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
    def fromXmlString(cls, xml: str) -> Union[TypeMeta.Json]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[TypeMeta.Json]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def typesysTypeName(self) -> str:
    """
    Name of the {@TypeMeta type} of instance this json represents.
    """
        ...
    def fieldsJson(self) -> Union[Map[str, any]]:
    """
    json representation of all fields of the instance of #typesysTypeMeta.
    """
        ...
    def precomputedMethodsJson(self) -> Union[Map[str, str]]:
    """
    All precomputed methods serialized as map with value being string serialized representation of a single
    method result(s).
    
    String serialized json is used to avoid deep json deser overhead and to parse individual method results lazily.
    """
        ...
    def typesysTypeMeta(self) -> TypeMeta[[Typesys]]:
    """
    {@TypeMeta type} of instance this json represents.
    """
        ...
    def parentTypeMeta(self) -> Union[TypeMeta]:
    """
    Parent {@TypeMeta type} of this json. When #typesysTypeMeta is TypeMeta C3 type then #parentTypeMeta is same.
    """
        ...
    def precomputedMethods(self) -> Typesys.Json.PrecomputedMethods:
    """
    All precomputed methods serialized as map with value being string serialized representation of a single
    method result(s).
    
    String serialized json is used to avoid deep json deser overhead and to parse individual method results lazily.
    """
        ...
    def fieldValue(self, field: str) -> Union[Any]:
    """
    Field value if exists in this json.
    """
        ...
    def ref(self, ref: str) -> T:
    """
    Retrieve instance of a C3 Type that mixes {@link WithRef} and {@link Typesys} by reference. Note that this method
    handles references to every {@link TypeMeta} elements such as {@link FieldType}, {@link Method} or
    {@link MethodType} regardless of #parentTypeMeta. If invalid reference, throw an error.
    """
        ...
    def eachFieldJson(self, action: Callable[[Union[str], Union[any]]]) -> None:
    """
    Perform an action for each set field of this object.
    """
        ...
    def fieldJson(self, name: str) -> Union[any]:
    """
    Retrieve json serialized value of a field. If field is not set, return null.
    """
        ...
    def toTypesys(self) -> T:
    """
    Converts this json to a {@link Typesys} instance.
    """
        ...
    @classmethod
    def fromTypesys(cls, typesys: Typesys, parentTypeMeta: TypeMeta) -> Typesys.Json:
    """
    Construct instance from a typesys.
    """
        ...
    def childrenJson(self) -> Union[Map[str, any]]:
    """
    json representation of all {@link FieldType}s in this TypeMeta.
    """
        ...
    def childTypesysJson(self, ref: str) -> Typesys.Json:
    """
    Lookup json representation of a child Typesys instance of this TypeMeta by it's reference string.
    """
        ...
    @classmethod
    def fromTypeMeta(cls, typeMeta: TypeMeta) -> TypeMeta.Json:
    """
    Construct instance from a C3 Type.
    """
        ...


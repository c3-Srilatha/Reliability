#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Builder import Builder
from c3.platform.IntType import IntType
from c3.platform.Pkg import Pkg
from c3.platform.Include import Include
from c3.platform.StreamType import StreamType
from c3.platform.FileObjsOperSpec import FileObjsOperSpec
from c3.platform.DecimalType import DecimalType
from c3.platform.Collection import Collection
from c3.platform.DoubleType import DoubleType
from c3.platform.BooleanType import BooleanType
from c3.platform.ArrayType import ArrayType
from c3.platform.BinaryType import BinaryType
from c3.platform.FieldType import FieldType
from c3.platform.Int32Type import Int32Type
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Type import Type
from c3.platform.Collection import Collection
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.DateTimeType import DateTimeType
from c3.platform.TypeMeta import TypeMeta
from c3.platform.Int16Type import Int16Type
from c3.platform.SetType import SetType
from c3.platform.NumberType import NumberType
from c3.platform.ByteType import ByteType
from c3.platform.FloatType import FloatType
from c3.platform.CollectionType import CollectionType
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude

# Python definitions for the C3 type Jsn


class Jsn(Value):
    """
    Helper functions for manipulating JSON nodes and converting to/from C3 values. JSON values are implemented on
    dedicated `JsonNode` for Java and various native objects for JavaScript and Python.
    
    @remarks this represents a made instance of Jsn
    """
    def __init__(self) -> None: ...

    @classmethod
    def serialize(cls, java: Any) -> Union[str]:
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[any]:
    """
    Create a JSON array from objects, which can be JSON nodes or anything convertible.
    """
        ...
    @classmethod
    def binaryToValue(cls, json: any, vt: ValueType, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
        ...
    @classmethod
    def bool(cls, v: bool=None) -> Union[any]:
    """
    Create a JSON boolean node from the value.
    """
        ...
    @classmethod
    def booleanToValue(cls, json: any, vt: ValueType, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
        ...
    @classmethod
    def buildArray(cls, builder: Callable[[Union[Builder[Buildable]]]]) -> Union[any]:
    """
    Builds JsonArray by creating new builder and passing that to provided lambda.
    """
        ...
    @classmethod
    def buildObject(cls, builder: Callable[[Union[Builder[Buildable]]]]) -> Union[any]:
    """
    Builds JsonObject by creating new builder and passing that to provided lambda.
    """
        ...
    @classmethod
    def collect(cls, jsonLines: Stream[any]=None) -> Union[any]:
    """
    @return json array containing all json lines
    """
        ...
    @classmethod
    def unboxJson(cls, jsn: any, returnNullIfNot: bool, expectedType: ValueType) -> Union[any]:
        ...
    @overload
    @classmethod
    def fromCollection(cls, c: Collection[Any]) -> Union[any]:
    """
    Return a JSON array made from the array/set or an object from a map.
    """
        ...
    @overload
    @classmethod
    def fromCollection(cls, c: Collection[Any], include: Include, exclude: Exclude) -> Union[any]:
    """
    Return a JSON array made from the array/set or an object from a map.
    """
        ...
    @overload
    @classmethod
    def fromCollection(cls, c: Collection[Any], typed: bool=None) -> Union[any]:
    """
    Return a JSON array made from the array/set or an object from a map.
    """
        ...
    @overload
    @classmethod
    def fromCollection(cls, c: Collection[Any], actionRequirement: str) -> Union[any]:
        ...
    @overload
    @classmethod
    def fromCollection(cls, c: Collection[Any], actionRequirement: str, typed: bool=None) -> Union[any]:
        ...
    @classmethod
    def omitTypeField(cls, v: Any, vt: ValueType) -> bool:
    """
    Check whether to omit the "type" field when serializing object v using value type `vt`.
    Returns true if v has value type of `vt` and is not a subtype
    """
        ...
    @classmethod
    def fromThisArgKwargs(cls, type: str, action: str, thisArg: any, args: any, kwargs: any) -> Union[any]:
        ...
    @overload
    @classmethod
    def fromValue(cls, value: Any, valueType: ValueType) -> Union[any]:
    """
    @return a JSON node from value and expected ValueType
    """
        ...
    @overload
    @classmethod
    def fromValue(cls, value: Any, valueType: ValueType, include: Include, exclude: Exclude) -> Union[any]:
    """
    @return a JSON node from the value, including and excluding certain Obj fields.
    """
        ...
    @overload
    @classmethod
    def fromValue(cls, value: Any, valueType: ValueType, actionRequirement: str) -> Union[any]:
    """
    @return a JSON node from the value for the specified actionRequirement.
    """
        ...
    @classmethod
    def fromValueUntyped(cls, value: Any) -> Union[any]:
        ...
    @classmethod
    def guessValueType(cls, json: any, pkg: Pkg) -> Union[ValueType]:
    """
    Guess the most likely value type from a JSON node.
    """
        ...
    @classmethod
    def isNull(cls, json: any) -> bool:
    """
    Determine if the JSON node represents null.
    """
        ...
    @classmethod
    def isEmpty(cls, json: any) -> bool:
    """
    Determine if the JSON node represents and empty value. this includes `null`, empty arrays and objects and
    empty text nodes.
    """
        ...
    @classmethod
    def make(cls, from_: Any) -> Union[any]:
    """
    Build JSON structure from the specified value. These may be native values that are already the natural
    representation of JSON structure (JavaScript and Python) or may be C3 values that are naturally convertable
    (Java). In either case, the intention is to produce simple JSON, not necessarily the format for serialization.
    """
        ...
    @classmethod
    def map(cls, json: any, mapper: Callable[[Union[any]], Union[any]]) -> Union[any]:
    """
    Apply the mapper lambda recursively to elements of JSON arrays and objects.
    """
        ...
    @overload
    @classmethod
    def merge(cls, initial: any, changes: any, deep: bool=None) -> Union[any]:
        ...
    @overload
    @classmethod
    def merge(cls, initial: any, changes: any, deep: bool=None, doNotMergeArrays: bool=None) -> Union[any]:
    """
    Merge the two object or array nodes, applying the changes in the second on top of the first and returning a
    new object with the result. The passed-in objects are unchanged.
    
    @param initial
           source object
    @param changes
           object with changes to apply
    @param deep
           if true, merge rather than replace deep structure
    @param doNotMergeArrays
           if true, instead of merging both arrays, just use 'changes'
    @return new object with merge result
    """
        ...
    @overload
    @classmethod
    def merge(cls, a: any, b: any, pathMergeSpecs: Map[str, str], parentPath: str) -> Union[any]:
        ...
    @overload
    @classmethod
    def merge(cls, elements: Collection[any]) -> Union[any]:
    """
    @return merged json based on collection of jsons
    """
        ...
    @classmethod
    def null_(cls) -> Union[any]:
    """
    Return the JSON `null` node.
    """
        ...
    @classmethod
    def number(cls, v: float) -> Union[any]:
    """
    Return a JSON number node for the corresponding numeric value.
    """
        ...
    @classmethod
    def object(cls, *nameValuePairs: Array[Any]) -> any:
    """
    Return a JSON object node for the pairs of string keys and values.
    """
        ...
    @classmethod
    def deserType(cls, json: any, baseType: Type, pkg: Pkg) -> Union[TypeMeta]:
    """
    Pick out the type from a {@link Serializable#toJson} object, if any.
    
    @param json
           serialized object instance
    @param baseType
           the expected base type (if known)
    @param pkg
           package to resolve within
    @return type referenced in the JSON or the baseType
    """
        ...
    @classmethod
    def objectWithTypeToValueOrObj(cls, json: any, pkg: Pkg) -> Union[Any]:
        ...
    @classmethod
    def objectToMap(cls, json: any, mapType: MapType, failIfInvalid: bool=None, for_: str=None) -> Union[Map[Any, Any]]:
        ...
    @classmethod
    def objectToSerializable(cls, json: any, type: Type, pkg: Pkg, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
        ...
    @classmethod
    def objectToValue(cls, json: any, pkg: Pkg, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
    """
    @return deserialized Value from Json using either type defined in either $type or type field
    """
        ...
    @classmethod
    def readObjs(cls, content: str, spec: FileObjsOperSpec) -> Union[Stream[Obj]]:
    """
    Reads string serialized content into a stream of Objs. If spec.isObjList is false, this method expects content in
    array format, where each element is a serialized Obj; alternatively, a single instance of an Obj is also
    acceptable. If spec.isObjList is true, then this method expects content in ObjList format, meaning a json object
    with two fields: "data", an array where each element is a serialized Obj, and "type", the type shared by all Objs
    in the aforementioned array.
    """
        ...
    @classmethod
    def readType(cls, withTypeJson: any, pkg: Pkg, failIfMissing: bool=None) -> Union[Type]:
    """
    @return type in json serialized instance of WithType
    """
        ...
    @classmethod
    def typeJson(cls, withTypeJson: any) -> Union[any]:
    """
    @return json for "type" field in json serialized instance
    """
        ...
    @classmethod
    def parse(cls, json: str, failIfInvalid: bool=None) -> Union[any]:
    """
    Parse the serialized JSON from a string into a node tree.
    """
        ...
    @classmethod
    def parseJS(cls, json: str) -> Union[any]:
    """
    Parse a JSON value as JavaScript syntax.
    
    @param json
           string of JSON data
    @return JsonNode assuming loose JSON like unquoted fields, comments, single quoted values and trailing commas
    """
        ...
    @classmethod
    def parseJsArray(cls, json: str) -> Union[any]:
    """
    Parse a JSON array (`[…]`).
    
    @param json
           string of JSON array data
    @return JsonObject assuming loose JSON like unquoted fields, comments, single quoted values and trailing commas
    """
        ...
    @classmethod
    def parseJsObject(cls, json: str) -> Union[any]:
    """
    Parse a JSON object (`{…}`).
    
    @param json
           string of JSON object data
    @return JsonObject assuming loose JSON like unquoted fields, comments, single quoted values and trailing commas
    """
        ...
    @classmethod
    def parseStrict(cls, json: str) -> Union[any]:
    """
    @param json
    @return JsonNode assuming strict JSON like none of unquoted fields, comments, single quotes or trailing commas
    """
        ...
    @classmethod
    def printObj(cls, obj: Obj, withType: bool=None, pretty: bool=None, js: bool=None) -> Union[str]:
        ...
    @overload
    @classmethod
    def quote(cls, json: any) -> Union[any]:
    """
    Quotes every text node in the json using a single quote.
    I.e. { "a" : "b" } -> { "'a'" : "'b'" }
    """
        ...
    @overload
    @classmethod
    def quote(cls, json: any, quote: int) -> Union[any]:
    """
    Quotes every text node in the json, specifying the quote character.
    I.e. { "a" : "b" } -> { "'a'" : "'b'" }
    """
        ...
    @classmethod
    def remove(cls, initial: any, changes: any) -> Union[any]:
    """
    Remove structure in the second object or array node from the first, returning a new object with the result.
    The passed-in objects are unchanged.
    
    @param initial
           source object
    @param changes
           object with elements to remove
    @return new object with result
    """
        ...
    @classmethod
    def text(cls, text: str) -> Union[any]:
    """
    Create a text JSON node from the string value.
    """
        ...
    @classmethod
    def binary(cls, data: any) -> Union[any]:
    """
    Create a text JSON node from the binary data.
    """
        ...
    @classmethod
    def toArray(cls, json: any, arrayType: ArrayType, failIfInvalid: bool=None) -> Union[Array[Any]]:
    """
    Convert the JSON node into an array of the specified type. If the node is an JSON array node, convert each
    element, otherwise convert the value and return an array of one element.
    """
        ...
    @classmethod
    def toBinary(cls, json: any, binType: BinaryType, failIfInvalid: bool=None) -> Union[any]:
    """
    Convert the JSON node to a binary value. If the node is text, decode as Base64.
    """
        ...
    @overload
    @classmethod
    def toBool(cls, json: any) -> bool:
        ...
    @overload
    @classmethod
    def toBool(cls, json: any, boolType: BooleanType, failIfInvalid: bool=None) -> bool:
        ...
    @classmethod
    def toByte(cls, json: any, byteType: ByteType, failIfInvalid: bool=None) -> Union[int]:
    """
    Convert the JSON number node to a 8-bit integer value.
    """
        ...
    @classmethod
    def toCollection(cls, json: any, collType: CollectionType, failIfInvalid: bool=None, for_: str=None) -> Union[Collection[Any]]:
    """
    Convert the JSON node into a collection of the specified type. For array/set, if the node is an JSON array node,
    convert each element. For maps, if the node is a JSON object, convert the keys/properties. Otherwise convert the
    value and return a collection of one element.
    """
        ...
    @classmethod
    def toCompactString(cls, node: any) -> Union[str]:
    """
    Print the JSON object and return the result as a string with the minimal amount of whitespace.
    
    @param node
           JSON node
    @return string
    """
        ...
    @classmethod
    def toYamlString(cls, node: any) -> Union[str]:
    """
    Produce a YAML string from the JSON tree.
    """
        ...
    @classmethod
    def stringify(cls, node: any) -> Union[str]:
    """
    Print the JSON object and return the result as a string with the minimal amount of whitespace.
    **NOTE** for JavaScript and Python, Jsn.stringify produces _typed_ JSON. For untyped, use the
    native JSON.stringify.
    
    @param node
           JSON node
    @return string
    """
        ...
    @classmethod
    def toBigInt(cls, json: any, failIfInvalid: bool=None) -> Union[float]:
    """
    Convert the JSON number node to a parsed exact numeric value.
    """
        ...
    @classmethod
    def toDateTime(cls, json: any, dtType: DateTimeType, failIfInvalid: bool=None) -> Union[datetime]:
    """
    Convert the JSON text node to a parsed `datetime` value.
    """
        ...
    @classmethod
    def toDecimal(cls, json: any, ths: DecimalType, failIfInvalid: bool=None) -> Union[float]:
    """
    Convert the JSON number node to a parsed exact numeric value.
    """
        ...
    @classmethod
    def toDouble(cls, json: any, ths: DoubleType, failIfInvalid: bool=None) -> Union[float]:
    """
    Convert the JSON number node to a double-precision value.
    """
        ...
    @classmethod
    def toFieldValue(cls, json: any, ft: FieldType, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
    """
    Convert the JSON node for the specified field type.
    """
        ...
    @classmethod
    def toFloat(cls, json: any, ths: FloatType, failIfInvalid: bool=None) -> Union[float]:
    """
    Convert the JSON number node to a single-precision value.
    """
        ...
    @overload
    @classmethod
    def toInt(cls, json: any) -> Union[int]:
    """
    Convert the JSON number node to 64-bit integer value.
    """
        ...
    @overload
    @classmethod
    def toInt(cls, json: any, intType: IntType, failIfInvalid: bool=None) -> Union[int]:
    """
    Convert the JSON number node to 64-bit integer value.
    """
        ...
    @overload
    @classmethod
    def toInt16(cls, json: any) -> Union[int]:
    """
    Convert the JSON number node to 16-bit integer value.
    """
        ...
    @overload
    @classmethod
    def toInt16(cls, json: any, int16Type: Int16Type, failIfInvalid: bool=None) -> Union[int]:
    """
    Convert the JSON number node to 16-bit integer value.
    """
        ...
    @overload
    @classmethod
    def toInt32(cls, json: any) -> Union[int]:
    """
    Convert the JSON number node to 32-bit integer value.
    """
        ...
    @overload
    @classmethod
    def toInt32(cls, json: any, int32Type: Int32Type, failIfInvalid: bool=None) -> Union[int]:
    """
    Convert the JSON number node to 32-bit integer value.
    """
        ...
    @overload
    @classmethod
    def toMap(cls, json: any) -> Union[Map[Any, Any]]:
    """
    Convert the JSON object node to a `map`.
    """
        ...
    @overload
    @classmethod
    def toMap(cls, json: any, indexed: bool=None) -> Union[Map[Any, Any]]:
    """
    Convert the JSON object node to a `map`.
    
    @param json
           JSON object node
    @param indexed
           if true, the returned map keys will be in the same order as the JSON object
    """
        ...
    @overload
    @classmethod
    def toMap(cls, mapType: MapType, json: any, failIfInvalid: bool=None) -> Union[Map[str, Any]]:
    """
    Convert the JSON object node to a map of the specified type.
    """
        ...
    @classmethod
    def toNumber(cls, json: any, numberType: NumberType, failIfInvalid: bool=None) -> Union[float]:
    """
    Convert the JSON object node to a number of the specified type.
    """
        ...
    @classmethod
    def toObj(cls, json: any, type: Type, convertValue: bool=None, failIfInvalid: bool=None, for_: str=None, invalidFieldHandler: Callable[[Union[Any], Union[ObjBuilder[Obj]]]]=None) -> Union[Any]:
    """
    Convert the JSON node into an Obj instance of the specified type.
    """
        ...
    @classmethod
    def toSet(cls, setType: SetType, value: any, convertValue: bool=None, failIfInvalid: bool=None) -> Union[Set[Any]]:
    """
    Convert the JSON node into a `set`.
    """
        ...
    @classmethod
    def toStr(cls, json: any) -> Union[str]:
    """
    Convert the JSON node to a string value. If this is a text node, return the text value otherwise return the
    JSON representation.
    """
        ...
    @classmethod
    def toStrUnbox(cls, json: any) -> Union[str]:
        ...
    @overload
    @classmethod
    def toStream(cls, json: any) -> Union[Stream[Any]]:
    """
    Process the JSON node as a `stream`.
    """
        ...
    @overload
    @classmethod
    def toStream(cls, ths: StreamType, value: any, failIfInvalid: bool=None) -> Union[Stream[Any]]:
    """
    Process the JSON node as a stream of the specified type.
    """
        ...
    @classmethod
    def toTypeMeta(cls, pkg: Pkg, typeJson: any, failIfInvalid: bool=None) -> Union[TypeMeta]:
    """
    Build a TypeMeta instance from the JSON representation.
    """
        ...
    @classmethod
    def toType(cls, pkg: Pkg, typeJson: any, failIfInvalid: bool=None) -> Union[Type]:
    """
    Deserialize a Type from the JSON representation.
    """
        ...
    @classmethod
    def toValueType(cls, pkg: Pkg, valueTypeJson: any, failIfInvalid: bool=None) -> Union[ValueType]:
    """
    Deserialize a ValueType from the JSON representation.
    """
        ...
    @overload
    @classmethod
    def toValue(cls, json: any) -> Union[Any]:
    """
    Convert the JSON node into its natural C3 value.
    """
        ...
    @overload
    @classmethod
    def toValue(cls, json: any, pkg: Pkg) -> Union[Any]:
        ...
    @overload
    @classmethod
    def toValue(cls, json: any, vt: ValueType, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
        ...
    @overload
    @classmethod
    def toValue(cls, json: any, vt: ValueType, failIfInvalid: bool=None, for_: str=None, allowUnbox: bool=None) -> Union[Any]:
    """
    Convert the JSON node into the specified type.
    WARNING: DO NOT ADD ANY CODE HERE BUT SEE ValueType.valueFromJson WHERE YOU SHOULD BE ADDING CODE
    """
        ...
    @overload
    @classmethod
    def traverse(cls, top: any, path: str) -> Union[any]:
    """
    Traverse one or more levels into the specified object and return the named value. If any of the intermediate
    values are null or non-objects, null is returned. Paths are dot-separated and may contain array indexes as well.
    They may even contain CSS-style selectors for field values within objects such as
    `fields[name=toString].valueType`.
    """
        ...
    @overload
    @classmethod
    def traverse(cls, top: any, path: str, expected: Any) -> Union[Any]:
    """
    Traverse one or more levels into the specified object and return the named value if it is of the expected node
    type.
    """
        ...
    @classmethod
    def unbox(cls, json: any, pkg: Pkg, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
    """
    Parse the boxed JSON object with `type` and `value` keys and convert the value according to the type.
    """
        ...
    @classmethod
    def unquote(cls, annotations: any) -> Union[any]:
    """
    Removes ' and " quotes at the beginning and end of all quoted text nodes in the json.
    I.e. [ "a" : "'b'" ] => [ "a" : "b" ]
    
    @see #quote
    """
        ...
    @classmethod
    def onlyJsonObject(cls, ths: any) -> Union[any]:
        ...
    @classmethod
    def typeSerName(cls, json: any) -> Union[str]:
        ...
    @classmethod
    def with(cls, json: any, nameOrIndex: Any, value: any) -> Union[any]:
        ...
    @classmethod
    def without(cls, json: any, nameOrIndex: any) -> Union[any]:
        ...
    @classmethod
    def insertAt(cls, json: any, nameOrIndex: Any, value: any) -> Union[any]:
        ...
    @classmethod
    def removeAt(cls, json: any, nameOrIndex: any) -> Union[any]:
        ...
    @classmethod
    def numOrStr(cls, numOrStr: any, failIfNot: bool=None) -> Union[Any]:
        ...
    @classmethod
    def removeSecrets(cls, json: any, type: str, onErrorReturnNull: bool=None) -> Union[any]:
    """
    Removes secret fields from a JSON node.
    This method traverses the given JSON node and removes any fields that are marked as secret.
    
    @param json
           The JSON node to sanitize.
    @param type
           the type of the JsonNode which we are operating on.
    @param onErrorReturnNull
           If true, return null if an error occurs while sanitizing the JSON node. If false, return the original JSON
    @return A new JSON node with secret fields removed, or null if the input JSON node is null.
    """
        ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.Include import Include
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ImplLanguage.Session.ExecuteSpec import ImplLanguage.Session.ExecuteSpec
from c3.platform.ImplLanguage.Session.SetupSpec import ImplLanguage.Session.SetupSpec
from c3.platform.ImplLanguage.Session.HeartbeatResult import ImplLanguage.Session.HeartbeatResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ImplLanguage.Runtime.EnvVar import ImplLanguage.Runtime.EnvVar
from c3.platform.Promise import Promise
from c3.platform.ImplLanguage.Session import ImplLanguage.Session
from c3.platform.MapBuilder import MapBuilder
from c3.platform.WithKey import WithKey
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Content import Content
from c3.platform.ImplLanguage.Session.InterruptSpec import ImplLanguage.Session.InterruptSpec
from c3.platform.ValueSpec import ValueSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Data import Data
from c3.platform.ImplLanguage.SavedSession import ImplLanguage.SavedSession
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.TypeMeta import TypeMeta
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Action.Requirement import Action.Requirement
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.ImplLanguage.RuntimeDeps import ImplLanguage.RuntimeDeps
from c3.platform.MapType import MapType
from c3.platform.ScanStats import ScanStats
from c3.platform.Promise import Promise
from c3.platform.LibraryManager import LibraryManager
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.Promise import Promise
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Stream import Stream
from c3.platform.Lambda import Lambda
from c3.platform.ImplLanguage.Library import ImplLanguage.Library
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.FetchResult import FetchResult
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ImplLanguage import ImplLanguage
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.ImplLanguage.Runtime.Context import ImplLanguage.Runtime.Context
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.ImplLanguage.Session.IsCompleteResult import ImplLanguage.Session.IsCompleteResult
from c3.platform.Meta import Meta
from c3.platform.ImplLanguage.Session.Config import ImplLanguage.Session.Config
from c3.platform.Duration import Duration
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FieldType import FieldType
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.Promise import Promise
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.Filter import Filter
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Action.Engine import Action.Engine
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetType import SetType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Action.ResourceSpec import Action.ResourceSpec
from c3.platform.Exclude import Exclude
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MethodType import MethodType
from c3.platform.ArrayType import ArrayType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ImplLanguage.Session.Result import ImplLanguage.Session.Result
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.ImplLanguage.Session.ExecuteResult import ImplLanguage.Session.ExecuteResult
from c3.platform.Promise import Promise
from c3.platform.ImplLanguage.ResolvedRuntime import ImplLanguage.ResolvedRuntime
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.ScanSpec import ScanSpec
from c3.platform.ImplLanguage.Runtime import ImplLanguage.Runtime
from c3.platform.ExistsSpec import ExistsSpec
from c3.platform.MapBuilder import MapBuilder

# Python definitions for the C3 type Js


class Js(ImplLanguage, ImplLanguageMethodStubs, NativeCompat):
    """
    Implementation of JavaScript. Within the server this will generally use the Rhino action engine. Delegating to a
    Node.js process is also possible. Clients may be running in a browser or Node.js.
    
    @see Js.Rhino
    @see Js.Node
    
    @remarks this represents a made instance of Js
    """
    
    name: Optional[str]
    """
    The unique and required name of this instance.
    """

    JAVA: Optional[str]=None
    """
    Java source.
    @see https://en.wikipedia.org/wiki/Java_(programming_language)
    """

    JAVASCRIPT: Optional[str]=None
    """
    JavaScript source (any ECMAScript version).
    @see https://en.wikipedia.org/wiki/JavaScript
    """

    PYTHON: Optional[str]=None
    """
    Python source.
    @see https://en.wikipedia.org/wiki/Python_(programming_language)
    """

    TYPESCRIPT: Optional[str]=None
    """
    TypeScript source.
    @see https://www.typescriptlang.org/docs/handbook/basic-types.html
    """

    TSX: Optional[str]=None
    """
    TypeScript/React source.
    @see https://www.typescriptlang.org/docs/handbook/jsx.html
    """
    def __init__(self, name: Optional[str]=None, JAVA: Optional[str]=None, JAVASCRIPT: Optional[str]=None, PYTHON: Optional[str]=None, TYPESCRIPT: Optional[str]=None, TSX: Optional[str]=None) -> None: ...

    @overload
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object.
    
    @return JSON object representation
    
    @see #fromJson
    """
        ...
    @overload
    def toJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
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
    @overload
    def toTypedJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toJsonString(self) -> str:
        ...
    @overload
    def toJsonString(self, pretty: bool) -> str:
    """
    Convert the internal object representation to a serialized JSON string.
    
    @return JSON object as string
    """
        ...
    @overload
    def toTypedJsonString(self) -> str:
        ...
    @overload
    def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
        ...
    @overload
    def toJsString(self) -> str:
        ...
    @overload
    def toJsString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    @overload
    def toXmlString(self) -> str:
        ...
    @overload
    def toXmlString(self, withType: bool) -> str:
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
    def fromJson(cls, json: any) -> Union[Js]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[Js]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[Js]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
    may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
    isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
    will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Js]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
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
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> Js:
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
    def instanceOf(self, typeName: str) -> bool:
    """
    Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    """
        ...
    @overload
    def instanceOf(self, type: Type) -> bool:
    """
    Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    
    @see ValueType#isA
    """
        ...
    def isEmptyObj(self) -> bool:
    """
    Whether all the fields of this instance are empty.
    """
        ...
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isFieldSet(self, field: str) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldSet(self, field: FieldType) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldMissing(self, field: str) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def isFieldMissing(self, field: FieldType) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    """
        ...
    @overload
    def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
    the obj.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    @return value for the given field
    """
        ...
    def fieldValues(self) -> Union[Array[FieldValue]]:
    """
    Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
    """
    Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
    Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
    #dataFieldTypes
    """
        ...
    def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
    """
    Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
    """
    Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Returns all data field names including those whose values are empty. Array is ordered by
    field ordinal.
    """
        ...
    def unsetFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
    field ordinal.
    """
        ...
    def missingFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
    field ordinal.
    """
        ...
    @overload
    def at(self, ordinal: int) -> Union[T]:
    """
    Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
    
    @param ordinal
            Integer ordinal of the field in the parent type
    @return value of field at ordinal
    """
        ...
    @overload
    def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
    """
    Return value for the given serialized expression
    
    @param expr
            Serialized expression to obtain the value in the given Obj
    @param failIfNotValid
            If set, fails if not a valid expression
    @return value obtained as a result of expression evaluation
    """
        ...
    def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
    """
    Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
    `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
    that it also handles `null`. If path contains any collections then only first element will be traversed,
    unless the collection index is specified in the path.
    
    If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return the field or null
    """
        ...
    def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
    """
    Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
    traversals, unless the collection index is specified in the path.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return fields as a flat list
    
    @see #fieldValueAtPath
    """
        ...
    @overload
    def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object.
    
    @param action
              lambda to apply
    """
        ...
    @overload
    def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply
    """
        ...
    def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
    """
    Perform an action for each {@link isFieldSet set} field of this object.
    
    @param action
              lambda to apply
    """
        ...
    def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
    """
    Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
    on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply; stop if this `action` returns `false
    @return `true` if iteration was not aborted by lambda i.e. it saw all field values
    """
        ...
    @overload
    def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    @overload
    def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type while processing action returns
    `true`.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance; stops processing if return `false`
    @return `true` if iteration was not aborted by lambda i.e. it saw all refs
    """
        ...
    def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
    """
        ...
    def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
    processing action returns `true`.
    """
        ...
    @overload
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js]:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the asynchronous `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that fields
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js]:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    asynchronous `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Js:
    """
    Result of this function call is a copy of current instance with specified field value replaced based on result of
    the `mapper` invocation.
    @param field
              field being mapped
    @param includeEmpty
              if set, invokes mapper for fields with empty value
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param mapper
              function to be executed for each pair of field type and Obj instance for producing new reference value
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` will be `null`.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
    result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
    """
    Evaluates given projection expression over this instance.
    """
        ...
    @overload
    def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
    """
    Evaluates given projection over this instance and returns results as json.
    """
        ...
    @overload
    def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
    """
    Evaluates given projection over this instance and returns results as instance of the new Obj.
    """
        ...
    @overload
    def validateObj(self) -> Js:
    """
    Populates all missing default values and throws error if any constraint is violated.
    """
        ...
    @overload
    def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
    """
    Validate that the Obj fields are set according to all the required rules.
    """
        ...
    @overload
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Js:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              name of the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    @overload
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Js:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Js:
    """
    Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
    defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
    
    @param fields
              map of field names/values
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @return new Obj
    """
        ...
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Js:
    """
    Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
    If you would like to #unsetField, you should call #withoutFieldAtPath instead.
    
    Immutable objects may return the same instance if the field being set does not actually represent a
    change to the existing object.
    
    @param path
              path to set value at
    @param value
              value to set
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @param doNotCreateIfMissing
              true indicates that any empty reference along the path will not set the value
    @return new Obj
    """
        ...
    def withoutFieldAtPath(self, path: str) -> Js:
    """
    Builds a new Obj without the specified path field.
    
    Immutable objects may return the same instance if the field being removed does not actually represent a
    change to the existing object.
    
    @param path
              path for field to remove
    @return new Obj
    
    @see #withFieldAtPath
    @see #withoutField
    """
        ...
    @overload
    def withoutField(self, field: str) -> Js:
    """
    Builds a new Obj, removing the field with the provided name.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    @overload
    def withoutField(self, field: FieldType) -> Js:
    """
    Builds a new Obj, removing the field with the provided field type.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    def withoutFields(self, fields: Array[str]) -> Js:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Js:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Js:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Js:
    """
    Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
    calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
    {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
    fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
    fields that have already been set.
    
    {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
    As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
    
    @param includeEmptyRefsWithDefaults
              it `true` then missing / empty child references that have fields with defaults will also be instantiated
    @param defaultFields
              If not empty, a list of default field paths to populate.  Any default fields not specified in the
              array will be ignored.
    @return new Obj
    
    @see #defaultField
    @see FieldType#defaultValueConst
    @see FieldType#defaultValue
    """
        ...
    @overload
    def defaultField(self, field: str) -> Js:
    """
    Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            name of the field to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def defaultField(self, field: FieldType) -> Js:
    """
    Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            field type to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def unsetField(self, field: str) -> Js:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            name of the field to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def unsetField(self, field: FieldType) -> Js:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            field type to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def removeField(self, field: str) -> Js:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            name of the field to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def removeField(self, field: FieldType) -> Js:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            field type to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Js:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
    
    @param other
              object
    @param fieldPathMergeSpec
              mapping of fields of the object to the respective merge annotations
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Js:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence.
    
    @param other
              object
    @param otherFieldsFilter
              only fields of otherFieldsFilter type from other are merged into this obj.
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Js:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Js:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
    traverse child reference and collection fields.
    """
        ...
    def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
    """
    Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
    Fields that non null in only one of this and other will be in the resulting Obj without change.
    """
        ...
    def mergeJson(self, json: any) -> Js:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Js:
    """
    Merge the obj references within the current obj
    @param deep
           If set, traverses the reference fields within the obj as well for a deep merge
    @param objKey
           lambda specifying how to obtain the key for the Obj while determining which Objs to merge
    @param filter
           Field paths that need to be filtered from this merge
    @return Obj with child references merged
    """
        ...
    def sumObj(self, other: Obj, deep: bool=None) -> Js:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Js]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Js]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Js]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Js]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Js]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Js]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Js]]:
    """
    Create a map with the given key type and elements of this type.
    """
        ...
    @classmethod
    def myReferenceType(cls) -> ReferenceType:
        ...
    @classmethod
    def myMapTypeOf(cls, keyType: ValueType) -> MapType:
        ...
    @classmethod
    def myMapType(cls) -> MapType:
        ...
    @classmethod
    def myArrayType(cls) -> ArrayType:
        ...
    @classmethod
    def mySetType(cls) -> SetType:
        ...
    @classmethod
    def myStreamType(cls) -> StreamType:
        ...
    def toBuilder(self) -> ObjBuilder[Js]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Js]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Js:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Js:
    """
    Construct an instance of this type from provided fields
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Js:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Js:
    """
    Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
               populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Js:
    """
    Construct an instance from provided fields
    @param fields
               Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
               field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
               to Panda.make()
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
               -> 0) populated. Passing an empty value for a field will result in the initial value being set if
               the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
    
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Any, withDefaults: bool=None) -> Js:
    """
    Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
    
    ```js
    User.make({
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    
    Obj.make({
      type: 'User',
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    ```
    
    ```py
    c3.User.make({
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.Obj.make({
      "type": 'User',
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.User(email='joe@smith.com', realName='Joe Smith')
    
    c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
    ```
    
    Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
    specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
    such as {@link Ann.Ser} do not apply.
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, s: str) -> Union[Js]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Js:
    """
    Construct an instance of this type from provided instance of a subtype or a "duck type".
    """
        ...
    def remakeAs(self, type: Type) -> O:
    """
    Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
    converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
    could be costly if types have different value types for same fields.
    
    @param type
            Type of new obj to return
    @return new obj of the requested type with all fields present in the original obj that are defined in the new type
            converted and copied to it
    """
        ...
    @classmethod
    def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
    """
    Optional override that will be called every time instance of this type is created.
    
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    def afterMake(self) -> Js:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Js:
    """
    Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
    every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
    Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
    
    @see ValueType#defaultEmptyValue
    """
        ...
    def toData(self) -> Union[Data]:
    """
    Represent the current obj instance as {@link Data}
    """
        ...
    @classmethod
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Js]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Js:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @classmethod
    def keyFieldType(cls) -> FieldType:
    """
    @return key field type.
    """
        ...
    def keyFieldValue(self) -> Union[str]:
    """
    @return key field value.
    """
        ...
    def singletonMap(self) -> Map[str, WithKey]:
    """
    Build a map of the correct type with a single element which is this instance and key field value as key.
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
    def fromString(cls, s: str) -> Union[Js]:
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
    def forName(cls, name: str, failIfMissing: bool=None) -> Union[Js]:
    """
    Return the matching ImplLanguage for the specified string or null. This is case-insensitive and handles common
    abbreviations.
    """
        ...
    @classmethod
    def inst(cls) -> Js:
    """
    @return the one and only instance to be used when member functions are called on this type.
    """
        ...
    @classmethod
    def cachedInst(cls) -> Union[Js]:
    """
    @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
    """
        ...
    def supportsOverloads(self) -> bool:
    """
    @return `true` if underlying language supports overloaded functions
    """
        ...
    def versions(self) -> Array[str]:
    """
    Language versions supported for this language. Note that this is not necessarily a semantic version.
    """
        ...
    @classmethod
    def nameOf(cls, lang: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Return the official name of matching ImplLanguage for the specified string or null. This is case-insensitive and
    handles common abbreviations.
    """
        ...
    def dslName(self) -> Union[str]:
    """
    @return name of this language as used in method declaration (if any)
    """
        ...
    @classmethod
    def dslNameOf(cls, lang: str) -> Union[str]:
    """
    @return name of the specified language as used in method declaration (if any)
    """
        ...
    def fileExt(self) -> str:
    """
    Return the canonical file extension for one of the language enum values.
    
    @return file extension (including dot)
    """
        ...
    @classmethod
    def fileExtOf(cls, lang: str) -> str:
    """
    Return the canonical file extension for the specified language enum value.
    
    @return file extension (including dot)
    """
        ...
    def mediaType(self) -> str:
    """
    Return the canonical content type extension for one of the language enum values.
    
    @return content type
    """
        ...
    def functions(self, source: str, failIfInvalid: bool=None) -> Union[Array[str]]:
    """
    Extract the function names from the script that could implement type methods. This means named top-level
    functions which could match up with type methods names.
    
    Normally a script that cannot be parsed will fail silently, returning an empty list, but passing true to
    failIfInvalid will cause an appropriate error to be thrown instead.
    
    @param source code to parse
    @param failIfInvalid throw an exception the script has a syntax error
    """
        ...
    def keywords(self) -> Union[Array[str]]:
    """
     Return the list of keywords for a given language. This is the list of words used by the implementation of a
     programming language. If the name of a field or method conflicts with one of these keywords, the field or method
     can be accessed by appending "_" to the end of its name. For example:
    
     ```py
        with open("foo.txt", "w") as f: # Note that "with" is a Python keyword
            f.write("bar")
        inst = c3.ArrayType.ofBool().emptyArray()
        # inst = inst.with(True) <- this would fail as "with" is a keyword in Python
        inst = inst.with_(True) # Works!
        c3.Py.keywords().contains("with") # returns True
    ```
    """
        ...
    @classmethod
    def forFileExt(cls, ext: str, failIfNone: bool=None) -> Union[Js]:
    """
    Return the matching language for the specified extension.
    
    @param ext extension string to match
    @param failIfNone if true, throw error instead of returning null
    @return matched enum value
    """
        ...
    def isJava(self) -> bool:
    """
    @return `true` if this is Java implementation language
    """
        ...
    def isJs(self) -> bool:
    """
    @return `true` if this is JavaScript implementation language
    """
        ...
    def isPy(self) -> bool:
    """
    @return `true` if this is Python implementation language
    """
        ...
    @classmethod
    def java(cls) -> ImplLanguage:
    """
    @return implementation language for Java
    """
        ...
    @classmethod
    def js(cls) -> ImplLanguage:
    """
    @return implementation language for JavaScript
    """
        ...
    @classmethod
    def py(cls) -> ImplLanguage:
    """
    @return implementation language for Python
    """
        ...
    @classmethod
    def all(cls) -> Array[ImplLanguage]:
    """
    @return all implementation languages.
    """
        ...
    @classmethod
    def allNames(cls) -> Array[str]:
    """
    @return all implementation languages.
    """
        ...
    @classmethod
    def allFileExts(cls) -> Union[Array[str]]:
    """
    @return file extensions for all supported ImplLanguages.
    """
        ...
    @classmethod
    def allScripting(cls) -> Array[ImplLanguage]:
    """
    @return scripting language instances (implementation languages other than Java)
    
    @see #all
    """
        ...
    @classmethod
    def allScriptingNames(cls) -> Array[str]:
    """
    @return scripting language names (implementation languages other than Java)
    
    @see #allNames
    """
        ...
    @classmethod
    def hasJava(cls, actionRequirements: Array[str]) -> bool:
    """
    @return `true` if any of provided {@link Action.Requirements} is for Java
    """
        ...
    @classmethod
    def hasJs(cls, actionRequirements: Array[str]) -> bool:
    """
    @return `true` if any of provided {@link Action.Requirements} is for JavaScript
    """
        ...
    @classmethod
    def hasPy(cls, actionRequirements: Array[str]) -> bool:
    """
    @return `true` if any of provided {@link Action.Requirements} is for Python
    """
        ...
    @classmethod
    def canRunActionRequirements(cls, find: str, actionRequirements: Array[str]) -> bool:
    """
    @return `true` if the provided {@Link Action.Engine} can run any of provided {@Link Action.Requirement actionRequirements}. If the parameter actionRequirements is
    empty we assume it has only one {@Link Action.Requirement} "java".
    """
        ...
    @classmethod
    def hasLang(cls, find: str, actionRequirements: Array[str]) -> bool:
    """
    @return `true` if any of provided {@link Action.Requirements} use the specified language
    """
        ...
    @classmethod
    def isScriptLang(cls, lang: str) -> bool:
    """
    @return `true` if the provided language is a scripting language.
    
    @see #allScripting
    """
        ...
    @classmethod
    def hasScript(cls, actionRequirements: Array[str]) -> bool:
    """
    @return `true` if any of provided {@link Action.Requirements} are a scripting language
    
    @see #allScripting
    """
        ...
    @classmethod
    def filterLang(cls, find: str, actionRequirements: Array[str]) -> Union[Array[str]]:
    """
    @return the requirements from the list that use the specified language
    """
        ...
    def installRuntime(self, runtime: ImplLanguage.ResolvedRuntime) -> None:
    """
    Installs the specified runtime, deleting potentially stale (cache-dirty) installations already present.
    """
        ...
    def resolveRuntime(self, runtime: ImplLanguage.Runtime, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
    """
    Resolve the specified runtime, {@Link ImplLanguage.RuntimeLocation locations}, and {@Link ImplLanguage.Executor executors} combinations.
    
    @param runtime
               The runtime to resolve.
    @param location
               If provided, runtime will be resolved for the specific {@Link ImplLanguage.RuntimeLocation location}. If not
               provided runtime is resolved against all {@Link ImplLanguage.RuntimeLocation locations}.
    @param executors
               If provided, the runtime will be resolved only for {@Link ImplLanguage.Executor executors} specified in the parameter executors. If not
               set runtime is resolved against all {@Link ImplLanguage.Executor executors}.
    @param doNotValidate
               Runtime resolution typically involves validation to confirm that the resolved runtimes satisfy the
               runtime. In some cases, it may be desirable or necessary to disable this validation. For
               example, if one of the packages has an installation name that does not match its 'importable' name.
    @return A named tuple with fields `seededRuntimes` and `errors`. The 'seededRuntimes' field is a map with {@Link Action.Engine} as the key and its {@Link Action.Engine#installedRuntime resolved runtime}
    as the value. The 'errors' field is a map with {@Link Action.Engine} as the key and the error message as value if the runtime resolution failed for that {@Link Action.Engine}.
    """
        ...
    @overload
    def upsertRuntime(self, runtime: ImplLanguage.Runtime, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
    """
    The api to upsert a runtime. After a runtime is successfully upserted it can be used as a part of {@Link Action.Requirement}
    in method claims and {@Link Lambda lambdas}.
    
    @param runtime
               The runtime to upsert. Once a runtime is successfully upserted it is available for use in {@Link Action.Requirement}
               with any valid combination of {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors} that support
               custom runtimes. The user can also upsert a runtime for specific locations and executors and then it can be used with only those
               combination of locations and executors.
    @param location
               This optional parameter allows user to upsert a runtime for a specific {@Link ImplLanguage.RuntimeLocation location}. If not provided a successfully upserted runtime can be used
               with any location in an {@Link Action.Requirement}. For instance, calling upsert on a runtime "py-foo" with location set as "server" will allow users to use that runtime only with server.
               Any method claim like "py-foo-client" will be invalid and throw metadata error.
    @param executor
               This optional parameter allows user to upsert a runtime for some array of {@Link ImplLanguage.Executor executors}. If not provided a successfully upserted runtime can be used
               with any {@Link ImplLanguage.Executor executor} that supports custom runtimes. For instance, calling upsert on a runtime "py-foo" with executor
               set as ["ipython"] will allow users to use that runtime only with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}. A method claim like
               "py-foo-server" will be invalid and throw metadata error as {@Link ImplLanguage.Executor#IPYTHON ipython} is an executor for client side python. Similarly,
               the method claim "py-foo-py4j" will be invalid as "py-foo" can only be used with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}.
    @param doNotValidate
               Upsertion of runtime typically involves validation to confirm that the installed runtimes satisfy the
               runtime which was to be upserted. In some cases, it may be desirable or necessary to disable this validation. For
               example, if one of the packages has an installation name that does not match its 'importable' name.
    
    @return A named tuple with fields 'seededRuntimes' and 'errors'. The 'seededRuntimes' field will provide detailed information
            about the the libraries that will be installed when using this runtime with various {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}. It is a map with {@Link Action.Engine} as key and its {@Link Action.Engine#installedRuntime} as value.
            The 'errors' field is a map with {@Link Action.Engine} as key and error message as value if the runtime upsertion failed for that particular {@Link Action.Engine}. To check if upsertion is completely successfully it is enough to check that 'errors' field is an empty map.
            If the upsertion was not successful or partially successful `errors` field will give detailed information about why upsertion failed for all/some
            requested {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}.
    """
        ...
    @overload
    def upsertRuntime(self, runtime: ImplLanguage.Runtime, executors: Array[str]=None, doNotValidate: bool=None) -> :
        ...
    def upsertRuntimes(self, runtimes: Array[ImplLanguage.Runtime], location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
    """
    Upserts each runtime in {{runtimes}} via {@link upsertRuntime}. Ancestor runtimes will be upserted prior to their
    descendants. If resolution fails for a parent runtime, attempts to resolve any of its descendants will be skipped.
    
    All arguments and return value have the same semantics as {@link upsertRuntime}.
    """
        ...
    def upsertRuntimesAndDependents(self, changedRuntimes: Array[ImplLanguage.Runtime], location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
    """
    Upserts each runtime in {{changedRuntimes}} via {@link upsertRuntimes}. Also upserts runtimes
    for any runtime which {@link ImplLanguage.Runtime#isDescendantOf is a descendant of} a runtime in
    {{changedRuntimes}}. Ancestor runtimes will be upserted prior to their descendants.
    
    All arguments and return value have the same semantic as {@link upsertRuntime}
    """
        ...
    def upsertPkgRuntimes(self, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
    """
    Upserts all runtimes declared in the current {@link Pkg} via {@link upsertRuntimes}.
    
    All arguments and return value have the same semantic as {@link upsertRuntime}
    """
        ...
    def uninstallRuntime(self, runtimeName: str) -> None:
    """
    Uninstalls the specified runtime if installed.
    """
        ...
    def libraryManager(self, runtimeName: str=None) -> LibraryManager[LibraryManager.Config, ImplLanguage.ResolvedRuntime]:
    """
    Library manager for this language and provided runtime.
    """
        ...
    def executors(self) -> Union[Array[str]]:
    """
    All valid executors for this language
    """
        ...
    @classmethod
    def regexPattern(cls) -> str:
    """
    Regular expression that matches all supported languages
    """
        ...
    @classmethod
    def methodStubs(cls, meta: TypeMeta, delegate: bool=None) -> Union[str]:
    """
    @return the method stubs for declared or overridden methods in given typemeta.
    
    @param meta
              the type to generate stubs for
    @param delegate
              use super to call Java instead of throwing an error
    """
        ...
    @classmethod
    def preamble(cls) -> Union[str]:
    """
    @return a block prepended to all generated files
    """
        ...
    @classmethod
    def stub(cls, type: TypeMeta, methodName: str, isMember: bool=None, fixed: Array[str]=None, requiredCount: int=None, remaining: str=None, delegate: bool=None) -> Union[str]:
    """
    Build a stub function declaration as multiple lines. All lines, including the last one, should end with newlines.
    
    @param type
           the type
    @param methodName
           name of the method
    @param isMember
           if this is a member method
    @param fixed
           the parameters that are the same in all overloads
    @param requiredCount
           the number of the sharedOverloadParams parameters that must be specified by the caller
    @param remaining
           the name for any remaining parameters that vary by overload or are varargs
    @param delegate
           use super to call Java instead of throwing an error
    @return stub function declaration
    """
        ...
    @classmethod
    def postamble(cls) -> Union[str]:
    """
    @return a block appended to all generated files
    """
        ...
    @classmethod
    def comment(cls) -> str:
    """
    @return the single-line comment prefix
    """
        ...
    @classmethod
    def language(cls) -> str:
    """
    @return the language as listed in {@link ImplLanguage}.
    """
        ...
    @classmethod
    def toArray(cls, v: Any, type: ArrayType, failIfInvalid: bool=None) -> Union[Array[E]]:
    """
    Build a made array of the specified type from the specified native array or list. The elements are made by
    making them as the element type of the specified array type. The made array corresponds to the specified
    array type.
    """
        ...
    @classmethod
    def toArrayOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[Any]]:
    """
    Build a made array of `any` from the specified native array or list. The elements are made by guessing the type.
    """
        ...
    @classmethod
    def toArrayOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[float]]:
    """
    Build a made array of `double` from the specified native array or list. The elements are made as necessary.
    
    @see ArrayType#ofDbl
    """
        ...
    @classmethod
    def toArrayOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[int]]:
    """
    Build a made array of `int` from the specified native array or list. The elements are made as necessary.
    
    @see ArrayType#ofInt
    """
        ...
    @classmethod
    def toArrayOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[str]]:
    """
    Build a made array of `string` from the specified native array or list. The elements are made as necessary.
    
    @see ArrayType#ofStr
    """
        ...
    @classmethod
    def toMap(cls, v: Any, type: MapType, failIfInvalid: bool=None) -> Union[Map[K, V]]:
    """
    Build a made map of the specified type from the specified native map or dictionary. The keys and values are
    made by making them as the element type of the specified map type. The made map corresponds to the specified
    map type.
    """
        ...
    @classmethod
    def toMapOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[Any, Any]]:
    """
    Build a made map of `any` from the specified native map or dictionary. The keys and values are made by
    guessing the types.
    """
        ...
    @classmethod
    def toMapOfStrToAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, Any]]:
    """
    Build a made map of `string` to `any` from the specified native map or dictionary. The values are made by
    guessing the types.
    """
        ...
    @classmethod
    def toMapOfStrToDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, float]]:
    """
    Build a made map of `double` from the specified native map or dictionary. The keys and values are made as
    necessary.
    
    @see MapType#ofStrToDbl
    """
        ...
    @classmethod
    def toMapOfStrToInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, int]]:
    """
    Build a made map of `int` from the specified native map or dictionary. The keys and values are made as
    necessary.
    
    @see MapType#ofStrToInt
    """
        ...
    @classmethod
    def toMapOfStrToStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, str]]:
    """
    Build a made map of `string` from the specified native map or dictionary. The keys and values are made as
    necessary.
    
    @see MapType#ofStrToStr
    """
        ...
    @classmethod
    def toObj(cls, v: Any, type: Type, failIfInvalid: bool=None) -> Union[O]:
    """
    Build a made instance of a type. Note that this might not actually be an Obj if the specified type does not mixin
    Obj. If the value specifies a type more specific that than given the more specific type is used. If it specifies
    an unrelated type, null is returned or an error is thrown.
    
    If the type is an Obj, then a field initializer map (either made or unmade) or a JSON object may be specified.
    
    If the type mixes {@link StringSerializable}, then the string representation may be specified.
    
    @see Obj#make
    """
        ...
    @classmethod
    def toSet(cls, v: Any, type: SetType, failIfInvalid: bool=None) -> Union[Set[E]]:
    """
    Build a made set of the specified type from the specified native array or list. The elements are made by
    making them as the element type of the specified set type. The made set corresponds to the specified
    set type.
    """
        ...
    @classmethod
    def toSetOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[float]]:
    """
    Build a made set of `double` from the specified native array or list. The elements are made as necessary.
    
    @see SetType#ofDbl
    """
        ...
    @classmethod
    def toSetOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[int]]:
    """
    Build a made set of `int` from the specified native array or list. The elements are made as necessary.
    
    @see SetType#ofInt
    """
        ...
    @classmethod
    def toSetOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[str]]:
    """
    Build a made set of `string` from the specified native array or list. The elements are made as necessary.
    
    @see SetType#ofStr
    """
        ...
    @classmethod
    def toStream(cls, v: Any, type: StreamType, failIfInvalid: bool=None) -> Union[Stream[E]]:
    """
    Build a made stream of the specified type from the specified native collection or iterator. The elements are made
    by making them as the element type of the specified stream type. The made stream corresponds to the specified
    stream type.
    """
        ...
    @classmethod
    def toStreamOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[Any]]:
    """
    Build a made stream of `any` from the specified native collection or iterator. The elements are made by guessing
    the type.
    """
        ...
    @classmethod
    def toStreamOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[float]]:
    """
    Build a made stream of `double` from the specified native collection or iterator. The elements are made as
    necessary.
    """
        ...
    @classmethod
    def toStreamOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[int]]:
    """
    Build a made stream of `int` from the specified native collection or iterator. The elements are made as necessary.
    """
        ...
    @classmethod
    def toStreamOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[str]]:
    """
    Build a made stream of `string` from the specified native collection or iterator. The elements are made as
    necessary.
    """
        ...
    @classmethod
    def toValue(cls, v: Any, type: ValueType, failIfInvalid: bool=None) -> Union[Any]:
    """
    Construct a made value for the specified value type.
    
    @see ValueType#makeValue
    """
        ...
    @classmethod
    def toNativeObject(cls, o: Any) -> Union[Any]:
    """
    Returns a language-native key-value object for scripting languages: JavaScript Object or Python dict.
    The only supported input types are C3 `json` values and the language native equivalents (for which `toNativeObject`
    is a no-op).
    """
        ...
    @overload
    @classmethod
    def exec(cls, src: str, *args: Array[Any]) -> Union[T]:
    """
    Execute arbitrary source code in Rhino engine (js-server {@link ImplLanguage.Runtime}).
    
    @param src
           arbitrary code to execute
    @param args
           if code is a function declaration then invoke that function with provided arguments
    @return result of the execution
    """
        ...
    @overload
    @classmethod
    def exec(cls, lambda_: Lambda[Callable[[Union[Array[Any]]], Union[T]]], *args: Array[Any]) -> Union[T]:
    """
    Execute arbitrary lambda's code in Rhino engine (js-server {@link ImplLanguage.Runtime}). The implementation
    language specified in the lambda will be ignored; it will always be executed using Rhino.
    
    @param lambda
           boxed lambda to execute
    @param args
           invoke the lambda with provided arguments
    @return result of the execution
    """
        ...
    @overload
    @classmethod
    def exec(cls, runtime: ImplLanguage.Runtime, src: str, *args: Array[Any]) -> Union[T]:
    """
    Execute arbitrary source code of the implementation language of this action engine.
    
    @param runtime
           implementation language runtime to use
    @param src
           arbitrary code to execute
    @param args
           if code is a function declaration then invoke that function with provided arguments
    @return result of the execution
    """
        ...
    @classmethod
    def execEs(cls, src: str, *args: Array[Any]) -> Union[T]:
    """
    Execute EcmaScript-compatible code in Rhino engine (js-server {@link ImplLanguage.Runtime})
    
    @param src
           string of EcmaScript-compatible code written in ES6+ syntax to exec
    @param args
           if code is a function declaration, then invoke that function with provided arguments
    @return result of the execution
    """
        ...
    @classmethod
    def execTs(cls, src: str, *args: Array[Any]) -> Union[T]:
    """
    Execute TypeScript code in Rhino engine (js-server {@link ImplLanguage.Runtime})
    
    @param src
           string of TypeScript code to exec
    @param args
           if code is a function declaration, then invoke that function with provided arguments
    @return result of the execution
    """
        ...
    @classmethod
    def execRhino(cls, src: str, *args: Array[Any]) -> Union[T]:
    """
    Execute ES5 code in Rhino engine (js-server {@link ImplLanguage.Runtime}), without transpilation.
    
    @param src
           string of code written in ES5 syntax to exec
    @param args
           if code is a function declaration, then invoke that function with provided arguments
    @return result of the execution
    """
        ...
    @classmethod
    def dataToSource(cls, data: T, src: T=None) -> Union[str]:
    """
    Build the canonical JavaScript source code representation of the provided C3 type instance.  After running the
    produced JavaScript source code, the `data` variable in JavaScript should point to the instance.
    
    Simple example of the returned JavaScript source code that does not use `$src` variable
    (See {@link #sourceToData}):
    ```js
    data = { firstName: 'John', lastName: 'Doe' }
    ```
    
    One use of this method is for saving a serialized instance to an application package.
    To support overriding configs and remixing metadata / seed data, one may want to create more than one metadata
    / seed / config file for the same id or name.  The caller may supply a `src` instance so that the output captures
    the differences between this instance and the `src` instance.
    
    If we call this API like:
    ```js
    var src = User.make({ firstName: "John", lastName: "Doe" })
    Js.dataToSource(src.withEmail('john@doe.com'), src)
    ```
    the output JavaScript source code could be something like:
    ```js
    data = { ...$src, email: 'john@doe.com' }
    ```
    
    @param data
       C3 type instance to serialize to JavaScript source code.
    @param src
        If provided, the JavaScript source code will only contain field changes as compared to `src`.  The `src`
        instance is typically the config / metadata / seed instance that we are overriding or remixing, so that
        the output only captures the diff between the current instance and the `src` instance.
    @return a JavaScript source code representation of this instance.  One use of this source code is to put in `*.js`
        file as seed data (see {@link SeedData}).
    
    @see #sourceToData
    @see JsSerializable
    """
        ...
    @classmethod
    def sourceToData(cls, type: Type, js: str, src: T=None) -> Union[T]:
    """
    Parse and evaluate the JavaScript source code representation and reconstruct the corresponding instance.
    
    @param type
        C3 type of the instance to be created.
    @param js
        JavaScript source code used to reconstruct the C3 type instance.
    @param src
        If provided, the JavaScript source code will have the `$src` variable in scope set to this parameter during its
        execution.  The JavaScript source code should merge or override fields on the instance referenced by the
        `$src` variable to return the new instance.
    @return an instance created from the source code representation.
    
    @see #dataToSource
    @see JsSerializable
    """
        ...
    @classmethod
    def rhinoVersion(cls) -> str:
    """
    Get the version of Rhino used for executing JavaScript within the server.
    """
        ...
    @classmethod
    def transpile(cls, code: str, fileName: str=None, failIfInvalid: bool=None) -> Union[str]:
    """
    Convert modern JavaScript code to ES5 for compatibility with Rhino _if_ the specified code cannot be parsed by
    Rhino as-is. Otherwise, the original code is returned.
    
    Transpilation may remove comments and whitespace, meaning that a script with no actual expressions or statements
    may transpile to nothing.
    
    If neither Rhino nor the transpiler can parse the code, the original is returned (unless `failIfInvalid` is true).
    
    @param code
           ES.Next JavaScript source
    @param fileName
           if specified, will be included in error messages
    @param failIfInvalid
           throw an error if the script cannot be parsed by either Rhino or the transpiler
    @return ES5 JavaScript result
    """
        ...
    @classmethod
    def dispatch(cls, typ: Type, method: str, *args: Array[Any], ths: Any=None) -> Union[Any]:
        ...
    
    class Runtime(ImplLanguage.ResolvedRuntime, ImplLanguage.WithLibraries[ImplLanguage.Library]):
        """
        @remarks this represents a made instance of Js.Runtime
        """
        
        meta: Optional[Meta]=None
        """
        Various system fields.
        """

        name: Optional[str]
        """
        @inheritdoc
        The name for a ResolvedRuntime should be the same as that of the corresponding {@link Action.Engine} which resolved it.
        e.g. the ResolvedRuntime for `py-data_312-server-jep` should have `name` `py-data_312-server-jep`
        """

        languageVersion: Optional[str]=None
        """
        The specific version of the {@link ImplLanguage} required to execute {@link Action}s in this runtime.
        
        e.g. language: “JavaScript”, languageVersion: “ES5”
        e.g. language: “Python”, languageVersion: “3.6”
        """

        runEnvVars: Optional[Array[ImplLanguage.Runtime.EnvVar]]=None
        """
        Environment variables applied when running an action with an {@link Action.Requirement} with current the runtime
        """

        installEnvVars: Optional[Array[ImplLanguage.Runtime.EnvVar]]=None
        """
        Environment variables applied to the process which installs this runtime
        """

        description: Optional[str]=None
        """
        Description for the runtime
        """

        repositories: Optional[Array[str]]=None
        """
        Usage of the optional `repositories` (ie: locations such as URI/URL) field differs based on the `runtime`.
        
        For Node.js, if `repositories` is defined, it must be an array of length one. The repository will be used by
        npm to find and install the `modules`.
        
        For Python `repositories` is defined, those repositories will be searched in precedence is in descending order.
        """

        resourceRequirements: Optional[Action.ResourceSpec]=None
        """
        Resources required to execute {@link Action}s in this runtime
        """

        appendLdLibraryPath: Optional[bool]=None
        """
        If set, append the directory containing this runtime's `lib/` directory to the `LD_LIBRARY_PATH` environment
        variable before spawning a new Python process. This is usually required for runtimes that contain CUDA-enabled
        ML frameworks (e.g. Tensorflow).
        """

        declaredRuntime: Optional[str]=None
        """
        The name of the unresolved runtime which was used to get this resolved runtime
        """

        lastResolvedTime: Optional[datetime]=None
        """
        Last resolution timestamp.
        """

        runtimeSize: Optional[int]=None
        """
        Returns the runtime size in KiB. Note since the libraries in a runtime share hard links with cache or other libraries,
        this size is an upper bound on the actual size of the installed runtime.
        """

        libraries: Optional[Array[ImplLanguage.Library]]=None
        """
        All libraries required to execute {@link Action}s in this runtime.
        Note that if multiple Libraries in this list ultimately provide {@link Library#libraryVersion} for the same
        `Library`, then those version specifications must be compatible.
        For example, one Library may specify `>=0.10` and another `==0.12` (since `==0.12` can satisfy both of
        those requirements).
        On the other hand, if one Library specifies `>=0.10`, a second may not specify `==0.9` since that cannot be
        resolved.
        """

        merged: Optional[bool]=None
        """
        Specifies if the runtime has been merged with runtimes from other packages. This feature is used in UI packages because they have a hierarchical dependency on other packages and might want to add extra dependencies to a known runtime by name.
        """

        packageLock: Optional[any]=None
        """
        Takes the specified package-lock from a resolved NodeJS action runtime and uses it to install the dependencies to invoke
        the subsequent NodeJS Action. If a packageLock does not exist, npm install will be executed by creating a package.json with the
        `libraries` specified.
        """
        def __init__(self, meta: Optional[Meta]=None, name: Optional[str]=None, languageVersion: Optional[str]=None, runEnvVars: Optional[Array[ImplLanguage.Runtime.EnvVar]]=None, installEnvVars: Optional[Array[ImplLanguage.Runtime.EnvVar]]=None, description: Optional[str]=None, repositories: Optional[Array[str]]=None, resourceRequirements: Optional[Action.ResourceSpec]=None, appendLdLibraryPath: Optional[bool]=None, declaredRuntime: Optional[str]=None, lastResolvedTime: Optional[datetime]=None, runtimeSize: Optional[int]=None, libraries: Optional[Array[ImplLanguage.Library]]=None, merged: Optional[bool]=None, packageLock: Optional[any]=None) -> None: ...

        @overload
        def toJson(self) -> any:
        """
        Convert the internal object representation to a JSON object.
        
        @return JSON object representation
        
        @see #fromJson
        """
            ...
        @overload
        def toJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
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
        @overload
        def toTypedJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toJsonString(self) -> str:
            ...
        @overload
        def toJsonString(self, pretty: bool) -> str:
        """
        Convert the internal object representation to a serialized JSON string.
        
        @return JSON object as string
        """
            ...
        @overload
        def toTypedJsonString(self) -> str:
            ...
        @overload
        def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
            ...
        @overload
        def toJsString(self) -> str:
            ...
        @overload
        def toJsString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized JavaScript object literal.
        
        @return JavaScript object literal string
        """
            ...
        @overload
        def toXmlString(self) -> str:
            ...
        @overload
        def toXmlString(self, withType: bool) -> str:
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
        def fromJson(cls, json: any) -> Union[Js.Runtime]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJson
        """
            ...
        @classmethod
        def fromJsonString(cls, json: str) -> Union[Js.Runtime]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJsonString
        """
            ...
        @classmethod
        def fromXmlString(cls, xml: str) -> Union[Js.Runtime]:
        """
        Load the XML-based representation and reconstruct the corresponding object.
        
        fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
        may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
        isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
        will return an instance of the correct type.
        
        @see #toXmlString
        """
            ...
        @classmethod
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Js.Runtime]:
        """
        Load from contentType representation and reconstruct the corresponding object.
        
        fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
        (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
        will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
        type and will return an instance of the correct type.
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
        def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
        """
        Measures retained memory by this instance.
        
        @param deep
               if true and this instance contains references to other objects also measures memory retained by those
        @param allMeasured
               if set then will skip instances that are in the set and will add instances that where measured by this call
        @return retained memory in bytes for this instances
        """
            ...
        def type(self) -> Type:
        """
        C3 Type of this instance.
        """
            ...
        def replaceType(self, old: Type, new: Type) -> Js.Runtime:
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
        def instanceOf(self, typeName: str) -> bool:
        """
        Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        """
            ...
        @overload
        def instanceOf(self, type: Type) -> bool:
        """
        Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        
        @see ValueType#isA
        """
            ...
        def isEmptyObj(self) -> bool:
        """
        Whether all the fields of this instance are empty.
        """
            ...
        def isSame(self, other: Obj) -> bool:
        """
        Whether the specified instance represents exactly the same object as this instance.
        """
            ...
        @overload
        def isFieldSet(self, field: str) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldSet(self, field: FieldType) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldMissing(self, field: str) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def isFieldMissing(self, field: FieldType) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        """
            ...
        @overload
        def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
        the obj.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        @return value for the given field
        """
            ...
        def fieldValues(self) -> Union[Array[FieldValue]]:
        """
        Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
        """
        Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
        Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
        #dataFieldTypes
        """
            ...
        def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
        """
        Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
        """
        Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldNames(self) -> Union[Array[str]]:
        """
        Returns all data field names including those whose values are empty. Array is ordered by
        field ordinal.
        """
            ...
        def unsetFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
        field ordinal.
        """
            ...
        def missingFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
        field ordinal.
        """
            ...
        @overload
        def at(self, ordinal: int) -> Union[T]:
        """
        Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
        
        @param ordinal
                Integer ordinal of the field in the parent type
        @return value of field at ordinal
        """
            ...
        @overload
        def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
        """
        Return value for the given serialized expression
        
        @param expr
                Serialized expression to obtain the value in the given Obj
        @param failIfNotValid
                If set, fails if not a valid expression
        @return value obtained as a result of expression evaluation
        """
            ...
        def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
        """
        Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
        `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
        that it also handles `null`. If path contains any collections then only first element will be traversed,
        unless the collection index is specified in the path.
        
        If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return the field or null
        """
            ...
        def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
        """
        Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
        traversals, unless the collection index is specified in the path.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return fields as a flat list
        
        @see #fieldValueAtPath
        """
            ...
        @overload
        def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        @overload
        def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply
        """
            ...
        def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
        """
        Perform an action for each {@link isFieldSet set} field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
        """
        Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
        on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply; stop if this `action` returns `false
        @return `true` if iteration was not aborted by lambda i.e. it saw all field values
        """
            ...
        @overload
        def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        @overload
        def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type while processing action returns
        `true`.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance; stops processing if return `false`
        @return `true` if iteration was not aborted by lambda i.e. it saw all refs
        """
            ...
        def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
        """
            ...
        def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
        processing action returns `true`.
        """
            ...
        @overload
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js.Runtime:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js.Runtime:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js.Runtime]:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the asynchronous `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that fields
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js.Runtime]:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        asynchronous `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Js.Runtime:
        """
        Result of this function call is a copy of current instance with specified field value replaced based on result of
        the `mapper` invocation.
        @param field
                  field being mapped
        @param includeEmpty
                  if set, invokes mapper for fields with empty value
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js.Runtime:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js.Runtime:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param mapper
                  function to be executed for each pair of field type and Obj instance for producing new reference value
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` will be `null`.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
        result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
        """
        Evaluates given projection expression over this instance.
        """
            ...
        @overload
        def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
        """
        Evaluates given projection over this instance and returns results as json.
        """
            ...
        @overload
        def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
        """
        Evaluates given projection over this instance and returns results as instance of the new Obj.
        """
            ...
        @overload
        def validateObj(self) -> Js.Runtime:
        """
        Populates all missing default values and throws error if any constraint is violated.
        """
            ...
        @overload
        def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
        """
        Validate that the Obj fields are set according to all the required rules.
        """
            ...
        @overload
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Js.Runtime:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  name of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        @overload
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Js.Runtime:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Js.Runtime:
        """
        Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
        defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
        
        @param fields
                  map of field names/values
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @return new Obj
        """
            ...
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Js.Runtime:
        """
        Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
        If you would like to #unsetField, you should call #withoutFieldAtPath instead.
        
        Immutable objects may return the same instance if the field being set does not actually represent a
        change to the existing object.
        
        @param path
                  path to set value at
        @param value
                  value to set
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @param doNotCreateIfMissing
                  true indicates that any empty reference along the path will not set the value
        @return new Obj
        """
            ...
        def withoutFieldAtPath(self, path: str) -> Js.Runtime:
        """
        Builds a new Obj without the specified path field.
        
        Immutable objects may return the same instance if the field being removed does not actually represent a
        change to the existing object.
        
        @param path
                  path for field to remove
        @return new Obj
        
        @see #withFieldAtPath
        @see #withoutField
        """
            ...
        @overload
        def withoutField(self, field: str) -> Js.Runtime:
        """
        Builds a new Obj, removing the field with the provided name.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        @overload
        def withoutField(self, field: FieldType) -> Js.Runtime:
        """
        Builds a new Obj, removing the field with the provided field type.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        def withoutFields(self, fields: Array[str]) -> Js.Runtime:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Js.Runtime:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Js.Runtime:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Js.Runtime:
        """
        Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
        calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
        {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
        fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
        fields that have already been set.
        
        {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
        As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
        
        @param includeEmptyRefsWithDefaults
                  it `true` then missing / empty child references that have fields with defaults will also be instantiated
        @param defaultFields
                  If not empty, a list of default field paths to populate.  Any default fields not specified in the
                  array will be ignored.
        @return new Obj
        
        @see #defaultField
        @see FieldType#defaultValueConst
        @see FieldType#defaultValue
        """
            ...
        @overload
        def defaultField(self, field: str) -> Js.Runtime:
        """
        Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                name of the field to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def defaultField(self, field: FieldType) -> Js.Runtime:
        """
        Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                field type to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def unsetField(self, field: str) -> Js.Runtime:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                name of the field to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def unsetField(self, field: FieldType) -> Js.Runtime:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                field type to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def removeField(self, field: str) -> Js.Runtime:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                name of the field to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def removeField(self, field: FieldType) -> Js.Runtime:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                field type to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Js.Runtime:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
        
        @param other
                  object
        @param fieldPathMergeSpec
                  mapping of fields of the object to the respective merge annotations
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Js.Runtime:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence.
        
        @param other
                  object
        @param otherFieldsFilter
                  only fields of otherFieldsFilter type from other are merged into this obj.
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Js.Runtime:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Js.Runtime:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
        traverse child reference and collection fields.
        """
            ...
        def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
        """
        Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
        Fields that non null in only one of this and other will be in the resulting Obj without change.
        """
            ...
        def mergeJson(self, json: any) -> Js.Runtime:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Js.Runtime:
        """
        Merge the obj references within the current obj
        @param deep
               If set, traverses the reference fields within the obj as well for a deep merge
        @param objKey
               lambda specifying how to obtain the key for the Obj while determining which Objs to merge
        @param filter
               Field paths that need to be filtered from this merge
        @return Obj with child references merged
        """
            ...
        def sumObj(self, other: Obj, deep: bool=None) -> Js.Runtime:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Js.Runtime]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Js.Runtime]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Js.Runtime]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Js.Runtime]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Js.Runtime]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Js.Runtime]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Js.Runtime]]:
        """
        Create a map with the given key type and elements of this type.
        """
            ...
        @classmethod
        def myReferenceType(cls) -> ReferenceType:
            ...
        @classmethod
        def myMapTypeOf(cls, keyType: ValueType) -> MapType:
            ...
        @classmethod
        def myMapType(cls) -> MapType:
            ...
        @classmethod
        def myArrayType(cls) -> ArrayType:
            ...
        @classmethod
        def mySetType(cls) -> SetType:
            ...
        @classmethod
        def myStreamType(cls) -> StreamType:
            ...
        def toBuilder(self) -> ObjBuilder[Js.Runtime]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Js.Runtime]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Js.Runtime:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Js.Runtime:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Js.Runtime:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Js.Runtime:
        """
        Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                   populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Js.Runtime:
        """
        Construct an instance from provided fields
        @param fields
                   Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                   field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                   to Panda.make()
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                   -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                   the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
        
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Any, withDefaults: bool=None) -> Js.Runtime:
        """
        Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
        
        ```js
        User.make({
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        
        Obj.make({
          type: 'User',
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        ```
        
        ```py
        c3.User.make({
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.Obj.make({
          "type": 'User',
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.User(email='joe@smith.com', realName='Joe Smith')
        
        c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
        ```
        
        Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
        specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
        such as {@link Ann.Ser} do not apply.
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, s: str) -> Union[Js.Runtime]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Js.Runtime:
        """
        Construct an instance of this type from provided instance of a subtype or a "duck type".
        """
            ...
        def remakeAs(self, type: Type) -> O:
        """
        Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
        converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
        could be costly if types have different value types for same fields.
        
        @param type
                Type of new obj to return
        @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                converted and copied to it
        """
            ...
        @classmethod
        def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
        """
        Optional override that will be called every time instance of this type is created.
        
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        def afterMake(self) -> Js.Runtime:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Js.Runtime:
        """
        Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
        every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
        Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
        
        @see ValueType#defaultEmptyValue
        """
            ...
        def toData(self) -> Union[Data]:
        """
        Represent the current obj instance as {@link Data}
        """
            ...
        @classmethod
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Js.Runtime]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Js.Runtime:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @overload
        @classmethod
        def fetch(cls, spec: FetchSpec=None) -> FetchResult[Js.Runtime]:
        """
        Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
        returned.
        
        @param spec
                  Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
                  of 2000 will be applied.
        @return Requested objs.
        """
            ...
        @overload
        @classmethod
        def fetch(cls, filter: Filter) -> FetchResult[Js.Runtime]:
        """
        Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
        returned.
        
        @param filter
                  Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
        @return Requested objs.
        """
            ...
        @classmethod
        def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[Js.Runtime]]:
        """
        Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
        returned.
        
        @param spec
                  Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
        @return Requested obj stream.
        """
            ...
        @classmethod
        def fetchArrowStream(cls, spec: FetchArrowStreamSpec) -> Stream[Arrow]:
        """
        Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
        specified maximum batch size.
        
        @param spec
                  Specification of what data to fetch.
        @return Stream of Arrow batches.
        """
            ...
        @classmethod
        def scanArrow(cls, spec: ScanArrowSpec) -> Union[ArrowIterator]:
        """
        Finds rows matching specification and returns them as iterator of Arrow batches.
        
        @param spec
                  Specification of what rows to return.
        @return Iterator of Arrow batches.
        """
            ...
        @classmethod
        def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[Js.Runtime]]]:
        """
        Fetched multiple obj instances in multiple locales based on specification.
        
        @param spec
               Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
               type.
        @return Requested objs where key of map is locale id
        """
            ...
        @classmethod
        def fetchCount(cls, spec: FetchFilterSpec=None) -> int:
        """
        @return The number of entries that match the specification.
        """
            ...
        @classmethod
        def fetchCountEstimated(cls, spec: FetchFilterSpec=None, updateStatistics: bool=None) -> int:
        """
        Gets the estimated count of objs that a fetch on the type with the optional filter will return.
        For non-kv types, The count is obtained from the query explain plan for the fetch.
        For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
        other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
        upper bound for the partition. For more accurate results, perform fillBuckets first.
        
        @param spec
               Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
               explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
               fields.
        @param updateStatistics
               If true, the database statistics for all tables involved in the query will be updated prior to obtaining
               the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
        
        @return The requested estimated count.
        """
            ...
        @classmethod
        def scan(cls, spec: ScanSpec) -> Union[ScanStats]:
        """
        Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
        a callback function for the given batch.
        
        @param spec
                  Specification of the scan action.
        @return Statistics of the scan action.
        """
            ...
        @classmethod
        def batchIds(cls, spec: BatchIdsSpec=None) -> Union[Stream[str]]:
        """
        Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
        
        @param spec
               Spec indicating how the operation should work.
        
        IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
                    rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
                    cause an issue if the results are blindly used to create filters for fetching batches as the last batch
                    would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
                    other would be specified, depending on whether you are interested in controlling the number of batches
                    or batch size.
        
        @return A stream of batch ids based on the input parameters.
        """
            ...
        @overload
        @classmethod
        def exists(cls, spec: ExistsSpec=None) -> bool:
        """
        @return True if there are at least the number of entries matching the filter/count specified in the spec.
        """
            ...
        @overload
        @classmethod
        def exists(cls, filter: Filter) -> bool:
        """
        @return True if there are at least the number of entries matching the filter/count specified in the spec.
        """
            ...
        @classmethod
        def keyFieldType(cls) -> FieldType:
        """
        @return key field type.
        """
            ...
        def keyFieldValue(self) -> Union[str]:
        """
        @return key field value.
        """
            ...
        def singletonMap(self) -> Map[str, WithKey]:
        """
        Build a map of the correct type with a single element which is this instance and key field value as key.
        """
            ...
        def dependencies(self) -> ImplLanguage.RuntimeDeps:
        """
        Retrieves dependencies to types or other metadata elements for the given instance of metadata.
        """
            ...
        def save(self, subPath: str=None, contentType: str=None) -> Js.Runtime:
            ...
        def remove(self, spec: UpsertSpec=None) -> bool:
            ...
        def removeWithChildren(self) -> bool:
        """
        Remove the metadata instance as well as its associated backward dependencies.
        Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
        """
            ...
        @classmethod
        def removeAll(cls, removeFilter: str=None) -> int:
            ...
        def update(self, srcObj: Js.Runtime=None, spec: UpsertSpec=None) -> Union[Js.Runtime]:
            ...
        def upsert(self, srcObj: Js.Runtime=None, spec: UpsertSpec=None) -> Union[Js.Runtime]:
            ...
        @classmethod
        def metadataFolder(cls) -> Union[str]:
        """
        Retrieves folder that holds metadata.
        """
            ...
        @classmethod
        def hasArbitraryFolderHierarchy(cls) -> bool:
        """
        If this Metadata type has arbitrary folder hierarchy.
        """
            ...
        @classmethod
        def isValidMetadataJson(cls, pkg: str, filePath: str) -> bool:
        """
        If metadata path is valid.
        @param pkg
           name of the package
        @param filePath
           path of metadata json file
        """
            ...
        def validateMetadata(self) -> ValidateObjResult:
        """
        Optional member function to enable custom validation logic.
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
        def fromString(cls, s: str) -> Union[Js.Runtime]:
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
        def forName(cls, name: str, failIfMissing: bool=None) -> Union[Js.Runtime]:
        """
        @return C3 type system implementation language runtime by name
        NOTE: In a Linux environment, this method will simply return the corresponding runtime seeded in metadata.
              Because seeded runtimes have Linux resolved libraries, in a Mac environment, the returned runtime is the
              result of calling {@link Action.Engine#runtimeWithEngineLibraries} so that we add the engine specific libraries
              to the runtime for resolution. For example, forName("py-data-client-ipython") will return the result of merging
              runtimes "py-data" and "py-ipython".
        """
            ...
        def language(self) -> str:
        """
        @return The language used by {@link Action}s executed in this runtime
        """
            ...
        def runtimePath(self) -> str:
        """
        Returns the path to the runtime.
        """
            ...
        def resolutionPath(self) -> str:
        """
        Returns the path to the runtime when the runtime is being resolved
        """
            ...
        def envVars(self, context: ImplLanguage.Runtime.Context, isRunning: bool=None) -> Union[Array[str]]:
        """
        @return a list of string where each string is of the "my_envar=my_value" where "my_envar" is the name of the
        env var and "my_value" is its value. If isRunning is true the list contains runEnvVars else installEnvVars.
        """
            ...
        def allRunEnvVars(self) -> Union[Array[ImplLanguage.Runtime.EnvVar]]:
        """
        Returns all the runEnvVars
        """
            ...
        def allInstallEnvVars(self) -> Union[Array[ImplLanguage.Runtime.EnvVar]]:
        """
        Returns all the installEnvVars
        """
            ...
        def actionEngine(self) -> Action.Engine:
        """
        @return the {@Link Action.Engine} whose {@Link Action.Engine#installedRuntime} is this resolved runtime. Note
        there is always exactly one such {@Link Action.Engine}.
        """
            ...
    
    class Node(Js):
        """
        Implementation of JavaScript using delgation to Node.js in a separate process.
        
        @see https://nodejs.org/en
        
        @remarks this represents a made instance of Js.Node
        """
        
        name: Optional[str]
        """
        The unique and required name of this instance.
        """

        JAVA: Optional[str]=None
        """
        Java source.
        @see https://en.wikipedia.org/wiki/Java_(programming_language)
        """

        JAVASCRIPT: Optional[str]=None
        """
        JavaScript source (any ECMAScript version).
        @see https://en.wikipedia.org/wiki/JavaScript
        """

        PYTHON: Optional[str]=None
        """
        Python source.
        @see https://en.wikipedia.org/wiki/Python_(programming_language)
        """

        TYPESCRIPT: Optional[str]=None
        """
        TypeScript source.
        @see https://www.typescriptlang.org/docs/handbook/basic-types.html
        """

        TSX: Optional[str]=None
        """
        TypeScript/React source.
        @see https://www.typescriptlang.org/docs/handbook/jsx.html
        """
        def __init__(self, name: Optional[str]=None, JAVA: Optional[str]=None, JAVASCRIPT: Optional[str]=None, PYTHON: Optional[str]=None, TYPESCRIPT: Optional[str]=None, TSX: Optional[str]=None) -> None: ...

        @overload
        def toJson(self) -> any:
        """
        Convert the internal object representation to a JSON object.
        
        @return JSON object representation
        
        @see #fromJson
        """
            ...
        @overload
        def toJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
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
        @overload
        def toTypedJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toJsonString(self) -> str:
            ...
        @overload
        def toJsonString(self, pretty: bool) -> str:
        """
        Convert the internal object representation to a serialized JSON string.
        
        @return JSON object as string
        """
            ...
        @overload
        def toTypedJsonString(self) -> str:
            ...
        @overload
        def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
            ...
        @overload
        def toJsString(self) -> str:
            ...
        @overload
        def toJsString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized JavaScript object literal.
        
        @return JavaScript object literal string
        """
            ...
        @overload
        def toXmlString(self) -> str:
            ...
        @overload
        def toXmlString(self, withType: bool) -> str:
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
        def fromJson(cls, json: any) -> Union[Js.Node]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJson
        """
            ...
        @classmethod
        def fromJsonString(cls, json: str) -> Union[Js.Node]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJsonString
        """
            ...
        @classmethod
        def fromXmlString(cls, xml: str) -> Union[Js.Node]:
        """
        Load the XML-based representation and reconstruct the corresponding object.
        
        fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
        may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
        isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
        will return an instance of the correct type.
        
        @see #toXmlString
        """
            ...
        @classmethod
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Js.Node]:
        """
        Load from contentType representation and reconstruct the corresponding object.
        
        fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
        (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
        will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
        type and will return an instance of the correct type.
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
        def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
        """
        Measures retained memory by this instance.
        
        @param deep
               if true and this instance contains references to other objects also measures memory retained by those
        @param allMeasured
               if set then will skip instances that are in the set and will add instances that where measured by this call
        @return retained memory in bytes for this instances
        """
            ...
        def type(self) -> Type:
        """
        C3 Type of this instance.
        """
            ...
        def replaceType(self, old: Type, new: Type) -> Js.Node:
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
        def instanceOf(self, typeName: str) -> bool:
        """
        Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        """
            ...
        @overload
        def instanceOf(self, type: Type) -> bool:
        """
        Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        
        @see ValueType#isA
        """
            ...
        def isEmptyObj(self) -> bool:
        """
        Whether all the fields of this instance are empty.
        """
            ...
        def isSame(self, other: Obj) -> bool:
        """
        Whether the specified instance represents exactly the same object as this instance.
        """
            ...
        @overload
        def isFieldSet(self, field: str) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldSet(self, field: FieldType) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldMissing(self, field: str) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def isFieldMissing(self, field: FieldType) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        """
            ...
        @overload
        def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
        the obj.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        @return value for the given field
        """
            ...
        def fieldValues(self) -> Union[Array[FieldValue]]:
        """
        Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
        """
        Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
        Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
        #dataFieldTypes
        """
            ...
        def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
        """
        Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
        """
        Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldNames(self) -> Union[Array[str]]:
        """
        Returns all data field names including those whose values are empty. Array is ordered by
        field ordinal.
        """
            ...
        def unsetFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
        field ordinal.
        """
            ...
        def missingFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
        field ordinal.
        """
            ...
        @overload
        def at(self, ordinal: int) -> Union[T]:
        """
        Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
        
        @param ordinal
                Integer ordinal of the field in the parent type
        @return value of field at ordinal
        """
            ...
        @overload
        def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
        """
        Return value for the given serialized expression
        
        @param expr
                Serialized expression to obtain the value in the given Obj
        @param failIfNotValid
                If set, fails if not a valid expression
        @return value obtained as a result of expression evaluation
        """
            ...
        def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
        """
        Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
        `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
        that it also handles `null`. If path contains any collections then only first element will be traversed,
        unless the collection index is specified in the path.
        
        If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return the field or null
        """
            ...
        def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
        """
        Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
        traversals, unless the collection index is specified in the path.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return fields as a flat list
        
        @see #fieldValueAtPath
        """
            ...
        @overload
        def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        @overload
        def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply
        """
            ...
        def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
        """
        Perform an action for each {@link isFieldSet set} field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
        """
        Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
        on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply; stop if this `action` returns `false
        @return `true` if iteration was not aborted by lambda i.e. it saw all field values
        """
            ...
        @overload
        def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        @overload
        def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type while processing action returns
        `true`.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance; stops processing if return `false`
        @return `true` if iteration was not aborted by lambda i.e. it saw all refs
        """
            ...
        def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
        """
            ...
        def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
        processing action returns `true`.
        """
            ...
        @overload
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js.Node:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js.Node:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js.Node]:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the asynchronous `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that fields
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js.Node]:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        asynchronous `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Js.Node:
        """
        Result of this function call is a copy of current instance with specified field value replaced based on result of
        the `mapper` invocation.
        @param field
                  field being mapped
        @param includeEmpty
                  if set, invokes mapper for fields with empty value
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js.Node:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js.Node:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param mapper
                  function to be executed for each pair of field type and Obj instance for producing new reference value
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` will be `null`.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
        result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
        """
        Evaluates given projection expression over this instance.
        """
            ...
        @overload
        def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
        """
        Evaluates given projection over this instance and returns results as json.
        """
            ...
        @overload
        def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
        """
        Evaluates given projection over this instance and returns results as instance of the new Obj.
        """
            ...
        @overload
        def validateObj(self) -> Js.Node:
        """
        Populates all missing default values and throws error if any constraint is violated.
        """
            ...
        @overload
        def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
        """
        Validate that the Obj fields are set according to all the required rules.
        """
            ...
        @overload
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Js.Node:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  name of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        @overload
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Js.Node:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Js.Node:
        """
        Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
        defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
        
        @param fields
                  map of field names/values
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @return new Obj
        """
            ...
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Js.Node:
        """
        Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
        If you would like to #unsetField, you should call #withoutFieldAtPath instead.
        
        Immutable objects may return the same instance if the field being set does not actually represent a
        change to the existing object.
        
        @param path
                  path to set value at
        @param value
                  value to set
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @param doNotCreateIfMissing
                  true indicates that any empty reference along the path will not set the value
        @return new Obj
        """
            ...
        def withoutFieldAtPath(self, path: str) -> Js.Node:
        """
        Builds a new Obj without the specified path field.
        
        Immutable objects may return the same instance if the field being removed does not actually represent a
        change to the existing object.
        
        @param path
                  path for field to remove
        @return new Obj
        
        @see #withFieldAtPath
        @see #withoutField
        """
            ...
        @overload
        def withoutField(self, field: str) -> Js.Node:
        """
        Builds a new Obj, removing the field with the provided name.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        @overload
        def withoutField(self, field: FieldType) -> Js.Node:
        """
        Builds a new Obj, removing the field with the provided field type.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        def withoutFields(self, fields: Array[str]) -> Js.Node:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Js.Node:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Js.Node:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Js.Node:
        """
        Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
        calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
        {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
        fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
        fields that have already been set.
        
        {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
        As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
        
        @param includeEmptyRefsWithDefaults
                  it `true` then missing / empty child references that have fields with defaults will also be instantiated
        @param defaultFields
                  If not empty, a list of default field paths to populate.  Any default fields not specified in the
                  array will be ignored.
        @return new Obj
        
        @see #defaultField
        @see FieldType#defaultValueConst
        @see FieldType#defaultValue
        """
            ...
        @overload
        def defaultField(self, field: str) -> Js.Node:
        """
        Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                name of the field to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def defaultField(self, field: FieldType) -> Js.Node:
        """
        Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                field type to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def unsetField(self, field: str) -> Js.Node:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                name of the field to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def unsetField(self, field: FieldType) -> Js.Node:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                field type to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def removeField(self, field: str) -> Js.Node:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                name of the field to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def removeField(self, field: FieldType) -> Js.Node:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                field type to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Js.Node:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
        
        @param other
                  object
        @param fieldPathMergeSpec
                  mapping of fields of the object to the respective merge annotations
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Js.Node:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence.
        
        @param other
                  object
        @param otherFieldsFilter
                  only fields of otherFieldsFilter type from other are merged into this obj.
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Js.Node:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Js.Node:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
        traverse child reference and collection fields.
        """
            ...
        def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
        """
        Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
        Fields that non null in only one of this and other will be in the resulting Obj without change.
        """
            ...
        def mergeJson(self, json: any) -> Js.Node:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Js.Node:
        """
        Merge the obj references within the current obj
        @param deep
               If set, traverses the reference fields within the obj as well for a deep merge
        @param objKey
               lambda specifying how to obtain the key for the Obj while determining which Objs to merge
        @param filter
               Field paths that need to be filtered from this merge
        @return Obj with child references merged
        """
            ...
        def sumObj(self, other: Obj, deep: bool=None) -> Js.Node:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Js.Node]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Js.Node]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Js.Node]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Js.Node]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Js.Node]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Js.Node]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Js.Node]]:
        """
        Create a map with the given key type and elements of this type.
        """
            ...
        @classmethod
        def myReferenceType(cls) -> ReferenceType:
            ...
        @classmethod
        def myMapTypeOf(cls, keyType: ValueType) -> MapType:
            ...
        @classmethod
        def myMapType(cls) -> MapType:
            ...
        @classmethod
        def myArrayType(cls) -> ArrayType:
            ...
        @classmethod
        def mySetType(cls) -> SetType:
            ...
        @classmethod
        def myStreamType(cls) -> StreamType:
            ...
        def toBuilder(self) -> ObjBuilder[Js.Node]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Js.Node]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Js.Node:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Js.Node:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Js.Node:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Js.Node:
        """
        Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                   populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Js.Node:
        """
        Construct an instance from provided fields
        @param fields
                   Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                   field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                   to Panda.make()
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                   -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                   the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
        
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Any, withDefaults: bool=None) -> Js.Node:
        """
        Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
        
        ```js
        User.make({
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        
        Obj.make({
          type: 'User',
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        ```
        
        ```py
        c3.User.make({
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.Obj.make({
          "type": 'User',
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.User(email='joe@smith.com', realName='Joe Smith')
        
        c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
        ```
        
        Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
        specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
        such as {@link Ann.Ser} do not apply.
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, s: str) -> Union[Js.Node]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Js.Node:
        """
        Construct an instance of this type from provided instance of a subtype or a "duck type".
        """
            ...
        def remakeAs(self, type: Type) -> O:
        """
        Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
        converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
        could be costly if types have different value types for same fields.
        
        @param type
                Type of new obj to return
        @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                converted and copied to it
        """
            ...
        @classmethod
        def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
        """
        Optional override that will be called every time instance of this type is created.
        
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        def afterMake(self) -> Js.Node:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Js.Node:
        """
        Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
        every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
        Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
        
        @see ValueType#defaultEmptyValue
        """
            ...
        def toData(self) -> Union[Data]:
        """
        Represent the current obj instance as {@link Data}
        """
            ...
        @classmethod
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Js.Node]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Js.Node:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def keyFieldType(cls) -> FieldType:
        """
        @return key field type.
        """
            ...
        def keyFieldValue(self) -> Union[str]:
        """
        @return key field value.
        """
            ...
        def singletonMap(self) -> Map[str, WithKey]:
        """
        Build a map of the correct type with a single element which is this instance and key field value as key.
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
        def fromString(cls, s: str) -> Union[Js.Node]:
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
        def forName(cls, name: str, failIfMissing: bool=None) -> Union[Js.Node]:
        """
        Return the matching ImplLanguage for the specified string or null. This is case-insensitive and handles common
        abbreviations.
        """
            ...
        @classmethod
        def inst(cls) -> Js.Node:
        """
        @return the one and only instance to be used when member functions are called on this type.
        """
            ...
        @classmethod
        def cachedInst(cls) -> Union[Js.Node]:
        """
        @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
        """
            ...
        def supportsOverloads(self) -> bool:
        """
        @return `true` if underlying language supports overloaded functions
        """
            ...
        def versions(self) -> Array[str]:
        """
        Language versions supported for this language. Note that this is not necessarily a semantic version.
        """
            ...
        @classmethod
        def nameOf(cls, lang: str, failIfInvalid: bool=None) -> Union[str]:
        """
        Return the official name of matching ImplLanguage for the specified string or null. This is case-insensitive and
        handles common abbreviations.
        """
            ...
        def dslName(self) -> Union[str]:
        """
        @return name of this language as used in method declaration (if any)
        """
            ...
        @classmethod
        def dslNameOf(cls, lang: str) -> Union[str]:
        """
        @return name of the specified language as used in method declaration (if any)
        """
            ...
        def fileExt(self) -> str:
        """
        Return the canonical file extension for one of the language enum values.
        
        @return file extension (including dot)
        """
            ...
        @classmethod
        def fileExtOf(cls, lang: str) -> str:
        """
        Return the canonical file extension for the specified language enum value.
        
        @return file extension (including dot)
        """
            ...
        def mediaType(self) -> str:
        """
        Return the canonical content type extension for one of the language enum values.
        
        @return content type
        """
            ...
        def functions(self, source: str, failIfInvalid: bool=None) -> Union[Array[str]]:
        """
        Extract the function names from the script that could implement type methods. This means named top-level
        functions which could match up with type methods names.
        
        Normally a script that cannot be parsed will fail silently, returning an empty list, but passing true to
        failIfInvalid will cause an appropriate error to be thrown instead.
        
        @param source code to parse
        @param failIfInvalid throw an exception the script has a syntax error
        """
            ...
        def keywords(self) -> Union[Array[str]]:
        """
         Return the list of keywords for a given language. This is the list of words used by the implementation of a
         programming language. If the name of a field or method conflicts with one of these keywords, the field or method
         can be accessed by appending "_" to the end of its name. For example:
        
         ```py
            with open("foo.txt", "w") as f: # Note that "with" is a Python keyword
                f.write("bar")
            inst = c3.ArrayType.ofBool().emptyArray()
            # inst = inst.with(True) <- this would fail as "with" is a keyword in Python
            inst = inst.with_(True) # Works!
            c3.Py.keywords().contains("with") # returns True
        ```
        """
            ...
        @classmethod
        def forFileExt(cls, ext: str, failIfNone: bool=None) -> Union[Js.Node]:
        """
        Return the matching language for the specified extension.
        
        @param ext extension string to match
        @param failIfNone if true, throw error instead of returning null
        @return matched enum value
        """
            ...
        def isJava(self) -> bool:
        """
        @return `true` if this is Java implementation language
        """
            ...
        def isJs(self) -> bool:
        """
        @return `true` if this is JavaScript implementation language
        """
            ...
        def isPy(self) -> bool:
        """
        @return `true` if this is Python implementation language
        """
            ...
        @classmethod
        def java(cls) -> ImplLanguage:
        """
        @return implementation language for Java
        """
            ...
        @classmethod
        def js(cls) -> ImplLanguage:
        """
        @return implementation language for JavaScript
        """
            ...
        @classmethod
        def py(cls) -> ImplLanguage:
        """
        @return implementation language for Python
        """
            ...
        @classmethod
        def all(cls) -> Array[ImplLanguage]:
        """
        @return all implementation languages.
        """
            ...
        @classmethod
        def allNames(cls) -> Array[str]:
        """
        @return all implementation languages.
        """
            ...
        @classmethod
        def allFileExts(cls) -> Union[Array[str]]:
        """
        @return file extensions for all supported ImplLanguages.
        """
            ...
        @classmethod
        def allScripting(cls) -> Array[ImplLanguage]:
        """
        @return scripting language instances (implementation languages other than Java)
        
        @see #all
        """
            ...
        @classmethod
        def allScriptingNames(cls) -> Array[str]:
        """
        @return scripting language names (implementation languages other than Java)
        
        @see #allNames
        """
            ...
        @classmethod
        def hasJava(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for Java
        """
            ...
        @classmethod
        def hasJs(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for JavaScript
        """
            ...
        @classmethod
        def hasPy(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for Python
        """
            ...
        @classmethod
        def canRunActionRequirements(cls, find: str, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if the provided {@Link Action.Engine} can run any of provided {@Link Action.Requirement actionRequirements}. If the parameter actionRequirements is
        empty we assume it has only one {@Link Action.Requirement} "java".
        """
            ...
        @classmethod
        def hasLang(cls, find: str, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} use the specified language
        """
            ...
        @classmethod
        def isScriptLang(cls, lang: str) -> bool:
        """
        @return `true` if the provided language is a scripting language.
        
        @see #allScripting
        """
            ...
        @classmethod
        def hasScript(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} are a scripting language
        
        @see #allScripting
        """
            ...
        @classmethod
        def filterLang(cls, find: str, actionRequirements: Array[str]) -> Union[Array[str]]:
        """
        @return the requirements from the list that use the specified language
        """
            ...
        def installRuntime(self, runtime: ImplLanguage.ResolvedRuntime) -> None:
        """
        Installs the specified runtime, deleting potentially stale (cache-dirty) installations already present.
        """
            ...
        def resolveRuntime(self, runtime: ImplLanguage.Runtime, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Resolve the specified runtime, {@Link ImplLanguage.RuntimeLocation locations}, and {@Link ImplLanguage.Executor executors} combinations.
        
        @param runtime
                   The runtime to resolve.
        @param location
                   If provided, runtime will be resolved for the specific {@Link ImplLanguage.RuntimeLocation location}. If not
                   provided runtime is resolved against all {@Link ImplLanguage.RuntimeLocation locations}.
        @param executors
                   If provided, the runtime will be resolved only for {@Link ImplLanguage.Executor executors} specified in the parameter executors. If not
                   set runtime is resolved against all {@Link ImplLanguage.Executor executors}.
        @param doNotValidate
                   Runtime resolution typically involves validation to confirm that the resolved runtimes satisfy the
                   runtime. In some cases, it may be desirable or necessary to disable this validation. For
                   example, if one of the packages has an installation name that does not match its 'importable' name.
        @return A named tuple with fields `seededRuntimes` and `errors`. The 'seededRuntimes' field is a map with {@Link Action.Engine} as the key and its {@Link Action.Engine#installedRuntime resolved runtime}
        as the value. The 'errors' field is a map with {@Link Action.Engine} as the key and the error message as value if the runtime resolution failed for that {@Link Action.Engine}.
        """
            ...
        @overload
        def upsertRuntime(self, runtime: ImplLanguage.Runtime, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        The api to upsert a runtime. After a runtime is successfully upserted it can be used as a part of {@Link Action.Requirement}
        in method claims and {@Link Lambda lambdas}.
        
        @param runtime
                   The runtime to upsert. Once a runtime is successfully upserted it is available for use in {@Link Action.Requirement}
                   with any valid combination of {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors} that support
                   custom runtimes. The user can also upsert a runtime for specific locations and executors and then it can be used with only those
                   combination of locations and executors.
        @param location
                   This optional parameter allows user to upsert a runtime for a specific {@Link ImplLanguage.RuntimeLocation location}. If not provided a successfully upserted runtime can be used
                   with any location in an {@Link Action.Requirement}. For instance, calling upsert on a runtime "py-foo" with location set as "server" will allow users to use that runtime only with server.
                   Any method claim like "py-foo-client" will be invalid and throw metadata error.
        @param executor
                   This optional parameter allows user to upsert a runtime for some array of {@Link ImplLanguage.Executor executors}. If not provided a successfully upserted runtime can be used
                   with any {@Link ImplLanguage.Executor executor} that supports custom runtimes. For instance, calling upsert on a runtime "py-foo" with executor
                   set as ["ipython"] will allow users to use that runtime only with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}. A method claim like
                   "py-foo-server" will be invalid and throw metadata error as {@Link ImplLanguage.Executor#IPYTHON ipython} is an executor for client side python. Similarly,
                   the method claim "py-foo-py4j" will be invalid as "py-foo" can only be used with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}.
        @param doNotValidate
                   Upsertion of runtime typically involves validation to confirm that the installed runtimes satisfy the
                   runtime which was to be upserted. In some cases, it may be desirable or necessary to disable this validation. For
                   example, if one of the packages has an installation name that does not match its 'importable' name.
        
        @return A named tuple with fields 'seededRuntimes' and 'errors'. The 'seededRuntimes' field will provide detailed information
                about the the libraries that will be installed when using this runtime with various {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}. It is a map with {@Link Action.Engine} as key and its {@Link Action.Engine#installedRuntime} as value.
                The 'errors' field is a map with {@Link Action.Engine} as key and error message as value if the runtime upsertion failed for that particular {@Link Action.Engine}. To check if upsertion is completely successfully it is enough to check that 'errors' field is an empty map.
                If the upsertion was not successful or partially successful `errors` field will give detailed information about why upsertion failed for all/some
                requested {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}.
        """
            ...
        @overload
        def upsertRuntime(self, runtime: ImplLanguage.Runtime, executors: Array[str]=None, doNotValidate: bool=None) -> :
            ...
        def upsertRuntimes(self, runtimes: Array[ImplLanguage.Runtime], location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts each runtime in {{runtimes}} via {@link upsertRuntime}. Ancestor runtimes will be upserted prior to their
        descendants. If resolution fails for a parent runtime, attempts to resolve any of its descendants will be skipped.
        
        All arguments and return value have the same semantics as {@link upsertRuntime}.
        """
            ...
        def upsertRuntimesAndDependents(self, changedRuntimes: Array[ImplLanguage.Runtime], location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts each runtime in {{changedRuntimes}} via {@link upsertRuntimes}. Also upserts runtimes
        for any runtime which {@link ImplLanguage.Runtime#isDescendantOf is a descendant of} a runtime in
        {{changedRuntimes}}. Ancestor runtimes will be upserted prior to their descendants.
        
        All arguments and return value have the same semantic as {@link upsertRuntime}
        """
            ...
        def upsertPkgRuntimes(self, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts all runtimes declared in the current {@link Pkg} via {@link upsertRuntimes}.
        
        All arguments and return value have the same semantic as {@link upsertRuntime}
        """
            ...
        def uninstallRuntime(self, runtimeName: str) -> None:
        """
        Uninstalls the specified runtime if installed.
        """
            ...
        def libraryManager(self, runtimeName: str=None) -> LibraryManager[LibraryManager.Config, ImplLanguage.ResolvedRuntime]:
        """
        Library manager for this language and provided runtime.
        """
            ...
        def executors(self) -> Union[Array[str]]:
        """
        All valid executors for this language
        """
            ...
        @classmethod
        def regexPattern(cls) -> str:
        """
        Regular expression that matches all supported languages
        """
            ...
        @classmethod
        def methodStubs(cls, meta: TypeMeta, delegate: bool=None) -> Union[str]:
        """
        @return the method stubs for declared or overridden methods in given typemeta.
        
        @param meta
                  the type to generate stubs for
        @param delegate
                  use super to call Java instead of throwing an error
        """
            ...
        @classmethod
        def preamble(cls) -> Union[str]:
        """
        @return a block prepended to all generated files
        """
            ...
        @classmethod
        def stub(cls, type: TypeMeta, methodName: str, isMember: bool=None, fixed: Array[str]=None, requiredCount: int=None, remaining: str=None, delegate: bool=None) -> Union[str]:
        """
        Build a stub function declaration as multiple lines. All lines, including the last one, should end with newlines.
        
        @param type
               the type
        @param methodName
               name of the method
        @param isMember
               if this is a member method
        @param fixed
               the parameters that are the same in all overloads
        @param requiredCount
               the number of the sharedOverloadParams parameters that must be specified by the caller
        @param remaining
               the name for any remaining parameters that vary by overload or are varargs
        @param delegate
               use super to call Java instead of throwing an error
        @return stub function declaration
        """
            ...
        @classmethod
        def postamble(cls) -> Union[str]:
        """
        @return a block appended to all generated files
        """
            ...
        @classmethod
        def comment(cls) -> str:
        """
        @return the single-line comment prefix
        """
            ...
        @classmethod
        def language(cls) -> str:
        """
        @return the language as listed in {@link ImplLanguage}.
        """
            ...
        @classmethod
        def toArray(cls, v: Any, type: ArrayType, failIfInvalid: bool=None) -> Union[Array[E]]:
        """
        Build a made array of the specified type from the specified native array or list. The elements are made by
        making them as the element type of the specified array type. The made array corresponds to the specified
        array type.
        """
            ...
        @classmethod
        def toArrayOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[Any]]:
        """
        Build a made array of `any` from the specified native array or list. The elements are made by guessing the type.
        """
            ...
        @classmethod
        def toArrayOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[float]]:
        """
        Build a made array of `double` from the specified native array or list. The elements are made as necessary.
        
        @see ArrayType#ofDbl
        """
            ...
        @classmethod
        def toArrayOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[int]]:
        """
        Build a made array of `int` from the specified native array or list. The elements are made as necessary.
        
        @see ArrayType#ofInt
        """
            ...
        @classmethod
        def toArrayOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[str]]:
        """
        Build a made array of `string` from the specified native array or list. The elements are made as necessary.
        
        @see ArrayType#ofStr
        """
            ...
        @classmethod
        def toMap(cls, v: Any, type: MapType, failIfInvalid: bool=None) -> Union[Map[K, V]]:
        """
        Build a made map of the specified type from the specified native map or dictionary. The keys and values are
        made by making them as the element type of the specified map type. The made map corresponds to the specified
        map type.
        """
            ...
        @classmethod
        def toMapOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[Any, Any]]:
        """
        Build a made map of `any` from the specified native map or dictionary. The keys and values are made by
        guessing the types.
        """
            ...
        @classmethod
        def toMapOfStrToAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, Any]]:
        """
        Build a made map of `string` to `any` from the specified native map or dictionary. The values are made by
        guessing the types.
        """
            ...
        @classmethod
        def toMapOfStrToDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, float]]:
        """
        Build a made map of `double` from the specified native map or dictionary. The keys and values are made as
        necessary.
        
        @see MapType#ofStrToDbl
        """
            ...
        @classmethod
        def toMapOfStrToInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, int]]:
        """
        Build a made map of `int` from the specified native map or dictionary. The keys and values are made as
        necessary.
        
        @see MapType#ofStrToInt
        """
            ...
        @classmethod
        def toMapOfStrToStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, str]]:
        """
        Build a made map of `string` from the specified native map or dictionary. The keys and values are made as
        necessary.
        
        @see MapType#ofStrToStr
        """
            ...
        @classmethod
        def toObj(cls, v: Any, type: Type, failIfInvalid: bool=None) -> Union[O]:
        """
        Build a made instance of a type. Note that this might not actually be an Obj if the specified type does not mixin
        Obj. If the value specifies a type more specific that than given the more specific type is used. If it specifies
        an unrelated type, null is returned or an error is thrown.
        
        If the type is an Obj, then a field initializer map (either made or unmade) or a JSON object may be specified.
        
        If the type mixes {@link StringSerializable}, then the string representation may be specified.
        
        @see Obj#make
        """
            ...
        @classmethod
        def toSet(cls, v: Any, type: SetType, failIfInvalid: bool=None) -> Union[Set[E]]:
        """
        Build a made set of the specified type from the specified native array or list. The elements are made by
        making them as the element type of the specified set type. The made set corresponds to the specified
        set type.
        """
            ...
        @classmethod
        def toSetOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[float]]:
        """
        Build a made set of `double` from the specified native array or list. The elements are made as necessary.
        
        @see SetType#ofDbl
        """
            ...
        @classmethod
        def toSetOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[int]]:
        """
        Build a made set of `int` from the specified native array or list. The elements are made as necessary.
        
        @see SetType#ofInt
        """
            ...
        @classmethod
        def toSetOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[str]]:
        """
        Build a made set of `string` from the specified native array or list. The elements are made as necessary.
        
        @see SetType#ofStr
        """
            ...
        @classmethod
        def toStream(cls, v: Any, type: StreamType, failIfInvalid: bool=None) -> Union[Stream[E]]:
        """
        Build a made stream of the specified type from the specified native collection or iterator. The elements are made
        by making them as the element type of the specified stream type. The made stream corresponds to the specified
        stream type.
        """
            ...
        @classmethod
        def toStreamOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[Any]]:
        """
        Build a made stream of `any` from the specified native collection or iterator. The elements are made by guessing
        the type.
        """
            ...
        @classmethod
        def toStreamOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[float]]:
        """
        Build a made stream of `double` from the specified native collection or iterator. The elements are made as
        necessary.
        """
            ...
        @classmethod
        def toStreamOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[int]]:
        """
        Build a made stream of `int` from the specified native collection or iterator. The elements are made as necessary.
        """
            ...
        @classmethod
        def toStreamOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[str]]:
        """
        Build a made stream of `string` from the specified native collection or iterator. The elements are made as
        necessary.
        """
            ...
        @classmethod
        def toValue(cls, v: Any, type: ValueType, failIfInvalid: bool=None) -> Union[Any]:
        """
        Construct a made value for the specified value type.
        
        @see ValueType#makeValue
        """
            ...
        @classmethod
        def toNativeObject(cls, o: Any) -> Union[Any]:
        """
        Returns a language-native key-value object for scripting languages: JavaScript Object or Python dict.
        The only supported input types are C3 `json` values and the language native equivalents (for which `toNativeObject`
        is a no-op).
        """
            ...
        @overload
        @classmethod
        def exec(cls, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute arbitrary source code in Rhino engine (js-server {@link ImplLanguage.Runtime}).
        
        @param src
               arbitrary code to execute
        @param args
               if code is a function declaration then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @overload
        @classmethod
        def exec(cls, lambda_: Lambda[Callable[[Union[Array[Any]]], Union[T]]], *args: Array[Any]) -> Union[T]:
        """
        Execute arbitrary lambda's code in Rhino engine (js-server {@link ImplLanguage.Runtime}). The implementation
        language specified in the lambda will be ignored; it will always be executed using Rhino.
        
        @param lambda
               boxed lambda to execute
        @param args
               invoke the lambda with provided arguments
        @return result of the execution
        """
            ...
        @overload
        @classmethod
        def exec(cls, runtime: ImplLanguage.Runtime, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute arbitrary source code of the implementation language of this action engine.
        
        @param runtime
               implementation language runtime to use
        @param src
               arbitrary code to execute
        @param args
               if code is a function declaration then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @overload
        @classmethod
        def exec(cls, typeSystem: bool, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute code in Node.js engine (js-server-node {@link ImplLanguage.Runtime}).
        
        @param typeSystem
               if true load the type system as if `@nodejs(typeSystem=true)` was specified on the method claim
        @param src
               string of JavaScript code to execute
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @overload
        @classmethod
        def exec(cls, runtime: ImplLanguage.Runtime, typeSystem: bool, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute code in Node.js engine (specified runtime).
        
        @param runtime
               implementation language runtime to use
        @param typeSystem
               if true load the type system as if `@nodejs(typeSystem=true)` was specified on the method claim
        @param src
               string of JavaScript code to execute
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def execEs(cls, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute EcmaScript-compatible code in Rhino engine (js-server {@link ImplLanguage.Runtime})
        
        @param src
               string of EcmaScript-compatible code written in ES6+ syntax to exec
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def execTs(cls, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute TypeScript code in Rhino engine (js-server {@link ImplLanguage.Runtime})
        
        @param src
               string of TypeScript code to exec
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def execRhino(cls, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute ES5 code in Rhino engine (js-server {@link ImplLanguage.Runtime}), without transpilation.
        
        @param src
               string of code written in ES5 syntax to exec
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def dataToSource(cls, data: T, src: T=None) -> Union[str]:
        """
        Build the canonical JavaScript source code representation of the provided C3 type instance.  After running the
        produced JavaScript source code, the `data` variable in JavaScript should point to the instance.
        
        Simple example of the returned JavaScript source code that does not use `$src` variable
        (See {@link #sourceToData}):
        ```js
        data = { firstName: 'John', lastName: 'Doe' }
        ```
        
        One use of this method is for saving a serialized instance to an application package.
        To support overriding configs and remixing metadata / seed data, one may want to create more than one metadata
        / seed / config file for the same id or name.  The caller may supply a `src` instance so that the output captures
        the differences between this instance and the `src` instance.
        
        If we call this API like:
        ```js
        var src = User.make({ firstName: "John", lastName: "Doe" })
        Js.dataToSource(src.withEmail('john@doe.com'), src)
        ```
        the output JavaScript source code could be something like:
        ```js
        data = { ...$src, email: 'john@doe.com' }
        ```
        
        @param data
           C3 type instance to serialize to JavaScript source code.
        @param src
            If provided, the JavaScript source code will only contain field changes as compared to `src`.  The `src`
            instance is typically the config / metadata / seed instance that we are overriding or remixing, so that
            the output only captures the diff between the current instance and the `src` instance.
        @return a JavaScript source code representation of this instance.  One use of this source code is to put in `*.js`
            file as seed data (see {@link SeedData}).
        
        @see #sourceToData
        @see JsSerializable
        """
            ...
        @classmethod
        def sourceToData(cls, type: Type, js: str, src: T=None) -> Union[T]:
        """
        Parse and evaluate the JavaScript source code representation and reconstruct the corresponding instance.
        
        @param type
            C3 type of the instance to be created.
        @param js
            JavaScript source code used to reconstruct the C3 type instance.
        @param src
            If provided, the JavaScript source code will have the `$src` variable in scope set to this parameter during its
            execution.  The JavaScript source code should merge or override fields on the instance referenced by the
            `$src` variable to return the new instance.
        @return an instance created from the source code representation.
        
        @see #dataToSource
        @see JsSerializable
        """
            ...
        @classmethod
        def rhinoVersion(cls) -> str:
        """
        Get the version of Rhino used for executing JavaScript within the server.
        """
            ...
        @classmethod
        def transpile(cls, code: str, fileName: str=None, failIfInvalid: bool=None) -> Union[str]:
        """
        Convert modern JavaScript code to ES5 for compatibility with Rhino _if_ the specified code cannot be parsed by
        Rhino as-is. Otherwise, the original code is returned.
        
        Transpilation may remove comments and whitespace, meaning that a script with no actual expressions or statements
        may transpile to nothing.
        
        If neither Rhino nor the transpiler can parse the code, the original is returned (unless `failIfInvalid` is true).
        
        @param code
               ES.Next JavaScript source
        @param fileName
               if specified, will be included in error messages
        @param failIfInvalid
               throw an error if the script cannot be parsed by either Rhino or the transpiler
        @return ES5 JavaScript result
        """
            ...
        @classmethod
        def dispatch(cls, typ: Type, method: str, *args: Array[Any], ths: Any=None) -> Union[Any]:
            ...
        @classmethod
        def _execBare(cls, src: str, args: Array[Any]=None) -> Union[T]:
        """
        Execute code in Node.js engine with _no type system loaded_.
        
        @param src
               string of JavaScript code to execute
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def _execTypeSystem(cls, src: str, args: Array[Any]=None) -> Union[T]:
        """
        Execute code in Node.js engine with the type system loaded.
        
        @param src
               string of JavaScript code to execute
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
    
    class Rhino(Js):
        """
        Implementation of JavaScript using the Rhino implementation in Java.
        
        @see https://github.com/mozilla/rhino
        
        @remarks this represents a made instance of Js.Rhino
        """
        
        name: Optional[str]
        """
        The unique and required name of this instance.
        """

        JAVA: Optional[str]=None
        """
        Java source.
        @see https://en.wikipedia.org/wiki/Java_(programming_language)
        """

        JAVASCRIPT: Optional[str]=None
        """
        JavaScript source (any ECMAScript version).
        @see https://en.wikipedia.org/wiki/JavaScript
        """

        PYTHON: Optional[str]=None
        """
        Python source.
        @see https://en.wikipedia.org/wiki/Python_(programming_language)
        """

        TYPESCRIPT: Optional[str]=None
        """
        TypeScript source.
        @see https://www.typescriptlang.org/docs/handbook/basic-types.html
        """

        TSX: Optional[str]=None
        """
        TypeScript/React source.
        @see https://www.typescriptlang.org/docs/handbook/jsx.html
        """
        def __init__(self, name: Optional[str]=None, JAVA: Optional[str]=None, JAVASCRIPT: Optional[str]=None, PYTHON: Optional[str]=None, TYPESCRIPT: Optional[str]=None, TSX: Optional[str]=None) -> None: ...

        @overload
        def toJson(self) -> any:
        """
        Convert the internal object representation to a JSON object.
        
        @return JSON object representation
        
        @see #fromJson
        """
            ...
        @overload
        def toJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
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
        @overload
        def toTypedJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toJsonString(self) -> str:
            ...
        @overload
        def toJsonString(self, pretty: bool) -> str:
        """
        Convert the internal object representation to a serialized JSON string.
        
        @return JSON object as string
        """
            ...
        @overload
        def toTypedJsonString(self) -> str:
            ...
        @overload
        def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
            ...
        @overload
        def toJsString(self) -> str:
            ...
        @overload
        def toJsString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized JavaScript object literal.
        
        @return JavaScript object literal string
        """
            ...
        @overload
        def toXmlString(self) -> str:
            ...
        @overload
        def toXmlString(self, withType: bool) -> str:
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
        def fromJson(cls, json: any) -> Union[Js.Rhino]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJson
        """
            ...
        @classmethod
        def fromJsonString(cls, json: str) -> Union[Js.Rhino]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJsonString
        """
            ...
        @classmethod
        def fromXmlString(cls, xml: str) -> Union[Js.Rhino]:
        """
        Load the XML-based representation and reconstruct the corresponding object.
        
        fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
        may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
        isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
        will return an instance of the correct type.
        
        @see #toXmlString
        """
            ...
        @classmethod
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Js.Rhino]:
        """
        Load from contentType representation and reconstruct the corresponding object.
        
        fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
        (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
        will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
        type and will return an instance of the correct type.
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
        def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
        """
        Measures retained memory by this instance.
        
        @param deep
               if true and this instance contains references to other objects also measures memory retained by those
        @param allMeasured
               if set then will skip instances that are in the set and will add instances that where measured by this call
        @return retained memory in bytes for this instances
        """
            ...
        def type(self) -> Type:
        """
        C3 Type of this instance.
        """
            ...
        def replaceType(self, old: Type, new: Type) -> Js.Rhino:
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
        def instanceOf(self, typeName: str) -> bool:
        """
        Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        """
            ...
        @overload
        def instanceOf(self, type: Type) -> bool:
        """
        Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        
        @see ValueType#isA
        """
            ...
        def isEmptyObj(self) -> bool:
        """
        Whether all the fields of this instance are empty.
        """
            ...
        def isSame(self, other: Obj) -> bool:
        """
        Whether the specified instance represents exactly the same object as this instance.
        """
            ...
        @overload
        def isFieldSet(self, field: str) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldSet(self, field: FieldType) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldMissing(self, field: str) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def isFieldMissing(self, field: FieldType) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        """
            ...
        @overload
        def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
        the obj.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        @return value for the given field
        """
            ...
        def fieldValues(self) -> Union[Array[FieldValue]]:
        """
        Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
        """
        Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
        Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
        #dataFieldTypes
        """
            ...
        def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
        """
        Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
        """
        Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldNames(self) -> Union[Array[str]]:
        """
        Returns all data field names including those whose values are empty. Array is ordered by
        field ordinal.
        """
            ...
        def unsetFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
        field ordinal.
        """
            ...
        def missingFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
        field ordinal.
        """
            ...
        @overload
        def at(self, ordinal: int) -> Union[T]:
        """
        Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
        
        @param ordinal
                Integer ordinal of the field in the parent type
        @return value of field at ordinal
        """
            ...
        @overload
        def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
        """
        Return value for the given serialized expression
        
        @param expr
                Serialized expression to obtain the value in the given Obj
        @param failIfNotValid
                If set, fails if not a valid expression
        @return value obtained as a result of expression evaluation
        """
            ...
        def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
        """
        Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
        `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
        that it also handles `null`. If path contains any collections then only first element will be traversed,
        unless the collection index is specified in the path.
        
        If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return the field or null
        """
            ...
        def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
        """
        Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
        traversals, unless the collection index is specified in the path.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return fields as a flat list
        
        @see #fieldValueAtPath
        """
            ...
        @overload
        def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        @overload
        def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply
        """
            ...
        def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
        """
        Perform an action for each {@link isFieldSet set} field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
        """
        Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
        on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply; stop if this `action` returns `false
        @return `true` if iteration was not aborted by lambda i.e. it saw all field values
        """
            ...
        @overload
        def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        @overload
        def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type while processing action returns
        `true`.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance; stops processing if return `false`
        @return `true` if iteration was not aborted by lambda i.e. it saw all refs
        """
            ...
        def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
        """
            ...
        def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
        processing action returns `true`.
        """
            ...
        @overload
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js.Rhino:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js.Rhino:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js.Rhino]:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the asynchronous `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that fields
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js.Rhino]:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        asynchronous `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Js.Rhino:
        """
        Result of this function call is a copy of current instance with specified field value replaced based on result of
        the `mapper` invocation.
        @param field
                  field being mapped
        @param includeEmpty
                  if set, invokes mapper for fields with empty value
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js.Rhino:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js.Rhino:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param mapper
                  function to be executed for each pair of field type and Obj instance for producing new reference value
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` will be `null`.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
        result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
        """
        Evaluates given projection expression over this instance.
        """
            ...
        @overload
        def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
        """
        Evaluates given projection over this instance and returns results as json.
        """
            ...
        @overload
        def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
        """
        Evaluates given projection over this instance and returns results as instance of the new Obj.
        """
            ...
        @overload
        def validateObj(self) -> Js.Rhino:
        """
        Populates all missing default values and throws error if any constraint is violated.
        """
            ...
        @overload
        def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
        """
        Validate that the Obj fields are set according to all the required rules.
        """
            ...
        @overload
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Js.Rhino:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  name of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        @overload
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Js.Rhino:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Js.Rhino:
        """
        Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
        defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
        
        @param fields
                  map of field names/values
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @return new Obj
        """
            ...
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Js.Rhino:
        """
        Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
        If you would like to #unsetField, you should call #withoutFieldAtPath instead.
        
        Immutable objects may return the same instance if the field being set does not actually represent a
        change to the existing object.
        
        @param path
                  path to set value at
        @param value
                  value to set
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @param doNotCreateIfMissing
                  true indicates that any empty reference along the path will not set the value
        @return new Obj
        """
            ...
        def withoutFieldAtPath(self, path: str) -> Js.Rhino:
        """
        Builds a new Obj without the specified path field.
        
        Immutable objects may return the same instance if the field being removed does not actually represent a
        change to the existing object.
        
        @param path
                  path for field to remove
        @return new Obj
        
        @see #withFieldAtPath
        @see #withoutField
        """
            ...
        @overload
        def withoutField(self, field: str) -> Js.Rhino:
        """
        Builds a new Obj, removing the field with the provided name.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        @overload
        def withoutField(self, field: FieldType) -> Js.Rhino:
        """
        Builds a new Obj, removing the field with the provided field type.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        def withoutFields(self, fields: Array[str]) -> Js.Rhino:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Js.Rhino:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Js.Rhino:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Js.Rhino:
        """
        Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
        calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
        {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
        fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
        fields that have already been set.
        
        {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
        As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
        
        @param includeEmptyRefsWithDefaults
                  it `true` then missing / empty child references that have fields with defaults will also be instantiated
        @param defaultFields
                  If not empty, a list of default field paths to populate.  Any default fields not specified in the
                  array will be ignored.
        @return new Obj
        
        @see #defaultField
        @see FieldType#defaultValueConst
        @see FieldType#defaultValue
        """
            ...
        @overload
        def defaultField(self, field: str) -> Js.Rhino:
        """
        Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                name of the field to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def defaultField(self, field: FieldType) -> Js.Rhino:
        """
        Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                field type to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def unsetField(self, field: str) -> Js.Rhino:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                name of the field to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def unsetField(self, field: FieldType) -> Js.Rhino:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                field type to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def removeField(self, field: str) -> Js.Rhino:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                name of the field to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def removeField(self, field: FieldType) -> Js.Rhino:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                field type to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Js.Rhino:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
        
        @param other
                  object
        @param fieldPathMergeSpec
                  mapping of fields of the object to the respective merge annotations
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Js.Rhino:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence.
        
        @param other
                  object
        @param otherFieldsFilter
                  only fields of otherFieldsFilter type from other are merged into this obj.
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Js.Rhino:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Js.Rhino:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
        traverse child reference and collection fields.
        """
            ...
        def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
        """
        Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
        Fields that non null in only one of this and other will be in the resulting Obj without change.
        """
            ...
        def mergeJson(self, json: any) -> Js.Rhino:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Js.Rhino:
        """
        Merge the obj references within the current obj
        @param deep
               If set, traverses the reference fields within the obj as well for a deep merge
        @param objKey
               lambda specifying how to obtain the key for the Obj while determining which Objs to merge
        @param filter
               Field paths that need to be filtered from this merge
        @return Obj with child references merged
        """
            ...
        def sumObj(self, other: Obj, deep: bool=None) -> Js.Rhino:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Js.Rhino]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Js.Rhino]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Js.Rhino]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Js.Rhino]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Js.Rhino]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Js.Rhino]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Js.Rhino]]:
        """
        Create a map with the given key type and elements of this type.
        """
            ...
        @classmethod
        def myReferenceType(cls) -> ReferenceType:
            ...
        @classmethod
        def myMapTypeOf(cls, keyType: ValueType) -> MapType:
            ...
        @classmethod
        def myMapType(cls) -> MapType:
            ...
        @classmethod
        def myArrayType(cls) -> ArrayType:
            ...
        @classmethod
        def mySetType(cls) -> SetType:
            ...
        @classmethod
        def myStreamType(cls) -> StreamType:
            ...
        def toBuilder(self) -> ObjBuilder[Js.Rhino]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Js.Rhino]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Js.Rhino:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Js.Rhino:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Js.Rhino:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Js.Rhino:
        """
        Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                   populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Js.Rhino:
        """
        Construct an instance from provided fields
        @param fields
                   Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                   field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                   to Panda.make()
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                   -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                   the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
        
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Any, withDefaults: bool=None) -> Js.Rhino:
        """
        Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
        
        ```js
        User.make({
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        
        Obj.make({
          type: 'User',
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        ```
        
        ```py
        c3.User.make({
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.Obj.make({
          "type": 'User',
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.User(email='joe@smith.com', realName='Joe Smith')
        
        c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
        ```
        
        Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
        specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
        such as {@link Ann.Ser} do not apply.
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, s: str) -> Union[Js.Rhino]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Js.Rhino:
        """
        Construct an instance of this type from provided instance of a subtype or a "duck type".
        """
            ...
        def remakeAs(self, type: Type) -> O:
        """
        Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
        converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
        could be costly if types have different value types for same fields.
        
        @param type
                Type of new obj to return
        @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                converted and copied to it
        """
            ...
        @classmethod
        def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
        """
        Optional override that will be called every time instance of this type is created.
        
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        def afterMake(self) -> Js.Rhino:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Js.Rhino:
        """
        Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
        every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
        Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
        
        @see ValueType#defaultEmptyValue
        """
            ...
        def toData(self) -> Union[Data]:
        """
        Represent the current obj instance as {@link Data}
        """
            ...
        @classmethod
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Js.Rhino]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Js.Rhino:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def keyFieldType(cls) -> FieldType:
        """
        @return key field type.
        """
            ...
        def keyFieldValue(self) -> Union[str]:
        """
        @return key field value.
        """
            ...
        def singletonMap(self) -> Map[str, WithKey]:
        """
        Build a map of the correct type with a single element which is this instance and key field value as key.
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
        def fromString(cls, s: str) -> Union[Js.Rhino]:
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
        def forName(cls, name: str, failIfMissing: bool=None) -> Union[Js.Rhino]:
        """
        Return the matching ImplLanguage for the specified string or null. This is case-insensitive and handles common
        abbreviations.
        """
            ...
        @classmethod
        def inst(cls) -> Js.Rhino:
        """
        @return the one and only instance to be used when member functions are called on this type.
        """
            ...
        @classmethod
        def cachedInst(cls) -> Union[Js.Rhino]:
        """
        @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
        """
            ...
        def supportsOverloads(self) -> bool:
        """
        @return `true` if underlying language supports overloaded functions
        """
            ...
        def versions(self) -> Array[str]:
        """
        Language versions supported for this language. Note that this is not necessarily a semantic version.
        """
            ...
        @classmethod
        def nameOf(cls, lang: str, failIfInvalid: bool=None) -> Union[str]:
        """
        Return the official name of matching ImplLanguage for the specified string or null. This is case-insensitive and
        handles common abbreviations.
        """
            ...
        def dslName(self) -> Union[str]:
        """
        @return name of this language as used in method declaration (if any)
        """
            ...
        @classmethod
        def dslNameOf(cls, lang: str) -> Union[str]:
        """
        @return name of the specified language as used in method declaration (if any)
        """
            ...
        def fileExt(self) -> str:
        """
        Return the canonical file extension for one of the language enum values.
        
        @return file extension (including dot)
        """
            ...
        @classmethod
        def fileExtOf(cls, lang: str) -> str:
        """
        Return the canonical file extension for the specified language enum value.
        
        @return file extension (including dot)
        """
            ...
        def mediaType(self) -> str:
        """
        Return the canonical content type extension for one of the language enum values.
        
        @return content type
        """
            ...
        def functions(self, source: str, failIfInvalid: bool=None) -> Union[Array[str]]:
        """
        Extract the function names from the script that could implement type methods. This means named top-level
        functions which could match up with type methods names.
        
        Normally a script that cannot be parsed will fail silently, returning an empty list, but passing true to
        failIfInvalid will cause an appropriate error to be thrown instead.
        
        @param source code to parse
        @param failIfInvalid throw an exception the script has a syntax error
        """
            ...
        def keywords(self) -> Union[Array[str]]:
        """
         Return the list of keywords for a given language. This is the list of words used by the implementation of a
         programming language. If the name of a field or method conflicts with one of these keywords, the field or method
         can be accessed by appending "_" to the end of its name. For example:
        
         ```py
            with open("foo.txt", "w") as f: # Note that "with" is a Python keyword
                f.write("bar")
            inst = c3.ArrayType.ofBool().emptyArray()
            # inst = inst.with(True) <- this would fail as "with" is a keyword in Python
            inst = inst.with_(True) # Works!
            c3.Py.keywords().contains("with") # returns True
        ```
        """
            ...
        @classmethod
        def forFileExt(cls, ext: str, failIfNone: bool=None) -> Union[Js.Rhino]:
        """
        Return the matching language for the specified extension.
        
        @param ext extension string to match
        @param failIfNone if true, throw error instead of returning null
        @return matched enum value
        """
            ...
        def isJava(self) -> bool:
        """
        @return `true` if this is Java implementation language
        """
            ...
        def isJs(self) -> bool:
        """
        @return `true` if this is JavaScript implementation language
        """
            ...
        def isPy(self) -> bool:
        """
        @return `true` if this is Python implementation language
        """
            ...
        @classmethod
        def java(cls) -> ImplLanguage:
        """
        @return implementation language for Java
        """
            ...
        @classmethod
        def js(cls) -> ImplLanguage:
        """
        @return implementation language for JavaScript
        """
            ...
        @classmethod
        def py(cls) -> ImplLanguage:
        """
        @return implementation language for Python
        """
            ...
        @classmethod
        def all(cls) -> Array[ImplLanguage]:
        """
        @return all implementation languages.
        """
            ...
        @classmethod
        def allNames(cls) -> Array[str]:
        """
        @return all implementation languages.
        """
            ...
        @classmethod
        def allFileExts(cls) -> Union[Array[str]]:
        """
        @return file extensions for all supported ImplLanguages.
        """
            ...
        @classmethod
        def allScripting(cls) -> Array[ImplLanguage]:
        """
        @return scripting language instances (implementation languages other than Java)
        
        @see #all
        """
            ...
        @classmethod
        def allScriptingNames(cls) -> Array[str]:
        """
        @return scripting language names (implementation languages other than Java)
        
        @see #allNames
        """
            ...
        @classmethod
        def hasJava(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for Java
        """
            ...
        @classmethod
        def hasJs(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for JavaScript
        """
            ...
        @classmethod
        def hasPy(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} is for Python
        """
            ...
        @classmethod
        def canRunActionRequirements(cls, find: str, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if the provided {@Link Action.Engine} can run any of provided {@Link Action.Requirement actionRequirements}. If the parameter actionRequirements is
        empty we assume it has only one {@Link Action.Requirement} "java".
        """
            ...
        @classmethod
        def hasLang(cls, find: str, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} use the specified language
        """
            ...
        @classmethod
        def isScriptLang(cls, lang: str) -> bool:
        """
        @return `true` if the provided language is a scripting language.
        
        @see #allScripting
        """
            ...
        @classmethod
        def hasScript(cls, actionRequirements: Array[str]) -> bool:
        """
        @return `true` if any of provided {@link Action.Requirements} are a scripting language
        
        @see #allScripting
        """
            ...
        @classmethod
        def filterLang(cls, find: str, actionRequirements: Array[str]) -> Union[Array[str]]:
        """
        @return the requirements from the list that use the specified language
        """
            ...
        def installRuntime(self, runtime: ImplLanguage.ResolvedRuntime) -> None:
        """
        Installs the specified runtime, deleting potentially stale (cache-dirty) installations already present.
        """
            ...
        def resolveRuntime(self, runtime: ImplLanguage.Runtime, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Resolve the specified runtime, {@Link ImplLanguage.RuntimeLocation locations}, and {@Link ImplLanguage.Executor executors} combinations.
        
        @param runtime
                   The runtime to resolve.
        @param location
                   If provided, runtime will be resolved for the specific {@Link ImplLanguage.RuntimeLocation location}. If not
                   provided runtime is resolved against all {@Link ImplLanguage.RuntimeLocation locations}.
        @param executors
                   If provided, the runtime will be resolved only for {@Link ImplLanguage.Executor executors} specified in the parameter executors. If not
                   set runtime is resolved against all {@Link ImplLanguage.Executor executors}.
        @param doNotValidate
                   Runtime resolution typically involves validation to confirm that the resolved runtimes satisfy the
                   runtime. In some cases, it may be desirable or necessary to disable this validation. For
                   example, if one of the packages has an installation name that does not match its 'importable' name.
        @return A named tuple with fields `seededRuntimes` and `errors`. The 'seededRuntimes' field is a map with {@Link Action.Engine} as the key and its {@Link Action.Engine#installedRuntime resolved runtime}
        as the value. The 'errors' field is a map with {@Link Action.Engine} as the key and the error message as value if the runtime resolution failed for that {@Link Action.Engine}.
        """
            ...
        @overload
        def upsertRuntime(self, runtime: ImplLanguage.Runtime, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        The api to upsert a runtime. After a runtime is successfully upserted it can be used as a part of {@Link Action.Requirement}
        in method claims and {@Link Lambda lambdas}.
        
        @param runtime
                   The runtime to upsert. Once a runtime is successfully upserted it is available for use in {@Link Action.Requirement}
                   with any valid combination of {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors} that support
                   custom runtimes. The user can also upsert a runtime for specific locations and executors and then it can be used with only those
                   combination of locations and executors.
        @param location
                   This optional parameter allows user to upsert a runtime for a specific {@Link ImplLanguage.RuntimeLocation location}. If not provided a successfully upserted runtime can be used
                   with any location in an {@Link Action.Requirement}. For instance, calling upsert on a runtime "py-foo" with location set as "server" will allow users to use that runtime only with server.
                   Any method claim like "py-foo-client" will be invalid and throw metadata error.
        @param executor
                   This optional parameter allows user to upsert a runtime for some array of {@Link ImplLanguage.Executor executors}. If not provided a successfully upserted runtime can be used
                   with any {@Link ImplLanguage.Executor executor} that supports custom runtimes. For instance, calling upsert on a runtime "py-foo" with executor
                   set as ["ipython"] will allow users to use that runtime only with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}. A method claim like
                   "py-foo-server" will be invalid and throw metadata error as {@Link ImplLanguage.Executor#IPYTHON ipython} is an executor for client side python. Similarly,
                   the method claim "py-foo-py4j" will be invalid as "py-foo" can only be used with the executor {@Link ImplLanguage.Executor#IPYTHON ipython}.
        @param doNotValidate
                   Upsertion of runtime typically involves validation to confirm that the installed runtimes satisfy the
                   runtime which was to be upserted. In some cases, it may be desirable or necessary to disable this validation. For
                   example, if one of the packages has an installation name that does not match its 'importable' name.
        
        @return A named tuple with fields 'seededRuntimes' and 'errors'. The 'seededRuntimes' field will provide detailed information
                about the the libraries that will be installed when using this runtime with various {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}. It is a map with {@Link Action.Engine} as key and its {@Link Action.Engine#installedRuntime} as value.
                The 'errors' field is a map with {@Link Action.Engine} as key and error message as value if the runtime upsertion failed for that particular {@Link Action.Engine}. To check if upsertion is completely successfully it is enough to check that 'errors' field is an empty map.
                If the upsertion was not successful or partially successful `errors` field will give detailed information about why upsertion failed for all/some
                requested {@Link ImplLanguage.RuntimeLocation locations} and {@Link ImplLanguage.Executor executors}.
        """
            ...
        @overload
        def upsertRuntime(self, runtime: ImplLanguage.Runtime, executors: Array[str]=None, doNotValidate: bool=None) -> :
            ...
        def upsertRuntimes(self, runtimes: Array[ImplLanguage.Runtime], location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts each runtime in {{runtimes}} via {@link upsertRuntime}. Ancestor runtimes will be upserted prior to their
        descendants. If resolution fails for a parent runtime, attempts to resolve any of its descendants will be skipped.
        
        All arguments and return value have the same semantics as {@link upsertRuntime}.
        """
            ...
        def upsertRuntimesAndDependents(self, changedRuntimes: Array[ImplLanguage.Runtime], location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts each runtime in {{changedRuntimes}} via {@link upsertRuntimes}. Also upserts runtimes
        for any runtime which {@link ImplLanguage.Runtime#isDescendantOf is a descendant of} a runtime in
        {{changedRuntimes}}. Ancestor runtimes will be upserted prior to their descendants.
        
        All arguments and return value have the same semantic as {@link upsertRuntime}
        """
            ...
        def upsertPkgRuntimes(self, location: str=None, executors: Array[str]=None, doNotValidate: bool=None) -> :
        """
        Upserts all runtimes declared in the current {@link Pkg} via {@link upsertRuntimes}.
        
        All arguments and return value have the same semantic as {@link upsertRuntime}
        """
            ...
        def uninstallRuntime(self, runtimeName: str) -> None:
        """
        Uninstalls the specified runtime if installed.
        """
            ...
        def libraryManager(self, runtimeName: str=None) -> LibraryManager[LibraryManager.Config, ImplLanguage.ResolvedRuntime]:
        """
        Library manager for this language and provided runtime.
        """
            ...
        def executors(self) -> Union[Array[str]]:
        """
        All valid executors for this language
        """
            ...
        @classmethod
        def regexPattern(cls) -> str:
        """
        Regular expression that matches all supported languages
        """
            ...
        @classmethod
        def methodStubs(cls, meta: TypeMeta, delegate: bool=None) -> Union[str]:
        """
        @return the method stubs for declared or overridden methods in given typemeta.
        
        @param meta
                  the type to generate stubs for
        @param delegate
                  use super to call Java instead of throwing an error
        """
            ...
        @classmethod
        def preamble(cls) -> Union[str]:
        """
        @return a block prepended to all generated files
        """
            ...
        @classmethod
        def stub(cls, type: TypeMeta, methodName: str, isMember: bool=None, fixed: Array[str]=None, requiredCount: int=None, remaining: str=None, delegate: bool=None) -> Union[str]:
        """
        Build a stub function declaration as multiple lines. All lines, including the last one, should end with newlines.
        
        @param type
               the type
        @param methodName
               name of the method
        @param isMember
               if this is a member method
        @param fixed
               the parameters that are the same in all overloads
        @param requiredCount
               the number of the sharedOverloadParams parameters that must be specified by the caller
        @param remaining
               the name for any remaining parameters that vary by overload or are varargs
        @param delegate
               use super to call Java instead of throwing an error
        @return stub function declaration
        """
            ...
        @classmethod
        def postamble(cls) -> Union[str]:
        """
        @return a block appended to all generated files
        """
            ...
        @classmethod
        def comment(cls) -> str:
        """
        @return the single-line comment prefix
        """
            ...
        @classmethod
        def language(cls) -> str:
        """
        @return the language as listed in {@link ImplLanguage}.
        """
            ...
        @classmethod
        def toArray(cls, v: Any, type: ArrayType, failIfInvalid: bool=None) -> Union[Array[E]]:
        """
        Build a made array of the specified type from the specified native array or list. The elements are made by
        making them as the element type of the specified array type. The made array corresponds to the specified
        array type.
        """
            ...
        @classmethod
        def toArrayOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[Any]]:
        """
        Build a made array of `any` from the specified native array or list. The elements are made by guessing the type.
        """
            ...
        @classmethod
        def toArrayOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[float]]:
        """
        Build a made array of `double` from the specified native array or list. The elements are made as necessary.
        
        @see ArrayType#ofDbl
        """
            ...
        @classmethod
        def toArrayOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[int]]:
        """
        Build a made array of `int` from the specified native array or list. The elements are made as necessary.
        
        @see ArrayType#ofInt
        """
            ...
        @classmethod
        def toArrayOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Array[str]]:
        """
        Build a made array of `string` from the specified native array or list. The elements are made as necessary.
        
        @see ArrayType#ofStr
        """
            ...
        @classmethod
        def toMap(cls, v: Any, type: MapType, failIfInvalid: bool=None) -> Union[Map[K, V]]:
        """
        Build a made map of the specified type from the specified native map or dictionary. The keys and values are
        made by making them as the element type of the specified map type. The made map corresponds to the specified
        map type.
        """
            ...
        @classmethod
        def toMapOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[Any, Any]]:
        """
        Build a made map of `any` from the specified native map or dictionary. The keys and values are made by
        guessing the types.
        """
            ...
        @classmethod
        def toMapOfStrToAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, Any]]:
        """
        Build a made map of `string` to `any` from the specified native map or dictionary. The values are made by
        guessing the types.
        """
            ...
        @classmethod
        def toMapOfStrToDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, float]]:
        """
        Build a made map of `double` from the specified native map or dictionary. The keys and values are made as
        necessary.
        
        @see MapType#ofStrToDbl
        """
            ...
        @classmethod
        def toMapOfStrToInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, int]]:
        """
        Build a made map of `int` from the specified native map or dictionary. The keys and values are made as
        necessary.
        
        @see MapType#ofStrToInt
        """
            ...
        @classmethod
        def toMapOfStrToStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Map[str, str]]:
        """
        Build a made map of `string` from the specified native map or dictionary. The keys and values are made as
        necessary.
        
        @see MapType#ofStrToStr
        """
            ...
        @classmethod
        def toObj(cls, v: Any, type: Type, failIfInvalid: bool=None) -> Union[O]:
        """
        Build a made instance of a type. Note that this might not actually be an Obj if the specified type does not mixin
        Obj. If the value specifies a type more specific that than given the more specific type is used. If it specifies
        an unrelated type, null is returned or an error is thrown.
        
        If the type is an Obj, then a field initializer map (either made or unmade) or a JSON object may be specified.
        
        If the type mixes {@link StringSerializable}, then the string representation may be specified.
        
        @see Obj#make
        """
            ...
        @classmethod
        def toSet(cls, v: Any, type: SetType, failIfInvalid: bool=None) -> Union[Set[E]]:
        """
        Build a made set of the specified type from the specified native array or list. The elements are made by
        making them as the element type of the specified set type. The made set corresponds to the specified
        set type.
        """
            ...
        @classmethod
        def toSetOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[float]]:
        """
        Build a made set of `double` from the specified native array or list. The elements are made as necessary.
        
        @see SetType#ofDbl
        """
            ...
        @classmethod
        def toSetOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[int]]:
        """
        Build a made set of `int` from the specified native array or list. The elements are made as necessary.
        
        @see SetType#ofInt
        """
            ...
        @classmethod
        def toSetOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Set[str]]:
        """
        Build a made set of `string` from the specified native array or list. The elements are made as necessary.
        
        @see SetType#ofStr
        """
            ...
        @classmethod
        def toStream(cls, v: Any, type: StreamType, failIfInvalid: bool=None) -> Union[Stream[E]]:
        """
        Build a made stream of the specified type from the specified native collection or iterator. The elements are made
        by making them as the element type of the specified stream type. The made stream corresponds to the specified
        stream type.
        """
            ...
        @classmethod
        def toStreamOfAny(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[Any]]:
        """
        Build a made stream of `any` from the specified native collection or iterator. The elements are made by guessing
        the type.
        """
            ...
        @classmethod
        def toStreamOfDbl(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[float]]:
        """
        Build a made stream of `double` from the specified native collection or iterator. The elements are made as
        necessary.
        """
            ...
        @classmethod
        def toStreamOfInt(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[int]]:
        """
        Build a made stream of `int` from the specified native collection or iterator. The elements are made as necessary.
        """
            ...
        @classmethod
        def toStreamOfStr(cls, v: Any, failIfInvalid: bool=None) -> Union[Stream[str]]:
        """
        Build a made stream of `string` from the specified native collection or iterator. The elements are made as
        necessary.
        """
            ...
        @classmethod
        def toValue(cls, v: Any, type: ValueType, failIfInvalid: bool=None) -> Union[Any]:
        """
        Construct a made value for the specified value type.
        
        @see ValueType#makeValue
        """
            ...
        @classmethod
        def toNativeObject(cls, o: Any) -> Union[Any]:
        """
        Returns a language-native key-value object for scripting languages: JavaScript Object or Python dict.
        The only supported input types are C3 `json` values and the language native equivalents (for which `toNativeObject`
        is a no-op).
        """
            ...
        @overload
        @classmethod
        def exec(cls, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute arbitrary source code in Rhino engine (js-server {@link ImplLanguage.Runtime}).
        
        @param src
               arbitrary code to execute
        @param args
               if code is a function declaration then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @overload
        @classmethod
        def exec(cls, lambda_: Lambda[Callable[[Union[Array[Any]]], Union[T]]], *args: Array[Any]) -> Union[T]:
        """
        Execute arbitrary lambda's code in Rhino engine (js-server {@link ImplLanguage.Runtime}). The implementation
        language specified in the lambda will be ignored; it will always be executed using Rhino.
        
        @param lambda
               boxed lambda to execute
        @param args
               invoke the lambda with provided arguments
        @return result of the execution
        """
            ...
        @overload
        @classmethod
        def exec(cls, runtime: ImplLanguage.Runtime, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute arbitrary source code of the implementation language of this action engine.
        
        @param runtime
               implementation language runtime to use
        @param src
               arbitrary code to execute
        @param args
               if code is a function declaration then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def execEs(cls, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute EcmaScript-compatible code in Rhino engine (js-server {@link ImplLanguage.Runtime})
        
        @param src
               string of EcmaScript-compatible code written in ES6+ syntax to exec
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def execTs(cls, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute TypeScript code in Rhino engine (js-server {@link ImplLanguage.Runtime})
        
        @param src
               string of TypeScript code to exec
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def execRhino(cls, src: str, *args: Array[Any]) -> Union[T]:
        """
        Execute ES5 code in Rhino engine (js-server {@link ImplLanguage.Runtime}), without transpilation.
        
        @param src
               string of code written in ES5 syntax to exec
        @param args
               if code is a function declaration, then invoke that function with provided arguments
        @return result of the execution
        """
            ...
        @classmethod
        def dataToSource(cls, data: T, src: T=None) -> Union[str]:
        """
        Build the canonical JavaScript source code representation of the provided C3 type instance.  After running the
        produced JavaScript source code, the `data` variable in JavaScript should point to the instance.
        
        Simple example of the returned JavaScript source code that does not use `$src` variable
        (See {@link #sourceToData}):
        ```js
        data = { firstName: 'John', lastName: 'Doe' }
        ```
        
        One use of this method is for saving a serialized instance to an application package.
        To support overriding configs and remixing metadata / seed data, one may want to create more than one metadata
        / seed / config file for the same id or name.  The caller may supply a `src` instance so that the output captures
        the differences between this instance and the `src` instance.
        
        If we call this API like:
        ```js
        var src = User.make({ firstName: "John", lastName: "Doe" })
        Js.dataToSource(src.withEmail('john@doe.com'), src)
        ```
        the output JavaScript source code could be something like:
        ```js
        data = { ...$src, email: 'john@doe.com' }
        ```
        
        @param data
           C3 type instance to serialize to JavaScript source code.
        @param src
            If provided, the JavaScript source code will only contain field changes as compared to `src`.  The `src`
            instance is typically the config / metadata / seed instance that we are overriding or remixing, so that
            the output only captures the diff between the current instance and the `src` instance.
        @return a JavaScript source code representation of this instance.  One use of this source code is to put in `*.js`
            file as seed data (see {@link SeedData}).
        
        @see #sourceToData
        @see JsSerializable
        """
            ...
        @classmethod
        def sourceToData(cls, type: Type, js: str, src: T=None) -> Union[T]:
        """
        Parse and evaluate the JavaScript source code representation and reconstruct the corresponding instance.
        
        @param type
            C3 type of the instance to be created.
        @param js
            JavaScript source code used to reconstruct the C3 type instance.
        @param src
            If provided, the JavaScript source code will have the `$src` variable in scope set to this parameter during its
            execution.  The JavaScript source code should merge or override fields on the instance referenced by the
            `$src` variable to return the new instance.
        @return an instance created from the source code representation.
        
        @see #dataToSource
        @see JsSerializable
        """
            ...
        @classmethod
        def rhinoVersion(cls) -> str:
        """
        Get the version of Rhino used for executing JavaScript within the server.
        """
            ...
        @classmethod
        def transpile(cls, code: str, fileName: str=None, failIfInvalid: bool=None) -> Union[str]:
        """
        Convert modern JavaScript code to ES5 for compatibility with Rhino _if_ the specified code cannot be parsed by
        Rhino as-is. Otherwise, the original code is returned.
        
        Transpilation may remove comments and whitespace, meaning that a script with no actual expressions or statements
        may transpile to nothing.
        
        If neither Rhino nor the transpiler can parse the code, the original is returned (unless `failIfInvalid` is true).
        
        @param code
               ES.Next JavaScript source
        @param fileName
               if specified, will be included in error messages
        @param failIfInvalid
               throw an error if the script cannot be parsed by either Rhino or the transpiler
        @return ES5 JavaScript result
        """
            ...
        @classmethod
        def dispatch(cls, typ: Type, method: str, *args: Array[Any], ths: Any=None) -> Union[Any]:
            ...
    
    class TurboJsSession(ImplLanguage.Session):
        """
        This provides support for a TurboJs-based persistent session within the C3 server.
        
        @remarks this represents a made instance of Js.TurboJsSession
        """
        
        id: Optional[str]
        """
        The unique and required id of this instance.
        """

        actionRequirement: Optional[Action.Requirement]
        """
        The parsed action requirement from the {@link ImplLanguage.Session.SetupSpec}.
        """

        appNode: Optional[str]=None
        """
        If set, we will target all dispatched method calls to this particular app node in the server. This makes the
        session "sticky" to a single server node. For recovery on node failure,
        {@link ImplLanguage.Session.Result each result} includes the node on which it was processed and further calls
        to this session should use the new node.
        """

        _setupSpec: Optional[ImplLanguage.Session.SetupSpec]

        _counter: Optional[Any]

        _touched: Optional[Any]

        _running: Optional[Any]=None

        _inst: Optional[Any]

        _scope: Optional[Any]
        def __init__(self, id: Optional[str]=None, actionRequirement: Optional[Action.Requirement]=None, appNode: Optional[str]=None, _setupSpec: Optional[ImplLanguage.Session.SetupSpec]=None, _counter: Optional[Any]=None, _touched: Optional[Any]=None, _running: Optional[Any]=None, _inst: Optional[Any]=None, _scope: Optional[Any]=None) -> None: ...

        def toString(self) -> Union[str]:
        """
        Build the canonical string representation of this instance. This must be implemented to provide serialization.
        
        If the object has no content, and fromString would properly reproduce it from a null value, toString may return
        null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
        
        @see #fromString
        """
            ...
        @classmethod
        def fromString(cls, s: str) -> Union[Js.TurboJsSession]:
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
        @overload
        @classmethod
        def make(cls, s: str) -> Union[Js.TurboJsSession]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Js.TurboJsSession:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Js.TurboJsSession:
        """
        Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
                   populated
        
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Js.TurboJsSession:
        """
        Construct an instance from provided fields
        @param fields
                   Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
                   field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
                   to Panda.make()
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
                   -> 0) populated. Passing an empty value for a field will result in the initial value being set if
                   the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
        
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        @classmethod
        def make(cls, fields: Any, withDefaults: bool=None) -> Js.TurboJsSession:
        """
        Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
        
        ```js
        User.make({
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        
        Obj.make({
          type: 'User',
          email: 'joe@smith.com',
          realName: 'Joe Smith'
        })
        ```
        
        ```py
        c3.User.make({
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.Obj.make({
          "type": 'User',
          "email": 'joe@smith.com',
          "realName": 'Joe Smith'
        })
        
        c3.User(email='joe@smith.com', realName='Joe Smith')
        
        c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
        ```
        
        Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
        specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
        such as {@link Ann.Ser} do not apply.
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see fromFields
        @see beforeMake
        @see afterMake
        @see withDefaults
        """
            ...
        @overload
        def toJson(self) -> any:
        """
        Convert the internal object representation to a JSON object.
        
        @return JSON object representation
        
        @see #fromJson
        """
            ...
        @overload
        def toJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
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
        @overload
        def toTypedJson(self, include: str=None, exclude: str=None) -> any:
            ...
        @overload
        def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
            ...
        @overload
        def toJsonString(self) -> str:
            ...
        @overload
        def toJsonString(self, pretty: bool) -> str:
        """
        Convert the internal object representation to a serialized JSON string.
        
        @return JSON object as string
        """
            ...
        @overload
        def toTypedJsonString(self) -> str:
            ...
        @overload
        def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
            ...
        @overload
        def toJsString(self) -> str:
            ...
        @overload
        def toJsString(self, withType: bool) -> str:
        """
        Convert the internal object representation to a serialized JavaScript object literal.
        
        @return JavaScript object literal string
        """
            ...
        @overload
        def toXmlString(self) -> str:
            ...
        @overload
        def toXmlString(self, withType: bool) -> str:
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
        def fromJson(cls, json: any) -> Union[Js.TurboJsSession]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJson
        """
            ...
        @classmethod
        def fromJsonString(cls, json: str) -> Union[Js.TurboJsSession]:
        """
        Load the JSON-based representation and reconstruct the corresponding object.
        
        fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
        a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
        called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
        an instance of the correct type.
        
        @see #toJsonString
        """
            ...
        @classmethod
        def fromXmlString(cls, xml: str) -> Union[Js.TurboJsSession]:
        """
        Load the XML-based representation and reconstruct the corresponding object.
        
        fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
        may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
        isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
        will return an instance of the correct type.
        
        @see #toXmlString
        """
            ...
        @classmethod
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Js.TurboJsSession]:
        """
        Load from contentType representation and reconstruct the corresponding object.
        
        fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
        (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
        will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
        type and will return an instance of the correct type.
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
        def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
        """
        Measures retained memory by this instance.
        
        @param deep
               if true and this instance contains references to other objects also measures memory retained by those
        @param allMeasured
               if set then will skip instances that are in the set and will add instances that where measured by this call
        @return retained memory in bytes for this instances
        """
            ...
        def type(self) -> Type:
        """
        C3 Type of this instance.
        """
            ...
        def replaceType(self, old: Type, new: Type) -> Js.TurboJsSession:
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
        def instanceOf(self, typeName: str) -> bool:
        """
        Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        """
            ...
        @overload
        def instanceOf(self, type: Type) -> bool:
        """
        Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
        This is the most convenient way to ask "is this type usable in a context requiring the other type?"
        
        @return true if this instance is of this type or any of its mixins
        
        @see ValueType#isA
        """
            ...
        def isEmptyObj(self) -> bool:
        """
        Whether all the fields of this instance are empty.
        """
            ...
        def isSame(self, other: Obj) -> bool:
        """
        Whether the specified instance represents exactly the same object as this instance.
        """
            ...
        @overload
        def isFieldSet(self, field: str) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldSet(self, field: FieldType) -> bool:
        """
         Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
         if the field value set the its default value by the constructor. A set field is never missing.
        
        @param field the field to check
        
        @return whether the specified field is set
        """
            ...
        @overload
        def isFieldMissing(self, field: str) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def isFieldMissing(self, field: FieldType) -> bool:
        """
         Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
         should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
        {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
        A missing field is never set.
        
        @param field the field to check
        
        @return whether the specified field is missing
        """
            ...
        @overload
        def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        """
            ...
        @overload
        def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
        """
        Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
        the obj.
        
        @param field
                  Field to return the value for
               defaultToEmpty
                  will return default empty value if field is missing
        @return value for the given field
        """
            ...
        def fieldValues(self) -> Union[Array[FieldValue]]:
        """
        Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
        """
        Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
        Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
        #dataFieldTypes
        """
            ...
        def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
        """
        Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
        """
        Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
        """
            ...
        def fieldNames(self) -> Union[Array[str]]:
        """
        Returns all data field names including those whose values are empty. Array is ordered by
        field ordinal.
        """
            ...
        def unsetFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
        field ordinal.
        """
            ...
        def missingFieldNames(self) -> Union[Array[str]]:
        """
        @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
        field ordinal.
        """
            ...
        @overload
        def at(self, ordinal: int) -> Union[T]:
        """
        Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
        
        @param ordinal
                Integer ordinal of the field in the parent type
        @return value of field at ordinal
        """
            ...
        @overload
        def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
        """
        Return value for the given serialized expression
        
        @param expr
                Serialized expression to obtain the value in the given Obj
        @param failIfNotValid
                If set, fails if not a valid expression
        @return value obtained as a result of expression evaluation
        """
            ...
        def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
        """
        Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
        `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
        that it also handles `null`. If path contains any collections then only first element will be traversed,
        unless the collection index is specified in the path.
        
        If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return the field or null
        """
            ...
        def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
        """
        Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
        traversals, unless the collection index is specified in the path.
        
        @param fieldPath
                  field names separated by dots
        @param failIfNotFound
                  if true, an error will be thrown if the any of the field types aren't defined
        @param context
                  if an error is thrown, the context returned by calling the lambda will be incorporated
        @return fields as a flat list
        
        @see #fieldValueAtPath
        """
            ...
        @overload
        def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        @overload
        def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
        """
        Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply
        """
            ...
        def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
        """
        Perform an action for each {@link isFieldSet set} field of this object.
        
        @param action
                  lambda to apply
        """
            ...
        def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
        """
        Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
        on provided `spec`.
        
        @param spec
                  which fields to include
        @param action
                  lambda to apply; stop if this `action` returns `false
        @return `true` if iteration was not aborted by lambda i.e. it saw all field values
        """
            ...
        @overload
        def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        @overload
        def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
        the field value if non-null and for collections of Obj, this means each element in the collection.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance
        """
            ...
        def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type while processing action returns
        `true`.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param action
                  function to be executed for each pair of field type and Obj instance; stops processing if return `false`
        @return `true` if iteration was not aborted by lambda i.e. it saw all refs
        """
            ...
        def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
        """
            ...
        def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
        """
        Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
        processing action returns `true`.
        """
            ...
        @overload
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js.TurboJsSession:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Js.TurboJsSession:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js.TurboJsSession]:
        """
        Result of this function call is a copy of current instance with all non empty fields replaced based on results of
        the asynchronous `mapper` invocation.
        
        @param action
                  lambda to apply for every field value to produce a new value for that fields
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Js.TurboJsSession]:
        """
        Result of this function call is a copy of current instance with all fields replaced based on results of the
        asynchronous `mapper` invocation.
        
        @param spec
                  which fields to include
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Js.TurboJsSession:
        """
        Result of this function call is a copy of current instance with specified field value replaced based on result of
        the `mapper` invocation.
        @param field
                  field being mapped
        @param includeEmpty
                  if set, invokes mapper for fields with empty value
        @param mapper
                  lambda to apply for every field value to produce a new value for that field
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js.TurboJsSession:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param action
                  function to be executed for each pair of field type and Obj instance
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Js.TurboJsSession:
        """
        Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
        lambda application.
        
        Result of this function call is a copy of current instance with all references replaced based on results of the
        `mapper` invocation.
        
        @param includeEmpty
                  if `true` will also process references with `null` / "Empty" references
        @param mapper
                  function to be executed for each pair of field type and Obj instance for producing new reference value
        @param convertValue
                  if true, attempt to convert the value to match the field's type
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` will be `null`.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
        argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all current non empty field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
        """
        Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
        result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
        
        This function is useful for calculating aggregate values based on all field values.
        Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
        e.g
        ```
        o = {a:1, b:2, c:0}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
        
        o = {a: {x:1, y:2}, b: {x:10, z:2}}
        o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
        ```
        """
            ...
        @overload
        def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
        """
        Evaluates given projection expression over this instance.
        """
            ...
        @overload
        def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
        """
        Evaluates given projection over this instance and returns results as json.
        """
            ...
        @overload
        def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
        """
        Evaluates given projection over this instance and returns results as instance of the new Obj.
        """
            ...
        @overload
        def validateObj(self) -> Js.TurboJsSession:
        """
        Populates all missing default values and throws error if any constraint is violated.
        """
            ...
        @overload
        def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
        """
        Validate that the Obj fields are set according to all the required rules.
        """
            ...
        @overload
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Js.TurboJsSession:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  name of the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        @overload
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Js.TurboJsSession:
        """
        Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
        defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
        
        @param field
                  the field
        @param value
                  of the field
        @param doNotConvert
                  if true, do not attempt to convert the value to match the field's type
        @return new Obj
        
        @see #withoutField
        @see #defaultField
        """
            ...
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Js.TurboJsSession:
        """
        Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
        defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
        
        @param fields
                  map of field names/values
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @return new Obj
        """
            ...
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Js.TurboJsSession:
        """
        Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
        If you would like to #unsetField, you should call #withoutFieldAtPath instead.
        
        Immutable objects may return the same instance if the field being set does not actually represent a
        change to the existing object.
        
        @param path
                  path to set value at
        @param value
                  value to set
        @param doNotConvert
                  if true, attempt to convert the values to match the fields' type
        @param doNotCreateIfMissing
                  true indicates that any empty reference along the path will not set the value
        @return new Obj
        """
            ...
        def withoutFieldAtPath(self, path: str) -> Js.TurboJsSession:
        """
        Builds a new Obj without the specified path field.
        
        Immutable objects may return the same instance if the field being removed does not actually represent a
        change to the existing object.
        
        @param path
                  path for field to remove
        @return new Obj
        
        @see #withFieldAtPath
        @see #withoutField
        """
            ...
        @overload
        def withoutField(self, field: str) -> Js.TurboJsSession:
        """
        Builds a new Obj, removing the field with the provided name.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        @overload
        def withoutField(self, field: FieldType) -> Js.TurboJsSession:
        """
        Builds a new Obj, removing the field with the provided field type.
        
        Immutable objects may return the same instance if the field being removed is not present in the existing object.
        
        @param field
                  name of the field to remove
        @return new Obj with removed field
        
        @see #unsetField
        @see #removeField
        """
            ...
        def withoutFields(self, fields: Array[str]) -> Js.TurboJsSession:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Js.TurboJsSession:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Js.TurboJsSession:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Js.TurboJsSession:
        """
        Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
        calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
        {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
        fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
        fields that have already been set.
        
        {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
        As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
        
        @param includeEmptyRefsWithDefaults
                  it `true` then missing / empty child references that have fields with defaults will also be instantiated
        @param defaultFields
                  If not empty, a list of default field paths to populate.  Any default fields not specified in the
                  array will be ignored.
        @return new Obj
        
        @see #defaultField
        @see FieldType#defaultValueConst
        @see FieldType#defaultValue
        """
            ...
        @overload
        def defaultField(self, field: str) -> Js.TurboJsSession:
        """
        Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                name of the field to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def defaultField(self, field: FieldType) -> Js.TurboJsSession:
        """
        Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
        method will behave the same as {@link #unsetField}.
        
        @param field
                field type to default
        @return new `Obj` with the specified field set to its default value
        
        @see #withField
        @see #unsetField
        """
            ...
        @overload
        def unsetField(self, field: str) -> Js.TurboJsSession:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                name of the field to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def unsetField(self, field: FieldType) -> Js.TurboJsSession:
        """
        Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
        is different from {@link removeField}
        
        @param field
                field type to unset
        @return new `Obj` with the specified field unset
        
        @see #withoutField
        @see #removeField
        """
            ...
        @overload
        def removeField(self, field: str) -> Js.TurboJsSession:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                name of the field to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def removeField(self, field: FieldType) -> Js.TurboJsSession:
        """
        Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
        is different from {@link #unsetField}
        
        @param field
                field type to remove
        @return new `Obj` with the specified field removed
        
        @see #withoutField
        @see #unsetField
        """
            ...
        @overload
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Js.TurboJsSession:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
        
        @param other
                  object
        @param fieldPathMergeSpec
                  mapping of fields of the object to the respective merge annotations
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Js.TurboJsSession:
        """
        Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
        In case of conflicts, fields of other instance take precedence.
        
        @param other
                  object
        @param otherFieldsFilter
                  only fields of otherFieldsFilter type from other are merged into this obj.
        @return the new merged Obj
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Js.TurboJsSession:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Js.TurboJsSession:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
        traverse child reference and collection fields.
        """
            ...
        def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
        """
        Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
        Fields that non null in only one of this and other will be in the resulting Obj without change.
        """
            ...
        def mergeJson(self, json: any) -> Js.TurboJsSession:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Js.TurboJsSession:
        """
        Merge the obj references within the current obj
        @param deep
               If set, traverses the reference fields within the obj as well for a deep merge
        @param objKey
               lambda specifying how to obtain the key for the Obj while determining which Objs to merge
        @param filter
               Field paths that need to be filtered from this merge
        @return Obj with child references merged
        """
            ...
        def sumObj(self, other: Obj, deep: bool=None) -> Js.TurboJsSession:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Js.TurboJsSession]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Js.TurboJsSession]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Js.TurboJsSession]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Js.TurboJsSession]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Js.TurboJsSession]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Js.TurboJsSession]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Js.TurboJsSession]]:
        """
        Create a map with the given key type and elements of this type.
        """
            ...
        @classmethod
        def myReferenceType(cls) -> ReferenceType:
            ...
        @classmethod
        def myMapTypeOf(cls, keyType: ValueType) -> MapType:
            ...
        @classmethod
        def myMapType(cls) -> MapType:
            ...
        @classmethod
        def myArrayType(cls) -> ArrayType:
            ...
        @classmethod
        def mySetType(cls) -> SetType:
            ...
        @classmethod
        def myStreamType(cls) -> StreamType:
            ...
        def toBuilder(self) -> ObjBuilder[Js.TurboJsSession]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Js.TurboJsSession]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Js.TurboJsSession:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Js.TurboJsSession:
        """
        Construct an instance of this type from provided fields
        @param fields
                   Fields to construct the instance of the obj with
        @param withDefaults
                   If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
        
        @see withDefaults
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Js.TurboJsSession:
        """
        Construct an instance of this type from provided instance of a subtype or a "duck type".
        """
            ...
        def remakeAs(self, type: Type) -> O:
        """
        Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
        converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
        could be costly if types have different value types for same fields.
        
        @param type
                Type of new obj to return
        @return new obj of the requested type with all fields present in the original obj that are defined in the new type
                converted and copied to it
        """
            ...
        @classmethod
        def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
        """
        Optional override that will be called every time instance of this type is created.
        
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        def afterMake(self) -> Js.TurboJsSession:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Js.TurboJsSession:
        """
        Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
        every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
        Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
        
        @see ValueType#defaultEmptyValue
        """
            ...
        def toData(self) -> Union[Data]:
        """
        Represent the current obj instance as {@link Data}
        """
            ...
        @classmethod
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Js.TurboJsSession]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Js.TurboJsSession:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def keyFieldType(cls) -> FieldType:
        """
        @return key field type.
        """
            ...
        def keyFieldValue(self) -> Union[str]:
        """
        @return key field value.
        """
            ...
        def singletonMap(self) -> Map[str, WithKey]:
        """
        Build a map of the correct type with a single element which is this instance and key field value as key.
        """
            ...
        @classmethod
        def forId(cls, id: str, failIfMissing: bool=None) -> Union[Js.TurboJsSession]:
        """
        Look up an active session created by the current user. This also handles auto-restore by reloading session state
        if one was previously saved.
        
        @see ImplLanguage.Session.Config
        """
            ...
        def config(self, secrets: bool=None) -> ImplLanguage.Session.Config:
        """
        Returns cached configuration for instance of this type. See Configurable type documentation for more details.
        
        @param secrets
                 if set to `true` and current role has sufficient permissions configuration will contain values of secret
                 fields. Otherwise configuration will not have values for secrets.
        @return instance of configuration - never `null`.
        """
            ...
        def configKey(self) -> Union[str]:
        """
        @return configuration key for this instance.
        """
            ...
        def configSingletonKey(self) -> Union[str]:
        """
        @return configuration key for this type assuming it is singleton.
        """
            ...
        @classmethod
        def typeConfig(cls) -> ImplLanguage.Session.Config:
        """
        @return type configuration for the given {@link Configurable} type.
        E.g. {@see REST} & {@see RestConfig}
        """
            ...
        @classmethod
        def targetNodeFunc(cls, methodType: MethodType) -> Union[Callable[[Union[Map[str, Any]]], str]]:
        """
        @return lambda to calculate target {@link Server server node} for this function call with provided arguments.
        
        Used internally for dispatching.
        
        @see MethodType#targetNodeFunc
        """
            ...
        @classmethod
        def targetThreadPoolFunc(cls, methodType: MethodType) -> Union[Callable[[Union[Map[str, Any]]], str]]:
        """
        @return lambda to calculate target {@link App.ThreadPool thread pool} for this function call with provided arguments.
        
        Used internally for dispatching.
        
        @see MethodType#targetThreadPoolFunc
        """
            ...
        def language(self) -> str:
        """
        The programming language supported within the server. This is the language in which the code will be executed.
        """
            ...
        def runtime(self) -> str:
        """
        The runtime supported by this session type.
        """
            ...
        @classmethod
        def create(cls, spec: ImplLanguage.Session.SetupSpec) -> ImplLanguage.Session:
        """
        Examine the spec's {@link ImplLanguage.Session.SetupSpec#actionRequirement actionRequirement} and instaniate a
        supported session for that action engine. After creation, #setup is immediately called. This instance is recorded
        in a cache and can get retrieved using #forId.
        """
            ...
        def setup(self, spec: ImplLanguage.Session.SetupSpec=None) -> Js.TurboJsSession:
        """
        The setup method builds an instance of this type which will be necessary for any other communication between
        a client and the server. The default implementation returns an instance of the subtype with the #id field set to a
        UUID. Sub-types will usually specialize this to do additional setup and _must_ call this base method as well.
        """
            ...
        def execute(self, spec: ImplLanguage.Session.ExecuteSpec) -> ImplLanguage.Session.ExecuteResult:
        """
        Implement the <b>execute request</b>, including producing the output cell value. This _must_ be overridden by
        each session implementation to execute the code in the proper environment.
        """
            ...
        def executeAsync(self, spec: ImplLanguage.Session.ExecuteSpec) -> Union[Promise[ImplLanguage.Session.ExecuteResult]]:
        """
        Implement the <b>execute request</b>, including producing the output cell value. This method makes an asynchronous
        call to #execute, even when called on a synchronous type system instance.
        """
            ...
        def isComplete(self, code: str) -> ImplLanguage.Session.IsCompleteResult:
        """
        Implement the <b>code completeness request</b>, determining if the snippet is executable. The default
        implementation just returns "unknown", and should be overridden by session implementations which can provide a
        better answer.
        """
            ...
        def interrupt(self, spec: ImplLanguage.Session.InterruptSpec=None) -> ImplLanguage.Session.Result:
        """
        Implement the <b>interrupt request</b>, aborting running cell actions (started by #execute or #executeAsync).
        """
            ...
        def heartbeat(self, msg: any=None) -> ImplLanguage.Session.HeartbeatResult:
        """
        Implement the <b>heartbeat request</b>, echoing the input value to the output.
        """
            ...
        def close(self) -> None:
        """
        Remove the cached state of this session, meaning that it can no longer be used (remotely). If this is overridden,
        the base implementation _must_ be called as well.
        """
            ...
        def closed(self) -> bool:
        """
        @returns true if this session has been closed
        """
            ...
        def nextCounter(self) -> int:
        """
        Get the next counter value (starting at 1) and increment the counter.
        """
            ...
        def peekCounter(self) -> int:
        """
        Get the next counter value (starting at 1) _without_ incrementing the counter.
        """
            ...
        def idle(self) -> Duration:
        """
        Get the amount of time since this session was last used, including the last time #heartbeat was called.
        Sessions will time out after some period of time (such as 15 minutes) to avoid memory leaks.
        """
            ...
        def saveGlobals(self) -> Union[Map[str, any]]:
        """
        Scrape global variables from the current session and serialize them into a map that can be saved to the database.
        This is optional; if this or #loadGlobals are not implemented, auto-restored sessions will not preserve state.
        """
            ...
        def loadGlobals(self, globals: Map[str, any]) -> None:
        """
        Restore global variables in the current session from the serialized map that was saved to the database.
        This is optional; if this or #saveGlobals are not implemented, auto-restored sessions will not preserve state.
        """
            ...
        def save(self) -> None:
        """
        Save the current state of the session to the database so it can be recovered. This will happen automatically
        when the server goes down and/or after a specified idle time, but it can also be requested explicitly.
        
        Note that a saved session can be recovered by #forId from the database after the session has been removed from
        memory or even on a different server node.
        """
            ...
        def toSaved(self) -> ImplLanguage.SavedSession:
        """
        Create an instance of the saved session entity for this instance.
        
        @see #fromSaved
        """
            ...
        @classmethod
        def fromSaved(cls, saved: ImplLanguage.SavedSession) -> ImplLanguage.Session:
        """
        Create a restored session instance from the saved entity.
        
        @see #toSaved
        """
            ...
        @classmethod
        def cleanupExpiredSessions(cls) -> None:
        """
        Action that can be run manually or as a cron job to remove all saved sessions that have not been touched recently.
        
        @see ImplLanguage.Session.Config#restoreTimeout
        """
            ...
        def visualizations(self, result: Any, spec: ImplLanguage.Session.ExecuteSpec=None) -> Array[Content]:
        """
        Produce one or more visualizations of a {@link ImplLanguage.ExecuteResult execution result} from the data value.
        These may be abbreviations of the total data, but will provide a preview. When possible,
        {@link Content#contentLocation contentLocation} provides a link to the full result.
        
        Note that there is always at least one visualization, often of type `text/plain` for the default cell result.
        Additional visualizations will have more specific MIME types for enhanced display.
        
        @param result the result from evaluating the code cell
        @param spec the original spec passed to ImplLanguage.Session.
        
        @see ImplLanguage.ExecuteResult#data
        """
            ...
        def valueMetadata(self, result: Any, spec: ImplLanguage.Session.ExecuteSpec=None) -> Union[Map[str, Any]]:
        """
        Produce extra metadata for the data value. This will always include a "label" and perhaps also a "description"
        used for the output cell.
        
        @param result the result from evaluating the code cell
        @param spec the original spec passed to ImplLanguage.Session.
        
        @see ImplLanguage.Session.ExecuteResult#metadata
        """
            ...
        def _touch(self) -> None:
            ...


#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.genAiBase.Genai.SourceFile import Genai.SourceFile
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.WaitSpec import WaitSpec
from c3.platform.WithKey import WithKey
from c3.platform.FieldType import FieldType
from c3.platform.App.NodePool import App.NodePool
from c3.platform.Engine.StopSpec import Engine.StopSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.genAiBase.Genai.Query.Result.Source.StructuredData.PythonAgent import Genai.Query.Result.Source.StructuredData.PythonAgent
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.genAiBase.Genai.UnstructuredQuery.EngineDeployment import Genai.UnstructuredQuery.EngineDeployment
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetType import SetType
from c3.genAiBase.Genai.Retriever.SimilaritySearchResult import Genai.Retriever.SimilaritySearchResult
from c3.genAiBase.GenAiVisualizationDataFrameProps import GenAiVisualizationDataFrameProps
from c3.platform.Config import Config
from c3.platform.MapType import MapType
from c3.genAiBase.Genai.Query.ChatMessage import Genai.Query.ChatMessage
from c3.platform.App.Node.ThreadPool import App.Node.ThreadPool
from c3.platform.Promise import Promise
from c3.platform.Exclude import Exclude
from c3.genAiBase.Genai.UnstructuredQuery.Engine.Config import Genai.UnstructuredQuery.Engine.Config
from c3.genAiBase.Genai.Retriever import Genai.Retriever
from c3.genAiBase.Genai.UnstructuredQuery.EngineDeploySpec import Genai.UnstructuredQuery.EngineDeploySpec
from c3.genAiBase.Genai.Agent.DynamicData import Genai.Agent.DynamicData
from c3.platform.MethodType import MethodType
from c3.platform.Engine.Summary import Engine.Summary
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.genAiBase.Genai.UnstructuredQueryHandler.BaseParams import Genai.UnstructuredQueryHandler.BaseParams
from c3.platform.App.Node import App.Node
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Type import Type
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.genAiBase.Genai.Query.Result import Genai.Query.Result
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Obj import Obj
from c3.platform.Type import Type
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.WaitableSpec import WaitableSpec
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.Lambda import Lambda
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder

# Python definitions for the C3 type Genai.MockUnstructuredQueryEngine


class MockUnstructuredQueryEngine(Genai.UnstructuredQuery.Engine):
    """
    This fake chat bot can be plugged into the UI in order to increase the
    speed of the UI development so that the developer does not have to wait
    for Engine restarts when syncing files. Mocks the backend with dummy data
    creation.
    
    @remarks this represents a made instance of Genai.MockUnstructuredQueryEngine
    """
    
    name: Optional[str]
    """
    The unique and required name of this instance.
    """

    id: Optional[str]
    """
    The unique and required id of this instance.
    """

    _deploymentCache: Optional[Any]=None
    """
    Holds {@link Engine.Deployment} object for current instance of {@link Engine}.
    
    For internal use only!
    
    This object may differ from what is stored in the config framework (until it's updated by {@link Engine.Controller}).
    Value in config framework may be missing if the engine is been {@link #terminate terminated}.
    """

    _onStartError: Optional[str]=None
    """
    Errors that are captured during engine start
    """
    def __init__(self, name: Optional[str]=None, id: Optional[str]=None, _deploymentCache: Optional[Any]=None, _onStartError: Optional[str]=None) -> None: ...

    @classmethod
    def inst(cls) -> Genai.MockUnstructuredQueryEngine:
    """
    @return the default instance to be used when member functions are called on this type. E.g.
            FileSystem.inst() should return a default file system. It is up to implementation to decide if default
            instance is a singleton or not.
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
    def fromJson(cls, json: any) -> Union[Genai.MockUnstructuredQueryEngine]:
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
    def fromJsonString(cls, json: str) -> Union[Genai.MockUnstructuredQueryEngine]:
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
    def fromXmlString(cls, xml: str) -> Union[Genai.MockUnstructuredQueryEngine]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.MockUnstructuredQueryEngine]:
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
    def replaceType(self, old: Type, new: Type) -> Genai.MockUnstructuredQueryEngine:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.MockUnstructuredQueryEngine]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.MockUnstructuredQueryEngine]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def validateObj(self) -> Genai.MockUnstructuredQueryEngine:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def withoutFieldAtPath(self, path: str) -> Genai.MockUnstructuredQueryEngine:
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
    def withoutField(self, field: str) -> Genai.MockUnstructuredQueryEngine:
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
    def withoutField(self, field: FieldType) -> Genai.MockUnstructuredQueryEngine:
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
    def withoutFields(self, fields: Array[str]) -> Genai.MockUnstructuredQueryEngine:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.MockUnstructuredQueryEngine:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Genai.MockUnstructuredQueryEngine:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.MockUnstructuredQueryEngine:
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
    def defaultField(self, field: str) -> Genai.MockUnstructuredQueryEngine:
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
    def defaultField(self, field: FieldType) -> Genai.MockUnstructuredQueryEngine:
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
    def unsetField(self, field: str) -> Genai.MockUnstructuredQueryEngine:
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
    def unsetField(self, field: FieldType) -> Genai.MockUnstructuredQueryEngine:
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
    def removeField(self, field: str) -> Genai.MockUnstructuredQueryEngine:
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
    def removeField(self, field: FieldType) -> Genai.MockUnstructuredQueryEngine:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.MockUnstructuredQueryEngine:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.MockUnstructuredQueryEngine:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.MockUnstructuredQueryEngine:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.MockUnstructuredQueryEngine:
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
    def mergeJson(self, json: any) -> Genai.MockUnstructuredQueryEngine:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.MockUnstructuredQueryEngine:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Genai.MockUnstructuredQueryEngine:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Genai.MockUnstructuredQueryEngine]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Genai.MockUnstructuredQueryEngine]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.MockUnstructuredQueryEngine]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Genai.MockUnstructuredQueryEngine]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Genai.MockUnstructuredQueryEngine]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Genai.MockUnstructuredQueryEngine]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.MockUnstructuredQueryEngine]]:
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
    def toBuilder(self) -> ObjBuilder[Genai.MockUnstructuredQueryEngine]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Genai.MockUnstructuredQueryEngine]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.MockUnstructuredQueryEngine:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.MockUnstructuredQueryEngine:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def make(cls, s: str) -> Union[Genai.MockUnstructuredQueryEngine]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.MockUnstructuredQueryEngine:
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
    def afterMake(self) -> Genai.MockUnstructuredQueryEngine:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Genai.MockUnstructuredQueryEngine:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.MockUnstructuredQueryEngine]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.MockUnstructuredQueryEngine:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def query(self, genAiResultToProcess: Genai.Query.Result, querySimilaritySearchResults: Array[Genai.Retriever.SimilaritySearchResult]=None, doNotCreateRelations: bool=None, streamResponse: bool=None) -> Genai.Query.Result:
    """
    Respond to a user's `query` by generating a relevant `Genai.Query.Result` from the files loaded in the
    model.
    @param genAiResultToProcess
              The {@link Genai.Query.Result} which would be returned for the given search query.
              This result is persisted when the search is triggered and updated as the query is processed.
    @param querySimilaritySearchResults
              The already computed {@link Genai.Retriever.SimilaritySearchResult}s. If none are passed, then {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} would be
              used to generate similarity search results.
    @param doNotCreateRelations
              If true, creation of passage relations will be skipped
    """
        ...
    def streamQuery(self, genAiResultToProcess: Genai.Query.Result) -> Stream[str]:
    """
    Respond to a user's `query` by generating a native stream object from the files loaded in the
    model.
    @param genAiResultToProcess
              The {@link Genai.Query.Result} which would be returned for the given search query.
              This result is persisted when the search is triggered and updated as the query is processed.
    """
        ...
    def chatQuery(self, genAiResultToProcess: Genai.Query.Result, originalAiResult: Genai.Query.Result=None, chatHistory: Array[Genai.Query.ChatMessage]=None, doNotCreateRelations: bool=None, streamResponse: bool=None) -> Union[Union[Genai.Query.Result,str]]:
    """
    Respond to a chat `query` by generating a relevant `Genai.Query.Result` given the passages loaded
    and informed by the chat history
    
    @param genAiResultToProcess
              The {@link Genai.Query.Result} which would be returned for the given search query.
              This result is persisted when the search is triggered and updated as the query is processed.
    @param originalAiResult
              The original ai result from the search result
    @param chatHistory
              The history of the chat so far
    @param doNotCreateRelations
              If true, creation of passage relations will be skipped
    @return The {@link Genai.Query.Result}
    """
        ...
    def streamChatQuery(self, genAiResultToProcess: Genai.Query.Result, originalAiResult: Genai.Query.Result=None, chatHistory: Array[Genai.Query.ChatMessage]=None, doNotCreateRelations: bool=None) -> Union[Stream[str]]:
    """
    Respond to a chat `query` by generating a relevant `Genai.Query.Result` given the passages loaded
    and informed by the chat history. This function returns a stream of the answer of the chat query.
    The final {@link Genai.Query.Result} is generated internally after the last chunk of the stream is
    received, but it is not returned to the caller.
    
    @param genAiResultToProcess
              The {@link Genai.Query.Result} which would be returned for the given search query.
              This result is persisted when the search is triggered and updated as the query is processed.
    @param originalAiResult
              The original ai result from the search result
    @param chatHistory
              The history of the chat so far
    @param doNotCreateRelations
              If true, creation of passage relations will be skipped
    @return The stream containing the answer to the user query.
    """
        ...
    def doChatQuery(self, genAiResultToProcess: Genai.Query.Result, originalAiResult: Genai.Query.Result=None, chatHistory: Array[Genai.Query.ChatMessage]=None, doNotCreateRelations: bool=None, streamResponse: str=None) -> Union[Union[Genai.Query.Result,Stream[str]]]:
    """
    doChatQuery contains the implementation of #chatQuery which must be redeclared/claimed by each subtype
    to ensure that the calls are made in the correct runtime.
    """
        ...
    def rewriteQuery(self, genAiResultToProcess: Genai.Query.Result, originalAiResult: Genai.Query.Result=None, chatHistory: Array[Genai.Query.ChatMessage]=None) -> Genai.Query.Result:
    """
    Take the new `genAiResultToProcess` and, if there is a chat history, rewrite the `baseQuery` of the current
    result's `#searchQuery` to fill in `#standaloneQuery` with a single query that includes the chat context.
    
    @param genAiResultToProcess
              The {@link Genai.Query.Result} which would be returned for the given search query.
              This result is persisted when the search is triggered and updated as the query is processed.
    @param originalAiResult
              The original ai result from the search result
    @param chatHistory
              The history of the chat so far
    
    @return The {@link Genai.Query.Result} with the rewritten query.
    """
        ...
    def generateChatMemory(self, genAiResultToProcess: Genai.Query.Result, chatMemoryConfigName: str, originalAiResult: Genai.Query.Result=None, chatHistory: Array[Genai.Query.ChatMessage]=None) -> Genai.Query.Result:
    """
    Generate the chat memory for the given `genAiResultToProcess` based on the `chatHistory`.
    This function will update the `genAiResultToProcess` with the relevant `Genai.Query.ResultToPassageRelation`s
    for the chat history.
    
    @param genAiResultToProcess
              The {@link Genai.Query.Result} which would be returned for the given search query.
              This result is persisted when the search is triggered and updated as the query is processed.
    @param originalAiResult
              The original ai result from the search result
    @param chatHistory
              The history of the chat so far
    @param chatMemoryConfigName
              The name of the config to be used for the chat memory
    
    @return The {@link Genai.Query.Result} with the updated chat memory.
    """
        ...
    def createPassageRelations(self, genAiResultToProcess: Genai.Query.Result, vectorStore: Genai.Retriever=None, querySimilaritySearchResults: Array[Genai.Retriever.SimilaritySearchResult]=None, allowMultipleRelationsWithSameFile: bool=None) -> Genai.Query.Result:
    """
    Performs similarity search on the vector store and updates the genAiResultToProcess with the
    {@link Genai.Query.ResultToPassageRelation}s relevant for the query.
    @param genAiResultToProcess
              The {@link Genai.Query.Result} which would be returned for the given search query.
              This result is persisted when the search is triggered and updated as the query is processed.
    @param vectorStore
              The {@link Genai.Retriever} instance to be used for the similarity search to find the
              relevant passages for the query. If none is passed, the vector store used will be generated through
              the `prepareVectorStore` method.
    @param querySimilaritySearchResults
              The already computed {@link Genai.Retriever.SimilaritySearchResult}s. If none are passed, then {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} would be
              used to generate similarity search results.
    @param allowMultipleRelationsWithSameFile
              If set to true, creates relations with different source passages belonging to same file
    """
        ...
    @classmethod
    def prepareGenAiResult(cls, genAiResultToProcess: Genai.Query.Result, originalAiResult: Genai.Query.Result=None) -> Genai.Query.Result:
    """
    Retrieve necessary fields and persist the genAiResultToProcess if needed. If the originalAiResult is
    provided it will populate the filters for the `genAiResultToProcess` so that chat has the same explicit
    filters as the original search query.
    """
        ...
    def validateConfig(self, engineConfig: Genai.UnstructuredQueryHandler.BaseParams, configType: Type, configField: str=None) -> Config:
    """
    Validate the population of the {@link Genai.UnstructuredQuery.Engine.Config} as well as the the {@link Genai.UnstructuredQuery.Engine.ModelConfig} possibly
    passed into `configType` and stored at `configField` on the `engineConfig`.
    """
        ...
    def prepareVectorStore(self, vectorStore: Genai.Retriever=None, config: Genai.UnstructuredQueryHandler.BaseParams=None) -> Genai.Retriever:
    """
    Prepares (i.e. initializes) a vector store for this query handler using the following priority:
    1. The vectorStore passed to the function
    2. Fall back to using a config: If one is passed, that is used, otherwise {@link Genai.UnstructuredQuery.Engine.Config#inst}
       The {@link Genai.UnstructuredQuery.Engine.Config#vectorStore} for the config, if it is defined
    
    If all three of the above are undefined, a ValueError exception is raised.
    
    @param vectorStore
              If specified, this is the vector store that will be prepared
    """
        ...
    @classmethod
    def constructRelation(cls, infix: str, genAiResultToProcessId: str, searchResult: Genai.Retriever.SimilaritySearchResult) -> Union[Any]:
    """
    Constructs a relation between a {@link Genai.Query.Result} and the {@link Genai.SourcePassage} and
    its {@link Genai.SourceFile} from a {@link Genai.Retriever.SimilaritySearchResult}
    @param infix
              The infix to use for the relation type when generating the id for the relation
    @param genAiResultToProcessId
              The id of the {@link Genai.Query.Result} to use to construct the relation
    @param searchResult
              The {@link Genai.Retriever.SimilaritySearchResult} to use to construct the relation
    @return A tuple containing the relation as a dict (not c3 obj) and the {@link Genai.SourceFile}
    """
        ...
    @classmethod
    def constructRelations(cls, infix: str, genAiResultToProcessId: str, searchResults: Array[Genai.Retriever.SimilaritySearchResult]) -> Union[Any]:
    """
    Constructs a relation between a {@link Genai.Query.Result} and the {@link Genai.SourcePassage}s and
    its {@link Genai.SourceFile}s from {@link Genai.Retriever.SimilaritySearchResult}s
    @param infix
              The infix to use for the relation type when generating the id for the relation
    @param genAiResultToProcessId
              The id of the {@link Genai.Query.Result} to use to construct the relation
    @param searchResults
              The {@link Genai.Retriever.SimilaritySearchResult}s to use to construct the relations
    @return A list of tuples containing the relations as dicts (not c3 objs) and the {@link Genai.SourceFile}s
    """
        ...
    def generateSimilaritySearchResults(self, generativeAiResult: Genai.Query.Result, vectorStore: Genai.Retriever=None, numPassages: int=None) -> Array[Genai.Retriever.SimilaritySearchResult]:
    """
    Generates {@link Genai.Retriever.SimilaritySearchResult}s for the query {@link Genai.Query.Result#searchQuery}.
    If numPassages is not provided, the number of {@link Genai.Retriever.SimilaritySearchResult}s generated is the max
    of {@link Genai.UnstructuredQuery.Engine.Config#numPassages} and numSources in {@link Genai.UnstructuredQuery.Engine.Config#executorParams}
    """
        ...
    @classmethod
    def handleError(cls, query: str, genAiResultToProcess: Genai.Query.Result, llmName: str=None, brokenTools: str=None) -> Genai.Query.Result:
    """
    Internal function to log the error and return the `genAiResultToProcess` with correct engineLog and answer.
    """
        ...
    @classmethod
    def qATuplesFromChat(cls, originalAiResult: Genai.Query.Result, chatHistory: Array[Genai.Query.ChatMessage]=None, searchQueryField: str='"standaloneQuery"') -> Array[]:
    """
    Returns a return a list of (question, answer) tuples from the conversation so far
    """
        ...
    def getVisualizationDataFromDataFrame(self, source: Union[Genai.Query.Result.Source.StructuredData.PythonAgent,Genai.Agent.DynamicData]=None) -> GenAiVisualizationDataFrameProps:
    """
    A helper function to get the visualization data from a
    {@link Genai.Query.Result.Source.StructuredData.PythonAgent}, utilizing the engine to reduce function call time.
    @param source
              The {@link Genai.Query.Result.Source.StructuredData.PythonAgent} to get the visualization data from
    @return The {@link GenAiVisualizationDataFrameProps} for the visualization data
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
    def fromString(cls, s: str) -> Union[Genai.MockUnstructuredQueryEngine]:
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
    def forName(cls, name: str, failIfMissing: bool=None) -> Union[Genai.MockUnstructuredQueryEngine]:
    """
    @return single instance of this Nameable type by name. Note that if this type is also Cached then it will
    retrieve instance from cache.
    """
        ...
    @classmethod
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[Genai.MockUnstructuredQueryEngine]:
    """
    @return single instance of this Identified type by id.
    """
        ...
    @classmethod
    def targetNodeFunc(cls, methodType: MethodType) -> Union[Callable[[Union[Map[str, Any]]], str]]:
    """
    @return lambda to calculate target {@link Server server node} for {@link Action action} called on this
    {@link Engine}.
    
    Used internally for dispatching.
    @see #targetNode
    """
        ...
    @classmethod
    def targetThreadPoolFunc(cls, methodType: MethodType) -> Union[Callable[[Union[Map[str, Any]]], str]]:
    """
    @return lambda to calculate target {@link App.ThreadPool thread pool} for {@link Action action} called on this
    {@link Engine}.
    
    Used internally for dispatching.
    @see #targetThreadPool
    """
        ...
    @classmethod
    def deploy(cls, spec: Genai.UnstructuredQuery.EngineDeploySpec) -> Genai.MockUnstructuredQueryEngine:
    """
    Deploys new {@link Engine engine} based on spec.
    
    If current node cannot run actions for the {@link Engine engine}, such actions will be routed to
    {@link #targetNodes} for execution.
    
    You can use advanced options to control spinning up of {@link Engine engine} on {@link App.Node nodes}:
    - Use {@link Engine.DeploySpec#autoStart} to control whether {@link Engine engine} should be started
      automatically on all {@link App.Node nodes} that match filter (See {@link Engine.DeploySpec#nodeRole nodeRole},
      {@link Engine.DeploySpec#altNodeRoles}, {@link Engine.DeploySpec#nodePools}).
    - Use {@link Engine.DeploySpec#failActionIfEngineNotReady} to control behavior of {@link Action actions} routed to
      {@link #isHealthy unhealthy} {@link Engine engine}.
    - Use {@link Engine.DeploySpec#initializingNodeAvoidanceDuration} to avoid routing of {@link Action actions} to newly added
      {@link App.Node nodes}. This helps to avoid routing of {@link Action actions} to {@link Engine engines} that
      have not yet finished initialization.
    
    @see activate
    @see deactivate
    @see Engine.Controller
    """
        ...
    def activate(self) -> None:
    """
    Activate deployment of this engine
    
    @see Engine.DeploySpec#inactive
    """
        ...
    def deactivate(self) -> None:
    """
    Deactivate deployment of this engine
    
    @see Engine.DeploySpec#inactive
    """
        ...
    def state(self) -> Union[str]:
    """
    Current state of this engine.
    """
        ...
    @classmethod
    def threadPoolsSummary(cls, engineTypeName: str, id: str) -> Union[Engine.Summary]:
        ...
    def summaryHelper(self) -> Array[Engine.Summary]:
    """
    Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
    """
        ...
    def summary(self) -> Data:
    """
    Return summary information about current state of this {@link Engine} deployment for each {@link #targetNodes node}.
    """
        ...
    def summarizeInstance(self) -> Engine.Summary:
    """
    Return summary information about current state of this {@link Engine} deployment on current {@link #targetNodes node}.
    """
        ...
    def summarizeThreads(self, node: str) -> Data:
    """
    Return {@link App.Node.Thread.Info} for each {@link App.Node.Thread thread} that are running on given
    {@link App.Node node} and belong to this {@link Engine engine} deployment.
    """
        ...
    def errors(self) -> Union[Array[str]]:
    """
    @return list of errors that this {@link Engine} deployment has.
    """
        ...
    def isRunning(self) -> bool:
    """
    @return true if the {@link Engine} instance is started.
    """
        ...
    @overload
    def isHealthy(self) -> bool:
    """
    @return true if the {@link Engine} instance is ready to serve requests.
    """
        ...
    @overload
    @classmethod
    def isHealthy(cls, engineType: str, name: str) -> bool:
    """
    @return true if the {@link Engine} instance specified by name is ready to serve requests.
    """
        ...
    def isStopped(self) -> bool:
    """
    @return true if the {@link Engine} instance is stopped.
    """
        ...
    def deployment(self) -> Genai.UnstructuredQuery.EngineDeployment:
    """
    Returns {@link Engine.Deployment} configuration for current {@link Engine}.
    
    If {@link Engine.Deployment} was removed from the config framework will return configuration with which the
    {@link Engine} was deployed.
    """
        ...
    def configuredDeployment(self) -> Genai.UnstructuredQuery.EngineDeployment:
    """
    Returns {@link Engine.Deployment} configuration for current {@link Engine} based on config value.
    
    May be `null` if {@link Engine} is stopping. Use {@link #deployment} instead.
    """
        ...
    @classmethod
    def deploymentType(cls) -> Type[[Genai.UnstructuredQuery.EngineDeployment]]:
    """
    @return deployment type for this engine
    """
        ...
    @classmethod
    def deploySpecType(cls) -> Type[[Genai.UnstructuredQuery.EngineDeploySpec]]:
    """
    @return deployment spec for this engine
    """
        ...
    def restart(self) -> Genai.MockUnstructuredQueryEngine:
    """
    Restarts this engine
    """
        ...
    def start(self, waitForReady: bool=None, spec: WaitableSpec=None) -> Union[Genai.MockUnstructuredQueryEngine]:
    """
    Starts {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
    
    Automatically called first time any action is called on this {@link Engine} instance or by
    {@link Engine.Controller} if {@link Engine.Deployment#autoStart} is `true`.
    
    Call to method idempotent and will return immediately if engine is {@link Engine.State.RUNNING}.
    
    If called from many threads simultaneously, calls will be blocked until some thread does start {@link Engine}.
    
    If start makes calls to other engines then expectation is that potential calls back from that engine into this one
    will succeed.
    
    @param waitForReady If unset or `false` will return `null` immediately, without waiting for engine to be fully
              started or ready.
    @param spec
              Wait specification that will be used in case waitForReady is set to `true`.
    @return `null` if not waiting for ready and ready instance of the {@link Engine} otherwise.
    """
        ...
    def doStart(self) -> Genai.MockUnstructuredQueryEngine:
        ...
    def stop(self, spec: Engine.StopSpec=None) -> None:
    """
    Stops {@link Engine} {@link Engine.deployment deployment} on current {@link App.Node}.
    
    Automatically called as part of C3 {@link App.Node} shutdown or by {@link Engine.Controller} if
    {@link Engine.deployment deployment} {@link #terminate terminated} or {@link #deactivate deactivated}.
    
    This is where preparation for shutdown should happen and this is when this Engine should stop initiating any new
    root actions to other Engines. E.g. all monitoring threads started by this Engine should be stopped here.
    
    Note that #stop will be called before #shutdown and expectation is that even after stop other methods of the engine
    still continue to work. E.g. if Db.Engine is stopped it should still continue to process requests (because
    another engine using Db.Engine may still be running).
    
    If stop fails, the graceful shutdown on C3 {@link App.Node} will be aborted.
    """
        ...
    def shutdown(self) -> None:
    """
    Called as part of C3 App Node shutdown. Should free up all allocated resources. This function will not wait to
    drain the queues and will interrupt currently running actions.
    """
        ...
    @classmethod
    def stopEngineOnNode(cls, engineName: str, spec: Engine.StopSpec=None) -> bool:
        ...
    def afterTerminate(self, spec: Engine.StopSpec=None) -> None:
    """
    Optional callback that will be invoked after {@link #terminate}. Allows to do any additional cleanup that is
    required for the engine.
    
    @param spec - spec that was passed to {@link #deploy}
    @return spec that will be used for {@link #deploy}
    """
        ...
    def terminate(self, spec: Engine.StopSpec=None) -> None:
    """
    Terminates the engine. This will remove the {@link Engine.Deployment} and stop all running instances of the
    {@link Engine}.
    
    @see #stop
    """
        ...
    def update(self) -> None:
    """
    Update {@link Engine} instance to match {@link #deployment}.
    
    Will take no effect if {@link #deployment} stays the same. Usually be called from {@link Engine.Controller}.
    
    @see Engine.Controller
    """
        ...
    def call(self, action: Lambda[Callable[[Genai.MockUnstructuredQueryEngine], Union[T]]]) -> Union[T]:
    """
    call `action` on a specific engine
    """
        ...
    def onStart(self) -> Genai.MockUnstructuredQueryEngine:
    """
    Optional callback that will be invoked every time engine is started on an {@link App.Node}.
    This callback is called outside of engine's dedicated ThreadPool, once per {@link App.Node}.
    
    @return engine with initialized field, or unmodified object.
    
    @see #start
    @see #onEngineThreadStart
    """
        ...
    def onStop(self) -> None:
    """
    Optional callback that will be invoked every time engine is stopped on an {@link App.Node}.
    
    Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
    {@link #deployment} may be already removed from the config framework
    
    @see #stop
    @see #terminate
    @see #onEngineThreadStop
    """
        ...
    def onEngineThreadStart(self) -> None:
    """
    Optional callback that will be invoked from any new thread this Engine is used from.
    
    Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
    
    @see #start
    @see #onStart
    """
        ...
    def onEngineThreadStop(self) -> None:
    """
    Optional callback that will be invoked from thread in which this engine was used when thread terminates.
    
    Will only be called if this engine has a dedicated thread-pool i.e. {@link Engine.DeployBase#threadPool} is set.
    
    Use {@link #cachedDeployment} if necessary to access {@link Engine.Deployment config}. Otherwise underling
    {@link #deployment} may be already removed from the config framework
    
    @see #stop
    @see #terminate
    @see #onStop
    """
        ...
    def onUpdate(self, oldDeployment: Genai.UnstructuredQuery.EngineDeployment) -> None:
    """
    Optional callback that will be invoked from {@link #update} if config changed.
    
    Called once per {@link App.Node}.
    
    @see #update
    """
        ...
    def canRunOnNode(self, nodeId: str) -> bool:
    """
    Returns `true` if engine can be started on provided `nodeId`.
    
    @see #targetNodes.
    """
        ...
    @classmethod
    def beforeDeploy(cls, spec: Genai.UnstructuredQuery.EngineDeploySpec) -> Genai.UnstructuredQuery.EngineDeploySpec:
    """
    Optional callback that will be invoked at the beginning of {@link #deploy}. Allows to modify spec before it's used
    for deployment.
    
    @param spec - spec that was passed to {@link #deploy}
    @return spec that will be used for {@link #deploy}
    """
        ...
    @classmethod
    def specToConfigs(cls, spec: Genai.UnstructuredQuery.EngineDeploySpec) -> Array[Config]:
    """
    Converts given spec to the configs that will be seeded during engine's deployment.
    
    @param spec - spec that was passed to {@link #deploy}
    @return List of configs that needs to be seeded.
    """
        ...
    def targetNode(self) -> Union[App.Node]:
    """
    Internal method that is used to identify target node for calling this {@link Engine}.
    
    THis implementation will try to use current node if it's in list of {@link targetNodes} or will use
    {@link App#availableNode some available} {@link App.Node} from {@link #targetNodes}.
    
    Sub-types can override this logic if customization is needed.
    Method return `null` if no dispatching is needed.
    """
        ...
    def targetNodes(self, excludeMe: bool=None, alwaysConstruct: bool=None) -> Union[Array[App.Node]]:
    """
    Internal method that is used to query all target node for this Engine; effectively all nodes in #targetNodePools.
    
    @param excludeMe
              If set to `true` list will not include current app node where this action is called from.
    @param alwaysConstruct
              If set to `true` method returns all {@link App.Node nodes} where this {@link Engine} can be executed
              even if it can be executed on all {@link App.Node nodes} within the {@link App}.
    @return list of {@link App.Node nodes} in which this {@link Engine} can run. If `alwaysConstruct=false` and engine
            can be executed on all {@link App.Node nodes} within the {@link App}.
    """
        ...
    def targetNodePools(self) -> Union[Array[App.NodePool]]:
    """
    Internal method that is used to identify target node-pools for this Engine; by default it'll use
    Engine.Deployment#nodeRole or Engine.Deployment#nodePools but sub-types can override this logic
    
    Method returns null or empty array if {@link Engine} can run on any {@link App.Node}.
    """
        ...
    def targetThreadPool(self) -> Union[App.Node.ThreadPool]:
    """
    Returns {@link App.Node.ThreadPool} responsible for running actions for this {@link Engine},
    `null` if {@link Engine.Deployment#dedicatedThreadPool} is `false`.
    
    @see Engine.Deployment#dedicatedThreadPool
    """
        ...
    @classmethod
    def list(cls) -> Union[Array[Genai.MockUnstructuredQueryEngine]]:
    """
    List {@link Engine engines} {@lik #deploy deployed} in an {@link App}.
    
    @see: #deploy
    @see: #terminate
    """
        ...
    def appId(self) -> str:
    """
    Returns {@link AppId id} of an {@link App} in which this {@link Engine.Deployment} is running.
    """
        ...
    def waitForDeployment(self, waitSpec: WaitSpec=None) -> bool:
    """
    Waits for the deployment to become ready across all nodes. Uses {@link #isReadyOnAllNodes} to make the check.
    
    This wait will complete only if there at least one node assigned to the engine.
    """
        ...
    def isReadyOnAllNodes(self) -> bool:
    """
    Returns true if all running nodes for the engine are healthy.
    
    If no nodes assigned to the engine returns `false`.
    """
        ...
    def validateOnStart(self) -> None:
    """
    Validates that all resources required by the engine are available.
    If the node that runs the engine does not have the required resources, eg: GPUs specified in the HardwareProfile
    of NodePool, the engine will not start and the error will be added to the engine's error list and are available
    via {@link #summary}.
    """
        ...
    def config(self, secrets: bool=None) -> Genai.UnstructuredQuery.Engine.Config:
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
    def typeConfig(cls) -> Genai.UnstructuredQuery.Engine.Config:
    """
    @return type configuration for the given {@link Configurable} type.
    E.g. {@see REST} & {@see RestConfig}
    """
        ...
    @classmethod
    def allHandlers(cls) -> Union[Array[Genai.MockUnstructuredQueryEngine]]:
    """
    Returns all handlers that can be used for requests
    """
        ...
    @classmethod
    def stopAllHandlers(cls) -> Union[Array[Genai.MockUnstructuredQueryEngine]]:
    """
    Stops all running handlers
    """
        ...
    @classmethod
    def forConfig(cls, config: Genai.UnstructuredQuery.Engine.Config) -> Union[Genai.MockUnstructuredQueryEngine]:
    """
    Retrieves the deployed Engine for the given
    {@link Genai.UnstructuredQuery.Engine.Config}, or
    deploys it if it has not yet been started.
    
    Declared in py so we don't need to initialize any specific runtime
    
    @param config
      The config for which to get or start an Engine.
    @return the deployed Engine.
    """
        ...
    def initialize(self, forceReload: bool=None) -> Genai.MockUnstructuredQueryEngine:
    """
    Initialize the engine
    """
        ...
    def isInitialized(self) -> bool:
    """
    Returns whether the engine has been initialized.
    """
        ...
    def activeConfig(self) -> Union[Genai.UnstructuredQuery.Engine.Config]:
    """
    Returns the {@link Genai.UnstructuredQuery.Engine.Config} with which the engine was initialized.
    """
        ...
    def processResults(self, pipelineOutput: any, genAiResultToProcess: Genai.Query.Result) -> None:
    """
    Post processor function used internally to get rationale, sources, and persist relations.
    Doesn't return anything. Adds attribution, rationale, sources to pipelineOutput and persists relations.
    
    @param pipelineOutput
        The REA PipelineOutput class.
    
    @param genAiResultToProcess
        The {@link Genai.Query.Result} to be further processed
    """
        ...
    @classmethod
    def upsertSourceFiles(cls, sourceFileNames: Array[str]=None) -> Union[Array[Genai.SourceFile]]:
    """
    Helper function to populate mocked {@link Genai.SourceFile}s
    """
        ...


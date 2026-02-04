#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.EvalMetricsSpec import EvalMetricsSpec
from c3.platform.GraphDataSpec import GraphDataSpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjMapp import ObjMapp
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.LoadGraphSpec import LoadGraphSpec
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Export import Export
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.uiGraphComponent.DataVisualizationGraph import DataVisualizationGraph
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.Graph import Graph
from c3.platform.EvalMetricsResult import EvalMetricsResult
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.CollectCountsSpec import CollectCountsSpec
from c3.platform.MapType import MapType
from c3.platform.GraphConfig import GraphConfig
from c3.platform.Exclude import Exclude
from c3.platform.File import File
from c3.platform.TraverseGraphSpec import TraverseGraphSpec

# Python definitions for the C3 type DataVisualizationGraph

E = TypeVar('E')
V = TypeVar('V')

class DataVisualizationGraph(Generic[E, V], InMemoryGraph[V, E]):
    """
    Base type for data visualization graph.  Applications using this type should extend it with their own type and
    parameterize their type with entity types that mix {@link Vertex} and {@link Edge}.
    
    The type that extends this type may override the functions {@link DataVisualizationGraph#loadFullGraphInMemory},
    {@link DataVisualizationGraph#loadFullGraph} and {@link DataVisualizationGraph#getFilteredGraph} if more complex
    functionality is desired, or use the base implementations as provided.
    
    @remarks this represents a made instance of DataVisualizationGraph
    """
    
    m_vertices: Optional[Array[V]]=None
    """
    All vertices in this graph
    """

    m_edges: Optional[Array[E]]=None
    """
    All edges in this graph
    """

    m_nonTraversableVertices: Optional[Array[V]]=None
    """
    Set of all vertices that are not traversable
    E.g Graph is : A - B - C, and if B is not traversable then A and C are disconnected
    """

    m_cacheKey: Optional[str]=None
    """
    KEY: NodeId:GUID
    This is to store the graph on the root action context
    """
    def __init__(self, m_vertices: Optional[Array[V]]=None, m_edges: Optional[Array[E]]=None, m_nonTraversableVertices: Optional[Array[V]]=None, m_cacheKey: Optional[str]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[DataVisualizationGraph[V, E]]:
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
    def fromJsonString(cls, json: str) -> Union[DataVisualizationGraph[V, E]]:
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
    def fromXmlString(cls, xml: str) -> Union[DataVisualizationGraph[V, E]]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[DataVisualizationGraph[V, E]]:
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
    def replaceType(self, old: Type, new: Type) -> DataVisualizationGraph[V, E]:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> DataVisualizationGraph[V, E]:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> DataVisualizationGraph[V, E]:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[DataVisualizationGraph[V, E]]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[DataVisualizationGraph[V, E]]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> DataVisualizationGraph[V, E]:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> DataVisualizationGraph[V, E]:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> DataVisualizationGraph[V, E]:
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
    def validateObj(self) -> DataVisualizationGraph[V, E]:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> DataVisualizationGraph[V, E]:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> DataVisualizationGraph[V, E]:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> DataVisualizationGraph[V, E]:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> DataVisualizationGraph[V, E]:
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
    def withoutFieldAtPath(self, path: str) -> DataVisualizationGraph[V, E]:
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
    def withoutField(self, field: str) -> DataVisualizationGraph[V, E]:
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
    def withoutField(self, field: FieldType) -> DataVisualizationGraph[V, E]:
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
    def withoutFields(self, fields: Array[str]) -> DataVisualizationGraph[V, E]:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> DataVisualizationGraph[V, E]:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> DataVisualizationGraph[V, E]:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> DataVisualizationGraph[V, E]:
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
    def defaultField(self, field: str) -> DataVisualizationGraph[V, E]:
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
    def defaultField(self, field: FieldType) -> DataVisualizationGraph[V, E]:
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
    def unsetField(self, field: str) -> DataVisualizationGraph[V, E]:
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
    def unsetField(self, field: FieldType) -> DataVisualizationGraph[V, E]:
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
    def removeField(self, field: str) -> DataVisualizationGraph[V, E]:
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
    def removeField(self, field: FieldType) -> DataVisualizationGraph[V, E]:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> DataVisualizationGraph[V, E]:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> DataVisualizationGraph[V, E]:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> DataVisualizationGraph[V, E]:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> DataVisualizationGraph[V, E]:
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
    def mergeJson(self, json: any) -> DataVisualizationGraph[V, E]:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> DataVisualizationGraph[V, E]:
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
    def sumObj(self, other: Obj, deep: bool=None) -> DataVisualizationGraph[V, E]:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[DataVisualizationGraph[V, E]]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[DataVisualizationGraph[V, E]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[DataVisualizationGraph[V, E]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[DataVisualizationGraph[V, E]]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[DataVisualizationGraph[V, E]]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, DataVisualizationGraph[V, E]]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, DataVisualizationGraph[V, E]]]:
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
    def toBuilder(self) -> ObjBuilder[DataVisualizationGraph[V, E]]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[DataVisualizationGraph[V, E]]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> DataVisualizationGraph[V, E]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> DataVisualizationGraph[V, E]:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> DataVisualizationGraph[V, E]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> DataVisualizationGraph[V, E]:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> DataVisualizationGraph[V, E]:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> DataVisualizationGraph[V, E]:
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
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> DataVisualizationGraph[V, E]:
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
    def afterMake(self) -> DataVisualizationGraph[V, E]:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> DataVisualizationGraph[V, E]:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[DataVisualizationGraph[V, E]]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> DataVisualizationGraph[V, E]:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def config(self, secrets: bool=None) -> GraphConfig:
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
    def typeConfig(cls) -> GraphConfig:
    """
    @return type configuration for the given {@link Configurable} type.
    E.g. {@see REST} & {@see RestConfig}
    """
        ...
    def vertices(self, filter: str=None, bindings: ObjMapp=None) -> Union[Array[V]]:
    """
    API to obtain the vertices in the graph
    
    @param filter
               Vertices with condition that evaluates to true and are connected will be included in graph.
    @param bindings
               Bindings to be applied for filter evaluations.
    @returns All the vertices for the given graph
    """
        ...
    def containsVertex(self, vertex: V) -> bool:
    """
    Returns whether a given vertex exists in the graph. Equality is measured by considering the vertex type and the vertex id
    @param vertex
               vertex to be checked
    true / false determining whether the vertex is present in the graph
    """
        ...
    def edges(self, filter: str=None, bindings: ObjMapp=None) -> Union[Array[E]]:
    """
    API to obtain edges in the graph
    
    @param filter
               Vertices with condition that evaluates to true and are connected will be included in graph.
    @param bindings
               Bindings to be applied for filter evaluations.
    @return All the edges for the given graph
    """
        ...
    def containsEdge(self, edge: E) -> bool:
    """
    Returns whether a given edge exists in the graph. Equality is measured by considering the edge type and the edge id
    @param edge
               edge to be checked
    true / false determining whether the edge is present in the graph
    """
        ...
    def connectedVertices(self, vertex: V=None, depth: int=None) -> Union[Array[V]]:
    """
    All the vertices connected to the given vertex
    @param vertex
               The vertex for which connected vertices need to be retrieved
    @param depth
               Optional depth argument denoting how many hops to travel for connected vertices
    @return Array of vertices connected to the input vertex
    """
        ...
    def connectedEdges(self, vertex: V=None) -> Union[Array[E]]:
    """
    All the edges connected to the given vertex
    @param vertex
             Vertex for which connected edges need to be found
    @return A set of vertices connected to the given vertex
    """
        ...
    def connectedPaths(self, fromVertex: V=None, toVertex: V=None, noOfPaths: int=None, allowCycles: bool=None, maxDepth: int=None) -> Union[Array[Array[V]]]:
    """
    API to return all vertices between fromVertex and toVertex
    We default to returning all paths from fromVertex to toVertex unless specified using noOfPaths
    The first
    @param fromVertex
             Starting point for the path
    @param toVertex
             Ending point for the path
    @param noOfPaths (optional)
             This defaults to all the paths. You can optionally provide the paths that you need
    @param allowCycles
             if true, will not throw errors when a cycle is found in graph.
    @param maxDepth
              Maximum number of hops to reach toVertex. If not specified, it will allow any possible.
    @return Array of paths from "fromVertex" to "toVertex"
    """
        ...
    def allSubGraphs(self) -> Union[Array[Graph[V, E]]]:
    """
    @return List of all the connected sub-graphs
    """
        ...
    def connectedSubGraph(self, vertex: V=None) -> Union[Graph[V, E]]:
    """
    Obtain the connected sub-graph for the given vertex
    @param vertex
               Vertex for which connected sub-graph is desired
    @return The sub-graph connected with the given vertex
    """
        ...
    def filteredSubGraph(self, vertex: V=None, vertexFilter: str=None, edgeFilter: str=None, bindings: ObjMapp=None, doCache: bool=None) -> Union[Graph[V, E]]:
    """
    Obtain the connected sub-graph for the given vertex with additional filters applied to vertex and edge
    @param vertex
               Vertex for which connected sub-graph is desired
    @param vertexFilter
               Vertices with condition that evaluates to true and are connected will be included in graph.
    @param edgeFilter
               Edges with condition that evaluates to true and are connected will be included in graph.
    @param bindings
               Bindings to be applied for filter evaluations.
    @param doCache
               If true, the engine will return the Graph instance with just m_cacheKey value populated and use
                 the cached graph (on the root action context) for any further computation on the graph
    
    @return The sub-graph connected with the given vertex
    """
        ...
    def filteredDirectedSubGraph(self, vertex: V, spec: TraverseGraphSpec) -> Graph[V, E]:
    """
    Obtain the connected sub-graph for the given vertex with additional filters and direction applied to vertex and edge
    @param vertex
               Vertex for which connected sub-graph is desired
    @param spec
               The spec for loading vertices and edges data
    
    @return The sub-graph connected with the given vertex
    """
        ...
    def collectCounts(self, vertex: V, countsSpec: CollectCountsSpec=None) -> Map[str, int]:
    """
    Calculates the number of times you would reach each terminal node if traversed the entire graph starting
    from vertex and moved along an edge a number of times equal to its weight. A terminal vertex is a
    source or sink vertex depending on whether you are traversing in direction source or sink respectively
    (which you specify in TraverseGraphSpec).
    
    For example, if you had the graph with edge weights A->B = 2, B->C = 3, A->C = 4, B->D = 1 that looks like:
                   /> D
            A -> B -> C
              \_____/
    
    then calling collectCounts on A in direction sink (specified in TraverseGraphSpec)
    would return a map with {C: 10, D: 2}.
    C is 10 because along path A -> B -> C we have edge weights 2 * 3 = 6 plus along path A -> C weight 4 equals 10.
    If instead we started from vertex C and went in direction source, then we would get {A: 10}.
    
    @param vertex
               Vertex to start traversal from and collect all required nodes
    @param spec
               The spec to for which direction to reverse and what to count.
    
    @return A map where the key is vertex id and the value is count of number of times you reached that vertex
    
    @see #collectCountsBatch
    """
        ...
    def collectCountsBatch(self, vertices: Array[V]=None, countsSpec: CollectCountsSpec=None) -> Array[Map[str, int]]:
    """
    Like collectCounts, but this batch version does it for every single vertex you pass in.
    
    Much more efficient if graph has lots of overlap because it prevents duplicate traversals.
    
    @param vertices
               List of vertices to start traversal from and collect all required nodes.
               Return result will match this order.
    @param spec
               The spec to for which direction to reverse and what to count.
    
    @return A list where each element corresponds to that result for vertex at same index in input vertices.
            Each element is a map where the key is vertex id and the value is count of number of
            times you reached that vertex.
    
    @see #collectCounts
    """
        ...
    def pathToSinkNodes(self, vertex: V, allowCycles: bool=None) -> Union[Array[Array[V]]]:
    """
    Treating the graph as undirected, returns all paths from given vertex
    to the graph's leaf nodes.
    
    Note that in traditional graph theory, sink nodes are vertices with out-degree of 0
    so in an undirected graph only isolated vertices are sinks. Here when we say sink nodes,
    we mean leaf nodes.
    
    e.g. Consider the graph
    A <-> B,C
    B <-> D,E
    G <-> C
    C <-> F
                 A       G
             B       C
           D   E       F
    
    Path to leaf nodes for Vertex A would be -> [[A,B,D], [A,B,E], [A,C,F], [A,C,G]]
    Path to leaf nodes for Vertex C would be -> [[C,G], [C,F], [C,A,B,D], [C,A,B,E]]
    
    @param vertex
             Starting vertex for the path to leaf nodes
    @param allowCycles
             if true, will not throw errors when a cycle is found in graph provided.
    @return a list of list of vertices for every path to the sink node from the vertex
    """
        ...
    @classmethod
    def makeGraph(cls, vertices: Array[V]=None, edges: Array[E]=None, nonTraversableVertices: Array[V]=None, doCache: bool=None) -> Union[Graph[V, E]]:
    """
    Create an instance of InMemoryGraph
    @param vertices
                  Set of vertices participating in the graph
    @param edges
                  Set of edges in the graph
    @param nonTraversableVertices
                  Set of non traversable vertices
    @param doCache
                 If true, the engine will return the Graph instance with just m_cacheKey value populated and use
                 the cached graph (on the root action context) for any further computation on the graph
    @return An InMemory representation of the graph
    """
        ...
    @classmethod
    def loadGraph(cls, batchSize: int=None, threads: int=None, vertexSpec: GraphDataSpec=None, edgeSpec: GraphDataSpec=None, doCache: bool=None) -> Union[Graph[V, E]]:
    """
    Load the graph from db to memory from the given parametric vertex and edge type
    @param batchSize
                  Optional batchSize for number of objects for scan query batch (default 100)
    @param threads
                  Optional threads specifying number of parallel threads scan query should use (default 1)
    @param vertexSpec
                  Spec determining include and filter on vertices
    @param edgeSpec
                  Spec determining include and filter on edges
    @param doCache
                 If true, the engine will return the Graph instance with just m_cacheKey value populated and use
                 the cached graph (on the root action context) for any further computation on the graph
    """
        ...
    def addVertices(self, vertices: Stream[V]) -> Graph[V, E]:
    """
    WARNING: Do not call this frequently. This function will have no effect unless you then later call addEdges.
    Calling {@link #addEdges} will then be an expensive operation that will trigger a complete rebuild of the graph.
    
    Add vertices to an existing graph. Currently only supported for in memory 'cached' graphs & persisted graphs.
    For persisted graphs, only in memory copy of that graph will be updated. On another load of the persisted copy,
    user will have to call addVertices again.
    @param vertices
                  Vertices to be added to the given graph
    @return pointer to the graph object
    """
        ...
    def addEdges(self, edges: Stream[E]) -> Graph[V, E]:
    """
    WARNING: Do not call this frequently.
    This is an expensive operation that will trigger a complete rebuild of the graph.
    
    Add edges to an existing graph. Currently only supported for in memory 'cached' graphs & persisted graphs
    For persisted graphs, only in memory copy of that graph will be updated. On another load of the persisted copy,
    user will have to call addVertices again.
    @param edges
                  Edges to be added to the given graph
    @return pointer to the graph object
    """
        ...
    @classmethod
    def cacheKey(cls, spec: LoadGraphSpec) -> str:
    """
    Generate cache key for the given graph spec. Returns key for graphs stored in global cache
    """
        ...
    @classmethod
    def saveGraph(cls, spec: LoadGraphSpec) -> Graph[V, E]:
    """
    Save the graph from vertices and edges stored in db to the persistent cache. The vertices & edges will be stored
    independently for performance reasons and if the TenantConfig : 'PersistedGraphCacheEnabled' is set to true,
    then all the graph operations should be using this stored graph
    @spec
        Spec to save graph
    @return handle to the graph object that can be used for further operations
    """
        ...
    @classmethod
    def saveVertices(cls, spec: LoadGraphSpec) -> Export:
    """
    API to to save vertices of a graph in the file system
    @param spec
            Spec should be the whole spec for the full graph. This is required because the cache key will be generated
            based on the full spec of the graph which will be used in other graph operations
    @return the pointer to the export batch job that will save the edges in a distributed manner
    """
        ...
    @classmethod
    def saveEdges(cls, spec: LoadGraphSpec) -> Export:
    """
    API to to save edges of a graph in the file system
    @param spec
            Spec should be the whole spec for the full graph. This is required because the cache key will be generated
            based on the full spec of the graph which will be used in other graph operations
    @return the pointer to the export batch job that will save the edges in a distributed manner
    """
        ...
    @classmethod
    def saveVerticesWithStream(cls, spec: LoadGraphSpec) -> File:
    """
    API to to save vertices of a graph to the persistent cache in stream fashion.
    @param spec
            Spec should be the whole spec for the full graph. This is required because the cache key will be generated
            based on the full spec of the graph which will be used in other graph operations
    @return the file in which the vertices are saved
    """
        ...
    @classmethod
    def saveEdgesWithStream(cls, spec: LoadGraphSpec) -> File:
    """
    API to to save edges of a graph to the persistent cache in stream fashion.
    @param spec
            Spec should be the whole spec for the full graph. This is required because the cache key will be generated
            based on the full spec of the graph which will be used in other graph operations
    @return the file in which the edges are saved
    """
        ...
    def uncache(self, clearPersisted: bool=None) -> None:
    """
    Un-cache a cached graph. This will remove In-memory instance of graph when the optional flag is false.
    
    @param clearPersisted
              When true, will clear any persisted cache entries for graph and components as well. i.e saved vertices and edges.
    """
        ...
    def persistedGraphCacheFilePath(self) -> Union[str]:
    """
    return file path in which graph is saved.
    """
        ...
    def persistedPartsCacheFilePath(self) -> Union[str]:
    """
    return file path in which vertices/edges are saved.
    """
        ...
    def readObjs(self, targetType: Type) -> Stream[Obj]:
    """
    API to read objs in a streaming fashion for a particular type on the graph. These can be any type of objs that the
    vertices or edges can reach to and are included in this graph
    @param targetType
                  Type for which objs need to be read
    @return a stream of objs of the target type
    """
        ...
    def fetchObjStream(self, targetType: Type, spec: FetchStreamSpec=None) -> Stream[Obj]:
    """
    Fetches multiple obj instances based on a specification.
    @param targetType
                  Type for which objs need to be fetched
    @param spec
                  Specification of what data to fetch.  If not specified, all objs will be returned for the type.
    @return requested obj stream of target type.
    """
        ...
    def evalMetrics(self, targetType: Type, spec: EvalMetricsSpec) -> EvalMetricsResult:
    """
    Evaluates various metrics for sources
    @param targetType
                   Type on which metric needs to be evaluated
    @param spec
                   The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
    @return the result of evaluation containing multiple source and multiple metrics
    """
        ...
    @classmethod
    def generateRandomGraph(cls, vertexCount: int=None, edgeCount: int=None, vertexInclude: str=None, edgeInclude: str=None, doCache: bool=None) -> Union[Graph[V, E]]:
    """
    Generates a random graph with given number of vertices and edges.
    
    @param vertexCount
             Number of vertices to be generated.
    @param edgeCount
             Number of edges to be generated.
    @param vertexInclude
             Include spec for vertex type. Fields that should be populated on the randomly generated vertices.
    @param edgeInclude
             Include spec for edge type. Fields that should be populated on the randomly generated edges.
    @param doCache
             If true, the engine will return the Graph instance with just m_cacheKey value populated and
             will save the generated graph in Cluster node memory and persisted cache type CachedGraph.
             If false, will return graph object.
    @return graph generated.
    """
        ...
    def topologicalSort(self) -> Union[Array[V]]:
    """
    topological sort the graph (only works for directed graph)
    @return the id of vertex in topological sequence
    """
        ...
    @classmethod
    def emptyGlobalGraphCache(cls) -> None:
    """
    Empty the GlobalGraphCache for the cluster
    """
        ...
    @classmethod
    def getVertexSpec(cls) -> Union[GraphDataSpec]:
    """
    Gets vertex spec. Called in {@link DataVisualizationGraph#loadFullGraphInMemory} and
    {@link DataVisualizationGraph#loadFullGraph} if no `vertexSpec` argument is passed to those functions.
    
    @return The spec defining `include` and `filter` for vertices.
    """
        ...
    @classmethod
    def getEdgeSpec(cls) -> Union[GraphDataSpec]:
    """
    Gets edge spec. Called in {@link DataVisualizationGraph#loadFullGraphInMemory} and
    {@link DataVisualizationGraph#loadFullGraph} if no `edgeSpec` argument is passed to those functions.
    
    @return The spec defining `include` and `filter` for edges.
    """
        ...
    @classmethod
    def loadFullGraphInMemory(cls, vertexSpec: GraphDataSpec=None, edgeSpec: GraphDataSpec=None, batchSize: int='100', threads: int='1') -> Union[DataVisualizationGraph]:
    """
    Loads the full graph in memory and returns the json object containing vertices, edges, and cache key.
    
    @param vertexSpec
              The spec defining `include` and `filter` for vertices.
    @param edgeSpec
              The spec defining `include` and `filter` for edges.
    @param batchSize
              The number of objects for scan query batch operation (default 100).
    @param threads
              The number of parallel threads which scan query should use (default 1).
    @return The instance of {@link DataVisualizationGraph}.
    """
        ...
    @classmethod
    def loadFullGraph(cls, vertexSpec: GraphDataSpec=None, edgeSpec: GraphDataSpec=None, batchSize: int='100', threads: int='1') -> Union[DataVisualizationGraph]:
    """
    Loads the full graph and returns it.
    
    @param vertexSpec
              The spec defining `include` and `filter` for vertices.
    @param edgeSpec
              The spec defining `include` and `filter` for edges.
    @param batchSize
              The number of objects for scan query batch operation (default 100).
    @param threads
              The number of parallel threads which scan query should use (default 1).
    @return The instance of {@link DataVisualizationGraph}.
    """
        ...
    @classmethod
    def getFilteredGraph(cls, verticesIds: str=None, edgesIds: str=None) -> Union[DataVisualizationGraph]:
    """
    Filters in-memory graph and returns vertices with ids from the given `verticesIds`,
    and edges connected to these vertices with ids from the given `edgesIds`.
    
    @param verticesIds
              The vertices ids, represented as a string and separated by comma.
              The vertex id should not contain commas.
    @param edgesIds
              The edges ids, represented as a string and separated by comma.
              The edge id should not contain commas.
    @return The instance of {@link DataVisualizationGraph}.
    """
        ...


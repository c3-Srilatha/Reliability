#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.Include import Include
from c3.platform.GenerateDataSpec import GenerateDataSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.genAiBase.Genai.Embedder.Spec import Genai.Embedder.Spec
from c3.platform.RefreshMetricsBatchJob import RefreshMetricsBatchJob
from c3.platform.WithKey import WithKey
from c3.platform.ActionStats import ActionStats
from c3.platform.EvalSpec import EvalSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ObjError import ObjError
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Data import Data
from c3.platform.SchemaInfo import SchemaInfo
from c3.platform.RefreshMetricsSpec import RefreshMetricsSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.CheckReferencesResult import CheckReferencesResult
from c3.platform.FetchResult import FetchResult
from c3.platform.GetMissingSpec import GetMissingSpec
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Config import Config
from c3.platform.RefreshDefaultFieldsSpec import RefreshDefaultFieldsSpec
from c3.platform.ScanStats import ScanStats
from c3.platform.RefreshAnalyticsSpec import RefreshAnalyticsSpec
from c3.platform.ValidatePathResult import ValidatePathResult
from c3.platform.ObjList import ObjList
from c3.platform.MapBuilder import MapBuilder
from c3.genaiPlatform.GenaiCore.Embedder import GenaiCore.Embedder
from c3.platform.MergeSpec import MergeSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MergeAllSpec import MergeAllSpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.PushStream import PushStream
from c3.platform.ExportDataSpec import ExportDataSpec
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Stream import Stream
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.RunCreatedOrUpdatedBatchJob import RunCreatedOrUpdatedBatchJob
from c3.platform.SetBuilder import SetBuilder
from c3.platform.RemoveAllSpec import RemoveAllSpec
from c3.platform.Transaction import Transaction
from c3.platform.RefreshBatchJob import RefreshBatchJob
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.BatchFetchSpec import BatchFetchSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.EvaluateArrowStreamSpec import EvaluateArrowStreamSpec
from c3.platform.Pair import Pair
from c3.platform.File import File
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.TimeRange import TimeRange
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ExportDataResult import ExportDataResult
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Meta import Meta
from c3.platform.RefreshCalcFieldsBatchJob import RefreshCalcFieldsBatchJob
from c3.platform.RunCreatedOrUpdatedSpec import RunCreatedOrUpdatedSpec
from c3.platform.ImportDataSpec import ImportDataSpec
from c3.platform.CreateBatchObjStreamSpec import CreateBatchObjStreamSpec
from c3.platform.RedShiftExportDataSpec import RedShiftExportDataSpec
from c3.platform.TouchSpec import TouchSpec
from c3.genAiBase.Genai.Project import Genai.Project
from c3.platform.EntityType import EntityType
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.TSEvalSpec import TSEvalSpec
from c3.platform.Filter import Filter
from c3.platform.MapBuilder import MapBuilder
from c3.platform.CheckReferencesSpec import CheckReferencesSpec
from c3.platform.Type import Type
from c3.genaiPlatform.GenaiCore.VectorStore.SimilaritySearchResult import GenaiCore.VectorStore.SimilaritySearchResult
from c3.platform.CellTuple import CellTuple
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValueType import ValueType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.EvaluateResult import EvaluateResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.RefreshDepsSpec import RefreshDepsSpec
from c3.platform.SetType import SetType
from c3.platform.Type import Type
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.PushStream import PushStream
from c3.platform.MapBuilder import MapBuilder
from c3.platform.RefreshAnalyticsBatchJob import RefreshAnalyticsBatchJob
from c3.platform.Exclude import Exclude
from c3.platform.ClearCollectionSpec import ClearCollectionSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.StartImportDataSpec import StartImportDataSpec
from c3.platform.ObjBatch import ObjBatch
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.ObjList import ObjList
from c3.platform.RefreshUniqueIndexesBatchJob import RefreshUniqueIndexesBatchJob
from c3.platform.ArrayType import ArrayType
from c3.platform.TsInvalidation import TsInvalidation
from c3.genaiPlatform.GenaiCore.SimilaritySearchSpec import GenaiCore.SimilaritySearchSpec
from c3.platform.Promise import Promise
from c3.platform.FetchResult import FetchResult
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Obj import Obj
from c3.platform.RefreshCalcFieldsSpec import RefreshCalcFieldsSpec
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.ImportDataResult import ImportDataResult
from c3.platform.EvaluateSpec import EvaluateSpec
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SecondaryDsUpsert import SecondaryDsUpsert
from c3.platform.ScanSpec import ScanSpec
from c3.platform.RefreshDefaultFieldsBatchJob import RefreshDefaultFieldsBatchJob
from c3.platform.RefreshUniqueIndexesSpec import RefreshUniqueIndexesSpec
from c3.genaiPlatform.GenaiCore.PgVector import GenaiCore.PgVector
from c3.platform.VersionEdit import VersionEdit
from c3.platform.ExistsSpec import ExistsSpec

# Python definitions for the C3 type Genai.Memory


class Memory():
    """
    Persists a memory record with its embedding in pgvector.
    
    @remarks this represents a made instance of Genai.Memory
    """
    
    id: Optional[str]
    """
    A unique identifier that can be manually assigned or generated automatically during object creation. This
    identifier cannot be altered after the object has been persisted.
    """

    versionEdits: Optional[Array[VersionEdit]]=None
    """
    Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
    crucial for accessing previous versions of an object and is entirely managed by the system.
    
    @see Ann.Db#versionHistory
    """

    name: Optional[str]=None
    """
    Name of the Obj instance
    """

    meta: Optional[Meta]=None
    """
    Various system fields.
    """

    version: Optional[int]=None
    """
    Version number used for optimistic concurrency.  Automatically managed by the system.
    
    Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
    be done with great caution.
    """

    typeWithBindings: Optional[Type]=None
    """
    Persists concrete type with bindings for generic types where instance has parameter bindings
    """

    memory: Optional[str]=None
    """
    The content that corresponds to this vector.
    e.g. "To address fault code AXZ, first replace part A...."
    """

    embedding: Optional[str]
    """
    The numeric content that similarity search is conducted on.
    e.g. "[0.1, 0.05, 0.21, ...]"
    """
    def __init__(self, id: Optional[str]=None, versionEdits: Optional[Array[VersionEdit]]=None, name: Optional[str]=None, meta: Optional[Meta]=None, version: Optional[int]=None, typeWithBindings: Optional[Type]=None, memory: Optional[str]=None, embedding: Optional[str]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[Genai.Memory]:
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
    def fromJsonString(cls, json: str) -> Union[Genai.Memory]:
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
    def fromXmlString(cls, xml: str) -> Union[Genai.Memory]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.Memory]:
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
    def replaceType(self, old: Type, new: Type) -> Genai.Memory:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Memory:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Memory:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Memory]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Memory]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.Memory:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Memory:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Memory:
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
    def validateObj(self) -> Genai.Memory:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.Memory:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.Memory:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.Memory:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.Memory:
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
    def withoutFieldAtPath(self, path: str) -> Genai.Memory:
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
    def withoutField(self, field: str) -> Genai.Memory:
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
    def withoutField(self, field: FieldType) -> Genai.Memory:
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
    def withoutFields(self, fields: Array[str]) -> Genai.Memory:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.Memory:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Genai.Memory:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.Memory:
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
    def defaultField(self, field: str) -> Genai.Memory:
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
    def defaultField(self, field: FieldType) -> Genai.Memory:
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
    def unsetField(self, field: str) -> Genai.Memory:
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
    def unsetField(self, field: FieldType) -> Genai.Memory:
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
    def removeField(self, field: str) -> Genai.Memory:
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
    def removeField(self, field: FieldType) -> Genai.Memory:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.Memory:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.Memory:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.Memory:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.Memory:
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
    def mergeJson(self, json: any) -> Genai.Memory:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.Memory:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Genai.Memory:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Genai.Memory]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Genai.Memory]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.Memory]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Genai.Memory]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Genai.Memory]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Genai.Memory]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.Memory]]:
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
    def toBuilder(self) -> ObjBuilder[Genai.Memory]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Genai.Memory]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.Memory:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.Memory:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.Memory:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Genai.Memory:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.Memory:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Genai.Memory:
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
    def make(cls, s: str) -> Union[Genai.Memory]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.Memory:
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
    def afterMake(self) -> Genai.Memory:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Genai.Memory:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.Memory]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.Memory:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[Genai.Memory]:
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
    def fetch(cls, filter: Filter) -> FetchResult[Genai.Memory]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[Genai.Memory]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[Genai.Memory]]]:
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
    def fetchOvi(cls, spec: FetchSpec=None) -> Union[Any]:
    """
    Used internally to fetch as a stream (e.g. FetchResultOvi)
    """
        ...
    def get(self, include: str=None) -> Union[Genai.Memory]:
    """
    Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
    
    @param include
              Optional include spec to retrieve.
    @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
            those fields will be returned. Otherwise the entire obj will be returned.
    """
        ...
    def getSpecific(self, include: str=None) -> Union[Genai.Memory]:
    """
    Gets an instance of a single obj in it's leaf type if the type is extendable.  If the caller is not authorized
    to fetch the obj, it will not be returned.
    
    @param include
              Optional include spec to retrieve.  Note that the include spec should reference only fields that are
              valid in the returned obj's type.  Otherwise an error may be thrown.
    @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
            those fields will be returned. Otherwise the entire obj will be returned.
    """
        ...
    def getMissing(self, spec: GetMissingSpec) -> Genai.Memory:
    """
    Function to check if an obj was already fetched with an include that contains at least the fields of a specified
    include and fetches the missing data if it wasn't.  The returned instance, by default will be the original instance
    if it included at least the data for the requested include spec.  Otherwise it will perform a fetch with the
    specified include and return that instance.  See {@link GetMissingSpec} for various options available governing
    the behavior.
    
    @param spec
              Spec that controls various aspects of the function's behavior.
    @return instance of the obj with all requested fields.
    """
        ...
    def getDirect(self, include: str=None) -> Union[Genai.Memory]:
    """
    Gets an obj instance directly from Cassandra, bypassing the normal fetch framework.  It is only valid for C3 types
    that are stored in Cassandra.
    
    IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
    apis as fast as direct IO apis.
    Use with caution!!!
    
    @param include
              Optional include spec to retrieve.
    @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
            those fields will be returned. Otherwise the entire obj will be returned.
    """
        ...
    def applyReverseEdit(self, versionEdit: VersionEdit) -> Genai.Memory:
    """
    Applies a reverse edit (e.g. VersionEdit) to an instance.
    
    @param versionEdit
           Reverse edit to apply
    
    @return The instance after applying the reverse edit.
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
    def fromString(cls, s: str) -> Union[Genai.Memory]:
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
    def create(self, spec: UpsertSpec=None) -> Union[Genai.Memory]:
    """
    Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
    instance already exist.
    
    @param spec
              Various parameters that control the operation of function.
    @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
            will have only those fields populated. Otherwise only the id field will be populated.
    """
        ...
    @classmethod
    def createBatch(cls, objs: Array[Genai.Memory], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
    specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
    returned {@link ObjList}.  This will fail if any of the instances already exist.
    
    @param objs
              New objs to create.
    @param spec
              Various parameters that control the operation of function.
    @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
            include spec is specified in the 'spec.include' field, then the returned objs will have only those
            fields populated. Otherwise only the id field will be populated.
    """
        ...
    @classmethod
    def createBatchObjStream(cls, objs: Stream[Genai.Memory], spec: CreateBatchObjStreamSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
    specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
    returned {@link ObjList}.  This will fail if any of the instances already exist.
    
    @param objs
              New objs to create.
    @param spec
              Various parameters that control the operation of function.
    @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
             `spec.includeObjsInResults`.
    """
        ...
    def update(self, srcObj: Genai.Memory=None, spec: UpsertSpec=None) -> Union[Genai.Memory]:
    """
    Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
    instance does not already exist.
    
    @param srcObj
           If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
           diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
    @param spec
           Various parameters that control the operation of function.
    @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
            obj will have only those fields populated. Otherwise only the id field will be populated.
    """
        ...
    def upsert(self, srcObj: Genai.Memory=None, spec: UpsertSpec=None) -> Union[Genai.Memory]:
    """
    Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
    exception will be thrown.
    
    @param srcObj
           If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
           diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
           doesn't already exist.
    @param spec
              Various parameters that control the operation of function.
    @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
            returned obj will have only those fields populated. Otherwise only the id field will be populated.
    """
        ...
    @overload
    def merge(self, spec: MergeSpec=None) -> Union[Genai.Memory]:
    """
    Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
    updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
    is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
    explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
    {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
    
    For collections, the merge operation is applied to every element in the source and updated collection rather than
    merging the collections themselves.  This means that every element will be merged with the element with the same
    key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
    add/append elements to a collection.
    
    Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
    
    If the operation fails an exception will be thrown.
    
    @param spec
              Various parameters that control the operation of function.
    @return The created or updated obj.
    
    @see Mergespec#csvInclude
    """
        ...
    @overload
    def merge(self, mergeInclude: str, spec: MergeSpec=None) -> Union[Genai.Memory]:
    """
    Merges an instance of a C3 type if it exists and creates it if it doesn't.
    
    @param mergeInclude
              Used to control which fields from the input obj are merged.  Only the fields indicated in the
              mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
              However, fields that wouldn't be persisted as part of the operation are ignored.
    @param spec
              Various parameters that control the operation of function.
    @return The created or updated obj.
    """
        ...
    def touch(self, spec: TouchSpec=None) -> Union[Genai.Memory]:
    """
    Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
    
    @param spec
              Various parameters that control the operation of function.
    
    @return The created or updated obj.
    """
        ...
    @classmethod
    def updateBatch(cls, objs: Array[Genai.Memory], srcObjs: Array[Genai.Memory]=None, spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
    specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
    returned {@link ObjList}.  This will fail if any of the instances don't already exist.
    
    @param objs
           Updated objs.
    @param srcObjs
           If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
           diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
           replace the existing one.
    @param spec
           Various parameters that control the operation of function.
    @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
            spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
            populated. Otherwise only the id field will be populated.
    """
        ...
    @classmethod
    def updateObjs(cls, objs: Callable[[], Union[Array[Genai.Memory]]], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
    called again to provide updated instances to be updated. If the operation fails for other reasons and
    {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
    Otherwise errors will be reported in the returned {@link ObjList}.
    
    @param objs
           Lambda providing objs to be upserted
    @param spec
           Various parameters that control the operation of the operation
    @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
            spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
            populated. Otherwise only the id field will be populated.
    """
        ...
    @classmethod
    def upsertBatch(cls, objs: Array[Genai.Memory], srcObjs: Array[Genai.Memory]=None, spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
    fails errors will be reported in the returned {@link ObjList}.
    
    @param objs
           Updated or new objs.
    @param srcObjs
           If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
           diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
           existing one if it doesn't already exist.
    @param spec
           Various parameters that control the operation of function.
    @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
            an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
            fields populated. Otherwise only the id field will be populated.
    """
        ...
    @classmethod
    def upsertObjs(cls, objs: Callable[[], Union[Array[Genai.Memory]]], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
    fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
    If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
    default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
    {@link ObjList}.
    
    @param objs
           Lambda providing objs to be upserted
    @param spec
           Various parameters that control the operation of the operation
    @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
            an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
            fields populated. Otherwise only the id field will be populated.
    """
        ...
    @classmethod
    def touchBatch(cls, objs: Array[Genai.Memory], spec: TouchSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
    objs will be considered an error.
    
    @param objs
           Objs to touch.
    
    @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
            include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
            populated. Otherwise only the id field will be populated.
    """
        ...
    @overload
    @classmethod
    def mergeBatch(cls, objs: Array[Genai.Memory], spec: MergeSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
    UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
    Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
    merge} function.
    
    If the operation fails errors will be reported in the returned {@link ObjList}.
    
    @param objs
              Objs to merge.
    @param spec
              Various parameters that control the operation of function.
    @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
            true.  Only the id field will be populated.
    
    @see Mergespec#mergeInclude
    @see Mergespec#csvInclude
    """
        ...
    @overload
    @classmethod
    def mergeBatch(cls, objs: Array[Genai.Memory], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
    UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
    Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
    merge} function.
    
    If the operation fails errors will be reported in the returned {@link ObjList}.
    
    @param objs
              Objs to merge.
    @param mergeInclude
              Used to control which fields from the input objs are merged.  Only the fields indicated in the
              mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
              However, fields that wouldn't be persisted as part of the operation are ignored.
    @param spec
              Various parameters that control the operation of function.
    @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
            true.  Only the id field will be populated.
    
    @see Mergespec#csvInclude
    """
        ...
    @classmethod
    def mergeObjs(cls, objs: Callable[[], Union[Array[Genai.Memory]]], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
    conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
    fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
    C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
    operation is described in the {@link merge} function.
    
    @param objs
           Lambda providing objs to be upserted
    
    @param objs
           Lambda providing objs to be merged
    @param mergeInclude
              Used to control which fields from the input objs are merged.  Only the fields indicated in the
              mergeinclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
              However, fields that wouldn't be persisted as part of the operation are ignored.
    @param spec
              Various parameters that control the operation of function.
    @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
            true.  Only the id field will be populated.
    
    @see Mergespec#csvInclude
    """
        ...
    @overload
    @classmethod
    def mergeAll(cls, mergeObj: Genai.Memory, spec: MergeAllSpec=None) -> Union[int]:
    """
    Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
    functions, the set of fields to be merged can be controlled by specifying an include spec in either
    {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
    can be controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as
    in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
    
    @param spec
              Various parameters that control the operation of function.
    @return The number of objs that were merged.
    """
        ...
    @overload
    @classmethod
    def mergeAll(cls, mergeObj: Genai.Memory, mergeInclude: str, spec: MergeAllSpec=None) -> Union[int]:
    """
    Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
    controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as in
    {@link FetchSpec#filter}.  If not specified, all instances will be merged.
    
    @param mergeInclude
              Used to control which fields from the input objs are merged.  Only the fields indicated in the
              mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
              However, fields that wouldn't be persisted as part of the operation are ignored.
    @param spec
              Various parameters that control the operation of function.
    @return The number of objs that were merged.
    """
        ...
    def remove(self, spec: UpsertSpec=None) -> bool:
    """
    Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
    
    If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
    saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
    function.
    
    @param spec
            Various parameters that control the operation of function.
    @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
    
    @see Ann.Db#archive
    """
        ...
    @classmethod
    def removeBatch(cls, objs: Array[Genai.Memory], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
    specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
    reported in the returned {@link ObjList}.
    
    If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
    saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
    function.
    
    @param objs
            Objs to remove.
    @param spec
            Various parameters that control the operation of function.
    @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
    
    @see Ann.Db#archive
    """
        ...
    @classmethod
    def removeAll(cls, confirm: bool, spec: RemoveAllSpec=None) -> int:
    """
    Removes multiple instances of a C3 type based.
    
    If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
    saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
    function.
    
    @param spec
            Spec controlling the operation
    @param confirm
            Must be specified as true.  Otherwise request will be rejected.
    @return The number of objs removed.  Note that under some circumstances the total number removed may not be
            known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
            connection can't return the value).  In those cases, this will return -1.
    """
        ...
    @classmethod
    def replace(cls, objs: Array[Genai.Memory], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory]]:
    """
    Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
    
    @param objs
            Updated or new objs.  Any existing objs that aren't included in objs will be removed.
    @param spec
            Various parameters that control the operation of function.
    @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
            specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
            populated. Otherwise only the id field will be populated.
    """
        ...
    def unremove(self) -> Union[Genai.Memory]:
    """
    Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
    {@link removeBatch} functions). If the operation fails an exception will be thrown.
    
    @return The recovered obj instance with all of its fields populated.
    
    @see Ann.Db#archive
    """
        ...
    def generateUniqueId(self) -> str:
    """
    Optional function to call during upsert/create/merge operations when an instance is being created and no value for
    the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
    short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
    generate the id based on other field values present in the input.  Note that if an instance already exists with the
    produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
    existing instances for performing updates.
    """
        ...
    @classmethod
    def beforeCreate(cls, objs: Array[Genai.Memory]) -> ObjList[Genai.Memory]:
    """
    Callback that is called synchronously during an operation that creates objs before those objs are created.  The
    implementer can perform validation or additional logic.
    
    @param objs
              List of objs that are about to be created.  The objs will be the entire input objs being created.
    @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
            of objs must match the input.
    """
        ...
    @classmethod
    def beforeUpdate(cls, objs: Array[Genai.Memory]) -> ObjList[Genai.Memory]:
    """
    Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
    implementer can perform validation or additional logic.
    
    @param objs
              List of objs that are about to be updated.  By default the objs will be the complete original source
              obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
              a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
              will have at least those requested fields.
    @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
            of objs must match the input.
    """
        ...
    @classmethod
    def beforeRemove(cls, objs: Array[Genai.Memory]) -> ObjList[Genai.Memory]:
    """
    Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
    implementer can perform validation or additional logic.
    
    @param objs
              List of objs that are about to be removed.  By default the objs will be the complete original source
              obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
              be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
              requested fields.
    @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
            of objs must match the input.
    """
        ...
    @classmethod
    def afterCreate(cls, objs: Array[Genai.Memory]) -> Union[Array[ObjError]]:
    """
    Callback that is called synchronously during a request that creates objs after those objs are created.  The
    implementer can perform additional logic.
    
    @param objs
              List of objs that were created.  The objs will already have been created.  By default, only the id
              is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
              `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
    @return List of any errors that were encountered.
    """
        ...
    @classmethod
    def afterUpdate(cls, objs: Array[Genai.Memory]) -> Union[Array[ObjError]]:
    """
    Callback that is called synchronously during a request that updates objs after those objs are updated.  The
    implementer can perform additional logic.
    
    @param objs
              List of objs that were updated.  The objs will already have been updated.  By default, only the id
              is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
              `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
    @return List of any errors that were encountered.
    """
        ...
    @classmethod
    def afterRemove(cls, objs: Array[Genai.Memory]) -> Union[Array[ObjError]]:
    """
    Callback that is called synchronously during a request that removes objs after those objs are removed.  The
    implementer can perform additional logic.
    
    @param objs
              List of objs that were removed.  The objs will already have been removed.  By default, only the id
              is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
              `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
              Since the objs will already have been removed, they will be in the state they were in prior to removal.
    @return List of any errors that were encountered.
    """
        ...
    def upsertDirect(self, merge: bool=None, clearNullValues: bool=None) -> Union[Obj]:
    """
    Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
    valid for C3 types that are stored in Cassandra.
    
    IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
    apis as fast as direct IO apis.
    Use with caution!!!
    
    @param clearNullValues
              If true then map keys with null values will be cleared.
    @return The created or updated obj with only the id populated if it exists and null otherwise.
    """
        ...
    @classmethod
    def beginUpsertToSecondaryDs(cls, type: Type) -> SecondaryDsUpsert:
    """
    Begin an upsert operation to the secondary data store.
    
    IMPORTANT:
    
    1. This is only valid for types that specify a secondary datastore.
    2. Currently only types that are not extendable are supported.
    
    @param type
              Type that the upsert operation is for.
    
    @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
    """
        ...
    @classmethod
    def clearCollection(cls, confirm: bool, spec: ClearCollectionSpec=None) -> None:
    """
    Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
    defaulting to using multi-row sql for the deletes.
    
    @param spec
           Spec controlling the operation
    @param confirm
           Must be specified as true.  Otherwise request will be rejected.
    """
        ...
    @classmethod
    def created(cls, txn: Transaction) -> None:
    """
    Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
    {@link merge} or their batch equivalents.
    
    The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
    being removed or updated.
    
    @param txn
           Contains details about which objs were created.  This is basically the ids of those objects.  The
           implementation will most likely need to fetch the actual instances to do whatever they need.
    """
        ...
    @classmethod
    def updated(cls, txn: Transaction) -> None:
    """
    Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
    {@link merge} or their batch equivalents.
    
    The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
    being removed or updated.
    
    @param txn
           Contains details about which objs were updated.  This is basically the ids of those objects.  The
           implementation will most likely need to fetch the actual instances to do whatever they need.
    """
        ...
    @classmethod
    def removed(cls, txn: Transaction) -> None:
    """
    Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
    {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
    archive operation or it is physically removed.
    
    The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
    being removed or updated.
    
    @param txn
           Contains details about which objs were removed.  This is basically the ids of those objects.  The
           implementation will most likely need to fetch the actual instances to do whatever they need.
    """
        ...
    @classmethod
    def eval(cls, spec: EvalSpec=None) -> Union[Data]:
    """
    This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
    Support column alias for evaluate & evalMetrics by passing an ObjNode
    e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
    e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
    """
        ...
    @classmethod
    def evaluate(cls, spec: EvaluateSpec) -> Union[EvaluateResult]:
    """
    Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
    the caller is authorized to fetch will be evaluated.
    
    @param spec
              Specification of projection expressions to evaluate and what objs to evaluate them on.
    @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
            expressions) with the evaluated result.
    """
        ...
    @classmethod
    def evaluateTupleStream(cls, spec: EvaluateSpec) -> Union[Stream[CellTuple]]:
    """
    Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
    the caller is authorized to fetch will be evaluated.
    
    @param spec
              Specification of projection expressions to evaluate and what objs to evaluate them on.
    @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
            expressions) with the evaluated result.
    """
        ...
    @classmethod
    def evaluatePii(cls, spec: EvaluateSpec) -> Union[EvaluateResult]:
    """
    Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
    the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
    {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
    conditions are met.
    
    @param spec
              Specification of projection expressions to evaluate and what objs to evaluate them on.
    @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
            expressions) with the evaluated result.
    """
        ...
    @classmethod
    def tsEval(cls, spec: TSEvalSpec) -> Union[Obj]:
    """
    Evaluates a single projection expression for timeseries data.
    
    Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
    or {@link MetricEvaluatable.evalMetrics} should be used instead.
    
    @param spec
              Specification of the projection expression and which timeseries to evaluate.
    @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
    
    @see MetricEvaluatable
    """
        ...
    @classmethod
    def evaluateOvi(cls, spec: EvaluateSpec=None) -> Union[Any]:
    """
    Used internally to evaluate as a stream
    """
        ...
    @classmethod
    def evaluateArrowStream(cls, spec: EvaluateArrowStreamSpec) -> Stream[Arrow]:
    """
    Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
    as stream of Arrow batches.
    
    @param spec
              Specification of what data to fetch.
    @return Stream of Arrow batches.
    """
        ...
    @classmethod
    def refreshCalcFields(cls, spec: RefreshCalcFieldsSpec=None) -> Union[RefreshCalcFieldsBatchJob]:
    """
    Refreshes calc fields for objs for a type based on a spec.
    
    @param spec
           Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
           other options that control the operation.
    @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
            otherwise.
    """
        ...
    @classmethod
    def refreshDefaultFields(cls, spec: RefreshDefaultFieldsSpec=None) -> Union[RefreshDefaultFieldsBatchJob]:
    """
    Refreshes default fields for objs for a type based on a spec.  Only entries that have null values for the
    specified fields will be refreshed.
    
    @param spec
           Spec that indicates which objs to refresh default fields for and which default fields to refresh, along with
           other options that control the operation.
    @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
            otherwise.
    """
        ...
    @classmethod
    def refreshUniqueIndexes(cls, spec: RefreshUniqueIndexesSpec=None) -> Union[RefreshUniqueIndexesBatchJob]:
    """
    Refreshes the unique index table entries for a type based on a spec.  For types that don't have unique indexes,
    and no types that extend them have unique indexes, this does nothing.
    
    @param spec
           Spec that indicates which objs to refresh unique indexes for along with other options that control
           the operation.
    @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
            otherwise.
    """
        ...
    @classmethod
    def refreshAnalytics(cls, spec: RefreshAnalyticsSpec=None) -> Union[RefreshAnalyticsBatchJob]:
    """
    Refreshes analytics for objs based on a spec.  This causes {@link AnalyticsContainer.invalidateSources} to be
    called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.
    
    @param spec
           Indicates which objs to refresh analytics for and what time range to use, along with other options that
           control the operation.
    @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
            otherwise.
    
    @see AnalyticsContainer
    @see SimpleMetric
    """
        ...
    @classmethod
    def refreshMetrics(cls, spec: RefreshMetricsSpec=None) -> Union[RefreshMetricsBatchJob]:
    """
    Refreshes the metrics cache for objs based on a spec.  This causes {@link SimpleMetric.invalidateCache} to be
    called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.  Only metrics with
    {@link SimpleMetric.cacheInterval} are considered.
    
    @param spec
           Indicates which objs to refresh the metrics cache for and what time range to use, along with other options
           that control the operation.
    @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
            otherwise.
    
    @see SimpleMetric
    """
        ...
    @classmethod
    def runCreatedOrUpdated(cls, spec: RunCreatedOrUpdatedSpec=None) -> Union[RunCreatedOrUpdatedBatchJob]:
    """
    Calls the created or updated function for objs based on a spec.  For types that have only one or the other that
    function will be called.  For those that have both, only the updated will be called.  If only created should be
    called in all cases, set the 'spec.createdOnly' field to true.
    
    @param spec
              Indicates which objs to call the functions for, along with other options that control the operation.
    @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
            otherwise.
    """
        ...
    @classmethod
    def refreshDeps(cls, spec: RefreshDepsSpec=None) -> None:
    """
    Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
    
    @param spec
           Indicates which types of dependencies should be refreshed along with other parameters that control the
           operation of the function.
    """
        ...
    @classmethod
    def processRefresh(cls, type: Type, jobType: Type, spec: ObjBatch) -> Union[RefreshBatchJob[Any, Any, Any]]:
    """
    Performs the refresh operation.
    
    @param type
           Type being refreshed.
    @param jobType
           Batch job type to for refresh.
    @param spec
           Parameters for the refresh operation.
    
    @return The batch job that was started.
    """
        ...
    @classmethod
    def startImportData(cls, spec: StartImportDataSpec=None) -> PushStream[Genai.Memory]:
    """
    @return a push stream to import instances of this type.
    """
        ...
    @classmethod
    def startImportDataWithStats(cls, spec: StartImportDataSpec=None) -> PushStreamWithStats[Genai.Memory]:
    """
    @return a push stream to import instances of this type.
    """
        ...
    @classmethod
    def importData(cls, spec: ImportDataSpec, async_: bool=None) -> Union[ImportDataResult]:
    """
    Imports instances into a C3 type from a file stored in Cassandra.
    
    @param spec
           Various parameters that control the operation of function.
    @param async
           Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
           synchronous)
    @return various statistics and errors for the import operation.
    """
        ...
    @classmethod
    def exportData(cls, spec: ExportDataSpec) -> Union[ExportDataResult]:
    """
    Exports instances of a C3 type to Cassandra.
    
    @param spec
              Various parameters that control the operation of function.
    @return A reference to the Content obj created that contains the exported data and various statistics about the
            export.
    """
        ...
    @classmethod
    def exportDataForRedShift(cls, spec: RedShiftExportDataSpec) -> Union[int]:
    """
    Exports instances of a C3 type to S3 for importing into Redshift.
    
    @param spec
              Various parameters that control the operation of function.
    @return Number of objs exported.
    """
        ...
    @classmethod
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[Genai.Memory]:
    """
    @return single instance of this Identified type by id.
    """
        ...
    def referenceInvalid(self) -> bool:
    """
    Shortcut function to return the value of the {@link meta#referenceInvalid} field for a Persistable reference
    returned in a reference field (or reference collection field) from a {@link fetch} operation.  Note that the
    {@link meta#referenceInvalid} field is only set when the include spec for the reference field specifically includes
    the {@link meta#referenceInvalid} field or otherwise requires the referenced type to be queried (either by join or
    separate query) to return the requested data from the reference.
    
    Note that this api DOES NOT query the database at all.  As such, calling it on any instance obtained in any way
    way other than what is described above will ALWAYS return false.
    
    @return the current value of the {@link meta#referenceInvalid} field for the instance.
    
    @see Meta#referenceInvalid
    """
        ...
    @classmethod
    def generateNewIds(cls, count: int=None) -> Union[Array[str]]:
    """
    Generates new unique ids for C3 Obj instances
    
    @param count
              Number of ids to generate.  Default is 1.
    @return The requested number of new unique ids.
    """
        ...
    @classmethod
    def generateData(cls, spec: GenerateDataSpec=None) -> Union[ActionStats]:
    """
    Generates synthetic data for a C3 type.
    
    @param spec
              Various parameters that control the operation of function.
    @return Various statistics for the operation.
    """
        ...
    @classmethod
    def profileData(cls, spec: FetchSpec=None) -> Union[GenerateDataSpec]:
    """
    Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
    
    @param spec
              Various parameters that control the operation of function.
    @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
    """
        ...
    def withoutIdentity(self) -> Union[Genai.Memory]:
    """
    Removes the identifying fields {@link #id}, {@link #meta}, and {@link #version} of the instance it's called on,
    such that a subsequent upsert will create a new instance.
    
    @return The requested obj without any of its identifying fields.
    """
        ...
    def typeOf(self) -> Union[EntityType]:
    """
    Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
    type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
    that type's base type chain.
    
    @return The type hierarchy for the requested obj.
    """
        ...
    @classmethod
    def typeOfBatch(cls, objs: Array[Genai.Memory]) -> Union[Array[EntityType]]:
    """
    Gets the specific C3 type hierarchy for multiple obj instances.  For a non-extendable type the hierarchy will be the
    C3 type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well
    as that type's base type chain.
    
    @param objs
              Obj instances to get the type hierarchy for.
    @return The type hierarchies for the requested objs.
    """
        ...
    @classmethod
    def getRootType(cls) -> Union[Type]:
    """
    @return The root type for a type.  If the type extends an extendable type, the base extendable type is returned.
            The type itself is returned in all other cases.
    """
        ...
    @classmethod
    def upsertCollection(cls, throwOnNonUniqueIndexError: bool=None) -> bool:
    """
    Performs the necessary DDL to create/alter the physical tables and columns for a type.  This is typically called
    internally during provisioning and should not need to be called manually.
    
    @param throwOnNonUniqueIndexError
           true if, after retries are exhausted, throw any index creation error occurs for a non-unique index. If
           false, that will be considered benign as it means some other thread process is creating the necessary
           indexes.
    
    @return True if the operation caused any DLL changes and false if did not.
    """
        ...
    @classmethod
    def validateSchema(cls, type: Type) -> bool:
    """
    Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
    
    @type
            The Type to validate the schema of.
    @return true if the schema was updated in this JVM/app
    """
        ...
    @classmethod
    def collectionUpserted(cls) -> None:
    """
    Callback that is called synchronously in response to a call to {@link upsertCollection}.
    """
        ...
    @classmethod
    def collectionCleared(cls) -> None:
    """
    Callback that is called synchronously in response to a call to {@link clearCollection}.
    """
        ...
    @classmethod
    def dbEcho(cls, template: Genai.Memory=None, count: int=None, sendBack: bool=None) -> Union[int]:
    """
    Used only by DatabaseTestEngine
    """
        ...
    @classmethod
    def checkReferences(cls, spec: CheckReferencesSpec=None) -> Union[CheckReferencesResult]:
    """
    Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
    invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
    condition is considered to be when there is no entry in the reference type for the obj being validated.
    
    @param spec
              Indicates which references in which types/fields to check.
    @return List of references that were found to be invalid along with details of why they are invalid.
    """
        ...
    @classmethod
    def validatePath(cls, path: str) -> Union[ValidatePathResult]:
    """
    Determines is a path is valid as a filter expression in a fetch call.
    
    @param path
              Path to validate.
    @return True if the path is valid to be used in a fetch filter expression and false if it is not.  If the path
            itself is invalid, an exception is thrown
    """
        ...
    @classmethod
    def schema(cls) -> Union[SchemaInfo]:
    """
    @return The db table name for relational types and the column family name for Cassandra types
    """
        ...
    @classmethod
    def calcFieldDeps(cls, fieldName: str) -> Union[Array[str]]:
    """
    Gets all of the dependencies that could invalidate a stored calc field.
    
    @param fieldName
            The name of the field to find all dependencies of.
    @return A list of dependencies that can invalidate the stored calc field.
    """
        ...
    def invalidateTsHeader(self, range: TimeRange=None, fields: Array[str]=None, autoCommit: bool=None) -> None:
    """
    Creates invalidation queue entries for invalidation of metrics/analytics for a logical timeseries header (e.g. a
    IntervalDataHeader or any type determined to be an "AsTimeseriesHeader" based on the metrics/analytics.
    
    @param range
           Time range to invalidate for.  If null, invalidation will be across all time.
    @param fields
           Timeseries fields that were modified and should be used to determine what to invalidate.  This is currently
           not used as we don't keep dependency info at the field level.
    @param autoCommit
           If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
           immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
           that state until they are either committed or aborted.
    """
        ...
    @classmethod
    def invalidateTsDataPoints(cls, tsInvalidations: Stream[TsInvalidation], autoCommit: bool=None) -> None:
    """
    Creates invalidation queue entries for invalidation of metrics/analytics for time series data points (e.g. a
    {@link IntervalDataPoint} or {@link TimedDataPoint} on the metrics/analytics in batch mode.
    
    @param tsInvalidations
           Time range to invalidate for.  If null, invalidation will be across all time.
    @param autoCommit
           If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
           immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
           that state until they are either committed or aborted.
    """
        ...
    @classmethod
    def eachObjBatch(cls, spec: BatchFetchSpec, action: Callable[[Array[Obj], Union[Any]]]) -> str:
    """
    API to execute the lambda function in a distributed batch mode. This api will fetch with provided spec and
    call action for each batch of `spec.batchSize`.
    
    @param spec
            A spec for the job. Use {@link BatchFetchSpec#context} to supply any arguments necessary for `action`.
    @param action
            The lambda to apply to each batch of objs.
    
    @return the ID of the started ObjBatchMapReduceJob
    """
        ...
    @classmethod
    def callbackLogic(cls, objs: Array[Genai.Memory], callback: Callable[[Union[Genai.Memory]], Union[Genai.Memory]]=None) -> ObjList[Genai.Memory]:
    """
    Implements a simple logic for Persistable call-backs like before create by looping each input obj and
    calling a transform for it.
    
    
    callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
    """
        ...
    @classmethod
    def afterCallbackLogic(cls, objs: Array[Genai.Memory], callback: Callable[[Union[Genai.Memory]], Union[Genai.Memory]]=None) -> Union[Array[ObjError]]:
    """
    Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
    calling a transform for it.
    """
        ...
    @classmethod
    def idColNames(cls) -> Union[Array[str]]:
    """
    @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
            be only 1.  If it does, then there will be multiple.
    """
        ...
    @overload
    @classmethod
    def isUnique(cls, fieldPath: str) -> bool:
    """
    True if this field is unique
    """
        ...
    @overload
    @classmethod
    def isUnique(cls, fieldPaths: Array[str]) -> bool:
    """
    True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
    themselves, or there is a unique index that is a subset of the specified fields.
    """
        ...
    @classmethod
    def isSystemField(cls, name: str) -> bool:
    """
    Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
    #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
    @param name
             The name of field to check
    @returns Whether or not the specific field name is one of the ones declared by the DB engine.
    """
        ...
    
    class DynamicAgentFewShot(Genai.Memory):
        """
        A memory record set by the user to be retrieved for each query.
        
        @remarks this represents a made instance of Genai.Memory.DynamicAgentFewShot
        """
        
        id: Optional[str]
        """
        A unique identifier that can be manually assigned or generated automatically during object creation. This
        identifier cannot be altered after the object has been persisted.
        """

        versionEdits: Optional[Array[VersionEdit]]=None
        """
        Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
        crucial for accessing previous versions of an object and is entirely managed by the system.
        
        @see Ann.Db#versionHistory
        """

        name: Optional[str]=None
        """
        Name of the Obj instance
        """

        meta: Optional[Meta]=None
        """
        Various system fields.
        """

        version: Optional[int]=None
        """
        Version number used for optimistic concurrency.  Automatically managed by the system.
        
        Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
        be done with great caution.
        """

        typeWithBindings: Optional[Type]=None
        """
        Persists concrete type with bindings for generic types where instance has parameter bindings
        """

        memory: Optional[str]=None
        """
        The content that corresponds to this vector.
        e.g. "To address fault code AXZ, first replace part A...."
        """

        embedding: Optional[str]
        """
        The numeric content that similarity search is conducted on.
        e.g. "[0.1, 0.05, 0.21, ...]"
        """

        displayText: Optional[str]
        """
        The content shown to the agent when this example is retrieved. Can contain code snippets or
        natural language as appropriate, providing flexibility in the format of examples presented to
        the agent.
        """

        query: Optional[str]=None
        """
        The query string that this example corresponds to. When provided, similarity search is conducted
        against this field instead of displayText, allowing optimization for retrieval without affecting
        the content shown to the agent. Enables alternative phrasings or keywords to improve matching.
        """

        description: Optional[str]=None
        """
        Internal documentation for the example. Documents the purpose and context of the example,
        facilitates example management and organization, and helps track the intended use case for
        each example.
        """

        specialization: Optional[str]
        """
        The specialization of the python agent.
        This distinguishes between different agent specializations within the same project. E.g. it is possible to
        have a genericAnalysis agent that takes care of plotting graphs and pandas operations.
        But we can also have a different agent that specialises in geospatialAnalysis. Which takes care of geospatial
        analyses, we use this specialization to distinguish the examples.
        """

        project: Optional[Genai.Project]=None
        """
        The project this example belongs to. This can be used to filter out based on use case.
        E.g. We might have few-shots for a reliability related use case and others for a process optimisation
        use case. We might need to differentiate between both of these. The {@link Genai.Project}
        can be used for this.
        """
        def __init__(self, id: Optional[str]=None, versionEdits: Optional[Array[VersionEdit]]=None, name: Optional[str]=None, meta: Optional[Meta]=None, version: Optional[int]=None, typeWithBindings: Optional[Type]=None, memory: Optional[str]=None, embedding: Optional[str]=None, displayText: Optional[str]=None, query: Optional[str]=None, description: Optional[str]=None, specialization: Optional[str]=None, project: Optional[Genai.Project]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Genai.Memory.DynamicAgentFewShot]:
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
        def fromJsonString(cls, json: str) -> Union[Genai.Memory.DynamicAgentFewShot]:
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
        def fromXmlString(cls, xml: str) -> Union[Genai.Memory.DynamicAgentFewShot]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.Memory.DynamicAgentFewShot]:
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
        def replaceType(self, old: Type, new: Type) -> Genai.Memory.DynamicAgentFewShot:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Memory.DynamicAgentFewShot]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Memory.DynamicAgentFewShot]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def validateObj(self) -> Genai.Memory.DynamicAgentFewShot:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def withoutFieldAtPath(self, path: str) -> Genai.Memory.DynamicAgentFewShot:
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
        def withoutField(self, field: str) -> Genai.Memory.DynamicAgentFewShot:
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
        def withoutField(self, field: FieldType) -> Genai.Memory.DynamicAgentFewShot:
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
        def withoutFields(self, fields: Array[str]) -> Genai.Memory.DynamicAgentFewShot:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.Memory.DynamicAgentFewShot:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Genai.Memory.DynamicAgentFewShot:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def defaultField(self, field: str) -> Genai.Memory.DynamicAgentFewShot:
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
        def defaultField(self, field: FieldType) -> Genai.Memory.DynamicAgentFewShot:
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
        def unsetField(self, field: str) -> Genai.Memory.DynamicAgentFewShot:
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
        def unsetField(self, field: FieldType) -> Genai.Memory.DynamicAgentFewShot:
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
        def removeField(self, field: str) -> Genai.Memory.DynamicAgentFewShot:
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
        def removeField(self, field: FieldType) -> Genai.Memory.DynamicAgentFewShot:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.Memory.DynamicAgentFewShot:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.Memory.DynamicAgentFewShot:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.Memory.DynamicAgentFewShot:
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
        def mergeJson(self, json: any) -> Genai.Memory.DynamicAgentFewShot:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Genai.Memory.DynamicAgentFewShot:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Genai.Memory.DynamicAgentFewShot]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Genai.Memory.DynamicAgentFewShot]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.Memory.DynamicAgentFewShot]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Genai.Memory.DynamicAgentFewShot]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Genai.Memory.DynamicAgentFewShot]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Genai.Memory.DynamicAgentFewShot]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.Memory.DynamicAgentFewShot]]:
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
        def toBuilder(self) -> ObjBuilder[Genai.Memory.DynamicAgentFewShot]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Genai.Memory.DynamicAgentFewShot]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.Memory.DynamicAgentFewShot:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.Memory.DynamicAgentFewShot:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def make(cls, s: str) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.Memory.DynamicAgentFewShot:
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
        def afterMake(self) -> Genai.Memory.DynamicAgentFewShot:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Genai.Memory.DynamicAgentFewShot:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.Memory.DynamicAgentFewShot]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.Memory.DynamicAgentFewShot:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @overload
        @classmethod
        def fetch(cls, spec: FetchSpec=None) -> FetchResult[Genai.Memory.DynamicAgentFewShot]:
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
        def fetch(cls, filter: Filter) -> FetchResult[Genai.Memory.DynamicAgentFewShot]:
        """
        Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
        returned.
        
        @param filter
                  Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
        @return Requested objs.
        """
            ...
        @classmethod
        def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[Genai.Memory.DynamicAgentFewShot]]:
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
        def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[Genai.Memory.DynamicAgentFewShot]]]:
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
        def fetchOvi(cls, spec: FetchSpec=None) -> Union[Any]:
        """
        Used internally to fetch as a stream (e.g. FetchResultOvi)
        """
            ...
        def get(self, include: str=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
        
        @param include
                  Optional include spec to retrieve.
        @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
                those fields will be returned. Otherwise the entire obj will be returned.
        """
            ...
        def getSpecific(self, include: str=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Gets an instance of a single obj in it's leaf type if the type is extendable.  If the caller is not authorized
        to fetch the obj, it will not be returned.
        
        @param include
                  Optional include spec to retrieve.  Note that the include spec should reference only fields that are
                  valid in the returned obj's type.  Otherwise an error may be thrown.
        @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
                those fields will be returned. Otherwise the entire obj will be returned.
        """
            ...
        def getMissing(self, spec: GetMissingSpec) -> Genai.Memory.DynamicAgentFewShot:
        """
        Function to check if an obj was already fetched with an include that contains at least the fields of a specified
        include and fetches the missing data if it wasn't.  The returned instance, by default will be the original instance
        if it included at least the data for the requested include spec.  Otherwise it will perform a fetch with the
        specified include and return that instance.  See {@link GetMissingSpec} for various options available governing
        the behavior.
        
        @param spec
                  Spec that controls various aspects of the function's behavior.
        @return instance of the obj with all requested fields.
        """
            ...
        def getDirect(self, include: str=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Gets an obj instance directly from Cassandra, bypassing the normal fetch framework.  It is only valid for C3 types
        that are stored in Cassandra.
        
        IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
        apis as fast as direct IO apis.
        Use with caution!!!
        
        @param include
                  Optional include spec to retrieve.
        @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
                those fields will be returned. Otherwise the entire obj will be returned.
        """
            ...
        def applyReverseEdit(self, versionEdit: VersionEdit) -> Genai.Memory.DynamicAgentFewShot:
        """
        Applies a reverse edit (e.g. VersionEdit) to an instance.
        
        @param versionEdit
               Reverse edit to apply
        
        @return The instance after applying the reverse edit.
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
        def fromString(cls, s: str) -> Union[Genai.Memory.DynamicAgentFewShot]:
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
        def create(self, spec: UpsertSpec=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
        instance already exist.
        
        @param spec
                  Various parameters that control the operation of function.
        @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
                will have only those fields populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def createBatch(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
        specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
        returned {@link ObjList}.  This will fail if any of the instances already exist.
        
        @param objs
                  New objs to create.
        @param spec
                  Various parameters that control the operation of function.
        @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
                include spec is specified in the 'spec.include' field, then the returned objs will have only those
                fields populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def createBatchObjStream(cls, objs: Stream[Genai.Memory.DynamicAgentFewShot], spec: CreateBatchObjStreamSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
        specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
        returned {@link ObjList}.  This will fail if any of the instances already exist.
        
        @param objs
                  New objs to create.
        @param spec
                  Various parameters that control the operation of function.
        @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
                 `spec.includeObjsInResults`.
        """
            ...
        def update(self, srcObj: Genai.Memory.DynamicAgentFewShot=None, spec: UpsertSpec=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
        instance does not already exist.
        
        @param srcObj
               If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
               diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
        @param spec
               Various parameters that control the operation of function.
        @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
                obj will have only those fields populated. Otherwise only the id field will be populated.
        """
            ...
        def upsert(self, srcObj: Genai.Memory.DynamicAgentFewShot=None, spec: UpsertSpec=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
        exception will be thrown.
        
        @param srcObj
               If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
               diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
               doesn't already exist.
        @param spec
                  Various parameters that control the operation of function.
        @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
                returned obj will have only those fields populated. Otherwise only the id field will be populated.
        """
            ...
        @overload
        def merge(self, spec: MergeSpec=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
        updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
        is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
        explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
        {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
        
        For collections, the merge operation is applied to every element in the source and updated collection rather than
        merging the collections themselves.  This means that every element will be merged with the element with the same
        key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
        add/append elements to a collection.
        
        Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
        
        If the operation fails an exception will be thrown.
        
        @param spec
                  Various parameters that control the operation of function.
        @return The created or updated obj.
        
        @see Mergespec#csvInclude
        """
            ...
        @overload
        def merge(self, mergeInclude: str, spec: MergeSpec=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Merges an instance of a C3 type if it exists and creates it if it doesn't.
        
        @param mergeInclude
                  Used to control which fields from the input obj are merged.  Only the fields indicated in the
                  mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
                  However, fields that wouldn't be persisted as part of the operation are ignored.
        @param spec
                  Various parameters that control the operation of function.
        @return The created or updated obj.
        """
            ...
        def touch(self, spec: TouchSpec=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
        
        @param spec
                  Various parameters that control the operation of function.
        
        @return The created or updated obj.
        """
            ...
        @classmethod
        def updateBatch(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], srcObjs: Array[Genai.Memory.DynamicAgentFewShot]=None, spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
        specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
        returned {@link ObjList}.  This will fail if any of the instances don't already exist.
        
        @param objs
               Updated objs.
        @param srcObjs
               If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
               diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
               replace the existing one.
        @param spec
               Various parameters that control the operation of function.
        @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
                spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
                populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def updateObjs(cls, objs: Callable[[], Union[Array[Genai.Memory.DynamicAgentFewShot]]], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
        called again to provide updated instances to be updated. If the operation fails for other reasons and
        {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
        Otherwise errors will be reported in the returned {@link ObjList}.
        
        @param objs
               Lambda providing objs to be upserted
        @param spec
               Various parameters that control the operation of the operation
        @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
                spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
                populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def upsertBatch(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], srcObjs: Array[Genai.Memory.DynamicAgentFewShot]=None, spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
        fails errors will be reported in the returned {@link ObjList}.
        
        @param objs
               Updated or new objs.
        @param srcObjs
               If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
               diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
               existing one if it doesn't already exist.
        @param spec
               Various parameters that control the operation of function.
        @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
                an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
                fields populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def upsertObjs(cls, objs: Callable[[], Union[Array[Genai.Memory.DynamicAgentFewShot]]], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
        fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
        If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
        default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
        {@link ObjList}.
        
        @param objs
               Lambda providing objs to be upserted
        @param spec
               Various parameters that control the operation of the operation
        @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
                an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
                fields populated. Otherwise only the id field will be populated.
        """
            ...
        @classmethod
        def touchBatch(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], spec: TouchSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
        objs will be considered an error.
        
        @param objs
               Objs to touch.
        
        @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
                include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
                populated. Otherwise only the id field will be populated.
        """
            ...
        @overload
        @classmethod
        def mergeBatch(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], spec: MergeSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
        UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
        Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
        merge} function.
        
        If the operation fails errors will be reported in the returned {@link ObjList}.
        
        @param objs
                  Objs to merge.
        @param spec
                  Various parameters that control the operation of function.
        @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
                true.  Only the id field will be populated.
        
        @see Mergespec#mergeInclude
        @see Mergespec#csvInclude
        """
            ...
        @overload
        @classmethod
        def mergeBatch(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
        UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
        Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
        merge} function.
        
        If the operation fails errors will be reported in the returned {@link ObjList}.
        
        @param objs
                  Objs to merge.
        @param mergeInclude
                  Used to control which fields from the input objs are merged.  Only the fields indicated in the
                  mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
                  However, fields that wouldn't be persisted as part of the operation are ignored.
        @param spec
                  Various parameters that control the operation of function.
        @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
                true.  Only the id field will be populated.
        
        @see Mergespec#csvInclude
        """
            ...
        @classmethod
        def mergeObjs(cls, objs: Callable[[], Union[Array[Genai.Memory.DynamicAgentFewShot]]], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
        conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
        fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
        C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
        operation is described in the {@link merge} function.
        
        @param objs
               Lambda providing objs to be upserted
        
        @param objs
               Lambda providing objs to be merged
        @param mergeInclude
                  Used to control which fields from the input objs are merged.  Only the fields indicated in the
                  mergeinclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
                  However, fields that wouldn't be persisted as part of the operation are ignored.
        @param spec
                  Various parameters that control the operation of function.
        @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
                true.  Only the id field will be populated.
        
        @see Mergespec#csvInclude
        """
            ...
        @overload
        @classmethod
        def mergeAll(cls, mergeObj: Genai.Memory.DynamicAgentFewShot, spec: MergeAllSpec=None) -> Union[int]:
        """
        Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
        functions, the set of fields to be merged can be controlled by specifying an include spec in either
        {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
        can be controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as
        in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
        
        @param spec
                  Various parameters that control the operation of function.
        @return The number of objs that were merged.
        """
            ...
        @overload
        @classmethod
        def mergeAll(cls, mergeObj: Genai.Memory.DynamicAgentFewShot, mergeInclude: str, spec: MergeAllSpec=None) -> Union[int]:
        """
        Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
        controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as in
        {@link FetchSpec#filter}.  If not specified, all instances will be merged.
        
        @param mergeInclude
                  Used to control which fields from the input objs are merged.  Only the fields indicated in the
                  mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
                  However, fields that wouldn't be persisted as part of the operation are ignored.
        @param spec
                  Various parameters that control the operation of function.
        @return The number of objs that were merged.
        """
            ...
        def remove(self, spec: UpsertSpec=None) -> bool:
        """
        Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
        
        If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
        saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
        function.
        
        @param spec
                Various parameters that control the operation of function.
        @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
        
        @see Ann.Db#archive
        """
            ...
        @classmethod
        def removeBatch(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
        specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
        reported in the returned {@link ObjList}.
        
        If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
        saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
        function.
        
        @param objs
                Objs to remove.
        @param spec
                Various parameters that control the operation of function.
        @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
        
        @see Ann.Db#archive
        """
            ...
        @classmethod
        def removeAll(cls, confirm: bool, spec: RemoveAllSpec=None) -> int:
        """
        Removes multiple instances of a C3 type based.
        
        If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
        saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
        function.
        
        @param spec
                Spec controlling the operation
        @param confirm
                Must be specified as true.  Otherwise request will be rejected.
        @return The number of objs removed.  Note that under some circumstances the total number removed may not be
                known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
                connection can't return the value).  In those cases, this will return -1.
        """
            ...
        @classmethod
        def replace(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], spec: UpsertSpec=None) -> Union[ObjList[Genai.Memory.DynamicAgentFewShot]]:
        """
        Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
        
        @param objs
                Updated or new objs.  Any existing objs that aren't included in objs will be removed.
        @param spec
                Various parameters that control the operation of function.
        @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
                specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
                populated. Otherwise only the id field will be populated.
        """
            ...
        def unremove(self) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
        {@link removeBatch} functions). If the operation fails an exception will be thrown.
        
        @return The recovered obj instance with all of its fields populated.
        
        @see Ann.Db#archive
        """
            ...
        def generateUniqueId(self) -> str:
        """
        Optional function to call during upsert/create/merge operations when an instance is being created and no value for
        the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
        short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
        generate the id based on other field values present in the input.  Note that if an instance already exists with the
        produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
        existing instances for performing updates.
        """
            ...
        @classmethod
        def beforeCreate(cls, objs: Array[Genai.Memory.DynamicAgentFewShot]) -> ObjList[Genai.Memory.DynamicAgentFewShot]:
        """
        Callback that is called synchronously during an operation that creates objs before those objs are created.  The
        implementer can perform validation or additional logic.
        
        @param objs
                  List of objs that are about to be created.  The objs will be the entire input objs being created.
        @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
                of objs must match the input.
        """
            ...
        @classmethod
        def beforeUpdate(cls, objs: Array[Genai.Memory.DynamicAgentFewShot]) -> ObjList[Genai.Memory.DynamicAgentFewShot]:
        """
        Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
        implementer can perform validation or additional logic.
        
        @param objs
                  List of objs that are about to be updated.  By default the objs will be the complete original source
                  obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
                  a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
                  will have at least those requested fields.
        @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
                of objs must match the input.
        """
            ...
        @classmethod
        def beforeRemove(cls, objs: Array[Genai.Memory.DynamicAgentFewShot]) -> ObjList[Genai.Memory.DynamicAgentFewShot]:
        """
        Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
        implementer can perform validation or additional logic.
        
        @param objs
                  List of objs that are about to be removed.  By default the objs will be the complete original source
                  obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
                  be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
                  requested fields.
        @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
                of objs must match the input.
        """
            ...
        @classmethod
        def afterCreate(cls, objs: Array[Genai.Memory.DynamicAgentFewShot]) -> Union[Array[ObjError]]:
        """
        Callback that is called synchronously during a request that creates objs after those objs are created.  The
        implementer can perform additional logic.
        
        @param objs
                  List of objs that were created.  The objs will already have been created.  By default, only the id
                  is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
                  `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
        @return List of any errors that were encountered.
        """
            ...
        @classmethod
        def afterUpdate(cls, objs: Array[Genai.Memory.DynamicAgentFewShot]) -> Union[Array[ObjError]]:
        """
        Callback that is called synchronously during a request that updates objs after those objs are updated.  The
        implementer can perform additional logic.
        
        @param objs
                  List of objs that were updated.  The objs will already have been updated.  By default, only the id
                  is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
                  `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
        @return List of any errors that were encountered.
        """
            ...
        @classmethod
        def afterRemove(cls, objs: Array[Genai.Memory.DynamicAgentFewShot]) -> Union[Array[ObjError]]:
        """
        Callback that is called synchronously during a request that removes objs after those objs are removed.  The
        implementer can perform additional logic.
        
        @param objs
                  List of objs that were removed.  The objs will already have been removed.  By default, only the id
                  is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
                  `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
                  Since the objs will already have been removed, they will be in the state they were in prior to removal.
        @return List of any errors that were encountered.
        """
            ...
        def upsertDirect(self, merge: bool=None, clearNullValues: bool=None) -> Union[Obj]:
        """
        Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
        valid for C3 types that are stored in Cassandra.
        
        IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
        apis as fast as direct IO apis.
        Use with caution!!!
        
        @param clearNullValues
                  If true then map keys with null values will be cleared.
        @return The created or updated obj with only the id populated if it exists and null otherwise.
        """
            ...
        @classmethod
        def beginUpsertToSecondaryDs(cls, type: Type) -> SecondaryDsUpsert:
        """
        Begin an upsert operation to the secondary data store.
        
        IMPORTANT:
        
        1. This is only valid for types that specify a secondary datastore.
        2. Currently only types that are not extendable are supported.
        
        @param type
                  Type that the upsert operation is for.
        
        @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
        """
            ...
        @classmethod
        def clearCollection(cls, confirm: bool, spec: ClearCollectionSpec=None) -> None:
        """
        Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
        defaulting to using multi-row sql for the deletes.
        
        @param spec
               Spec controlling the operation
        @param confirm
               Must be specified as true.  Otherwise request will be rejected.
        """
            ...
        @classmethod
        def created(cls, txn: Transaction) -> None:
        """
        Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
        {@link merge} or their batch equivalents.
        
        The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
        being removed or updated.
        
        @param txn
               Contains details about which objs were created.  This is basically the ids of those objects.  The
               implementation will most likely need to fetch the actual instances to do whatever they need.
        """
            ...
        @classmethod
        def updated(cls, txn: Transaction) -> None:
        """
        Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
        {@link merge} or their batch equivalents.
        
        The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
        being removed or updated.
        
        @param txn
               Contains details about which objs were updated.  This is basically the ids of those objects.  The
               implementation will most likely need to fetch the actual instances to do whatever they need.
        """
            ...
        @classmethod
        def removed(cls, txn: Transaction) -> None:
        """
        Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
        {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
        archive operation or it is physically removed.
        
        The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
        being removed or updated.
        
        @param txn
               Contains details about which objs were removed.  This is basically the ids of those objects.  The
               implementation will most likely need to fetch the actual instances to do whatever they need.
        """
            ...
        @classmethod
        def eval(cls, spec: EvalSpec=None) -> Union[Data]:
        """
        This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
        Support column alias for evaluate & evalMetrics by passing an ObjNode
        e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
        e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
        """
            ...
        @classmethod
        def evaluate(cls, spec: EvaluateSpec) -> Union[EvaluateResult]:
        """
        Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
        the caller is authorized to fetch will be evaluated.
        
        @param spec
                  Specification of projection expressions to evaluate and what objs to evaluate them on.
        @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
                expressions) with the evaluated result.
        """
            ...
        @classmethod
        def evaluateTupleStream(cls, spec: EvaluateSpec) -> Union[Stream[CellTuple]]:
        """
        Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
        the caller is authorized to fetch will be evaluated.
        
        @param spec
                  Specification of projection expressions to evaluate and what objs to evaluate them on.
        @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
                expressions) with the evaluated result.
        """
            ...
        @classmethod
        def evaluatePii(cls, spec: EvaluateSpec) -> Union[EvaluateResult]:
        """
        Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
        the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
        {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
        conditions are met.
        
        @param spec
                  Specification of projection expressions to evaluate and what objs to evaluate them on.
        @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
                expressions) with the evaluated result.
        """
            ...
        @classmethod
        def tsEval(cls, spec: TSEvalSpec) -> Union[Obj]:
        """
        Evaluates a single projection expression for timeseries data.
        
        Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
        or {@link MetricEvaluatable.evalMetrics} should be used instead.
        
        @param spec
                  Specification of the projection expression and which timeseries to evaluate.
        @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
        
        @see MetricEvaluatable
        """
            ...
        @classmethod
        def evaluateOvi(cls, spec: EvaluateSpec=None) -> Union[Any]:
        """
        Used internally to evaluate as a stream
        """
            ...
        @classmethod
        def evaluateArrowStream(cls, spec: EvaluateArrowStreamSpec) -> Stream[Arrow]:
        """
        Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
        as stream of Arrow batches.
        
        @param spec
                  Specification of what data to fetch.
        @return Stream of Arrow batches.
        """
            ...
        @classmethod
        def refreshCalcFields(cls, spec: RefreshCalcFieldsSpec=None) -> Union[RefreshCalcFieldsBatchJob]:
        """
        Refreshes calc fields for objs for a type based on a spec.
        
        @param spec
               Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
               other options that control the operation.
        @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        """
            ...
        @classmethod
        def refreshDefaultFields(cls, spec: RefreshDefaultFieldsSpec=None) -> Union[RefreshDefaultFieldsBatchJob]:
        """
        Refreshes default fields for objs for a type based on a spec.  Only entries that have null values for the
        specified fields will be refreshed.
        
        @param spec
               Spec that indicates which objs to refresh default fields for and which default fields to refresh, along with
               other options that control the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        """
            ...
        @classmethod
        def refreshUniqueIndexes(cls, spec: RefreshUniqueIndexesSpec=None) -> Union[RefreshUniqueIndexesBatchJob]:
        """
        Refreshes the unique index table entries for a type based on a spec.  For types that don't have unique indexes,
        and no types that extend them have unique indexes, this does nothing.
        
        @param spec
               Spec that indicates which objs to refresh unique indexes for along with other options that control
               the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        """
            ...
        @classmethod
        def refreshAnalytics(cls, spec: RefreshAnalyticsSpec=None) -> Union[RefreshAnalyticsBatchJob]:
        """
        Refreshes analytics for objs based on a spec.  This causes {@link AnalyticsContainer.invalidateSources} to be
        called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.
        
        @param spec
               Indicates which objs to refresh analytics for and what time range to use, along with other options that
               control the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        
        @see AnalyticsContainer
        @see SimpleMetric
        """
            ...
        @classmethod
        def refreshMetrics(cls, spec: RefreshMetricsSpec=None) -> Union[RefreshMetricsBatchJob]:
        """
        Refreshes the metrics cache for objs based on a spec.  This causes {@link SimpleMetric.invalidateCache} to be
        called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.  Only metrics with
        {@link SimpleMetric.cacheInterval} are considered.
        
        @param spec
               Indicates which objs to refresh the metrics cache for and what time range to use, along with other options
               that control the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        
        @see SimpleMetric
        """
            ...
        @classmethod
        def runCreatedOrUpdated(cls, spec: RunCreatedOrUpdatedSpec=None) -> Union[RunCreatedOrUpdatedBatchJob]:
        """
        Calls the created or updated function for objs based on a spec.  For types that have only one or the other that
        function will be called.  For those that have both, only the updated will be called.  If only created should be
        called in all cases, set the 'spec.createdOnly' field to true.
        
        @param spec
                  Indicates which objs to call the functions for, along with other options that control the operation.
        @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
                otherwise.
        """
            ...
        @classmethod
        def refreshDeps(cls, spec: RefreshDepsSpec=None) -> None:
        """
        Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
        
        @param spec
               Indicates which types of dependencies should be refreshed along with other parameters that control the
               operation of the function.
        """
            ...
        @classmethod
        def processRefresh(cls, type: Type, jobType: Type, spec: ObjBatch) -> Union[RefreshBatchJob[Any, Any, Any]]:
        """
        Performs the refresh operation.
        
        @param type
               Type being refreshed.
        @param jobType
               Batch job type to for refresh.
        @param spec
               Parameters for the refresh operation.
        
        @return The batch job that was started.
        """
            ...
        @classmethod
        def startImportData(cls, spec: StartImportDataSpec=None) -> PushStream[Genai.Memory.DynamicAgentFewShot]:
        """
        @return a push stream to import instances of this type.
        """
            ...
        @classmethod
        def startImportDataWithStats(cls, spec: StartImportDataSpec=None) -> PushStreamWithStats[Genai.Memory.DynamicAgentFewShot]:
        """
        @return a push stream to import instances of this type.
        """
            ...
        @classmethod
        def importData(cls, spec: ImportDataSpec, async_: bool=None) -> Union[ImportDataResult]:
        """
        Imports instances into a C3 type from a file stored in Cassandra.
        
        @param spec
               Various parameters that control the operation of function.
        @param async
               Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
               synchronous)
        @return various statistics and errors for the import operation.
        """
            ...
        @classmethod
        def exportData(cls, spec: ExportDataSpec) -> Union[ExportDataResult]:
        """
        Exports instances of a C3 type to Cassandra.
        
        @param spec
                  Various parameters that control the operation of function.
        @return A reference to the Content obj created that contains the exported data and various statistics about the
                export.
        """
            ...
        @classmethod
        def exportDataForRedShift(cls, spec: RedShiftExportDataSpec) -> Union[int]:
        """
        Exports instances of a C3 type to S3 for importing into Redshift.
        
        @param spec
                  Various parameters that control the operation of function.
        @return Number of objs exported.
        """
            ...
        @classmethod
        def forId(cls, id: str, failIfMissing: bool=None) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        @return single instance of this Identified type by id.
        """
            ...
        def referenceInvalid(self) -> bool:
        """
        Shortcut function to return the value of the {@link meta#referenceInvalid} field for a Persistable reference
        returned in a reference field (or reference collection field) from a {@link fetch} operation.  Note that the
        {@link meta#referenceInvalid} field is only set when the include spec for the reference field specifically includes
        the {@link meta#referenceInvalid} field or otherwise requires the referenced type to be queried (either by join or
        separate query) to return the requested data from the reference.
        
        Note that this api DOES NOT query the database at all.  As such, calling it on any instance obtained in any way
        way other than what is described above will ALWAYS return false.
        
        @return the current value of the {@link meta#referenceInvalid} field for the instance.
        
        @see Meta#referenceInvalid
        """
            ...
        @classmethod
        def generateNewIds(cls, count: int=None) -> Union[Array[str]]:
        """
        Generates new unique ids for C3 Obj instances
        
        @param count
                  Number of ids to generate.  Default is 1.
        @return The requested number of new unique ids.
        """
            ...
        @classmethod
        def generateData(cls, spec: GenerateDataSpec=None) -> Union[ActionStats]:
        """
        Generates synthetic data for a C3 type.
        
        @param spec
                  Various parameters that control the operation of function.
        @return Various statistics for the operation.
        """
            ...
        @classmethod
        def profileData(cls, spec: FetchSpec=None) -> Union[GenerateDataSpec]:
        """
        Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
        
        @param spec
                  Various parameters that control the operation of function.
        @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
        """
            ...
        def withoutIdentity(self) -> Union[Genai.Memory.DynamicAgentFewShot]:
        """
        Removes the identifying fields {@link #id}, {@link #meta}, and {@link #version} of the instance it's called on,
        such that a subsequent upsert will create a new instance.
        
        @return The requested obj without any of its identifying fields.
        """
            ...
        def typeOf(self) -> Union[EntityType]:
        """
        Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
        type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
        that type's base type chain.
        
        @return The type hierarchy for the requested obj.
        """
            ...
        @classmethod
        def typeOfBatch(cls, objs: Array[Genai.Memory.DynamicAgentFewShot]) -> Union[Array[EntityType]]:
        """
        Gets the specific C3 type hierarchy for multiple obj instances.  For a non-extendable type the hierarchy will be the
        C3 type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well
        as that type's base type chain.
        
        @param objs
                  Obj instances to get the type hierarchy for.
        @return The type hierarchies for the requested objs.
        """
            ...
        @classmethod
        def getRootType(cls) -> Union[Type]:
        """
        @return The root type for a type.  If the type extends an extendable type, the base extendable type is returned.
                The type itself is returned in all other cases.
        """
            ...
        @classmethod
        def upsertCollection(cls, throwOnNonUniqueIndexError: bool=None) -> bool:
        """
        Performs the necessary DDL to create/alter the physical tables and columns for a type.  This is typically called
        internally during provisioning and should not need to be called manually.
        
        @param throwOnNonUniqueIndexError
               true if, after retries are exhausted, throw any index creation error occurs for a non-unique index. If
               false, that will be considered benign as it means some other thread process is creating the necessary
               indexes.
        
        @return True if the operation caused any DLL changes and false if did not.
        """
            ...
        @classmethod
        def validateSchema(cls, type: Type) -> bool:
        """
        Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
        
        @type
                The Type to validate the schema of.
        @return true if the schema was updated in this JVM/app
        """
            ...
        @classmethod
        def collectionUpserted(cls) -> None:
        """
        Callback that is called synchronously in response to a call to {@link upsertCollection}.
        """
            ...
        @classmethod
        def collectionCleared(cls) -> None:
        """
        Callback that is called synchronously in response to a call to {@link clearCollection}.
        """
            ...
        @classmethod
        def dbEcho(cls, template: Genai.Memory.DynamicAgentFewShot=None, count: int=None, sendBack: bool=None) -> Union[int]:
        """
        Used only by DatabaseTestEngine
        """
            ...
        @classmethod
        def checkReferences(cls, spec: CheckReferencesSpec=None) -> Union[CheckReferencesResult]:
        """
        Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
        invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
        condition is considered to be when there is no entry in the reference type for the obj being validated.
        
        @param spec
                  Indicates which references in which types/fields to check.
        @return List of references that were found to be invalid along with details of why they are invalid.
        """
            ...
        @classmethod
        def validatePath(cls, path: str) -> Union[ValidatePathResult]:
        """
        Determines is a path is valid as a filter expression in a fetch call.
        
        @param path
                  Path to validate.
        @return True if the path is valid to be used in a fetch filter expression and false if it is not.  If the path
                itself is invalid, an exception is thrown
        """
            ...
        @classmethod
        def schema(cls) -> Union[SchemaInfo]:
        """
        @return The db table name for relational types and the column family name for Cassandra types
        """
            ...
        @classmethod
        def calcFieldDeps(cls, fieldName: str) -> Union[Array[str]]:
        """
        Gets all of the dependencies that could invalidate a stored calc field.
        
        @param fieldName
                The name of the field to find all dependencies of.
        @return A list of dependencies that can invalidate the stored calc field.
        """
            ...
        def invalidateTsHeader(self, range: TimeRange=None, fields: Array[str]=None, autoCommit: bool=None) -> None:
        """
        Creates invalidation queue entries for invalidation of metrics/analytics for a logical timeseries header (e.g. a
        IntervalDataHeader or any type determined to be an "AsTimeseriesHeader" based on the metrics/analytics.
        
        @param range
               Time range to invalidate for.  If null, invalidation will be across all time.
        @param fields
               Timeseries fields that were modified and should be used to determine what to invalidate.  This is currently
               not used as we don't keep dependency info at the field level.
        @param autoCommit
               If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
               immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
               that state until they are either committed or aborted.
        """
            ...
        @classmethod
        def invalidateTsDataPoints(cls, tsInvalidations: Stream[TsInvalidation], autoCommit: bool=None) -> None:
        """
        Creates invalidation queue entries for invalidation of metrics/analytics for time series data points (e.g. a
        {@link IntervalDataPoint} or {@link TimedDataPoint} on the metrics/analytics in batch mode.
        
        @param tsInvalidations
               Time range to invalidate for.  If null, invalidation will be across all time.
        @param autoCommit
               If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
               immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
               that state until they are either committed or aborted.
        """
            ...
        @classmethod
        def eachObjBatch(cls, spec: BatchFetchSpec, action: Callable[[Array[Obj], Union[Any]]]) -> str:
        """
        API to execute the lambda function in a distributed batch mode. This api will fetch with provided spec and
        call action for each batch of `spec.batchSize`.
        
        @param spec
                A spec for the job. Use {@link BatchFetchSpec#context} to supply any arguments necessary for `action`.
        @param action
                The lambda to apply to each batch of objs.
        
        @return the ID of the started ObjBatchMapReduceJob
        """
            ...
        @classmethod
        def callbackLogic(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], callback: Callable[[Union[Genai.Memory.DynamicAgentFewShot]], Union[Genai.Memory.DynamicAgentFewShot]]=None) -> ObjList[Genai.Memory.DynamicAgentFewShot]:
        """
        Implements a simple logic for Persistable call-backs like before create by looping each input obj and
        calling a transform for it.
        
        
        callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
        """
            ...
        @classmethod
        def afterCallbackLogic(cls, objs: Array[Genai.Memory.DynamicAgentFewShot], callback: Callable[[Union[Genai.Memory.DynamicAgentFewShot]], Union[Genai.Memory.DynamicAgentFewShot]]=None) -> Union[Array[ObjError]]:
        """
        Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
        calling a transform for it.
        """
            ...
        @classmethod
        def idColNames(cls) -> Union[Array[str]]:
        """
        @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
                be only 1.  If it does, then there will be multiple.
        """
            ...
        @overload
        @classmethod
        def isUnique(cls, fieldPath: str) -> bool:
        """
        True if this field is unique
        """
            ...
        @overload
        @classmethod
        def isUnique(cls, fieldPaths: Array[str]) -> bool:
        """
        True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
        themselves, or there is a unique index that is a subset of the specified fields.
        """
            ...
        @classmethod
        def isSystemField(cls, name: str) -> bool:
        """
        Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
        #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
        @param name
                 The name of field to check
        @returns Whether or not the specific field name is one of the ones declared by the DB engine.
        """
            ...
        
        class Config(Genai.Memory.Config, Singleton):
            """
            The Config interface for {@link Genai.Memory.DynamicAgentFewShot}.
            
            @remarks this represents a made instance of Genai.Memory.DynamicAgentFewShot.Config
            """
            
            configOverride: Optional[str]=None

            secretOverride: Optional[str]=None

            issues: Optional[Array[str]]=None
            """
            Captures any issues that occurred while deserializing from filesystem
            """

            name: Optional[str]
            """
            The unique and required name of this instance.
            """

            typeIdent: Optional[str]=None
            """
            Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
            of its base type's typeIdent
            """

            memoryType: Optional[Type[[Genai.Memory]]]=None
            """
            The Type of {@link Genai.Memory} that this config is for.
            """

            embedderSpec: Optional[Genai.Embedder.Spec]
            """
            Spec of embedder to use for encoding memories.
            """

            memoryEncodeKwargs: Optional[any]=None
            """
            Arguments for passage/memory encoding accepted by {@link GenaiCore.Embedder#encode}.
            See the sentence-transformers documentation for all possible arguments.
            {@link https://sbert.net/docs/package_reference/sentence_transformer/SentenceTransformer.html#sentence_transformers.SentenceTransformer.encode}
            """

            queryEncodeKwargs: Optional[any]=None
            """
            Arguments for query encoding accepted by {@link GenaiCore.Embedder#encode}.
            See the sentence-transformers documentation for all possible arguments.
            {@link https://sbert.net/docs/package_reference/sentence_transformer/SentenceTransformer.html#sentence_transformers.SentenceTransformer.encode}
            """

            vectorStore: Optional[GenaiCore.PgVector]=None
            """
            Vector store to use for storing and retrieving memories.
            """
            def __init__(self, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None, name: Optional[str]=None, typeIdent: Optional[str]=None, memoryType: Optional[Type[[Genai.Memory]]]=None, embedderSpec: Optional[Genai.Embedder.Spec]=None, memoryEncodeKwargs: Optional[any]=None, queryEncodeKwargs: Optional[any]=None, vectorStore: Optional[GenaiCore.PgVector]=None) -> None: ...

            @classmethod
            def inst(cls) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            @return the one and only instance to be used when member functions are called on this type.
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
            def fromJson(cls, json: any) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
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
            def fromJsonString(cls, json: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
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
            def fromXmlString(cls, xml: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
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
            def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
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
            def replaceType(self, old: Type, new: Type) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Memory.DynamicAgentFewShot.Config]:
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
            def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Memory.DynamicAgentFewShot.Config]:
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
            def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def validateObj(self) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def withoutFieldAtPath(self, path: str) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def withoutField(self, field: str) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def withoutField(self, field: FieldType) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def withoutFields(self, fields: Array[str]) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Builds a new Obj, removing the fields with the provided names.
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      names of the fields to remove
            @return new Obj with removed fields
            """
                ...
            def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
            exact same type as the type of the obj to respect the "ordinal" of the field type
            
            Immutable objects may return the same instance if the fields being removed are not present in the existing object.
            
            @param fields
                      field types to remove
            @return new Obj with removed fields
            """
                ...
            def withoutSecretFields(self) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
            """
                ...
            def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def defaultField(self, field: str) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def defaultField(self, field: FieldType) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def unsetField(self, field: str) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def unsetField(self, field: FieldType) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def removeField(self, field: str) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def removeField(self, field: FieldType) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
            fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
            @param deep
                   if set to true then traverse reference and collection fields and merge corresponding fields or elements with
                   the same key or index.
            """
                ...
            @overload
            def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def mergeJson(self, json: any) -> Genai.Memory.DynamicAgentFewShot.Config:
                ...
            def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def sumObj(self, other: Obj, deep: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Adds the numeric Obj fields with the other Objs respective fields.
            If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
            references with same name and collection elements at same index or key.
            """
                ...
            def singletonArray(self) -> Array[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            Build an array of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def array(cls, *elements: Array[Any]) -> Union[Array[Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            Creates an array of instances of this type.
            """
                ...
            @classmethod
            def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            Creates an array of instances of this type.
            """
                ...
            def singletonSet(self) -> Set[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            Build an set of the correct type with a single element which is this instance.
            
            @return new array instance with this as only element.
            """
                ...
            @classmethod
            def setBuilder(cls) -> Union[SetBuilder[Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            Creates a set of instances of this type.
            """
                ...
            @classmethod
            def mapBuilder(cls) -> Union[MapBuilder[str, Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            Create a map of string to elements of this type.
            """
                ...
            @classmethod
            def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.Memory.DynamicAgentFewShot.Config]]:
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
            def toBuilder(self) -> ObjBuilder[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            @return new ObjBuilder with initial state set to fields of this instance.
            """
                ...
            @classmethod
            def builder(cls) -> ObjBuilder[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            @return new ObjBuilder of this instance.
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Construct instance of this type from provided field values and options
            """
                ...
            @overload
            @classmethod
            def make(cls, withDefaults: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def make(cls, fields: Any, withDefaults: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def make(cls, s: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
            when the argument is a known string.
            
            @see #fromString
            """
                ...
            @classmethod
            def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def afterMake(self) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Optional override that will be called after every instance creation.
            
            Note that it introduces additional overhead so should only be implemented for low volume data.
            """
                ...
            @classmethod
            def cachedEmptyInst(cls) -> Genai.Memory.DynamicAgentFewShot.Config:
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
            def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
            value is read.
            """
                ...
            @classmethod
            def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
            random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
            populates fields in a more realistic way.
            """
                ...
            def isCached(self) -> bool:
            """
            @return whether the cache already contains this instance
            """
                ...
            @classmethod
            def allCached(cls) -> Union[Stream[Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            @return stream of all available Cached instances.
            """
                ...
            @classmethod
            def find(cls, filter: str=None) -> Union[Stream[Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
                    if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
                    Otherwise no population will be performed.
            """
                ...
            @classmethod
            def findBy(cls, field: str, value: Any) -> Union[Stream[Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
                    if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
                    Otherwise no population will be performed.
            """
                ...
            def getCached(self) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            @return cached instance.
            """
                ...
            @classmethod
            def forCacheKey(cls, key: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            Returns cached instance by key, with secrets removed.
            """
                ...
            def cacheKey(self) -> str:
            """
            @return cache key for this instance.
            """
                ...
            @classmethod
            def produce(cls, key: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            Should produce an entry for the cache key. This method should not be called directly.
            """
                ...
            @classmethod
            def produceAll(cls) -> Union[Map[str, Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            Should produces the entire content for the cached data. Will populate the cache with the produced data.
            """
                ...
            def evictFromCache(self) -> None:
            """
            Evicts this instance from cache on all nodes of this application.
            """
                ...
            def evictFromCacheLocalOnly(self) -> None:
            """
            Evicts this instance from cache of the current node.
            """
                ...
            def evictFromCacheLocalOnlyAllApps(self) -> None:
            """
            Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
            Will not trigger any cache invalidation broadcast.
            see {@link Server#evictFromLocalAppsCaches}
            """
                ...
            @classmethod
            def clearCache(cls) -> None:
            """
            Clears the data cache for this type on all nodes of this application.
            """
                ...
            @classmethod
            def clearCacheLocalOnly(cls) -> None:
            """
            Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
            """
                ...
            @classmethod
            def clearCacheLocalOnlyAllApps(cls) -> None:
            """
            Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
            Will not trigger any cache invalidation broadcast.
            see {@link Server#clearLocalAppsCaches}
            """
                ...
            @classmethod
            def cacheSize(cls) -> Union[int]:
            """
            Returns count of cached instances.
            """
                ...
            @classmethod
            def nativeCache(cls) -> Union[Any]:
            """
            Returns instance of the cache for this type.
            """
                ...
            def getConfig(self) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
            configurations `name` field is required.
            
            Note that typical pattern is to use Configurable#config instead of this method.
            """
                ...
            def configValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
            """
            @return cached config value for the provided field path if set or `null` or error otherwise depending on
                    `failIfMissing`; note that will not return secret value.
            """
                ...
            def getSecret(self) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
            is required. For Nameable configurations `name` field is required.
            
            Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
            """
                ...
            def secretValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
            """
            @return cached secret value for the provided field path in this Config object or `null` if not set or error
                    depending on `failIfMissing`.
            """
                ...
            def decodedValue(self, path: str, failIfMissing: bool=None) -> Union[str]:
            """
            Reads and url decodes the content at the path.
            Path must represent a string value.
            """
                ...
            def isUserOverride(self) -> bool:
            """
            @return `true` if this configuration instance was set at ConfigOverride.USER level.
            """
                ...
            def isAppOverride(self) -> bool:
            """
            @return `true` if this configuration instance was set at ConfigOverride.APP level.
            """
                ...
            def isClusterOverride(self) -> bool:
            """
            @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
            """
                ...
            def isEnvOverride(self) -> bool:
            """
            @return `true` if this configuration instance was set at ConfigOverride.ENV level.
            """
                ...
            def isRootOverride(self) -> bool:
            """
            @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
            """
                ...
            def isSeed(self) -> bool:
            """
            @return `true` if this configuration has not been set and comes from seed / defaults.
            """
                ...
            @classmethod
            def isSecret(cls, path: str) -> bool:
            """
            @return `true` if provided path is a secret.
            """
                ...
            def configKey(self) -> Union[str]:
            """
             @return config key for this instance. The config key is a unique identifier for an instance of a config type.
             The config key varies based on whether the config is defined with:
                1. {@link Ann.Config#subfolder}
                    In this case, the name of the subfolder will be included.
                2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
                    In this case, the ID of the {@link User} will be included.
                3. mixes in {@link Named} or {@link Identified}
            In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
            the name of the config subtype will be used.
            
             The config key includes the above three fields delimited by '/':
                {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
             ```
             | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
             |-------------------|---------------------|-------------------|-----------------------------|
             |       no          |         no          |        no         |           MyConfType        |
             |       yes         |         no          |        no         |       myUserId/MyConfType   |
             |       no          |         yes         |        no         |             abc             |
             |       no          |         no          |        yes        |      folder1/MyConfType     |
             |       no          |         yes         |        yes        |          folder1/abc        |
             |       yes         |         yes         |        no         |          myUserId/abc       |
             |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
             |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
             ```
             Note that the config key is a computed value and is not set-able.
             For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
            """
                ...
            def withConfigKey(self, configKey: str) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
            the computed {@link Config#configKey}.
            Note that configs set at USER level will still have user's Id as part of the config key. Config types with
            @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
            ex. confType has @config(minOverride=ConfigOverride.USER)
                config = confType.withConfigKey("abc")
                config.configKey() => "myUserId/abc"
            ex. confType has @config(subfolder="folder1")
                config = confType.withConfigKey("abc")
                config.configKey() => "folder1/abc"
            """
                ...
            def withoutConfigKey(self) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            @return copy without config key.
            """
                ...
            @classmethod
            def forConfigKey(cls, configKey: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            @return return cached config instance for provided config key.
            """
                ...
            @classmethod
            def listConfigKeys(cls) -> Union[Stream[str]]:
            """
            @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
            """
                ...
            @classmethod
            def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[Genai.Memory.DynamicAgentFewShot.Config]]:
            """
            @param
            
            @return stream of all available Config instances for this type.
            """
                ...
            def allConfigValueOverrides(self, path: str) -> Union[Map[str, any]]:
            """
            @return all config template values by override.
            """
                ...
            def allConfigOverrides(self) -> Union[Map[str, any]]:
            """
            @return all config template jsons by override.
            """
                ...
            def allSecretValueOverrides(self, path: str) -> Union[Map[str, any]]:
            """
            @return all secret template values by override.
            """
                ...
            def allSecretOverrides(self) -> Union[Map[str, any]]:
            """
            @return all secret templates by override.
            """
                ...
            def setConfigValue(self, path: str, value: Any, override: str=None, embeddedFileName: str=None) -> None:
            """
            Sets configuration field value at provided path in this Config object. Note will not set secret value.
            If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
            @see clearConfigValue
            """
                ...
            @overload
            def setConfigValues(self, from_: Map[str, Any]=None, override: str=None) -> None:
            """
            Sets multiple field values to those specified in the map. The map keys are the paths.
            
            @see setConfigValue
            """
                ...
            @overload
            def setConfigValues(self, from_: Genai.Memory.DynamicAgentFewShot.Config, override: str=None) -> None:
            """
            Sets multiple field values to the be the same as the passed instance.
            
            @see setConfigValue
            """
                ...
            def setConfigValueTemplate(self, path: str, valueTemplate: str, override: str=None) -> None:
            """
            Sets configuration field value template at provided path in this Config object. Note will not set secret value.
            If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
            @see clearConfigValue
            """
                ...
            def insertConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
            """
            Adds a single value at the specified index in a collection at provided path in this Config object.
            Note this will merge based on the {@link Ann.Merge} collection value for the field.
            """
                ...
            def setConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
            """
            Sets a single value at the specified index in a collection at provided path in this Config object.
            Note this will merge based on the {@link Ann.Merge} collection value for the field.
            """
                ...
            def addConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
            """
            Adds a single value to a collection at provided path in this Config object.
            Note this will merge based on the {@link Ann.Merge} collection value for the field.
            """
                ...
            def setConfigMapValue(self, pathToMapField: str, key: Any, value: Any, override: str=None) -> None:
            """
            Sets a key-value pair in specified map at provided path in this Config object.
            Note this will merge based on the {@link Ann.Merge} collection value for the field.
            """
                ...
            def removeConfigElementAt(self, pathToCollectionField: str, index: int, override: str=None) -> None:
            """
            Removes a single value at the specified index in a collection at provided path in this Config object.
            Note this will merge based on the {@link Ann.Merge} collection value for the field.
            """
                ...
            def removeConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
            """
            Removes a single value in a collection at provided path in this Config object.
            Note this will merge based on the {@link Ann.Merge} collection value for the field.
            """
                ...
            def removeConfigMapKey(self, pathToMapField: str, key: Any, override: str=None) -> None:
            """
            Removes a single key in a map at provided path in this Config object.
            Note this will merge based on the {@link Ann.Merge} collection value for the field.
            """
                ...
            def setEncodedValue(self, path: str, value: str, override: str) -> None:
            """
            Url encodes the content at the path and returns new config object with the encoded value.
            Path must represent a string value.
            """
                ...
            def setSecretValue(self, path: str, value: Any, override: str=None) -> None:
            """
            Sets secret field value or secrets within value at provided path in this Config object.
            @see clearSecretValue
            """
                ...
            def setSecretValueTemplate(self, path: str, value: str, override: str=None) -> None:
            """
            Sets secret field value template at provided path in this Config object.
            @see clearSecretValue
            """
                ...
            def clearConfigValue(self, path: str, override: str=None) -> None:
            """
            Clears configuration field value at provided path in this Config object at provided override level. Note will not
            clear secret value.
            """
                ...
            def clearSecretValue(self, path: str, override: str=None) -> None:
            """
            Clears secret field value at provided path in this Config object at provided override level.
            """
                ...
            def clearConfigValueAllOverrides(self, path: str) -> None:
            """
            Clears configuration field value at provided path in this Config object at all override levels. Note will not
            clear secret value.
            """
                ...
            def clearSecretValueAllOverrides(self, path: str) -> None:
            """
            Clears secret field value at provided path in this Config object at all override levels.
            """
                ...
            @classmethod
            def rawConfigOrSecretValue(cls, configKey: str, path: str, override: str=None, failIfMissing: bool=None) -> Union[any]:
            """
            @return cached config or secret value for the provided config key, field path and override if set or `null` or error
                    otherwise depending on `failIfMissing`
            """
                ...
            @classmethod
            def setConfigOrSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
            """
            Sets config or secret value for the provided config key, field path and override.
            """
                ...
            @classmethod
            def setConfigAndSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
            """
            Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
            setConfigValue and setSecretValue
            """
                ...
            @classmethod
            def setConfigOrSecretValueTemplate(cls, configKey: str, path: str, valueTemplate: str=None, override: str=None) -> None:
            """
            Sets config or secret value template for the provided config key, field path and override.
            """
                ...
            @classmethod
            def hasSubTypes(cls) -> bool:
            """
            @return `true` if this Config type has other sub types.
            """
                ...
            @classmethod
            def hasSecretField(cls) -> bool:
            """
            @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
            """
                ...
            @classmethod
            def isSingleInstance(cls) -> bool:
            """
            @return `true` if this Config type has only one instance.
            """
                ...
            @classmethod
            def isUserOverridable(cls) -> bool:
            """
            @returns `true` if this Config is user override-able.
            """
                ...
            @classmethod
            def dfltOverride(cls, override: str=None) -> str:
            """
            @return default configuration override level
            """
                ...
            @classmethod
            def loadConfigAndSecret(cls, configKey: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
             Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
            true and config does not exist.
             Note that this skips caching and directly fetches config from the config store, and secret from vault.
            """
                ...
            def loadConfigOverride(self, override: str) -> Union[any]:
            """
            Loads config override template json if exists or `null`. Will not include secrets.
            Note that this skips caching and directly fetches config from the config store.
            """
                ...
            def loadSecretOverride(self, override: str) -> Union[any]:
            """
            Loads secret override template json if exists or `null`. Will not include non secrets.
            Note that this skips caching and directly fetches secret from the vault.
            """
                ...
            def embeddedFile(self, embeddedFileName: str, override: str=None) -> File:
            """
            @return file for an embedded config value.
            """
                ...
            @classmethod
            def configFolder(cls) -> str:
            """
            @return config folder name
            """
                ...
            @classmethod
            def configSubFolder(cls) -> str:
            """
            @return config sub folder name for this type
            """
                ...
            @classmethod
            def configFileEncodedPath(cls, configKey: str, userOverride: bool=None) -> str:
            """
            @return config file encoded path for a given key and potentially user under the config dir for this type.
            """
                ...
            def configAndSecretFiles(self, override: str) -> Union[Pair[File, File]]:
            """
            @return pair of config and secret files for a given override; note that will always return instance of
                    File even if physical file doesn't exist.
            """
                ...
            def configFilePath(self, override: str) -> Union[str]:
            """
            @return the config file path for a config instance at a given override;
            """
                ...
            def secretFilePath(self, override: str) -> Union[str]:
            """
            @return the secret file path for a config instance at a given override;
            """
                ...
            def configAndSecretFilePair(self, override: str, appId: str) -> Union[Pair[File, File]]:
            """
            @return pair of config and secret files for provided override / appId; note that will always return pair
                    of Files even if physical file doesn't exist.
            """
                ...
            def allConfigAndSecretFiles(self) -> Union[Map[str, Pair[File, File]]]:
            """
            @return map of pair of config and secret files by override; note that will always return instance of
                    File even if physical file doesn't exist.
            """
                ...
            @classmethod
            def configAndSecretDirs(cls, override: str=None) -> Union[Pair[File, File]]:
            """
            @return pair of config and secret template directories for override
            """
                ...
            @classmethod
            def allConfigAndSecretDirs(cls) -> Union[Map[str, Pair[File, File]]]:
            """
            @return map of pair of config and secret template directories by override; note that will always return instance of
                    File even if physical folder doesn't exist.
            """
                ...
            @classmethod
            def configAndSecretOverrideBaseDirs(cls, override: str=None) -> Union[Pair[File, File]]:
            """
            @return pair of config and secret Base directories for the given override
            """
                ...
            @classmethod
            def configKeyForFile(cls, file: File, failIfInvalid: bool=None) -> Union[str]:
            """
            @return config key for a given config or secret file. If file is not a valid config or secret then will return
                    `null` or fail based on `failIfInvalid`
            """
                ...
            @classmethod
            def configKeyForFileUrl(cls, fileUrl: str) -> Union[str]:
            """
            @return config key for a given config or secret file url. If file is not a valid config or secret then will return
                    `null` or fail based on `failIfInvalid`
            """
                ...
            @classmethod
            def configTypeForDir(cls, dir: str, failIdInvalid: bool=None) -> Union[Type]:
            """
            @return Config sub-type for a config directory name.
            """
                ...
            def setConfig(self, override: str=None) -> None:
            """
            Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
            #setSecret or #setSecretValue for that.
            """
                ...
            def setSecret(self, override: str=None) -> None:
            """
            Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
            #setConfigValue or #setConfig for that.
            """
                ...
            def eachOverride(self, action: Callable[[Config, str]]=None) -> None:
            """
            Executes actions on all config override levels (within a valid range) for a particular instance of config.
            """
                ...
            @classmethod
            def eachOverrideOnType(cls, action: Callable[[str]]=None) -> None:
            """
            Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
            """
                ...
            @classmethod
            def minOverride(cls) -> str:
            """
            @return minimum override for config - default is ConfigOverride#APP.
            """
                ...
            @classmethod
            def maxOverride(cls) -> str:
            """
            @return maximum override for config - default is ConfigOverride#ROOT
            """
                ...
            def clearConfigAndSecretOverride(self, override: str) -> None:
            """
            Clears specified configuration override including secrets for this instance.
            
            @param override
                   Specifies the {@link ConfigOverride} level, of this config to clear.
            """
                ...
            def clearConfigAndSecretAllOverrides(self) -> None:
            """
            Clears specified configuration including secrets for this instance on all override levels.
            """
                ...
            @classmethod
            def clearAllConfigAndSecretOverrides(cls, override: str, confirm: bool=None) -> None:
            """
            Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
            override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
            {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
            
            @param override
                   Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
                   will also be cleared.
            @param confirm
                   Confirmation from user that they understand and confirm deletion of this configuration.
            """
                ...
            def removeSecrets(self) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            @return this config without any secret values.
            """
                ...
            def removeNonSecrets(self) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            @return this config with only secret values.
            """
                ...
            def validate(self) -> Genai.Memory.DynamicAgentFewShot.Config:
            """
            Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
            validation and setup.
            """
                ...
            @classmethod
            def rawJson(cls, configKey: str) -> Union[any]:
            """
            @return merged Json of all defined configuration templates for this instance including secrets.
            """
                ...
            @classmethod
            def setJson(cls, configKey: str, json: any, secret: bool=None, override: str=None) -> File:
            """
            @return sets Json template for a specified override.
            """
                ...
            @classmethod
            def setJsonValue(cls, configKey: str, field: str, json: any, override: str=None) -> File:
            """
            @return sets Json template field for a specified override.
            """
                ...
            @classmethod
            def setJsonField(cls, configKey: str, field: str, json: any, secret: bool=None, override: str=None) -> File:
            """
            @return sets Json template field for a specified override.
            """
                ...
            @classmethod
            def templateBindings(cls, configKey: str) -> Union[any]:
            """
            Returns json containing configuration template bindings for a provided config key. Override this method to provide your
            own list of template bindings
            """
                ...
            @classmethod
            def evalTemplate(cls, template: str, extraBindings: Map[str, str]=None) -> str:
            """
            Evaluate a given template by applying the default config bindings.
            Default config bindings are:
            1. owner - owner of the config
            2. region - abbreviated region in which the cluster is
            3. cluster - current cluster id
            4. env - current env id
            5. app - current app id
            7. user - current user
            8. type - type on which this api is called
            For example, "${owner}--${cluster}-${env}-${app}"
            
            @param template
                       Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
            @param extraBindings
                       Any additional binding params not included in the default config bindings
            @return evaluated template
            """
                ...
            @classmethod
            def rawJsonCacheSize(cls) -> Union[int]:
            """
            Returns count of cached raw Json.
            """
                ...
            @classmethod
            def rawJsonNativeCache(cls) -> Union[Any]:
            """
            Returns instance of the cache for this type for raw Json.
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
            def fromString(cls, s: str) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
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
            def forName(cls, name: str, failIfMissing: bool=None) -> Union[Genai.Memory.DynamicAgentFewShot.Config]:
            """
            @return single instance of this Nameable type by name. Note that if this type is also Cached then it will
            retrieve instance from cache.
            """
                ...
            @classmethod
            def typeForTypeIdent(cls, typeName: str, typeIdent: str, failIfMissing: bool=None) -> Union[Type]:
            """
            Utility method used to get the real sub type information for given parent type through the {@link typeIdent} field.
            
            @see typeIdent
            """
                ...
            @classmethod
            def typeIdentForType(cls, typeName: str, failIfMissing: bool=None) -> Union[str]:
            """
            Utility method used to get the type ident value for a give sub type.
            
            @see typeIdent
            """
                ...
            @classmethod
            def myTypeIdent(cls) -> Union[str]:
            """
            return the typeIdent as a string
            """
                ...
            def embedder(self) -> GenaiCore.Embedder:
            """
            Load the embedder intance from engine.
            """
                ...
            def addMemories(self, memories: Array[any]) -> Union[int]:
            """
            Method to upload fewshot examples (memories) for dyanmic agent. Each example must contain the field
            {@link Genai.Memory.DynamicAgentFewShot#displayText}. The {@link Genai.Memory.DynamicAgentFewShot#query}
            field is optional and can be used to provide an alternative query string for similarity search. The
            uploaded memories count is returned.
            """
                ...
            def getMemories(self, query: str, similaritySearchSpec: GenaiCore.SimilaritySearchSpec=None) -> Union[Array[GenaiCore.VectorStore.SimilaritySearchResult]]:
            """
            Retrieves memories similar to the query.
            """
                ...
            def zeroPadVectors(self, vectors: Array[Array[float]]) -> Array[Array[float]]:
            """
            Utility function to pad vectors with zeros even if they are shorter than the expected dimension.
            This is useful when using a smaller embedding model without changing the dimension of {@link Genai.Memory#embedding}.
            The cosine similarity would not be affected by the padded zeros.
            """
                ...
            def expectedVectorDimension(self) -> Union[int]:
            """
            Utility function to get the defined vector dimension of {@link Genai.Memory#embedding}.
            """
                ...
            @classmethod
            def formatSearchResultsToString(cls, searchResult: Array[GenaiCore.VectorStore.SimilaritySearchResult]=None) -> Union[str]:
            """
            Formats the similarity search results to a string that can be ingested to the prompt.
            """
                ...
    
    class Config(Config, Named):
        """
        The Config interface for interacting with {@link Genai.Memory} and its subtypes
        
        @remarks this represents a made instance of Genai.Memory.Config
        """
        
        configOverride: Optional[str]=None

        secretOverride: Optional[str]=None

        issues: Optional[Array[str]]=None
        """
        Captures any issues that occurred while deserializing from filesystem
        """

        name: Optional[str]
        """
        The unique and required name of this instance.
        """

        typeIdent: Optional[str]=None
        """
        Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
        of its base type's typeIdent
        """

        memoryType: Optional[Type[[Genai.Memory]]]=None
        """
        Type of memory this manager should handle. This should be a subtype of {@link Genai.Memory}.
        """

        embedderSpec: Optional[Genai.Embedder.Spec]
        """
        Spec of embedder to use for encoding memories.
        """

        memoryEncodeKwargs: Optional[any]=None
        """
        Arguments for passage/memory encoding accepted by {@link GenaiCore.Embedder#encode}.
        See the sentence-transformers documentation for all possible arguments.
        {@link https://sbert.net/docs/package_reference/sentence_transformer/SentenceTransformer.html#sentence_transformers.SentenceTransformer.encode}
        """

        queryEncodeKwargs: Optional[any]=None
        """
        Arguments for query encoding accepted by {@link GenaiCore.Embedder#encode}.
        See the sentence-transformers documentation for all possible arguments.
        {@link https://sbert.net/docs/package_reference/sentence_transformer/SentenceTransformer.html#sentence_transformers.SentenceTransformer.encode}
        """

        vectorStore: Optional[GenaiCore.PgVector]=None
        """
        Vector store to use for storing and retrieving memories.
        """
        def __init__(self, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None, name: Optional[str]=None, typeIdent: Optional[str]=None, memoryType: Optional[Type[[Genai.Memory]]]=None, embedderSpec: Optional[Genai.Embedder.Spec]=None, memoryEncodeKwargs: Optional[any]=None, queryEncodeKwargs: Optional[any]=None, vectorStore: Optional[GenaiCore.PgVector]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[Genai.Memory.Config]:
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
        def fromJsonString(cls, json: str) -> Union[Genai.Memory.Config]:
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
        def fromXmlString(cls, xml: str) -> Union[Genai.Memory.Config]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[Genai.Memory.Config]:
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
        def replaceType(self, old: Type, new: Type) -> Genai.Memory.Config:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Memory.Config:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Genai.Memory.Config:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Memory.Config]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Genai.Memory.Config]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Genai.Memory.Config:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Memory.Config:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Genai.Memory.Config:
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
        def validateObj(self) -> Genai.Memory.Config:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Genai.Memory.Config:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Genai.Memory.Config:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Genai.Memory.Config:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Genai.Memory.Config:
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
        def withoutFieldAtPath(self, path: str) -> Genai.Memory.Config:
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
        def withoutField(self, field: str) -> Genai.Memory.Config:
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
        def withoutField(self, field: FieldType) -> Genai.Memory.Config:
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
        def withoutFields(self, fields: Array[str]) -> Genai.Memory.Config:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> Genai.Memory.Config:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> Genai.Memory.Config:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Genai.Memory.Config:
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
        def defaultField(self, field: str) -> Genai.Memory.Config:
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
        def defaultField(self, field: FieldType) -> Genai.Memory.Config:
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
        def unsetField(self, field: str) -> Genai.Memory.Config:
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
        def unsetField(self, field: FieldType) -> Genai.Memory.Config:
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
        def removeField(self, field: str) -> Genai.Memory.Config:
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
        def removeField(self, field: FieldType) -> Genai.Memory.Config:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Genai.Memory.Config:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Genai.Memory.Config:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Genai.Memory.Config:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Genai.Memory.Config:
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
        def mergeJson(self, json: any) -> Genai.Memory.Config:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Genai.Memory.Config:
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
        def sumObj(self, other: Obj, deep: bool=None) -> Genai.Memory.Config:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[Genai.Memory.Config]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[Genai.Memory.Config]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[Genai.Memory.Config]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[Genai.Memory.Config]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[Genai.Memory.Config]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, Genai.Memory.Config]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Genai.Memory.Config]]:
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
        def toBuilder(self) -> ObjBuilder[Genai.Memory.Config]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[Genai.Memory.Config]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Genai.Memory.Config:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Genai.Memory.Config:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Genai.Memory.Config:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> Genai.Memory.Config:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Genai.Memory.Config:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> Genai.Memory.Config:
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
        def make(cls, s: str) -> Union[Genai.Memory.Config]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Genai.Memory.Config:
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
        def afterMake(self) -> Genai.Memory.Config:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> Genai.Memory.Config:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Genai.Memory.Config]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> Genai.Memory.Config:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def isCached(self) -> bool:
        """
        @return whether the cache already contains this instance
        """
            ...
        @classmethod
        def allCached(cls) -> Union[Stream[Genai.Memory.Config]]:
        """
        @return stream of all available Cached instances.
        """
            ...
        @classmethod
        def find(cls, filter: str=None) -> Union[Stream[Genai.Memory.Config]]:
        """
        @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
                if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
                Otherwise no population will be performed.
        """
            ...
        @classmethod
        def findBy(cls, field: str, value: Any) -> Union[Stream[Genai.Memory.Config]]:
        """
        @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
                if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
                Otherwise no population will be performed.
        """
            ...
        def getCached(self) -> Union[Genai.Memory.Config]:
        """
        @return cached instance.
        """
            ...
        @classmethod
        def forCacheKey(cls, key: str) -> Union[Genai.Memory.Config]:
        """
        Returns cached instance by key, with secrets removed.
        """
            ...
        def cacheKey(self) -> str:
        """
        @return cache key for this instance.
        """
            ...
        @classmethod
        def produce(cls, key: str) -> Union[Genai.Memory.Config]:
        """
        Should produce an entry for the cache key. This method should not be called directly.
        """
            ...
        @classmethod
        def produceAll(cls) -> Union[Map[str, Genai.Memory.Config]]:
        """
        Should produces the entire content for the cached data. Will populate the cache with the produced data.
        """
            ...
        def evictFromCache(self) -> None:
        """
        Evicts this instance from cache on all nodes of this application.
        """
            ...
        def evictFromCacheLocalOnly(self) -> None:
        """
        Evicts this instance from cache of the current node.
        """
            ...
        def evictFromCacheLocalOnlyAllApps(self) -> None:
        """
        Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
        Will not trigger any cache invalidation broadcast.
        see {@link Server#evictFromLocalAppsCaches}
        """
            ...
        @classmethod
        def clearCache(cls) -> None:
        """
        Clears the data cache for this type on all nodes of this application.
        """
            ...
        @classmethod
        def clearCacheLocalOnly(cls) -> None:
        """
        Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
        """
            ...
        @classmethod
        def clearCacheLocalOnlyAllApps(cls) -> None:
        """
        Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
        Will not trigger any cache invalidation broadcast.
        see {@link Server#clearLocalAppsCaches}
        """
            ...
        @classmethod
        def cacheSize(cls) -> Union[int]:
        """
        Returns count of cached instances.
        """
            ...
        @classmethod
        def nativeCache(cls) -> Union[Any]:
        """
        Returns instance of the cache for this type.
        """
            ...
        def getConfig(self) -> Genai.Memory.Config:
        """
        Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
        configurations `name` field is required.
        
        Note that typical pattern is to use Configurable#config instead of this method.
        """
            ...
        def configValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
        """
        @return cached config value for the provided field path if set or `null` or error otherwise depending on
                `failIfMissing`; note that will not return secret value.
        """
            ...
        def getSecret(self) -> Genai.Memory.Config:
        """
        Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
        is required. For Nameable configurations `name` field is required.
        
        Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
        """
            ...
        def secretValue(self, path: str, failIfMissing: bool=None) -> Union[Any]:
        """
        @return cached secret value for the provided field path in this Config object or `null` if not set or error
                depending on `failIfMissing`.
        """
            ...
        def decodedValue(self, path: str, failIfMissing: bool=None) -> Union[str]:
        """
        Reads and url decodes the content at the path.
        Path must represent a string value.
        """
            ...
        def isUserOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.USER level.
        """
            ...
        def isAppOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.APP level.
        """
            ...
        def isClusterOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
        """
            ...
        def isEnvOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.ENV level.
        """
            ...
        def isRootOverride(self) -> bool:
        """
        @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
        """
            ...
        def isSeed(self) -> bool:
        """
        @return `true` if this configuration has not been set and comes from seed / defaults.
        """
            ...
        @classmethod
        def isSecret(cls, path: str) -> bool:
        """
        @return `true` if provided path is a secret.
        """
            ...
        def configKey(self) -> Union[str]:
        """
         @return config key for this instance. The config key is a unique identifier for an instance of a config type.
         The config key varies based on whether the config is defined with:
            1. {@link Ann.Config#subfolder}
                In this case, the name of the subfolder will be included.
            2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
                In this case, the ID of the {@link User} will be included.
            3. mixes in {@link Named} or {@link Identified}
        In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
        the name of the config subtype will be used.
        
         The config key includes the above three fields delimited by '/':
            {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
         ```
         | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
         |-------------------|---------------------|-------------------|-----------------------------|
         |       no          |         no          |        no         |           MyConfType        |
         |       yes         |         no          |        no         |       myUserId/MyConfType   |
         |       no          |         yes         |        no         |             abc             |
         |       no          |         no          |        yes        |      folder1/MyConfType     |
         |       no          |         yes         |        yes        |          folder1/abc        |
         |       yes         |         yes         |        no         |          myUserId/abc       |
         |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
         |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
         ```
         Note that the config key is a computed value and is not set-able.
         For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
        """
            ...
        def withConfigKey(self, configKey: str) -> Genai.Memory.Config:
        """
        @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
        the computed {@link Config#configKey}.
        Note that configs set at USER level will still have user's Id as part of the config key. Config types with
        @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
        ex. confType has @config(minOverride=ConfigOverride.USER)
            config = confType.withConfigKey("abc")
            config.configKey() => "myUserId/abc"
        ex. confType has @config(subfolder="folder1")
            config = confType.withConfigKey("abc")
            config.configKey() => "folder1/abc"
        """
            ...
        def withoutConfigKey(self) -> Genai.Memory.Config:
        """
        @return copy without config key.
        """
            ...
        @classmethod
        def forConfigKey(cls, configKey: str) -> Union[Genai.Memory.Config]:
        """
        @return return cached config instance for provided config key.
        """
            ...
        @classmethod
        def listConfigKeys(cls) -> Union[Stream[str]]:
        """
        @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
        """
            ...
        @classmethod
        def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[Genai.Memory.Config]]:
        """
        @param
        
        @return stream of all available Config instances for this type.
        """
            ...
        def allConfigValueOverrides(self, path: str) -> Union[Map[str, any]]:
        """
        @return all config template values by override.
        """
            ...
        def allConfigOverrides(self) -> Union[Map[str, any]]:
        """
        @return all config template jsons by override.
        """
            ...
        def allSecretValueOverrides(self, path: str) -> Union[Map[str, any]]:
        """
        @return all secret template values by override.
        """
            ...
        def allSecretOverrides(self) -> Union[Map[str, any]]:
        """
        @return all secret templates by override.
        """
            ...
        def setConfigValue(self, path: str, value: Any, override: str=None, embeddedFileName: str=None) -> None:
        """
        Sets configuration field value at provided path in this Config object. Note will not set secret value.
        If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
        @see clearConfigValue
        """
            ...
        @overload
        def setConfigValues(self, from_: Map[str, Any]=None, override: str=None) -> None:
        """
        Sets multiple field values to those specified in the map. The map keys are the paths.
        
        @see setConfigValue
        """
            ...
        @overload
        def setConfigValues(self, from_: Genai.Memory.Config, override: str=None) -> None:
        """
        Sets multiple field values to the be the same as the passed instance.
        
        @see setConfigValue
        """
            ...
        def setConfigValueTemplate(self, path: str, valueTemplate: str, override: str=None) -> None:
        """
        Sets configuration field value template at provided path in this Config object. Note will not set secret value.
        If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
        @see clearConfigValue
        """
            ...
        def insertConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
        """
        Adds a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setConfigElementAt(self, pathToCollectionField: str, index: int, value: Any, override: str=None) -> None:
        """
        Sets a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def addConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
        """
        Adds a single value to a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setConfigMapValue(self, pathToMapField: str, key: Any, value: Any, override: str=None) -> None:
        """
        Sets a key-value pair in specified map at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigElementAt(self, pathToCollectionField: str, index: int, override: str=None) -> None:
        """
        Removes a single value at the specified index in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigElement(self, pathToCollectionField: str, value: Any, override: str=None) -> None:
        """
        Removes a single value in a collection at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def removeConfigMapKey(self, pathToMapField: str, key: Any, override: str=None) -> None:
        """
        Removes a single key in a map at provided path in this Config object.
        Note this will merge based on the {@link Ann.Merge} collection value for the field.
        """
            ...
        def setEncodedValue(self, path: str, value: str, override: str) -> None:
        """
        Url encodes the content at the path and returns new config object with the encoded value.
        Path must represent a string value.
        """
            ...
        def setSecretValue(self, path: str, value: Any, override: str=None) -> None:
        """
        Sets secret field value or secrets within value at provided path in this Config object.
        @see clearSecretValue
        """
            ...
        def setSecretValueTemplate(self, path: str, value: str, override: str=None) -> None:
        """
        Sets secret field value template at provided path in this Config object.
        @see clearSecretValue
        """
            ...
        def clearConfigValue(self, path: str, override: str=None) -> None:
        """
        Clears configuration field value at provided path in this Config object at provided override level. Note will not
        clear secret value.
        """
            ...
        def clearSecretValue(self, path: str, override: str=None) -> None:
        """
        Clears secret field value at provided path in this Config object at provided override level.
        """
            ...
        def clearConfigValueAllOverrides(self, path: str) -> None:
        """
        Clears configuration field value at provided path in this Config object at all override levels. Note will not
        clear secret value.
        """
            ...
        def clearSecretValueAllOverrides(self, path: str) -> None:
        """
        Clears secret field value at provided path in this Config object at all override levels.
        """
            ...
        @classmethod
        def rawConfigOrSecretValue(cls, configKey: str, path: str, override: str=None, failIfMissing: bool=None) -> Union[any]:
        """
        @return cached config or secret value for the provided config key, field path and override if set or `null` or error
                otherwise depending on `failIfMissing`
        """
            ...
        @classmethod
        def setConfigOrSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
        """
        Sets config or secret value for the provided config key, field path and override.
        """
            ...
        @classmethod
        def setConfigAndSecretValue(cls, configKey: str, path: str, value: Any=None, override: str=None) -> None:
        """
        Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
        setConfigValue and setSecretValue
        """
            ...
        @classmethod
        def setConfigOrSecretValueTemplate(cls, configKey: str, path: str, valueTemplate: str=None, override: str=None) -> None:
        """
        Sets config or secret value template for the provided config key, field path and override.
        """
            ...
        @classmethod
        def hasSubTypes(cls) -> bool:
        """
        @return `true` if this Config type has other sub types.
        """
            ...
        @classmethod
        def hasSecretField(cls) -> bool:
        """
        @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
        """
            ...
        @classmethod
        def isSingleInstance(cls) -> bool:
        """
        @return `true` if this Config type has only one instance.
        """
            ...
        @classmethod
        def isUserOverridable(cls) -> bool:
        """
        @returns `true` if this Config is user override-able.
        """
            ...
        @classmethod
        def dfltOverride(cls, override: str=None) -> str:
        """
        @return default configuration override level
        """
            ...
        @classmethod
        def loadConfigAndSecret(cls, configKey: str) -> Union[Genai.Memory.Config]:
        """
         Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
        true and config does not exist.
         Note that this skips caching and directly fetches config from the config store, and secret from vault.
        """
            ...
        def loadConfigOverride(self, override: str) -> Union[any]:
        """
        Loads config override template json if exists or `null`. Will not include secrets.
        Note that this skips caching and directly fetches config from the config store.
        """
            ...
        def loadSecretOverride(self, override: str) -> Union[any]:
        """
        Loads secret override template json if exists or `null`. Will not include non secrets.
        Note that this skips caching and directly fetches secret from the vault.
        """
            ...
        def embeddedFile(self, embeddedFileName: str, override: str=None) -> File:
        """
        @return file for an embedded config value.
        """
            ...
        @classmethod
        def configFolder(cls) -> str:
        """
        @return config folder name
        """
            ...
        @classmethod
        def configSubFolder(cls) -> str:
        """
        @return config sub folder name for this type
        """
            ...
        @classmethod
        def configFileEncodedPath(cls, configKey: str, userOverride: bool=None) -> str:
        """
        @return config file encoded path for a given key and potentially user under the config dir for this type.
        """
            ...
        def configAndSecretFiles(self, override: str) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret files for a given override; note that will always return instance of
                File even if physical file doesn't exist.
        """
            ...
        def configFilePath(self, override: str) -> Union[str]:
        """
        @return the config file path for a config instance at a given override;
        """
            ...
        def secretFilePath(self, override: str) -> Union[str]:
        """
        @return the secret file path for a config instance at a given override;
        """
            ...
        def configAndSecretFilePair(self, override: str, appId: str) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret files for provided override / appId; note that will always return pair
                of Files even if physical file doesn't exist.
        """
            ...
        def allConfigAndSecretFiles(self) -> Union[Map[str, Pair[File, File]]]:
        """
        @return map of pair of config and secret files by override; note that will always return instance of
                File even if physical file doesn't exist.
        """
            ...
        @classmethod
        def configAndSecretDirs(cls, override: str=None) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret template directories for override
        """
            ...
        @classmethod
        def allConfigAndSecretDirs(cls) -> Union[Map[str, Pair[File, File]]]:
        """
        @return map of pair of config and secret template directories by override; note that will always return instance of
                File even if physical folder doesn't exist.
        """
            ...
        @classmethod
        def configAndSecretOverrideBaseDirs(cls, override: str=None) -> Union[Pair[File, File]]:
        """
        @return pair of config and secret Base directories for the given override
        """
            ...
        @classmethod
        def configKeyForFile(cls, file: File, failIfInvalid: bool=None) -> Union[str]:
        """
        @return config key for a given config or secret file. If file is not a valid config or secret then will return
                `null` or fail based on `failIfInvalid`
        """
            ...
        @classmethod
        def configKeyForFileUrl(cls, fileUrl: str) -> Union[str]:
        """
        @return config key for a given config or secret file url. If file is not a valid config or secret then will return
                `null` or fail based on `failIfInvalid`
        """
            ...
        @classmethod
        def configTypeForDir(cls, dir: str, failIdInvalid: bool=None) -> Union[Type]:
        """
        @return Config sub-type for a config directory name.
        """
            ...
        def setConfig(self, override: str=None) -> None:
        """
        Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
        #setSecret or #setSecretValue for that.
        """
            ...
        def setSecret(self, override: str=None) -> None:
        """
        Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
        #setConfigValue or #setConfig for that.
        """
            ...
        def eachOverride(self, action: Callable[[Config, str]]=None) -> None:
        """
        Executes actions on all config override levels (within a valid range) for a particular instance of config.
        """
            ...
        @classmethod
        def eachOverrideOnType(cls, action: Callable[[str]]=None) -> None:
        """
        Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
        """
            ...
        @classmethod
        def minOverride(cls) -> str:
        """
        @return minimum override for config - default is ConfigOverride#APP.
        """
            ...
        @classmethod
        def maxOverride(cls) -> str:
        """
        @return maximum override for config - default is ConfigOverride#ROOT
        """
            ...
        def clearConfigAndSecretOverride(self, override: str) -> None:
        """
        Clears specified configuration override including secrets for this instance.
        
        @param override
               Specifies the {@link ConfigOverride} level, of this config to clear.
        """
            ...
        def clearConfigAndSecretAllOverrides(self) -> None:
        """
        Clears specified configuration including secrets for this instance on all override levels.
        """
            ...
        @classmethod
        def clearAllConfigAndSecretOverrides(cls, override: str, confirm: bool=None) -> None:
        """
        Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
        override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
        {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
        
        @param override
               Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
               will also be cleared.
        @param confirm
               Confirmation from user that they understand and confirm deletion of this configuration.
        """
            ...
        def removeSecrets(self) -> Union[Genai.Memory.Config]:
        """
        @return this config without any secret values.
        """
            ...
        def removeNonSecrets(self) -> Union[Genai.Memory.Config]:
        """
        @return this config with only secret values.
        """
            ...
        def validate(self) -> Genai.Memory.Config:
        """
        Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
        validation and setup.
        """
            ...
        @classmethod
        def rawJson(cls, configKey: str) -> Union[any]:
        """
        @return merged Json of all defined configuration templates for this instance including secrets.
        """
            ...
        @classmethod
        def setJson(cls, configKey: str, json: any, secret: bool=None, override: str=None) -> File:
        """
        @return sets Json template for a specified override.
        """
            ...
        @classmethod
        def setJsonValue(cls, configKey: str, field: str, json: any, override: str=None) -> File:
        """
        @return sets Json template field for a specified override.
        """
            ...
        @classmethod
        def setJsonField(cls, configKey: str, field: str, json: any, secret: bool=None, override: str=None) -> File:
        """
        @return sets Json template field for a specified override.
        """
            ...
        @classmethod
        def templateBindings(cls, configKey: str) -> Union[any]:
        """
        Returns json containing configuration template bindings for a provided config key. Override this method to provide your
        own list of template bindings
        """
            ...
        @classmethod
        def evalTemplate(cls, template: str, extraBindings: Map[str, str]=None) -> str:
        """
        Evaluate a given template by applying the default config bindings.
        Default config bindings are:
        1. owner - owner of the config
        2. region - abbreviated region in which the cluster is
        3. cluster - current cluster id
        4. env - current env id
        5. app - current app id
        7. user - current user
        8. type - type on which this api is called
        For example, "${owner}--${cluster}-${env}-${app}"
        
        @param template
                   Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
        @param extraBindings
                   Any additional binding params not included in the default config bindings
        @return evaluated template
        """
            ...
        @classmethod
        def rawJsonCacheSize(cls) -> Union[int]:
        """
        Returns count of cached raw Json.
        """
            ...
        @classmethod
        def rawJsonNativeCache(cls) -> Union[Any]:
        """
        Returns instance of the cache for this type for raw Json.
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
        def fromString(cls, s: str) -> Union[Genai.Memory.Config]:
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
        def forName(cls, name: str, failIfMissing: bool=None) -> Union[Genai.Memory.Config]:
        """
        @return single instance of this Nameable type by name. Note that if this type is also Cached then it will
        retrieve instance from cache.
        """
            ...
        @classmethod
        def typeForTypeIdent(cls, typeName: str, typeIdent: str, failIfMissing: bool=None) -> Union[Type]:
        """
        Utility method used to get the real sub type information for given parent type through the {@link typeIdent} field.
        
        @see typeIdent
        """
            ...
        @classmethod
        def typeIdentForType(cls, typeName: str, failIfMissing: bool=None) -> Union[str]:
        """
        Utility method used to get the type ident value for a give sub type.
        
        @see typeIdent
        """
            ...
        @classmethod
        def myTypeIdent(cls) -> Union[str]:
        """
        return the typeIdent as a string
        """
            ...
        def embedder(self) -> GenaiCore.Embedder:
        """
        Load the embedder intance from engine.
        """
            ...
        def addMemories(self, memories: Array[any]) -> Union[int]:
        """
        Add memories to the vector store.
        Sub types should implement this function to add memories to the vector store.
        """
            ...
        def getMemories(self, query: str, similaritySearchSpec: GenaiCore.SimilaritySearchSpec=None) -> Union[Array[GenaiCore.VectorStore.SimilaritySearchResult]]:
        """
        Retrieves memories similar to the query.
        """
            ...
        def zeroPadVectors(self, vectors: Array[Array[float]]) -> Array[Array[float]]:
        """
        Utility function to pad vectors with zeros even if they are shorter than the expected dimension.
        This is useful when using a smaller embedding model without changing the dimension of {@link Genai.Memory#embedding}.
        The cosine similarity would not be affected by the padded zeros.
        """
            ...
        def expectedVectorDimension(self) -> Union[int]:
        """
        Utility function to get the defined vector dimension of {@link Genai.Memory#embedding}.
        """
            ...


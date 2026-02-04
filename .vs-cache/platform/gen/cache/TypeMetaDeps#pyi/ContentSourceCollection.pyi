#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.EvalMetricsResultStream import EvalMetricsResultStream
from c3.platform.FetchSpec import FetchSpec
from c3.platform.Promise import Promise
from c3.platform.Include import Include
from c3.platform.FileObjsOperSpec import FileObjsOperSpec
from c3.platform.EvalMetricsSpec import EvalMetricsSpec
from c3.platform.ExportedObj import ExportedObj
from c3.platform.Timeseries import Timeseries
from c3.platform.SourceCollection.Cdc.Checkpoint import SourceCollection.Cdc.Checkpoint
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.WithKey import WithKey
from c3.platform.FailedSource import FailedSource
from c3.platform.SourceCollectionReadTuplesSpec import SourceCollectionReadTuplesSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Metric import Metric
from c3.platform.Content import Content
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ValueSpec import ValueSpec
from c3.platform.TransformObjsResult import TransformObjsResult
from c3.platform.MetricVariable import MetricVariable
from c3.platform.Data import Data
from c3.platform.TypeMeta import TypeMeta
from c3.platform.SourceSystem import SourceSystem
from c3.platform.MetricsStatsJob import MetricsStatsJob
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapType import MapType
from c3.platform.Config import Config
from c3.platform.ScanStats import ScanStats
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.InferTypeSpec import InferTypeSpec
from c3.platform.CloudMessageSourceCollection import CloudMessageSourceCollection
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.TimeseriesStats import TimeseriesStats
from c3.platform.CronSchedule import CronSchedule
from c3.platform.Source import Source
from c3.platform.ReferenceType import ReferenceType
from c3.platform.Lambda import Lambda
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FetchResult import FetchResult
from c3.platform.Export import Export
from c3.platform.Stream import Stream
from c3.platform.EvalMetricSpec import EvalMetricSpec
from c3.platform.TransformObjsSpec import TransformObjsSpec
from c3.platform.Url import Url
from c3.platform.AdditionalExportSpec import AdditionalExportSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.EvalMetricsResult import EvalMetricsResult
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.EvalMetricsBatchCacheSize import EvalMetricsBatchCacheSize
from c3.platform.Pair import Pair
from c3.platform.File import File
from c3.platform.Pair import Pair
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Import import Import
from c3.platform.ValidateSourceDataSpec import ValidateSourceDataSpec
from c3.platform.Meta import Meta
from c3.platform.RollupMetricSpec import RollupMetricSpec
from c3.platform.CronJob import CronJob
from c3.platform.SourceCollectionDeps import SourceCollectionDeps
from c3.platform.TargetCollection import TargetCollection
from c3.platform.ObjsOperSpec import ObjsOperSpec
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.TSEvalSpec import TSEvalSpec
from c3.platform.Filter import Filter
from c3.platform.Sources import Sources
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Type import Type
from c3.platform.ApiSourceCollection import ApiSourceCollection
from c3.platform.ValueType import ValueType
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Transform import Transform
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SimpleMetric import SimpleMetric
from c3.platform.DataIntegSpec import DataIntegSpec
from c3.platform.EvalPlan import EvalPlan
from c3.platform.Promise import Promise
from c3.platform.SetType import SetType
from c3.platform.ListMetricsResult import ListMetricsResult
from c3.platform.Dimension import Dimension
from c3.platform.Tuple import Tuple
from c3.platform.Exclude import Exclude
from c3.platform.DataLake.Table import DataLake.Table
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.DataIssue.SourceCollection import DataIssue.SourceCollection
from c3.platform.SqlSourceCollection import SqlSourceCollection
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.MapBuilder import MapBuilder
from c3.platform.RetrySpec import RetrySpec
from c3.platform.ArrayType import ArrayType
from c3.platform.Format import Format
from c3.platform.MapReduceStatus import MapReduceStatus
from c3.platform.HistogramEvaluationResult import HistogramEvaluationResult
from c3.platform.DataLake.Catalog import DataLake.Catalog
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.MetricsCacheRefreshJob import MetricsCacheRefreshJob
from c3.platform.ScanSpec import ScanSpec
from c3.platform.Lambda import Lambda
from c3.platform.ExistsSpec import ExistsSpec
from c3.platform.FileSourceCollection import FileSourceCollection

# Python definitions for the C3 type ContentSourceCollection


class ContentSourceCollection(SourceCollection[ContentSourceCollection.Config]):
    """
    Type that represents a collection of Http requests to import data
    by default these requests will be processed synchronously and return the result in real time.
    
    @remarks this represents a made instance of ContentSourceCollection
    """
    
    description: Optional[str]=None
    """
    The description of this instance.
    """

    cdcOrder: Optional[str]=None
    """
    Field names from source type that is used to determine Change Data Capture (CDC). i.e. Data integration will read
    incremental data based on checkpoint value stored in {@link SourceCollection.Cdc.Checkpoint} for these field
    When reading data from source collection, Sources that are greater (or lesser if descending) than each of these fields will be considered as new data
    """

    meta: Optional[Meta]=None
    """
    Various system fields.
    """

    name: Optional[str]
    """
    The unique and required name of this instance.
    """

    source: Optional[Type]=None
    """
    Structure defined to serialize the content from the SourceCollection {@see Source}
    """

    sourceSystem: Optional[SourceSystem[SourceSystem.Config, Any]]
    """
    Source system for the source collection
    """

    external: Optional[bool]=None
    """
    Indicates that the source collection is not managed by c3
    e.g. in case of FileSourceCollection we do manage the inboxUrl
         in case of CloudMessageSourceCollection we do not create or manage the queue.
    """

    sequential: Optional[bool]=None
    """
    If true, incoming data for this canonical would be processed sequentially.
    otherwise, the incoming data would be processed in parallel.
    """

    state: Optional[str]=None
    """
    Indicator of whether this instance is currently being configured
    """

    afterProcess: Optional[Lambda[Callable[[Union[SourceCollection[SourceCollection.Config]], Union[Sources]]]]]=None
    """
    Triggers the action in the lambda function after each individual abstract content is processed. The source collection may be used to obtain any parameters necessary for the after-processing of the content.
    
    @param sourceCollection
       The {@see SourceCollection} from which parameters are needed for after-processing.
    @param sources
       The {@see Sources} object that may be used in after-processing.
    """

    skippedTransforms: Optional[Array[str]]=None
    """
    List of transforms to skip for SourceCollection.
    """

    patchObjsOperSpec: Optional[Callable[[Union[Content]], Union[FileObjsOperSpec]]]=None
    """
    Optional Lambda function that builds the FileObjsOperSpec object for the content
    This is optional and if defined something like below
    ```
    var func = function f(file){
     if(file.fileName === 'abc.csv')
       return FileObjsOperSpec.make({skipExtraFields:true, serType:'CanonicalTestUser'});
     else
       return FileObjsOperSpec.make({skipExtraFields:false, serType:'CanonicalTestUser'});
     };
     var sc = SourceCollection.get("mySourceCollection");
     sc = sc.putField("patchObjsOperSpec", Lambda.fromJavaScript(func));
     sc.upsert();
    ```
    Note what is defined here will only be used and user should handle cases for parsing the content.
    otherwise FileObjsOperSpec will be generated from the SourceCollection
    {@see #fileObjsOperSpec}
    """

    cdcSourcesOverride: Optional[Lambda[Callable[[Union[SourceCollection.Cdc.Checkpoint]], Union[Stream[Source]]]]]=None
    """
    Override the default orderedCdcSources function to provide custom logic for reading sources based on the provided checkpoint.
    This is useful when the default cdcSources does not meet the requirements of the specific source collection.
    E.g. for ApiSourceCollection, the default cdcSources may not be able to handle all API-specific logic for reading for different Source Collections
    @param checkpoint
           The checkpoint from which to read sources.
    @return
           Sources based on the provided checkpoint.
    """
    def __init__(self, description: Optional[str]=None, cdcOrder: Optional[str]=None, meta: Optional[Meta]=None, name: Optional[str]=None, source: Optional[Type]=None, sourceSystem: Optional[SourceSystem[SourceSystem.Config, Any]]=None, external: Optional[bool]=None, sequential: Optional[bool]=None, state: Optional[str]=None, afterProcess: Optional[Lambda[Callable[[Union[SourceCollection[SourceCollection.Config]], Union[Sources]]]]]=None, skippedTransforms: Optional[Array[str]]=None, patchObjsOperSpec: Optional[Callable[[Union[Content]], Union[FileObjsOperSpec]]]=None, cdcSourcesOverride: Optional[Lambda[Callable[[Union[SourceCollection.Cdc.Checkpoint]], Union[Stream[Source]]]]]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[ContentSourceCollection]:
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
    def fromJsonString(cls, json: str) -> Union[ContentSourceCollection]:
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
    def fromXmlString(cls, xml: str) -> Union[ContentSourceCollection]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[ContentSourceCollection]:
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
    def replaceType(self, old: Type, new: Type) -> ContentSourceCollection:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ContentSourceCollection:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ContentSourceCollection:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ContentSourceCollection]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ContentSourceCollection]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> ContentSourceCollection:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ContentSourceCollection:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ContentSourceCollection:
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
    def validateObj(self) -> ContentSourceCollection:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> ContentSourceCollection:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> ContentSourceCollection:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> ContentSourceCollection:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> ContentSourceCollection:
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
    def withoutFieldAtPath(self, path: str) -> ContentSourceCollection:
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
    def withoutField(self, field: str) -> ContentSourceCollection:
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
    def withoutField(self, field: FieldType) -> ContentSourceCollection:
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
    def withoutFields(self, fields: Array[str]) -> ContentSourceCollection:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> ContentSourceCollection:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> ContentSourceCollection:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> ContentSourceCollection:
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
    def defaultField(self, field: str) -> ContentSourceCollection:
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
    def defaultField(self, field: FieldType) -> ContentSourceCollection:
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
    def unsetField(self, field: str) -> ContentSourceCollection:
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
    def unsetField(self, field: FieldType) -> ContentSourceCollection:
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
    def removeField(self, field: str) -> ContentSourceCollection:
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
    def removeField(self, field: FieldType) -> ContentSourceCollection:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> ContentSourceCollection:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> ContentSourceCollection:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> ContentSourceCollection:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> ContentSourceCollection:
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
    def mergeJson(self, json: any) -> ContentSourceCollection:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> ContentSourceCollection:
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
    def sumObj(self, other: Obj, deep: bool=None) -> ContentSourceCollection:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[ContentSourceCollection]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[ContentSourceCollection]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[ContentSourceCollection]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[ContentSourceCollection]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[ContentSourceCollection]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, ContentSourceCollection]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, ContentSourceCollection]]:
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
    def toBuilder(self) -> ObjBuilder[ContentSourceCollection]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[ContentSourceCollection]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> ContentSourceCollection:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> ContentSourceCollection:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> ContentSourceCollection:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> ContentSourceCollection:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> ContentSourceCollection:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> ContentSourceCollection:
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
    def make(cls, s: str) -> Union[ContentSourceCollection]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> ContentSourceCollection:
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
    def afterMake(self) -> ContentSourceCollection:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> ContentSourceCollection:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[ContentSourceCollection]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> ContentSourceCollection:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def config(self, secrets: bool=None) -> ContentSourceCollection.Config:
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
    def typeConfig(cls) -> ContentSourceCollection.Config:
    """
    @return type configuration for the given {@link Configurable} type.
    E.g. {@see REST} & {@see RestConfig}
    """
        ...
    def renderer(self) -> Union[HtmlRenderer]:
    """
    Get a renderer that will show info on the metrics available for this source object to HTML.
    """
        ...
    @classmethod
    def listMetrics(cls) -> Union[Array[Metric]]:
    """
    API for returning a list of simple and compound metrics applicable for this type (alphabetically sorted)
    @return a list of metrics
    """
        ...
    @classmethod
    def listMetricsByKind(cls) -> Union[ListMetricsResult]:
    """
    List of simple and compound metrics for this type
    @return ListMetricsResult
    """
        ...
    @classmethod
    def getSimpleMetric(cls, metricName: str) -> Union[SimpleMetric]:
    """
    Returns the simple metric associated with the source type OR the parent if the one for source doesn't exist
    @return the SimpleMetric for the source type or parent type based on whats present
    """
        ...
    @classmethod
    def evalMetric(cls, spec: EvalMetricSpec=None) -> Union[Timeseries[Any]]:
    """
    API to be used for evaluating single source with single metric
    @param spec
             The spec which specifies the sourceId / start / end / metricName / grain
    @return a Timeseries for the given spec
    """
        ...
    @classmethod
    def evalMetrics(cls, spec: EvalMetricsSpec=None) -> Union[EvalMetricsResult]:
    """
    API to be used when evaluating the following:
             sources     Metrics
                1          Many
               Many         1
               Many        Many
    @param spec
             The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
    @return the result of evaluation containing multiple source and multiple metrics
    """
        ...
    @classmethod
    def evalMetricsStream(cls, spec: EvalMetricsSpec=None) -> Union[EvalMetricsResultStream]:
    """
    API to be used when evaluating the following:
             sources     Metrics
                1          Many
               Many         1
               Many        Many
    @param spec
             The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
    @return stream of evaluation containing multiple source and multiple metrics one source at a time
    """
        ...
    @classmethod
    def evalAggregateMetrics(cls, spec: EvalMetricsSpec=None) -> Union[Map[str, Map[str, Dimension]]]:
    """
    This api should be used when all the metrics in the spec are aggregate metrics and are expected to return only a scalar value
    Since evalMetrics and evalMetric api's return Timeseries for aggregate metrics with the same value repeated in data field
    this api will be handy for just accessing the scalar value easily
    @param spec
             EvalMetricsSpec specifying start / end / interval / ids (source ids) / expressions (this should be aggregate expressions ONLY)
             The onus of passing aggregate metrics is on the user and the api will pick the first value from the result
             and stick it in as the scalar value with the appropriate unit
    @return The map of srcId -> expression -> Aggregated value with unit
    """
        ...
    @classmethod
    def rollupMetric(cls, spec: RollupMetricSpec=None) -> Union[Timeseries[Any]]:
    """
    API to roll up all Timeseries of all the sources into a single Timeseries for that 1 Metric
    @param spec
             The spec which specifies the rollup function to be applied to aggregate information
    @return 1 timeseries which is an aggregation of all the sources' timeseries
    """
        ...
    @classmethod
    def rollupMetrics(cls, spec: RollupMetricSpec=None) -> Union[Map[str, Timeseries[Any]]]:
    """
    API to roll up all Timeseries of all the sources into a single Timeseries per Metric
    @param spec
             The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
    @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
    """
        ...
    @classmethod
    def rollupMetricsWithMetadata(cls, spec: RollupMetricSpec=None, overrideMetrics: Array[Metric]=None) -> Union[Map[str, Timeseries[Any]]]:
    """
    API to roll up all Timeseries of all the sources into a single Timeseries per Metric by passing custom metrics on the fly
    @param spec
             The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
    @param overrideMetrics
             The list of metrics that need to be overridden during evaluation
    @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
    """
        ...
    @classmethod
    def metricVariables(cls, expression: str) -> Union[Array[MetricVariable]]:
    """
    Returns all the variables in the given expression
    @param expression
                   The expression for which you need to find variables
    @return a list of all the variables in the metric expression
    """
        ...
    @classmethod
    def evalMetricsWithMetadata(cls, spec: EvalMetricsSpec=None, overrideMetrics: Array[Metric]=None) -> Union[EvalMetricsResult]:
    """
    The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
    If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
    @param spec
             The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
    @param overrideMetrics
             The list of metrics that need to be overridden during evaluation
    @return the result which contains the result of metric evaluations for various sources
    """
        ...
    @classmethod
    def evalMetricsWithMetadataStream(cls, spec: EvalMetricsSpec=None, overrideMetrics: Array[Metric]=None) -> Union[EvalMetricsResultStream]:
    """
    The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
    If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
    @param spec
             The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
    @param overrideMetrics
             The list of metrics that need to be overridden during evaluation
    @return stream of result which contains the result of metric evaluations for various sources one source at a time
    """
        ...
    @classmethod
    def exportMetricsDataJob(cls, spec: EvalMetricsSpec=None, additionalExportSpec: AdditionalExportSpec=None, numObjPerFile: int=None, typeForSrcIds: Type=None) -> Union[Export]:
    """
    The api should be used to export all the source data to s3
    This includes extracting the relational data, timeseries data and tsDecl data
    It internally creates a map reduce job to write data to s3
    @param spec
             Regular eval metric spec used during evaluation
    @param additionalExportSpec
             Specify the types, their includes, and their filter for which you need to extract data.
             e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
    @param numObjPerFile (optional)
             Number of objects per file to be created in S3
    @param typeForSrcIds (optional)
             If this type is specified then ids for exporting src type objects will be picked from this type and not
             from the spec object
    @return the export job object for tracking status
    """
        ...
    @classmethod
    def importMetricsDataJob(cls, filePrefix: str=None) -> Union[Import]:
    """
    API used to import all the exported data in s3
    @param filePrefix (optional)
             Optional filePrefix to used to get files from S3
    @return the import job object for tracking status
    """
        ...
    @classmethod
    def extractMetricsData(cls, spec: EvalMetricsSpec=None, additionalExportSpec: AdditionalExportSpec=None) -> Union[ExportedObj]:
    """
    The api should be used to download data for all the metrics / sources specified in the EvalMetricsSpec
    This includes extracting the relational data, timeseries data and tsDecl data
    @param spec
             Regular eval metric spec used during evaluation
    @param additionalExportSpec
             Specify the types, their includes, and their filter for which you need to extract data.
             e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
    @return an ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
    """
        ...
    @classmethod
    def importMetricsData(cls, input: ExportedObj=None) -> None:
    """
    API is supposed to import the data that was exported using the extractMetricsData api
    @param input
             Input is a map of typeName to array of array of objects grouped by a batch size
             ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
    """
        ...
    @classmethod
    def refreshMetricsCache(cls, ids: Array[str]=None, metricNames: Array[str]=None, startDate: datetime=None, endDate: datetime=None) -> None:
    """
    This api is used to refresh metrics cache. Subsequent evalMetrics call should serve results from cache. Metrics cache should be defined
    via "<type-name>-MetricsCacheConfig" TenantConfig. Only metrics that are specified in "<type-name>-MetricsCacheConfig" will be cached.
    There is no invalidation of this cache and should be refreshed manually
    @param ids
             The src ids that need to be cached.
    @param metricNames (optional)
             The list of metrics that need to be cached. This could be simple and/or compound or a mix.
                                             This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
    @param startDate (optional)
             Optional evaluation start date for caching metrics
    @param endDate (optional)
             Optional evaluation end date for caching metrics
    """
        ...
    @classmethod
    def startMetricsCacheRefreshJob(cls, metricNames: Array[str]=None, batchSize: int=None, filter: str=None, startDate: datetime=None, endDate: datetime=None) -> Union[MetricsCacheRefreshJob]:
    """
    This api should be used to kick of the metrics cache refresh map reduce job
    @param metricNames (optional)
                   The list of metrics whose cache needs to be refreshed. This could be simple and/ or compound or a mix
                   This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
    @param filter (optional)
                   Filter out certain source ids
    @param startDate (optional)
                   Optional start date for caching metrics
    @param endDate (optional)
                   Optional end date for caching metrics
    """
        ...
    @classmethod
    def metricsCacheRefreshJobStatus(cls) -> Union[MapReduceStatus]:
    """
    This provides the status for the metrics cache refresh job
    """
        ...
    @classmethod
    def generateMetricsStats(cls, ids: Array[str]=None, metricNames: Array[str]=None, startDate: datetime=None, endDate: datetime=None, interval: str=None, testHash: bool=None) -> None:
    """
    API to generate stats like min / max / avg / count / gaps/ unavailable / earliest data point / latest data point
    for a metric source combination in a given time range
    @param ids
            list of ids that stats need to be computed for
    @param metricNames
            list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
    @param startDate
            Optional evaluation start date for stats generation. Default: First day of the current year
    @param endDate
            Optional evaluation end date for stats generation. Default: Five years before the startDate
    @param interval
            Optional evaluation interval. Default: YEAR
    @param testHash
            When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
    """
        ...
    @classmethod
    def startMetricsStatsJob(cls, metricNames: Array[str]=None, batchSize: int=None, filter: str=None, startDate: datetime=None, endDate: datetime=None, interval: str=None, testHash: bool=None) -> Union[MetricsStatsJob]:
    """
    Helper function to kick off metrics stats generation for metrics & sources combination for a given time range
    @param metricNames
            list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
    @param batchSize
            No of sources to be included in 1 map reduce job: Default: 100
    @param filter
            Filter criteria on the source type
    @param startDate
            Optional evaluation start date for stats generation. Default: First day of the current year
    @param endDate
            Optional evaluation end date for stats generation. Default: Five years before the startDate
    @param interval
            Optional evaluation interval. Default: YEAR
    @param testHash
            When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
    """
        ...
    @classmethod
    def metricsStatsJobStatus(cls) -> Union[MapReduceStatus]:
    """
    API to report the status of currently running metrics stats job
    """
        ...
    @classmethod
    def getDistribution(cls, ids: Array[str], metricName: str, period: str=None, start: datetime=None, end: datetime=None, ignoreZeroValues: bool=None, binningType: str=None, numberBins: int=None) -> Union[HistogramEvaluationResult]:
    """
    Provides histogram data for a given set of ids and metrics.
    
    The period of histogram data can be specified through either period parameter or start and end parameters,
    and period parameter has higher priority than start and end parameters which means the internal API will choose
    period other than start and end if period parameter is available.
    
    @param ids
             Array of source ids
    @param metricName
             CompoundMetricId
    @param period
             Time period (e.g., last12m, 2012, 2013, 2014)
    @param start
             Start of benchmarking period
    @param end
             End of benchmarking period
    @param ignoreZeroValues
             Flag indicates whether to ignore zero values.
             If true, any points with a zero value will not be factored into the histogram
    @param binningType
             Whether to bin by 'value' or 'quantile'
    @param numberBins
             How many bins to split the data into
    @return Histogram data contains buckets info and data info
    """
        ...
    @classmethod
    def evalMetricsStats(cls, spec: EvalMetricsSpec) -> Union[Map[str, Map[str, TimeseriesStats]]]:
    """
    Compute stats for every timeseries obtained by the metric / source combination
    @param spec
             Provide the spec for which stats need to be computed
    @return stats for every timeseries obtained for every source metric combination
    """
        ...
    @classmethod
    def startEvalMetricsBatch(cls, spec: EvalMetricsSpec) -> Union[str]:
    """
    The motivation for Eval Metrics Batch mode is to compile expressions, pre-fetch sources, plug-in variables and
    bindings for the expressions exactly once and call evaluate metrics for various time ranges multiple times
    This ends up re-using the fnd cache/ asTimeseries cache too
    Initializes (Compiles expressions, pre-fetches sources, etc) eval metrics in batch mode
    @param spec
             EvalMetricsSpec containing all the metrics and the largest time-period that the individual runs are
             going to be called with
    @return a cache key that eval metrics produces for this spec (this cache is on the current action)
    """
        ...
    @classmethod
    def endEvalMetricsBatch(cls, key: str) -> Union[int]:
    """
    Cleans up and closes the eval metrics batch
    @param keys
                 Cleans up the eval metrics batch objects for the given cache keys
    @return the current number of the cached evaluator instances
    """
        ...
    @classmethod
    def evalMetricsBatch(cls, key: str, start: datetime, end: datetime) -> Union[EvalMetricsResult]:
    """
    Runs evalMetrics for the given start and end by using the cached copy of the objects in startEvalMetricsBatch
    @param key
                 Cache key to use to load cached objects (prefetched objects, spec, compiled exprs) during evalMetrics
    @param start
                 start date for metrics evaluation
    @param end
                 end date for metrics evaluation
    @return EvalMetricsResult for the given start and end and the spec from the cached key
    """
        ...
    @classmethod
    def evalMetricsBatchKey(cls, spec: EvalMetricsSpec) -> Union[str]:
    """
    API to retrieve the eval metrics batch key based on the spec. Returns null if nothing is found
    @param spec
             Eval metrics spec to be used to figure out the eval metrics batch key
    return the eval metrics batch key for the spec or null if one does not exist
    """
        ...
    @classmethod
    def isSubset(cls, parent: EvalMetricsSpec, child: EvalMetricsSpec) -> bool:
    """
    Specifies whether the 'child' EvalMetricsSpec is a subset of 'this' EvalMetricsSpec
    This currently supports checking for only time range subset. If ids / metrics / grain / timezone/ cache/ unitId/
    filter/ limit / include do not match as is it will return false.
    @param this
             Parent EvalMetricsSpec which acts as the superset
    @param child
             Child EvalMetricsSpec which acts as the subset
    @return whether child is a subset of this EvalMetricsSpec
    """
        ...
    @classmethod
    def estimateEvalMetricsBatchCacheSize(cls, key: str) -> Union[EvalMetricsBatchCacheSize]:
    """
    API to estimate the size of objects in eval metrics batch cache.
    This will give a breakdown of the metric evaluator instance (compiled exprs, source fetch with hierarchies, other
    info to be used during evaluation), normalized data cache, and tsDecl cache
    @param key
           Eval Metrics Batch cache key for which size needs to be estimated
    @return object that gives the size of evaluator, normalized data cache and tsDecl cache
    """
        ...
    @classmethod
    def listEvalMetricsBatchKeys(cls) -> Union[Array[str]]:
    """
    Lists all the cached keys in the eval metrics batch
    @return list of keys
    """
        ...
    @classmethod
    def getExportEvalPlan(cls, spec: EvalMetricsSpec=None) -> Union[EvalPlan]:
    """
    Get EvalPlan to be used to metric data export. This method will return the hierarchies constructed and
    src type fetch spec
    @param Eval metrics spec that would be used for evalMetrics
    @return EvalPlan with hierarchies and srcTypeFetchSpec populated
    """
        ...
    @classmethod
    def generateEvalMetricsSpec(cls, spec: EvalMetricsSpec, overrideMetrics: Array[Metric]=None) -> Pair[EvalMetricsSpec, Array[Metric]]:
    """
    For internal use only:
    Generate eval metrics spec from existing spec and overridden metrics. This is particularly useful when spec has bindings
    with multiple values. In case of no / single bindings this will return the same spec back to be used for evaluation
    """
        ...
    def stage(self, source: Stream[Any]=None) -> Union[Any]:
    """
    Move unprocessed sources into intermediate data storage before processing
    @param source
           The source objects that needs to be staged
    
    @return
           The Staging object based on StagingKind; If StagingKind is FILE, this is a File
    """
        ...
    def stageFileSourceCollection(self) -> Union[FileSourceCollection]:
    """
    @return the {@link FileSourceCollection} used to manage staging files, if staging mode is FILE
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[ContentSourceCollection]:
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
    def fetch(cls, filter: Filter) -> FetchResult[ContentSourceCollection]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[ContentSourceCollection]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[ContentSourceCollection]]]:
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
    def dependencies(self) -> SourceCollectionDeps:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> ContentSourceCollection:
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
    def update(self, srcObj: ContentSourceCollection=None, spec: UpsertSpec=None) -> Union[ContentSourceCollection]:
        ...
    def upsert(self, srcObj: ContentSourceCollection=None, spec: UpsertSpec=None) -> Union[ContentSourceCollection]:
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
    def fromString(cls, s: str) -> Union[ContentSourceCollection]:
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
    def forName(cls, name: str, failIfMissing: bool=None) -> Union[ContentSourceCollection]:
    """
    Get the single instance of this Named Type by name.
    @param name
            The unique name of the instance to retrieve.
    @param failIfMissing
            If `true`, an error will be thrown if the instance does not exist. If `false` (default), null will be
            returned.
    @return The single instance of this Named Type by name. Note that if this Type is also Cached then it will
            retrieve instance from cache.
    """
        ...
    def readObjs(self, spec: ObjsOperSpec=None) -> Union[Stream[Obj]]:
    """
    Deserializes content from file into a stream of C3 Type instances.
    
    @param spec
       The {@see ObjsOperSpec} to provide various options for reading objs.
    @return stream of objects
    """
        ...
    def readTuples(self, spec: SourceCollectionReadTuplesSpec=None) -> Union[Array[Tuple]]:
    """
    Reads the raw content from source and converts it into an array of tuples.
    
    @param spec
       The {@see SourceCollectionReadTuplesSpec} to provide various options for reading tuples.
    @return array of {@link Tuple}
    """
        ...
    def inferSourceType(self) -> Union[any]:
    """
    Infer data type from the source
    
    @return the type with name, fields with suggested value types, annotations, etc. based on the source.  Returns
            null if there's no source in this SourceCollection
    """
        ...
    def inferSourceType2(self, spec: InferTypeSpec=None) -> Union[TypeMeta]:
    """
    @return null if there's no source in this SourceCollection
    Will not be upserted to the App. The user is responsible to upsert it but please note that any application
    metadata (seed/metadata/type) can only be upserted when the app is in {@link AppMode.DEV} mode.
     @see AppMode
    """
        ...
    def startOnArrivalMode(self) -> None:
    """
    Start action trigger for source collection on event arrival
    """
        ...
    def stopOnArrivalMode(self) -> None:
    """
    Stop action trigger for source collection on event arrival
    """
        ...
    def startOnScheduleMode(self) -> None:
    """
    Start action trigger for source collection on periodic schedule
    """
        ...
    def stopOnScheduleMode(self) -> None:
    """
    Stop action trigger for source collection on periodic schedule
    """
        ...
    @classmethod
    def collectionsForSourceType(cls, sourceType: Type, include: str=None) -> Union[Stream[ContentSourceCollection]]:
    """
    Returns SourceCollections for the source type
    @param sourceName
           source type name
    @param include
           specifies which fields to bring back values for in the returned SourceCollection.
    """
        ...
    def processCron(self) -> Union[CronJob]:
    """
    checks if processSchedule is set if not then it will return
    the default cron job e.g. daily_sync_sourceFiles
    {@see SourceCollectionProcessMode#ON_SCHEDULE} for more details
    
    @return cron job for the SourceCollection
    """
        ...
    def safeProcessSchedule(self) -> Union[CronSchedule]:
    """
    Always use this method to get the schedule for the SourceCollection
    @return CronSchedule for the SourceCollection
    """
        ...
    def process(self, spec: DataIntegSpec=None) -> None:
    """
    Function to be implemented in specific SourceCollection
    """
        ...
    def statsUrl(self) -> str:
    """
    Location at which {@link SourceContentMeta} serialized object is stored for each source content
    
    @return the stats url for all the processed content
    """
        ...
    def archivedContentUrl(self) -> str:
    """
    Location at which source content is stored after the processing
    e.g input file for a {@link FileSourceCollection} or input message for a {@link CloudMessageSourceCollection}
    
    @return the url for all the archived content
    """
        ...
    def archivedSourcesFileForId(self, id: str) -> Union[File]:
    """
    @return archived file in SourceCollection with matching name
    """
        ...
    def failedSourcesUrl(self) -> str:
    """
    Location at which serialized {@link FailedSource} is stored if processing failed
    
    @return the url for all the files failed for a file source collection
    """
        ...
    def safeSourceSystem(self) -> Union[SourceSystem[SourceSystem.Config, Any]]:
    """
    Always use this method to get the file source system for the FileSourceCollection
    """
        ...
    def setPriority(self, priority: int) -> ContentSourceCollection:
    """
    @return SourceCollection after setting the priority
    """
        ...
    def clearPriority(self) -> ContentSourceCollection:
    """
    @return SourceCollection after clearing the priority
    """
        ...
    def archiveUrl(self) -> str:
    """
    This is c3 managed location to store stats, content and source
    
    @return the archive root url for the source collection
    """
        ...
    def parseRootUrl(self) -> Url:
    """
    @return {@link Url} instance from the rootUrl for the source collection
    """
        ...
    def parseArchiveUrl(self) -> Url:
    """
    @return {@link Url} instance from the archiveUrl for the source collection
    """
        ...
    def fileObjsOperSpec(self, content: Content=None, spec: DataIntegSpec=None) -> Union[FileObjsOperSpec]:
    """
    Builds the FileObjsOperSpec object for the source content
    """
        ...
    def file(self) -> Union[FileSourceCollection]:
    """
    returns {@link FileSourceCollection}
    """
        ...
    def cloudMessage(self) -> Union[CloudMessageSourceCollection]:
    """
    returns {@link CloudMessageSourceCollection}
    """
        ...
    def content(self) -> Union[ContentSourceCollection]:
    """
    returns {@link ContentSourceCollection}
    """
        ...
    def api(self) -> Union[ApiSourceCollection]:
    """
    returns {@link ApiSourceCollection}
    """
        ...
    def sql(self) -> Union[SqlSourceCollection]:
    """
    returns {@link SqlSourceCollection}
    """
        ...
    def isFile(self) -> bool:
    """
    @return true if the SourceCollection is a {@link FileSourceCollection}
    """
        ...
    def sourceIdentifier(self) -> Union[Map[str, str]]:
    """
    @return string identifier for the source
    """
        ...
    def sourceSystemDataStoreKind(self) -> Union[str]:
    """
    @return datastore type for this source collection (e.g., "s3", "ApacheKafkaTopic", "postgres")
    """
        ...
    def isContent(self) -> bool:
    """
    @return true if the SourceCollection is a {@link ContentSourceCollection}
    """
        ...
    def isCloudMessage(self) -> bool:
    """
    @return true if the SourceCollection is a {@link CloudMessageSourceCollection}
    """
        ...
    def isApi(self) -> bool:
    """
    @return true if the SourceCollection is a {@link ApiSourceCollection}
    """
        ...
    def isSql(self) -> bool:
    """
    @return true if the SourceCollection is a {@link SqlSourceCollection}
    """
        ...
    def isExternal(self, spec: DataIntegSpec=None) -> bool:
    """
    @return true if the SourceCollection is external based on this order of priority:
       {@link DataIntegSpec#externalOverride}
       {@link SourceCollection.Config#externalOverride}
       {@link SourceCollection#external}
    """
        ...
    def asFileSourceCollection(self, refresh: bool=None, failIfMissing: bool=None) -> Union[FileSourceCollection]:
    """
    @return file source collection for the source collection if it exists
    """
        ...
    @classmethod
    def dfltFromSource(cls, source: Type=None) -> ContentSourceCollection:
    """
    @return default source collection from source
    """
        ...
    def pause(self) -> ContentSourceCollection:
    """
    prevents these sources for this source collection to be transformed and persisted.
    """
        ...
    def resume(self) -> ContentSourceCollection:
    """
    resumes the sources for this source collection to be processed.
    """
        ...
    def sources(self) -> Union[Stream[Sources]]:
    """
    reads the source and returns a stream of Sources
    """
        ...
    def inferTypeSpec(self, spec: InferTypeSpec=None) -> Union[InferTypeSpec]:
    """
    returns an inferType spec for the Source Collection
    """
        ...
    def safeChunkSize(self) -> Union[int]:
    """
    returns the chunkSize for the Sources
    """
        ...
    def skipTransform(self, transformId: str=None) -> ContentSourceCollection:
    """
    skip #transform for the source collection.
    """
        ...
    def skipTransformBatch(self, transformIds: Array[str]) -> ContentSourceCollection:
    """
    skip #transform for the source collection.
    """
        ...
    def clearSkippedTransforms(self, transformsId: Array[str]) -> ContentSourceCollection:
    """
    skip #transform for the source collection.
    """
        ...
    def clearAllSkippedTransforms(self) -> ContentSourceCollection:
    """
    skip #transform for the source collection.
    """
        ...
    def failedSources(self) -> Union[Stream[FailedSource]]:
    """
    reads from failedSourcesUrl and returns a stream of FailedSource
    """
        ...
    def deleteAllFailedSources(self, confirm: bool=None) -> int:
    """
    delete all FailedSources from failedSourcesUrl and return count of deleted FailedSources.
    """
        ...
    @classmethod
    def evalStatusMetric(cls, spec: TSEvalSpec, metric: Metric, obj: Obj=None) -> Union[Timeseries[Any]]:
    """
    Evaluate actionDecl metrics on SourceCollection.
    """
        ...
    @classmethod
    def sourceStatusMetricData(cls, id: str, tsEvalSpec: TSEvalSpec, metricName: str) -> Union[Timeseries[Any]]:
    """
    Helper function for {@link evalStatusMetric} that handles metrics based on {@link SourceFile}
    or {@link SourceStatus}.
    """
        ...
    @classmethod
    def sourceChunkStatusMetricData(cls, id: str, tsEvalSpec: TSEvalSpec, metricName: str) -> Union[Timeseries[Any]]:
    """
    Helper function for {@link evalStatusMetric} that handles metrics based on {@link SourceChunkStatus}.
    """
        ...
    @classmethod
    def targetStatusMetricData(cls, id: str, tsEvalSpec: TSEvalSpec, metricName: str) -> Union[Timeseries[Any]]:
    """
    Helper function for {@link evalStatusMetric} that handles metrics based on {@link TargetStatus}.
    """
        ...
    @classmethod
    def sourceFileStatNotificationData(cls, id: str, tsEvalSpec: TSEvalSpec, metricName: str) -> Union[Timeseries[Any]]:
    """
    Helper function for {@link evalStatusMetric} that handles metrics base on {@link SourceFileStatNotification}
    """
        ...
    @classmethod
    def evalEtaMetric(cls, spec: TSEvalSpec, metric: Metric, obj: Obj=None) -> Union[Timeseries[Any]]:
    """
    Evaluate actionDecl metric on SourceCollection for calculating data loading ETA.
    The metric will return all missing if there is no DataMonitoringUtil type defined
    (it is in the dataMonitoring package).
    """
        ...
    @classmethod
    def evalProcessRateMetric(cls, spec: TSEvalSpec, metric: Metric, obj: Obj=None) -> Union[Timeseries[Any]]:
    """
    Evaluate the ProcessRate metric on SourceCollection for calculating the process rate.
    The metric will return the rolled up rate as the only value in the timeseries.
    """
        ...
    @classmethod
    def evalDataAwaitingMetric(cls, spec: TSEvalSpec, metric: Metric, obj: Obj=None) -> Union[Timeseries[Any]]:
    """
    Evaluate the DataAwaiting metric on SourceCollection for calculating the data that has not been processed.
    The metric will return the rolled up rate as the only value in the timeseries.
    """
        ...
    @classmethod
    def evalDataProcessedMetric(cls, spec: TSEvalSpec, metric: Metric, obj: Obj=None) -> Union[Timeseries[Any]]:
    """
    Evaluate the DataProcessed metric on SourceCollection for calculating the amount of data processed.
    The metric will return the rolled up rate as the only value in the timeseries.
    """
        ...
    @classmethod
    def evalDataLastReceivedMetric(cls, spec: TSEvalSpec, metric: Metric, obj: Obj=None) -> Union[Timeseries[Any]]:
    """
    Evaluate the DataLastReceived metric on SourceCollection for determining when the last SourceFile was updated.
    """
        ...
    @classmethod
    def evalItemErrorsMetric(cls, spec: TSEvalSpec, metric: Metric, obj: Obj=None) -> Union[Timeseries[Any]]:
    """
    Evaluate the ItemErrors metric on SourceCollection for calculating the number of errors generated.
    The metric will return the rolled up rate as the only value in the timeseries.
    """
        ...
    def transformObjs(self, transforms: Array[Transform], spec: TransformObjsSpec=None) -> Union[TransformObjsResult]:
    """
    Reads the objs from the source collection and applies the specified transforms on the loaded objs.
    @param transforms
              list of Transforms.
    @param spec
              various parameters that control the operation of function.
    @return a {@link TransformObjsResult} instance containing the objs.
    """
        ...
    def validateSourceData(self, spec: ValidateSourceDataSpec=None) -> Union[Array[DataIssue.SourceCollection]]:
    """
    Surface any issues related to this source collection being out of sync with the source of truth. This can be
    casued by data degradation over time, such as missing fields, extra fields, or other changes in schema to the
    incoming data.
    """
        ...
    def doValidateSourceData(self, issues: Array[DataIssue.SourceCollection]=None, spec: ValidateSourceDataSpec=None) -> Union[Array[DataIssue.SourceCollection]]:
    """
    Hold common logic of ValidateSourceData for SourceCollection subtype
    """
        ...
    def cdcSources(self, checkpoint: SourceCollection.Cdc.Checkpoint=None) -> Union[Stream[Source]]:
    """
    @return sources based on the last checkpoint for the source collection
    This function should be implemented per instance of SourceCollection.
    """
        ...
    def doStageCdc(self) -> Union[Union[File,Any]]:
    """
    Capture data changes from the last timestamp based checkpoint for a source collection and stores them in
    source files
    @return
          If SourceCollection.Config#stage is true, then the Staged object based on StagingKind otherwise null.
    """
        ...
    def cdcCheckpoint(self) -> Union[SourceCollection.Cdc.Checkpoint]:
    """
    Gets the stored checkpoint for this source collection.
    """
        ...
    def generateCdcCheckpoint(self, values: Map[str, Any]=None) -> SourceCollection.Cdc.Checkpoint:
    """
    Generates a checkpoint based on CDC order {@see SourceCollection.Cdc#cdcOrder} and values of its
    corresponding fields by comparing it to the last checkpoint for this source collection.
    @param values
              map of cdc order fields to value to be used to generate the checkpoint.
    @return
           {@link SourceCollection.Cdc.Checkpoint} based on the CDC order and values.
    """
        ...
    def doOnSchedule(self, spec: DataIntegSpec=None) -> None:
    """
    Function to be called in the cronJob created in onSchedule mode
    """
        ...
    def defaultDataLakeCatalog(self) -> Union[DataLake.Catalog[DataLake.Table, DataLake.Catalog.Config]]:
    """
    Returns the dataLake catalog associated with the default dataLake pipeline of this source collection.
    The default catalog is used when no specific catalog is provided.
    
    @return The default DataLake.Catalog instance.
    """
        ...
    def defaultDataLakeTable(self) -> Union[DataLake.Table]:
    """
    Returns the dataLake table associated with the default dataLake pipeline of this source collection.
    
    @return The default DataLake.Table instance.
    """
        ...
    def defaultDataLakePipelineId(self) -> Union[str]:
    """
    Returns default dataLake pipeline id of this source collection.
    
    @return The string representation of the default pipeline ID.
    """
        ...
    
    class Config(SourceCollection.Config):
        """
        @remarks this represents a made instance of ContentSourceCollection.Config
        """
        
        contentTypeOverride: Optional[str]=None
        """
        This overrides the media type of the content (MIME type).
        
        Example showing how to override the comma delimiter in a CSV file with a pipe (`|`) delimiter:
        
        ```
        var fsc = FileSourceCollection.forName('<my file source collection id>')
        fsc.contentTypeOverride = 'text/csv; delimiter= "|"'
        fsc.update()
        ```
        """

        contentEncodingOverride: Optional[str]=None
        """
        This overrides the modifier to the media-type. When present, its value indicates what additional content codings
        have been applied to the data, and thus what decoding mechanisms must be applied in order to obtain the
        media-type referenced by the contentType.
        """

        defaultContentType: Optional[str]=None
        """
        When neither contentTypeOverride is specified in spec, nor content type information is provided from other place,
        defaultContentType takes the place to specify the content type.
        """

        defaultContentEncoding: Optional[str]=None
        """
        When neither contentEncodingOverride is specified in spec, nor content encoding information is provided from other place,
        defaultContentEncoding takes the place to specify the content type.
        """

        retrySpec: Optional[RetrySpec]=None
        """
        Specifies various parameters for automatic retry that occurs in upsert due to retryable errors.
        """

        validateContentType: Optional[bool]=None
        """
        If set to `true` then APIs that require specific contentType will fail if content has invalid or unknown content
        type. Default behavior is to assume content type is valid. E.g. readString will fail unless content type is text.
        """

        peekForMetadata: Optional[bool]=None
        """
        If set to `true` and content metadata is not known then will read content for better guess at metadata and target
        type.
        """

        failIfMissing: Optional[bool]=None
        """
        Typically File apis return `null` if underlying file is missing. If this option is set it will throw `NotFound`
        exception.
        """

        skipIfUnauthorized: Optional[bool]=None
        """
        For some external file systems, additional authorization is required to read/open a file and its metadata.
        If this option is set, it will ignore the AwsS3Exception caused when trying to read the unauthorized File
        """

        cacheUrlOrEncodedPath: Optional[str]=None
        """
        If set and if requested file or directory url is under this path then will retrieve content from cache.
        """

        cacheTtlSec: Optional[int]=None
        """
        Time in seconds that the cached file should live (default 24 hours).
        """

        forceMultiPart: Optional[bool]=None
        """
        Forces use of multipart upload and download from file system if available.
        
        By default operations intelligently decide whether or not to use multipart version. For upload action first
        allocates multiPartChunkBytes sized buffer and fills it with content. If content fits completely in memory
        upload will be conventional. If not then multipart upload would be initiated. For download first
        multiPartChunkBytes+1 sized chunk will be attempted first. If content length == multiPartChunkBytes+1 then
        total content length is retrieved and remaining content is downloaded using multipart download. If
        forceMultiPart option is set then multipart download process is initiated from the beginning.
        """

        disableMultiPart: Optional[bool]=None
        """
        Disable multipart upload and download from file system. By default file system operations intelligently decide
        if multipart version should be used or not.
        
        @see forceMultiPart
        """

        maximumSingleUploadsize: Optional[int]=None
        """
        Overrides default maximum file size before MultipartUpload kicks in. Default is 1GB
        """

        maxThreads: Optional[int]=None
        """
        Maximum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action may use
        fewer threads but it will not use more threads than this option specifies.
        
        Asynchronous IO is used by default where available. Setting this option to 1 will disable asynchronous IO but not multipart
        upload or download.
        """

        minThreads: Optional[int]=None
        """
        Suggested minimum number of threads to use for concurrent/asynchronous IO. Depending on IO thread pool size action
        may use fewer or greater number of threads. By default single action will not use all available threads this
        option overrides that behavior.
        """

        retryOnNotFound: Optional[bool]=None
        """
        If set to true, it will retry reading file when the file is not found.
        """

        lockOnWrite: Optional[bool]=None
        """
        If set to `true` then concurrent writes to a file will be serialized using locks
        
        For Azure files, if there already exists a lock and the last modified is past more than 24 hrs, the lock will be broken.
        """

        useIoExecutor: Optional[bool]=None
        """
        If set will use IoExecutor service.
        """

        cloudClient: Optional[Any]=None
        """
        If not null, retry logic will be used from CloudClient rather than File
        """

        globPattern: Optional[str]=None
        """
        If provided, list files will return only files whose name matches the provided glob.
        """

        fileSuffix: Optional[str]=None
        """
        If provided, list files will return only files that end with the provided suffix.
        """

        includeDirs: Optional[bool]=None
        """
        When listing files, set this to true to include directories if the FileSystem supports Files referencing directories
        """

        hiddenFiles: Optional[bool]=None
        """
        When listing files, set this to true to include hidden or unnamed files.
        Unnamed empty files are created by some file systems to represent directories.
        """

        doNotChunk: Optional[bool]=None
        """
        If set to false then it will chunk content to the chunkSize specified in the annotation on #source type
        {@see Ann.DataLoad#chunkSize}
        """

        cleanupPendingChunks: Optional[bool]=None
        """
        If set to true then it will clean existing chunks before chunking
        """

        doNotArchiveStatus: Optional[bool]=None
        """
        If not set then SourceStatus will be persisted in {@link SourceFile} or in {@link SourceCollection#statsUrl}
        """

        doNotArchiveSources: Optional[bool]=None
        """
        If not set then source content will be persisted in {@link SourceCollection#completedContentUrl}
        on completion.
        """

        doNotArchiveFailedSources: Optional[bool]=None
        """
        If not set then sources failed during processing or parsing, they will be archived
        in {@link SourceCollection#failedSourcesUrl}
        Also serialized {@link FailedSource} will be written to failedSourcesUrl
        For {@link CloudMessageSourceCollection}, message processing will continue irrespective of the value of this.
        When this option is not set or set to `false`, message content failed to parse will be saved
        to {@link FailedSource}.
        Also serialized {@link FailedSource} will be written to failedSourcesUrl
        """

        numErrorsToAbort: Optional[int]=None
        """
        Indicates the threshold of acceptable number of errors
        """

        numRetries: Optional[int]=None
        """
        Number of times the data load logic retries to write the target type data and stats into database in case of database
        version conflict in a multi-thread environment
        """

        processMode: Optional[str]
        """
        Mode to set the process for the SourceCollection
        {@see SourceCollectionProcessMode} for more details.
        """

        processSchedule: Optional[str]=None
        """
        If #processMode is set to ON_SCHEDULE,
        @see {@link CronSchedule#expression} for more details.
        The default is "0 0 0 * * ?", which means it runs every day at midnight.
        """

        priority: Optional[int]=None
        """
        Setting priorities for processing Sources from this source collection.
        to set lower priorities please consider values from 0-3000
        to set higher priorities please set values anywhere between 97000-100000
        Priorities between 3000 and 97000 are preserved and should not be assigned directly.
        """

        archiveUrlOverride: Optional[str]=None
        """
        User can choose to change the #archiveUrl for the SourceCollection.
        """

        externalOverride: Optional[bool]=None
        """
        If set to true then #inboxUrl is not managed by C3 and files will not be moved.
        The user has to manage the inboxUrl in that case to prevent it from growing large in size.
        """

        inboxUrlOverride: Optional[str]=None
        """
        Overrides the #inboxUrl
        If data needs to be loaded from a folder different than the default one, provide the value via this field.
        e.g. s3://my-custom-bucket/mypath/inbox
        """

        targetCollectionOverrides: Optional[Map[str, TargetCollection[Any]]]=None
        """
        Set a custom {@link TargetCollection} for specific target types.
        The map key must be the exactly the same as name of the target type and value is the {@link TargetCollection} override.
        When specifying the override, make sure that the name of the target collection is unique and separate from
        the name of the target type to avoid any conflicts with the default target collection.
        
        By default, the {@link TargetCollection} is automatically retrieved by matching the name of the target collection
        to the name of the target type. Only use this field if you have different source collections with the same target type
        and you want to use different {@link TargetCollection}s for each source collection.
        """

        csvHeaderOverride: Optional[str]=None
        """
        Overrides the csvHeader specified in the contentType.
        """

        csvDelimiterOverride: Optional[str]=None
        """
        Overrides the csvDelimiter specified contentType.
        """

        csvEscapeCharOverride: Optional[str]=None
        """
        Escape character override for CSV file.
        """

        csvQuoteCharOverride: Optional[str]=None
        """
        Quote character override for CSV file.
        """

        noCsvHeader: Optional[bool]=None
        """
        If the CSV content does not have a header. By default, its false, which means we expect header to be present.
        Useful to set as true when we don't know the header but know that it doesn't exist.
        
        Only applicable when de-serializing CSV contentType.
        """

        csvFormat: Optional[Map[str, Format]]=None
        """
        Optional format for a csv values. Key should be field path used in a csv header.
        """

        avroSchemaOverride: Optional[str]=None
        """
        Overrides avro schema for deserialization. If not provided, schema will be inferred from source data in the case of
        file based avro data, and from the type in the case of in-memory avro data.
        """

        isObjList: Optional[bool]=None
        """
        Indicates serialization/deserialization format for reading and writing Objs. If false, Objs will be written/read as
        an array of serialized Obj instances, or alternatively, a single serialized Obj instance. If true, Objs will be
        written/read in ObjList format, an object with two fields: "data", an array where each element is a serialized Obj,
        and "type", the type shared by all Objs in the aforementioned array.
        """

        failOnExtraFields: Optional[bool]=None
        """
        Optionally fail to serialize extra fields in serialized content instead of ignoring.
        """

        ignoreBadContent: Optional[bool]=None
        """
        If true will silently ignore bad syntax in the content and will return no or partial results.
        """

        ignoreValueConversionErrors: Optional[bool]=None
        """
        If set will ignore value conversion errors (e.g. non numeric strings will get converted to null for numeric fields)
        """

        mergeXmlNonAdjacentLists: Optional[bool]=None
        """
        True if desired to merge the non-adjacent lists for array type field. If false, the readObjs only
        returns the last continuous list for the given key.
        E.g., to readObjs for the following xml file,
        <tests>
          <test>one</test>
          <other>two</other>
          <test>three</test>
        </tests>
        with serType,
        Tests {
          test: [string]
          other: string
        }
        If mergeXmlNonAdjacentLists is set true, the returned Obj has 'test' field containing both 'one' and 'three'.
        Otherwise, the 'test' field only has value 'three'.
        """

        minByteSizeToChunk: Optional[int]=None
        """
        The minimum contentLength (in bytes) a Source must be for it to be chunked. The default is 5MB
        If #doNotChunk is true, this field has no effect and sources will not be chunked.
        """

        includeMeta: Optional[bool]=None
        """
        if set to true then target objs will include {@link Sources#sourcesMeta}
        """

        name: Optional[str]
        """
        The unique and required name of this instance.
        """

        configOverride: Optional[str]=None

        secretOverride: Optional[str]=None

        issues: Optional[Array[str]]=None
        """
        Captures any issues that occurred while deserializing from filesystem
        """

        chunkSize: Optional[int]=None
        """
        Indicates the chunk size in terms of number of records that needs to be used for chunking the content
        and publishing to queue
        """

        chunkSizeInMb: Optional[float]=None
        """
        Indicates the chunk size in MB that needs to be used for chunking the content
        and publishing to queue
        """

        filePrefix: Optional[str]=None
        """
        The prefix of the file name which has data for the canonical
        """

        stage: Optional[bool]=None
        """
        If true, incoming sources are persisted in intermediate data storage before processing
        """

        stagingMode: Optional[str]=None
        """
        The mode of staging intermediate files. By default, this is stored as files, but it could also be persisted
        in {@link KvStore}.
        """

        stageFileSourceCollectionName: Optional[str]=None
        """
        The name of the {@link FileSourceCollection} used to manage staged files, if stagingMode is FILE
        """

        sourceFileNameFormat: Optional[str]=None
        """
        Returns the file name format
        @return SourceFileNameFormat with the format
        """
        def __init__(self, contentTypeOverride: Optional[str]=None, contentEncodingOverride: Optional[str]=None, defaultContentType: Optional[str]=None, defaultContentEncoding: Optional[str]=None, retrySpec: Optional[RetrySpec]=None, validateContentType: Optional[bool]=None, peekForMetadata: Optional[bool]=None, failIfMissing: Optional[bool]=None, skipIfUnauthorized: Optional[bool]=None, cacheUrlOrEncodedPath: Optional[str]=None, cacheTtlSec: Optional[int]=None, forceMultiPart: Optional[bool]=None, disableMultiPart: Optional[bool]=None, maximumSingleUploadsize: Optional[int]=None, maxThreads: Optional[int]=None, minThreads: Optional[int]=None, retryOnNotFound: Optional[bool]=None, lockOnWrite: Optional[bool]=None, useIoExecutor: Optional[bool]=None, cloudClient: Optional[Any]=None, globPattern: Optional[str]=None, fileSuffix: Optional[str]=None, includeDirs: Optional[bool]=None, hiddenFiles: Optional[bool]=None, doNotChunk: Optional[bool]=None, cleanupPendingChunks: Optional[bool]=None, doNotArchiveStatus: Optional[bool]=None, doNotArchiveSources: Optional[bool]=None, doNotArchiveFailedSources: Optional[bool]=None, numErrorsToAbort: Optional[int]=None, numRetries: Optional[int]=None, processMode: Optional[str]=None, processSchedule: Optional[str]=None, priority: Optional[int]=None, archiveUrlOverride: Optional[str]=None, externalOverride: Optional[bool]=None, inboxUrlOverride: Optional[str]=None, targetCollectionOverrides: Optional[Map[str, TargetCollection[Any]]]=None, csvHeaderOverride: Optional[str]=None, csvDelimiterOverride: Optional[str]=None, csvEscapeCharOverride: Optional[str]=None, csvQuoteCharOverride: Optional[str]=None, noCsvHeader: Optional[bool]=None, csvFormat: Optional[Map[str, Format]]=None, avroSchemaOverride: Optional[str]=None, isObjList: Optional[bool]=None, failOnExtraFields: Optional[bool]=None, ignoreBadContent: Optional[bool]=None, ignoreValueConversionErrors: Optional[bool]=None, mergeXmlNonAdjacentLists: Optional[bool]=None, minByteSizeToChunk: Optional[int]=None, includeMeta: Optional[bool]=None, name: Optional[str]=None, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None, chunkSize: Optional[int]=None, chunkSizeInMb: Optional[float]=None, filePrefix: Optional[str]=None, stage: Optional[bool]=None, stagingMode: Optional[str]=None, stageFileSourceCollectionName: Optional[str]=None, sourceFileNameFormat: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[ContentSourceCollection.Config]:
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
        def fromJsonString(cls, json: str) -> Union[ContentSourceCollection.Config]:
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
        def fromXmlString(cls, xml: str) -> Union[ContentSourceCollection.Config]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[ContentSourceCollection.Config]:
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
        def replaceType(self, old: Type, new: Type) -> ContentSourceCollection.Config:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ContentSourceCollection.Config:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ContentSourceCollection.Config:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ContentSourceCollection.Config]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ContentSourceCollection.Config]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> ContentSourceCollection.Config:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ContentSourceCollection.Config:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ContentSourceCollection.Config:
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
        def validateObj(self) -> ContentSourceCollection.Config:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> ContentSourceCollection.Config:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> ContentSourceCollection.Config:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> ContentSourceCollection.Config:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> ContentSourceCollection.Config:
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
        def withoutFieldAtPath(self, path: str) -> ContentSourceCollection.Config:
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
        def withoutField(self, field: str) -> ContentSourceCollection.Config:
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
        def withoutField(self, field: FieldType) -> ContentSourceCollection.Config:
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
        def withoutFields(self, fields: Array[str]) -> ContentSourceCollection.Config:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> ContentSourceCollection.Config:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> ContentSourceCollection.Config:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> ContentSourceCollection.Config:
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
        def defaultField(self, field: str) -> ContentSourceCollection.Config:
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
        def defaultField(self, field: FieldType) -> ContentSourceCollection.Config:
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
        def unsetField(self, field: str) -> ContentSourceCollection.Config:
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
        def unsetField(self, field: FieldType) -> ContentSourceCollection.Config:
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
        def removeField(self, field: str) -> ContentSourceCollection.Config:
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
        def removeField(self, field: FieldType) -> ContentSourceCollection.Config:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> ContentSourceCollection.Config:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> ContentSourceCollection.Config:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> ContentSourceCollection.Config:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> ContentSourceCollection.Config:
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
        def mergeJson(self, json: any) -> ContentSourceCollection.Config:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> ContentSourceCollection.Config:
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
        def sumObj(self, other: Obj, deep: bool=None) -> ContentSourceCollection.Config:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[ContentSourceCollection.Config]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[ContentSourceCollection.Config]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[ContentSourceCollection.Config]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[ContentSourceCollection.Config]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[ContentSourceCollection.Config]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, ContentSourceCollection.Config]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, ContentSourceCollection.Config]]:
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
        def toBuilder(self) -> ObjBuilder[ContentSourceCollection.Config]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[ContentSourceCollection.Config]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> ContentSourceCollection.Config:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> ContentSourceCollection.Config:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> ContentSourceCollection.Config:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> ContentSourceCollection.Config:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> ContentSourceCollection.Config:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> ContentSourceCollection.Config:
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
        def make(cls, s: str) -> Union[ContentSourceCollection.Config]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> ContentSourceCollection.Config:
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
        def afterMake(self) -> ContentSourceCollection.Config:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> ContentSourceCollection.Config:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[ContentSourceCollection.Config]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> ContentSourceCollection.Config:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def withRetry(self, maxRetries: int=None, initialSleepMillis: int=None, exponent: float=None) -> Union[ContentSourceCollection.Config]:
        """
        @return new instance of this spec with `retrySpec` set
        """
            ...
        @classmethod
        def timeoutSeconds(cls, secs: float) -> ContentSourceCollection.Config:
        """
        @return instance of this spec with `retrySpec`'s `maxTotalMillis` set
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
        def fromString(cls, s: str) -> Union[ContentSourceCollection.Config]:
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
        def forName(cls, name: str, failIfMissing: bool=None) -> Union[ContentSourceCollection.Config]:
        """
        Get the single instance of this Named Type by name.
        @param name
                The unique name of the instance to retrieve.
        @param failIfMissing
                If `true`, an error will be thrown if the instance does not exist. If `false` (default), null will be
                returned.
        @return The single instance of this Named Type by name. Note that if this Type is also Cached then it will
                retrieve instance from cache.
        """
            ...
        def isCached(self) -> bool:
        """
        @return whether the cache already contains this instance
        """
            ...
        @classmethod
        def allCached(cls, doNotProduceAll: bool=None) -> Union[Stream[ContentSourceCollection.Config]]:
        """
        @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
               `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
        @return stream of all available Cached instances.
        """
            ...
        @classmethod
        def find(cls, filter: str=None, doNotProduceAll: bool=None) -> Union[Stream[ContentSourceCollection.Config]]:
        """
        @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
        @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
               `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
        @return existing instances of this type that satisfy filter from data cache.
        """
            ...
        @classmethod
        def findBy(cls, field: str, value: Any, doNotProduceAll: bool=None) -> Union[Stream[ContentSourceCollection.Config]]:
        """
        @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
               `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
        @return existing instances of this type that satisfy filter from data cache.
        """
            ...
        @classmethod
        def findByCacheKey(cls, key: str) -> Union[ContentSourceCollection.Config]:
        """
        @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
        
        @see forCacheKey
        @see getCached
        """
            ...
        @classmethod
        def forCacheKey(cls, key: str) -> Union[ContentSourceCollection.Config]:
        """
        Returns cached instance by key, with secrets removed.
        """
            ...
        def getCached(self) -> Union[ContentSourceCollection.Config]:
        """
        @return cached instance.
        
        @see forCacheKey
        @see findByCacheKey
        """
            ...
        def refreshCache(self) -> Union[ContentSourceCollection.Config]:
        """
        @return newly produced cached instance.
        """
            ...
        def cacheKey(self) -> str:
        """
        @return cache key for this instance.
        """
            ...
        @classmethod
        def produce(cls, key: str) -> Union[ContentSourceCollection.Config]:
        """
        Should produce an entry for the cache key. This method should not be called directly.
        """
            ...
        @classmethod
        def produceAll(cls) -> Union[Map[str, ContentSourceCollection.Config]]:
        """
        Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
        """
            ...
        @classmethod
        def doProduceAll(cls) -> Union[Map[str, ContentSourceCollection.Config]]:
        """
        Override for sub-types to produce all values.
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
        def getConfig(self) -> ContentSourceCollection.Config:
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
        def getSecret(self) -> ContentSourceCollection.Config:
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
        @classmethod
        def forConfigKey(cls, configKey: str) -> Union[ContentSourceCollection.Config]:
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
        def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[ContentSourceCollection.Config]]:
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
        def setConfigValues(self, from_: Map[str, Any], override: str=None) -> None:
        """
        Sets multiple field values to those specified in the map. The map keys are the paths.
        @see setConfigValue
        """
            ...
        @overload
        def setConfigValues(self, from_: ContentSourceCollection.Config, override: str=None) -> None:
        """
        Sets multiple field values to be the same as the passed instance.
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
        @overload
        def setSecretValues(self, from_: Map[str, Any], override: str=None) -> None:
        """
        Sets multiple secret field values to those specified in the map. The map keys are the paths.
        @see setSecretValue
        """
            ...
        @overload
        def setSecretValues(self, from_: ContentSourceCollection.Config, override: str=None) -> None:
        """
        Sets multiple secret field values to be the same as the passed instance.
        @see setSecretValue
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
        @return config or secret value for the provided config key, field path, and override if set
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
        def loadConfigAndSecret(cls, configKey: str) -> Union[ContentSourceCollection.Config]:
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
        Minimum configuration override level. Default is {@link ConfigOverride#APP}.
        """
            ...
        @classmethod
        def maxOverride(cls) -> str:
        """
        Maximum configuration override level. Default is {@link ConfigOverride#ROOT}.
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
        @classmethod
        def secretFieldPaths(cls) -> Union[Array[FieldPath]]:
        """
        returns a list of all field paths that are secret
        """
            ...
        def removeSecrets(self) -> Union[ContentSourceCollection.Config]:
        """
        @return this config without any secret values.
        """
            ...
        def removeNonSecrets(self) -> Union[ContentSourceCollection.Config]:
        """
        @return this config with only secret values.
        """
            ...
        def validate(self) -> ContentSourceCollection.Config:
        """
        Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
        validation and setup.
        """
            ...
        @classmethod
        def rawJson(cls, configKey: str) -> Union[any]:
        """
        @return The cached and merged JSON of all defined configuration templates for this instance, including secrets.
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


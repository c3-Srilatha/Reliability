#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.ObjList import ObjList
from c3.platform.Promise import Promise
from c3.platform.SeedData import SeedData
from c3.platform.Include import Include
from c3.platform.GenerateDataSpec import GenerateDataSpec
from c3.platform.MlAtomicPipe.Engine.DeploySpec import MlAtomicPipe.Engine.DeploySpec
from c3.platform.RefreshMetricsBatchJob import RefreshMetricsBatchJob
from c3.platform.SetBuilder import SetBuilder
from c3.platform.WithKey import WithKey
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ActionStats import ActionStats
from c3.platform.EvalSpec import EvalSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SeedDataDeps import SeedDataDeps
from c3.platform.ObjError import ObjError
from c3.platform.ValueSpec import ValueSpec
from c3.platform.MlOperationRun import MlOperationRun
from c3.platform.Data import Data
from c3.platform.SchemaInfo import SchemaInfo
from c3.platform.MlConvertSpec import MlConvertSpec
from c3.platform.RefreshMetricsSpec import RefreshMetricsSpec
from c3.platform.CheckReferencesResult import CheckReferencesResult
from c3.platform.GetMissingSpec import GetMissingSpec
from c3.platform.MlScoringMetric import MlScoringMetric
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.platform.RefreshDefaultFieldsSpec import RefreshDefaultFieldsSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ScanStats import ScanStats
from c3.platform.RefreshAnalyticsSpec import RefreshAnalyticsSpec
from c3.platform.ValidatePathResult import ValidatePathResult
from c3.platform.HardwareConstraint import HardwareConstraint
from c3.platform.MergeSpec import MergeSpec
from c3.platform.MlPipeline import MlPipeline
from c3.platform.MergeAllSpec import MergeAllSpec
from c3.platform.MlPipeline.Vertex import MlPipeline.Vertex
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ExportDataSpec import ExportDataSpec
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Stream import Stream
from c3.platform.Url import Url
from c3.platform.RunCreatedOrUpdatedBatchJob import RunCreatedOrUpdatedBatchJob
from c3.platform.FlowGraph.Edge import FlowGraph.Edge
from c3.platform.RemoveAllSpec import RemoveAllSpec
from c3.platform.MlTemplate.AtomicPipe import MlTemplate.AtomicPipe
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.Transaction import Transaction
from c3.platform.MlOperationRun import MlOperationRun
from c3.platform.RefreshBatchJob import RefreshBatchJob
from c3.platform.Hpo.Spec import Hpo.Spec
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.BatchFetchSpec import BatchFetchSpec
from c3.platform.MlAtomicPipe import MlAtomicPipe
from c3.platform.EvaluateArrowStreamSpec import EvaluateArrowStreamSpec
from c3.platform.TimeRange import TimeRange
from c3.platform.ExportDataResult import ExportDataResult
from c3.platform.Hp.ParamSpace import Hp.ParamSpace
from c3.platform.MlOperationRun import MlOperationRun
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Meta import Meta
from c3.platform.Duration import Duration
from c3.platform.PersistableWritable import PersistableWritable
from c3.platform.RefreshCalcFieldsBatchJob import RefreshCalcFieldsBatchJob
from c3.platform.RunCreatedOrUpdatedSpec import RunCreatedOrUpdatedSpec
from c3.platform.ImportDataSpec import ImportDataSpec
from c3.platform.CreateBatchObjStreamSpec import CreateBatchObjStreamSpec
from c3.platform.RedShiftExportDataSpec import RedShiftExportDataSpec
from c3.platform.TouchSpec import TouchSpec
from c3.platform.EntityType import EntityType
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.TSEvalSpec import TSEvalSpec
from c3.platform.MlPipeline.PipeVertex.Authoring import MlPipeline.PipeVertex.Authoring
from c3.platform.Filter import Filter
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.CheckReferencesSpec import CheckReferencesSpec
from c3.platform.Type import Type
from c3.platform.CellTuple import CellTuple
from c3.platform.MlOperationRun import MlOperationRun
from c3.platform.ValueType import ValueType
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.EvaluateResult import EvaluateResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.RefreshDepsSpec import RefreshDepsSpec
from c3.platform.SetType import SetType
from c3.platform.Hpo.Experiment import Hpo.Experiment
from c3.platform.RefreshAnalyticsBatchJob import RefreshAnalyticsBatchJob
from c3.platform.Exclude import Exclude
from c3.platform.ClearCollectionSpec import ClearCollectionSpec
from c3.platform.FetchResult import FetchResult
from c3.platform.Hp.SearchSpace import Hp.SearchSpace
from c3.platform.PushStream import PushStream
from c3.platform.StartImportDataSpec import StartImportDataSpec
from c3.platform.ObjBatch import ObjBatch
from c3.platform.RefreshUniqueIndexesBatchJob import RefreshUniqueIndexesBatchJob
from c3.platform.MlOperationSpec import MlOperationSpec
from c3.platform.ArrayType import ArrayType
from c3.platform.TsInvalidation import TsInvalidation
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.MlPipe import MlPipe
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.RefreshCalcFieldsSpec import RefreshCalcFieldsSpec
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.ImportDataResult import ImportDataResult
from c3.platform.EvaluateSpec import EvaluateSpec
from c3.platform.Workflow import Workflow
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SecondaryDsUpsert import SecondaryDsUpsert
from c3.platform.ScanSpec import ScanSpec
from c3.platform.RefreshDefaultFieldsBatchJob import RefreshDefaultFieldsBatchJob
from c3.platform.RefreshUniqueIndexesSpec import RefreshUniqueIndexesSpec
from c3.platform.MlPipeline.PipeVar import MlPipeline.PipeVar
from c3.platform.VersionEdit import VersionEdit
from c3.platform.MlPipe.Bindings import MlPipe.Bindings
from c3.platform.ExistsSpec import ExistsSpec

# Python definitions for the C3 type Reconstruction.Post.PercentileDurationAlertingPipe


class PercentileDurationAlertingPipe(Reconstruction.Post.AlertingPipe[{ riskScore: Data }]):
    """
    This type represents an {@link MlPipe} template which outputs an `alert` based on a dataset riskScores as input.
    
    @remarks this represents a made instance of Reconstruction.Post.PercentileDurationAlertingPipe
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
    Name of this pipe.
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

    userUpdatedFields: Optional[Array[str]]=None
    """
    System managed field that keeps track of which fields in the seed data obj were updated by a user (as opposed to
    the provisioner/authorizer).  Fields in seed data objs that are updated by users will not have those changes
    overridden by provisioning.
    """

    hidden: Optional[bool]=None
    """
    Field that marks a seed data obj as hidden.  When a seed data obj that was created via provisioning (e.g owned by
    c3), user removals of that obj are handled by marking the obj as hidden to prevent future provisioning from causing
    them to reappear.
    """

    userOwned: Optional[bool]=None
    """
    A seed data entry is considered to be user owned if either this flag is true or the {@link Meta#created created}
    field of {@link Persistable#meta} is not the authorizer or provisioner.  This field is completely managed by the
    system.  It will be set while creating an entry if it is being created by the authorizer and the
    {@link UpsertSpec#forceUserUpdate} is set to true.
    """

    typeIdent: Optional[str]=None
    """
    Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
    of its base type's typeIdent
    """

    frozen: Optional[bool]=None
    """
    If true, then the pipe shall not be retrained
    """

    trained: Optional[bool]=None
    """
    True if training has succeeded and false otherwise.
    """

    trainingErrors: Optional[str]=None
    """
    Errors from training.
    """

    flattenInput: Optional[bool]=None
    """
    If true, the underlying model only accepts flattened input.
    """

    hyperparamOverrides: Optional[Map[str, Any]]=None
    """
    The hyperparameters overridden of a native model or pipe.
    """

    hyperparamSearchSpace: Optional[Hp.SearchSpace]=None
    """
    A collection of {@link Hp.ParamSpace}s for the hyperparameters of this pipe. This search space will be used to
    perform hyperparameter searches.
    """

    hpoSpec: Optional[Hpo.Spec]=None
    """
    Used to provide configuration for {@link #search}. Some configurations include how to validate results, which
    search algorithms will be used, and limits on execution iterations.
    """

    hpoExperiment: Optional[Hpo.Experiment]=None
    """
    {@link Hpo.Experiment} stores the result of hyperparameter optimization to find the best model/pipeline.
    """

    experiment: Optional[Any]=None
    """
    Reference to the experiment that produced this {@link MlPipe}. For example, this could be a {@link Hpo.ExperimentBase}.
    """

    modelFiles: Optional[Map[str, Url]]=None
    """
    Map of urls of saved model files
    key - model file name, value - {@link Url} corresponding to model file name
    """

    customModelCode: Optional[Map[str, any]]=None
    """
    A map containing {Module Name: Compressed Source Code} key-value pairs. The module name is the name of the
    module from where the source code was taken from. (i.e. numpy).
    """

    processFunc: Optional[str]=None
    """
    Name for the function on the native model to call to do {@link MlProcessable#process}.
    """

    underlyingPipe: Optional[MlAtomicPipe[Any, Any, Any]]=None
    """
    A pipe that contains the native model and implements {@link MlAtomicPipe#doProcess} and optionally
    {@link MlAtomicPipe#doTrain}. If set, the implementation of the APIs on the `MlAtomicPipe` interface will be
    dispatched through the underlying pipe. Otherwise, the developer has an additional responsibility to implement the
    APIs.
    DEVELOPER NOTE: If sub-types of {@link MlTemplate.AtomicPipe} is designed to have `underlyingPipe`, it is required to
    override {@link MlTemplate.AtomicPipe#hasUnderlyingPipe} and return `True`
    """

    alertColumnName: Optional[str]=None
    """
    The name of the column in the {@link Data} output. Default is "alert"
    """

    lookbackDuration: Optional[Duration]=None
    """
    The required lookback duration to correctly generate alerts. Used for internal data handling in the model
    deployment framework.
    """

    riskScoreColumnName: Optional[str]=None
    """
    The name of the column in the {@link Data} input. Default is "riskScore" but will throw an error if the column
    does not exist.
    """

    alertPercentile: Optional[float]=None
    """
    Parameter to compute risk scores percentile that will be used as alert threshold.
    The computed alert threshold is stored on the field alertThreshold.
    alphaPercentile must be between [0, 100]. If alertThreshold is set, overrides alphaPercentile.
    """

    alertThreshold: Optional[float]=None
    """
    Risk score threshold above which a risk score is considered "high" and could raise an alert.
    If alertThreshold is set, overrides alphaPercentile.
    """

    ignoreSpan: Optional[int]=None
    """
    The duration of time, in seconds, that `riskScore` should be continuously
    above the {@link alertThreshold} before being considered as a candidate for
    raising an alert.
    """

    mergeSpan: Optional[int]=None
    """
    If an alert has already been raised in the last {@link mergeSpan} seconds,
    then no alert will be raised now, even if the `riskScore` is above the
    {@link alertThreshold} and has consistently remained over the
    {@link alertThreshold} for beyond {@link ignoreSpan} seconds.
    """
    def __init__(self, id: Optional[str]=None, versionEdits: Optional[Array[VersionEdit]]=None, name: Optional[str]=None, meta: Optional[Meta]=None, version: Optional[int]=None, typeWithBindings: Optional[Type]=None, userUpdatedFields: Optional[Array[str]]=None, hidden: Optional[bool]=None, userOwned: Optional[bool]=None, typeIdent: Optional[str]=None, frozen: Optional[bool]=None, trained: Optional[bool]=None, trainingErrors: Optional[str]=None, flattenInput: Optional[bool]=None, hyperparamOverrides: Optional[Map[str, Any]]=None, hyperparamSearchSpace: Optional[Hp.SearchSpace]=None, hpoSpec: Optional[Hpo.Spec]=None, hpoExperiment: Optional[Hpo.Experiment]=None, experiment: Optional[Any]=None, modelFiles: Optional[Map[str, Url]]=None, customModelCode: Optional[Map[str, any]]=None, processFunc: Optional[str]=None, underlyingPipe: Optional[MlAtomicPipe[Any, Any, Any]]=None, alertColumnName: Optional[str]=None, lookbackDuration: Optional[Duration]=None, riskScoreColumnName: Optional[str]=None, alertPercentile: Optional[float]=None, alertThreshold: Optional[float]=None, ignoreSpan: Optional[int]=None, mergeSpan: Optional[int]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def fromJsonString(cls, json: str) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def fromXmlString(cls, xml: str) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    Fetches the object if it exists in database and returns the fingerprint. Note that this method does not use the
    {@link Persistable#id}, {@link Persistable#version}, or {@link Persistable#meta} fields when calculating the
    fingerprint.
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
    def replaceType(self, old: Type, new: Type) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def validateObj(self) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def withoutFieldAtPath(self, path: str) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def withoutField(self, field: str) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def withoutField(self, field: FieldType) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def withoutFields(self, fields: Array[str]) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def defaultField(self, field: str) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def defaultField(self, field: FieldType) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def unsetField(self, field: str) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def unsetField(self, field: FieldType) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def removeField(self, field: str) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def removeField(self, field: FieldType) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def mergeJson(self, json: any) -> Reconstruction.Post.PercentileDurationAlertingPipe:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def toBuilder(self) -> ObjBuilder[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def make(cls, s: str) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def afterMake(self) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @classmethod
    def generateCenterPipeline(cls, center: MlPipe[Any, Any, Any, Any, Any], useVar: bool=None) -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    @param center
            A pipe to wrap in a pipeline.
    @return a new {@link MlPipeline} that contains the `center` pipe.
    """
        ...
    @classmethod
    def mergePipelines(cls, first: MlPipeline[Any, Any, Any, Any, Any], second: MlPipe[Any, Any, Any, Any, Any], outputToInput: Map[str, str], keepFirstOutputs: bool=None) -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    Merge the `first` and `second` pipes into a single pipeline. This method is useful if you want to connect
    outputs of the `first` pipeline to the inputs of the `second` pipeline without using `_var` APIs. Note that
    this method cannot be used if the outputs of the `first` pipeline are used for either training or inference
    of the `second`  pipeline.
    
    @param first
           The first pipeline that will precede the `second` pipe.
    @param second
           The second pipe that will succeed the `first` pipe.
    @param outputToInput
           A map of `first` output name to `second` input name.
    @param keepFirstOutputs
           If set, the merged pipeline will preserve the output vertex of the `first` pipeline. Otherwise, the
           output names specified in `outputToInput` will be removed.
    """
        ...
    @classmethod
    def makePipeline(cls, first: MlPipeline[Any, Any, Any, Any, Any], second: MlPipeline[Any, Any, Any, Any, Any], newVertices: Array[MlPipeline.Vertex], newEdges: Array[FlowGraph.Edge[MlPipeline.Vertex]]) -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    Make a new instance of {@link MlPipeline} which connects the first pipeline to the second. This method primarily
    generates the new type bindings and {@link MlPipeline#scoreNames}, and prunes any unused vertices.
    @param first
            The first sub-pipeline of the merged pipeline
    @param second
            The second sub-pipeline of the merged pipeline
    @param newVertices
            A list of vertices that contains the first and second pipeline's vertices
    @param newEdges
            A list of edges that contains the first and second pipeline's edges, and the edges that connect the
            first and second pipeline.
    """
        ...
    def succeed(self, pipe: Union[MlPipe[Any, Any, Any, Any, Any],Map[str, MlPipe[Any, Any, Any, Any, Any]]], kwargs: Map[str, Any]=None) -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    This method constructs a new {@link MlPipeline} that appends this alerting pipe to any {@link MlPipe} that has
    `riskScore` as an output. The returned pipeline will have a new output `alert`. See
    {@link Reconstruction.Post.Postprocessor#suceed} for the list of accepted keyword arguments.
    
    It is recommended to use this method with a {@link Reconstruction.Post.RiskScorePipe}. For example,
    ```py
    # Create a new Reconstruction.Algorithm
    autoencoder = c3.Reconstruction.Algorithm.TransformerAutoencoder(name="trans_ae").withDefaults()
    
    # Create a new risk score pipe
    risk_score_pipe = c3.Reconstruction.Post.SimpleRiskScorePipe(aggFunc="mean", name="simple_risk_score")
    
    # Create a new alerting pipe
    alerting_pipe = c3.Reconstruction.Post.PercentileDurationAlertingPipe(name="alerting").withDefaults()
    
    # Connect the risk score pipe to the autoencoder
    ae_with_risk_score = risk_score_pipe.succeed(autoencoder)
    
    # Connect the alerting pipe to the sub-pipeline containing the autoencoder and risk score pipe by invoking
    # `succeed` on the alerting pipe.
    full_pipeline = alerting_pipe.succeed(ae_with_risk_score)
    ```
    """
        ...
    @classmethod
    def connect(cls, center: MlPipe[Any, Any, Any, Any, Any], post: MlPipeline[Any, Any, Any, Any, Any], inputMap: Map[str, str], kwargs: Map[str, Any]=None) -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    Connect the `center` pipe to the `post` pipeline, using the `inputMap` to determine which outputs of `center` get
    connected to which inputs of `post`. This method accepts the following `kwargs`:
    - `mergePipelines`: If set, do not wrap `center` in a nested pipeline and directly merge the `center` and `post` pipes.
    - `keepOutputs`: If set, keep the outputs of `center` that are also being connected to `post`.
    
    @param center
             The central pipe.
    @param post
             The pipeline that orchestrates post-processing steps
    @param inputMap
             A map of output name in `center` to input name in `post`
    @param kwargs
             A map of keyword arguments to configure the returned {@link MlPipeline}
    """
        ...
    @overload
    @classmethod
    def validate(cls, pipe: MlPipe[Any, Any, Any, Any, Any], outputKeys: Array[str]) -> None:
    """
    Raise an `AssertionError` if the `pipe` does not have the `outputKeys` in its declared output Type. If the `pipe`
    has a single output, the only possible output key is `"out"`.
    """
        ...
    @overload
    def validate(self, context: Map[str, Any]=None) -> None:
    """
    Validate the pipe.
    
    @param context
           any additional information that should be passed in to validate the pipe. For example,
           {@link VllmPipe#validate} expects the context to contain the "deploySpec" key with a
           {@link MlAtomicPipe.Engine.DeploySpec} value in order to do validation during deployment to an
           {@link MlAtomicPipe.Engine}.
    """
        ...
    def remakeTemplate(self) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Make an instance of a new Template Type defined by {@link #generateTypeBidings} with all fields that exist
    on the original template instance copied to the new instance. This method is invoked during {@link #afterMake}
    and {@link MlPipe#withHyperparams}.
    """
        ...
    def generateTypeBindings(self) -> MlPipe.Bindings:
    """
    Generate the necessary input and output {@link ValueType} bindings for this template using the fields on this type.
    DEVELOPER NOTE: This enables the generation of pipelines with dynamic input and output types based on the
    field values. If this template binds the {@link MlPipe} input and output variables on the C3 Type Declaration
    (.c3typ file), i.e. the input and output types are static, then this method should not be implemented.
    
    @returns An instance of {@link MlPipe.Bindings} specifying the {@link ValueType}s for all unbound variable
    declarations (e.g. if `DX` and `DO` are declared variables on this Type, then this method must return an
    instance of {@link MlPipe.Bindings} with {@link MlPipe.Bindings#dx} and {@link MlPipe.Bindings#do} specified)
    """
        ...
    def cachedFingerprint(self) -> int:
        ...
    def loadInitialState(self) -> None:
    """
    Loads native model into memory. The native model can be accessed using {@link C3#getVar}, with the pipe's id as
    the key.
    """
        ...
    def clearState(self) -> None:
    """
    Clears the state that was loaded in {@link loadInitialState}.
    """
        ...
    def withoutIdentity(self) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Helper to remove identity if obj is {@link Persistable}.
    """
        ...
    def deploymentHardwareConstraint(self) -> Union[HardwareConstraint]:
    """
    Returns {@link HardwareConstraint} that {@link Hardware hardware} must satisfy to {@link loadInitialState load}
    this object.
    
    Property will return empty `null` if constrains are unknown.
    
    This property expected to be reimplemented by concrete types.
    """
        ...
    def train(self, x: , y: =None, spec: MlOperationSpec=None) -> MlOperationRun[Any]:
    """
    Launch a training. This API by default is non-blocking asynchronous.
    
    @param x
              Data to use as "x" or "input" to training.
    @param y
              Data to use as "y" or "label" to supervised training. If not provided, then training is unsupervised.
    @param spec
              Customizations for training execution.
    @return a {@link MlOperationRun} object that represents the launched training. The caller should use the APIs on
              the operation run object to query status and to get the final result.
    """
        ...
    def trainSync(self, x: , y: =None, spec: MlOperationSpec=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    This method will always invoke {@link #generatePipe} before training. If {@link #underlyingPipe} is set, then
    this operation will operate directly on it. Otherwise, it will invoke this Type's implementation of
    {@link #doTrain}.
    
    {@see MlAtomicPipe#train}
    @return a trained {@link MlTemplate.AtomicPipe}. If {@link #underlyingPipe} is set, then it will be a trained pipe.
    """
        ...
    def isTrainable(self) -> bool:
    """
    Validates this instance of {@link MlTrainable} to determine whether it is valid to call {@link #train}.
    The default implementation is at {@link MlPipe}
    @return whether this is trainable.
    """
        ...
    def isTraining(self) -> bool:
    """
    @return whether this {@link MlTrainable} is currently training.
    """
        ...
    def isTrained(self) -> bool:
    """
    NOTE: as best practice, trained objects should be immutable!
    @return whether this {@link MlTrainable} has been trained.
    """
        ...
    def trainErrors(self) -> Union[str]:
    """
    @return null if no errors were encountered during training. Otherwise, return the errors
              as a formatted string.
    """
        ...
    def process(self, x: , spec: MlOperationSpec=None) -> Union[MlOperationRun[]]:
    """
    Process the input data. This API is asynchronous, non-blocking.
    
    @param x
              Data to use as input for processing.
    @param spec
              Customizations for execution.
    @return a {@link MlOperationRun} object that represents the launched processing. The caller should use the APIs on
              the operation run object to query status and to get the final result.
    """
        ...
    def processSync(self, x: , spec: MlOperationSpec=None) -> Union[]:
    """
    If the pipe has not been trained, this method will invoke {@link #generatePipe}. If {@link #underlyingPipe} is set,
    then this operation will operate directly on it. Otherwise, it will invoke this Type's implementation of
    {@link #doProcess}.
    
    {@see MlAtomicPipe#process}
    """
        ...
    def isProcessable(self) -> bool:
    """
    Validates this instance of {@link MlProcessable} to determine whether it is valid to call {@link #process}.
    The default implementation assumes all instances of {@link MlProcessable} are processable.
    
    @return whether this is processable.
    """
        ...
    def score(self, x: , y: =None, context: =None, spec: MlOperationSpec=None) -> Union[MlOperationRun[Map[str, float]]]:
    """
    Score the input data. This API is asynchronous non-blocking.
    
    @param x
              Data to use as input to the model for scoring.
    @param y
              Data to use as "y" or "label" to use as ground truth for scoring.
    @param context
              Additional contextual data to use for scoring.
    @param spec
              Customizations for execution.
    @return a {@link MlOperationRun} object that represents the launched scoring. The caller should use the APIs on
              the operation run object to query status and to get the final result.
    """
        ...
    def scoreSync(self, x: , y: =None, context: =None, spec: MlOperationSpec=None) -> Union[Map[str, float]]:
    """
    Blocking, synchronous version of {@link #score}.
    """
        ...
    def scoreAll(self, x: , y: =None, context: =None, spec: MlOperationSpec=None) -> Union[MlOperationRun[Map[str, float]]]:
    """
    Score the input data for all pipes including intermediate pipes. This API is asynchronous, non-blocking.
    
    @param x
              Data to use as input to the model for scoring.
    @param y
              Data to use as "y" or "label" to use as ground truth for scoring.
    @param context
              Additional contextual data to use for scoring.
    @param spec
              Customizations for execution.
    @return a {@link MlOperationRun} object that represents the launched scoring. The caller should use the APIs on
              the operation run object to query status and to get the final result.
    """
        ...
    def scoreAllSync(self, x: , y: =None, context: =None, spec: MlOperationSpec=None) -> Union[Map[str, float]]:
    """
    Blocking, synchronous version of {@link #scoreAll}.
    """
        ...
    def interpret(self, x: , spec: MlOperationSpec=None) -> Union[MlOperationRun[]]:
    """
    Use {@link MlInterpreter}s to interpret the {@link MlInterpretable} object using the input data and context. See
    {@link MlInterpreter} for information on interpreters. This API is asynchronous non-blocking.
    
    @param x
              Data to use as the source input. This is not the same as the downstream inputs that may or may not feed
              in to {@link MlInterpreter}(s)
    @param context
              Additional information required to perform interpretation
    @param spec
              Customizations for execution
    @return a {@link MlOperationRun} object that represents the launched interpretation. The caller should use the APIs on
              the operation run object to query status and to get the final result.
    """
        ...
    def interpretSync(self, x: , context: Map[str, Any]=None, spec: MlOperationSpec=None) -> None:
    """
    Blocking, synchronous version of {@link #interpret}.
    """
        ...
    def _call_(self, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Any]:
    """
    Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
    `args` and `kwargs` are of `ValueType` `any`.
    """
        ...
    def standardizeInput(self, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Map[str, Any]]:
    """
    Extracts the inputs and standardizes them into a dict.
    """
        ...
    def isCached(self) -> bool:
    """
    @return whether the cache already contains this instance
    """
        ...
    @classmethod
    def allCached(cls) -> Union[Stream[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    @return stream of all available Cached instances.
    """
        ...
    @classmethod
    def find(cls, filter: str=None) -> Union[Stream[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
            if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
            Otherwise no population will be performed.
    """
        ...
    @classmethod
    def findBy(cls, field: str, value: Any) -> Union[Stream[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
            if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
            Otherwise no population will be performed.
    """
        ...
    def getCached(self) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    @return cached instance.
    """
        ...
    @classmethod
    def forCacheKey(cls, key: str) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    @return cached instance by the key.
    """
        ...
    def cacheKey(self) -> str:
    """
    @return cache key for this instance.
    """
        ...
    @classmethod
    def produce(cls, key: str) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Should produce an entry for the cache key. This method should not be called directly.
    """
        ...
    @classmethod
    def produceAll(cls) -> Union[Map[str, Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    @classmethod
    def doUpsert(cls, state: Any) -> Union[Any]:
    """
    Override to perform customized upsert logic.
    
    @param state
           Current upsert state.
    
    @return The appropriate result (e.g. ObjList, Persistable<?>, etc) depending on the upsert operation.
    """
        ...
    @classmethod
    def doUnremove(cls, obj: PersistableWritable) -> Union[PersistableWritable]:
    """
    Override to perfrom the 'unremove' operation.
    
    @param obj
           Obj to unremove.
    
    @return The unremoved Obj, if any and null otherwise.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def fetch(cls, filter: Filter) -> FetchResult[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[Reconstruction.Post.PercentileDurationAlertingPipe]]]:
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
    def get(self, include: str=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
    
    @param include
              Optional include spec to retrieve.
    @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
            those fields will be returned. Otherwise the entire obj will be returned.
    """
        ...
    def getSpecific(self, include: str=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def getMissing(self, spec: GetMissingSpec) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def getDirect(self, include: str=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def applyReverseEdit(self, versionEdit: VersionEdit) -> Reconstruction.Post.PercentileDurationAlertingPipe:
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
    def fromString(cls, s: str) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def create(self, spec: UpsertSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def createBatch(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def createBatchObjStream(cls, objs: Stream[Reconstruction.Post.PercentileDurationAlertingPipe], spec: CreateBatchObjStreamSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def update(self, srcObj: Reconstruction.Post.PercentileDurationAlertingPipe=None, spec: UpsertSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def upsert(self, srcObj: Reconstruction.Post.PercentileDurationAlertingPipe=None, spec: UpsertSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def merge(self, spec: MergeSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def merge(self, mergeInclude: str, spec: MergeSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def touch(self, spec: TouchSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
    
    @param spec
              Various parameters that control the operation of function.
    
    @return The created or updated obj.
    """
        ...
    @classmethod
    def updateBatch(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], srcObjs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]=None, spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def updateObjs(cls, objs: Callable[[], Union[Array[Reconstruction.Post.PercentileDurationAlertingPipe]]], spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def upsertBatch(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], srcObjs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]=None, spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def upsertObjs(cls, objs: Callable[[], Union[Array[Reconstruction.Post.PercentileDurationAlertingPipe]]], spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def touchBatch(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], spec: TouchSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def mergeBatch(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], spec: MergeSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def mergeBatch(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def mergeObjs(cls, objs: Callable[[], Union[Array[Reconstruction.Post.PercentileDurationAlertingPipe]]], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def mergeAll(cls, mergeObj: Reconstruction.Post.PercentileDurationAlertingPipe, spec: MergeAllSpec=None) -> Union[int]:
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
    def mergeAll(cls, mergeObj: Reconstruction.Post.PercentileDurationAlertingPipe, mergeInclude: str, spec: MergeAllSpec=None) -> Union[int]:
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
    def removeBatch(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def replace(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
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
    def unremove(self) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def beforeCreate(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]) -> ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Upsert persistable references in this {@link MlPipe}, and replace the complete objects with respective entity references.
    DEVELOPER NOTE: MlPipe developers need to implement this method to successfully register and load `MlPipe`
    objects from `ModelRegistry`, if there are additional fields in `MlPipe` that hold entity references in addition to
    platform supported defaults.
    @return an instance of {@link MlPipe} with complete reference objects replaced with respective entity references.
    """
        ...
    @classmethod
    def beforeUpdate(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]) -> ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def beforeRemove(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]) -> ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def afterCreate(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]) -> Union[Array[ObjError]]:
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
    def afterUpdate(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]) -> Union[Array[ObjError]]:
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
    def afterRemove(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]) -> Union[Array[ObjError]]:
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
    def startImportData(cls, spec: StartImportDataSpec=None) -> PushStream[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    @return a push stream to import instances of this type.
    """
        ...
    @classmethod
    def startImportDataWithStats(cls, spec: StartImportDataSpec=None) -> PushStreamWithStats[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
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
    def typeOf(self) -> Union[EntityType]:
    """
    Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
    type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
    that type's base type chain.
    
    @return The type hierarchy for the requested obj.
    """
        ...
    @classmethod
    def typeOfBatch(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe]) -> Union[Array[EntityType]]:
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
    def dbEcho(cls, template: Reconstruction.Post.PercentileDurationAlertingPipe=None, count: int=None, sendBack: bool=None) -> Union[int]:
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
    def callbackLogic(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], callback: Callable[[Union[Reconstruction.Post.PercentileDurationAlertingPipe]], Union[Reconstruction.Post.PercentileDurationAlertingPipe]]=None) -> ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Implements a simple logic for Persistable call-backs like before create by looping each input obj and
    calling a transform for it.
    
    
    callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
    """
        ...
    @classmethod
    def afterCallbackLogic(cls, objs: Array[Reconstruction.Post.PercentileDurationAlertingPipe], callback: Callable[[Union[Reconstruction.Post.PercentileDurationAlertingPipe]], Union[Reconstruction.Post.PercentileDurationAlertingPipe]]=None) -> Union[Array[ObjError]]:
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
    def publish(self, subPath: str=None, contentType: str=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Publishes an instance of SeedData to a C3 application package under `/seed/`
    """
        ...
    def removeSeedData(self) -> bool:
    """
    Admin function to remove a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries removed via this function
    are fully removed rather than hidden as they would be if removed by the user.
    
    @return true if the obj was removed and false if it was not for a non-error condition (e.g. obj didn't exist).
    """
        ...
    @classmethod
    def removeSeedDataBatch(cls, objs: Array[SeedData]=None, spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Admin function to remove seed data entries as the provisioner/authorizer, rather than as the user.  Seed data
    entries removed via this function are fully removed rather than hidden as they would be if removed by the user.
    
    @param objs
              Obj instances to remove.
    @param spec
              Various parameters that control the operation of function.
    @return list of obj instances that were removed and any errors that were encountered, same as
            {@link Persistable#removeBatch} return value.
    """
        ...
    def createSeedData(self, spec: UpsertSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Admin function to add a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries
    added this way are treated as though they were provisioned, rather than added by a user.
    
    @param spec
              Various parameters that control the operation of function.
    @return created obj instance, same as {@link Persistable#create} return value.
    """
        ...
    @classmethod
    def createSeedDataBatch(cls, objs: Array[SeedData]=None, spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Admin function to add seed data entries as the provisioner/authorizer, rather than as the user.  Seed data entries
    added this way are treated as though they were provisioned, rather than added by a user.
    
    @param objs
              Obj instances to add.
    @param spec
              Various parameters that control the operation of function.
    @return list of obj instances that were created and any errors that were encountered, same as
            {@link Persistable#createBatch}.
    """
        ...
    def updateSeedData(self, srcObj: SeedData=None, spec: UpsertSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Admin function to update a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data
    entries updated this way are treated as though they were provisioned, rather than updated by a user.
    
    @param spec
              Various parameters that control the operation of function.
    @return updated obj instance, same as {@link Persistable#update} return value.
    """
        ...
    @classmethod
    def updateSeedDataBatch(cls, objs: Array[SeedData]=None, srcObjs: Array[SeedData]=None, spec: UpsertSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Admin function to update seed data entries as the provisioner/authorizer, rather than as the user.  Seed data
    entries updated this way are treated as though they were provisioned, rather than updated by a user.
    
    @param objs
              Obj instances to update.
    @param spec
              Various parameters that control the operation of function.
    @return list of obj instances that were updated and any errors that were encountered, same as
            {@link Persistable#updateBatch}.
    """
        ...
    def clearUserUpdates(self, spec: MergeSpec=None) -> Union[Reconstruction.Post.PercentileDurationAlertingPipe]:
    """
    Admin function to clear the {@link userUpdatedFields} field for a seed data obj instance.
    
    @param spec
              Various parameters that control the operation of function.
    @return updated obj instance, same as {@link Persistable#update} return value.
    """
        ...
    @classmethod
    def clearUserUpdatesBatch(cls, objs: Array[SeedData]=None, spec: MergeSpec=None) -> Union[ObjList[Reconstruction.Post.PercentileDurationAlertingPipe]]:
    """
    Admin function to clear the {@link userUpdatedFields} field for seed data obj instances.
    
    @param objs
              Obj instances to update.
    @param spec
              Various parameters that control the operation of function.
    @return list of obj instances that were updated and any errors that were encountered, same as
            {@link Persistable#updateBatch}.
    """
        ...
    def seedPath(self) -> Union[str]:
    """
    Returns the full metadata path to the seed file associated with this instance by `id`.
    Throws an error if this instance is not seeded (no match with instance `id`).
    """
        ...
    def dependencies(self) -> Union[SeedDataDeps[Reconstruction.Post.PercentileDurationAlertingPipe]]:
        ...
    def validateSeedData(self) -> ValidateObjResult:
    """
    Optional member function to enable custom validation logic.
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
    def scoringMetrics(self) -> Union[Map[str, MlScoringMetric[Any, Any, Any]]]:
    """
    The scoring metrics associated with this pipe.
    """
        ...
    @classmethod
    def prefix(cls) -> Union[str]:
    """
    Used internally to generate a name per pipe type. This function should be overridden for each child type.
    """
        ...
    @classmethod
    def convert(cls, model: Any, spec: MlConvertSpec=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Convert the native object to an {@link MlPipe} object.
    Example usage:
    ```
    from sklearn.svm import OneClassSVM
    svm = OneClassSVM(gamma='auto')
    model = c3.MlPipe.convert(svm)
    ```
    
    If the `model` argument is an instance of a custom model whose source code has been defined in a Jupyter notebook,
    {@link MlPipe} requires that all the necessary source code be defined in a single notebook cell, rather than
    spanning multiple cells. For example, do not split the `import`s and class definition between two different cells.
    Instead, put the necessary `import` statements before the class definition in the same cell. Additionally, it is
    highly recommended that subsequent code that uses the custom model, as in an instantiation of an object, should
    be in a cell that is separate than the custom model's source code.
    Incorrect usage:
    ```
    [1]: from tensorflow.keras import Model
         from tensorflow.keras.layers import Dense
    [2]: class MyTensorFlowModel(Model):
           def __init__(self, hidden_dim, num_classes):
             self.hidden_layer = Dense(hidden_dim)
             self.output_layer = Dense(num_classes)
           ...
    
         model = MyTensorFlowModel(128, 10)
         model.compile(...)
    ```
    Correct usage:
    ```
    [1]: from tensorflow.keras import Model
         from tensorflow.keras.layers import Dense
    
         class MyTensorFlowModel(Model)
           def __init__(self, hidden_dim, num_classes):
             self.hidden_layer = Dense(hidden_dim)
             self.output_layer = Dense(num_classes)
           ...
    [2]: model = MyTensorFlowModel(128, 10)
         model.compile(...)
    ```
    @param model
              Native object to convert.
    @param spec
              Customizations for convert.
    @return an {@link MlPipe} C3 object that behaves as the native machine learning object.
    """
        ...
    def freeze(self) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Freezes an {@link MlPipe}
    @return modified copy of this {@link MlPipe} that cannot be trained
    """
        ...
    def unfreeze(self) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Unfreezes an {@link MlPipe}
    @return modified copy of this {@link MlPipe} that can be trained
    """
        ...
    def newAuthoringVertex(self, x: =None, y: =None, context: =None, suffix: str='""', spec: MlConvertSpec=None) -> MlPipeline.PipeVertex.Authoring:
    """
    Helper method to create a new authoring vertex based on the pipe and inputs.
    
    @param x
              single value, list, or map of input(s) for x.
    @param y
              single value, list, or map of input(s) for y.
    @param context
              single value, list, or map of input(s) for context.
    @param suffix
              optional suffix for the vertex name
    @return a new authoring vertex
    """
        ...
    def train_var(self, x: Any=None, y: Any=None) -> MlPipeline.PipeVar:
    """
    Used to describe training, when authoring an {@link MlPipeline} flow.
    @param x
              single value, list, or map of input(s) for x.
    @param y
              single value, list, or map of input(s) for y.
    @return a placeholder representing a trained pipeline during authoring.
    """
        ...
    def process_var(self, x: Any=None, spec: MlConvertSpec=None) -> Any:
    """
    Used to describe processing, when authoring an {@link MlPipeline} flow.
    @param x
              single value, list, or map of input(s) for x.
    @param spec
               customizations for changing behavior of the pipe.
    @return a single {@link MlVar} if single output or a map of {@link MlVar} if multi-output.
    """
        ...
    def score_var(self, x: Any=None, y: Any=None, context: Any=None, spec: MlConvertSpec=None) -> Any:
    """
    Used to describe scoring, when authoring an {@link MlPipeline} flow.
    @param x
              single value, list, or map of input(s) for x.
    @param y
              single value, list, or map of input(s) for y.
    @param context
              single value, list, or map of input(s) for context.
    @param spec
               customizations for changing behavior of the pipe.
    @return a single {@link MlVar} if single output or a named tuple of {@link MlVar} if multi-output.
    """
        ...
    def interpret_var(self, x: Any=None, spec: MlConvertSpec=None) -> Any:
    """
    Used to describe interpreting, when authoring an {@link MlPipeline} flow.
    @param x
              single value, list, or map of input(s) for x.
    @param spec
               customizations for changing behavior of the pipe.
    @return a single {@link MlVar} if single output or a map of {@link MlVar} if multi-output.
    """
        ...
    def hyperparams(self, hps: Union[str,Array[str]]=None) -> Map[str, Any]:
    """
    Used for accessing values of annotated and overridden hyperparameters. Can be used on {@link MlAtomicPipe} or on
    {@link MlPipeline}.
    @param hps
              single value or list of paths of hyperparameters on the pipe. If no value is provided, returns all
              annotated and overridden hyperparameters on the pipe.
    @return a map of hyperparameter names to their respective values.
    """
        ...
    def validateHyperparams(self, hps: Map[str, Any]=None) -> None:
    """
    Validate the given hyperparameter values for this pipe. If there is a {@link Hp.ParamSpace} for the
    hyperparameter, this function will check if the value passed is a point within the parameter space. Also, if
    there are constraints for the hyperparameter, this function will check if the value satisfies all the constraints.
    If the validation fails, a ValueError will be raised.
    @param hps
              A map of hyperparameter names to their values.
    """
        ...
    def withHyperparams(self, newHps: Map[str, Any]=None) -> MlPipe[Any, Any, Any, Any, Any]:
    """
    Used to override hyperparameters of a pipe. For example, can be used on {@link MlAtomicPipe} or on
    {@link MlPipeline}.
    @param newHps
              Map key represents the path to hyperparameter name. Map value represents the value to set for
              the hyperparameter. For an {@link MlAtomicPipe}, this means that the key is just the hyperparameter name.
    Example usage:
    For a sample {@link MlAtomicPipe} created using Linear Regression in Sklearn:
    lr_pipe = c3.MlPipe.convert(native_lr)
    updated_lr_pipe = lr_pipe.withHyperparams({'fit_intercept': False})
    
    For {@link MlPipeline}:
    Given a pipeline with sample {@link MlAtomicPipe} authored as using Linear Regression,
    Standard Scaler and MinMax Scaler models from Sklearn:
    x, y = mla.var(), mla.var()
    lr_pipe = c3.MlPipe.convert(native_lr, name='lr')
    ss_pipe = c3.MlPipe.convert(native_ss, name='ss')
    mm_pipe = c3.MlPipe.convert(native_mm, name='mm')
    x_mm = mm_pipe(x)
    y_ss = ss_pipe(y)
    y_out = lr_pipe(x_mm, y_ss)
    pipeline = mla.pipeline(x={'x':x}, y={'y':y}, out={'y_pred':y_out})
    To update various hyperparameters of a pipeline, simply provide a map in the following format:
    updated_pipeline = pipeline.withHyperparams({'lr': {'fit_intercept': False},
                                                    'mm': {'clip':True},
                                                    'ss': {'with_mean': False, 'with_std':False}})
    If a field of a pipe contains nested hyperparameters then these are referenced using the path of
    hyperparameters using  "." as a separator. A field contains nested hyperparameters if it has the
    annotation `@ML(containsHyperparameters=true)`. In particular, `some_field.some_hp` refers to `some_hp`
    hyperparameter on the `some_field` field of the pipe. As an example consider a {@link KerasPipe) with `trainArgs`
    as a field.
    In the example below, we show how to set hyperparameters `epochs` and `initial_epoch` which are hyperparameters on
    the field `trainArgs`:
    ```py
    pipe = c3.KerasPipe.convert(model, spec)  # given some model and spec
    hps = {
       'trainArgs.epochs': 50,
       'trainArgs.initial_epoch': 1
    }
    pipe = pipe.withHyperparams(hps)
    ```
    See {@link Ann.ML} for more details.
    @return a {@link MlPipe} with native models having the updated hyperparameters.
    """
        ...
    def hyperparamSpaces(self, hps: Union[str,Array[str]]=None) -> Map[str, Hp.ParamSpace]:
    """
    Used for accessing the parameter spaces of hyperparameters on an {@link MlAtomicPipe}. Can be used on
    {@link MlAtomicPipe} or on {@link MlPipeline}.
    @param hps
              single value or list of paths of hyperparameters on the pipe.
    @return a map of hyperparameter names to their respective parameter spaces.
    """
        ...
    def searchResult(self) -> Union[Any]:
    """
    Used for accessing {@link MlPipe#experiment}.
    """
        ...
    def existsInDbHeuristic(self) -> bool:
    """
    Returns true if the instance exists in database.
    """
        ...
    def cleanUp(self) -> None:
    """
    Clean up (i.e. remove from db or delete from filesystem) any artifacts or dependencies related to this {@link MlPipe}.
    Clean up this {@link MlPipe} after artifacts or dependencies are cleaned up.
    For example,
    If {@link MlPipeline}, remove all nested {@link MlPipe}s and this {@link MlPipeline} from DB
    If {@link MlAtomicPipe}, delete model files from filesystem and remove this {@link MlAtomicPipe} from DB
    """
        ...
    def replaceEntityReferences(self) -> MlPipe[Any, Any, Any, Any, Any]:
    """
    Replace persisted entity references in this {@link MlPipe} with complete objects and remove identity of those references.
    DEVELOPER NOTE: MlPipe developers need to implement this method to successfully register and load `MlPipe`
    objects from `ModelRegistry`, if there are additional fields in `MlPipe` that hold entity references,
    in addition to platform supported defaults. It is required to invoke parent type's `replaceEntityReferences`
    using `super` in the overridden method at the start of method definition.
    @return an instance of {@link MlPipe} with persisted references replaced with complete objects.
    """
        ...
    @classmethod
    def initializeLoggers(cls, opNames: Array[str], spec: MlOperationSpec=None) -> Union[MlOperationSpec]:
    """
    Initializes the loggers for {@link MlPipe} operation.
    @return an instance of {@link MlOperationSpec} loggers initialized.
    """
        ...
    def byReference(self) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Returns the pipe with just the {@link MlPipe#id} field populated if the pipe has an id. Otherwise, the pipe will
    be returned as-is.
    """
        ...
    def beforeAndDoTrain(self, x: Any, y: Any=None, model: Any=None, customCodePath: str=None, spec: MlOperationSpec=None) -> Any:
    """
    Blocking call to {@link #beforeTrain} followed by {@link doTrain} in a single action.
    """
        ...
    @classmethod
    def expandedTrainWorkflow(cls) -> Workflow:
    """
    Creates a {@link Workflow} for {@link #train} where each function needed for training is represented by a separate
    {@link Workflow.Vertex}.
    """
        ...
    def updateModelFiles(self, modelFiles: Map[str, Url], spec: MlOperationSpec=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Updates the model files.
    """
        ...
    def beforeTrain(self, x: Any, y: Any=None, model: Any=None, spec: MlOperationSpec=None) -> Any:
    """
    Hook to do preprocessing on the model and inputs.
    
    DEVELOPER NOTE: Could be overwritten to handle any other processing on the model or inputs.
    @param x
             The `x` input in the native format specified by {@link #nativeInputFormats}. The conversion from `DX` to
             the native format is handled automatically using {@link #convertPipeInputsToNative} before this method is
             invoked.
    @param y
             The `y` input in the native format specified by {@link #nativeInputFormats}. The conversion from `DY` to
             the native format is handled automatically using {@link #convertPipeInputsToNative} before this method is
             invoked.
    @return A native python dictionary that holds the model, x, and y.
    """
        ...
    def doTrain(self, beforeTrainResults: Any, spec: MlOperationSpec=None) -> Any:
    """
    The synchronous, blocking implementation for {@link doTrain}.
    
    DEVELOPER NOTE: this is where the "business logic" for your training should go.
    
    @param beforeTrainResults
              The output of {@link #beforeTrain} - a native python dictionary that holds the native `model`, `x`,
              and `y`.
    @param spec
              An {@link MlOperationSpec} object.
    @return A native python dictionary that holds the native trained `model` and fields on the pipe with updated
    values.
    """
        ...
    def afterTrain(self, doTrainOutputs: Any, spec: MlOperationSpec=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Persist the trained model.
    @param doTrainOutputs
              The output of {@link #doTrain} - a native python dictionary that holds the native `model` and updated
              values for fields on the pipe.
    @param spec
              An {@link MlOperationSpec} object.
    @return mixin MlAtomicPipe with a trained model and updated fields.
    """
        ...
    def beforeDoAfterProcess(self, x: Any, model: Any=None, customCodePath: str=None, spec: MlOperationSpec=None) -> Any:
    """
    Blocking call to {@link #beforeProcess}, {@link #doProcess}, and {@link #afterProcess} in a single action.
    """
        ...
    @classmethod
    def expandedProcessWorkflow(cls) -> Workflow:
    """
    Creates a {@link Workflow} for {@link #process} where each function needed for processing is represented by a
    separate {@link Workflow.Vertex}.
    """
        ...
    def beforeProcess(self, x: Any, model: Any=None, spec: MlOperationSpec=None) -> Any:
    """
    Hook to do preprocessing on the native model and inputs
    @param x
             The `x` input in the native format specified by {@link #nativeInputFormats}. The conversion from `DX` to
             the native format is handled automatically using {@link #convertPipeInputsToNative} before this method is
             invoked.
    @return A native python dictionary that holds the model and x.
    """
        ...
    def doProcess(self, beforeProcessOutputs: Any, spec: MlOperationSpec=None) -> Union[Any]:
    """
    The synchronous, blocking implementation for {@link doProcess}.
    
    DEVELOPER NOTE: this is where the "business logic" for your processing should go. In rare cases, you may choose to
    override {@link process}. If so, you will still need to have a stub implementation for {@link doProcess}.
    
    @param beforeProcessOutputs
              The output of {@link #beforeProcess} - a native python dictionary that holds the native `model` and `x`.
    @param spec
              An {@link MlOperationSpec} object.
    @return A native python dictionary with the key `out` that holds the native output.
    """
        ...
    def afterProcess(self, doProcessOutputs: Any, spec: MlOperationSpec=None) -> Union[Any]:
    """
    Returns the native model output.
    @param doProcessOutputs
              The output of {@link #doProcess} - native python dictionary with the key `out` that holds the native
              output.
    @param spec
              An {@link MlOperationSpec} object.
    @return the native output.
    """
        ...
    def saveNativeModel(self, model: Any=None) -> Union[Map[str, Url]]:
    """
    Returns a map of model {@link Url}s.
    key - model file name, value - {@link Url} corresponding to model file name.
    @param model a python native model. e.g. sklearn estimator, keras native model.
    @return a map of model file {@link Url}s.
    """
        ...
    def nativeModel(self) -> Any:
    """
    @return The native model that is saved on the pipe.
    It is recommended not to use this method to read a native model that is saved on the pipe.
    Use {@link MlAtomicPipe#loadCodeAndModel['nativeModel'] to get the native model.
    """
        ...
    @classmethod
    def getPythonSource(cls, native_class: Any) -> Any:
    """
    Returns a tuple containing the source code of the native Python class, as well as the relative file path to the
    source code. If the native Python class was written in a Jupyter Notebook, then the relative file path will be
    returned as "jupyter".
    @param native_class
              A native Python class
    @return
              A tuple containing ( source_code, relative_file_path )
    """
        ...
    @classmethod
    def bundleSourceCode(cls, nativeObject: Any=None, additionalFiles: Array[str]=None) -> Union[Map[str, any]]:
    """
    Given a native Python model, custom written or not, and a set of additional source code files, bundle and return
    all the necessary source code into a single dictionary, where the key is the relative file path to the source
    code, and the value is the compressed source code string. If the model belongs to a runtime library, as in it is
    not custom written, then a null dictionary will be returned because no source code is necessary to operate on
    a runtime library object.
    @param nativeObject
              A native Python object.
    @param additionalFiles
              A list of file paths to additional source code that may be necessary to operate on the native model.
              See {@link MlConvertSpec#sourceFilePaths} for more details.
    @return
              A dictionary containing { relative_file_path: compressed_source_code }
    """
        ...
    def loadSourceCode(self) -> str:
        ...
    def loadCodeAndModel(self) -> Any:
        ...
    def convertPipeInputsToNative(self, x: , y: =None, spec: MlOperationSpec=None) -> Any:
    """
    Convert `x` and `y` from `DX` and `DY` type to python native format. By default, this method will invoke
    {@link #convertXToNative} and {@link #convertYToNative} respectively. If either `x` or `y` require custom,
    independent conversion logic, do not override this method - instead, override either {@link #convertXToNative} or
    {@link #convertYToNative}.
    
    NOTE: the canonical format for evaluated data from a {@link Feature.Set} will have a column for `subject id` and
          (optionally) a column for `time`. It varies which libraries require these columns. If your {@link MlAtomicPipe}
          does not require these columns, then you can remove them by using {@link #setFeatureIndices}. This can be done
          either by overriding the {@link #convertXToNative} and {@link #convertYToNative} APIs or within your {@link #doTrain}
          and {@link #doProcess} functions.
    
    NOTE: Overriding this function may result in a performance loss since redundant data conversion may occur.
          Therefore, only override this function iff both `x` and `y` inputs are simultaneously required to do the
          conversion to native format. If overridden, it will likely be necessary to also override
          {@link #convertNativeToNative} to match the conversion logic.
    """
        ...
    def convertXToNative(self, x: , spec: MlOperationSpec=None) -> Any:
    """
    Convert `x` from `DX` type to python native format. Default implementation uses {@link #convertInputToNativeFormat}.
    
    @param x
              data to convert.
    @param spec
              any customizations for the conversion.
    @return converted data.
    """
        ...
    def convertYToNative(self, y: , spec: MlOperationSpec=None) -> Any:
    """
    Convert `y` from `DY` type to python native format. Default implementation uses {@link #convertInputToNativeFormat}.
    
    @param y
              data to convert.
    @param spec
              any customizations for the conversion.
    @return converted data.
    """
        ...
    def convertInputToNativeFormat(self, input: Any=None, spec: MlOperationSpec=None) -> Union[Any]:
    """
    Convert a {@link Data} input or a collection of {@link Data} inputs to its native format. This method will always
    choose to convert {@link Data} instances to the first format in {@link #nativeInputFormats}
    (i.e. `nativeInputFormats[0]`). Collections will be converted to their Python equivalent (e.g. {@link Map} to
    `dict`, named {@link Tuple} to `collections.namedtuple`). Non {@link Data} inputs will be ignored.
    
    @param input
              data to convert.
    @param spec
              any customizations for the conversion.
    @return converted data.
    """
        ...
    def convertNativeToPipeOutputs(self, output: Any, datasetId: str=None) -> :
    """
    Convert output from python native format to `DO`
    Developer Note: Be careful when overriding this method! The implementation should only convert the native output
    to a C3 type. Any modifications to the native type should happen within {@link #doProcess} itself! This allows
    the platform to implement advanced optimizations like {@link Workflow.MlPipeline.Rdce}, which basically allows
    passing of intermediate pipeline data in its native state. For this to work properly, the native output needs to
    be equivalent in format to the c3 output of this function.
    For example, suppose the native output of the native model is a list of `np.array` and you desire the native output to be
    a dictionary instead. The conversion of list to dict should happen within {@link #doProcess}.
    """
        ...
    @classmethod
    def convertNativeToData(cls, out: Any, datasetId: str=None) -> Union[Any,Data,Map[str, Data]]:
    """
    Static method to convert native Python objects into instances of C3 Data. If the output is a dictionary of native
    objects, this method will return a map of C3 Data instances.
    """
        ...
    def saveModel(self, modelDir: str, model: Any=None) -> None:
    """
    Serialize and save a native model to the client's file system. Used by e.g. {@link #afterTrain} to save
    a trained model to then be uploaded and associated with the trained pipe.
    @param modelDir
              path to local directory to save the model file(s).
    @param model
              the native model to save.
    """
        ...
    def loadModel(self, modelDir: str) -> Any:
    """
    Load and deserialized a native model from the client's file system. Used by e.g. {@link #beforeTrain} after
    model is downloaded.
    @param modelDir
              path to local directory to load the model file(s) from.
    @return the deserialized native model.
    """
        ...
    def withNewSpec(self, spec: MlConvertSpec=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Creates a copy of the pipe with behavior specified by the spec. The underlying model files are unchanged. If there
    are no differences between the pipe and the behavior defined in the spec, the pipe is returned unchanged.
    Also calls {@link #afterConvert}.
    @param spec
              an {@link MlConvertSpec} for specifying conversion specifications.
    @return a new instance of {@link MlPipe}.
    """
        ...
    def afterConvert(self, model: Any, spec: MlConvertSpec=None) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Returns an instance of the pipe after the convert is done.
    
    DEVELOPER NOTE: Any post conversion logic should go here.
    @param model
              the native model that is passed to {@link #convert}.
    @param spec
              an {@link MlConvertSpec} for specifying conversion specifications.
    @return a new instance of {@link MlAtomicPipe}
    """
        ...
    @classmethod
    def validateInputOutputBindings(cls, spec: MlConvertSpec=None, expectedSpec: MlConvertSpec=None) -> None:
    """
    Helper function to check if the xType, yType, outType, xNames, yNames, and outNames in the {@link MlConvertSpec}
    (if specified) match the bindings for the pipe.
    Throws an error if any do not match the expected values.
    @param spec
           an {@link MlConvertSpec} to be validated
    @param expectedSpec
           an {@link MlConvertSpec} that is the ground truth to compare against the spec
    """
        ...
    def deleteFiles(self) -> None:
    """
    Delete model's persisted files
    """
        ...
    def xNames(self) -> Union[Array[str]]:
    """
    @return list of x input names expected for this pipe instance. For single-input-single-output, hardcoded to
     return `['x']`
    """
        ...
    def yNames(self) -> Union[Array[str]]:
    """
    @return list of y input names expected for this pipe instance. For single-input-single-output, hardcoded to
     return `['y']`
    """
        ...
    def outNames(self) -> Union[Array[str]]:
    """
    @return list of output names expected for this pipe instance. For single-input-single-output, hardcoded to
     return `['out']`
    """
        ...
    @classmethod
    def bindVars(cls, xTypes: Map[str, ValueType]=None, yTypes: Map[str, ValueType]=None, outTypes: Map[str, ValueType]=None) -> MlPipe.Bindings:
    """
    Creates an {@link MlPipe.Bindings} object based on the provided `xTypes`, `yTypes`, and `outTypes` maps. A dynamic
    Obj is created if the x/y/outTypes map contain more than one element. If the map contains only a single element,
    the corresponding 'dx', 'dy', or 'do' is not considered as a multi-input object. For example,
    `xTypes={'x': c3:Data}` will bind {@link MlPipe.Bindings#dx} to `Data` and represents a single input.
    
    @param xTypes
                The type(s) for each x input.
    @param yTypes
                The type(s) for each y input.
    @param outTypes
                The type(s) for each output.
    @return an {@link MlPipe.Bindings} object that contains the binding information for the pipe
    """
        ...
    @classmethod
    def uploadPyNativeClass(cls, name: str=None, classSource: Any=None) -> Url:
    """
    Returns the Url where the native Python class is stored.
    @param name
              Name of the file in which python class is stored.
    @param classSource
              A native Python class
    @return
              A Url where the native python class is stored.
    """
        ...
    @classmethod
    def downloadPyNativeClass(cls, nativeClassUrl: Url=None) -> Union[Any]:
    """
    Returns the native Python class, downloaded from a native class url where the python class
    files are stored
    @param nativeClassUrl
              A url for accessing the saved native class source code.
    @return
              A native Python class.
    """
        ...
    @classmethod
    def setFeatureIndices(cls, input: Any=None) -> Any:
    """
    Set the `subject` and `timestamp` columns as indices on the input {@link Data} for time series data.
    Sets the `subject` column as index on the input {@link Data} for non-time series data.
    This method will only set the new
    indices if __all__ of the following conditions are satisfied:
    - The input is an instance of {@link Data} or `pd.DataFrame`
    - The columns of the input must include both `subject` and `timestamp` (or) `subject` (non-time series data)
    - The input contains only a single index
    - The index either has no name or is the default name "index"
    @param input
              The input to {@link #process}
    @return
              If all conditions are satisfied, returns the input with a `subject` and `timestamp` index. Otherwise,
              return the same input.
    """
        ...
    def nativeInputFormats(self) -> Array[str]:
    """
    The native input formats the pipe expects.
    """
        ...
    @classmethod
    def getInputDatasetId(cls, x: =None) -> str:
    """
    Dataset id of the input.
    """
        ...
    def convertNativeToNative(self, x: Any, y: Any=None, spec: MlOperationSpec=None) -> Any:
    """
    Convert `x` and `y`, which are already in a native format, to a native format that is supported by this atomic
    pipe. This method will first check if the current format of `x` and `y` are supported by this pipe. If so, no
    conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
    specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertPipeInputsToNative} if
    the {@link Workflow.MlPipeline.Rdce} optimization is applied.
    """
        ...
    def convertXNativeToNative(self, x: Any, spec: MlOperationSpec=None) -> Any:
    """
    Convert `x` which is already in a native format, to a native format that is supported by this atomic
    pipe. This method will first check if the current format of `x`is supported by this pipe. If so, no
    conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
    specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertXToNative} if
    the {@link Workflow.MlPipeline.Rdce} optimization is applied.
    """
        ...
    def convertYNativeToNative(self, y: Any, spec: MlOperationSpec=None) -> Any:
    """
    Convert `y` which is already in a native format, to a native format that is supported by this atomic
    pipe. This method will first check if the current format of `y`is supported by this pipe. If so, no
    conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
    specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertYToNative} if
    the {@link Workflow.MlPipeline.Rdce} optimization is applied.
    """
        ...
    def withHyperparamSpaces(self, paramSpaces: Map[str, Hp.ParamSpace]) -> Reconstruction.Post.PercentileDurationAlertingPipe:
    """
    Add or change a set of parameter spaces for the hyperparameters of an {@link MlAtomicPipe}.
    Example usage:
    For a sample {@link MlAtomicPipe} created using Linear Regression in Sklearn:
    
    ```py
    lr_pipe = c3.MlPipe.convert(native_lr)
    updated_lr_pipe = lr_pipe.withHyperparamSpaces({"normalize": c3.Hp.ParamSpace.Categorical.fromValues([True, False])})
    ```
    
    @param paramSpaces
              Map key represents the hyperparameter names. Map value represents the parameter spaces to be
              defined for each respective hyperparameter.
    @return a {@link MlAtomicPipe} with added parameter spaces for each desired hyperparameter.
    """
        ...
    def actionRequirementForAction(self, actionName: str) -> Union[str]:
    """
    Helper method to determine action requirement for a given ml operation action.
    
    @param actionName
              the name of the action to get the requirement for, e.g. "doTrain" or "doProcess"
    @return the action requirement name for the corresponding action or null if the action is not implemented.
    """
        ...
    def actionRequirementFor(self, opName: str) -> Union[str]:
    """
    Helper method to determine action requirement for calling a particular operation.
    
    @return the action requirement name.
    """
        ...
    def warmupModel(self) -> None:
    """
    Warmup the model for the pipe.
    """
        ...
    def onEngineTerminate(self) -> None:
    """
    Actions to run when an {@link MlAtomicPipe.Engine} that deploys this pipe is terminated.
    """
        ...
    def engineSpec(self) -> MlAtomicPipe.Engine.DeploySpec:
    """
    Returns the {@link MlAtomicPipe.Engine} for the pipe. If the spec and engineType is not provided, the default is used.
    """
        ...
    def processSyncWorkflow(self) -> Workflow:
    """
    Generates a {@link Workflow} with a single {@link Workflow.Action} vertex which calls {@link #processSync}.
    """
        ...
    def runContextKey(self) -> str:
    """
    The key used to populate {@link MlOperationRun#runContext}.
    """
        ...
    @classmethod
    def hasUnderlyingPipe(cls) -> bool:
    """
    The default implementation returns `False`.
    DEVELOPER NOTE:  If types that extend {@link MlTemplate.AtomicPipe} have an {@link #underlyingPipe},
    it is required to override this method to return `True`
    """
        ...
    def generatePipe(self) -> MlAtomicPipe[Any, Any, Any]:
    """
    Generate a new pipe, using the fields on this {@link Type} to construct the native model. If the returned pipe is
    not an instance of this Type, then it will be assigned to {@link #underlyingPipe}.
    
    DEVELOPER NOTE: If this Type implements the abstract {@link MlAtomicPipe} APIs, then this method should return
    an instance of this Type. Otherwise, the developer is responsible for selecting and returning an instance of an
    {@link MlAtomicPipe} that implements the interface and supports the native model.
    """
        ...
    def generateAndAbsorbPipe(self, force: bool=None) -> MlTemplate.AtomicPipe[Any, Any, Any]:
    """
    Invoke {@link #generatePipe} and absorb the pipe into this instance of {@link #MlTemplate.AtomicPipe}
    
    @param force
              If set, invoke {@link #generatePipe} even if this template already has an underlying pipe.
    """
        ...
    def authoringCode(self, nativeModelCode: bool=None, asString: bool=None) -> Union[str]:
    """
    NOTE: This method currently throws a NotImplementedError.
    
    Generate authoring code as text or Jupyter cell. By default, this will create a new Jupyter cell containing
    the authoring code required to make an instance of this {@link MlTemplate.AtomicPipe}
    @param nativeModelCode
              If set, generate the authoring code to create the native model this template uses. Otherwise, return the
              code to make an instance of this pipe.
    @param asString
              If set, return generated code as string. Otherwise, a new Jupyter cell will be created with the generated
              code populating it.
    """
        ...


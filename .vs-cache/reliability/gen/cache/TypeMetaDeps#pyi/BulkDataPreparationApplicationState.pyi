#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.UiSdlNoData import UiSdlNoData
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Promise import Promise
from c3.platform.Meta import Meta
from c3.platform.Duration import Duration
from c3.reliabilityMl.ReliabilityMlDatasetPreparationSpec import ReliabilityMlDatasetPreparationSpec
from c3.reliabilityDataModel.ReliabilityAssetSensorRelation import ReliabilityAssetSensorRelation
from c3.reliabilityCapability.ReliabilityDataPreparationRuleMaskSpec import ReliabilityDataPreparationRuleMaskSpec
from c3.platform.Period import Period
from c3.platform.WithKey import WithKey
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Filter import Filter
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.UiSdlRegisterTriggersAction import UiSdlRegisterTriggersAction
from c3.platform.UiSdlReduxState import UiSdlReduxState
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.uiInfrastructure.UiSdlApplicationStateDataAddAction import UiSdlApplicationStateDataAddAction
from c3.platform.SetType import SetType
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.Config import Config
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.reliabilityCapability.ReliabilityDataPreparationUiCreateRuleMaskSpec import ReliabilityDataPreparationUiCreateRuleMaskSpec
from c3.platform.Feature import Feature
from c3.platform.ScanStats import ScanStats
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.reliabilityDataModel.ReliabilityAsset import ReliabilityAsset
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.uiInfrastructure.UiSdlActionsObservable import UiSdlActionsObservable
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.uiInfrastructure.UiSdlEffectTrigger import UiSdlEffectTrigger
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.reliabilityMl.ReliabilityMl.Project import ReliabilityMl.Project
from c3.platform.Stream import Stream
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.sensor.Sensor import Sensor
from c3.platform.MetadataDeps import MetadataDeps
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.UiSdlImmutableJS import UiSdlImmutableJS
from c3.platform.UiSdlInitialRenderAction import UiSdlInitialRenderAction
from c3.uiInfrastructure.UiSdlApplicationStateDataModifyAction import UiSdlApplicationStateDataModifyAction
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.platform.FetchResult import FetchResult
from c3.uiInfrastructure.UiSdlStatesObservable import UiSdlStatesObservable
from c3.platform.UiSdlImmutableJS import UiSdlImmutableJS
from c3.uiInfrastructure.UiSdlApplicationStateDataDeleteAction import UiSdlApplicationStateDataDeleteAction
from c3.platform.Pair import Pair
from c3.platform.File import File
from c3.platform.ExistsSpec import ExistsSpec
from c3.platform.TimeRange import TimeRange
from c3.uiInfrastructure.UiSdlApplicationStateInitializeAction import UiSdlApplicationStateInitializeAction

# Python definitions for the C3 type BulkDataPreparationApplicationState


class BulkDataPreparationApplicationState(BulkDataPreparationUiSettings, SettableApplicationState, DatasetPreparationSettingsConfig, ComponentStateRemover):
    """
    Application state that stores all the UI logic for Bulk Data Preparation.
    
    @remarks this represents a made instance of BulkDataPreparationApplicationState
    """
    
    nonOperationalMasks: Optional[Array[ReliabilityDataPreparationRuleMaskSpec]]=None
    """
    Array of rules indicating the time period when {@link ReliabilityAsset} was non-operational
    {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
    """

    preNonOperationalMaskPeriod: Optional[Period]=None
    """
    A {@link Period} of time before each non operational time period (as defined by {@link #nonOperationalMasks})
    to exclude {@link Sensor} data for training.
    """

    postNonOperationalTrainingMaskPeriod: Optional[Period]=None
    """
    A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
    to exclude {@link Sensor} data for training. This does not apply to inference.
    """

    postNonOperationalInferenceMaskPeriod: Optional[Period]=None
    """
    A {@link Period} of time after each non operational time period (as defined by {@link #nonOperationalMasks})
    to exclude {@link Sensor} data for training. This does not apply to inference.
    """

    preEventMaskPeriod: Optional[Period]
    """
    A {@link Period} of time before each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training.
    """

    postEventMaskPeriod: Optional[Period]
    """
    A {@link Period} of time after each [event](ReliabilityAssetEvent) to exclude {@link Sensor} data for training and inference.
    """

    dateRangeMaskTimeRanges: Optional[Array[TimeRange]]=None
    """
    {@link TimeRange}s to exclude {@Sensor} data from training data.
    """

    trainingRuleMasks: Optional[Array[ReliabilityDataPreparationRuleMaskSpec]]=None
    """
    Array of rules indicating the time periods to exclude {@link Sensor} data from training data.
    {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
    """

    inferenceRuleMasks: Optional[Array[ReliabilityDataPreparationRuleMaskSpec]]=None
    """
    Array of rules indicating the time periods to exclude {@link Sensor} data from inference data.
    {@link Triple} includes {@link Sensor}, operator (e.g. '>'), and value for the rule.
    """

    nonOperationalMasksExpression: Optional[str]=None
    """
    String of rules indicating the time period when {@link ReliabilityAsset} was non-operational
    """

    trainingRuleMasksExpression: Optional[str]=None
    """
    String of rules indicating the time periods to exclude {@link Sensor} data from training data.
    """

    inferenceRuleMasksExpression: Optional[str]=None
    """
    String of rules indicating the time periods to exclude {@link Sensor} data from inference data.
    """

    flatlineThreshold: Optional[int]=None
    """
    The flatline sensor data threshold to use for the Data Preparation Job
    """

    missingDataThreshold: Optional[int]=None
    """
    The missing sensor data threshold to use for the Data Preparation Job
    """

    windowStart: Optional[datetime]
    """
    Start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
    """

    windowEnd: Optional[datetime]
    """
    End {@link datetime} of window for {@link Sensor} data utilized in the dataset.
    """

    trainingPercentage: Optional[float]
    """
    The percentage of the dataset used for training.
    """

    trainStart: Optional[datetime]=None
    """
    Start Date of the dataset used for training.
    """

    trainEnd: Optional[datetime]=None
    """
    End Date of the dataset used for training.
    """

    validStart: Optional[datetime]=None
    """
    Start Date of the dataset used for Validating.
    """

    validEnd: Optional[datetime]=None
    """
    End Date of the dataset used for Validating.
    """

    trainingSubset: Optional[str]
    """
    The subset of the dataset to use for training.
    """

    interval: Optional[str]
    """
    The data {@link Interval} to analyze the data of the {@link Sensor}.
    """

    numAssets: Optional[int]=None
    """
    Metadata indicating the number of {@link ReliabilityAsset}s to run data preparation on.
    This field is not set by the user.
    """

    targetAssets: Optional[Array[ReliabilityAsset]]=None
    """
    The assets that we want to run data preparation on. Used to filter {@link ReliabilityMlDatasetPreparationJob}
    by asset.
    """

    includeSensors: Optional[Array[Sensor]]=None
    """
    Sensors to include in the data preparation run.
    Note: this field is metadata that is set automatically during
    {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
    """

    excludeSensors: Optional[Array[Sensor]]=None
    """
    Sensors to exclude from the data preparation run.
    Note: this field is metadata that is set automatically during
    {@link BulkModelSetupUiSettings#startBulkModelSetup}, not by the user.
    """

    variance: Optional[float]=None
    """
    Variance value used to filter {@link SensorDataReport}
    """

    project: Optional[ReliabilityMl.Project]=None
    """
    Stores the id of the {@link MlProject} that the user selected to create the new dataset
    """

    trainingDatasetTimeRanges: Optional[Array[TimeRange]]=None
    """
    The date time ranges selected by the user for training
    """

    validateDatasetTimeRanges: Optional[Array[TimeRange]]=None
    """
    The date time ranges selected by the user for validation
    """

    splitByPercentage: Optional[bool]=None
    """
    The selected split type, can be either by percentage or by time ranges.
    """

    extraTimeRangeMasks: Optional[Array[TimeRange]]=None
    """
    Masks created when {@link ReliabilityDataPreparationUiBaseSettings#splitByPercentage} is
    set to `false`. This field includes the unselected time ranges, which will be handled as
    `mask_AdHocTraining` type masks.
    """

    jobName: Optional[str]=None
    """
    Field name containing the desired name for the {@link ReliabilityMlDatasetPreparationJob}.
    """

    meta: Optional[Meta]=None
    """
    Various system fields.
    """

    id: Optional[str]=None
    """
    Unique identifier for the logical object that instance of this type represents.
    """

    name: Optional[str]=None
    """
    The name of the component. Optional field for informational purposes only.
    """

    dataSpec: Optional[UiSdlNoData]=None
    """
    The data settings for this component.
    
    @uiSdlDesignerCustomRenderer(rendererType='')
    """

    disableDataRequestOnFirstRender: Optional[bool]=None
    """
    Disable if you want to avoid sending any and all requests for this component on first render.
    """

    triggersRegistered: Optional[bool]=None
    """
    Whether the effect triggers and epics have been registered
    """

    wrapWithMetadataId: Optional[bool]=None
    """
    Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
    """

    REDUX_NAMESPACE: Optional[str]=None
    """
    The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
    """

    effectTriggers: Optional[Array[UiSdlEffectTrigger]]=None
    """
    Collection of extra async {@link UiSdlEffectTrigger}.
    """

    defaultWindow: Optional[Period]=None
    """
    A {@link Period} to specify the {@link ReliabilityAsset} time window for {@link Sensor} data utilized in the dataset.
    """

    defaultWindowStart: Optional[datetime]=None
    """
    Default start {@link datetime} of window for {@link Sensor} data utilized in the dataset.
    """

    defaultWindowEnd: Optional[datetime]=None
    """
    Default end {@link datetime} of window for {@link Sensor} data utilized in the dataset.
    """

    defaultDataInterval: Optional[str]=None
    """
    The default data {@link Interval} to analyze the data of the {@link Sensor}.
    """

    defaultTrainingPercentage: Optional[float]=None
    """
    The default training percentage.
    """

    defaultValidationPercentage: Optional[float]=None
    """
    The default validation percentage.
    """

    defaultFlatlineThreshold: Optional[int]=None
    """
    A threshold of {@link Sensor} flatline percentage.
    The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
    """

    defaultMissingDataThreshold: Optional[int]=None
    """
    A threshold of {@link Sensor} missing data percentage.
    The {@link Sensor}s will be excluded by default for the values below the missing data threshold.
    """

    defaultTrainingDataset: Optional[int]=None
    """
    The size of dataset for training.
    """

    defaultPreEventMaskPeriod: Optional[Period]=None
    """
    A {@link Period} of time before each event to exclude {@link Sensor} data for training.
    """

    defaultPostEventMaskPeriod: Optional[Period]=None
    """
    A {@link Period} of time after each event to exclude {@link Sensor} data for training and inference.
    """

    defaultInterval: Optional[str]=None
    """
    A {@link Interval} of time to analize the data of the {@link Sensor}.
    """

    defaultTrainingSubset: Optional[str]
    """
    Defines the partition of the subset on the training step.
    """

    defaultVariance: Optional[float]=None
    """
    Default value for {@link ReliabilityDataPreparationUiBaseSettings#variance}.
    """

    disableInterval: Optional[bool]=None
    """
    Whether to disable the data interval input
    """

    configOverride: Optional[str]=None

    secretOverride: Optional[str]=None

    issues: Optional[Array[str]]=None
    """
    Captures any issues that occurred while deserializing from filesystem
    """

    dataPreparationJobTimeout: Optional[Duration]=None
    """
    Defines the timeout to wait for the data preparation job to complete.
    """

    isBulk: Optional[bool]=None
    """
    If true, indicates we are doing bulk data prep instead of normal data prep. Components should read
    this field and act accordingly. This field will be set any time the `Reliability.BulkDataPrepModal`
    is opened/closed.
    """

    loadingDataPrep: Optional[bool]=None
    """
    If true, data prep table action will be set to loading.
    """

    numCompletedJobs: Optional[int]=None
    """
    Stores a count of jobs that have finished running. Includes both `completed` and `failed` jobs.
    """
    def __init__(self, nonOperationalMasks: Optional[Array[ReliabilityDataPreparationRuleMaskSpec]]=None, preNonOperationalMaskPeriod: Optional[Period]=None, postNonOperationalTrainingMaskPeriod: Optional[Period]=None, postNonOperationalInferenceMaskPeriod: Optional[Period]=None, preEventMaskPeriod: Optional[Period]=None, postEventMaskPeriod: Optional[Period]=None, dateRangeMaskTimeRanges: Optional[Array[TimeRange]]=None, trainingRuleMasks: Optional[Array[ReliabilityDataPreparationRuleMaskSpec]]=None, inferenceRuleMasks: Optional[Array[ReliabilityDataPreparationRuleMaskSpec]]=None, nonOperationalMasksExpression: Optional[str]=None, trainingRuleMasksExpression: Optional[str]=None, inferenceRuleMasksExpression: Optional[str]=None, flatlineThreshold: Optional[int]=None, missingDataThreshold: Optional[int]=None, windowStart: Optional[datetime]=None, windowEnd: Optional[datetime]=None, trainingPercentage: Optional[float]=None, trainStart: Optional[datetime]=None, trainEnd: Optional[datetime]=None, validStart: Optional[datetime]=None, validEnd: Optional[datetime]=None, trainingSubset: Optional[str]=None, interval: Optional[str]=None, numAssets: Optional[int]=None, targetAssets: Optional[Array[ReliabilityAsset]]=None, includeSensors: Optional[Array[Sensor]]=None, excludeSensors: Optional[Array[Sensor]]=None, variance: Optional[float]=None, project: Optional[ReliabilityMl.Project]=None, trainingDatasetTimeRanges: Optional[Array[TimeRange]]=None, validateDatasetTimeRanges: Optional[Array[TimeRange]]=None, splitByPercentage: Optional[bool]=None, extraTimeRangeMasks: Optional[Array[TimeRange]]=None, jobName: Optional[str]=None, meta: Optional[Meta]=None, id: Optional[str]=None, name: Optional[str]=None, dataSpec: Optional[UiSdlNoData]=None, disableDataRequestOnFirstRender: Optional[bool]=None, triggersRegistered: Optional[bool]=None, wrapWithMetadataId: Optional[bool]=None, REDUX_NAMESPACE: Optional[str]=None, effectTriggers: Optional[Array[UiSdlEffectTrigger]]=None, defaultWindow: Optional[Period]=None, defaultWindowStart: Optional[datetime]=None, defaultWindowEnd: Optional[datetime]=None, defaultDataInterval: Optional[str]=None, defaultTrainingPercentage: Optional[float]=None, defaultValidationPercentage: Optional[float]=None, defaultFlatlineThreshold: Optional[int]=None, defaultMissingDataThreshold: Optional[int]=None, defaultTrainingDataset: Optional[int]=None, defaultPreEventMaskPeriod: Optional[Period]=None, defaultPostEventMaskPeriod: Optional[Period]=None, defaultInterval: Optional[str]=None, defaultTrainingSubset: Optional[str]=None, defaultVariance: Optional[float]=None, disableInterval: Optional[bool]=None, configOverride: Optional[str]=None, secretOverride: Optional[str]=None, issues: Optional[Array[str]]=None, dataPreparationJobTimeout: Optional[Duration]=None, isBulk: Optional[bool]=None, loadingDataPrep: Optional[bool]=None, numCompletedJobs: Optional[int]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[BulkDataPreparationApplicationState]:
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
    def fromJsonString(cls, json: str) -> Union[BulkDataPreparationApplicationState]:
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
    def fromXmlString(cls, xml: str) -> Union[BulkDataPreparationApplicationState]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[BulkDataPreparationApplicationState]:
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
    def replaceType(self, old: Type, new: Type) -> BulkDataPreparationApplicationState:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BulkDataPreparationApplicationState:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BulkDataPreparationApplicationState:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BulkDataPreparationApplicationState]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BulkDataPreparationApplicationState]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> BulkDataPreparationApplicationState:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BulkDataPreparationApplicationState:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BulkDataPreparationApplicationState:
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
    def validateObj(self) -> BulkDataPreparationApplicationState:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> BulkDataPreparationApplicationState:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> BulkDataPreparationApplicationState:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> BulkDataPreparationApplicationState:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> BulkDataPreparationApplicationState:
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
    def withoutFieldAtPath(self, path: str) -> BulkDataPreparationApplicationState:
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
    def withoutField(self, field: str) -> BulkDataPreparationApplicationState:
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
    def withoutField(self, field: FieldType) -> BulkDataPreparationApplicationState:
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
    def withoutFields(self, fields: Array[str]) -> BulkDataPreparationApplicationState:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> BulkDataPreparationApplicationState:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> BulkDataPreparationApplicationState:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> BulkDataPreparationApplicationState:
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
    def defaultField(self, field: str) -> BulkDataPreparationApplicationState:
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
    def defaultField(self, field: FieldType) -> BulkDataPreparationApplicationState:
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
    def unsetField(self, field: str) -> BulkDataPreparationApplicationState:
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
    def unsetField(self, field: FieldType) -> BulkDataPreparationApplicationState:
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
    def removeField(self, field: str) -> BulkDataPreparationApplicationState:
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
    def removeField(self, field: FieldType) -> BulkDataPreparationApplicationState:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> BulkDataPreparationApplicationState:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> BulkDataPreparationApplicationState:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> BulkDataPreparationApplicationState:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> BulkDataPreparationApplicationState:
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
    def mergeJson(self, json: any) -> BulkDataPreparationApplicationState:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> BulkDataPreparationApplicationState:
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
    def sumObj(self, other: Obj, deep: bool=None) -> BulkDataPreparationApplicationState:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[BulkDataPreparationApplicationState]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[BulkDataPreparationApplicationState]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[BulkDataPreparationApplicationState]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[BulkDataPreparationApplicationState]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[BulkDataPreparationApplicationState]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, BulkDataPreparationApplicationState]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, BulkDataPreparationApplicationState]]:
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
    def toBuilder(self) -> ObjBuilder[BulkDataPreparationApplicationState]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[BulkDataPreparationApplicationState]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> BulkDataPreparationApplicationState:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> BulkDataPreparationApplicationState:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> BulkDataPreparationApplicationState:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> BulkDataPreparationApplicationState:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> BulkDataPreparationApplicationState:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> BulkDataPreparationApplicationState:
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
    def make(cls, s: str) -> Union[BulkDataPreparationApplicationState]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> BulkDataPreparationApplicationState:
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
    def afterMake(self) -> BulkDataPreparationApplicationState:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> BulkDataPreparationApplicationState:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[BulkDataPreparationApplicationState]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> BulkDataPreparationApplicationState:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def createMaskOverrides(self, interval: str=None, returnMetricExpressions: bool=None) -> Union[Union[Map[str, Feature],Map[str, str]]]:
    """
    Creates mask overrides based on this {@link ReliabilityDataPreparationUiMaskSettings}.
    These are meant to be passed directly into {@link ReliabilityMlMaskPreparationSpec}. Each override is created
    as a {@link Feature}, and returned as a map of override feature field to the corresponding {@link Feature}.
    
    @param interval
              Interval in which the underlying {@link Feature} should evaluate on. Should match the dataset's interval.
    @param returnMetricExpressions
              If true, returns the metric expressions of the mask overrides.
              If false, returns the created Features.
    @return A map of override feature field to either Feature objects or metric expression strings.
    """
        ...
    @classmethod
    def createRuleMask(cls, spec: ReliabilityDataPreparationUiCreateRuleMaskSpec=None, returnMetricExpression: bool=None) -> Union[Union[Feature,str]]:
    """
    Transform an array of {@link ReliabilityDataPreparationRuleMaskSpec} to a {@link Feature} that is 1 if any of the
    rule critera are met, 0 otherwise.
    
    @param spec
              Represents the masks that will be converted into a Feature
    @param returnMetricExpression
              If true, returns the metric expression that represents the given rule masks.
              If false, returns the created Feature.
    @return Either a Feature object or a metric expression string.
    """
        ...
    @classmethod
    def createBasicRuleMaskMetricExpression(cls, masks: Array[ReliabilityDataPreparationRuleMaskSpec]=None) -> Union[str]:
    """
    Based on the given {@link ReliabilityDataPreparationRuleMaskSpec}, creates a metric expression that represents
    all of the given rule masks. This can be used to create a metric/feature that returns 1 if any rule's criteria
    is met. Does not take pre/post mask periods into account.
    
    @param masks
              Represents the masks that will be converted into a metric expression
    @return A metric expression string representing the rule masks.
    """
        ...
    def makeBaseSpec(self, includedSensorIds: Array[str]=None, excludedSensorIds: Array[str]=None, additionalRasrs: Array[ReliabilityAssetSensorRelation]=None) -> ReliabilityMlDatasetPreparationSpec:
    """
    Creates a {@link ReliabilityMlDatasetPreparationSpec}
    based on the fields from {@link ReliabilityDataPreparationUiBaseSettings}
    @param includedSensorIds
              The ids of the sensors to include in the dataset
    @param excludedSensorIds
              The ids of the sensors to exclude in the dataset
    @param additionalRasrs
              Additional reliability asset sensor relations to include.
    @return A spec that can be used to start a {@link ReliabilityMlDatasetPreparationJob}
    """
        ...
    def toSpec(self) -> ReliabilityMlDatasetPreparationSpec:
    """
    Converts these settings to a {@link ReliabilityMlDatasetPreparationSpec}
    for use in running data preparation.
    @return A {@link ReliabilityMlDatasetPreparationSpec} object.
    """
        ...
    @classmethod
    def createRuleMaskFeatures(cls, masks: Array[ReliabilityDataPreparationRuleMaskSpec]=None, interval: str=None) -> Union[Feature]:
    """
    Transform an array of {@link ReliabilityDataPreparationRuleMaskSpec} to a {@link Feature}
    @param masks
              Represents the masks that will be converted into a Feature
    @param interval
              Interval in which the Feature is created.
    @return A {@link Feature} object created from the masks.
    """
        ...
    @classmethod
    def convertPeriodToIntervalCount(cls, period: Period=None, interval: str=None) -> Union[int]:
    """
    Returns the number of intervals (rounded to the nearest integer) which fit in the given period.
    Returns null if one or more params missing.
    @param period
              The period to convert to interval count.
    @param interval
              The interval to use for calculation.
    @return The number of intervals that fit in the period, or null if parameters are missing.
    """
        ...
    def generateEventMaskPeriod(self, interval: str, assetEventsWindow: int) -> Period:
    """
    Generates a {@link Period} instance from a given {@link Interval} and assetEventsWindow.
    If the {@link Interval} is not a standard {@link TemporalUnit}, it is converted to seconds, because {@link Period} instances
    only support {@link TemporalUnit} values as the unit. The total duration in seconds is then used to create the {@link Period}.
    If the {@link Interval} is a valid {@link TemporalUnit}, it's used directly as the unit of the {@link Period}.
    
    @param interval
              Represents the base time {@link Interval} used to define the length of the {@link Period}.
    @param assetEventsWindow
              Represents the window of time associated with {@link ReliabilityAssetEvent}s.
    @return A {@link Period} using the {@link Interval interval} and assetEventsWindow if the {@link Interval interval} is a
            valid {@link TemporalUnit}, or based on its duration in seconds otherwise.
    """
        ...
    def getUnselectedTimeRanges(self) -> Union[Array[TimeRange]]:
    """
    Generates the time ranges not covered by the given training and validation ranges
    within the overall time range.
    @return An array of {@link TimeRange} objects representing unselected time ranges.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[BulkDataPreparationApplicationState]:
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
    def fetch(cls, filter: Filter) -> FetchResult[BulkDataPreparationApplicationState]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[BulkDataPreparationApplicationState]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[BulkDataPreparationApplicationState]]]:
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
    def dependencies(self) -> MetadataDeps[BulkDataPreparationApplicationState]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> BulkDataPreparationApplicationState:
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
    def update(self, srcObj: BulkDataPreparationApplicationState=None, spec: UpsertSpec=None) -> Union[BulkDataPreparationApplicationState]:
        ...
    def upsert(self, srcObj: BulkDataPreparationApplicationState=None, spec: UpsertSpec=None) -> Union[BulkDataPreparationApplicationState]:
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
    def fromString(cls, s: str) -> Union[BulkDataPreparationApplicationState]:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[BulkDataPreparationApplicationState]:
    """
    @return single instance of this Identified type by id.
    """
        ...
    def jsonStringify(self) -> Union[str]:
        ...
    @classmethod
    def jsonify(cls, value: Any=None) -> Union[str]:
        ...
    @classmethod
    def doDataMerge(cls, componentId: str, dataSpecFieldName: str, dataDestinationFieldName: str, props: BulkDataPreparationApplicationState, state: UiSdlReduxState) -> Union[BulkDataPreparationApplicationState]:
    """
    A function to perform the setting and merging of keys and values for the dataSpec
    and entity data in the react props. Components that need custom merging of multiple or nested datasources
    should override this function and provide their own custom setting/merging logic.
    
    @param componentId
              The id of the component on which the function is being called
    @param dataSpecFieldName
              The name of the field which is annotated as a dataSpec
    @param dataDestinationFieldName
              Contains field name to store the returned data
    @param props
              The object that will eventually be delivered to the component as react props
    @param state
              The redux state
    @returns props after the data has been set/merged
    """
        ...
    @classmethod
    def renderInitialAction(cls, id: str) -> UiSdlInitialRenderAction:
    """
    Triggered the first time a component renders. Applications should never
    trigger this action manually, as it will be triggered internally by the
    framework. If multiple instances of the same component (i.e. having the
    same id) are present on a single page, the framework _may_ trigger this
    action multiple times—at most once per component instance and at least once
    overall.
    
    @param id
              The id of the component that is rendered.
    @returns an `INITIAL_RENDER` action.
    """
        ...
    @classmethod
    def registerTriggersAction(cls, id: str) -> UiSdlRegisterTriggersAction:
    """
    Triggered the first time a component renders. Component will trigger this action
    when it registers effect triggers
    @param id
              The id of the component that is rendered.
    @returns an `REGISTER_TRIGGERS` action.
    """
        ...
    def triggersRegisterEffect(self, state: UiSdlReduxState, action: UiSdlRegisterTriggersAction) -> UiSdlReduxState:
    """
    Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
    
    @param state
              Redux state
    @param action
              Redux action
    @returns a new Redux state
    """
        ...
    @classmethod
    def getStateNamespace(cls) -> Union[str]:
    """
    Gets the namespace for this state
    @return the namespace
    """
        ...
    @classmethod
    def getInitialStateNamespace(cls) -> Union[str]:
    """
    Gets the namespace for the initial state
    @return the namespace
    """
        ...
    @classmethod
    def getConfigStatePath(cls, id: str=None) -> Union[Array[str]]:
    """
    Gets the entire path to the state
    @param id
              The id of the stateful entity
    @return an array of the entire path to the state
    """
        ...
    @classmethod
    def getInitialConfigStatePath(cls, id: str=None) -> Union[Array[str]]:
    """
    Gets the enire path to the initial state
    @param id
              The id of the stateful entity
    @return an array of the entire path to the initial state
    """
        ...
    @classmethod
    def getConfigFromState(cls, id: str=None, state: UiSdlReduxState=None, dataPath: Array[str]=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Helper method to retrieve config values from the state.
    
    @param id The stateful entity holding the config
    @param state The Redux state
    @param dataPath The path to the config
    @returns The config value as UiSdlImmutableJS
    """
        ...
    @classmethod
    def setConfigInState(cls, id: str=None, state: UiSdlReduxState=None, dataPath: Array[str]=None, value: Any=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Helper method to retrieve config values from the state.
    
    @param id The stateful entity holding the config
    @param state The Redux state
    @param dataPath The path to the config
    @param value The value to set
    @returns The new state as UiSdlImmutableJS
    """
        ...
    @classmethod
    def getInitialConfigFromState(cls, id: str=None, state: UiSdlReduxState=None, dataPath: Array[str]=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Helper method to retrieve initial config values from the state.
    
    @param id The stateful entity holding the config
    @param state The Redux state
    @param dataPath The path to the config
    @returns The config value as UiSdlImmutableJS
    """
        ...
    @classmethod
    def setInitialConfigInState(cls, id: str=None, state: UiSdlReduxState=None, dataPath: Array[str]=None, value: Any=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Helper method to retrieve initial config values from the state.
    
    @param id The stateful entity holding the config
    @param state The Redux state
    @param dataPath The path to the config
    @param value The value to set
    @returns The new state as UiSdlImmutableJS
    """
        ...
    @classmethod
    def isLimitEffectOnState(cls) -> bool:
    """
    Determines whether or not the `UiSdlState` can update state outside of its own state
    @return true if the `UiSdlState` should not be able to set state outside of its own state
    """
        ...
    @classmethod
    def getConfigFromApplicationState(cls, stateId: str, state: UiSdlReduxState, dataPath: Array[str]=None) -> UiSdlReduxState:
    """
    Retrieves config value from application state.
    
    @param stateId
              Id of the state.
    @param state
              Redux state.
    @param dataPath
              The path to the config value.
    @returns Redux state.
    """
        ...
    @classmethod
    def setConfigInApplicationState(cls, stateId: str, state: UiSdlReduxState, value: Any, dataPath: Array[str]=None) -> UiSdlReduxState:
    """
    Sets config value in application state.
    
    @param stateId
              Id of the state.
    @param state
              Redux state.
    @param dataPath
              The path to the config value.
    @param value
              The config value to set.
    @returns Redux state.
    """
        ...
    @classmethod
    def removeConfigInApplicationState(cls, stateId: str, state: UiSdlReduxState, dataPath: Array[str]=None) -> UiSdlReduxState:
    """
    Remove config value in the state.
    
    @param stateId
              Id of the state.
    @param state
              Redux state.
    @param dataPath
              The path to the config value.
    @returns Redux state.
    """
        ...
    @classmethod
    def initializeApplicationStateAction(cls, stateId: str) -> UiSdlApplicationStateInitializeAction:
    """
    Triggers when the `UiSdlApplicationState` is initialized.
    
    @param stateId
               Id of the state.
    @return a 'APPLICATION_STATE_INITIALIZE' action.
    """
        ...
    @classmethod
    def applicationStateDeleteDataAction(cls, stateId: str, ids: Array[str]=None, dataPath: str=None) -> UiSdlApplicationStateDataDeleteAction:
    """
    Action to delete data in a certain slice of the application state
    
    @param stateId
               Id of the state.
    @param ids
               Ids of the objects to be deleted
    @param dataPath
               slice of the application state to put the new object in
    @return a 'APPLICATION_STATE_DATA_DELETE' action.
    """
        ...
    @classmethod
    def applicationStateAddDataAction(cls, stateId: str, id: str=None, dataPath: str=None) -> UiSdlApplicationStateDataAddAction:
    """
    Action to add data to a certain slice in the application state
    
    @param stateId
               Id of the state.
    @param id
               Id of the newly added object
    @param dataPath
               slice of the application state to put the new object in
    @return a 'APPLICATION_STATE_DATA_ADD' action.
    """
        ...
    @classmethod
    def applicationStateModifyDataAction(cls, stateId: str, id: str=None, dataPath: str=None, field: str=None, newValue: Any=None) -> UiSdlApplicationStateDataModifyAction:
    """
    Action to modify data to a certain slice in the application state
    
    @param stateId
               Id of the state.
    @param id
               Id of the newly added object
    @param dataPath
               slice of the application state to put the new object in
    @return a 'APPLICATION_STATE_MODIFY_ADD' action.
    """
        ...
    @classmethod
    def applicationStateDataDeleteEffect(cls, state: UiSdlReduxState, action: UiSdlApplicationStateDataDeleteAction) -> UiSdlReduxState:
    """
    Listens to actions of 'APPLICATION_STATE_DATA_DELETE' and delete objects in the application state.
    
    @param state
               Redux state.
    @param action
               Redux action.
    @return the new Redux state.
    """
        ...
    @classmethod
    def applicationStateDataAddEffect(cls, state: UiSdlReduxState, action: UiSdlApplicationStateDataAddAction) -> UiSdlReduxState:
    """
    Listens to actions of 'APPLICATION_STATE_DATA_ADD' and add new data to the specified data path in the payload.
    
    @param state
               Redux state.
    @param action
               Redux action.
    @return the new Redux state.
    """
        ...
    @classmethod
    def applicationStateDataModifyEffect(cls, state: UiSdlReduxState, action: UiSdlApplicationStateDataModifyAction) -> UiSdlReduxState:
    """
    Listens to actions of 'APPLICATION_STATE_DATA_MODIFY' and add new data to the specified data path in the payload.
    
    @param state
               Redux state.
    @param action
               Redux action.
    @return the new Redux state.
    """
        ...
    @classmethod
    def generateSelector(cls, applicationId: str=None) -> Union[Callable[[Union[UiSdlReduxState]], Union[UiSdlImmutableJS[UiSdlApplicationState]]]]:
    """
    Generates a function that is able to return the application metadata from the redux state.
    @param applicationId
               The application ID to generate a selector for
    @return a function that can return the metadata for the applicationID when given the redux state
    """
        ...
    @classmethod
    def setFieldAction(cls, appStateId: str, field: str, value: str=None, path: str=None) -> UiSdlReduxAction[Any]:
    """
    An action to change a field in the application state.
    
    @param appStateId
           The ID of the app state to change.
    @param field
           The field in application state to be updated.
    @param value
           The value to update the state field with. Takes precedence over the path param.
    @param path
           The path in the action payload to get the value to update the state field with.
    @return A Redux action of type `SET_FIELD`.
    """
        ...
    @classmethod
    def setFieldReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SET_FIELD` and stores selected value in application state.
    
    @param state
           The current Redux state.
    @param action
           The Redux action that triggered this reducer.
    @return A new Redux state.
    """
        ...
    @classmethod
    def setMultipleFieldsAction(cls, appStateId: str, fieldToValueMap: Map[str, Any]=None, fieldToPathMap: Map[str, str]=None) -> UiSdlReduxAction[Any]:
    """
    Sets multiple fields of the application state.
    
    @param appStateId
           The ID of the app state to change.
    @param fieldToValueMap
           Map of key `field` in app state to value to set this `field`.
    @param fieldToPathMap
           Map of key `field` to value `path`. `path` is the path in the action payload
           to get the value to set `field` to.
    @return A Redux action of type `SET_MULTIPLE_FIELDS`.
    """
        ...
    @classmethod
    def setMultipleFieldsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SET_MULTIPLE_FIELDS` and updates application state accordingly.
    
    @param state
           The current Redux state.
    @param action
           The Redux action that triggered this reducer.
    @return A new Redux state.
    """
        ...
    @classmethod
    def clearStateAction(cls, appStateId: str, keepFields: Array[str]=None) -> UiSdlReduxAction[Any]:
    """
    An action to clear application state.
    
    @param appStateId
           The ID of the app state to change.
    @param keepFields
           The fields to keep in the application state.
    @return A Redux action of type `CLEAR_STATE`.
    """
        ...
    @classmethod
    def clearStateReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Clears application state completely.
    
    @param state
           The current Redux state.
    @param action
           The Redux action that triggered this reducer.
    @return A new Redux state.
    """
        ...
    @classmethod
    def inst(cls) -> BulkDataPreparationApplicationState:
    """
    @return the one and only instance to be used when member functions are called on this type.
    """
        ...
    @classmethod
    def cachedInst(cls) -> Union[BulkDataPreparationApplicationState]:
    """
    @return the cached instance if already cached, null otherwise. Does not instantiate if missing.
    """
        ...
    def isCached(self) -> bool:
    """
    @return whether the cache already contains this instance
    """
        ...
    @classmethod
    def allCached(cls, doNotProduceAll: bool=None) -> Union[Stream[BulkDataPreparationApplicationState]]:
    """
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return stream of all available Cached instances.
    """
        ...
    @classmethod
    def find(cls, filter: str=None, doNotProduceAll: bool=None) -> Union[Stream[BulkDataPreparationApplicationState]]:
    """
    @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return existing instances of this type that satisfy filter from data cache.
    """
        ...
    @classmethod
    def findBy(cls, field: str, value: Any, doNotProduceAll: bool=None) -> Union[Stream[BulkDataPreparationApplicationState]]:
    """
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return existing instances of this type that satisfy filter from data cache.
    """
        ...
    @classmethod
    def findByCacheKey(cls, key: str) -> Union[BulkDataPreparationApplicationState]:
    """
    @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
    
    @see forCacheKey
    @see getCached
    """
        ...
    @classmethod
    def forCacheKey(cls, key: str) -> Union[BulkDataPreparationApplicationState]:
    """
    Returns cached instance by key, with secrets removed.
    """
        ...
    def getCached(self) -> Union[BulkDataPreparationApplicationState]:
    """
    @return cached instance.
    
    @see forCacheKey
    @see findByCacheKey
    """
        ...
    def refreshCache(self) -> Union[BulkDataPreparationApplicationState]:
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
    def produce(cls, key: str) -> Union[BulkDataPreparationApplicationState]:
    """
    Should produce an entry for the cache key. This method should not be called directly.
    """
        ...
    @classmethod
    def produceAll(cls) -> Union[Map[str, BulkDataPreparationApplicationState]]:
    """
    Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
    """
        ...
    @classmethod
    def doProduceAll(cls) -> Union[Map[str, BulkDataPreparationApplicationState]]:
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
    def getConfig(self) -> BulkDataPreparationApplicationState:
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
    def getSecret(self) -> BulkDataPreparationApplicationState:
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
    def withConfigKey(self, configKey: str) -> BulkDataPreparationApplicationState:
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
    def withoutConfigKey(self) -> BulkDataPreparationApplicationState:
    """
    @return copy without config key.
    """
        ...
    @classmethod
    def forConfigKey(cls, configKey: str) -> Union[BulkDataPreparationApplicationState]:
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
    def listConfigs(cls, parallel: bool=None, filter: Callable[[str], bool]=None) -> Union[Stream[BulkDataPreparationApplicationState]]:
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
    def setConfigValues(self, from_: BulkDataPreparationApplicationState, override: str=None) -> None:
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
    def setSecretValues(self, from_: BulkDataPreparationApplicationState, override: str=None) -> None:
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
    def loadConfigAndSecret(cls, configKey: str) -> Union[BulkDataPreparationApplicationState]:
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
    @classmethod
    def secretFieldPaths(cls) -> Union[Array[FieldPath]]:
    """
    returns a list of all field paths that are secret
    """
        ...
    def removeSecrets(self) -> Union[BulkDataPreparationApplicationState]:
    """
    @return this config without any secret values.
    """
        ...
    def removeNonSecrets(self) -> Union[BulkDataPreparationApplicationState]:
    """
    @return this config with only secret values.
    """
        ...
    def validate(self) -> BulkDataPreparationApplicationState:
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
    def removeComponentStateAction(cls, stateId: str, componentId: str) -> UiSdlReduxAction[Any]:
    """
    An action to remove a component's state by it's ID.
    
    @param componentId
           The id of the component, whose state needs to removed.
    @param stateId
           The id of the state to be removed.
    
    @returns a Redux action of type `REMOVE_COMPONENT_STATE`.
    """
        ...
    @classmethod
    def removeComponentStateReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `REMOVE_COMPONENT_STATE` and
    removes state of the componentId passed in action's payload.
    
    @param state
              Redux state
    @param action
              Redux action
    @returns a new Redux state
    """
        ...
    @classmethod
    def clearComponentState(cls, componentsToClear: Any) -> Any:
    """
    Function for clearing the state of components based on an array of Ids.
    """
        ...
    @classmethod
    def clearComponentData(cls, componentsToClear: Any) -> Any:
    """
    Function for clearing the data of components based on an array of Ids
    """
        ...
    @classmethod
    def changeStepAction(cls, stateId: str, shouldGoNext: bool) -> UiSdlReduxAction[Any]:
    """
    Returns an action that updates the status of the bulk data prep progress indicator.
    
    @param stateId
           The ID of this application state.
    @param shouldGoNext
           When `false`, this indicates that the action is for the previous step, while `true`
           indicates that the action is for the next step.
    @return A Redux action to change the step
    """
        ...
    @classmethod
    def changeStepEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    When the `CHANGE_STEP` action is triggered, this epic updates the bulk data prep progress indicator
    based on the current step.
    
    @param actionStream
              The observable stream of UI SDL actions
    @param stateStream
              The observable stream of UI SDL states
    @return An observable stream of UI SDL actions
    """
        ...
    @classmethod
    def closeModalsOnExitAction(cls) -> UiSdlReduxAction[Any]:
    """
    An action to check if the user confirmed exit from the bulk data preparation workflow.
    
    @return A Redux action to close modals on exit
    """
        ...
    @classmethod
    def closeModalsOnExitEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    An epic to check if the user confirmed exit from the bulk data preparation worflow.
    If so, close the bulk data preparation modal. Otherwise, keep it opened.
    
    @param actionStream
              The observable stream of UI SDL actions
    @param stateStream
              The observable stream of UI SDL states
    @return An observable stream of UI SDL actions
    """
        ...
    @classmethod
    def exitUiWorkflowAction(cls) -> UiSdlReduxAction[Any]:
    """
    An action to indicate leaving the bulk data prep workflow.
    
    @return A Redux action to exit the UI workflow
    """
        ...
    @classmethod
    def exitUiWorkflow(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Closes the bulk data prep modal, the associated confirmation modal, and clears application state, except for
    the `numCompletedJobs` field, which needs to be used outside the modal.
    
    @param actionStream
              The observable stream of UI SDL actions
    @param stateStream
              The observable stream of UI SDL states
    @return An observable stream of UI SDL actions
    """
        ...
    @classmethod
    def checkJobStatusAction(cls, suppressBanner: bool=None) -> UiSdlReduxAction[Any]:
    """
    Returns an action that shows a banner and updates {@link #numCompletedJobs} if the number of `completed`
    and `failed` {@link ReliabilityMlDatasetPreparationJob}s has changed.
    
    @param suppressBanner
               If true, the banner will not be shown.
    @return A Redux action of type `CHECK_JOB_STATUS`.
    """
        ...
    @classmethod
    def checkJobStatusEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Updates {@link #numCompletedJobs} if the number of `completed` and `failed`
    {@link ReliabilityMlDatasetPreparationJob}s has changed.
    
    @param actionStream
              The observable stream of UI SDL actions
    @param stateStream
              The observable stream of UI SDL states
    @return An observable stream of UI SDL actions
    """
        ...
    @classmethod
    def refreshNestedGridEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Requests data for nested grids on Dataset Preparation Jobs Grid by embedding
    parent grid ids into nested grid data requests.
    
    @param actionStream
              The observable stream of UI SDL actions
    @param stateStream
              The observable stream of UI SDL states
    @return redux actions of type `DATA_REQUEST` on each of the nested grids.
    """
        ...
    @classmethod
    def startUiWorkflowAction(cls, checkForDataValidation: bool=None) -> UiSdlReduxAction[Any]:
    """
    An action to start data preparation
    
    @param checkForDataValidation
               If set to true, the last data validation run status is checked for
               selected {@link ReliabilityAsset}s.
    
    @return a Redux action of type `START_UI_WORKFLOW`.
    """
        ...
    @classmethod
    def startUiWorkflowEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `START_UI_WORKFLOW`:
    1- Sets {@link #loadingDataPrep} to true
    2- Stores values from {@link DatasetPreparationSettingsConfig} into this state
    3- Opens corresponding modal
    4- Sets {@link #loadingDataPrep} to false
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    
    @return An Observable action stream.
    """
        ...
    @classmethod
    def startDataPrepAction(cls) -> UiSdlReduxAction[Any]:
    """
    An action to begin bulk data preparation
    
    @return a Redux action of type `START_DATA_PREP`.
    """
        ...
    @classmethod
    def startDataPrepEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `START_DATA_PREP` to begin bulk data preparation,
    exits the UI workflow, calls {@link #checkJobStatusAction} with param suppressBanner=true,
    redirects to Jobs pages and shows a banner
    
    @param actionStream
              The observable stream of UI SDL actions
    @param stateStream
              The observable stream of UI SDL states
    @return An observable stream of UI SDL actions
    """
        ...


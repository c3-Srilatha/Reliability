#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.reliabilityMl.ReliabilityMlTargetPreparationSpec import ReliabilityMlTargetPreparationSpec
from c3.platform.Include import Include
from c3.platform.MlSubject.InterpretResult import MlSubject.InterpretResult
from c3.reliabilityMl.ReliabilityAssetToRiskModelValidationRelation import ReliabilityAssetToRiskModelValidationRelation
from c3.platform.MlSubject.ProcessResult import MlSubject.ProcessResult
from c3.platform.Timeseries import Timeseries
from c3.reliabilityDataModel.ReliabilityAssetHierarchyDenorm import ReliabilityAssetHierarchyDenorm
from c3.platform.RefreshMetricsBatchJob import RefreshMetricsBatchJob
from c3.platform.WithKey import WithKey
from c3.platform.StrPair import StrPair
from c3.platform.Member import Member
from c3.platform.ActionStats import ActionStats
from c3.platform.EvalSpec import EvalSpec
from c3.platform.RefreshMetricsSpec import RefreshMetricsSpec
from c3.platform.CheckReferencesResult import CheckReferencesResult
from c3.platform.MapType import MapType
from c3.reliabilityMl.ReliabilityAssetToRiskModelRelation import ReliabilityAssetToRiskModelRelation
from c3.platform.ScanStats import ScanStats
from c3.platform.ValidatePathResult import ValidatePathResult
from c3.platform.MapReduceOptions import MapReduceOptions
from c3.platform.MergeSpec import MergeSpec
from c3.platform.MergeAllSpec import MergeAllSpec
from c3.platform.ReferenceType import ReferenceType
from c3.reliabilityDataModel.FetchResultWithTotalCount import FetchResultWithTotalCount
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.reliabilityMl.ReliabilityMl.Project import ReliabilityMl.Project
from c3.platform.Export import Export
from c3.platform.AdditionalExportSpec import AdditionalExportSpec
from c3.platform.RunCreatedOrUpdatedBatchJob import RunCreatedOrUpdatedBatchJob
from c3.platform.EvalMetricsResult import EvalMetricsResult
from c3.reliabilityMl.AlgorithmicallyComputedTrainingMaskTechnique import AlgorithmicallyComputedTrainingMaskTechnique
from c3.platform.RefreshBatchJob import RefreshBatchJob
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.BatchFetchSpec import BatchFetchSpec
from c3.platform.EvalMetricsBatchCacheSize import EvalMetricsBatchCacheSize
from c3.platform.TimeRange import TimeRange
from c3.platform.ExportDataResult import ExportDataResult
from c3.reliabilityMl.ReliabilityMlDatasetPreparationJob import ReliabilityMlDatasetPreparationJob
from c3.platform.FieldPath import FieldPath
from c3.platform.PushStream import PushStream
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.reliabilityMl.ReliabilityMlDatasetPreparationSpec import ReliabilityMlDatasetPreparationSpec
from c3.platform.RunCreatedOrUpdatedSpec import RunCreatedOrUpdatedSpec
from c3.platform.CreateBatchObjStreamSpec import CreateBatchObjStreamSpec
from c3.physicalAsset.PhysicalAssetRealTimeLocation import PhysicalAssetRealTimeLocation
from c3.platform.RedShiftExportDataSpec import RedShiftExportDataSpec
from c3.platform.TouchSpec import TouchSpec
from c3.reliabilityMl.ReliabilityMlTrainValSplitSpec import ReliabilityMlTrainValSplitSpec
from c3.measurementSeries.BasePhysicalMeasurementSeries import BasePhysicalMeasurementSeries
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.facility.WorkOrder import WorkOrder
from c3.platform.TSEvalSpec import TSEvalSpec
from c3.platform.Type import Type
from c3.platform.Feature.Set import Feature.Set
from c3.dataValidation.DataValidationResultSubjectSpec import DataValidationResultSubjectSpec
from c3.platform.EvalPlan import EvalPlan
from c3.platform.SetType import SetType
from c3.dataValidation.DataValidationExecutionSpec import DataValidationExecutionSpec
from c3.platform.ListMetricsResult import ListMetricsResult
from c3.platform.Exclude import Exclude
from c3.platform.ClearCollectionSpec import ClearCollectionSpec
from c3.dataValidation.DataValidationRun import DataValidationRun
from c3.platform.HtmlRenderer import HtmlRenderer
from c3.platform.MlSubject.OperationJobSpec import MlSubject.OperationJobSpec
from c3.platform.StartImportDataSpec import StartImportDataSpec
from c3.platform.ObjBatch import ObjBatch
from c3.platform.MlModel.Route import MlModel.Route
from c3.platform.MapReduceStatus import MapReduceStatus
from c3.physicalAsset.PhysicalAssetHierarchyDenorm import PhysicalAssetHierarchyDenorm
from c3.platform.HistogramEvaluationResult import HistogramEvaluationResult
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.AclEntry import AclEntry
from c3.dataValidation.DataValidationBatchJob import DataValidationBatchJob
from c3.reliabilityDataModel.FetchResultWithTotalCount import FetchResultWithTotalCount
from c3.platform.RefreshCalcFieldsSpec import RefreshCalcFieldsSpec
from c3.platform.EvaluateSpec import EvaluateSpec
from c3.facility.Facility import Facility
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.EvalFeaturesSpec import EvalFeaturesSpec
from c3.platform.RefreshUniqueIndexesSpec import RefreshUniqueIndexesSpec
from c3.platform.MlProject import MlProject
from c3.physicalAsset.PhysicalAssetRelativePositionHistory import PhysicalAssetRelativePositionHistory
from c3.platform.ExistsSpec import ExistsSpec
from c3.physicalAsset.PhysicalAssetLocationHistory import PhysicalAssetLocationHistory
from c3.platform.EvalMetricsResultStream import EvalMetricsResultStream
from c3.reliabilityDataModel.FacilityReliabilityAssetHierarchicalRelation import FacilityReliabilityAssetHierarchicalRelation
from c3.platform.ExactDimension import ExactDimension
from c3.platform.FetchResult import FetchResult
from c3.dataValidation.DataValidationMapReduceJob import DataValidationMapReduceJob
from c3.platform.EvalMetricsSpec import EvalMetricsSpec
from c3.platform.ExportedObj import ExportedObj
from c3.platform.GenerateDataSpec import GenerateDataSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.reliabilityMl.ReliabilityAssetToModelRelation import ReliabilityAssetToModelRelation
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Metric import Metric
from c3.platform.ObjError import ObjError
from c3.platform.ValueSpec import ValueSpec
from c3.platform.MlModel import MlModel
from c3.platform.MetricVariable import MetricVariable
from c3.platform.Data import Data
from c3.platform.SchemaInfo import SchemaInfo
from c3.platform.MlSubject import MlSubject
from c3.platform.MlSubject.OperationSpec import MlSubject.OperationSpec
from c3.platform.MetricsStatsJob import MetricsStatsJob
from c3.platform.GetMissingSpec import GetMissingSpec
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.reliabilityMl.ReliabilityMlFeaturePreparationSpec import ReliabilityMlFeaturePreparationSpec
from c3.platform.RefreshDefaultFieldsSpec import RefreshDefaultFieldsSpec
from c3.platform.RefreshAnalyticsSpec import RefreshAnalyticsSpec
from c3.physicalAsset.PhysicalAssetLocation import PhysicalAssetLocation
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.TimeseriesStats import TimeseriesStats
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ExportDataSpec import ExportDataSpec
from c3.platform.Promise import Promise
from c3.reliabilityMl.SensorReportSpec import SensorReportSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Stream import Stream
from c3.platform.EvalMetricSpec import EvalMetricSpec
from c3.platform.FetchResult import FetchResult
from c3.sensor.Sensor import Sensor
from c3.platform.RefreshAclsSpec import RefreshAclsSpec
from c3.platform.RemoveAllSpec import RemoveAllSpec
from c3.reliabilityDataModel.AssetOnboardingSourceFile import AssetOnboardingSourceFile
from c3.reliabilityDataModel.ReliabilityAssetSensorHierarchicalRelation import ReliabilityAssetSensorHierarchicalRelation
from c3.platform.Transaction import Transaction
from c3.platform.SetBuilder import SetBuilder
from c3.reliabilityDataModel.ReliabilityAsset3dmodel import ReliabilityAsset3dmodel
from c3.platform.EvaluateArrowStreamSpec import EvaluateArrowStreamSpec
from c3.reliabilityDataModel.AssetDocument import AssetDocument
from c3.platform.Pair import Pair
from c3.platform.AccessControlEntity import AccessControlEntity
from c3.dataValidation.DataValidationRule import DataValidationRule
from c3.platform.ObjList import ObjList
from c3.reliabilityDataModel.ReliabilityAssetHierarchicalRelation import ReliabilityAssetHierarchicalRelation
from c3.reliabilityMl.ReliabilityAssetAlert import ReliabilityAssetAlert
from c3.platform.StreamType import StreamType
from c3.platform.Import import Import
from c3.measurementSeries.PointPhysicalMeasurementSeries import PointPhysicalMeasurementSeries
from c3.platform.Meta import Meta
from c3.platform.RefreshCalcFieldsBatchJob import RefreshCalcFieldsBatchJob
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FetchResult import FetchResult
from c3.reliabilityDataModel.ReliabilityAssetSensorRelation import ReliabilityAssetSensorRelation
from c3.platform.ImportDataSpec import ImportDataSpec
from c3.platform.RollupMetricSpec import RollupMetricSpec
from c3.reliabilityDataModel.ExpectedSensor import ExpectedSensor
from c3.platform.EntityType import EntityType
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.physicalAsset.PhysicalAssetHierarchyRelation import PhysicalAssetHierarchyRelation
from c3.platform.EvalFeatureSpec import EvalFeatureSpec
from c3.platform.Filter import Filter
from c3.platform.CheckReferencesSpec import CheckReferencesSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.CellTuple import CellTuple
from c3.platform.ValueType import ValueType
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.EvaluateResult import EvaluateResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SimpleMetric import SimpleMetric
from c3.platform.RefreshDepsSpec import RefreshDepsSpec
from c3.dataValidation.DataValidationRuleset import DataValidationRuleset
from c3.reliabilityMl.ReliabilityMlDatasetPreparationRun import ReliabilityMlDatasetPreparationRun
from c3.reliabilityMl.SensorDataReport import SensorDataReport
from c3.platform.Dimension import Dimension
from c3.platform.RefreshAnalyticsBatchJob import RefreshAnalyticsBatchJob
from c3.platform.Feature import Feature
from c3.dataValidation.DataValidationResult import DataValidationResult
from c3.reliabilityMl.ReliabilityMlMaskPreparationSpec import ReliabilityMlMaskPreparationSpec
from c3.platform.RefreshUniqueIndexesBatchJob import RefreshUniqueIndexesBatchJob
from c3.platform.ArrayType import ArrayType
from c3.platform.TsInvalidation import TsInvalidation
from c3.reliabilityDataModel.AssetClass import AssetClass
from c3.reliabilityDataModel.ReliabilityAssetEvent import ReliabilityAssetEvent
from c3.platform.Promise import Promise
from c3.platform.MlOperationRun import MlOperationRun
from c3.reliabilityDataModel.ReliabilityAssetCharacteristicValue import ReliabilityAssetCharacteristicValue
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.ImportDataResult import ImportDataResult
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.SecondaryDsUpsert import SecondaryDsUpsert
from c3.platform.MetricsCacheRefreshJob import MetricsCacheRefreshJob
from c3.platform.ScanSpec import ScanSpec
from c3.platform.RefreshDefaultFieldsBatchJob import RefreshDefaultFieldsBatchJob
from c3.platform.VersionEdit import VersionEdit
from c3.physicalAsset.PhysicalAssetRelativePosition import PhysicalAssetRelativePosition
from c3.reliabilityDataModel.ReliabilityAssetImportance import ReliabilityAssetImportance

# Python definitions for the C3 type ReliabilityAsset


class ReliabilityAsset(PhysicalAsset, MlSubject, AssetOnboardingMeta, FilterableByFacility, DataValidationSubject, ReliabilityMlDatasetPreparationHelper):
    """
    @inheritdoc
    
    @remarks this represents a made instance of ReliabilityAsset
    """
    
    id: Optional[str]
    """
    The id of this instance.
    """

    assetOnboardingSourceFile: Optional[AssetOnboardingSourceFile]=None
    """
    Latest uploaded asset hierarchy file or spreadsheet containing the entity.
    """

    configurationLastUpdated: Optional[datetime]=None
    """
    Indicates when this asset was last updated in the asset configuration
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

    facilityFilterPaths: Optional[Array[str]]=None
    """
    @inheritdoc
    """

    dataValidationRuns: Optional[Array[DataValidationRun]]=None
    """
    All {@link DataValidationRun}s created for this asset.
    Should be created using {@link DataValidationRuleset#validate}.
    They are sorted in descending order of creation date, i.e. the latest
    {@link DataValidationRun} will be the first entry in
    this array.
    """

    latestDataValidationRun: Optional[DataValidationRun]=None
    """
    The latest {@link DataValidationRun}. Also, the first
    element in the {@link dataValidationRuns} array.
    """

    datasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None
    """
    All {@link ReliabilityMlDatasetPreparationRun}s created as a result of
    calling {@link prepareMlDatasets} or {@link prepareMlDatasetsBatch}.
    They are sorted in descending order of created date, i.e. the latest
    {@link ReliabilityMlDatasetPreparationRun} will be the first entry in
    this array.
    """

    latestDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None
    """
    The latest {@link ReliabilityMlDatasetPreparationRun}. Also, the first
    element in the {@link #datasetPreparationRuns} array.
    """

    completeDatasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None
    """
    The {@link #datasetPreparationRuns} that have status `COMPLETE`.
    """

    latestCompleteDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None
    """
    The latest run in {@link #completeDatasetPreparationRuns}.
    """

    completeRiskDatasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None
    """
    The {@link #datasetPreparationRuns} that have status `COMPLETE` project.id 'reliabilityRisk'.
    """

    latestCompleteRiskDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None
    """
    The latest run in {@link #latestCompleteRiskDatasetPreparationRun}.
    """

    countOfCompleteDatasetPreparationRuns: Optional[int]=None
    """
    The count of {@link #completeDatasetPreparationRuns}.
    """

    datasetPreparationStatus: Optional[str]=None
    """
    Represents the current status of data preparation based on the {@link #datasetPreparationRuns}.
    If there is a completed run, the status is COMPLETE. Otherwise, it is the status of the latest run.
    """

    acl: Optional[Array[AclEntry]]=None
    """
    List of {@link AclEntry} entries governing who can read/update/remove Objs.
    """

    typeIdent: Optional[str]=None
    """
    Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
    of its base type's typeIdent
    """

    locationHistory: Optional[Array[PhysicalAssetLocationHistory]]=None
    """
    The historical location/address for the asset.
    """

    location: Optional[PhysicalAssetLocation]=None
    """
    The current location/address for this asset.
    """

    description: Optional[str]=None
    """
    Description of the asset.
    """

    realTimeLocations: Optional[Array[PhysicalAssetRealTimeLocation]]=None
    """
    Real-time location data for a moving asset.
    """

    parentRelations: Optional[Array[ReliabilityAssetHierarchicalRelation]]=None
    """
    All incoming {@link ReliabilityAssetHierarchicalRelation}s.
    """

    childRelations: Optional[Array[ReliabilityAssetHierarchicalRelation]]=None
    """
    All outgoing {@link ReliabilityAssetHierarchicalRelation}s.
    """

    denormAncestors: Optional[Array[PhysicalAssetHierarchyDenorm]]=None
    """
    Ancestors in the asset hierarchy throughout history.
    """

    denormDescendants: Optional[Array[PhysicalAssetHierarchyDenorm]]=None
    """
    Descendants in the asset hierarchy throughout history.
    """

    relativePositionHistory: Optional[Array[PhysicalAssetRelativePositionHistory]]=None
    """
    The historical relative positions of this physical asset.
    """

    relativePosition: Optional[PhysicalAssetRelativePosition]=None
    """
    The current relative position of this physical asset.
    """

    measurements: Optional[Array[BasePhysicalMeasurementSeries]]=None
    """
    Physical measurement series related to this asset.
    """

    pointMeasurements: Optional[Array[PointPhysicalMeasurementSeries]]=None
    """
    Point measurement series for time-series metrics related to the asset.
    """

    events: Optional[Array[ReliabilityAssetEvent]]=None
    """
    {@link ReliabilityAssetEvent}s belonging directly to this asset.
    """

    childSensorRelations: Optional[Array[PhysicalAssetHierarchyRelation]]=None
    """
    The {@link Sensor}s associated with this {@link PhysicalAsset}.
    
    This field establishes the relationship between the physical asset and its associated sensors,
    using a filter to only include sensors in the relation (where the type of relation is 'SENSOR').
    """

    assetClass: Optional[AssetClass]=None
    """
    The {@link AssetClass} this asset belongs to.
    """

    hierarchyTemplateAssetId: Optional[str]=None
    """
    The id set by {@link AssetHierarchyTemplate} to identify this asset in relation to the template's hierarchy.
    This id is unique within each hierarchy produced by a specific {@link AssetHierarchyTemplate} .
    """

    relDenormAncestors: Optional[Array[ReliabilityAssetHierarchyDenorm]]=None
    """
    All ancestors in the hierarchy throughout history.
    """

    currentRelDenormAncestors: Optional[Array[ReliabilityAssetHierarchyDenorm]]=None
    """
    All current ancestors in the hierarchy, excluding {@link Sensor}s.
    """

    currentAncestorsAndSelf: Optional[Array[ReliabilityAsset]]=None
    """
    All current ancestors in the hierarchy and this asset.
    """

    relDenormDescendants: Optional[Array[ReliabilityAssetHierarchyDenorm]]=None
    """
    All descendants in the asset hierarchy throughout history.
    """

    currentRelDenormDescendants: Optional[Array[ReliabilityAssetHierarchyDenorm]]=None
    """
    Current descendants in the asset hierarchy, excluding {@link Sensor}s.
    """

    currentChildrenAndSelf: Optional[Array[ReliabilityAsset]]=None
    """
    This field should be used instead of #currentRelDenormDescendants because {@link ReliabilityAssetHierarchyDenorm} isn't created for nodes without edges.
    """

    numCurrentDescendants: Optional[int]=None
    """
    Number of current descendants in the asset hierarchy
    """

    currentChildren: Optional[Array[ReliabilityAsset]]=None
    """
    The current direct children of this asset.
    """

    currentSensorHierarchicalRelations: Optional[Array[ReliabilityAssetSensorHierarchicalRelation]]=None
    """
    Relations to {@link Sensor}s currently directly linked to this asset.
    """

    sensorHierarchicalRelations: Optional[Array[ReliabilityAssetSensorHierarchicalRelation]]=None
    """
    Relations to {@link Sensor}s directly linked to this asset.
    """

    currentSensorDenormDescendants: Optional[Array[ReliabilityAssetSensorHierarchicalRelation]]=None
    """
    Current descendants in the asset hierarchy that are {@link Sensor}s.
    """

    sensorRelations: Optional[Array[ReliabilityAssetSensorRelation]]=None
    """
    All {@link Sensor}s ever clustered to this {@link ReliabilityAsset}.
    """

    currentSensorRelations: Optional[Array[ReliabilityAssetSensorRelation]]=None
    """
    Current {@link Sensor}s clustered to this {@link ReliabilityAsset}.
    """

    depth: Optional[int]=None
    """
    The depth of this asset in the hierarchy.
    """

    hierarchyClassification: Optional[str]=None
    """
    A classification of what level of hierarchy this asset belongs to.
    """

    functionalLocation: Optional[str]=None
    """
    A label for this asset which indicates the functional location/usage that this asset represents.
    """

    linked3DModel: Optional[ReliabilityAsset3dmodel]=None
    """
    The 3D model linked to this asset.
    """

    linked3DModelToDisplay: Optional[ReliabilityAsset3dmodel]=None
    """
    The 3D model linked to this asset, or the 3D model linked to the asset class if no 3D model is linked to this asset.
    """

    currentParentRelations: Optional[Array[ReliabilityAssetHierarchicalRelation]]=None
    """
    Current incoming {@link ReliabilityAssetHierarchicalRelation}s.
    """

    numChildRelations: Optional[int]=None
    """
    Count of outgoing {@link ReliabilityAssetHierarchicalRelation}s.
    """

    currentChildRelations: Optional[Array[ReliabilityAssetHierarchicalRelation]]=None
    """
    Current outgoing {@link ReliabilityAssetHierarchicalRelation}s.
    """

    facilityRelations: Optional[Array[FacilityReliabilityAssetHierarchicalRelation]]=None
    """
    All incoming {@link FacilityReliabilityAssetHierarchicalRelation}s, if any. Only relevant for the "top level" of the asset hierarchy.
    """

    currentFacilityRelations: Optional[Array[FacilityReliabilityAssetHierarchicalRelation]]=None
    """
    Current incoming {@link FacilityReliabilityAssetHierarchicalRelation}s, if any. Only relevant for the "top level" of the asset hierarchy.
    """

    directWorkOrders: Optional[Array[WorkOrder]]=None
    """
    {@link WorkOrder}s belonging directly to this asset.
    """

    regionName: Optional[str]=None
    """
    The name of the region this asset is related to.
    """

    members: Optional[Array[Member]]=None
    """
    List of {@link Member}'s linked to this {@link ReliabilityAsset}.
    """

    capacity: Optional[ExactDimension]=None
    """
    The capacity of the asset.
    """

    documents: Optional[Array[AssetDocument]]=None
    """
    All the {@link AssetDocument}s associated with this asset.
    """

    facility: Optional[Facility]=None
    """
    The ancestor {@link Facility} associated with this {@link ReliabilityAsset}.
    """

    rootAsset: Optional[ReliabilityAsset]=None
    """
    Gets the ancestor root {@link ReliabilityAsset} associated with this {@link ReliabilityAsset}.
    `currentRelDenormAncestors.(isRoot == true).distance` represents the depth of the ancestor.
    """

    parentAsset: Optional[ReliabilityAsset]=None
    """
    Gets the direct parent associated with this {@link ReliabilityAsset}.
    """

    characteristics: Optional[Array[ReliabilityAssetCharacteristicValue]]=None
    """
    Collection characteristic values associated with a given reliability asset.
    """

    assetImportanceLevel: Optional[ReliabilityAssetImportance]=None
    """
    The importance level of the asset, which is used to determine the asset's criticality.
    """

    currentModelRelations: Optional[Array[ReliabilityAssetToModelRelation]]=None
    """
    All current model relations for this asset.
    """

    riskModelValidationRelations: Optional[Array[ReliabilityAssetToRiskModelValidationRelation]]=None
    """
    All model validation relations for reliabilityRisk models for this asset.
    """

    currentReliabilityRiskModelRelations: Optional[Array[ReliabilityAssetToRiskModelRelation]]=None
    """
    All current model relations for reliabilityRisk models for this asset.
    """

    alerts: Optional[Array[ReliabilityAssetAlert]]=None
    """
    Alerts belonging to this asset and its descendant assets.
    """

    countOfLiveProjects: Optional[int]=None
    """
    Count of projects that the {@link ReliabilityAssetToModelRelation}s with status 'CHAMPION' belong to.
    """

    reliabilityRiskModelRelations: Optional[Array[ReliabilityAssetToRiskModelRelation]]=None
    """
    All model relations for reliabilityRisk models for this asset.
    """

    totalModelCount: Optional[int]=None
    """
    Count of #currentModelRelations. Models type or status not considered. Used in the UI.
    """

    modelRelations: Optional[Array[ReliabilityAssetToModelRelation]]=None
    """
    All model relations for this asset.
    """

    latestAlert: Optional[ReliabilityAssetAlert]=None
    """
    Most recent alert belonging directly to this asset
    """

    directAlerts: Optional[Array[ReliabilityAssetAlert]]=None
    """
    Alerts belonging directly to this asset.
    """

    hasCurrentModelRelations: Optional[bool]=None
    """
    Whether the asset has any #currentModelRelations.
    """

    mutedModels: Optional[int]=None
    """
    Count of champion {@link ReliabilityMlModel}s that are muted.
    """

    countOfProjects: Optional[int]=None
    """
    Count of projects that the {@link ReliabilityAssetToModelRelation}s belong to.
    """
    def __init__(self, id: Optional[str]=None, assetOnboardingSourceFile: Optional[AssetOnboardingSourceFile]=None, configurationLastUpdated: Optional[datetime]=None, versionEdits: Optional[Array[VersionEdit]]=None, name: Optional[str]=None, meta: Optional[Meta]=None, version: Optional[int]=None, typeWithBindings: Optional[Type]=None, facilityFilterPaths: Optional[Array[str]]=None, dataValidationRuns: Optional[Array[DataValidationRun]]=None, latestDataValidationRun: Optional[DataValidationRun]=None, datasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None, latestDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None, completeDatasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None, latestCompleteDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None, completeRiskDatasetPreparationRuns: Optional[Array[ReliabilityMlDatasetPreparationRun]]=None, latestCompleteRiskDatasetPreparationRun: Optional[ReliabilityMlDatasetPreparationRun]=None, countOfCompleteDatasetPreparationRuns: Optional[int]=None, datasetPreparationStatus: Optional[str]=None, acl: Optional[Array[AclEntry]]=None, typeIdent: Optional[str]=None, locationHistory: Optional[Array[PhysicalAssetLocationHistory]]=None, location: Optional[PhysicalAssetLocation]=None, description: Optional[str]=None, realTimeLocations: Optional[Array[PhysicalAssetRealTimeLocation]]=None, parentRelations: Optional[Array[ReliabilityAssetHierarchicalRelation]]=None, childRelations: Optional[Array[ReliabilityAssetHierarchicalRelation]]=None, denormAncestors: Optional[Array[PhysicalAssetHierarchyDenorm]]=None, denormDescendants: Optional[Array[PhysicalAssetHierarchyDenorm]]=None, relativePositionHistory: Optional[Array[PhysicalAssetRelativePositionHistory]]=None, relativePosition: Optional[PhysicalAssetRelativePosition]=None, measurements: Optional[Array[BasePhysicalMeasurementSeries]]=None, pointMeasurements: Optional[Array[PointPhysicalMeasurementSeries]]=None, events: Optional[Array[ReliabilityAssetEvent]]=None, childSensorRelations: Optional[Array[PhysicalAssetHierarchyRelation]]=None, assetClass: Optional[AssetClass]=None, hierarchyTemplateAssetId: Optional[str]=None, relDenormAncestors: Optional[Array[ReliabilityAssetHierarchyDenorm]]=None, currentRelDenormAncestors: Optional[Array[ReliabilityAssetHierarchyDenorm]]=None, currentAncestorsAndSelf: Optional[Array[ReliabilityAsset]]=None, relDenormDescendants: Optional[Array[ReliabilityAssetHierarchyDenorm]]=None, currentRelDenormDescendants: Optional[Array[ReliabilityAssetHierarchyDenorm]]=None, currentChildrenAndSelf: Optional[Array[ReliabilityAsset]]=None, numCurrentDescendants: Optional[int]=None, currentChildren: Optional[Array[ReliabilityAsset]]=None, currentSensorHierarchicalRelations: Optional[Array[ReliabilityAssetSensorHierarchicalRelation]]=None, sensorHierarchicalRelations: Optional[Array[ReliabilityAssetSensorHierarchicalRelation]]=None, currentSensorDenormDescendants: Optional[Array[ReliabilityAssetSensorHierarchicalRelation]]=None, sensorRelations: Optional[Array[ReliabilityAssetSensorRelation]]=None, currentSensorRelations: Optional[Array[ReliabilityAssetSensorRelation]]=None, depth: Optional[int]=None, hierarchyClassification: Optional[str]=None, functionalLocation: Optional[str]=None, linked3DModel: Optional[ReliabilityAsset3dmodel]=None, linked3DModelToDisplay: Optional[ReliabilityAsset3dmodel]=None, currentParentRelations: Optional[Array[ReliabilityAssetHierarchicalRelation]]=None, numChildRelations: Optional[int]=None, currentChildRelations: Optional[Array[ReliabilityAssetHierarchicalRelation]]=None, facilityRelations: Optional[Array[FacilityReliabilityAssetHierarchicalRelation]]=None, currentFacilityRelations: Optional[Array[FacilityReliabilityAssetHierarchicalRelation]]=None, directWorkOrders: Optional[Array[WorkOrder]]=None, regionName: Optional[str]=None, members: Optional[Array[Member]]=None, capacity: Optional[ExactDimension]=None, documents: Optional[Array[AssetDocument]]=None, facility: Optional[Facility]=None, rootAsset: Optional[ReliabilityAsset]=None, parentAsset: Optional[ReliabilityAsset]=None, characteristics: Optional[Array[ReliabilityAssetCharacteristicValue]]=None, assetImportanceLevel: Optional[ReliabilityAssetImportance]=None, currentModelRelations: Optional[Array[ReliabilityAssetToModelRelation]]=None, riskModelValidationRelations: Optional[Array[ReliabilityAssetToRiskModelValidationRelation]]=None, currentReliabilityRiskModelRelations: Optional[Array[ReliabilityAssetToRiskModelRelation]]=None, alerts: Optional[Array[ReliabilityAssetAlert]]=None, countOfLiveProjects: Optional[int]=None, reliabilityRiskModelRelations: Optional[Array[ReliabilityAssetToRiskModelRelation]]=None, totalModelCount: Optional[int]=None, modelRelations: Optional[Array[ReliabilityAssetToModelRelation]]=None, latestAlert: Optional[ReliabilityAssetAlert]=None, directAlerts: Optional[Array[ReliabilityAssetAlert]]=None, hasCurrentModelRelations: Optional[bool]=None, mutedModels: Optional[int]=None, countOfProjects: Optional[int]=None) -> None: ...

    def renderer(self) -> Union[HtmlRenderer]:
    """
    Get a renderer that will show info on the metrics available for this source object to HTML.
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
    def fromJson(cls, json: any) -> Union[ReliabilityAsset]:
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
    def fromJsonString(cls, json: str) -> Union[ReliabilityAsset]:
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
    def fromXmlString(cls, xml: str) -> Union[ReliabilityAsset]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[ReliabilityAsset]:
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
    def replaceType(self, old: Type, new: Type) -> ReliabilityAsset:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ReliabilityAsset:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ReliabilityAsset:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ReliabilityAsset]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ReliabilityAsset]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> ReliabilityAsset:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ReliabilityAsset:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ReliabilityAsset:
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
    def validateObj(self) -> ReliabilityAsset:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> ReliabilityAsset:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> ReliabilityAsset:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> ReliabilityAsset:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> ReliabilityAsset:
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
    def withoutFieldAtPath(self, path: str) -> ReliabilityAsset:
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
    def withoutField(self, field: str) -> ReliabilityAsset:
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
    def withoutField(self, field: FieldType) -> ReliabilityAsset:
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
    def withoutFields(self, fields: Array[str]) -> ReliabilityAsset:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> ReliabilityAsset:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> ReliabilityAsset:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> ReliabilityAsset:
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
    def defaultField(self, field: str) -> ReliabilityAsset:
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
    def defaultField(self, field: FieldType) -> ReliabilityAsset:
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
    def unsetField(self, field: str) -> ReliabilityAsset:
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
    def unsetField(self, field: FieldType) -> ReliabilityAsset:
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
    def removeField(self, field: str) -> ReliabilityAsset:
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
    def removeField(self, field: FieldType) -> ReliabilityAsset:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> ReliabilityAsset:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> ReliabilityAsset:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> ReliabilityAsset:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> ReliabilityAsset:
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
    def mergeJson(self, json: any) -> ReliabilityAsset:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> ReliabilityAsset:
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
    def sumObj(self, other: Obj, deep: bool=None) -> ReliabilityAsset:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[ReliabilityAsset]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[ReliabilityAsset]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[ReliabilityAsset]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[ReliabilityAsset]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[ReliabilityAsset]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, ReliabilityAsset]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, ReliabilityAsset]]:
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
    def toBuilder(self) -> ObjBuilder[ReliabilityAsset]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[ReliabilityAsset]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> ReliabilityAsset:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> ReliabilityAsset:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> ReliabilityAsset:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> ReliabilityAsset:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> ReliabilityAsset:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> ReliabilityAsset:
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
    def make(cls, s: str) -> Union[ReliabilityAsset]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> ReliabilityAsset:
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
    def afterMake(self) -> ReliabilityAsset:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> ReliabilityAsset:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[ReliabilityAsset]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> ReliabilityAsset:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
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
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[ReliabilityAsset]:
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
    def fetch(cls, filter: Filter) -> FetchResult[ReliabilityAsset]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[ReliabilityAsset]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[ReliabilityAsset]]]:
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
    def features(cls) -> Union[Stream[Feature]]:
    """
    All features defined for this type
    """
        ...
    def evalFeature(self, feature: str, spec: EvalFeatureSpec=None) -> Union[Data]:
    """
    Evaluate i.e. retrieve data for a given feature for this instance
    @param feature
           feature name used to read data
    @param spec
           optional parameter specification to customize eval
    @return
           evaluated data
    
    e.g:
    Assuming that there are two features named **activePowerAvgFeature** and **generatorRotationSpeedAvgFeature** on a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1** is the id of one of those windturbines, then:
    ```python
    wt1 = c3.WindTurbine.make({'id':'TURBINE-1'})
    wt1.evalFeature(feature="activePowerAvgFeature", start='2018-01-01', end='2022-01-01')
    wt1.evalFeature(feature="generatorRotationSpeedAvgFeature", start='2018-01-01', end='2022-01-01')
    ```
    """
        ...
    def evalFeatureSet(self, featureSet: Feature.Set, spec: EvalFeatureSpec=None) -> Union[Data]:
    """
    Evaluate i.e. retrieve data for a given feature set for this instance
    @param featureSet
           featureSet used to read data
    @param spec
           optional parameter specification to customize eval
    @return
           evaluated data
    
    e.g:
    Assuming that there are two features named **activePowerAvgFeature** and **generatorRotationSpeedAvgFeature** on a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1** is the id of one of those windturbines.
    We create (or already have a) Feature.Set like below:
    ```python
    wt1 = c3.WindTurbine.make({'id':'TURBINE-1'})
    feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
    feature_set.materialize(True)
    wt1.evalFeatureSet(featureSet=feature_set, start='2018-02-01', end='2018-03-01')
    ```
    """
        ...
    @overload
    @classmethod
    def evalFeatureSetBatch(cls, batch: Array[ReliabilityAsset], featureSet: Feature.Set, spec: EvalFeatureSpec=None) -> Union[Data]:
    """
    Evaluate i.e. retrieve data for a given feature set and list of instances
    order of subject column in returned data will be same as that of provided subject batch
    
    @param batch
           subjects used to read data
    @param featureSet
           feature set used to read data
    @param spec
           optional parameter specification to customize eval
    @return
           evaluated data
    
    e.g:
    Let's assume that we create (or already have a) Feature.Set like below:
    ```python
    feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
    feature_set.materialize(True)
    c3.WindTurbine.evalFeatureSetBatch(batch=['TURBINE-1', 'TURBINE-1'],  featureSet=feature_set, start='2018-02-01', end='2018-03-01')
    ```
    
    For the same feature column, if the ValueType of the retrieved data is not the same across the subjects in the batch,
    it'll be unable to stitch the data, and an error will be thrown. The error message will provide information about the ValueTypes
    and the first 10 subjects that has such valueType in the evaluated data.
    User should refer to the definition of feature/feature set and query each subject to identify the root cause of this inconsistency.
    
    e.g. {Obj: [sub1, sub2], Double: [sub3]} means for a feature column, the ValueType for sub1 and sub2 are Obj,
    while for sub3 the ValueType is Double.
    """
        ...
    @overload
    @classmethod
    def evalFeatureSetBatch(cls, filter: str, featureSet: Feature.Set, spec: EvalFeatureSpec=None) -> Union[Data]:
    """
    Evaluate i.e. retrieve data for a given feature set and instances satisfying a filter expression
    Please note that the output will have subjects ordered in the same way as fetched from the db using the provided filter.
    By default, its in the ascending order of the `id` field.
    
    @param featureSet
           feature set used to read data
    @param filter
           filter used to filter subjects associated with the feature set
    @param spec
           optional parameter specification to customize eval
    @return
           evaluated data
    
    e.g:
    Let's assume that we create (or already have a) Feature.Set like below:
    ```python
    feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
    feature_set.materialize(True)
    c3.WindTurbine.evalFeatureSetBatch(filter="name=='TURBINE-1'", featureSet=feature_set, start='2018-02-01', end='2018-03-01')
    ```
    Please note that all the nuances of merging multiple features together are part of the Feature.Set itself.
    The above call will allow us to eval feature set along in a specific timerange exposed via EvalFeatureSpec.
    
    For the same feature column, if the ValueType of the retrieved data is not the same across the subjects in the batch,
    it'll be unable to stitch the data, and an error will be thrown. The error message will provide information about the ValueTypes
    and the first 10 subjects that has such valueType in the evaluated data.
    User should refer to the definition of feature/feature set and query each subject to identify the root cause of this inconsistency.
    
    e.g. {Obj: [sub1, sub2], Double: [sub3]} means for a feature column, the ValueType for sub1 and sub2 are Obj,
    while for sub3 the ValueType is Double.
    """
        ...
    def evalFeatures(self, features: Array[str], spec: EvalFeaturesSpec=None) -> Union[Data]:
    """
    Evaluate i.e. retrieve data for a list of features for this instance
    @param features
           collection of feature names used to read data. This collection must contain distinct features whose order
           will determine the order of columns in the output Data. Duplicate features are disallowed.
    @param spec
           optional parameter specification to customize eval
    @return
           evaluated data
    
    e.g:
    ```python
    wt.evalFeatures(features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
    ```
    """
        ...
    @overload
    @classmethod
    def evalFeaturesBatch(cls, batch: Array[ReliabilityAsset], features: Array[str], spec: EvalFeaturesSpec=None) -> Union[Data]:
    """
    Evaluate i.e. retrieve data for a list of features and list of instances
    @param batch
           subjects used to read data
    @param features
           collection of feature names used to read data. This collection must contain distinct features whose order
           will determine the order of columns in the output Data. Duplicate features are disallowed.
    @param spec
           optional parameter specification to customize eval
    @return
           evaluated data
    
    e.g:
    ```python
    c3.WindTurbine.evalFeaturesBatch(batch=['TURBINE-1', 'TURBINE-1'], features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
    ```
    """
        ...
    @overload
    @classmethod
    def evalFeaturesBatch(cls, filter: str, features: Array[str], spec: EvalFeaturesSpec=None) -> Union[Data]:
    """
    Evaluate i.e. retrieve data for a list of features and instances satisfying a filter expression
    @param features
           collection of feature names used to read data. This collection must contain distinct features whose order
           will determine the order of columns in the output Data. Duplicate features are disallowed.
    @param filter
           filter used to filter subjects associated with the features
    @param spec
           optional parameter specification to customize eval
    @return
           evaluated data
    
    e.g:
    ```python
    c3.WindTurbine.evalFeaturesBatch(filter="name=='TURBINE-2'", features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
    ```
    """
        ...
    def dataFromDates(self, dates: Array[datetime]=None) -> Union[Data]:
    """
    Creates a Data instance with two columns, subject and datetimes
    """
        ...
    def dataFromTimeRanges(self, timeRanges: Array[TimeRange]=None) -> Union[Data]:
    """
    Creates a Data instance with two columns, subject and timeranges
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
    def fromString(cls, s: str) -> Union[ReliabilityAsset]:
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
    def routes(self, project: MlProject, statusFilter: str=None, skipValidation: bool=None) -> Union[Array[MlModel.Route]]:
    """
    Retrieve the {@link MlModel.Route routes} currently deployed on the subject, in the given {@link MlProject}.
    
    Usage:
    ```python
    # returns all champion routes for that WindTurbine in the project "PredictiveMaintenance"
    pm_project = c3.MlProject.forId("PredictiveMaintenance")
    routes = windturbine.routes(statusFilter="label == 'CHAMPION'", project=pm_project)
    ```
    
    @param project
       the project from which the routes are retrieved.
    @param statusFilter
       optional filter to get a subset of the routes; the filter is applied on the {@link MlDeploymentStatus}
       field of the {@link MlModel.Route routes}.
    @param skipValidation
       optional flag to skip validation of the project.
    @returns the routes deployed for the subject.
    
    @see MlModel.Router#routes
    """
        ...
    def models(self, project: MlProject, statusFilter: str=None) -> Union[Array[MlModel]]:
    """
    Retrieve the {@link MlModel models} currently deployed on the subject, in the given {@link MlProject}.
    
    Usage:
    ```python
    # returns all champion models for that WindTurbine in the project "PredictiveMaintenance"
    pm_project = c3.MlProject.forId("PredictiveMaintenance")
    models = windturbine.models(statusFilter="label == 'CHAMPION'", project=pm_project)
    ```
    
    @param project
       the project from which the models are retrieved.
    @param statusFilter
       optional filter to get a subset of the models; the filter is applied on the {@link MlModel.Route.Status}
       of the {@link MlModel.Route routes} applicable to the subject.
    @returns the models deployed for the subject.
    
    @see MlModel.Router#models
    """
        ...
    @overload
    @classmethod
    def modelsPerSubject(cls, subjects: Array[MlSubject], project: MlProject, statusFilter: str=None) -> Union[Map[str, Array[MlModel]]]:
    """
    Retrieve the {@link MlModel models} currently deployed on each subject in the passed array, in the given
    {@link MlProject}.
    
    @param subjects
       the subjects for which the models are retrieved.
    @param project
       the project from which the models are retrieved.
    @param statusFilter
       optional filter to get a subset of the models; the filter is applied on the {@link MlModel.Route.Status}
       of the {@link MlModel.Route routes} applicable to the subjects.
    @return a map where the keys are the ids of the subjects and the values are the models deployed on that subject.
    
    @see #models
    """
        ...
    @overload
    @classmethod
    def modelsPerSubject(cls, subjectFilter: str, project: MlProject, statusFilter: str=None) -> Union[Map[str, Array[MlModel]]]:
    """
    Retrieve the {@link MlModel models} currently deployed on each subject in the passed array, in the given
    {@link MlProject}.
    
    @param subjectFilter
             the filter to select subjects for which the models are retrieved
    @param project
             the project from which the models are retrieved;
    @param statusFilter
             optional filter to get a subset of the models; the filter is applied on the {@link MlModel.Route.Status}
             of the {@link MlModel.Route routes} applicable to the subjects
    @param project
             the project from which the models are retrieved;
    @return a map where the keys are the ids of the subjects and the values are the models deployed on that subject
    
    @see #models
    """
        ...
    @classmethod
    def routesSubjectsPerModel(cls, subjects: Array[MlSubject], spec: MlSubject.OperationSpec) -> Map[str, Map[str, Array[MlSubject]]]:
    """
    Retrieve the {@link MlModel models} and {@link MlModel.Route routes} currently deployed on each subject in the passed array.
    It is used by {@link MlSubject.process}, {@link MlSubject.processBatch}, {@link MlSubject.interpret}, {@link MlSubject.interpretBatch}
    
    @param subjects
             the subjects for which the models and routes are retrieved.
    @param spec
             Configuration to retrieve models and routes based on filters.
    @return a map where the keys are ids of model and value is a map, whose keys are ids of routes and value is
    a list of {@link MlSubject}s.
    """
        ...
    @classmethod
    def projects(cls) -> Union[Array[MlProject]]:
    """
    @return the list of {@link MlProject} that are assigned to this type.
    
    @see MlProject#subjectType
    """
        ...
    def process(self, spec: MlSubject.OperationSpec) -> MlSubject.ProcessResult:
    """
    Compute predictions for the subject with the models that are currently deployed on that subject.
    
    Usage:
    ```python
    result = windturbine.process(
       start="2022-06-01",
       end="2022-06-05",
       statusFilter="label == 'CHALLENGER'",
       project="PredictiveMaintenance"
    )
    
    @param spec
             options to configure the time range of predictions and the {@link MlModel models} to use
    @return the predictions for each model
    
    @see #models
    @see #routes
    """
        ...
    def processWithChampion(self, spec: MlSubject.OperationSpec) -> MlSubject.ProcessResult:
    """
    Compute predictions for the subject with the {@link MlModel.Route.Status.Label#CHAMPION CHAMPION} model for the
    given {@link MlProject}. If there is no such model, the output will contain no prediction.
    
    @param spec
             options to configure the time range of predictions;
             note that the {@link MlSubject.OperationSpec#statusFilter} will be overridden
    @return the predictions generated by the CHAMPION model
    
    @see #process
    """
        ...
    @classmethod
    def processBatch(cls, spec: MlSubject.OperationSpec, subjects: Array[MlSubject]=None) -> MlSubject.ProcessResult:
    """
    Compute predictions for a batch of subjects. This is invoked within {@link MlSubject.ProcessJob#processBatch}
    
    The method optimizes processing by fetching the models before performing batch inference, and achieves best
    performance for batches of subjects that have same models deployed to them (see {@link MlModel.Route}).
    
    **NOTE**: The method is synchronous and is not meant to be used for large population. For large-scale inference
    tasks use {@link MlSubject.ProcessJob} (see {@link startProcessJob}).
    """
        ...
    @classmethod
    def startProcessJob(cls, spec: MlSubject.OperationJobSpec) -> MlOperationRun[MlSubject.OperationJob.Run]:
    """
    Create and start a {@link MlSubject.ProcessJob} to compute the predictions for multiple subjects
    
    @param project
             options for the {@link MlSubject.ProcessJob}
    @param spec
             options for the {@link MlSubject.ProcessJob}
    @return a handle to the asynchronous job execution.
    """
        ...
    def interpret(self, spec: MlSubject.OperationSpec) -> MlSubject.InterpretResult:
    """
    Computes predictions and interpretation results for the subject with the models that are currently deployed
    on that subject.
    
    Usage:
    ```python
    result = windturbine.interpret(
       start="2022-06-01",
       end="2022-06-05",
       statusFilter="label == 'CHALLENGER'",
       project="PredictiveMaintenance"
    )
    
    @param spec
             options to configure the time range of predictions and the {@link MlModel models} to use
    @return the predictions and interpretations for each model
    
    @see #models
    @see #routes
    """
        ...
    def interpretWithChampion(self, spec: MlSubject.OperationSpec) -> MlSubject.InterpretResult:
    """
    Computes predictions and interpretation results for the subject with the
    {@link MlModel.Route.Status.Label#CHAMPION CHAMPION} model for the given {@link MlProject}. If there is no
    such model, the output will contain no prediction/interpretations.
    
    @param spec
             options to configure the time range of predictions;
             note that the {@link MlSubject.OperationSpec#statusFilter} will be overridden
    @return the predictions generated by the CHAMPION model
    
    @see #interpret
    """
        ...
    @classmethod
    def interpretBatch(cls, spec: MlSubject.OperationSpec, subjects: Array[MlSubject]=None) -> MlSubject.InterpretResult:
    """
    Compute predictions and interpretations for a batch of subjects. This is invoked within {@link MlSubject.InterpretJob#processBatch}
    
    The method optimizes processing by fetching the models before performing batch inference, and achieves best
    performance for batches of subjects that have same models deployed to them (see {@link MlModel.Route}).
    
    **NOTE**: The method is synchronous and is not meant to be used for large population. For large-scale inference
    tasks use {@link MlSubject.InterpretJob} (see {@link startInterpretJob}).
    """
        ...
    @classmethod
    def startInterpretJob(cls, spec: MlSubject.OperationJobSpec) -> MlOperationRun[MlSubject.OperationJob.Run]:
    """
    Create and start a {@link MlSubject.InterpretJob} to compute the predictions and interpretations for
    multiple subjects.
    
    @param project
             {@link MlProject} to retrieve the models for
    @param spec
             options for the {@link MlSubject.InterpretJob}
    @return a handle to the asynchronous job execution.
    """
        ...
    @classmethod
    def fetchOvi(cls, spec: FetchSpec=None) -> Union[Any]:
    """
    Used internally to fetch as a stream (e.g. FetchResultOvi)
    """
        ...
    def get(self, include: str=None) -> Union[ReliabilityAsset]:
    """
    Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
    
    @param include
              Optional include spec to retrieve.
    @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
            those fields will be returned. Otherwise the entire obj will be returned.
    """
        ...
    def getSpecific(self, include: str=None) -> Union[ReliabilityAsset]:
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
    def getMissing(self, spec: GetMissingSpec) -> ReliabilityAsset:
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
    def getDirect(self, include: str=None) -> Union[ReliabilityAsset]:
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
    def applyReverseEdit(self, versionEdit: VersionEdit) -> ReliabilityAsset:
    """
    Applies a reverse edit (e.g. VersionEdit) to an instance.
    
    @param versionEdit
           Reverse edit to apply
    
    @return The instance after applying the reverse edit.
    """
        ...
    def create(self, spec: UpsertSpec=None) -> Union[ReliabilityAsset]:
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
    def createBatch(cls, objs: Array[ReliabilityAsset], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def createBatchObjStream(cls, objs: Stream[ReliabilityAsset], spec: CreateBatchObjStreamSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def update(self, srcObj: ReliabilityAsset=None, spec: UpsertSpec=None) -> Union[ReliabilityAsset]:
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
    def upsert(self, srcObj: ReliabilityAsset=None, spec: UpsertSpec=None) -> Union[ReliabilityAsset]:
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
    def merge(self, spec: MergeSpec=None) -> Union[ReliabilityAsset]:
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
    def merge(self, mergeInclude: str, spec: MergeSpec=None) -> Union[ReliabilityAsset]:
    """
    Merges an instance of a C3 type if it exists and creates it if it doesn't.
    
    @param mergeInclude
              Used to control which fields from the type are are to be merged.  Only the fields indicated in the
              mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
              However, fields that wouldn't be persisted as part of the operation are ignored.
    
              IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
              merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
              even if they are null in the input.  Any existing data for included null input fields will be removed.
    @param spec
              Various parameters that control the operation of function.
    @return The created or updated obj.
    """
        ...
    def touch(self, spec: TouchSpec=None) -> Union[ReliabilityAsset]:
    """
    Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
    
    @param spec
              Various parameters that control the operation of function.
    
    @return The created or updated obj.
    """
        ...
    @classmethod
    def updateBatch(cls, objs: Array[ReliabilityAsset], srcObjs: Array[ReliabilityAsset]=None, spec: UpsertSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def updateObjs(cls, objs: Callable[[], Union[Array[ReliabilityAsset]]], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def upsertBatch(cls, objs: Array[ReliabilityAsset], srcObjs: Array[ReliabilityAsset]=None, spec: UpsertSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def upsertObjs(cls, objs: Callable[[], Union[Array[ReliabilityAsset]]], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def touchBatch(cls, objs: Array[ReliabilityAsset], spec: TouchSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def mergeBatch(cls, objs: Array[ReliabilityAsset], spec: MergeSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def mergeBatch(cls, objs: Array[ReliabilityAsset], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[ReliabilityAsset]]:
    """
    Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
    UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
    Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
    merge} function.
    
    If the operation fails errors will be reported in the returned {@link ObjList}.
    
    @param objs
              Objs to merge.
    @param mergeInclude
              Used to control which fields from the type are are to be merged.  Only the fields indicated in the
              mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
              However, fields that wouldn't be persisted as part of the operation are ignored.
    
              IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
              merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
              even if they are null in the input.  Any existing data for included null input fields will be removed.
    @param spec
              Various parameters that control the operation of function.
    @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
            true.  Only the id field will be populated.
    
    @see Mergespec#csvInclude
    """
        ...
    @classmethod
    def mergeObjs(cls, objs: Callable[[], Union[Array[ReliabilityAsset]]], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
              Used to control which fields from the type are are to be merged.  Only the fields indicated in the
              mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
              However, fields that wouldn't be persisted as part of the operation are ignored.
    
              IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
              merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
              even if they are null in the input.  Any existing data for included null input fields will be removed.
    @param spec
              Various parameters that control the operation of function.
    @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
            true.  Only the id field will be populated.
    
    @see Mergespec#csvInclude
    """
        ...
    @overload
    @classmethod
    def mergeAll(cls, mergeObj: ReliabilityAsset, spec: MergeAllSpec=None) -> Union[int]:
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
    def mergeAll(cls, mergeObj: ReliabilityAsset, mergeInclude: str, spec: MergeAllSpec=None) -> Union[int]:
    """
    Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
    controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as in
    {@link FetchSpec#filter}.  If not specified, all instances will be merged.
    
    @param mergeInclude
              Used to control which fields from the type are are to be merged.  Only the fields indicated in the
              mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
              However, fields that wouldn't be persisted as part of the operation are ignored.
    
              IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
              merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
              even if they are null in the input.  Any existing data for included null input fields will be removed.
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
    def removeBatch(cls, objs: Array[ReliabilityAsset], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def replace(cls, objs: Array[ReliabilityAsset], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityAsset]]:
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
    def unremove(self) -> Union[ReliabilityAsset]:
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
    def beforeCreate(cls, objs: Array[ReliabilityAsset]) -> ObjList[ReliabilityAsset]:
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
    def beforeUpdate(cls, objs: Array[ReliabilityAsset]) -> ObjList[ReliabilityAsset]:
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
    def beforeRemove(cls, objs: Array[ReliabilityAsset]) -> ObjList[ReliabilityAsset]:
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
    def afterCreate(cls, objs: Array[ReliabilityAsset]) -> Union[Array[ObjError]]:
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
    def afterUpdate(cls, objs: Array[ReliabilityAsset]) -> Union[Array[ObjError]]:
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
    def afterRemove(cls, objs: Array[ReliabilityAsset]) -> Union[Array[ObjError]]:
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
    def startImportData(cls, spec: StartImportDataSpec=None) -> PushStream[ReliabilityAsset]:
    """
    @return a push stream to import instances of this type.
    """
        ...
    @classmethod
    def startImportDataWithStats(cls, spec: StartImportDataSpec=None) -> PushStreamWithStats[ReliabilityAsset]:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[ReliabilityAsset]:
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
    def withoutIdentity(self) -> Union[ReliabilityAsset]:
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
    def typeOfBatch(cls, objs: Array[ReliabilityAsset]) -> Union[Array[EntityType]]:
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
    def dbEcho(cls, template: ReliabilityAsset=None, count: int=None, sendBack: bool=None) -> Union[int]:
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
    def callbackLogic(cls, objs: Array[ReliabilityAsset], callback: Callable[[Union[ReliabilityAsset]], Union[ReliabilityAsset]]=None) -> ObjList[ReliabilityAsset]:
    """
    Implements a simple logic for Persistable call-backs like before create by looping each input obj and
    calling a transform for it.
    
    
    callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
    """
        ...
    @classmethod
    def afterCallbackLogic(cls, objs: Array[ReliabilityAsset], callback: Callable[[Union[ReliabilityAsset]], Union[ReliabilityAsset]]=None) -> Union[Array[ObjError]]:
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
    @classmethod
    def getFacilityFilter(cls, facilities: Array[Facility]=None) -> Union[str]:
    """
    Get a filter that can be used to filter this type by {@link Facility}.
    
    @param facilities
           The list of {@link Facility}s to filter by.
    @returns
           A string serialized {@link Filter} that can be used to filter this type by {@link Facility}.
    """
        ...
    def fetchDataValidationRuns(self, spec: FetchSpec='{}') -> Union[FetchResult[DataValidationRun]]:
    """
    Fetches the {@link DataValidationRun}s by the current instance {@link DataValidationSubject}.
    
    @param spec
        Extra arguments to specify desired results. Applied on {@link DataValidationRun}.
    @return FetchResult<DataValidationRun>
        The dataValidationRuns from this instance.
    """
        ...
    def getLatestDataValidationRun(self, dataValidationRuleSet: DataValidationRuleset=None) -> Union[DataValidationRun]:
    """
    Fetches the latest {@link DataValidationRun} that is in completed run status. If {@link DataValidationRuleset} is passed in, gets the latest {@link DataValidationRun} with a matching rootRuleSet.
    
    @param dataValidationRuleSet
        {@link DataValidationRuleset} Extra arguments to specify desired results. Applied on {@link DataValidationRun}.
    @return {@link DataValidationRun}
        The latest {@link DataValidationRun} that matches this {@link DataValidationSubject} id.
    """
        ...
    def executeRulesValidation(self, ruleQueue: Array[DataValidationRule], run: DataValidationRun, persistResults: bool=None) -> DataValidationRun:
    """
    Runs the validation for all the {@link DataValidationRule}`s across all the @{DataValidationRuleset}.
    
    @param ruleQueue
        Extra arguments to specify desired results. Applied on {@link DataValidationRun}.
    @param run
        Extra arguments to specify desired results. Applied on {@link DataValidationRun}.
    @param persistResults
        Flag to determine whether results should be persisted.
    """
        ...
    def fetchDataValidationRules(self, spec: DataValidationResultSubjectSpec=None) -> Union[Union[Map[str, Array[DataValidationRule]],Array[DataValidationRule]]]:
    """
    Fetches the all the {@link DataValidationRule}s across all the {@link DataValidationRuleset}s grouped by {@link DataValidationRuleset} or in a flat list of {@link DataValidationRule}s
    
    @param spec
        Extra arguments to specify desired results.
    @return a map<{@link DataValidationRuleset}, [{@link DataValidationRule}]> || [{@link DataValidationRule}]
        Returns a map of all {@link DataValidationRule}s grouped by {@link DataValidationRuleset} or as a flat list of {@link DataValidationRule}s with the possibility of use additional filters to limit the results shown.
    """
        ...
    def fetchDataValidationResults(self, spec: DataValidationResultSubjectSpec=None) -> Union[Union[Map[str, Array[DataValidationResult]],Array[DataValidationResult]]]:
    """
    Fetches the all the {@link DataValidationResult}s across all the {@link DataValidationRuleset}s grouped by {@link DataValidationRuleset} or in a flat list of {@link DataValidationResultSubjectSpec}s
    
    @param spec
        Extra arguments to specify desired results.
    @return a map<{@link DataValidationRuleset}, [{@link DataValidationResult}]> || [{@link DataValidationResult}]
        Returns a map of all {@link DataValidationResult}s grouped by {@link DataValidationRuleset} or as a flat list of {@link DataValidationResult}s with the possibility of use additional filters to limit the results shown.
    """
        ...
    def runDataValidation(self, ruleset: DataValidationRuleset, args: Map[str, Any]=None, spec: DataValidationExecutionSpec=None) -> Union[Union[DataValidationRun,DataValidationBatchJob,DataValidationMapReduceJob]]:
    """
    Used to run data validation on this instance of {@link DataValidationSubject} for a specific ruleset.
    
    @param ruleset
       {@DataValidationRuleset} to use to run data validation
    @param args
       The arguments which are passed into the target {@link DataValidationRule#action action} of each rule.
    @param spec
       Arguments to configure the @{DataValidationMapReduce}
    """
        ...
    @classmethod
    def runRule(cls, run: DataValidationRun, args: Map[str, Any], rule: DataValidationRule=None, persistResults: bool=None) -> Union[DataValidationResult]:
    """
    Helper method used to run a specific rule.
    
    @param run
       current {@DataValidationRun} for the subject
    @param rule
       {@DataValidationRule} to be executed
    @param args
       The arguments which are passed into the target {@link DataValidationRule#action action} of each rule.
    @param persistResults
       Flag to determine whether results should be persisted.
    """
        ...
    def runDataValidationRule(self, rule: DataValidationRule) -> DataValidationResult:
    """
    Used to re run a specific rule and calculate the results of the latest {@link DataValidationRun}.
    
    @param rule
       {@DataValidationRule} to be executed
    @return
       The {@link DataValidationRuleResult} of the rule action.
    """
        ...
    def assignToProject(self, project: ReliabilityMl.Project=None) -> None:
    """
    Function to mark the current entity as a member of the given project, if needed for bookkeeping.
    By default, this function does nothing, but should be overridden by a type that extends this one.
    For an example of usage, see the {@link ReliabilityAsset} remix in the `reliability` package.
    
    @param project
           The {@link ReliabilityMl.Project} to assign this entity to.
    """
        ...
    def getMlStartEnd(self, start: datetime=None, end: datetime=None) -> Union[StrPair]:
    """
    Used internally during the preparation run to determine the start and end dates
    for the dataset preparation. If the {@link ReliabilityMlDatasetPreparationSpec#materializeStart}
    and {@link ReliabilityMlDatasetPreparationSpec#materializeEnd} are provided, then it defaults to this dates,
    otherwise, it defaults to the start and end of the from the earliest and latest data points from
    the {@link PointPhysicalMeasurementSeries} associated with the {@link ReliabilityAsset}.
    
    @param start
           The start datetime for the dataset preparation.
    @param end
           The end datetime for the dataset preparation.
    @return a {@link StrPair} containing the start and end dates as strings.
    """
        ...
    @classmethod
    def getFlatliningPercentage(cls, flatliningTimeSteps: int=None, df: Any=None) -> Union[Any]:
    """
    Given flatliningTimeSteps and a pandas DataFrame, returns the percentage of data that is flatlining.
    If flatliningTimeSteps is less than 0, function will throw an error.
    Returns float or Series depending on shape of the DataFrame
    
    @param flatliningTimeSteps
           The number of time steps to check for flatlining behavior.
    @param df
           The pandas DataFrame to analyze for flatlining.
    @return a float or Series representing the percentage of data that is flatlining.
    """
        ...
    def createSensorFeatures(self, excludeSensors: Array[str]=None, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR', method: str='BEST', additionalRasrs: Array[ReliabilityAssetSensorRelation]=None) -> Union[Array[Feature]]:
    """
    Create {@link Feature}s for all the {@link Sensor}s associated with this
    {@link ReliabilityAsset} through {@link ReliabilityAssetSensorRelation}s.
    If you want to create featues for {@link ReliabilityAssetSensorRelation}s
    that are not associated with this {@link ReliabilityAsset}, then you can
    provide them in the `additionalRasrs` argument.
    Refer to type documentation on {@link ReliabilityMlFeatureCreationMethod}
    for more information on the different methods to create {@link Feature}s for
    the {@link Sensor}s.
    Exact and full documentation on the {@link Feature} creation process may be
    found in {@link ReliabilityAssetSensorRelation#createSensorFeature}, which this
    function simply calls in a loop for all {@link ReliabilityAssetSensorRelation}s.
    """
        ...
    @classmethod
    def createTimeRangeMaskExpression(cls, timeRanges: Array[TimeRange]=None) -> Union[str]:
    """
    Create a {@link Metric} expression which evalutes to 1 for all intervals whose start lies within
    one of the given {@link TimeRange} objects, and 0 elsewhere.
    
    @param timeRanges
           An array of {@link TimeRange} objects to create the mask expression for.
    @return a string representing the metric expression for the time range mask.
    """
        ...
    def prepareInitialFeatureSet(self, spec: ReliabilityMlFeaturePreparationSpec, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR') -> Union[Feature.Set]:
    """
    The {@link Feature.Set} creation process has two main steps:
    - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
    - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
    This function implements logic for the first part of the {@link Feature.Set} creation
    process.
    NOTE: This function is NOT intended to be used by users. It will be called internally
    by {@link prepareFeatures}, which the user is encouraged to always interact with.
    
    @param spec
           The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
    @param start
           The start datetime for feature preparation.
    @param end
           The end datetime for feature preparation.
    @param interval
           The time interval for feature preparation, defaults to QUARTER_HOUR.
    @return a {@link Feature.Set} containing the initial features.
    """
        ...
    def prepareCleanedFeatureSet(self, featureSet: Feature.Set, spec: ReliabilityMlFeaturePreparationSpec, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', sensorAssociationJobId: str='None') -> Union[Feature.Set]:
    """
    The {@link Feature.Set} creation process has two main steps:
    - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
    - Apply the masks on the initial {@link Feature.Set} corresponding to the provided
    {@link ReliabilityMlDatasetPreparationSpec#masksBeforeCleaning}, if the
    {@link ReliabilityMlDatasetPreparationSpec#approach} is `sequential`.
    - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
    This function implements logic for the second part of the {@link Feature.Set} creation
    process.
    NOTE: This function is NOT intended to be used by users. It will be called internally
    by {@link prepareFeatures}, which the user is encouraged to always interact with.
    
    @param featureSet
           The initial {@link Feature.Set} to be cleaned.
    @param spec
           The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
    @param start
           The start datetime for feature preparation.
    @param end
           The end datetime for feature preparation.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for feature preparation, defaults to QUARTER_HOUR.
    @param sensorAssociationJobId
           Optional job ID for sensor association, defaults to None.
    @return a cleaned {@link Feature.Set}.
    """
        ...
    def prepareFeatures(self, spec: ReliabilityMlFeaturePreparationSpec, maskPreparationSpec: ReliabilityMlMaskPreparationSpec, start: datetime=None, end: datetime=None, masksBeforeCleaning: Array[str]=None, interval: str='QUARTER_HOUR', sensorAssociationJobId: str='None') -> Union[Map[str, Feature.Set]]:
    """
    The {@link Feature.Set} creation process has two main steps:
    - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
    - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
    This function implements logic for both aspects of the {@link Feature.Set} creation
    process. Internally, it first calls {@link prepareInitialFeatureSet}, then calls
    {@link prepareMasks} for the provided masksBeforeCleaning, and passes the
    output of these functions into {@link prepareCleanedFeatureSet}.
    NOTE: In the most common implementation of `reliabilityRisk`, the user need not concern
    themselves with this function. It is suggested that the user use this function ONLY if
    they want to define non-standard {@link Feature}s that don't simply return the time
    series data for all the {@link Sensor}s.
    
    @param spec
           The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
    @param start
           The start datetime for feature preparation.
    @param end
           The end datetime for feature preparation.
    @param masksBeforeCleaning
           An array of mask names to apply before cleaning the feature set.
    @param maskPreparationSpec
           The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
    @param interval
           The time interval for feature preparation, defaults to QUARTER_HOUR.
    @param sensorAssociationJobId
           Optional job ID for sensor association, defaults to None.
    @return a map of feature set names to {@link Feature.Set} objects.
    """
        ...
    @classmethod
    def prepareDefaultAssetEventsMask(cls, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR') -> Union[Feature]:
    """
    Helper function to prepare a default {@link Feature}, representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
    a planned/unplanned downtime event.
    These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
    by default are what the {@link Feature} will be created based on.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @return a {@link Feature} representing the default asset events mask.
    """
        ...
    def prepareAssetEventsMask(self, features: Feature.Set, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
    a planned/unplanned downtime event.
    These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
    by default are what the {@link Feature} will be created based on.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the asset events mask.
    """
        ...
    def preparePreAssetEventsMask(self, features: Feature.Set, preAssetEventsWindow: int=None, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
    anomalous/abnormal behavior in a window of time leading up to an unplanned
    downtime event.
    These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
    by default are what the {@link Feature} will be created based on.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param preAssetEventsWindow
           The number of time steps before an asset event to include in the mask.
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the pre-asset events mask.
    """
        ...
    def preparePostAssetEventsMask(self, features: Feature.Set, postAssetEventsWindow: int=None, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
    transient modes of operation immediately following a planned/unplanned downtime event.
    These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
    by default are what the {@link Feature} will be created based on.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param postAssetEventsWindow
           The number of time steps after an asset event to include in the mask.
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the post-asset events mask.
    """
        ...
    def prepareIsAssetNotOperationalMask(self, features: Feature.Set, start: datetime=None, end: datetime=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} was not
    operational (not including planned/unplanned downtime events).
    Such asset operation is usually infer-able from the values in the time series data
    of one or more {@link Sensor}s, for example, "an asset is not operational if the
    RPM is less than 1000".
    By default, it is assumed that the {@link ReliabilityAsset} is constantly operational
    unless it is undergoing planned/unplanned downtime and, therefore, the default
    {@link Feature} will always evaluate to zero, i.e., "the asset is always operational".
    However, if the user wishes to mask periods of data corresponding to the asset not being operational,
    then they can either provide their own upserted {@link Feature}, with its `name` field populated.
    See {@link ReliabilityMlMaskPreparationSpec} for more details.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the asset not operational mask.
    """
        ...
    def prepareAlgorithmicallyComputedTrainingMask(self, features: Feature.Set, start: datetime=None, end: datetime=None, generateAlgorithmicallyComputedTrainingMask: bool=None, algorithmicallyComputedTrainingMaskTechnique: AlgorithmicallyComputedTrainingMaskTechnique=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR') -> Union[Feature.Set]:
    """
    Helper function to optionally prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when the {@link ReliabilityAsset} contains
    anomalous training data.
    By default, it is assumed that the other masks used to mask training data for the
    {@link ReliabilityAsset} already cover all the anomalous periods of operation associated with
    the asset, therefore, the default {@link Feature} will by default evaluate to zero.
    However, if the user wishes to still mask out anomalous periods within the training data algorithmically,
    they can do so by setting {@link ReliabilityMlMaskPreparationSpec#generateAlgorithmicallyComputedTrainingMask}
    to true, and specifying the technique to be used in
    {@link ReliabilityMlMaskPreparationSpec#algorithmicallyComputedTrainingMaskTechnique}. If a technique is not
    specified, the code will default to an Isolation Forest based approach to mask out anomalous periods
    in the training data.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param generateAlgorithmicallyComputedTrainingMask
           Boolean flag indicating whether to generate the algorithmically computed training mask.
    @param algorithmicallyComputedTrainingMaskTechnique
           The technique to use for computing the training mask algorithmically.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @return a {@link Feature.Set} representing the algorithmically computed training mask.
    """
        ...
    def prepareAdHocTrainingMask(self, start: datetime=None, end: datetime=None, features: Feature.Set=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', timeRanges: Array[TimeRange]=None, preIsAssetNotOperationalFeatureOverride: Feature=None, postIsAssetNotOperationalFeatureOverride: Feature=None, overrideFeature: Feature=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data that cannot otherwise be expressed elegantly
    to remove rows of data from training the {@link MlModel}.
    Usually, such situations arise when it is known that there are certain time ranges
    when there is clearly anomalous asset operation, however, it may not be express-able
    as generic rules. In such cases, users have the option to provide {@link TimeRange}s
    in the `timeRanges` argument. Any data within any of the provided {@link TimeRange}s
    will be ignored while training the {@link MlModel}.
    By default, however, it will be assumed that there are no abnormal operating modes
    of the {@link ReliabilityAsset} unless the user provides `timeRanges`.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param timeRanges
           Optional array of {@link TimeRange} objects to exclude from training.
    @param preIsAssetNotOperationalFeatureOverride
           Optional override {@link Feature} for pre-asset not operational check.
    @param postIsAssetNotOperationalFeatureOverride
           Optional override {@link Feature} for post-asset not operational check.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @return a {@link Feature.Set} representing the ad-hoc training mask.
    """
        ...
    def prepareAdHocInferenceMask(self, start: datetime=None, end: datetime=None, features: Feature.Set=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR', postIsAssetNotOperationalFeatureOverride: Feature=None, overrideFeature: Feature=None, timeRanges: Array[TimeRange]=None) -> Union[Feature.Set]:
    """
    Helper function to prepare a materialized {@link Feature.Set} representing a mask
    that aims to remove all rows of data when an {@link MlModel} should NOT make predictions
    for the {@link ReliabilityAsset}. For example, "when the inlet temperature is less than
    150 degrees Fahrenheit and outlet temperature is greater than 100 degrees Fahrenheit,
    we know that there is something obviously wrong with the asset and, therefore, do not
    want to be alerted to it. Suppress ML model outputs at such times".
    By default, however, no such assumption is made. The {@link MlModel} will always make
    predictions, unless the asset is experiencing a planned/unplanned downtime or if it is
    not operational.
    However, if the user wishes to provide their own {@link Feature}, then they can provide
    such a {@link Feature} after having upserted and with the `name` field populated.
    NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
    should be kept for {@link MlModel} training/inference. It should evaluate to one for
    all rows of data that should be ignored for {@link MlModel} training/inference.
    
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @param postIsAssetNotOperationalFeatureOverride
           Optional override {@link Feature} for post-asset not operational check.
    @param overrideFeature
           Optional override {@link Feature} to use instead of the default.
    @param timeRanges
           Optional array of {@link TimeRange} objects to exclude from inference.
    @return a {@link Feature.Set} representing the ad-hoc inference mask.
    """
        ...
    def prepareMask(self, spec: ReliabilityMlMaskPreparationSpec, start: datetime=None, end: datetime=None, maskToApply: str=None, features: Feature.Set=None, masks: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR') -> Union[Feature.Set]:
    """
    Helper function that orchestrates the preparation of all the different types of masks.
    Internally, it prepares the mask for the the specified `maskToApply` using the
    provided spec, and returns a {@link Feature.Set}.
    Internally, it calls the following functions to prepare the mask:
    - {@link prepareAssetEventsMask}
    - {@link preparePreAssetEventsMask}
    - {@link preparePostAssetEventsMask}
    - {@link prepareIsAssetNotOperationalMask}
    - {@link prepareAdHocTrainingMask}
    - {@link prepareAdHocInferenceMask}
    - {@link prepareAlgorithmicallyComputedTrainingMask}
    
    All the masks that have been applied before a specific mask is prepared
    are available in the `masks` field. Depending on the `approach`, `masksBeforeCleaning`
    and `masksAfterCleaning` fields of the {@link ReliabilityMlMaskPreparationSpec},
    either the initial {@link Feature.Set} or the cleaned {@link Feature.Set} will be available
    in the `features` field.
    
    @param spec
           The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param maskToApply
           The name of the mask to prepare.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masks
           A map of mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @return a {@link Feature.Set} representing the prepared mask.
    """
        ...
    def prepareMasks(self, spec: ReliabilityMlMaskPreparationSpec, start: datetime=None, end: datetime=None, masksToApply: Array[str]=None, features: Feature.Set=None, masksApplied: Map[str, Feature.Set]=None, interval: str='QUARTER_HOUR') -> Union[Map[str, Feature.Set]]:
    """
    Helper function to prepare materialized {@link Feature.Set}s for all the different types
    of masks necessary for robust training and performance of {@link MlModel}s. Internally,
    this function calls {@link prepareMask} for each mask in `masksToApply`. It, then, aggregates
    the {@link Feature.Set}s resulting from calls to all the mask-related functions into a `map` object.
    
    The order in which these functions are called is determined by the `approach`, `masksBeforeCleaning`
    and `masksAfterCleaning` fields of the {@link ReliabilityMlMaskPreparationSpec}.
    
    @param spec
           The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
    @param start
           The start datetime for the mask preparation.
    @param end
           The end datetime for the mask preparation.
    @param masksToApply
           An array of mask names to prepare.
    @param features
           The {@link Feature.Set} containing the features to work with.
    @param masksApplied
           A map of already applied mask names to {@link Feature.Set} objects.
    @param interval
           The time interval for mask preparation, defaults to QUARTER_HOUR.
    @return a map of mask names to {@link Feature.Set} objects.
    """
        ...
    def prepareTarget(self, spec: ReliabilityMlTargetPreparationSpec, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR') -> Union[Map[str, Feature.Set]]:
    """
    Usually, in `reliabilityRisk`, it is not suggested to train and deploy supervised
    {@link MlModel}s. However, sometimes, they perform  better than the default,
    semi-supervised {@link MlModel}s. In such cases, use this function to define the target
    variable according to the {@link ReliabilityMlTargetPreparationSpec}.
    
    @param spec
           The {@link ReliabilityMlTargetPreparationSpec} containing target preparation configuration.
    @param start
           The start datetime for target preparation.
    @param end
           The end datetime for target preparation.
    @param interval
           The time interval for target preparation, defaults to QUARTER_HOUR.
    @return a map of target names to {@link Feature.Set} objects.
    """
        ...
    def prepareAlertContext(self, project: ReliabilityMl.Project=None, start: datetime=None, end: datetime=None, interval: str='QUARTER_HOUR', overrideFeatures: Array[Feature]=None) -> Union[Map[str, Feature.Set]]:
    """
    Helper function to prepare a {@link Feature.Set}s for alertContext, which is required to generate
    accurate alerts in production. By default, this API prepares a set of features that fetches the
    riskScore, riskScoreNormalized and alert corresponding to the deployed CHAMPION model. This is required
    when {@link ReliabilityMlModel#process} is called for a specified "start:end" period - alertContext
    is used to provide the {@link ReliabilityRiskMl.Pipeline#alertingPipe} with information about previously
    persisted riskScores and alerts, which it uses to accurately determine when a new alert should be generated
    within the "start:end" window.
    
    @param project
           The {@link ReliabilityMl.Project} to prepare alert context for.
    @param start
           The start datetime for alert context preparation.
    @param end
           The end datetime for alert context preparation.
    @param interval
           The time interval for alert context preparation, defaults to QUARTER_HOUR.
    @param overrideFeatures
           Optional array of override {@link Feature} objects to use.
    @return a map of feature names to {@link Feature.Set} objects for alert context.
    """
        ...
    def trainValSplit(self, featureSet: Feature.Set, spec: ReliabilityMlTrainValSplitSpec, start: datetime, end: datetime) -> Union[Map[str, TimeRange]]:
    """
    Once all the {@link Feature.Set}s are defined and materialized, there is one final step
    before one can begin training {@link MlModel}s, i.e., splitting the datasets into
    training and validation. This function will split the datasets according to the
    {@link ReliabilityMlTrainValSplitSpec}.
    NOTE: It is strongly suggested that users NOT call this function directly. This will be
    internally called by {@link prepareMlDatasets}.
    
    @param featureSet
           The {@link Feature.Set} to split into training and validation sets.
    @param spec
           The {@link ReliabilityMlTrainValSplitSpec} containing split configuration.
    @param start
           The start datetime for the split.
    @param end
           The end datetime for the split.
    @return a map of split names to {@link TimeRange} objects.
    """
        ...
    def updateSpecForSensorAssociation(self, spec: ReliabilityMlDatasetPreparationSpec) -> ReliabilityMlDatasetPreparationSpec:
    """
    This function is called from {@link #doPrepareMlDatasets} if the provided {@link ReliabilityMlDatasetPreparationSpec}
    has a `sensorAssociationJobId' provided and its `doNotUpdateSpecForSensorAssociation` is set to `false`,
    to update the fields on the data prep spec, and return
    a new data prep spec with the updated fields.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} to update for sensor association.
    @return the updated {@link ReliabilityMlDatasetPreparationSpec}.
    """
        ...
    @classmethod
    def initializeJobSpec(cls, job: ReliabilityMlDatasetPreparationJob) -> Union[ReliabilityMlDatasetPreparationJob]:
    """
    Updates the {@link ReliabilityMlDatasetPreparationJob} with fields that are required for a dataset preparation job.
    Creates a map of {@link ReliabilityAsset#id}s to {@link ReliabilityMlDatasetPreparationRun}s
    from the given {@link ReliabilityMlDatasetPreparationSpec#targetAssetFilter}, so that we can name
    the dataset preparation runs and link them to the tracking job. The created
    {@link ReliabilityMlDatasetPreparationRun}s are persisted in the database, and the map is
    set in the {@link ReliabilityMlDatasetPreparationSpec#datasetRunMap datasetRunMap} field
    of the {@link ReliabilityMlDatasetPreparationJob#spec}.
    @param job
           The {@link ReliabilityMlDatasetPreparationJob} that will use this map.
    @returns the updated {@link ReliabilityMlDatasetPreparationJob}.
    """
        ...
    def beforePrepareMlDatasets(self, spec: ReliabilityMlDatasetPreparationSpec, job: ReliabilityMlDatasetPreparationJob=None) -> ReliabilityMlDatasetPreparationSpec:
    """
    Any asset-specific modifications that need to be done to the
    {@link ReliabilityMlDatasetPreparationSpec} may be made in this function.
    By default, there is no modification to the spec. This function is useful
    when invoking the dataset preparation job in bulk, i.e., for many assets,
    but there are modifications to be made to the spec such as an
    asset-specific feature creation process to set
    {@link ReliabilityMlFeaturePreparationSpec#overrideFeatures}.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} to modify.
    @param job
           The {@link ReliabilityMlDatasetPreparationJob} associated with this preparation.
    @return the modified {@link ReliabilityMlDatasetPreparationSpec}.
    """
        ...
    def doPrepareMlDatasets(self, spec: ReliabilityMlDatasetPreparationSpec) -> Union[ReliabilityMlDatasetPreparationRun]:
    """
    This function contains the logic of preparing clean datasets for model training.
    Rarely requires modification.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
    @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
    """
        ...
    def afterPrepareMlDatasets(self, spec: ReliabilityMlDatasetPreparationSpec, run: ReliabilityMlDatasetPreparationRun) -> Union[ReliabilityMlDatasetPreparationRun]:
    """
    Post-preparation of datasets for model training, there may be a requirement to
    modify the {@link ReliabilityMlDatasetPreparationRun}, for example. These
    requirements are specific to each deployment. As such, the base function will
    always make no modifications. However, this function may be overridden in a deployment
    to transform the outputs to be specific to that deployment.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} used for preparation.
    @param run
           The {@link ReliabilityMlDatasetPreparationRun} to modify.
    @return the modified {@link ReliabilityMlDatasetPreparationRun}.
    """
        ...
    def prepareMlDatasets(self, spec: ReliabilityMlDatasetPreparationSpec=None, job: ReliabilityMlDatasetPreparationJob=None) -> Union[ReliabilityMlDatasetPreparationRun]:
    """
    Synchronous method to prepare ML Datasets for a given {@link ReliabilityAsset}. It
    is, however, STRONGLY SUGGESTED that users use the safer and distributed version of
    the same function, i.e., {@link prepareMlDatasetsBatch}.
    The order of execution of operations is:
    ```
    1. beforePrepareMlDatasets
       - Users may choose to modify the dataset preparation spec on a per-asset basis, if necessary.
    2. doPrepareMlDatasets
       - This contains the logic for preparing clean datasets for training the machine learning model.
         Most often, this is not modified by deployments.
    3. afterPrepareMlDatasets
       - Post-completion of dataset preparation, there may be some modifications needed to be made, in which case,
         this function may be implemented by the user.
    ```
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
    @param job
           The {@link ReliabilityMlDatasetPreparationJob} associated with this preparation.
    @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
    """
        ...
    @classmethod
    def prepareMlDatasetsBatch(cls, spec: ReliabilityMlDatasetPreparationSpec=None, options: MapReduceOptions=None) -> Union[ReliabilityMlDatasetPreparationJob]:
    """
    Distributed and safer version of {@link prepareMlDatasets}. It is safer because
    it does not block threads on the leader nodes of the {@link App}. Since the task
    nodes will pick up this task, it will not affect the availability and performance
    of the {@link App} for other, more urgent requests.
    
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
    @param options
           The {@link MapReduceOptions} for distributed processing.
    @return a {@link ReliabilityMlDatasetPreparationJob} representing the batch preparation job.
    """
        ...
    @classmethod
    def validateMaskExpression(cls, assetId: str, expressions: Array[str]=None) -> bool:
    """
    Helper method to validate a mask expression when specified. Since this expression will
    be used to create a {@link Feature}, we need to ensure that the user input is valid.
    
    @param assetId
           The ID of the {@link ReliabilityAsset} to validate the expression for.
    @param expressions
           An array of mask expressions to validate.
    @return true if all expressions are valid, false otherwise.
    """
        ...
    @classmethod
    def parseMaskExpression(cls, expression: str=None) -> Union[str]:
    """
    Transform mask expression into a format that can be used in a metric expression
    
    @param expression
           Expression that needs to be transformed
    @return string representing the expression transformed
    """
        ...
    @classmethod
    def prepareMlDatasetsAndSensorDataReports(cls, assets: Array[ReliabilityAsset], spec: ReliabilityMlDatasetPreparationSpec) -> Union[ReliabilityMlDatasetPreparationRun]:
    """
    This function will prepare the {@link ReliabilityMlDatasetPreparationRun} for the
    given {@link ReliabilityAsset}s and {@link ReliabilityMlDatasetPreparationSpec}.
    This will create the {@link Feature.Set}s that can be used for training on the given
    {@link ReliabilityAsset}s.
    
    @param assets
           An array of {@link ReliabilityAsset} objects to prepare datasets for.
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
    @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
    """
        ...
    def prepareSensorDataReports(self, spec: ReliabilityMlDatasetPreparationSpec, overrideTimeRange: TimeRange=None) -> ReliabilityMlDatasetPreparationSpec:
    """
    Prepares {@link SensorDataReport}s for the {@link ReliabilityAsset} based on the provided
    {@link ReliabilityMlDatasetPreparationSpec}. This function is called when preparing ML datasets.
    It validates that the spec contains {@link ReliabilityMlDatasetPreparationSpec#sensorDataReportThresholds},
    {@link ReliabilityMlDatasetPreparationSpec#materializeStart}, and
    {@link ReliabilityMlDatasetPreparationSpec#materializeEnd}, and executes
    {@link ReliabilityAsset#generateSensorDataReport}.
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec} that contains the thresholds and time range.
    @param overrideTimeRange
           The time range to use for the sensor data reports, if materializeStart and materializeEnd are not provided
           in the spec.
    @returns
          The updated {@link ReliabilityMlDatasetPreparationSpec} with the sensor data reports prepared. If the
          spec does not contain the required fields, or a time range is not provided, the unmodified spec is returned.
    """
        ...
    def fetchRelevantAssets(self, level: int='1', isAbsolute: bool='false') -> Union[FetchResult[ReliabilityAsset]]:
    """
    Get assets 'relevant' mainly for modeling purposes for the current asset.
    
    What defines the relevance of an asset?
    
    A given asset is relevant to current asset if it is present in vicinity of the current asset. There are two ways to define this vicinity:
    1. Relative level - Use `level` to climb up the hierarchy from the current asset's level and fetch all the descendant assets of the resolved ancestor asset.
    2. Absolute level - Use `level` as the absolute depth to resolve ancestor asset and fetch all it's descendant assets.
    
    
                         {GrandParent}
                          /          \
                    {Parent1}      {Parent2}
                       /   \           \
                      /     \           \
                     /       \           \
             {selectedAsset} {sibling1}  {sibling2}
               /          \
           {child1}      {child2}
    
    For example, considering the above hierarchy for the 'selectedAsset':
    - `fetchRelevantAssets()` with default parameters resolves to assets [sibling1, child1, child2].
    - `fetchRelevantAssets(0, true)` resolves to assets [GrandParent, Parent1, Parent2, sibling1, sibling2, child1, child2].
    
    @param level
             The integer level which will be used to calculate the depth at which ancestor asset will be resolved.
             level has to >=0, negative level results in an error thrown. Defaults to 1.
    @param isAbsolute
              A flag to indicates whether to interpret the level as 'relative' or 'absolute'. Defaults to false.
                - if set to true, ancestor will be resolved at the provided level of the hierarchy.
                - if set to false, provided level will be used to climb up the hierarchy from the current asset.
    
    @returns A {@link FetchResult#of} {@link ReliabilityAsset}s.
    """
        ...
    @classmethod
    def fetchSensorsForSelectedAssets(cls, assets: Array[str], spec: FetchSpec=None, sensorDataReportsFilter: str=None) -> Union[FetchResultWithTotalCount[any]]:
    """
    This function returns a list of objects prepared from {@link ReliabilityAssetSensorRelation}s for a given list of {@link ReliabilityAsset}s.
    The FetchSpec has limited functionality as `offset`, `limit`, and `filter` parameters are respected as is, whereas `include` is not.
    One must practice caution in providing `{@link FetchSpec#filter}` that is compatible with {@link ReliabilityAssetSensorRelation} schema.
    
    @param assets
       List of {@link ReliabilityAsset} ids.
    @param spec
       - A {@link FetchSpec} for the fetch call which will be called on {@link ReliabilityAssetSensorRelation}.
    @param sensorDataReportsFilter (used especially for UI)
       A string filter that can be applied on {@link SensorDataReport} to get all the sensors that have been selected or excluded already in the UI.
    
    @return {@link FetchResultWithTotalCount} with sensor details as json objs in the following format:
        ```json
         sensorObj: {
            id: ...
            from.name: ...
            to.name: ...
            sensorId: ...
            latestValue: ...
          }
        ```
    """
        ...
    def populateJobPreparationSettings(self, job: ReliabilityMlDatasetPreparationJob, spec: ReliabilityMlDatasetPreparationSpec, run: ReliabilityMlDatasetPreparationRun) -> Union[ReliabilityMlDatasetPreparationJob]:
    """
    The purpose of this method is to populate the job.preparationSettings field on dataset runs that are
    created on the backend, such as a Jupyter Notebook or the static console. The preparationSettings will
    be populated with the given {@link ReliabilityMlDatasetPreparationRun run} and {@link ReliabilityMlDatasetPreparationSpec spec}.
    
    @param job
           The {@link ReliabilityMlDatasetPreparationJob job} to attach the preparationSettings
    @param spec
           The {@link ReliabilityMlDatasetPreparationSpec spec} to generate the datasets
    @param run
           The {@link ReliabilityMlDatasetPreparationRun dataset preparation run}
    @returns The {@link ReliabilityMlDatasetPreparationJob job} with the preparationSettings field populated
    """
        ...
    def myUserCanRead(self, getIfAclIsMissing: bool=None) -> bool:
    """
    Determines the the current user can read this instance. Note that it requires `acl` field to be populated.
    If unsure set `getIfAclIsMissing` parameter.
    
    @param getIfAclIsMissing
           'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
           instance was previously retrieved from the db.
    
    @return `true` if current user can read this instance.
    """
        ...
    def myUserCanUpdate(self, getIfAclIsMissing: bool=None) -> bool:
    """
    Determines the the current update can read this instance. Note that it requires `acl` field to be populated.
    If unsure set `getIfAclIsMissing` parameter.
    
    @param getIfAclIsMissing
           'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
           instance was previously retrieved from the db.
    
    @return `true` if current user can update this instance.
    """
        ...
    def myUserCanRemove(self, getIfAclIsMissing: bool=None) -> bool:
    """
    Determines the the current user can remove this instance. Note that it requires `acl` field to be populated.
    If unsure set `getIfAclIsMissing` parameter.
    
    @param getIfAclIsMissing
           'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
           instance was previously retrieved from the db.
    
    @return `true` if current user can remove this instance.
    """
        ...
    def myUserCanModifyAcl(self, getIfAclIsMissing: bool=None) -> bool:
    """
    Determines the the current user can modify the ACL for this instance. Note that it requires `acl` field to
    be populated. If unsure set `getIfAclIsMissing` parameter.
    
    @param getIfAclIsMissing
           'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
           instance was previously retrieved from the db.
    
    @return `true` if current user can read this instance.
    """
        ...
    @classmethod
    def isAclEnforcedForMyUser(cls, type: Type) -> bool:
    """
    `true` if ACL enforced for current user and the specified type.
    """
        ...
    @classmethod
    def defaultAclForMyUser(cls, type: Type) -> Union[AclEntry]:
    """
    Gets the default acl for newly created objs of the specified type for my user.  For a type that is currently
    enforcing acl (e.g. enabled via {@link EnableAclPrivilege} or {@link Ann.Db#enforceAcl}, if the obj is being
    created by anyone other than the authorizer, the default entry will grant the creator full access.  This
    default entry will be removed if `populateAcl` is called and that creates entries specified by the
    {@link AclPrivilege} entries.
    
    @param type
           Type to get the default acl for.  If this type does not mixin {@link AclEnabled}, then null will be
           returned.
    
    @return the default acl for newly created objs of the specified type for my user.
    """
        ...
    @classmethod
    def populateAcl(cls, objs: Array[ReliabilityAsset]=None) -> Union[int]:
    """
    Populates the acl entries for the specified Objs. The acl entries will be populated based on the
    {@link AclPrivilege} entries defined for the type.
    
    @param objs
           List of objs to populate the acls for. If null, the acls for all entries will be populated.
    """
        ...
    @classmethod
    def refreshAcls(cls, spec: RefreshAclsSpec=None) -> Union[Obj]:
    """
    Refreshes acl entries for the specified Objs as determined by the {@link RefreshAclsSpec}. The acl entries
    will be refreshed based on the {@link AclPrivilege} entries defined for the type.
    
    @param spec
             Indicates which objs to refresh acls for along with other options that control the operation.
    @return
             If {@link RefreshAclsSpec.async} is true, returns the BatchJob that was created/used for processing the
             request, null otherwise.
    """
        ...
    def grantMemberReadUpdateRemove(self, member: AccessControlEntity) -> ReliabilityAsset:
    """
    Creates (or updates existing) entry with all but modify ACL permissions.
    """
        ...
    def mergeAclEntry(self, entry: AclEntry) -> ReliabilityAsset:
    """
    Merges an acl entry to the acl for an obj but does not persist the changes.  If an existing entry for the
    member exists with the same source as the new one, the permissions granted by the new one will be added to
    that entry, otherwise a new entry will be created/added.
    
    @return the obj with the new acl after merging the indicated entry.
    """
        ...
    def mergeAclEntries(self, entries: Array[AclEntry]) -> ReliabilityAsset:
    """
    Merges acl entries to the acl for an obj but does not persist the changes.  If an existing entry for the
    member exists with the same source as the new one, the permissions granted by the new one will be added to
    that entry, otherwise a new entry will be created/added.
    
    @return the obj with the new acl after merging the indicated entry.
    """
        ...
    @classmethod
    def hasPrivileges(cls) -> bool:
    """
    @return True if there are {@link AclPrivilege} entries defined for the type.
    """
        ...
    @classmethod
    def skipAuthz(cls) -> bool:
    """
    Returns true if the current user is allowed to skip authorization checks to access this instance without checking ACLs.
    """
        ...
    @classmethod
    def modifyAcl(cls) -> None:
    """
    This private action is only used to check for ACL access when using Permission with dataPermission
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
    @classmethod
    def createData(cls, assetId: str, numberOfSensors: int, assetName: str=None, start: datetime=None, end: datetime=None, eventHourOffset: float=None) -> None:
    """
    Method to create test data. Creates data for {@link ReliabilityAsset}, {@link Sensor}, {@link ReliabilityAssetSensorRelation},
    {@link ReliabilityAssetHierarchicalRelation}, {@link PointPhysicalMeasurementSeries} and {@link PointMeasurement}
    such that we can evaluate features on sensor data for machine learning model training
    @param assetId
       ID to assign to new asset.
    @param numberOfSensors
       Number of sensors to create
    @param assetName
       Name to assign to new asset.
    @param start
       Start of time period to generate data for.
    @param end
       End of time period to generate data for.
    @param eventHourOffset
       Time offset in hours to add to shift the start of events from. If set to zero, events
       will be created at the same time the anomalous sensor data starts. Set this to be less than 24 hours
       to avoid creating events with starts after the `end`.
    """
        ...
    @classmethod
    def removeData(cls, assetId: str) -> None:
    """
    Method to remove test data created by {@link ReliabilityAsset#createData}
    
    @param assetId
       ID of the asset whose test data should be removed.
    """
        ...
    @classmethod
    def createSensorAssociatonData(cls) -> Union[Map[str, Any]]:
    """
    Method to create test data for sensor association. Creates data for {@link ReliabilityAsset}, {@link Sensor},
    {@link ReliabilityAssetSensorRelation}, {@link ReliabilityAssetHierarchicalRelation}, {@link PointPhysicalMeasurementSeries}
    and {@link PointMeasurement}, for both the asset and external sensors, such that we can run the sensor association job using
    the data
    
    @return A map containing the created test data.
    """
        ...
    def getSensorForExpectedSensor(self, expectedSensor: ExpectedSensor) -> Union[Sensor]:
    """
    @param expectedSensor
           The expected sensor to find a matching sensor for.
    @return the {@link Sensor} for this asset which fills the role of the given {@link ExpectedSensor}.
    """
        ...
    def getSensorsForExpectedSensors(self, expectedSensors: Array[ExpectedSensor]=None) -> Union[Map[str, Sensor]]:
    """
    /**
     Retrieves {@link Sensor}s associated with this asset that correspond to {@link ExpectedSensor} specifications.
    
     This method matches {@link Sensor}s to their {@link ExpectedSensor}s based on defined roles.
     The returned map uses the ID of each {@link ExpectedSensor} as a key, with the corresponding {@link Sensor} as the value.
    
     @return A map where keys are {@link ExpectedSensor#id} values and values are matching {@link Sensor}
             instances. Expected sensors that have no corresponding actual sensor are excluded from the map.
    """
        ...
    @classmethod
    def createAsset(cls, assetName: str, parent: Union[ReliabilityAsset,Facility], waitForHierarchyCalcs: bool=None) -> Union[ReliabilityAsset]:
    """
    Method to create a new {@link ReliabilityAsset}.
    @param assetName
       Name of the new {@link ReliabilityAsset}.
    @param parent
       The parent {@link ReliabilityAsset} the new asset blongs to.
       The parent can be of type {@link ReliabilityAsset} or {@link Facility}.
    @param waitForHierarchyCalcs
       Whether to wait for hierarchy calculations to complete.
    @return The newly created ReliabilityAsset.
    """
        ...
    def moveAsset(self, parent: Union[ReliabilityAsset,Facility]) -> None:
    """
    Method to move a {@link ReliabilityAsset}.
    @param parent
       The new parent to which this asset should be moved to.
    """
        ...
    def checkDenormChildren(self, asset: ReliabilityAsset) -> bool:
    """
    Checks if the denormalized child relationships for the given asset are properly populated.
    The function fetches the hierarchical relationships associated with the asset and checks whether
    its denormalized ancestors are correctly set. If the asset has the necessary denormalized relationships,
    it returns true, indicating that the asset's denormalization is complete. Otherwise, it returns false.
    
    This method is typically used in scenarios where assets are moved or their relationships are modified,
    and the system needs to ensure that the hierarchical data is consistent.
    
    @param asset - The {@link ReliabilityAsset} for which the denormalization check is performed.
    @return {boolean} - Returns true if the asset's denormalized children are populated, false otherwise.
    """
        ...
    def deleteAssetAndRemoveFromHierarchy(self, deleteDescendents: bool='false') -> None:
    """
    Method to delete a {@link ReliabilityAsset} and remove it's
    {@link ReliabilityAssetHierarchicalRelation}s.
    @param deleteDescendents
       If set to true, will delete all descendents of this asset
       If set to false, will create {@link ReliabilityAssetHierarchicalRelation}s
       for its children to its parent (if exists)
    """
        ...
    @classmethod
    def processAssetHierarchyChangesSinceTimestamp(cls, startTimestamp: datetime, batchSize: int='2000') -> None:
    """
    Processes the {@link ReliabilityAssetHierarchicalRelation}s and
    {@link FacilityReliabilityAssetHierarchicalRelation}that were updated after the given timestamp.
    `meta.updated` is used to determine which relations have changed. This function perform synchronous incremental
    denormalization, and should only be used if operations should be blocked until denormalization is up to date.
    It also refreshes the relevant stored calcs on the assets with changed relations.
    
    
    Use this function when we need {@link ReliabilityAsset} de-norm fields to be updated synchronously
    for a small amount of relations (<= 5000).
    
    @param startTimestamp
           The timestamp from which to process changes.
    @param batchSize
           The size of batches to process at once.
    """
        ...
    def swapAssetClass(self, newAssetClass: AssetClass) -> Union[ReliabilityAsset]:
    """
    Updates the {@link ReliabilityAsset} with a new {@link AssetClass} and refreshes associated fields.
    
    This method replaces the current asset class of a {@link ReliabilityAsset} with a new one and
    marks the sensor mapping status as incomplete. It ensures that all relevant fields are updated
    and recalculates derived fields for the asset.
    
    @param newAssetClass
       The new {@link AssetClass} to assign to the {@link ReliabilityAsset}.
       Must be a non-null value representing the {@link AssetClass}.
    
    @return {@link ReliabilityAsset}
       The updated {@link ReliabilityAsset} with its name, translated asset class name, and
       display sensor mapping status.
    """
        ...
    def assignAssetImportance(self, assetImportance: ReliabilityAssetImportance) -> None:
    """
    Updates the {@link ReliabilityAsset} with the {@link ReliabilityAssetImportance} selected from the dropdown of the Asset Hierarchy Overview Page
    
    This method updates the {@link ReliabilityAsset} with the selected importance level on the Asset Hierarchy Overview Page
    @param assetImportance
       The id for the {@link ReliabilityAssetImportance}.
       Must be a non-null value.
    """
        ...
    @classmethod
    def getIdsOfCurrentChildrenAndSelf(cls, parentIds: Array[str]=None) -> Union[Array[str]]:
    """
    Returns the ids of the current children and self of the given parent ids.
    @param parentIds
       The ids of the parents to get the current children and self of.
    @returns
       The ids of the current children and self of the given parent ids.
    """
        ...
    def link3DModel(self, modelId: ReliabilityAsset3dmodel) -> Union[ReliabilityAsset]:
    """
    Links a 3D model to the asset.
    @param modelId
       The {@link ReliabilityAsset3dmodel} to link to the asset.
    @returns {@link ReliabilityAsset}
    """
        ...
    def unlink3DModel(self) -> Union[ReliabilityAsset]:
    """
    Unlinks the 3D model from the asset.
    @returns {@link ReliabilityAsset}
    """
        ...
    def generateSensorDataReport(self, spec: SensorReportSpec) -> Union[Array[SensorDataReport]]:
    """
    Function to generate {@link SensorDataReport} for all the sensors in {@link ReliabilityAssetSensorRelation} based on a time window.
    @param spec
        {@link SensorReportSpec} contains the arguments to generate {@link SensorDataReport}.
    @return an array of {@link SensorDataReport}
    """
        ...
    def fetchSensorRelationsWithExpectedSensorsMissingInAssetClassObjStream(self, assetClass: AssetClass, spec: FetchSpec=None) -> Union[Stream[ReliabilityAssetSensorRelation]]:
    """
    Fetches sensor relations {@link ReliabilityAssetSensorRelation} for a {@link ReliabilityAsset}
    given a selected {@link AssetClass}, identifying missing {@link ExpectedSensor}s in the asset class.
    
    This method is used when swapping the asset class for a {@link ReliabilityAsset}. It retrieves
    all current {@link ExpectedSensor}s associated with the {@link ReliabilityAsset} and identifies
    {@link ReliabilityAssetSensorRelation}s for the given {@link AssetClass} that were not
    previously associated with the asset.
    
    This method is similar to
    {@link ReliabilityAsset#fetchSensorRelationsWithExpectedSensorsMissingInAssetClass}
    but returns a stream of sensor relations instead of a result with total count.
    
    @param assetClass
       The {@link AssetClass} for which sensor relations should be fetched.
       Must be a non-null value representing the asset class ID.
    
    @param spec
       A {@link FetchSpec} defining parameters for the fetch operation, including filtering,
       sorting, and pagination.
    
    @returns {stream<ReliabilityAssetSensorRelation>}
       A stream of sensor relations associated with the asset class and not previously linked
       to the {@link ReliabilityAsset}.
    """
        ...
    def fetchSensorRelationsWithExpectedSensorsMissingInAssetClass(self, assetClass: AssetClass, spec: FetchSpec=None) -> Union[FetchResultWithTotalCount[ReliabilityAssetSensorRelation]]:
    """
    Fetches sensor relations {@link ReliabilityAssetSensorRelation} for a {@link ReliabilityAsset}
    given a selected {@link AssetClass}, identifying missing {@link ExpectedSensor}s in the asset class.
    
    This method is used when swapping the asset class for a {@link ReliabilityAsset}. It retrieves
    all current {@link ExpectedSensor}s associated with the {@link ReliabilityAsset} and identifies
    {@link ReliabilityAssetSensorRelation}s for the given {@link AssetClass} that were not
    previously associated with the asset.
    
    @param assetClass
       The {@link AssetClass} for which sensor relations should be fetched.
       Must be a non-null value representing the asset class ID.
    
    @param spec
       A {@link FetchSpec} defining parameters for the fetch operation, including filtering,
       sorting, and pagination.
    
    @returns {@link FetchResultWithTotalCount<ReliabilityAssetSensorRelation>}
       A result containing the fetched sensor relations along with a total count of matches.
       The total count includes all sensor relations, even if pagination limits the returned results.
    """
        ...


// TypeScript definitions for the C3 type ReliabilityAsset

/**
 * Represents assets at all levels of the Reliability Asset Hierarchy except Facility. Acts as the node in the hierarchy denorm graph.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityAsset
 */
declare interface IReliabilityAsset {

  /**
   * The id of this instance.
   */
  id: string;

  /**
   * Latest uploaded asset hierarchy file or spreadsheet containing the entity.
   */
  assetOnboardingSourceFile?: IAssetOnboardingSourceFile;

  /**
   * Indicates when this asset was last updated in the asset configuration
   */
  configurationLastUpdated?: DateTime | Date | string;

  /**
   * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
   * crucial for accessing previous versions of an object and is entirely managed by the system.
   *
   * @see Ann.Db#versionHistory
   */
  versionEdits?: Array_Type<VersionEdit> | Array<IVersionEdit>;

  /**
   * Name of the Obj instance
   */
  name?: string;

  /**
   * Various system fields.
   */
  meta?: IMeta;

  /**
   * Version number used for optimistic concurrency.  Automatically managed by the system.
   *
   * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
   * be done with great caution.
   */
  version?: number;

  /**
   * Persists concrete type with bindings for generic types where instance has parameter bindings
   */
  typeWithBindings?: IType;

  /**
   * @inheritdoc
   */
  facilityFilterPaths?: Array_Type<string> | Array<string>;

  /**
   * All {@link DataValidationRun}s created for this asset.
   * Should be created using {@link DataValidationRuleset#validate}.
   * They are sorted in descending order of creation date, i.e. the latest
   * {@link DataValidationRun} will be the first entry in
   * this array.
   */
  dataValidationRuns?: Array_Type<DataValidationRun> | Array<IDataValidationRun>;

  /**
   * The latest {@link DataValidationRun}. Also, the first
   * element in the {@link dataValidationRuns} array.
   */
  latestDataValidationRun?: IDataValidationRun;

  /**
   * All {@link ReliabilityMlDatasetPreparationRun}s created as a result of
   * calling {@link prepareMlDatasets} or {@link prepareMlDatasetsBatch}.
   * They are sorted in descending order of created date, i.e. the latest
   * {@link ReliabilityMlDatasetPreparationRun} will be the first entry in
   * this array.
   */
  datasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun>;

  /**
   * The latest {@link ReliabilityMlDatasetPreparationRun}. Also, the first
   * element in the {@link #datasetPreparationRuns} array.
   */
  latestDatasetPreparationRun?: IReliabilityMlDatasetPreparationRun;

  /**
   * The {@link #datasetPreparationRuns} that have status `COMPLETE`.
   */
  completeDatasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun>;

  /**
   * The latest run in {@link #completeDatasetPreparationRuns}.
   */
  latestCompleteDatasetPreparationRun?: IReliabilityMlDatasetPreparationRun;

  /**
   * The {@link #datasetPreparationRuns} that have status `COMPLETE` project.id 'reliabilityRisk'.
   */
  completeRiskDatasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun>;

  /**
   * The latest run in {@link #latestCompleteRiskDatasetPreparationRun}.
   */
  latestCompleteRiskDatasetPreparationRun?: IReliabilityMlDatasetPreparationRun;

  /**
   * The count of {@link #completeDatasetPreparationRuns}.
   */
  countOfCompleteDatasetPreparationRuns?: number;

  /**
   * Represents the current status of data preparation based on the {@link #datasetPreparationRuns}.
   * If there is a completed run, the status is COMPLETE. Otherwise, it is the status of the latest run.
   */
  datasetPreparationStatus?: string;

  /**
   * The {@link ExpectedSensor} that is the target of {@link ReliabilityOrchestrator.SensorAssociation}.
   */
  targetTag?: IExpectedSensor;

  /**
   * All {@link ReliabilityAssetSensorAssociationRun}s created as a result of
   * calling {@link runSensorAssociationBatch} or {@link runSensorAssociation}.
   * They are sorted in descending order of created date, i.e. the latest
   * {@link ReliabilityAssetSensorAssociationRun} will be the first entry in
   * this array.
   */
  sensorAssociationRuns?: Array_Type<ReliabilityAssetSensorAssociationRun> | Array<IReliabilityAssetSensorAssociationRun>;

  /**
   * The latest {@link ReliabilityAssetSensorAssociationRun}. Also, the first
   * element in the {@link sensorAssociationRuns} array.
   */
  latestSensorAssociationRun?: IReliabilityAssetSensorAssociationRun;

  /**
   * The {@link ReliabilityAssetSensorAssociationRun}s that have status `IN PROGRESS`.
   */
  inProgressSensorAssociationRuns?: Array_Type<ReliabilityAssetSensorAssociationRun> | Array<IReliabilityAssetSensorAssociationRun>;

  /**
   * The {@link ReliabilityAssetSensorAssociationRun}s that have status `COMPLETE`.
   */
  completeSensorAssociationRuns?: Array_Type<ReliabilityAssetSensorAssociationRun> | Array<IReliabilityAssetSensorAssociationRun>;

  /**
   * The latest run in {@link #completeSensorAssociationRuns}.
   */
  latestCompleteSensorAssociationRun?: IReliabilityAssetSensorAssociationRun;

  /**
   * Represents the current status of sensor association based on the {@link #sensorAssociationRuns}.
   * If there is a completed run, the status is COMPLETE. Otherwise, it is the status of the latest run.
   */
  sensorAssociationStatus?: string;

  /**
   * This ID is used to determine which import this entity belongs to.
   */
  trackingIdForImport?: string;

  /**
   * List of {@link AclEntry} entries governing who can read/update/remove Objs.
   */
  acl?: Array_Type<AclEntry> | Array<IAclEntry>;

  /**
   * References to MemberToEntity that map to this instance.
   */
  memberIntersections?: Array_Type<MemberToPhysicalAsset> | Array<IMemberToPhysicalAsset>;

  /**
   * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
   * of its base type's typeIdent
   */
  typeIdent?: string;

  /**
   * The historical location/address for the asset.
   */
  locationHistory?: Array_Type<PhysicalAssetLocationHistory> | Array<IPhysicalAssetLocationHistory>;

  /**
   * The current location/address for this asset.
   */
  location?: IPhysicalAssetLocation;

  /**
   * Description of the asset.
   */
  description?: string;

  /**
   * Real-time location data for a moving asset.
   */
  realTimeLocations?: Array_Type<PhysicalAssetRealTimeLocation> | Array<IPhysicalAssetRealTimeLocation>;

  /**
   * All incoming {@link ReliabilityAssetHierarchicalRelation}s.
   */
  parentRelations?: Array_Type<ReliabilityAssetHierarchicalRelation> | Array<IReliabilityAssetHierarchicalRelation>;

  /**
   * All outgoing {@link ReliabilityAssetHierarchicalRelation}s.
   */
  childRelations?: Array_Type<ReliabilityAssetHierarchicalRelation> | Array<IReliabilityAssetHierarchicalRelation>;

  /**
   * Ancestors in the asset hierarchy throughout history.
   */
  denormAncestors?: Array_Type<PhysicalAssetHierarchyDenorm> | Array<IPhysicalAssetHierarchyDenorm>;

  /**
   * Descendants in the asset hierarchy throughout history.
   */
  denormDescendants?: Array_Type<PhysicalAssetHierarchyDenorm> | Array<IPhysicalAssetHierarchyDenorm>;

  /**
   * The historical relative positions of this physical asset.
   */
  relativePositionHistory?: Array_Type<PhysicalAssetRelativePositionHistory> | Array<IPhysicalAssetRelativePositionHistory>;

  /**
   * The current relative position of this physical asset.
   */
  relativePosition?: IPhysicalAssetRelativePosition;

  /**
   * Physical measurement series related to this asset.
   */
  measurements?: Array_Type<BasePhysicalMeasurementSeries> | Array<IBasePhysicalMeasurementSeries>;

  /**
   * Point measurement series for time-series metrics related to the asset.
   */
  pointMeasurements?: Array_Type<PointPhysicalMeasurementSeries> | Array<IPointPhysicalMeasurementSeries>;

  /**
   * {@link ReliabilityAssetEvent}s belonging directly to this asset.
   */
  events?: Array_Type<ReliabilityAssetEvent> | Array<IReliabilityAssetEvent>;

  /**
   * The {@link Sensor}s associated with this {@link PhysicalAsset}.
   *
   * This field establishes the relationship between the physical asset and its associated sensors,
   * using a filter to only include sensors in the relation (where the type of relation is 'SENSOR').
   */
  childSensorRelations?: Array_Type<PhysicalAssetHierarchyRelation> | Array<IPhysicalAssetHierarchyRelation>;

  /**
   * The active {@link TimeToEventPrediction} objects directly belonging to this asset
   */
  timeToEventPredictions?: Array_Type<TimeToEventPrediction> | Array<ITimeToEventPrediction>;

  /**
   * The relations to {@link EventCategory} this asset has
   */
  eventCategoryRelations?: Array_Type<PhysicalAssetEventCategoryRelation> | Array<IPhysicalAssetEventCategoryRelation>;

  /**
   * Relations to {@link ParsableDiagram}s which have been linked to this asset.
   */
  diagramRelations?: Array_Type<ParsableDiagramToPhysicalAssetRelation> | Array<IParsableDiagramToPhysicalAssetRelation>;

  /**
   * Count of {@link ParsableDiagram}s which have been linked to this asset.
   */
  numDiagramRelations?: number;

  /**
   * The {@link AssetClass} this asset belongs to.
   */
  assetClass?: IAssetClass;

  /**
   * The id set by {@link AssetHierarchyTemplate} to identify this asset in relation to the template's hierarchy.
   * This id is unique within each hierarchy produced by a specific {@link AssetHierarchyTemplate} .
   */
  hierarchyTemplateAssetId?: string;

  /**
   * All ancestors in the hierarchy throughout history.
   */
  relDenormAncestors?: Array_Type<ReliabilityAssetHierarchyDenorm> | Array<IReliabilityAssetHierarchyDenorm>;

  /**
   * All current ancestors in the hierarchy, excluding {@link Sensor}s.
   */
  currentRelDenormAncestors?: Array_Type<ReliabilityAssetHierarchyDenorm> | Array<IReliabilityAssetHierarchyDenorm>;

  /**
   * All current ancestors in the hierarchy and this asset.
   */
  currentAncestorsAndSelf?: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset>;

  /**
   * All descendants in the asset hierarchy throughout history.
   */
  relDenormDescendants?: Array_Type<ReliabilityAssetHierarchyDenorm> | Array<IReliabilityAssetHierarchyDenorm>;

  /**
   * Current descendants in the asset hierarchy, excluding {@link Sensor}s.
   */
  currentRelDenormDescendants?: Array_Type<ReliabilityAssetHierarchyDenorm> | Array<IReliabilityAssetHierarchyDenorm>;

  /**
   * This field should be used instead of #currentRelDenormDescendants because {@link ReliabilityAssetHierarchyDenorm} isn't created for nodes without edges.
   */
  currentChildrenAndSelf?: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset>;

  /**
   * Number of current descendants in the asset hierarchy
   */
  numCurrentDescendants?: number;

  /**
   * The current direct children of this asset.
   */
  currentChildren?: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset>;

  /**
   * Relations to {@link Sensor}s currently directly linked to this asset.
   */
  currentSensorHierarchicalRelations?: Array_Type<ReliabilityAssetSensorHierarchicalRelation> | Array<IReliabilityAssetSensorHierarchicalRelation>;

  /**
   * Relations to {@link Sensor}s directly linked to this asset.
   */
  sensorHierarchicalRelations?: Array_Type<ReliabilityAssetSensorHierarchicalRelation> | Array<IReliabilityAssetSensorHierarchicalRelation>;

  /**
   * Current descendants in the asset hierarchy that are {@link Sensor}s.
   */
  currentSensorDenormDescendants?: Array_Type<ReliabilityAssetSensorHierarchicalRelation> | Array<IReliabilityAssetSensorHierarchicalRelation>;

  /**
   * All {@link Sensor}s ever clustered to this {@link ReliabilityAsset}.
   */
  sensorRelations?: Array_Type<ReliabilityAssetSensorRelation> | Array<IReliabilityAssetSensorRelation>;

  /**
   * Current {@link Sensor}s clustered to this {@link ReliabilityAsset}.
   */
  currentSensorRelations?: Array_Type<ReliabilityAssetSensorRelation> | Array<IReliabilityAssetSensorRelation>;

  /**
   * The depth of this asset in the hierarchy.
   */
  depth?: number;

  /**
   * A classification of what level of hierarchy this asset belongs to.
   */
  hierarchyClassification?: string;

  /**
   * A label for this asset which indicates the functional location/usage that this asset represents.
   */
  functionalLocation?: string;

  /**
   * The 3D model linked to this asset.
   */
  linked3DModel?: IReliabilityAsset3dmodel;

  /**
   * The 3D model linked to this asset, or the 3D model linked to the asset class if no 3D model is linked to this asset.
   */
  linked3DModelToDisplay?: IReliabilityAsset3dmodel;

  /**
   * Current incoming {@link ReliabilityAssetHierarchicalRelation}s.
   */
  currentParentRelations?: Array_Type<ReliabilityAssetHierarchicalRelation> | Array<IReliabilityAssetHierarchicalRelation>;

  /**
   * Count of outgoing {@link ReliabilityAssetHierarchicalRelation}s.
   */
  numChildRelations?: number;

  /**
   * Current outgoing {@link ReliabilityAssetHierarchicalRelation}s.
   */
  currentChildRelations?: Array_Type<ReliabilityAssetHierarchicalRelation> | Array<IReliabilityAssetHierarchicalRelation>;

  /**
   * All incoming {@link FacilityReliabilityAssetHierarchicalRelation}s, if any. Only relevant for the "top level" of the asset hierarchy.
   */
  facilityRelations?: Array_Type<FacilityReliabilityAssetHierarchicalRelation> | Array<IFacilityReliabilityAssetHierarchicalRelation>;

  /**
   * Current incoming {@link FacilityReliabilityAssetHierarchicalRelation}s, if any. Only relevant for the "top level" of the asset hierarchy.
   */
  currentFacilityRelations?: Array_Type<FacilityReliabilityAssetHierarchicalRelation> | Array<IFacilityReliabilityAssetHierarchicalRelation>;

  /**
   * {@link WorkOrder}s belonging directly to this asset.
   */
  directWorkOrders?: Array_Type<WorkOrder> | Array<IWorkOrder>;

  /**
   * The name of the region this asset is related to.
   */
  regionName?: string;

  /**
   * List of {@link Member}'s linked to this {@link ReliabilityAsset}.
   */
  members?: Array_Type<Member> | Array<IMember>;

  /**
   * The capacity of the asset.
   */
  capacity?: IExactDimension;

  /**
   * All the {@link AssetDocument}s associated with this asset.
   */
  documents?: Array_Type<AssetDocument> | Array<IAssetDocument>;

  /**
   * The ancestor {@link Facility} associated with this {@link ReliabilityAsset}.
   */
  facility?: IFacility;

  /**
   * Gets the ancestor root {@link ReliabilityAsset} associated with this {@link ReliabilityAsset}.
   * `currentRelDenormAncestors.(isRoot == true).distance` represents the depth of the ancestor.
   */
  rootAsset?: IReliabilityAsset;

  /**
   * Gets the direct parent associated with this {@link ReliabilityAsset}.
   */
  parentAsset?: IReliabilityAsset;

  /**
   * Collection characteristic values associated with a given reliability asset.
   */
  characteristics?: Array_Type<ReliabilityAssetCharacteristicValue> | Array<IReliabilityAssetCharacteristicValue>;

  /**
   * The importance level of the asset, which is used to determine the asset's criticality.
   */
  assetImportanceLevel?: IReliabilityAssetImportance;

  /**
   * All current model relations for this asset.
   */
  currentModelRelations?: Array_Type<ReliabilityAssetToModelRelation> | Array<IReliabilityAssetToModelRelation>;

  /**
   * All model validation relations for reliabilityRisk models for this asset.
   */
  riskModelValidationRelations?: Array_Type<ReliabilityAssetToRiskModelValidationRelation> | Array<IReliabilityAssetToRiskModelValidationRelation>;

  /**
   * All current model relations for reliabilityRisk models for this asset.
   */
  currentReliabilityRiskModelRelations?: Array_Type<ReliabilityAssetToRiskModelRelation> | Array<IReliabilityAssetToRiskModelRelation>;

  /**
   * Alerts belonging to this asset and its descendant assets.
   */
  alerts?: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert>;

  /**
   * Count of projects that the {@link ReliabilityAssetToModelRelation}s with status 'CHAMPION' belong to.
   */
  countOfLiveProjects?: number;

  /**
   * All model relations for reliabilityRisk models for this asset.
   */
  reliabilityRiskModelRelations?: Array_Type<ReliabilityAssetToRiskModelRelation> | Array<IReliabilityAssetToRiskModelRelation>;

  /**
   * Count of #currentModelRelations. Models type or status not considered. Used in the UI.
   */
  totalModelCount?: number;

  /**
   * All model relations for this asset.
   */
  modelRelations?: Array_Type<ReliabilityAssetToModelRelation> | Array<IReliabilityAssetToModelRelation>;

  /**
   * Most recent alert belonging directly to this asset
   */
  latestAlert?: IReliabilityAssetAlert;

  /**
   * Alerts belonging directly to this asset.
   */
  directAlerts?: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert>;

  /**
   * Whether the asset has any #currentModelRelations.
   */
  hasCurrentModelRelations?: boolean;

  /**
   * Count of champion {@link ReliabilityMlModel}s that are muted.
   */
  mutedModels?: number;

  /**
   * Count of projects that the {@link ReliabilityAssetToModelRelation}s belong to.
   */
  countOfProjects?: number;

  /**
   * Number of cases directly on this Asset
   */
  numCases?: number;

  /**
   * {@link ReliabilityAssetCase}s belonging directly to this asset.
   */
  caseRelations?: Array_Type<ReliabilityAssetCaseToAssetRelation> | Array<IReliabilityAssetCaseToAssetRelation>;

  /**
   * Alerts from the last 7 days.
   */
  recentAlerts?: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert>;

  /**
   * Number of live models for this asset.
   */
  numLiveModels?: number;

  /**
   * The latest {@link ReliabilityAssetRegime}.
   */
  latestRegime?: IReliabilityAssetRegime;

  /**
   * The live model associated with the {@link ReliabilityAsset}, derived from the current
   * `ReliabilityAssetToModelRelation` with a status label of 'CHAMPION'.
   *
   * This retrieves the first (index 0) relation where the status is marked as 'CHAMPION',
   * indicating the active or leading model for the asset based on its project type.
   */
  reliabilityRiskLiveModel?: IReliabilityMlModel;

  /**
   * Date of last update to model setup.
   */
  lastModelSetupUpdateDate?: DateTime | Date | string;

  /**
   * The deployment status of the Reliability Risk model for the {@link ReliabilityAsset}.
   * This field reflects the current deployment status of the risk model associated with the asset.
   * - If there is at least one model with a 'CHAMPION' status, it is considered a 'Live Model'.
   * - If there are no 'CHAMPION' models but at least one risk model exists, it is considered as 'No Live Model'.
   * - If there are no risk models associated with the asset, the status will be 'No Trained Model'.
   */
  reliabilityRiskModelDeploymentStatus?: string;

  /**
   * The total number of current models (excluding retired) directly deployed on the asset.
   */
  numModels?: number;

  /**
   * Alerts from the last 24 days.
   */
  latestAlerts?: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert>;

  /**
   * Count of OPEN {@link ReliabilityAssetCase}'s on this asset.
   */
  numOpenCases?: number;

  /**
   * Count of all direct latest reliability risk alerts and sensor alerts in the last 24 hours.
   */
  numLatestDirectAlerts?: number;

  /**
   * List of all {@link WorkOrder} created for this asset in the last 30 days.
   */
  pastMaintenance?: Array_Type<WorkOrder> | Array<IWorkOrder>;

  /**
   * This field is used by the UI to show the translated value of {@link sensorMappingStatus}.
   */
  displaySensorMappingStatus?: string;

  /**
   * Calc for the ID of the most recent risk score (an {@link ReliabilityExpressionEngineFunction#}getLatestRiskScoreId) associated with this asset.
   */
  riskScoreIdCalc?: string;

  /**
   * Number of sensors whose raw value can be used as features for this asset.
   */
  numSensorFeatures?: number;

  /**
   * Last Configured Model Date for this {@link ReliabilityAsset}.
   */
  lastConfiguredReliabilityRiskModelDate?: DateTime | Date | string;

  /**
   * Last update date, using `configurationLastUpdated` or fallback to `meta.updated`
   */
  configurationLastUpdatedDate?: DateTime | Date | string;

  /**
   * The level of this asset in the hierarchy based on the calculated {@link #depth}.
   */
  assetLevel?: string;

  /**
   * The {@link ReliabilityAssetAnomalousPeriod} to use when configuring a {@link MlModel}.
   */
  anomalousPeriods?: Array_Type<ReliabilityAssetAnomalousPeriod> | Array<IReliabilityAssetAnomalousPeriod>;

  /**
   * Count of open {@link SensorHealthAlert}s on the descendents of this asset.
   */
  numOpenDescendentSensorAlerts?: number;

  /**
   * Number of retired models for this asset.
   */
  numRetiredModels?: number;

  /**
   * Calc for the value of the most recent risk score.
   */
  riskScoreValueCalc?: number;

  /**
   * Number of {@link ReliabilityRiskMlModel}s currently deployed on this asset.
   */
  numRiskModels?: number;

  /**
   * Number of direct work orders for the asset
   */
  numWorkOrders?: number;

  /**
   * The risk score threshold for the asset to be considered as high risk. Used in the UI.
   */
  displayedHighRiskThreshold?: number;

  /**
   * The value of the most recent risk score
   * The Value for this field is generated via the {@link FieldStoredMetricCache} type and should
   * not be overwritten except for by that type.
   */
  riskScoreValue?: number;

  /**
   * Model Config Runs for this {@link ReliabilityAsset}.
   */
  modelConfigRunRelations?: Array_Type<ReliabilityAssetToModelConfigRunRelation> | Array<IReliabilityAssetToModelConfigRunRelation>;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset and its descendents in the last 24 hours
   */
  numLatestOpenAlerts?: number;

  /**
   * The risk level classification of the asset. Used in the UI.
   */
  riskLevel?: string;

  /**
   * {@link ReliabilityAssetCase}s directly associated with this asset.
   */
  directCases?: Array_Type<ReliabilityAssetCase> | Array<IReliabilityAssetCase>;

  /**
   * The ID of the most recent risk score
   * The Value for this field is generated via the {@link FieldStoredMetricCache} type and should
   * not be overwritten except for by that type.
   */
  riskScoreId?: string;

  /**
   * This field indicates whether the mapping of {@link Sensor}s to a {@link ReliabilityAsset} has been completed.
   */
  isSensorMappingComplete?: boolean;

  /**
   * The {@link AlertMutedPeriod}s associated with the {@link ReliabilityAsset}.
   */
  mutedPeriods?: Array_Type<AlertMutedPeriod> | Array<IAlertMutedPeriod>;

  /**
   * Display name for the current live model
   */
  reliabilityRiskLiveModelName?: string;

  /**
   * This field indicates the current status of the mapping of {@link Sensor}s to the {@link ReliabilityAsset}.
   */
  sensorMappingStatus?: string;

  /**
   * Count of open {@link ReliabilityAssetAlert}s on the descendents of this asset.
   */
  numOpenDescendentAlerts?: number;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset in the last 24 hours.
   */
  numLatestOpenDirectAlerts?: number;

  /**
   * Date of last update to model setup with correlation.
   */
  lastCorrelationModelSetupUpdateDate?: DateTime | Date | string;

  /**
   * Count of open {@link SensorHealthAlert}'s on this asset in the last 24 hours.
   */
  numLatestOpenSensorAlerts?: number;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset.
   */
  numOpenDirectAlerts?: number;

  /**
   * The {@link ReliabilityAssetRegime} to use when configuring {@link MlModel}.
   */
  regimes?: Array_Type<ReliabilityAssetRegime> | Array<IReliabilityAssetRegime>;

  /**
   * Count of open {@link SensorHealthAlert} on this asset.
   */
  numOpenSensorAlerts?: number;

  /**
   * Latest Model Config Status for this {@link ReliabilityAsset}.
   *
   * Checks if any of the model config runs are in progress.
   * If yes, returns 'IN PROGRESS', else returns the status of the latest model config run.
   */
  lastModelConfigStatus?: string;

  /**
   * List of all {@link ReliabilityAssetCase}s belonging to this and all child assets.
   */
  cases?: Array_Type<ReliabilityAssetCase> | Array<IReliabilityAssetCase>;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset and its direct children.
   */
  numOpenDirectChildrenAlerts?: number;

  /**
   * Date of last model config update
   */
  lastModelConfigUpdateDate?: DateTime | Date | string;

  /**
   * Number of candidate models for this asset.
   */
  numCandidateModels?: number;

  /**
   * The risk score threshold for the asset to be considered as medium risk. Used in the UI.
   */
  displayedMediumRiskThreshold?: number;

  /**
   * List of all {@link WorkOrder} created for this asset in the last 30 days.
   */
  plannedMaintenance?: Array_Type<WorkOrder> | Array<IWorkOrder>;

  /**
   * The {@link FailureMode}s associated with this asset through its {@link AssetClass}.
   */
  failureModes?: Array_Type<FailureMode> | Array<IFailureMode>;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset and its descendents.
   */
  numOpenAlerts?: number;

  /**
   * Risk Score to display in the UI.
   */
  displayedRiskScore?: number;

  /**
   * The total number of children level models (excluding retired) for the asset.
   */
  numChildModels?: number;

  /**
   * Open {@link ReliabilityAssetCase}s belonging directly to this asset.
   */
  numOpenDirectCases?: number;

  /**
   * Count of all latest reliability risk alerts and sensor alerts in the last 24 hours.
   */
  numAllLatestAlerts?: number;

  /**
   * Translation of {@link riskLevel}.
   */
  riskLevelDisplayName?: string;

  /**
   * Sensor alerts associated with this asset.
   */
  sensorAlerts?: Array_Type<SensorHealthAlert> | Array<ISensorHealthAlert>;

  /**
   * Number of challenger models for this asset.
   */
  numChallengerModels?: number;

  /**
   * Number of days since the last updated model.
   */
  daysSinceLastUpdatedReliabilityRiskModels?: number;

  /**
   * Sensor alerts in the last 24 hours.
   */
  latestSensorAlerts?: Array_Type<SensorHealthAlert> | Array<ISensorHealthAlert>;

  /**
   * Used to determine which [projects](ReliabilityMl.Project) are associated with an asset,
   * even if no {@link ReliabilityMlDatasetPreparationRun}s or {@link ReliabilityMlModel}
   * are associated with this asset.
   */
  assignedProjects?: Array_Type<ReliabilityMl.Project> | Array<IReliabilityMl.Project>;

  /**
   * Geographical location of this asset, as a latitude and longitude.
   *
   * This is used to generate the map view of the asset under "Asset Map" page. And is independent from #location field
   * which holds the address of the asset.
   */
  geoLocation?: ILatLong;

  /**
   * Display name which attempts to use {@link ReliabilityAsset#name name} field;
   * otherwise, uses the {@link ReliabilityAsset#id id} field.
   */
  displayName?: string;

  /**
   * Configuration array for positioning components on the process flow diagram.
   */
  diagramConfigs?: Array_Type<ProcessDiagramConfig> | Array<IProcessDiagramConfig>;
}

/**
 * Represents assets at all levels of the Reliability Asset Hierarchy except Facility. Acts as the node in the hierarchy denorm graph.
 *
 * @remarks this represents a made instance of ReliabilityAsset
 */
declare class ReliabilityAsset extends Obj  {

  /**
   * The id of this instance.
   */
  readonly id: string;
  withId(id: string): ReliabilityAsset;

  /**
   * Latest uploaded asset hierarchy file or spreadsheet containing the entity.
   */
  readonly assetOnboardingSourceFile?: AssetOnboardingSourceFile;
  withAssetOnboardingSourceFile(assetOnboardingSourceFile: IAssetOnboardingSourceFile | null): ReliabilityAsset;

  /**
   * Indicates when this asset was last updated in the asset configuration
   */
  readonly configurationLastUpdated?: DateTime;
  withConfigurationLastUpdated(configurationLastUpdated: DateTime | Date | string | null): ReliabilityAsset;

  /**
   * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
   * crucial for accessing previous versions of an object and is entirely managed by the system.
   *
   * @see Ann.Db#versionHistory
   */
  readonly versionEdits?: Array_Type<VersionEdit>;
  withVersionEdits(versionEdits: Array_Type<VersionEdit> | Array<IVersionEdit> | null): ReliabilityAsset;

  /**
   * Name of the Obj instance
   */
  readonly name?: string;
  withName(name: string | null): ReliabilityAsset;

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): ReliabilityAsset;

  /**
   * Version number used for optimistic concurrency.  Automatically managed by the system.
   *
   * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
   * be done with great caution.
   */
  readonly version?: number;
  withVersion(version: number | null): ReliabilityAsset;

  /**
   * Persists concrete type with bindings for generic types where instance has parameter bindings
   */
  readonly typeWithBindings?: Type;
  withTypeWithBindings(typeWithBindings: IType | null): ReliabilityAsset;

  /**
   * @inheritdoc
   */
  readonly facilityFilterPaths?: Array_Type<string>;
  withFacilityFilterPaths(facilityFilterPaths: Array_Type<string> | Array<string> | null): ReliabilityAsset;

  /**
   * All {@link DataValidationRun}s created for this asset.
   * Should be created using {@link DataValidationRuleset#validate}.
   * They are sorted in descending order of creation date, i.e. the latest
   * {@link DataValidationRun} will be the first entry in
   * this array.
   */
  readonly dataValidationRuns?: Array_Type<DataValidationRun>;
  withDataValidationRuns(dataValidationRuns: Array_Type<DataValidationRun> | Array<IDataValidationRun> | null): ReliabilityAsset;

  /**
   * The latest {@link DataValidationRun}. Also, the first
   * element in the {@link dataValidationRuns} array.
   */
  readonly latestDataValidationRun?: DataValidationRun;
  withLatestDataValidationRun(latestDataValidationRun: IDataValidationRun | null): ReliabilityAsset;

  /**
   * All {@link ReliabilityMlDatasetPreparationRun}s created as a result of
   * calling {@link prepareMlDatasets} or {@link prepareMlDatasetsBatch}.
   * They are sorted in descending order of created date, i.e. the latest
   * {@link ReliabilityMlDatasetPreparationRun} will be the first entry in
   * this array.
   */
  readonly datasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun>;
  withDatasetPreparationRuns(datasetPreparationRuns: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun> | null): ReliabilityAsset;

  /**
   * The latest {@link ReliabilityMlDatasetPreparationRun}. Also, the first
   * element in the {@link #datasetPreparationRuns} array.
   */
  readonly latestDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun;
  withLatestDatasetPreparationRun(latestDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityAsset;

  /**
   * The {@link #datasetPreparationRuns} that have status `COMPLETE`.
   */
  readonly completeDatasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun>;
  withCompleteDatasetPreparationRuns(completeDatasetPreparationRuns: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun> | null): ReliabilityAsset;

  /**
   * The latest run in {@link #completeDatasetPreparationRuns}.
   */
  readonly latestCompleteDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun;
  withLatestCompleteDatasetPreparationRun(latestCompleteDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityAsset;

  /**
   * The {@link #datasetPreparationRuns} that have status `COMPLETE` project.id 'reliabilityRisk'.
   */
  readonly completeRiskDatasetPreparationRuns?: Array_Type<ReliabilityMlDatasetPreparationRun>;
  withCompleteRiskDatasetPreparationRuns(completeRiskDatasetPreparationRuns: Array_Type<ReliabilityMlDatasetPreparationRun> | Array<IReliabilityMlDatasetPreparationRun> | null): ReliabilityAsset;

  /**
   * The latest run in {@link #latestCompleteRiskDatasetPreparationRun}.
   */
  readonly latestCompleteRiskDatasetPreparationRun?: ReliabilityMlDatasetPreparationRun;
  withLatestCompleteRiskDatasetPreparationRun(latestCompleteRiskDatasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityAsset;

  /**
   * The count of {@link #completeDatasetPreparationRuns}.
   */
  readonly countOfCompleteDatasetPreparationRuns?: number;
  withCountOfCompleteDatasetPreparationRuns(countOfCompleteDatasetPreparationRuns: number | null): ReliabilityAsset;

  /**
   * Represents the current status of data preparation based on the {@link #datasetPreparationRuns}.
   * If there is a completed run, the status is COMPLETE. Otherwise, it is the status of the latest run.
   */
  readonly datasetPreparationStatus?: string;
  withDatasetPreparationStatus(datasetPreparationStatus: string | null): ReliabilityAsset;

  /**
   * The {@link ExpectedSensor} that is the target of {@link ReliabilityOrchestrator.SensorAssociation}.
   */
  readonly targetTag?: ExpectedSensor;
  withTargetTag(targetTag: IExpectedSensor | null): ReliabilityAsset;

  /**
   * All {@link ReliabilityAssetSensorAssociationRun}s created as a result of
   * calling {@link runSensorAssociationBatch} or {@link runSensorAssociation}.
   * They are sorted in descending order of created date, i.e. the latest
   * {@link ReliabilityAssetSensorAssociationRun} will be the first entry in
   * this array.
   */
  readonly sensorAssociationRuns?: Array_Type<ReliabilityAssetSensorAssociationRun>;
  withSensorAssociationRuns(sensorAssociationRuns: Array_Type<ReliabilityAssetSensorAssociationRun> | Array<IReliabilityAssetSensorAssociationRun> | null): ReliabilityAsset;

  /**
   * The latest {@link ReliabilityAssetSensorAssociationRun}. Also, the first
   * element in the {@link sensorAssociationRuns} array.
   */
  readonly latestSensorAssociationRun?: ReliabilityAssetSensorAssociationRun;
  withLatestSensorAssociationRun(latestSensorAssociationRun: IReliabilityAssetSensorAssociationRun | null): ReliabilityAsset;

  /**
   * The {@link ReliabilityAssetSensorAssociationRun}s that have status `IN PROGRESS`.
   */
  readonly inProgressSensorAssociationRuns?: Array_Type<ReliabilityAssetSensorAssociationRun>;
  withInProgressSensorAssociationRuns(inProgressSensorAssociationRuns: Array_Type<ReliabilityAssetSensorAssociationRun> | Array<IReliabilityAssetSensorAssociationRun> | null): ReliabilityAsset;

  /**
   * The {@link ReliabilityAssetSensorAssociationRun}s that have status `COMPLETE`.
   */
  readonly completeSensorAssociationRuns?: Array_Type<ReliabilityAssetSensorAssociationRun>;
  withCompleteSensorAssociationRuns(completeSensorAssociationRuns: Array_Type<ReliabilityAssetSensorAssociationRun> | Array<IReliabilityAssetSensorAssociationRun> | null): ReliabilityAsset;

  /**
   * The latest run in {@link #completeSensorAssociationRuns}.
   */
  readonly latestCompleteSensorAssociationRun?: ReliabilityAssetSensorAssociationRun;
  withLatestCompleteSensorAssociationRun(latestCompleteSensorAssociationRun: IReliabilityAssetSensorAssociationRun | null): ReliabilityAsset;

  /**
   * Represents the current status of sensor association based on the {@link #sensorAssociationRuns}.
   * If there is a completed run, the status is COMPLETE. Otherwise, it is the status of the latest run.
   */
  readonly sensorAssociationStatus?: string;
  withSensorAssociationStatus(sensorAssociationStatus: string | null): ReliabilityAsset;

  /**
   * This ID is used to determine which import this entity belongs to.
   */
  readonly trackingIdForImport?: string;
  withTrackingIdForImport(trackingIdForImport: string | null): ReliabilityAsset;

  /**
   * List of {@link AclEntry} entries governing who can read/update/remove Objs.
   */
  readonly acl?: Array_Type<AclEntry>;
  withAcl(acl: Array_Type<AclEntry> | Array<IAclEntry> | null): ReliabilityAsset;

  /**
   * References to MemberToEntity that map to this instance.
   */
  readonly memberIntersections?: Array_Type<MemberToPhysicalAsset>;
  withMemberIntersections(memberIntersections: Array_Type<MemberToPhysicalAsset> | Array<IMemberToPhysicalAsset> | null): ReliabilityAsset;

  /**
   * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
   * of its base type's typeIdent
   */
  readonly typeIdent?: string;
  withTypeIdent(typeIdent: string | null): ReliabilityAsset;

  /**
   * The historical location/address for the asset.
   */
  readonly locationHistory?: Array_Type<PhysicalAssetLocationHistory>;
  withLocationHistory(locationHistory: Array_Type<PhysicalAssetLocationHistory> | Array<IPhysicalAssetLocationHistory> | null): ReliabilityAsset;

  /**
   * The current location/address for this asset.
   */
  readonly location?: PhysicalAssetLocation;
  withLocation(location: IPhysicalAssetLocation | null): ReliabilityAsset;

  /**
   * Description of the asset.
   */
  readonly description?: string;
  withDescription(description: string | null): ReliabilityAsset;

  /**
   * Real-time location data for a moving asset.
   */
  readonly realTimeLocations?: Array_Type<PhysicalAssetRealTimeLocation>;
  withRealTimeLocations(realTimeLocations: Array_Type<PhysicalAssetRealTimeLocation> | Array<IPhysicalAssetRealTimeLocation> | null): ReliabilityAsset;

  /**
   * All incoming {@link ReliabilityAssetHierarchicalRelation}s.
   */
  readonly parentRelations?: Array_Type<ReliabilityAssetHierarchicalRelation>;
  withParentRelations(parentRelations: Array_Type<ReliabilityAssetHierarchicalRelation> | Array<IReliabilityAssetHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * All outgoing {@link ReliabilityAssetHierarchicalRelation}s.
   */
  readonly childRelations?: Array_Type<ReliabilityAssetHierarchicalRelation>;
  withChildRelations(childRelations: Array_Type<ReliabilityAssetHierarchicalRelation> | Array<IReliabilityAssetHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * Ancestors in the asset hierarchy throughout history.
   */
  readonly denormAncestors?: Array_Type<PhysicalAssetHierarchyDenorm>;
  withDenormAncestors(denormAncestors: Array_Type<PhysicalAssetHierarchyDenorm> | Array<IPhysicalAssetHierarchyDenorm> | null): ReliabilityAsset;

  /**
   * Descendants in the asset hierarchy throughout history.
   */
  readonly denormDescendants?: Array_Type<PhysicalAssetHierarchyDenorm>;
  withDenormDescendants(denormDescendants: Array_Type<PhysicalAssetHierarchyDenorm> | Array<IPhysicalAssetHierarchyDenorm> | null): ReliabilityAsset;

  /**
   * The historical relative positions of this physical asset.
   */
  readonly relativePositionHistory?: Array_Type<PhysicalAssetRelativePositionHistory>;
  withRelativePositionHistory(relativePositionHistory: Array_Type<PhysicalAssetRelativePositionHistory> | Array<IPhysicalAssetRelativePositionHistory> | null): ReliabilityAsset;

  /**
   * The current relative position of this physical asset.
   */
  readonly relativePosition?: PhysicalAssetRelativePosition;
  withRelativePosition(relativePosition: IPhysicalAssetRelativePosition | null): ReliabilityAsset;

  /**
   * Physical measurement series related to this asset.
   */
  readonly measurements?: Array_Type<BasePhysicalMeasurementSeries>;
  withMeasurements(measurements: Array_Type<BasePhysicalMeasurementSeries> | Array<IBasePhysicalMeasurementSeries> | null): ReliabilityAsset;

  /**
   * Point measurement series for time-series metrics related to the asset.
   */
  readonly pointMeasurements?: Array_Type<PointPhysicalMeasurementSeries>;
  withPointMeasurements(pointMeasurements: Array_Type<PointPhysicalMeasurementSeries> | Array<IPointPhysicalMeasurementSeries> | null): ReliabilityAsset;

  /**
   * {@link ReliabilityAssetEvent}s belonging directly to this asset.
   */
  readonly events?: Array_Type<ReliabilityAssetEvent>;
  withEvents(events: Array_Type<ReliabilityAssetEvent> | Array<IReliabilityAssetEvent> | null): ReliabilityAsset;

  /**
   * The {@link Sensor}s associated with this {@link PhysicalAsset}.
   *
   * This field establishes the relationship between the physical asset and its associated sensors,
   * using a filter to only include sensors in the relation (where the type of relation is 'SENSOR').
   */
  readonly childSensorRelations?: Array_Type<PhysicalAssetHierarchyRelation>;
  withChildSensorRelations(childSensorRelations: Array_Type<PhysicalAssetHierarchyRelation> | Array<IPhysicalAssetHierarchyRelation> | null): ReliabilityAsset;

  /**
   * The active {@link TimeToEventPrediction} objects directly belonging to this asset
   */
  readonly timeToEventPredictions?: Array_Type<TimeToEventPrediction>;
  withTimeToEventPredictions(timeToEventPredictions: Array_Type<TimeToEventPrediction> | Array<ITimeToEventPrediction> | null): ReliabilityAsset;

  /**
   * The relations to {@link EventCategory} this asset has
   */
  readonly eventCategoryRelations?: Array_Type<PhysicalAssetEventCategoryRelation>;
  withEventCategoryRelations(eventCategoryRelations: Array_Type<PhysicalAssetEventCategoryRelation> | Array<IPhysicalAssetEventCategoryRelation> | null): ReliabilityAsset;

  /**
   * Relations to {@link ParsableDiagram}s which have been linked to this asset.
   */
  readonly diagramRelations?: Array_Type<ParsableDiagramToPhysicalAssetRelation>;
  withDiagramRelations(diagramRelations: Array_Type<ParsableDiagramToPhysicalAssetRelation> | Array<IParsableDiagramToPhysicalAssetRelation> | null): ReliabilityAsset;

  /**
   * Count of {@link ParsableDiagram}s which have been linked to this asset.
   */
  readonly numDiagramRelations?: number;
  withNumDiagramRelations(numDiagramRelations: number | null): ReliabilityAsset;

  /**
   * The {@link AssetClass} this asset belongs to.
   */
  readonly assetClass?: AssetClass;
  withAssetClass(assetClass: IAssetClass | null): ReliabilityAsset;

  /**
   * The id set by {@link AssetHierarchyTemplate} to identify this asset in relation to the template's hierarchy.
   * This id is unique within each hierarchy produced by a specific {@link AssetHierarchyTemplate} .
   */
  readonly hierarchyTemplateAssetId?: string;
  withHierarchyTemplateAssetId(hierarchyTemplateAssetId: string | null): ReliabilityAsset;

  /**
   * All ancestors in the hierarchy throughout history.
   */
  readonly relDenormAncestors?: Array_Type<ReliabilityAssetHierarchyDenorm>;
  withRelDenormAncestors(relDenormAncestors: Array_Type<ReliabilityAssetHierarchyDenorm> | Array<IReliabilityAssetHierarchyDenorm> | null): ReliabilityAsset;

  /**
   * All current ancestors in the hierarchy, excluding {@link Sensor}s.
   */
  readonly currentRelDenormAncestors?: Array_Type<ReliabilityAssetHierarchyDenorm>;
  withCurrentRelDenormAncestors(currentRelDenormAncestors: Array_Type<ReliabilityAssetHierarchyDenorm> | Array<IReliabilityAssetHierarchyDenorm> | null): ReliabilityAsset;

  /**
   * All current ancestors in the hierarchy and this asset.
   */
  readonly currentAncestorsAndSelf?: Array_Type<ReliabilityAsset>;
  withCurrentAncestorsAndSelf(currentAncestorsAndSelf: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset> | null): ReliabilityAsset;

  /**
   * All descendants in the asset hierarchy throughout history.
   */
  readonly relDenormDescendants?: Array_Type<ReliabilityAssetHierarchyDenorm>;
  withRelDenormDescendants(relDenormDescendants: Array_Type<ReliabilityAssetHierarchyDenorm> | Array<IReliabilityAssetHierarchyDenorm> | null): ReliabilityAsset;

  /**
   * Current descendants in the asset hierarchy, excluding {@link Sensor}s.
   */
  readonly currentRelDenormDescendants?: Array_Type<ReliabilityAssetHierarchyDenorm>;
  withCurrentRelDenormDescendants(currentRelDenormDescendants: Array_Type<ReliabilityAssetHierarchyDenorm> | Array<IReliabilityAssetHierarchyDenorm> | null): ReliabilityAsset;

  /**
   * This field should be used instead of #currentRelDenormDescendants because {@link ReliabilityAssetHierarchyDenorm} isn't created for nodes without edges.
   */
  readonly currentChildrenAndSelf?: Array_Type<ReliabilityAsset>;
  withCurrentChildrenAndSelf(currentChildrenAndSelf: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset> | null): ReliabilityAsset;

  /**
   * Number of current descendants in the asset hierarchy
   */
  readonly numCurrentDescendants?: number;
  withNumCurrentDescendants(numCurrentDescendants: number | null): ReliabilityAsset;

  /**
   * The current direct children of this asset.
   */
  readonly currentChildren?: Array_Type<ReliabilityAsset>;
  withCurrentChildren(currentChildren: Array_Type<ReliabilityAsset> | Array<IReliabilityAsset> | null): ReliabilityAsset;

  /**
   * Relations to {@link Sensor}s currently directly linked to this asset.
   */
  readonly currentSensorHierarchicalRelations?: Array_Type<ReliabilityAssetSensorHierarchicalRelation>;
  withCurrentSensorHierarchicalRelations(currentSensorHierarchicalRelations: Array_Type<ReliabilityAssetSensorHierarchicalRelation> | Array<IReliabilityAssetSensorHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * Relations to {@link Sensor}s directly linked to this asset.
   */
  readonly sensorHierarchicalRelations?: Array_Type<ReliabilityAssetSensorHierarchicalRelation>;
  withSensorHierarchicalRelations(sensorHierarchicalRelations: Array_Type<ReliabilityAssetSensorHierarchicalRelation> | Array<IReliabilityAssetSensorHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * Current descendants in the asset hierarchy that are {@link Sensor}s.
   */
  readonly currentSensorDenormDescendants?: Array_Type<ReliabilityAssetSensorHierarchicalRelation>;
  withCurrentSensorDenormDescendants(currentSensorDenormDescendants: Array_Type<ReliabilityAssetSensorHierarchicalRelation> | Array<IReliabilityAssetSensorHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * All {@link Sensor}s ever clustered to this {@link ReliabilityAsset}.
   */
  readonly sensorRelations?: Array_Type<ReliabilityAssetSensorRelation>;
  withSensorRelations(sensorRelations: Array_Type<ReliabilityAssetSensorRelation> | Array<IReliabilityAssetSensorRelation> | null): ReliabilityAsset;

  /**
   * Current {@link Sensor}s clustered to this {@link ReliabilityAsset}.
   */
  readonly currentSensorRelations?: Array_Type<ReliabilityAssetSensorRelation>;
  withCurrentSensorRelations(currentSensorRelations: Array_Type<ReliabilityAssetSensorRelation> | Array<IReliabilityAssetSensorRelation> | null): ReliabilityAsset;

  /**
   * The depth of this asset in the hierarchy.
   */
  readonly depth?: number;
  withDepth(depth: number | null): ReliabilityAsset;

  /**
   * A classification of what level of hierarchy this asset belongs to.
   */
  readonly hierarchyClassification?: string;
  withHierarchyClassification(hierarchyClassification: string | null): ReliabilityAsset;

  /**
   * A label for this asset which indicates the functional location/usage that this asset represents.
   */
  readonly functionalLocation?: string;
  withFunctionalLocation(functionalLocation: string | null): ReliabilityAsset;

  /**
   * The 3D model linked to this asset.
   */
  readonly linked3DModel?: ReliabilityAsset3dmodel;
  withLinked3DModel(linked3DModel: IReliabilityAsset3dmodel | null): ReliabilityAsset;

  /**
   * The 3D model linked to this asset, or the 3D model linked to the asset class if no 3D model is linked to this asset.
   */
  readonly linked3DModelToDisplay?: ReliabilityAsset3dmodel;
  withLinked3DModelToDisplay(linked3DModelToDisplay: IReliabilityAsset3dmodel | null): ReliabilityAsset;

  /**
   * Current incoming {@link ReliabilityAssetHierarchicalRelation}s.
   */
  readonly currentParentRelations?: Array_Type<ReliabilityAssetHierarchicalRelation>;
  withCurrentParentRelations(currentParentRelations: Array_Type<ReliabilityAssetHierarchicalRelation> | Array<IReliabilityAssetHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * Count of outgoing {@link ReliabilityAssetHierarchicalRelation}s.
   */
  readonly numChildRelations?: number;
  withNumChildRelations(numChildRelations: number | null): ReliabilityAsset;

  /**
   * Current outgoing {@link ReliabilityAssetHierarchicalRelation}s.
   */
  readonly currentChildRelations?: Array_Type<ReliabilityAssetHierarchicalRelation>;
  withCurrentChildRelations(currentChildRelations: Array_Type<ReliabilityAssetHierarchicalRelation> | Array<IReliabilityAssetHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * All incoming {@link FacilityReliabilityAssetHierarchicalRelation}s, if any. Only relevant for the "top level" of the asset hierarchy.
   */
  readonly facilityRelations?: Array_Type<FacilityReliabilityAssetHierarchicalRelation>;
  withFacilityRelations(facilityRelations: Array_Type<FacilityReliabilityAssetHierarchicalRelation> | Array<IFacilityReliabilityAssetHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * Current incoming {@link FacilityReliabilityAssetHierarchicalRelation}s, if any. Only relevant for the "top level" of the asset hierarchy.
   */
  readonly currentFacilityRelations?: Array_Type<FacilityReliabilityAssetHierarchicalRelation>;
  withCurrentFacilityRelations(currentFacilityRelations: Array_Type<FacilityReliabilityAssetHierarchicalRelation> | Array<IFacilityReliabilityAssetHierarchicalRelation> | null): ReliabilityAsset;

  /**
   * {@link WorkOrder}s belonging directly to this asset.
   */
  readonly directWorkOrders?: Array_Type<WorkOrder>;
  withDirectWorkOrders(directWorkOrders: Array_Type<WorkOrder> | Array<IWorkOrder> | null): ReliabilityAsset;

  /**
   * The name of the region this asset is related to.
   */
  readonly regionName?: string;
  withRegionName(regionName: string | null): ReliabilityAsset;

  /**
   * List of {@link Member}'s linked to this {@link ReliabilityAsset}.
   */
  readonly members?: Array_Type<Member>;
  withMembers(members: Array_Type<Member> | Array<IMember> | null): ReliabilityAsset;

  /**
   * The capacity of the asset.
   */
  readonly capacity?: ExactDimension;
  withCapacity(capacity: IExactDimension | null): ReliabilityAsset;

  /**
   * All the {@link AssetDocument}s associated with this asset.
   */
  readonly documents?: Array_Type<AssetDocument>;
  withDocuments(documents: Array_Type<AssetDocument> | Array<IAssetDocument> | null): ReliabilityAsset;

  /**
   * The ancestor {@link Facility} associated with this {@link ReliabilityAsset}.
   */
  readonly facility?: Facility;
  withFacility(facility: IFacility | null): ReliabilityAsset;

  /**
   * Gets the ancestor root {@link ReliabilityAsset} associated with this {@link ReliabilityAsset}.
   * `currentRelDenormAncestors.(isRoot == true).distance` represents the depth of the ancestor.
   */
  readonly rootAsset?: ReliabilityAsset;
  withRootAsset(rootAsset: IReliabilityAsset | null): ReliabilityAsset;

  /**
   * Gets the direct parent associated with this {@link ReliabilityAsset}.
   */
  readonly parentAsset?: ReliabilityAsset;
  withParentAsset(parentAsset: IReliabilityAsset | null): ReliabilityAsset;

  /**
   * Collection characteristic values associated with a given reliability asset.
   */
  readonly characteristics?: Array_Type<ReliabilityAssetCharacteristicValue>;
  withCharacteristics(characteristics: Array_Type<ReliabilityAssetCharacteristicValue> | Array<IReliabilityAssetCharacteristicValue> | null): ReliabilityAsset;

  /**
   * The importance level of the asset, which is used to determine the asset's criticality.
   */
  readonly assetImportanceLevel?: ReliabilityAssetImportance;
  withAssetImportanceLevel(assetImportanceLevel: IReliabilityAssetImportance | null): ReliabilityAsset;

  /**
   * All current model relations for this asset.
   */
  readonly currentModelRelations?: Array_Type<ReliabilityAssetToModelRelation>;
  withCurrentModelRelations(currentModelRelations: Array_Type<ReliabilityAssetToModelRelation> | Array<IReliabilityAssetToModelRelation> | null): ReliabilityAsset;

  /**
   * All model validation relations for reliabilityRisk models for this asset.
   */
  readonly riskModelValidationRelations?: Array_Type<ReliabilityAssetToRiskModelValidationRelation>;
  withRiskModelValidationRelations(riskModelValidationRelations: Array_Type<ReliabilityAssetToRiskModelValidationRelation> | Array<IReliabilityAssetToRiskModelValidationRelation> | null): ReliabilityAsset;

  /**
   * All current model relations for reliabilityRisk models for this asset.
   */
  readonly currentReliabilityRiskModelRelations?: Array_Type<ReliabilityAssetToRiskModelRelation>;
  withCurrentReliabilityRiskModelRelations(currentReliabilityRiskModelRelations: Array_Type<ReliabilityAssetToRiskModelRelation> | Array<IReliabilityAssetToRiskModelRelation> | null): ReliabilityAsset;

  /**
   * Alerts belonging to this asset and its descendant assets.
   */
  readonly alerts?: Array_Type<ReliabilityAssetAlert>;
  withAlerts(alerts: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert> | null): ReliabilityAsset;

  /**
   * Count of projects that the {@link ReliabilityAssetToModelRelation}s with status 'CHAMPION' belong to.
   */
  readonly countOfLiveProjects?: number;
  withCountOfLiveProjects(countOfLiveProjects: number | null): ReliabilityAsset;

  /**
   * All model relations for reliabilityRisk models for this asset.
   */
  readonly reliabilityRiskModelRelations?: Array_Type<ReliabilityAssetToRiskModelRelation>;
  withReliabilityRiskModelRelations(reliabilityRiskModelRelations: Array_Type<ReliabilityAssetToRiskModelRelation> | Array<IReliabilityAssetToRiskModelRelation> | null): ReliabilityAsset;

  /**
   * Count of #currentModelRelations. Models type or status not considered. Used in the UI.
   */
  readonly totalModelCount?: number;
  withTotalModelCount(totalModelCount: number | null): ReliabilityAsset;

  /**
   * All model relations for this asset.
   */
  readonly modelRelations?: Array_Type<ReliabilityAssetToModelRelation>;
  withModelRelations(modelRelations: Array_Type<ReliabilityAssetToModelRelation> | Array<IReliabilityAssetToModelRelation> | null): ReliabilityAsset;

  /**
   * Most recent alert belonging directly to this asset
   */
  readonly latestAlert?: ReliabilityAssetAlert;
  withLatestAlert(latestAlert: IReliabilityAssetAlert | null): ReliabilityAsset;

  /**
   * Alerts belonging directly to this asset.
   */
  readonly directAlerts?: Array_Type<ReliabilityAssetAlert>;
  withDirectAlerts(directAlerts: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert> | null): ReliabilityAsset;

  /**
   * Whether the asset has any #currentModelRelations.
   */
  readonly hasCurrentModelRelations?: boolean;
  withHasCurrentModelRelations(hasCurrentModelRelations: boolean): ReliabilityAsset;

  /**
   * Count of champion {@link ReliabilityMlModel}s that are muted.
   */
  readonly mutedModels?: number;
  withMutedModels(mutedModels: number | null): ReliabilityAsset;

  /**
   * Count of projects that the {@link ReliabilityAssetToModelRelation}s belong to.
   */
  readonly countOfProjects?: number;
  withCountOfProjects(countOfProjects: number | null): ReliabilityAsset;

  /**
   * Number of cases directly on this Asset
   */
  readonly numCases?: number;
  withNumCases(numCases: number | null): ReliabilityAsset;

  /**
   * {@link ReliabilityAssetCase}s belonging directly to this asset.
   */
  readonly caseRelations?: Array_Type<ReliabilityAssetCaseToAssetRelation>;
  withCaseRelations(caseRelations: Array_Type<ReliabilityAssetCaseToAssetRelation> | Array<IReliabilityAssetCaseToAssetRelation> | null): ReliabilityAsset;

  /**
   * Alerts from the last 7 days.
   */
  readonly recentAlerts?: Array_Type<ReliabilityAssetAlert>;
  withRecentAlerts(recentAlerts: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert> | null): ReliabilityAsset;

  /**
   * Number of live models for this asset.
   */
  readonly numLiveModels?: number;
  withNumLiveModels(numLiveModels: number | null): ReliabilityAsset;

  /**
   * The latest {@link ReliabilityAssetRegime}.
   */
  readonly latestRegime?: ReliabilityAssetRegime;
  withLatestRegime(latestRegime: IReliabilityAssetRegime | null): ReliabilityAsset;

  /**
   * The live model associated with the {@link ReliabilityAsset}, derived from the current
   * `ReliabilityAssetToModelRelation` with a status label of 'CHAMPION'.
   *
   * This retrieves the first (index 0) relation where the status is marked as 'CHAMPION',
   * indicating the active or leading model for the asset based on its project type.
   */
  readonly reliabilityRiskLiveModel?: ReliabilityMlModel;
  withReliabilityRiskLiveModel(reliabilityRiskLiveModel: IReliabilityMlModel | null): ReliabilityAsset;

  /**
   * Date of last update to model setup.
   */
  readonly lastModelSetupUpdateDate?: DateTime;
  withLastModelSetupUpdateDate(lastModelSetupUpdateDate: DateTime | Date | string | null): ReliabilityAsset;

  /**
   * The deployment status of the Reliability Risk model for the {@link ReliabilityAsset}.
   * This field reflects the current deployment status of the risk model associated with the asset.
   * - If there is at least one model with a 'CHAMPION' status, it is considered a 'Live Model'.
   * - If there are no 'CHAMPION' models but at least one risk model exists, it is considered as 'No Live Model'.
   * - If there are no risk models associated with the asset, the status will be 'No Trained Model'.
   */
  readonly reliabilityRiskModelDeploymentStatus?: string;
  withReliabilityRiskModelDeploymentStatus(reliabilityRiskModelDeploymentStatus: string | null): ReliabilityAsset;

  /**
   * The total number of current models (excluding retired) directly deployed on the asset.
   */
  readonly numModels?: number;
  withNumModels(numModels: number | null): ReliabilityAsset;

  /**
   * Alerts from the last 24 days.
   */
  readonly latestAlerts?: Array_Type<ReliabilityAssetAlert>;
  withLatestAlerts(latestAlerts: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert> | null): ReliabilityAsset;

  /**
   * Count of OPEN {@link ReliabilityAssetCase}'s on this asset.
   */
  readonly numOpenCases?: number;
  withNumOpenCases(numOpenCases: number | null): ReliabilityAsset;

  /**
   * Count of all direct latest reliability risk alerts and sensor alerts in the last 24 hours.
   */
  readonly numLatestDirectAlerts?: number;
  withNumLatestDirectAlerts(numLatestDirectAlerts: number | null): ReliabilityAsset;

  /**
   * List of all {@link WorkOrder} created for this asset in the last 30 days.
   */
  readonly pastMaintenance?: Array_Type<WorkOrder>;
  withPastMaintenance(pastMaintenance: Array_Type<WorkOrder> | Array<IWorkOrder> | null): ReliabilityAsset;

  /**
   * This field is used by the UI to show the translated value of {@link sensorMappingStatus}.
   */
  readonly displaySensorMappingStatus?: string;
  withDisplaySensorMappingStatus(displaySensorMappingStatus: string | null): ReliabilityAsset;

  /**
   * Calc for the ID of the most recent risk score (an {@link ReliabilityExpressionEngineFunction#}getLatestRiskScoreId) associated with this asset.
   */
  readonly riskScoreIdCalc?: string;
  withRiskScoreIdCalc(riskScoreIdCalc: string | null): ReliabilityAsset;

  /**
   * Number of sensors whose raw value can be used as features for this asset.
   */
  readonly numSensorFeatures?: number;
  withNumSensorFeatures(numSensorFeatures: number | null): ReliabilityAsset;

  /**
   * Last Configured Model Date for this {@link ReliabilityAsset}.
   */
  readonly lastConfiguredReliabilityRiskModelDate?: DateTime;
  withLastConfiguredReliabilityRiskModelDate(lastConfiguredReliabilityRiskModelDate: DateTime | Date | string | null): ReliabilityAsset;

  /**
   * Last update date, using `configurationLastUpdated` or fallback to `meta.updated`
   */
  readonly configurationLastUpdatedDate?: DateTime;
  withConfigurationLastUpdatedDate(configurationLastUpdatedDate: DateTime | Date | string | null): ReliabilityAsset;

  /**
   * The level of this asset in the hierarchy based on the calculated {@link #depth}.
   */
  readonly assetLevel?: string;
  withAssetLevel(assetLevel: string | null): ReliabilityAsset;

  /**
   * The {@link ReliabilityAssetAnomalousPeriod} to use when configuring a {@link MlModel}.
   */
  readonly anomalousPeriods?: Array_Type<ReliabilityAssetAnomalousPeriod>;
  withAnomalousPeriods(anomalousPeriods: Array_Type<ReliabilityAssetAnomalousPeriod> | Array<IReliabilityAssetAnomalousPeriod> | null): ReliabilityAsset;

  /**
   * Count of open {@link SensorHealthAlert}s on the descendents of this asset.
   */
  readonly numOpenDescendentSensorAlerts?: number;
  withNumOpenDescendentSensorAlerts(numOpenDescendentSensorAlerts: number | null): ReliabilityAsset;

  /**
   * Number of retired models for this asset.
   */
  readonly numRetiredModels?: number;
  withNumRetiredModels(numRetiredModels: number | null): ReliabilityAsset;

  /**
   * Calc for the value of the most recent risk score.
   */
  readonly riskScoreValueCalc?: number;
  withRiskScoreValueCalc(riskScoreValueCalc: number | null): ReliabilityAsset;

  /**
   * Number of {@link ReliabilityRiskMlModel}s currently deployed on this asset.
   */
  readonly numRiskModels?: number;
  withNumRiskModels(numRiskModels: number | null): ReliabilityAsset;

  /**
   * Number of direct work orders for the asset
   */
  readonly numWorkOrders?: number;
  withNumWorkOrders(numWorkOrders: number | null): ReliabilityAsset;

  /**
   * The risk score threshold for the asset to be considered as high risk. Used in the UI.
   */
  readonly displayedHighRiskThreshold?: number;
  withDisplayedHighRiskThreshold(displayedHighRiskThreshold: number | null): ReliabilityAsset;

  /**
   * The value of the most recent risk score
   * The Value for this field is generated via the {@link FieldStoredMetricCache} type and should
   * not be overwritten except for by that type.
   */
  readonly riskScoreValue?: number;
  withRiskScoreValue(riskScoreValue: number | null): ReliabilityAsset;

  /**
   * Model Config Runs for this {@link ReliabilityAsset}.
   */
  readonly modelConfigRunRelations?: Array_Type<ReliabilityAssetToModelConfigRunRelation>;
  withModelConfigRunRelations(modelConfigRunRelations: Array_Type<ReliabilityAssetToModelConfigRunRelation> | Array<IReliabilityAssetToModelConfigRunRelation> | null): ReliabilityAsset;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset and its descendents in the last 24 hours
   */
  readonly numLatestOpenAlerts?: number;
  withNumLatestOpenAlerts(numLatestOpenAlerts: number | null): ReliabilityAsset;

  /**
   * The risk level classification of the asset. Used in the UI.
   */
  readonly riskLevel?: string;
  withRiskLevel(riskLevel: string | null): ReliabilityAsset;

  /**
   * {@link ReliabilityAssetCase}s directly associated with this asset.
   */
  readonly directCases?: Array_Type<ReliabilityAssetCase>;
  withDirectCases(directCases: Array_Type<ReliabilityAssetCase> | Array<IReliabilityAssetCase> | null): ReliabilityAsset;

  /**
   * The ID of the most recent risk score
   * The Value for this field is generated via the {@link FieldStoredMetricCache} type and should
   * not be overwritten except for by that type.
   */
  readonly riskScoreId?: string;
  withRiskScoreId(riskScoreId: string | null): ReliabilityAsset;

  /**
   * This field indicates whether the mapping of {@link Sensor}s to a {@link ReliabilityAsset} has been completed.
   */
  readonly isSensorMappingComplete?: boolean;
  withIsSensorMappingComplete(isSensorMappingComplete: boolean): ReliabilityAsset;

  /**
   * The {@link AlertMutedPeriod}s associated with the {@link ReliabilityAsset}.
   */
  readonly mutedPeriods?: Array_Type<AlertMutedPeriod>;
  withMutedPeriods(mutedPeriods: Array_Type<AlertMutedPeriod> | Array<IAlertMutedPeriod> | null): ReliabilityAsset;

  /**
   * Display name for the current live model
   */
  readonly reliabilityRiskLiveModelName?: string;
  withReliabilityRiskLiveModelName(reliabilityRiskLiveModelName: string | null): ReliabilityAsset;

  /**
   * This field indicates the current status of the mapping of {@link Sensor}s to the {@link ReliabilityAsset}.
   */
  readonly sensorMappingStatus?: string;
  withSensorMappingStatus(sensorMappingStatus: string | null): ReliabilityAsset;

  /**
   * Count of open {@link ReliabilityAssetAlert}s on the descendents of this asset.
   */
  readonly numOpenDescendentAlerts?: number;
  withNumOpenDescendentAlerts(numOpenDescendentAlerts: number | null): ReliabilityAsset;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset in the last 24 hours.
   */
  readonly numLatestOpenDirectAlerts?: number;
  withNumLatestOpenDirectAlerts(numLatestOpenDirectAlerts: number | null): ReliabilityAsset;

  /**
   * Date of last update to model setup with correlation.
   */
  readonly lastCorrelationModelSetupUpdateDate?: DateTime;
  withLastCorrelationModelSetupUpdateDate(lastCorrelationModelSetupUpdateDate: DateTime | Date | string | null): ReliabilityAsset;

  /**
   * Count of open {@link SensorHealthAlert}'s on this asset in the last 24 hours.
   */
  readonly numLatestOpenSensorAlerts?: number;
  withNumLatestOpenSensorAlerts(numLatestOpenSensorAlerts: number | null): ReliabilityAsset;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset.
   */
  readonly numOpenDirectAlerts?: number;
  withNumOpenDirectAlerts(numOpenDirectAlerts: number | null): ReliabilityAsset;

  /**
   * The {@link ReliabilityAssetRegime} to use when configuring {@link MlModel}.
   */
  readonly regimes?: Array_Type<ReliabilityAssetRegime>;
  withRegimes(regimes: Array_Type<ReliabilityAssetRegime> | Array<IReliabilityAssetRegime> | null): ReliabilityAsset;

  /**
   * Count of open {@link SensorHealthAlert} on this asset.
   */
  readonly numOpenSensorAlerts?: number;
  withNumOpenSensorAlerts(numOpenSensorAlerts: number | null): ReliabilityAsset;

  /**
   * Latest Model Config Status for this {@link ReliabilityAsset}.
   *
   * Checks if any of the model config runs are in progress.
   * If yes, returns 'IN PROGRESS', else returns the status of the latest model config run.
   */
  readonly lastModelConfigStatus?: string;
  withLastModelConfigStatus(lastModelConfigStatus: string | null): ReliabilityAsset;

  /**
   * List of all {@link ReliabilityAssetCase}s belonging to this and all child assets.
   */
  readonly cases?: Array_Type<ReliabilityAssetCase>;
  withCases(cases: Array_Type<ReliabilityAssetCase> | Array<IReliabilityAssetCase> | null): ReliabilityAsset;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset and its direct children.
   */
  readonly numOpenDirectChildrenAlerts?: number;
  withNumOpenDirectChildrenAlerts(numOpenDirectChildrenAlerts: number | null): ReliabilityAsset;

  /**
   * Date of last model config update
   */
  readonly lastModelConfigUpdateDate?: DateTime;
  withLastModelConfigUpdateDate(lastModelConfigUpdateDate: DateTime | Date | string | null): ReliabilityAsset;

  /**
   * Number of candidate models for this asset.
   */
  readonly numCandidateModels?: number;
  withNumCandidateModels(numCandidateModels: number | null): ReliabilityAsset;

  /**
   * The risk score threshold for the asset to be considered as medium risk. Used in the UI.
   */
  readonly displayedMediumRiskThreshold?: number;
  withDisplayedMediumRiskThreshold(displayedMediumRiskThreshold: number | null): ReliabilityAsset;

  /**
   * List of all {@link WorkOrder} created for this asset in the last 30 days.
   */
  readonly plannedMaintenance?: Array_Type<WorkOrder>;
  withPlannedMaintenance(plannedMaintenance: Array_Type<WorkOrder> | Array<IWorkOrder> | null): ReliabilityAsset;

  /**
   * The {@link FailureMode}s associated with this asset through its {@link AssetClass}.
   */
  readonly failureModes?: Array_Type<FailureMode>;
  withFailureModes(failureModes: Array_Type<FailureMode> | Array<IFailureMode> | null): ReliabilityAsset;

  /**
   * Count of open {@link ReliabilityAssetAlert}'s on this asset and its descendents.
   */
  readonly numOpenAlerts?: number;
  withNumOpenAlerts(numOpenAlerts: number | null): ReliabilityAsset;

  /**
   * Risk Score to display in the UI.
   */
  readonly displayedRiskScore?: number;
  withDisplayedRiskScore(displayedRiskScore: number | null): ReliabilityAsset;

  /**
   * The total number of children level models (excluding retired) for the asset.
   */
  readonly numChildModels?: number;
  withNumChildModels(numChildModels: number | null): ReliabilityAsset;

  /**
   * Open {@link ReliabilityAssetCase}s belonging directly to this asset.
   */
  readonly numOpenDirectCases?: number;
  withNumOpenDirectCases(numOpenDirectCases: number | null): ReliabilityAsset;

  /**
   * Count of all latest reliability risk alerts and sensor alerts in the last 24 hours.
   */
  readonly numAllLatestAlerts?: number;
  withNumAllLatestAlerts(numAllLatestAlerts: number | null): ReliabilityAsset;

  /**
   * Translation of {@link riskLevel}.
   */
  readonly riskLevelDisplayName?: string;
  withRiskLevelDisplayName(riskLevelDisplayName: string | null): ReliabilityAsset;

  /**
   * Sensor alerts associated with this asset.
   */
  readonly sensorAlerts?: Array_Type<SensorHealthAlert>;
  withSensorAlerts(sensorAlerts: Array_Type<SensorHealthAlert> | Array<ISensorHealthAlert> | null): ReliabilityAsset;

  /**
   * Number of challenger models for this asset.
   */
  readonly numChallengerModels?: number;
  withNumChallengerModels(numChallengerModels: number | null): ReliabilityAsset;

  /**
   * Number of days since the last updated model.
   */
  readonly daysSinceLastUpdatedReliabilityRiskModels?: number;
  withDaysSinceLastUpdatedReliabilityRiskModels(daysSinceLastUpdatedReliabilityRiskModels: number | null): ReliabilityAsset;

  /**
   * Sensor alerts in the last 24 hours.
   */
  readonly latestSensorAlerts?: Array_Type<SensorHealthAlert>;
  withLatestSensorAlerts(latestSensorAlerts: Array_Type<SensorHealthAlert> | Array<ISensorHealthAlert> | null): ReliabilityAsset;

  /**
   * Used to determine which [projects](ReliabilityMl.Project) are associated with an asset,
   * even if no {@link ReliabilityMlDatasetPreparationRun}s or {@link ReliabilityMlModel}
   * are associated with this asset.
   */
  readonly assignedProjects?: Array_Type<ReliabilityMl.Project>;
  withAssignedProjects(assignedProjects: Array_Type<ReliabilityMl.Project> | Array<IReliabilityMl.Project> | null): ReliabilityAsset;

  /**
   * Geographical location of this asset, as a latitude and longitude.
   *
   * This is used to generate the map view of the asset under "Asset Map" page. And is independent from #location field
   * which holds the address of the asset.
   */
  readonly geoLocation?: LatLong;
  withGeoLocation(geoLocation: ILatLong | null): ReliabilityAsset;

  /**
   * Display name which attempts to use {@link ReliabilityAsset#name name} field;
   * otherwise, uses the {@link ReliabilityAsset#id id} field.
   */
  readonly displayName?: string;
  withDisplayName(displayName: string | null): ReliabilityAsset;

  /**
   * Configuration array for positioning components on the process flow diagram.
   */
  readonly diagramConfigs?: Array_Type<ProcessDiagramConfig>;
  withDiagramConfigs(diagramConfigs: Array_Type<ProcessDiagramConfig> | Array<IProcessDiagramConfig> | null): ReliabilityAsset;

  /**
   * Get a renderer that will show info on the metrics available for this source object to HTML.
   */
  renderer(): HtmlRenderer | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any): ReliabilityAsset | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string): ReliabilityAsset | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string): ReliabilityAsset | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityAsset | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityAsset;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityAsset;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityAsset;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityAsset>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityAsset>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityAsset;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityAsset;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityAsset;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityAsset;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityAsset;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityAsset;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityAsset;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityAsset;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): ReliabilityAsset;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string): ReliabilityAsset;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType): ReliabilityAsset;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityAsset;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityAsset;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityAsset;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityAsset;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): ReliabilityAsset;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): ReliabilityAsset;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): ReliabilityAsset;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): ReliabilityAsset;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): ReliabilityAsset;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): ReliabilityAsset;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityAsset;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityAsset;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityAsset;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityAsset;

  mergeJson(json: any): ReliabilityAsset;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityAsset;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityAsset;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityAsset>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityAsset> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityAsset> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityAsset>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityAsset> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityAsset> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityAsset> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityAsset>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityAsset>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityAsset;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityAsset;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityAsset;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityAsset;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityAsset;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): ReliabilityAsset;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): ReliabilityAsset | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityAsset;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): ReliabilityAsset;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityAsset;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityAsset> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityAsset;

  /**
   * API for returning a list of simple and compound metrics applicable for this type (alphabetically sorted)
   * @return a list of metrics
   */
  static listMetrics(): Array_Type<Metric> | null;

  /**
   * List of simple and compound metrics for this type
   * @return ListMetricsResult
   */
  static listMetricsByKind(): ListMetricsResult | null;

  /**
   * Returns the simple metric associated with the source type OR the parent if the one for source doesn't exist
   * @return the SimpleMetric for the source type or parent type based on whats present
   */
  static getSimpleMetric(metricName: string): SimpleMetric | null;

  /**
   * API to be used for evaluating single source with single metric
   * @param spec
   *          The spec which specifies the sourceId / start / end / metricName / grain
   * @return a Timeseries for the given spec
   */
  static evalMetric(spec?: EvalMetricSpec): Timeseries<any> | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return the result of evaluation containing multiple source and multiple metrics
   */
  static evalMetrics(spec?: EvalMetricsSpec): EvalMetricsResult | null;

  /**
   * API to be used when evaluating the following:
   *          sources     Metrics
   *             1          Many
   *            Many         1
   *            Many        Many
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @return stream of evaluation containing multiple source and multiple metrics one source at a time
   */
  static evalMetricsStream(spec?: EvalMetricsSpec): EvalMetricsResultStream | null;

  /**
   * This api should be used when all the metrics in the spec are aggregate metrics and are expected to return only a scalar value
   * Since evalMetrics and evalMetric api's return Timeseries for aggregate metrics with the same value repeated in data field
   * this api will be handy for just accessing the scalar value easily
   * @param spec
   *          EvalMetricsSpec specifying start / end / interval / ids (source ids) / expressions (this should be aggregate expressions ONLY)
   *          The onus of passing aggregate metrics is on the user and the api will pick the first value from the result
   *          and stick it in as the scalar value with the appropriate unit
   * @return The map of srcId -> expression -> Aggregated value with unit
   */
  static evalAggregateMetrics(spec?: EvalMetricsSpec): Map_Type<string, Map_Type<string, Dimension>> | null;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries for that 1 Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information
   * @return 1 timeseries which is an aggregation of all the sources' timeseries
   */
  static rollupMetric(spec?: RollupMetricSpec): Timeseries<any> | null;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetrics(spec?: RollupMetricSpec): Map_Type<string, Timeseries<any>> | null;

  /**
   * API to roll up all Timeseries of all the sources into a single Timeseries per Metric by passing custom metrics on the fly
   * @param spec
   *          The spec which specifies the rollup function to be applied to aggregate information / all the metrics to be rolled up / all sourceIds / start / end / grain
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return 1 timeseries per Metric which is an aggregation of all the sources' timeseries for that metric
   */
  static rollupMetricsWithMetadata(spec?: RollupMetricSpec, overrideMetrics?: Array_Type<Metric>): Map_Type<string, Timeseries<any>> | null;

  /**
   * Returns all the variables in the given expression
   * @param expression
   *                The expression for which you need to find variables
   * @return a list of all the variables in the metric expression
   */
  static metricVariables(expression: string): Array_Type<MetricVariable> | null;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return the result which contains the result of metric evaluations for various sources
   */
  static evalMetricsWithMetadata(spec?: EvalMetricsSpec, overrideMetrics?: Array_Type<Metric>): EvalMetricsResult | null;

  /**
   * The api should be used only for debugging and the metrics supplied here will be used during evaluation, even if they already exist in the system
   * If a certain metric used in the expression is not supplied in the list, the fetched copy will be used for evaluation
   * @param spec
   *          The spec which specifies all the sourceIds / metrics with the corresponding start / end / interval
   * @param overrideMetrics
   *          The list of metrics that need to be overridden during evaluation
   * @return stream of result which contains the result of metric evaluations for various sources one source at a time
   */
  static evalMetricsWithMetadataStream(spec?: EvalMetricsSpec, overrideMetrics?: Array_Type<Metric>): EvalMetricsResultStream | null;

  /**
   * The api should be used to export all the source data to s3
   * This includes extracting the relational data, timeseries data and tsDecl data
   * It internally creates a map reduce job to write data to s3
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @param numObjPerFile (optional)
   *          Number of objects per file to be created in S3
   * @param typeForSrcIds (optional)
   *          If this type is specified then ids for exporting src type objects will be picked from this type and not
   *          from the spec object
   * @return the export job object for tracking status
   */
  static exportMetricsDataJob(spec?: EvalMetricsSpec, additionalExportSpec?: AdditionalExportSpec, numObjPerFile?: number, typeForSrcIds?: Type): Export | null;

  /**
   * API used to import all the exported data in s3
   * @param filePrefix (optional)
   *          Optional filePrefix to used to get files from S3
   * @return the import job object for tracking status
   */
  static importMetricsDataJob(filePrefix?: string): Import | null;

  /**
   * The api should be used to download data for all the metrics / sources specified in the EvalMetricsSpec
   * This includes extracting the relational data, timeseries data and tsDecl data
   * @param spec
   *          Regular eval metric spec used during evaluation
   * @param additionalExportSpec
   *          Specify the types, their includes, and their filter for which you need to extract data.
   *          e.g. {include:"a,b,c", filter:"b > 5", typeName : "ServicePoint", doAppendSrcId: true}
   * @return an ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static extractMetricsData(spec?: EvalMetricsSpec, additionalExportSpec?: AdditionalExportSpec): ExportedObj | null;

  /**
   * API is supposed to import the data that was exported using the extractMetricsData api
   * @param input
   *          Input is a map of typeName to array of array of objects grouped by a batch size
   *          ExportedObj which contains map of typeName -> [[10k_Objs],[10k_Objs],[10k_Objs]....]
   */
  static importMetricsData(input?: ExportedObj): void;

  /**
   * This api is used to refresh metrics cache. Subsequent evalMetrics call should serve results from cache. Metrics cache should be defined
   * via "<type-name>-MetricsCacheConfig" TenantConfig. Only metrics that are specified in "<type-name>-MetricsCacheConfig" will be cached.
   * There is no invalidation of this cache and should be refreshed manually
   * @param ids
   *          The src ids that need to be cached.
   * @param metricNames (optional)
   *          The list of metrics that need to be cached. This could be simple and/or compound or a mix.
   *                                          This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param startDate (optional)
   *          Optional evaluation start date for caching metrics
   * @param endDate (optional)
   *          Optional evaluation end date for caching metrics
   */
  static refreshMetricsCache(ids?: Array_Type<string>, metricNames?: Array_Type<string>, startDate?: DateTime, endDate?: DateTime): void;

  /**
   * This api should be used to kick of the metrics cache refresh map reduce job
   * @param metricNames (optional)
   *                The list of metrics whose cache needs to be refreshed. This could be simple and/ or compound or a mix
   *                This list should be a subset of metrics from "<type-name>-MetricsCacheConfig" tenant config.
   * @param filter (optional)
   *                Filter out certain source ids
   * @param startDate (optional)
   *                Optional start date for caching metrics
   * @param endDate (optional)
   *                Optional end date for caching metrics
   */
  static startMetricsCacheRefreshJob(metricNames?: Array_Type<string>, batchSize?: number, filter?: string, startDate?: DateTime, endDate?: DateTime): MetricsCacheRefreshJob | null;

  /**
   * This provides the status for the metrics cache refresh job
   */
  static metricsCacheRefreshJobStatus(): MapReduceStatus | null;

  /**
   * API to generate stats like min / max / avg / count / gaps/ unavailable / earliest data point / latest data point
   * for a metric source combination in a given time range
   * @param ids
   *         list of ids that stats need to be computed for
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static generateMetricsStats(ids?: Array_Type<string>, metricNames?: Array_Type<string>, startDate?: DateTime, endDate?: DateTime, interval?: string, testHash?: boolean): void;

  /**
   * Helper function to kick off metrics stats generation for metrics & sources combination for a given time range
   * @param metricNames
   *         list of metric names that stats need to be computed for. These could be existing Simple and / or Compound Metrics
   * @param batchSize
   *         No of sources to be included in 1 map reduce job: Default: 100
   * @param filter
   *         Filter criteria on the source type
   * @param startDate
   *         Optional evaluation start date for stats generation. Default: First day of the current year
   * @param endDate
   *         Optional evaluation end date for stats generation. Default: Five years before the startDate
   * @param interval
   *         Optional evaluation interval. Default: YEAR
   * @param testHash
   *         When this flag is set, instead of persisting stats, the hash value is compared to the previously computed hash value if present
   */
  static startMetricsStatsJob(metricNames?: Array_Type<string>, batchSize?: number, filter?: string, startDate?: DateTime, endDate?: DateTime, interval?: string, testHash?: boolean): MetricsStatsJob | null;

  /**
   * API to report the status of currently running metrics stats job
   */
  static metricsStatsJobStatus(): MapReduceStatus | null;

  /**
   * Provides histogram data for a given set of ids and metrics.
   *
   * The period of histogram data can be specified through either period parameter or start and end parameters,
   * and period parameter has higher priority than start and end parameters which means the internal API will choose
   * period other than start and end if period parameter is available.
   *
   * @param ids
   *          Array of source ids
   * @param metricName
   *          CompoundMetricId
   * @param period
   *          Time period (e.g., last12m, 2012, 2013, 2014)
   * @param start
   *          Start of benchmarking period
   * @param end
   *          End of benchmarking period
   * @param ignoreZeroValues
   *          Flag indicates whether to ignore zero values.
   *          If true, any points with a zero value will not be factored into the histogram
   * @param binningType
   *          Whether to bin by 'value' or 'quantile'
   * @param numberBins
   *          How many bins to split the data into
   * @return Histogram data contains buckets info and data info
   */
  static getDistribution(ids: Array_Type<string>, metricName: string, period?: string, start?: DateTime, end?: DateTime, ignoreZeroValues?: boolean, binningType?: string, numberBins?: number): HistogramEvaluationResult | null;

  /**
   * Compute stats for every timeseries obtained by the metric / source combination
   * @param spec
   *          Provide the spec for which stats need to be computed
   * @return stats for every timeseries obtained for every source metric combination
   */
  static evalMetricsStats(spec: EvalMetricsSpec): Map_Type<string, Map_Type<string, TimeseriesStats>> | null;

  /**
   * The motivation for Eval Metrics Batch mode is to compile expressions, pre-fetch sources, plug-in variables and
   * bindings for the expressions exactly once and call evaluate metrics for various time ranges multiple times
   * This ends up re-using the fnd cache/ asTimeseries cache too
   * Initializes (Compiles expressions, pre-fetches sources, etc) eval metrics in batch mode
   * @param spec
   *          EvalMetricsSpec containing all the metrics and the largest time-period that the individual runs are
   *          going to be called with
   * @return a cache key that eval metrics produces for this spec (this cache is on the current action)
   */
  static startEvalMetricsBatch(spec: EvalMetricsSpec): string | null;

  /**
   * Cleans up and closes the eval metrics batch
   * @param keys
   *              Cleans up the eval metrics batch objects for the given cache keys
   * @return the current number of the cached evaluator instances
   */
  static endEvalMetricsBatch(key: string): number | null;

  /**
   * Runs evalMetrics for the given start and end by using the cached copy of the objects in startEvalMetricsBatch
   * @param key
   *              Cache key to use to load cached objects (prefetched objects, spec, compiled exprs) during evalMetrics
   * @param start
   *              start date for metrics evaluation
   * @param end
   *              end date for metrics evaluation
   * @return EvalMetricsResult for the given start and end and the spec from the cached key
   */
  static evalMetricsBatch(key: string, start: DateTime, end: DateTime): EvalMetricsResult | null;

  /**
   * API to retrieve the eval metrics batch key based on the spec. Returns null if nothing is found
   * @param spec
   *          Eval metrics spec to be used to figure out the eval metrics batch key
   * return the eval metrics batch key for the spec or null if one does not exist
   */
  static evalMetricsBatchKey(spec: EvalMetricsSpec): string | null;

  /**
   * Specifies whether the 'child' EvalMetricsSpec is a subset of 'this' EvalMetricsSpec
   * This currently supports checking for only time range subset. If ids / metrics / grain / timezone/ cache/ unitId/
   * filter/ limit / include do not match as is it will return false.
   * @param this
   *          Parent EvalMetricsSpec which acts as the superset
   * @param child
   *          Child EvalMetricsSpec which acts as the subset
   * @return whether child is a subset of this EvalMetricsSpec
   */
  static isSubset(parent: EvalMetricsSpec, child: EvalMetricsSpec): boolean;

  /**
   * API to estimate the size of objects in eval metrics batch cache.
   * This will give a breakdown of the metric evaluator instance (compiled exprs, source fetch with hierarchies, other
   * info to be used during evaluation), normalized data cache, and tsDecl cache
   * @param key
   *        Eval Metrics Batch cache key for which size needs to be estimated
   * @return object that gives the size of evaluator, normalized data cache and tsDecl cache
   */
  static estimateEvalMetricsBatchCacheSize(key: string): EvalMetricsBatchCacheSize | null;

  /**
   * Lists all the cached keys in the eval metrics batch
   * @return list of keys
   */
  static listEvalMetricsBatchKeys(): Array_Type<string> | null;

  /**
   * Get EvalPlan to be used to metric data export. This method will return the hierarchies constructed and
   * src type fetch spec
   * @param Eval metrics spec that would be used for evalMetrics
   * @return EvalPlan with hierarchies and srcTypeFetchSpec populated
   */
  static getExportEvalPlan(spec?: EvalMetricsSpec): EvalPlan | null;

  /**
   * For internal use only:
   * Generate eval metrics spec from existing spec and overridden metrics. This is particularly useful when spec has bindings
   * with multiple values. In case of no / single bindings this will return the same spec back to be used for evaluation
   */
  static generateEvalMetricsSpec(spec: EvalMetricsSpec, overrideMetrics?: Array_Type<Metric>): Pair<EvalMetricsSpec, Array_Type<Metric>>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec): FetchResult<ReliabilityAsset>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<ReliabilityAsset>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<ReliabilityAsset> | null;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<ReliabilityAsset>> | null;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec): Stream<string> | null;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

  /**
   * This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
   * Support column alias for evaluate & evalMetrics by passing an ObjNode
   * e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
   * e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
   */
  static eval(spec?: EvalSpec): Data | null;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluate(spec: EvaluateSpec): EvaluateResult | null;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluateTupleStream(spec: EvaluateSpec): Stream<CellTuple> | null;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
   * the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
   * {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
   * conditions are met.
   *
   * @param spec
   *           Specification of projection expressions to evaluate and what objs to evaluate them on.
   * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
   *         expressions) with the evaluated result.
   */
  static evaluatePii(spec: EvaluateSpec): EvaluateResult | null;

  /**
   * Evaluates a single projection expression for timeseries data.
   *
   * Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
   * or {@link MetricEvaluatable.evalMetrics} should be used instead.
   *
   * @param spec
   *           Specification of the projection expression and which timeseries to evaluate.
   * @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
   *
   * @see MetricEvaluatable
   */
  static tsEval(spec: TSEvalSpec): Obj | null;

  /**
   * All features defined for this type
   */
  static features(): Stream<Feature> | null;

  /**
   * Evaluate i.e. retrieve data for a given feature for this instance
   * @param feature
   *        feature name used to read data
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * Assuming that there are two features named **activePowerAvgFeature** and **generatorRotationSpeedAvgFeature** on a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1** is the id of one of those windturbines, then:
   * ```python
   * wt1 = c3.WindTurbine.make({'id':'TURBINE-1'})
   * wt1.evalFeature(feature="activePowerAvgFeature", start='2018-01-01', end='2022-01-01')
   * wt1.evalFeature(feature="generatorRotationSpeedAvgFeature", start='2018-01-01', end='2022-01-01')
   * ```
   */
  evalFeature(feature: string, spec?: EvalFeatureSpec): Data | null;

  /**
   * Evaluate i.e. retrieve data for a given feature set for this instance
   * @param featureSet
   *        featureSet used to read data
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * Assuming that there are two features named **activePowerAvgFeature** and **generatorRotationSpeedAvgFeature** on a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1** is the id of one of those windturbines.
   * We create (or already have a) Feature.Set like below:
   * ```python
   * wt1 = c3.WindTurbine.make({'id':'TURBINE-1'})
   * feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
   * feature_set.materialize(True)
   * wt1.evalFeatureSet(featureSet=feature_set, start='2018-02-01', end='2018-03-01')
   * ```
   */
  evalFeatureSet(featureSet: Feature.Set, spec?: EvalFeatureSpec): Data | null;

  /**
   * Evaluate i.e. retrieve data for a given feature set and list of instances
   * order of subject column in returned data will be same as that of provided subject batch
   *
   * @param batch
   *        subjects used to read data
   * @param featureSet
   *        feature set used to read data
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * Let's assume that we create (or already have a) Feature.Set like below:
   * ```python
   * feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
   * feature_set.materialize(True)
   * c3.WindTurbine.evalFeatureSetBatch(batch=['TURBINE-1', 'TURBINE-1'],  featureSet=feature_set, start='2018-02-01', end='2018-03-01')
   * ```
   *
   * For the same feature column, if the ValueType of the retrieved data is not the same across the subjects in the batch,
   * it'll be unable to stitch the data, and an error will be thrown. The error message will provide information about the ValueTypes
   * and the first 10 subjects that has such valueType in the evaluated data.
   * User should refer to the definition of feature/feature set and query each subject to identify the root cause of this inconsistency.
   *
   * e.g. {Obj: [sub1, sub2], Double: [sub3]} means for a feature column, the ValueType for sub1 and sub2 are Obj,
   * while for sub3 the ValueType is Double.
   */
  static evalFeatureSetBatch(batch: Array_Type<ReliabilityAsset>, featureSet: Feature.Set, spec?: EvalFeatureSpec): Data | null;

  /**
   * Evaluate i.e. retrieve data for a given feature set and instances satisfying a filter expression
   * Please note that the output will have subjects ordered in the same way as fetched from the db using the provided filter.
   * By default, its in the ascending order of the `id` field.
   *
   * @param featureSet
   *        feature set used to read data
   * @param filter
   *        filter used to filter subjects associated with the feature set
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * Let's assume that we create (or already have a) Feature.Set like below:
   * ```python
   * feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
   * feature_set.materialize(True)
   * c3.WindTurbine.evalFeatureSetBatch(filter="name=='TURBINE-1'", featureSet=feature_set, start='2018-02-01', end='2018-03-01')
   * ```
   * Please note that all the nuances of merging multiple features together are part of the Feature.Set itself.
   * The above call will allow us to eval feature set along in a specific timerange exposed via EvalFeatureSpec.
   *
   * For the same feature column, if the ValueType of the retrieved data is not the same across the subjects in the batch,
   * it'll be unable to stitch the data, and an error will be thrown. The error message will provide information about the ValueTypes
   * and the first 10 subjects that has such valueType in the evaluated data.
   * User should refer to the definition of feature/feature set and query each subject to identify the root cause of this inconsistency.
   *
   * e.g. {Obj: [sub1, sub2], Double: [sub3]} means for a feature column, the ValueType for sub1 and sub2 are Obj,
   * while for sub3 the ValueType is Double.
   */
  static evalFeatureSetBatch(filter: string, featureSet: Feature.Set, spec?: EvalFeatureSpec): Data | null;

  /**
   * Evaluate i.e. retrieve data for a list of features for this instance
   * @param features
   *        collection of feature names used to read data. This collection must contain distinct features whose order
   *        will determine the order of columns in the output Data. Duplicate features are disallowed.
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * ```python
   * wt.evalFeatures(features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
   * ```
   */
  evalFeatures(features: Array_Type<string>, spec?: EvalFeaturesSpec): Data | null;

  /**
   * Evaluate i.e. retrieve data for a list of features and list of instances
   * @param batch
   *        subjects used to read data
   * @param features
   *        collection of feature names used to read data. This collection must contain distinct features whose order
   *        will determine the order of columns in the output Data. Duplicate features are disallowed.
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * ```python
   * c3.WindTurbine.evalFeaturesBatch(batch=['TURBINE-1', 'TURBINE-1'], features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
   * ```
   */
  static evalFeaturesBatch(batch: Array_Type<ReliabilityAsset>, features: Array_Type<string>, spec?: EvalFeaturesSpec): Data | null;

  /**
   * Evaluate i.e. retrieve data for a list of features and instances satisfying a filter expression
   * @param features
   *        collection of feature names used to read data. This collection must contain distinct features whose order
   *        will determine the order of columns in the output Data. Duplicate features are disallowed.
   * @param filter
   *        filter used to filter subjects associated with the features
   * @param spec
   *        optional parameter specification to customize eval
   * @return
   *        evaluated data
   *
   * e.g:
   * ```python
   * c3.WindTurbine.evalFeaturesBatch(filter="name=='TURBINE-2'", features=['activePowerAvgFeature','generatorRotationSpeedAvgFeature'], start='2018-02-01', end='2018-03-01', interval='MONTH')
   * ```
   */
  static evalFeaturesBatch(filter: string, features: Array_Type<string>, spec?: EvalFeaturesSpec): Data | null;

  /**
   * Creates a Data instance with two columns, subject and datetimes
   */
  dataFromDates(dates?: Array_Type<DateTime>): Data | null;

  /**
   * Creates a Data instance with two columns, subject and timeranges
   */
  dataFromTimeRanges(timeRanges?: Array_Type<TimeRange>): Data | null;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): Map_Type<string, WithKey>;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string): ReliabilityAsset | null;

  /**
   * Retrieve the {@link MlModel.Route routes} currently deployed on the subject, in the given {@link MlProject}.
   *
   * Usage:
   * ```python
   * # returns all champion routes for that WindTurbine in the project "PredictiveMaintenance"
   * pm_project = c3.MlProject.forId("PredictiveMaintenance")
   * routes = windturbine.routes(statusFilter="label == 'CHAMPION'", project=pm_project)
   * ```
   *
   * @param project
   *    the project from which the routes are retrieved.
   * @param statusFilter
   *    optional filter to get a subset of the routes; the filter is applied on the {@link MlDeploymentStatus}
   *    field of the {@link MlModel.Route routes}.
   * @param skipValidation
   *    optional flag to skip validation of the project.
   * @returns the routes deployed for the subject.
   *
   * @see MlModel.Router#routes
   */
  routes(project: MlProject, statusFilter?: string, skipValidation?: boolean): Array_Type<MlModel.Route> | null;

  /**
   * Retrieve the {@link MlModel models} currently deployed on the subject, in the given {@link MlProject}.
   *
   * Usage:
   * ```python
   * # returns all champion models for that WindTurbine in the project "PredictiveMaintenance"
   * pm_project = c3.MlProject.forId("PredictiveMaintenance")
   * models = windturbine.models(statusFilter="label == 'CHAMPION'", project=pm_project)
   * ```
   *
   * @param project
   *    the project from which the models are retrieved.
   * @param statusFilter
   *    optional filter to get a subset of the models; the filter is applied on the {@link MlModel.Route.Status}
   *    of the {@link MlModel.Route routes} applicable to the subject.
   * @returns the models deployed for the subject.
   *
   * @see MlModel.Router#models
   */
  models(project: MlProject, statusFilter?: string): Array_Type<MlModel> | null;

  /**
   * Retrieve the {@link MlModel models} currently deployed on each subject in the passed array, in the given
   * {@link MlProject}.
   *
   * @param subjects
   *    the subjects for which the models are retrieved.
   * @param project
   *    the project from which the models are retrieved.
   * @param statusFilter
   *    optional filter to get a subset of the models; the filter is applied on the {@link MlModel.Route.Status}
   *    of the {@link MlModel.Route routes} applicable to the subjects.
   * @return a map where the keys are the ids of the subjects and the values are the models deployed on that subject.
   *
   * @see #models
   */
  static modelsPerSubject(subjects: Array_Type<MlSubject>, project: MlProject, statusFilter?: string): Map_Type<string, Array_Type<MlModel>> | null;

  /**
   * Retrieve the {@link MlModel models} currently deployed on each subject in the passed array, in the given
   * {@link MlProject}.
   *
   * @param subjectFilter
   *          the filter to select subjects for which the models are retrieved
   * @param project
   *          the project from which the models are retrieved;
   * @param statusFilter
   *          optional filter to get a subset of the models; the filter is applied on the {@link MlModel.Route.Status}
   *          of the {@link MlModel.Route routes} applicable to the subjects
   * @param project
   *          the project from which the models are retrieved;
   * @return a map where the keys are the ids of the subjects and the values are the models deployed on that subject
   *
   * @see #models
   */
  static modelsPerSubject(subjectFilter: string, project: MlProject, statusFilter?: string): Map_Type<string, Array_Type<MlModel>> | null;

  /**
   * Retrieve the {@link MlModel models} and {@link MlModel.Route routes} currently deployed on each subject in the passed array.
   * It is used by {@link MlSubject.process}, {@link MlSubject.processBatch}, {@link MlSubject.interpret}, {@link MlSubject.interpretBatch}
   *
   * @param subjects
   *          the subjects for which the models and routes are retrieved.
   * @param spec
   *          Configuration to retrieve models and routes based on filters.
   * @return a map where the keys are ids of model and value is a map, whose keys are ids of routes and value is
   * a list of {@link MlSubject}s.
   */
  static routesSubjectsPerModel(subjects: Array_Type<MlSubject>, spec: MlSubject.OperationSpec): Map_Type<string, Map_Type<string, Array_Type<MlSubject>>>;

  /**
   * @return the list of {@link MlProject} that are assigned to this type.
   *
   * @see MlProject#subjectType
   */
  static projects(): Array_Type<MlProject> | null;

  /**
   * Compute predictions for the subject with the models that are currently deployed on that subject.
   *
   * Usage:
   * ```python
   * result = windturbine.process(
   *    start="2022-06-01",
   *    end="2022-06-05",
   *    statusFilter="label == 'CHALLENGER'",
   *    project="PredictiveMaintenance"
   * )
   *
   * @param spec
   *          options to configure the time range of predictions and the {@link MlModel models} to use
   * @return the predictions for each model
   *
   * @see #models
   * @see #routes
   */
  process(spec: MlSubject.OperationSpec): MlSubject.ProcessResult;

  /**
   * Compute predictions for the subject with the {@link MlModel.Route.Status.Label#CHAMPION CHAMPION} model for the
   * given {@link MlProject}. If there is no such model, the output will contain no prediction.
   *
   * @param spec
   *          options to configure the time range of predictions;
   *          note that the {@link MlSubject.OperationSpec#statusFilter} will be overridden
   * @return the predictions generated by the CHAMPION model
   *
   * @see #process
   */
  processWithChampion(spec: MlSubject.OperationSpec): MlSubject.ProcessResult;

  /**
   * Compute predictions for a batch of subjects. This is invoked within {@link MlSubject.ProcessJob#processBatch}
   *
   * The method optimizes processing by fetching the models before performing batch inference, and achieves best
   * performance for batches of subjects that have same models deployed to them (see {@link MlModel.Route}).
   *
   * **NOTE**: The method is synchronous and is not meant to be used for large population. For large-scale inference
   * tasks use {@link MlSubject.ProcessJob} (see {@link startProcessJob}).
   */
  static processBatch(subjects?: Array_Type<MlSubject>, spec: MlSubject.OperationSpec): MlSubject.ProcessResult;

  /**
   * Create and start a {@link MlSubject.ProcessJob} to compute the predictions for multiple subjects
   *
   * @param project
   *          options for the {@link MlSubject.ProcessJob}
   * @param spec
   *          options for the {@link MlSubject.ProcessJob}
   * @return a handle to the asynchronous job execution.
   */
  static startProcessJob(spec: MlSubject.OperationJobSpec): MlOperationRun<MlSubject.OperationJob.Run>;

  /**
   * Computes predictions and interpretation results for the subject with the models that are currently deployed
   * on that subject.
   *
   * Usage:
   * ```python
   * result = windturbine.interpret(
   *    start="2022-06-01",
   *    end="2022-06-05",
   *    statusFilter="label == 'CHALLENGER'",
   *    project="PredictiveMaintenance"
   * )
   *
   * @param spec
   *          options to configure the time range of predictions and the {@link MlModel models} to use
   * @return the predictions and interpretations for each model
   *
   * @see #models
   * @see #routes
   */
  interpret(spec: MlSubject.OperationSpec): MlSubject.InterpretResult;

  /**
   * Computes predictions and interpretation results for the subject with the
   * {@link MlModel.Route.Status.Label#CHAMPION CHAMPION} model for the given {@link MlProject}. If there is no
   * such model, the output will contain no prediction/interpretations.
   *
   * @param spec
   *          options to configure the time range of predictions;
   *          note that the {@link MlSubject.OperationSpec#statusFilter} will be overridden
   * @return the predictions generated by the CHAMPION model
   *
   * @see #interpret
   */
  interpretWithChampion(spec: MlSubject.OperationSpec): MlSubject.InterpretResult;

  /**
   * Compute predictions and interpretations for a batch of subjects. This is invoked within {@link MlSubject.InterpretJob#processBatch}
   *
   * The method optimizes processing by fetching the models before performing batch inference, and achieves best
   * performance for batches of subjects that have same models deployed to them (see {@link MlModel.Route}).
   *
   * **NOTE**: The method is synchronous and is not meant to be used for large population. For large-scale inference
   * tasks use {@link MlSubject.InterpretJob} (see {@link startInterpretJob}).
   */
  static interpretBatch(subjects?: Array_Type<MlSubject>, spec: MlSubject.OperationSpec): MlSubject.InterpretResult;

  /**
   * Create and start a {@link MlSubject.InterpretJob} to compute the predictions and interpretations for
   * multiple subjects.
   *
   * @param project
   *          {@link MlProject} to retrieve the models for
   * @param spec
   *          options for the {@link MlSubject.InterpretJob}
   * @return a handle to the asynchronous job execution.
   */
  static startInterpretJob(spec: MlSubject.OperationJobSpec): MlOperationRun<MlSubject.OperationJob.Run>;

  /**
   * Used internally to fetch as a stream (e.g. FetchResultOvi)
   */
  static fetchOvi(spec?: FetchSpec): any | null;

  /**
   * Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
   *
   * @param include
   *           Optional include spec to retrieve.
   * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
   *         those fields will be returned. Otherwise the entire obj will be returned.
   */
  get(include?: string): ReliabilityAsset | null;

  /**
   * Gets an instance of a single obj in it's leaf type if the type is extendable.  If the caller is not authorized
   * to fetch the obj, it will not be returned.
   *
   * @param include
   *           Optional include spec to retrieve.  Note that the include spec should reference only fields that are
   *           valid in the returned obj's type.  Otherwise an error may be thrown.
   * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
   *         those fields will be returned. Otherwise the entire obj will be returned.
   */
  getSpecific(include?: string): ReliabilityAsset | null;

  /**
   * Function to check if an obj was already fetched with an include that contains at least the fields of a specified
   * include and fetches the missing data if it wasn't.  The returned instance, by default will be the original instance
   * if it included at least the data for the requested include spec.  Otherwise it will perform a fetch with the
   * specified include and return that instance.  See {@link GetMissingSpec} for various options available governing
   * the behavior.
   *
   * @param spec
   *           Spec that controls various aspects of the function's behavior.
   * @return instance of the obj with all requested fields.
   */
  getMissing(spec: GetMissingSpec): ReliabilityAsset;

  /**
   * Gets an obj instance directly from Cassandra, bypassing the normal fetch framework.  It is only valid for C3 types
   * that are stored in Cassandra.
   *
   * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
   * apis as fast as direct IO apis.
   * Use with caution!!!
   *
   * @param include
   *           Optional include spec to retrieve.
   * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
   *         those fields will be returned. Otherwise the entire obj will be returned.
   */
  getDirect(include?: string): ReliabilityAsset | null;

  /**
   * Applies a reverse edit (e.g. VersionEdit) to an instance.
   *
   * @param versionEdit
   *        Reverse edit to apply
   *
   * @return The instance after applying the reverse edit.
   */
  applyReverseEdit(versionEdit: VersionEdit): ReliabilityAsset;

  /**
   * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
   * instance already exist.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
   *         will have only those fields populated. Otherwise only the id field will be populated.
   */
  create(spec?: UpsertSpec): ReliabilityAsset | null;

  /**
   * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances already exist.
   *
   * @param objs
   *           New objs to create.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
   *         include spec is specified in the 'spec.include' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static createBatch(objs: Array_Type<ReliabilityAsset>, spec?: UpsertSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances already exist.
   *
   * @param objs
   *           New objs to create.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
   *          `spec.includeObjsInResults`.
   */
  static createBatchObjStream(objs: Stream<ReliabilityAsset>, spec?: CreateBatchObjStreamSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
   * instance does not already exist.
   *
   * @param srcObj
   *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
   *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
   *         obj will have only those fields populated. Otherwise only the id field will be populated.
   */
  update(srcObj?: ReliabilityAsset, spec?: UpsertSpec): ReliabilityAsset | null;

  /**
   * Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
   * exception will be thrown.
   *
   * @param srcObj
   *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
   *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
   *        doesn't already exist.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
   *         returned obj will have only those fields populated. Otherwise only the id field will be populated.
   */
  upsert(srcObj?: ReliabilityAsset, spec?: UpsertSpec): ReliabilityAsset | null;

  /**
   * Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
   * updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
   * is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
   * explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
   * {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
   *
   * For collections, the merge operation is applied to every element in the source and updated collection rather than
   * merging the collections themselves.  This means that every element will be merged with the element with the same
   * key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
   * add/append elements to a collection.
   *
   * Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
   *
   * If the operation fails an exception will be thrown.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.
   *
   * @see Mergespec#csvInclude
   */
  merge(spec?: MergeSpec): ReliabilityAsset | null;

  /**
   * Merges an instance of a C3 type if it exists and creates it if it doesn't.
   *
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created or updated obj.
   */
  merge(mergeInclude: string, spec?: MergeSpec): ReliabilityAsset | null;

  /**
   * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   *
   * @return The created or updated obj.
   */
  touch(spec?: TouchSpec): ReliabilityAsset | null;

  /**
   * Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
   * returned {@link ObjList}.  This will fail if any of the instances don't already exist.
   *
   * @param objs
   *        Updated objs.
   * @param srcObjs
   *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
   *        diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
   *        replace the existing one.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
   *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static updateBatch(objs: Array_Type<ReliabilityAsset>, srcObjs?: Array_Type<ReliabilityAsset>, spec?: UpsertSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
   * called again to provide updated instances to be updated. If the operation fails for other reasons and
   * {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   * @param spec
   *        Various parameters that control the operation of the operation
   * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
   *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static updateObjs(objs: λSupplier<Array_Type<ReliabilityAsset> | null>, spec?: UpsertSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
   * fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *        Updated or new objs.
   * @param srcObjs
   *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
   *        diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
   *        existing one if it doesn't already exist.
   * @param spec
   *        Various parameters that control the operation of function.
   * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
   *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static upsertBatch(objs: Array_Type<ReliabilityAsset>, srcObjs?: Array_Type<ReliabilityAsset>, spec?: UpsertSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
   * fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
   * If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
   * default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
   * {@link ObjList}.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   * @param spec
   *        Various parameters that control the operation of the operation
   * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
   *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
   *         fields populated. Otherwise only the id field will be populated.
   */
  static upsertObjs(objs: λSupplier<Array_Type<ReliabilityAsset> | null>, spec?: UpsertSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
   * objs will be considered an error.
   *
   * @param objs
   *        Objs to touch.
   *
   * @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
   *         include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static touchBatch(objs: Array_Type<ReliabilityAsset>, spec?: TouchSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
   * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
   * merge} function.
   *
   * If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *           Objs to merge.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#mergeInclude
   * @see Mergespec#csvInclude
   */
  static mergeBatch(objs: Array_Type<ReliabilityAsset>, spec?: MergeSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
   * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
   * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
   * merge} function.
   *
   * If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *           Objs to merge.
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#csvInclude
   */
  static mergeBatch(objs: Array_Type<ReliabilityAsset>, mergeInclude: string, spec?: MergeSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
   * conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
   * fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
   * C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
   * operation is described in the {@link merge} function.
   *
   * @param objs
   *        Lambda providing objs to be upserted
   *
   * @param objs
   *        Lambda providing objs to be merged
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
   *         true.  Only the id field will be populated.
   *
   * @see Mergespec#csvInclude
   */
  static mergeObjs(objs: λSupplier<Array_Type<ReliabilityAsset> | null>, mergeInclude: string, spec?: MergeSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
   * functions, the set of fields to be merged can be controlled by specifying an include spec in either
   * {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
   * can be controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as
   * in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The number of objs that were merged.
   */
  static mergeAll(mergeObj: ReliabilityAsset, spec?: MergeAllSpec): number | null;

  /**
   * Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
   * controlled by specifying the {@link MergeAllspec#filter}.  Valid filter expressions follow the same rules as in
   * {@link FetchSpec#filter}.  If not specified, all instances will be merged.
   *
   * @param mergeInclude
   *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
   *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
   *           However, fields that wouldn't be persisted as part of the operation are ignored.
   *
   *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
   *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
   *           even if they are null in the input.  Any existing data for included null input fields will be removed.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The number of objs that were merged.
   */
  static mergeAll(mergeObj: ReliabilityAsset, mergeInclude: string, spec?: MergeAllSpec): number | null;

  /**
   * Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
   *
   * If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * @param spec
   *         Various parameters that control the operation of function.
   * @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
   *
   * @see Ann.Db#archive
   */
  remove(spec?: UpsertSpec): boolean;

  /**
   * Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
   * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
   * reported in the returned {@link ObjList}.
   *
   * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * @param objs
   *         Objs to remove.
   * @param spec
   *         Various parameters that control the operation of function.
   * @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
   *
   * @see Ann.Db#archive
   */
  static removeBatch(objs: Array_Type<ReliabilityAsset>, spec?: UpsertSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Removes multiple instances of a C3 type based.
   *
   * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
   * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
   * function.
   *
   * @param spec
   *         Spec controlling the operation
   * @param confirm
   *         Must be specified as true.  Otherwise request will be rejected.
   * @return The number of objs removed.  Note that under some circumstances the total number removed may not be
   *         known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
   *         connection can't return the value).  In those cases, this will return -1.
   */
  static removeAll(spec?: RemoveAllSpec, confirm: boolean): number;

  /**
   * Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
   *
   * @param objs
   *         Updated or new objs.  Any existing objs that aren't included in objs will be removed.
   * @param spec
   *         Various parameters that control the operation of function.
   * @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
   *         specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
   *         populated. Otherwise only the id field will be populated.
   */
  static replace(objs: Array_Type<ReliabilityAsset>, spec?: UpsertSpec): ObjList<ReliabilityAsset> | null;

  /**
   * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
   * {@link removeBatch} functions). If the operation fails an exception will be thrown.
   *
   * @return The recovered obj instance with all of its fields populated.
   *
   * @see Ann.Db#archive
   */
  unremove(): ReliabilityAsset | null;

  /**
   * Optional function to call during upsert/create/merge operations when an instance is being created and no value for
   * the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
   * short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
   * generate the id based on other field values present in the input.  Note that if an instance already exists with the
   * produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
   * existing instances for performing updates.
   */
  generateUniqueId(): string;

  /**
   * Callback that is called synchronously during an operation that creates objs before those objs are created.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be created.  The objs will be the entire input objs being created.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeCreate(objs: Array_Type<ReliabilityAsset>): ObjList<ReliabilityAsset>;

  /**
   * Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be updated.  By default the objs will be the complete original source
   *           obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
   *           a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
   *           will have at least those requested fields.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeUpdate(objs: Array_Type<ReliabilityAsset>): ObjList<ReliabilityAsset>;

  /**
   * Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
   * implementer can perform validation or additional logic.
   *
   * @param objs
   *           List of objs that are about to be removed.  By default the objs will be the complete original source
   *           obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
   *           be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
   *           requested fields.
   * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
   *         of objs must match the input.
   */
  static beforeRemove(objs: Array_Type<ReliabilityAsset>): ObjList<ReliabilityAsset>;

  /**
   * Callback that is called synchronously during a request that creates objs after those objs are created.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were created.  The objs will already have been created.  By default, only the id
   *           is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   * @return List of any errors that were encountered.
   */
  static afterCreate(objs: Array_Type<ReliabilityAsset>): Array_Type<ObjError> | null;

  /**
   * Callback that is called synchronously during a request that updates objs after those objs are updated.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were updated.  The objs will already have been updated.  By default, only the id
   *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   * @return List of any errors that were encountered.
   */
  static afterUpdate(objs: Array_Type<ReliabilityAsset>): Array_Type<ObjError> | null;

  /**
   * Callback that is called synchronously during a request that removes objs after those objs are removed.  The
   * implementer can perform additional logic.
   *
   * @param objs
   *           List of objs that were removed.  The objs will already have been removed.  By default, only the id
   *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
   *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
   *           Since the objs will already have been removed, they will be in the state they were in prior to removal.
   * @return List of any errors that were encountered.
   */
  static afterRemove(objs: Array_Type<ReliabilityAsset>): Array_Type<ObjError> | null;

  /**
   * Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
   * valid for C3 types that are stored in Cassandra.
   *
   * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
   * apis as fast as direct IO apis.
   * Use with caution!!!
   *
   * @param clearNullValues
   *           If true then map keys with null values will be cleared.
   * @return The created or updated obj with only the id populated if it exists and null otherwise.
   */
  upsertDirect(merge?: boolean, clearNullValues?: boolean): Obj | null;

  /**
   * Begin an upsert operation to the secondary data store.
   *
   * IMPORTANT:
   *
   * 1. This is only valid for types that specify a secondary datastore.
   * 2. Currently only types that are not extendable are supported.
   *
   * @param type
   *           Type that the upsert operation is for.
   *
   * @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
   */
  static beginUpsertToSecondaryDs(type: Type): SecondaryDsUpsert;

  /**
   * Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
   * defaulting to using multi-row sql for the deletes.
   *
   * @param spec
   *        Spec controlling the operation
   * @param confirm
   *        Must be specified as true.  Otherwise request will be rejected.
   */
  static clearCollection(spec?: ClearCollectionSpec, confirm: boolean): void;

  /**
   * Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
   * {@link merge} or their batch equivalents.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were created.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static created(txn: Transaction): void;

  /**
   * Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
   * {@link merge} or their batch equivalents.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were updated.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static updated(txn: Transaction): void;

  /**
   * Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
   * {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
   * archive operation or it is physically removed.
   *
   * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
   * being removed or updated.
   *
   * @param txn
   *        Contains details about which objs were removed.  This is basically the ids of those objects.  The
   *        implementation will most likely need to fetch the actual instances to do whatever they need.
   */
  static removed(txn: Transaction): void;

  /**
   * Used internally to evaluate as a stream
   */
  static evaluateOvi(spec?: EvaluateSpec): any | null;

  /**
   * Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
   * as stream of Arrow batches.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static evaluateArrowStream(spec: EvaluateArrowStreamSpec): Stream<Arrow>;

  /**
   * Refreshes calc fields for objs for a type based on a spec.
   *
   * @param spec
   *        Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
   *        other options that control the operation.
   * @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   */
  static refreshCalcFields(spec?: RefreshCalcFieldsSpec): RefreshCalcFieldsBatchJob | null;

  /**
   * Refreshes default fields for objs for a type based on a spec.  Only entries that have null values for the
   * specified fields will be refreshed.
   *
   * @param spec
   *        Spec that indicates which objs to refresh default fields for and which default fields to refresh, along with
   *        other options that control the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   */
  static refreshDefaultFields(spec?: RefreshDefaultFieldsSpec): RefreshDefaultFieldsBatchJob | null;

  /**
   * Refreshes the unique index table entries for a type based on a spec.  For types that don't have unique indexes,
   * and no types that extend them have unique indexes, this does nothing.
   *
   * @param spec
   *        Spec that indicates which objs to refresh unique indexes for along with other options that control
   *        the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   */
  static refreshUniqueIndexes(spec?: RefreshUniqueIndexesSpec): RefreshUniqueIndexesBatchJob | null;

  /**
   * Refreshes analytics for objs based on a spec.  This causes {@link AnalyticsContainer.invalidateSources} to be
   * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.
   *
   * @param spec
   *        Indicates which objs to refresh analytics for and what time range to use, along with other options that
   *        control the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   *
   * @see AnalyticsContainer
   * @see SimpleMetric
   */
  static refreshAnalytics(spec?: RefreshAnalyticsSpec): RefreshAnalyticsBatchJob | null;

  /**
   * Refreshes the metrics cache for objs based on a spec.  This causes {@link SimpleMetric.invalidateCache} to be
   * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.  Only metrics with
   * {@link SimpleMetric.cacheInterval} are considered.
   *
   * @param spec
   *        Indicates which objs to refresh the metrics cache for and what time range to use, along with other options
   *        that control the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   *
   * @see SimpleMetric
   */
  static refreshMetrics(spec?: RefreshMetricsSpec): RefreshMetricsBatchJob | null;

  /**
   * Calls the created or updated function for objs based on a spec.  For types that have only one or the other that
   * function will be called.  For those that have both, only the updated will be called.  If only created should be
   * called in all cases, set the 'spec.createdOnly' field to true.
   *
   * @param spec
   *           Indicates which objs to call the functions for, along with other options that control the operation.
   * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
   *         otherwise.
   */
  static runCreatedOrUpdated(spec?: RunCreatedOrUpdatedSpec): RunCreatedOrUpdatedBatchJob | null;

  /**
   * Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
   *
   * @param spec
   *        Indicates which types of dependencies should be refreshed along with other parameters that control the
   *        operation of the function.
   */
  static refreshDeps(spec?: RefreshDepsSpec): void;

  /**
   * Performs the refresh operation.
   *
   * @param type
   *        Type being refreshed.
   * @param jobType
   *        Batch job type to for refresh.
   * @param spec
   *        Parameters for the refresh operation.
   *
   * @return The batch job that was started.
   */
  static processRefresh(type: Type, jobType: Type, spec: ObjBatch): RefreshBatchJob<any, any, any> | null;

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportData(spec?: StartImportDataSpec): PushStream<ReliabilityAsset>;

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportDataWithStats(spec?: StartImportDataSpec): PushStreamWithStats<ReliabilityAsset>;

  /**
   * Imports instances into a C3 type from a file stored in Cassandra.
   *
   * @param spec
   *        Various parameters that control the operation of function.
   * @param async
   *        Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
   *        synchronous)
   * @return various statistics and errors for the import operation.
   */
  static importData(spec: ImportDataSpec, async?: boolean): ImportDataResult | null;

  /**
   * Exports instances of a C3 type to Cassandra.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return A reference to the Content obj created that contains the exported data and various statistics about the
   *         export.
   */
  static exportData(spec: ExportDataSpec): ExportDataResult | null;

  /**
   * Exports instances of a C3 type to S3 for importing into Redshift.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return Number of objs exported.
   */
  static exportDataForRedShift(spec: RedShiftExportDataSpec): number | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string, failIfMissing?: boolean): ReliabilityAsset | null;

  /**
   * Shortcut function to return the value of the {@link meta#referenceInvalid} field for a Persistable reference
   * returned in a reference field (or reference collection field) from a {@link fetch} operation.  Note that the
   * {@link meta#referenceInvalid} field is only set when the include spec for the reference field specifically includes
   * the {@link meta#referenceInvalid} field or otherwise requires the referenced type to be queried (either by join or
   * separate query) to return the requested data from the reference.
   *
   * Note that this api DOES NOT query the database at all.  As such, calling it on any instance obtained in any way
   * way other than what is described above will ALWAYS return false.
   *
   * @return the current value of the {@link meta#referenceInvalid} field for the instance.
   *
   * @see Meta#referenceInvalid
   */
  referenceInvalid(): boolean;

  /**
   * Generates new unique ids for C3 Obj instances
   *
   * @param count
   *           Number of ids to generate.  Default is 1.
   * @return The requested number of new unique ids.
   */
  static generateNewIds(count?: number): Array_Type<string> | null;

  /**
   * Generates synthetic data for a C3 type.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return Various statistics for the operation.
   */
  static generateData(spec?: GenerateDataSpec): ActionStats | null;

  /**
   * Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
   */
  static profileData(spec?: FetchSpec): GenerateDataSpec | null;

  /**
   * Removes the identifying fields {@link #id}, {@link #meta}, and {@link #version} of the instance it's called on,
   * such that a subsequent upsert will create a new instance.
   *
   * @return The requested obj without any of its identifying fields.
   */
  withoutIdentity(): ReliabilityAsset | null;

  /**
   * Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
   * type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
   * that type's base type chain.
   *
   * @return The type hierarchy for the requested obj.
   */
  typeOf(): EntityType | null;

  /**
   * Gets the specific C3 type hierarchy for multiple obj instances.  For a non-extendable type the hierarchy will be the
   * C3 type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well
   * as that type's base type chain.
   *
   * @param objs
   *           Obj instances to get the type hierarchy for.
   * @return The type hierarchies for the requested objs.
   */
  static typeOfBatch(objs: Array_Type<ReliabilityAsset>): Array_Type<EntityType> | null;

  /**
   * @return The root type for a type.  If the type extends an extendable type, the base extendable type is returned.
   *         The type itself is returned in all other cases.
   */
  static getRootType(): Type | null;

  /**
   * Performs the necessary DDL to create/alter the physical tables and columns for a type.  This is typically called
   * internally during provisioning and should not need to be called manually.
   *
   * @param throwOnNonUniqueIndexError
   *        true if, after retries are exhausted, throw any index creation error occurs for a non-unique index. If
   *        false, that will be considered benign as it means some other thread process is creating the necessary
   *        indexes.
   *
   * @return True if the operation caused any DLL changes and false if did not.
   */
  static upsertCollection(throwOnNonUniqueIndexError?: boolean): boolean;

  /**
   * Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
   *
   * @type
   *         The Type to validate the schema of.
   * @return true if the schema was updated in this JVM/app
   */
  static validateSchema(type: Type): boolean;

  /**
   * Callback that is called synchronously in response to a call to {@link upsertCollection}.
   */
  static collectionUpserted(): void;

  /**
   * Callback that is called synchronously in response to a call to {@link clearCollection}.
   */
  static collectionCleared(): void;

  /**
   * Used only by DatabaseTestEngine
   */
  static dbEcho(template?: ReliabilityAsset, count?: number, sendBack?: boolean): number | null;

  /**
   * Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
   * invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
   * condition is considered to be when there is no entry in the reference type for the obj being validated.
   *
   * @param spec
   *           Indicates which references in which types/fields to check.
   * @return List of references that were found to be invalid along with details of why they are invalid.
   */
  static checkReferences(spec?: CheckReferencesSpec): CheckReferencesResult | null;

  /**
   * Determines is a path is valid as a filter expression in a fetch call.
   *
   * @param path
   *           Path to validate.
   * @return True if the path is valid to be used in a fetch filter expression and false if it is not.  If the path
   *         itself is invalid, an exception is thrown
   */
  static validatePath(path: string): ValidatePathResult | null;

  /**
   * @return The db table name for relational types and the column family name for Cassandra types
   */
  static schema(): SchemaInfo | null;

  /**
   * Gets all of the dependencies that could invalidate a stored calc field.
   *
   * @param fieldName
   *         The name of the field to find all dependencies of.
   * @return A list of dependencies that can invalidate the stored calc field.
   */
  static calcFieldDeps(fieldName: string): Array_Type<string> | null;

  /**
   * Creates invalidation queue entries for invalidation of metrics/analytics for a logical timeseries header (e.g. a
   * IntervalDataHeader or any type determined to be an "AsTimeseriesHeader" based on the metrics/analytics.
   *
   * @param range
   *        Time range to invalidate for.  If null, invalidation will be across all time.
   * @param fields
   *        Timeseries fields that were modified and should be used to determine what to invalidate.  This is currently
   *        not used as we don't keep dependency info at the field level.
   * @param autoCommit
   *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
   *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
   *        that state until they are either committed or aborted.
   */
  invalidateTsHeader(range?: TimeRange, fields?: Array_Type<string>, autoCommit?: boolean): void;

  /**
   * Creates invalidation queue entries for invalidation of metrics/analytics for time series data points (e.g. a
   * {@link IntervalDataPoint} or {@link TimedDataPoint} on the metrics/analytics in batch mode.
   *
   * @param tsInvalidations
   *        Time range to invalidate for.  If null, invalidation will be across all time.
   * @param autoCommit
   *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
   *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
   *        that state until they are either committed or aborted.
   */
  static invalidateTsDataPoints(tsInvalidations: Stream<TsInvalidation>, autoCommit?: boolean): void;

  /**
   * API to execute the lambda function in a distributed batch mode. This api will fetch with provided spec and
   * call action for each batch of `spec.batchSize`.
   *
   * @param spec
   *         A spec for the job. Use {@link BatchFetchSpec#context} to supply any arguments necessary for `action`.
   * @param action
   *         The lambda to apply to each batch of objs.
   *
   * @return the ID of the started ObjBatchMapReduceJob
   */
  static eachObjBatch(spec: BatchFetchSpec, action: λBiConsumer<Array_Type<Obj>, any | null>): string;

  /**
   * Implements a simple logic for Persistable call-backs like before create by looping each input obj and
   * calling a transform for it.
   *
   *
   * callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
   */
  static callbackLogic(objs: Array_Type<ReliabilityAsset>, callback?: λFunction<ReliabilityAsset | null, ReliabilityAsset | null>): ObjList<ReliabilityAsset>;

  /**
   * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
   * calling a transform for it.
   */
  static afterCallbackLogic(objs: Array_Type<ReliabilityAsset>, callback?: λFunction<ReliabilityAsset | null, ReliabilityAsset | null>): Array_Type<ObjError> | null;

  /**
   * @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
   *         be only 1.  If it does, then there will be multiple.
   */
  static idColNames(): Array_Type<string> | null;

  /**
   * True if this field is unique
   */
  static isUnique(fieldPath: string): boolean;

  /**
   * True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
   * themselves, or there is a unique index that is a subset of the specified fields.
   */
  static isUnique(fieldPaths: Array_Type<string>): boolean;

  /**
   * Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
   * #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
   * @param name
   *          The name of field to check
   * @returns Whether or not the specific field name is one of the ones declared by the DB engine.
   */
  static isSystemField(name: string): boolean;

  /**
   * Get a filter that can be used to filter this type by {@link Facility}.
   *
   * @param facilities
   *        The list of {@link Facility}s to filter by.
   * @returns
   *        A string serialized {@link Filter} that can be used to filter this type by {@link Facility}.
   */
  static getFacilityFilter(facilities?: Array_Type<Facility>): string | null;

  /**
   * Fetches the {@link DataValidationRun}s by the current instance {@link DataValidationSubject}.
   *
   * @param spec
   *     Extra arguments to specify desired results. Applied on {@link DataValidationRun}.
   * @return FetchResult<DataValidationRun>
   *     The dataValidationRuns from this instance.
   */
  fetchDataValidationRuns(spec?: FetchSpec = '{}'): FetchResult<DataValidationRun> | null;

  /**
   * Fetches the latest {@link DataValidationRun} that is in completed run status. If {@link DataValidationRuleset} is passed in, gets the latest {@link DataValidationRun} with a matching rootRuleSet.
   *
   * @param dataValidationRuleSet
   *     {@link DataValidationRuleset} Extra arguments to specify desired results. Applied on {@link DataValidationRun}.
   * @return {@link DataValidationRun}
   *     The latest {@link DataValidationRun} that matches this {@link DataValidationSubject} id.
   */
  getLatestDataValidationRun(dataValidationRuleSet?: DataValidationRuleset): DataValidationRun | null;

  /**
   * Runs the validation for all the {@link DataValidationRule}`s across all the @{DataValidationRuleset}.
   *
   * @param ruleQueue
   *     Extra arguments to specify desired results. Applied on {@link DataValidationRun}.
   * @param run
   *     Extra arguments to specify desired results. Applied on {@link DataValidationRun}.
   * @param persistResults
   *     Flag to determine whether results should be persisted.
   */
  executeRulesValidation(ruleQueue: Array_Type<DataValidationRule>, run: DataValidationRun, persistResults?: boolean): DataValidationRun;

  /**
   * Fetches the all the {@link DataValidationRule}s across all the {@link DataValidationRuleset}s grouped by {@link DataValidationRuleset} or in a flat list of {@link DataValidationRule}s
   *
   * @param spec
   *     Extra arguments to specify desired results.
   * @return a map<{@link DataValidationRuleset}, [{@link DataValidationRule}]> || [{@link DataValidationRule}]
   *     Returns a map of all {@link DataValidationRule}s grouped by {@link DataValidationRuleset} or as a flat list of {@link DataValidationRule}s with the possibility of use additional filters to limit the results shown.
   */
  fetchDataValidationRules(spec?: DataValidationResultSubjectSpec): Map_Type<string, Array_Type<DataValidationRule>> | Array_Type<DataValidationRule> | null;

  /**
   * Fetches the all the {@link DataValidationResult}s across all the {@link DataValidationRuleset}s grouped by {@link DataValidationRuleset} or in a flat list of {@link DataValidationResultSubjectSpec}s
   *
   * @param spec
   *     Extra arguments to specify desired results.
   * @return a map<{@link DataValidationRuleset}, [{@link DataValidationResult}]> || [{@link DataValidationResult}]
   *     Returns a map of all {@link DataValidationResult}s grouped by {@link DataValidationRuleset} or as a flat list of {@link DataValidationResult}s with the possibility of use additional filters to limit the results shown.
   */
  fetchDataValidationResults(spec?: DataValidationResultSubjectSpec): Map_Type<string, Array_Type<DataValidationResult>> | Array_Type<DataValidationResult> | null;

  /**
   * Used to run data validation on this instance of {@link DataValidationSubject} for a specific ruleset.
   *
   * @param ruleset
   *    {@DataValidationRuleset} to use to run data validation
   * @param args
   *    The arguments which are passed into the target {@link DataValidationRule#action action} of each rule.
   * @param spec
   *    Arguments to configure the @{DataValidationMapReduce}
   */
  runDataValidation(ruleset: DataValidationRuleset, args?: Map_Type<string, any>, spec?: DataValidationExecutionSpec): DataValidationRun | DataValidationBatchJob | DataValidationMapReduceJob | null;

  /**
   * Helper method used to run a specific rule.
   *
   * @param run
   *    current {@DataValidationRun} for the subject
   * @param rule
   *    {@DataValidationRule} to be executed
   * @param args
   *    The arguments which are passed into the target {@link DataValidationRule#action action} of each rule.
   * @param persistResults
   *    Flag to determine whether results should be persisted.
   */
  static runRule(run: DataValidationRun, rule?: DataValidationRule, args: Map_Type<string, any>, persistResults?: boolean): DataValidationResult | null;

  /**
   * Used to re run a specific rule and calculate the results of the latest {@link DataValidationRun}.
   *
   * @param rule
   *    {@DataValidationRule} to be executed
   * @return
   *    The {@link DataValidationRuleResult} of the rule action.
   */
  runDataValidationRule(rule: DataValidationRule): DataValidationResult;

  /**
   * Adds the project to the list of projects associated with this asset.
   * If the project is already associated with this asset, this function does nothing.
   */
  assignToProject(project?: ReliabilityMl.Project): void;

  /**
   * Used internally during the preparation run to determine the start and end dates
   * for the dataset preparation. If the {@link ReliabilityMlDatasetPreparationSpec#materializeStart}
   * and {@link ReliabilityMlDatasetPreparationSpec#materializeEnd} are provided, then it defaults to this dates,
   * otherwise, it defaults to the start and end of the from the earliest and latest data points from
   * the {@link PointPhysicalMeasurementSeries} associated with the {@link ReliabilityAsset}.
   *
   * @param start
   *        The start datetime for the dataset preparation.
   * @param end
   *        The end datetime for the dataset preparation.
   * @return a {@link StrPair} containing the start and end dates as strings.
   */
  getMlStartEnd(start?: DateTime, end?: DateTime): StrPair | null;

  /**
   * Given flatliningTimeSteps and a pandas DataFrame, returns the percentage of data that is flatlining.
   * If flatliningTimeSteps is less than 0, function will throw an error.
   * Returns float or Series depending on shape of the DataFrame
   *
   * @param flatliningTimeSteps
   *        The number of time steps to check for flatlining behavior.
   * @param df
   *        The pandas DataFrame to analyze for flatlining.
   * @return a float or Series representing the percentage of data that is flatlining.
   */
  static getFlatliningPercentage(flatliningTimeSteps?: number, df?: any): any | null;

  /**
   * Create {@link Feature}s for all the {@link Sensor}s associated with this
   * {@link ReliabilityAsset} through {@link ReliabilityAssetSensorRelation}s.
   * If you want to create featues for {@link ReliabilityAssetSensorRelation}s
   * that are not associated with this {@link ReliabilityAsset}, then you can
   * provide them in the `additionalRasrs` argument.
   * Refer to type documentation on {@link ReliabilityMlFeatureCreationMethod}
   * for more information on the different methods to create {@link Feature}s for
   * the {@link Sensor}s.
   * Exact and full documentation on the {@link Feature} creation process may be
   * found in {@link ReliabilityAssetSensorRelation#createSensorFeature}, which this
   * function simply calls in a loop for all {@link ReliabilityAssetSensorRelation}s.
   */
  createSensorFeatures(excludeSensors?: Array_Type<string>, start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR', method?: string = 'BEST', additionalRasrs?: Array_Type<ReliabilityAssetSensorRelation>): Array_Type<Feature> | null;

  /**
   * Create a {@link Metric} expression which evalutes to 1 for all intervals whose start lies within
   * one of the given {@link TimeRange} objects, and 0 elsewhere.
   *
   * @param timeRanges
   *        An array of {@link TimeRange} objects to create the mask expression for.
   * @return a string representing the metric expression for the time range mask.
   */
  static createTimeRangeMaskExpression(timeRanges?: Array_Type<TimeRange>): string | null;

  /**
   * The {@link Feature.Set} creation process has two main steps:
   * - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
   * - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
   * This function implements logic for the first part of the {@link Feature.Set} creation
   * process.
   * NOTE: This function is NOT intended to be used by users. It will be called internally
   * by {@link prepareFeatures}, which the user is encouraged to always interact with.
   *
   * @param spec
   *        The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
   * @param start
   *        The start datetime for feature preparation.
   * @param end
   *        The end datetime for feature preparation.
   * @param interval
   *        The time interval for feature preparation, defaults to QUARTER_HOUR.
   * @return a {@link Feature.Set} containing the initial features.
   */
  prepareInitialFeatureSet(spec: ReliabilityMlFeaturePreparationSpec, start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR'): Feature.Set | null;

  /**
   * The {@link Feature.Set} creation process has two main steps:
   * - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
   * - Apply the masks on the initial {@link Feature.Set} corresponding to the provided
   * {@link ReliabilityMlDatasetPreparationSpec#masksBeforeCleaning}, if the
   * {@link ReliabilityMlDatasetPreparationSpec#approach} is `sequential`.
   * - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
   * This function implements logic for the second part of the {@link Feature.Set} creation
   * process.
   * NOTE: This function is NOT intended to be used by users. It will be called internally
   * by {@link prepareFeatures}, which the user is encouraged to always interact with.
   *
   * @param featureSet
   *        The initial {@link Feature.Set} to be cleaned.
   * @param spec
   *        The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
   * @param start
   *        The start datetime for feature preparation.
   * @param end
   *        The end datetime for feature preparation.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for feature preparation, defaults to QUARTER_HOUR.
   * @param sensorAssociationJobId
   *        Optional job ID for sensor association, defaults to None.
   * @return a cleaned {@link Feature.Set}.
   */
  prepareCleanedFeatureSet(featureSet: Feature.Set, spec: ReliabilityMlFeaturePreparationSpec, start?: DateTime, end?: DateTime, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', sensorAssociationJobId?: string = 'None'): Feature.Set | null;

  /**
   * The {@link Feature.Set} creation process has two main steps:
   * - Prepare an initial {@link Feature.Set} that contains all possible {@link Feature}s
   * - Preprocess the initial {@link Feature.Set} to arrive at a cleaner {@link Feature.Set}.
   * This function implements logic for both aspects of the {@link Feature.Set} creation
   * process. Internally, it first calls {@link prepareInitialFeatureSet}, then calls
   * {@link prepareMasks} for the provided masksBeforeCleaning, and passes the
   * output of these functions into {@link prepareCleanedFeatureSet}.
   * NOTE: In the most common implementation of `reliabilityRisk`, the user need not concern
   * themselves with this function. It is suggested that the user use this function ONLY if
   * they want to define non-standard {@link Feature}s that don't simply return the time
   * series data for all the {@link Sensor}s.
   *
   * @param spec
   *        The {@link ReliabilityMlFeaturePreparationSpec} containing feature preparation configuration.
   * @param start
   *        The start datetime for feature preparation.
   * @param end
   *        The end datetime for feature preparation.
   * @param masksBeforeCleaning
   *        An array of mask names to apply before cleaning the feature set.
   * @param maskPreparationSpec
   *        The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
   * @param interval
   *        The time interval for feature preparation, defaults to QUARTER_HOUR.
   * @param sensorAssociationJobId
   *        Optional job ID for sensor association, defaults to None.
   * @return a map of feature set names to {@link Feature.Set} objects.
   */
  prepareFeatures(spec: ReliabilityMlFeaturePreparationSpec, start?: DateTime, end?: DateTime, masksBeforeCleaning?: Array_Type<string>, maskPreparationSpec: ReliabilityMlMaskPreparationSpec, interval?: string = 'QUARTER_HOUR', sensorAssociationJobId?: string = 'None'): Map_Type<string, Feature.Set> | null;

  /**
   * Helper function to prepare a default {@link Feature}, representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
   * a planned/unplanned downtime event.
   * These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
   * by default are what the {@link Feature} will be created based on.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @return a {@link Feature} representing the default asset events mask.
   */
  static prepareDefaultAssetEventsMask(start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR'): Feature | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
   * a planned/unplanned downtime event.
   * These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
   * by default are what the {@link Feature} will be created based on.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the asset events mask.
   */
  prepareAssetEventsMask(start?: DateTime, end?: DateTime, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
   * anomalous/abnormal behavior in a window of time leading up to an unplanned
   * downtime event.
   * These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
   * by default are what the {@link Feature} will be created based on.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param preAssetEventsWindow
   *        The number of time steps before an asset event to include in the mask.
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the pre-asset events mask.
   */
  preparePreAssetEventsMask(preAssetEventsWindow?: number, start?: DateTime, end?: DateTime, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was experiencing
   * transient modes of operation immediately following a planned/unplanned downtime event.
   * These events are usually logged in the {@link ReliabilityAssetEvent} Type and these,
   * by default are what the {@link Feature} will be created based on.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param postAssetEventsWindow
   *        The number of time steps after an asset event to include in the mask.
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the post-asset events mask.
   */
  preparePostAssetEventsMask(postAssetEventsWindow?: number, start?: DateTime, end?: DateTime, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} was not
   * operational (not including planned/unplanned downtime events).
   * Such asset operation is usually infer-able from the values in the time series data
   * of one or more {@link Sensor}s, for example, "an asset is not operational if the
   * RPM is less than 1000".
   * By default, it is assumed that the {@link ReliabilityAsset} is constantly operational
   * unless it is undergoing planned/unplanned downtime and, therefore, the default
   * {@link Feature} will always evaluate to zero, i.e., "the asset is always operational".
   * However, if the user wishes to mask periods of data corresponding to the asset not being operational,
   * then they can either provide their own upserted {@link Feature}, with its `name` field populated.
   * See {@link ReliabilityMlMaskPreparationSpec} for more details.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the asset not operational mask.
   */
  prepareIsAssetNotOperationalMask(start?: DateTime, end?: DateTime, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to optionally prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when the {@link ReliabilityAsset} contains
   * anomalous training data.
   * By default, it is assumed that the other masks used to mask training data for the
   * {@link ReliabilityAsset} already cover all the anomalous periods of operation associated with
   * the asset, therefore, the default {@link Feature} will by default evaluate to zero.
   * However, if the user wishes to still mask out anomalous periods within the training data algorithmically,
   * they can do so by setting {@link ReliabilityMlMaskPreparationSpec#generateAlgorithmicallyComputedTrainingMask}
   * to true, and specifying the technique to be used in
   * {@link ReliabilityMlMaskPreparationSpec#algorithmicallyComputedTrainingMaskTechnique}. If a technique is not
   * specified, the code will default to an Isolation Forest based approach to mask out anomalous periods
   * in the training data.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param generateAlgorithmicallyComputedTrainingMask
   *        Boolean flag indicating whether to generate the algorithmically computed training mask.
   * @param algorithmicallyComputedTrainingMaskTechnique
   *        The technique to use for computing the training mask algorithmically.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @return a {@link Feature.Set} representing the algorithmically computed training mask.
   */
  prepareAlgorithmicallyComputedTrainingMask(start?: DateTime, end?: DateTime, generateAlgorithmicallyComputedTrainingMask?: boolean, algorithmicallyComputedTrainingMaskTechnique?: AlgorithmicallyComputedTrainingMaskTechnique, features: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR'): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data that cannot otherwise be expressed elegantly
   * to remove rows of data from training the {@link MlModel}.
   * Usually, such situations arise when it is known that there are certain time ranges
   * when there is clearly anomalous asset operation, however, it may not be express-able
   * as generic rules. In such cases, users have the option to provide {@link TimeRange}s
   * in the `timeRanges` argument. Any data within any of the provided {@link TimeRange}s
   * will be ignored while training the {@link MlModel}.
   * By default, however, it will be assumed that there are no abnormal operating modes
   * of the {@link ReliabilityAsset} unless the user provides `timeRanges`.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param timeRanges
   *        Optional array of {@link TimeRange} objects to exclude from training.
   * @param preIsAssetNotOperationalFeatureOverride
   *        Optional override {@link Feature} for pre-asset not operational check.
   * @param postIsAssetNotOperationalFeatureOverride
   *        Optional override {@link Feature} for post-asset not operational check.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @return a {@link Feature.Set} representing the ad-hoc training mask.
   */
  prepareAdHocTrainingMask(start?: DateTime, end?: DateTime, features?: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', timeRanges?: Array_Type<TimeRange>, preIsAssetNotOperationalFeatureOverride?: Feature, postIsAssetNotOperationalFeatureOverride?: Feature, overrideFeature?: Feature): Feature.Set | null;

  /**
   * Helper function to prepare a materialized {@link Feature.Set} representing a mask
   * that aims to remove all rows of data when an {@link MlModel} should NOT make predictions
   * for the {@link ReliabilityAsset}. For example, "when the inlet temperature is less than
   * 150 degrees Fahrenheit and outlet temperature is greater than 100 degrees Fahrenheit,
   * we know that there is something obviously wrong with the asset and, therefore, do not
   * want to be alerted to it. Suppress ML model outputs at such times".
   * By default, however, no such assumption is made. The {@link MlModel} will always make
   * predictions, unless the asset is experiencing a planned/unplanned downtime or if it is
   * not operational.
   * However, if the user wishes to provide their own {@link Feature}, then they can provide
   * such a {@link Feature} after having upserted and with the `name` field populated.
   * NOTE: The {@link Feature} provided should evaluate to zero for all rows of data that
   * should be kept for {@link MlModel} training/inference. It should evaluate to one for
   * all rows of data that should be ignored for {@link MlModel} training/inference.
   *
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @param postIsAssetNotOperationalFeatureOverride
   *        Optional override {@link Feature} for post-asset not operational check.
   * @param overrideFeature
   *        Optional override {@link Feature} to use instead of the default.
   * @param timeRanges
   *        Optional array of {@link TimeRange} objects to exclude from inference.
   * @return a {@link Feature.Set} representing the ad-hoc inference mask.
   */
  prepareAdHocInferenceMask(start?: DateTime, end?: DateTime, features?: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR', postIsAssetNotOperationalFeatureOverride?: Feature, overrideFeature?: Feature, timeRanges?: Array_Type<TimeRange>): Feature.Set | null;

  /**
   * Helper function that orchestrates the preparation of all the different types of masks.
   * Internally, it prepares the mask for the the specified `maskToApply` using the
   * provided spec, and returns a {@link Feature.Set}.
   * Internally, it calls the following functions to prepare the mask:
   * - {@link prepareAssetEventsMask}
   * - {@link preparePreAssetEventsMask}
   * - {@link preparePostAssetEventsMask}
   * - {@link prepareIsAssetNotOperationalMask}
   * - {@link prepareAdHocTrainingMask}
   * - {@link prepareAdHocInferenceMask}
   * - {@link prepareAlgorithmicallyComputedTrainingMask}
   *
   * All the masks that have been applied before a specific mask is prepared
   * are available in the `masks` field. Depending on the `approach`, `masksBeforeCleaning`
   * and `masksAfterCleaning` fields of the {@link ReliabilityMlMaskPreparationSpec},
   * either the initial {@link Feature.Set} or the cleaned {@link Feature.Set} will be available
   * in the `features` field.
   *
   * @param spec
   *        The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param maskToApply
   *        The name of the mask to prepare.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masks
   *        A map of mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @return a {@link Feature.Set} representing the prepared mask.
   */
  prepareMask(spec: ReliabilityMlMaskPreparationSpec, start?: DateTime, end?: DateTime, maskToApply?: string, features?: Feature.Set, masks?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR'): Feature.Set | null;

  /**
   * Helper function to prepare materialized {@link Feature.Set}s for all the different types
   * of masks necessary for robust training and performance of {@link MlModel}s. Internally,
   * this function calls {@link prepareMask} for each mask in `masksToApply`. It, then, aggregates
   * the {@link Feature.Set}s resulting from calls to all the mask-related functions into a `map` object.
   *
   * The order in which these functions are called is determined by the `approach`, `masksBeforeCleaning`
   * and `masksAfterCleaning` fields of the {@link ReliabilityMlMaskPreparationSpec}.
   *
   * @param spec
   *        The {@link ReliabilityMlMaskPreparationSpec} containing mask preparation configuration.
   * @param start
   *        The start datetime for the mask preparation.
   * @param end
   *        The end datetime for the mask preparation.
   * @param masksToApply
   *        An array of mask names to prepare.
   * @param features
   *        The {@link Feature.Set} containing the features to work with.
   * @param masksApplied
   *        A map of already applied mask names to {@link Feature.Set} objects.
   * @param interval
   *        The time interval for mask preparation, defaults to QUARTER_HOUR.
   * @return a map of mask names to {@link Feature.Set} objects.
   */
  prepareMasks(spec: ReliabilityMlMaskPreparationSpec, start?: DateTime, end?: DateTime, masksToApply?: Array_Type<string>, features?: Feature.Set, masksApplied?: Map_Type<string, Feature.Set>, interval?: string = 'QUARTER_HOUR'): Map_Type<string, Feature.Set> | null;

  /**
   * Usually, in `reliabilityRisk`, it is not suggested to train and deploy supervised
   * {@link MlModel}s. However, sometimes, they perform  better than the default,
   * semi-supervised {@link MlModel}s. In such cases, use this function to define the target
   * variable according to the {@link ReliabilityMlTargetPreparationSpec}.
   *
   * @param spec
   *        The {@link ReliabilityMlTargetPreparationSpec} containing target preparation configuration.
   * @param start
   *        The start datetime for target preparation.
   * @param end
   *        The end datetime for target preparation.
   * @param interval
   *        The time interval for target preparation, defaults to QUARTER_HOUR.
   * @return a map of target names to {@link Feature.Set} objects.
   */
  prepareTarget(spec: ReliabilityMlTargetPreparationSpec, start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR'): Map_Type<string, Feature.Set> | null;

  /**
   * Helper function to prepare a {@link Feature.Set}s for alertContext, which is required to generate
   * accurate alerts in production. By default, this API prepares a set of features that fetches the
   * riskScore, riskScoreNormalized and alert corresponding to the deployed CHAMPION model. This is required
   * when {@link ReliabilityMlModel#process} is called for a specified "start:end" period - alertContext
   * is used to provide the {@link ReliabilityRiskMl.Pipeline#alertingPipe} with information about previously
   * persisted riskScores and alerts, which it uses to accurately determine when a new alert should be generated
   * within the "start:end" window.
   *
   * @param project
   *        The {@link ReliabilityMl.Project} to prepare alert context for.
   * @param start
   *        The start datetime for alert context preparation.
   * @param end
   *        The end datetime for alert context preparation.
   * @param interval
   *        The time interval for alert context preparation, defaults to QUARTER_HOUR.
   * @param overrideFeatures
   *        Optional array of override {@link Feature} objects to use.
   * @return a map of feature names to {@link Feature.Set} objects for alert context.
   */
  prepareAlertContext(project?: ReliabilityMl.Project, start?: DateTime, end?: DateTime, interval?: string = 'QUARTER_HOUR', overrideFeatures?: Array_Type<Feature>): Map_Type<string, Feature.Set> | null;

  /**
   * Once all the {@link Feature.Set}s are defined and materialized, there is one final step
   * before one can begin training {@link MlModel}s, i.e., splitting the datasets into
   * training and validation. This function will split the datasets according to the
   * {@link ReliabilityMlTrainValSplitSpec}.
   * NOTE: It is strongly suggested that users NOT call this function directly. This will be
   * internally called by {@link prepareMlDatasets}.
   *
   * @param featureSet
   *        The {@link Feature.Set} to split into training and validation sets.
   * @param spec
   *        The {@link ReliabilityMlTrainValSplitSpec} containing split configuration.
   * @param start
   *        The start datetime for the split.
   * @param end
   *        The end datetime for the split.
   * @return a map of split names to {@link TimeRange} objects.
   */
  trainValSplit(featureSet: Feature.Set, spec: ReliabilityMlTrainValSplitSpec, start: DateTime, end: DateTime): Map_Type<string, TimeRange> | null;

  /**
   * This function is called from {@link #doPrepareMlDatasets} if the provided {@link ReliabilityMlDatasetPreparationSpec}
   * has a `sensorAssociationJobId' provided and its `doNotUpdateSpecForSensorAssociation` is set to `false`,
   * to update the fields on the data prep spec, and return
   * a new data prep spec with the updated fields.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} to update for sensor association.
   * @return the updated {@link ReliabilityMlDatasetPreparationSpec}.
   */
  updateSpecForSensorAssociation(spec: ReliabilityMlDatasetPreparationSpec): ReliabilityMlDatasetPreparationSpec;

  /**
   * Updates the {@link ReliabilityMlDatasetPreparationJob} with fields that are required for a dataset preparation job.
   * Creates a map of {@link ReliabilityAsset#id}s to {@link ReliabilityMlDatasetPreparationRun}s
   * from the given {@link ReliabilityMlDatasetPreparationSpec#targetAssetFilter}, so that we can name
   * the dataset preparation runs and link them to the tracking job. The created
   * {@link ReliabilityMlDatasetPreparationRun}s are persisted in the database, and the map is
   * set in the {@link ReliabilityMlDatasetPreparationSpec#datasetRunMap datasetRunMap} field
   * of the {@link ReliabilityMlDatasetPreparationJob#spec}.
   * @param job
   *        The {@link ReliabilityMlDatasetPreparationJob} that will use this map.
   * @returns the updated {@link ReliabilityMlDatasetPreparationJob}.
   */
  static initializeJobSpec(job: ReliabilityMlDatasetPreparationJob): ReliabilityMlDatasetPreparationJob | null;

  /**
   * Any asset-specific modifications that need to be done to the
   * {@link ReliabilityMlDatasetPreparationSpec} may be made in this function.
   * By default, there is no modification to the spec. This function is useful
   * when invoking the dataset preparation job in bulk, i.e., for many assets,
   * but there are modifications to be made to the spec such as an
   * asset-specific feature creation process to set
   * {@link ReliabilityMlFeaturePreparationSpec#overrideFeatures}.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} to modify.
   * @param job
   *        The {@link ReliabilityMlDatasetPreparationJob} associated with this preparation.
   * @return the modified {@link ReliabilityMlDatasetPreparationSpec}.
   */
  beforePrepareMlDatasets(spec: ReliabilityMlDatasetPreparationSpec, job?: ReliabilityMlDatasetPreparationJob): ReliabilityMlDatasetPreparationSpec;

  /**
   * This function contains the logic of preparing clean datasets for model training.
   * Rarely requires modification.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
   * @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
   */
  doPrepareMlDatasets(spec: ReliabilityMlDatasetPreparationSpec): ReliabilityMlDatasetPreparationRun | null;

  /**
   * Post-preparation of datasets for model training, there may be a requirement to
   * modify the {@link ReliabilityMlDatasetPreparationRun}, for example. These
   * requirements are specific to each deployment. As such, the base function will
   * always make no modifications. However, this function may be overridden in a deployment
   * to transform the outputs to be specific to that deployment.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} used for preparation.
   * @param run
   *        The {@link ReliabilityMlDatasetPreparationRun} to modify.
   * @return the modified {@link ReliabilityMlDatasetPreparationRun}.
   */
  afterPrepareMlDatasets(spec: ReliabilityMlDatasetPreparationSpec, run: ReliabilityMlDatasetPreparationRun): ReliabilityMlDatasetPreparationRun | null;

  /**
   * Synchronous method to prepare ML Datasets for a given {@link ReliabilityAsset}. It
   * is, however, STRONGLY SUGGESTED that users use the safer and distributed version of
   * the same function, i.e., {@link prepareMlDatasetsBatch}.
   * The order of execution of operations is:
   * ```
   * 1. beforePrepareMlDatasets
   *    - Users may choose to modify the dataset preparation spec on a per-asset basis, if necessary.
   * 2. doPrepareMlDatasets
   *    - This contains the logic for preparing clean datasets for training the machine learning model.
   *      Most often, this is not modified by deployments.
   * 3. afterPrepareMlDatasets
   *    - Post-completion of dataset preparation, there may be some modifications needed to be made, in which case,
   *      this function may be implemented by the user.
   * ```
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
   * @param job
   *        The {@link ReliabilityMlDatasetPreparationJob} associated with this preparation.
   * @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
   */
  prepareMlDatasets(spec?: ReliabilityMlDatasetPreparationSpec, job?: ReliabilityMlDatasetPreparationJob): ReliabilityMlDatasetPreparationRun | null;

  /**
   * Distributed and safer version of {@link prepareMlDatasets}. It is safer because
   * it does not block threads on the leader nodes of the {@link App}. Since the task
   * nodes will pick up this task, it will not affect the availability and performance
   * of the {@link App} for other, more urgent requests.
   *
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
   * @param options
   *        The {@link MapReduceOptions} for distributed processing.
   * @return a {@link ReliabilityMlDatasetPreparationJob} representing the batch preparation job.
   */
  static prepareMlDatasetsBatch(spec?: ReliabilityMlDatasetPreparationSpec, options?: MapReduceOptions): ReliabilityMlDatasetPreparationJob | null;

  /**
   * Helper method to validate a mask expression when specified. Since this expression will
   * be used to create a {@link Feature}, we need to ensure that the user input is valid.
   *
   * @param assetId
   *        The ID of the {@link ReliabilityAsset} to validate the expression for.
   * @param expressions
   *        An array of mask expressions to validate.
   * @return true if all expressions are valid, false otherwise.
   */
  static validateMaskExpression(assetId: string, expressions?: Array_Type<string>): boolean;

  /**
   * Transform mask expression into a format that can be used in a metric expression
   *
   * @param expression
   *        Expression that needs to be transformed
   * @return string representing the expression transformed
   */
  static parseMaskExpression(expression?: string): string | null;

  /**
   * This function will prepare the {@link ReliabilityMlDatasetPreparationRun} for the
   * given {@link ReliabilityAsset}s and {@link ReliabilityMlDatasetPreparationSpec}.
   * This will create the {@link Feature.Set}s that can be used for training on the given
   * {@link ReliabilityAsset}s.
   *
   * @param assets
   *        An array of {@link ReliabilityAsset} objects to prepare datasets for.
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} containing preparation configuration.
   * @return a {@link ReliabilityMlDatasetPreparationRun} representing the completed preparation.
   */
  static prepareMlDatasetsAndSensorDataReports(assets: Array_Type<ReliabilityAsset>, spec: ReliabilityMlDatasetPreparationSpec): ReliabilityMlDatasetPreparationRun | null;

  /**
   * Prepares {@link SensorDataReport}s for the {@link ReliabilityAsset} based on the provided
   * {@link ReliabilityMlDatasetPreparationSpec}. This function is called when preparing ML datasets.
   * It validates that the spec contains {@link ReliabilityMlDatasetPreparationSpec#sensorDataReportThresholds},
   * {@link ReliabilityMlDatasetPreparationSpec#materializeStart}, and
   * {@link ReliabilityMlDatasetPreparationSpec#materializeEnd}, and executes
   * {@link ReliabilityAsset#generateSensorDataReport}.
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec} that contains the thresholds and time range.
   * @param overrideTimeRange
   *        The time range to use for the sensor data reports, if materializeStart and materializeEnd are not provided
   *        in the spec.
   * @returns
   *       The updated {@link ReliabilityMlDatasetPreparationSpec} with the sensor data reports prepared. If the
   *       spec does not contain the required fields, or a time range is not provided, the unmodified spec is returned.
   */
  prepareSensorDataReports(spec: ReliabilityMlDatasetPreparationSpec, overrideTimeRange?: TimeRange): ReliabilityMlDatasetPreparationSpec;

  /**
   * Get assets 'relevant' mainly for modeling purposes for the current asset.
   *
   * What defines the relevance of an asset?
   *
   * A given asset is relevant to current asset if it is present in vicinity of the current asset. There are two ways to define this vicinity:
   * 1. Relative level - Use `level` to climb up the hierarchy from the current asset's level and fetch all the descendant assets of the resolved ancestor asset.
   * 2. Absolute level - Use `level` as the absolute depth to resolve ancestor asset and fetch all it's descendant assets.
   *
   *
   *                      {GrandParent}
   *                       /          \
   *                 {Parent1}      {Parent2}
   *                    /   \           \
   *                   /     \           \
   *                  /       \           \
   *          {selectedAsset} {sibling1}  {sibling2}
   *            /          \
   *        {child1}      {child2}
   *
   * For example, considering the above hierarchy for the 'selectedAsset':
   * - `fetchRelevantAssets()` with default parameters resolves to assets [sibling1, child1, child2].
   * - `fetchRelevantAssets(0, true)` resolves to assets [GrandParent, Parent1, Parent2, sibling1, sibling2, child1, child2].
   *
   * @param level
   *          The integer level which will be used to calculate the depth at which ancestor asset will be resolved.
   *          level has to >=0, negative level results in an error thrown. Defaults to 1.
   * @param isAbsolute
   *           A flag to indicates whether to interpret the level as 'relative' or 'absolute'. Defaults to false.
   *             - if set to true, ancestor will be resolved at the provided level of the hierarchy.
   *             - if set to false, provided level will be used to climb up the hierarchy from the current asset.
   *
   * @returns A {@link FetchResult#of} {@link ReliabilityAsset}s.
   */
  fetchRelevantAssets(level?: number = '1', isAbsolute?: boolean = 'false'): FetchResult<ReliabilityAsset> | null;

  /**
   * This function returns a list of objects prepared from {@link ReliabilityAssetSensorRelation}s for a given list of {@link ReliabilityAsset}s.
   * The FetchSpec has limited functionality as `offset`, `limit`, and `filter` parameters are respected as is, whereas `include` is not.
   * One must practice caution in providing `{@link FetchSpec#filter}` that is compatible with {@link ReliabilityAssetSensorRelation} schema.
   *
   * @param assets
   *    List of {@link ReliabilityAsset} ids.
   * @param spec
   *    - A {@link FetchSpec} for the fetch call which will be called on {@link ReliabilityAssetSensorRelation}.
   * @param sensorDataReportsFilter (used especially for UI)
   *    A string filter that can be applied on {@link SensorDataReport} to get all the sensors that have been selected or excluded already in the UI.
   *
   * @return {@link FetchResultWithTotalCount} with sensor details as json objs in the following format:
   *     ```json
   *      sensorObj: {
   *         id: ...
   *         from.name: ...
   *         to.name: ...
   *         sensorId: ...
   *         latestValue: ...
   *       }
   *     ```
   */
  static fetchSensorsForSelectedAssets(assets: Array_Type<string>, spec?: FetchSpec, sensorDataReportsFilter?: string): FetchResultWithTotalCount<any> | null;

  /**
   * The purpose of this method is to populate the job.preparationSettings field on dataset runs that are
   * created on the backend, such as a Jupyter Notebook or the static console. The preparationSettings will
   * be populated with the given {@link ReliabilityMlDatasetPreparationRun run} and {@link ReliabilityMlDatasetPreparationSpec spec}.
   *
   * @param job
   *        The {@link ReliabilityMlDatasetPreparationJob job} to attach the preparationSettings
   * @param spec
   *        The {@link ReliabilityMlDatasetPreparationSpec spec} to generate the datasets
   * @param run
   *        The {@link ReliabilityMlDatasetPreparationRun dataset preparation run}
   * @returns The {@link ReliabilityMlDatasetPreparationJob job} with the preparationSettings field populated
   */
  populateJobPreparationSettings(job: ReliabilityMlDatasetPreparationJob, spec: ReliabilityMlDatasetPreparationSpec, run: ReliabilityMlDatasetPreparationRun): ReliabilityMlDatasetPreparationJob | null;

  /**
   * A function that kicks off a sequence of map reduce jobs {@link ReliabilityAssetSensorAssociationJob} in a {@link Workflow} to asynchronously compute
   * sensor associations for a {@link ReliabilityAsset}.
   */
  runSensorAssociation(spec: ReliabilityOrchestrator.SensorAssociation): Workflow.Run | null;

  /**
   * A function that kicks off a sequence of map reduce jobs {@link ReliabilityAssetSensorAssociationJob} in a {@link Workflow} to asynchronously compute
   * sensor associations for multiple {@link ReliabilityAsset}s.
   */
  static runSensorAssociationBatch(spec: ReliabilityOrchestrator.SensorAssociation): Workflow.Run | null;

  /**
   * Remove {@link Sensor features} associated with this {@link ReliabilityAsset asset}
   * from the #latestSensorAssociationRun.
   *
   * Nullifies the {@link ReliabilityAssetSensorRelation#sensorAssociationJob} field on all
   * {@link ReliabilityAssetSensorRelation}s associated with this {@link ReliabilityAsset} and
   * the list of {@link Sensor features} provided.
   *
   * @param features
   *          The list of {@link Sensor features} to remove from the {@link ReliabilityAsset}.
   * @returns The list of updated {@link ReliabilityAssetSensorRelation relations}.
   */
  removeCorrelatedFeatures(features: Array_Type<Sensor>): ObjList<ReliabilityAssetSensorRelation> | null;

  /**
   * Associate {@link Sensor features} with this {@link ReliabilityAsset asset} and the
   * #latestSensorAssociationRun.
   *
   * Populates the {@link ReliabilityAssetSensorRelation#sensorAssociationJob} field on all
   * {@link ReliabilityAssetSensorRelation}s associated with this {@link ReliabilityAsset} and
   * the list of {@link Sensor features} provided with the #latestSensorAssociationRun for this asset.
   *
   * Sets the {@link ReliabilityAssetSensorRelation#isUpdatedByJob} field to `false` on these
   * {@link ReliabilityAssetSensorRelation}s to specify they were added by the {@link User}.
   *
   * @param features
   *          The list of {@link Sensor features} to associate with the {@link ReliabilityAsset}.
   * @returns The list of updated {@link ReliabilityAssetSensorRelation relations}.
   */
  addCorrelatedFeatures(features: Array_Type<Sensor>): ObjList<ReliabilityAssetSensorRelation> | null;

  /**
   * @inheritdoc
   */
  generateReport(reportSpec: ReliabilityAssetReportSpec): ReliabilityReportResult | null;

  /**
   * @inheritdoc
   */
  generateReportEntity(reportSpec: ReliabilityAssetReportSpec): ReliabilityAssetReport | null;

  /**
   * Determines the the current user can read this instance. Note that it requires `acl` field to be populated.
   * If unsure set `getIfAclIsMissing` parameter.
   *
   * @param getIfAclIsMissing
   *        'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
   *        instance was previously retrieved from the db.
   *
   * @return `true` if current user can read this instance.
   */
  myUserCanRead(getIfAclIsMissing?: boolean): boolean;

  /**
   * Determines the the current update can read this instance. Note that it requires `acl` field to be populated.
   * If unsure set `getIfAclIsMissing` parameter.
   *
   * @param getIfAclIsMissing
   *        'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
   *        instance was previously retrieved from the db.
   *
   * @return `true` if current user can update this instance.
   */
  myUserCanUpdate(getIfAclIsMissing?: boolean): boolean;

  /**
   * Determines the the current user can remove this instance. Note that it requires `acl` field to be populated.
   * If unsure set `getIfAclIsMissing` parameter.
   *
   * @param getIfAclIsMissing
   *        'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
   *        instance was previously retrieved from the db.
   *
   * @return `true` if current user can remove this instance.
   */
  myUserCanRemove(getIfAclIsMissing?: boolean): boolean;

  /**
   * Determines the the current user can modify the ACL for this instance. Note that it requires `acl` field to
   * be populated. If unsure set `getIfAclIsMissing` parameter.
   *
   * @param getIfAclIsMissing
   *        'true' if the instance should be retrieved from the db if the 'acl' field wasn't included when the
   *        instance was previously retrieved from the db.
   *
   * @return `true` if current user can read this instance.
   */
  myUserCanModifyAcl(getIfAclIsMissing?: boolean): boolean;

  /**
   * `true` if ACL enforced for current user and the specified type.
   */
  static isAclEnforcedForMyUser(type: Type): boolean;

  /**
   * Gets the default acl for newly created objs of the specified type for my user.  For a type that is currently
   * enforcing acl (e.g. enabled via {@link EnableAclPrivilege} or {@link Ann.Db#enforceAcl}, if the obj is being
   * created by anyone other than the authorizer, the default entry will grant the creator full access.  This
   * default entry will be removed if `populateAcl` is called and that creates entries specified by the
   * {@link AclPrivilege} entries.
   *
   * @param type
   *        Type to get the default acl for.  If this type does not mixin {@link AclEnabled}, then null will be
   *        returned.
   *
   * @return the default acl for newly created objs of the specified type for my user.
   */
  static defaultAclForMyUser(type: Type): AclEntry | null;

  /**
   * Populates the acl entries for the specified Objs. The acl entries will be populated based on the
   * {@link AclPrivilege} entries defined for the type.
   *
   * @param objs
   *        List of objs to populate the acls for. If null, the acls for all entries will be populated.
   */
  static populateAcl(objs?: Array_Type<ReliabilityAsset>): number | null;

  /**
   * Refreshes acl entries for the specified Objs as determined by the {@link RefreshAclsSpec}. The acl entries
   * will be refreshed based on the {@link AclPrivilege} entries defined for the type.
   *
   * @param spec
   *          Indicates which objs to refresh acls for along with other options that control the operation.
   * @return
   *          If {@link RefreshAclsSpec.async} is true, returns the BatchJob that was created/used for processing the
   *          request, null otherwise.
   */
  static refreshAcls(spec?: RefreshAclsSpec): Obj | null;

  /**
   * Creates (or updates existing) entry with all but modify ACL permissions.
   */
  grantMemberReadUpdateRemove(member: AccessControlEntity): ReliabilityAsset;

  /**
   * Merges an acl entry to the acl for an obj but does not persist the changes.  If an existing entry for the
   * member exists with the same source as the new one, the permissions granted by the new one will be added to
   * that entry, otherwise a new entry will be created/added.
   *
   * @return the obj with the new acl after merging the indicated entry.
   */
  mergeAclEntry(entry: AclEntry): ReliabilityAsset;

  /**
   * Merges acl entries to the acl for an obj but does not persist the changes.  If an existing entry for the
   * member exists with the same source as the new one, the permissions granted by the new one will be added to
   * that entry, otherwise a new entry will be created/added.
   *
   * @return the obj with the new acl after merging the indicated entry.
   */
  mergeAclEntries(entries: Array_Type<AclEntry>): ReliabilityAsset;

  /**
   * @return True if there are {@link AclPrivilege} entries defined for the type.
   */
  static hasPrivileges(): boolean;

  /**
   * Returns true if the current user is allowed to skip authorization checks to access this instance without checking ACLs.
   */
  static skipAuthz(): boolean;

  /**
   * This private action is only used to check for ACL access when using Permission with dataPermission
   */
  static modifyAcl(): void;

  /**
   * Utility method used to get the real sub type information for given parent type through the {@link typeIdent} field.
   *
   * @see typeIdent
   */
  static typeForTypeIdent(typeName: string, typeIdent: string, failIfMissing?: boolean): Type | null;

  /**
   * Utility method used to get the type ident value for a give sub type.
   *
   * @see typeIdent
   */
  static typeIdentForType(typeName: string, failIfMissing?: boolean): string | null;

  /**
   * return the typeIdent as a string
   */
  static myTypeIdent(): string | null;

  /**
   * Method to create test data. Creates data for {@link ReliabilityAsset}, {@link Sensor}, {@link ReliabilityAssetSensorRelation},
   * {@link ReliabilityAssetHierarchicalRelation}, {@link PointPhysicalMeasurementSeries} and {@link PointMeasurement}
   * such that we can evaluate features on sensor data for machine learning model training
   * @param assetId
   *    ID to assign to new asset.
   * @param numberOfSensors
   *    Number of sensors to create
   * @param assetName
   *    Name to assign to new asset.
   * @param start
   *    Start of time period to generate data for.
   * @param end
   *    End of time period to generate data for.
   * @param eventHourOffset
   *    Time offset in hours to add to shift the start of events from. If set to zero, events
   *    will be created at the same time the anomalous sensor data starts. Set this to be less than 24 hours
   *    to avoid creating events with starts after the `end`.
   */
  static createData(assetId: string, numberOfSensors: number, assetName?: string, start?: DateTime, end?: DateTime, eventHourOffset?: number): void;

  /**
   * Method to remove test data created by {@link ReliabilityAsset#createData}
   *
   * @param assetId
   *    ID of the asset whose test data should be removed.
   */
  static removeData(assetId: string): void;

  /**
   * Method to create test data for sensor association. Creates data for {@link ReliabilityAsset}, {@link Sensor},
   * {@link ReliabilityAssetSensorRelation}, {@link ReliabilityAssetHierarchicalRelation}, {@link PointPhysicalMeasurementSeries}
   * and {@link PointMeasurement}, for both the asset and external sensors, such that we can run the sensor association job using
   * the data
   *
   * @return A map containing the created test data.
   */
  static createSensorAssociatonData(): Map_Type<string, any> | null;

  /**
   * @param expectedSensor
   *        The expected sensor to find a matching sensor for.
   * @return the {@link Sensor} for this asset which fills the role of the given {@link ExpectedSensor}.
   */
  getSensorForExpectedSensor(expectedSensor: ExpectedSensor): Sensor | null;

  /**
   * /**
   *  Retrieves {@link Sensor}s associated with this asset that correspond to {@link ExpectedSensor} specifications.
   *
   *  This method matches {@link Sensor}s to their {@link ExpectedSensor}s based on defined roles.
   *  The returned map uses the ID of each {@link ExpectedSensor} as a key, with the corresponding {@link Sensor} as the value.
   *
   *  @return A map where keys are {@link ExpectedSensor#id} values and values are matching {@link Sensor}
   *          instances. Expected sensors that have no corresponding actual sensor are excluded from the map.
   */
  getSensorsForExpectedSensors(expectedSensors?: Array_Type<ExpectedSensor>): Map_Type<string, Sensor> | null;

  /**
   * Method to create a new {@link ReliabilityAsset}.
   * @param assetName
   *    Name of the new {@link ReliabilityAsset}.
   * @param parent
   *    The parent {@link ReliabilityAsset} the new asset blongs to.
   *    The parent can be of type {@link ReliabilityAsset} or {@link Facility}.
   * @param waitForHierarchyCalcs
   *    Whether to wait for hierarchy calculations to complete.
   * @return The newly created ReliabilityAsset.
   */
  static createAsset(assetName: string, parent: ReliabilityAsset | Facility, waitForHierarchyCalcs?: boolean): ReliabilityAsset | null;

  /**
   * Method to move a {@link ReliabilityAsset}.
   * @param parent
   *    The new parent to which this asset should be moved to.
   */
  moveAsset(parent: ReliabilityAsset | Facility): void;

  /**
   * Checks if the denormalized child relationships for the given asset are properly populated.
   * The function fetches the hierarchical relationships associated with the asset and checks whether
   * its denormalized ancestors are correctly set. If the asset has the necessary denormalized relationships,
   * it returns true, indicating that the asset's denormalization is complete. Otherwise, it returns false.
   *
   * This method is typically used in scenarios where assets are moved or their relationships are modified,
   * and the system needs to ensure that the hierarchical data is consistent.
   *
   * @param asset - The {@link ReliabilityAsset} for which the denormalization check is performed.
   * @return {boolean} - Returns true if the asset's denormalized children are populated, false otherwise.
   */
  checkDenormChildren(asset: ReliabilityAsset): boolean;

  /**
   * Method to delete a {@link ReliabilityAsset} and remove it's
   * {@link ReliabilityAssetHierarchicalRelation}s.
   * @param deleteDescendents
   *    If set to true, will delete all descendents of this asset
   *    If set to false, will create {@link ReliabilityAssetHierarchicalRelation}s
   *    for its children to its parent (if exists)
   */
  deleteAssetAndRemoveFromHierarchy(deleteDescendents?: boolean = 'false'): void;

  /**
   * Processes the {@link ReliabilityAssetHierarchicalRelation}s and
   * {@link FacilityReliabilityAssetHierarchicalRelation}that were updated after the given timestamp.
   * `meta.updated` is used to determine which relations have changed. This function perform synchronous incremental
   * denormalization, and should only be used if operations should be blocked until denormalization is up to date.
   * It also refreshes the relevant stored calcs on the assets with changed relations.
   *
   *
   * Use this function when we need {@link ReliabilityAsset} de-norm fields to be updated synchronously
   * for a small amount of relations (<= 5000).
   *
   * @param startTimestamp
   *        The timestamp from which to process changes.
   * @param batchSize
   *        The size of batches to process at once.
   */
  static processAssetHierarchyChangesSinceTimestamp(startTimestamp: DateTime, batchSize?: number = '2000'): void;

  /**
   * Updates the {@link ReliabilityAsset} with a new {@link AssetClass} and refreshes associated fields.
   *
   * This method replaces the current asset class of a {@link ReliabilityAsset} with a new one and
   * marks the sensor mapping status as incomplete. It ensures that all relevant fields are updated
   * and recalculates derived fields for the asset.
   *
   * @param newAssetClass
   *    The new {@link AssetClass} to assign to the {@link ReliabilityAsset}.
   *    Must be a non-null value representing the {@link AssetClass}.
   *
   * @return {@link ReliabilityAsset}
   *    The updated {@link ReliabilityAsset} with its name, translated asset class name, and
   *    display sensor mapping status.
   */
  swapAssetClass(newAssetClass: AssetClass): ReliabilityAsset | null;

  /**
   * Updates the {@link ReliabilityAsset} with the {@link ReliabilityAssetImportance} selected from the dropdown of the Asset Hierarchy Overview Page
   *
   * This method updates the {@link ReliabilityAsset} with the selected importance level on the Asset Hierarchy Overview Page
   * @param assetImportance
   *    The id for the {@link ReliabilityAssetImportance}.
   *    Must be a non-null value.
   */
  assignAssetImportance(assetImportance: ReliabilityAssetImportance): void;

  /**
   * Returns the ids of the current children and self of the given parent ids.
   * @param parentIds
   *    The ids of the parents to get the current children and self of.
   * @returns
   *    The ids of the current children and self of the given parent ids.
   */
  static getIdsOfCurrentChildrenAndSelf(parentIds?: Array_Type<string>): Array_Type<string> | null;

  /**
   * Links a 3D model to the asset.
   * @param modelId
   *    The {@link ReliabilityAsset3dmodel} to link to the asset.
   * @returns {@link ReliabilityAsset}
   */
  link3DModel(modelId: ReliabilityAsset3dmodel): ReliabilityAsset | null;

  /**
   * Unlinks the 3D model from the asset.
   * @returns {@link ReliabilityAsset}
   */
  unlink3DModel(): ReliabilityAsset | null;

  /**
   * Function to generate {@link SensorDataReport} for all the sensors in {@link ReliabilityAssetSensorRelation} based on a time window.
   * @param spec
   *     {@link SensorReportSpec} contains the arguments to generate {@link SensorDataReport}.
   * @return an array of {@link SensorDataReport}
   */
  generateSensorDataReport(spec: SensorReportSpec): Array_Type<SensorDataReport> | null;

  /**
   * Fetches sensor relations {@link ReliabilityAssetSensorRelation} for a {@link ReliabilityAsset}
   * given a selected {@link AssetClass}, identifying missing {@link ExpectedSensor}s in the asset class.
   *
   * This method is used when swapping the asset class for a {@link ReliabilityAsset}. It retrieves
   * all current {@link ExpectedSensor}s associated with the {@link ReliabilityAsset} and identifies
   * {@link ReliabilityAssetSensorRelation}s for the given {@link AssetClass} that were not
   * previously associated with the asset.
   *
   * This method is similar to
   * {@link ReliabilityAsset#fetchSensorRelationsWithExpectedSensorsMissingInAssetClass}
   * but returns a stream of sensor relations instead of a result with total count.
   *
   * @param assetClass
   *    The {@link AssetClass} for which sensor relations should be fetched.
   *    Must be a non-null value representing the asset class ID.
   *
   * @param spec
   *    A {@link FetchSpec} defining parameters for the fetch operation, including filtering,
   *    sorting, and pagination.
   *
   * @returns {stream<ReliabilityAssetSensorRelation>}
   *    A stream of sensor relations associated with the asset class and not previously linked
   *    to the {@link ReliabilityAsset}.
   */
  fetchSensorRelationsWithExpectedSensorsMissingInAssetClassObjStream(assetClass: AssetClass, spec?: FetchSpec): Stream<ReliabilityAssetSensorRelation> | null;

  /**
   * Fetches sensor relations {@link ReliabilityAssetSensorRelation} for a {@link ReliabilityAsset}
   * given a selected {@link AssetClass}, identifying missing {@link ExpectedSensor}s in the asset class.
   *
   * This method is used when swapping the asset class for a {@link ReliabilityAsset}. It retrieves
   * all current {@link ExpectedSensor}s associated with the {@link ReliabilityAsset} and identifies
   * {@link ReliabilityAssetSensorRelation}s for the given {@link AssetClass} that were not
   * previously associated with the asset.
   *
   * @param assetClass
   *    The {@link AssetClass} for which sensor relations should be fetched.
   *    Must be a non-null value representing the asset class ID.
   *
   * @param spec
   *    A {@link FetchSpec} defining parameters for the fetch operation, including filtering,
   *    sorting, and pagination.
   *
   * @returns {@link FetchResultWithTotalCount<ReliabilityAssetSensorRelation>}
   *    A result containing the fetched sensor relations along with a total count of matches.
   *    The total count includes all sensor relations, even if pagination limits the returned results.
   */
  fetchSensorRelationsWithExpectedSensorsMissingInAssetClass(assetClass: AssetClass, spec?: FetchSpec): FetchResultWithTotalCount<ReliabilityAssetSensorRelation> | null;

  /**
   * Same as {@link ReliabilityAsset#evalFeatures} but only evaluates over the time range that overlaps
   * the default default time horizon configured in {@link Feature.Store.Config#defaultTimeHorizon}.
   *
   * @param features
   *        The names of the features to evaluate.
   * @param spec
   *        The {@link EvalFeaturesSpec} to use for the evaluation.
   *        `start` and `end` will be overridden to be within the default time horizon bounds.
   */
  evalFeaturesWithinTimeHorizon(features: Array_Type<string>, spec: EvalFeaturesSpec): Data | null;

  /**
   * Function to create a {@link ReliabilityAssetFlaggedEvent}.
   */
  createFlaggedEvent(spec: ReliabilityAssetFlaggedEventSpec, typeName: Type): string | null;

  /**
   * The function to update the dates of an {@link AlertMutedPeriod}.
   *
   * `timestamp` allows the user to identify which period to update; the first period matches the `alertType` and that contains
   * `timestamp` within it's start and end interval will be modified. Otherwise, the most recently created period that matches the
   * `alertType` will be modified.
   */
  updateMutedPeriodDates(alertType: ReliabilityAlertType, start?: DateTime, end?: DateTime, duration?: number, timestamp?: DateTime): AlertMutedPeriod;

  /**
   * Function to return all the asset levels in the application.
   * The asset levels are calculated based on the hierarchy denorm max depth and named based on
   * {@link ReliabilityUIConfig#assetLevels}.
   */
  static fetchAssetLevels(maxDepthOverride?: number): any | null;

  /**
   * Function to modify the sensor mappings for this asset based on the provided spec.
   *
   * Modifying the sensor mappings includes creating new {@link Sensor}s, creating new {@link ExpectedSensor}s, and upserting and/or removing
   * {@link ReliabilityAssetSensorRelation}s. The asset's sensor mapping status can also be marked through the spec.
   *
   * **NOTE**: This function wil set {@link Sensor#fallbackUnit} for each sensor with a valid `unitConstraint` field.
   *
   * @param spec
   *        The {@link ModifySensorMappingSpec} to use for modifying the sensor mappings.
   */
  modifySensorMappings(spec?: ModifySensorMappingSpec): void;

  /**
   * Function to create a {@link ReliabilityAssetRegime}.
   */
  createRegime(spec: ReliabilityAssetFlaggedEventSpec): string | null;

  /**
   * Retrieves an updated inference period for the asset based on the latest prediction timestamps.
   * Uses {@link ReliabilityMLOutputConfig#maximumPredictionLookbackForIncrementalInference}.
   *
   * Only updates the provided {@link TimeRange} if both start and end are within the lookback period.
   *
   * @param timeRange
   *      The time range to consider when determining the inference period.
   * @param project
   *      The ML project to consider when determining the inference period.
   * @param statusLabel
   *       The status label of the model to consider when determining the inference period.
   * @return
   *      The updated inference period for the asset.
   */
  getIncrementalInferencePeriod(timeRange: TimeRange, project: ReliabilityMl.Project, statusLabel?: string): TimeRange;

  /**
   * Typically, asset-specific customizations of the spec may be done in this function.
   * For example, different assets may have different (start, end) customizations depending
   * on how much data is available for each of them. Such customizations may be done to the
   * {@link ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference} inside this function.
   * The default implementation does not customize the spec in any way.
   */
  beforeRunReliabilityRiskModelInference(spec: ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference | null;

  /**
   * The function to create a {@link AlertMutedPeriod}.
   */
  createMutedPeriod(alertType: ReliabilityAlertType, start?: DateTime, end?: DateTime, duration?: number): AlertMutedPeriod;

  /**
   * This method returns the mask metric linked to the hash identifier created when running the computeAnomalousPeriods.
   * This string is also the id of the {@link FlaggedEventType} parent to the persisted {@link ReliabilityAssetAnomalousPeriod}s.
   */
  static createMaskMetric(hashString: string): SimpleMetric | null;

  /**
   * The main function that is run by {@link ReliabilityOrchestrator.ReliabilityRisk.InferenceJob#map}.
   * It calls the below functions, in sequence:
   * 1. {@link beforeRunReliabilityRiskModelInference}
   * 2. {@link doRunReliabilityRiskModelInference}
   * 3. {@link afterRunReliabilityRiskModelInference}
   */
  runReliabilityRiskModelInference(spec: ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference): void;

  /**
   * Contains the core logic of model inference for a {@link ReliabilityAsset}:
   * 1. {@link ReliabilityMlModel#process}
   * 2. {@link ReliabilityMlModel#interpret}
   * 3. {@link ReliabilityRiskScoreMlPredictionHeader#refreshNormalization}
   * 4. {@link ReliabilityRiskScoreMlContributionHeader#refreshNormalization}
   * 5. {@link ReliabilityAsset#refreshCalcFields}
   */
  doRunReliabilityRiskModelInference(spec: ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference, subjectModelRelation: ReliabilityAssetToRiskModelRelation, timeRange: TimeRange): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference | null;

  /**
   * Creates a {@link ReliabilityAssetReportJob map reduce job} to generate a report for the given {@link ReliabilityAsset assets}.
   * @param assets
   *        The assets for which the report is to be generated.
   * @param facility
   *        The {@link Facility} that the Report belongs to.
   * @param assetReportSpec
   *        The spec for the report.
   * @param waitForCompletion
   *        Whether to wait for the job to complete and return the created report. If false, the method will return the job.
   */
  static generateMultiReportEntity(assets: Array_Type<ReliabilityAsset>, facility?: Facility, assetReportSpec: ReliabilityAssetReportSpec, waitForCompletion?: boolean): ReliabilityAssetReport | ReliabilityAssetReportJob | null;

  /**
   * Any customization to the model inference routine post-{@link doRunReliabilityRiskModelInference}
   * may be performed in an overridden implementation of this function. The default implementation
   * does not run any action. However, if there are model inference routines particular to your deployment
   * that need to be run in addition to the steps detailed in {@link doRunReliabilityRiskModelInference},
   * then use this hook to provide such an implementation.
   */
  afterRunReliabilityRiskModelInference(spec: ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference): ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelInference | null;

  /**
   * Gets the {@link AlertMutedPeriod} associated with the {@link ReliabilityAsset} for a given {@link ReliabilityAlertType}.
   *
   * @param alertType
   *              The desired {@link ReliabilityAlertType} for the {@link AlertMutedPeriod}
   * @param timestamp
   *              Optional parameter used to determine which associated {@link AlertMutedPeriod} to
   *              return.
   * @return the most recent {@link AlertMutedPeriod} that matches the `alertType` or the first period
   * that matches the `alertType` and whose period encompasses the `timestamp` parameter.
   */
  getMutedPeriodForAlertType(alertType: ReliabilityAlertType, timestamp?: DateTime): AlertMutedPeriod | null;

  /**
   * Function to create a {@link ReliabilityAssetAnomalousPeriod}.
   */
  createAnomalousPeriod(spec: ReliabilityAssetFlaggedEventSpec): string | null;

  /**
   * This is a helper function that receives an {@link ReliabilityAsset#id} and returns a filter that would exclude all
   * {@link ReliabilityMl.Project}s already [added to the asset](#assignedProjects).
   */
  static generateNotAddedMlProjectsFilter(assetId: string): Filter;

  /**
   * Given a time range, evaluates the number of open alerts on this asset grouped by project over time.
   * The metric result has a special format since the expressions are replaced by
   * stringified {@link UiSdlTimeseriesLineBarChartYAxisDataSpecSetting} indicating how each timeseries should be
   * displayed.
   */
  evalNumOpenAlertsByProject(timeInfo: TimeInfo): EvalMetricsResult | null;

  /**
   * Returns the num of {@link ReliabilityMl.Project}s that are not related to the given
   * {@link ReliabilityAsset#id}.
   *
   * This is the fetchCount version of #fetchProjectsNotAddedToAsset. Only the {@link FetchSpec#filter} is used.
   */
  static fetchCountProjectsNotAddedToAsset(assetId: string, spec?: FetchSpec): number;

  /**
   * Fetches the assets associated with a given work order case.
   *
   * This function retrieves the assets related to a specific work order case. If the case has no assets assigned,
   * it fetches all assets associated with the facility of the case. Otherwise, it returns the assets assigned to the case.
   *
   * param string caseId
   *     The ID of the work order case.
   * @returns {FetchResult<ReliabilityAsset>} - The result containing the list of assets.
   */
  static fetchAssetsForWorkOrder(caseId?: string): FetchResult<ReliabilityAsset> | null;

  /**
   * Returns only the {@link ReliabilityMl.Project}s that are not related to the given
   * {@link ReliabilityAsset#id}
   *
   * The {@link FetchSpec} must be for the {@link ReliabilityMl.Project}s and all fields are supported.
   */
  static fetchProjectsNotAddedToAsset(assetId: string, spec: FetchSpec): FetchResult<ReliabilityMl.Project>;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}

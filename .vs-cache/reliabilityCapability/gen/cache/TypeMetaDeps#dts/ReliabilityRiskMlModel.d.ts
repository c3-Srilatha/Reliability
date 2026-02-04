// TypeScript definitions for the C3 type ReliabilityRiskMlModel

/**
 * This is an extension of the base {@link ReliabilityMlModel} for {@link MlProject.ReliabilityRisk}.
 * The `ReliabilityRiskMlModel` is designed for the modeling and risk classification of assets in reliability
 * risk projects. It encapsulates the creation, validation, classification, and evaluation of risk models within the
 * context of reliability analysis. This model type is specifically tailored for scenarios where predictive maintenance,
 * risk scoring, and asset monitoring are required.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityRiskMlModel
 */
declare interface IReliabilityRiskMlModel {

  /**
   * For internal use: consolidates {@link #xFeatures} and {@link #yFeatures} into a single array.
   * This is populated automatically by {@link #beforeCreate}.
   */
  features?: Array_Type<Feature.Set> | Array<IFeature.Set>;

  /**
   * A unique identifier that can be manually assigned or generated automatically during object creation. This
   * identifier cannot be altered after the object has been persisted.
   */
  id: string;

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
   * The project this object belongs to.
   */
  project: IMlProject;

  /**
   * System managed field that keeps track of which fields in the seed data obj were updated by a user (as opposed to
   * the provisioner/authorizer).  Fields in seed data objs that are updated by users will not have those changes
   * overridden by provisioning.
   */
  userUpdatedFields?: Array_Type<string> | Array<string>;

  /**
   * Field that marks a seed data obj as hidden.  When a seed data obj that was created via provisioning (e.g owned by
   * c3), user removals of that obj are handled by marking the obj as hidden to prevent future provisioning from causing
   * them to reappear.
   */
  hidden?: boolean;

  /**
   * A seed data entry is considered to be user owned if either this flag is true or the {@link Meta#created created}
   * field of {@link Persistable#meta} is not the authorizer or provisioner.  This field is completely managed by the
   * system.  It will be set while creating an entry if it is being created by the authorizer and the
   * {@link UpsertSpec#forceUserUpdate} is set to true.
   */
  userOwned?: boolean;

  /**
   * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
   * of its base type's typeIdent
   */
  typeIdent?: string;

  /**
   * The underlying pipeline used by the model.
   *
   * It must be {@link MlPipeline#isTrainable trainable} if the model is to be trained,
   * or {@link MlPipeline#isProcessable processable} if the model is to be directly deployed and used to serve
   * predictions.
   */
  pipeline: IMlPipeline<any, any, any, any, any>;

  /**
   * The underlying {@link #pipeline} will skip creating a new {@link Workflow} if one is provided for the list of
   * operations. Note that if the workflow has been specified for a particular operation, it will take precedence over
   * the {@link MlOperationSpec#workflowOverride} specified in {@link #operationSpec} for the operation.
   */
  workflowOverrides?: Map_Type<string, Workflow> | {[key: string]: IWorkflow};

  /**
   * Map of {@link pipeline} `x` inputs names to corresponding {@link Feature.Set sets} of features.
   * The keys of the map must be a subset of the names of the "x" inputs of the pipeline.
   *
   * @see Feature
   */
  xFeatures?: Map_Type<string, Feature.Set> | {[key: string]: IFeature.Set};

  /**
   * Map of {@link pipeline} `y` inputs names to corresponding {@link Feature.Set sets} of features.
   * The keys of the map must be a subset of the names of the "y" inputs of the pipeline.
   *
   * @see Feature
   */
  yFeatures?: Map_Type<string, Feature.Set> | {[key: string]: IFeature.Set};

  /**
   * Map of {@link EvalFeatureSpec#projection} for {@link #xFeatures}.
   * The keys of this map must be same or subset of keys of {@link MlModel#xFeatures}.
   * The values of this map are comma-separated feature names to evaluate.
   * For example, for a feature set named 'metricFs' with features 'f1', 'f2', 'f3',
   * if we want to evaluate only the feature 'f1' and 'f2', we can use either "f1, f2" or "metricFs.f1, metricFs.f2".
   * If this field is set, projections will be applied to all operations on this model.
   */
  xProjections?: Map_Type<string, string> | {[key: string]: string};

  /**
   * Map of {@link EvalFeatureSpec#projection} for {@link #yFeatures}.
   * The keys of this map must be same or subset of keys of {@link MlModel#yFeatures}.
   * The values of this map are comma-separated feature names to evaluate.
   * For example, for a feature set named 'metricFs' with features 'f1', 'f2', 'f3',
   * if we want to evaluate only the feature 'f1' and 'f2', we can use either "f1, f2" or "metricFs.f1, metricFs.f2".
   * If this field is set, projections will be applied to all operations on this model.
   */
  yProjections?: Map_Type<string, string> | {[key: string]: string};

  /**
   * {@link Feature.Set.Snapshot snapshot} that captures #xFeatures and #yFeatures during #train if snapshotId is provided
   * see also #train
   */
  snapshot?: IFeature.Set.Snapshot;

  /**
   * For internal use: consolidates {@link #xSnapshots} and {@link #ySnapshots} into a single array.
   * This is populated automatically by {@link #beforeCreate}.
   */
  snapshots?: Array_Type<Feature.Set.Snapshot> | Array<IFeature.Set.Snapshot>;

  /**
   * Map of {@link MlModel} `x` inputs names to corresponding {@link Feature.Set.Snapshot}s.
   * The keys of this map must be same or subset of keys of {@link MlModel#xFeatures}.
   * If {@link MlOperationSpec#xSnapshotIds} is provided, then this field is populated after {@link #train}.
   * see {@link MlModel#train}
   */
  xSnapshots?: Map_Type<string, Feature.Set.Snapshot> | {[key: string]: IFeature.Set.Snapshot};

  /**
   * Map of {@link MlModel} `y` inputs names to corresponding {@link Feature.Set.Snapshot}s.
   * The keys of this map must be same or subset of keys of {@link MlModel#yFeatures}.
   * If {@link MlOperationSpec#ySnapshotIds} is provided, then this field is populated after {@link #train}.
   * see {@link MlModel#train}
   */
  ySnapshots?: Map_Type<string, Feature.Set.Snapshot> | {[key: string]: IFeature.Set.Snapshot};

  /**
   * {@link MlModel.Input} that captures the inputs used for {@link MlModel#train}.
   */
  trainInput?: IMlModel.Input;

  /**
   * Foreign key reference to a list of all {@link MlModel.Evaluation.Result} for this {@link MlModel}.
   */
  evaluationResults?: Array_Type<MlModel.Evaluation.Result> | Array<IMlModel.Evaluation.Result>;

  /**
   * Foreign key reference to a list of all {@link MlModel.Monitor.TimedResult} for this {@link MlModel}.
   */
  monitorResults?: Array_Type<MlModel.Monitor.TimedResult> | Array<IMlModel.Monitor.TimedResult>;

  /**
   * Foreign key reference to the health history of this {@link MlModel}.
   */
  healthHistory?: Array_Type<MlModel.Health.History> | Array<IMlModel.Health.History>;

  /**
   * Scores calculated using {@link xFeatures} and {@link yFeatures} provided for {@link MlModel#train}.
   * This field is automatically set on trained {@link MlModel} if {@link MlOperationSpec#scoreMlModel} is set to `true`.
   * `trainScores` is a {@link Map}, whose keys are {@link MlPipeline#scoreNames} and values are respective score values.
   */
  trainScores?: Map_Type<string, number> | {[key: string]: number};

  /**
   * Map of operation name to {@link MlOperationSpec} for executing the respective operation.
   * Operation name is {@link MlDataOpName}, representing one of train, process, interpret or score operation.
   * If this field is set, internal execution will use this `MlOperationSpec` for the respective operation, unless
   * an {@link MlOperationSpec} is provided at execution time with {@link MlOperationSpec#overrideStaticSpec} set.
   */
  operationSpec?: Map_Type<string, MlOperationSpec> | {[key: string]: IMlOperationSpec};

  /**
   * Asset relations that link the model to the assets associated with it. These relations are ordered by creation
   * date in descending order.
   */
  assetRelations?: Array_Type<ReliabilityAssetToRiskModelRelation> | Array<IReliabilityAssetToRiskModelRelation>;

  /**
   * The current active asset relations for this model. Only relations that are still valid (i.e., the end date is
   * not in the past or the start date is not in the future) are included, ordered by the creation date.
   */
  currentAssetRelations?: Array_Type<ReliabilityAssetToRiskModelRelation> | Array<IReliabilityAssetToRiskModelRelation>;

  /**
   * Validation Status for this {@link ReliabilityMlModel}.
   */
  validationStatus?: string;

  /**
   * The most recent validation status for this model. Uses the latest value from {@link ReliabilityMlModel#validationStatusHistory}.
   */
  currentValidationStatus?: IReliabilityMlModel.ValidationStatus;

  /**
   * History of the validation status for this model. TimedValueHistory for {@link ReliabilityMlModel#currentValidationStatus}.
   */
  validationStatusHistory?: Array_Type<ReliabilityMlModel.ValidationStatus.History> | Array<IReliabilityMlModel.ValidationStatus.History>;

  /**
   * The training results of this {@link ReliabilityMlModel} which will contain
   * the training scores for the asset in this model.
   */
  trainResults?: Array_Type<MlModel.Train.Result> | Array<IMlModel.Train.Result>;

  /**
   * The {@link ReliabilityMl.Project} instance associated with this model,
   * retrieved using the corresponding MlProject ID.
   */
  reliabilityProject?: IReliabilityMl.Project;

  /**
   * The {@link ReliabilityModelRegistry.SourceEntry} associated with this model.
   */
  sourceRegistryEntry?: Array_Type<ReliabilityModelRegistry.SourceEntry> | Array<IReliabilityModelRegistry.SourceEntry>;

  /**
   * The {@link ReliabilityMlDatasetPreparationRun} used for preparing the dataset for training the model.
   * This reference allows the model to trace back to the dataset preparation process and the corresponding training
   * period for the model.
   */
  datasetPreparationRun?: IReliabilityMlDatasetPreparationRun;

  /**
   * The {@link ModelTemplate} used to create and train this model.
   */
  template?: IModelTemplate;

  /**
   * References a {@link ReliabilityMlModel} from which this current model may be replicated.
   * If this model is replicated, then all its trainable hyperparameters will be the same
   * as the model from which it is replicated. Some inference-only parameters will have
   * changed.
   */
  replicatedFrom?: IReliabilityMlModel;

  /**
   * References a {@link ReliabilityMlModel} from which this model has been refitted.
   * If this model is a refit, it inherits the underlying hyperparameters and model
   * structure from the referenced model. Some hyperparameters specific to this model
   * might be adjusted as part of the refit process, but the model itself is derived
   * from the original. This is typically used when a model needs to be re-trained
   * or fine-tuned on new data, retaining some characteristics from the original model.
   */
  refitFrom?: IReliabilityMlModel;

  /**
   * References the source {@link ReliabilityMlModel} that this model was retrained from,
   * enabling traceability for models generated through the automated retraining pipeline.
   */
  retrainedFrom?: IReliabilityMlModel;

  /**
   * All the {@link ReliabilityMl.ModelReport}s generated for this model.
   */
  reports?: Array_Type<ReliabilityMl.ModelReport> | Array<IReliabilityMl.ModelReport>;

  /**
   * The {@link ReliabilityMlModel.ClassificationScore} thats related to each {@link ReliabilityMlModel}.
   */
  classificationScores?: Array_Type<ReliabilityMlModel.ClassificationScore> | Array<IReliabilityMlModel.ClassificationScore>;

  /**
   * The {@link ReliabilityMlModel.MonitoringScore} scores for this model.
   */
  monitoringScores?: Array_Type<ReliabilityMlModel.MonitoringScore> | Array<IReliabilityMlModel.MonitoringScore>;

  /**
   * The latest score in {@link #classificationScores}.
   */
  classificationScore?: IReliabilityMlModel.ClassificationScore;

  /**
   * The monitoring score for the most recent period in {@link #monitoringScores}.
   */
  monitoringScore?: IReliabilityMlModel.MonitoringScore;

  /**
   * The label for most recent classification score for this model.
   *
   * **NOTE**: This field is dependent on `classificationScores[0]` rather than `classificationScore`
   * to avoid a read calc dependency issue when evaluating this stored calc. Using `classificationScore`
   * leads to incorrect evaluation of this field.
   */
  classificationLabel?: string;

  /**
   * The label for most recent monitoring score for this model.
   *
   * **NOTE**: This field is dependent on `monitoringScores[0]` rather than `monitoringScore`
   * to avoid a read calc dependency issue when evaluating this stored calc. Using `monitoringScore`
   * leads to incorrect evaluation of this field.
   */
  monitoringLabel?: string;

  /**
   * Translated {@link ReliabilityMlModel#monitoringLabel}, to be used in the UI.
   */
  translatedMonitoringLabel?: string;

  /**
   * List of TimeRange(s) of training and validation periods for the associated {@link ReliabilityMlDatasetPreparationRun}
   * return is formatted where trainingValidationPeriods[0] refers to the training periods and trainingValidationPeriods[1] refers to the validation periods
   */
  trainingValidationPeriods?: Array_Type<Array_Type<TimeRange>> | Array<Array_Type<TimeRange> | Array<ITimeRange>>;

  /**
   * Represents the latest {@link ReliabilityMlModelExperiment}.
   */
  latestAdjustModelHyperparamsExperiment?: IReliabilityMlModelExperiment;

  /**
   * The relations that can be used to access the validation model outputs and contributions for this model.
   * Not applicable for {@link ReliabilityRiskMlModel}s.
   */
  validationRelations?: Array_Type<ReliabilityAssetToModelValidationRelation> | Array<IReliabilityAssetToModelValidationRelation>;

  /**
   * Whether or not this model has performed Model Validation.
   */
  hasPerformedValidation?: boolean;

  /**
   * The route of the model. This fields assumes that models are deployed once. If models are deployed multiple times, this field will be one of the routes of the model.
   */
  route?: IMlModel.Route;

  /**
   * The time when the deployment status last changed.
   */
  timeOfLastDeploymentStatusChange?: DateTime | Date | string;

  /**
   * The {@link ReliabilityAssetAlert} triggered by this model.
   */
  triggeredAlerts?: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert>;

  /**
   * The count of all the alerts this model has raised.
   */
  alertCount?: number;

  /**
   * {@link ReliabilityMlModel} that share the same project as this model.
   */
  otherModelsInProject?: Array_Type<ReliabilityMlModel> | Array<IReliabilityMlModel>;

  /**
   * The status label for alerts for this model, indicating whether they are currently muted or unmuted.
   * This field is intended to be used only in the UI for display or filtering purposes.
   */
  mutedDisplayStatusLabel?: string;

  /**
   * The [relation](FaultySensor.RiskModelSourceOfTruthRelation) created when (and only when) this model was generated
   * as part of the {@link FaultySensor} retraining process. It enables tracking the initial model and how it was
   * modified over time to account for [faulty sensors](Sensor#operationalStatus).
   */
  faultySensorSourceOfTruthRelation?: IFaultySensor.RiskModelSourceOfTruthRelation;

  /**
   * {@link AlertMutedPeriod}s during which alerts from this model have been muted.
   */
  mutedPeriods?: Array_Type<AlertMutedPeriod> | Array<IAlertMutedPeriod>;

  /**
   * The feedback provided by users for this model.
   */
  feedback?: Array_Type<ModelUserFeedback> | Array<IModelUserFeedback>;

  /**
   * The {@link ReliabilityOrchestrator.TrainingJobResult} that trained this model.
   */
  trainJobResult?: IReliabilityOrchestrator.TrainingJobResult;

  /**
   * Latest suggestion provided for this model
   */
  latestSuggestion?: IModelUserFeedback;

  /**
   * The {@link ReliabilityOrchestrator.TrainingJobResult}, as part of which, this {@link ReliabilityMlModel}
   * was created in an asynchronous manner.
   */
  jobResult?: IReliabilityOrchestrator.TrainingJobResult;

  /**
   * The currently closed {@link ReliabilityAssetAlert} triggered by this model.
   */
  triggeredClosedAlerts?: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert>;

  /**
   * The current {@link AlertMutedPeriod} for this model, if one exists.
   */
  currentMutedPeriod?: IAlertMutedPeriod;

  /**
   * Indicates whether alerts for this model are currently muted.
   */
  isMuted?: boolean;

  /**
   * {@link ReliabilityRiskMlModel#assetRelations} for validation report
   */
  validationAssetRelations?: Array_Type<ReliabilityAssetToRiskModelValidationRelation> | Array<IReliabilityAssetToRiskModelValidationRelation>;

  /**
   * Directory for Pdf report. If not specified, defaults to value from {@link ReliabilityReportConfig#reportDirectory}.
   */
  reportDirectory?: string;
}

/**
 * This is an extension of the base {@link ReliabilityMlModel} for {@link MlProject.ReliabilityRisk}.
 * The `ReliabilityRiskMlModel` is designed for the modeling and risk classification of assets in reliability
 * risk projects. It encapsulates the creation, validation, classification, and evaluation of risk models within the
 * context of reliability analysis. This model type is specifically tailored for scenarios where predictive maintenance,
 * risk scoring, and asset monitoring are required.
 *
 * @remarks this represents a made instance of ReliabilityRiskMlModel
 */
declare class ReliabilityRiskMlModel extends Obj  {

  /**
   * For internal use: consolidates {@link #xFeatures} and {@link #yFeatures} into a single array.
   * This is populated automatically by {@link #beforeCreate}.
   */
  readonly features?: Array_Type<Feature.Set>;
  withFeatures(features: Array_Type<Feature.Set> | Array<IFeature.Set> | null): ReliabilityRiskMlModel;

  /**
   * A unique identifier that can be manually assigned or generated automatically during object creation. This
   * identifier cannot be altered after the object has been persisted.
   */
  readonly id: string;
  withId(id: string): ReliabilityRiskMlModel;

  /**
   * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
   * crucial for accessing previous versions of an object and is entirely managed by the system.
   *
   * @see Ann.Db#versionHistory
   */
  readonly versionEdits?: Array_Type<VersionEdit>;
  withVersionEdits(versionEdits: Array_Type<VersionEdit> | Array<IVersionEdit> | null): ReliabilityRiskMlModel;

  /**
   * Name of the Obj instance
   */
  readonly name?: string;
  withName(name: string | null): ReliabilityRiskMlModel;

  /**
   * Various system fields.
   */
  readonly meta?: Meta;
  withMeta(meta: IMeta | null): ReliabilityRiskMlModel;

  /**
   * Version number used for optimistic concurrency.  Automatically managed by the system.
   *
   * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
   * be done with great caution.
   */
  readonly version?: number;
  withVersion(version: number | null): ReliabilityRiskMlModel;

  /**
   * Persists concrete type with bindings for generic types where instance has parameter bindings
   */
  readonly typeWithBindings?: Type;
  withTypeWithBindings(typeWithBindings: IType | null): ReliabilityRiskMlModel;

  /**
   * @inheritdoc
   */
  readonly facilityFilterPaths?: Array_Type<string>;
  withFacilityFilterPaths(facilityFilterPaths: Array_Type<string> | Array<string> | null): ReliabilityRiskMlModel;

  /**
   * The project this object belongs to.
   */
  readonly project: MlProject;
  withProject(project: IMlProject): ReliabilityRiskMlModel;

  /**
   * System managed field that keeps track of which fields in the seed data obj were updated by a user (as opposed to
   * the provisioner/authorizer).  Fields in seed data objs that are updated by users will not have those changes
   * overridden by provisioning.
   */
  readonly userUpdatedFields?: Array_Type<string>;
  withUserUpdatedFields(userUpdatedFields: Array_Type<string> | Array<string> | null): ReliabilityRiskMlModel;

  /**
   * Field that marks a seed data obj as hidden.  When a seed data obj that was created via provisioning (e.g owned by
   * c3), user removals of that obj are handled by marking the obj as hidden to prevent future provisioning from causing
   * them to reappear.
   */
  readonly hidden?: boolean;
  withHidden(hidden: boolean): ReliabilityRiskMlModel;

  /**
   * A seed data entry is considered to be user owned if either this flag is true or the {@link Meta#created created}
   * field of {@link Persistable#meta} is not the authorizer or provisioner.  This field is completely managed by the
   * system.  It will be set while creating an entry if it is being created by the authorizer and the
   * {@link UpsertSpec#forceUserUpdate} is set to true.
   */
  readonly userOwned?: boolean;
  withUserOwned(userOwned: boolean): ReliabilityRiskMlModel;

  /**
   * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
   * of its base type's typeIdent
   */
  readonly typeIdent?: string;
  withTypeIdent(typeIdent: string | null): ReliabilityRiskMlModel;

  /**
   * The underlying pipeline used by the model.
   *
   * It must be {@link MlPipeline#isTrainable trainable} if the model is to be trained,
   * or {@link MlPipeline#isProcessable processable} if the model is to be directly deployed and used to serve
   * predictions.
   */
  readonly pipeline: MlPipeline<any, any, any, any, any>;
  withPipeline(pipeline: IMlPipeline<any, any, any, any, any>): ReliabilityRiskMlModel;

  /**
   * The underlying {@link #pipeline} will skip creating a new {@link Workflow} if one is provided for the list of
   * operations. Note that if the workflow has been specified for a particular operation, it will take precedence over
   * the {@link MlOperationSpec#workflowOverride} specified in {@link #operationSpec} for the operation.
   */
  readonly workflowOverrides?: Map_Type<string, Workflow>;
  withWorkflowOverrides(workflowOverrides: Map_Type<string, Workflow> | {[key: string]: IWorkflow} | null): ReliabilityRiskMlModel;

  /**
   * Map of {@link pipeline} `x` inputs names to corresponding {@link Feature.Set sets} of features.
   * The keys of the map must be a subset of the names of the "x" inputs of the pipeline.
   *
   * @see Feature
   */
  readonly xFeatures?: Map_Type<string, Feature.Set>;
  withXFeatures(xFeatures: Map_Type<string, Feature.Set> | {[key: string]: IFeature.Set} | null): ReliabilityRiskMlModel;

  /**
   * Map of {@link pipeline} `y` inputs names to corresponding {@link Feature.Set sets} of features.
   * The keys of the map must be a subset of the names of the "y" inputs of the pipeline.
   *
   * @see Feature
   */
  readonly yFeatures?: Map_Type<string, Feature.Set>;
  withYFeatures(yFeatures: Map_Type<string, Feature.Set> | {[key: string]: IFeature.Set} | null): ReliabilityRiskMlModel;

  /**
   * Map of {@link EvalFeatureSpec#projection} for {@link #xFeatures}.
   * The keys of this map must be same or subset of keys of {@link MlModel#xFeatures}.
   * The values of this map are comma-separated feature names to evaluate.
   * For example, for a feature set named 'metricFs' with features 'f1', 'f2', 'f3',
   * if we want to evaluate only the feature 'f1' and 'f2', we can use either "f1, f2" or "metricFs.f1, metricFs.f2".
   * If this field is set, projections will be applied to all operations on this model.
   */
  readonly xProjections?: Map_Type<string, string>;
  withXProjections(xProjections: Map_Type<string, string> | {[key: string]: string} | null): ReliabilityRiskMlModel;

  /**
   * Map of {@link EvalFeatureSpec#projection} for {@link #yFeatures}.
   * The keys of this map must be same or subset of keys of {@link MlModel#yFeatures}.
   * The values of this map are comma-separated feature names to evaluate.
   * For example, for a feature set named 'metricFs' with features 'f1', 'f2', 'f3',
   * if we want to evaluate only the feature 'f1' and 'f2', we can use either "f1, f2" or "metricFs.f1, metricFs.f2".
   * If this field is set, projections will be applied to all operations on this model.
   */
  readonly yProjections?: Map_Type<string, string>;
  withYProjections(yProjections: Map_Type<string, string> | {[key: string]: string} | null): ReliabilityRiskMlModel;

  /**
   * {@link Feature.Set.Snapshot snapshot} that captures #xFeatures and #yFeatures during #train if snapshotId is provided
   * see also #train
   */
  readonly snapshot?: Feature.Set.Snapshot;
  withSnapshot(snapshot: IFeature.Set.Snapshot | null): ReliabilityRiskMlModel;

  /**
   * For internal use: consolidates {@link #xSnapshots} and {@link #ySnapshots} into a single array.
   * This is populated automatically by {@link #beforeCreate}.
   */
  readonly snapshots?: Array_Type<Feature.Set.Snapshot>;
  withSnapshots(snapshots: Array_Type<Feature.Set.Snapshot> | Array<IFeature.Set.Snapshot> | null): ReliabilityRiskMlModel;

  /**
   * Map of {@link MlModel} `x` inputs names to corresponding {@link Feature.Set.Snapshot}s.
   * The keys of this map must be same or subset of keys of {@link MlModel#xFeatures}.
   * If {@link MlOperationSpec#xSnapshotIds} is provided, then this field is populated after {@link #train}.
   * see {@link MlModel#train}
   */
  readonly xSnapshots?: Map_Type<string, Feature.Set.Snapshot>;
  withXSnapshots(xSnapshots: Map_Type<string, Feature.Set.Snapshot> | {[key: string]: IFeature.Set.Snapshot} | null): ReliabilityRiskMlModel;

  /**
   * Map of {@link MlModel} `y` inputs names to corresponding {@link Feature.Set.Snapshot}s.
   * The keys of this map must be same or subset of keys of {@link MlModel#yFeatures}.
   * If {@link MlOperationSpec#ySnapshotIds} is provided, then this field is populated after {@link #train}.
   * see {@link MlModel#train}
   */
  readonly ySnapshots?: Map_Type<string, Feature.Set.Snapshot>;
  withYSnapshots(ySnapshots: Map_Type<string, Feature.Set.Snapshot> | {[key: string]: IFeature.Set.Snapshot} | null): ReliabilityRiskMlModel;

  /**
   * {@link MlModel.Input} that captures the inputs used for {@link MlModel#train}.
   */
  readonly trainInput?: MlModel.Input;
  withTrainInput(trainInput: IMlModel.Input | null): ReliabilityRiskMlModel;

  /**
   * Foreign key reference to a list of all {@link MlModel.Evaluation.Result} for this {@link MlModel}.
   */
  readonly evaluationResults?: Array_Type<MlModel.Evaluation.Result>;
  withEvaluationResults(evaluationResults: Array_Type<MlModel.Evaluation.Result> | Array<IMlModel.Evaluation.Result> | null): ReliabilityRiskMlModel;

  /**
   * Foreign key reference to a list of all {@link MlModel.Monitor.TimedResult} for this {@link MlModel}.
   */
  readonly monitorResults?: Array_Type<MlModel.Monitor.TimedResult>;
  withMonitorResults(monitorResults: Array_Type<MlModel.Monitor.TimedResult> | Array<IMlModel.Monitor.TimedResult> | null): ReliabilityRiskMlModel;

  /**
   * Foreign key reference to the health history of this {@link MlModel}.
   */
  readonly healthHistory?: Array_Type<MlModel.Health.History>;
  withHealthHistory(healthHistory: Array_Type<MlModel.Health.History> | Array<IMlModel.Health.History> | null): ReliabilityRiskMlModel;

  /**
   * Scores calculated using {@link xFeatures} and {@link yFeatures} provided for {@link MlModel#train}.
   * This field is automatically set on trained {@link MlModel} if {@link MlOperationSpec#scoreMlModel} is set to `true`.
   * `trainScores` is a {@link Map}, whose keys are {@link MlPipeline#scoreNames} and values are respective score values.
   */
  readonly trainScores?: Map_Type<string, number>;
  withTrainScores(trainScores: Map_Type<string, number> | {[key: string]: number} | null): ReliabilityRiskMlModel;

  /**
   * Map of operation name to {@link MlOperationSpec} for executing the respective operation.
   * Operation name is {@link MlDataOpName}, representing one of train, process, interpret or score operation.
   * If this field is set, internal execution will use this `MlOperationSpec` for the respective operation, unless
   * an {@link MlOperationSpec} is provided at execution time with {@link MlOperationSpec#overrideStaticSpec} set.
   */
  readonly operationSpec?: Map_Type<string, MlOperationSpec>;
  withOperationSpec(operationSpec: Map_Type<string, MlOperationSpec> | {[key: string]: IMlOperationSpec} | null): ReliabilityRiskMlModel;

  /**
   * Asset relations that link the model to the assets associated with it. These relations are ordered by creation
   * date in descending order.
   */
  readonly assetRelations?: Array_Type<ReliabilityAssetToRiskModelRelation>;
  withAssetRelations(assetRelations: Array_Type<ReliabilityAssetToRiskModelRelation> | Array<IReliabilityAssetToRiskModelRelation> | null): ReliabilityRiskMlModel;

  /**
   * The current active asset relations for this model. Only relations that are still valid (i.e., the end date is
   * not in the past or the start date is not in the future) are included, ordered by the creation date.
   */
  readonly currentAssetRelations?: Array_Type<ReliabilityAssetToRiskModelRelation>;
  withCurrentAssetRelations(currentAssetRelations: Array_Type<ReliabilityAssetToRiskModelRelation> | Array<IReliabilityAssetToRiskModelRelation> | null): ReliabilityRiskMlModel;

  /**
   * Validation Status for this {@link ReliabilityMlModel}.
   */
  readonly validationStatus?: string;
  withValidationStatus(validationStatus: string | null): ReliabilityRiskMlModel;

  /**
   * The most recent validation status for this model. Uses the latest value from {@link ReliabilityMlModel#validationStatusHistory}.
   */
  readonly currentValidationStatus?: ReliabilityMlModel.ValidationStatus;
  withCurrentValidationStatus(currentValidationStatus: IReliabilityMlModel.ValidationStatus | null): ReliabilityRiskMlModel;

  /**
   * History of the validation status for this model. TimedValueHistory for {@link ReliabilityMlModel#currentValidationStatus}.
   */
  readonly validationStatusHistory?: Array_Type<ReliabilityMlModel.ValidationStatus.History>;
  withValidationStatusHistory(validationStatusHistory: Array_Type<ReliabilityMlModel.ValidationStatus.History> | Array<IReliabilityMlModel.ValidationStatus.History> | null): ReliabilityRiskMlModel;

  /**
   * The training results of this {@link ReliabilityMlModel} which will contain
   * the training scores for the asset in this model.
   */
  readonly trainResults?: Array_Type<MlModel.Train.Result>;
  withTrainResults(trainResults: Array_Type<MlModel.Train.Result> | Array<IMlModel.Train.Result> | null): ReliabilityRiskMlModel;

  /**
   * The {@link ReliabilityMl.Project} instance associated with this model,
   * retrieved using the corresponding MlProject ID.
   */
  readonly reliabilityProject?: ReliabilityMl.Project;
  withReliabilityProject(reliabilityProject: IReliabilityMl.Project | null): ReliabilityRiskMlModel;

  /**
   * The {@link ReliabilityModelRegistry.SourceEntry} associated with this model.
   */
  readonly sourceRegistryEntry?: Array_Type<ReliabilityModelRegistry.SourceEntry>;
  withSourceRegistryEntry(sourceRegistryEntry: Array_Type<ReliabilityModelRegistry.SourceEntry> | Array<IReliabilityModelRegistry.SourceEntry> | null): ReliabilityRiskMlModel;

  /**
   * The {@link ReliabilityMlDatasetPreparationRun} used for preparing the dataset for training the model.
   * This reference allows the model to trace back to the dataset preparation process and the corresponding training
   * period for the model.
   */
  readonly datasetPreparationRun?: ReliabilityMlDatasetPreparationRun;
  withDatasetPreparationRun(datasetPreparationRun: IReliabilityMlDatasetPreparationRun | null): ReliabilityRiskMlModel;

  /**
   * The {@link ModelTemplate} used to create and train this model.
   */
  readonly template?: ModelTemplate;
  withTemplate(template: IModelTemplate | null): ReliabilityRiskMlModel;

  /**
   * References a {@link ReliabilityMlModel} from which this current model may be replicated.
   * If this model is replicated, then all its trainable hyperparameters will be the same
   * as the model from which it is replicated. Some inference-only parameters will have
   * changed.
   */
  readonly replicatedFrom?: ReliabilityMlModel;
  withReplicatedFrom(replicatedFrom: IReliabilityMlModel | null): ReliabilityRiskMlModel;

  /**
   * References a {@link ReliabilityMlModel} from which this model has been refitted.
   * If this model is a refit, it inherits the underlying hyperparameters and model
   * structure from the referenced model. Some hyperparameters specific to this model
   * might be adjusted as part of the refit process, but the model itself is derived
   * from the original. This is typically used when a model needs to be re-trained
   * or fine-tuned on new data, retaining some characteristics from the original model.
   */
  readonly refitFrom?: ReliabilityMlModel;
  withRefitFrom(refitFrom: IReliabilityMlModel | null): ReliabilityRiskMlModel;

  /**
   * References the source {@link ReliabilityMlModel} that this model was retrained from,
   * enabling traceability for models generated through the automated retraining pipeline.
   */
  readonly retrainedFrom?: ReliabilityMlModel;
  withRetrainedFrom(retrainedFrom: IReliabilityMlModel | null): ReliabilityRiskMlModel;

  /**
   * All the {@link ReliabilityMl.ModelReport}s generated for this model.
   */
  readonly reports?: Array_Type<ReliabilityMl.ModelReport>;
  withReports(reports: Array_Type<ReliabilityMl.ModelReport> | Array<IReliabilityMl.ModelReport> | null): ReliabilityRiskMlModel;

  /**
   * The {@link ReliabilityMlModel.ClassificationScore} thats related to each {@link ReliabilityMlModel}.
   */
  readonly classificationScores?: Array_Type<ReliabilityMlModel.ClassificationScore>;
  withClassificationScores(classificationScores: Array_Type<ReliabilityMlModel.ClassificationScore> | Array<IReliabilityMlModel.ClassificationScore> | null): ReliabilityRiskMlModel;

  /**
   * The {@link ReliabilityMlModel.MonitoringScore} scores for this model.
   */
  readonly monitoringScores?: Array_Type<ReliabilityMlModel.MonitoringScore>;
  withMonitoringScores(monitoringScores: Array_Type<ReliabilityMlModel.MonitoringScore> | Array<IReliabilityMlModel.MonitoringScore> | null): ReliabilityRiskMlModel;

  /**
   * The latest score in {@link #classificationScores}.
   */
  readonly classificationScore?: ReliabilityMlModel.ClassificationScore;
  withClassificationScore(classificationScore: IReliabilityMlModel.ClassificationScore | null): ReliabilityRiskMlModel;

  /**
   * The monitoring score for the most recent period in {@link #monitoringScores}.
   */
  readonly monitoringScore?: ReliabilityMlModel.MonitoringScore;
  withMonitoringScore(monitoringScore: IReliabilityMlModel.MonitoringScore | null): ReliabilityRiskMlModel;

  /**
   * The label for most recent classification score for this model.
   *
   * **NOTE**: This field is dependent on `classificationScores[0]` rather than `classificationScore`
   * to avoid a read calc dependency issue when evaluating this stored calc. Using `classificationScore`
   * leads to incorrect evaluation of this field.
   */
  readonly classificationLabel?: string;
  withClassificationLabel(classificationLabel: string | null): ReliabilityRiskMlModel;

  /**
   * The label for most recent monitoring score for this model.
   *
   * **NOTE**: This field is dependent on `monitoringScores[0]` rather than `monitoringScore`
   * to avoid a read calc dependency issue when evaluating this stored calc. Using `monitoringScore`
   * leads to incorrect evaluation of this field.
   */
  readonly monitoringLabel?: string;
  withMonitoringLabel(monitoringLabel: string | null): ReliabilityRiskMlModel;

  /**
   * Translated {@link ReliabilityMlModel#monitoringLabel}, to be used in the UI.
   */
  readonly translatedMonitoringLabel?: string;
  withTranslatedMonitoringLabel(translatedMonitoringLabel: string | null): ReliabilityRiskMlModel;

  /**
   * List of TimeRange(s) of training and validation periods for the associated {@link ReliabilityMlDatasetPreparationRun}
   * return is formatted where trainingValidationPeriods[0] refers to the training periods and trainingValidationPeriods[1] refers to the validation periods
   */
  readonly trainingValidationPeriods?: Array_Type<Array_Type<TimeRange>>;
  withTrainingValidationPeriods(trainingValidationPeriods: Array_Type<Array_Type<TimeRange>> | Array<Array_Type<TimeRange> | Array<ITimeRange>> | null): ReliabilityRiskMlModel;

  /**
   * Represents the latest {@link ReliabilityMlModelExperiment}.
   */
  readonly latestAdjustModelHyperparamsExperiment?: ReliabilityMlModelExperiment;
  withLatestAdjustModelHyperparamsExperiment(latestAdjustModelHyperparamsExperiment: IReliabilityMlModelExperiment | null): ReliabilityRiskMlModel;

  /**
   * The relations that can be used to access the validation model outputs and contributions for this model.
   * Not applicable for {@link ReliabilityRiskMlModel}s.
   */
  readonly validationRelations?: Array_Type<ReliabilityAssetToModelValidationRelation>;
  withValidationRelations(validationRelations: Array_Type<ReliabilityAssetToModelValidationRelation> | Array<IReliabilityAssetToModelValidationRelation> | null): ReliabilityRiskMlModel;

  /**
   * Whether or not this model has performed Model Validation.
   */
  readonly hasPerformedValidation?: boolean;
  withHasPerformedValidation(hasPerformedValidation: boolean): ReliabilityRiskMlModel;

  /**
   * The route of the model. This fields assumes that models are deployed once. If models are deployed multiple times, this field will be one of the routes of the model.
   */
  readonly route?: MlModel.Route;
  withRoute(route: IMlModel.Route | null): ReliabilityRiskMlModel;

  /**
   * The time when the deployment status last changed.
   */
  readonly timeOfLastDeploymentStatusChange?: DateTime;
  withTimeOfLastDeploymentStatusChange(timeOfLastDeploymentStatusChange: DateTime | Date | string | null): ReliabilityRiskMlModel;

  /**
   * The {@link ReliabilityAssetAlert} triggered by this model.
   */
  readonly triggeredAlerts?: Array_Type<ReliabilityAssetAlert>;
  withTriggeredAlerts(triggeredAlerts: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert> | null): ReliabilityRiskMlModel;

  /**
   * The count of all the alerts this model has raised.
   */
  readonly alertCount?: number;
  withAlertCount(alertCount: number | null): ReliabilityRiskMlModel;

  /**
   * {@link ReliabilityMlModel} that share the same project as this model.
   */
  readonly otherModelsInProject?: Array_Type<ReliabilityMlModel>;
  withOtherModelsInProject(otherModelsInProject: Array_Type<ReliabilityMlModel> | Array<IReliabilityMlModel> | null): ReliabilityRiskMlModel;

  /**
   * The status label for alerts for this model, indicating whether they are currently muted or unmuted.
   * This field is intended to be used only in the UI for display or filtering purposes.
   */
  readonly mutedDisplayStatusLabel?: string;
  withMutedDisplayStatusLabel(mutedDisplayStatusLabel: string | null): ReliabilityRiskMlModel;

  /**
   * The [relation](FaultySensor.RiskModelSourceOfTruthRelation) created when (and only when) this model was generated
   * as part of the {@link FaultySensor} retraining process. It enables tracking the initial model and how it was
   * modified over time to account for [faulty sensors](Sensor#operationalStatus).
   */
  readonly faultySensorSourceOfTruthRelation?: FaultySensor.RiskModelSourceOfTruthRelation;
  withFaultySensorSourceOfTruthRelation(faultySensorSourceOfTruthRelation: IFaultySensor.RiskModelSourceOfTruthRelation | null): ReliabilityRiskMlModel;

  /**
   * {@link AlertMutedPeriod}s during which alerts from this model have been muted.
   */
  readonly mutedPeriods?: Array_Type<AlertMutedPeriod>;
  withMutedPeriods(mutedPeriods: Array_Type<AlertMutedPeriod> | Array<IAlertMutedPeriod> | null): ReliabilityRiskMlModel;

  /**
   * The feedback provided by users for this model.
   */
  readonly feedback?: Array_Type<ModelUserFeedback>;
  withFeedback(feedback: Array_Type<ModelUserFeedback> | Array<IModelUserFeedback> | null): ReliabilityRiskMlModel;

  /**
   * The {@link ReliabilityOrchestrator.TrainingJobResult} that trained this model.
   */
  readonly trainJobResult?: ReliabilityOrchestrator.TrainingJobResult;
  withTrainJobResult(trainJobResult: IReliabilityOrchestrator.TrainingJobResult | null): ReliabilityRiskMlModel;

  /**
   * Latest suggestion provided for this model
   */
  readonly latestSuggestion?: ModelUserFeedback;
  withLatestSuggestion(latestSuggestion: IModelUserFeedback | null): ReliabilityRiskMlModel;

  /**
   * The {@link ReliabilityOrchestrator.TrainingJobResult}, as part of which, this {@link ReliabilityMlModel}
   * was created in an asynchronous manner.
   */
  readonly jobResult?: ReliabilityOrchestrator.TrainingJobResult;
  withJobResult(jobResult: IReliabilityOrchestrator.TrainingJobResult | null): ReliabilityRiskMlModel;

  /**
   * The currently closed {@link ReliabilityAssetAlert} triggered by this model.
   */
  readonly triggeredClosedAlerts?: Array_Type<ReliabilityAssetAlert>;
  withTriggeredClosedAlerts(triggeredClosedAlerts: Array_Type<ReliabilityAssetAlert> | Array<IReliabilityAssetAlert> | null): ReliabilityRiskMlModel;

  /**
   * The current {@link AlertMutedPeriod} for this model, if one exists.
   */
  readonly currentMutedPeriod?: AlertMutedPeriod;
  withCurrentMutedPeriod(currentMutedPeriod: IAlertMutedPeriod | null): ReliabilityRiskMlModel;

  /**
   * Indicates whether alerts for this model are currently muted.
   */
  readonly isMuted?: boolean;
  withIsMuted(isMuted: boolean): ReliabilityRiskMlModel;

  /**
   * {@link ReliabilityRiskMlModel#assetRelations} for validation report
   */
  readonly validationAssetRelations?: Array_Type<ReliabilityAssetToRiskModelValidationRelation>;
  withValidationAssetRelations(validationAssetRelations: Array_Type<ReliabilityAssetToRiskModelValidationRelation> | Array<IReliabilityAssetToRiskModelValidationRelation> | null): ReliabilityRiskMlModel;

  /**
   * Directory for Pdf report. If not specified, defaults to value from {@link ReliabilityReportConfig#reportDirectory}.
   */
  readonly reportDirectory?: string;
  withReportDirectory(reportDirectory: string | null): ReliabilityRiskMlModel;

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
  static fromJson(json: any): ReliabilityRiskMlModel | null;

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
  static fromJsonString(json: string): ReliabilityRiskMlModel | null;

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
  static fromXmlString(xml: string): ReliabilityRiskMlModel | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityRiskMlModel | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityRiskMlModel;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityRiskMlModel;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityRiskMlModel;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityRiskMlModel>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityRiskMlModel>;

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
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityRiskMlModel;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityRiskMlModel;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityRiskMlModel;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityRiskMlModel;

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
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityRiskMlModel;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityRiskMlModel;

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
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityRiskMlModel;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityRiskMlModel;

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
  withoutFieldAtPath(path: string): ReliabilityRiskMlModel;

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
  withoutField(field: string): ReliabilityRiskMlModel;

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
  withoutField(field: FieldType): ReliabilityRiskMlModel;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityRiskMlModel;

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
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityRiskMlModel;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityRiskMlModel;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityRiskMlModel;

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
  defaultField(field: string): ReliabilityRiskMlModel;

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
  defaultField(field: FieldType): ReliabilityRiskMlModel;

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
  unsetField(field: string): ReliabilityRiskMlModel;

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
  unsetField(field: FieldType): ReliabilityRiskMlModel;

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
  removeField(field: string): ReliabilityRiskMlModel;

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
  removeField(field: FieldType): ReliabilityRiskMlModel;

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
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityRiskMlModel;

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
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityRiskMlModel;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityRiskMlModel;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityRiskMlModel;

  mergeJson(json: any): ReliabilityRiskMlModel;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityRiskMlModel;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityRiskMlModel;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityRiskMlModel>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityRiskMlModel> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityRiskMlModel> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityRiskMlModel>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityRiskMlModel> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityRiskMlModel> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityRiskMlModel> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityRiskMlModel>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityRiskMlModel>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityRiskMlModel;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityRiskMlModel;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityRiskMlModel;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityRiskMlModel;

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
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityRiskMlModel;

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
  static make(fields: any, withDefaults?: boolean): ReliabilityRiskMlModel;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string): ReliabilityRiskMlModel | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityRiskMlModel;

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
  afterMake(): ReliabilityRiskMlModel;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityRiskMlModel;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityRiskMlModel> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityRiskMlModel;

  /**
   * Must be implemented by types that require a report to be generated.
   * It creates the required {@link PdfComponent}s and sends them to {@link PdfGenerationSpec} in order to generate the report
   * @param reportSpec
   *    Allows to configure user preferences in the report
   */
  generateReport(reportSpec: ReliabilityMlModelReportSpec): ReliabilityReportResult | null;

  /**
   * Calls {@link generateReport} and wraps the resulting report into a {@link ReliabilityReport} entity.
   */
  generateReportEntity(reportSpec: ReliabilityMlModelReportSpec): ReliabilityMlModelReport | null;

  /**
   * Get a renderer that will show info on the metrics available for this source object to HTML.
   */
  renderer(): HtmlRenderer | null;

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
  static fetch(spec?: FetchSpec): FetchResult<ReliabilityRiskMlModel>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<ReliabilityRiskMlModel>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec): Stream<ReliabilityRiskMlModel> | null;

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
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<ReliabilityRiskMlModel>> | null;

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
  static evalFeatureSetBatch(batch: Array_Type<ReliabilityRiskMlModel>, featureSet: Feature.Set, spec?: EvalFeatureSpec): Data | null;

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
  static evalFeaturesBatch(batch: Array_Type<ReliabilityRiskMlModel>, features: Array_Type<string>, spec?: EvalFeaturesSpec): Data | null;

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
  get(include?: string): ReliabilityRiskMlModel | null;

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
  getSpecific(include?: string): ReliabilityRiskMlModel | null;

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
  getMissing(spec: GetMissingSpec): ReliabilityRiskMlModel;

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
  getDirect(include?: string): ReliabilityRiskMlModel | null;

  /**
   * Applies a reverse edit (e.g. VersionEdit) to an instance.
   *
   * @param versionEdit
   *        Reverse edit to apply
   *
   * @return The instance after applying the reverse edit.
   */
  applyReverseEdit(versionEdit: VersionEdit): ReliabilityRiskMlModel;

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
  static fromString(s: string): ReliabilityRiskMlModel | null;

  /**
   * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
   * instance already exist.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
   *         will have only those fields populated. Otherwise only the id field will be populated.
   */
  create(spec?: UpsertSpec): ReliabilityRiskMlModel | null;

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
  static createBatch(objs: Array_Type<ReliabilityRiskMlModel>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static createBatchObjStream(objs: Stream<ReliabilityRiskMlModel>, spec?: CreateBatchObjStreamSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  update(srcObj?: ReliabilityRiskMlModel, spec?: UpsertSpec): ReliabilityRiskMlModel | null;

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
  upsert(srcObj?: ReliabilityRiskMlModel, spec?: UpsertSpec): ReliabilityRiskMlModel | null;

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
  merge(spec?: MergeSpec): ReliabilityRiskMlModel | null;

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
  merge(mergeInclude: string, spec?: MergeSpec): ReliabilityRiskMlModel | null;

  /**
   * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   *
   * @return The created or updated obj.
   */
  touch(spec?: TouchSpec): ReliabilityRiskMlModel | null;

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
  static updateBatch(objs: Array_Type<ReliabilityRiskMlModel>, srcObjs?: Array_Type<ReliabilityRiskMlModel>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static updateObjs(objs: λSupplier<Array_Type<ReliabilityRiskMlModel> | null>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static upsertBatch(objs: Array_Type<ReliabilityRiskMlModel>, srcObjs?: Array_Type<ReliabilityRiskMlModel>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static upsertObjs(objs: λSupplier<Array_Type<ReliabilityRiskMlModel> | null>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static touchBatch(objs: Array_Type<ReliabilityRiskMlModel>, spec?: TouchSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static mergeBatch(objs: Array_Type<ReliabilityRiskMlModel>, spec?: MergeSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static mergeBatch(objs: Array_Type<ReliabilityRiskMlModel>, mergeInclude: string, spec?: MergeSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static mergeObjs(objs: λSupplier<Array_Type<ReliabilityRiskMlModel> | null>, mergeInclude: string, spec?: MergeSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static mergeAll(mergeObj: ReliabilityRiskMlModel, spec?: MergeAllSpec): number | null;

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
  static mergeAll(mergeObj: ReliabilityRiskMlModel, mergeInclude: string, spec?: MergeAllSpec): number | null;

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
  static removeBatch(objs: Array_Type<ReliabilityRiskMlModel>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

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
  static replace(objs: Array_Type<ReliabilityRiskMlModel>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

  /**
   * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
   * {@link removeBatch} functions). If the operation fails an exception will be thrown.
   *
   * @return The recovered obj instance with all of its fields populated.
   *
   * @see Ann.Db#archive
   */
  unremove(): ReliabilityRiskMlModel | null;

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
   * Upsert persistable references in this {@link MlModel}, and replace the complete objects with respective entity references.
   * DEVELOPER NOTE: MlModel developers need to implement this method to successfully register and load `MlModel`
   * objects from `ModelRegistry`, if there are additional fields in `MlModel` that hold entity references in addition to
   * platform supported defaults.
   * @return an instance of {@link MlModel} with complete reference objects replaced with respective entity references.
   */
  static beforeCreate(objs: Array_Type<ReliabilityRiskMlModel>): ObjList<ReliabilityRiskMlModel>;

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
  static beforeUpdate(objs: Array_Type<ReliabilityRiskMlModel>): ObjList<ReliabilityRiskMlModel>;

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
  static beforeRemove(objs: Array_Type<ReliabilityRiskMlModel>): ObjList<ReliabilityRiskMlModel>;

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
  static afterCreate(objs: Array_Type<ReliabilityRiskMlModel>): Array_Type<ObjError> | null;

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
  static afterUpdate(objs: Array_Type<ReliabilityRiskMlModel>): Array_Type<ObjError> | null;

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
  static afterRemove(objs: Array_Type<ReliabilityRiskMlModel>): Array_Type<ObjError> | null;

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
  static startImportData(spec?: StartImportDataSpec): PushStream<ReliabilityRiskMlModel>;

  /**
   * @return a push stream to import instances of this type.
   */
  static startImportDataWithStats(spec?: StartImportDataSpec): PushStreamWithStats<ReliabilityRiskMlModel>;

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
  static forId(id: string, failIfMissing?: boolean): ReliabilityRiskMlModel | null;

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
  withoutIdentity(): ReliabilityRiskMlModel | null;

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
  static typeOfBatch(objs: Array_Type<ReliabilityRiskMlModel>): Array_Type<EntityType> | null;

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
  static dbEcho(template?: ReliabilityRiskMlModel, count?: number, sendBack?: boolean): number | null;

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
  static callbackLogic(objs: Array_Type<ReliabilityRiskMlModel>, callback?: λFunction<ReliabilityRiskMlModel | null, ReliabilityRiskMlModel | null>): ObjList<ReliabilityRiskMlModel>;

  /**
   * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
   * calling a transform for it.
   */
  static afterCallbackLogic(objs: Array_Type<ReliabilityRiskMlModel>, callback?: λFunction<ReliabilityRiskMlModel | null, ReliabilityRiskMlModel | null>): Array_Type<ObjError> | null;

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
   * The {@link MlSubject} sub-type associated with this object.
   */
  subjectType(): Type<<MlSubject>>;

  /**
   * @return whether the cache already contains this instance
   */
  isCached(): boolean;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return stream of all available Cached instances.
   */
  static allCached(doNotProduceAll?: boolean): Stream<ReliabilityRiskMlModel> | null;

  /**
   * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static find(filter?: string, doNotProduceAll?: boolean): Stream<ReliabilityRiskMlModel> | null;

  /**
   * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
   *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   * @return existing instances of this type that satisfy filter from data cache.
   */
  static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<ReliabilityRiskMlModel> | null;

  /**
   * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
   *
   * @see forCacheKey
   * @see getCached
   */
  static findByCacheKey(key: string): ReliabilityRiskMlModel | null;

  /**
   * @return cached instance by the key.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  static forCacheKey(key: string): ReliabilityRiskMlModel | null;

  /**
   * @return cached instance.
   *
   * @see forCacheKey
   * @see findByCacheKey
   */
  getCached(): ReliabilityRiskMlModel | null;

  /**
   * @return newly produced cached instance.
   */
  refreshCache(): ReliabilityRiskMlModel | null;

  /**
   * @return cache key for this instance.
   */
  cacheKey(): string;

  /**
   * Should produce an entry for the cache key. This method should not be called directly.
   */
  static produce(key: string): ReliabilityRiskMlModel | null;

  /**
   * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
   */
  static produceAll(): Map_Type<string, ReliabilityRiskMlModel> | null;

  /**
   * Override for sub-types to produce all values.
   */
  static doProduceAll(): Map_Type<string, ReliabilityRiskMlModel> | null;

  /**
   * Evicts this instance from cache on all nodes of this application.
   */
  evictFromCache(): void;

  /**
   * Evicts this instance from cache of the current node.
   */
  evictFromCacheLocalOnly(): void;

  /**
   * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#evictFromLocalAppsCaches}
   */
  evictFromCacheLocalOnlyAllApps(): void;

  /**
   * Clears the data cache for this type on all nodes of this application.
   */
  static clearCache(): void;

  /**
   * Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
   */
  static clearCacheLocalOnly(): void;

  /**
   * Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#clearLocalAppsCaches}
   */
  static clearCacheLocalOnlyAllApps(): void;

  /**
   * Returns count of cached instances.
   */
  static cacheSize(): number | null;

  /**
   * Returns instance of the cache for this type.
   */
  static nativeCache(): any | null;

  /**
   * Override to perform customized upsert logic.
   *
   * @param state
   *        Current upsert state.
   *
   * @return The appropriate result (e.g. ObjList, Persistable<?>, etc) depending on the upsert operation.
   */
  static doUpsert(state: any): any | null;

  /**
   * Override to perfrom the 'unremove' operation.
   *
   * @param obj
   *        Obj to unremove.
   *
   * @return The unremoved Obj, if any and null otherwise.
   */
  static doUnremove(obj: PersistableWritable): PersistableWritable | null;

  /**
   * Publishes an instance of SeedData to a C3 application package under `/seed/`
   */
  publish(subPath?: string, contentType?: string): ReliabilityRiskMlModel;

  /**
   * Admin function to remove a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries removed via this function
   * are fully removed rather than hidden as they would be if removed by the user.
   *
   * @return true if the obj was removed and false if it was not for a non-error condition (e.g. obj didn't exist).
   */
  removeSeedData(): boolean;

  /**
   * Admin function to remove seed data entries as the provisioner/authorizer, rather than as the user.  Seed data
   * entries removed via this function are fully removed rather than hidden as they would be if removed by the user.
   *
   * @param objs
   *           Obj instances to remove.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return list of obj instances that were removed and any errors that were encountered, same as
   *         {@link Persistable#removeBatch} return value.
   */
  static removeSeedDataBatch(objs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

  /**
   * Admin function to add a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries
   * added this way are treated as though they were provisioned, rather than added by a user.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return created obj instance, same as {@link Persistable#create} return value.
   */
  createSeedData(spec?: UpsertSpec): ReliabilityRiskMlModel | null;

  /**
   * Admin function to add seed data entries as the provisioner/authorizer, rather than as the user.  Seed data entries
   * added this way are treated as though they were provisioned, rather than added by a user.
   *
   * @param objs
   *           Obj instances to add.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return list of obj instances that were created and any errors that were encountered, same as
   *         {@link Persistable#createBatch}.
   */
  static createSeedDataBatch(objs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

  /**
   * Admin function to update a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data
   * entries updated this way are treated as though they were provisioned, rather than updated by a user.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return updated obj instance, same as {@link Persistable#update} return value.
   */
  updateSeedData(srcObj?: SeedData, spec?: UpsertSpec): ReliabilityRiskMlModel | null;

  /**
   * Admin function to update seed data entries as the provisioner/authorizer, rather than as the user.  Seed data
   * entries updated this way are treated as though they were provisioned, rather than updated by a user.
   *
   * @param objs
   *           Obj instances to update.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return list of obj instances that were updated and any errors that were encountered, same as
   *         {@link Persistable#updateBatch}.
   */
  static updateSeedDataBatch(objs?: Array_Type<SeedData>, srcObjs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<ReliabilityRiskMlModel> | null;

  /**
   * Admin function to clear the {@link userUpdatedFields} field for a seed data obj instance.
   *
   * @param spec
   *           Various parameters that control the operation of function.
   * @return updated obj instance, same as {@link Persistable#update} return value.
   */
  clearUserUpdates(spec?: MergeSpec): ReliabilityRiskMlModel | null;

  /**
   * Admin function to clear the {@link userUpdatedFields} field for seed data obj instances.
   *
   * @param objs
   *           Obj instances to update.
   * @param spec
   *           Various parameters that control the operation of function.
   * @return list of obj instances that were updated and any errors that were encountered, same as
   *         {@link Persistable#updateBatch}.
   */
  static clearUserUpdatesBatch(objs?: Array_Type<SeedData>, spec?: MergeSpec): ObjList<ReliabilityRiskMlModel> | null;

  /**
   * Returns the full metadata path to the seed file associated with this instance by `id`.
   * Throws an error if this instance is not seeded (no match with instance `id`).
   */
  seedPath(): string | null;

  dependencies(): SeedDataDeps<ReliabilityRiskMlModel> | null;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateSeedData(): ValidateObjResult;

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
   * Construct an instance of {@link MlModel} from the given parameters.
   *
   * @param project
   *    Instance of {@link MlProject} to be associated with the {@link MlModel}
   * @param pipeline
   *    The {@link MlPipeline} to be used by the model
   * @param x
   *    Map of {@link MlPipeline} x input names to corresponding {@link Feature.Set sets} of features.
   *    Can be set to {@link Feature.Set} if there is only one x input to {@link MlPipeline}
   * @param y
   *    Map of {@link MlPipeline} y input names to corresponding {@link Feature.Set sets} of features.
   *    Can be set to {@link Feature.Set} if there is only one y input to {@link MlPipeline}
   * @param id
   *    Optional id to upsert the {@link MlModel} with. If no id is provided, DB generated id is used.
   *
   * @return a {@link MlModel} constructed from the given parameters
   */
  static createModel(project: MlProject, pipeline: MlPipeline<any, any, any, any, any>, x?: Map_Type<string, Feature.Set> | Feature.Set, y?: Map_Type<string, Feature.Set> | Feature.Set, id?: string): ReliabilityRiskMlModel;

  /**
   * Deploy a model on a group of {@link MlSubject subjects} (the type of the subjects is determined by the
   * {@link #project}).
   *
   * During this operation, a {@link MlModel.Route} is created and handled by the {@link MlProject#router router}
   * associated with the {@link project} of the model.
   * The status of the route is {@link MlModel.Route.Status.Label#CANDIDATE CANDIDATE}.
   * To promote or retire the model, use {@link MlModel.Route#updateStatus}.
   *
   * ```py
   * project = c3.MlProject(subjectType=c3.WindTurbine)
   * model = c3.MlModel(project=project, ...)
   * # deploy the model on all wind turbines located in France
   * route = model.deploy({"subjectFilter": "country == 'FRA'"})
   * # deploy the model on all wind turbines
   * route = model.deploy()
   * ```
   *
   * @param spec
   *    configuration of the deployment; in particular {@link MlModel.DeploySpec#subjectFilter} defines the subjects
   *    on which the model is deployed.
   *
   * @return a model route defined on the subjects specified in the spec and pointing to the model
   *
   * @see MlModel.Route#updateStatus
   */
  deploy(spec?: MlModel.DeploySpec): MlModel.Route;

  /**
   * Batched version of {@link MlModel#deploy}.
   *
   * @param batches
   *     List of {@link MlModel.DeployBatch} to deploy.
   * @return the id corresponding to the group of {@link MlModel.Route} created by this batch
   *     API. This id is a convenience that can be used in subsequent operations that need to be performed on the entire group.
   *     For example, see {@link MlModel.Route#updateStatusBatch}.
   *     NOTE: each {@link MlModel.DeployBatch} can produce one or more {@link MlModel.Route}, so the size of the group is not
   *     necessarily equal to the size of the input.
   */
  static deployBatch(batches: Array_Type<MlModel.DeployBatch>): string;

  /**
   * Computes the final evaluation spec to be used for feature set evaluation ({@link #evaluateFeaturesHelper}).
   * See {@link #evaluateFeatures} for information on parameters.
   *
   * @return map of x name (or y name) to {@link EvalFeatureSpec} for that featureSet.
   */
  evaluationSpecHelper(subjects: string | Array_Type<MlSubject>, operation: string, featureSets?: Map_Type<string, Feature.Set>, start?: DateTime, end?: DateTime, snapshotId?: string | Map_Type<string, string>, isX?: boolean): Map_Type<string, EvalFeatureSpec>;

  /**
   * Performs feature set evaluation based on the given parameters.
   * See {@link #evaluateFeatures} for information on parameters.
   * NOTE: `evalSpec` parameter is expected to come from {@link #evaluationSpecHelper}.
   *
   * @return map of {@link Data} corresponding to featureSets input map, casted to the pipeline's input type
   */
  evaluateFeaturesHelper(subjectType: Type, subjects: string | Array_Type<MlSubject>, featureSets?: Map_Type<string, Feature.Set>, isX?: boolean, evalSpec?: Map_Type<string, EvalFeatureSpec>): any;

  /**
   * Evaluates features required for {@link MlModel} operations and casts to pipeline input type
   *
   * @param subjectType
   *    {@link MlSubject} type associated with this model.
   * @param featureSets
   *    {@link MlModel#xFeatures} or {@link MlModel#yFeatures}.
   * @param subjects
   *    List of subjects to evaluate on or a subject filter.
   * @param operation
   *    {@link MlDataOpName} representing train, process, interpret or score operation for which features
   *     need to be evaluated.
   * @param start
   *    Start date for evaluating features.
   * @param end
   *    End date for evaluating features.
   * @param snapshotId
   *    Identifier for feature snapshots for evaluation.
   *    Providing a `string` to `snapshotId` is deprecated, only {@link Map} is supported for execution.
   *    snapshotId is one of {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds}.
   * @param isX
   *    Determines whether to use x or y parametrization on the pipeline to do the cast.
   * @return map of {@link Data} corresponding to featureSets input map, casted to the pipeline's input type
   */
  evaluateFeatures(subjectType: Type, subjects: string | Array_Type<MlSubject>, operation: string, featureSets?: Map_Type<string, Feature.Set>, start?: DateTime, end?: DateTime, snapshotId?: string | Map_Type<string, string>, isX?: boolean): any;

  /**
   * A custom function that overrides the default behavior of setting the start timestamp for processing. It allows
   * for adjustments based on a specified `lookbackDuration` parameter. This can be useful for shifting or adjusting
   * the evaluation periods when processing the data for the model.
   */
  evaluationSpec(subjects: string | Array_Type<MlSubject>, operation: string, featureSets?: Map_Type<string, Feature.Set>, start?: DateTime, end?: DateTime, snapshotId?: string | Map_Type<string, string>, isX?: boolean): Map_Type<string, EvalFeatureSpec>;

  /**
   * Precompute the workflow for the given {@link MlDataOpName}.
   */
  precompute(operation: string, spec?: MlOperationSpec): ReliabilityRiskMlModel;

  /**
   * Constructs a wrapper {@link MlPipeline} from the input {@link MlPipeline} for the given operations,
   * and starts the execution of the wrapper {@link MlPipeline}.
   * @param pipeline
   *    {@link MlPipeline} to be executed.
   * @param operations
   *    List of {@link MlDataOpName} representing train, process, interpret or score operation.
   * @param xData
   *    X input for MlPipeline operations.
   * @param yData
   *    Y input for MlPipeline operations.
   * @param spec
   *    Optional {@link MlOperationSpec} that will be passed to all {@link MlPipeline} operations.
   * @return an instance of {@link MlOperationRun}.
   *
   * The expected sample format `xData`, `yData` and invoking `startPipelineOperations` is as follows:
   * ```py
   *   xData = [[[c3.MlDataOpName.TRAIN, c3.MlDataOpName.SCORE], x_data_for_train],
   *            [[c3.MlDataOpName.PROCESS], x_data_for_process]]]
   *   yData = [[[c3.MlDataOpName.TRAIN, c3.MlDataOpName.SCORE], y_data_for_train]]
   *   operations = [c3.MlDataOpName.TRAIN, c3.MlDataOpName.SCORE, c3.MlDataOpName.PROCESS]
   *  operation_run = c3.MlModel.startPipelineOperations(pipeline, operations, xData, yData, spec)
   * ```
   */
  static startPipelineOperations(pipeline: MlPipeline<any, any, any, any, any>, operations: Array_Type<string>, xData: Array_Type<Array_Type<any>>, yData?: Array_Type<Array_Type<any>>, spec?: MlOperationSpec): MlOperationRun<any>;

  /**
   * Asynchronously train {@link #pipeline} and return {@link MlModel.OperationRun} that will hold new {@link MlModel}
   * with trained pipe. Input arguments to this API are captured in trained {@link MlModel} as {@link MlModel#trainInput},
   * except for list of {@link MlSubject}s.
   * See {@link MlModel.Input} for more information on how to capture list of subjects.
   *
   * Usage:
   * ```py
   * operation_run = model.train(subjects=[wind_turbine_1, wind_turbine_2], start="2021-01-01", end="2021-02-01")
   * trained_model = operation_run.result()
   * ```
   *
   * @param subjects
   *    List of subjects to train on.
   * @param start
   *    Start date which would be used to evaluate {@link xFeatures} and {@link yFeatures} features.
   * @param end
   *    End date for evaluating features. Same as for start param.
   * @param spec
   *    Optional {@link MlOperationSpec} that will be passed to {@link MlPipeline#train}.
   *    {@link MlOperationSpec#executorSpec} will be used to as parameter to {@link Workflow}
   *    that asynchronously executes {@link MlPipeline#train}. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists. No {@link Feature.Set.Snapshot} will be created during `train`.
   *    If {@link MlOperationSpec#scoreMlModel} is set, then the trained {@link MlModel} will be scored using
   *    training {@link xFeatures} and {@link yFeatures}, and {@link MlModel#trainScores} will be set.
   *
   * @return {@link MlModel.OperationRun} that wraps copy of {@link MlModel} with new id and trained {@link pipeline}.
   *         If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds}
   *         are provided, a new {@link MlModel} with attached {@link Feature.Set.Snapshot}s is
   *         created and attached to {@link MlModel.OperationRun}.
   */
  train(subjects: Array_Type<MlSubject>, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): MlModel.OperationRun;

  /**
   * Asynchronously train {@link #pipeline} and return {@link MlModel.OperationRun} that will hold new {@link MlModel}
   * with trained pipe. Input arguments to this API are captured in trained {@link MlModel} as {@link MlModel#trainInput}.
   *
   * Usage:
   * ```py
   * operation_run = model.train(subjectFilter="blades == 3", start="2021-01-01", end="2021-02-01")
   * trained_model = operation_run.result()
   * ```
   *
   * @param subjectFilter
   *    Filter to select the subjects used for training.
   * @param start
   *    Start date which would be used to evaluate {@link xFeatures} and {@link yFeatures} features.
   * @param end
   *    End date for evaluating features. Same as for start param.
   * @param spec
   *    Optional {@link MlOperationSpec} that will be passed to {@link MlPipeline#train}.
   *    {@link MlOperationSpec#executorSpec} will be used to as parameter to {@link Workflow}
   *    that asynchronously executes {@link MlPipeline#train}. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists. No {@link Feature.Set.Snapshot} will be created during `train`.
   *    If {@link MlOperationSpec#scoreMlModel} is set, then the trained {@link MlModel} will be scored using
   *    training {@link xFeatures} and {@link yFeatures}, and {@link MlModel#trainScores} will be set.
   *
   * @return {@link MlModel.OperationRun} that wraps copy of {@link MlModel} with new id and trained {@link pipeline}.
   *         If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds}
   *         are provided, a new {@link MlModel} with attached {@link Feature.Set.Snapshot}s is
   *         created and attached to {@link MlModel.OperationRun}.
   */
  train(subjectFilter: string, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): MlModel.OperationRun;

  /**
   * @return true when the model is trained, i.e. when the {@link pipeline} is trained.
   */
  isTrained(): boolean;

  /**
   * Asynchronously compute predictions for the provided list of subjects and (optional) time range.
   * To make the execution blocking and wait for the result, call {@link MlOperationRun#result result()}
   * on the value returned by this function.
   *
   * Usage:
   * ```py
   * predictions = model.process(subjects=[wind_turbine_1, wind_turbine_2], start="2022-01-01", end="2022-02-01").result()
   * ```
   *
   * @param subjects
   *    List of subjects to process
   * @param start
   *    Optional start of predictions (if applicable)
   * @param end
   *    Optional end of predictions (if applicable)
   * @param spec
   *    Optional configuration for the {@link pipeline} execution. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists.
   *
   * @return an instance of {@link MlOperationRun}.
   *
   * @see MlPipeline#process
   */
  process(subjects: Array_Type<MlSubject>, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): MlOperationRun<any>;

  /**
   * Asynchronously compute predictions for the subjects that meet the filter criteria and (optional) time range.
   * To make the execution blocking and wait for the result, call {@link MlOperationRun#result result()}
   * on the value returned by this function.
   *
   * Usage:
   * ```py
   * predictions = model.process(subjectFilter="blades == 3", start="2022-01-01", end="2022-02-01").result()
   * ```
   *
   * @param subjectFilter
   *    Filter to select the subjects to process
   * @param start
   *    Optional start of predictions (if applicable)
   * @param end
   *    Optional end of predictions (if applicable)
   * @param spec
   *    Optional configuration for the {@link pipeline} execution. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists.
   *
   * @return an instance of {@link MlOperationRun}.
   *
   * @see MlPipeline#process
   */
  process(subjectFilter: string, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): MlOperationRun<any>;

  /**
   * Compute and handle predictions for the provided map of route ids with respective subjects, and (optional) time range,
   * Used by {@link MlSubject.Process} and {@link MlSubject.StartProcessJob}.
   * @param operation
   *    Name of operation to perform.
   * @param subjectsPerRoute
   *    A map of {@link MlModel.Route#id} to a list of corresponding {@link MlSubject}s served by route.
   * @param start
   *    Optional start of interpret operation (if applicable)
   * @param end
   *    Optional end of interpret operation (if applicable)
   * @param operationTimeoutMinutes
   *    Optional timeout for the operation
   * @param spec
   *    Optional configuration for the {@link pipeline} execution. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists.
   *
   * @return an instance of {@link MlModel.HandleOutputResult}.
   */
  doOperationAndHandle(operation: string, subjectsPerRoute: Map_Type<string, Array_Type<MlSubject>>, start?: DateTime, end?: DateTime, operationTimeoutMinutes?: number, spec?: MlOperationSpec): MlModel.HandleOutputResult;

  /**
   * Compute interpretations and predictions for the provided list of subjects and (optional) time range.
   * This function is asynchronous. To block the thread to wait for the result, call
   * {@link MlOperationRun#result result()} on the returned value.
   *
   * Usage:
   * ```py
   * interpreter_result = model.interpret(subjects=[wind_turbine_1, wind_turbine_2], start="2022-01-01", end="2022-02-01").result()
   * interpretations = interpreter_result['interpret_out'].interpretations
   * predictions = interpreter_result['interpret_out'].processOutput
   * ```
   *
   * @param subjects
   *    List of subjects to invoke interpret operation
   * @param start
   *    Optional start of interpret operation (if applicable)
   * @param end
   *    Optional end of interpret operation (if applicable)
   * @param spec
   *    Optional configuration for the {@link pipeline} execution. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists.
   *
   * @return an instance of {@link MlOperationRun}.
   *
   * @see MlPipeline#interpret
   */
  interpret(subjects: Array_Type<MlSubject>, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): MlOperationRun<any>;

  /**
   * Compute interpretations and predictions for the provided list of subjects and (optional) time range.
   * This function is asynchronous. To block the thread to wait for the result, call
   * {@link MlOperationRun#result result()} on the returned value.
   *
   * Usage:
   * ```py
   * interpreter_result = model.interpret(subjects=[wind_turbine_1, wind_turbine_2], start="2022-01-01", end="2022-02-01").result()
   * interpretations = interpreter_result['interpret_out'].interpretations
   * predictions = interpreter_result['interpret_out'].processOutput
   * ```
   *
   * @param subjectFilter
   *    Filter to select the subjects for which to invoke the interpret operation.
   * @param start
   *    Optional start of interpret operation (if applicable)
   * @param end
   *    Optional end of interpret operation (if applicable)
   * @param spec
   *    Optional configuration for the {@link pipeline} execution. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists.
   *
   * @return an instance of {@link MlOperationRun}.
   *
   * @see MlPipeline#interpret
   */
  interpret(subjectFilter: string, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): MlOperationRun<any>;

  /**
   * Asynchronously score {@link #pipeline} for the given list of subjects.
   *
   * Usage:
   * ```py
   * operation_run = model.score(subjects=[wind_turbine_1, wind_turbine_2], start="2021-01-01", end="2021-02-01")
   * model_scores = operation_run.result()
   * ```
   *
   * @param subjects
   *    List of subjects to score on.
   * @param start
   *    Optional start of score operation (if applicable)
   * @param end
   *    Optional end of score operation (if applicable)
   * @param spec
   *    Optional configuration for the {@link pipeline} execution. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists.
   *
   * @return an instance of {@link MlOperationRun}.
   *
   * @see MlPipeline#score.
   */
  score(subjects: Array_Type<MlSubject>, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): MlOperationRun<any>;

  /**
   * Asynchronously score {@link #pipeline} for the subjects matching the provided subject filter.
   *
   * Usage:
   * ```py
   * operation_run = model.score(subjectFilter="blades == 3", start="2021-01-01", end="2021-02-01")
   * model_scores = operation_run.result()
   * ```
   *
   * @param subjectFilter
   *    Filter to select the subjects for which to invoke the score operation.
   * @param start
   *    Optional start of score operation (if applicable)
   * @param end
   *    Optional end of score operation (if applicable)
   * @param spec
   *    Optional configuration for the {@link pipeline} execution. Optional {@link MlOperationSpec#xSnapshotIds}
   *    and {@link MlOperationSpec#ySnapshotIds} are provided to evaluate the features from {@link Feature.Set.Snapshot}.
   *    If {@link MlOperationSpec#xSnapshotIds} or {@link MlOperationSpec#ySnapshotIds} is provided, it is expected that
   *    the {@link Feature.Set.Snapshot} exists.
   *
   * @return an instance of {@link MlOperationRun}.
   *
   * @see MlPipeline#score.
   */
  score(subjectFilter: string, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): MlOperationRun<any>;

  /**
   * List the metadata of {@link Feature}s associated with this model.
   *
   * @param filterByName
   *    Optional filtering based on name of features.
   * @param order
   *    Optional listing order `ASC` or `DSC`
   * @param offset
   *    Optional offset for display of results
   * @param limit
   *    Optional limit for display of results
   * @return the results as {@link Data}
   */
  featureSummary(filterByName?: string, order?: string, offset?: number, limit?: number): Data;

  /**
   * Replaces references to entities used in the model with new entities. This function allows updating the model's
   * references when entities have been modified or replaced in the system.
   */
  replaceEntityReferences(pipeline: MlPipeline<any, any, any, any, any>): MlModel;

  /**
   * Helper method to sanitize (or default) the given operation spec.
   *
   * @param opName
   *           operation name for the operation that will use the spec.
   * @param spec
   *           spec to sanitize.
   * @return sanitized spec.
   */
  getOperationSpec(opName: string, spec?: MlOperationSpec): MlOperationSpec;

  /**
   * Helper method for calling route handling on an operation output.
   *
   * @param route
   *           route to handle.
   * @param operation
   *           operation name for the operation that produced the output.
   * @param subjects
   *           list of subjects that the operation was performed on.
   * @param start
   *           start date for the data evaluated by the operation.
   * @param end
   *           end date for the data evaluated by the operation.
   * @param output
   *           the output of the operation.
   * @param closeOutput
   *           whether to clean up output after handling.
   * @return list of errors from the handling. NOTE: all handlers will be attempted, even if some fail.
   */
  static handleOutput(route: MlModel.Route, operation: string, subjects?: Array_Type<MlSubject>, start?: DateTime, end?: DateTime, output?: Tuple, closeOutput?: boolean): Array_Type<Error> | null;

  /**
   * Perform pre-operation validation for the given operation.
   *
   * @param opName
   *           operation name for the operation to be validated.
   * @param spec
   *           spec for the operation to be validated.
   */
  validateOp(opName: string, spec?: MlOperationSpec): void;

  /**
   * This function allows the user to create a {@link ReliabilityMlModel} with specified fields of
   * {@link #name}, {@link #datasetPreparationRun} and {@link #template}.
   */
  static createReliabilityModel(project: ReliabilityMl.Project, pipeline: ReliabilityMl.Pipeline<any, any, any, any>, datasetPreparationRun: ReliabilityMlDatasetPreparationRunCommon, template?: ModelTemplate, name?: string, id?: string, replicatedFrom?: ReliabilityMlModel, refitFrom?: ReliabilityMlModel, retrainedFrom?: ReliabilityMlModel): ReliabilityMlModel;

  /**
   * Returns the merged map of {@link MlPipe#hyperparams} and {@link ReliabilityMl.CustomPipe#trainedHyperparamValues}
   * from the underlying pipes if the {@link pipeline} is trained.
   *
   * @return A map (dictionary in Python) with the merged hyperparameters, where:
   * - Keys are the hyperparameter names (as strings).
   * - Values are the corresponding hyperparameter values (can be of any type).
   */
  updatedHyperparams(): Map_Type<string, any> | null;

  /**
   * Replicates or clones the model to create a new model. The newly created model
   * does not need to be retrained because only non-trainable hyperparameters are allowed
   * to change as part of the model replication process.
   *
   * For example, parameters such as `alert_threshold` can be changed, as they only affect
   * how the model runs inference. However, parameters like RandomForestRegressor n_estimators
   * cannot be changed because altering such parameters would require retraining the model.
   *
   * @param newHps
   *        A JSON object containing the new hyperparameters to be applied to the replicated model.
   * @param replicatedModelName
   *        The name for the newly created model.
   * @return A new {@link ReliabilityMlModel} object that is the replicated version of the current model.
   */
  replicate(newHps?: any, replicatedModelName?: string): ReliabilityMlModel;

  /**
   * This function is responsible for performing the core logic of assigning a score to the model, including prediction
   * headers and the insertion of new data based on the results of operations. It is essential for conducting model inference
   * or updating the model with new data and outcomes.
   *
   * @param dataOpName The name of the data operation being performed.
   * @param subjects A list of subjects to be considered during the operation.
   * @param start The start timestamp for the operation.
   * @param end The end timestamp for the operation.
   * @param spec The specification for the operation being performed.
   */
  doOperation(dataOpName: string, subjects: Array_Type<MlSubject>, start?: DateTime, end?: DateTime, spec?: MlOperationSpec): void;

  /**
   * Creates an inference workflow for a single {@link ReliabilityMlModel}.
   * This workflow:
   * 1) Executes `model.process()`, and `model.interpret()`.
   * 2) Runs the output handler on the {@link MlModel.Route} associated with the model to persist model predictions
   * and contributions to the database.
   * 3) Normalizes the created prediction and contribution headers created for each model.
   * 4) Generates alerts.
   */
  infer(asset: ReliabilityAsset, start: DateTime, end: DateTime, operationTimeout?: string, statusLabel?: string): Workflow | null;

  /**
   * Creates an inference workflow for a single {@link ReliabilityMlModel}.
   * This workflow:
   * 1) Runs the output handler on the {@link MlModel.Route} associated with the model to persist model predictions
   * and contributions to the database.
   * 3) Normalizes the created prediction and contribution headers created for each model.
   * 4) Generates alerts.
   * This part of the workflow creation is re-used by the {@link #infer} API.
   */
  inferWithOutputs(processOutputsOrVertex?: Workflow.Vertex | Tuple, interpretOutputsOrVertex?: Workflow.Vertex | Tuple, asset: ReliabilityAsset, start: DateTime, end: DateTime, operationTimeout?: string, statusLabel?: string, forValidation?: boolean): Workflow | null;

  /**
   * This function takes the {link ReliabilityMl.ModelOutput} for the reference and comparison periods,
   * and creates a workflow to persist the validation predictions, contributions and alerts for the model.
   */
  validate(referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput, asset: ReliabilityAsset, operationTimeout?: string, statusLabel?: string): Workflow.Run | null;

  /**
   * This function is used to persist predictions or contributions to the database for the given {@link ReliabilityMlModel},
   * using its corresponding {@link MlModel.Route}.
   */
  processAndInterpretHandle(asset: ReliabilityAsset, statusLabel: string, outputs?: Tuple, forInterpretation?: boolean, forValidation?: boolean): void;

  /**
   * Creates a workflow to register all the artifacts required to migrate a single {@link ReliabilityMlModel} into a target environment.
   * @param workflowName
   *        The name of the created output {@link Workflow}.
   * @param operationTimeout
   *        The timeout for the execution of each operation in the created {@link Workflow}.
   *
   * @returns an instance of {@link Workflow}, that outputs a {@ReliabilityModelRegistry.SourceEntry}, that
   *          contains the information required to migrate this {@link ReliabilityMlModel} to the target environment.
   */
  register(workflowName: string, operationTimeout?: string): Workflow;

  /**
   * Creates a {@link Workflow} to load a given {@link ReliabilityMlModel} and it's corresponding artifacts that needs to be migrated
   * in the target environment.
   *
   * @param uri
   *        The uri to load the model artifacts from.
   * @param sourceModelId
   *        The id of the source {@link ReliabilityMlModel} that is being loaded into the target environment.
   * @param targetModelId
   *        Optional id to persist {@link ReliabilityMlModel}. If an instance of {@link MlModel} exists with
   *        this id, an error is thrown. If no id is provided, DB generated id is used.
   * @param workflowName
   *        The name of the created output {@link Workflow}.
   * @param operationTimeout
   *        The timeout for the execution of each operation in the created {@link Workflow}.
   * @param force
   *        Forces the deployment of the {@link ReliabilityMlModel} in the target environment, even if validation
   *        checks fail.
   *
   * @returns an instance of {@link Workflow}, that outputs a {@ReliabilityModelRegistry.TargetEntry}, that
   *          contains the information about the loaded {@link ReliabilityMlModel} in the target environment.
   */
  static load(uri: string, sourceModelId: string, targetModelId?: string, workflowName: string, operationTimeout?: string, force?: boolean = 'false'): Workflow;

  /**
   * Trains a given {@link ReliabilityMlModel} using the {@link ReliabilityMlDatasetPreparationRunCommon#trainFeatureTimeRanges}
   * of its associated {@link ReliabilityMlModel#datasetPreparationRun}. If the dataset preparation run has
   * its {@link ReliabilityMlDatasetPreparationRunCommon#trainSnapshots} populated, model training will use those snapshots directly.
   *
   * @param subjectFilter
   *        A string filter on {@link ReliabilityAsset} to be used for training the model.
   *
   * @returns The {@link MlModel.OperationRun} returned by calling {@link ReliabilityMlModel}.
   */
  trainForDatasetPreparationRun(subjectFilter: string): MlModel.OperationRun;

  /**
   * Runs inference for a given {@link ReliabilityMlModel} from the {@link ReliabilityMlDatasetPreparationRunCommon#trainFeatureTimeRanges} of it's associated
   * {@link ReliabilityMlDatasetPreparationRunCommon}. If the dataset preparation run has it's {@link ReliabilityMlDatasetPreparationRunCommon#trainSnapshots} or
   * {@link ReliabilityMlDatasetPreparationRunCommon#valSnapshots} populated, for the period provided corresponding to the given timeRange, then model inference
   * will use the snapshots directly. This API is primarily used in `ReliabilityOrchestrator.PostTrainingJob`,
   * in order to run model inference before passing the outputs to validate, classify and generate reports for the model.
   *
   * @param subjectFilter
   *        The filter on {@link ReliabilityAsset} to be used for training the model.
   * @param timeRange
   *        The TimeRange on which to run model inference.
   * @param isReference
   *        Specifies whether the provided time range corresponds to the reference or comparison period of the post training job.
   * @param isProcess
   *        Specifies whether the inference operation to be run is {@link MlModel#process} or {@link MlModel#interpret}.
   *
   * @returns The {@link MlOperationRun} returned by calling {@link MlModel#process}/{@link MlModel#interpret}.
   */
  inferForDatasetPreparationRun(subjectFilter: string, timeRange: TimeRange, isReference: boolean, isProcess: boolean): MlOperationRun<any>;

  /**
   * This function is used to refit a {@link ReliabilityMlModel} specifically for a given {@link ReliabilityAsset}.
   * It creates a new version of the model, fine-tuned for the provided asset, using the asset's data.
   * The model will inherit the structure and parameters of the original model but will be adapted based on
   * the new asset-specific information. This is typically used when a model needs to be retrained with updated
   * or more relevant data for a specific asset to improve its predictions and accuracy.
   *
   * @param assetId
   *        The ID of the {@link ReliabilityAsset} for which the model is being refitted.
   * @param modelName
   *        The name of the model being refitted.
   *
   * @returns A new instance of {@link ReliabilityMlModel} that is refitted for the specified asset.
   */
  refitForAsset(assetId: string, modelName?: string): ReliabilityMlModel;

  /**
   * **Not intended to be called standalone, it represents a nested action of #createAgnosticAcceptExperimentalModelWorkflow**
   *
   * Helper method that executes {@link ReliabilityOrchestrator.TrainingJob} over a experimental model to deploy it as
   * a candidate model.
   *
   * @param project
   *        The project that the base model belongs to.
   * @param experimentalModel
   *        Experimental Model that is trained but not yet deployed.
   * @param asset
   *        The asset on which the experimental model will be deployed.
   * @param modelConfigRun
   *        The {@link ModelConfigRun} that tracks the progress of the training job for the UI.
   * @returns
   *        The {@link MlOperationRun} that tracks the progress of the training job.
   */
  static runExperimentalModelTrainingJob(project?: ReliabilityMl.Project, experimentalModel?: ReliabilityMlModel, asset?: ReliabilityAsset, modelConfigRun?: ModelConfigRun): MlOperationRun<ReliabilityOrchestrator.TrainingJobRun> | null;

  /**
   * **Not intended to be called standalone, it represents a nested action of #createAgnosticAcceptExperimentalModelWorkflow**
   *
   * Helper method that executes {@link ReliabilityOrchestrator.PostTrainingJobSpec} over a deployed experimental model.
   *
   * @param trainingRun
   *        The {@link ReliabilityOrchestrator.TrainingJobRun} used to deploy the experimental model. It is used to
   *        populate {@link ReliabilityOrchestrator.PostTrainingJobSpec#assetToModelRelationFilter}.
   * @returns
   *        The {@link MlOperationRun} that tracks the progress of the training job.
   */
  static runExperimentalPostModelTrainingJob(trainingRun?: ReliabilityOrchestrator.TrainingJobRun, project?: ReliabilityMl.Project): MlOperationRun<ReliabilityOrchestrator.PostTrainingJobRun> | null;

  /**
   * Function that calls the `ReliabilityOrchestrator.AdjustModelHyperparamsProcess.Spec` to create the Workflow.Run and
   * initializes `latestAdjustModelHyperparamsExperiment` type with the `Workflow.Run` and new Hyperparameters.
   */
  createAdjustModelHyperparamsExperiment(modelName?: string, start?: DateTime, end?: DateTime, newHyperparams?: Map_Type<string, Map_Type<string, any>>): Workflow.Run | null;

  /**
   * Helper method to persist {@link MlOperationRun#result} data into {@link ReliabilityMlModelExperiment}.
   * It expects three operations; {@link MlModel#process} and {@link MlModel#interpret} operations over the experimental
   * model, and a {@link MlModel#process} from the {@link ReliabilityMlModelExperiment#baseModel}.
   *
   * These three operation runs are transformed into the following fields:
   *
   * - {@link ReliabilityMlModelExperiment#alertData}: {@link Data.Persisted} containing the timestamp and normalized
   *   feature contribution for them.
   *
   * - {@link ReliabilityMlModelExperiment#algorithmData}: {@link Data.Persisted} containing the
   *   {@link ReliabilityMl.Project#algorithmOutputs} as columns from the {@link ReliabilityMlModel model}.
   *
   * - {@link ReliabilityMlModelExperiment#baseModelAlgorithmData}: Same as above, but instead of reading from the
   *   [experiment model](ReliabilityMlModelExperiment#experimentalModel) its from the
   *   [base model](ReliabilityMlModelExperiment#baseModel).
   *
   * @param processMlRun
   *        {@link MlOperationRun#result} resulted from {@link MlModel#process} executed over the experimental model.
   * @param interpretMlRun
   *        {@link MlOperationRun#result} resulted from {@link MlModel#interpret} executed over the experimental model.
   * @param baseProcessMlRun
   *        {@link MlOperationRun#result} resulted from {@link MlModel#process} executed over the base model.
   */
  persistExperimentProcessAndInterpretOutputs(processMlRun: any, interpretMlRun?: any, baseProcessMlRun?: any): void;

  /**
   * This method Fetches the dates for original training and validation time period for the given modelId
   * @param modelId
   *        The modelId is which we pass as the param in the funtion to extract the validation time range for the model.
   * @returns an object with the original training and validation start and end dates along with the display string.
   */
  static getOriginalTrainingValidationPeriods(modelId?: string): any | null;

  /**
   * This method deletes the {@link ReliabilityMlModelExperiment} referenced through the #latestAdjustModelHyperparamsExperiment field.
   *
   * @returns
   *        The ID of the workflow that was canceled.
   *        This Id should be removed from the Local Storage, that is used to track the workflow and show global banner.
   */
  discardLatestExperiment(): string | null;

  /**
   * Gets the respective hyperparameters (including nested as a field on the pipeline can have additional hyperparameters)
   * associated with the model's underlying pipeline.
   *
   * @param isForInferenceOnly
   *        Whether to get the hyperparameters relevant only for model inference.
   *
   * @return {ModelConfigJsonHyperparams} with key and additional hyperparameters.
   */
  getHyperparams(isForInferenceOnly?: boolean): ModelConfigJsonHyperparams | null;

  /**
   * Function to process risk scores in a time range.
   * Reads persisted results from the {@link MlProject} corresponding to reliability risk.
   * It will generate {@link RiskScoreSpec}s if any alert is predicted.
   * @param timeRange
   *    Time range where it will look for risk score predictions
   * @return
   *    Generated {@link RiskScoreSpec}s
   */
  getAlertPredictionSpecs(timeRange?: TimeRange): Array_Type<RiskScoreSpec> | null;

  /**
   * Function to process risk scores in a time range.
   * Reads persisted results from the {@link MlProject} corresponding to reliability risk.
   * It will generate {@link RiskScoreSpec}s if any alert is predicted.
   * @param timeRange
   *    Time range where it will look for risk score predictions
   * @param isValidation
   *    Whether {@link RiskScoreSpec}s are for model validation
   * @return
   *    Generated {@link RiskScoreSpec}s
   */
  getAlertPredictionSpecs(timeRange?: TimeRange, isValidation?: boolean): Array_Type<RiskScoreSpec> | null;

  /**
   * This method Fetches the date options for the given modelId with the dates for original validation time frame,
   * last week, last month, last three months, and last six months.
   *
   * @returns the array of objects with the start and end dates
   */
  static getPreviewTimeFrameOptions(modelId?: string): FetchResult<any> | null;

  /**
   * Replicates the experiment model to create a new model. The newly created model
   * does not need to be retrained because only non-trainable hyperparameters are allowed
   * to change as part of the model replication process.
   *
   * For example, parameters such as `alert_threshold` can be changed, as they only affect
   * how the model runs inference. However, parameters like RandomForestRegressor n_estimators
   * cannot be changed because altering such parameters would require retraining the model.
   *
   * @param spec
   *        The specifications to replicate the model.
   * @return A new {@link ReliabilityMlModel} object that is the replicated version of the current model.
   */
  replicateModelExperiment(spec?: ReliabilityMlModelReplicateSpec): ReliabilityMlModel;

  /**
   * Gets a collection of feature contributions using the provided {@link RiskScoreSpec}.
   * This method maps feature names to their contribution values, which indicate the impact each feature had on the risk score.
   *
   * This method also normalizes the feature contribution values using either the `ModelRiskScoreContributorsRatio`, `ModelValidationRiskScoreContributorsRatio` or `RiskScoreContributorsRatio`.
   * The normalized feature contribution values sum up to 1.
   * The method fetches all the feature contribution headers for an alert and constructs a metric name depending on the {@link RiskScoreSpec}.
   * The metric is then evaluated on the {@link ReliabilityAsset} to compute the normalized value of the feature contribution.
   * For normalization, the metrics compute a sum of the feature contribution value and divide it by the sum of all the feature contribution associated with the alert.
   *
   * @param spec - The specification for fetching the features.
   * @returns A map where the keys are feature names and the values are their corresponding normalized contribution values.
   */
  static getFeatureContributions(spec: RiskScoreSpec): Map_Type<string, number> | null;

  /**
   * Helper method to promote an [experimental model](ReliabilityMlModel) to a `CANDIDATE` or `CHAMPION` model.
   * This method cleans #latestAdjustModelHyperparamsExperiment from the base model, and then
   * runs #createAgnosticAcceptExperimentalModelWorkflow for {@link ReliabilityMlModel}s or
   * #createRiskAcceptExperimentalModelWorkflow for {@link ReliabilityRiskMlModel}s.
   *
   * ```
   * ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
   * │ Retrieve     │    │ Create       │    │ Run Training │
   * │ Experimental ├───►│ ModelConfig  ├───►│ Deployment   │
   * │ Model        │    │ Run          │    │ Workflow     │
   * └──────────────┘    └──────────────┘    └──────────────┘
   * ```
   *
   * @param spec
   *        Optional configurations for how to accept the experiment.
   * @returns
   *        The {@link Workflow.Run} that tracks the progress of the training job for the UI.
   */
  acceptLatestModelExperiment(spec?: ReliabilityMlModel.AcceptExperimentSpec): Workflow.Run | null;

  /**
   * This utility method is used remove the {@link ReliabilityMlModel#latestAdjustModelHyperparamsExperiment}
   * at the end of either #createAgnosticAcceptExperimentalModelWorkflow or #createRiskAcceptExperimentalModelWorkflow.
   *
   * @param experimentalModel
   *        Experimental Model that is trained but not yet deployed.
   * @returns
   *        The {@link Workflow.Vertex} that will run {@link ReliabilityMlModelExperiment#remove}.
   */
  static removeExperimentVertex(experimentalModel?: ReliabilityMlModel): Workflow.Vertex | null;

  /**
   * Updates {@link monitoringScore} for a given monitoring classification label.
   */
  updateMonitoringClassification(label: string, user?: User): void;

  /**
   * Helper method to store the latest model experiment in #latestAdjustModelHyperparamsExperiment.
   *
   * @param experimentalModel
   *        The experimental model to store. (Output from {@link ReliabilityOrchestrator.AdjustModelHyperparamsProcess.Spec})
   */
  setExperimentalModel(experimentalModel: ReliabilityMlModel): void;

  /**
   * This method gets the `apiEndPoint` of the report for this model that can be downloaded from the UI.
   * else, it returns the {@link File#apiEndpoint} of the first file on this model.
   *
   * By default, this method generates the report for the model if it doesn't exist.
   *
   * @param checkExistsOnly
   *        Optional param that can be passed, which if true, only checks if a report already exists for this model.
   *
   * @returns
   *        either existence of the report or `apiEndpoint` of the report that can be downloaded from the UI.
   */
  getReportEndPointForUi(checkExistsOnly?: boolean = 'false'): boolean | string;

  /**
   * Generates {@link PdfComponent}s for the report for a single {@link ReliabilityMlModel}
   * Only works for ReliabilityRiskWithResidualDiagnostics {@link ReliabilityMl.Project}
   */
  generateReportComponents(reportSpec: ReliabilityMlModelReportSpec, modelStatus?: string, asset?: ReliabilityAsset): Array_Type<PdfComponent<PdfComponentDataSpec>> | null;

  /**
   *  Helper method called by #acceptLatestModelExperiment to create a {@link Workflow} that consists of:
   *  1. {@link ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTraining} for running model classification, model validation,
   * and generating model validation reports.
   *  2. {@link ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelDeployment} for running model deployment. Models get deployed as
   *     candidate in {@link ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTraining}. The deployment vertex will skip over these
   *     models if the deployment label is the same as current deployment status.
   *  3. #removeExperimentVertex for removing the {@link ReliabilityMlModel#latestAdjustModelHyperparamsExperiment at the end.
   *
   *  @param spec
   *         Optional configurations for how to accept the experiment.
   *  @param experimentalModel
   *         Experimental Model that is trained but not yet deployed.
   *  @param asset
   *         The asset on which the experimental model will be deployed.
   *  @param modelConfigRun
   *         The {@link ModelConfigRun} that tracks the progress of the training job for the UI.
   *  @returns
   *         The Workflow with the steps to deploy the experimental model.
   */
  static createRiskAcceptExperimentalModelWorkflow(spec?: ReliabilityMlModel.AcceptExperimentSpec, experimentalModel?: ReliabilityMlModel, asset?: ReliabilityAsset, modelConfigRun?: ModelConfigRun): Workflow | null;

  /**
   * Helper method to create a {@link Workflow} with the following steps:
   * 1. Run #runExperimentalModelTrainingJob.
   * 2. Run #runExperimentalPostModelTrainingJob.
   * 3. Run {@link ModelOpsHelper#changeModelStatus} if {@link ReliabilityMlModel.AcceptExperimentSpec} is true.
   *
   * ```
   *                                              if spec.deployAsChampion
   *     ┌──────────────┐   ┌────────────────┐        ┌──────────────┐
   * in  │              │out│                │$success│ Change Model │ out
   * ───►│ Training Job ├──►│ Post Train Job ├─┬─────►│ Deployment   ├─┬─►
   *     │              │   │                │ │      │ Status       │ │
   *     └──────────────┘   └────────────────┘ │      └──────────────┘ │
   *                                           │                       │
   *                                           │      ┌──────────────┐ │
   *                                           │      │ Clean Latest │ │
   *                                           └─────►│ Experiment   ├─┘
   *                                                  │ Field        │
   *                                                  └──────────────┘
   * ```
   *
   * @param spec
   *        Optional configurations for how to accept the experiment.
   * @param project
   *        The project that the base model belongs to.
   * @param experimentalModel
   *        Experimental Model that is trained but not yet deployed.
   * @param asset
   *        The asset on which we will deploy the experimental model.
   * @param modelConfigRun
   *        The {@link ModelConfigRun} that tracks the progress of the training job for the UI.
   * @returns
   *        The Workflow with the steps to deploy the experimental model.
   */
  static createAgnosticAcceptExperimentalModelWorkflow(spec?: ReliabilityMlModel.AcceptExperimentSpec, project?: ReliabilityMl.Project, experimentalModel?: ReliabilityMlModel, asset?: ReliabilityAsset, modelConfigRun?: ModelConfigRun): Workflow | null;

  /**
   * Creates required pdf components for an {@link ReliabilityAssetAlert} report
   * @param riskScoreSpec
   *    Represents an alert prediction for a {@link ReliabilityMlModel} and a {@link ReliabilityAsset} in a certain timestamp,
   *    from which the components are going to be generated
   * @param reportSpec
   *    User preferences specifications for the report
   */
  static generateAlertReportComponents(riskScoreSpec: RiskScoreSpec, reportSpec: ReliabilityAssetAlertReportSpec): Array_Type<PdfComponent<PdfComponentDataSpec>> | null;

  /**
   * Creates a risk model by validating inputs and outputs. It sets up a new risk model for the specified project and
   * pipeline and prepares the dataset for training. The method also includes model configuration and setup based on
   * the provided training data and associated parameters.
   *
   * @param project The machine learning project under which the model is being created.
   * @param pipeline The pipeline used for training the model.
   * @param x The features (input data) for training.
   * @param y The target labels (output data) for training.
   * @param id The unique identifier for the model.
   * @param name The name of the model.
   * @param datasetPreparationRun The dataset preparation run used to prepare the data for training.
   * @param template The template used to define the structure of the model.
   *
   * @returns A new {@link ReliabilityRiskMlModel} instance.
   */
  static createRiskModel(project: MlProject, pipeline: MlPipeline<any, any, any, any, any>, x?: Map_Type<string, Feature.Set> | Feature.Set, y?: Map_Type<string, Feature.Set> | Feature.Set, id?: string, name?: string, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, template?: ModelTemplate): ReliabilityRiskMlModel;

  /**
   * Validates that the pipeline contains the required input (`x`), target (`y`), and output (`out`) ports.
   * If either `y` or `out` ports are missing, the method will generate a warning. This ensures that the pipeline is
   * correctly configured for model training and evaluation.
   *
   * @param pipeline The machine learning pipeline to be validated.
   */
  static validatePipeline(pipeline: MlPipeline<any, any, any, any, any>): void;

  /**
   * Generates a new {@link ReliabilityRiskMlModel} by cloning an already trained model. This is done by applying
   * a new {@link MlPipeline} with updated sub-pipes that have been retrained with new {@link MlPipe}s. The newly
   * generated model can then be deployed and used for inference.
   *
   * @param spec The cloning specification containing options for creating the new model.
   *
   * @returns A new instance of {@link MlModel} with updated sub-pipes and vertices.
   */
  clone(spec: ReliabilityRiskMlModelCloningSpec): MlModel;

  /**
   * Uses the results of a model evaluation run to classify and monitor the model. If `isMonitoring` is set to `True`,
   * it returns a {@link ReliabilityMlModel.MonitoringScore}. Otherwise, it performs classification and returns a
   * corresponding {@link ReliabilityMlModel.ClassificationScore}. This function is useful for post-training evaluation
   * and real-time monitoring.
   *
   * @param referencePeriod The reference period for model evaluation.
   * @param comparisonPeriod The comparison period for model evaluation.
   * @param isMonitoring A flag indicating whether the function is being used for monitoring (`True`) or classification (`False`).
   * @param spec The specification for generating classification scores.
   *
   * @returns A classification score or monitoring score, depending on the context.
   */
  classify(referencePeriod: TimeRange, comparisonPeriod: TimeRange, isMonitoring: boolean, spec: ReliabilityRiskMlModel.ClassificationScoreSpec): ReliabilityMlModel.ClassificationScore;

  /**
   * Performs modifications to the classification score inputs before classification. This allows users to modify
   * metrics or statistics that affect the classification process. The function returns a pair containing the updated
   * classification score specification and modified inputs for classification.
   *
   * @param evaluationResultsRef A reference to the evaluation results for the reference period.
   * @param evaluationResultsComp A reference to the evaluation results for the comparison period.
   * @param spec The current specification for generating the classification score.
   *
   * @returns A pair of the modified classification score spec and inputs.
   */
  beforeClassify(evaluationResultsRef: Data.Persisted, evaluationResultsComp: Data.Persisted, spec: ReliabilityRiskMlModel.ClassificationScoreSpec): Pair<ReliabilityRiskMlModel.ClassificationScoreSpec, Map_Type<string, number>>;

  /**
   * Core function for calculating a classification score for the model. It assigns a score between 0 and 1,
   * where a higher score represents a better-performing model. This function is called during the classification
   * process after inputs have been validated and processed.
   *
   * @param classificationScoreInputs The inputs used to calculate the classification score.
   * @param spec The classification score specification used to calculate the score.
   * @param referencePeriod The reference period for model evaluation.
   * @param comparisonPeriod The comparison period for model evaluation.
   * @param asset The asset associated with the model for which classification is performed.
   * @param isMonitoring A flag indicating whether the function is for monitoring or classification.
   *
   * @returns A classification score based on the model's performance.
   */
  doClassify(classificationScoreInputs: Map_Type<string, number>, spec: ReliabilityRiskMlModel.ClassificationScoreSpec, referencePeriod: TimeRange, comparisonPeriod: TimeRange, asset?: ReliabilityAsset, isMonitoring: boolean): ReliabilityMlModel.ClassificationScore;

  /**
   * Performs any necessary modifications to the classification score after classification has been performed.
   * This allows users to adjust or normalize the classification score based on additional criteria or post-processing steps.
   *
   * @param score The calculated classification score.
   * @param spec The specification used for generating the classification score.
   *
   * @returns A potentially modified classification score.
   */
  afterClassify(score: ReliabilityMlModel.ClassificationScore, spec: ReliabilityRiskMlModel.ClassificationScoreSpec): ReliabilityMlModel.ClassificationScore;

  /**
   * Function that creates a {@link Workflow} to retrain and deploy an existing {@link ReliabilityRiskMlModel},
   * by allowing users to specify how they want to modify either/both of:
   * 1) The dataset preparation spec, and
   * 2) The fields on the underlying pipeline
   *
   * @param datasetPreparationCloningSpec
   *        The {@link ReliabilityRiskMlDatasetPreparationCloningSpec} that specifies how to generate the new dataset
   *        to retrain the model. See {@link ReliabilityRiskMlDatasetPreparationCloningSpec} for more details.
   * @param modelCloningSpec
   *        The {@link ReliabilityRiskMlModelCloningSpec} that specifies how to generate the new pipeline to retrain the model.
   *        See {@link ReliabilityRiskMlModelCloningSpec} for more details.
   * @param modelTrainingOptions
   *        The {@link ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTrainingOptions} that can be used to control
   *        whether or not to run model classification, validation and reporting on the retrained model.
   *
   * @return The {@link Workflow.Run} corresponding to the started {@link Workflow} for cloning and deploy it as a CANDIDATE model.
   */
  retrain(datasetPreparationCloningSpec?: ReliabilityRiskMlDatasetPreparationCloningSpec, modelCloningSpec?: ReliabilityRiskMlModelCloningSpec, modelTrainingOptions?: ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTrainingOptions): Workflow.Run;

  /**
   * Private function that creates a Workflow to clone the {@link ReliabilityRiskMlModel} and deploy it as a CANDIDATE model.
   *
   * @param modelCloningSpec
   *        The {@link ReliabilityRiskMlModelCloningSpec} that specifies how to clone the model.
   * @param options
   *        The {@link ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTrainingOptions} that can be used to control
   *        whether or not to run model classification, validation and reporting.
   *
   * @return The created {@link Workflow}.
   */
  createCloneAndDeployWorkflow(modelCloningSpec: ReliabilityRiskMlModelCloningSpec, options?: ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTrainingOptions): Workflow;

  /**
   * Function that creates a {@link Workflow} by calling {@link ReliabilityRiskMlModel#createCloneAndDeployWorkflow},
   * starts the {@link Workflow}, and returns the corresponding {@link Workflow.Run}.
   *
   * @param modelCloningSpec
   *        The {@link ReliabilityRiskMlModelCloningSpec} that specifies how to clone the model.
   * @param options
   *        The {@link ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTrainingOptions} that can be used to control
   *        whether or not to run model classification, validation and reporting.
   *
   * @return The {@link Workflow.Run} corresponding to the started {@link Workflow} for cloning and deploy it as a CANDIDATE model.
   */
  cloneAndDeploy(modelCloningSpec: ReliabilityRiskMlModelCloningSpec, options?: ReliabilityOrchestrator.ReliabilityRisk.Spec.ModelTrainingOptions): Workflow.Run;

  /**
   * Creates {@FaultySensor.RiskModelSourceOfTruthRelation}(s) in order to keep track of the source of
   * truth model for new {@link ReliabilityRiskMlModel}(s) that exclude {@link FaultySensor}s.
   *
   * @param originalModel
   *     The original model that will be replaced.
   * @param newModels
   *     The new model(s) that will replace the original model.
   * @param sourceOfTruthModel
   *     The source of truth model for the original model. It's possible that sot and original models are the same.
   * @return [FaultySensor.RiskModelSourceOfTruthRelation]
   *     An array of persisted relations.
   */
  static updateSourceOfTruthForFaultySensors(originalModel: ReliabilityRiskMlModel, newModels: Array_Type<ReliabilityRiskMlModel>, sourceOfTruthModel: ReliabilityRiskMlModel): Array_Type<FaultySensor.RiskModelSourceOfTruthRelation> | null;

  /**
   * Method to process risk scores for some time range according to the {@link ProcessValidationAlertTimeseriesSpec}.
   * Reads persisted results from the {@link MlProject} corresponding to reliability risk and persists
   * {@link ReliabilityAssetValidationAlert}s, unless the {@link ProcessValidationAlertTimeseriesSpec#doNotPersist}
   * is set to `true`.
   * It is idempotent, i.e. running it multiple times on the same spec will produce the same result as if it were run once.
   * @param spec
   *        The specification for processing the validation alert timeseries.
   * @return The {@link ReliabilityAssetValidationAlert}s that are generated.
   */
  processValidationAlertTimeseries(spec: ProcessValidationAlertTimeseriesSpec): Array_Type<ReliabilityAssetValidationAlert> | null;

  /**
   * Updates the {MlModel.Route#status} of an original model and new model(s). The original model will be set to
   * `RETIRED` and the new model(s) will be set to the original status of the original model.
   * Note: If the old model is also one of the new models, then it will not be retired.
   *
   * @param originalModel
   *     The original model that will be replaced.
   * @param newModels
   *     The new model(s) that will replace the original model.
   * @return [Pair<ReliabilityRiskMlModel, MlModel.Route.Status.Label>]
   *     An array of Models with its corresponding new status. If no models are updated (new models is just the original model),
   *     then one pair will be returned with the original model and its original status.
   */
  static updateModelStatusesForFaultySensors(originalModel: ReliabilityRiskMlModel, newModels: Array_Type<ReliabilityRiskMlModel>): Array_Type<Pair<ReliabilityRiskMlModel, string>> | null;
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

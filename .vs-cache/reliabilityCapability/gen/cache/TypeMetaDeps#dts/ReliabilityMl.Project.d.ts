// TypeScript definitions for the C3 type ReliabilityMl.Project

/**
 * Represents a machine learning project used for asset reliability modeling. This includes the configuration
 * for model templates, asset filters, alerting, inference periods, and other functionalities such as validation, classification, and reporting.
 * The project enables users to manage and deploy machine learning models that predict asset reliability and performance
 * over time.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMl.Project
 */
declare namespace ReliabilityMl {
  export interface IProject {

    /**
     * When getting the model validation data for the model validation chart,
     * this lambda is called to add the model outputs to the returned data.
     * If not defined or if the lambda throws an error, model outputs are not added to the data.
     * Must be defined in python.
     *
     * To test the lambda, you can use the output of ModelValidationDataGetter type, getDatasetData function.
     * The first and second values of the return tuple are the datasetPreparationRun and datasetData respectively
     * that should be used as arguments this function.
     *
     * param model
     *           The model for which model validation data is being fetched.
     * param datasetPreparationRun
     *           The dataset preparation run that was used to train the model.
     * param datasetData
     *           The data of the datasetPreparationRun given as a pandas DataFrame.
     *           This will include all the feature inputs as well as all the masks.
     *           Each column represents a feature/mask, and each row represents a sample indexed by timestamp.
     *
     * return Returns the following tuple (datasetDataWithModelOutputs, columnGroups, featureToColumnGroups)
     *         - datasetDataWithModelOutputs: The datasetData with the model outputs added as a DataFrame.
     *         - columnGroups: An array of column groups. Each column group is an array of column names that should be plotted on
     *           the same axis in the model validation chart. These will be plotted as soon as the chart loads.
     *         - featureToColumnGroups: A dictionary where the keys are feature names and the values are the column groups that should be plotted
     *           when the feature is select in the UI.
     *
     * Example return:
     * ```
     * (
     *    <some DataFrame>,
     *    [['riskScore_training', 'riskScore_validation'], ['alert']],
     *    {
     *      'Feature_1': [['Feature_1', 'Feature_1_reconstruction'], ['Feature_1_residual']],
     *      'Feature_2': [['Feature_2', 'Feature_2_reconstruction'], ['Feature_2_residual']],
     *    }
     * )
     * ```js
     *
     * This will plot riskScore_training and riskScore_validation on the same axis, and alert on a separate axis upon
     * loading the chart.
     *
     * When Feature_x is selected in the UI, it will plot Feature_x and Feature_x_reconstruction on the same axis, and
     * Feature_x_residual on a separate axis. When Feature_y is selected in the UI, it will plot Feature_y and
     * Feature_y_reconstruction on the same axis, and Feature_y_residual on a separate axis. The DataFrame should
     * contain columns 'Feature_x', 'Feature_x_reconstruction', 'Feature_x_residual', 'Feature_y',
     * 'Feature_y_reconstruction', 'Feature_y_residual', 'riskScore_training', 'riskScore_validation', and 'alert'.
     */
    addModelOutputsForModelValidationChartLambda?: λTriFunction<ReliabilityMlModel, ReliabilityMlDatasetPreparationRun, any, any>;

    /**
     * This lambda function is used to define and return thresholds for plotting on the model validation chart.
     *
     * param model
     *           The model whose thresholds are to be generated.
     * return A Python dictionary where:
     * - Each key corresponds to a column name.
     * - Each value is a list containing:
     *    - **recommended option(s)**: Objects representing one or more thresholds, where each object contains:
     *      - `key`: The name of the threshold (should be a translation key).
     *      - `value`: The threshold value.
     *    or
     *    - **numeric value** (supports only one threshold) to support lambda implementations before REL 19.0.
     *
     * These thresholds will be plotted on the same axis as the data for each corresponding column name key.
     * This lambda function must be implemented in Python.
     *
     * Example return:
     * ```python
     * {
     *   'riskScore': [2.0],
     *   'Feature_x': [
     *     {
     *       'customDescriptiveTranslationKey': 1.52,
     *     },
     *   ],
     *   'Feature_y': [
     *     {
     *       'customDescriptiveTranslationKey': 20.0,
     *     },
     *     {
     *       'customDescriptiveTranslationKey': 205.0,
     *     },
     *   ],
     * }
     * ```
     */
    getThresholdsForModelValidationChartLambda?: λFunction<ReliabilityMlModel, any>;

    /**
     * This lambda function is used to define and return thresholds for plotting on the model experiment preview chart.
     *
     * param model
     *           The model whose alert thresholds are to be generated.
     * return A Python dictionary where:
     * - Each key corresponds to a value from {@link ReliabilityMl.Project#primaryModelOutputs}.
     * - The value of each key is a list of numeric thresholds. These thresholds will be plotted on the same axis as the corresponding primary model output.
     *
     * This lambda function must be implemented in Python.
     *
     * Example return:
     * ```python
     * {
     *   'riskScore': [1.52, 2.0],
     *   'riskScoreNormalized': [205],
     * }
     * ```
     */
    getAlertThresholdsLambda?: λFunction<ReliabilityMlModel, any>;

    /**
     * This lambda function is used to retrieve comparable alerts for alert similarity calculations
     * and persist the results to either `ReliabilityAssetAlertSimilaritySmall` or `ReliabilityAssetAlertSimilarityLarge`,
     * based on the configured `ReliabilityAlertTriagingConfiguration#similarityTypeName`.
     *
     * The lambda should return an array of persisted similarity objects, ensuring that the fields:
     * `ReliabilityAssetAlertSimilarity#baseAlert` and
     * `ReliabilityAssetAlertSimilarity#comparableAlert`
     * are populated in the returned objects.
     *
     * param alert
     *           The {@link ReliabilityAssetAlert} for which similarity calculations are performed.
     * return An array of similarity objects (either small or large) based on the value of similarityTypeName.
     */
    processAlertSimilarityLambda?: λFunction<ReliabilityAssetAlert, any>;

    /**
     * Unique identifier for the project. This ID is used to reference the project in other parts of the system.
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
     * The name of the project. By default, this is set to the value of the `id`.
     */
    name: string;

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
     * Lambda to override {@link #dataPrepSettingsToSpec}.
     */
    overrideDataPrepSettingsToSpec?: ILambda<function(settings?: BulkDataPreparationUiSettings): ReliabilityMlDatasetPreparationSpec | null>;

    /**
     * Lambda to override {@link #modelConfigSettingsToSpec}.
     */
    overrideModelConfigSettingsToSpec?: ILambda<function(settings?: BulkModelConfigUiSettings): ReliabilityOrchestrator.TrainingJobSpec | null>;

    /**
     * Lambda to override {@link #dataPrepSettingsToJobRun}.
     */
    overrideDataPrepSettingsToJobRun?: ILambda<function(settings?: BulkDataPreparationUiSettings): MlOperationRun<ReliabilityOrchestrator.DatasetPreparationJobRun> | null>;

    /**
     * Lambda to override {@link #modelConfigSettingsToJobRun}.
     */
    overrideModelConfigSettingsToJobRun?: ILambda<function(settings?: BulkModelConfigUiSettings, dataPrepJobRun?: ReliabilityOrchestrator.DatasetPreparationJobRun, modelConfigRun?: ModelConfigRun, hasPostTraining?: boolean): MlOperationRun<ReliabilityOrchestrator.TrainingJobRun> | null>;

    /**
     * Lambda to override {@link #startPostTrainingJob}.
     */
    overrideStartPostTrainingJob?: ILambda<function(settings?: BulkModelConfigUiSettings, trainingRun?: ReliabilityOrchestrator.TrainingJobRun, modelConfigRun?: ModelConfigRun): MlOperationRun<ReliabilityOrchestrator.PostTrainingJobRun> | null>;

    /**
     * Lambda to override {@link #modelSetupSettingsToWorkflowRun}.
     */
    overrideModelSetupSettingsToWorkflowRun?: ILambda<function(settings?: BulkModelSetupUiSettings): Workflow.Run | null>;

    /**
     * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
     * of its base type's typeIdent
     */
    typeIdent?: string;

    /**
     * A description of the project, providing an explanation of the project's objective or use case.
     * This description will be displayed in the UI.
     */
    description: string;

    /**
     * The filter used to determine which assets are relevant for this project. This field is serialized and represents
     * the criteria for selecting assets that are considered in the reliability analysis.
     */
    assetFilter: string;

    /**
     * While the {@link modelTemplates} contain implementations of ML algorithms,
     * under a given project, they must all output the same `algorithmOutputs`,
     * i.e., these column names in the output dataframes of the models must
     * always exist for all models in the {@link modelTemplates}, that do not correspond
     * to alert columns. Each template may, however, additionally output as many other
     * dataframe columns as is necessary.
     */
    algorithmOutputs?: Array_Type<string> | Array<string>;

    /**
     * While the {@link modelTemplates} contain implementations of ML algorithms,
     * under a given project, they must all output the same `alertOutputs`,
     * i.e., these column names in the output dataframes of the models must
     * always exist for all models in the {@link modelTemplates}, that correspond
     * to alert columns. Each template may, however, additionally output as many other
     * dataframe columns as is necessary.
     */
    alertOutputs: Array_Type<string> | Array<string>;

    /**
     * While the {@link modelTemplates} contain implementations of ML algorithms,
     * under a given project, they must all output the same `primaryModelOutputs`,
     * i.e., these column names in the output dataframes of the models must
     * always exist for all models in the {@link modelTemplates}. Each template
     * may, however, additionally output as many other dataframe columns as is
     * necessary.
     */
    primaryModelOutputs?: Array_Type<string> | Array<string>;

    /**
     * The name of the primary model output that will be displayed in the UI for this project.
     * This should be one of the `primaryModelOutputs` defined for the project.
     */
    displayedModelOutput?: string;

    /**
     * The name of the primary model output that will be used to normalize the contributions.
     * This should be one of the `primaryModelOutputs` defined for the project.
     *
     * Should be used for projects that have a primary model output that is the normalized version of another primary
     * model output. For example, the `reliabilityRiskWithResidualDiagnostics` project has a `riskScoreNormalized` primary
     * model output that contributions are normalized to.
     *
     * The project should also have contributions that sum up to the non-normalized primary model output.
     *
     * This field only influences how {@link ReliabilityModelOutputsTimedDataQuery} queries contributions.
     * So, anywhere contributions are plotted in the UI, they will be normalized to the value of this field (if provided).
     */
    modelOutputToNormalizeContributions?: string;

    /**
     * All the allowable {@link ModelTemplate}s for this project. Only these
     * models will be allowed to be trained and deployed under this project. This
     * is to ensure consistency in the outputs of the models under a given project.
     */
    modelTemplates: Array_Type<string> | Array<string>;

    /**
     * The default {@link ModelTemplate} to use when creating a new model under this project.
     */
    defaultModelTemplate: string;

    /**
     * Lambda function that defines the retraining workflow for this project.
     * When invoked with a {@link ReliabilityMlModel}, it should return a {@link Workflow}
     * object that specifies the steps and logic required to retrain the model.
     *
     * Use this to customize how model retraining is orchestrated, including data preparation and training.
     */
    retrainingWorkflowLambda?: ILambda<function(model: ReliabilityMlModel): Workflow>;

    /**
     * Lambda function to select which models should be retrained automatically.
     * All champion models of the project will be provided as input to this function.
     * This function takes a list of {@link ReliabilityMlModel} as input and returns a list of {@link ReliabilityMlModel}
     * specifying the models to be retrained.
     * Customize this lambda to define your model selection logic for automated retraining workflows.
     */
    filterModelsForAutoRetrainingLambda?: ILambda<function(models: Array_Type<ReliabilityMlModel>): Array_Type<ReliabilityMlModel> | null>;

    /**
     * When set to true, this project is eligible for automatic model retraining.
     * Only projects with `enableAutomaticRetraining = true` will have their champion models
     * considered and passed to {@link ReliabilityMl.Project#filterModelsForAutoRetrainingLambda} for selection.
     */
    enableAutomaticRetraining?: boolean;

    /**
     * This field defines the feature specific outputs and metadata that the {@link ReliabilityMlModel}s
     * associated with this project will generate. This map should follow the structure below where:
     *
     * - `FEATURE_OUTPUT_NAME` is the key to reference each output.
     * - `POSTFIX_TO_APPEND` is the postfix that is added to feature id when setting the {@link ReliabilityMl.PredictionHeader#name}
     * (see type documentation for more information about feature outputs persistence).
     * - `DISPLAY_VALUE_SHOWN_IN_THE_APP` is the displayed value for that feature output (in the application UI.)
     * - `UNIT_OF_THE_FEATURE_OUTPUT` is the unit id of the feature output. If not provided, the unit will be inferred from the
     * corresponding feature output. Note that this is only used when plotting the feature output in the UI.
     *
     * {
     *    "FEATURE_OUTPUT_NAME": {
     *       "postfix": `POSTFIX_TO_APPEND`
     *       "display": `DISPLAY_VALUE_SHOWN_IN_THE_APP`
     *       "unitId": `UNIT_OF_THE_FEATURE_OUTPUT`
     *    }
     * }
     *
     * An example:
     * {
     *    "reconstructions": {
     *       "postfix": "_reconstruction"
     *       "display": "Reconstruction"
     *    },
     *    "residuals": {
     *       "postfix": "_residual"
     *       "display": "Residual"
     *       "unitId": "dimensionless"
     *    }
     * }
     */
    featureOutputs?: Map_Type<string, Map_Type<string, string>> | {[key: string]: Map_Type<string, string> | {[key: string]: string}};

    /**
     * Implement this {@link Lambda} function to modify the inferencePeriod for which inference
     * should be run for a given {@link ReliabilityAsset}. If provided, this function will be
     * called in the {@link getInferencePeriodForAsset} function. If not provided, the default
     * behavior is to simply return the input `inferencePeriod`.
     *
     * For example, this function can be used to update the default `inferencePeriod`, such that
     * inference is run for a given asset from after it's latest persisted prediction in the
     * database.
     */
    getInferencePeriodForAssetLambda?: ILambda<function(asset: ReliabilityAsset, inferencePeriod: TimeRange, project: ReliabilityMl.Project, statusLabel?: string): TimeRange>;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate {@link ReliabilityAssetAlert}s for
     * your {@link ReliabilityMl.Project}.
     *
     * In order to properly display feature contributions in the UI, be sure to populate the
     * {@link ReliabilityAssetAlert#featureContributionMap}.
     */
    processAlertsForAssetLambda?: ILambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model?: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetAlert> | null>;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate {@link ReliabilityAssetValidationAlert}s for
     * your {@link ReliabilityMl.Project}.
     *
     * Be sure to populate all the needed fields in the {@link ReliabilityAssetValidationAlert} object.
     */
    processValidationAlertsForAssetLambda?: ILambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetValidationAlert> | null>;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate and return a
     * {@link ReliabilityMlModel.ClassificationScore} for your {@link ReliabilityMl.Project},
     * for a given {@link ReliabilityMlModel} and {@link ReliabilityAsset}.
     *
     * NOTE: `referenceModelOutput` and `comparisonModelOutput` contains the model's predictions and
     * feature contributions for the asset, generated for the referenceTimeRange and comparisonTimeRang passed into the post training
     * or model monitoring job. They should be used to compare the model's performance over the two periods, to generate the
     * classification score.
     * You can also use the dataset preparation run to evaluate the features and masks on your input data, if that is
     * required for the classification logic that you choose to implement.
     */
    classifyModelForAssetLambda?: ILambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): ReliabilityMlModel.ClassificationScore | null>;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate and return a {@link File} that contains
     * a report for a given {@link ReliabilityMlModel} and {@link ReliabilityAsset}, for your {@link ReliabilityMl.Project}.
     *
     * NOTE: `referenceModelOutput` and `comparisonModelOutput` contains the model's predictions and
     * feature contributions for the asset, generated for the referenceTimeRange and comparisonTimeRange passed into the post training job.
     * You can also use the dataset preparation run to evaluate the features and masks on your input data, if that is required for the
     * reporting logic that you choose to implement.
     */
    reportModelForAssetLambda?: ILambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): File>;

    /**
     * Reference to the wrapped {@link MlProject}. The id of the {@link MlProject}
     * and its corresponding {@link ReliabilityMl.Project} will be the same.
     */
    project?: IMlProject;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}
/**
 * Represents a machine learning project used for asset reliability modeling. This includes the configuration
 * for model templates, asset filters, alerting, inference periods, and other functionalities such as validation, classification, and reporting.
 * The project enables users to manage and deploy machine learning models that predict asset reliability and performance
 * over time.
 *
 * @remarks this represents a made instance of ReliabilityMl.Project
 */
declare namespace ReliabilityMl {
  export class Project extends Obj  {

    /**
     * When getting the model validation data for the model validation chart,
     * this lambda is called to add the model outputs to the returned data.
     * If not defined or if the lambda throws an error, model outputs are not added to the data.
     * Must be defined in python.
     *
     * To test the lambda, you can use the output of ModelValidationDataGetter type, getDatasetData function.
     * The first and second values of the return tuple are the datasetPreparationRun and datasetData respectively
     * that should be used as arguments this function.
     *
     * param model
     *           The model for which model validation data is being fetched.
     * param datasetPreparationRun
     *           The dataset preparation run that was used to train the model.
     * param datasetData
     *           The data of the datasetPreparationRun given as a pandas DataFrame.
     *           This will include all the feature inputs as well as all the masks.
     *           Each column represents a feature/mask, and each row represents a sample indexed by timestamp.
     *
     * return Returns the following tuple (datasetDataWithModelOutputs, columnGroups, featureToColumnGroups)
     *         - datasetDataWithModelOutputs: The datasetData with the model outputs added as a DataFrame.
     *         - columnGroups: An array of column groups. Each column group is an array of column names that should be plotted on
     *           the same axis in the model validation chart. These will be plotted as soon as the chart loads.
     *         - featureToColumnGroups: A dictionary where the keys are feature names and the values are the column groups that should be plotted
     *           when the feature is select in the UI.
     *
     * Example return:
     * ```
     * (
     *    <some DataFrame>,
     *    [['riskScore_training', 'riskScore_validation'], ['alert']],
     *    {
     *      'Feature_1': [['Feature_1', 'Feature_1_reconstruction'], ['Feature_1_residual']],
     *      'Feature_2': [['Feature_2', 'Feature_2_reconstruction'], ['Feature_2_residual']],
     *    }
     * )
     * ```js
     *
     * This will plot riskScore_training and riskScore_validation on the same axis, and alert on a separate axis upon
     * loading the chart.
     *
     * When Feature_x is selected in the UI, it will plot Feature_x and Feature_x_reconstruction on the same axis, and
     * Feature_x_residual on a separate axis. When Feature_y is selected in the UI, it will plot Feature_y and
     * Feature_y_reconstruction on the same axis, and Feature_y_residual on a separate axis. The DataFrame should
     * contain columns 'Feature_x', 'Feature_x_reconstruction', 'Feature_x_residual', 'Feature_y',
     * 'Feature_y_reconstruction', 'Feature_y_residual', 'riskScore_training', 'riskScore_validation', and 'alert'.
     */
    readonly addModelOutputsForModelValidationChartLambda?: λTriFunction<ReliabilityMlModel, ReliabilityMlDatasetPreparationRun, any, any>;
    withAddModelOutputsForModelValidationChartLambda(addModelOutputsForModelValidationChartLambda: λTriFunction<ReliabilityMlModel, ReliabilityMlDatasetPreparationRun, any, any> | null): ReliabilityMl.Project;

    /**
     * This lambda function is used to define and return thresholds for plotting on the model validation chart.
     *
     * param model
     *           The model whose thresholds are to be generated.
     * return A Python dictionary where:
     * - Each key corresponds to a column name.
     * - Each value is a list containing:
     *    - **recommended option(s)**: Objects representing one or more thresholds, where each object contains:
     *      - `key`: The name of the threshold (should be a translation key).
     *      - `value`: The threshold value.
     *    or
     *    - **numeric value** (supports only one threshold) to support lambda implementations before REL 19.0.
     *
     * These thresholds will be plotted on the same axis as the data for each corresponding column name key.
     * This lambda function must be implemented in Python.
     *
     * Example return:
     * ```python
     * {
     *   'riskScore': [2.0],
     *   'Feature_x': [
     *     {
     *       'customDescriptiveTranslationKey': 1.52,
     *     },
     *   ],
     *   'Feature_y': [
     *     {
     *       'customDescriptiveTranslationKey': 20.0,
     *     },
     *     {
     *       'customDescriptiveTranslationKey': 205.0,
     *     },
     *   ],
     * }
     * ```
     */
    readonly getThresholdsForModelValidationChartLambda?: λFunction<ReliabilityMlModel, any>;
    withGetThresholdsForModelValidationChartLambda(getThresholdsForModelValidationChartLambda: λFunction<ReliabilityMlModel, any> | null): ReliabilityMl.Project;

    /**
     * This lambda function is used to define and return thresholds for plotting on the model experiment preview chart.
     *
     * param model
     *           The model whose alert thresholds are to be generated.
     * return A Python dictionary where:
     * - Each key corresponds to a value from {@link ReliabilityMl.Project#primaryModelOutputs}.
     * - The value of each key is a list of numeric thresholds. These thresholds will be plotted on the same axis as the corresponding primary model output.
     *
     * This lambda function must be implemented in Python.
     *
     * Example return:
     * ```python
     * {
     *   'riskScore': [1.52, 2.0],
     *   'riskScoreNormalized': [205],
     * }
     * ```
     */
    readonly getAlertThresholdsLambda?: λFunction<ReliabilityMlModel, any>;
    withGetAlertThresholdsLambda(getAlertThresholdsLambda: λFunction<ReliabilityMlModel, any> | null): ReliabilityMl.Project;

    /**
     * This lambda function is used to retrieve comparable alerts for alert similarity calculations
     * and persist the results to either `ReliabilityAssetAlertSimilaritySmall` or `ReliabilityAssetAlertSimilarityLarge`,
     * based on the configured `ReliabilityAlertTriagingConfiguration#similarityTypeName`.
     *
     * The lambda should return an array of persisted similarity objects, ensuring that the fields:
     * `ReliabilityAssetAlertSimilarity#baseAlert` and
     * `ReliabilityAssetAlertSimilarity#comparableAlert`
     * are populated in the returned objects.
     *
     * param alert
     *           The {@link ReliabilityAssetAlert} for which similarity calculations are performed.
     * return An array of similarity objects (either small or large) based on the value of similarityTypeName.
     */
    readonly processAlertSimilarityLambda?: λFunction<ReliabilityAssetAlert, any>;
    withProcessAlertSimilarityLambda(processAlertSimilarityLambda: λFunction<ReliabilityAssetAlert, any> | null): ReliabilityMl.Project;

    /**
     * Unique identifier for the project. This ID is used to reference the project in other parts of the system.
     */
    readonly id: string;
    withId(id: string): ReliabilityMl.Project;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    readonly versionEdits?: Array_Type<VersionEdit>;
    withVersionEdits(versionEdits: Array_Type<VersionEdit> | Array<IVersionEdit> | null): ReliabilityMl.Project;

    /**
     * The name of the project. By default, this is set to the value of the `id`.
     */
    readonly name: string;
    withName(name: string): ReliabilityMl.Project;

    /**
     * Various system fields.
     */
    readonly meta?: Meta;
    withMeta(meta: IMeta | null): ReliabilityMl.Project;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    readonly version?: number;
    withVersion(version: number | null): ReliabilityMl.Project;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    readonly typeWithBindings?: Type;
    withTypeWithBindings(typeWithBindings: IType | null): ReliabilityMl.Project;

    /**
     * Lambda to override {@link #dataPrepSettingsToSpec}.
     */
    readonly overrideDataPrepSettingsToSpec?: Lambda<function(settings?: BulkDataPreparationUiSettings): ReliabilityMlDatasetPreparationSpec | null>;
    withOverrideDataPrepSettingsToSpec(overrideDataPrepSettingsToSpec: ILambda<function(settings?: BulkDataPreparationUiSettings): ReliabilityMlDatasetPreparationSpec | null> | null): ReliabilityMl.Project;

    /**
     * Lambda to override {@link #modelConfigSettingsToSpec}.
     */
    readonly overrideModelConfigSettingsToSpec?: Lambda<function(settings?: BulkModelConfigUiSettings): ReliabilityOrchestrator.TrainingJobSpec | null>;
    withOverrideModelConfigSettingsToSpec(overrideModelConfigSettingsToSpec: ILambda<function(settings?: BulkModelConfigUiSettings): ReliabilityOrchestrator.TrainingJobSpec | null> | null): ReliabilityMl.Project;

    /**
     * Lambda to override {@link #dataPrepSettingsToJobRun}.
     */
    readonly overrideDataPrepSettingsToJobRun?: Lambda<function(settings?: BulkDataPreparationUiSettings): MlOperationRun<ReliabilityOrchestrator.DatasetPreparationJobRun> | null>;
    withOverrideDataPrepSettingsToJobRun(overrideDataPrepSettingsToJobRun: ILambda<function(settings?: BulkDataPreparationUiSettings): MlOperationRun<ReliabilityOrchestrator.DatasetPreparationJobRun> | null> | null): ReliabilityMl.Project;

    /**
     * Lambda to override {@link #modelConfigSettingsToJobRun}.
     */
    readonly overrideModelConfigSettingsToJobRun?: Lambda<function(settings?: BulkModelConfigUiSettings, dataPrepJobRun?: ReliabilityOrchestrator.DatasetPreparationJobRun, modelConfigRun?: ModelConfigRun, hasPostTraining?: boolean): MlOperationRun<ReliabilityOrchestrator.TrainingJobRun> | null>;
    withOverrideModelConfigSettingsToJobRun(overrideModelConfigSettingsToJobRun: ILambda<function(settings?: BulkModelConfigUiSettings, dataPrepJobRun?: ReliabilityOrchestrator.DatasetPreparationJobRun, modelConfigRun?: ModelConfigRun, hasPostTraining?: boolean): MlOperationRun<ReliabilityOrchestrator.TrainingJobRun> | null> | null): ReliabilityMl.Project;

    /**
     * Lambda to override {@link #startPostTrainingJob}.
     */
    readonly overrideStartPostTrainingJob?: Lambda<function(settings?: BulkModelConfigUiSettings, trainingRun?: ReliabilityOrchestrator.TrainingJobRun, modelConfigRun?: ModelConfigRun): MlOperationRun<ReliabilityOrchestrator.PostTrainingJobRun> | null>;
    withOverrideStartPostTrainingJob(overrideStartPostTrainingJob: ILambda<function(settings?: BulkModelConfigUiSettings, trainingRun?: ReliabilityOrchestrator.TrainingJobRun, modelConfigRun?: ModelConfigRun): MlOperationRun<ReliabilityOrchestrator.PostTrainingJobRun> | null> | null): ReliabilityMl.Project;

    /**
     * Lambda to override {@link #modelSetupSettingsToWorkflowRun}.
     */
    readonly overrideModelSetupSettingsToWorkflowRun?: Lambda<function(settings?: BulkModelSetupUiSettings): Workflow.Run | null>;
    withOverrideModelSetupSettingsToWorkflowRun(overrideModelSetupSettingsToWorkflowRun: ILambda<function(settings?: BulkModelSetupUiSettings): Workflow.Run | null> | null): ReliabilityMl.Project;

    /**
     * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
     * of its base type's typeIdent
     */
    readonly typeIdent?: string;
    withTypeIdent(typeIdent: string | null): ReliabilityMl.Project;

    /**
     * A description of the project, providing an explanation of the project's objective or use case.
     * This description will be displayed in the UI.
     */
    readonly description: string;
    withDescription(description: string): ReliabilityMl.Project;

    /**
     * The filter used to determine which assets are relevant for this project. This field is serialized and represents
     * the criteria for selecting assets that are considered in the reliability analysis.
     */
    readonly assetFilter: string;
    withAssetFilter(assetFilter: string): ReliabilityMl.Project;

    /**
     * While the {@link modelTemplates} contain implementations of ML algorithms,
     * under a given project, they must all output the same `algorithmOutputs`,
     * i.e., these column names in the output dataframes of the models must
     * always exist for all models in the {@link modelTemplates}, that do not correspond
     * to alert columns. Each template may, however, additionally output as many other
     * dataframe columns as is necessary.
     */
    readonly algorithmOutputs?: Array_Type<string>;
    withAlgorithmOutputs(algorithmOutputs: Array_Type<string> | Array<string> | null): ReliabilityMl.Project;

    /**
     * While the {@link modelTemplates} contain implementations of ML algorithms,
     * under a given project, they must all output the same `alertOutputs`,
     * i.e., these column names in the output dataframes of the models must
     * always exist for all models in the {@link modelTemplates}, that correspond
     * to alert columns. Each template may, however, additionally output as many other
     * dataframe columns as is necessary.
     */
    readonly alertOutputs: Array_Type<string>;
    withAlertOutputs(alertOutputs: Array_Type<string> | Array<string>): ReliabilityMl.Project;

    /**
     * While the {@link modelTemplates} contain implementations of ML algorithms,
     * under a given project, they must all output the same `primaryModelOutputs`,
     * i.e., these column names in the output dataframes of the models must
     * always exist for all models in the {@link modelTemplates}. Each template
     * may, however, additionally output as many other dataframe columns as is
     * necessary.
     */
    readonly primaryModelOutputs?: Array_Type<string>;
    withPrimaryModelOutputs(primaryModelOutputs: Array_Type<string> | Array<string> | null): ReliabilityMl.Project;

    /**
     * The name of the primary model output that will be displayed in the UI for this project.
     * This should be one of the `primaryModelOutputs` defined for the project.
     */
    readonly displayedModelOutput?: string;
    withDisplayedModelOutput(displayedModelOutput: string | null): ReliabilityMl.Project;

    /**
     * The name of the primary model output that will be used to normalize the contributions.
     * This should be one of the `primaryModelOutputs` defined for the project.
     *
     * Should be used for projects that have a primary model output that is the normalized version of another primary
     * model output. For example, the `reliabilityRiskWithResidualDiagnostics` project has a `riskScoreNormalized` primary
     * model output that contributions are normalized to.
     *
     * The project should also have contributions that sum up to the non-normalized primary model output.
     *
     * This field only influences how {@link ReliabilityModelOutputsTimedDataQuery} queries contributions.
     * So, anywhere contributions are plotted in the UI, they will be normalized to the value of this field (if provided).
     */
    readonly modelOutputToNormalizeContributions?: string;
    withModelOutputToNormalizeContributions(modelOutputToNormalizeContributions: string | null): ReliabilityMl.Project;

    /**
     * All the allowable {@link ModelTemplate}s for this project. Only these
     * models will be allowed to be trained and deployed under this project. This
     * is to ensure consistency in the outputs of the models under a given project.
     */
    readonly modelTemplates: Array_Type<string>;
    withModelTemplates(modelTemplates: Array_Type<string> | Array<string>): ReliabilityMl.Project;

    /**
     * The default {@link ModelTemplate} to use when creating a new model under this project.
     */
    readonly defaultModelTemplate: string;
    withDefaultModelTemplate(defaultModelTemplate: string): ReliabilityMl.Project;

    /**
     * Lambda function that defines the retraining workflow for this project.
     * When invoked with a {@link ReliabilityMlModel}, it should return a {@link Workflow}
     * object that specifies the steps and logic required to retrain the model.
     *
     * Use this to customize how model retraining is orchestrated, including data preparation and training.
     */
    readonly retrainingWorkflowLambda?: Lambda<function(model: ReliabilityMlModel): Workflow>;
    withRetrainingWorkflowLambda(retrainingWorkflowLambda: ILambda<function(model: ReliabilityMlModel): Workflow> | null): ReliabilityMl.Project;

    /**
     * Lambda function to select which models should be retrained automatically.
     * All champion models of the project will be provided as input to this function.
     * This function takes a list of {@link ReliabilityMlModel} as input and returns a list of {@link ReliabilityMlModel}
     * specifying the models to be retrained.
     * Customize this lambda to define your model selection logic for automated retraining workflows.
     */
    readonly filterModelsForAutoRetrainingLambda?: Lambda<function(models: Array_Type<ReliabilityMlModel>): Array_Type<ReliabilityMlModel> | null>;
    withFilterModelsForAutoRetrainingLambda(filterModelsForAutoRetrainingLambda: ILambda<function(models: Array_Type<ReliabilityMlModel>): Array_Type<ReliabilityMlModel> | null> | null): ReliabilityMl.Project;

    /**
     * When set to true, this project is eligible for automatic model retraining.
     * Only projects with `enableAutomaticRetraining = true` will have their champion models
     * considered and passed to {@link ReliabilityMl.Project#filterModelsForAutoRetrainingLambda} for selection.
     */
    readonly enableAutomaticRetraining?: boolean;
    withEnableAutomaticRetraining(enableAutomaticRetraining: boolean): ReliabilityMl.Project;

    /**
     * This field defines the feature specific outputs and metadata that the {@link ReliabilityMlModel}s
     * associated with this project will generate. This map should follow the structure below where:
     *
     * - `FEATURE_OUTPUT_NAME` is the key to reference each output.
     * - `POSTFIX_TO_APPEND` is the postfix that is added to feature id when setting the {@link ReliabilityMl.PredictionHeader#name}
     * (see type documentation for more information about feature outputs persistence).
     * - `DISPLAY_VALUE_SHOWN_IN_THE_APP` is the displayed value for that feature output (in the application UI.)
     * - `UNIT_OF_THE_FEATURE_OUTPUT` is the unit id of the feature output. If not provided, the unit will be inferred from the
     * corresponding feature output. Note that this is only used when plotting the feature output in the UI.
     *
     * {
     *    "FEATURE_OUTPUT_NAME": {
     *       "postfix": `POSTFIX_TO_APPEND`
     *       "display": `DISPLAY_VALUE_SHOWN_IN_THE_APP`
     *       "unitId": `UNIT_OF_THE_FEATURE_OUTPUT`
     *    }
     * }
     *
     * An example:
     * {
     *    "reconstructions": {
     *       "postfix": "_reconstruction"
     *       "display": "Reconstruction"
     *    },
     *    "residuals": {
     *       "postfix": "_residual"
     *       "display": "Residual"
     *       "unitId": "dimensionless"
     *    }
     * }
     */
    readonly featureOutputs?: Map_Type<string, Map_Type<string, string>>;
    withFeatureOutputs(featureOutputs: Map_Type<string, Map_Type<string, string>> | {[key: string]: Map_Type<string, string> | {[key: string]: string}} | null): ReliabilityMl.Project;

    /**
     * Implement this {@link Lambda} function to modify the inferencePeriod for which inference
     * should be run for a given {@link ReliabilityAsset}. If provided, this function will be
     * called in the {@link getInferencePeriodForAsset} function. If not provided, the default
     * behavior is to simply return the input `inferencePeriod`.
     *
     * For example, this function can be used to update the default `inferencePeriod`, such that
     * inference is run for a given asset from after it's latest persisted prediction in the
     * database.
     */
    readonly getInferencePeriodForAssetLambda?: Lambda<function(asset: ReliabilityAsset, inferencePeriod: TimeRange, project: ReliabilityMl.Project, statusLabel?: string): TimeRange>;
    withGetInferencePeriodForAssetLambda(getInferencePeriodForAssetLambda: ILambda<function(asset: ReliabilityAsset, inferencePeriod: TimeRange, project: ReliabilityMl.Project, statusLabel?: string): TimeRange> | null): ReliabilityMl.Project;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate {@link ReliabilityAssetAlert}s for
     * your {@link ReliabilityMl.Project}.
     *
     * In order to properly display feature contributions in the UI, be sure to populate the
     * {@link ReliabilityAssetAlert#featureContributionMap}.
     */
    readonly processAlertsForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model?: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetAlert> | null>;
    withProcessAlertsForAssetLambda(processAlertsForAssetLambda: ILambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model?: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetAlert> | null> | null): ReliabilityMl.Project;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate {@link ReliabilityAssetValidationAlert}s for
     * your {@link ReliabilityMl.Project}.
     *
     * Be sure to populate all the needed fields in the {@link ReliabilityAssetValidationAlert} object.
     */
    readonly processValidationAlertsForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetValidationAlert> | null>;
    withProcessValidationAlertsForAssetLambda(processValidationAlertsForAssetLambda: ILambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetValidationAlert> | null> | null): ReliabilityMl.Project;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate and return a
     * {@link ReliabilityMlModel.ClassificationScore} for your {@link ReliabilityMl.Project},
     * for a given {@link ReliabilityMlModel} and {@link ReliabilityAsset}.
     *
     * NOTE: `referenceModelOutput` and `comparisonModelOutput` contains the model's predictions and
     * feature contributions for the asset, generated for the referenceTimeRange and comparisonTimeRang passed into the post training
     * or model monitoring job. They should be used to compare the model's performance over the two periods, to generate the
     * classification score.
     * You can also use the dataset preparation run to evaluate the features and masks on your input data, if that is
     * required for the classification logic that you choose to implement.
     */
    readonly classifyModelForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): ReliabilityMlModel.ClassificationScore | null>;
    withClassifyModelForAssetLambda(classifyModelForAssetLambda: ILambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): ReliabilityMlModel.ClassificationScore | null> | null): ReliabilityMl.Project;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate and return a {@link File} that contains
     * a report for a given {@link ReliabilityMlModel} and {@link ReliabilityAsset}, for your {@link ReliabilityMl.Project}.
     *
     * NOTE: `referenceModelOutput` and `comparisonModelOutput` contains the model's predictions and
     * feature contributions for the asset, generated for the referenceTimeRange and comparisonTimeRange passed into the post training job.
     * You can also use the dataset preparation run to evaluate the features and masks on your input data, if that is required for the
     * reporting logic that you choose to implement.
     */
    readonly reportModelForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): File>;
    withReportModelForAssetLambda(reportModelForAssetLambda: ILambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): File> | null): ReliabilityMl.Project;

    /**
     * Reference to the wrapped {@link MlProject}. The id of the {@link MlProject}
     * and its corresponding {@link ReliabilityMl.Project} will be the same.
     */
    readonly project?: MlProject;
    withProject(project: IMlProject | null): ReliabilityMl.Project;

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
    static fromJson(json: any): ReliabilityMl.Project | null;

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
    static fromJsonString(json: string): ReliabilityMl.Project | null;

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
    static fromXmlString(xml: string): ReliabilityMl.Project | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilityMl.Project | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilityMl.Project;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMl.Project;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMl.Project;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMl.Project>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMl.Project>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityMl.Project;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMl.Project;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMl.Project;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilityMl.Project;

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
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilityMl.Project;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityMl.Project;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityMl.Project;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityMl.Project;

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
    withoutFieldAtPath(path: string): ReliabilityMl.Project;

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
    withoutField(field: string): ReliabilityMl.Project;

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
    withoutField(field: FieldType): ReliabilityMl.Project;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilityMl.Project;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityMl.Project;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilityMl.Project;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityMl.Project;

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
    defaultField(field: string): ReliabilityMl.Project;

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
    defaultField(field: FieldType): ReliabilityMl.Project;

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
    unsetField(field: string): ReliabilityMl.Project;

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
    unsetField(field: FieldType): ReliabilityMl.Project;

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
    removeField(field: string): ReliabilityMl.Project;

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
    removeField(field: FieldType): ReliabilityMl.Project;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityMl.Project;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityMl.Project;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityMl.Project;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityMl.Project;

    mergeJson(json: any): ReliabilityMl.Project;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityMl.Project;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilityMl.Project;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilityMl.Project>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityMl.Project> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilityMl.Project> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilityMl.Project>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilityMl.Project> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilityMl.Project> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityMl.Project> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilityMl.Project>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilityMl.Project>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityMl.Project;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityMl.Project;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityMl.Project;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilityMl.Project;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityMl.Project;

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
    static make(fields: any, withDefaults?: boolean): ReliabilityMl.Project;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string): ReliabilityMl.Project | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityMl.Project;

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
    afterMake(): ReliabilityMl.Project;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilityMl.Project;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityMl.Project> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilityMl.Project;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
     *           of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(spec?: FetchSpec): FetchResult<ReliabilityMl.Project>;

    /**
     * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param filter
     *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(filter: Filter): FetchResult<ReliabilityMl.Project>;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
     * @return Requested obj stream.
     */
    static fetchObjStream(spec?: FetchStreamSpec): Stream<ReliabilityMl.Project> | null;

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
    static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<ReliabilityMl.Project>> | null;

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
    get(include?: string): ReliabilityMl.Project | null;

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
    getSpecific(include?: string): ReliabilityMl.Project | null;

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
    getMissing(spec: GetMissingSpec): ReliabilityMl.Project;

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
    getDirect(include?: string): ReliabilityMl.Project | null;

    /**
     * Applies a reverse edit (e.g. VersionEdit) to an instance.
     *
     * @param versionEdit
     *        Reverse edit to apply
     *
     * @return The instance after applying the reverse edit.
     */
    applyReverseEdit(versionEdit: VersionEdit): ReliabilityMl.Project;

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
    static fromString(s: string): ReliabilityMl.Project | null;

    /**
     * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance already exist.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
     *         will have only those fields populated. Otherwise only the id field will be populated.
     */
    create(spec?: UpsertSpec): ReliabilityMl.Project | null;

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
    static createBatch(objs: Array_Type<ReliabilityMl.Project>, spec?: UpsertSpec): ObjList<ReliabilityMl.Project> | null;

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
    static createBatchObjStream(objs: Stream<ReliabilityMl.Project>, spec?: CreateBatchObjStreamSpec): ObjList<ReliabilityMl.Project> | null;

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
    update(srcObj?: ReliabilityMl.Project, spec?: UpsertSpec): ReliabilityMl.Project | null;

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
    upsert(srcObj?: ReliabilityMl.Project, spec?: UpsertSpec): ReliabilityMl.Project | null;

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
    merge(spec?: MergeSpec): ReliabilityMl.Project | null;

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
    merge(mergeInclude: string, spec?: MergeSpec): ReliabilityMl.Project | null;

    /**
     * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     *
     * @return The created or updated obj.
     */
    touch(spec?: TouchSpec): ReliabilityMl.Project | null;

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
    static updateBatch(objs: Array_Type<ReliabilityMl.Project>, srcObjs?: Array_Type<ReliabilityMl.Project>, spec?: UpsertSpec): ObjList<ReliabilityMl.Project> | null;

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
    static updateObjs(objs: λSupplier<Array_Type<ReliabilityMl.Project> | null>, spec?: UpsertSpec): ObjList<ReliabilityMl.Project> | null;

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
    static upsertBatch(objs: Array_Type<ReliabilityMl.Project>, srcObjs?: Array_Type<ReliabilityMl.Project>, spec?: UpsertSpec): ObjList<ReliabilityMl.Project> | null;

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
    static upsertObjs(objs: λSupplier<Array_Type<ReliabilityMl.Project> | null>, spec?: UpsertSpec): ObjList<ReliabilityMl.Project> | null;

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
    static touchBatch(objs: Array_Type<ReliabilityMl.Project>, spec?: TouchSpec): ObjList<ReliabilityMl.Project> | null;

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
    static mergeBatch(objs: Array_Type<ReliabilityMl.Project>, spec?: MergeSpec): ObjList<ReliabilityMl.Project> | null;

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
    static mergeBatch(objs: Array_Type<ReliabilityMl.Project>, mergeInclude: string, spec?: MergeSpec): ObjList<ReliabilityMl.Project> | null;

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
    static mergeObjs(objs: λSupplier<Array_Type<ReliabilityMl.Project> | null>, mergeInclude: string, spec?: MergeSpec): ObjList<ReliabilityMl.Project> | null;

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
    static mergeAll(mergeObj: ReliabilityMl.Project, spec?: MergeAllSpec): number | null;

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
    static mergeAll(mergeObj: ReliabilityMl.Project, mergeInclude: string, spec?: MergeAllSpec): number | null;

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
    static removeBatch(objs: Array_Type<ReliabilityMl.Project>, spec?: UpsertSpec): ObjList<ReliabilityMl.Project> | null;

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
    static replace(objs: Array_Type<ReliabilityMl.Project>, spec?: UpsertSpec): ObjList<ReliabilityMl.Project> | null;

    /**
     * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
     * {@link removeBatch} functions). If the operation fails an exception will be thrown.
     *
     * @return The recovered obj instance with all of its fields populated.
     *
     * @see Ann.Db#archive
     */
    unremove(): ReliabilityMl.Project | null;

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
     * @inheritdoc
     */
    static beforeCreate(objs: Array_Type<ReliabilityMl.Project>): ObjList<ReliabilityMl.Project>;

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
    static beforeUpdate(objs: Array_Type<ReliabilityMl.Project>): ObjList<ReliabilityMl.Project>;

    /**
     * @inheritdoc
     */
    static beforeRemove(objs: Array_Type<ReliabilityMl.Project>): ObjList<ReliabilityMl.Project>;

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
    static afterCreate(objs: Array_Type<ReliabilityMl.Project>): Array_Type<ObjError> | null;

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
    static afterUpdate(objs: Array_Type<ReliabilityMl.Project>): Array_Type<ObjError> | null;

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
    static afterRemove(objs: Array_Type<ReliabilityMl.Project>): Array_Type<ObjError> | null;

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
    static startImportData(spec?: StartImportDataSpec): PushStream<ReliabilityMl.Project>;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportDataWithStats(spec?: StartImportDataSpec): PushStreamWithStats<ReliabilityMl.Project>;

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
    static forId(id: string, failIfMissing?: boolean): ReliabilityMl.Project | null;

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
    withoutIdentity(): ReliabilityMl.Project | null;

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
    static typeOfBatch(objs: Array_Type<ReliabilityMl.Project>): Array_Type<EntityType> | null;

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
    static dbEcho(template?: ReliabilityMl.Project, count?: number, sendBack?: boolean): number | null;

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
    static callbackLogic(objs: Array_Type<ReliabilityMl.Project>, callback?: λFunction<ReliabilityMl.Project | null, ReliabilityMl.Project | null>): ObjList<ReliabilityMl.Project>;

    /**
     * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
     * calling a transform for it.
     */
    static afterCallbackLogic(objs: Array_Type<ReliabilityMl.Project>, callback?: λFunction<ReliabilityMl.Project | null, ReliabilityMl.Project | null>): Array_Type<ObjError> | null;

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
     * Converts {@link BulkDataPreparationUiSettings} to a {@link ReliabilityMlDatasetPreparationSpec}.
     */
    dataPrepSettingsToSpec(settings?: BulkDataPreparationUiSettings): ReliabilityMlDatasetPreparationSpec | null;

    /**
     * Converts {@link BulkModelConfigUiSettings} to a {@link ReliabilityOrchestrator.TrainingJobSpec}.
     */
    modelConfigSettingsToSpec(settings?: BulkModelConfigUiSettings): ReliabilityOrchestrator.TrainingJobSpec | null;

    /**
     * Uses {@link BulkModelSetupUiSettings} to start a {@link ReliabilityOrchestrator.DatasetPreparationJob}.
     * Used as the action for a nested workflow vertex in the model setup workflow.
     */
    dataPrepSettingsToJobRun(settings?: BulkDataPreparationUiSettings): MlOperationRun<ReliabilityOrchestrator.DatasetPreparationJobRun> | null;

    /**
     * Uses {@link BulkModelConfigUiSettings} to start a {@link ReliabilityOrchestrator.TrainingJob}.
     * Used as the action for a nested workflow vertex in the model setup workflow.
     */
    modelConfigSettingsToJobRun(settings?: BulkModelConfigUiSettings, dataPrepJobRun?: ReliabilityOrchestrator.DatasetPreparationJobRun, modelConfigRun?: ModelConfigRun, hasPostTraining?: boolean): MlOperationRun<ReliabilityOrchestrator.TrainingJobRun> | null;

    /**
     * Function that depending on the {@link ReliabilityMl.Project} configuration, converts {@link BulkModelSetupUiSettings},
     * which contains the model setup configuration, to a {@link Workflow.Run} that can be started.
     */
    modelSetupSettingsToWorkflowRun(settings?: BulkModelSetupUiSettings): Workflow.Run | null;

    /**
     * Converts {@link BulkModelSetupUiSettings} to a {@link Workflow}, starts it, and returns the {@link Workflow.Run}
     *
     * Example:
     * ```javascript
     * const settings = BulkModelSetupUiSettings.make({
     *   modelName: "ExampleModel",
     *   parameters: { key: "value" },
     *   sensorData: ["sensor1", "sensor2"]
     * });
     * const workflowRun = ReliabilityMl.Project.OrchestratorHelper.agnosticModelSetupSettingsToWorkflowRun(settings);
     * console.log(workflowRun);
     * ```
     *
     * **NOTE**: Ensure that the `settings` object is properly populated before calling this function.
     *
     * @param settings
     *        The {@link BulkModelSetupUiSettings} object containing configuration for bulk model setup.
     * @returns A {@link Workflow.Run} object representing the workflow run created based on the provided settings.
     */
    agnosticModelSetupSettingsToWorkflowRun(settings?: BulkModelSetupUiSettings, modelConfigRun?: ModelConfigRun): Workflow.Run | null;

    /**
     * Helper function to create a {@link Workflow} for hyperparameter optimization
     * with the following structure:
     *
     * ```
     * ╭──────────────────────────────╮
     * │  ╭────────────────────────╮  │
     * │  │   Pipelines Creation   │  │
     * │  ╰────────────────────────╯  │
     * │               │              │
     * │               v              │
     * │  ╭────────────────────────╮  │
     * │  │     Model Training     │  │
     * │  ╰────────────────────────╯  │
     * │               │              │
     * │               v              │              ╭───────────────────────────────╮
     * │  ╭────────────────────────╮  │              │  Retire non-selected models,  │
     * │  │  Model Classification  │  │ $sucess ───> │  and update model config run  │
     * │  ╰────────────────────────╯  │              ╰───────────────────────────────╯
     * │               │              │
     * │               v              │
     * │  ╭────────────────────────╮  │
     * │  │  Best Model Selection  │  │
     * │  ╰────────────────────────╯  │
     * │               │              │
     * │               v              │
     * │  ╭────────────────────────╮  │
     * │  │    Model Validation    │  │
     * │  ╰────────────────────────╯  │
     * ╰──────────────────────────────╯
     * ```
     *
     * This method is used specifically for running hyperparameter optimization, using {@link ReliabilityOrchestrator.HpoSpec},
     * and creating the necessary {@link ModelConfigRun} to monitor the HPO process through the UI.
     */
    modelSetupSettingsToHpoWorkflowRun(settings?: BulkModelSetupUiSettings): Workflow.Run | null;

    /**
     * Starts a post-training job for the given training run.
     * Used as the action for a nested workflow vertex in the model setup workflow.
     */
    startPostTrainingJob(settings?: BulkModelConfigUiSettings, trainingRun?: ReliabilityOrchestrator.TrainingJobRun, modelConfigRun?: ModelConfigRun): MlOperationRun<ReliabilityOrchestrator.PostTrainingJobRun> | null;

    /**
     * Helper function to create a computational graph of the following nature:
     * ```
     * ----------------------                      -----------------------
     * |     (Optional)     |                      |                     |
     * | Sensor Association | $success ----------> | Dataset Preparation | $success ----|
     * |                    |                      |                     |              |
     * ----------------------                      -----------------------              |
     *                                                                                  |
     *                                                                                  |
     *         -----------------------                     ------------------           |
     *         |                     |                     |                |           |
     *         | Post Model Training | <--------- $success | Model Training | <---------|
     *         |                     |                     |                |
     *         -----------------------                     ------------------
     * ```
     *
     * @param assetFilter
     *        The {@link Filter} of {@link ReliabilityAsset}s on which to run model training.
     * @param sensorAssociationJobId
     *        The {@link ReliabilityAssetSensorAssociationJob}, based on whose results, a dataset will be prepared for model training.
     * @param datasetPreparationSpec
     *        The {@link ReliabilityMlDatasetPreparationSpec}, according to which the dataset will be prepared.
     * @param modelTrainingSpecs
     *        A list of {@link ReliabilityOrchestrator.TrainingJobSpec}s, which determine which {@link ReliabilityMlModel}s to train for the `assetFilter`
     * @param postModelTrainingSpec
     *        The {@link ReliabilityOrchestrator.PostTrainingJobSpec}, according to which post-model training actions such as model classification, model validation, and model reporting are executed
     * @param sensorAssociationSpec
     *        An optional {@link ReliabilityOrchestrator.SensorAssociation}, based on which, a {@link ReliabilityAssetSensorAssociationJob} will be run BEFORE executing dataset preparation and downstream model training.
     * @param datasetPreparationOptions
     *        The {@link ReliabilityOrchestrator.JobOptions} that controls the distributed nature of the dataset preparation job.
     * @param modelTrainingOptions
     *        The {@link ReliabilityOrchestrator.JobOptions} that controls the distributed nature of the model training job.
     * @param postModelTrainingOptions
     *        The {@link ReliabilityOrchestrator.JobOptions} that controls the distributed nature of the post-model training job.
     * @param modelConfigRun
     *        An optional {@link ModelConfigRun} to track the status of this {@link Workflow} in the UI.
     * @param datasetPreparationTrackingJobId
     *        An optional id to set for the underlying {@link ReliabilityMlDatasetPreparationJob} used to track status.
     * @param id
     *        The id of the {@link Workflow}.
     * @param name
     *        The name of the {@link Workflow}. If no name is provided, a default name is used.
     * @return a {@link Workflow}, that executes the above computational graph.
     */
    createWorkflowForModelTrainingWithSensorAssociation(assetFilter: string, sensorAssociationJobId: string, datasetPreparationSpec: ReliabilityMlDatasetPreparationSpec, modelTrainingSpecs: Array_Type<ReliabilityOrchestrator.TrainingJobSpec>, postModelTrainingSpec: ReliabilityOrchestrator.PostTrainingJobSpec, sensorAssociationSpec?: ReliabilityOrchestrator.SensorAssociation, datasetPreparationOptions?: ReliabilityOrchestrator.JobOptions, modelTrainingOptions?: ReliabilityOrchestrator.JobOptions, postModelTrainingOptions?: ReliabilityOrchestrator.JobOptions, modelConfigRun?: ModelConfigRun, datasetPreparationTrackingJobId?: string, id?: string, name?: string): Workflow;

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
     * Validate if the {@link ReliabilityMl.Project} object is acceptable.
     * Performs the below checks:
     * 1. Are all {@link ModelTemplate}s upserted?
     * 2. Is the `defaultModelTemplate` one among the provided {@link ModelTemplate}s?
     * 3. Do all provided {@link ModelTemplate}s have the same `primaryModelOutputs` as is defined on the {@link ReliabilityMl.Project}?
     *
     * If the answer to any of the above questions is `NO`, then the validation
     * fails.
     */
    validate(): void;

    /**
     * Helper function to create a {@link ReliabilityMl.Project}. It {@link validate}s
     * that all provided arguments are compatible with the project the user intends to
     * create.
     */
    static createProject(id: string, name: string, description: string, assetFilter: string, featureOutputs?: Map_Type<string, Map_Type<string, string>>, displayedModelOutput?: string, algorithmOutputs?: Array_Type<string>, alertOutputs: Array_Type<string>, modelTemplates: Array_Type<string>, defaultModelTemplate: string, getInferencePeriodForAssetLambda?: Lambda<function(asset: ReliabilityAsset, inferencePeriod: TimeRange, project: ReliabilityMl.Project, statusLabel?: string): TimeRange>, processAlertsForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model?: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetAlert> | null>, processValidationAlertsForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetValidationAlert> | null>, classifyModelForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): ReliabilityMlModel.ClassificationScore | null>, reportModelForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): File>, addModelOutputsForModelValidationChartLambda?: Lambda<function(model?: any, datasetPreparationRun?: any, datasetData?: any): any | null>, getThresholdsForModelValidationChartLambda?: Lambda<function(model?: any): any | null>, getAlertThresholdsLambda?: Lambda<function(model?: any): any | null>, processAlertSimilarityLambda?: Lambda<function(alert: ReliabilityAssetAlert): any | null>): ReliabilityMl.Project;

    /**
     * Post-creation of the {@link ReliabilityMl.Project}, there may be a need
     * to edit some of its characteristics. This is the helper function to edit
     * these routines. Note that not all attributes of a project may be
     * updated. To change these attributes, a new project will have to be created.
     */
    updateProject(assetFilter?: string, modelTemplates?: Array_Type<string>, defaultModelTemplate?: string, getInferencePeriodForAssetLambda?: Lambda<function(asset: ReliabilityAsset, inferencePeriod: TimeRange, project: ReliabilityMl.Project, statusLabel?: string): TimeRange>, processAlertsForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model?: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetAlert> | null>, processValidationAlertsForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, asset: ReliabilityAsset, timeRange: TimeRange, model: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetValidationAlert> | null>, classifyModelForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): ReliabilityMlModel.ClassificationScore | null>, reportModelForAssetLambda?: Lambda<function(project: ReliabilityMl.Project, model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): File>): ReliabilityMl.Project;

    /**
     * Helper function to add {@link ModelTemplate}s to the list of model templates
     * already defined on the {@link ReliabilityMl.Project}.
     */
    addModelTemplates(modelTemplates: Array_Type<string>): ReliabilityMl.Project;

    /**
     * Helper function to create a replica of this {@link ReliabilityMl.Project}.
     * This will create a new project with many of the same attributes as the
     * original project. However, some attributes may be changed.
     */
    replicate(id: string, name: string, description?: string, assetFilter?: string, modelTemplates?: Array_Type<string>, defaultModelTemplate?: string): ReliabilityMl.Project;

    /**
     * This function returns the modified inference period for a given asset, provided an input
     * inference period. For example, instead of running inference on the provided inference
     * time period, the function may be modified such that inference may be run for a given asset
     * starting from the timestamp of its latest persisted prediction in the database.
     *
     * However, do NOT modify this function directly. Instead, provide a {@link Lambda} in the
     * {@link getInferencePeriodForAssetLambda}. This function will run that {@link Lambda}, if
     * provided. Else, the default behavior is to simply return the `inferencePeriod`.
     */
    getInferencePeriodForAsset(asset: ReliabilityAsset, inferencePeriod: TimeRange, statusLabel?: string, overrideInferencePeriodForInference?: boolean): TimeRange;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate {@link ReliabilityAssetAlert}s for
     * your {@link ReliabilityMl.Project}.
     *
     * However, do NOT modify this function directly. Instead, provide a {@link Lambda} in the
     * {@link processAlertsForAssetLambda}. This function will run that {@link Lambda}, if
     * provided. Else, the default behavior will not generate any alerts.
     */
    processAlertsForAsset(asset: ReliabilityAsset, timeRange: TimeRange, model?: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetAlert> | null;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate {@link ReliabilityAssetValidationAlert}s for
     * your {@link ReliabilityMl.Project}.
     *
     * However, do NOT modify this function directly. Instead, provide a {@link Lambda} in the
     * {@link processValidationAlertsForAssetLambda}. This function will run that {@link Lambda}, if
     * provided. Else, the default behavior will not generate any alerts.
     */
    processValidationAlertsForAsset(asset: ReliabilityAsset, timeRange: TimeRange, model: ReliabilityMlModel, doNotPersist?: boolean): Array_Type<ReliabilityAssetValidationAlert> | null;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate and return a
     * {@link ReliabilityMlModel.ClassificationScore} for your {@link ReliabilityMl.Project},
     * for a given {@link ReliabilityMlModel} and {@link ReliabilityAsset}.
     *
     * NOTE: `referenceModelOutput` and `comparisonModelOutput` contains the model's predictions and
     * feature contributions for the asset, generated for the referenceTimeRange and comparisonTimeRange passed into the post training
     * or model monitoring job. They should be used to compare the model's performance over the two periods, to generate the
     * classification score.
     * You can also use the dataset preparation run to evaluate the features and masks on your input data, if that is
     * required for the classification logic that you choose to implement.
     *
     * However, do NOT modify this function directly. Instead, provide a {@link Lambda} in the
     * {@link classifyModelForAssetLambda}. This function will run that {@link Lambda}, if provided. Else, the default
     * behavior will not generate any classification scores.
     */
    classifyModelForAsset(model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): ReliabilityMlModel.ClassificationScore | null;

    /**
     * Implement this {@link Lambda} function to implement the logic to generate and return a {@link File} that contains
     * a report for a given {@link ReliabilityMlModel} and {@link ReliabilityAsset}, for your {@link ReliabilityMl.Project}.
     *
     * NOTE: `referenceModelOutput` and `comparisonModelOutput` contains the model's predictions and
     * feature contributions for the asset, generated for the referenceTimeRange and comparisonTimeRange passed into the post training job.
     * You can also use the dataset preparation run to evaluate the features and masks on your input data, if that is required for the
     * reporting logic that you choose to implement.
     *
     * However, do NOT modify this function directly. Instead, provide a {@link Lambda} in the
     * {@link reportModelForAssetLambda}. This function will run that {@link Lambda}, if provided. Else, the default
     * behavior will not generate any reports.
     */
    reportModelForAsset(model: ReliabilityMlModel, asset: ReliabilityAsset, datasetPreparationRun?: ReliabilityMlDatasetPreparationRun, referenceModelOutput: ReliabilityMl.ModelOutput, comparisonModelOutput: ReliabilityMl.ModelOutput): File;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
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

// TypeScript definitions for the C3 type ReliabilityRiskMl.ControlValvesReconstructionPipeline

/**
 * This type represents a pipeline that extends {@link ReliabilityRiskMl.ReconstructionPipeline} and is used to
 * train and deploy a pipeline specifically for control valves, with the help of the {@link ControlValvesModelableMethods}
 * interface that defines the concrete implementations for training and processing the {@link reconstructionPipe},
 * {@link riskScorePipe}, and generating feature contributions from the {@link interpreter}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityRiskMl.ControlValvesReconstructionPipeline
 */
declare namespace ReliabilityRiskMl {
  export interface IControlValvesReconstructionPipeline<DX, DY, DO> {

    /**
     * List of all vertices in this graph.
     */
    vertices?: Array_Type<MlPipeline.Vertex> | Array<IMlPipeline.Vertex>;

    /**
     * List of all edges in this graph.
     */
    edges?: Array_Type<FlowGraph.Edge<MlPipeline.Vertex>> | Array<IFlowGraph.Edge<MlPipeline.Vertex>>;

    /**
     * Optimized double-linked-list-like data structure for traversing next and previous vertices. See {@link #precomputeVertexConnections}
     * to opt-in to using this data structure. This representation is more beneficial to use when heavily using the
     * `next*` and `prev*` methods.
     *
     * Outer map:
     * Key - vertex string id
     * Value - mapping of ports to vertices, i.e. "Inner map"
     *
     * Inner map:
     * Key - port string name
     * Value - [vertex string id for vertices connected to port]
     *         OR if key is "$self", then the vertex instance corresponding to the outer map key
     *
     * Example:
     * ```
     * const1 -----\            /---- action2
     *              action1 ----
     * const2 -----/            \---- action3
     * ```
     * The `vertexConnections` map would look like:
     * ```
     * {
     *   "const1": {
     *     "$self": < Workflow.Const, id="const1" >,
     *     "output": ["action1"]
     *   },
     *   "const2": {
     *     "$self": < Workflow.Const, id="const2" >,
     *     "output": ["action1"]
     *   },
     *   "action1": {
     *     "$self": < Workflow.Action, id="action1" >,
     *     "inputA": ["const1"],
     *     "inputB": ["const2"],
     *     "output": ["action2", "action3"]
     *   },
     *   "action2": {
     *     "$self": < Workflow.Action, id="action2" >,
     *     "input": ["action1"]
     *   },
     *   "action3": {
     *     "$self": < Workflow.Action, id="action3" >,
     *     "input": ["action1"]
     *   },
     * }
     * ```
     */
    vertexConnections?: Map_Type<string, Map_Type<string, any>> | {[key: string]: Map_Type<string, any> | {[key: string]: any}};

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
     * Name of this pipe.
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
     * If true, then the pipe shall not be retrained
     */
    frozen?: boolean;

    /**
     * True if training has succeeded and false otherwise.
     */
    trained?: boolean;

    /**
     * Errors from training.
     */
    trainingErrors?: string;

    /**
     * If true, the underlying model only accepts flattened input.
     */
    flattenInput?: boolean;

    /**
     * The hyperparameters overridden of a native model or pipe.
     */
    hyperparamOverrides?: Map_Type<string, any> | {[key: string]: any};

    /**
     * A collection of {@link Hp.ParamSpace}s for the hyperparameters of this pipe. This search space will be used to
     * perform hyperparameter searches.
     */
    hyperparamSearchSpace?: IHp.SearchSpace;

    /**
     * Used to provide configuration for {@link #search}. Some configurations include how to validate results, which
     * search algorithms will be used, and limits on execution iterations.
     */
    hpoSpec?: IHpo.Spec;

    /**
     * {@link Hpo.Experiment} stores the result of hyperparameter optimization to find the best model/pipeline.
     */
    hpoExperiment?: IHpo.Experiment;

    /**
     * Reference to the experiment that produced this {@link MlPipe}. For example, this could be a {@link Hpo.ExperimentBase}.
     */
    experiment?: any;

    /**
     * Names of the {@link #score} outputs for this machine learning pipeline.
     */
    scoreNames?: Set_Type<string> | Array<string>;

    /**
     * Single workflow run triggered by training of this {@link MlPipeline}.
     *
     * NOTE: due to the immutability of pipelines, each training produces a new instance, which means that each pipeline
     * instance can only be associated with a single training run.
     * Also, keep in mind that a {@link WorkflowExecutorRun} might be periodically cleaned up, so this reference might
     * not be always resolvable.
     */
    trainRun?: IWorkflowExecutorRun;

    /**
     * Status of {@link #trainRun}. Holds important meta information (e.g. `startedby`) that needs to be persisted with this pipeline,
     * even if the {@link #trainRun} reference is eventually cleaned up.
     */
    trainStatus?: IWorkflow.Status;

    /**
     * Controls the behavior of {@link MlPipeline#beforeMake}
     * If set, all the {@link MlPipe}s referenced by this {@link MlPipeline} are not upserted.
     */
    doNotAutoUpsert?: boolean;

    /**
     * The total lookback duration of all pipes in this pipeline. Used for internal data handling in the model
     * deployment framework.
     */
    lookbackDuration?: IDuration;

    /**
     * If set, the {@link #riskScorePipe} must accept a `target` as an input.
     */
    hasTarget?: boolean;

    /**
     * The masking pipe is responsible for outputting a new feature set given a feature set and a mask. The specified pipe
     * must accept as input a {@link Tuple} of `features` and `mask`, and must output `maskedFeatures`. If no pipe is
     * specified, the default {@link ReliabilityRiskMl.Masking.SemisupervisedMaskingPipe} will be used.
     */
    maskingPipe: IMlPipe<any, any, any, any, any>;

    /**
     * The alerting pipe is responsible for outputting an `alert` based on risk score data. The specified pipe must accept
     * as input a single {@link Data} and output a {@link Data} with a key specified by {@link ReliabilityMLOutputConfig}.
     * If no pipe is specified, the default {@link ReliabilityRiskMl.Alerting.PercentileDurationPipe} will be used.
     */
    alertingPipe: IMlPipe<any, any, any, any, any>;

    /**
     * The risk score pipe is responsible for outputting a risk score based on an input feature set. The specified pipe
     * must accept as input a single {@link Data} and output a {@link Data} with a key specified by
     * {@link ReliabilityMLOutputConfig}. If no pipe is specified, the default
     * {@link ReliabilityRiskMl.RiskScoreComputation.SigmoidWeightedComputationPipe} will be used.
     */
    riskScorePipe: IMlPipe<any, any, any, any, any>;

    /**
     * The risk score normalization pipe is responsible for scaling risk score values to be between 0 and 1. The specified
     * pipe must accept a single {@link Data} as input and output a {@link Data} with a key specified by
     * {@link ReliabilityMLOutputConfig}. If no pipe is specified, the default
     * {@link ReliabilityRiskMl.RiskScoreScaling.ThresholdScalerPipe} will be used.
     */
    riskScoreNormalizationPipe: IMlPipe<any, any, any, any, any>;

    /**
     * The interpreter is responsible for interpreting the {@link #riskScorePipe}. If you are using a custom riskScorePipe,
     * please make sure to provide your custom interpreter for it here. On the other hand, if your riskScorePipe is
     * {@link ReliabilityRiskMl.RiskScoreComputation.SimpleComputationPipe},
     * {@link ReliabilityRiskMl.RiskScoreComputation.WeightedComputationPipe},
     * {@link ReliabilityRiskMl.RiskScoreComputation.DirectionallyWeightedComputationPipe} or
     * {@link ReliabilityRiskMl.RiskScoreComputation.SigmoidWeightedComputationPipe}, their corresponding
     * interpreters ({@link ReliabilityRiskMl.Pipeline.Interpreter.SimpleResidualInterpreter},
     * {@link ReliabilityRiskMl.Pipeline.Interpreter.WeightedResidualInterpreter},
     * {@link ReliabilityRiskMl.Pipeline.Interpreter.DirectionallyWeightedResidualInterpreter}) or
     * {@link ReliabilityRiskMl.Pipeline.Interpreter.SigmoidWeightedResidualInterpreter} will be used
     * automatically.
     */
    interpreter?: IMlInterpreter<any, any>;

    /**
     * A map of user-specified {@link ReliabilityRiskMl.Pipeline.ScoringMetric} instances for scoring. The keys
     * of the map should be the user-specified names of the metrics, and the values should be the actual
     * {@link ReliabilityRiskMl.Pipeline.ScoringMetric} instances.
     */
    pipelineScoringMetrics?: Map_Type<string, ReliabilityRiskMl.Pipeline.ScoringMetric> | {[key: string]: IReliabilityRiskMl.Pipeline.ScoringMetric};

    /**
     * A list of all the categories of masks that must be applied to remove rows from
     * the features data while training the pipeline.
     * There are, overall, 7 types of masks. By default, 6 of them will be applied to
     * remove unwanted rows from the features dataset to train the model.
     * Change this field to construct a pipeline which will mask out only the data you want.
     */
    trainingMasks?: Array_Type<string> | Array<string>;

    /**
     * A list of all the categories of masks that must be applied to remove rows from
     * the features data while performing pipeline inference.
     * There are, overall, 7 types of masks. By default, 4 of them will be applied to
     * remove unwanted rows from the features dataset to run model inference.
     * Change this field to construct a pipeline which will mask out only the data you want.
     */
    inferenceMasks?: Array_Type<string> | Array<string>;

    /**
     * If set, the {@link #reconstructionPipe} must also include `latentProjection` in its output.
     */
    includeLatentProjection?: boolean;

    /**
     * If set to false, the {@link scalerPipe} will scale the input data before training the {@link #reconstructionPipe}. At
     * inference time, it will also re-scale the output of {@link #reconstructionPipe} back to original scales of input
     * data
     */
    doNotApplyScaling?: boolean;

    /**
     * The scaler pipe is responsible for scaling the input data before training the {@link #reconstructionPipe}. At
     * inference time, it will also re-scale the outputs of {@link #reconstructionPipe} back to original scales of input
     * data. If no pipe is specified, an {@link MlPipe} converted from a native sklearn standard scaler will be used.
     * If you want to use a different scaler, please make sure the native model has an "inverse_transform" method that
     * can be used to re-scale the reconstructions.
     */
    scalerPipe?: IMlPipe<any, any, any, any, any>;

    /**
     * The reconstruction pipe is responsible for outputting a reconstruction of the original input, which may or may not
     * be from the latent encoding of the original input, and a residual between the input and reconstruction. The
     * specified pipe must accept a single {@link Data} as input and output {@link Tuple} of `reconstructions` and
     * `residuals`. If no pipe is specified, the default {@link ReliabilityRiskMl.Reconstruction.Conv1dAutoencoderPipe}
     * will be used.
     */
    reconstructionPipe: IMlPipe<any, any, any, any, any>;

    /**
     * A map of user-specified {@link ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric} instances for scoring.
     * For {@link ReliabilityRiskMl.ReconstructionPipeline}, use this field instead of {@link pipelineScoringMetrics}
     * to score. The keys of the map should be the user-specified names of the metrics, and the values should be the
     * actual {@link ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric} instances.
     *
     * Default:
     * ```py
     * {'mae': c3.ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric(
     *    actualScoringMetric = c3.MlMeanAbsoluteErrorMetric(),
     *    outputsToSelect = ['scaledReconstructions'],
     *    targetsToSelect = ['scaledFeatures']
     * )}
     * ```
     */
    reconstructionPipelineScoringMetrics?: Map_Type<string, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric> | {[key: string]: IReliabilityRiskMl.ReconstructionPipeline.ScoringMetric};

    /**
     * The pipe that should be passed to the interpreter to generate feature contributions. By default, the {@link riskScorePipe}
     * is used to generate feature contributions.
     */
    pipeToInterpret?: string;

    /**
     * Use this field to specify the approach to use for training and processing the {@link reconstructionPipe},
     * the {@link riskScorePipe} and generating feature contributions from the {@link interpreter}.
     *
     * Out of the box, the {@link ControlValvesModelableBase} and the {@link ControlValvesModelable} approaches are
     * provided for modeling control valves.
     */
    controlValvesModelable: IControlValvesModelableMethods;
  }
}

/**
 * This type represents a pipeline that extends {@link ReliabilityRiskMl.ReconstructionPipeline} and is used to
 * train and deploy a pipeline specifically for control valves, with the help of the {@link ControlValvesModelableMethods}
 * interface that defines the concrete implementations for training and processing the {@link reconstructionPipe},
 * {@link riskScorePipe}, and generating feature contributions from the {@link interpreter}.
 *
 * @remarks this represents a made instance of ReliabilityRiskMl.ControlValvesReconstructionPipeline
 */
declare namespace ReliabilityRiskMl {
  export class ControlValvesReconstructionPipeline<DX, DY, DO> extends Obj  {

    /**
     * List of all vertices in this graph.
     */
    readonly vertices?: Array_Type<MlPipeline.Vertex>;
    withVertices(vertices: Array_Type<MlPipeline.Vertex> | Array<IMlPipeline.Vertex> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * List of all edges in this graph.
     */
    readonly edges?: Array_Type<FlowGraph.Edge<MlPipeline.Vertex>>;
    withEdges(edges: Array_Type<FlowGraph.Edge<MlPipeline.Vertex>> | Array<IFlowGraph.Edge<MlPipeline.Vertex>> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Optimized double-linked-list-like data structure for traversing next and previous vertices. See {@link #precomputeVertexConnections}
     * to opt-in to using this data structure. This representation is more beneficial to use when heavily using the
     * `next*` and `prev*` methods.
     *
     * Outer map:
     * Key - vertex string id
     * Value - mapping of ports to vertices, i.e. "Inner map"
     *
     * Inner map:
     * Key - port string name
     * Value - [vertex string id for vertices connected to port]
     *         OR if key is "$self", then the vertex instance corresponding to the outer map key
     *
     * Example:
     * ```
     * const1 -----\            /---- action2
     *              action1 ----
     * const2 -----/            \---- action3
     * ```
     * The `vertexConnections` map would look like:
     * ```
     * {
     *   "const1": {
     *     "$self": < Workflow.Const, id="const1" >,
     *     "output": ["action1"]
     *   },
     *   "const2": {
     *     "$self": < Workflow.Const, id="const2" >,
     *     "output": ["action1"]
     *   },
     *   "action1": {
     *     "$self": < Workflow.Action, id="action1" >,
     *     "inputA": ["const1"],
     *     "inputB": ["const2"],
     *     "output": ["action2", "action3"]
     *   },
     *   "action2": {
     *     "$self": < Workflow.Action, id="action2" >,
     *     "input": ["action1"]
     *   },
     *   "action3": {
     *     "$self": < Workflow.Action, id="action3" >,
     *     "input": ["action1"]
     *   },
     * }
     * ```
     */
    readonly vertexConnections?: Map_Type<string, Map_Type<string, any>>;
    withVertexConnections(vertexConnections: Map_Type<string, Map_Type<string, any>> | {[key: string]: Map_Type<string, any> | {[key: string]: any}} | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * A unique identifier that can be manually assigned or generated automatically during object creation. This
     * identifier cannot be altered after the object has been persisted.
     */
    readonly id: string;
    withId(id: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    readonly versionEdits?: Array_Type<VersionEdit>;
    withVersionEdits(versionEdits: Array_Type<VersionEdit> | Array<IVersionEdit> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Name of this pipe.
     */
    readonly name?: string;
    withName(name: string | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Various system fields.
     */
    readonly meta?: Meta;
    withMeta(meta: IMeta | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    readonly version?: number;
    withVersion(version: number | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    readonly typeWithBindings?: Type;
    withTypeWithBindings(typeWithBindings: IType | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * System managed field that keeps track of which fields in the seed data obj were updated by a user (as opposed to
     * the provisioner/authorizer).  Fields in seed data objs that are updated by users will not have those changes
     * overridden by provisioning.
     */
    readonly userUpdatedFields?: Array_Type<string>;
    withUserUpdatedFields(userUpdatedFields: Array_Type<string> | Array<string> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Field that marks a seed data obj as hidden.  When a seed data obj that was created via provisioning (e.g owned by
     * c3), user removals of that obj are handled by marking the obj as hidden to prevent future provisioning from causing
     * them to reappear.
     */
    readonly hidden?: boolean;
    withHidden(hidden: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * A seed data entry is considered to be user owned if either this flag is true or the {@link Meta#created created}
     * field of {@link Persistable#meta} is not the authorizer or provisioner.  This field is completely managed by the
     * system.  It will be set while creating an entry if it is being created by the authorizer and the
     * {@link UpsertSpec#forceUserUpdate} is set to true.
     */
    readonly userOwned?: boolean;
    withUserOwned(userOwned: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Indicates explicit sub-type of entry.  Composed of the concatenation of the typeKey of the instance's type and all
     * of its base type's typeIdent
     */
    readonly typeIdent?: string;
    withTypeIdent(typeIdent: string | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * If true, then the pipe shall not be retrained
     */
    readonly frozen?: boolean;
    withFrozen(frozen: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * True if training has succeeded and false otherwise.
     */
    readonly trained?: boolean;
    withTrained(trained: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Errors from training.
     */
    readonly trainingErrors?: string;
    withTrainingErrors(trainingErrors: string | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * If true, the underlying model only accepts flattened input.
     */
    readonly flattenInput?: boolean;
    withFlattenInput(flattenInput: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The hyperparameters overridden of a native model or pipe.
     */
    readonly hyperparamOverrides?: Map_Type<string, any>;
    withHyperparamOverrides(hyperparamOverrides: Map_Type<string, any> | {[key: string]: any} | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * A collection of {@link Hp.ParamSpace}s for the hyperparameters of this pipe. This search space will be used to
     * perform hyperparameter searches.
     */
    readonly hyperparamSearchSpace?: Hp.SearchSpace;
    withHyperparamSearchSpace(hyperparamSearchSpace: IHp.SearchSpace | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Used to provide configuration for {@link #search}. Some configurations include how to validate results, which
     * search algorithms will be used, and limits on execution iterations.
     */
    readonly hpoSpec?: Hpo.Spec;
    withHpoSpec(hpoSpec: IHpo.Spec | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * {@link Hpo.Experiment} stores the result of hyperparameter optimization to find the best model/pipeline.
     */
    readonly hpoExperiment?: Hpo.Experiment;
    withHpoExperiment(hpoExperiment: IHpo.Experiment | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Reference to the experiment that produced this {@link MlPipe}. For example, this could be a {@link Hpo.ExperimentBase}.
     */
    readonly experiment?: any;
    withExperiment(experiment: any | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Names of the {@link #score} outputs for this machine learning pipeline.
     */
    readonly scoreNames?: Set_Type<string>;
    withScoreNames(scoreNames: Set_Type<string> | Array<string> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Single workflow run triggered by training of this {@link MlPipeline}.
     *
     * NOTE: due to the immutability of pipelines, each training produces a new instance, which means that each pipeline
     * instance can only be associated with a single training run.
     * Also, keep in mind that a {@link WorkflowExecutorRun} might be periodically cleaned up, so this reference might
     * not be always resolvable.
     */
    readonly trainRun?: WorkflowExecutorRun;
    withTrainRun(trainRun: IWorkflowExecutorRun | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Status of {@link #trainRun}. Holds important meta information (e.g. `startedby`) that needs to be persisted with this pipeline,
     * even if the {@link #trainRun} reference is eventually cleaned up.
     */
    readonly trainStatus?: Workflow.Status;
    withTrainStatus(trainStatus: IWorkflow.Status | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Controls the behavior of {@link MlPipeline#beforeMake}
     * If set, all the {@link MlPipe}s referenced by this {@link MlPipeline} are not upserted.
     */
    readonly doNotAutoUpsert?: boolean;
    withDoNotAutoUpsert(doNotAutoUpsert: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The total lookback duration of all pipes in this pipeline. Used for internal data handling in the model
     * deployment framework.
     */
    readonly lookbackDuration?: Duration;
    withLookbackDuration(lookbackDuration: IDuration | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * If set, the {@link #riskScorePipe} must accept a `target` as an input.
     */
    readonly hasTarget?: boolean;
    withHasTarget(hasTarget: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The masking pipe is responsible for outputting a new feature set given a feature set and a mask. The specified pipe
     * must accept as input a {@link Tuple} of `features` and `mask`, and must output `maskedFeatures`. If no pipe is
     * specified, the default {@link ReliabilityRiskMl.Masking.SemisupervisedMaskingPipe} will be used.
     */
    readonly maskingPipe: MlPipe<any, any, any, any, any>;
    withMaskingPipe(maskingPipe: IMlPipe<any, any, any, any, any>): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The alerting pipe is responsible for outputting an `alert` based on risk score data. The specified pipe must accept
     * as input a single {@link Data} and output a {@link Data} with a key specified by {@link ReliabilityMLOutputConfig}.
     * If no pipe is specified, the default {@link ReliabilityRiskMl.Alerting.PercentileDurationPipe} will be used.
     */
    readonly alertingPipe: MlPipe<any, any, any, any, any>;
    withAlertingPipe(alertingPipe: IMlPipe<any, any, any, any, any>): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The risk score pipe is responsible for outputting a risk score based on an input feature set. The specified pipe
     * must accept as input a single {@link Data} and output a {@link Data} with a key specified by
     * {@link ReliabilityMLOutputConfig}. If no pipe is specified, the default
     * {@link ReliabilityRiskMl.RiskScoreComputation.SigmoidWeightedComputationPipe} will be used.
     */
    readonly riskScorePipe: MlPipe<any, any, any, any, any>;
    withRiskScorePipe(riskScorePipe: IMlPipe<any, any, any, any, any>): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The risk score normalization pipe is responsible for scaling risk score values to be between 0 and 1. The specified
     * pipe must accept a single {@link Data} as input and output a {@link Data} with a key specified by
     * {@link ReliabilityMLOutputConfig}. If no pipe is specified, the default
     * {@link ReliabilityRiskMl.RiskScoreScaling.ThresholdScalerPipe} will be used.
     */
    readonly riskScoreNormalizationPipe: MlPipe<any, any, any, any, any>;
    withRiskScoreNormalizationPipe(riskScoreNormalizationPipe: IMlPipe<any, any, any, any, any>): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The interpreter is responsible for interpreting the {@link #riskScorePipe}. If you are using a custom riskScorePipe,
     * please make sure to provide your custom interpreter for it here. On the other hand, if your riskScorePipe is
     * {@link ReliabilityRiskMl.RiskScoreComputation.SimpleComputationPipe},
     * {@link ReliabilityRiskMl.RiskScoreComputation.WeightedComputationPipe},
     * {@link ReliabilityRiskMl.RiskScoreComputation.DirectionallyWeightedComputationPipe} or
     * {@link ReliabilityRiskMl.RiskScoreComputation.SigmoidWeightedComputationPipe}, their corresponding
     * interpreters ({@link ReliabilityRiskMl.Pipeline.Interpreter.SimpleResidualInterpreter},
     * {@link ReliabilityRiskMl.Pipeline.Interpreter.WeightedResidualInterpreter},
     * {@link ReliabilityRiskMl.Pipeline.Interpreter.DirectionallyWeightedResidualInterpreter}) or
     * {@link ReliabilityRiskMl.Pipeline.Interpreter.SigmoidWeightedResidualInterpreter} will be used
     * automatically.
     */
    readonly interpreter?: MlInterpreter<any, any>;
    withInterpreter(interpreter: IMlInterpreter<any, any> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * A map of user-specified {@link ReliabilityRiskMl.Pipeline.ScoringMetric} instances for scoring. The keys
     * of the map should be the user-specified names of the metrics, and the values should be the actual
     * {@link ReliabilityRiskMl.Pipeline.ScoringMetric} instances.
     */
    readonly pipelineScoringMetrics?: Map_Type<string, ReliabilityRiskMl.Pipeline.ScoringMetric>;
    withPipelineScoringMetrics(pipelineScoringMetrics: Map_Type<string, ReliabilityRiskMl.Pipeline.ScoringMetric> | {[key: string]: IReliabilityRiskMl.Pipeline.ScoringMetric} | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * A list of all the categories of masks that must be applied to remove rows from
     * the features data while training the pipeline.
     * There are, overall, 7 types of masks. By default, 6 of them will be applied to
     * remove unwanted rows from the features dataset to train the model.
     * Change this field to construct a pipeline which will mask out only the data you want.
     */
    readonly trainingMasks?: Array_Type<string>;
    withTrainingMasks(trainingMasks: Array_Type<string> | Array<string> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * A list of all the categories of masks that must be applied to remove rows from
     * the features data while performing pipeline inference.
     * There are, overall, 7 types of masks. By default, 4 of them will be applied to
     * remove unwanted rows from the features dataset to run model inference.
     * Change this field to construct a pipeline which will mask out only the data you want.
     */
    readonly inferenceMasks?: Array_Type<string>;
    withInferenceMasks(inferenceMasks: Array_Type<string> | Array<string> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * If set, the {@link #reconstructionPipe} must also include `latentProjection` in its output.
     */
    readonly includeLatentProjection?: boolean;
    withIncludeLatentProjection(includeLatentProjection: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * If set to false, the {@link scalerPipe} will scale the input data before training the {@link #reconstructionPipe}. At
     * inference time, it will also re-scale the output of {@link #reconstructionPipe} back to original scales of input
     * data
     */
    readonly doNotApplyScaling?: boolean;
    withDoNotApplyScaling(doNotApplyScaling: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The scaler pipe is responsible for scaling the input data before training the {@link #reconstructionPipe}. At
     * inference time, it will also re-scale the outputs of {@link #reconstructionPipe} back to original scales of input
     * data. If no pipe is specified, an {@link MlPipe} converted from a native sklearn standard scaler will be used.
     * If you want to use a different scaler, please make sure the native model has an "inverse_transform" method that
     * can be used to re-scale the reconstructions.
     */
    readonly scalerPipe?: MlPipe<any, any, any, any, any>;
    withScalerPipe(scalerPipe: IMlPipe<any, any, any, any, any> | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The reconstruction pipe is responsible for outputting a reconstruction of the original input, which may or may not
     * be from the latent encoding of the original input, and a residual between the input and reconstruction. The
     * specified pipe must accept a single {@link Data} as input and output {@link Tuple} of `reconstructions` and
     * `residuals`. If no pipe is specified, the default {@link ReliabilityRiskMl.Reconstruction.Conv1dAutoencoderPipe}
     * will be used.
     */
    readonly reconstructionPipe: MlPipe<any, any, any, any, any>;
    withReconstructionPipe(reconstructionPipe: IMlPipe<any, any, any, any, any>): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * A map of user-specified {@link ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric} instances for scoring.
     * For {@link ReliabilityRiskMl.ReconstructionPipeline}, use this field instead of {@link pipelineScoringMetrics}
     * to score. The keys of the map should be the user-specified names of the metrics, and the values should be the
     * actual {@link ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric} instances.
     *
     * Default:
     * ```py
     * {'mae': c3.ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric(
     *    actualScoringMetric = c3.MlMeanAbsoluteErrorMetric(),
     *    outputsToSelect = ['scaledReconstructions'],
     *    targetsToSelect = ['scaledFeatures']
     * )}
     * ```
     */
    readonly reconstructionPipelineScoringMetrics?: Map_Type<string, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric>;
    withReconstructionPipelineScoringMetrics(reconstructionPipelineScoringMetrics: Map_Type<string, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric> | {[key: string]: IReliabilityRiskMl.ReconstructionPipeline.ScoringMetric} | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * The pipe that should be passed to the interpreter to generate feature contributions. By default, the {@link riskScorePipe}
     * is used to generate feature contributions.
     */
    readonly pipeToInterpret?: string;
    withPipeToInterpret(pipeToInterpret: string | null): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

    /**
     * Use this field to specify the approach to use for training and processing the {@link reconstructionPipe},
     * the {@link riskScorePipe} and generating feature contributions from the {@link interpreter}.
     *
     * Out of the box, the {@link ControlValvesModelableBase} and the {@link ControlValvesModelable} approaches are
     * provided for modeling control valves.
     */
    readonly controlValvesModelable: ControlValvesModelableMethods;
    withControlValvesModelable(controlValvesModelable: IControlValvesModelableMethods): ReliabilityRiskMl.ControlValvesReconstructionPipeline;

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
    static fromJson(json: any): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    static fromJsonString(json: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    static fromXmlString(xml: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withField(field: string, value: any, doNotConvert?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withoutFieldAtPath(path: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withoutField(field: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withoutField(field: FieldType): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    defaultField(field: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    defaultField(field: FieldType): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    unsetField(field: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    unsetField(field: FieldType): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    removeField(field: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    removeField(field: FieldType): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    mergeJson(json: any): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    static make(fields: any, withDefaults?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    afterMake(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * This function resolves certain parameters of the current instance based on the dataset prepared
     * during the given `ReliabilityMlDatasetPreparationRun`. It adjusts parameters in such a way that they
     * align with the data characteristics (e.g., the number of features or other data-specific attributes).
     *
     * This function is part of automating the machine learning pipeline, eliminating the need for manual input
     * from users for some parameters. The system will intelligently adjust based on the dataset's characteristics,
     * making it easier for users to run the training process with minimal configuration.
     *
     * @param datasetPreparationRun
     *        The `ReliabilityMlDatasetPreparationRun` instance that contains the prepared dataset
     *        to be used for training the model.
     *
     * @returns a resolved `ReliabilityMlDatasetPreparationRunResolvable` instance with parameters adjusted
     *          to match the dataset's characteristics.
     *
     * Example usage:
     *  - If `ReliabilityRiskMl.Reconstruction.Conv1dAutoencoderPipe#numFeatures` is set to 5, but the dataset
     *    has 23 features, the function will adjust the parameter value so that the pipeline can train correctly.
     */
    resolveForDatasetPreparationRun(datasetPreparationRun?: ReliabilityMlDatasetPreparationRun): ReliabilityMlDatasetPreparationRunResolvable;

    /**
     * Make an instance of a new Template Type defined by {@link #generateTypeBidings} with all fields that exist
     * on the original template instance copied to the new instance. This method is invoked during {@link #afterMake}
     * and {@link MlPipe#withHyperparams}.
     */
    remakeTemplate(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Generate the necessary input and output {@link ValueType} bindings for this template using the fields on this type.
     * DEVELOPER NOTE: This enables the generation of pipelines with dynamic input and output types based on the
     * field values. If this template binds the {@link MlPipe} input and output variables on the C3 Type Declaration
     * (.c3typ file), i.e. the input and output types are static, then this method should not be implemented.
     *
     * @returns An instance of {@link MlPipe.Bindings} specifying the {@link ValueType}s for all unbound variable
     * declarations (e.g. if `DX` and `DO` are declared variables on this Type, then this method must return an
     * instance of {@link MlPipe.Bindings} with {@link MlPipe.Bindings#dx} and {@link MlPipe.Bindings#do} specified)
     */
    generateTypeBindings(): MlPipe.Bindings;

    /**
     * Do not generate java signatures for these methods and instead implement in py
     */
    _repr_(): string | null;

    /**
     * Implementation of _repr_html_() function
     */
    _reprHtml_(): string | null;

    /**
     * Used as an optimization for heavy graph traversal usage. See {@link #vertexConnections} for more details.
     * NOTE: it is *strongly* advised to remove the {@link #vertexConnections} field from the graph after running
     * the graph operations.
     *
     * @return this {@link FlowGraph} instance with the {@link #vertexConnections} field computed and set.
     */
    precomputeVertexConnections(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * @return all "source" vertices for the graph. A source vertex is a vertex that has no input edges.
     */
    sources(): Array_Type<MlPipeline.Vertex> | null;

    /**
     * @return all "sink" vertices for the graph. A sink vertex is a vertex that has no output edges.
     */
    sinks(): Array_Type<MlPipeline.Vertex> | null;

    /**
     * @return all "input" ports on sources in the graph. These represent expected named inputs to be provided when
     *         executing the graph. The key is the name of the input, which is taken from the port name, and is expected
     *         to be unique.
     */
    inputs(): Map_Type<string, FlowGraph.Port> | null;

    /**
     * @return all "output" ports on sinks in the graph. These represent expected named outputs resulting from the
     *         graph execution. The key is the name of the output, which is taken from the port name, and is expected
     *         to be unique.
     */
    outputs(): Map_Type<string, FlowGraph.Port> | null;

    /**
     * @return keyed collection of vertices.
     * Key - vertex id
     * Value - vertex instance
     */
    verticesById(): Map_Type<string, FlowGraph.Vertex> | null;

    /**
     * @param port
     *           output port for which to find the next edge(s).
     * @return edge(s) that the given output port is a part of, as a `from` port.
     */
    nextEdgesFor(port: FlowGraph.Port): Array_Type<FlowGraph.Edge<MlPipeline.Vertex>> | null;

    /**
     * Overload for {@link #nextEdgesFor}, except with a vertex arg.
     */
    nextEdgesFor(vertex: MlPipeline.Vertex): Array_Type<FlowGraph.Edge<MlPipeline.Vertex>> | null;

    nextEdgesForPort(port: FlowGraph.Port): Array_Type<FlowGraph.Edge<MlPipeline.Vertex>> | null;

    nextEdgesForVertex(vertex: MlPipeline.Vertex): Array_Type<FlowGraph.Edge<MlPipeline.Vertex>> | null;

    /**
     * @param port
     *           input port for which to find the previous edge.
     * @return edge that the given input port is a part of, as a `to` port.
     */
    prevEdgeFor(port: FlowGraph.Port): FlowGraph.Edge<MlPipeline.Vertex> | null;

    /**
     * Same as {@link #prevEdgeFor}, except with a vertex arg.
     */
    prevEdgesFor(vertex: MlPipeline.Vertex): Array_Type<FlowGraph.Edge<MlPipeline.Vertex>> | null;

    /**
     * @param port
     *           output port for which to find the next port(s).
     * @return input port(s) that the given output port connects to.
     */
    nextPortsFor(port: FlowGraph.Port): Array_Type<FlowGraph.Port> | null;

    /**
     * Overload for {@link #nextPortsFor}, except with a vertex arg.
     */
    nextPortsFor(vertex: MlPipeline.Vertex): Array_Type<FlowGraph.Port> | null;

    nextPortsForPort(port: FlowGraph.Port): Array_Type<FlowGraph.Port> | null;

    nextPortsForVertex(vertex: MlPipeline.Vertex): Array_Type<FlowGraph.Port> | null;

    /**
     * @param port
     *           input port for which to find the previous port.
     * @return output port that the given input port is connected to.
     */
    prevPortFor(port: FlowGraph.Port): FlowGraph.Port | null;

    /**
     * Same as {@link #prevPortFor}, except with a vertex arg.
     */
    prevPortsFor(vertex: MlPipeline.Vertex): Array_Type<FlowGraph.Port> | null;

    /**
     * @param port
     *           output port for which to find the next vertex(s).
     * @return vertex(s) that the given output port connects to.
     */
    nextVerticesFor(port: FlowGraph.Port): Array_Type<MlPipeline.Vertex> | null;

    /**
     * Override for {@link #nextVerticesFor}, except with a vertex arg.
     */
    nextVerticesFor(vertex: MlPipeline.Vertex): Array_Type<MlPipeline.Vertex> | null;

    nextVerticesForPort(port: FlowGraph.Port): Array_Type<MlPipeline.Vertex> | null;

    nextVerticesForVertex(vertex: MlPipeline.Vertex): Array_Type<MlPipeline.Vertex> | null;

    /**
     * @param port
     *           input port for which to find the previous vertex.
     * @return vertex that the given input port is connected to.
     */
    prevVertexFor(port: FlowGraph.Port): MlPipeline.Vertex | null;

    /**
     * Same as {@link #prevVertexFor}, except with a vertex arg.
     */
    prevVerticesFor(vertex: MlPipeline.Vertex): Array_Type<MlPipeline.Vertex> | null;

    /**
     * @return type for edge in this graph.
     */
    static edgeType(): Type;

    /**
     * @return type for vertex in this graph.
     */
    static vertexType(): Type;

    /**
     * @return type for port in this graph.
     */
    static portType(): Type;

    /**
     * Helper constructor for an edge.
     * @param fromPort
     *           source port for new edge.
     * @param toPort
     *           destination port for new edge.
     * @return new edge connecting the two ports.
     */
    static makeEdge(fromPort: FlowGraph.Port, toPort: FlowGraph.Port): FlowGraph.Edge<MlPipeline.Vertex>;

    /**
     * @param id
     *           id for the vertex.
     * @return the vertex corresponding to the id, or null if not found.
     */
    vertexForId(id: string): MlPipeline.Vertex | null;

    /**
     * @param name
     *           name for the vertex.
     * @return the vertex corresponding to the name, or null if not found.
     */
    vertexForName(name: string): MlPipeline.Vertex | null;

    /**
     * Print visualization of graph structure
     * @param static
     *           State if the visualization should be static or interactive. The default is an interactive visualization which
     *           allows clicking on different node and highlighting all nodes that are between the clicked node and the source
     *           nodes
     * @return a string containing the visualization of graph in SVG or interactive HTML format.
     */
    visualize(spec?: FlowGraphVisualizeSpec): any | null;

    /**
     * Post-construction validation of the graph structure (including cycles, vertex ports without edges).
     * Results in an error, if validation fails.
     *
     * @return list of detected warnings.
     */
    validateGraph(): Array_Type<string> | null;

    /**
     * Invokes action for each vertex in this FlowGraph.
     */
    eachVertex(action: λConsumer<MlPipeline.Vertex | null>): void;

    /**
     * Transforms each vertex in this FlowGraph by applying provided lambda function.
     */
    mapVertices(mapper: λFunction<MlPipeline.Vertex | null, T | null>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * @return value that is a result of aggregation of all vertices by provided lambda and initial value.
     */
    foldVertices(initial: T, folder: λBiFunction<MlPipeline.Vertex | null, T | null, T | null>): T | null;

    /**
     * Visits each vertex in this FlowGraph by applying methods from provided visitor type. Throws an error upon
     * encountering a vertex of unknown type (ie, vertex type is not handled in visitor).
     *
     * @param type
     *        FlowGraph.Visitor subtype declaring static methods to apply to strongly typed FlowGraph.Vertex subtypes
     * @param ctx
     *        Context passed between each vertex visit
     */
    visit(type: Type<<FlowGraph.Visitor>>, ctx: C): C | null;

    /**
     * Visits each vertex in this FlowGraph by applying methods from provided visitor type. Applies provided lambda upon
     * encountering a vertex of unknown type.
     */
    _visit(type: Type<<FlowGraph.Visitor>>, ctx: C, unknownVertexAction?: λBiFunction<MlPipeline.Vertex | null, C | null, C | null>): C | null;

    /**
     * Topologically sort this graph (only works for directed acyclic graph).
     * @return a new FlowGraph with vertices ordered in topological ordering
     */
    topologicalSort(reverse?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Creates a new FlowGraph where `vertex` sink is now the only sink vertex
     * @return a new FlowGraph with vertices and edges that come before sink
     */
    ancestorGraph(sink: FlowGraph.Vertex): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Returns a copy of this FlowGraph where the provided old vertex has been replaced with the provided new vertex.
     * The new vertex will always take on the id of the vertex it is replacing; furthermore, it will also take on the
     * ports of the replaced vertex, plus any additional ports it already has. As a result, the new vertex will naturally
     * be connected by all of the old vertex's edges.
     * If `doNotMerge` is set, then the vertex and edges will be updated to have the new id, and ports will not be merged.
     * If `removeDisconnectedEdges` is set, then edges that are no longer connected (due to the replacement) will be removed
     * from the resulting graph. Note this is only relevant when `doNotMerge` is set.
     */
    replaceVertex(oldVertex: FlowGraph.Vertex, newVertex: FlowGraph.Vertex, doNotMerge?: boolean, removeDisconnectedEdges?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Returns a copy of this FlowGraph where the provided vertices has been replaced with the provided new vertex. The
     * new Vertex can retain edges to the rest of the FlowGraph (as though the old vertices were monolithic).
     * {@link FlowGraphReplaceVerticesSpec} specifies whether these edges are retained.
     */
    replaceVertices(oldVertices: Array_Type<FlowGraph.Vertex>, newVertex: FlowGraph.Vertex, spec?: FlowGraphReplaceSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Generically replaces a subgraph within a {@link Workflow} with another subgraph, expressed as a collection of
     * new vertices and edges.
     * @param old
     *           subgraph of original {@link Workflow}, represented as a list of vertices.
     * @param newVertices
     *           new vertices in the replacement subgraph (could also be a single vertex if list is size 1).
     * @param newEdges
     *           new edges in the replacement subgraph (do not need to provide if single vertex)
     * @param spec
     *           specify the connections from
     * @return
     */
    replaceVertices(oldVertices: Array_Type<FlowGraph.Vertex>, newVertices: Array_Type<FlowGraph.Vertex>, newEdges?: Array_Type<FlowGraph.Edge<FlowGraph.Vertex>>, spec?: FlowGraphReplaceSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Returns a copy of this FlowGraph where the provided vertex and all of its edges have been removed. Vertex can be
     * provided via instance or vertex id. If used on a middle vertex, this will result in a FlowGraph that is not fully
     * connected.
     */
    removeVertex(toRemove: FlowGraph.Vertex): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    removeVertex(idToRemove: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Returns a copy of this FlowGraph where all provided vertices and all of their edges have been removed. Depending on
     * which vertices are removed, this could result in a FlowGraph that is not fully connected.
     */
    removeVertices(toRemove?: Array_Type<FlowGraph.Vertex>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Merges this {@link FlowGraph} with another {@link FlowGraph}. Duplicate vertices with the same
     * {@link FlowGraph.Vertex#id} will be merged. This method will throw an exception if two vertices have the same id
     * but different ports to ensure that we do not accidentally disconnect any edges.
     */
    mergeWith(other: ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Returns dot Digraph representation of this tree
     */
    dotDigraph(): string | null;

    /**
     * Returns a list of vertices for which at least one edge exists.
     */
    static pruneUnusedVertices(vertices?: Array_Type<MlPipeline.Vertex>, edges?: Array_Type<FlowGraph.Edge<FlowGraph.Vertex>>): Array_Type<MlPipeline.Vertex> | null;

    /**
     * Launch a training. This API by default is non-blocking asynchronous.
     *
     * @param x
     *           Data to use as "x" or "input" to training.
     * @param y
     *           Data to use as "y" or "label" to supervised training. If not provided, then training is unsupervised.
     * @param spec
     *           Customizations for training execution.
     * @return a {@link MlOperationRun} object that represents the launched training. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    train(x: DX, y?: DY, spec?: MlOperationSpec): MlOperationRun<any>;

    /**
     * Blocking, synchronous version of {@link #train}.
     */
    trainSync(x: DX, y?: DY, spec?: MlOperationSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Detects if this {@link MlPipeline} is trainable
     * An {@link MlPipeline} is trainable if at least one of it's constituent {@link MlPipe}s is trainable
     * @return whether this {@link MlPipeline} is trainable.
     */
    isTrainable(): boolean;

    /**
     * @return whether this {@link MlTrainable} is currently training.
     */
    isTraining(): boolean;

    /**
     * NOTE: as best practice, trained objects should be immutable!
     * @return whether this {@link MlTrainable} has been trained.
     */
    isTrained(): boolean;

    /**
     * @return null if no errors were encountered during training. Otherwise, return the errors
     *           as a formatted string.
     */
    trainErrors(): string | null;

    /**
     * Process the input data. This API is asynchronous, non-blocking.
     *
     * @param x
     *           Data to use as input for processing.
     * @param spec
     *           Customizations for execution.
     * @return a {@link MlOperationRun} object that represents the launched processing. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    process(x: DX, spec?: MlOperationSpec): MlOperationRun<DO> | null;

    /**
     * Blocking, synchronous version of {@link #process}.
     */
    processSync(x: DX, spec?: MlOperationSpec): DO | null;

    /**
     * Validates this instance of {@link MlProcessable} to determine whether it is valid to call {@link #process}.
     * The default implementation assumes all instances of {@link MlProcessable} are processable.
     *
     * @return whether this is processable.
     */
    isProcessable(): boolean;

    /**
     * Score the input data. This API is asynchronous non-blocking.
     *
     * @param x
     *           Data to use as input to the model for scoring.
     * @param y
     *           Data to use as "y" or "label" to use as ground truth for scoring.
     * @param context
     *           Additional contextual data to use for scoring.
     * @param spec
     *           Customizations for execution.
     * @return a {@link MlOperationRun} object that represents the launched scoring. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    score(x: DX, y?: DY, context?: , spec?: MlOperationSpec): MlOperationRun<Map_Type<string, number>> | null;

    /**
     * Blocking, synchronous version of {@link #score}.
     */
    scoreSync(x: DX, y?: DY, context?: , spec?: MlOperationSpec): Map_Type<string, number> | null;

    /**
     * Score the input data for all pipes including intermediate pipes. This API is asynchronous, non-blocking.
     *
     * @param x
     *           Data to use as input to the model for scoring.
     * @param y
     *           Data to use as "y" or "label" to use as ground truth for scoring.
     * @param context
     *           Additional contextual data to use for scoring.
     * @param spec
     *           Customizations for execution.
     * @return a {@link MlOperationRun} object that represents the launched scoring. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    scoreAll(x: DX, y?: DY, context?: , spec?: MlOperationSpec): MlOperationRun<Map_Type<string, number>> | null;

    /**
     * Blocking, synchronous version of {@link #scoreAll}.
     */
    scoreAllSync(x: DX, y?: DY, context?: , spec?: MlOperationSpec): Map_Type<string, number> | null;

    /**
     * Use {@link MlInterpreter}s to interpret the {@link MlInterpretable} object using the input data and context. See
     * {@link MlInterpreter} for information on interpreters. This API is asynchronous non-blocking.
     *
     * @param x
     *           Data to use as the source input. This is not the same as the downstream inputs that may or may not feed
     *           in to {@link MlInterpreter}(s)
     * @param context
     *           Additional information required to perform interpretation
     * @param spec
     *           Customizations for execution
     * @return a {@link MlOperationRun} object that represents the launched interpretation. The caller should use the APIs on
     *           the operation run object to query status and to get the final result.
     */
    interpret(x: DX, spec?: MlOperationSpec): MlOperationRun<> | null;

    /**
     * Blocking, synchronous version of {@link #interpret}.
     */
    interpretSync(x: DX, context?: Map_Type<string, any>, spec?: MlOperationSpec):  | null;

    /**
     * Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
     * `args` and `kwargs` are of `ValueType` `any`.
     */
    _call_(args?: Array_Type<any>, kwargs?: Map_Type<string, any>): any | null;

    /**
     * Extracts the inputs and standardizes them into a dict.
     */
    standardizeInput(args?: Array_Type<any>, kwargs?: Map_Type<string, any>): Map_Type<string, any> | null;

    /**
     * @return whether the cache already contains this instance
     */
    isCached(): boolean;

    /**
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return stream of all available Cached instances.
     */
    static allCached(doNotProduceAll?: boolean): Stream<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return existing instances of this type that satisfy filter from data cache.
     */
    static find(filter?: string, doNotProduceAll?: boolean): Stream<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return existing instances of this type that satisfy filter from data cache.
     */
    static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
     *
     * @see forCacheKey
     * @see getCached
     */
    static findByCacheKey(key: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * @return cached instance by the key.
     *
     * @see forCacheKey
     * @see findByCacheKey
     */
    static forCacheKey(key: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * @return cached instance.
     *
     * @see forCacheKey
     * @see findByCacheKey
     */
    getCached(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * @return newly produced cached instance.
     */
    refreshCache(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * @return cache key for this instance.
     */
    cacheKey(): string;

    /**
     * Should produce an entry for the cache key. This method should not be called directly.
     */
    static produce(key: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
     */
    static produceAll(): Map_Type<string, ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Override for sub-types to produce all values.
     */
    static doProduceAll(): Map_Type<string, ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
     *           of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(spec?: FetchSpec): FetchResult<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

    /**
     * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param filter
     *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(filter: Filter): FetchResult<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
     * @return Requested obj stream.
     */
    static fetchObjStream(spec?: FetchStreamSpec): Stream<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static fetchMultiLocale(spec?: MultiLocaleFetchSpec): Map_Type<string, FetchResult<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>> | null;

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
    get(include?: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    getSpecific(include?: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    getMissing(spec: GetMissingSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    getDirect(include?: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * Applies a reverse edit (e.g. VersionEdit) to an instance.
     *
     * @param versionEdit
     *        Reverse edit to apply
     *
     * @return The instance after applying the reverse edit.
     */
    applyReverseEdit(versionEdit: VersionEdit): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    static fromString(s: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance already exist.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
     *         will have only those fields populated. Otherwise only the id field will be populated.
     */
    create(spec?: UpsertSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    static createBatch(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static createBatchObjStream(objs: Stream<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, spec?: CreateBatchObjStreamSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    update(srcObj?: ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>, spec?: UpsertSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    upsert(srcObj?: ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>, spec?: UpsertSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    merge(spec?: MergeSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    merge(mergeInclude: string, spec?: MergeSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

    /**
     * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     *
     * @return The created or updated obj.
     */
    touch(spec?: TouchSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    static updateBatch(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, srcObjs?: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static updateObjs(objs: λSupplier<Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static upsertBatch(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, srcObjs?: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static upsertObjs(objs: λSupplier<Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static touchBatch(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, spec?: TouchSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static mergeBatch(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, spec?: MergeSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static mergeBatch(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, mergeInclude: string, spec?: MergeSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static mergeObjs(objs: λSupplier<Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null>, mergeInclude: string, spec?: MergeSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static mergeAll(mergeObj: ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>, spec?: MergeAllSpec): number | null;

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
    static mergeAll(mergeObj: ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>, mergeInclude: string, spec?: MergeAllSpec): number | null;

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
    static removeBatch(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
    static replace(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
     * {@link removeBatch} functions). If the operation fails an exception will be thrown.
     *
     * @return The recovered obj instance with all of its fields populated.
     *
     * @see Ann.Db#archive
     */
    unremove(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
     * Upsert persistable references in this {@link MlPipe}, and replace the complete objects with respective entity references.
     * DEVELOPER NOTE: MlPipe developers need to implement this method to successfully register and load `MlPipe`
     * objects from `ModelRegistry`, if there are additional fields in `MlPipe` that hold entity references in addition to
     * platform supported defaults.
     * @return an instance of {@link MlPipe} with complete reference objects replaced with respective entity references.
     */
    static beforeCreate(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

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
    static beforeUpdate(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

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
    static beforeRemove(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

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
    static afterCreate(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>): Array_Type<ObjError> | null;

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
    static afterUpdate(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>): Array_Type<ObjError> | null;

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
    static afterRemove(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>): Array_Type<ObjError> | null;

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
    static startImportData(spec?: StartImportDataSpec): PushStream<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportDataWithStats(spec?: StartImportDataSpec): PushStreamWithStats<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

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
    static forId(id: string, failIfMissing?: boolean): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    withoutIdentity(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    static typeOfBatch(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>): Array_Type<EntityType> | null;

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
    static dbEcho(template?: ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>, count?: number, sendBack?: boolean): number | null;

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
    static callbackLogic(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, callback?: λFunction<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null, ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null>): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>;

    /**
     * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
     * calling a transform for it.
     */
    static afterCallbackLogic(objs: Array_Type<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>>, callback?: λFunction<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null, ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null>): Array_Type<ObjError> | null;

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
     * Publishes an instance of SeedData to a C3 application package under `/seed/`
     */
    publish(subPath?: string, contentType?: string): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

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
    static removeSeedDataBatch(objs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Admin function to add a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries
     * added this way are treated as though they were provisioned, rather than added by a user.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return created obj instance, same as {@link Persistable#create} return value.
     */
    createSeedData(spec?: UpsertSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    static createSeedDataBatch(objs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Admin function to update a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data
     * entries updated this way are treated as though they were provisioned, rather than updated by a user.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return updated obj instance, same as {@link Persistable#update} return value.
     */
    updateSeedData(srcObj?: SeedData, spec?: UpsertSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    static updateSeedDataBatch(objs?: Array_Type<SeedData>, srcObjs?: Array_Type<SeedData>, spec?: UpsertSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Admin function to clear the {@link userUpdatedFields} field for a seed data obj instance.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return updated obj instance, same as {@link Persistable#update} return value.
     */
    clearUserUpdates(spec?: MergeSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO> | null;

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
    static clearUserUpdatesBatch(objs?: Array_Type<SeedData>, spec?: MergeSpec): ObjList<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

    /**
     * Returns the full metadata path to the seed file associated with this instance by `id`.
     * Throws an error if this instance is not seeded (no match with instance `id`).
     */
    seedPath(): string | null;

    dependencies(): SeedDataDeps<ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>> | null;

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
     * The scoring metrics used in this pipeline.
     */
    scoringMetrics(): Map_Type<string, MlScoringMetric<any, any, any>> | null;

    /**
     * Used internally to generate a name per pipe type. This function should be overridden for each child type.
     */
    static prefix(): string | null;

    /**
     * Convert the native object to an {@link MlPipe} object.
     * Example usage:
     * ```
     * from sklearn.svm import OneClassSVM
     * svm = OneClassSVM(gamma='auto')
     * model = c3.MlPipe.convert(svm)
     * ```
     *
     * If the `model` argument is an instance of a custom model whose source code has been defined in a Jupyter notebook,
     * {@link MlPipe} requires that all the necessary source code be defined in a single notebook cell, rather than
     * spanning multiple cells. For example, do not split the `import`s and class definition between two different cells.
     * Instead, put the necessary `import` statements before the class definition in the same cell. Additionally, it is
     * highly recommended that subsequent code that uses the custom model, as in an instantiation of an object, should
     * be in a cell that is separate than the custom model's source code.
     * Incorrect usage:
     * ```
     * [1]: from tensorflow.keras import Model
     *      from tensorflow.keras.layers import Dense
     * [2]: class MyTensorFlowModel(Model):
     *        def __init__(self, hidden_dim, num_classes):
     *          self.hidden_layer = Dense(hidden_dim)
     *          self.output_layer = Dense(num_classes)
     *        ...
     *
     *      model = MyTensorFlowModel(128, 10)
     *      model.compile(...)
     * ```
     * Correct usage:
     * ```
     * [1]: from tensorflow.keras import Model
     *      from tensorflow.keras.layers import Dense
     *
     *      class MyTensorFlowModel(Model)
     *        def __init__(self, hidden_dim, num_classes):
     *          self.hidden_layer = Dense(hidden_dim)
     *          self.output_layer = Dense(num_classes)
     *        ...
     * [2]: model = MyTensorFlowModel(128, 10)
     *      model.compile(...)
     * ```
     * @param model
     *           Native object to convert.
     * @param spec
     *           Customizations for convert.
     * @return an {@link MlPipe} C3 object that behaves as the native machine learning object.
     */
    static convert(model: any, spec?: MlConvertSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Freezes an {@link MlPipe}
     * @return modified copy of this {@link MlPipe} that cannot be trained
     */
    freeze(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Freezes an {@link MlPipeline}
     * @param paths
     *    The paths to the desired {@link MlPipe}s to freeze.
     *    See {@link MlPipeline} for details on path definition.
     *    If unspecified, then the entire pipeline is frozen.
     * @return a modified copy of {@link MlPipeline} with the appropriate pipe(s) frozen that cannot be trained
     */
    freeze(paths?: Array_Type<string>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Unfreezes an {@link MlPipe}
     * @return modified copy of this {@link MlPipe} that can be trained
     */
    unfreeze(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Unfreezes an {@link MlPipeline}
     * @param paths
     *    The paths to the desired {@link MlPipe}s to unfreeze.
     *    See {@link MlPipeline} for details on path definition.
     *    If unspecified, then the entire pipeline is unfrozen.
     * @return a modified copy of {@link MlPipeline} with the appropriate pipe(s) unfrozen that can be trained
     */
    unfreeze(paths?: Array_Type<string>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Helper method to create a new authoring vertex based on the pipe and inputs.
     *
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param y
     *           single value, list, or map of input(s) for y.
     * @param context
     *           single value, list, or map of input(s) for context.
     * @param suffix
     *           optional suffix for the vertex name
     * @return a new authoring vertex
     */
    newAuthoringVertex(x?: DX, y?: DY, context?: , suffix?: string = '""', spec?: MlConvertSpec): MlPipeline.PipeVertex.Authoring;

    /**
     * Used to describe training, when authoring an {@link MlPipeline} flow.
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param y
     *           single value, list, or map of input(s) for y.
     * @return a placeholder representing a trained pipeline during authoring.
     */
    train_var(x?: any, y?: any): MlPipeline.PipeVar;

    /**
     * Used to describe processing, when authoring an {@link MlPipeline} flow.
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param spec
     *            customizations for changing behavior of the pipe.
     * @return a single {@link MlVar} if single output or a map of {@link MlVar} if multi-output.
     */
    process_var(x?: any, spec?: MlConvertSpec): any;

    /**
     * Used to describe scoring, when authoring an {@link MlPipeline} flow.
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param y
     *           single value, list, or map of input(s) for y.
     * @param context
     *           single value, list, or map of input(s) for context.
     * @param spec
     *            customizations for changing behavior of the pipe.
     * @return a single {@link MlVar} if single output or a named tuple of {@link MlVar} if multi-output.
     */
    score_var(x?: any, y?: any, context?: any, spec?: MlConvertSpec): any;

    /**
     * Used to describe interpreting, when authoring an {@link MlPipeline} flow.
     * @param x
     *           single value, list, or map of input(s) for x.
     * @param spec
     *            customizations for changing behavior of the pipe.
     * @return a single {@link MlVar} if single output or a map of {@link MlVar} if multi-output.
     */
    interpret_var(x?: any, spec?: MlConvertSpec): any;

    /**
     * {@see #withHyperparams}
     */
    hyperparams(hps?: string | Array_Type<string>): Map_Type<string, any>;

    /**
     * {@see #withHyperparams}
     */
    hyperparams(hps?: Map_Type<string, any>): Map_Type<string, any>;

    /**
     * Validate the given hyperparameter values for this pipe. If there is a {@link Hp.ParamSpace} for the
     * hyperparameter, this function will check if the value passed is a point within the parameter space. Also, if
     * there are constraints for the hyperparameter, this function will check if the value satisfies all the constraints.
     * If the validation fails, a ValueError will be raised.
     * @param hps
     *           A map of hyperparameter names to their values.
     */
    validateHyperparams(hps?: Map_Type<string, any>): void;

    /**
     * @inheritdoc
     */
    withHyperparams(newHps?: Map_Type<string, any>): MlPipe<any, any, any, any, any>;

    /**
     * Used for accessing the parameter spaces of hyperparameters on an {@link MlAtomicPipe}. Can be used on
     * {@link MlAtomicPipe} or on {@link MlPipeline}.
     * @param hps
     *           single value or list of paths of hyperparameters on the pipe.
     * @return a map of hyperparameter names to their respective parameter spaces.
     */
    hyperparamSpaces(hps?: string | Array_Type<string>): Map_Type<string, Hp.ParamSpace>;

    /**
     * Used for accessing the parameter spaces of hyperparameters on one or more {@link MlAtomicPipe}s in a
     * {@link MlPipeline}.
     *
     * @param hps
     *           a map of {@link MlAtomicPipe} paths to their respective hyperparameter names.
     * @return a map of {@link MlAtomicPipe} paths and their hyperparameter names to their respective
     * {@link Hp.ParamSpace}.
     */
    hyperparamSpaces(hps?: Map_Type<string, string>): Map_Type<string, Hp.ParamSpace>;

    /**
     * Used for accessing {@link MlPipe#experiment}.
     */
    searchResult(): any | null;

    /**
     * Returns true if the instance exists in database.
     */
    existsInDbHeuristic(): boolean;

    /**
     * Clean up (i.e. remove from db or delete from filesystem) any artifacts or dependencies related to this {@link MlPipe}.
     * Clean up this {@link MlPipe} after artifacts or dependencies are cleaned up.
     * For example,
     * If {@link MlPipeline}, remove all nested {@link MlPipe}s and this {@link MlPipeline} from DB
     * If {@link MlAtomicPipe}, delete model files from filesystem and remove this {@link MlAtomicPipe} from DB
     */
    cleanUp(): void;

    /**
     * Clean up (i.e. remove from db or delete from filesystem) any artifacts or dependencies related to this {@link MlPipeline}.
     * Clean up this {@link MlPipeline} after artifacts or dependencies are cleaned up.
     * @param cleanUpNested
     *    If True, clean up all nested {@link MlPipe}s recursively
     */
    cleanUp(cleanUpNested?: boolean): void;

    /**
     * Replace persisted entity references in this {@link MlPipe} with complete objects and remove identity of those references.
     * DEVELOPER NOTE: MlPipe developers need to implement this method to successfully register and load `MlPipe`
     * objects from `ModelRegistry`, if there are additional fields in `MlPipe` that hold entity references,
     * in addition to platform supported defaults. It is required to invoke parent type's `replaceEntityReferences`
     * using `super` in the overridden method at the start of method definition.
     * @return an instance of {@link MlPipe} with persisted references replaced with complete objects.
     */
    replaceEntityReferences(): MlPipe<any, any, any, any, any>;

    /**
     * Initializes the loggers for {@link MlPipe} operation.
     * @return an instance of {@link MlOperationSpec} loggers initialized.
     */
    static initializeLoggers(opNames: Array_Type<string>, spec?: MlOperationSpec): MlOperationSpec | null;

    /**
     * Returns the pipe with just the {@link MlPipe#id} field populated if the pipe has an id. Otherwise, the pipe will
     * be returned as-is.
     */
    byReference(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Returns the DX, DY, DS, DO, and DI bindings for the pipe. Note that this does not return
     * {@link MlPipe.Bindings#typeStr}.
     */
    varBindings(): MlPipe.Bindings;

    /**
     * Names of the x inputs for this machine learning pipeline.
     */
    xNames(): Array_Type<string> | null;

    /**
     * Names of the y inputs for this machine learning pipeline.
     */
    yNames(): Array_Type<string> | null;

    /**
     * Names of the context inputs for this machine learning pipeline.
     */
    contextNames(): Array_Type<string> | null;

    /**
     * Names of the {@link #process} outputs for this machine learning pipeline.
     */
    outNames(): Array_Type<string> | null;

    /**
     * Names of the {@link #interpret} outputs for this machine learning pipeline.
     */
    interpretationNames(): Array_Type<string> | null;

    /**
     * The {@link MlPipe}s contained in this machine learning pipeline, indexed by name.
     */
    pipes(): Map_Type<string, MlPipe<any, any, any, any, any>> | null;

    /**
     * Extract the vertex wrapping a {@link MlPipe} from this possibly-nested machine learning pipeline, specified
     * by a path of vertex names.
     *
     * @param path
     *    The path to the desired {@link MlPipeline.Vertex}. See {@link MlPipeline} for details on path definition.
     * @return the {@link MlPipeline.Vertex} specified by the path.
     */
    vertexAt(path: string): MlPipeline.Vertex;

    /**
     * Validates the pipeline object.
     *
     * @return True if the pipeline object is valid.
     */
    validate(): boolean;

    /**
     * Extract a given {@link MlPipe} by path.
     *
     * @param path
     *    The path to the desired {@link MlPipe}. See {@link MlPipeline} for details on path definition.
     * @return the {@link MlPipe} specified by the path.
     */
    pipeAt(path: string): MlPipe<any, any, any, any, any> | null;

    /**
     * Extract a given {@link MlInterpreter} by path.
     *
     * @param path
     *    The path to the desired {@link MlInterpreter}. See {@link MlPipeline} for details on path definition.
     * @return the {@link MlInterpreter} specified by the path.
     */
    interpreterAt(path: string): MlInterpreter<any, any> | null;

    /**
     * Extract multiple {@link MlPipe}s by path.
     *
     * @param paths
     *    The paths to the desired {@link MlPipe}s. See {@link MlPipeline} for details on path definition.
     * @return A list of {@link MlPipe}s corresponding to the input paths.
     */
    pipesAt(paths: Array_Type<string>): Array_Type<MlPipe<any, any, any, any, any>> | null;

    /**
     * Extract multiple {@link MlInterpreter}s by path.
     *
     * @param paths
     *    The paths to the desired {@link MlInterpreter}s. See {@link MlPipeline} for details on path definition.
     * @return A list of {@link MlInterpreter}s corresponding to the input paths.
     */
    interpretersAt(paths: Array_Type<string>): Array_Type<MlInterpreter<any, any>> | null;

    /**
     * Lists full paths of pipes within this pipeline. This function is intended to help the user provide
     * paths to APIs like {@link #pipeAt}.
     * @param level
     *           the maximum nesting depth to list pipes for. The default is depth 1, which
     *           lists all immediate children pipes of this pipeline. Depth 0 will return pipes at any level of nesting.
     * @return list of paths, one per pipe, up to and including the specified nesting level.
     */
    pipePaths(level?: number = '1'): Array_Type<string> | null;

    /**
     * Lists the full path of every interpreter within this pipeline. This function is intended to help the user provide
     * paths to APIs like {@link #interpreterAt}.
     * @param level
     *           the maximum nesting depth to list interpreters for. The default is depth 1, which
     *           lists all immediate children interpreters of this pipeline. Depth 0 will return interpreters at any level of nesting.
     * @return list of paths, one per interpreter, up to and including the specified nesting level.
     */
    interpreterPaths(level?: number = '1'): Array_Type<string> | null;

    /**
     * Used during {@link MlPipeline} execution of data consuming or data producing operations.
     *
     * @return the translator that maps objects of this Type to {@link MlFlow}.
     */
    static workflowTranslator(): MlPipelineToWorkflowTranslator | null;

    /**
     * Used during {@link MlPipeline} execution of data consuming or data producing operations to translate
     * an {@link MlPipeline] to an executable {@link Workflow}.
     *
     * @see #translateAndExecute
     */
    translate(x?: DX, y?: DY, context?: , spec?: MlOperationSpec, opName?: Array_Type<string>, workflowId?: string): ;

    /**
     * Used during {@link MlPipeline} execution of data consuming or data producing operations.
     *
     * @param x
     *           Data to use as input to the model.
     * @param y
     *           Data to use as "y" or "label" to use as ground truth.
     * @param context
     *           Additional contextual data to use for execution of {@link MlDataOpName}.
     * @param spec
     *           Customizations for execution.
     * @param opName
     *           List of {@link MlDataOpName} representing current operations
     * @param workflowId
     *           Optional user defined "id" for {@link Workflow} created by {@link MlPipelineToWorkflowTranslator}
     * @return the {@link MlOperationRun} object that represents the launched {@link MlDataOpName}. The caller should
     *           use the APIs on the operation run object to query status and to get the final result.
     */
    translateAndExecute(x?: DX, y?: DY, context?: , spec?: MlOperationSpec, opName?: Array_Type<string>, workflowId?: string): MlOperationRun<any>;

    /**
     * Checks if the process output from this {@link MlPipeline} is indexed and satisfies the below rules.
     * If the rules are not satisfied, an exception is raised.
     * - For multi-input pipeline, no index validation check is done and an exception is raised.
     * - For single-input, single/multi output pipeline, an exception is raised if any of the below is violated:
     *   - The input must have a subject ID index {@link Feature.SUBJECT}.
     *   - The outputs must have a subject ID index {@link Feature.SUBJECT}.
     *   - The index values of {@link Feature.SUBJECT} of output must be a subset of index values of {@link Feature.SUBJECT} of input.
     * @param x
     *    Data used as "x" or "input" to processing.
     * @param processOutput
     *    Output of {@link MlPipeline#process}.
     * @param outNames
     *    Optional output names to perform validation check. If no outNames are specified, all outputs are validated.
     */
    validateOutputIndices(x: DX, processOutput: DO, outNames?: Array_Type<string>): void;

    /**
     * Launch the training verification. Uses the authoring-based reference executor, which directly executes the
     * operation from the authoring description.
     * @param x
     *           Data to use as "x" or "input" to training.
     * @param y
     *           Data to use as "y" or "label" to supervised training. If not provided, then training is unsupervised.
     * @param spec
     *           Customizations for training execution.
     * @return a {@link MlPipeline} object that represents the trained pipeline.
     */
    train_verify(x?: DX, y?: DY, spec?: MlOperationSpec): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Launch the process verification of the trained pipeline. Uses the authoring-based reference executor, which directly executes the
     * operation from the authoring description.
     * @param x
     *           Data to use as "x" or "input" to training.
     * @param spec
     *           Customizations for training execution.
     * @return the output from processing.
     */
    process_verify(x?: DX, spec?: MlOperationSpec): DO | null;

    /**
     * Same as {@link #train}, except will not do a hyperparameter search. Used in underlying implementation of {@link #train}
     * to do the non-search portion.
     */
    trainOnly(x?: DX, y?: DY, spec?: MlOperationSpec): MlOperationRun<any>;

    /**
     * Helper function used when doing hyperparameter search in {@link #train}.
     * @param hpoExperiment
     *           {@link Hpo.ExperimentBase} object associated with {@link #search}.
     * @return an untrained {@link MlPipeline} that has the best hyperparameters from the searchRun.
     */
    bestPipeline(hpoExperiment: any): MlPipeline<any, any, any, any, any>;

    trainOnServer(x: DX, y?: DY, spec?: MlOperationSpec): MlOperationRun<any>;

    processOnServer(x: DX, spec?: MlOperationSpec): MlOperationRun<DO> | null;

    scoreOnServer(x: DX, y?: DY, context?: , spec?: MlOperationSpec): MlOperationRun<Map_Type<string, number>> | null;

    scoreAllOnServer(x: DX, y?: DY, context?: , spec?: MlOperationSpec): MlOperationRun<Map_Type<string, number>> | null;

    interpretOnServer(x: DX, spec?: MlOperationSpec): MlOperationRun<> | null;

    /**
     * Add or change a set of parameter spaces for the hyperparameters of an {@link MlPipeline}.
     * Example usage:
     * Given a pipeline with sample {@link MlAtomicPipe} authored as using Linear Regression,
     * Standard Scaler and MinMax Scaler models from Sklearn. To update various hyperparameters spaces of pipes in a pipeline,
     * simply provide a map in the following format:
     * ```py
     * x, y = mla.var(), mla.var()
     * lr_pipe = c3.MlPipe.convert(native_lr, name='lr')
     * ss_pipe = c3.MlPipe.convert(native_ss, name='ss')
     * mm_pipe = c3.MlPipe.convert(native_mm, name='mm')
     * x_mm = mm_pipe(x)
     * y_ss = ss_pipe(y)
     * y_out = lr_pipe(x_mm, y_ss)
     * pipeline = mla.pipeline(x={'x':x}, y={'y':y}, out={'y_pred':y_out})
     * updated_pipeline = pipeline.withHyperparamSpaces({'ss': {'with_mean': c3.Hp.ParamSpace.Categorical.fromValues([True, False])}})
     * ```
     *
     * @param paramSpaces
     *           Map key represents the path to hyperparameter name. Map value represents the parameter spaces to be
     *           defined for each respective hyperparameter.
     * @return a {@link MlPipeline} with added parameter spaces for each desired hyperparameter.
     */
    withHyperparamSpaces(paramSpaces: Map_Type<string, Map_Type<string, Hp.ParamSpace>>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Used for replacing a pipe in an MlPipeline based on the path provided.
     * @param pipePath
     *           path of {@link MlAtomicPipe} to be replaced.
     * @param newPipe
     *           new {@link MlAtomicPipe} to replace the existing pipe at the pipePath.
     * @return {@link MlPipeline} with the newPipe present at the pipePath provided.
     */
    replacePipe(pipePath: string, newPipe: MlPipe<any, any, any, any, any>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Used for replacing an interpreter in an MlPipeline based on the path provided.
     * @param interpreterPath
     *           path of {@link MlInterpreter} to be replaced.
     * @param newInterpreter
     *           new {@link MlInterpreter} to replace the existing interpreter at the interpreterPath.
     * @return {@link MlPipeline} with the newInterpreter present at the interpreterPath provided.
     */
    replaceInterpreter(interpreterPath: string, newInterpreter: MlInterpreter<any, any>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Flattens a pipeline with nested inner pipelines by extracting the pipes of the inner pipelines
     * and adding it to the outer pipeline such that no vertex in the pipeline graph represents a {@link MlPipeline}.
     * @return the flattened {@link MlPipeline}
     */
    flatten(): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * @return execution metadata associated with the training of this instance of {@link MlPipeline}. The key
     *            is the vertex name, and the value is the aggregated results.
     */
    trainExecutionMetadata(): Map_Type<string, Log.Entry.Action> | null;

    /**
     * Create a visualization plotting start and end timestamps for all vertices in {@link #trainExecutionMetadata}.
     * @return the native plot object.
     */
    plotTrainExecutionTimestamps(): any | null;

    /**
     * Implementation of {@link MlPipeline#_repr_} with a better method name
     */
    repr(): string | null;

    /**
     * Helper function to forcibly execute a `process` from java.
     */
    static processInJava(trained: MlPipeline<any, any, any, any, any>, x?: DX, spec?: MlOperationSpec): DO | null;

    /**
     * Construct an instance of {@link MlModel} from the given parameters.
     * Currently, this supports creating an instance of platform provided {@link MlModel} only.
     * For creating instances of subtypes of {@link MlModel}, it is recommended that users implement the equivalent logic
     * in individual applications.
     * If an instance of {@link MlProject} with the given projectName is not found, an error is raised.
     * @param projectName
     *    Name of the {@link MlProject} to associate the {@link MlModel} with.
     * @param x
     *    Map of {@link MlPipeline} x input names to corresponding {@link Feature.Set sets} of features.
     *    Can be set to {@link Feature.Set} if there is only one x input to {@link MlPipeline}.
     * @param y
     *    Map of {@link MlPipeline} y input names to corresponding {@link Feature.Set sets} of features.
     *    Can be set to {@link Feature.Set} if there is only one y input to {@link MlPipeline}.
     *
     * @return a {@link MlModel} encompassing this {@link MlPipeline}.
     */
    createModel(projectName: string, x?: Map_Type<string, Feature.Set> | Feature.Set, y?: Map_Type<string, Feature.Set> | Feature.Set): MlModel;

    /**
     * @see Workflow.Run#setLogLevel
     * Change the log level for {@link MlPipeline} related Types.
     *
     * @param logLevel
     *           The log level to set on the Logger for all {@link MlPipeline} related Types
     * @param children
     *           If set to True, then this method will also update the log level on the Loggers for
     *           {@link Workflow.Run} related types.
     */
    static setLogLevel(logLevel: string, children?: boolean): void;

    /**
     * Generates authoring code, as text or Jupyter cell, that the user can execute to create an equivalent pipeline.
     *
     * @param level
     *           specifies the level of nesting to generate authoring code up to. Level 0 indicates code generation
     *           for the outer pipeline only. Level 1 indicates code generation for outer pipeline and one level of
     *           inner pipelines only, etc. Level -1 indicates generate code for all nesting levels.
     * @param freezePipes
     *           if set, then freeze all pipes in the generated code.
     * @param asString
     *           if set, return generated code as string. Otherwise, a new Jupyter cell will be created with the generated
     *           code populating it.
     * @param varPrefix
     *           specifies the prefix, if any, for vars representing nested pipelines. Primarily intended to be used by
     *           internal implementation of nested levels.
     * @return the generated code as string, if asString is set, otherwise nothing.
     */
    authoringCode(level?: number = '0', freezePipes?: boolean, asString?: boolean, varPrefix?: string): string | null;

    /**
     * Extracts background {@link Data} instances from interpreter instances in this {@link MlPipeline}.
     *
     * @returns a native python dictionary whose keys are json of {@link Data}
     * and values are {@link Data} instances.
     */
    extractBackgroundData(): any | null;

    /**
     * Checks if {@link Data} instances within the input are persisted and persists them if they are not persisted.
     * This API persists inputs to {@link MlPipeline} by recursively traversing its input for instances of {@link Data}
     * @param inputToPersist
     *     Input to be persisted. Either C3 Types: {@link Data}, {@link Tuple}, {@link Map}, or {@link Obj},
     *     or Python-native types: pandas.DataFrame or dict.
     * @return persisted #inputToPersist
     */
    static persistData(inputToPersist?: any): any | null;

    /**
     * Helper function to close intermediate {@link Data} instances.
     * This API closes data inputs which is either {@link Data} or named {@link Tuple} of {@link Data} or map of {@link Data}.
     * @param inputToClose
     *     Input to be closed
     * @param closeMultiNodeData
     *     If True, data supporting multi-node such as {@link Data.Persisted} will be closed.
     */
    static closeData(inputToClose?: any, closeMultiNodeData?: boolean): void;

    /**
     * Extracts {@link Data} instances from sourceToExtract and populates extractedData.
     * Returns a map whose keys are json of {@link Data} and values are {@link Data} instances.
     * sourceToExtract could be one of {@link Data}, Map or named Tuple or List of {@link Data}, {@link MlInterpretResult}
     * or {@link Hpo.ExperimentBase} or a c3 object instance containing {@link Data}.
     * @param sourceToExtract
     *     Input to extract {@link Data} instances from.
     * @param extractedData
     *     A native python dictionary whose keys are json of {@link Data} and values are {@link Data} instances.
     * @param doNotRecurse
     *     If True, disable recursively checking nested c3 object instances for {@link Data}.
     * @returns a native python dictionary whose keys are json of {@link Data}
     * and values are {@link Data} instances.
     */
    static extractData(sourceToExtract?: any, extractedData?: any, doNotRecurse?: boolean): any | null;

    /**
     * Sets {@link MlPipeline#doNotAutoUpsert} to True/False for this {@link MlPipeline} and for all nested {@link MlPipeline}s
     * referenced by this {@link MlPipeline}.
     * @param value
     *     Boolean value for {@link MlPipeline#doNotAutoUpsert}
     * @param reverse
     *    Specifies the order to set {@link MlPipeline#doNotAutoUpsert} for nested {@link MlPipeline}s.
     *    If true, deeply nested {@link MlPipeline#doNotAutoUpsert} are set before this {@link MlPipeline}.
     * @return a new instance of {@link MlPipeline}.
     */
    setDoNotAutoUpsert(value: boolean, reverse?: boolean): MlPipeline<any, any, any, any, any>;

    /**
     * Pipeline constructor - based on the stringified v7 `MLSerialPipeline` json and runtime requirements.
     * Currently only supports the following `MLLeafPipe` conversions: {@link SklearnLikePipeV7}.
     * @param pipeline
     *           json dump of the v7 `MLSerialPipeline`.
     * @param runtimeRequirements
     *           yamls for the declared runtime requirement in v7 for the runtime corresponding to the `MLLeafPipe`s,
     *           in order of appearance in the `MLSerialPipeline`.
     * @return constructed V8-operable {@link MlPipeline}.
     */
    static fromV7Json(pipeline: string, runtimeRequirements: Array_Type<string>): ReliabilityRiskMl.ControlValvesReconstructionPipeline<DX, DY, DO>;

    /**
     * Used to ensure that the pipes of the pipeline are deployed using {@link Workflow.Engine}.
     * All the pipes within the pipeline will be deployed in the same {@link Workflow.Engine}.
     * @param deploySpec
     *           the deploy spec to use for deploying all the pipes in the pipeline.
     * @param opName
     *           List of {@link MlDataOpName} for which pipeline operations we need the pipeline to be deployed.
     */
    ensureDeployed(deploySpec?: Workflow.Engine.DeploySpec, opNames?: Array_Type<string> = '[MlDataOpName.PROCESS, MlDataOpName.SCORE, MlDataOpName.INTERPRET]'): Array_Type<Workflow.Engine>;

    /**
     * Used to ensure that the pipes of the pipeline are deployed using {@link Workflow.Engine}.
     * Multiple pipes could be deployed as part of the same engine. see {@link ensureDeployed} if prefer to deploy all the pipes
     *  in the same engine.
     * @param deploySpecs
     *           A list of deploy specs and list of pipe paths that should be deployed using these specs.
     *           The pipe paths should match the input of {@link #pipesAt}.
     * @param opName
     *           List of {@link MlDataOpName} representing for which pipeline operations we need the pipeline to be deployed.
     */
    ensureDeployedPipes(deploySpecs?: Array_Type<>, opNames?: Array_Type<string> = '[MlDataOpName.PROCESS, MlDataOpName.SCORE, MlDataOpName.INTERPRET]'): Array_Type<Workflow.Engine>;

    /**
     * Generate and return a new pipeline using the fields set on this Type.
     *
     * DEVELOPER NOTE: The recommended approach is to use {@link MlPipeline.Authoring#pipeline} (i.e. compose the
     * pipeline using the typical user flow). The returned pipeline will be absorbed into the instance of this Type.
     */
    generatePipeline(): MlPipeline<any, any, any, any, any>;

    /**
     * Invoke {@link #generatePipeline} and absorb the pipeline into this instance of {@link #MlTemplate.Pipeline}
     *
     * @param force
     *           If set, invoke {@link #generatePipeline} even if this template already has a set of vertices and edges
     *           as long as the pipeline is not upserted. Otherwise, generate a pipeline only if this template does not
     *           contain any vertices.
     */
    generateAndAbsorbPipeline(force?: boolean): MlTemplate.Pipeline<any, any, any, any, any>;

    /**
     * Returns a superset of all the categories of masks that may be applied to train/infer
     * from a pipeline.
     * Only a subset of these masks can be used in the {@link trainingMasks} or the
     * {@link inferenceMasks} fields.
     */
    static maskCategories(): Array_Type<string>;

    /**
     * Validates if the {@link trainingMasks} and {@link inferenceMasks} provided are a subset
     * of {@link maskCategories}. If not, an error will be thrown.
     */
    validateTrainingAndInferenceMasks(): string | null;

    /**
     * Use this method to implement your own custom input validation logic before the default
     * input validation for the pipeline is performed.
     */
    beforeValidateInput(): Array_Type<string> | null;

    /**
     * This method is used to perform the default validation of the user provided inputs
     * when creating an instance of this pipeline.
     */
    doValidateInput(): Array_Type<string> | null;

    /**
     * Use this method to implement your own custom input validation logic after the default
     * input validation for the pipeline is performed.
     */
    afterValidateInput(): Array_Type<string> | null;

    /**
     * This method is used to validate the user provided inputs passed in when creating an
     * instance of this pipeline, and throws an error if checks fail.
     *
     * This method sequentially, calls {@link #beforeValidateInput}, {@link #doValidateInput} and
     * {@link #afterValidateInput}, collects the errors generated from input validation and
     * throws an error if any checks fail.
     */
    validateInput(): void;

    /**
     * This method will either validate the input and output types of each pipe in this pipeline or create the default
     * pipe if nothing was specified by the user.
     */
    static withDefaultOrValidate(fields?: Map_Type<any, any>, defaults?: Map_Type<string, Type>, expectedBindings?: Map_Type<string, any>): Map_Type<any, any> | null;

    /**
     * This provides a map of the field names of this pipeline to their corresponding vertices in a generated instance
     * of this pipeline. For this pipeline, the fields mapped to vertices are: {@link maskingPipe},
     * {@link #riskScorePipe}, {@link #riskScoreNormalizationPipe}, and {@link #alertingPipe}.
     */
    getFieldNamesToVertexNamesMap(): Map_Type<string, Array_Type<string>>;

    /**
     * This API provides an interface to generate a new pipeline instance from an existing trained instance of this
     * pipeline, by replacing the sub-pipes corresponding to fields on this pipeline with new sub-pipes.
     *
     * For each sub-pipe provided in `updatedPipes`, this can be done in 2 ways:
     *
     * 1. Replace only the user provided fields on the sub-pipe, while cloning the rest of the sub-pipe. This is the
     * default behavior of the API, and corresponds to setting `fullOverride` to false. In this case, the provided
     * sub-pipes should not be persisted to the database, and the updated sub-pipes MUST be trained.
     *
     * 2. Replace the entire sub-pipe with the user provided sub-pipe. This can be done by setting `fullOverride` to true.
     * In this case, the provided sub-pipes MUST be trained.
     *
     *
     * The updated sub-pipes MUST be trained in order to be able to generate a new pipeline instance. This API will not only
     * replace the fields corresponding to the sub-pipes, but will also update the vertices of the new pipeline instance
     * to reflect the new sub-pipes. This will allow the new pipeline instance to be used for inference.
     *
     * @param updatedPipes
     *        A map from field names on this pipeline to instances of TRAINED sub-pipes that will be used to
     *        replace the existing sub-pipes in the newly generated pipeline. The keys of this map can be found by
     *        calling {@link #getFieldNamesToVertexNamesMap} on a pipeline instance. For the
     *        {@link ReliabilityRiskMl.Pipeline}, the keys for the map can be: `maskingPipe`, `riskScorePipe`,
     *        `riskScoreNormalizationPipe`, `alertingPipe` and `interpreter`. If using an
     *        {@link ReliabilityRiskMl.ReconstructionPipeline}, additionally keys corresponding to `scalerPipe` and
     *        `reconstructionPipe` can be specified.
     * @param fullOverride
     *        If set to false, the provided `updatedPipes` will clone the existing pipeline's sub-pipe, and only update the
     *        fields that are in the user provided sub-pipe. This is the default behavior. The provided
     *        `updatedPipes` should not be persisted to the database, and the updated sub-pipes MUST be trained.
     *
     *        If set to true, the provided `updatedPipes` will be used to completely replace the existing pipeline vertices with
     *        the provided sub-pipes. The provided `updatedPipes` MUST be trained.
     *
     *        Note that if a sub-pipe field in the original pipeline and the user provided sub-pipe for that field are of
     *        different types, then for that field, this API will always perform a full override, regardless of the value of
     *        `fullOverride`.
     *
     *        If `fullOverride` is set to true, the user-provided `updatedPipes` must already be trained. If `fullOverride` is
     *        false, then the user-provided `updatedPipes` need not be trained themselves, but the modified pipes
     *        after the partial override must be trained.
     *
     * @return A new pipeline instance with the updated sub-pipes and vertices.
     */
    replaceByFieldNames(updatedPipes: Map_Type<string, any>, fullOverride?: boolean = 'false'): MlPipeline<any, any, any, any, any>;

    /**
     * This API provides an interface to generate a new pipeline instance from an existing trained pipeline instance
     * pipeline, by replacing the fields on this pipeline with a new pipeline. The new pipeline can then be trained.
     *
     * For each sub-pipe provided in `updatedPipes`, this can be done in 2 ways:
     *
     * 1. Replace only the user provided fields on the sub-pipe, while cloning the rest of the sub-pipe. This is the
     * default behavior of the API, and corresponds to setting `fullOverride` to false. In this case, the provided
     * sub-pipes should not be persisted to the database.
     *
     * 2. Replace the entire sub-pipe with the user provided sub-pipe. This can be done by setting `fullOverride` to true.
     *
     *
     * @param updatedPipes
     *        A map from field names on this pipeline to instances of sub-pipes that will be used to
     *        replace the existing sub-pipes in the newly generated pipeline. The keys of this map can be found by
     *        calling {@link #getFieldNamesToVertexNamesMap} on a pipeline instance. For the
     *        {@link ReliabilityRiskMl.Pipeline}, the keys for the map can be: `maskingPipe`, `riskScorePipe`,
     *        `riskScoreNormalizationPipe`, `alertingPipe` and `interpreter`. If using an
     *        {@link ReliabilityRiskMl.ReconstructionPipeline}, additionally keys corresponding to `scalerPipe` and
     *        `reconstructionPipe` can be specified.
     * @param fullOverride
     *        If set to false, the provided `updatedPipes` will clone the existing pipeline's sub-pipe, and only update the
     *        fields that are in the user provided sub-pipe. This is the default behavior. The provided
     *        `updatedPipes` should not be persisted to the database.
     *
     *        If set to true, the provided `updatedPipes` will be used to completely replace the existing pipeline vertices with
     *        the provided sub-pipes.
     *
     *        Note that if a sub-pipe field in the original pipeline and the user provided sub-pipe for that field are of
     *        different types, then for that field, this API will always perform a full override, regardless of the value of
     *        `fullOverride`.
     *
     * @return A new pipeline instance with the updated sub-pipes.
     */
    replaceFields(updatedPipes: Map_Type<string, any>, fullOverride?: boolean = 'false'): MlPipeline<any, any, any, any, any>;

    /**
     * This API returns an instance of an {@link MlInterpreter} that should be used for the out of the box {@link #riskScorePipe}s.
     * @param pipe
     *        The type of the {@link #riskScorePipe} for which the {@link MlInterpreter} should be created
     * @param setBindings
     *        Set this field to true if the returned {@link MlInterpreter} should already have it's input bindings set, and be used
     *        for inference directly, without having to train this {@link ReliabilityRiskMl.Pipeline}.
     *
     * @return An instance of the {@link MlInterpreter} that should be used with the pipe passed in, if any.
     */
    static getInterpreterForPipe(pipe?: Type, setBindings?: boolean = 'false'): MlInterpreter<any, any> | null;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
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

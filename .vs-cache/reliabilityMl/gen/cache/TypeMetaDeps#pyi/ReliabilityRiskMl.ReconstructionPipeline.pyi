#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.SeedData import SeedData
from c3.platform.Include import Include
from c3.platform.GenerateDataSpec import GenerateDataSpec
from c3.platform.FlowGraph.Port import FlowGraph.Port
from c3.platform.SeedDataDeps import SeedDataDeps
from c3.platform.RefreshMetricsBatchJob import RefreshMetricsBatchJob
from c3.platform.WithKey import WithKey
from c3.platform.ActionStats import ActionStats
from c3.platform.EvalSpec import EvalSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ObjError import ObjError
from c3.platform.ValueSpec import ValueSpec
from c3.platform.MlModel import MlModel
from c3.platform.MlOperationRun import MlOperationRun
from c3.platform.Data import Data
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SchemaInfo import SchemaInfo
from c3.platform.MlConvertSpec import MlConvertSpec
from c3.platform.RefreshMetricsSpec import RefreshMetricsSpec
from c3.platform.CheckReferencesResult import CheckReferencesResult
from c3.platform.GetMissingSpec import GetMissingSpec
from c3.platform.MlScoringMetric import MlScoringMetric
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.platform.RefreshDefaultFieldsSpec import RefreshDefaultFieldsSpec
from c3.platform.ScanStats import ScanStats
from c3.platform.Workflow.Engine import Workflow.Engine
from c3.platform.RefreshAnalyticsSpec import RefreshAnalyticsSpec
from c3.platform.ValidatePathResult import ValidatePathResult
from c3.platform.MlTemplate.Pipeline import MlTemplate.Pipeline
from c3.platform.MlOperationRun import MlOperationRun
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Workflow.Status import Workflow.Status
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.MergeSpec import MergeSpec
from c3.platform.MlPipeline import MlPipeline
from c3.platform.MergeAllSpec import MergeAllSpec
from c3.platform.MlPipeline.Vertex import MlPipeline.Vertex
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ExportDataSpec import ExportDataSpec
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.MlPipelineToWorkflowTranslator import MlPipelineToWorkflowTranslator
from c3.platform.Log.Entry.Action import Log.Entry.Action
from c3.platform.ObjList import ObjList
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Stream import Stream
from c3.platform.RunCreatedOrUpdatedBatchJob import RunCreatedOrUpdatedBatchJob
from c3.platform.FlowGraph.Edge import FlowGraph.Edge
from c3.platform.RemoveAllSpec import RemoveAllSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Transaction import Transaction
from c3.platform.RefreshBatchJob import RefreshBatchJob
from c3.platform.Hpo.Spec import Hpo.Spec
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.BatchFetchSpec import BatchFetchSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.EvaluateArrowStreamSpec import EvaluateArrowStreamSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.FlowGraph.Vertex import FlowGraph.Vertex
from c3.platform.TimeRange import TimeRange
from c3.platform.MlInterpreter import MlInterpreter
from c3.platform.ExportDataResult import ExportDataResult
from c3.platform.Hp.ParamSpace import Hp.ParamSpace
from c3.platform.FetchResult import FetchResult
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Meta import Meta
from c3.platform.Duration import Duration
from c3.platform.PersistableWritable import PersistableWritable
from c3.platform.RefreshCalcFieldsBatchJob import RefreshCalcFieldsBatchJob
from c3.platform.PushStream import PushStream
from c3.platform.RunCreatedOrUpdatedSpec import RunCreatedOrUpdatedSpec
from c3.platform.ImportDataSpec import ImportDataSpec
from c3.platform.CreateBatchObjStreamSpec import CreateBatchObjStreamSpec
from c3.platform.RedShiftExportDataSpec import RedShiftExportDataSpec
from c3.platform.TouchSpec import TouchSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.EntityType import EntityType
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.TSEvalSpec import TSEvalSpec
from c3.platform.MlPipeline.PipeVertex.Authoring import MlPipeline.PipeVertex.Authoring
from c3.reliabilityMl.ReliabilityMlDatasetPreparationRunResolvable import ReliabilityMlDatasetPreparationRunResolvable
from c3.platform.Filter import Filter
from c3.platform.FlowGraphVisualizeSpec import FlowGraphVisualizeSpec
from c3.platform.CheckReferencesSpec import CheckReferencesSpec
from c3.platform.Type import Type
from c3.platform.Type import Type
from c3.platform.CellTuple import CellTuple
from c3.platform.Feature.Set import Feature.Set
from c3.platform.MlOperationRun import MlOperationRun
from c3.platform.ValueType import ValueType
from c3.platform.Promise import Promise
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.EvaluateResult import EvaluateResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.RefreshDepsSpec import RefreshDepsSpec
from c3.platform.FlowGraphReplaceSpec import FlowGraphReplaceSpec
from c3.reliabilityMl.ReliabilityMlDatasetPreparationRun import ReliabilityMlDatasetPreparationRun
from c3.platform.SetType import SetType
from c3.platform.Workflow.Engine.DeploySpec import Workflow.Engine.DeploySpec
from c3.platform.Hpo.Experiment import Hpo.Experiment
from c3.platform.RefreshAnalyticsBatchJob import RefreshAnalyticsBatchJob
from c3.platform.Exclude import Exclude
from c3.platform.ClearCollectionSpec import ClearCollectionSpec
from c3.platform.Hp.SearchSpace import Hp.SearchSpace
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.StartImportDataSpec import StartImportDataSpec
from c3.platform.MlOperationRun import MlOperationRun
from c3.platform.ObjBatch import ObjBatch
from c3.platform.WorkflowExecutorRun import WorkflowExecutorRun
from c3.platform.RefreshUniqueIndexesBatchJob import RefreshUniqueIndexesBatchJob
from c3.platform.MlOperationSpec import MlOperationSpec
from c3.platform.ArrayType import ArrayType
from c3.platform.TsInvalidation import TsInvalidation
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.reliabilityMl.ReliabilityRiskMl.Pipeline.ScoringMetric import ReliabilityRiskMl.Pipeline.ScoringMetric
from c3.platform.MlPipe import MlPipe
from c3.platform.Promise import Promise
from c3.reliabilityMl.ReliabilityRiskMl.ReconstructionPipeline import ReliabilityRiskMl.ReconstructionPipeline
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Obj import Obj
from c3.platform.RefreshCalcFieldsSpec import RefreshCalcFieldsSpec
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.ImportDataResult import ImportDataResult
from c3.platform.EvaluateSpec import EvaluateSpec
from c3.platform.Workflow import Workflow
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SecondaryDsUpsert import SecondaryDsUpsert
from c3.platform.Promise import Promise
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.ScanSpec import ScanSpec
from c3.platform.RefreshDefaultFieldsBatchJob import RefreshDefaultFieldsBatchJob
from c3.platform.PushStreamWithStats import PushStreamWithStats
from c3.platform.RefreshUniqueIndexesSpec import RefreshUniqueIndexesSpec
from c3.platform.MlPipeline.PipeVar import MlPipeline.PipeVar
from c3.platform.FlowGraph.Edge import FlowGraph.Edge
from c3.platform.VersionEdit import VersionEdit
from c3.platform.MlPipe.Bindings import MlPipe.Bindings
from c3.platform.ExistsSpec import ExistsSpec
from c3.platform.MapBuilder import MapBuilder

# Python definitions for the C3 type ReliabilityRiskMl.ReconstructionPipeline

DX = TypeVar('DX')
DY = TypeVar('DY')
DO = TypeVar('DO')

class ReconstructionPipeline(Generic[DX, DY, DO], ReliabilityRiskMl.Pipeline[DX, DY, DO, { featureContributions: MlInterpretResult[any] }], ReliabilityMlDatasetPreparationRunResolvable):
    """
    This type represents a pipeline that extends {@link ReliabilityRiskMl.Pipeline} to include a reconstruction pipe.
    The {@link #reconstructionPipe} will produce residual data that will feed into the {@link #riskScorePipe} to produce
    risk scores. The inputs to this pipeline remain the same, but this pipeline includes 2 (or 3) additional outputs:
    - `reconstructions`: The reconstruction of the original input.
    - `residuals`: The residual between the reconstruction and original input.
    - `latentProjection` (if applicable): The latent encoding of the original input used to generate the reconstruction.
    
    @remarks this represents a made instance of ReliabilityRiskMl.ReconstructionPipeline
    """
    
    vertices: Optional[Array[MlPipeline.Vertex]]=None
    """
    List of all vertices in this graph.
    """

    edges: Optional[Array[FlowGraph.Edge[MlPipeline.Vertex]]]=None
    """
    List of all edges in this graph.
    """

    vertexConnections: Optional[Map[str, Map[str, Any]]]=None
    """
    Optimized double-linked-list-like data structure for traversing next and previous vertices. See {@link #precomputeVertexConnections}
    to opt-in to using this data structure. This representation is more beneficial to use when heavily using the
    `next*` and `prev*` methods.
    
    Outer map:
    Key - vertex string id
    Value - mapping of ports to vertices, i.e. "Inner map"
    
    Inner map:
    Key - port string name
    Value - [vertex string id for vertices connected to port]
            OR if key is "$self", then the vertex instance corresponding to the outer map key
    
    Example:
    ```
    const1 -----\            /---- action2
                 action1 ----
    const2 -----/            \---- action3
    ```
    The `vertexConnections` map would look like:
    ```
    {
      "const1": {
        "$self": < Workflow.Const, id="const1" >,
        "output": ["action1"]
      },
      "const2": {
        "$self": < Workflow.Const, id="const2" >,
        "output": ["action1"]
      },
      "action1": {
        "$self": < Workflow.Action, id="action1" >,
        "inputA": ["const1"],
        "inputB": ["const2"],
        "output": ["action2", "action3"]
      },
      "action2": {
        "$self": < Workflow.Action, id="action2" >,
        "input": ["action1"]
      },
      "action3": {
        "$self": < Workflow.Action, id="action3" >,
        "input": ["action1"]
      },
    }
    ```
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

    scoreNames: Optional[Set[str]]=None
    """
    Names of the {@link #score} outputs for this machine learning pipeline.
    """

    trainRun: Optional[WorkflowExecutorRun]=None
    """
    Single workflow run triggered by training of this {@link MlPipeline}.
    
    NOTE: due to the immutability of pipelines, each training produces a new instance, which means that each pipeline
    instance can only be associated with a single training run.
    Also, keep in mind that a {@link WorkflowExecutorRun} might be periodically cleaned up, so this reference might
    not be always resolvable.
    """

    trainStatus: Optional[Workflow.Status]=None
    """
    Status of {@link #trainRun}. Holds important meta information (e.g. `startedby`) that needs to be persisted with this pipeline,
    even if the {@link #trainRun} reference is eventually cleaned up.
    """

    doNotAutoUpsert: Optional[bool]=None
    """
    Controls the behavior of {@link MlPipeline#beforeMake}
    If set, all the {@link MlPipe}s referenced by this {@link MlPipeline} are not upserted.
    """

    lookbackDuration: Optional[Duration]=None
    """
    The total lookback duration of all pipes in this pipeline. Used for internal data handling in the model
    deployment framework.
    """

    hasTarget: Optional[bool]=None
    """
    If set, the {@link #riskScorePipe} must accept a `target` as an input.
    """

    maskingPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]
    """
    The masking pipe is responsible for outputting a new feature set given a feature set and a mask. The specified pipe
    must accept as input a {@link Tuple} of `features` and `mask`, and must output `maskedFeatures`. If no pipe is
    specified, the default {@link ReliabilityRiskMl.Masking.SemisupervisedMaskingPipe} will be used.
    """

    alertingPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]
    """
    The alerting pipe is responsible for outputting an `alert` based on risk score data. The specified pipe must accept
    as input a single {@link Data} and output a {@link Data} with a key specified by {@link ReliabilityMLOutputConfig}.
    If no pipe is specified, the default {@link ReliabilityRiskMl.Alerting.PercentileDurationPipe} will be used.
    """

    riskScorePipe: Optional[MlPipe[Any, Any, Any, Any, Any]]
    """
    The risk score pipe is responsible for outputting a risk score based on an input feature set. The specified pipe
    must accept as input a single {@link Data} and output a {@link Data} with a key specified by
    {@link ReliabilityMLOutputConfig}. If no pipe is specified, the default
    {@link ReliabilityRiskMl.RiskScoreComputation.SigmoidWeightedComputationPipe} will be used.
    """

    riskScoreNormalizationPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]
    """
    The risk score normalization pipe is responsible for scaling risk score values to be between 0 and 1. The specified
    pipe must accept a single {@link Data} as input and output a {@link Data} with a key specified by
    {@link ReliabilityMLOutputConfig}. If no pipe is specified, the default
    {@link ReliabilityRiskMl.RiskScoreScaling.ThresholdScalerPipe} will be used.
    """

    interpreter: Optional[MlInterpreter[Any, Any]]=None
    """
    The interpreter is responsible for interpreting the {@link #riskScorePipe}. If you are using a custom riskScorePipe,
    please make sure to provide your custom interpreter for it here. On the other hand, if your riskScorePipe is
    {@link ReliabilityRiskMl.RiskScoreComputation.SimpleComputationPipe},
    {@link ReliabilityRiskMl.RiskScoreComputation.WeightedComputationPipe},
    {@link ReliabilityRiskMl.RiskScoreComputation.DirectionallyWeightedComputationPipe} or
    {@link ReliabilityRiskMl.RiskScoreComputation.SigmoidWeightedComputationPipe}, their corresponding
    interpreters ({@link ReliabilityRiskMl.Pipeline.Interpreter.SimpleResidualInterpreter},
    {@link ReliabilityRiskMl.Pipeline.Interpreter.WeightedResidualInterpreter},
    {@link ReliabilityRiskMl.Pipeline.Interpreter.DirectionallyWeightedResidualInterpreter}) or
    {@link ReliabilityRiskMl.Pipeline.Interpreter.SigmoidWeightedResidualInterpreter} will be used
    automatically.
    """

    pipelineScoringMetrics: Optional[Map[str, ReliabilityRiskMl.Pipeline.ScoringMetric]]=None
    """
    A map of user-specified {@link ReliabilityRiskMl.Pipeline.ScoringMetric} instances for scoring. The keys
    of the map should be the user-specified names of the metrics, and the values should be the actual
    {@link ReliabilityRiskMl.Pipeline.ScoringMetric} instances.
    """

    trainingMasks: Optional[Array[str]]=None
    """
    A list of all the categories of masks that must be applied to remove rows from
    the features data while training the pipeline.
    There are, overall, 7 types of masks. By default, 6 of them will be applied to
    remove unwanted rows from the features dataset to train the model.
    Change this field to construct a pipeline which will mask out only the data you want.
    """

    inferenceMasks: Optional[Array[str]]=None
    """
    A list of all the categories of masks that must be applied to remove rows from
    the features data while performing pipeline inference.
    There are, overall, 7 types of masks. By default, 4 of them will be applied to
    remove unwanted rows from the features dataset to run model inference.
    Change this field to construct a pipeline which will mask out only the data you want.
    """

    includeLatentProjection: Optional[bool]=None
    """
    If set, the {@link #reconstructionPipe} must also include `latentProjection` in its output.
    """

    doNotApplyScaling: Optional[bool]=None
    """
    If set to false, the {@link scalerPipe} will scale the input data before training the {@link #reconstructionPipe}. At
    inference time, it will also re-scale the output of {@link #reconstructionPipe} back to original scales of input
    data
    """

    scalerPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]=None
    """
    The scaler pipe is responsible for scaling the input data before training the {@link #reconstructionPipe}. At
    inference time, it will also re-scale the outputs of {@link #reconstructionPipe} back to original scales of input
    data. If no pipe is specified, an {@link MlPipe} converted from a native sklearn standard scaler will be used.
    If you want to use a different scaler, please make sure the native model has an "inverse_transform" method that
    can be used to re-scale the reconstructions.
    """

    reconstructionPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]=None
    """
    The reconstruction pipe is responsible for outputting a reconstruction of the original input, which may or may not
    be from the latent encoding of the original input, and a residual between the input and reconstruction. The
    specified pipe must accept a single {@link Data} as input and output {@link Tuple} of `reconstructions` and
    `residuals`. If no pipe is specified, the default {@link ReliabilityRiskMl.Reconstruction.Conv1dAutoencoderPipe}
    will be used.
    """

    reconstructionPipelineScoringMetrics: Optional[Map[str, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]]=None
    """
    A map of user-specified {@link ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric} instances for scoring.
    For {@link ReliabilityRiskMl.ReconstructionPipeline}, use this field instead of {@link pipelineScoringMetrics}
    to score. The keys of the map should be the user-specified names of the metrics, and the values should be the
    actual {@link ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric} instances.
    
    Default:
    ```py
    {'mae': c3.ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric(
       actualScoringMetric = c3.MlMeanAbsoluteErrorMetric(),
       outputsToSelect = ['scaledReconstructions'],
       targetsToSelect = ['scaledFeatures']
    )}
    ```
    """

    pipeToInterpret: Optional[str]=None
    """
    The pipe that should be passed to the interpreter to generate feature contributions. By default, the {@link riskScorePipe}
    is used to generate feature contributions.
    """
    def __init__(self, vertices: Optional[Array[MlPipeline.Vertex]]=None, edges: Optional[Array[FlowGraph.Edge[MlPipeline.Vertex]]]=None, vertexConnections: Optional[Map[str, Map[str, Any]]]=None, id: Optional[str]=None, versionEdits: Optional[Array[VersionEdit]]=None, name: Optional[str]=None, meta: Optional[Meta]=None, version: Optional[int]=None, typeWithBindings: Optional[Type]=None, userUpdatedFields: Optional[Array[str]]=None, hidden: Optional[bool]=None, userOwned: Optional[bool]=None, typeIdent: Optional[str]=None, frozen: Optional[bool]=None, trained: Optional[bool]=None, trainingErrors: Optional[str]=None, flattenInput: Optional[bool]=None, hyperparamOverrides: Optional[Map[str, Any]]=None, hyperparamSearchSpace: Optional[Hp.SearchSpace]=None, hpoSpec: Optional[Hpo.Spec]=None, hpoExperiment: Optional[Hpo.Experiment]=None, experiment: Optional[Any]=None, scoreNames: Optional[Set[str]]=None, trainRun: Optional[WorkflowExecutorRun]=None, trainStatus: Optional[Workflow.Status]=None, doNotAutoUpsert: Optional[bool]=None, lookbackDuration: Optional[Duration]=None, hasTarget: Optional[bool]=None, maskingPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]=None, alertingPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]=None, riskScorePipe: Optional[MlPipe[Any, Any, Any, Any, Any]]=None, riskScoreNormalizationPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]=None, interpreter: Optional[MlInterpreter[Any, Any]]=None, pipelineScoringMetrics: Optional[Map[str, ReliabilityRiskMl.Pipeline.ScoringMetric]]=None, trainingMasks: Optional[Array[str]]=None, inferenceMasks: Optional[Array[str]]=None, includeLatentProjection: Optional[bool]=None, doNotApplyScaling: Optional[bool]=None, scalerPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]=None, reconstructionPipe: Optional[MlPipe[Any, Any, Any, Any, Any]]=None, reconstructionPipelineScoringMetrics: Optional[Map[str, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]]=None, pipeToInterpret: Optional[str]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def fromJsonString(cls, json: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def fromXmlString(cls, xml: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def replaceType(self, old: Type, new: Type) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def validateObj(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def withoutFieldAtPath(self, path: str) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def withoutField(self, field: str) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def withoutField(self, field: FieldType) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def withoutFields(self, fields: Array[str]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def defaultField(self, field: str) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def defaultField(self, field: FieldType) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def unsetField(self, field: str) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def unsetField(self, field: FieldType) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def removeField(self, field: str) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def removeField(self, field: FieldType) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def mergeJson(self, json: any) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def sumObj(self, other: Obj, deep: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def toBuilder(self) -> ObjBuilder[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def make(cls, s: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def afterMake(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def resolveForDatasetPreparationRun(self, datasetPreparationRun: ReliabilityMlDatasetPreparationRun=None) -> ReliabilityMlDatasetPreparationRunResolvable:
    """
    This function resolves certain parameters of the current instance based on the dataset prepared
    during the given `ReliabilityMlDatasetPreparationRun`. It adjusts parameters in such a way that they
    align with the data characteristics (e.g., the number of features or other data-specific attributes).
    
    This function is part of automating the machine learning pipeline, eliminating the need for manual input
    from users for some parameters. The system will intelligently adjust based on the dataset's characteristics,
    making it easier for users to run the training process with minimal configuration.
    
    @param datasetPreparationRun
           The `ReliabilityMlDatasetPreparationRun` instance that contains the prepared dataset
           to be used for training the model.
    
    @returns a resolved `ReliabilityMlDatasetPreparationRunResolvable` instance with parameters adjusted
             to match the dataset's characteristics.
    
    Example usage:
     - If `ReliabilityRiskMl.Reconstruction.Conv1dAutoencoderPipe#numFeatures` is set to 5, but the dataset
       has 23 features, the function will adjust the parameter value so that the pipeline can train correctly.
    """
        ...
    def remakeTemplate(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def _repr_(self) -> Union[str]:
    """
    Do not generate java signatures for these methods and instead implement in py
    """
        ...
    def _reprHtml_(self) -> Union[str]:
    """
    Implementation of _repr_html_() function
    """
        ...
    def precomputeVertexConnections(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Used as an optimization for heavy graph traversal usage. See {@link #vertexConnections} for more details.
    NOTE: it is *strongly* advised to remove the {@link #vertexConnections} field from the graph after running
    the graph operations.
    
    @return this {@link FlowGraph} instance with the {@link #vertexConnections} field computed and set.
    """
        ...
    def sources(self) -> Union[Array[MlPipeline.Vertex]]:
    """
    @return all "source" vertices for the graph. A source vertex is a vertex that has no input edges.
    """
        ...
    def sinks(self) -> Union[Array[MlPipeline.Vertex]]:
    """
    @return all "sink" vertices for the graph. A sink vertex is a vertex that has no output edges.
    """
        ...
    def inputs(self) -> Union[Map[str, FlowGraph.Port]]:
    """
    @return all "input" ports on sources in the graph. These represent expected named inputs to be provided when
            executing the graph. The key is the name of the input, which is taken from the port name, and is expected
            to be unique.
    """
        ...
    def outputs(self) -> Union[Map[str, FlowGraph.Port]]:
    """
    @return all "output" ports on sinks in the graph. These represent expected named outputs resulting from the
            graph execution. The key is the name of the output, which is taken from the port name, and is expected
            to be unique.
    """
        ...
    def verticesById(self) -> Union[Map[str, FlowGraph.Vertex]]:
    """
    @return keyed collection of vertices.
    Key - vertex id
    Value - vertex instance
    """
        ...
    @overload
    def nextEdgesFor(self, port: FlowGraph.Port) -> Union[Array[FlowGraph.Edge[MlPipeline.Vertex]]]:
    """
    @param port
              output port for which to find the next edge(s).
    @return edge(s) that the given output port is a part of, as a `from` port.
    """
        ...
    @overload
    def nextEdgesFor(self, vertex: MlPipeline.Vertex) -> Union[Array[FlowGraph.Edge[MlPipeline.Vertex]]]:
    """
    Overload for {@link #nextEdgesFor}, except with a vertex arg.
    """
        ...
    def nextEdgesForPort(self, port: FlowGraph.Port) -> Union[Array[FlowGraph.Edge[MlPipeline.Vertex]]]:
        ...
    def nextEdgesForVertex(self, vertex: MlPipeline.Vertex) -> Union[Array[FlowGraph.Edge[MlPipeline.Vertex]]]:
        ...
    def prevEdgeFor(self, port: FlowGraph.Port) -> Union[FlowGraph.Edge[MlPipeline.Vertex]]:
    """
    @param port
              input port for which to find the previous edge.
    @return edge that the given input port is a part of, as a `to` port.
    """
        ...
    def prevEdgesFor(self, vertex: MlPipeline.Vertex) -> Union[Array[FlowGraph.Edge[MlPipeline.Vertex]]]:
    """
    Same as {@link #prevEdgeFor}, except with a vertex arg.
    """
        ...
    @overload
    def nextPortsFor(self, port: FlowGraph.Port) -> Union[Array[FlowGraph.Port]]:
    """
    @param port
              output port for which to find the next port(s).
    @return input port(s) that the given output port connects to.
    """
        ...
    @overload
    def nextPortsFor(self, vertex: MlPipeline.Vertex) -> Union[Array[FlowGraph.Port]]:
    """
    Overload for {@link #nextPortsFor}, except with a vertex arg.
    """
        ...
    def nextPortsForPort(self, port: FlowGraph.Port) -> Union[Array[FlowGraph.Port]]:
        ...
    def nextPortsForVertex(self, vertex: MlPipeline.Vertex) -> Union[Array[FlowGraph.Port]]:
        ...
    def prevPortFor(self, port: FlowGraph.Port) -> Union[FlowGraph.Port]:
    """
    @param port
              input port for which to find the previous port.
    @return output port that the given input port is connected to.
    """
        ...
    def prevPortsFor(self, vertex: MlPipeline.Vertex) -> Union[Array[FlowGraph.Port]]:
    """
    Same as {@link #prevPortFor}, except with a vertex arg.
    """
        ...
    @overload
    def nextVerticesFor(self, port: FlowGraph.Port) -> Union[Array[MlPipeline.Vertex]]:
    """
    @param port
              output port for which to find the next vertex(s).
    @return vertex(s) that the given output port connects to.
    """
        ...
    @overload
    def nextVerticesFor(self, vertex: MlPipeline.Vertex) -> Union[Array[MlPipeline.Vertex]]:
    """
    Override for {@link #nextVerticesFor}, except with a vertex arg.
    """
        ...
    def nextVerticesForPort(self, port: FlowGraph.Port) -> Union[Array[MlPipeline.Vertex]]:
        ...
    def nextVerticesForVertex(self, vertex: MlPipeline.Vertex) -> Union[Array[MlPipeline.Vertex]]:
        ...
    def prevVertexFor(self, port: FlowGraph.Port) -> Union[MlPipeline.Vertex]:
    """
    @param port
              input port for which to find the previous vertex.
    @return vertex that the given input port is connected to.
    """
        ...
    def prevVerticesFor(self, vertex: MlPipeline.Vertex) -> Union[Array[MlPipeline.Vertex]]:
    """
    Same as {@link #prevVertexFor}, except with a vertex arg.
    """
        ...
    @classmethod
    def edgeType(cls) -> Type:
    """
    @return type for edge in this graph.
    """
        ...
    @classmethod
    def vertexType(cls) -> Type:
    """
    @return type for vertex in this graph.
    """
        ...
    @classmethod
    def portType(cls) -> Type:
    """
    @return type for port in this graph.
    """
        ...
    @classmethod
    def makeEdge(cls, fromPort: FlowGraph.Port, toPort: FlowGraph.Port) -> FlowGraph.Edge[MlPipeline.Vertex]:
    """
    Helper constructor for an edge.
    @param fromPort
              source port for new edge.
    @param toPort
              destination port for new edge.
    @return new edge connecting the two ports.
    """
        ...
    def vertexForId(self, id: str) -> Union[MlPipeline.Vertex]:
    """
    @param id
              id for the vertex.
    @return the vertex corresponding to the id, or null if not found.
    """
        ...
    def vertexForName(self, name: str) -> Union[MlPipeline.Vertex]:
    """
    @param name
              name for the vertex.
    @return the vertex corresponding to the name, or null if not found.
    """
        ...
    def visualize(self, spec: FlowGraphVisualizeSpec=None) -> Union[Any]:
    """
    Print visualization of graph structure
    @param static
              State if the visualization should be static or interactive. The default is an interactive visualization which
              allows clicking on different node and highlighting all nodes that are between the clicked node and the source
              nodes
    @return a string containing the visualization of graph in SVG or interactive HTML format.
    """
        ...
    def validateGraph(self) -> Union[Array[str]]:
    """
    Post-construction validation of the graph structure (including cycles, vertex ports without edges).
    Results in an error, if validation fails.
    
    @return list of detected warnings.
    """
        ...
    def eachVertex(self, action: Callable[[Union[MlPipeline.Vertex]]]) -> None:
    """
    Invokes action for each vertex in this FlowGraph.
    """
        ...
    def mapVertices(self, mapper: Callable[[Union[MlPipeline.Vertex]], Union[T]]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Transforms each vertex in this FlowGraph by applying provided lambda function.
    """
        ...
    def foldVertices(self, initial: T, folder: Callable[[Union[MlPipeline.Vertex], Union[T]], Union[T]]) -> Union[T]:
    """
    @return value that is a result of aggregation of all vertices by provided lambda and initial value.
    """
        ...
    def visit(self, type: Type[[FlowGraph.Visitor]], ctx: C) -> Union[C]:
    """
    Visits each vertex in this FlowGraph by applying methods from provided visitor type. Throws an error upon
    encountering a vertex of unknown type (ie, vertex type is not handled in visitor).
    
    @param type
           FlowGraph.Visitor subtype declaring static methods to apply to strongly typed FlowGraph.Vertex subtypes
    @param ctx
           Context passed between each vertex visit
    """
        ...
    def _visit(self, type: Type[[FlowGraph.Visitor]], ctx: C, unknownVertexAction: Callable[[Union[MlPipeline.Vertex], Union[C]], Union[C]]=None) -> Union[C]:
    """
    Visits each vertex in this FlowGraph by applying methods from provided visitor type. Applies provided lambda upon
    encountering a vertex of unknown type.
    """
        ...
    def topologicalSort(self, reverse: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Topologically sort this graph (only works for directed acyclic graph).
    @return a new FlowGraph with vertices ordered in topological ordering
    """
        ...
    def ancestorGraph(self, sink: FlowGraph.Vertex) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Creates a new FlowGraph where `vertex` sink is now the only sink vertex
    @return a new FlowGraph with vertices and edges that come before sink
    """
        ...
    def replaceVertex(self, oldVertex: FlowGraph.Vertex, newVertex: FlowGraph.Vertex, doNotMerge: bool=None, removeDisconnectedEdges: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Returns a copy of this FlowGraph where the provided old vertex has been replaced with the provided new vertex.
    The new vertex will always take on the id of the vertex it is replacing; furthermore, it will also take on the
    ports of the replaced vertex, plus any additional ports it already has. As a result, the new vertex will naturally
    be connected by all of the old vertex's edges.
    If `doNotMerge` is set, then the vertex and edges will be updated to have the new id, and ports will not be merged.
    If `removeDisconnectedEdges` is set, then edges that are no longer connected (due to the replacement) will be removed
    from the resulting graph. Note this is only relevant when `doNotMerge` is set.
    """
        ...
    @overload
    def replaceVertices(self, oldVertices: Array[FlowGraph.Vertex], newVertex: FlowGraph.Vertex, spec: FlowGraphReplaceSpec=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Returns a copy of this FlowGraph where the provided vertices has been replaced with the provided new vertex. The
    new Vertex can retain edges to the rest of the FlowGraph (as though the old vertices were monolithic).
    {@link FlowGraphReplaceVerticesSpec} specifies whether these edges are retained.
    """
        ...
    @overload
    def replaceVertices(self, oldVertices: Array[FlowGraph.Vertex], newVertices: Array[FlowGraph.Vertex], newEdges: Array[FlowGraph.Edge[FlowGraph.Vertex]]=None, spec: FlowGraphReplaceSpec=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Generically replaces a subgraph within a {@link Workflow} with another subgraph, expressed as a collection of
    new vertices and edges.
    @param old
              subgraph of original {@link Workflow}, represented as a list of vertices.
    @param newVertices
              new vertices in the replacement subgraph (could also be a single vertex if list is size 1).
    @param newEdges
              new edges in the replacement subgraph (do not need to provide if single vertex)
    @param spec
              specify the connections from
    @return
    """
        ...
    @overload
    def removeVertex(self, toRemove: FlowGraph.Vertex) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Returns a copy of this FlowGraph where the provided vertex and all of its edges have been removed. Vertex can be
    provided via instance or vertex id. If used on a middle vertex, this will result in a FlowGraph that is not fully
    connected.
    """
        ...
    @overload
    def removeVertex(self, idToRemove: str) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
        ...
    def removeVertices(self, toRemove: Array[FlowGraph.Vertex]=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Returns a copy of this FlowGraph where all provided vertices and all of their edges have been removed. Depending on
    which vertices are removed, this could result in a FlowGraph that is not fully connected.
    """
        ...
    def mergeWith(self, other: ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Merges this {@link FlowGraph} with another {@link FlowGraph}. Duplicate vertices with the same
    {@link FlowGraph.Vertex#id} will be merged. This method will throw an exception if two vertices have the same id
    but different ports to ensure that we do not accidentally disconnect any edges.
    """
        ...
    def dotDigraph(self) -> Union[str]:
    """
    Returns dot Digraph representation of this tree
    """
        ...
    @classmethod
    def pruneUnusedVertices(cls, vertices: Array[MlPipeline.Vertex]=None, edges: Array[FlowGraph.Edge[FlowGraph.Vertex]]=None) -> Union[Array[MlPipeline.Vertex]]:
    """
    Returns a list of vertices for which at least one edge exists.
    """
        ...
    def train(self, x: DX, y: DY=None, spec: MlOperationSpec=None) -> MlOperationRun[Any]:
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
    def trainSync(self, x: DX, y: DY=None, spec: MlOperationSpec=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Blocking, synchronous version of {@link #train}.
    """
        ...
    def isTrainable(self) -> bool:
    """
    Detects if this {@link MlPipeline} is trainable
    An {@link MlPipeline} is trainable if at least one of it's constituent {@link MlPipe}s is trainable
    @return whether this {@link MlPipeline} is trainable.
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
    def process(self, x: DX, spec: MlOperationSpec=None) -> Union[MlOperationRun[DO]]:
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
    def processSync(self, x: DX, spec: MlOperationSpec=None) -> Union[DO]:
    """
    Blocking, synchronous version of {@link #process}.
    """
        ...
    def isProcessable(self) -> bool:
    """
    Validates this instance of {@link MlProcessable} to determine whether it is valid to call {@link #process}.
    The default implementation assumes all instances of {@link MlProcessable} are processable.
    
    @return whether this is processable.
    """
        ...
    def score(self, x: DX, y: DY=None, context: =None, spec: MlOperationSpec=None) -> Union[MlOperationRun[Map[str, float]]]:
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
    def scoreSync(self, x: DX, y: DY=None, context: =None, spec: MlOperationSpec=None) -> Union[Map[str, float]]:
    """
    Blocking, synchronous version of {@link #score}.
    """
        ...
    def scoreAll(self, x: DX, y: DY=None, context: =None, spec: MlOperationSpec=None) -> Union[MlOperationRun[Map[str, float]]]:
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
    def scoreAllSync(self, x: DX, y: DY=None, context: =None, spec: MlOperationSpec=None) -> Union[Map[str, float]]:
    """
    Blocking, synchronous version of {@link #scoreAll}.
    """
        ...
    def interpret(self, x: DX, spec: MlOperationSpec=None) -> Union[MlOperationRun[]]:
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
    def interpretSync(self, x: DX, context: Map[str, Any]=None, spec: MlOperationSpec=None) -> Union[]:
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
    def allCached(cls, doNotProduceAll: bool=None) -> Union[Stream[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return stream of all available Cached instances.
    """
        ...
    @classmethod
    def find(cls, filter: str=None, doNotProduceAll: bool=None) -> Union[Stream[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return existing instances of this type that satisfy filter from data cache.
    """
        ...
    @classmethod
    def findBy(cls, field: str, value: Any, doNotProduceAll: bool=None) -> Union[Stream[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
           `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
    @return existing instances of this type that satisfy filter from data cache.
    """
        ...
    @classmethod
    def findByCacheKey(cls, key: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
    
    @see forCacheKey
    @see getCached
    """
        ...
    @classmethod
    def forCacheKey(cls, key: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    @return cached instance by the key.
    
    @see forCacheKey
    @see findByCacheKey
    """
        ...
    def getCached(self) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    @return cached instance.
    
    @see forCacheKey
    @see findByCacheKey
    """
        ...
    def refreshCache(self) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def produce(cls, key: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Should produce an entry for the cache key. This method should not be called directly.
    """
        ...
    @classmethod
    def produceAll(cls) -> Union[Map[str, ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
    """
    Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
    """
        ...
    @classmethod
    def doProduceAll(cls) -> Union[Map[str, ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def fetch(cls, filter: Filter) -> FetchResult[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]]:
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
    def get(self, include: str=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
    
    @param include
              Optional include spec to retrieve.
    @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
            those fields will be returned. Otherwise the entire obj will be returned.
    """
        ...
    def getSpecific(self, include: str=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def getMissing(self, spec: GetMissingSpec) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def getDirect(self, include: str=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def applyReverseEdit(self, versionEdit: VersionEdit) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def fromString(cls, s: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def create(self, spec: UpsertSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def createBatch(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def createBatchObjStream(cls, objs: Stream[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], spec: CreateBatchObjStreamSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def update(self, srcObj: ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]=None, spec: UpsertSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def upsert(self, srcObj: ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]=None, spec: UpsertSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def merge(self, spec: MergeSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def merge(self, mergeInclude: str, spec: MergeSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def touch(self, spec: TouchSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
    
    @param spec
              Various parameters that control the operation of function.
    
    @return The created or updated obj.
    """
        ...
    @classmethod
    def updateBatch(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], srcObjs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]=None, spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def updateObjs(cls, objs: Callable[[], Union[Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def upsertBatch(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], srcObjs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]=None, spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def upsertObjs(cls, objs: Callable[[], Union[Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def touchBatch(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], spec: TouchSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def mergeBatch(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], spec: MergeSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def mergeBatch(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def mergeObjs(cls, objs: Callable[[], Union[Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]], mergeInclude: str, spec: MergeSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def mergeAll(cls, mergeObj: ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO], spec: MergeAllSpec=None) -> Union[int]:
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
    def mergeAll(cls, mergeObj: ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO], mergeInclude: str, spec: MergeAllSpec=None) -> Union[int]:
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
    def removeBatch(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def replace(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def unremove(self) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def beforeCreate(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]) -> ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Upsert persistable references in this {@link MlPipe}, and replace the complete objects with respective entity references.
    DEVELOPER NOTE: MlPipe developers need to implement this method to successfully register and load `MlPipe`
    objects from `ModelRegistry`, if there are additional fields in `MlPipe` that hold entity references in addition to
    platform supported defaults.
    @return an instance of {@link MlPipe} with complete reference objects replaced with respective entity references.
    """
        ...
    @classmethod
    def beforeUpdate(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]) -> ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def beforeRemove(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]) -> ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def afterCreate(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]) -> Union[Array[ObjError]]:
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
    def afterUpdate(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]) -> Union[Array[ObjError]]:
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
    def afterRemove(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]) -> Union[Array[ObjError]]:
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
    def startImportData(cls, spec: StartImportDataSpec=None) -> PushStream[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    @return a push stream to import instances of this type.
    """
        ...
    @classmethod
    def startImportDataWithStats(cls, spec: StartImportDataSpec=None) -> PushStreamWithStats[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def withoutIdentity(self) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
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
    def typeOfBatch(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]) -> Union[Array[EntityType]]:
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
    def dbEcho(cls, template: ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]=None, count: int=None, sendBack: bool=None) -> Union[int]:
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
    def callbackLogic(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], callback: Callable[[Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]], Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]=None) -> ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Implements a simple logic for Persistable call-backs like before create by looping each input obj and
    calling a transform for it.
    
    
    callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
    """
        ...
    @classmethod
    def afterCallbackLogic(cls, objs: Array[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]], callback: Callable[[Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]], Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]=None) -> Union[Array[ObjError]]:
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
    def publish(self, subPath: str=None, contentType: str=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    def removeSeedDataBatch(cls, objs: Array[SeedData]=None, spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def createSeedData(self, spec: UpsertSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Admin function to add a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries
    added this way are treated as though they were provisioned, rather than added by a user.
    
    @param spec
              Various parameters that control the operation of function.
    @return created obj instance, same as {@link Persistable#create} return value.
    """
        ...
    @classmethod
    def createSeedDataBatch(cls, objs: Array[SeedData]=None, spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def updateSeedData(self, srcObj: SeedData=None, spec: UpsertSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Admin function to update a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data
    entries updated this way are treated as though they were provisioned, rather than updated by a user.
    
    @param spec
              Various parameters that control the operation of function.
    @return updated obj instance, same as {@link Persistable#update} return value.
    """
        ...
    @classmethod
    def updateSeedDataBatch(cls, objs: Array[SeedData]=None, srcObjs: Array[SeedData]=None, spec: UpsertSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def clearUserUpdates(self, spec: MergeSpec=None) -> Union[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]:
    """
    Admin function to clear the {@link userUpdatedFields} field for a seed data obj instance.
    
    @param spec
              Various parameters that control the operation of function.
    @return updated obj instance, same as {@link Persistable#update} return value.
    """
        ...
    @classmethod
    def clearUserUpdatesBatch(cls, objs: Array[SeedData]=None, spec: MergeSpec=None) -> Union[ObjList[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    def dependencies(self) -> Union[SeedDataDeps[ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]]]:
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
    The scoring metrics used in this pipeline.
    """
        ...
    @classmethod
    def prefix(cls) -> Union[str]:
    """
    Used internally to generate a name per pipe type. This function should be overridden for each child type.
    """
        ...
    @classmethod
    def convert(cls, model: Any, spec: MlConvertSpec=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
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
    @overload
    def freeze(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Freezes an {@link MlPipe}
    @return modified copy of this {@link MlPipe} that cannot be trained
    """
        ...
    @overload
    def freeze(self, paths: Array[str]=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Freezes an {@link MlPipeline}
    @param paths
       The paths to the desired {@link MlPipe}s to freeze.
       See {@link MlPipeline} for details on path definition.
       If unspecified, then the entire pipeline is frozen.
    @return a modified copy of {@link MlPipeline} with the appropriate pipe(s) frozen that cannot be trained
    """
        ...
    @overload
    def unfreeze(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Unfreezes an {@link MlPipe}
    @return modified copy of this {@link MlPipe} that can be trained
    """
        ...
    @overload
    def unfreeze(self, paths: Array[str]=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Unfreezes an {@link MlPipeline}
    @param paths
       The paths to the desired {@link MlPipe}s to unfreeze.
       See {@link MlPipeline} for details on path definition.
       If unspecified, then the entire pipeline is unfrozen.
    @return a modified copy of {@link MlPipeline} with the appropriate pipe(s) unfrozen that can be trained
    """
        ...
    def newAuthoringVertex(self, x: DX=None, y: DY=None, context: =None, suffix: str='""', spec: MlConvertSpec=None) -> MlPipeline.PipeVertex.Authoring:
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
    @overload
    def hyperparams(self, hps: Union[str,Array[str]]=None) -> Map[str, Any]:
    """
    {@see #withHyperparams}
    """
        ...
    @overload
    def hyperparams(self, hps: Map[str, Any]=None) -> Map[str, Any]:
    """
    {@see #withHyperparams}
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
    @inheritdoc
    """
        ...
    @overload
    def hyperparamSpaces(self, hps: Union[str,Array[str]]=None) -> Map[str, Hp.ParamSpace]:
    """
    Used for accessing the parameter spaces of hyperparameters on an {@link MlAtomicPipe}. Can be used on
    {@link MlAtomicPipe} or on {@link MlPipeline}.
    @param hps
              single value or list of paths of hyperparameters on the pipe.
    @return a map of hyperparameter names to their respective parameter spaces.
    """
        ...
    @overload
    def hyperparamSpaces(self, hps: Map[str, str]=None) -> Map[str, Hp.ParamSpace]:
    """
    Used for accessing the parameter spaces of hyperparameters on one or more {@link MlAtomicPipe}s in a
    {@link MlPipeline}.
    
    @param hps
              a map of {@link MlAtomicPipe} paths to their respective hyperparameter names.
    @return a map of {@link MlAtomicPipe} paths and their hyperparameter names to their respective
    {@link Hp.ParamSpace}.
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
    @overload
    def cleanUp(self) -> None:
    """
    Clean up (i.e. remove from db or delete from filesystem) any artifacts or dependencies related to this {@link MlPipe}.
    Clean up this {@link MlPipe} after artifacts or dependencies are cleaned up.
    For example,
    If {@link MlPipeline}, remove all nested {@link MlPipe}s and this {@link MlPipeline} from DB
    If {@link MlAtomicPipe}, delete model files from filesystem and remove this {@link MlAtomicPipe} from DB
    """
        ...
    @overload
    def cleanUp(self, cleanUpNested: bool=None) -> None:
    """
    Clean up (i.e. remove from db or delete from filesystem) any artifacts or dependencies related to this {@link MlPipeline}.
    Clean up this {@link MlPipeline} after artifacts or dependencies are cleaned up.
    @param cleanUpNested
       If True, clean up all nested {@link MlPipe}s recursively
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
    def byReference(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Returns the pipe with just the {@link MlPipe#id} field populated if the pipe has an id. Otherwise, the pipe will
    be returned as-is.
    """
        ...
    def varBindings(self) -> MlPipe.Bindings:
    """
    Returns the DX, DY, DS, DO, and DI bindings for the pipe. Note that this does not return
    {@link MlPipe.Bindings#typeStr}.
    """
        ...
    def xNames(self) -> Union[Array[str]]:
    """
    Names of the x inputs for this machine learning pipeline.
    """
        ...
    def yNames(self) -> Union[Array[str]]:
    """
    Names of the y inputs for this machine learning pipeline.
    """
        ...
    def contextNames(self) -> Union[Array[str]]:
    """
    Names of the context inputs for this machine learning pipeline.
    """
        ...
    def outNames(self) -> Union[Array[str]]:
    """
    Names of the {@link #process} outputs for this machine learning pipeline.
    """
        ...
    def interpretationNames(self) -> Union[Array[str]]:
    """
    Names of the {@link #interpret} outputs for this machine learning pipeline.
    """
        ...
    def pipes(self) -> Union[Map[str, MlPipe[Any, Any, Any, Any, Any]]]:
    """
    The {@link MlPipe}s contained in this machine learning pipeline, indexed by name.
    """
        ...
    def vertexAt(self, path: str) -> MlPipeline.Vertex:
    """
    Extract the vertex wrapping a {@link MlPipe} from this possibly-nested machine learning pipeline, specified
    by a path of vertex names.
    
    @param path
       The path to the desired {@link MlPipeline.Vertex}. See {@link MlPipeline} for details on path definition.
    @return the {@link MlPipeline.Vertex} specified by the path.
    """
        ...
    def validate(self) -> bool:
    """
    Validates the pipeline object.
    
    @return True if the pipeline object is valid.
    """
        ...
    def pipeAt(self, path: str) -> Union[MlPipe[Any, Any, Any, Any, Any]]:
    """
    Extract a given {@link MlPipe} by path.
    
    @param path
       The path to the desired {@link MlPipe}. See {@link MlPipeline} for details on path definition.
    @return the {@link MlPipe} specified by the path.
    """
        ...
    def interpreterAt(self, path: str) -> Union[MlInterpreter[Any, Any]]:
    """
    Extract a given {@link MlInterpreter} by path.
    
    @param path
       The path to the desired {@link MlInterpreter}. See {@link MlPipeline} for details on path definition.
    @return the {@link MlInterpreter} specified by the path.
    """
        ...
    def pipesAt(self, paths: Array[str]) -> Union[Array[MlPipe[Any, Any, Any, Any, Any]]]:
    """
    Extract multiple {@link MlPipe}s by path.
    
    @param paths
       The paths to the desired {@link MlPipe}s. See {@link MlPipeline} for details on path definition.
    @return A list of {@link MlPipe}s corresponding to the input paths.
    """
        ...
    def interpretersAt(self, paths: Array[str]) -> Union[Array[MlInterpreter[Any, Any]]]:
    """
    Extract multiple {@link MlInterpreter}s by path.
    
    @param paths
       The paths to the desired {@link MlInterpreter}s. See {@link MlPipeline} for details on path definition.
    @return A list of {@link MlInterpreter}s corresponding to the input paths.
    """
        ...
    def pipePaths(self, level: int='1') -> Union[Array[str]]:
    """
    Lists full paths of pipes within this pipeline. This function is intended to help the user provide
    paths to APIs like {@link #pipeAt}.
    @param level
              the maximum nesting depth to list pipes for. The default is depth 1, which
              lists all immediate children pipes of this pipeline. Depth 0 will return pipes at any level of nesting.
    @return list of paths, one per pipe, up to and including the specified nesting level.
    """
        ...
    def interpreterPaths(self, level: int='1') -> Union[Array[str]]:
    """
    Lists the full path of every interpreter within this pipeline. This function is intended to help the user provide
    paths to APIs like {@link #interpreterAt}.
    @param level
              the maximum nesting depth to list interpreters for. The default is depth 1, which
              lists all immediate children interpreters of this pipeline. Depth 0 will return interpreters at any level of nesting.
    @return list of paths, one per interpreter, up to and including the specified nesting level.
    """
        ...
    @classmethod
    def workflowTranslator(cls) -> Union[MlPipelineToWorkflowTranslator]:
    """
    Used during {@link MlPipeline} execution of data consuming or data producing operations.
    
    @return the translator that maps objects of this Type to {@link MlFlow}.
    """
        ...
    def translate(self, x: DX=None, y: DY=None, context: =None, spec: MlOperationSpec=None, opName: Array[str]=None, workflowId: str=None) -> :
    """
    Used during {@link MlPipeline} execution of data consuming or data producing operations to translate
    an {@link MlPipeline] to an executable {@link Workflow}.
    
    @see #translateAndExecute
    """
        ...
    def translateAndExecute(self, x: DX=None, y: DY=None, context: =None, spec: MlOperationSpec=None, opName: Array[str]=None, workflowId: str=None) -> MlOperationRun[Any]:
    """
    Used during {@link MlPipeline} execution of data consuming or data producing operations.
    
    @param x
              Data to use as input to the model.
    @param y
              Data to use as "y" or "label" to use as ground truth.
    @param context
              Additional contextual data to use for execution of {@link MlDataOpName}.
    @param spec
              Customizations for execution.
    @param opName
              List of {@link MlDataOpName} representing current operations
    @param workflowId
              Optional user defined "id" for {@link Workflow} created by {@link MlPipelineToWorkflowTranslator}
    @return the {@link MlOperationRun} object that represents the launched {@link MlDataOpName}. The caller should
              use the APIs on the operation run object to query status and to get the final result.
    """
        ...
    def validateOutputIndices(self, x: DX, processOutput: DO, outNames: Array[str]=None) -> None:
    """
    Checks if the process output from this {@link MlPipeline} is indexed and satisfies the below rules.
    If the rules are not satisfied, an exception is raised.
    - For multi-input pipeline, no index validation check is done and an exception is raised.
    - For single-input, single/multi output pipeline, an exception is raised if any of the below is violated:
      - The input must have a subject ID index {@link Feature.SUBJECT}.
      - The outputs must have a subject ID index {@link Feature.SUBJECT}.
      - The index values of {@link Feature.SUBJECT} of output must be a subset of index values of {@link Feature.SUBJECT} of input.
    @param x
       Data used as "x" or "input" to processing.
    @param processOutput
       Output of {@link MlPipeline#process}.
    @param outNames
       Optional output names to perform validation check. If no outNames are specified, all outputs are validated.
    """
        ...
    def train_verify(self, x: DX=None, y: DY=None, spec: MlOperationSpec=None) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Launch the training verification. Uses the authoring-based reference executor, which directly executes the
    operation from the authoring description.
    @param x
              Data to use as "x" or "input" to training.
    @param y
              Data to use as "y" or "label" to supervised training. If not provided, then training is unsupervised.
    @param spec
              Customizations for training execution.
    @return a {@link MlPipeline} object that represents the trained pipeline.
    """
        ...
    def process_verify(self, x: DX=None, spec: MlOperationSpec=None) -> Union[DO]:
    """
    Launch the process verification of the trained pipeline. Uses the authoring-based reference executor, which directly executes the
    operation from the authoring description.
    @param x
              Data to use as "x" or "input" to training.
    @param spec
              Customizations for training execution.
    @return the output from processing.
    """
        ...
    def trainOnly(self, x: DX=None, y: DY=None, spec: MlOperationSpec=None) -> MlOperationRun[Any]:
    """
    Same as {@link #train}, except will not do a hyperparameter search. Used in underlying implementation of {@link #train}
    to do the non-search portion.
    """
        ...
    def bestPipeline(self, hpoExperiment: Any) -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    Helper function used when doing hyperparameter search in {@link #train}.
    @param hpoExperiment
              {@link Hpo.ExperimentBase} object associated with {@link #search}.
    @return an untrained {@link MlPipeline} that has the best hyperparameters from the searchRun.
    """
        ...
    def trainOnServer(self, x: DX, y: DY=None, spec: MlOperationSpec=None) -> MlOperationRun[Any]:
        ...
    def processOnServer(self, x: DX, spec: MlOperationSpec=None) -> Union[MlOperationRun[DO]]:
        ...
    def scoreOnServer(self, x: DX, y: DY=None, context: =None, spec: MlOperationSpec=None) -> Union[MlOperationRun[Map[str, float]]]:
        ...
    def scoreAllOnServer(self, x: DX, y: DY=None, context: =None, spec: MlOperationSpec=None) -> Union[MlOperationRun[Map[str, float]]]:
        ...
    def interpretOnServer(self, x: DX, spec: MlOperationSpec=None) -> Union[MlOperationRun[]]:
        ...
    def withHyperparamSpaces(self, paramSpaces: Map[str, Map[str, Hp.ParamSpace]]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Add or change a set of parameter spaces for the hyperparameters of an {@link MlPipeline}.
    Example usage:
    Given a pipeline with sample {@link MlAtomicPipe} authored as using Linear Regression,
    Standard Scaler and MinMax Scaler models from Sklearn. To update various hyperparameters spaces of pipes in a pipeline,
    simply provide a map in the following format:
    ```py
    x, y = mla.var(), mla.var()
    lr_pipe = c3.MlPipe.convert(native_lr, name='lr')
    ss_pipe = c3.MlPipe.convert(native_ss, name='ss')
    mm_pipe = c3.MlPipe.convert(native_mm, name='mm')
    x_mm = mm_pipe(x)
    y_ss = ss_pipe(y)
    y_out = lr_pipe(x_mm, y_ss)
    pipeline = mla.pipeline(x={'x':x}, y={'y':y}, out={'y_pred':y_out})
    updated_pipeline = pipeline.withHyperparamSpaces({'ss': {'with_mean': c3.Hp.ParamSpace.Categorical.fromValues([True, False])}})
    ```
    
    @param paramSpaces
              Map key represents the path to hyperparameter name. Map value represents the parameter spaces to be
              defined for each respective hyperparameter.
    @return a {@link MlPipeline} with added parameter spaces for each desired hyperparameter.
    """
        ...
    def replacePipe(self, pipePath: str, newPipe: MlPipe[Any, Any, Any, Any, Any]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Used for replacing a pipe in an MlPipeline based on the path provided.
    @param pipePath
              path of {@link MlAtomicPipe} to be replaced.
    @param newPipe
              new {@link MlAtomicPipe} to replace the existing pipe at the pipePath.
    @return {@link MlPipeline} with the newPipe present at the pipePath provided.
    """
        ...
    def replaceInterpreter(self, interpreterPath: str, newInterpreter: MlInterpreter[Any, Any]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Used for replacing an interpreter in an MlPipeline based on the path provided.
    @param interpreterPath
              path of {@link MlInterpreter} to be replaced.
    @param newInterpreter
              new {@link MlInterpreter} to replace the existing interpreter at the interpreterPath.
    @return {@link MlPipeline} with the newInterpreter present at the interpreterPath provided.
    """
        ...
    def flatten(self) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Flattens a pipeline with nested inner pipelines by extracting the pipes of the inner pipelines
    and adding it to the outer pipeline such that no vertex in the pipeline graph represents a {@link MlPipeline}.
    @return the flattened {@link MlPipeline}
    """
        ...
    def trainExecutionMetadata(self) -> Union[Map[str, Log.Entry.Action]]:
    """
    @return execution metadata associated with the training of this instance of {@link MlPipeline}. The key
               is the vertex name, and the value is the aggregated results.
    """
        ...
    def plotTrainExecutionTimestamps(self) -> Union[Any]:
    """
    Create a visualization plotting start and end timestamps for all vertices in {@link #trainExecutionMetadata}.
    @return the native plot object.
    """
        ...
    def repr(self) -> Union[str]:
    """
    Implementation of {@link MlPipeline#_repr_} with a better method name
    """
        ...
    @classmethod
    def processInJava(cls, trained: MlPipeline[Any, Any, Any, Any, Any], x: DX=None, spec: MlOperationSpec=None) -> Union[DO]:
    """
    Helper function to forcibly execute a `process` from java.
    """
        ...
    def createModel(self, projectName: str, x: Union[Map[str, Feature.Set],Feature.Set]=None, y: Union[Map[str, Feature.Set],Feature.Set]=None) -> MlModel:
    """
    Construct an instance of {@link MlModel} from the given parameters.
    Currently, this supports creating an instance of platform provided {@link MlModel} only.
    For creating instances of subtypes of {@link MlModel}, it is recommended that users implement the equivalent logic
    in individual applications.
    If an instance of {@link MlProject} with the given projectName is not found, an error is raised.
    @param projectName
       Name of the {@link MlProject} to associate the {@link MlModel} with.
    @param x
       Map of {@link MlPipeline} x input names to corresponding {@link Feature.Set sets} of features.
       Can be set to {@link Feature.Set} if there is only one x input to {@link MlPipeline}.
    @param y
       Map of {@link MlPipeline} y input names to corresponding {@link Feature.Set sets} of features.
       Can be set to {@link Feature.Set} if there is only one y input to {@link MlPipeline}.
    
    @return a {@link MlModel} encompassing this {@link MlPipeline}.
    """
        ...
    @classmethod
    def setLogLevel(cls, logLevel: str, children: bool=None) -> None:
    """
    @see Workflow.Run#setLogLevel
    Change the log level for {@link MlPipeline} related Types.
    
    @param logLevel
              The log level to set on the Logger for all {@link MlPipeline} related Types
    @param children
              If set to True, then this method will also update the log level on the Loggers for
              {@link Workflow.Run} related types.
    """
        ...
    def authoringCode(self, level: int='0', freezePipes: bool=None, asString: bool=None, varPrefix: str=None) -> Union[str]:
    """
    Generates authoring code, as text or Jupyter cell, that the user can execute to create an equivalent pipeline.
    
    @param level
              specifies the level of nesting to generate authoring code up to. Level 0 indicates code generation
              for the outer pipeline only. Level 1 indicates code generation for outer pipeline and one level of
              inner pipelines only, etc. Level -1 indicates generate code for all nesting levels.
    @param freezePipes
              if set, then freeze all pipes in the generated code.
    @param asString
              if set, return generated code as string. Otherwise, a new Jupyter cell will be created with the generated
              code populating it.
    @param varPrefix
              specifies the prefix, if any, for vars representing nested pipelines. Primarily intended to be used by
              internal implementation of nested levels.
    @return the generated code as string, if asString is set, otherwise nothing.
    """
        ...
    def extractBackgroundData(self) -> Union[Any]:
    """
    Extracts background {@link Data} instances from interpreter instances in this {@link MlPipeline}.
    
    @returns a native python dictionary whose keys are json of {@link Data}
    and values are {@link Data} instances.
    """
        ...
    @classmethod
    def persistData(cls, inputToPersist: Any=None) -> Union[Any]:
    """
    Checks if {@link Data} instances within the input are persisted and persists them if they are not persisted.
    This API persists inputs to {@link MlPipeline} by recursively traversing its input for instances of {@link Data}
    @param inputToPersist
        Input to be persisted. Either C3 Types: {@link Data}, {@link Tuple}, {@link Map}, or {@link Obj},
        or Python-native types: pandas.DataFrame or dict.
    @return persisted #inputToPersist
    """
        ...
    @classmethod
    def closeData(cls, inputToClose: Any=None, closeMultiNodeData: bool=None) -> None:
    """
    Helper function to close intermediate {@link Data} instances.
    This API closes data inputs which is either {@link Data} or named {@link Tuple} of {@link Data} or map of {@link Data}.
    @param inputToClose
        Input to be closed
    @param closeMultiNodeData
        If True, data supporting multi-node such as {@link Data.Persisted} will be closed.
    """
        ...
    @classmethod
    def extractData(cls, sourceToExtract: Any=None, extractedData: Any=None, doNotRecurse: bool=None) -> Union[Any]:
    """
    Extracts {@link Data} instances from sourceToExtract and populates extractedData.
    Returns a map whose keys are json of {@link Data} and values are {@link Data} instances.
    sourceToExtract could be one of {@link Data}, Map or named Tuple or List of {@link Data}, {@link MlInterpretResult}
    or {@link Hpo.ExperimentBase} or a c3 object instance containing {@link Data}.
    @param sourceToExtract
        Input to extract {@link Data} instances from.
    @param extractedData
        A native python dictionary whose keys are json of {@link Data} and values are {@link Data} instances.
    @param doNotRecurse
        If True, disable recursively checking nested c3 object instances for {@link Data}.
    @returns a native python dictionary whose keys are json of {@link Data}
    and values are {@link Data} instances.
    """
        ...
    def setDoNotAutoUpsert(self, value: bool, reverse: bool=None) -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    Sets {@link MlPipeline#doNotAutoUpsert} to True/False for this {@link MlPipeline} and for all nested {@link MlPipeline}s
    referenced by this {@link MlPipeline}.
    @param value
        Boolean value for {@link MlPipeline#doNotAutoUpsert}
    @param reverse
       Specifies the order to set {@link MlPipeline#doNotAutoUpsert} for nested {@link MlPipeline}s.
       If true, deeply nested {@link MlPipeline#doNotAutoUpsert} are set before this {@link MlPipeline}.
    @return a new instance of {@link MlPipeline}.
    """
        ...
    @classmethod
    def fromV7Json(cls, pipeline: str, runtimeRequirements: Array[str]) -> ReliabilityRiskMl.ReconstructionPipeline[DX, DY, DO]:
    """
    Pipeline constructor - based on the stringified v7 `MLSerialPipeline` json and runtime requirements.
    Currently only supports the following `MLLeafPipe` conversions: {@link SklearnLikePipeV7}.
    @param pipeline
              json dump of the v7 `MLSerialPipeline`.
    @param runtimeRequirements
              yamls for the declared runtime requirement in v7 for the runtime corresponding to the `MLLeafPipe`s,
              in order of appearance in the `MLSerialPipeline`.
    @return constructed V8-operable {@link MlPipeline}.
    """
        ...
    def ensureDeployed(self, deploySpec: Workflow.Engine.DeploySpec=None, opNames: Array[str]='[MlDataOpName.PROCESS, MlDataOpName.SCORE, MlDataOpName.INTERPRET]') -> Array[Workflow.Engine]:
    """
    Used to ensure that the pipes of the pipeline are deployed using {@link Workflow.Engine}.
    All the pipes within the pipeline will be deployed in the same {@link Workflow.Engine}.
    @param deploySpec
              the deploy spec to use for deploying all the pipes in the pipeline.
    @param opName
              List of {@link MlDataOpName} for which pipeline operations we need the pipeline to be deployed.
    """
        ...
    def ensureDeployedPipes(self, deploySpecs: Array[]=None, opNames: Array[str]='[MlDataOpName.PROCESS, MlDataOpName.SCORE, MlDataOpName.INTERPRET]') -> Array[Workflow.Engine]:
    """
    Used to ensure that the pipes of the pipeline are deployed using {@link Workflow.Engine}.
    Multiple pipes could be deployed as part of the same engine. see {@link ensureDeployed} if prefer to deploy all the pipes
     in the same engine.
    @param deploySpecs
              A list of deploy specs and list of pipe paths that should be deployed using these specs.
              The pipe paths should match the input of {@link #pipesAt}.
    @param opName
              List of {@link MlDataOpName} representing for which pipeline operations we need the pipeline to be deployed.
    """
        ...
    def generatePipeline(self) -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    Generate and return a new pipeline using the fields set on this Type.
    
    DEVELOPER NOTE: The recommended approach is to use {@link MlPipeline.Authoring#pipeline} (i.e. compose the
    pipeline using the typical user flow). The returned pipeline will be absorbed into the instance of this Type.
    """
        ...
    def generateAndAbsorbPipeline(self, force: bool=None) -> MlTemplate.Pipeline[Any, Any, Any, Any, Any]:
    """
    Invoke {@link #generatePipeline} and absorb the pipeline into this instance of {@link #MlTemplate.Pipeline}
    
    @param force
              If set, invoke {@link #generatePipeline} even if this template already has a set of vertices and edges
              as long as the pipeline is not upserted. Otherwise, generate a pipeline only if this template does not
              contain any vertices.
    """
        ...
    @classmethod
    def maskCategories(cls) -> Array[str]:
    """
    Returns a superset of all the categories of masks that may be applied to train/infer
    from a pipeline.
    Only a subset of these masks can be used in the {@link trainingMasks} or the
    {@link inferenceMasks} fields.
    """
        ...
    def validateTrainingAndInferenceMasks(self) -> Union[str]:
    """
    Validates if the {@link trainingMasks} and {@link inferenceMasks} provided are a subset
    of {@link maskCategories}. If not, an error will be thrown.
    """
        ...
    def beforeValidateInput(self) -> Union[Array[str]]:
    """
    Use this method to implement your own custom input validation logic before the default
    input validation for the pipeline is performed.
    """
        ...
    def doValidateInput(self) -> Union[Array[str]]:
    """
    This method is used to perform the default validation of the user provided inputs
    when creating an instance of this pipeline.
    """
        ...
    def afterValidateInput(self) -> Union[Array[str]]:
    """
    Use this method to implement your own custom input validation logic after the default
    input validation for the pipeline is performed.
    """
        ...
    def validateInput(self) -> None:
    """
    This method is used to validate the user provided inputs passed in when creating an
    instance of this pipeline, and throws an error if checks fail.
    
    This method sequentially, calls {@link #beforeValidateInput}, {@link #doValidateInput} and
    {@link #afterValidateInput}, collects the errors generated from input validation and
    throws an error if any checks fail.
    """
        ...
    @classmethod
    def withDefaultOrValidate(cls, fields: Map[Any, Any]=None, defaults: Map[str, Type]=None, expectedBindings: Map[str, Any]=None) -> Union[Map[Any, Any]]:
    """
    This method will either validate the input and output types of each pipe in this pipeline or create the default
    pipe if nothing was specified by the user.
    """
        ...
    def getFieldNamesToVertexNamesMap(self) -> Map[str, Array[str]]:
    """
    This provides a map of the field names of this pipeline to their corresponding vertices in a generated instance
    of this pipeline. For this pipeline, the fields mapped to vertices are: {@link maskingPipe},
    {@link #riskScorePipe}, {@link #riskScoreNormalizationPipe}, and {@link #alertingPipe}.
    """
        ...
    def replaceByFieldNames(self, updatedPipes: Map[str, Any], fullOverride: bool='false') -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    This API provides an interface to generate a new pipeline instance from an existing trained instance of this
    pipeline, by replacing the sub-pipes corresponding to fields on this pipeline with new sub-pipes.
    
    For each sub-pipe provided in `updatedPipes`, this can be done in 2 ways:
    
    1. Replace only the user provided fields on the sub-pipe, while cloning the rest of the sub-pipe. This is the
    default behavior of the API, and corresponds to setting `fullOverride` to false. In this case, the provided
    sub-pipes should not be persisted to the database, and the updated sub-pipes MUST be trained.
    
    2. Replace the entire sub-pipe with the user provided sub-pipe. This can be done by setting `fullOverride` to true.
    In this case, the provided sub-pipes MUST be trained.
    
    
    The updated sub-pipes MUST be trained in order to be able to generate a new pipeline instance. This API will not only
    replace the fields corresponding to the sub-pipes, but will also update the vertices of the new pipeline instance
    to reflect the new sub-pipes. This will allow the new pipeline instance to be used for inference.
    
    @param updatedPipes
           A map from field names on this pipeline to instances of TRAINED sub-pipes that will be used to
           replace the existing sub-pipes in the newly generated pipeline. The keys of this map can be found by
           calling {@link #getFieldNamesToVertexNamesMap} on a pipeline instance. For the
           {@link ReliabilityRiskMl.Pipeline}, the keys for the map can be: `maskingPipe`, `riskScorePipe`,
           `riskScoreNormalizationPipe`, `alertingPipe` and `interpreter`. If using an
           {@link ReliabilityRiskMl.ReconstructionPipeline}, additionally keys corresponding to `scalerPipe` and
           `reconstructionPipe` can be specified.
    @param fullOverride
           If set to false, the provided `updatedPipes` will clone the existing pipeline's sub-pipe, and only update the
           fields that are in the user provided sub-pipe. This is the default behavior. The provided
           `updatedPipes` should not be persisted to the database, and the updated sub-pipes MUST be trained.
    
           If set to true, the provided `updatedPipes` will be used to completely replace the existing pipeline vertices with
           the provided sub-pipes. The provided `updatedPipes` MUST be trained.
    
           Note that if a sub-pipe field in the original pipeline and the user provided sub-pipe for that field are of
           different types, then for that field, this API will always perform a full override, regardless of the value of
           `fullOverride`.
    
           If `fullOverride` is set to true, the user-provided `updatedPipes` must already be trained. If `fullOverride` is
           false, then the user-provided `updatedPipes` need not be trained themselves, but the modified pipes
           after the partial override must be trained.
    
    @return A new pipeline instance with the updated sub-pipes and vertices.
    """
        ...
    def replaceFields(self, updatedPipes: Map[str, Any], fullOverride: bool='false') -> MlPipeline[Any, Any, Any, Any, Any]:
    """
    This API provides an interface to generate a new pipeline instance from an existing trained pipeline instance
    pipeline, by replacing the fields on this pipeline with a new pipeline. The new pipeline can then be trained.
    
    For each sub-pipe provided in `updatedPipes`, this can be done in 2 ways:
    
    1. Replace only the user provided fields on the sub-pipe, while cloning the rest of the sub-pipe. This is the
    default behavior of the API, and corresponds to setting `fullOverride` to false. In this case, the provided
    sub-pipes should not be persisted to the database.
    
    2. Replace the entire sub-pipe with the user provided sub-pipe. This can be done by setting `fullOverride` to true.
    
    
    @param updatedPipes
           A map from field names on this pipeline to instances of sub-pipes that will be used to
           replace the existing sub-pipes in the newly generated pipeline. The keys of this map can be found by
           calling {@link #getFieldNamesToVertexNamesMap} on a pipeline instance. For the
           {@link ReliabilityRiskMl.Pipeline}, the keys for the map can be: `maskingPipe`, `riskScorePipe`,
           `riskScoreNormalizationPipe`, `alertingPipe` and `interpreter`. If using an
           {@link ReliabilityRiskMl.ReconstructionPipeline}, additionally keys corresponding to `scalerPipe` and
           `reconstructionPipe` can be specified.
    @param fullOverride
           If set to false, the provided `updatedPipes` will clone the existing pipeline's sub-pipe, and only update the
           fields that are in the user provided sub-pipe. This is the default behavior. The provided
           `updatedPipes` should not be persisted to the database.
    
           If set to true, the provided `updatedPipes` will be used to completely replace the existing pipeline vertices with
           the provided sub-pipes.
    
           Note that if a sub-pipe field in the original pipeline and the user provided sub-pipe for that field are of
           different types, then for that field, this API will always perform a full override, regardless of the value of
           `fullOverride`.
    
    @return A new pipeline instance with the updated sub-pipes.
    """
        ...
    @classmethod
    def getInterpreterForPipe(cls, pipe: Type=None, setBindings: bool='false') -> Union[MlInterpreter[Any, Any]]:
    """
    This API returns an instance of an {@link MlInterpreter} that should be used for the out of the box {@link #riskScorePipe}s.
    @param pipe
           The type of the {@link #riskScorePipe} for which the {@link MlInterpreter} should be created
    @param setBindings
           Set this field to true if the returned {@link MlInterpreter} should already have it's input bindings set, and be used
           for inference directly, without having to train this {@link ReliabilityRiskMl.Pipeline}.
    
    @return An instance of the {@link MlInterpreter} that should be used with the pipe passed in, if any.
    """
        ...
    
    class ScoringMetric(ReliabilityRiskMlScoringMetric[{ reconstructions: Data, residuals: Data, scaledReconstructions: Data, scaledResiduals: Data, riskScore: Data, riskScoreNormalized: Data, alert: Data }, { features: Data, scaledFeatures: Data, trainingMask: Data, inferenceMask: Data, alertContext: Data }]):
        """
        This type represents a {@link ReliabilityRiskMlScoringMetric} for scoring a {@link ReliabilityRiskMl.ReconstructionPipeline}.
        
        @remarks this represents a made instance of ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric
        """
        
        name: Optional[str]=None
        """
        Name of this scoring metric.
        """

        useIndex: Optional[bool]=None
        """
        If True, then the indices of `targetOutput`, `modelOutput`, and `context` are used for score
        calculation.
        """

        batchSize: Optional[int]=None
        """
        If the provided data does not fit in memory, then use this value as batch size to iterate through and compute incremental
        metrics on batches of data.
        """

        actualScoringMetric: Optional[MlScoringMetric[Any, Any, Any]]
        """
        The actual {@link MlScoringMetric} that computes a score based on the selected {@link outputsToSelect}
        and {@link targetsToSelect}. The user can provide a custom scoring metric
        that mixins {@link MlScoringMetric}.
        """

        outputsToSelect: Optional[Array[str]]
        """
        A list of model outputs to select for scoring. The available options are `'reconstructions'`,
        `'residuals'`, `'scaledReconstructions'`, `'scaledResiduals'`, `'riskScore'`,
        `'riskScoreNormalized'`, and `'alert'`, where `'scaledReconstructions'` and `'scaledResiduals'`
        are the scaled (e.g., standardized) version of `'reconstructions'` and `'residuals'`. The selected
        outputs will be passed to the `DO` of {@link actualScoringMetric}.
        """

        targetsToSelect: Optional[Array[str]]=None
        """
        A list of model inputs or targets to select for scoring. The available options are `'features'`,
        `'scaledFeatures'`, `'trainingMask'`, `'inferenceMask'`, `'alertContext'`, where `'scaledFeatures'`
        is the scaled (e.g., standardized) version of `'features'`. The selected inputs will be
        passed to the `DY` of {@link actualScoringMetric}.
        """
        def __init__(self, name: Optional[str]=None, useIndex: Optional[bool]=None, batchSize: Optional[int]=None, actualScoringMetric: Optional[MlScoringMetric[Any, Any, Any]]=None, outputsToSelect: Optional[Array[str]]=None, targetsToSelect: Optional[Array[str]]=None) -> None: ...

        def _call_(self, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Any]:
        """
        Note that arguments to the `call` method must be fully made; you cannot expect argument conversion to occur as
        `args` and `kwargs` are of `ValueType` `any`.
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
        def fromJson(cls, json: any) -> Union[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
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
        def fromJsonString(cls, json: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
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
        def fromXmlString(cls, xml: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
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
        def replaceType(self, old: Type, new: Type) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        For sub-types of this, the type alone is meaningful, so do NOT consider instance to be empty even if there
        are no fields.
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def validateObj(self) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def withoutFieldAtPath(self, path: str) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def withoutField(self, field: str) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def withoutField(self, field: FieldType) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def withoutFields(self, fields: Array[str]) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def secretFieldsSet(self) -> Array[str]:
        """
        @return a list of the secret field paths that were found to be set on this Obj.
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def defaultField(self, field: str) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def defaultField(self, field: FieldType) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def unsetField(self, field: str) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def unsetField(self, field: FieldType) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def removeField(self, field: str) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def removeField(self, field: FieldType) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def mergeJson(self, json: any) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def sumObj(self, other: Obj, deep: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]]:
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
        def toBuilder(self) -> ObjBuilder[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def afterMake(self) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> ReliabilityRiskMl.ReconstructionPipeline.ScoringMetric:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def standardizeInput(self, args: Array[Any]=None, kwargs: Map[str, Any]=None) -> Union[Map[str, Any]]:
        """
        Extracts the inputs and standardizes them into a dict.
        """
            ...
        def doScore(self, targetOutput: Any=None, modelOutput: Any=None, context: Any=None) -> float:
        """
        Scores a machine learning model with ground truth.
        
        @param targetOutput
                  ground truth for scoring the machine learning model
        @param modelOutput
                  output of the machine learning model
        @param context
                  additional data necessary for scoring the model
        @return the performance of the model.  A single value allows for optimization.
        """
            ...
        def beforeDoAfterScore(self, targetOutput: Any=None, modelOutput: Any=None, context: Any=None, spec: MlOperationSpec=None) -> float:
        """
        Blocking call to {@link #doScore} in a single action.
        
        @param targetOutput
                  ground truth for scoring the machine learning model
        @param modelOutput
                  output of the machine learning model
        @param context
                  additional data necessary for scoring the model
        @param spec
                  customizations for the scoring.
        @return the performance of the model.  A single value allows for optimization.
        """
            ...
        def scoreSync(self, targetOutput: =None, modelOutput: =None, context: =None, spec: MlOperationSpec=None) -> float:
        """
        Note that this function is dispatched to the runtime declared on {@link #doScore}.
        
        @param targetOutput
                  ground truth for scoring the machine learning model
        @param modelOutput
                  output of the machine learning model
        @param context
                  additional data necessary for scoring the model
        @param spec
                  customizations for the scoring.
        @return the performance of the model.  A single value allows for optimization.
        """
            ...
        def convertModelOutputToNative(self, modelOutput: ) -> Any:
        """
        Converts `modelOutput` from `DO` type to a Python native format. The default implementation does not convert the
        input.
        """
            ...
        def convertTargetOutputToNative(self, targetOutput: ) -> Any:
        """
        Converts `targetOutput` from `DY` type to a Python native format. The default implementation does not convert the input.
        """
            ...
        def convertContextToNative(self, context: ) -> Any:
        """
        Converts `context` from `DS` type to a Python native format. The default implementation does not convert the input.
        """
            ...
        def convertInputsToNative(self, targetOutput: , modelOutput: , context: =None) -> Any:
        """
        Converts {@link #targetOutput}, {@link #modelOutput}, and {@link #context} to their native format. The default
        implementation does not convert the inputs. This should only be overridden if there is a dependency between any of
        the inputs, as there may be a performance implication.
        """
            ...
        def convertNativeToNative(self, targetOutput: Any, modelOutput: Any, context: Any=None) -> Any:
        """
        Convert `targetOutput`, `modelOutput`, and `context`, which are already in a native format, to a native format that
        is supported by this scoring metric. This method will first check if the current format of all inputs are supported
        by this scoring metric. If so, no conversion will take place. Otherwise, this method will attempt to convert the
        inputs into a native format specified by {@link #nativeInputFormats}. Note that this function replaces
        {@link #convertInputsToNative} if the {@link Workflow.MlPipeline.Rdce} optimization is applied.
        """
            ...
        def convertTargetOutputNativeToNative(self, targetOutput: Any) -> Any:
        """
        Convert `targetOutput` which is already in a native format, to a native format that is supported by this scoring
        metric. This method will first check if the current format of `targetOutput` is supported by this metric. If so, no
        conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
        specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertTargetOutputToNative} if
        the {@link Workflow.MlPipeline.Rdce} optimization is applied.
        """
            ...
        def convertModelOutputNativeToNative(self, modelOutput: Any) -> Any:
        """
        Convert `modelOutput` which is already in a native format, to a native format that is supported by this scoring
        metric. This method will first check if the current format of `modelOutput` is supported by this metric. If so, no
        conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
        specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertModelOutputToNative} if
        the {@link Workflow.MlPipeline.Rdce} optimization is applied.
        """
            ...
        def convertContextNativeToNative(self, context: Any) -> Any:
        """
        Convert `context` which is already in a native format, to a native format that is supported by this scoring
        metric. This method will first check if the current format of `context` is supported by this metric. If so, no
        conversion will take place. Otherwise, this method will attempt to convert the inputs into a native format
        specified by {@link #nativeInputFormats}. Note that this function replaces {@link #convertContextToNative} if
        the {@link Workflow.MlPipeline.Rdce} optimization is applied.
        """
            ...
        def nativeInputFormats(self) -> Array[str]:
        """
        The native input formats the scoring metric expects.
        """
            ...
        @classmethod
        def expandedScoreWorkflow(cls) -> Workflow:
        """
        Creates a {@link Workflow} for {@link #score} where each function needed for scoring is represented by a separate
        {@link Workflow.Vertex}.
        """
            ...
        def noTarget(self) -> bool:
        """
        @return true if the scoring metric does not use `targetOutput` when calling {@link #doScore}.
        """
            ...
        @classmethod
        def contextNames(cls) -> Union[Array[str]]:
        """
        List of valid context names this scoring metric supports.
        """
            ...
        def toString(self) -> str:
        """
        Default implementation of a method to consistently generate a unique, human readable name for the scoring metric.
        Scoring metrics with the same name SHOULD behave the same, e.g. if the scoring metric is parametrized, the
        parameter values should be embedded in the name.
        
        The default implementation is to return the Type name and comma separated 'key=value' if {@link #parameters} is
        not empty, assuming all scoring metrics with the same name behave the same.  For example, return
        "MLAccuracyMetric", or "MyMadeUpFbetaMetric, beta=200, average=binary" (if such a metric existed).  The default
        implementation does not recurse into 'value' to print internal values if 'value' is a container (e.g. a Mapp).  To
        get a unique name in those situations, you should override this method.
        
        Note that unlike {@link StringSerializable#toString}, the purpose is *NOT* to reconstruct the corresponding
        scoring metric from the string, but to provide a unique, human readable name for displaying in tables, e.g. column
        names when summarizing scores on a pipeline.
        """
            ...
        def validateMatchingShapes(self, modelOutput: Any, targetOutput: Any=None, numColumns: int=None) -> None:
        """
        Helper function to validate that the `modelOutput` and `targetOutput` to {@link #doScore} match in shape.
        @param modelOutput
                  {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the predictions for scoring
        @param targetOutput
                  {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the labels for scoring
        @param numColumns
                  if specified, then this will validate that there are exactly the specified number of columns in both
                  `modelOutput` and `targetOutput`
        """
            ...
        def validateForEmptyData(self, data: Any, inputType: str=None) -> None:
        """
        Helper function to validate that data is not empty.
        @param data
                  {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the data we need to check
        @param inputType
                  string representing type of input (eg. 'modelOutput' or 'targetOutput')
        """
            ...
        def validateSampleWeights(self, modelOutput: Any, weights: Any=None) -> None:
        """
        Helper function to validate the shape of `sampleWeights`, often supported as part of `context` of {@link #doScore}.
        @param modelOutput
                  {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the predictions for scoring
        @param weights
                  {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the weights for scoring
        """
            ...
        def validateModelInput(self, modelOutput: Any, modelInput: Any) -> None:
        """
        Helper function to validate the shape of `modelInput`, supported as part of `context` of {@link #doScore} for
        clustering metrics.
        @param modelOutput
                  {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the predictions for scoring
        @param modelInput
                  {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the input used to make the predictions
        """
            ...
        def validateBinaryPandas(self, df: Any) -> None:
        """
        Helper function to validate that the data in a `pd.DataFrame` is all binary (0's and 1's).
        @param df
                  `pd.DataFrame` to validate
        """
            ...
        def extractPandasSlice(self, data: Any=None, slice_idx: Any=None) -> Union[Any]:
        """
        Helper function to extract a subsection of data and return as a `pd.DataFrame`.
        @param data
                  {@link Data}, `pd.DataFrame`, or `np.ndarray` representing the data to slice
        @param slice_idx
                  python `slice` object, representing the subsection of data to extract
        @return `pd.DataFrame` representing the subsection of data
        """
            ...
        def batchScoreHelper(self, data: Array[Any]) -> Union[Any]:
        """
        Helper function to run the `scoreFunc` on batches of the `data`, using {@link #scoreAggregator} to aggregate the
        results.
        @param data
                  list of {@link Data}, `pd.DataFrame`, or `np.ndarray` of data to batch and pass to `scoreFunc`. The
                  number of samples should be consistent between all of the data.
        @return the final aggregated result (i.e. `<agg>`)
        """
            ...
        def scoreFunction(self, *data: Array[Any]) -> Union[Any]:
        """
        The scoring function to use in {@link #batchScoreHelper}.
        @param data
                  the data to calculate the score on. The length and position should match the `data` parameter of
                  {@link #batchScoreHelper}.
        @return an incremental score that will be passed to the `inc` parameter of {@link #scoreAggregator}.
        """
            ...
        @classmethod
        def scoreAggregator(cls, agg: Any=None, inc: Any=None) -> Union[Any]:
        """
        The aggregation function to use in {@link #batchScoreHelper}.
        @param agg
                  the aggregated results.
        @param inc
                  the result produced by a batch scoring function.
        @return the new aggregated result
        """
            ...
        def higherIsBetter(self) -> bool:
        """
        Property of the {@link MlScoringMetric} which defines should it be higher or lower to be better.
        """
            ...
        def toNative(self, data: Any=None, outputFormat: str='PANDAS') -> Union[Any]:
        """
        Converts the input to native `MlNativeDataFormat`, sets feature indices, and resets the index.
        @param data
                  Input to to be converted to native `MlNativeDataFormat`.
        @param outputFormat
                  `MlNativeDataFormat` for execution of `MlScoringMetric`.
        """
            ...


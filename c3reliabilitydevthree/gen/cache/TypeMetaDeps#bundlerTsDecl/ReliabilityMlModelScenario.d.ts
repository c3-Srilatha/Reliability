export interface ReliabilityMlModelScenario {

  readonly id: string;
  withId(id: string): ReliabilityMlModelScenario;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): ReliabilityMlModelScenario;

  readonly name: string;
  withName(name: string): ReliabilityMlModelScenario;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ReliabilityMlModelScenario;

  readonly version?: number | null;
  withVersion(version: number | null): ReliabilityMlModelScenario;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): ReliabilityMlModelScenario;

  readonly facilityFilterPaths?: C3.Array<string | null>;
  withFacilityFilterPaths(facilityFilterPaths: C3.Array<string | null> | Array<string | null>): ReliabilityMlModelScenario;

  readonly baseModel: ReliabilityMlModel;
  withBaseModel(baseModel: IReliabilityMlModel): ReliabilityMlModelScenario;

  readonly timeRange: TimeRange;
  withTimeRange(timeRange: ITimeRange): ReliabilityMlModelScenario;

  readonly status?: string | null;
  withStatus(status: string | null): ReliabilityMlModelScenario;

  readonly displayStatus?: string | null;
  withDisplayStatus(displayStatus: string | null): ReliabilityMlModelScenario;

  readonly translatedStatusKey?: string | null;
  withTranslatedStatusKey(translatedStatusKey: string | null): ReliabilityMlModelScenario;

  readonly scenarioPipelineData?: C3.Map<string | null, any>;
  withScenarioPipelineData(scenarioPipelineData: C3.Map<string | null, any> | {[key: string | null]: any}): ReliabilityMlModelScenario;

  readonly alertData?: Data.Persisted | null;
  withAlertData(alertData: IData.Persisted | null): ReliabilityMlModelScenario;

  readonly algorithmData?: Data.Persisted | null;
  withAlgorithmData(algorithmData: IData.Persisted | null): ReliabilityMlModelScenario;

  readonly originalAlgorithmData?: Data.Persisted | null;
  withOriginalAlgorithmData(originalAlgorithmData: IData.Persisted | null): ReliabilityMlModelScenario;

  readonly featureOutputData?: C3.Map<string | null, any>;
  withFeatureOutputData(featureOutputData: C3.Map<string | null, any> | {[key: string | null]: any}): ReliabilityMlModelScenario;

  readonly spec?: ReliabilityOrchestrator.ModelScenarioProcess.Spec | null;
  withSpec(spec: IReliabilityOrchestrator.ModelScenarioProcess.Spec | null): ReliabilityMlModelScenario;

  readonly uiData?: File | null;
  withUiData(uiData: IFile | null): ReliabilityMlModelScenario;

  readonly workflowRun?: Workflow.Run | null;
  withWorkflowRun(workflowRun: IWorkflow.Run | null): ReliabilityMlModelScenario;
}


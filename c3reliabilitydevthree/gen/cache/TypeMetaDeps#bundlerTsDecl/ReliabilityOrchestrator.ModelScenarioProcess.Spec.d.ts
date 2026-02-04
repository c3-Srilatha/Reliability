declare namespace ReliabilityOrchestrator.ModelScenarioProcess {
  export interface Spec {

    readonly name?: string | null;
    withName(name: string | null): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    readonly scenario?: ReliabilityMlModelScenario | null;
    withScenario(scenario: IReliabilityMlModelScenario | null): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    readonly baseModel: ReliabilityMlModel;
    withBaseModel(baseModel: IReliabilityMlModel): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    readonly timeRange: TimeRange;
    withTimeRange(timeRange: ITimeRange): ReliabilityOrchestrator.ModelScenarioProcess.Spec;

    readonly featureOutputData?: C3.Map<string | null, ReliabilityMlModelScenario.ValueGenerator | null> | null;
    withFeatureOutputData(featureOutputData: C3.Map<string | null, ReliabilityMlModelScenario.ValueGenerator | null> | {[key: string | null]: IReliabilityMlModelScenario.ValueGenerator | null} | null): ReliabilityOrchestrator.ModelScenarioProcess.Spec;
  }
}


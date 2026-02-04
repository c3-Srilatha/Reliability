declare namespace ModelScenarioChartHandler {
  export interface Spec {

    readonly model: ReliabilityMlModel;
    withModel(model: IReliabilityMlModel): ModelScenarioChartHandler.Spec;

    readonly start: DateTime;
    withStart(start: DateTime | Date | string): ModelScenarioChartHandler.Spec;

    readonly end: DateTime;
    withEnd(end: DateTime | Date | string): ModelScenarioChartHandler.Spec;

    readonly interval: string;
    withInterval(interval: string): ModelScenarioChartHandler.Spec;

    readonly selectedFeatures: C3.Array<string | null>;
    withSelectedFeatures(selectedFeatures: C3.Array<string | null> | Array<string | null>): ModelScenarioChartHandler.Spec;

    readonly overriddenFeatures?: C3.Map<string | null, ReliabilityMlModelScenario.ValueGenerator | null>;
    withOverriddenFeatures(overriddenFeatures: C3.Map<string | null, ReliabilityMlModelScenario.ValueGenerator | null> | {[key: string | null]: IReliabilityMlModelScenario.ValueGenerator | null}): ModelScenarioChartHandler.Spec;
  }
}


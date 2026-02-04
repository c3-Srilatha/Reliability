export interface UiSdlMetricTileDataSpecPlanSparklineSetting {

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly prefix?: string | null;
  withPrefix(prefix: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly timeHorizonLabel?: string | null;
  withTimeHorizonLabel(timeHorizonLabel: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly endpoint?: string | null;
  withEndpoint(endpoint: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly dynamicSparklineSetting?: UiSdlMetricTileSparklineDynamicColoring | null;
  withDynamicSparklineSetting(dynamicSparklineSetting: IUiSdlMetricTileSparklineDynamicColoring | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlMetricTileDataSpecPlanSparklineSetting;
}


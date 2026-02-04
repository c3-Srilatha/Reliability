export interface UiSdlMetricTileDataSpecForecastSparklineSetting {

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly prefix?: string | null;
  withPrefix(prefix: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly timeHorizonLabel?: string | null;
  withTimeHorizonLabel(timeHorizonLabel: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly endpoint?: string | null;
  withEndpoint(endpoint: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly dynamicSparklineSetting?: UiSdlMetricTileSparklineDynamicColoring | null;
  withDynamicSparklineSetting(dynamicSparklineSetting: IUiSdlMetricTileSparklineDynamicColoring | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlMetricTileDataSpecForecastSparklineSetting;
}


export interface UiSdlMetricTileDataSpecKPITrendComparisonSetting {

  readonly comparisonText?: string | null;
  withComparisonText(comparisonText: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly invertTrendDirectionColor?: boolean;
  withInvertTrendDirectionColor(invertTrendDirectionColor: boolean): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly percentage?: boolean;
  withPercentage(percentage: boolean): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly invalidValueMessage?: string | null | UiSdlDynamicValueSpec | null | null;
  withInvalidValueMessage(invalidValueMessage: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly intervalLength?: number | null;
  withIntervalLength(intervalLength: number | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlMetricTileDataSpecKPITrendComparisonSetting;
}


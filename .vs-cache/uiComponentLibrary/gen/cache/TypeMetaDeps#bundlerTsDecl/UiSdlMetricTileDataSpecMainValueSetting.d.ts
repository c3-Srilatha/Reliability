export interface UiSdlMetricTileDataSpecMainValueSetting {

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly placeholderHintMessage?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholderHintMessage(placeholderHintMessage: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly dataSourceValue?: string | null;
  withDataSourceValue(dataSourceValue: string | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricTileDataSpecMainValueSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly bindings?: any | null;
  withBindings(bindings: any | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly unit?: Unit | null;
  withUnit(unit: IUnit | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly options?: EvalMetricsOptions | null;
  withOptions(options: IEvalMetricsOptions | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly interval?: string | null;
  withInterval(interval: string | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly evaluateAction?: string | null;
  withEvaluateAction(evaluateAction: string | null): UiSdlMetricTileDataSpecMainValueSetting;

  readonly filter?: string | null;
  withFilter(filter: string | null): UiSdlMetricTileDataSpecMainValueSetting;
}


export interface UiSdlMetricTileEvalDataSpecMainValueSetting {

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly placeholderHintMessage?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholderHintMessage(placeholderHintMessage: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly dataSourceValue?: string | null;
  withDataSourceValue(dataSourceValue: string | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlMetricTileEvalDataSpecMainValueSetting;

  readonly subject?: string | null;
  withSubject(subject: string | null): UiSdlMetricTileEvalDataSpecMainValueSetting;
}


export interface UiSdlMetricTileDataSpecMainValueBaseSetting {

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileDataSpecMainValueBaseSetting;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlMetricTileDataSpecMainValueBaseSetting;

  readonly placeholderHintMessage?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholderHintMessage(placeholderHintMessage: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTileDataSpecMainValueBaseSetting;

  readonly dataSourceValue?: string | null;
  withDataSourceValue(dataSourceValue: string | null): UiSdlMetricTileDataSpecMainValueBaseSetting;

  readonly aggregation?: string | null;
  withAggregation(aggregation: string | null): UiSdlMetricTileDataSpecMainValueBaseSetting;
}


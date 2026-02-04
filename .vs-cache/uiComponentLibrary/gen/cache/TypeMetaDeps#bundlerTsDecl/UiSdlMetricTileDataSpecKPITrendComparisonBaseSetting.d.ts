export interface UiSdlMetricTileDataSpecKPITrendComparisonBaseSetting {

  readonly comparisonText?: string | null;
  withComparisonText(comparisonText: string | null): UiSdlMetricTileDataSpecKPITrendComparisonBaseSetting;

  readonly invertTrendDirectionColor?: boolean;
  withInvertTrendDirectionColor(invertTrendDirectionColor: boolean): UiSdlMetricTileDataSpecKPITrendComparisonBaseSetting;

  readonly percentage?: boolean;
  withPercentage(percentage: boolean): UiSdlMetricTileDataSpecKPITrendComparisonBaseSetting;

  readonly invalidValueMessage?: string | null | UiSdlDynamicValueSpec | null | null;
  withInvalidValueMessage(invalidValueMessage: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMetricTileDataSpecKPITrendComparisonBaseSetting;

  readonly intervalLength?: number | null;
  withIntervalLength(intervalLength: number | null): UiSdlMetricTileDataSpecKPITrendComparisonBaseSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileDataSpecKPITrendComparisonBaseSetting;
}


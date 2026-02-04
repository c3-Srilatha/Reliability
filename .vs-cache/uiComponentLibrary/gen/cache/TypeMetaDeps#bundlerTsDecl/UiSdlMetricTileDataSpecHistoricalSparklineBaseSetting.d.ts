export interface UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting {

  readonly name?: string | null;
  withName(name: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly prefix?: string | null;
  withPrefix(prefix: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly timeHorizonLabel?: string | null;
  withTimeHorizonLabel(timeHorizonLabel: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly timeHorizon?: string | null;
  withTimeHorizon(timeHorizon: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly endpoint?: string | null;
  withEndpoint(endpoint: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly dynamicSparklineSetting?: UiSdlMetricTileSparklineDynamicColoring | null;
  withDynamicSparklineSetting(dynamicSparklineSetting: IUiSdlMetricTileSparklineDynamicColoring | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly precision?: number | null;
  withPrecision(precision: number | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly showUnitAsPrefix?: boolean;
  withShowUnitAsPrefix(showUnitAsPrefix: boolean): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly alertIcon?: boolean;
  withAlertIcon(alertIcon: boolean): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly alertOperator?: string | null;
  withAlertOperator(alertOperator: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly alertThreshold?: number | null;
  withAlertThreshold(alertThreshold: number | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly warningOperator?: string | null;
  withWarningOperator(warningOperator: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly warningThreshold?: number | null;
  withWarningThreshold(warningThreshold: number | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly sparklineThreshold?: UiSdlMetricTileHistoricalSparklineThreshold | null;
  withSparklineThreshold(sparklineThreshold: IUiSdlMetricTileHistoricalSparklineThreshold | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;

  readonly displayedValue?: string | null;
  withDisplayedValue(displayedValue: string | null): UiSdlMetricTileDataSpecHistoricalSparklineBaseSetting;
}


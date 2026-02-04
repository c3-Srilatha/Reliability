export interface UiSdlMetricTileHistoricalSparklineThreshold {

  readonly metricName?: string | null;
  withMetricName(metricName: string | null): UiSdlMetricTileHistoricalSparklineThreshold;

  readonly operator: string;
  withOperator(operator: string): UiSdlMetricTileHistoricalSparklineThreshold;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlMetricTileHistoricalSparklineThreshold;
}


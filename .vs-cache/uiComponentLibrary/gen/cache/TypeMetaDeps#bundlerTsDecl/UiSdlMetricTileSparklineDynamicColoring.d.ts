export interface UiSdlMetricTileSparklineDynamicColoring {

  readonly invertColors?: boolean;
  withInvertColors(invertColors: boolean): UiSdlMetricTileSparklineDynamicColoring;

  readonly positiveTrendColor?: string | null;
  withPositiveTrendColor(positiveTrendColor: string | null): UiSdlMetricTileSparklineDynamicColoring;

  readonly negativeTrendColor?: string | null;
  withNegativeTrendColor(negativeTrendColor: string | null): UiSdlMetricTileSparklineDynamicColoring;
}


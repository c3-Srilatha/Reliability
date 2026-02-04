export interface UiSdlWaterfallChartGradientColorSettings {

  readonly threshold: number;
  withThreshold(threshold: number): UiSdlWaterfallChartGradientColorSettings;

  readonly thresholdColor: string;
  withThresholdColor(thresholdColor: string): UiSdlWaterfallChartGradientColorSettings;
}


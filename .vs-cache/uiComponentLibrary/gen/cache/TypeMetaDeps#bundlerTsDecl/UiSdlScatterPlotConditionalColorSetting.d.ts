export interface UiSdlScatterPlotConditionalColorSetting {

  readonly threshold: number;
  withThreshold(threshold: number): UiSdlScatterPlotConditionalColorSetting;

  readonly operator: string;
  withOperator(operator: string): UiSdlScatterPlotConditionalColorSetting;

  readonly thresholdColor: string;
  withThresholdColor(thresholdColor: string): UiSdlScatterPlotConditionalColorSetting;
}


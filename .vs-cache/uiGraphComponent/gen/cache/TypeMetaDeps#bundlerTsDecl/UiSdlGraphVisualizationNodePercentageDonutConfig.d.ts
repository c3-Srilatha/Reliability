export interface UiSdlGraphVisualizationNodePercentageDonutConfig {

  readonly donutType?: string | null;
  withDonutType(donutType: string | null): UiSdlGraphVisualizationNodePercentageDonutConfig;

  readonly percentageSegment?: UiSdlColorableFieldBasedDataSpecSetting | null;
  withPercentageSegment(percentageSegment: IUiSdlColorableFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationNodePercentageDonutConfig;

  readonly percentStepSegment?: UiSdlStepColorableFieldBasedDataSpecSetting | null;
  withPercentStepSegment(percentStepSegment: IUiSdlStepColorableFieldBasedDataSpecSetting | null): UiSdlGraphVisualizationNodePercentageDonutConfig;

  readonly width: string;
  withWidth(width: string): UiSdlGraphVisualizationNodePercentageDonutConfig;
}


export interface UiSdlGraphVisualizationTooltipConfig {

  readonly tooltipTitle?: string | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withTooltipTitle(tooltipTitle: string | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlGraphVisualizationTooltipConfig;

  readonly tooltipSubtitle?: string | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withTooltipSubtitle(tooltipSubtitle: string | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlGraphVisualizationTooltipConfig;

  readonly tooltipBody?: string | null | UiSdlFieldBasedDataSpecSetting | null | null;
  withTooltipBody(tooltipBody: string | null | IUiSdlFieldBasedDataSpecSetting | null | null): UiSdlGraphVisualizationTooltipConfig;
}


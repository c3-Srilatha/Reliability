export interface UiSdlScatterPlotTooltipConfig {

  readonly size?: string | null;
  withSize(size: string | null): UiSdlScatterPlotTooltipConfig;

  readonly truncateTooltipLabel?: boolean;
  withTruncateTooltipLabel(truncateTooltipLabel: boolean): UiSdlScatterPlotTooltipConfig;

  readonly truncateTooltipHeader?: boolean;
  withTruncateTooltipHeader(truncateTooltipHeader: boolean): UiSdlScatterPlotTooltipConfig;

  readonly xPrecision?: number | null;
  withXPrecision(xPrecision: number | null): UiSdlScatterPlotTooltipConfig;

  readonly yPrecision?: number | null;
  withYPrecision(yPrecision: number | null): UiSdlScatterPlotTooltipConfig;

  readonly sizePrecision?: number | null;
  withSizePrecision(sizePrecision: number | null): UiSdlScatterPlotTooltipConfig;

  readonly additionalFieldsPrecision?: number | null;
  withAdditionalFieldsPrecision(additionalFieldsPrecision: number | null): UiSdlScatterPlotTooltipConfig;

  readonly hideSize?: boolean;
  withHideSize(hideSize: boolean): UiSdlScatterPlotTooltipConfig;

  readonly hideXAxis?: boolean;
  withHideXAxis(hideXAxis: boolean): UiSdlScatterPlotTooltipConfig;

  readonly hideYAxis?: boolean;
  withHideYAxis(hideYAxis: boolean): UiSdlScatterPlotTooltipConfig;

  readonly hideCategory?: boolean;
  withHideCategory(hideCategory: boolean): UiSdlScatterPlotTooltipConfig;
}


export interface UiSdlTimeseriesLineBarChartNowLineConfig {

  readonly color?: string | null;
  withColor(color: string | null): UiSdlTimeseriesLineBarChartNowLineConfig;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlTimeseriesLineBarChartNowLineConfig;

  readonly legendLabel?: string | null;
  withLegendLabel(legendLabel: string | null): UiSdlTimeseriesLineBarChartNowLineConfig;
}


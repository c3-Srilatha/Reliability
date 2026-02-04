export interface UiSdlTimeseriesLineBarChartMarkLineConfig {

  readonly color?: string | null;
  withColor(color: string | null): UiSdlTimeseriesLineBarChartMarkLineConfig;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlTimeseriesLineBarChartMarkLineConfig;

  readonly legendLabel?: string | null;
  withLegendLabel(legendLabel: string | null): UiSdlTimeseriesLineBarChartMarkLineConfig;
}


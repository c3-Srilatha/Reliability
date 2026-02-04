export interface UiSdlTimeseriesLineBarChartDateLineConfig {

  readonly color?: string | null;
  withColor(color: string | null): UiSdlTimeseriesLineBarChartDateLineConfig;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlTimeseriesLineBarChartDateLineConfig;

  readonly legendLabel?: string | null;
  withLegendLabel(legendLabel: string | null): UiSdlTimeseriesLineBarChartDateLineConfig;

  readonly date?: DateTime | null;
  withDate(date: DateTime | Date | string | null): UiSdlTimeseriesLineBarChartDateLineConfig;

  readonly lineWidth?: string | null;
  withLineWidth(lineWidth: string | null): UiSdlTimeseriesLineBarChartDateLineConfig;
}


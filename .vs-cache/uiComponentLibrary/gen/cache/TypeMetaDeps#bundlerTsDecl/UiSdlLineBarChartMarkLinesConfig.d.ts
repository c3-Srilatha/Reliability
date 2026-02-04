export interface UiSdlLineBarChartMarkLinesConfig {

  readonly color?: string | null;
  withColor(color: string | null): UiSdlLineBarChartMarkLinesConfig;

  readonly lineStyle?: string | null;
  withLineStyle(lineStyle: string | null): UiSdlLineBarChartMarkLinesConfig;

  readonly legendLabel?: string | null;
  withLegendLabel(legendLabel: string | null): UiSdlLineBarChartMarkLinesConfig;

  readonly entityId?: string | null;
  withEntityId(entityId: string | null): UiSdlLineBarChartMarkLinesConfig;

  readonly markLineDataPoint?: string | null | number | null | null;
  withMarkLineDataPoint(markLineDataPoint: string | null | number | null | null): UiSdlLineBarChartMarkLinesConfig;

  readonly lineWidth?: number | null;
  withLineWidth(lineWidth: number | null): UiSdlLineBarChartMarkLinesConfig;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlLineBarChartMarkLinesConfig;
}


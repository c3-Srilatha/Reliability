export interface UiSdlWaterfallChartTooltip {

  readonly size?: string | null;
  withSize(size: string | null): UiSdlWaterfallChartTooltip;

  readonly truncateTooltipLabel?: boolean;
  withTruncateTooltipLabel(truncateTooltipLabel: boolean): UiSdlWaterfallChartTooltip;

  readonly truncateTooltipHeader?: boolean;
  withTruncateTooltipHeader(truncateTooltipHeader: boolean): UiSdlWaterfallChartTooltip;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlWaterfallChartTooltip;
}


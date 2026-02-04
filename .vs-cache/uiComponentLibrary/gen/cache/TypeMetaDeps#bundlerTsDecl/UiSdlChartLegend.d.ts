export interface UiSdlChartLegend {

  readonly legendPosition?: string | null;
  withLegendPosition(legendPosition: string | null): UiSdlChartLegend;

  readonly legendHorizontalAlignment?: string | null;
  withLegendHorizontalAlignment(legendHorizontalAlignment: string | null): UiSdlChartLegend;

  readonly legendVerticalAlignment?: string | null;
  withLegendVerticalAlignment(legendVerticalAlignment: string | null): UiSdlChartLegend;

  readonly legendLayout?: string | null;
  withLegendLayout(legendLayout: string | null): UiSdlChartLegend;

  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlChartLegend;
}


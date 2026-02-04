export interface UiSdlMapLegend {

  readonly legendPosition?: string | null;
  withLegendPosition(legendPosition: string | null): UiSdlMapLegend;

  readonly legendHorizontalAlignment?: string | null;
  withLegendHorizontalAlignment(legendHorizontalAlignment: string | null): UiSdlMapLegend;

  readonly legendVerticalAlignment?: string | null;
  withLegendVerticalAlignment(legendVerticalAlignment: string | null): UiSdlMapLegend;

  readonly legendLayout?: string | null;
  withLegendLayout(legendLayout: string | null): UiSdlMapLegend;

  readonly legendIcon?: string | null;
  withLegendIcon(legendIcon: string | null): UiSdlMapLegend;
}


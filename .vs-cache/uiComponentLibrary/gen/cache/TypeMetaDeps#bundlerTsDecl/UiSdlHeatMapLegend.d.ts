export interface UiSdlHeatMapLegend {

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlHeatMapLegend;

  readonly lowLabel?: string | null;
  withLowLabel(lowLabel: string | null): UiSdlHeatMapLegend;

  readonly highLabel?: string | null;
  withHighLabel(highLabel: string | null): UiSdlHeatMapLegend;

  readonly interact?: boolean;
  withInteract(interact: boolean): UiSdlHeatMapLegend;

  readonly legendHorizontalAlignment?: string | null;
  withLegendHorizontalAlignment(legendHorizontalAlignment: string | null): UiSdlHeatMapLegend;
}


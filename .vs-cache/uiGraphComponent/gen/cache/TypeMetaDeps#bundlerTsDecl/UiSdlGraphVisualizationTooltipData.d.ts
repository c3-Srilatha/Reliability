export interface UiSdlGraphVisualizationTooltipData {

  readonly x?: number | null;
  withX(x: number | null): UiSdlGraphVisualizationTooltipData;

  readonly y?: number | null;
  withY(y: number | null): UiSdlGraphVisualizationTooltipData;

  readonly tooltipTitle?: string | null;
  withTooltipTitle(tooltipTitle: string | null): UiSdlGraphVisualizationTooltipData;

  readonly tooltipSubtitle?: string | null;
  withTooltipSubtitle(tooltipSubtitle: string | null): UiSdlGraphVisualizationTooltipData;

  readonly tooltipBody?: string | null;
  withTooltipBody(tooltipBody: string | null): UiSdlGraphVisualizationTooltipData;
}


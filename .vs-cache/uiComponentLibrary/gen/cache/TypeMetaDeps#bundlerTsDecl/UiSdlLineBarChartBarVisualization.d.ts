export interface UiSdlLineBarChartBarVisualization {

  readonly visualizationType?: string | null;
  withVisualizationType(visualizationType: string | null): UiSdlLineBarChartBarVisualization;

  readonly width?: number | null;
  withWidth(width: number | null): UiSdlLineBarChartBarVisualization;

  readonly spacing?: number | null;
  withSpacing(spacing: number | null): UiSdlLineBarChartBarVisualization;
}


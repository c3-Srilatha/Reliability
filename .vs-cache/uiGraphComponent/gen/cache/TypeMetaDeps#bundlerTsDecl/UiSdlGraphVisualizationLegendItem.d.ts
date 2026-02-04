export interface UiSdlGraphVisualizationLegendItem {

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationLegendItem;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationLegendItem;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlGraphVisualizationLegendItem;
}


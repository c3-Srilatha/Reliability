export interface UiSdlGraphVisualizationSelectionConfig {

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphVisualizationSelectionConfig;

  readonly highlightNeighborsOnSelect?: boolean;
  withHighlightNeighborsOnSelect(highlightNeighborsOnSelect: boolean): UiSdlGraphVisualizationSelectionConfig;

  readonly labelColor?: string | null;
  withLabelColor(labelColor: string | null): UiSdlGraphVisualizationSelectionConfig;

  readonly multiSelectionBehavior?: string | null;
  withMultiSelectionBehavior(multiSelectionBehavior: string | null): UiSdlGraphVisualizationSelectionConfig;
}


export interface UiSdlGraphVisualizationShowHideRegions {

  readonly hiddenRegions?: C3.Array<string | null>;
  withHiddenRegions(hiddenRegions: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationShowHideRegions;
}


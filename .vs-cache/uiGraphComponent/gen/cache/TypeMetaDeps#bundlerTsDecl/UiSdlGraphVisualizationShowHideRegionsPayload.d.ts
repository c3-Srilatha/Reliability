export interface UiSdlGraphVisualizationShowHideRegionsPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationShowHideRegionsPayload;

  readonly hiddenRegionIds: C3.Array<string | null>;
  withHiddenRegionIds(hiddenRegionIds: C3.Array<string | null> | Array<string | null>): UiSdlGraphVisualizationShowHideRegionsPayload;
}


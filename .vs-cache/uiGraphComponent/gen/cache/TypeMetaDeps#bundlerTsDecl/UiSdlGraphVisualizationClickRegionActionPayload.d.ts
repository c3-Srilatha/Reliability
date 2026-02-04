export interface UiSdlGraphVisualizationClickRegionActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationClickRegionActionPayload;

  readonly regionId?: string | null;
  withRegionId(regionId: string | null): UiSdlGraphVisualizationClickRegionActionPayload;
}


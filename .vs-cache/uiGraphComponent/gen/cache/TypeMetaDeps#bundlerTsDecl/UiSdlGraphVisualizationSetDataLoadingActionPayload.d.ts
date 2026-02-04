export interface UiSdlGraphVisualizationSetDataLoadingActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationSetDataLoadingActionPayload;

  readonly isDataLoading?: boolean;
  withIsDataLoading(isDataLoading: boolean): UiSdlGraphVisualizationSetDataLoadingActionPayload;
}


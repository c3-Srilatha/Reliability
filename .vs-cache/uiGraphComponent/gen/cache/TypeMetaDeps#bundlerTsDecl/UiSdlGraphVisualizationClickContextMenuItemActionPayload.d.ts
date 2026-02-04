export interface UiSdlGraphVisualizationClickContextMenuItemActionPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlGraphVisualizationClickContextMenuItemActionPayload;

  readonly itemId?: string | null;
  withItemId(itemId: string | null): UiSdlGraphVisualizationClickContextMenuItemActionPayload;

  readonly actionToDispatch?: UiSdlAction | null;
  withActionToDispatch(actionToDispatch: IUiSdlAction | null): UiSdlGraphVisualizationClickContextMenuItemActionPayload;
}


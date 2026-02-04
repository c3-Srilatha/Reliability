export interface UiSdlHideGraphVisualizationNodesHiddenNodesUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlHideGraphVisualizationNodesHiddenNodesUpdateAction;

  readonly payload?: UiSdlHideGraphVisualizationNodesHiddenNodesUpdatePayload | null;
  withPayload(payload: IUiSdlHideGraphVisualizationNodesHiddenNodesUpdatePayload | null): UiSdlHideGraphVisualizationNodesHiddenNodesUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlHideGraphVisualizationNodesHiddenNodesUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlHideGraphVisualizationNodesHiddenNodesUpdateAction;
}


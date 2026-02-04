export interface UiSdlGraphVisualizationShowHideRegionsAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlGraphVisualizationShowHideRegionsAction;

  readonly payload?: UiSdlGraphVisualizationShowHideRegionsPayload | null;
  withPayload(payload: IUiSdlGraphVisualizationShowHideRegionsPayload | null): UiSdlGraphVisualizationShowHideRegionsAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlGraphVisualizationShowHideRegionsAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGraphVisualizationShowHideRegionsAction;
}


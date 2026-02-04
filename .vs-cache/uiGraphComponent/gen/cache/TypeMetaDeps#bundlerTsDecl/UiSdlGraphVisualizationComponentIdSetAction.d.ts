export interface UiSdlGraphVisualizationComponentIdSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlGraphVisualizationComponentIdSetAction;

  readonly payload?: UiSdlGraphVisualizationComponentIdSetPayload | null;
  withPayload(payload: IUiSdlGraphVisualizationComponentIdSetPayload | null): UiSdlGraphVisualizationComponentIdSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlGraphVisualizationComponentIdSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGraphVisualizationComponentIdSetAction;
}


export interface UiSdSetAnimationGraphVisualizationAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdSetAnimationGraphVisualizationAction;

  readonly payload?: UiSdlSetAnimationGraphVisualizationPayload | null;
  withPayload(payload: IUiSdlSetAnimationGraphVisualizationPayload | null): UiSdSetAnimationGraphVisualizationAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdSetAnimationGraphVisualizationAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdSetAnimationGraphVisualizationAction;
}


export interface UiSdlContentFrameToggleInputsVisibilityAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameToggleInputsVisibilityAction;

  readonly payload?: UiSdlContentFrameToggleInputsVisibilityPayload | null;
  withPayload(payload: IUiSdlContentFrameToggleInputsVisibilityPayload | null): UiSdlContentFrameToggleInputsVisibilityAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameToggleInputsVisibilityAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameToggleInputsVisibilityAction;
}


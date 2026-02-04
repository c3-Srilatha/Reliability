export interface UiSdlContentFrameToggleActionsVisibilityAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameToggleActionsVisibilityAction;

  readonly payload?: UiSdlContentFrameToggleInputsVisibilityPayload | null;
  withPayload(payload: IUiSdlContentFrameToggleInputsVisibilityPayload | null): UiSdlContentFrameToggleActionsVisibilityAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameToggleActionsVisibilityAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameToggleActionsVisibilityAction;
}


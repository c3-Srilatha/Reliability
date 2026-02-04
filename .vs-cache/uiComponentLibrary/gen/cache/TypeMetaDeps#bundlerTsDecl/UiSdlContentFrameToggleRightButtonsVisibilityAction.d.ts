export interface UiSdlContentFrameToggleRightButtonsVisibilityAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameToggleRightButtonsVisibilityAction;

  readonly payload?: UiSdlContentFrameToggleButtonsVisibilityPayload | null;
  withPayload(payload: IUiSdlContentFrameToggleButtonsVisibilityPayload | null): UiSdlContentFrameToggleRightButtonsVisibilityAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameToggleRightButtonsVisibilityAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameToggleRightButtonsVisibilityAction;
}


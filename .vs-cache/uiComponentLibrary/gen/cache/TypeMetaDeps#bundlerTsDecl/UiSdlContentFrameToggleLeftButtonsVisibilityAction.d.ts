export interface UiSdlContentFrameToggleLeftButtonsVisibilityAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlContentFrameToggleLeftButtonsVisibilityAction;

  readonly payload?: UiSdlContentFrameToggleButtonsVisibilityPayload | null;
  withPayload(payload: IUiSdlContentFrameToggleButtonsVisibilityPayload | null): UiSdlContentFrameToggleLeftButtonsVisibilityAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlContentFrameToggleLeftButtonsVisibilityAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlContentFrameToggleLeftButtonsVisibilityAction;
}


export interface UiSdlIframeReloadAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlIframeReloadAction;

  readonly payload?: UiSdlReduxActionPayload | null;
  withPayload(payload: IUiSdlReduxActionPayload | null): UiSdlIframeReloadAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlIframeReloadAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlIframeReloadAction;
}


export interface UiSdlPreviousButtonClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlPreviousButtonClickAction;

  readonly payload?: UiSdlPreviousButtonClickPayload | null;
  withPayload(payload: IUiSdlPreviousButtonClickPayload | null): UiSdlPreviousButtonClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlPreviousButtonClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlPreviousButtonClickAction;
}


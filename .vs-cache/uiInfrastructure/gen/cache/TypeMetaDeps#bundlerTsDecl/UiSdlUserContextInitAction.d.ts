export interface UiSdlUserContextInitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUserContextInitAction;

  readonly payload?: UiSdlUserContextInitPayload | null;
  withPayload(payload: IUiSdlUserContextInitPayload | null): UiSdlUserContextInitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUserContextInitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUserContextInitAction;
}


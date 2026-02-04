export interface UiSdlGlobalRedirectAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlGlobalRedirectAction;

  readonly payload?: UiSdlGlobalRedirectPayload | null;
  withPayload(payload: IUiSdlGlobalRedirectPayload | null): UiSdlGlobalRedirectAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlGlobalRedirectAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlGlobalRedirectAction;
}


export interface UiSdlTabRedirectAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTabRedirectAction;

  readonly payload?: UiSdlTabRedirectPayload | null;
  withPayload(payload: IUiSdlTabRedirectPayload | null): UiSdlTabRedirectAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTabRedirectAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTabRedirectAction;
}


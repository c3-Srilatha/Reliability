export interface UiSdlUserSessionExpiredAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUserSessionExpiredAction;

  readonly payload?: UiSdlComponentActionPayload | null;
  withPayload(payload: IUiSdlComponentActionPayload | null): UiSdlUserSessionExpiredAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUserSessionExpiredAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUserSessionExpiredAction;
}


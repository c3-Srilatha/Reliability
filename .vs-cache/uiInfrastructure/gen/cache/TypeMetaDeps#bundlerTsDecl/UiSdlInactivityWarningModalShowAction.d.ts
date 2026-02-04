export interface UiSdlInactivityWarningModalShowAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInactivityWarningModalShowAction;

  readonly payload?: UiSdlInactivityWarningModalShowPayload | null;
  withPayload(payload: IUiSdlInactivityWarningModalShowPayload | null): UiSdlInactivityWarningModalShowAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInactivityWarningModalShowAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInactivityWarningModalShowAction;
}


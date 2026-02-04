export interface UiSdlWarningModalResetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlWarningModalResetAction;

  readonly payload?: UiSdlWarningModalResetPayload | null;
  withPayload(payload: IUiSdlWarningModalResetPayload | null): UiSdlWarningModalResetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlWarningModalResetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlWarningModalResetAction;
}


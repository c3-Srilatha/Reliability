export interface UiSdlWarningModalCloseAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlWarningModalCloseAction;

  readonly payload?: UiSdlWarningModalClosePayload | null;
  withPayload(payload: IUiSdlWarningModalClosePayload | null): UiSdlWarningModalCloseAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlWarningModalCloseAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlWarningModalCloseAction;
}


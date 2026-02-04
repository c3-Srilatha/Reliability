export interface UiSdlWarningModalOpenAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlWarningModalOpenAction;

  readonly payload?: UiSdlWarningModalOpenPayload | null;
  withPayload(payload: IUiSdlWarningModalOpenPayload | null): UiSdlWarningModalOpenAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlWarningModalOpenAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlWarningModalOpenAction;
}


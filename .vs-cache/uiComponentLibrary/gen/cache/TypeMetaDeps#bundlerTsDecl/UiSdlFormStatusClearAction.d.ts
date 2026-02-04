export interface UiSdlFormStatusClearAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFormStatusClearAction;

  readonly payload?: UiSdlFormStatusClearPayload | null;
  withPayload(payload: IUiSdlFormStatusClearPayload | null): UiSdlFormStatusClearAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFormStatusClearAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormStatusClearAction;
}


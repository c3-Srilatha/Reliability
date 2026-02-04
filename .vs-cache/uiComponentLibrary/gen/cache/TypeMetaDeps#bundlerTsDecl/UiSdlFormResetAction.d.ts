export interface UiSdlFormResetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFormResetAction;

  readonly payload?: UiSdlFormResetPayload | null;
  withPayload(payload: IUiSdlFormResetPayload | null): UiSdlFormResetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFormResetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormResetAction;
}


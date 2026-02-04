export interface UiSdlFormCancelAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFormCancelAction;

  readonly payload?: UiSdlFormCancelPayload | null;
  withPayload(payload: IUiSdlFormCancelPayload | null): UiSdlFormCancelAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFormCancelAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormCancelAction;
}


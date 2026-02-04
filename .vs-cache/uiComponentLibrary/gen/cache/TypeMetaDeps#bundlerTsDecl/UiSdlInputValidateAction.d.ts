export interface UiSdlInputValidateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInputValidateAction;

  readonly payload?: UiSdlInputValidatePayload | null;
  withPayload(payload: IUiSdlInputValidatePayload | null): UiSdlInputValidateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInputValidateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInputValidateAction;
}


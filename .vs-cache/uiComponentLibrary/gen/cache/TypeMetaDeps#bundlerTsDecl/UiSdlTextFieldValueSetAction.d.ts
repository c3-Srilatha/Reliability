export interface UiSdlTextFieldValueSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTextFieldValueSetAction;

  readonly payload?: UiSdlTextFieldValueSetPayload | null;
  withPayload(payload: IUiSdlTextFieldValueSetPayload | null): UiSdlTextFieldValueSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTextFieldValueSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTextFieldValueSetAction;
}


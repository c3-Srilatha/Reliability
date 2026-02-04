export interface UiSdlTextareaValueSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTextareaValueSetAction;

  readonly payload?: UiSdlTextareaValueSetPayload | null;
  withPayload(payload: IUiSdlTextareaValueSetPayload | null): UiSdlTextareaValueSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTextareaValueSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTextareaValueSetAction;
}


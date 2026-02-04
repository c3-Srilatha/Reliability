export interface UiSdlTextFieldStatusSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTextFieldStatusSetAction;

  readonly payload?: UiSdlTextFieldStatusSetPayload | null;
  withPayload(payload: IUiSdlTextFieldStatusSetPayload | null): UiSdlTextFieldStatusSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTextFieldStatusSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTextFieldStatusSetAction;
}


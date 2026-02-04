export interface UiSdlTextareaStatusSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTextareaStatusSetAction;

  readonly payload?: UiSdlTextareaStatusSetPayload | null;
  withPayload(payload: IUiSdlTextareaStatusSetPayload | null): UiSdlTextareaStatusSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTextareaStatusSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTextareaStatusSetAction;
}


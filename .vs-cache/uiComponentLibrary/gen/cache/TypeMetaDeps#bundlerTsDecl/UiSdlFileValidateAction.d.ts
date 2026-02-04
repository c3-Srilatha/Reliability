export interface UiSdlFileValidateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFileValidateAction;

  readonly payload?: UiSdlFileValidatePayload | null;
  withPayload(payload: IUiSdlFileValidatePayload | null): UiSdlFileValidateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFileValidateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFileValidateAction;
}


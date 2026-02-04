export interface UiSdlValidateAndSubmitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlValidateAndSubmitAction;

  readonly payload?: UiSdlValidateAndSubmitPayload | null;
  withPayload(payload: IUiSdlValidateAndSubmitPayload | null): UiSdlValidateAndSubmitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlValidateAndSubmitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlValidateAndSubmitAction;
}


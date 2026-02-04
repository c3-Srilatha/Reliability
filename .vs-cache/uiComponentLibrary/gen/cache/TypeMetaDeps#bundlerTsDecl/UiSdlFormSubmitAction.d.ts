export interface UiSdlFormSubmitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFormSubmitAction;

  readonly payload?: UiSdlFormSubmitPayload | null;
  withPayload(payload: IUiSdlFormSubmitPayload | null): UiSdlFormSubmitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFormSubmitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFormSubmitAction;
}


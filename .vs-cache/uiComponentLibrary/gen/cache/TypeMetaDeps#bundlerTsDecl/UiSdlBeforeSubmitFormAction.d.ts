export interface UiSdlBeforeSubmitFormAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlBeforeSubmitFormAction;

  readonly payload?: UiSdlBeforeSubmitFormPayload | null;
  withPayload(payload: IUiSdlBeforeSubmitFormPayload | null): UiSdlBeforeSubmitFormAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlBeforeSubmitFormAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlBeforeSubmitFormAction;
}


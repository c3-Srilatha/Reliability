export interface UiSdlNextButtonClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlNextButtonClickAction;

  readonly payload?: UiSdlNextButtonClickPayload | null;
  withPayload(payload: IUiSdlNextButtonClickPayload | null): UiSdlNextButtonClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlNextButtonClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlNextButtonClickAction;
}


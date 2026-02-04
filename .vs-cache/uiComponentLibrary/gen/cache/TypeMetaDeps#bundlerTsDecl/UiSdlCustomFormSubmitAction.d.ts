export interface UiSdlCustomFormSubmitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCustomFormSubmitAction;

  readonly payload?: UiSdlCustomFormSubmitPayload | null;
  withPayload(payload: IUiSdlCustomFormSubmitPayload | null): UiSdlCustomFormSubmitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCustomFormSubmitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCustomFormSubmitAction;
}


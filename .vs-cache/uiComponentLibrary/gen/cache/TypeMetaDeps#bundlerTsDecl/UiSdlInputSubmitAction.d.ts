export interface UiSdlInputSubmitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInputSubmitAction;

  readonly payload?: UiSdlInputSubmitPayload | null;
  withPayload(payload: IUiSdlInputSubmitPayload | null): UiSdlInputSubmitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInputSubmitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInputSubmitAction;
}


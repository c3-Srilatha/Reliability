export interface UiSdlButtonClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlButtonClickAction;

  readonly payload?: UiSdlButtonClickPayload | null;
  withPayload(payload: IUiSdlButtonClickPayload | null): UiSdlButtonClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlButtonClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlButtonClickAction;
}


export interface UiSdlTitleClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlTitleClickAction;

  readonly payload?: UiSdlTitleClickPayload | null;
  withPayload(payload: IUiSdlTitleClickPayload | null): UiSdlTitleClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlTitleClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlTitleClickAction;
}


export interface UiSdlFieldSetActionButtonClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFieldSetActionButtonClickAction;

  readonly payload?: UiSdlFieldSetActionButtonClickPayload | null;
  withPayload(payload: IUiSdlFieldSetActionButtonClickPayload | null): UiSdlFieldSetActionButtonClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFieldSetActionButtonClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFieldSetActionButtonClickAction;
}


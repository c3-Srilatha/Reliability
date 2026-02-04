export interface UiSdlFieldSetActionButtonStateChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFieldSetActionButtonStateChangeAction;

  readonly payload?: UiSdlFieldSetActionButtonStateChangePayload | null;
  withPayload(payload: IUiSdlFieldSetActionButtonStateChangePayload | null): UiSdlFieldSetActionButtonStateChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFieldSetActionButtonStateChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFieldSetActionButtonStateChangeAction;
}


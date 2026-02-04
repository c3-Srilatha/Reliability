export interface UiSdlActionButtonStateChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlActionButtonStateChangeAction;

  readonly payload?: UiSdlActionButtonStateChangePayload | null;
  withPayload(payload: IUiSdlActionButtonStateChangePayload | null): UiSdlActionButtonStateChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlActionButtonStateChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlActionButtonStateChangeAction;
}


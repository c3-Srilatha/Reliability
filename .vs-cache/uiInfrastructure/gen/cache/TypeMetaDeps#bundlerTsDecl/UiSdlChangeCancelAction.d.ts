export interface UiSdlChangeCancelAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlChangeCancelAction;

  readonly payload?: UiSdlChangeCancelPayload | null;
  withPayload(payload: IUiSdlChangeCancelPayload | null): UiSdlChangeCancelAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlChangeCancelAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlChangeCancelAction;
}


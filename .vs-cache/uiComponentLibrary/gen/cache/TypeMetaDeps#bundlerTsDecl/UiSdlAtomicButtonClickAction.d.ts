export interface UiSdlAtomicButtonClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAtomicButtonClickAction;

  readonly payload?: UiSdlAtomicButtonClickPayload | null;
  withPayload(payload: IUiSdlAtomicButtonClickPayload | null): UiSdlAtomicButtonClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAtomicButtonClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAtomicButtonClickAction;
}


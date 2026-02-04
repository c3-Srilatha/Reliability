export interface UiSdlAtomicButtonSetLoadingAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAtomicButtonSetLoadingAction;

  readonly payload?: UiSdlAtomicButtonSetLoadingPayload | null;
  withPayload(payload: IUiSdlAtomicButtonSetLoadingPayload | null): UiSdlAtomicButtonSetLoadingAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAtomicButtonSetLoadingAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAtomicButtonSetLoadingAction;
}


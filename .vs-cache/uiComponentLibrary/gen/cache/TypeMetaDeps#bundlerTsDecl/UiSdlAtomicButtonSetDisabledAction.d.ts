export interface UiSdlAtomicButtonSetDisabledAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAtomicButtonSetDisabledAction;

  readonly payload?: UiSdlAtomicButtonSetDisabledPayload | null;
  withPayload(payload: IUiSdlAtomicButtonSetDisabledPayload | null): UiSdlAtomicButtonSetDisabledAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAtomicButtonSetDisabledAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAtomicButtonSetDisabledAction;
}


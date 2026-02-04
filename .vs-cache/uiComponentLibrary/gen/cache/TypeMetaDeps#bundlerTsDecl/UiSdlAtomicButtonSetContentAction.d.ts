export interface UiSdlAtomicButtonSetContentAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAtomicButtonSetContentAction;

  readonly payload?: UiSdlAtomicButtonSetContentPayload | null;
  withPayload(payload: IUiSdlAtomicButtonSetContentPayload | null): UiSdlAtomicButtonSetContentAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAtomicButtonSetContentAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAtomicButtonSetContentAction;
}


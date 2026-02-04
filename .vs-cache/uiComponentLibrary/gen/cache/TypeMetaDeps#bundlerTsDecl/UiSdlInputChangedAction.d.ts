export interface UiSdlInputChangedAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInputChangedAction;

  readonly payload?: UiSdlInputChangedPayload | null;
  withPayload(payload: IUiSdlInputChangedPayload | null): UiSdlInputChangedAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInputChangedAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInputChangedAction;
}


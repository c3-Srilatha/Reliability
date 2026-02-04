export interface UiSdlDefaultStyleIdSetAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDefaultStyleIdSetAction;

  readonly payload?: UiSdlDefaultStyleIdSetPayload | null;
  withPayload(payload: IUiSdlDefaultStyleIdSetPayload | null): UiSdlDefaultStyleIdSetAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDefaultStyleIdSetAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDefaultStyleIdSetAction;
}


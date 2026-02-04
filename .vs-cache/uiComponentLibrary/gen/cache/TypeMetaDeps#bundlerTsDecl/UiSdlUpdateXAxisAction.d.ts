export interface UiSdlUpdateXAxisAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlUpdateXAxisAction;

  readonly payload?: UiSdlUpdateXAxisPayload | null;
  withPayload(payload: IUiSdlUpdateXAxisPayload | null): UiSdlUpdateXAxisAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlUpdateXAxisAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlUpdateXAxisAction;
}


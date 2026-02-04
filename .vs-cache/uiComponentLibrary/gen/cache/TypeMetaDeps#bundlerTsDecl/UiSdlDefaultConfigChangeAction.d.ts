export interface UiSdlDefaultConfigChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlDefaultConfigChangeAction;

  readonly payload?: UiSdlInputChangePayload | null;
  withPayload(payload: IUiSdlInputChangePayload | null): UiSdlDefaultConfigChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlDefaultConfigChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDefaultConfigChangeAction;
}


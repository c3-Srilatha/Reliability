export interface UiSdlInputChangeAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlInputChangeAction;

  readonly payload?: UiSdlInputChangePayload | null;
  withPayload(payload: IUiSdlInputChangePayload | null): UiSdlInputChangeAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlInputChangeAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInputChangeAction;
}


export interface UiSdlSelectAllToggleAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSelectAllToggleAction;

  readonly payload?: UiSdlSelectAllTogglePayload | null;
  withPayload(payload: IUiSdlSelectAllTogglePayload | null): UiSdlSelectAllToggleAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSelectAllToggleAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSelectAllToggleAction;
}


export interface UiSdlRowToggleAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlRowToggleAction;

  readonly payload?: UiSdlRowTogglePayload | null;
  withPayload(payload: IUiSdlRowTogglePayload | null): UiSdlRowToggleAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlRowToggleAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlRowToggleAction;
}


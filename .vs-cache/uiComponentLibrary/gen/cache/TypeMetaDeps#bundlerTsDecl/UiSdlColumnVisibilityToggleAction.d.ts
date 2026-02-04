export interface UiSdlColumnVisibilityToggleAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlColumnVisibilityToggleAction;

  readonly payload?: UiSdlColumnVisibilityTogglePayload | null;
  withPayload(payload: IUiSdlColumnVisibilityTogglePayload | null): UiSdlColumnVisibilityToggleAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlColumnVisibilityToggleAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlColumnVisibilityToggleAction;
}


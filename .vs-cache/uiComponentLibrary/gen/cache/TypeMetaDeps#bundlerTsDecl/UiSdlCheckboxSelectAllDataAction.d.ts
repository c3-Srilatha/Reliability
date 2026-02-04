export interface UiSdlCheckboxSelectAllDataAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCheckboxSelectAllDataAction;

  readonly payload?: UiSdlCheckboxSelectAllDataPayload | null;
  withPayload(payload: IUiSdlCheckboxSelectAllDataPayload | null): UiSdlCheckboxSelectAllDataAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCheckboxSelectAllDataAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCheckboxSelectAllDataAction;
}


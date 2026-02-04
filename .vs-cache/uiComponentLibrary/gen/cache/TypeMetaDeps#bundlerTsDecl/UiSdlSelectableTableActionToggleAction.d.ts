export interface UiSdlSelectableTableActionToggleAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSelectableTableActionToggleAction;

  readonly payload?: UiSdlSelectableTableActionTogglePayload | null;
  withPayload(payload: IUiSdlSelectableTableActionTogglePayload | null): UiSdlSelectableTableActionToggleAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSelectableTableActionToggleAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSelectableTableActionToggleAction;
}


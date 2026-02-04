export interface UiSdlCheckboxClearAllSelectedIdsAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCheckboxClearAllSelectedIdsAction;

  readonly payload?: UiSdlCheckboxClearAllSelectedIdsPayload | null;
  withPayload(payload: IUiSdlCheckboxClearAllSelectedIdsPayload | null): UiSdlCheckboxClearAllSelectedIdsAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCheckboxClearAllSelectedIdsAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCheckboxClearAllSelectedIdsAction;
}


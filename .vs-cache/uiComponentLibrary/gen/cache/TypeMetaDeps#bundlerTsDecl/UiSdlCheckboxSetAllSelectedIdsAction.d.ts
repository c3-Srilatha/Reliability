export interface UiSdlCheckboxSetAllSelectedIdsAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCheckboxSetAllSelectedIdsAction;

  readonly payload?: UiSdlCheckboxSetAllSelectedIdsPayload | null;
  withPayload(payload: IUiSdlCheckboxSetAllSelectedIdsPayload | null): UiSdlCheckboxSetAllSelectedIdsAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCheckboxSetAllSelectedIdsAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCheckboxSetAllSelectedIdsAction;
}


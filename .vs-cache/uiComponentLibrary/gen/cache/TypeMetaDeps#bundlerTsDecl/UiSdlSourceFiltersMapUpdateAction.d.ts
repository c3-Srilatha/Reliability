export interface UiSdlSourceFiltersMapUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSourceFiltersMapUpdateAction;

  readonly payload?: UiSdlSourceFiltersMapUpdatePayload | null;
  withPayload(payload: IUiSdlSourceFiltersMapUpdatePayload | null): UiSdlSourceFiltersMapUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSourceFiltersMapUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSourceFiltersMapUpdateAction;
}


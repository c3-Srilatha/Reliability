export interface UiSdlCurrentlyClickedDataUpdateAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlCurrentlyClickedDataUpdateAction;

  readonly payload?: UiSdlCurrentlyClickedDataUpdatePayload | null;
  withPayload(payload: IUiSdlCurrentlyClickedDataUpdatePayload | null): UiSdlCurrentlyClickedDataUpdateAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlCurrentlyClickedDataUpdateAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlCurrentlyClickedDataUpdateAction;
}


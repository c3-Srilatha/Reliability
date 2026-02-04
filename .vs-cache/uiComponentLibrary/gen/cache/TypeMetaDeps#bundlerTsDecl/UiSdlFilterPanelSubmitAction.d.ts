export interface UiSdlFilterPanelSubmitAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFilterPanelSubmitAction;

  readonly payload?: UiSdlFilterPanelSubmitPayload | null;
  withPayload(payload: IUiSdlFilterPanelSubmitPayload | null): UiSdlFilterPanelSubmitAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFilterPanelSubmitAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFilterPanelSubmitAction;
}


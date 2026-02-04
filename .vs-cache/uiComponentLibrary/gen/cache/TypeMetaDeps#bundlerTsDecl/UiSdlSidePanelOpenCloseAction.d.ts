export interface UiSdlSidePanelOpenCloseAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSidePanelOpenCloseAction;

  readonly payload?: UiSdlSidePanelOpenClosePayload | null;
  withPayload(payload: IUiSdlSidePanelOpenClosePayload | null): UiSdlSidePanelOpenCloseAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSidePanelOpenCloseAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSidePanelOpenCloseAction;
}


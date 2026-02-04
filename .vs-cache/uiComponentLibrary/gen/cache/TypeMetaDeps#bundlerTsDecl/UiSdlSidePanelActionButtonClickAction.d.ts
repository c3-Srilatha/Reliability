export interface UiSdlSidePanelActionButtonClickAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlSidePanelActionButtonClickAction;

  readonly payload?: UiSdlSidePanelActionButtonClickPayload | null;
  withPayload(payload: IUiSdlSidePanelActionButtonClickPayload | null): UiSdlSidePanelActionButtonClickAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlSidePanelActionButtonClickAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSidePanelActionButtonClickAction;
}


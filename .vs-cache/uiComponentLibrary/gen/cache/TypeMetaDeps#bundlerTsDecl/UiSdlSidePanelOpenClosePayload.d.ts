export interface UiSdlSidePanelOpenClosePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSidePanelOpenClosePayload;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlSidePanelOpenClosePayload;
}


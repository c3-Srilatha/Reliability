export interface UiSdlHeaderUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlHeaderUpdatePayload;

  readonly header?: UiSdlSidePanelHeader | null;
  withHeader(header: IUiSdlSidePanelHeader | null): UiSdlHeaderUpdatePayload;
}


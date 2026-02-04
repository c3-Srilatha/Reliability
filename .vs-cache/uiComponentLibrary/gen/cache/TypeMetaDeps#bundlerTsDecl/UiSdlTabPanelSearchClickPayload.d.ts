export interface UiSdlTabPanelSearchClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTabPanelSearchClickPayload;

  readonly searchTerm: string;
  withSearchTerm(searchTerm: string): UiSdlTabPanelSearchClickPayload;
}


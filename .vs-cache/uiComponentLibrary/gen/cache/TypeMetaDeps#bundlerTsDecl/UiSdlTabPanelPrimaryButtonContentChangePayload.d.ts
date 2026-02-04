export interface UiSdlTabPanelPrimaryButtonContentChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTabPanelPrimaryButtonContentChangePayload;

  readonly content?: string | null;
  withContent(content: string | null): UiSdlTabPanelPrimaryButtonContentChangePayload;
}


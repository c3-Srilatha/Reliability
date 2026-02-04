export interface UiSdlActiveTabSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlActiveTabSetPayload;

  readonly tabId?: string | null;
  withTabId(tabId: string | null): UiSdlActiveTabSetPayload;
}


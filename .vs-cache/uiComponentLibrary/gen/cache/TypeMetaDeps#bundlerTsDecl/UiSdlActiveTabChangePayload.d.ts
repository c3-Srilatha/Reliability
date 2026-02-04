export interface UiSdlActiveTabChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlActiveTabChangePayload;

  readonly activeTab: string;
  withActiveTab(activeTab: string): UiSdlActiveTabChangePayload;
}


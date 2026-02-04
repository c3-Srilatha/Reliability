export interface UiSdlNotificationOnTabPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlNotificationOnTabPayload;

  readonly tabId: string;
  withTabId(tabId: string): UiSdlNotificationOnTabPayload;
}


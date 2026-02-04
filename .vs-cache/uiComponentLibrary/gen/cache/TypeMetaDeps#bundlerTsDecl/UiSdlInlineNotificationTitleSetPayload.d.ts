export interface UiSdlInlineNotificationTitleSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInlineNotificationTitleSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlInlineNotificationTitleSetPayload;
}


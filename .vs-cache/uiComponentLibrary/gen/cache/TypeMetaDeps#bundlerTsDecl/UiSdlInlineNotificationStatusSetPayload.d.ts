export interface UiSdlInlineNotificationStatusSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInlineNotificationStatusSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlInlineNotificationStatusSetPayload;
}


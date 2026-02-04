export interface UiSdlInlineNotificationHiddenSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInlineNotificationHiddenSetPayload;

  readonly value?: boolean;
  withValue(value: boolean): UiSdlInlineNotificationHiddenSetPayload;
}


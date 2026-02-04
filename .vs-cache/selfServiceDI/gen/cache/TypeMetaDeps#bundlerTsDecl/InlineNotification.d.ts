export interface InlineNotification {

  readonly notificationType?: string | null;
  withNotificationType(notificationType: string | null): InlineNotification;

  readonly id: string;
  withId(id: string): InlineNotification;

  readonly args?: any | null;
  withArgs(args: any | null): InlineNotification;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): InlineNotification;

  readonly linkText?: string | null | UiSdlDynamicValueSpec | null | null;
  withLinkText(linkText: string | null | IUiSdlDynamicValueSpec | null | null): InlineNotification;

  readonly status?: string | null;
  withStatus(status: string | null): InlineNotification;
}


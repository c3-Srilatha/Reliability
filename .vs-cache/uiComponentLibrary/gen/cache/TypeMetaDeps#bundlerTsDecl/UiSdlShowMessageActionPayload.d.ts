export interface UiSdlShowMessageActionPayload {

  readonly animation?: string | null;
  withAnimation(animation: string | null): UiSdlShowMessageActionPayload;

  readonly primaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withPrimaryText(primaryText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlShowMessageActionPayload;

  readonly secondaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withSecondaryText(secondaryText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlShowMessageActionPayload;

  readonly bannerType?: string | null;
  withBannerType(bannerType: string | null): UiSdlShowMessageActionPayload;

  readonly closeButtonEnabled?: boolean;
  withCloseButtonEnabled(closeButtonEnabled: boolean): UiSdlShowMessageActionPayload;

  readonly messageId?: string | null;
  withMessageId(messageId: string | null): UiSdlShowMessageActionPayload;

  readonly componentId?: string | null;
  withComponentId(componentId: string | null): UiSdlShowMessageActionPayload;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlShowMessageActionPayload;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlShowMessageActionPayload;
}


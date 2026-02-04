export interface UiSdlMessageBannerConfig {

  readonly animation?: string | null;
  withAnimation(animation: string | null): UiSdlMessageBannerConfig;

  readonly primaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withPrimaryText(primaryText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMessageBannerConfig;

  readonly secondaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withSecondaryText(secondaryText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlMessageBannerConfig;

  readonly bannerType?: string | null;
  withBannerType(bannerType: string | null): UiSdlMessageBannerConfig;

  readonly closeButtonEnabled?: boolean;
  withCloseButtonEnabled(closeButtonEnabled: boolean): UiSdlMessageBannerConfig;

  readonly messageId?: string | null;
  withMessageId(messageId: string | null): UiSdlMessageBannerConfig;

  readonly componentId?: string | null;
  withComponentId(componentId: string | null): UiSdlMessageBannerConfig;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlMessageBannerConfig;
}


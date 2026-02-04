export interface UiSdlGraphicBadgeStaticConfig {

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlGraphicBadgeStaticConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphicBadgeStaticConfig;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphicBadgeStaticConfig;

  readonly text?: string | null;
  withText(text: string | null): UiSdlGraphicBadgeStaticConfig;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicBadgeStaticConfig;

  readonly graphicType?: string | null;
  withGraphicType(graphicType: string | null): UiSdlGraphicBadgeStaticConfig;
}


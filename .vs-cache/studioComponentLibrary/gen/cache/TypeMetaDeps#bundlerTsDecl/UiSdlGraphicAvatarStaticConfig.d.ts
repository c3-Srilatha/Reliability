export interface UiSdlGraphicAvatarStaticConfig {

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlGraphicAvatarStaticConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphicAvatarStaticConfig;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphicAvatarStaticConfig;

  readonly text?: string | null;
  withText(text: string | null): UiSdlGraphicAvatarStaticConfig;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicAvatarStaticConfig;

  readonly imagePath?: string | null;
  withImagePath(imagePath: string | null): UiSdlGraphicAvatarStaticConfig;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): UiSdlGraphicAvatarStaticConfig;

  readonly doubleDigitDelimiter?: string | null;
  withDoubleDigitDelimiter(doubleDigitDelimiter: string | null): UiSdlGraphicAvatarStaticConfig;

  readonly graphicType?: string | null;
  withGraphicType(graphicType: string | null): UiSdlGraphicAvatarStaticConfig;
}


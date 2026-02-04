export interface UiSdlSharedAvatarLogoStaticConfig {

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlSharedAvatarLogoStaticConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlSharedAvatarLogoStaticConfig;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlSharedAvatarLogoStaticConfig;

  readonly text?: string | null;
  withText(text: string | null): UiSdlSharedAvatarLogoStaticConfig;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlSharedAvatarLogoStaticConfig;

  readonly imagePath?: string | null;
  withImagePath(imagePath: string | null): UiSdlSharedAvatarLogoStaticConfig;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): UiSdlSharedAvatarLogoStaticConfig;

  readonly doubleDigitDelimiter?: string | null;
  withDoubleDigitDelimiter(doubleDigitDelimiter: string | null): UiSdlSharedAvatarLogoStaticConfig;
}


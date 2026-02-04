export interface UiSdlGraphicLogoStaticConfig {

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlGraphicLogoStaticConfig;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGraphicLogoStaticConfig;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlGraphicLogoStaticConfig;

  readonly text?: string | null;
  withText(text: string | null): UiSdlGraphicLogoStaticConfig;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicLogoStaticConfig;

  readonly imagePath?: string | null;
  withImagePath(imagePath: string | null): UiSdlGraphicLogoStaticConfig;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): UiSdlGraphicLogoStaticConfig;

  readonly doubleDigitDelimiter?: string | null;
  withDoubleDigitDelimiter(doubleDigitDelimiter: string | null): UiSdlGraphicLogoStaticConfig;

  readonly graphicType?: string | null;
  withGraphicType(graphicType: string | null): UiSdlGraphicLogoStaticConfig;
}


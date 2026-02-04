export interface UiSdlGraphicLogoDataSpecSetting {

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicLogoDataSpecSetting;

  readonly iconMap?: C3.Map<string | null, string | null>;
  withIconMap(iconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicLogoDataSpecSetting;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicLogoDataSpecSetting;

  readonly colorMap?: C3.Map<string | null, string | null>;
  withColorMap(colorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicLogoDataSpecSetting;

  readonly backgroundColor?: UiSdlFieldBasedDataSpecSetting | null;
  withBackgroundColor(backgroundColor: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicLogoDataSpecSetting;

  readonly backgroundColorMap?: C3.Map<string | null, string | null>;
  withBackgroundColorMap(backgroundColorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicLogoDataSpecSetting;

  readonly text?: UiSdlFieldBasedDataSpecSetting | null;
  withText(text: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicLogoDataSpecSetting;

  readonly randomizeBackgroundAndColor?: boolean;
  withRandomizeBackgroundAndColor(randomizeBackgroundAndColor: boolean): UiSdlGraphicLogoDataSpecSetting;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicLogoDataSpecSetting;

  readonly image?: UiSdlFieldBasedDataSpecSetting | null;
  withImage(image: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicLogoDataSpecSetting;

  readonly tooltip?: UiSdlFieldBasedDataSpecSetting | null;
  withTooltip(tooltip: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicLogoDataSpecSetting;

  readonly doubleDigitDelimiter?: string | null;
  withDoubleDigitDelimiter(doubleDigitDelimiter: string | null): UiSdlGraphicLogoDataSpecSetting;

  readonly graphicType?: string | null;
  withGraphicType(graphicType: string | null): UiSdlGraphicLogoDataSpecSetting;
}


export interface UiSdlGraphicAvatarDataSpecSetting {

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicAvatarDataSpecSetting;

  readonly iconMap?: C3.Map<string | null, string | null>;
  withIconMap(iconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicAvatarDataSpecSetting;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicAvatarDataSpecSetting;

  readonly colorMap?: C3.Map<string | null, string | null>;
  withColorMap(colorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicAvatarDataSpecSetting;

  readonly backgroundColor?: UiSdlFieldBasedDataSpecSetting | null;
  withBackgroundColor(backgroundColor: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicAvatarDataSpecSetting;

  readonly backgroundColorMap?: C3.Map<string | null, string | null>;
  withBackgroundColorMap(backgroundColorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicAvatarDataSpecSetting;

  readonly text?: UiSdlFieldBasedDataSpecSetting | null;
  withText(text: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicAvatarDataSpecSetting;

  readonly randomizeBackgroundAndColor?: boolean;
  withRandomizeBackgroundAndColor(randomizeBackgroundAndColor: boolean): UiSdlGraphicAvatarDataSpecSetting;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicAvatarDataSpecSetting;

  readonly image?: UiSdlFieldBasedDataSpecSetting | null;
  withImage(image: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicAvatarDataSpecSetting;

  readonly tooltip?: UiSdlFieldBasedDataSpecSetting | null;
  withTooltip(tooltip: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicAvatarDataSpecSetting;

  readonly doubleDigitDelimiter?: string | null;
  withDoubleDigitDelimiter(doubleDigitDelimiter: string | null): UiSdlGraphicAvatarDataSpecSetting;

  readonly graphicType?: string | null;
  withGraphicType(graphicType: string | null): UiSdlGraphicAvatarDataSpecSetting;
}


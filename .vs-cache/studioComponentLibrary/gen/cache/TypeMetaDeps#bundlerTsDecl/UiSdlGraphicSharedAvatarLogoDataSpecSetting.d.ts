export interface UiSdlGraphicSharedAvatarLogoDataSpecSetting {

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly iconMap?: C3.Map<string | null, string | null>;
  withIconMap(iconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly colorMap?: C3.Map<string | null, string | null>;
  withColorMap(colorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly backgroundColor?: UiSdlFieldBasedDataSpecSetting | null;
  withBackgroundColor(backgroundColor: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly backgroundColorMap?: C3.Map<string | null, string | null>;
  withBackgroundColorMap(backgroundColorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly text?: UiSdlFieldBasedDataSpecSetting | null;
  withText(text: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly randomizeBackgroundAndColor?: boolean;
  withRandomizeBackgroundAndColor(randomizeBackgroundAndColor: boolean): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly image?: UiSdlFieldBasedDataSpecSetting | null;
  withImage(image: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly tooltip?: UiSdlFieldBasedDataSpecSetting | null;
  withTooltip(tooltip: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicSharedAvatarLogoDataSpecSetting;

  readonly doubleDigitDelimiter?: string | null;
  withDoubleDigitDelimiter(doubleDigitDelimiter: string | null): UiSdlGraphicSharedAvatarLogoDataSpecSetting;
}


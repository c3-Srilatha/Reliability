export interface UiSdlGraphicBadgeDataSpecSetting {

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicBadgeDataSpecSetting;

  readonly iconMap?: C3.Map<string | null, string | null>;
  withIconMap(iconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicBadgeDataSpecSetting;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicBadgeDataSpecSetting;

  readonly colorMap?: C3.Map<string | null, string | null>;
  withColorMap(colorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicBadgeDataSpecSetting;

  readonly backgroundColor?: UiSdlFieldBasedDataSpecSetting | null;
  withBackgroundColor(backgroundColor: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicBadgeDataSpecSetting;

  readonly backgroundColorMap?: C3.Map<string | null, string | null>;
  withBackgroundColorMap(backgroundColorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicBadgeDataSpecSetting;

  readonly text?: UiSdlFieldBasedDataSpecSetting | null;
  withText(text: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicBadgeDataSpecSetting;

  readonly randomizeBackgroundAndColor?: boolean;
  withRandomizeBackgroundAndColor(randomizeBackgroundAndColor: boolean): UiSdlGraphicBadgeDataSpecSetting;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicBadgeDataSpecSetting;

  readonly graphicType?: string | null;
  withGraphicType(graphicType: string | null): UiSdlGraphicBadgeDataSpecSetting;
}


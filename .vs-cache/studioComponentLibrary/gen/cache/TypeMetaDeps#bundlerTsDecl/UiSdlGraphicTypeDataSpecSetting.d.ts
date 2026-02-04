export interface UiSdlGraphicTypeDataSpecSetting {

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicTypeDataSpecSetting;

  readonly iconMap?: C3.Map<string | null, string | null>;
  withIconMap(iconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicTypeDataSpecSetting;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicTypeDataSpecSetting;

  readonly colorMap?: C3.Map<string | null, string | null>;
  withColorMap(colorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicTypeDataSpecSetting;

  readonly backgroundColor?: UiSdlFieldBasedDataSpecSetting | null;
  withBackgroundColor(backgroundColor: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicTypeDataSpecSetting;

  readonly backgroundColorMap?: C3.Map<string | null, string | null>;
  withBackgroundColorMap(backgroundColorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlGraphicTypeDataSpecSetting;

  readonly text?: UiSdlFieldBasedDataSpecSetting | null;
  withText(text: IUiSdlFieldBasedDataSpecSetting | null): UiSdlGraphicTypeDataSpecSetting;

  readonly randomizeBackgroundAndColor?: boolean;
  withRandomizeBackgroundAndColor(randomizeBackgroundAndColor: boolean): UiSdlGraphicTypeDataSpecSetting;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphicTypeDataSpecSetting;
}


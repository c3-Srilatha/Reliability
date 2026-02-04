export interface GridCellAvatarSetting {

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): GridCellAvatarSetting;

  readonly iconMap?: C3.Map<string | null, string | null>;
  withIconMap(iconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): GridCellAvatarSetting;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null): GridCellAvatarSetting;

  readonly colorMap?: C3.Map<string | null, string | null>;
  withColorMap(colorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): GridCellAvatarSetting;

  readonly backgroundColor?: UiSdlFieldBasedDataSpecSetting | null;
  withBackgroundColor(backgroundColor: IUiSdlFieldBasedDataSpecSetting | null): GridCellAvatarSetting;

  readonly backgroundColorMap?: C3.Map<string | null, string | null>;
  withBackgroundColorMap(backgroundColorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): GridCellAvatarSetting;
}


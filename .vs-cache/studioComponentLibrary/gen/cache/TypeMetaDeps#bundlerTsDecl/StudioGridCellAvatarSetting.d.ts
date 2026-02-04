export interface StudioGridCellAvatarSetting {

  readonly icon?: UiSdlFieldBasedDataSpecSetting | null;
  withIcon(icon: IUiSdlFieldBasedDataSpecSetting | null): StudioGridCellAvatarSetting;

  readonly iconMap?: C3.Map<string | null, string | null>;
  withIconMap(iconMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): StudioGridCellAvatarSetting;

  readonly image?: UiSdlFieldBasedDataSpecSetting | null;
  withImage(image: IUiSdlFieldBasedDataSpecSetting | null): StudioGridCellAvatarSetting;

  readonly imageMap?: C3.Map<string | null, string | null>;
  withImageMap(imageMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): StudioGridCellAvatarSetting;

  readonly color?: UiSdlFieldBasedDataSpecSetting | null;
  withColor(color: IUiSdlFieldBasedDataSpecSetting | null): StudioGridCellAvatarSetting;

  readonly colorMap?: C3.Map<string | null, string | null>;
  withColorMap(colorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): StudioGridCellAvatarSetting;

  readonly backgroundColor?: UiSdlFieldBasedDataSpecSetting | null;
  withBackgroundColor(backgroundColor: IUiSdlFieldBasedDataSpecSetting | null): StudioGridCellAvatarSetting;

  readonly backgroundColorMap?: C3.Map<string | null, string | null>;
  withBackgroundColorMap(backgroundColorMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): StudioGridCellAvatarSetting;

  readonly tooltip?: UiSdlFieldBasedDataSpecSetting | null | UiSdlDynamicValueSpec | null | null;
  withTooltip(tooltip: IUiSdlFieldBasedDataSpecSetting | null | IUiSdlDynamicValueSpec | null | null): StudioGridCellAvatarSetting;

  readonly tooltipMap?: C3.Map<string | null, string | null>;
  withTooltipMap(tooltipMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): StudioGridCellAvatarSetting;
}


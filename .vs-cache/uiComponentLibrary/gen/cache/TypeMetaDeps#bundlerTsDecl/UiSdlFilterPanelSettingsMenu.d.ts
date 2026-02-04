export interface UiSdlFilterPanelSettingsMenu {

  readonly allowSaveAndLoadConfiguration?: boolean;
  withAllowSaveAndLoadConfiguration(allowSaveAndLoadConfiguration: boolean): UiSdlFilterPanelSettingsMenu;

  readonly allowAdvancedFilterMode?: boolean;
  withAllowAdvancedFilterMode(allowAdvancedFilterMode: boolean): UiSdlFilterPanelSettingsMenu;
}


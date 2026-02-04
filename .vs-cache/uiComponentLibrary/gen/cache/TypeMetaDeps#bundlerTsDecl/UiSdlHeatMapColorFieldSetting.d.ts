export interface UiSdlHeatMapColorFieldSetting {

  readonly colorConfigurationStrategy?: UiSdlHeatMapManualColorSetting | null | UiSdlHeatMapAbsoluteColorSetting | null | UiSdlHeatMapPercentileColorSetting | null | null;
  withColorConfigurationStrategy(colorConfigurationStrategy: IUiSdlHeatMapManualColorSetting | null | IUiSdlHeatMapAbsoluteColorSetting | null | IUiSdlHeatMapPercentileColorSetting | null | null): UiSdlHeatMapColorFieldSetting;
}


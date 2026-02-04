export interface UiSdlHeatMapManualColorSetting {

  readonly highest: number;
  withHighest(highest: number): UiSdlHeatMapManualColorSetting;

  readonly lowest: number;
  withLowest(lowest: number): UiSdlHeatMapManualColorSetting;
}


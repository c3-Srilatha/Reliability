export interface UiSdlMapMarkerConditionalColorSetting {

  readonly threshold: number;
  withThreshold(threshold: number): UiSdlMapMarkerConditionalColorSetting;

  readonly operator: string;
  withOperator(operator: string): UiSdlMapMarkerConditionalColorSetting;

  readonly thresholdColor: string;
  withThresholdColor(thresholdColor: string): UiSdlMapMarkerConditionalColorSetting;
}


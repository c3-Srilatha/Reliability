export interface UiSdlGaugeChartColorThresholdDataSpecSetting {

  readonly fromValue?: number | null;
  withFromValue(fromValue: number | null): UiSdlGaugeChartColorThresholdDataSpecSetting;

  readonly toValue?: number | null;
  withToValue(toValue: number | null): UiSdlGaugeChartColorThresholdDataSpecSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlGaugeChartColorThresholdDataSpecSetting;
}


export interface UiSdlGaugeChartLabelThresholdDataSpecSetting {

  readonly fromValue?: number | null;
  withFromValue(fromValue: number | null): UiSdlGaugeChartLabelThresholdDataSpecSetting;

  readonly toValue?: number | null;
  withToValue(toValue: number | null): UiSdlGaugeChartLabelThresholdDataSpecSetting;

  readonly label?: string | null | UiSdlDynamicValueSpec | null | null;
  withLabel(label: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlGaugeChartLabelThresholdDataSpecSetting;
}


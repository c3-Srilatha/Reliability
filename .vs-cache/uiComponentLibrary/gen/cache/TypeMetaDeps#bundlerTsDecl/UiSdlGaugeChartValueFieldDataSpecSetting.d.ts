export interface UiSdlGaugeChartValueFieldDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly style?: string | null;
  withStyle(style: string | null): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly unit?: string | null;
  withUnit(unit: string | null): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly currency?: string | null;
  withCurrency(currency: string | null): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly min?: number | null;
  withMin(min: number | null): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly max?: number | null;
  withMax(max: number | null): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly colorThresholds?: C3.Array<UiSdlGaugeChartColorThresholdDataSpecSetting | null>;
  withColorThresholds(colorThresholds: C3.Array<UiSdlGaugeChartColorThresholdDataSpecSetting | null> | Array<IUiSdlGaugeChartColorThresholdDataSpecSetting | null>): UiSdlGaugeChartValueFieldDataSpecSetting;

  readonly labelThresholds?: C3.Array<UiSdlGaugeChartLabelThresholdDataSpecSetting | null>;
  withLabelThresholds(labelThresholds: C3.Array<UiSdlGaugeChartLabelThresholdDataSpecSetting | null> | Array<IUiSdlGaugeChartLabelThresholdDataSpecSetting | null>): UiSdlGaugeChartValueFieldDataSpecSetting;
}


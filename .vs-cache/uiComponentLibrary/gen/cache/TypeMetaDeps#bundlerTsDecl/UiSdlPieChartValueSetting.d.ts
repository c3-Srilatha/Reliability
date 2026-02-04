export interface UiSdlPieChartValueSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlPieChartValueSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlPieChartValueSetting;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlPieChartValueSetting;

  readonly aggregationSelector?: string | null;
  withAggregationSelector(aggregationSelector: string | null): UiSdlPieChartValueSetting;
}


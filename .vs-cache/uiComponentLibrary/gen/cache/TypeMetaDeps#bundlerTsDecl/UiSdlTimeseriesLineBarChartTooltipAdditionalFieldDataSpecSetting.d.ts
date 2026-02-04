export interface UiSdlTimeseriesLineBarChartTooltipAdditionalFieldDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlTimeseriesLineBarChartTooltipAdditionalFieldDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlTimeseriesLineBarChartTooltipAdditionalFieldDataSpecSetting;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlTimeseriesLineBarChartTooltipAdditionalFieldDataSpecSetting;

  readonly decimalPrecision?: number | null;
  withDecimalPrecision(decimalPrecision: number | null): UiSdlTimeseriesLineBarChartTooltipAdditionalFieldDataSpecSetting;
}


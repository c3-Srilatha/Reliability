export interface UiSdlHistogramYAxisDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlHistogramYAxisDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlHistogramYAxisDataSpecSetting;

  readonly color?: string | null;
  withColor(color: string | null): UiSdlHistogramYAxisDataSpecSetting;

  readonly legendLabel?: string | null;
  withLegendLabel(legendLabel: string | null): UiSdlHistogramYAxisDataSpecSetting;

  readonly ignoreZeros?: boolean;
  withIgnoreZeros(ignoreZeros: boolean): UiSdlHistogramYAxisDataSpecSetting;
}


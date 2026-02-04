export interface UiSdlMapTooltipAdditionalFieldDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMapTooltipAdditionalFieldDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlMapTooltipAdditionalFieldDataSpecSetting;

  readonly label?: string | null;
  withLabel(label: string | null): UiSdlMapTooltipAdditionalFieldDataSpecSetting;
}


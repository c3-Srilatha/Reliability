export interface UiSdlEnhancedCardStatusDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlEnhancedCardStatusDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlEnhancedCardStatusDataSpecSetting;

  readonly statusMap?: C3.Map<string | null, string | null>;
  withStatusMap(statusMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlEnhancedCardStatusDataSpecSetting;

  readonly tooltipMap?: C3.Map<string | null, string | null>;
  withTooltipMap(tooltipMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlEnhancedCardStatusDataSpecSetting;
}


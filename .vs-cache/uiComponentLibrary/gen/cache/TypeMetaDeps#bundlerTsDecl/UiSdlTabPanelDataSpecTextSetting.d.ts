export interface UiSdlTabPanelDataSpecTextSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlTabPanelDataSpecTextSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlTabPanelDataSpecTextSetting;

  readonly text: string | null | UiSdlDynamicValueSpec | null;
  withText(text: string | null | IUiSdlDynamicValueSpec | null): UiSdlTabPanelDataSpecTextSetting;
}


export interface UiSdlActionGroupFieldBasedDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlActionGroupFieldBasedDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlActionGroupFieldBasedDataSpecSetting;

  readonly actionGroupMap?: C3.Map<string | null, UiSdlActionGroup | null>;
  withActionGroupMap(actionGroupMap: C3.Map<string | null, UiSdlActionGroup | null> | {[key: string | null]: IUiSdlActionGroup | null}): UiSdlActionGroupFieldBasedDataSpecSetting;
}


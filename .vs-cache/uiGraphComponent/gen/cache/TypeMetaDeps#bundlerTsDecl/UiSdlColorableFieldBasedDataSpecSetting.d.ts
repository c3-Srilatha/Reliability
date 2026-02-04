export interface UiSdlColorableFieldBasedDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlColorableFieldBasedDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlColorableFieldBasedDataSpecSetting;

  readonly color: string;
  withColor(color: string): UiSdlColorableFieldBasedDataSpecSetting;

  readonly colorMapping?: C3.Map<string | null, string | null>;
  withColorMapping(colorMapping: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlColorableFieldBasedDataSpecSetting;
}


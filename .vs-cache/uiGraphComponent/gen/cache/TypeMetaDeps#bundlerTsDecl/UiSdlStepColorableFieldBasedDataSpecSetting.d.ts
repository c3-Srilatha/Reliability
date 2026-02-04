export interface UiSdlStepColorableFieldBasedDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlStepColorableFieldBasedDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlStepColorableFieldBasedDataSpecSetting;

  readonly colorStepValues: C3.Array<number | null>;
  withColorStepValues(colorStepValues: C3.Array<number | null> | Array<number | null>): UiSdlStepColorableFieldBasedDataSpecSetting;

  readonly stepColors: C3.Array<string | null>;
  withStepColors(stepColors: C3.Array<string | null> | Array<string | null>): UiSdlStepColorableFieldBasedDataSpecSetting;
}


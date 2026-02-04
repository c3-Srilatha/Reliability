export interface UiSdlCardListContentBodyTextFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCardListContentBodyTextFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCardListContentBodyTextFieldSetting;

  readonly prefix?: string | null;
  withPrefix(prefix: string | null): UiSdlCardListContentBodyTextFieldSetting;
}


export interface UiSdlCardListSortFieldDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCardListSortFieldDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCardListSortFieldDataSpecSetting;

  readonly sortOrder: string;
  withSortOrder(sortOrder: string): UiSdlCardListSortFieldDataSpecSetting;
}


export interface UiSdlCollectionListDataSpecIconSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCollectionListDataSpecIconSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCollectionListDataSpecIconSetting;

  readonly displayIcon?: boolean;
  withDisplayIcon(displayIcon: boolean): UiSdlCollectionListDataSpecIconSetting;
}


export interface UiSdlCollectionListDataSpecValueBarSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCollectionListDataSpecValueBarSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCollectionListDataSpecValueBarSetting;

  readonly valueType?: UiSdlCollectionListValueBarTypePartOfWhole | null;
  withValueType(valueType: IUiSdlCollectionListValueBarTypePartOfWhole | null): UiSdlCollectionListDataSpecValueBarSetting;
}


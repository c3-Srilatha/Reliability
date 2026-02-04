export interface UiSdlCollectionListDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlCollectionListDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlCollectionListDataSpecSetting;

  readonly sortable?: boolean;
  withSortable(sortable: boolean): UiSdlCollectionListDataSpecSetting;

  readonly sortOrder?: string | null;
  withSortOrder(sortOrder: string | null): UiSdlCollectionListDataSpecSetting;

  readonly redirectLink?: UiSdlLinkTemplate | null;
  withRedirectLink(redirectLink: IUiSdlLinkTemplate | null): UiSdlCollectionListDataSpecSetting;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UiSdlCollectionListDataSpecSetting;
}


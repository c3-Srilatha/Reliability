export interface UiSdlLinkFieldBasedDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlLinkFieldBasedDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlLinkFieldBasedDataSpecSetting;

  readonly targetPage?: string | null;
  withTargetPage(targetPage: string | null): UiSdlLinkFieldBasedDataSpecSetting;

  readonly internal?: boolean;
  withInternal(internal: boolean): UiSdlLinkFieldBasedDataSpecSetting;

  readonly opensNewTab?: boolean;
  withOpensNewTab(opensNewTab: boolean): UiSdlLinkFieldBasedDataSpecSetting;
}


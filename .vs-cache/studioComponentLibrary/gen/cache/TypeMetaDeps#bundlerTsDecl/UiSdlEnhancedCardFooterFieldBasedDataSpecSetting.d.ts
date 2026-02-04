export interface UiSdlEnhancedCardFooterFieldBasedDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlEnhancedCardFooterFieldBasedDataSpecSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlEnhancedCardFooterFieldBasedDataSpecSetting;

  readonly targetPage?: string | null;
  withTargetPage(targetPage: string | null): UiSdlEnhancedCardFooterFieldBasedDataSpecSetting;

  readonly internal?: boolean;
  withInternal(internal: boolean): UiSdlEnhancedCardFooterFieldBasedDataSpecSetting;

  readonly opensNewTab?: boolean;
  withOpensNewTab(opensNewTab: boolean): UiSdlEnhancedCardFooterFieldBasedDataSpecSetting;

  readonly urlText?: string | null | UiSdlDynamicValueSpec | null | null;
  withUrlText(urlText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlEnhancedCardFooterFieldBasedDataSpecSetting;

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlEnhancedCardFooterFieldBasedDataSpecSetting;
}


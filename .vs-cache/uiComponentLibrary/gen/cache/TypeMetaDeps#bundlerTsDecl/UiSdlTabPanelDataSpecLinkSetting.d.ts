export interface UiSdlTabPanelDataSpecLinkSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlTabPanelDataSpecLinkSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlTabPanelDataSpecLinkSetting;

  readonly targetPage?: string | null;
  withTargetPage(targetPage: string | null): UiSdlTabPanelDataSpecLinkSetting;

  readonly href?: string | null;
  withHref(href: string | null): UiSdlTabPanelDataSpecLinkSetting;

  readonly internal?: boolean;
  withInternal(internal: boolean): UiSdlTabPanelDataSpecLinkSetting;

  readonly opensNewTab?: boolean;
  withOpensNewTab(opensNewTab: boolean): UiSdlTabPanelDataSpecLinkSetting;

  readonly download?: boolean;
  withDownload(download: boolean): UiSdlTabPanelDataSpecLinkSetting;

  readonly downloadFileName?: string | null;
  withDownloadFileName(downloadFileName: string | null): UiSdlTabPanelDataSpecLinkSetting;

  readonly pageVariable?: string | null;
  withPageVariable(pageVariable: string | null): UiSdlTabPanelDataSpecLinkSetting;

  readonly pageVariableFilterField?: string | null;
  withPageVariableFilterField(pageVariableFilterField: string | null): UiSdlTabPanelDataSpecLinkSetting;

  readonly urlEncode?: boolean;
  withUrlEncode(urlEncode: boolean): UiSdlTabPanelDataSpecLinkSetting;

  readonly redirectLinkFieldName?: string | null;
  withRedirectLinkFieldName(redirectLinkFieldName: string | null): UiSdlTabPanelDataSpecLinkSetting;
}


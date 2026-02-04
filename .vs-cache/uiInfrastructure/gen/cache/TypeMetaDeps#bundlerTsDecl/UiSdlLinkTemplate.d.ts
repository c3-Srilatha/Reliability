export interface UiSdlLinkTemplate {

  readonly targetPage?: string | null;
  withTargetPage(targetPage: string | null): UiSdlLinkTemplate;

  readonly href?: string | null;
  withHref(href: string | null): UiSdlLinkTemplate;

  readonly internal?: boolean;
  withInternal(internal: boolean): UiSdlLinkTemplate;

  readonly opensNewTab?: boolean;
  withOpensNewTab(opensNewTab: boolean): UiSdlLinkTemplate;

  readonly download?: boolean;
  withDownload(download: boolean): UiSdlLinkTemplate;

  readonly downloadFileName?: string | null;
  withDownloadFileName(downloadFileName: string | null): UiSdlLinkTemplate;

  readonly pageVariable?: string | null;
  withPageVariable(pageVariable: string | null): UiSdlLinkTemplate;

  readonly pageVariableFilterField?: string | null;
  withPageVariableFilterField(pageVariableFilterField: string | null): UiSdlLinkTemplate;

  readonly urlEncode?: boolean;
  withUrlEncode(urlEncode: boolean): UiSdlLinkTemplate;
}


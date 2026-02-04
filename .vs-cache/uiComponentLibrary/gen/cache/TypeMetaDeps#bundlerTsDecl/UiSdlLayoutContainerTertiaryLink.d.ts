export interface UiSdlLayoutContainerTertiaryLink {

  readonly targetPage?: string | null;
  withTargetPage(targetPage: string | null): UiSdlLayoutContainerTertiaryLink;

  readonly href?: string | null;
  withHref(href: string | null): UiSdlLayoutContainerTertiaryLink;

  readonly internal?: boolean;
  withInternal(internal: boolean): UiSdlLayoutContainerTertiaryLink;

  readonly opensNewTab?: boolean;
  withOpensNewTab(opensNewTab: boolean): UiSdlLayoutContainerTertiaryLink;

  readonly download?: boolean;
  withDownload(download: boolean): UiSdlLayoutContainerTertiaryLink;

  readonly downloadFileName?: string | null;
  withDownloadFileName(downloadFileName: string | null): UiSdlLayoutContainerTertiaryLink;

  readonly pageVariable?: string | null;
  withPageVariable(pageVariable: string | null): UiSdlLayoutContainerTertiaryLink;

  readonly pageVariableFilterField?: string | null;
  withPageVariableFilterField(pageVariableFilterField: string | null): UiSdlLayoutContainerTertiaryLink;

  readonly urlEncode?: boolean;
  withUrlEncode(urlEncode: boolean): UiSdlLayoutContainerTertiaryLink;

  readonly text?: string | null;
  withText(text: string | null): UiSdlLayoutContainerTertiaryLink;
}


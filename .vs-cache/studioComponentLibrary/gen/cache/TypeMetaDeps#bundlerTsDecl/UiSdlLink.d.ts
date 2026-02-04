export interface UiSdlLink {

  readonly targetPage?: string | null;
  withTargetPage(targetPage: string | null): UiSdlLink;

  readonly internal?: boolean;
  withInternal(internal: boolean): UiSdlLink;

  readonly opensNewTab?: boolean;
  withOpensNewTab(opensNewTab: boolean): UiSdlLink;
}


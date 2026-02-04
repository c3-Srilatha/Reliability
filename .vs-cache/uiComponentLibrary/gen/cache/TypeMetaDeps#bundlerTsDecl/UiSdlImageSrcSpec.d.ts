export interface UiSdlImageSrcSpec {

  readonly extension?: string | null;
  withExtension(extension: string | null): UiSdlImageSrcSpec;

  readonly imageFileName?: string | null;
  withImageFileName(imageFileName: string | null): UiSdlImageSrcSpec;

  readonly rootUrl?: string | null;
  withRootUrl(rootUrl: string | null): UiSdlImageSrcSpec;
}


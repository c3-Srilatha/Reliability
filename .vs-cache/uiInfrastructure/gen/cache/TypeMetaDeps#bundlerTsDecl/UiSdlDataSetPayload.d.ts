export interface UiSdlDataSetPayload {

  readonly original?: any;
  withOriginal(original: any): UiSdlDataSetPayload;

  readonly modified?: any;
  withModified(modified: any): UiSdlDataSetPayload;
}


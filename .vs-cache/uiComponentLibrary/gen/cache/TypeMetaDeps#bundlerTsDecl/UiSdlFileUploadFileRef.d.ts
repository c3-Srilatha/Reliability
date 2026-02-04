export interface UiSdlFileUploadFileRef {

  readonly name?: string | null;
  withName(name: string | null): UiSdlFileUploadFileRef;

  readonly path?: string | null;
  withPath(path: string | null): UiSdlFileUploadFileRef;

  readonly size?: number | null;
  withSize(size: number | null): UiSdlFileUploadFileRef;

  readonly fileType?: string | null;
  withFileType(fileType: string | null): UiSdlFileUploadFileRef;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlFileUploadFileRef;
}


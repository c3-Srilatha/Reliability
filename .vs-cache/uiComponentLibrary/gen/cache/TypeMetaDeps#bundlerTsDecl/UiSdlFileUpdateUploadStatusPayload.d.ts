export interface UiSdlFileUpdateUploadStatusPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFileUpdateUploadStatusPayload;

  readonly fileNames?: C3.Array<string | null>;
  withFileNames(fileNames: C3.Array<string | null> | Array<string | null>): UiSdlFileUpdateUploadStatusPayload;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlFileUpdateUploadStatusPayload;
}


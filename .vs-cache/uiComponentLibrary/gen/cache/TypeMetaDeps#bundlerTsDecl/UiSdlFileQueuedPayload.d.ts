export interface UiSdlFileQueuedPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFileQueuedPayload;

  readonly fileRefs?: C3.Array<any | null>;
  withFileRefs(fileRefs: C3.Array<any | null> | Array<any | null>): UiSdlFileQueuedPayload;

  readonly files?: C3.Array<any | null>;
  withFiles(files: C3.Array<any | null> | Array<any | null>): UiSdlFileQueuedPayload;
}


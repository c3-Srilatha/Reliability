export interface UiSdlFileValidatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFileValidatePayload;

  readonly files?: C3.Array<any | null>;
  withFiles(files: C3.Array<any | null> | Array<any | null>): UiSdlFileValidatePayload;
}


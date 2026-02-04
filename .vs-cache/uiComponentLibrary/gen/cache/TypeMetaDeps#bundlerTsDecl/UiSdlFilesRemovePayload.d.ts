export interface UiSdlFilesRemovePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFilesRemovePayload;

  readonly fileNames?: C3.Array<string | null>;
  withFileNames(fileNames: C3.Array<string | null> | Array<string | null>): UiSdlFilesRemovePayload;
}


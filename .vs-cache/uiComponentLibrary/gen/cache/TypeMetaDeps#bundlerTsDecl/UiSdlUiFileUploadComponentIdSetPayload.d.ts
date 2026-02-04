export interface UiSdlUiFileUploadComponentIdSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlUiFileUploadComponentIdSetPayload;

  readonly uiFileUploadComponentId?: string | null;
  withUiFileUploadComponentId(uiFileUploadComponentId: string | null): UiSdlUiFileUploadComponentIdSetPayload;
}


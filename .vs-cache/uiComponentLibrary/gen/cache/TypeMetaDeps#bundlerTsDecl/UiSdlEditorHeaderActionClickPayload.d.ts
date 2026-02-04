export interface UiSdlEditorHeaderActionClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlEditorHeaderActionClickPayload;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlEditorHeaderActionClickPayload;
}


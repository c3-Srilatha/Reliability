export interface UiSdlLayoutContainerTriggerPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlLayoutContainerTriggerPayload;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlLayoutContainerTriggerPayload;
}


export interface UiSdlDynamicComponentMountedPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDynamicComponentMountedPayload;
}


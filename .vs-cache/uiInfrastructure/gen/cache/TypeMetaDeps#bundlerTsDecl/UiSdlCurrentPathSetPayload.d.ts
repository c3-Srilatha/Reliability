export interface UiSdlCurrentPathSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCurrentPathSetPayload;

  readonly currentPath?: string | null;
  withCurrentPath(currentPath: string | null): UiSdlCurrentPathSetPayload;
}


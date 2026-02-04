export interface UiSdlAppInitPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAppInitPayload;

  readonly rootPkgName?: string | null;
  withRootPkgName(rootPkgName: string | null): UiSdlAppInitPayload;
}


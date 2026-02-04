export interface UiSdlStyleIdSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlStyleIdSetPayload;

  readonly styleId: string;
  withStyleId(styleId: string): UiSdlStyleIdSetPayload;
}


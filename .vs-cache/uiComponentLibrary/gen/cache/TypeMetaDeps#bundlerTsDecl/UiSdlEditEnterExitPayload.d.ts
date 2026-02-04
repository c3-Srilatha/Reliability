export interface UiSdlEditEnterExitPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlEditEnterExitPayload;

  readonly id: string;
  withId(id: string): UiSdlEditEnterExitPayload;

  readonly field: string;
  withField(field: string): UiSdlEditEnterExitPayload;
}


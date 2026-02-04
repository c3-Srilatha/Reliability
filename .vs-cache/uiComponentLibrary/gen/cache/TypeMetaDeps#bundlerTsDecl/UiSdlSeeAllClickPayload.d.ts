export interface UiSdlSeeAllClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSeeAllClickPayload;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSeeAllClickPayload;
}


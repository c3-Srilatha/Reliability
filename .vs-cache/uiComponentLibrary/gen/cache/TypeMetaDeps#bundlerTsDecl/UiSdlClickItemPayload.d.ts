export interface UiSdlClickItemPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlClickItemPayload;

  readonly id?: string | null;
  withId(id: string | null): UiSdlClickItemPayload;

  readonly payload?: any | null;
  withPayload(payload: any | null): UiSdlClickItemPayload;
}


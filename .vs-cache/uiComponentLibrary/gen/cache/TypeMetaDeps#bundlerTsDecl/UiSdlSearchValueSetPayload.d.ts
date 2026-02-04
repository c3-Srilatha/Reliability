export interface UiSdlSearchValueSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSearchValueSetPayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlSearchValueSetPayload;
}


export interface UiSdlAddonClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAddonClickPayload;

  readonly addOnId?: string | null;
  withAddOnId(addOnId: string | null): UiSdlAddonClickPayload;
}


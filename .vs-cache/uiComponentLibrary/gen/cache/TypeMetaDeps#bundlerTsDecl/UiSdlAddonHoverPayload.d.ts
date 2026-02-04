export interface UiSdlAddonHoverPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAddonHoverPayload;

  readonly addOnId?: string | null;
  withAddOnId(addOnId: string | null): UiSdlAddonHoverPayload;
}


export interface UiSdlAddonEmphasizePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAddonEmphasizePayload;

  readonly addOnId?: string | null;
  withAddOnId(addOnId: string | null): UiSdlAddonEmphasizePayload;
}


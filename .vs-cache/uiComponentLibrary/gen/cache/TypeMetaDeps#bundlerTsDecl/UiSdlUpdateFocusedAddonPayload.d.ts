export interface UiSdlUpdateFocusedAddonPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlUpdateFocusedAddonPayload;

  readonly addOnId?: string | null;
  withAddOnId(addOnId: string | null): UiSdlUpdateFocusedAddonPayload;
}


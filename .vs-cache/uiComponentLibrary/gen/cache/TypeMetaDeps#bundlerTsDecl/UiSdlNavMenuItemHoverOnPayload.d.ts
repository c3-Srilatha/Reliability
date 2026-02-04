export interface UiSdlNavMenuItemHoverOnPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlNavMenuItemHoverOnPayload;

  readonly navMenuItemId?: string | null;
  withNavMenuItemId(navMenuItemId: string | null): UiSdlNavMenuItemHoverOnPayload;
}


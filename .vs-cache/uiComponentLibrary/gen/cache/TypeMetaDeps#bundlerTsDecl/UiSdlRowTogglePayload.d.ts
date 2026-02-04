export interface UiSdlRowTogglePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlRowTogglePayload;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlRowTogglePayload;

  readonly id: string;
  withId(id: string): UiSdlRowTogglePayload;
}


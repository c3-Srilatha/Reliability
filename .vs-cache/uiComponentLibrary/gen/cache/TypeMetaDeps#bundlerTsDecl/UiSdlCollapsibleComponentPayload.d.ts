export interface UiSdlCollapsibleComponentPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlCollapsibleComponentPayload;

  readonly collapsed?: boolean;
  withCollapsed(collapsed: boolean): UiSdlCollapsibleComponentPayload;
}


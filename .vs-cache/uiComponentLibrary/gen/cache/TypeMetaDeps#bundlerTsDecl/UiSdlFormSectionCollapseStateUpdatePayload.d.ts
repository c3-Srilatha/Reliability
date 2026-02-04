export interface UiSdlFormSectionCollapseStateUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFormSectionCollapseStateUpdatePayload;

  readonly index?: number | null;
  withIndex(index: number | null): UiSdlFormSectionCollapseStateUpdatePayload;

  readonly collapsed?: boolean;
  withCollapsed(collapsed: boolean): UiSdlFormSectionCollapseStateUpdatePayload;
}


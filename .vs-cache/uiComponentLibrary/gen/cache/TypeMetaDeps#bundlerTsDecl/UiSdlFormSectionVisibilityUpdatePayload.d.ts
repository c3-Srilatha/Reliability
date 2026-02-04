export interface UiSdlFormSectionVisibilityUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFormSectionVisibilityUpdatePayload;

  readonly index?: number | null;
  withIndex(index: number | null): UiSdlFormSectionVisibilityUpdatePayload;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlFormSectionVisibilityUpdatePayload;
}


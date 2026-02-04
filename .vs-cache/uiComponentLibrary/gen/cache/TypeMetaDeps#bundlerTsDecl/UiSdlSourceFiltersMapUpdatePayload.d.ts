export interface UiSdlSourceFiltersMapUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSourceFiltersMapUpdatePayload;

  readonly sourceComponentId: string;
  withSourceComponentId(sourceComponentId: string): UiSdlSourceFiltersMapUpdatePayload;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlSourceFiltersMapUpdatePayload;
}


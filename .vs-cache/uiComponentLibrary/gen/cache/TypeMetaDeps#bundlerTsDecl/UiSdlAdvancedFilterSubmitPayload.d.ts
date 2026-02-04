export interface UiSdlAdvancedFilterSubmitPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAdvancedFilterSubmitPayload;

  readonly filterString?: string | null;
  withFilterString(filterString: string | null): UiSdlAdvancedFilterSubmitPayload;
}


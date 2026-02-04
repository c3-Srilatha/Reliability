export interface UiSdlFilterPanelSubmitPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlFilterPanelSubmitPayload;

  readonly value?: any;
  withValue(value: any): UiSdlFilterPanelSubmitPayload;
}


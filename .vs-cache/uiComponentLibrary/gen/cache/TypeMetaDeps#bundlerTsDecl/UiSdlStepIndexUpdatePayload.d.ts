export interface UiSdlStepIndexUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlStepIndexUpdatePayload;

  readonly updateToIndex: number;
  withUpdateToIndex(updateToIndex: number): UiSdlStepIndexUpdatePayload;
}


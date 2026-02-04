export interface UiSdlStepUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlStepUpdatePayload;

  readonly index: number;
  withIndex(index: number): UiSdlStepUpdatePayload;
}


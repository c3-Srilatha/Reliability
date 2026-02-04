export interface UiSdlDensityIdSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDensityIdSetPayload;

  readonly densityId: string;
  withDensityId(densityId: string): UiSdlDensityIdSetPayload;
}


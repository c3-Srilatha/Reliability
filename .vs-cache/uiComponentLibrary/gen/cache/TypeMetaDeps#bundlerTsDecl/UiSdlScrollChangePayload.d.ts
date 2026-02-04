export interface UiSdlScrollChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlScrollChangePayload;

  readonly pageSize: number;
  withPageSize(pageSize: number): UiSdlScrollChangePayload;
}


export interface UiSdlDataLoadChangePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataLoadChangePayload;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlDataLoadChangePayload;
}


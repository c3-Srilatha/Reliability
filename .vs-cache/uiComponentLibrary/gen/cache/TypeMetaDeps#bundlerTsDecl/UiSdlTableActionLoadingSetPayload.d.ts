export interface UiSdlTableActionLoadingSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTableActionLoadingSetPayload;

  readonly actionSuffix: string;
  withActionSuffix(actionSuffix: string): UiSdlTableActionLoadingSetPayload;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlTableActionLoadingSetPayload;
}


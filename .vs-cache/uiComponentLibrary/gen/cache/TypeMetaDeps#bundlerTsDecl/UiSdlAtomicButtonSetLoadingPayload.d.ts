export interface UiSdlAtomicButtonSetLoadingPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlAtomicButtonSetLoadingPayload;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlAtomicButtonSetLoadingPayload;
}


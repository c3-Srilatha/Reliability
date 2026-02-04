export interface UiSdlSearchableSearchLoadingSetPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlSearchableSearchLoadingSetPayload;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlSearchableSearchLoadingSetPayload;
}


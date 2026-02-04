export interface UiSdlChunkLoadingErrorPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlChunkLoadingErrorPayload;

  readonly errorMessage?: string | null;
  withErrorMessage(errorMessage: string | null): UiSdlChunkLoadingErrorPayload;
}


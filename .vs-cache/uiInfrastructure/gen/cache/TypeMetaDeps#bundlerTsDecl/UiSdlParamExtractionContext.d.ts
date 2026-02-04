export interface UiSdlParamExtractionContext {

  readonly state?: any;
  withState(state: any): UiSdlParamExtractionContext;

  readonly metadataId?: string | null;
  withMetadataId(metadataId: string | null): UiSdlParamExtractionContext;
}


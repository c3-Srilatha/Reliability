export interface UiSdlMetadataUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlMetadataUpdatePayload;

  readonly metadata?: any | null;
  withMetadata(metadata: any | null): UiSdlMetadataUpdatePayload;
}


export interface UiSdlArgumentsMergePayload {

  readonly arguments: any;
  withArguments(arguments: any): UiSdlArgumentsMergePayload;

  readonly sourceMetadataId?: string | null;
  withSourceMetadataId(sourceMetadataId: string | null): UiSdlArgumentsMergePayload;
}


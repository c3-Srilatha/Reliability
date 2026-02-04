export interface MetadataExtractorPreviewDataContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetadataExtractorPreviewDataContainer;

  readonly id?: string | null;
  withId(id: string | null): MetadataExtractorPreviewDataContainer;

  readonly name?: string | null;
  withName(name: string | null): MetadataExtractorPreviewDataContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MetadataExtractorPreviewDataContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MetadataExtractorPreviewDataContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MetadataExtractorPreviewDataContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MetadataExtractorPreviewDataContainer;

  readonly selectedFile?: string | null;
  withSelectedFile(selectedFile: string | null): MetadataExtractorPreviewDataContainer;

  readonly files?: C3.Array<any | null>;
  withFiles(files: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainer;

  readonly extractionResults?: C3.Array<any | null>;
  withExtractionResults(extractionResults: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainer;

  readonly loading?: boolean;
  withLoading(loading: boolean): MetadataExtractorPreviewDataContainer;

  readonly error?: string | null;
  withError(error: string | null): MetadataExtractorPreviewDataContainer;

  readonly fileContent?: any;
  withFileContent(fileContent: any): MetadataExtractorPreviewDataContainer;

  readonly isReadingContent?: boolean;
  withIsReadingContent(isReadingContent: boolean): MetadataExtractorPreviewDataContainer;

  readonly contentError?: string | null;
  withContentError(contentError: string | null): MetadataExtractorPreviewDataContainer;

  readonly sourceCollectionFiles?: C3.Array<any | null>;
  withSourceCollectionFiles(sourceCollectionFiles: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainer;

  readonly extractedTags?: C3.Array<any | null>;
  withExtractedTags(extractedTags: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainer;

  readonly isExtractingTags?: boolean;
  withIsExtractingTags(isExtractingTags: boolean): MetadataExtractorPreviewDataContainer;

  readonly extractError?: string | null;
  withExtractError(extractError: string | null): MetadataExtractorPreviewDataContainer;
}


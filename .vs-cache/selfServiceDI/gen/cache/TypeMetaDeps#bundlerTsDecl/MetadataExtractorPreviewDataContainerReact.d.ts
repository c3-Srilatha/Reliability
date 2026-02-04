export interface MetadataExtractorPreviewDataContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetadataExtractorPreviewDataContainerReact;

  readonly id?: string | null;
  withId(id: string | null): MetadataExtractorPreviewDataContainerReact;

  readonly name?: string | null;
  withName(name: string | null): MetadataExtractorPreviewDataContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MetadataExtractorPreviewDataContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MetadataExtractorPreviewDataContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MetadataExtractorPreviewDataContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MetadataExtractorPreviewDataContainerReact;

  readonly selectedFile?: string | null;
  withSelectedFile(selectedFile: string | null): MetadataExtractorPreviewDataContainerReact;

  readonly files?: C3.Array<any | null>;
  withFiles(files: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainerReact;

  readonly extractionResults?: C3.Array<any | null>;
  withExtractionResults(extractionResults: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainerReact;

  readonly loading?: boolean;
  withLoading(loading: boolean): MetadataExtractorPreviewDataContainerReact;

  readonly error?: string | null;
  withError(error: string | null): MetadataExtractorPreviewDataContainerReact;

  readonly fileContent?: any;
  withFileContent(fileContent: any): MetadataExtractorPreviewDataContainerReact;

  readonly isReadingContent?: boolean;
  withIsReadingContent(isReadingContent: boolean): MetadataExtractorPreviewDataContainerReact;

  readonly contentError?: string | null;
  withContentError(contentError: string | null): MetadataExtractorPreviewDataContainerReact;

  readonly sourceCollectionFiles?: C3.Array<any | null>;
  withSourceCollectionFiles(sourceCollectionFiles: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainerReact;

  readonly extractedTags?: C3.Array<any | null>;
  withExtractedTags(extractedTags: C3.Array<any | null> | Array<any | null>): MetadataExtractorPreviewDataContainerReact;

  readonly isExtractingTags?: boolean;
  withIsExtractingTags(isExtractingTags: boolean): MetadataExtractorPreviewDataContainerReact;

  readonly extractError?: string | null;
  withExtractError(extractError: string | null): MetadataExtractorPreviewDataContainerReact;
}


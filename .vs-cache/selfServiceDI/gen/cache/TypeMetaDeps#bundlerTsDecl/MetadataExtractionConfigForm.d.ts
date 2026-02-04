export interface MetadataExtractionConfigForm {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetadataExtractionConfigForm;

  readonly id?: string | null;
  withId(id: string | null): MetadataExtractionConfigForm;

  readonly name?: string | null;
  withName(name: string | null): MetadataExtractionConfigForm;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MetadataExtractionConfigForm;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MetadataExtractionConfigForm;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MetadataExtractionConfigForm;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MetadataExtractionConfigForm;

  readonly availableTags?: C3.Array<any | null>;
  withAvailableTags(availableTags: C3.Array<any | null> | Array<any | null>): MetadataExtractionConfigForm;

  readonly availableModels?: C3.Array<any | null>;
  withAvailableModels(availableModels: C3.Array<any | null> | Array<any | null>): MetadataExtractionConfigForm;

  readonly selectedTags?: C3.Array<string | null>;
  withSelectedTags(selectedTags: C3.Array<string | null> | Array<string | null>): MetadataExtractionConfigForm;

  readonly systemPrompt?: string | null;
  withSystemPrompt(systemPrompt: string | null): MetadataExtractionConfigForm;

  readonly selectedModel?: string | null;
  withSelectedModel(selectedModel: string | null): MetadataExtractionConfigForm;

  readonly sourceCollectionName?: string | null;
  withSourceCollectionName(sourceCollectionName: string | null): MetadataExtractionConfigForm;

  readonly validationErrors?: C3.Array<string | null>;
  withValidationErrors(validationErrors: C3.Array<string | null> | Array<string | null>): MetadataExtractionConfigForm;

  readonly notification?: any | null;
  withNotification(notification: any | null): MetadataExtractionConfigForm;
}


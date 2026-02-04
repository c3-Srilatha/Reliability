export interface MetadataExtractionConfigFormReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MetadataExtractionConfigFormReact;

  readonly id?: string | null;
  withId(id: string | null): MetadataExtractionConfigFormReact;

  readonly name?: string | null;
  withName(name: string | null): MetadataExtractionConfigFormReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MetadataExtractionConfigFormReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MetadataExtractionConfigFormReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MetadataExtractionConfigFormReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MetadataExtractionConfigFormReact;

  readonly availableTags?: C3.Array<any | null>;
  withAvailableTags(availableTags: C3.Array<any | null> | Array<any | null>): MetadataExtractionConfigFormReact;

  readonly availableModels?: C3.Array<any | null>;
  withAvailableModels(availableModels: C3.Array<any | null> | Array<any | null>): MetadataExtractionConfigFormReact;

  readonly selectedTags?: C3.Array<string | null>;
  withSelectedTags(selectedTags: C3.Array<string | null> | Array<string | null>): MetadataExtractionConfigFormReact;

  readonly systemPrompt?: string | null;
  withSystemPrompt(systemPrompt: string | null): MetadataExtractionConfigFormReact;

  readonly selectedModel?: string | null;
  withSelectedModel(selectedModel: string | null): MetadataExtractionConfigFormReact;

  readonly sourceCollectionName?: string | null;
  withSourceCollectionName(sourceCollectionName: string | null): MetadataExtractionConfigFormReact;

  readonly validationErrors?: C3.Array<string | null>;
  withValidationErrors(validationErrors: C3.Array<string | null> | Array<string | null>): MetadataExtractionConfigFormReact;

  readonly notification?: any | null;
  withNotification(notification: any | null): MetadataExtractionConfigFormReact;
}


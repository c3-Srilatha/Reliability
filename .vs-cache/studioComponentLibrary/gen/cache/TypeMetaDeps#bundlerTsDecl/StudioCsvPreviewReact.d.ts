export interface StudioCsvPreviewReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioCsvPreviewReact;

  readonly id?: string | null;
  withId(id: string | null): StudioCsvPreviewReact;

  readonly name?: string | null;
  withName(name: string | null): StudioCsvPreviewReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioCsvPreviewReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioCsvPreviewReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioCsvPreviewReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioCsvPreviewReact;

  readonly fileContent?: C3.Array<any | null> | null;
  withFileContent(fileContent: C3.Array<any | null> | Array<any | null> | null): StudioCsvPreviewReact;

  readonly fileName?: string | null;
  withFileName(fileName: string | null): StudioCsvPreviewReact;
}


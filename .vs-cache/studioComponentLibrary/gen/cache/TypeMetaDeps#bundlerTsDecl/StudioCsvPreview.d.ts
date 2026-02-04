export interface StudioCsvPreview {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioCsvPreview;

  readonly id?: string | null;
  withId(id: string | null): StudioCsvPreview;

  readonly name?: string | null;
  withName(name: string | null): StudioCsvPreview;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioCsvPreview;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioCsvPreview;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioCsvPreview;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioCsvPreview;

  readonly fileContent?: C3.Array<any | null> | null;
  withFileContent(fileContent: C3.Array<any | null> | Array<any | null> | null): StudioCsvPreview;

  readonly fileName?: string | null;
  withFileName(fileName: string | null): StudioCsvPreview;
}


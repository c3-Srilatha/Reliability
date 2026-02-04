export interface StudioPdfPreview {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioPdfPreview;

  readonly id?: string | null;
  withId(id: string | null): StudioPdfPreview;

  readonly name?: string | null;
  withName(name: string | null): StudioPdfPreview;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioPdfPreview;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioPdfPreview;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioPdfPreview;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioPdfPreview;

  readonly fileContent?: string | null;
  withFileContent(fileContent: string | null): StudioPdfPreview;

  readonly fileName?: string | null;
  withFileName(fileName: string | null): StudioPdfPreview;
}


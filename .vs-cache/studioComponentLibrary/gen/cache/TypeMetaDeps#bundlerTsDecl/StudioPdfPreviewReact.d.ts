export interface StudioPdfPreviewReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioPdfPreviewReact;

  readonly id?: string | null;
  withId(id: string | null): StudioPdfPreviewReact;

  readonly name?: string | null;
  withName(name: string | null): StudioPdfPreviewReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioPdfPreviewReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioPdfPreviewReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioPdfPreviewReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioPdfPreviewReact;

  readonly fileContent?: string | null;
  withFileContent(fileContent: string | null): StudioPdfPreviewReact;

  readonly fileName?: string | null;
  withFileName(fileName: string | null): StudioPdfPreviewReact;
}


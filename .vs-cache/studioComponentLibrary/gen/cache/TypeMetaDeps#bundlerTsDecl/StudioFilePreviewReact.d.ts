export interface StudioFilePreviewReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioFilePreviewReact;

  readonly id?: string | null;
  withId(id: string | null): StudioFilePreviewReact;

  readonly name?: string | null;
  withName(name: string | null): StudioFilePreviewReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioFilePreviewReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioFilePreviewReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioFilePreviewReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioFilePreviewReact;

  readonly fileContent?: any;
  withFileContent(fileContent: any): StudioFilePreviewReact;

  readonly fileKind?: string | null;
  withFileKind(fileKind: string | null): StudioFilePreviewReact;

  readonly fileName?: string | null;
  withFileName(fileName: string | null): StudioFilePreviewReact;
}


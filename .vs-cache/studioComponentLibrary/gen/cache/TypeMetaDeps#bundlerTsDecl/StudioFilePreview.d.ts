export interface StudioFilePreview {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioFilePreview;

  readonly id?: string | null;
  withId(id: string | null): StudioFilePreview;

  readonly name?: string | null;
  withName(name: string | null): StudioFilePreview;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioFilePreview;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioFilePreview;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioFilePreview;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioFilePreview;

  readonly fileContent?: any;
  withFileContent(fileContent: any): StudioFilePreview;

  readonly fileKind?: string | null;
  withFileKind(fileKind: string | null): StudioFilePreview;

  readonly fileName?: string | null;
  withFileName(fileName: string | null): StudioFilePreview;
}


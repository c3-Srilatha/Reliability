export interface FileUploadStatusContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FileUploadStatusContainerReact;

  readonly id?: string | null;
  withId(id: string | null): FileUploadStatusContainerReact;

  readonly name?: string | null;
  withName(name: string | null): FileUploadStatusContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FileUploadStatusContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FileUploadStatusContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FileUploadStatusContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FileUploadStatusContainerReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusContainerReact;

  readonly statusTrackers?: C3.Array<FileUploadStatusTracker | null>;
  withStatusTrackers(statusTrackers: C3.Array<FileUploadStatusTracker | null> | Array<IFileUploadStatusTracker | null>): FileUploadStatusContainerReact;
}


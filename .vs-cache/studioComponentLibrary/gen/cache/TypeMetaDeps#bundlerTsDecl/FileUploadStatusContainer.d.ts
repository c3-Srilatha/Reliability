export interface FileUploadStatusContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FileUploadStatusContainer;

  readonly id?: string | null;
  withId(id: string | null): FileUploadStatusContainer;

  readonly name?: string | null;
  withName(name: string | null): FileUploadStatusContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FileUploadStatusContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FileUploadStatusContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FileUploadStatusContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FileUploadStatusContainer;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusContainer;

  readonly statusTrackers?: C3.Array<FileUploadStatusTracker | null>;
  withStatusTrackers(statusTrackers: C3.Array<FileUploadStatusTracker | null> | Array<IFileUploadStatusTracker | null>): FileUploadStatusContainer;
}


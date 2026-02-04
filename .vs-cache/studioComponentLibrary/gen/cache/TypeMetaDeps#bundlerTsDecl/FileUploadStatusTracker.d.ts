export interface FileUploadStatusTracker {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FileUploadStatusTracker;

  readonly id?: string | null;
  withId(id: string | null): FileUploadStatusTracker;

  readonly name?: string | null;
  withName(name: string | null): FileUploadStatusTracker;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FileUploadStatusTracker;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FileUploadStatusTracker;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FileUploadStatusTracker;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FileUploadStatusTracker;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTracker;

  readonly shouldShowProgressBar?: boolean;
  withShouldShowProgressBar(shouldShowProgressBar: boolean): FileUploadStatusTracker;

  readonly items?: C3.Array<FileUploadStatusTrackerItem | null>;
  withItems(items: C3.Array<FileUploadStatusTrackerItem | null> | Array<IFileUploadStatusTrackerItem | null>): FileUploadStatusTracker;
}


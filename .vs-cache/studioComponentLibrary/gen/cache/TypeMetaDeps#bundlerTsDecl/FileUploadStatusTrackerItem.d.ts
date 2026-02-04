export interface FileUploadStatusTrackerItem {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FileUploadStatusTrackerItem;

  readonly id?: string | null;
  withId(id: string | null): FileUploadStatusTrackerItem;

  readonly name?: string | null;
  withName(name: string | null): FileUploadStatusTrackerItem;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FileUploadStatusTrackerItem;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FileUploadStatusTrackerItem;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FileUploadStatusTrackerItem;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FileUploadStatusTrackerItem;

  readonly uploadStatus?: string | null;
  withUploadStatus(uploadStatus: string | null): FileUploadStatusTrackerItem;

  readonly shouldShowProgressBar?: boolean;
  withShouldShowProgressBar(shouldShowProgressBar: boolean): FileUploadStatusTrackerItem;

  readonly iconName?: string | null;
  withIconName(iconName: string | null): FileUploadStatusTrackerItem;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): FileUploadStatusTrackerItem;

  readonly percentage?: number | null | UiSdlDynamicValueSpec | null | null;
  withPercentage(percentage: number | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;

  readonly totalFileSize?: number | null | UiSdlDynamicValueSpec | null | null;
  withTotalFileSize(totalFileSize: number | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;

  readonly currentFileUploadedSize?: number | null | UiSdlDynamicValueSpec | null | null;
  withCurrentFileUploadedSize(currentFileUploadedSize: number | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;

  readonly fileName?: string | null | UiSdlDynamicValueSpec | null | null;
  withFileName(fileName: string | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;

  readonly message?: string | null | UiSdlDynamicValueSpec | null | null;
  withMessage(message: string | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;

  readonly isCompleted?: boolean;
  withIsCompleted(isCompleted: boolean): FileUploadStatusTrackerItem;

  readonly totalNumberCount?: number | null | UiSdlDynamicValueSpec | null | null;
  withTotalNumberCount(totalNumberCount: number | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;

  readonly successfulNumberCount?: number | null | UiSdlDynamicValueSpec | null | null;
  withSuccessfulNumberCount(successfulNumberCount: number | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;

  readonly quatityName?: string | null | UiSdlDynamicValueSpec | null | null;
  withQuatityName(quatityName: string | null | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;

  readonly shouldShowDismissButton?: boolean | UiSdlDynamicValueSpec | null | null;
  withShouldShowDismissButton(shouldShowDismissButton: boolean | IUiSdlDynamicValueSpec | null | null): FileUploadStatusTrackerItem;
}


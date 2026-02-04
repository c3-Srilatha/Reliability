export interface UiSdlFileUpload {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFileUpload;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFileUpload;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFileUpload;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFileUpload;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFileUpload;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFileUpload;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFileUpload;

  readonly bodyMessage?: UiSdlFileUploadBodyMessage | null;
  withBodyMessage(bodyMessage: IUiSdlFileUploadBodyMessage | null): UiSdlFileUpload;

  readonly multiSelect?: boolean;
  withMultiSelect(multiSelect: boolean): UiSdlFileUpload;

  readonly fileSizeLimit?: number | null;
  withFileSizeLimit(fileSizeLimit: number | null): UiSdlFileUpload;

  readonly allowableFileExtensions?: C3.Array<string | null>;
  withAllowableFileExtensions(allowableFileExtensions: C3.Array<string | null> | Array<string | null>): UiSdlFileUpload;

  readonly rejectInvalidFiles?: boolean;
  withRejectInvalidFiles(rejectInvalidFiles: boolean): UiSdlFileUpload;

  readonly fileStatus?: C3.Map<string | null, string | null>;
  withFileStatus(fileStatus: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlFileUpload;

  readonly totalFilesSize?: number | null;
  withTotalFilesSize(totalFilesSize: number | null): UiSdlFileUpload;

  readonly duplicateFiles?: C3.Array<UiSdlFileUploadFileRef | null>;
  withDuplicateFiles(duplicateFiles: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUpload;

  readonly validFiles?: C3.Array<UiSdlFileUploadFileRef | null>;
  withValidFiles(validFiles: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUpload;

  readonly invalidExtensionFiles?: C3.Array<UiSdlFileUploadFileRef | null>;
  withInvalidExtensionFiles(invalidExtensionFiles: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUpload;

  readonly invalidSizeFiles?: C3.Array<UiSdlFileUploadFileRef | null>;
  withInvalidSizeFiles(invalidSizeFiles: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUpload;

  readonly files?: C3.Array<UiSdlFileUploadFileRef | null>;
  withFiles(files: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUpload;

  readonly cancelConfirmationModalId?: string | null;
  withCancelConfirmationModalId(cancelConfirmationModalId: string | null): UiSdlFileUpload;

  readonly duplicateFilesWarningModalId?: string | null;
  withDuplicateFilesWarningModalId(duplicateFilesWarningModalId: string | null): UiSdlFileUpload;
}


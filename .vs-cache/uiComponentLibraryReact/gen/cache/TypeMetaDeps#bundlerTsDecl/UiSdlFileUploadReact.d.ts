export interface UiSdlFileUploadReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFileUploadReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFileUploadReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFileUploadReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFileUploadReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFileUploadReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFileUploadReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFileUploadReact;

  readonly bodyMessage?: UiSdlFileUploadBodyMessage | null;
  withBodyMessage(bodyMessage: IUiSdlFileUploadBodyMessage | null): UiSdlFileUploadReact;

  readonly multiSelect?: boolean;
  withMultiSelect(multiSelect: boolean): UiSdlFileUploadReact;

  readonly fileSizeLimit?: number | null;
  withFileSizeLimit(fileSizeLimit: number | null): UiSdlFileUploadReact;

  readonly allowableFileExtensions?: C3.Array<string | null>;
  withAllowableFileExtensions(allowableFileExtensions: C3.Array<string | null> | Array<string | null>): UiSdlFileUploadReact;

  readonly rejectInvalidFiles?: boolean;
  withRejectInvalidFiles(rejectInvalidFiles: boolean): UiSdlFileUploadReact;

  readonly fileStatus?: C3.Map<string | null, string | null>;
  withFileStatus(fileStatus: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlFileUploadReact;

  readonly totalFilesSize?: number | null;
  withTotalFilesSize(totalFilesSize: number | null): UiSdlFileUploadReact;

  readonly duplicateFiles?: C3.Array<UiSdlFileUploadFileRef | null>;
  withDuplicateFiles(duplicateFiles: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUploadReact;

  readonly validFiles?: C3.Array<UiSdlFileUploadFileRef | null>;
  withValidFiles(validFiles: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUploadReact;

  readonly invalidExtensionFiles?: C3.Array<UiSdlFileUploadFileRef | null>;
  withInvalidExtensionFiles(invalidExtensionFiles: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUploadReact;

  readonly invalidSizeFiles?: C3.Array<UiSdlFileUploadFileRef | null>;
  withInvalidSizeFiles(invalidSizeFiles: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUploadReact;

  readonly files?: C3.Array<UiSdlFileUploadFileRef | null>;
  withFiles(files: C3.Array<UiSdlFileUploadFileRef | null> | Array<IUiSdlFileUploadFileRef | null>): UiSdlFileUploadReact;

  readonly cancelConfirmationModalId?: string | null;
  withCancelConfirmationModalId(cancelConfirmationModalId: string | null): UiSdlFileUploadReact;

  readonly duplicateFilesWarningModalId?: string | null;
  withDuplicateFilesWarningModalId(duplicateFilesWarningModalId: string | null): UiSdlFileUploadReact;
}


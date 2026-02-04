export interface UiSdlFileUpdateUploadStatusAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlFileUpdateUploadStatusAction;

  readonly payload?: UiSdlFileUpdateUploadStatusPayload | null;
  withPayload(payload: IUiSdlFileUpdateUploadStatusPayload | null): UiSdlFileUpdateUploadStatusAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlFileUpdateUploadStatusAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlFileUpdateUploadStatusAction;
}


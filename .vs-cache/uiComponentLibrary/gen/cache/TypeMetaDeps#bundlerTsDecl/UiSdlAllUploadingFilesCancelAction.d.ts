export interface UiSdlAllUploadingFilesCancelAction {

  readonly actionType: string;
  withActionType(actionType: string): UiSdlAllUploadingFilesCancelAction;

  readonly payload?: UiSdlAllUploadingFilesCancelPayload | null;
  withPayload(payload: IUiSdlAllUploadingFilesCancelPayload | null): UiSdlAllUploadingFilesCancelAction;

  readonly error?: boolean;
  withError(error: boolean): UiSdlAllUploadingFilesCancelAction;

  readonly meta?: C3.Map<string | null, any>;
  withMeta(meta: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlAllUploadingFilesCancelAction;
}


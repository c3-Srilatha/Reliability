export interface UiSdlChangeCancelPayload {

  readonly loadOriginalData?: boolean;
  withLoadOriginalData(loadOriginalData: boolean): UiSdlChangeCancelPayload;
}


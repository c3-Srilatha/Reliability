export interface UiSdlFileUploadBodyMessage {

  readonly text?: string | null;
  withText(text: string | null): UiSdlFileUploadBodyMessage;

  readonly subText?: string | null;
  withSubText(subText: string | null): UiSdlFileUploadBodyMessage;
}


export interface UiSdlTitleUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlTitleUpdatePayload;

  readonly header?: UiSdlComponentHeader | null;
  withHeader(header: IUiSdlComponentHeader | null): UiSdlTitleUpdatePayload;
}


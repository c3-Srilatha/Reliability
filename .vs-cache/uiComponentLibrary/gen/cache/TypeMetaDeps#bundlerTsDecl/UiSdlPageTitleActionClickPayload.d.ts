export interface UiSdlPageTitleActionClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlPageTitleActionClickPayload;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlPageTitleActionClickPayload;
}


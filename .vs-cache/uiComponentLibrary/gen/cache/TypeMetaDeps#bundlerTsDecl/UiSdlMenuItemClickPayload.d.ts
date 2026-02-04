export interface UiSdlMenuItemClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlMenuItemClickPayload;

  readonly item: UiSdlNavMenuItem;
  withItem(item: IUiSdlNavMenuItem): UiSdlMenuItemClickPayload;

  readonly siteId: string;
  withSiteId(siteId: string): UiSdlMenuItemClickPayload;
}


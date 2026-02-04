export interface UiSdlBreadcrumbLinkClickPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlBreadcrumbLinkClickPayload;

  readonly url?: string | null;
  withUrl(url: string | null): UiSdlBreadcrumbLinkClickPayload;

  readonly params?: any | null;
  withParams(params: any | null): UiSdlBreadcrumbLinkClickPayload;
}


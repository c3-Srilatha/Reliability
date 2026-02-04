export interface UiSdlRouteWithTitle {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlRouteWithTitle;

  readonly name: string;
  withName(name: string): UiSdlRouteWithTitle;

  readonly urlPath: string;
  withUrlPath(urlPath: string): UiSdlRouteWithTitle;

  readonly targetModuleName?: string | null;
  withTargetModuleName(targetModuleName: string | null): UiSdlRouteWithTitle;

  readonly targetPageName: string;
  withTargetPageName(targetPageName: string): UiSdlRouteWithTitle;

  readonly targetPageId?: string | null;
  withTargetPageId(targetPageId: string | null): UiSdlRouteWithTitle;

  readonly role?: string | null;
  withRole(role: string | null): UiSdlRouteWithTitle;

  readonly inAppDoc?: string | null;
  withInAppDoc(inAppDoc: string | null): UiSdlRouteWithTitle;

  readonly pageTitle?: string | null;
  withPageTitle(pageTitle: string | null): UiSdlRouteWithTitle;
}


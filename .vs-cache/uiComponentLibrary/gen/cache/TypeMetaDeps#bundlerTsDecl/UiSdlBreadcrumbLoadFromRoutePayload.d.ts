export interface UiSdlBreadcrumbLoadFromRoutePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlBreadcrumbLoadFromRoutePayload;

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): UiSdlBreadcrumbLoadFromRoutePayload;
}


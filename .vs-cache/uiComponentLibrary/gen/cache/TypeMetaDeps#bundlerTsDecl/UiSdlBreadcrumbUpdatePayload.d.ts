export interface UiSdlBreadcrumbUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlBreadcrumbUpdatePayload;

  readonly breadcrumbs?: C3.Array<UiSdlBreadcrumbConfig | null>;
  withBreadcrumbs(breadcrumbs: C3.Array<UiSdlBreadcrumbConfig | null> | Array<IUiSdlBreadcrumbConfig | null>): UiSdlBreadcrumbUpdatePayload;
}


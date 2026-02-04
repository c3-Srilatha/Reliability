export interface UiSdlBreadcrumbsConfig {

  readonly link?: string | null;
  withLink(link: string | null): UiSdlBreadcrumbsConfig;

  readonly text?: string | null;
  withText(text: string | null): UiSdlBreadcrumbsConfig;

  readonly params?: C3.Map<string | null, string | null>;
  withParams(params: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlBreadcrumbsConfig;

  readonly route?: string | null;
  withRoute(route: string | null): UiSdlBreadcrumbsConfig;

  readonly pageParamsIdentifier?: string | null;
  withPageParamsIdentifier(pageParamsIdentifier: string | null): UiSdlBreadcrumbsConfig;
}


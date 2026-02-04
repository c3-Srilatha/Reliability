export interface UiSdlBreadcrumbConfig {

  readonly text: string;
  withText(text: string): UiSdlBreadcrumbConfig;

  readonly link: string;
  withLink(link: string): UiSdlBreadcrumbConfig;

  readonly data?: any;
  withData(data: any): UiSdlBreadcrumbConfig;

  readonly route: string;
  withRoute(route: string): UiSdlBreadcrumbConfig;

  readonly params?: C3.Map<string | null, string | null>;
  withParams(params: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlBreadcrumbConfig;
}


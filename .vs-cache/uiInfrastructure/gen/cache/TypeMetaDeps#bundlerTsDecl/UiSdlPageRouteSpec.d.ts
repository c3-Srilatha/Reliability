export interface UiSdlPageRouteSpec {

  readonly id: string;
  withId(id: string): UiSdlPageRouteSpec;

  readonly urlPath: string;
  withUrlPath(urlPath: string): UiSdlPageRouteSpec;

  readonly targetPageName: string;
  withTargetPageName(targetPageName: string): UiSdlPageRouteSpec;

  readonly targetModuleName?: string | null;
  withTargetModuleName(targetModuleName: string | null): UiSdlPageRouteSpec;

  readonly templateTypeName?: string | null;
  withTemplateTypeName(templateTypeName: string | null): UiSdlPageRouteSpec;

  readonly navMenuComponentName?: string | null;
  withNavMenuComponentName(navMenuComponentName: string | null): UiSdlPageRouteSpec;
}


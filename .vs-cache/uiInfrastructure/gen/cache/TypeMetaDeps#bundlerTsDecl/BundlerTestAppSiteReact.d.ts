export interface BundlerTestAppSiteReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppSiteReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppSiteReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppSiteReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BundlerTestAppSiteReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppSiteReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppSiteReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppSiteReact;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): BundlerTestAppSiteReact;

  readonly generatedImports?: C3.Map<string | null, any>;
  withGeneratedImports(generatedImports: C3.Map<string | null, any> | {[key: string | null]: any}): BundlerTestAppSiteReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppSiteReact;

  readonly inactivityWarningModal?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withInactivityWarningModal(inactivityWarningModal: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): BundlerTestAppSiteReact;

  readonly initialRoute?: string | null;
  withInitialRoute(initialRoute: string | null): BundlerTestAppSiteReact;

  readonly initialParams?: any | null;
  withInitialParams(initialParams: any | null): BundlerTestAppSiteReact;

  readonly currentPage?: string | null;
  withCurrentPage(currentPage: string | null): BundlerTestAppSiteReact;

  readonly importsTunnel?: UiSdlTunnelConfiguration | null;
  withImportsTunnel(importsTunnel: IUiSdlTunnelConfiguration | null): BundlerTestAppSiteReact;

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): BundlerTestAppSiteReact;

  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): BundlerTestAppSiteReact;

  readonly themeId?: string | null;
  withThemeId(themeId: string | null): BundlerTestAppSiteReact;

  readonly densityId?: string | null;
  withDensityId(densityId: string | null): BundlerTestAppSiteReact;

  readonly themeHiddenId?: string | null;
  withThemeHiddenId(themeHiddenId: string | null): BundlerTestAppSiteReact;

  readonly densityHiddenId?: string | null;
  withDensityHiddenId(densityHiddenId: string | null): BundlerTestAppSiteReact;

  readonly densityDataSpec?: UiSdlThemeContextDataSpec | null;
  withDensityDataSpec(densityDataSpec: IUiSdlThemeContextDataSpec | null): BundlerTestAppSiteReact;

  readonly styleDataSpec?: UiSdlThemeContextDataSpec | null;
  withStyleDataSpec(styleDataSpec: IUiSdlThemeContextDataSpec | null): BundlerTestAppSiteReact;

  readonly densityCollection?: C3.Array<UiSdlDensityTemplate | null>;
  withDensityCollection(densityCollection: C3.Array<UiSdlDensityTemplate | null> | Array<IUiSdlDensityTemplate | null>): BundlerTestAppSiteReact;

  readonly themeCollection?: C3.Array<UiSdlThemeTemplate | null>;
  withThemeCollection(themeCollection: C3.Array<UiSdlThemeTemplate | null> | Array<IUiSdlThemeTemplate | null>): BundlerTestAppSiteReact;

  readonly onlyAllowMatchingRoutes?: C3.Array<string | null>;
  withOnlyAllowMatchingRoutes(onlyAllowMatchingRoutes: C3.Array<string | null> | Array<string | null>): BundlerTestAppSiteReact;

  readonly webWorkers?: C3.Map<string | null, UiSdlWebWorker | null>;
  withWebWorkers(webWorkers: C3.Map<string | null, UiSdlWebWorker | null> | {[key: string | null]: IUiSdlWebWorker | null}): BundlerTestAppSiteReact;

  readonly useBrowserHistory?: boolean;
  withUseBrowserHistory(useBrowserHistory: boolean): BundlerTestAppSiteReact;

  readonly user?: User | null;
  withUser(user: IUser | null): BundlerTestAppSiteReact;

  readonly userContext?: UiSdlUserContext | null;
  withUserContext(userContext: IUiSdlUserContext | null): BundlerTestAppSiteReact;

  readonly configs?: C3.Map<string | null, any>;
  withConfigs(configs: C3.Map<string | null, any> | {[key: string | null]: any}): BundlerTestAppSiteReact;

  readonly bundlerType?: string | null;
  withBundlerType(bundlerType: string | null): BundlerTestAppSiteReact;
}


export interface BundlerTestAppSite {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppSite;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppSite;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppSite;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BundlerTestAppSite;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppSite;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppSite;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppSite;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): BundlerTestAppSite;

  readonly generatedImports?: C3.Map<string | null, any>;
  withGeneratedImports(generatedImports: C3.Map<string | null, any> | {[key: string | null]: any}): BundlerTestAppSite;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BundlerTestAppSite;

  readonly inactivityWarningModal?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withInactivityWarningModal(inactivityWarningModal: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): BundlerTestAppSite;

  readonly initialRoute?: string | null;
  withInitialRoute(initialRoute: string | null): BundlerTestAppSite;

  readonly initialParams?: any | null;
  withInitialParams(initialParams: any | null): BundlerTestAppSite;

  readonly currentPage?: string | null;
  withCurrentPage(currentPage: string | null): BundlerTestAppSite;

  readonly importsTunnel?: UiSdlTunnelConfiguration | null;
  withImportsTunnel(importsTunnel: IUiSdlTunnelConfiguration | null): BundlerTestAppSite;

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): BundlerTestAppSite;

  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): BundlerTestAppSite;

  readonly themeId?: string | null;
  withThemeId(themeId: string | null): BundlerTestAppSite;

  readonly densityId?: string | null;
  withDensityId(densityId: string | null): BundlerTestAppSite;

  readonly themeHiddenId?: string | null;
  withThemeHiddenId(themeHiddenId: string | null): BundlerTestAppSite;

  readonly densityHiddenId?: string | null;
  withDensityHiddenId(densityHiddenId: string | null): BundlerTestAppSite;

  readonly densityDataSpec?: UiSdlThemeContextDataSpec | null;
  withDensityDataSpec(densityDataSpec: IUiSdlThemeContextDataSpec | null): BundlerTestAppSite;

  readonly styleDataSpec?: UiSdlThemeContextDataSpec | null;
  withStyleDataSpec(styleDataSpec: IUiSdlThemeContextDataSpec | null): BundlerTestAppSite;

  readonly densityCollection?: C3.Array<UiSdlDensityTemplate | null>;
  withDensityCollection(densityCollection: C3.Array<UiSdlDensityTemplate | null> | Array<IUiSdlDensityTemplate | null>): BundlerTestAppSite;

  readonly themeCollection?: C3.Array<UiSdlThemeTemplate | null>;
  withThemeCollection(themeCollection: C3.Array<UiSdlThemeTemplate | null> | Array<IUiSdlThemeTemplate | null>): BundlerTestAppSite;

  readonly onlyAllowMatchingRoutes?: C3.Array<string | null>;
  withOnlyAllowMatchingRoutes(onlyAllowMatchingRoutes: C3.Array<string | null> | Array<string | null>): BundlerTestAppSite;

  readonly webWorkers?: C3.Map<string | null, UiSdlWebWorker | null>;
  withWebWorkers(webWorkers: C3.Map<string | null, UiSdlWebWorker | null> | {[key: string | null]: IUiSdlWebWorker | null}): BundlerTestAppSite;

  readonly useBrowserHistory?: boolean;
  withUseBrowserHistory(useBrowserHistory: boolean): BundlerTestAppSite;

  readonly user?: User | null;
  withUser(user: IUser | null): BundlerTestAppSite;

  readonly userContext?: UiSdlUserContext | null;
  withUserContext(userContext: IUiSdlUserContext | null): BundlerTestAppSite;

  readonly configs?: C3.Map<string | null, any>;
  withConfigs(configs: C3.Map<string | null, any> | {[key: string | null]: any}): BundlerTestAppSite;

  readonly bundlerType?: string | null;
  withBundlerType(bundlerType: string | null): BundlerTestAppSite;
}


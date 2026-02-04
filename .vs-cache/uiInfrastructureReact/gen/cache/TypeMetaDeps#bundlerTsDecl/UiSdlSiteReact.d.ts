export interface UiSdlSiteReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSiteReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSiteReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSiteReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSiteReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSiteReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSiteReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSiteReact;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlSiteReact;

  readonly generatedImports?: C3.Map<string | null, any>;
  withGeneratedImports(generatedImports: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSiteReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlSiteReact;

  readonly inactivityWarningModal?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withInactivityWarningModal(inactivityWarningModal: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlSiteReact;

  readonly initialRoute?: string | null;
  withInitialRoute(initialRoute: string | null): UiSdlSiteReact;

  readonly initialParams?: any | null;
  withInitialParams(initialParams: any | null): UiSdlSiteReact;

  readonly currentPage?: string | null;
  withCurrentPage(currentPage: string | null): UiSdlSiteReact;

  readonly importsTunnel?: UiSdlTunnelConfiguration | null;
  withImportsTunnel(importsTunnel: IUiSdlTunnelConfiguration | null): UiSdlSiteReact;

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): UiSdlSiteReact;

  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): UiSdlSiteReact;

  readonly themeId?: string | null;
  withThemeId(themeId: string | null): UiSdlSiteReact;

  readonly densityId?: string | null;
  withDensityId(densityId: string | null): UiSdlSiteReact;

  readonly themeHiddenId?: string | null;
  withThemeHiddenId(themeHiddenId: string | null): UiSdlSiteReact;

  readonly densityHiddenId?: string | null;
  withDensityHiddenId(densityHiddenId: string | null): UiSdlSiteReact;

  readonly densityDataSpec?: UiSdlThemeContextDataSpec | null;
  withDensityDataSpec(densityDataSpec: IUiSdlThemeContextDataSpec | null): UiSdlSiteReact;

  readonly styleDataSpec?: UiSdlThemeContextDataSpec | null;
  withStyleDataSpec(styleDataSpec: IUiSdlThemeContextDataSpec | null): UiSdlSiteReact;

  readonly densityCollection?: C3.Array<UiSdlDensityTemplate | null>;
  withDensityCollection(densityCollection: C3.Array<UiSdlDensityTemplate | null> | Array<IUiSdlDensityTemplate | null>): UiSdlSiteReact;

  readonly themeCollection?: C3.Array<UiSdlThemeTemplate | null>;
  withThemeCollection(themeCollection: C3.Array<UiSdlThemeTemplate | null> | Array<IUiSdlThemeTemplate | null>): UiSdlSiteReact;

  readonly onlyAllowMatchingRoutes?: C3.Array<string | null>;
  withOnlyAllowMatchingRoutes(onlyAllowMatchingRoutes: C3.Array<string | null> | Array<string | null>): UiSdlSiteReact;

  readonly webWorkers?: C3.Map<string | null, UiSdlWebWorker | null>;
  withWebWorkers(webWorkers: C3.Map<string | null, UiSdlWebWorker | null> | {[key: string | null]: IUiSdlWebWorker | null}): UiSdlSiteReact;

  readonly useBrowserHistory?: boolean;
  withUseBrowserHistory(useBrowserHistory: boolean): UiSdlSiteReact;

  readonly user?: User | null;
  withUser(user: IUser | null): UiSdlSiteReact;

  readonly userContext?: UiSdlUserContext | null;
  withUserContext(userContext: IUiSdlUserContext | null): UiSdlSiteReact;

  readonly configs?: C3.Map<string | null, any>;
  withConfigs(configs: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSiteReact;
}


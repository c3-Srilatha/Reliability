export interface UiSdlSite {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlSite;

  readonly id?: string | null;
  withId(id: string | null): UiSdlSite;

  readonly name?: string | null;
  withName(name: string | null): UiSdlSite;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlSite;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlSite;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlSite;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlSite;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlSite;

  readonly generatedImports?: C3.Map<string | null, any>;
  withGeneratedImports(generatedImports: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSite;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlSite;

  readonly inactivityWarningModal?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withInactivityWarningModal(inactivityWarningModal: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlSite;

  readonly initialRoute?: string | null;
  withInitialRoute(initialRoute: string | null): UiSdlSite;

  readonly initialParams?: any | null;
  withInitialParams(initialParams: any | null): UiSdlSite;

  readonly currentPage?: string | null;
  withCurrentPage(currentPage: string | null): UiSdlSite;

  readonly importsTunnel?: UiSdlTunnelConfiguration | null;
  withImportsTunnel(importsTunnel: IUiSdlTunnelConfiguration | null): UiSdlSite;

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): UiSdlSite;

  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): UiSdlSite;

  readonly themeId?: string | null;
  withThemeId(themeId: string | null): UiSdlSite;

  readonly densityId?: string | null;
  withDensityId(densityId: string | null): UiSdlSite;

  readonly themeHiddenId?: string | null;
  withThemeHiddenId(themeHiddenId: string | null): UiSdlSite;

  readonly densityHiddenId?: string | null;
  withDensityHiddenId(densityHiddenId: string | null): UiSdlSite;

  readonly densityDataSpec?: UiSdlThemeContextDataSpec | null;
  withDensityDataSpec(densityDataSpec: IUiSdlThemeContextDataSpec | null): UiSdlSite;

  readonly styleDataSpec?: UiSdlThemeContextDataSpec | null;
  withStyleDataSpec(styleDataSpec: IUiSdlThemeContextDataSpec | null): UiSdlSite;

  readonly densityCollection?: C3.Array<UiSdlDensityTemplate | null>;
  withDensityCollection(densityCollection: C3.Array<UiSdlDensityTemplate | null> | Array<IUiSdlDensityTemplate | null>): UiSdlSite;

  readonly themeCollection?: C3.Array<UiSdlThemeTemplate | null>;
  withThemeCollection(themeCollection: C3.Array<UiSdlThemeTemplate | null> | Array<IUiSdlThemeTemplate | null>): UiSdlSite;

  readonly onlyAllowMatchingRoutes?: C3.Array<string | null>;
  withOnlyAllowMatchingRoutes(onlyAllowMatchingRoutes: C3.Array<string | null> | Array<string | null>): UiSdlSite;

  readonly webWorkers?: C3.Map<string | null, UiSdlWebWorker | null>;
  withWebWorkers(webWorkers: C3.Map<string | null, UiSdlWebWorker | null> | {[key: string | null]: IUiSdlWebWorker | null}): UiSdlSite;

  readonly useBrowserHistory?: boolean;
  withUseBrowserHistory(useBrowserHistory: boolean): UiSdlSite;

  readonly user?: User | null;
  withUser(user: IUser | null): UiSdlSite;

  readonly userContext?: UiSdlUserContext | null;
  withUserContext(userContext: IUiSdlUserContext | null): UiSdlSite;

  readonly configs?: C3.Map<string | null, any>;
  withConfigs(configs: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlSite;
}


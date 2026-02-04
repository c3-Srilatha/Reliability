export interface UiSdlRouterReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlRouterReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlRouterReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlRouterReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlRouterReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlRouterReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlRouterReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlRouterReact;

  readonly user?: UiSdlUserContext | null;
  withUser(user: IUiSdlUserContext | null): UiSdlRouterReact;

  readonly currentPath?: string | null;
  withCurrentPath(currentPath: string | null): UiSdlRouterReact;

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): UiSdlRouterReact;

  readonly history?: UiSdlHistory | null;
  withHistory(history: IUiSdlHistory | null): UiSdlRouterReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlRouterReact;

  readonly onlyAllowMatchingRoutes?: C3.Array<string | null>;
  withOnlyAllowMatchingRoutes(onlyAllowMatchingRoutes: C3.Array<string | null> | Array<string | null>): UiSdlRouterReact;
}


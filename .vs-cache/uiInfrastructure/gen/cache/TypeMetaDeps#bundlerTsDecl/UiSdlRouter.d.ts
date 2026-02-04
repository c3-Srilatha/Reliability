export interface UiSdlRouter {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlRouter;

  readonly id?: string | null;
  withId(id: string | null): UiSdlRouter;

  readonly name?: string | null;
  withName(name: string | null): UiSdlRouter;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlRouter;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlRouter;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlRouter;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlRouter;

  readonly user?: UiSdlUserContext | null;
  withUser(user: IUiSdlUserContext | null): UiSdlRouter;

  readonly currentPath?: string | null;
  withCurrentPath(currentPath: string | null): UiSdlRouter;

  readonly routes?: C3.Array<UiSdlRoute | null>;
  withRoutes(routes: C3.Array<UiSdlRoute | null> | Array<IUiSdlRoute | null>): UiSdlRouter;

  readonly history?: UiSdlHistory | null;
  withHistory(history: IUiSdlHistory | null): UiSdlRouter;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlRouter;

  readonly onlyAllowMatchingRoutes?: C3.Array<string | null>;
  withOnlyAllowMatchingRoutes(onlyAllowMatchingRoutes: C3.Array<string | null> | Array<string | null>): UiSdlRouter;
}


export interface UiSdlBreadcrumbs {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlBreadcrumbs;

  readonly id?: string | null;
  withId(id: string | null): UiSdlBreadcrumbs;

  readonly name?: string | null;
  withName(name: string | null): UiSdlBreadcrumbs;

  readonly dataSpec?: UiSdlBreadcrumbsDataSpec | null;
  withDataSpec(dataSpec: IUiSdlBreadcrumbsDataSpec | null): UiSdlBreadcrumbs;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlBreadcrumbs;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlBreadcrumbs;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlBreadcrumbs;

  readonly includeRootRoute?: boolean;
  withIncludeRootRoute(includeRootRoute: boolean): UiSdlBreadcrumbs;

  readonly disablePreviousButton?: boolean;
  withDisablePreviousButton(disablePreviousButton: boolean): UiSdlBreadcrumbs;

  readonly breadcrumbs?: C3.Array<UiSdlBreadcrumbsConfig | null>;
  withBreadcrumbs(breadcrumbs: C3.Array<UiSdlBreadcrumbsConfig | null> | Array<IUiSdlBreadcrumbsConfig | null>): UiSdlBreadcrumbs;

  readonly disableNextButton?: boolean;
  withDisableNextButton(disableNextButton: boolean): UiSdlBreadcrumbs;

  readonly renderNextAndPreviousButtons?: boolean;
  withRenderNextAndPreviousButtons(renderNextAndPreviousButtons: boolean): UiSdlBreadcrumbs;

  readonly internalRedirect?: boolean;
  withInternalRedirect(internalRedirect: boolean): UiSdlBreadcrumbs;

  readonly visibleLevels?: number | null;
  withVisibleLevels(visibleLevels: number | null): UiSdlBreadcrumbs;

  readonly dataCollection?: C3.Map<string | null, Obj | null>;
  withDataCollection(dataCollection: C3.Map<string | null, Obj | null> | {[key: string | null]: IObj | null}): UiSdlBreadcrumbs;
}


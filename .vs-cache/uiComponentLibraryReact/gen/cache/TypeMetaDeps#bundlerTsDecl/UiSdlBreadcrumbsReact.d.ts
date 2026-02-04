export interface UiSdlBreadcrumbsReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlBreadcrumbsReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlBreadcrumbsReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlBreadcrumbsReact;

  readonly dataSpec?: UiSdlBreadcrumbsDataSpec | null;
  withDataSpec(dataSpec: IUiSdlBreadcrumbsDataSpec | null): UiSdlBreadcrumbsReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlBreadcrumbsReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlBreadcrumbsReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlBreadcrumbsReact;

  readonly includeRootRoute?: boolean;
  withIncludeRootRoute(includeRootRoute: boolean): UiSdlBreadcrumbsReact;

  readonly disablePreviousButton?: boolean;
  withDisablePreviousButton(disablePreviousButton: boolean): UiSdlBreadcrumbsReact;

  readonly breadcrumbs?: C3.Array<UiSdlBreadcrumbsConfig | null>;
  withBreadcrumbs(breadcrumbs: C3.Array<UiSdlBreadcrumbsConfig | null> | Array<IUiSdlBreadcrumbsConfig | null>): UiSdlBreadcrumbsReact;

  readonly disableNextButton?: boolean;
  withDisableNextButton(disableNextButton: boolean): UiSdlBreadcrumbsReact;

  readonly renderNextAndPreviousButtons?: boolean;
  withRenderNextAndPreviousButtons(renderNextAndPreviousButtons: boolean): UiSdlBreadcrumbsReact;

  readonly internalRedirect?: boolean;
  withInternalRedirect(internalRedirect: boolean): UiSdlBreadcrumbsReact;

  readonly visibleLevels?: number | null;
  withVisibleLevels(visibleLevels: number | null): UiSdlBreadcrumbsReact;

  readonly dataCollection?: C3.Map<string | null, Obj | null>;
  withDataCollection(dataCollection: C3.Map<string | null, Obj | null> | {[key: string | null]: IObj | null}): UiSdlBreadcrumbsReact;
}


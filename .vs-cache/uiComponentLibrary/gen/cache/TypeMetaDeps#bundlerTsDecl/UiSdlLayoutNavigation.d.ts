export interface UiSdlLayoutNavigation {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutNavigation;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutNavigation;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutNavigation;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlLayoutNavigation;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutNavigation;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutNavigation;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutNavigation;

  readonly navigation?: UiSdlComponentRef<UiSdlNavMenu | null> | null;
  withNavigation(navigation: IUiSdlComponentRef<UiSdlNavMenu | null> | null): UiSdlLayoutNavigation;

  readonly content?: UiSdlComponentRef<UiSdlContentLayout | null> | null;
  withContent(content: IUiSdlComponentRef<UiSdlContentLayout | null> | null): UiSdlLayoutNavigation;

  readonly pageTitle?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withPageTitle(pageTitle: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlLayoutNavigation;

  readonly pageBreadcrumbs?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withPageBreadcrumbs(pageBreadcrumbs: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlLayoutNavigation;
}

